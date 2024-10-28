"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[38943],{759440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var d=t(474848),c=t(28453);const r={title:"\u65e5\u5fd7\u7ec4\u4ef6-Context",sidebar_position:5},s=void 0,o={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Context",title:"\u65e5\u5fd7\u7ec4\u4ef6-Context",description:"\u4ece v2 \u7248\u672c\u5f00\u59cb\uff0c glog \u7ec4\u4ef6\u5c06 ctx \u4e0a\u4e0b\u6587\u53d8\u91cf\u4f5c\u4e3a\u65e5\u5fd7\u6253\u5370\u7684\u5fc5\u9700\u53c2\u6570\u3002",source:"@site/versioned_docs/version-2.1.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/4-\u65e5\u5fd7\u7ec4\u4ef6/5-\u65e5\u5fd7\u7ec4\u4ef6-Context.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/4-\u65e5\u5fd7\u7ec4\u4ef6",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Context",permalink:"/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Context",draft:!1,unlisted:!1,tags:[],version:"2.1.x",sidebarPosition:5,frontMatter:{title:"\u65e5\u5fd7\u7ec4\u4ef6-Context",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u5fd7\u7ec4\u4ef6-\u989c\u8272\u6253\u5370",permalink:"/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u989c\u8272\u6253\u5370"},next:{title:"\u65e5\u5fd7\u7ec4\u4ef6-Handler",permalink:"/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Handler"}},i={},l=[{value:"\u81ea\u5b9a\u4e49 <code>CtxKeys</code>",id:"\u81ea\u5b9a\u4e49-ctxkeys",level:2},{value:"\u4f7f\u7528\u914d\u7f6e",id:"\u4f7f\u7528\u914d\u7f6e",level:3},{value:"\u65e5\u5fd7\u8f93\u51fa",id:"\u65e5\u5fd7\u8f93\u51fa",level:3},{value:"\u65e5\u5fd7\u793a\u4f8b",id:"\u65e5\u5fd7\u793a\u4f8b",level:3},{value:"\u4f20\u9012\u7ed9 <code>Handler</code>",id:"\u4f20\u9012\u7ed9-handler",level:2},{value:"\u94fe\u8def\u8ddf\u8e2a\u652f\u6301",id:"\u94fe\u8def\u8ddf\u8e2a\u652f\u6301",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["\u4ece ",(0,d.jsx)(n.code,{children:"v2"})," \u7248\u672c\u5f00\u59cb\uff0c ",(0,d.jsx)(n.code,{children:"glog"})," \u7ec4\u4ef6\u5c06 ",(0,d.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u4f5c\u4e3a\u65e5\u5fd7\u6253\u5370\u7684\u5fc5\u9700\u53c2\u6570\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"\u81ea\u5b9a\u4e49-ctxkeys",children:["\u81ea\u5b9a\u4e49 ",(0,d.jsx)(n.code,{children:"CtxKeys"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u65e5\u5fd7\u7ec4\u4ef6\u652f\u6301\u81ea\u5b9a\u4e49\u7684\u952e\u503c\u6253\u5370\uff0c\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u4e2d\u8bfb\u53d6\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u4f7f\u7528\u914d\u7f6e",children:"\u4f7f\u7528\u914d\u7f6e"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'# \u65e5\u5fd7\u7ec4\u4ef6\u914d\u7f6e\nlogger:\n  Path:    "/var/log/my-app"\n  Level:   "all"\n  Stdout:  false\n  CtxKeys: ["RequestId"]\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,d.jsx)(n.code,{children:"CtxKeys"})," \u7528\u4e8e\u914d\u7f6e\u9700\u8981\u4ece ",(0,d.jsx)(n.code,{children:"context.Context"})," \u63a5\u53e3\u5bf9\u8c61\u4e2d\u8bfb\u53d6\u5e76\u8f93\u51fa\u7684\u952e\u540d\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u65e5\u5fd7\u8f93\u51fa",children:"\u65e5\u5fd7\u8f93\u51fa"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u8f93\u51fa\u65e5\u5fd7\u7684\u65f6\u5019\uff0c\u9700\u8981\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"Ctx"})," \u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\u6307\u5b9a\u8f93\u51fa\u7684 ",(0,d.jsx)(n.code,{children:"context.Context"})," \u63a5\u53e3\u5bf9\u8c61\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'ctx := context.WithValue(context.Background(), "RequestId", "123456789")\ng.Log().Error(ctx,"runtime error")\n\n// May Output:\n// 2020-06-08 20:17:03.630 [ERRO] {123456789} runtime error\n// Stack:\n// ...\n'})}),"\n",(0,d.jsx)(n.h3,{id:"\u65e5\u5fd7\u793a\u4f8b",children:"\u65e5\u5fd7\u793a\u4f8b"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(549637).A+"",width:"2800",height:"538"})}),"\n",(0,d.jsxs)(n.h2,{id:"\u4f20\u9012\u7ed9-handler",children:["\u4f20\u9012\u7ed9 ",(0,d.jsx)(n.code,{children:"Handler"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u4e86\u65e5\u5fd7\u5bf9\u8c61\u7684 ",(0,d.jsx)(n.code,{children:"Handler"}),"\uff0c\u90a3\u4e48\u6bcf\u4e2a\u65e5\u5fd7\u6253\u5370\u4f20\u9012\u7684ctx\u4e0a\u4e0b\u6587\u53d8\u91cf\u5c06\u4f1a\u4f20\u9012\u7ed9 ",(0,d.jsx)(n.code,{children:"Handler"})," \u4e2d\u3002\u5173\u4e8e\u65e5\u5fd7 ",(0,d.jsx)(n.code,{children:"Handler"})," \u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,d.jsx)(n.a,{href:"output/goframe-v2.1-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6-Handler",children:"\u65e5\u5fd7\u7ec4\u4ef6-Handler"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u94fe\u8def\u8ddf\u8e2a\u652f\u6301",children:"\u94fe\u8def\u8ddf\u8e2a\u652f\u6301"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"glog"})," \u7ec4\u4ef6\u652f\u6301 ",(0,d.jsx)(n.code,{children:"OpenTelemetry"})," \u6807\u51c6\u7684\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\uff0c\u8be5\u652f\u6301\u662f\u5185\u7f6e\u7684\uff0c\u65e0\u9700\u5f00\u53d1\u8005\u505a\u4efb\u4f55\u8bbe\u7f6e\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,d.jsx)(n.a,{href:"output/goframe-v2.1-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA",children:"\u94fe\u8def\u8ddf\u8e2a"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(38001).A+"",width:"2450",height:"894"})})]})}function x(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},38001:(e,n,t)=>{t.d(n,{A:()=>d});const d=t.p+"assets/images/2abb21a4e3b46f63000b653b7ddd4dda-c66cb4f4b992630587c97e5617457a96.png"},549637:(e,n,t)=>{t.d(n,{A:()=>d});const d=t.p+"assets/images/9deec0980a60e38d7adbb2a20242ec4e-6f8721f1bdf36091bb8ab5eac0bcba1a.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var d=t(296540);const c={},r=d.createContext(c);function s(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);