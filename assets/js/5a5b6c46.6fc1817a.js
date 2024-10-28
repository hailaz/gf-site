"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[38875],{807950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var o=n(474848),i=n(28453);const c={title:"\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f",sidebar_position:10},s=void 0,r={id:"\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f",title:"\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f",description:"Debug/Debugf \u662f\u975e\u5e38\u6709\u7528\u7684\u51e0\u4e2a\u65b9\u6cd5\uff0c\u7528\u4e8e\u8c03\u8bd5\u4fe1\u606f\u7684\u8bb0\u5f55\uff0c\u5e38\u7528\u4e8e\u5f00\u53d1/\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u5f53\u5e94\u7528\u4e0a\u7ebf\u4e4b\u540e\u53ef\u4ee5\u65b9\u4fbf\u5730\u4f7f\u7528 SetDebug \u6216\u8005\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u5f00\u542f/\u5173\u95ed\u3002",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/4-\u65e5\u5fd7\u7ec4\u4ef6/10-\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/4-\u65e5\u5fd7\u7ec4\u4ef6",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f",permalink:"/gf-site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/4-\u6838\u5fc3\u7ec4\u4ef6/4-\u65e5\u5fd7\u7ec4\u4ef6/10-\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f",sidebar_position:10},sidebar:"hiddenSidebar",previous:{title:"\u65e5\u5fd7\u7ec4\u4ef6-\u5806\u6808\u6253\u5370",permalink:"/gf-site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u5806\u6808\u6253\u5370"},next:{title:"\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3",permalink:"/gf-site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3"}},d={},l=[];function g(e){const t={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Debug/Debugf"})," \u662f\u975e\u5e38\u6709\u7528\u7684\u51e0\u4e2a\u65b9\u6cd5\uff0c\u7528\u4e8e\u8c03\u8bd5\u4fe1\u606f\u7684\u8bb0\u5f55\uff0c\u5e38\u7528\u4e8e\u5f00\u53d1/\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u5f53\u5e94\u7528\u4e0a\u7ebf\u4e4b\u540e\u53ef\u4ee5\u65b9\u4fbf\u5730\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"SetDebug"})," \u6216\u8005\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u5f00\u542f/\u5173\u95ed\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'package main\n\nimport (\n\t"context"\n\t"time"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gtime"\n\t"github.com/gogf/gf/v2/os/gtimer"\n)\n\nfunc main() {\n\tctx := context.TODO()\n\tgtimer.SetTimeout(ctx, 3*time.Second, func(ctx context.Context) {\n\t\tg.Log().SetDebug(false)\n\t})\n\tfor {\n\t\tg.Log().Debug(ctx, gtime.Datetime())\n\t\tg.Log().Info(ctx, gtime.Datetime())\n\t\ttime.Sleep(time.Second)\n\t}\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["\u8be5\u793a\u4f8b\u4e2d\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"glog.Debug"})," \u65b9\u6cd5\u8f93\u51fa\u8c03\u8bd5\u4fe1\u606f\uff0c3\u79d2\u540e\u5173\u95ed\u8c03\u8bd5\u4fe1\u606f\u7684\u8f93\u51fa\u3002\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u53ea\u8f93\u51fa\u4e863\u6761\u65e5\u5fd7\u4fe1\u606f\uff0c\u540e\u7eed\u7684\u8c03\u8bd5\u65e5\u5fd7\u4fe1\u606f\u7531\u4e8e\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"SetDebug"})," \u65b9\u6cd5\u5173\u95ed\u540e\uff0c\u4fbf\u4e0d\u518d\u8f93\u51fa\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"2022-01-05 15:59:05.674 [DEBU] 2022-01-05 15:59:05\n2022-01-05 15:59:05.675 [INFO] 2022-01-05 15:59:05\n2022-01-05 15:59:06.684 [DEBU] 2022-01-05 15:59:06\n2022-01-05 15:59:06.684 [INFO] 2022-01-05 15:59:06\n2022-01-05 15:59:07.692 [DEBU] 2022-01-05 15:59:07\n2022-01-05 15:59:07.692 [INFO] 2022-01-05 15:59:07\n2022-01-05 15:59:08.708 [INFO] 2022-01-05 15:59:08\n2022-01-05 15:59:09.717 [INFO] 2022-01-05 15:59:09\n2022-01-05 15:59:10.728 [INFO] 2022-01-05 15:59:10\n2022-01-05 15:59:11.733 [INFO] 2022-01-05 15:59:11\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u6216\u8005\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u53c2\u6570\u7684\u65b9\u5f0f\u5173\u95ed\u6389\u8c03\u8bd5\u4fe1\u606f\u3002"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\u4fee\u6539\u547d\u4ee4\u884c\u542f\u52a8\u53c2\u6570 - ",(0,o.jsx)(t.code,{children:"gf.glog.debug=false"}),"\uff1b"]}),"\n",(0,o.jsxs)(t.li,{children:["\u4fee\u6539\u6307\u5b9a\u7684\u73af\u5883\u53d8\u91cf - ",(0,o.jsx)(t.code,{children:"GF_GLOG_DEBUG=false"}),"\uff1b"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(296540);const i={},c=o.createContext(i);function s(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);