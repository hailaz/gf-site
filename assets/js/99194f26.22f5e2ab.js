"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[7125],{334672:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(474848),t=n(28453);const o={title:"Session-File",sidebar_position:0},r=void 0,c={id:"WEB\u670d\u52a1\u5f00\u53d1/Session/Session-File",title:"Session-File",description:"\u6587\u4ef6\u5b58\u50a8",source:"@site/versioned_docs/version-2.5.x/5-WEB\u670d\u52a1\u5f00\u53d1/7-Session/0-Session-File.md",sourceDirName:"5-WEB\u670d\u52a1\u5f00\u53d1/7-Session",slug:"/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-File",permalink:"/gf-site/docs/2.5.x/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-File",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/5-WEB\u670d\u52a1\u5f00\u53d1/7-Session/0-Session-File.md",tags:[],version:"2.5.x",sidebarPosition:0,frontMatter:{title:"Session-File",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Session",permalink:"/gf-site/docs/2.5.x/WEB\u670d\u52a1\u5f00\u53d1/Session/"},next:{title:"Session-Memory",permalink:"/gf-site/docs/2.5.x/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Memory"}},d={},l=[{value:"\u6587\u4ef6\u5b58\u50a8",id:"\u6587\u4ef6\u5b58\u50a8",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"\u6587\u4ef6\u5b58\u50a8",children:"\u6587\u4ef6\u5b58\u50a8"}),"\n",(0,i.jsxs)(s.p,{children:["\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c ",(0,i.jsx)(s.code,{children:"ghttp.Server"})," \u7684 ",(0,i.jsx)(s.code,{children:"Session"})," \u5b58\u50a8\u4f7f\u7528\u4e86 ",(0,i.jsx)(s.code,{children:"\u5185\u5b58+\u6587\u4ef6"})," \u7684\u65b9\u5f0f\uff0c\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"StorageFile"})," \u5bf9\u8c61\u5b9e\u73b0\u3002\u5177\u4f53\u539f\u7406\u4e3a\uff1a"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Session"})," \u7684\u6570\u636e\u64cd\u4f5c\u5b8c\u5168\u57fa\u4e8e\u5185\u5b58\uff1b"]}),"\n",(0,i.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"gcache"})," \u8fdb\u7a0b\u7f13\u5b58\u6a21\u5757\u63a7\u5236\u6570\u636e\u8fc7\u671f\uff1b"]}),"\n",(0,i.jsxs)(s.li,{children:["\u4f7f\u7528\u6587\u4ef6\u5b58\u50a8\u6301\u4e45\u5316\u5b58\u50a8\u7ba1\u7406 ",(0,i.jsx)(s.code,{children:"Session"})," \u6570\u636e\uff1b"]}),"\n",(0,i.jsxs)(s.li,{children:["\u5f53\u4e14\u4ec5\u6709\u5f53 ",(0,i.jsx)(s.code,{children:"Session"})," \u88ab\u6807\u8bb0\u4e3a ",(0,i.jsx)(s.code,{children:"dirty"})," \u65f6\uff08\u6570\u636e\u6709\u66f4\u65b0\uff09\u624d\u4f1a\u6267\u884c ",(0,i.jsx)(s.code,{children:"Session"})," \u5e8f\u5217\u5316\u5e76\u6267\u884c\u6587\u4ef6\u6301\u4e45\u5316\u5b58\u50a8\uff1b"]}),"\n",(0,i.jsxs)(s.li,{children:["\u5f53\u4e14\u4ec5\u5f53\u5185\u5b58\u4e2d\u7684 ",(0,i.jsx)(s.code,{children:"Session"})," \u4e0d\u5b58\u5728\u65f6\uff0c\u624d\u4f1a\u4ece\u6587\u4ef6\u5b58\u50a8\u4e2d\u53cd\u5e8f\u5217\u5316\u6062\u590d ",(0,i.jsx)(s.code,{children:"Session"})," \u6570\u636e\u5230\u5185\u5b58\u4e2d\uff0c\u964d\u4f4e ",(0,i.jsx)(s.code,{children:"IO"})," \u8c03\u7528\uff1b"]}),"\n",(0,i.jsxs)(s.li,{children:["\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u4f7f\u7528\u7684\u662f\u6807\u51c6\u5e93\u7684 ",(0,i.jsx)(s.code,{children:"json.Marshal/UnMarshal"})," \u65b9\u6cd5\uff1b"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["\u4ece\u539f\u7406\u53ef\u77e5\uff0c\u5f53 ",(0,i.jsx)(s.code,{children:"Session"})," \u4e3a\u8bfb\u591a\u5199\u5c11\u7684\u573a\u666f\u4e2d\uff0c ",(0,i.jsx)(s.code,{children:"Session"})," \u7684\u6570\u636e\u64cd\u4f5c\u975e\u5e38\u9ad8\u6548\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u6709\u4e2a\u6ce8\u610f\u7684\u7ec6\u8282\uff0c\u7531\u4e8e\u6587\u4ef6\u5b58\u50a8\u6d89\u53ca\u5230\u6587\u4ef6\u64cd\u4f5c\uff0c\u4e3a\u4fbf\u4e8e\u964d\u4f4e ",(0,i.jsx)(s.code,{children:"IO"})," \u5f00\u9500\u5e76\u63d0\u9ad8 ",(0,i.jsx)(s.code,{children:"Session"})," \u64cd\u4f5c\u6027\u80fd\uff0c\u5e76\u4e0d\u662f\u6bcf\u4e00\u6b21 ",(0,i.jsx)(s.code,{children:"Session"})," \u8bf7\u6c42\u7ed3\u675f\u540e\u90fd\u4f1a\u7acb\u5373\u5237\u65b0\u5bf9\u5e94 ",(0,i.jsx)(s.code,{children:"Session"})," \u7684 ",(0,i.jsx)(s.code,{children:"TTL"})," \u65f6\u95f4\u3002\u800c\u53ea\u6709\u5f53\u6d89\u53ca\u5230\u66f4\u65b0\u64cd\u4f5c\uff08\u88ab\u6807\u8bb0\u4e3a ",(0,i.jsx)(s.code,{children:"dirty"}),"\uff09\u65f6\u624d\u4f1a\u7acb\u5373\u5237\u65b0\u5176 ",(0,i.jsx)(s.code,{children:"TTL"}),"\uff1b\u9488\u5bf9\u4e8e\u8bfb\u53d6\u8bf7\u6c42\uff0c\u5c06\u4f1a\u6bcf\u9694 ",(0,i.jsx)(s.code,{children:"\u4e00\u5206\u949f"})," \u66f4\u65b0\u524d\u4e00\u5206\u949f\u5185\u8bfb\u53d6\u64cd\u4f5c\u5bf9\u5e94\u7684 ",(0,i.jsx)(s.code,{children:"Session"})," \u6587\u4ef6 ",(0,i.jsx)(s.code,{children:"TTL"})," \u65f6\u95f4\uff0c\u4ee5\u4fbf\u4e8e ",(0,i.jsx)(s.code,{children:"Session"})," \u81ea\u52a8\u7eed\u6d3b\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n\t"github.com/gogf/gf/v2/os/gtime"\n\t"time"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.SetSessionMaxAge(time.Minute)\n\ts.Group("/", func(group *ghttp.RouterGroup) {\n\t\tgroup.ALL("/set", func(r *ghttp.Request) {\n\t\t\tr.Session.Set("time", gtime.Timestamp())\n\t\t\tr.Response.Write("ok")\n\t\t})\n\t\tgroup.ALL("/get", func(r *ghttp.Request) {\n\t\t\tr.Response.Write(r.Session.Data())\n\t\t})\n\t\tgroup.ALL("/del", func(r *ghttp.Request) {\n\t\t\t_ = r.Session.RemoveAll()\n\t\t\tr.Response.Write("ok")\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["\u5728\u8be5\u5b9e\u4f8b\u4e2d\uff0c\u4e3a\u4e86\u65b9\u4fbf\u89c2\u5bdf\u8fc7\u671f\u5931\u6548\uff0c\u6211\u4eec\u5c06 ",(0,i.jsx)(s.code,{children:"Session"})," \u7684\u8fc7\u671f\u65f6\u95f4\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(s.code,{children:"1\u5206\u949f"}),"\u3002\u6267\u884c\u540e\uff0c"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\u9996\u5148\uff0c\u8bbf\u95ee ",(0,i.jsx)(s.a,{href:"http://127.0.0.1:8199/set",children:"http://127.0.0.1:8199/set"})," \u8bbe\u7f6e\u4e00\u4e2a ",(0,i.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\uff1b"]}),"\n",(0,i.jsxs)(s.li,{children:["\u968f\u540e\uff0c\u8bbf\u95ee ",(0,i.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53ef\u4ee5\u770b\u5230\u8be5 ",(0,i.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u5e76\u6210\u529f\u83b7\u53d6\uff1b"]}),"\n",(0,i.jsxs)(s.li,{children:["\u63a5\u7740\uff0c\u6211\u4eec\u505c\u6b62\u7a0b\u5e8f\uff0c\u5e76\u91cd\u65b0\u542f\u52a8\uff0c\u518d\u6b21\u8bbf\u95ee ",(0,i.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"}),"\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,i.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\u5df2\u7ecf\u4ece\u6587\u4ef6\u5b58\u50a8\u4e2d\u6062\u590d\uff1b"]}),"\n",(0,i.jsxs)(s.li,{children:["\u7b49\u5f851\u5206\u949f\u540e\uff0c\u518d\u6b21\u8bbf\u95ee ",(0,i.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u65e0\u6cd5\u83b7\u53d6\u8be5 ",(0,i.jsx)(s.code,{children:"Session"}),"\uff0c\u56e0\u4e3a\u8be5 ",(0,i.jsx)(s.code,{children:"Session"})," \u5df2\u7ecf\u8fc7\u671f\uff1b"]}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var i=n(296540);const t={},o=i.createContext(t);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);