"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[576],{413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(5893),i=t(1151);const o={sidebar_position:6},r="Contributing",a={id:"contributing",title:"Contributing",description:"Contributions to Gilt are very welcome, but we ask that you read this document",source:"@site/versioned_docs/version-2.0/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/go-gilt/contributing",draft:!1,unlisted:!1,tags:[],version:"2.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Testing",permalink:"/go-gilt/testing"}},c={},d=[{value:"Before you start",id:"before-you-start",level:2},{value:"1. Setup",id:"1-setup",level:2},{value:"2. Making changes",id:"2-making-changes",level:2},{value:"Running your changes",id:"running-your-changes",level:3},{value:"Updating documentation",id:"updating-documentation",level:3},{value:"Writing tests",id:"writing-tests",level:3},{value:"3. Committing your code",id:"3-committing-your-code",level:2},{value:"4. Submitting a PR",id:"4-submitting-a-pr",level:2},{value:"FAQ",id:"faq",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"contributing",children:"Contributing"}),"\n",(0,s.jsx)(n.p,{children:"Contributions to Gilt are very welcome, but we ask that you read this document\nbefore submitting a PR."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This document applies to the ",(0,s.jsx)(n.a,{href:"https://github.com/retr0h/go-gilt",children:"Gilt"})," repository."]})}),"\n",(0,s.jsx)(n.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Check existing work"})," - Is there an existing PR? Are there issues discussing\nthe feature/change you want to make? Please make sure you consider/address\nthese discussions in your work."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Backwards compatibility"})," - Will your change break existing Giltfiles? It is\nmuch more likely that your change will merged if it backwards compatible. Is\nthere an approach you can take that maintains this compatibility? If not,\nconsider opening an issue first so that API changes can be discussed before\nyou invest your time into a PR."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"1-setup",children:"1. Setup"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Go"})," - Gilt is written in ",(0,s.jsx)(n.a,{href:"https://go.dev",children:"Go"}),". We always support the latest two major Go\nversions, so make sure your version is recent enough."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node.js"})," - ",(0,s.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js"})," is used to host Gilt's documentation server and is\nrequired if you want to run this server locally."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-making-changes",children:"2. Making changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Code style"})," - Try to maintain the existing code style where possible. Go\ncode should be formatted by ",(0,s.jsx)(n.a,{href:"https://github.com/mvdan/gofumpt",children:(0,s.jsx)(n.code,{children:"gofumpt"})})," and linted using\n",(0,s.jsx)(n.a,{href:"https://golangci-lint.run",children:(0,s.jsx)(n.code,{children:"golangci-lint"})}),". Any Markdown or TypeScript files should be\nformatted and linted by ",(0,s.jsx)(n.a,{href:"https://prettier.io/",children:"Prettier"}),". This style is enforced by our CI to\nensure that we have a consistent style across the project. You can use the\n",(0,s.jsx)(n.code,{children:"task fmt:check"})," command to lint the code locally and the ",(0,s.jsx)(n.code,{children:"task fmt"})," command\nto automatically fix any issues that are found."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Documentation"})," - Ensure that you add/update any relevant documentation. See\nthe ",(0,s.jsx)(n.a,{href:"#updating-documentation",children:"updating documentation"})," section below."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Tests"})," - Ensure that you add/update any relevant tests and that all tests\nare passing before submitting the PR. See the ",(0,s.jsx)(n.a,{href:"#writing-tests",children:"writing tests"}),"\nsection below."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"running-your-changes",children:"Running your changes"}),"\n",(0,s.jsxs)(n.p,{children:["To run Gilt with working changes, you can use ",(0,s.jsx)(n.code,{children:"go run main.go overlay"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"updating-documentation",children:"Updating documentation"}),"\n",(0,s.jsxs)(n.p,{children:["Gilt uses ",(0,s.jsx)(n.a,{href:"https://docusaurus.io",children:"Docusaurus"})," to host a documentation server. The code for this is\nlocated in the Gilt repository. This can be setup and run locally by using\n",(0,s.jsx)(n.code,{children:"task docs:start"})," (requires ",(0,s.jsx)(n.code,{children:"nodejs"})," & ",(0,s.jsx)(n.code,{children:"yarn"}),"). All content is written in\nMarkdown and is located in the ",(0,s.jsx)(n.code,{children:"docs/docs"})," directory. All Markdown documents\nshould have an 80 character line wrap limit (enforced by Prettier)."]}),"\n",(0,s.jsx)(n.h3,{id:"writing-tests",children:"Writing tests"}),"\n",(0,s.jsx)(n.p,{children:"When making a changes, consider whether new tests are required. These tests\nshould ensure that the functionality you are adding will continue to work in the\nfuture. Existing tests may also need updating if you have changed Gilt's\nbehavior."}),"\n",(0,s.jsxs)(n.p,{children:["You may also consider adding unit tests for any new functions you have added.\nThe unit tests should follow the Go convention of being location in a file named\n",(0,s.jsx)(n.code,{children:"*_test.go"})," in the same package as the code being tested."]}),"\n",(0,s.jsxs)(n.p,{children:["Integration tests are located in the ",(0,s.jsx)(n.code,{children:"tests"})," directory and executed by ",(0,s.jsx)(n.a,{href:"https://github.com/bats-core/bats-core",children:"Bats"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"3-committing-your-code",children:"3. Committing your code"}),"\n",(0,s.jsx)(n.p,{children:"Try to write meaningful commit messages and avoid having too many commits on the\nPR. Most PRs should likely have a single commit (although for bigger PRs it may\nbe reasonable to split it in a few). Git squash and rebase is your friend!"}),"\n",(0,s.jsxs)(n.p,{children:["If you're not sure how to format your commit message, check out ",(0,s.jsx)(n.a,{href:"https://www.conventionalcommits.org",children:"Conventional\nCommits"}),". This style is enforced, and is a good way to make your commit\nmessages more readable and consistent."]}),"\n",(0,s.jsx)(n.h2,{id:"4-submitting-a-pr",children:"4. Submitting a PR"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Describe your changes"})," - Ensure that you provide a comprehensive\ndescription of your changes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Issue/PR links"})," - Link any previous work such as related issues or PRs.\nPlease describe how your changes differ to/extend this work."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Examples"})," - Add any examples or screenshots that you think are useful to\ndemonstrate the effect of your changes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Draft PRs"})," - If your changes are incomplete, but you would like to discuss\nthem, open the PR as a draft and add a comment to start a discussion. Using\ncomments rather than the PR description allows the description to be updated\nlater while preserving any discussions."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"I want to contribute, where do I start?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"All kinds of contributions are welcome, whether its a typo fix or a shiny new\nfeature. You can also contribute by upvoting/commenting on issues or helping to\nanswer questions."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"I'm stuck, where can I get help?"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you have questions, feel free open a ",(0,s.jsx)(n.a,{href:"https://github.com/retr0h/go-gilt/discussions",children:"Discussion"})," on GitHub."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);