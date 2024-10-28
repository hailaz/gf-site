"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[27291],{269367:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>g});var o=e(474848),i=e(28453);const r={title:"\u65e5\u5fd7\u7ec4\u4ef6-\u6587\u4ef6\u76ee\u5f55",sidebar_position:2},l=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u6587\u4ef6\u76ee\u5f55",title:"\u65e5\u5fd7\u7ec4\u4ef6-\u6587\u4ef6\u76ee\u5f55",description:"\u65e5\u5fd7\u6587\u4ef6",source:"@site/versioned_docs/version-2.0.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/4-\u65e5\u5fd7\u7ec4\u4ef6/2-\u65e5\u5fd7\u7ec4\u4ef6-\u6587\u4ef6\u76ee\u5f55.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/4-\u65e5\u5fd7\u7ec4\u4ef6",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u6587\u4ef6\u76ee\u5f55",permalink:"/docs/2.0.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u6587\u4ef6\u76ee\u5f55",draft:!1,unlisted:!1,tags:[],version:"2.0.x",sidebarPosition:2,frontMatter:{title:"\u65e5\u5fd7\u7ec4\u4ef6-\u6587\u4ef6\u76ee\u5f55",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u5fd7\u7ec4\u4ef6-\u65e5\u5fd7\u7ea7\u522b",permalink:"/docs/2.0.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u65e5\u5fd7\u7ea7\u522b"},next:{title:"\u65e5\u5fd7\u7ec4\u4ef6-\u94fe\u5f0f\u64cd\u4f5c",permalink:"/docs/2.0.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u94fe\u5f0f\u64cd\u4f5c"}},s={},g=[{value:"\u65e5\u5fd7\u6587\u4ef6",id:"\u65e5\u5fd7\u6587\u4ef6",level:2},{value:"\u65e5\u5fd7\u76ee\u5f55",id:"\u65e5\u5fd7\u76ee\u5f55",level:2}];function d(n){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u65e5\u5fd7\u6587\u4ef6",children:"\u65e5\u5fd7\u6587\u4ef6"}),"\n",(0,o.jsxs)(t.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u65e5\u5fd7\u6587\u4ef6\u540d\u79f0\u4ee5\u5f53\u524d\u65f6\u95f4\u65e5\u671f\u547d\u540d\uff0c\u683c\u5f0f\u4e3a ",(0,o.jsx)(t.code,{children:"YYYY-MM-DD.log"}),"\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"SetFile"})," \u65b9\u6cd5\u6765\u8bbe\u7f6e\u6587\u4ef6\u540d\u79f0\u7684\u683c\u5f0f\uff0c\u5e76\u4e14\u6587\u4ef6\u540d\u79f0\u683c\u5f0f\u652f\u6301 ",(0,o.jsx)(t.a,{href:"output/goframe-v2.0-md/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/%E7%B3%BB%E7%BB%9F%E7%9B%B8%E5%85%B3/%E6%97%B6%E9%97%B4%E7%AE%A1%E7%90%86-gtime",children:"\u65f6\u95f4\u7ba1\u7406-gtime"}),"\xa0\u65f6\u95f4\u683c\u5f0f \u3002\u7b80\u5355\u793a\u4f8b\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'package main\n\nimport (\n\t"context"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gfile"\n\t"github.com/gogf/gf/v2/os/glog"\n)\n\n// \u8bbe\u7f6e\u65e5\u5fd7\u7b49\u7ea7\nfunc main() {\n\tctx := context.TODO()\n\tpath := "./glog"\n\tglog.SetPath(path)\n\tglog.SetStdoutPrint(false)\n\t// \u4f7f\u7528\u9ed8\u8ba4\u6587\u4ef6\u540d\u79f0\u683c\u5f0f\n\tglog.Print(ctx, "\u6807\u51c6\u6587\u4ef6\u540d\u79f0\u683c\u5f0f\uff0c\u4f7f\u7528\u5f53\u524d\u65f6\u95f4\u65f6\u671f")\n\t// \u901a\u8fc7SetFile\u8bbe\u7f6e\u6587\u4ef6\u540d\u79f0\u683c\u5f0f\n\tglog.SetFile("stdout.log")\n\tglog.Print(ctx, "\u8bbe\u7f6e\u65e5\u5fd7\u8f93\u51fa\u6587\u4ef6\u540d\u79f0\u683c\u5f0f\u4e3a\u540c\u4e00\u4e2a\u6587\u4ef6")\n\t// \u94fe\u5f0f\u64cd\u4f5c\u8bbe\u7f6e\u6587\u4ef6\u540d\u79f0\u683c\u5f0f\n\tglog.File("stderr.log").Print(ctx, "\u652f\u6301\u94fe\u5f0f\u64cd\u4f5c")\n\tglog.File("error-{Ymd}.log").Print(ctx, "\u6587\u4ef6\u540d\u79f0\u652f\u6301\u5e26gtime\u65e5\u671f\u683c\u5f0f")\n\tglog.File("access-{Ymd}.log").Print(ctx, "\u6587\u4ef6\u540d\u79f0\u652f\u6301\u5e26gtime\u65e5\u671f\u683c\u5f0f")\n\n\tlist, err := gfile.ScanDir(path, "*")\n\tg.Dump(err)\n\tg.Dump(list)\n}\n\n'})}),"\n",(0,o.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'<nil>\n[\n    "C:\\hailaz\\test\\glog\\2021-12-31.log",\n    "C:\\hailaz\\test\\glog\\access-20211231.log",\n    "C:\\hailaz\\test\\glog\\error-20211231.log",\n    "C:\\hailaz\\test\\glog\\stderr.log",\n    "C:\\hailaz\\test\\glog\\stdout.log",\n]\n'})}),"\n",(0,o.jsxs)(t.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6587\u4ef6\u540d\u79f0\u683c\u5f0f\u4e2d\u5982\u679c\u9700\u8981\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"gtime"})," \u65f6\u95f4\u683c\u5f0f\uff0c\u683c\u5f0f\u5185\u5bb9\u9700\u8981\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"{xxx}"})," \u5305\u542b\u8d77\u6765\u3002\u8be5\u793a\u4f8b\u4e2d\u4e5f\u4f7f\u7528\u5230\u4e86 ",(0,o.jsx)(t.code,{children:"\u94fe\u5f0f\u64cd\u4f5c"})," \u7684\u7279\u6027\uff0c\u5177\u4f53\u8bf7\u770b\u540e\u7eed\u8bf4\u660e\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u65e5\u5fd7\u76ee\u5f55",children:"\u65e5\u5fd7\u76ee\u5f55"}),"\n",(0,o.jsxs)(t.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c ",(0,o.jsx)(t.code,{children:"glog"})," \u5c06\u4f1a\u8f93\u51fa\u65e5\u5fd7\u5185\u5bb9\u5230\u6807\u51c6\u8f93\u51fa\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"SetPath"})," \u65b9\u6cd5\u8bbe\u7f6e\u65e5\u5fd7\u8f93\u51fa\u7684\u76ee\u5f55\u8def\u5f84\uff0c\u8fd9\u6837\u65e5\u5fd7\u5185\u5bb9\u5c06\u4f1a\u5199\u5165\u5230\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff0c\u5e76\u4e14\u7531\u4e8e\u5176\u5185\u90e8\u4f7f\u7528\u4e86 ",(0,o.jsx)(t.code,{children:"gfpool"})," \u6587\u4ef6\u6307\u9488\u6c60\uff0c\u6587\u4ef6\u5199\u5165\u7684\u6548\u7387\u76f8\u5f53\u4f18\u79c0\u3002\u7b80\u5355\u793a\u4f8b\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'package main\n\nimport (\n\t"context"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gfile"\n\t"github.com/gogf/gf/v2/os/glog"\n)\n\n// \u8bbe\u7f6e\u65e5\u5fd7\u7b49\u7ea7\nfunc main() {\n\tctx := context.TODO()\n\tpath := "./glog"\n\tglog.SetPath(path)\n\tglog.Print(ctx, "\u65e5\u5fd7\u5185\u5bb9")\n\tlist, err := gfile.ScanDir(path, "*")\n\tg.Dump(err)\n\tg.Dump(list)\n}\n\n'})}),"\n",(0,o.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u5185\u5bb9\u4e3a\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'2021-12-31 11:32:16.742 \u65e5\u5fd7\u5185\u5bb9\n<nil>\n[\n    "C:\\hailaz\\test\\glog\\2021-12-31.log",\n]\n'})}),"\n",(0,o.jsxs)(t.p,{children:["\u5f53\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"SetPath"})," \u8bbe\u7f6e\u65e5\u5fd7\u7684\u8f93\u51fa\u76ee\u5f55\uff0c\u5982\u679c\u76ee\u5f55\u4e0d\u5b58\u5728\u65f6\uff0c\u5c06\u4f1a\u9012\u5f52\u521b\u5efa\u8be5\u76ee\u5f55\u8def\u5f84\u3002\u53ef\u4ee5\u770b\u5230\uff0c\u6267\u884c ",(0,o.jsx)(t.code,{children:"Println"})," \u4e4b\u540e\uff0c\u5728 ",(0,o.jsx)(t.code,{children:"/tmp"})," \u4e0b\u521b\u5efa\u4e86\u65e5\u5fd7\u76ee\u5f55 ",(0,o.jsx)(t.code,{children:"glog"}),"\uff0c\u5e76\u4e14\u5728\u5176\u4e0b\u751f\u6210\u4e86\u65e5\u5fd7\u6587\u4ef6\u3002\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u770b\u89c1\u65e5\u5fd7\u5185\u5bb9\u4e0d\u4ec5\u8f93\u51fa\u5230\u4e86\u6587\u4ef6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e5f\u8f93\u51fa\u5230\u4e86\u7ec8\u7aef\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"SetStdoutPrint(false)"})," \u65b9\u6cd5\u6765\u5173\u95ed\u7ec8\u7aef\u7684\u65e5\u5fd7\u8f93\u51fa\uff0c\u8fd9\u6837\u65e5\u5fd7\u5185\u5bb9\u4ec5\u4f1a\u8f93\u51fa\u5230\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002"]})]})}function a(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>l,x:()=>c});var o=e(296540);const i={},r=o.createContext(i);function l(n){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),o.createElement(r.Provider,{value:t},n.children)}}}]);