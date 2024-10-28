"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[12028],{656972:(o,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var e=r(474848),g=r(28453);const c={title:"\u65e5\u5fd7\u7ec4\u4ef6-Stack\u7279\u6027",sidebar_position:4},t=void 0,s={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u9ad8\u7ea7\u7279\u6027/\u65e5\u5fd7\u7ec4\u4ef6-Stack\u7279\u6027",title:"\u65e5\u5fd7\u7ec4\u4ef6-Stack\u7279\u6027",description:"\u9519\u8bef\u65e5\u5fd7\u4fe1\u606f\u652f\u6301 stack \u7279\u6027\uff0c\u8be5\u7279\u6027\u53ef\u4ee5\u81ea\u52a8\u6253\u5370\u51fa\u5f53\u524d\u8c03\u7528\u65e5\u5fd7\u7ec4\u4ef6\u65b9\u6cd5\u7684\u5806\u6808\u4fe1\u606f\uff0c\u8be5\u5806\u6808\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7 Notice/Warning/Error/Critical/Panic/Fatal \u7b49\u9519\u8bef\u65e5\u5fd7\u8f93\u51fa\u65b9\u6cd5\u89e6\u53d1\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 GetStack/PrintStack \u83b7\u53d6/\u6253\u5370\u3002\u9519\u8bef\u4fe1\u606f\u7684 stack \u4fe1\u606f\u5bf9\u4e8e\u8c03\u8bd5\u6765\u8bf4\u76f8\u5f53\u6709\u7528\u3002",source:"@site/versioned_docs/version-1.16.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/5-\u65e5\u5fd7\u7ec4\u4ef6/4-\u65e5\u5fd7\u7ec4\u4ef6-\u9ad8\u7ea7\u7279\u6027/4-\u65e5\u5fd7\u7ec4\u4ef6-Stack\u7279\u6027.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/5-\u65e5\u5fd7\u7ec4\u4ef6/4-\u65e5\u5fd7\u7ec4\u4ef6-\u9ad8\u7ea7\u7279\u6027",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u9ad8\u7ea7\u7279\u6027/\u65e5\u5fd7\u7ec4\u4ef6-Stack\u7279\u6027",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u9ad8\u7ea7\u7279\u6027/\u65e5\u5fd7\u7ec4\u4ef6-Stack\u7279\u6027",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/5-\u65e5\u5fd7\u7ec4\u4ef6/4-\u65e5\u5fd7\u7ec4\u4ef6-\u9ad8\u7ea7\u7279\u6027/4-\u65e5\u5fd7\u7ec4\u4ef6-Stack\u7279\u6027.md",tags:[],version:"1.16.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:4,frontMatter:{title:"\u65e5\u5fd7\u7ec4\u4ef6-Stack\u7279\u6027",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u5fd7\u7ec4\u4ef6-Flags\u7279\u6027",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u9ad8\u7ea7\u7279\u6027/\u65e5\u5fd7\u7ec4\u4ef6-Flags\u7279\u6027"},next:{title:"\u65e5\u5fd7\u7ec4\u4ef6-Debug\u7279\u6027",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u9ad8\u7ea7\u7279\u6027/\u65e5\u5fd7\u7ec4\u4ef6-Debug\u7279\u6027"}},i={},a=[{value:"\u793a\u4f8b1\uff0c\u901a\u8fc7\u9519\u8bef\u65b9\u6cd5\u89e6\u53d1",id:"\u793a\u4f8b1\u901a\u8fc7\u9519\u8bef\u65b9\u6cd5\u89e6\u53d1",level:3},{value:"\u793a\u4f8b2\uff0c\u901a\u8fc7 <code>Stack</code> \u65b9\u6cd5\u6253\u5370",id:"\u793a\u4f8b2\u901a\u8fc7-stack-\u65b9\u6cd5\u6253\u5370",level:3},{value:"\u793a\u4f8b3\uff0c\u6253\u5370 <code>gerror.Error</code>",id:"\u793a\u4f8b3\u6253\u5370-gerrorerror",level:3}];function l(o){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,g.R)(),...o.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.p,{children:["\u9519\u8bef\u65e5\u5fd7\u4fe1\u606f\u652f\u6301 ",(0,e.jsx)(n.code,{children:"stack"})," \u7279\u6027\uff0c\u8be5\u7279\u6027\u53ef\u4ee5\u81ea\u52a8\u6253\u5370\u51fa\u5f53\u524d\u8c03\u7528\u65e5\u5fd7\u7ec4\u4ef6\u65b9\u6cd5\u7684\u5806\u6808\u4fe1\u606f\uff0c\u8be5\u5806\u6808\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7 ",(0,e.jsx)(n.code,{children:"Notice*/Warning*/Error*/Critical*/Panic*/Fatal*"})," \u7b49\u9519\u8bef\u65e5\u5fd7\u8f93\u51fa\u65b9\u6cd5\u89e6\u53d1\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,e.jsx)(n.code,{children:"GetStack/PrintStack"})," \u83b7\u53d6/\u6253\u5370\u3002\u9519\u8bef\u4fe1\u606f\u7684 ",(0,e.jsx)(n.code,{children:"stack"})," \u4fe1\u606f\u5bf9\u4e8e\u8c03\u8bd5\u6765\u8bf4\u76f8\u5f53\u6709\u7528\u3002"]}),"\n",(0,e.jsx)(n.h3,{id:"\u793a\u4f8b1\u901a\u8fc7\u9519\u8bef\u65b9\u6cd5\u89e6\u53d1",children:"\u793a\u4f8b1\uff0c\u901a\u8fc7\u9519\u8bef\u65b9\u6cd5\u89e6\u53d1"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-go",children:'package main\n\nimport "github.com/gogf/gf/os/glog"\n\nfunc Test() {\n\tglog.Error("This is error!")\n}\n\nfunc main() {\n\tTest()\n}\n\n'})}),"\n",(0,e.jsx)(n.p,{children:"\u6253\u5370\u51fa\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-html",children:"2019-07-12 22:19:23.421 [ERRO] This is error!\nStack:\n1. main.Test\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/geg/os/glog/glog_error.go:6\n2. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/geg/os/glog/glog_error.go:10\n\n"})}),"\n",(0,e.jsxs)(n.h3,{id:"\u793a\u4f8b2\u901a\u8fc7-stack-\u65b9\u6cd5\u6253\u5370",children:["\u793a\u4f8b2\uff0c\u901a\u8fc7 ",(0,e.jsx)(n.code,{children:"Stack"})," \u65b9\u6cd5\u6253\u5370"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\n\t"github.com/gogf/gf/os/glog"\n)\n\nfunc main() {\n\n\tglog.PrintStack()\n\tglog.New().PrintStack()\n\n\tfmt.Println(glog.GetStack())\n\tfmt.Println(glog.New().GetStack())\n}\n\n'})}),"\n",(0,e.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-html",children:"2019-07-12 22:20:28.070 Stack:\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/geg/os/glog/glog_stack.go:11\n\n2019-07-12 22:20:28.070 Stack:\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/geg/os/glog/glog_stack.go:12\n\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/geg/os/glog/glog_stack.go:14\n\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/geg/os/glog/glog_stack.go:15\n\n"})}),"\n",(0,e.jsxs)(n.h3,{id:"\u793a\u4f8b3\u6253\u5370-gerrorerror",children:["\u793a\u4f8b3\uff0c\u6253\u5370 ",(0,e.jsx)(n.code,{children:"gerror.Error"})]}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"glog"})," \u65e5\u5fd7\u6a21\u5757\u652f\u6301\u5bf9\u6807\u51c6\u9519\u8bef\u4ee5\u53ca ",(0,e.jsx)(n.code,{children:"gerror"})," \u9519\u8bef\u7684\u5806\u6808\u6253\u5370\u652f\u6301\u3002"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"errors"\n\t"github.com/gogf/gf/errors/gerror"\n\t"github.com/gogf/gf/os/glog"\n)\n\nfunc MakeError() error {\n\treturn errors.New("connection closed with normal error")\n}\n\nfunc MakeGError() error {\n\treturn gerror.New("connection closed with gerror")\n}\n\nfunc TestGError() {\n\terr1 := MakeError()\n\terr2 := MakeGError()\n\tglog.Error(err1)\n\tglog.Error(err2)\n}\n\nfunc main() {\n\tTestGError()\n}\n\n'})}),"\n",(0,e.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-html",children:"2019-07-12 22:23:11.467 [ERRO] connection closed with normal error\nStack:\n1. main.TestGError\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/geg/os/glog/glog_gerror.go:20\n2. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/geg/os/glog/glog_gerror.go:25\n\n2019-07-12 22:23:11.467 [ERRO] connection closed with gerror\n1. connection closed with gerror\n    1). main.MakeGError\n        /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/geg/os/glog/glog_gerror.go:14\n    2). main.TestGError\n        /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/geg/os/glog/glog_gerror.go:19\n    3). main.main\n        /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/geg/os/glog/glog_gerror.go:25\nStack:\n1. main.TestGError\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/geg/os/glog/glog_gerror.go:21\n2. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/geg/os/glog/glog_gerror.go:25\n\n"})})]})}function h(o={}){const{wrapper:n}={...(0,g.R)(),...o.components};return n?(0,e.jsx)(n,{...o,children:(0,e.jsx)(l,{...o})}):l(o)}},28453:(o,n,r)=>{r.d(n,{R:()=>t,x:()=>s});var e=r(296540);const g={},c=e.createContext(g);function t(o){const n=e.useContext(c);return e.useMemo((function(){return"function"==typeof o?o(n):{...n,...o}}),[n,o])}function s(o){let n;return n=o.disableParentContext?"function"==typeof o.components?o.components(g):o.components||g:t(o.components),e.createElement(c.Provider,{value:n},o.children)}}}]);