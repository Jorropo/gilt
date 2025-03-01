// Copyright (c) 2018 John Dewey

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

package repository

import (
	"fmt"
	"log/slog"
	"os"
	"path/filepath"
	"strings"

	"github.com/spf13/afero"

	"github.com/retr0h/gilt/internal"
	"github.com/retr0h/gilt/pkg/config"
)

// We'll use this to normalize Git URLs as "safe" filenames
var replacer = strings.NewReplacer("/", "-", ":", "-")

// New factory to create a new Repository instance.
func New(
	appFs afero.Fs,
	copyManager CopyManager,
	gitManager internal.GitManager,
	logger *slog.Logger,
) *Repository {
	return &Repository{
		appFs:       appFs,
		copyManager: copyManager,
		gitManager:  gitManager,
		logger:      logger,
	}
}

// Clone Repository.Git under Repository.getCloneDir
func (r *Repository) Clone(
	c config.Repository,
	cloneDir string,
) (string, error) {
	targetDir := filepath.Join(cloneDir, replacer.Replace(c.Git))
	r.logger.Info(
		"cloning",
		slog.String("repository", c.Git),
		slog.String("dstDir", targetDir),
	)

	if _, err := r.appFs.Stat(targetDir); os.IsNotExist(err) {
		if err := r.gitManager.Clone(c.Git, targetDir); err != nil {
			return targetDir, err
		}
	} else {
		r.logger.Info("clone already exists", slog.String("dstDir", targetDir))
		if err := r.gitManager.Update(targetDir); err != nil {
			return targetDir, err
		}
	}

	return targetDir, nil
}

// Worktree create a git workingtree at the given version in Repository.DstDir.
func (r *Repository) Worktree(
	c config.Repository,
	cloneDir string,
	targetDir string,
) error {
	return r.gitManager.Worktree(cloneDir, c.Version, targetDir)
}

// CopySources copy Repository.Src to Repository.DstFile or Repository.DstDir.
func (r *Repository) CopySources(
	c config.Repository,
	cloneDir string,
) error {
	r.logger.Debug("copy", slog.String("origin", cloneDir))
	for _, source := range c.Sources {
		cloneDirWithSrcPath := filepath.Join(cloneDir, source.Src) // join clone dir with head
		globbedSrc, err := afero.Glob(r.appFs, cloneDirWithSrcPath)
		if err != nil {
			return err
		}

		for _, src := range globbedSrc {
			// The source is a file
			if info, err := r.appFs.Stat(src); err == nil && info.Mode().IsRegular() {
				// ... and the dst is declared a directory
				if source.DstFile != "" {
					if err := r.copyManager.CopyFile(src, source.DstFile); err != nil {
						return err
					}
				} else if source.DstDir != "" {
					// ... and create the dst directory
					if err := r.appFs.MkdirAll(source.DstDir, 0o755); err != nil {
						return fmt.Errorf("unable to create dest dir: %s", err)
					}
					srcBaseFile := filepath.Base(src)
					newDst := filepath.Join(source.DstDir, srcBaseFile)
					if err := r.copyManager.CopyFile(src, newDst); err != nil {
						return err
					}
				}
				// The source is a directory
			} else if info, err := r.appFs.Stat(src); err == nil && info.Mode().IsDir() {
				// ... and dst dir exists
				if info, err := r.appFs.Stat(source.DstDir); err == nil && info.Mode().IsDir() {
					if err := r.appFs.RemoveAll(source.DstDir); err != nil {
						return err
					}
				}
				if err := r.copyManager.CopyDir(src, source.DstDir); err != nil {
					return err
				}
			}
		}
	}

	return nil
}
