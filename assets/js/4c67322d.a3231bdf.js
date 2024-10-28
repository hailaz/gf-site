"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[89204],{39426:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=t(474848),r=t(28453);const i={title:"\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u5904\u7406",sidebar_position:8},a=void 0,d={id:"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u5904\u7406",title:"\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u5904\u7406",description:"\u6211\u4eec\u53ef\u4ee5\u5bf9WebServer\u6307\u5b9a\u7684\u72b6\u6001\u7801\u8fdb\u884c\u81ea\u5b9a\u4e49\u5904\u7406\uff0c\u4f8b\u5982\u9488\u5bf9\u5e38\u89c1\u7684 404/403/500 \u7b49\u9519\u8bef\uff0c\u6211\u4eec\u53ef\u4ee5\u5c55\u793a\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u4fe1\u606f\u3001\u9875\u9762\u5185\u5bb9\uff0c\u6216\u8005\u8df3\u8f6c\u5230\u4e00\u4e2a\u7279\u5b9a\u7684\u9875\u9762\u3002",source:"@site/versioned_docs/version-1.16.x/3-WEB\u670d\u52a1\u5f00\u53d1/10-\u9ad8\u7ea7\u7279\u6027/8-\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u5904\u7406.md",sourceDirName:"3-WEB\u670d\u52a1\u5f00\u53d1/10-\u9ad8\u7ea7\u7279\u6027",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u5904\u7406",permalink:"/gf-site/docs/1.16.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u5904\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/3-WEB\u670d\u52a1\u5f00\u53d1/10-\u9ad8\u7ea7\u7279\u6027/8-\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u5904\u7406.md",tags:[],version:"1.16.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:8,frontMatter:{title:"\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u5904\u7406",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"WebSocket\u670d\u52a1",permalink:"/gf-site/docs/1.16.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/WebSocket\u670d\u52a1"},next:{title:"PProf\u670d\u52a1\u6027\u80fd\u5206\u6790",permalink:"/gf-site/docs/1.16.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/PProf\u670d\u52a1\u6027\u80fd\u5206\u6790"}},o={},c=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u6279\u91cf\u8bbe\u7f6e",id:"\u6279\u91cf\u8bbe\u7f6e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function l(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5bf9WebServer\u6307\u5b9a\u7684\u72b6\u6001\u7801\u8fdb\u884c\u81ea\u5b9a\u4e49\u5904\u7406\uff0c\u4f8b\u5982\u9488\u5bf9\u5e38\u89c1\u7684 ",(0,s.jsx)(e.code,{children:"404/403/500"})," \u7b49\u9519\u8bef\uff0c\u6211\u4eec\u53ef\u4ee5\u5c55\u793a\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u4fe1\u606f\u3001\u9875\u9762\u5185\u5bb9\uff0c\u6216\u8005\u8df3\u8f6c\u5230\u4e00\u4e2a\u7279\u5b9a\u7684\u9875\u9762\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u76f8\u5173\u65b9\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"func (s *Server) BindStatusHandler(status int, handler HandlerFunc)\nfunc (s *Server) BindStatusHandlerByMap(handlerMap map[int]HandlerFunc)\n\nfunc (d *Domain) BindStatusHandler(status int, handler HandlerFunc)\nfunc (d *Domain) BindStatusHandlerByMap(handlerMap map[int]HandlerFunc)\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"BindStatusHandler"})," \u6216\u8005 ",(0,s.jsx)(e.code,{children:"BindStatusHandlerMap"})," \u6765\u5b9e\u73b0\u9488\u5bf9\u6307\u5b9a\u7684\u72b6\u6001\u7801\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u56de\u8c03\u51fd\u6570\u5904\u7406\uff0c\u5e76\u4e14\u8be5\u7279\u6027\u4e5f\u652f\u6301\u9488\u5bf9\u7279\u5b9a\u7684\u57df\u540d\u7ed1\u5b9a\u3002\u6211\u4eec\u6765\u770b\u51e0\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request){\n        r.Response.Writeln("halo \u4e16\u754c\uff01")\n    })\n    s.BindStatusHandler(404, func(r *ghttp.Request){\n        r.Response.Writeln("This is customized 404 page")\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u8bbf\u95ee\u6ca1\u6709\u7ed1\u5b9a\u7684\u8def\u7531\u9875\u9762\uff0c\u4f8b\u5982 ",(0,s.jsx)(e.a,{href:"http://127.0.0.1:8199/test",children:"http://127.0.0.1:8199/test"})," \uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u9875\u9762\u663e\u793a\u4e86\u6211\u4eec\u671f\u671b\u7684\u8fd4\u56de\u7ed3\u679c\uff1a ",(0,s.jsx)(e.code,{children:"This is customized 404 page"}),"\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6b64\u5916\uff0c\u5e38\u89c1\u7684Web\u9875\u9762\u8bf7\u6c42\u9519\u8bef\u72b6\u6001\u7801\u5904\u7406\u65b9\u5f0f\uff0c\u662f\u5f15\u5bfc\u7528\u6237\u8df3\u8f6c\u5230\u6307\u5b9a\u7684\u9519\u8bef\u9875\u9762\uff0c\u56e0\u6b64\uff0c\u5728\u72b6\u6001\u7801\u56de\u8c03\u5904\u7406\u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"r.RedirectTo"})," \u65b9\u6cd5\u6765\u8fdb\u884c\u9875\u9762\u8df3\u8f6c\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/status/:status", func(r *ghttp.Request) {\n        r.Response.Write("woops, status ", r.Get("status"), " found")\n    })\n    s.BindStatusHandler(404, func(r *ghttp.Request){\n        r.Response.RedirectTo("/status/404")\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u624b\u52a8\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u9875\u9762\uff0c\u4f8b\u5982 ",(0,s.jsx)(e.a,{href:"http://127.0.0.1:8199/test",children:"http://127.0.0.1:8199/test"})," \uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u9875\u9762\u88ab\u5f15\u5bfc\u8df3\u8f6c\u5230\u4e86 ",(0,s.jsx)(e.a,{href:"http://127.0.0.1:8199/status/404",children:"http://127.0.0.1:8199/status/404"})," \u9875\u9762\uff0c\u5e76\u4e14\u53ef\u4ee5\u770b\u5230\u9875\u9762\u8fd4\u56de\u5185\u5bb9\uff1a ",(0,s.jsx)(e.code,{children:"woops, status 404 found"})]}),"\n",(0,s.jsx)(e.h2,{id:"\u6279\u91cf\u8bbe\u7f6e",children:"\u6279\u91cf\u8bbe\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindStatusHandlerByMap(map[int]ghttp.HandlerFunc {\n        403 : func(r *ghttp.Request){r.Response.Writeln("403")},\n        404 : func(r *ghttp.Request){r.Response.Writeln("404")},\n        500 : func(r *ghttp.Request){r.Response.Writeln("500")},\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"BindStatusHandlerByMap"})," \u65b9\u6cd5\u5bf9\u9700\u8981\u81ea\u5b9a\u4e49\u7684\u72b6\u6001\u7801\u8fdb\u884c\u6279\u91cf\u8bbe\u7f6e\u3002\u8be5\u793a\u4f8b\u7a0b\u5e8f\u6267\u884c\u540e\uff0c\u5f53\u670d\u52a1\u63a5\u53e3\u8fd4\u56de\u7684\u72b6\u6001\u7801\u4e3a ",(0,s.jsx)(e.code,{children:"403/404/500"})," \u65f6\uff0c\u63a5\u53e3\u5c06\u4f1a\u8fd4\u56de\u5bf9\u5e94\u7684\u72b6\u6001\u7801\u6570\u5b57\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u5904\u7406\u65b9\u6cd5\u4e2d\u5982\u679c\u6d89\u53ca\u5230\u5185\u5bb9\u7684\u8f93\u51fa\uff0c\u5f80\u5f80\u9700\u8981\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"r.Response.ClearBuffer()"})," \u65b9\u6cd5\u5c06\u539f\u672c\u7f13\u51b2\u533a\u7684\u8f93\u51fa\u5185\u5bb9\u6e05\u7a7a\u3002"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>d});var s=t(296540);const r={},i=s.createContext(r);function a(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);