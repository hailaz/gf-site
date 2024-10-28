"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[48765],{383396:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=t(474848),o=t(28453);const c={title:"\u6570\u636e\u8fd4\u56de-JSON/XML",sidebar_position:1},i=void 0,s={id:"WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-JSONXML",title:"\u6570\u636e\u8fd4\u56de-JSON/XML",description:"\u76f8\u5173\u65b9\u6cd5\uff1a",source:"@site/versioned_docs/version-2.0.x/5-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de/1-\u6570\u636e\u8fd4\u56de-JSONXML.md",sourceDirName:"5-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-JSONXML",permalink:"/gf-site/docs/2.0.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-JSONXML",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/5-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de/1-\u6570\u636e\u8fd4\u56de-JSONXML.md",tags:[],version:"2.0.x",sidebarPosition:1,frontMatter:{title:"\u6570\u636e\u8fd4\u56de-JSON/XML",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236",permalink:"/gf-site/docs/2.0.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236"},next:{title:"\u6570\u636e\u8fd4\u56de-Redirect",permalink:"/gf-site/docs/2.0.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Redirect"}},d={},l=[{value:"<code>JSON</code>",id:"json",level:2},{value:"<code>JSONP</code>",id:"jsonp",level:2},{value:"<code>XML</code>",id:"xml",level:2}];function p(n){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u76f8\u5173\u65b9\u6cd5\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func (r *Response) WriteJson(content interface{}) error\nfunc (r *Response) WriteJsonExit(content interface{}) error\nfunc (r *Response) WriteJsonP(content interface{}) error\nfunc (r *Response) WriteJsonPExit(content interface{}) error\nfunc (r *Response) WriteXml(content interface{}, rootTag ...string) error\nfunc (r *Response) WriteXmlExit(content interface{}, rootTag ...string) error\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Response"})," \u63d0\u4f9b\u4e86\u5bf9 ",(0,r.jsx)(e.code,{children:"JSON/XML"})," \u6570\u636e\u683c\u5f0f\u8f93\u51fa\u7684\u539f\u751f\u652f\u6301\uff0c\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u5b9e\u73b0\uff1a"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"WriteJson*"})," \u65b9\u6cd5\u7528\u4e8e\u8fd4\u56de ",(0,r.jsx)(e.code,{children:"JSON"})," \u6570\u636e\u683c\u5f0f\uff0c\u53c2\u6570\u4e3a\u4efb\u610f\u7c7b\u578b\uff0c\u53ef\u4ee5\u4e3a ",(0,r.jsx)(e.code,{children:"string"}),"\u3001 ",(0,r.jsx)(e.code,{children:"map"}),"\u3001 ",(0,r.jsx)(e.code,{children:"struct"})," \u7b49\u7b49\u3002\u8fd4\u56de\u7684 ",(0,r.jsx)(e.code,{children:"Content-Type"})," \u4e3a ",(0,r.jsx)(e.code,{children:"application/json"}),"\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"WriteXml*"})," \u65b9\u6cd5\u7528\u4e8e\u8fd4\u56de ",(0,r.jsx)(e.code,{children:"XML"})," \u6570\u636e\u683c\u5f0f\uff0c\u53c2\u6570\u4e3a\u4efb\u610f\u7c7b\u578b\uff0c\u53ef\u4ee5\u4e3a ",(0,r.jsx)(e.code,{children:"string"}),"\u3001 ",(0,r.jsx)(e.code,{children:"map"}),"\u3001 ",(0,r.jsx)(e.code,{children:"struct"})," \u7b49\u7b49\u3002\u8fd4\u56de\u7684 ",(0,r.jsx)(e.code,{children:"Content-Type"})," \u4e3a ",(0,r.jsx)(e.code,{children:"application/xml"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5bf9 ",(0,r.jsx)(e.code,{children:"JSON"})," \u6570\u636e\u683c\u5f0f\u652f\u6301\u7684\u540c\u65f6\uff0c\u540c\u65f6\u4e5f\u652f\u6301 ",(0,r.jsx)(e.code,{children:"JSONP"})," \u534f\u8bae\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"json",children:(0,r.jsx)(e.code,{children:"JSON"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.Group("/", func(group *ghttp.RouterGroup) {\n\t\tgroup.ALL("/json", func(r *ghttp.Request) {\n\t\t\tr.Response.WriteJson(g.Map{\n\t\t\t\t"id":   1,\n\t\t\t\t"name": "john",\n\t\t\t})\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"curl"})," \u5de5\u5177\u6d4b\u8bd5\u4e0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'$ curl -i http://127.0.0.1:8199/json\nHTTP/1.1 200 OK\nContent-Type: application/json\nServer: GF HTTP Server\nDate: Sun, 05 Jan 2020 02:49:31 GMT\nContent-Length: 22\n\n{"id":1,"name":"john"}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"jsonp",children:(0,r.jsx)(e.code,{children:"JSONP"})}),"\n",(0,r.jsxs)(e.p,{children:["\u9700\u8981\u6ce8\u610f\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"JSONP"})," \u534f\u8bae\u65f6\u5fc5\u987b\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"Query"})," \u65b9\u5f0f\u63d0\u4f9b ",(0,r.jsx)(e.code,{children:"callback"})," \u53c2\u6570\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.Group("/", func(group *ghttp.RouterGroup) {\n\t\tgroup.ALL("/jsonp", func(r *ghttp.Request) {\n\t\t\tr.Response.WriteJsonP(g.Map{\n\t\t\t\t"id":   1,\n\t\t\t\t"name": "john",\n\t\t\t})\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"curl"})," \u5de5\u5177\u6d4b\u8bd5\u4e0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'$ curl -i "http://127.0.0.1:8199/jsonp?callback=MyCallback"\nHTTP/1.1 200 OK\nServer: GF HTTP Server\nDate: Sun, 05 Jan 2020 02:50:42 GMT\nContent-Length: 34\nContent-Type: text/plain; charset=utf-8\n\nMyCallback({"id":1,"name":"john"})\n'})}),"\n",(0,r.jsx)(e.h2,{id:"xml",children:(0,r.jsx)(e.code,{children:"XML"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.Group("/", func(group *ghttp.RouterGroup) {\n\t\tgroup.ALL("/xml", func(r *ghttp.Request) {\n            r.Response.Write(`<?xml version="1.0" encoding="UTF-8"?>`)\n\t\t\tr.Response.WriteXml(g.Map{\n\t\t\t\t"id":   1,\n\t\t\t\t"name": "john",\n\t\t\t})\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"curl"})," \u5de5\u5177\u6d4b\u8bd5\u4e0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'$ curl -i http://127.0.0.1:8199/xml\nHTTP/1.1 200 OK\nContent-Type: application/xml\nServer: GF HTTP Server\nDate: Sun, 05 Jan 2020 03:00:55 GMT\nContent-Length: 76\n\n<?xml version="1.0" encoding="UTF-8"?><doc><id>1</id><name>john</name></doc>\n'})})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>s});var r=t(296540);const o={},c=r.createContext(o);function i(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);