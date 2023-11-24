// Copyright (c) 2023 John Dewey

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

package exec_test

import (
	"log/slog"
	"os"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/suite"

	"github.com/retr0h/go-gilt/internal"
	"github.com/retr0h/go-gilt/internal/exec"
)

type ExecManagerPublicTestSuite struct {
	suite.Suite
}

func (suite *ExecManagerPublicTestSuite) NewTestExecManager(
	debug bool,
) internal.ExecManager {
	return exec.New(
		debug,
		slog.New(slog.NewTextHandler(os.Stdout, &slog.HandlerOptions{
			Level: slog.LevelDebug,
		})),
	)
}

func (suite *ExecManagerPublicTestSuite) TestRunCmdOk() {
	em := suite.NewTestExecManager(false)

	err := em.RunCmd("ls", []string{})
	assert.NoError(suite.T(), err)
}

func (suite *ExecManagerPublicTestSuite) TestRunCmdWithDebug() {
	suite.T().Skip("cannot seem to capture Stdout when logging in em")

	em := suite.NewTestExecManager(true)

	err := em.RunCmd("echo", []string{"-n", "foo"})
	assert.NoError(suite.T(), err)
}

func (suite *ExecManagerPublicTestSuite) TestRunCmdReturnsError() {
	em := suite.NewTestExecManager(false)

	err := em.RunCmd("invalid", []string{"foo"})
	assert.Error(suite.T(), err)
	assert.Contains(suite.T(), err.Error(), "not found")
}

// In order for `go test` to run this suite, we need to create
// a normal test function and pass our suite to suite.Run.
func TestExecPublicTestSuite(t *testing.T) {
	suite.Run(t, new(ExecManagerPublicTestSuite))
}
