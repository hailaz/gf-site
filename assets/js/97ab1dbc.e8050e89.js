"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[22696],{410307:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(474848),s=t(28453);const o={title:"Redis-Conn\u5bf9\u8c61",sidebar_position:3},d=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Conn\u5bf9\u8c61",title:"Redis-Conn\u5bf9\u8c61",description:"Conn \u5bf9\u8c61",source:"@site/versioned_docs/version-2.4.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-NoSQL Redis/3-Redis-Conn\u5bf9\u8c61.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-NoSQL Redis",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Conn\u5bf9\u8c61",permalink:"/gf-site/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Conn\u5bf9\u8c61",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-NoSQL Redis/3-Redis-Conn\u5bf9\u8c61.md",tags:[],version:"2.4.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:3,frontMatter:{title:"Redis-Conn\u5bf9\u8c61",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Redis-\u547d\u4ee4\u4ea4\u4e92",permalink:"/gf-site/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92"},next:{title:"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",permalink:"/gf-site/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1"}},r={},l=[{value:"<code>Conn</code> \u5bf9\u8c61",id:"conn-\u5bf9\u8c61",level:2},{value:"\u8ba2\u9605/\u53d1\u5e03",id:"\u8ba2\u9605\u53d1\u5e03",level:2}];function a(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h2,{id:"conn-\u5bf9\u8c61",children:[(0,i.jsx)(e.code,{children:"Conn"})," \u5bf9\u8c61"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u9700\u8981\u5b9e\u73b0\u957f\u94fe\u63a5\u6027\u7684 ",(0,i.jsx)(e.code,{children:"Redis"})," \u64cd\u4f5c\uff08\u4f8b\u5982\u8ba2\u9605\u53d1\u5e03\uff09\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"Conn"})," \u65b9\u6cd5\u4ece\u8fde\u63a5\u6c60\u4e2d\u83b7\u53d6\u4e00\u4e2a\u8fde\u63a5\u5bf9\u8c61\uff0c\u968f\u540e\u4f7f\u7528\u8be5\u8fde\u63a5\u5bf9\u8c61\u8fdb\u884c\u64cd\u4f5c\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8be5\u8fde\u63a5\u5bf9\u8c61\u4e0d\u518d\u4f7f\u7528\u65f6\uff0c\u5e94\u5f53\u663e\u5f0f\u8c03\u7528 ",(0,i.jsx)(e.code,{children:"Close"})," \u65b9\u6cd5\u8fdb\u884c\u5173\u95ed\uff08\u4e22\u56de\u8fde\u63a5\u6c60\uff09\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u7531\u4e8e\u8be5 ",(0,i.jsx)(e.code,{children:"Conn"})," \u662f\u4e2a\u8fde\u63a5\u5bf9\u8c61\uff0c\u6ce8\u610f\u8be5\u5bf9\u8c61\u5b58\u5728\u8fde\u63a5\u8d85\u65f6\u7684\u9650\u5236\uff0c\u8d85\u65f6\u548c\u670d\u52a1\u7aef\u914d\u7f6e\u6709\u5173\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8ba2\u9605\u53d1\u5e03",children:"\u8ba2\u9605/\u53d1\u5e03"}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"Redis"})," \u7684 ",(0,i.jsx)(e.code,{children:"Conn"})," \u5b9e\u73b0\u8ba2\u9605/\u53d1\u5e03\u6a21\u5f0f\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n\t"fmt"\n\n\t_ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar (\n\t\tctx     = gctx.New()\n\t\tchannel = "channel"\n\t)\n\tconn, _ := g.Redis().Conn(ctx)\n\tdefer conn.Close(ctx)\n\t_, err := conn.Subscribe(ctx, channel)\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tfor {\n\t\tmsg, err := conn.ReceiveMessage(ctx)\n\t\tif err != nil {\n\t\t\tg.Log().Fatal(ctx, err)\n\t\t}\n\t\tfmt.Println(msg.Payload)\n\t}\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7a0b\u5e8f\u5c06\u963b\u585e\u7b49\u5f85\u83b7\u53d6\u6570\u636e\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u53e6\u5916\u6253\u5f00\u4e00\u4e2a\u7ec8\u7aef\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"redis-cli"})," \u547d\u4ee4\u8fdb\u5165 ",(0,i.jsx)(e.code,{children:"Redis Server"}),"\uff0c\u53d1\u5e03\u4e00\u6761\u6d88\u606f\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"$ redis-cli\n127.0.0.1:6379> publish channel test\n(integer) 1\n127.0.0.1:6379>\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u968f\u540e\u7a0b\u5e8f\u7ec8\u7aef\u7acb\u5373\u6253\u5370\u51fa\u4ece ",(0,i.jsx)(e.code,{children:"Redis Server"})," \u83b7\u53d6\u7684\u6570\u636e\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"test\n"})})]})}function x(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>d,x:()=>c});var i=t(296540);const s={},o=i.createContext(s);function d(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);