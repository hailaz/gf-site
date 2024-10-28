"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[41147],{486299:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>g,toc:()=>d});var i=e(474848),o=e(28453);const c={title:"\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528",sidebar_position:0},r=void 0,g={id:"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer/\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528",title:"\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528",description:"\u57fa\u672c\u793a\u4f8b",source:"@site/versioned_docs/version-2.0.x/2-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/0-\u5b9a\u65f6\u5668-gtimer/0-\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528.md",sourceDirName:"2-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/0-\u5b9a\u65f6\u5668-gtimer",slug:"/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer/\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/2.0.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer/\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/2-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/0-\u5b9a\u65f6\u5668-gtimer/0-\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528.md",tags:[],version:"2.0.x",sidebarPosition:0,frontMatter:{title:"\u5b9a\u65f6\u5668-\u57fa\u672c\u4f7f\u7528",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u5b9a\u65f6\u5668-gtimer",permalink:"/gf-site/docs/2.0.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer/"},next:{title:"\u5b9a\u65f6\u5668-\u6027\u80fd\u6d4b\u8bd5",permalink:"/gf-site/docs/2.0.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u5668-gtimer/\u5b9a\u65f6\u5668-\u6027\u80fd\u6d4b\u8bd5"}},s={},d=[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u5355\u4f8b\u4efb\u52a1",id:"\u5355\u4f8b\u4efb\u52a1",level:2},{value:"\u5ef6\u8fdf\u4efb\u52a1",id:"\u5ef6\u8fdf\u4efb\u52a1",level:2},{value:"<code>SetTimeout</code> \u4e0e <code>SetInterval</code>",id:"settimeout-\u4e0e-setinterval",level:2},{value:"<code>Exit</code> \u9000\u51fa",id:"exit-\u9000\u51fa",level:2}];function m(t){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/gtime"\n\t"github.com/gogf/gf/v2/os/gtimer"\n\t"time"\n)\n\nfunc main() {\n\tvar (\n\t\tctx = gctx.New()\n\t\tnow = time.Now()\n\t)\n\tgtimer.AddTimes(ctx, time.Second, 10, func(ctx context.Context) {\n\t\tfmt.Println(gtime.Now(), time.Duration(time.Now().UnixNano()-now.UnixNano()))\n\t\tnow = time.Now()\n\t})\n\n\tselect {}\n}\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"2021-05-27 13:28:19 1.004516s\n2021-05-27 13:28:20 997.262ms\n2021-05-27 13:28:21 999.972ms\n2021-05-27 13:28:22 1.00112s\n2021-05-27 13:28:23 998.773ms\n2021-05-27 13:28:24 999.957ms\n2021-05-27 13:28:25 1.002468s\n2021-05-27 13:28:26 997.468ms\n2021-05-27 13:28:27 999.981ms\n2021-05-27 13:28:28 1.002504s\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5355\u4f8b\u4efb\u52a1",children:"\u5355\u4f8b\u4efb\u52a1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package main\n\nimport (\n\t"context"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/glog"\n\t"github.com/gogf/gf/v2/os/gtimer"\n\t"time"\n)\n\nfunc main() {\n\tvar (\n\t\tctx      = gctx.New()\n\t\tinterval = time.Second\n\t)\n\n\tgtimer.AddSingleton(ctx, interval, func(ctx context.Context) {\n\t\tglog.Print(ctx, "doing")\n\t\ttime.Sleep(5 * time.Second)\n\t})\n\n\tselect {}\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"2021-11-14 11:50:42.192 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n2021-11-14 11:50:48.190 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n2021-11-14 11:50:54.192 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n2021-11-14 11:51:00.189 {189cwi9mo40cfp73guzhugo100tnuedg} doing\n...\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5ef6\u8fdf\u4efb\u52a1",children:"\u5ef6\u8fdf\u4efb\u52a1"}),"\n",(0,i.jsxs)(n.p,{children:["\u5ef6\u8fdf\u4efb\u52a1\u662f\u6307\u5728\u6307\u5b9a\u65f6\u95f4\u540e\u751f\u6548\u7684\u5b9a\u65f6\u4efb\u52a1\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"DelayAdd*"})," \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\u5ef6\u8fdf\u4efb\u52a1\u7684\u521b\u5efa\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/gtime"\n\t"github.com/gogf/gf/v2/os/gtimer"\n\t"time"\n)\n\nfunc main() {\n\tvar (\n\t\tctx      = gctx.New()\n\t\tdelay    = time.Second\n\t\tinterval = time.Second\n\t)\n\tfmt.Println("Start:", gtime.Now())\n\tgtimer.DelayAdd(\n\t\tctx,\n\t\tdelay,\n\t\tinterval,\n\t\tfunc(ctx context.Context) {\n\t\t\tfmt.Println("Running:", gtime.Now())\n\t\t},\n\t)\n\tselect {}\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Start: 2021-05-27 13:26:02\nRunning: 2021-05-27 13:26:04\nRunning: 2021-05-27 13:26:05\nRunning: 2021-05-27 13:26:06\nRunning: 2021-05-27 13:26:07\nRunning: 2021-05-27 13:26:08\nRunning: 2021-05-27 13:26:09\nRunning: 2021-05-27 13:26:10\nRunning: 2021-05-27 13:26:11\n...\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"settimeout-\u4e0e-setinterval",children:[(0,i.jsx)(n.code,{children:"SetTimeout"})," \u4e0e ",(0,i.jsx)(n.code,{children:"SetInterval"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u6765\u6e90\u4e8e ",(0,i.jsx)(n.code,{children:"Javascript"})," \u5e38\u7528\u5b9a\u65f6\u65b9\u6cd5\u3002\u5176\u4e2d ",(0,i.jsx)(n.code,{children:"SetTimeout"})," \u7528\u4e8e\u521b\u5efa\u53ea\u6267\u884c\u4e00\u6b21\u7684\u5b9a\u65f6\u4efb\u52a1\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u901a\u8fc7\u9012\u5f52\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"SetTimeout"})," \u6765\u5b9e\u73b0\u65e0\u9650\u95f4\u9694\u6267\u884c\u3002 ",(0,i.jsx)(n.code,{children:"SetIterval"})," \u7528\u4e8e\u521b\u5efa\u95f4\u9694\u6267\u884c\u4e0d\u9000\u51fa\u7684\u5b9a\u65f6\u4efb\u52a1\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/gtime"\n\t"github.com/gogf/gf/v2/os/gtimer"\n\t"time"\n)\n\nfunc main() {\n\tvar (\n\t\tctx      = gctx.New()\n\t\ttimeout  = time.Second\n\t\tinterval = time.Second\n\t)\n\tgtimer.SetTimeout(ctx, timeout, func(ctx context.Context) {\n\t\tfmt.Println("SetTimeout:", gtime.Now())\n\t})\n\tgtimer.SetInterval(ctx, interval, func(ctx context.Context) {\n\t\tfmt.Println("SetInterval:", gtime.Now())\n\t})\n\tselect {}\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SetInterval: 2021-05-27 13:20:50\nSetTimeout: 2021-05-27 13:20:50\nSetInterval: 2021-05-27 13:20:51\nSetInterval: 2021-05-27 13:20:52\nSetInterval: 2021-05-27 13:20:53\nSetInterval: 2021-05-27 13:20:54\nSetInterval: 2021-05-27 13:20:55\nSetInterval: 2021-05-27 13:20:56\nSetInterval: 2021-05-27 13:20:57\nSetInterval: 2021-05-27 13:20:58\n...\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"exit-\u9000\u51fa",children:[(0,i.jsx)(n.code,{children:"Exit"})," \u9000\u51fa"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5728\u5b9a\u65f6\u4efb\u52a1\u4e2d\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Exit"})," \u65b9\u6cd5\u5f3a\u5236\u9000\u51fa\u5b9a\u65f6\u4efb\u52a1\u7684\u7ee7\u7eed\u6267\u884c\uff0c\u8be5\u5b9a\u65f6\u4efb\u52a1\u5c06\u4f1a\u88ab\u4ece\u5b9a\u65f6\u5668\u4e2d\u79fb\u9664\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/gtime"\n\t"github.com/gogf/gf/v2/os/gtimer"\n\t"time"\n)\n\nfunc main() {\n\tvar (\n\t\tctx = gctx.New()\n\t)\n\tgtimer.SetInterval(ctx, time.Second, func(ctx context.Context) {\n\t\tfmt.Println("exit:", gtime.Now())\n\t\tgtimer.Exit()\n\t})\n\tselect {}\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"exit: 2021-05-27 13:31:24\n"})})]})}function l(t={}){const{wrapper:n}={...(0,o.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(m,{...t})}):m(t)}},28453:(t,n,e)=>{e.d(n,{R:()=>r,x:()=>g});var i=e(296540);const o={},c=i.createContext(o);function r(t){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function g(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),i.createElement(c.Provider,{value:n},t.children)}}}]);