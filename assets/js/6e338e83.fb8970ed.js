"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[8024],{165970:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>T,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=t(474848),i=t(28453);const r={title:"HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",sidebar_position:6},s=void 0,c={id:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",title:"HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.5.x/5-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/6-HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370.md",sourceDirName:"5-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient",slug:"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",permalink:"/gf-site/docs/2.5.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/5-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/6-HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370.md",tags:[],version:"2.5.x",sidebarPosition:6,frontMatter:{title:"HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"HTTPClient-\u81ea\u5b9a\u4e49Transport",permalink:"/gf-site/docs/2.5.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Transport"},next:{title:"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",permalink:"/gf-site/docs/2.5.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e"}},l={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function d(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"http"})," \u5ba2\u6237\u7aef\u652f\u6301\u5bf9HTTP\u8bf7\u6c42\u7684\u8f93\u5165\u4e0e\u8f93\u51fa\u539f\u59cb\u4fe1\u606f\u83b7\u53d6\u4e0e\u6253\u5370\uff0c\u65b9\u4fbf\u8c03\u8bd5\uff0c\u76f8\u5173\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"func (r *Response) Raw() string\nfunc (r *Response) RawDump()\nfunc (r *Response) RawRequest() string\nfunc (r *Response) RawResponse() string\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6240\u6709\u7684\u65b9\u6cd5\u5747\u7ed1\u5b9a\u5728 ",(0,o.jsx)(e.code,{children:"Response"})," \u5bf9\u8c61\u4e0a\uff0c\u4e5f\u5c31\u662f\u8bf4\u5fc5\u987b\u8981\u8bf7\u6c42\u7ed3\u675f\u540e\u624d\u80fd\u6253\u5370\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tresponse, err := g.Client().Post(\n\t\tgctx.New(),\n\t\t"https://goframe.org",\n\t\tg.Map{\n\t\t\t"name": "john",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tresponse.RawDump()\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u4e3a\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"+---------------------------------------------+\n|                   REQUEST                   |\n+---------------------------------------------+\nPOST / HTTP/1.1\nHost: goframe.org\nUser-Agent: GoFrameHTTPClient v2.0.0-beta\nContent-Length: 9\nContent-Type: application/x-www-form-urlencoded\nAccept-Encoding: gzip\n\nname=john\n\n+---------------------------------------------+\n|                   RESPONSE                  |\n+---------------------------------------------+\nHTTP/1.1 405 Method Not Allowed\nConnection: close\nTransfer-Encoding: chunked\nAllow: GET\nCache-Control: no-store\nContent-Security-Policy: frame-ancestors 'self'\nContent-Type: text/html;charset=UTF-8\nDate: Fri, 03 Dec 2021 09:43:29 GMT\nExpires: Thu, 01 Jan 1970 00:00:00 GMT\nServer: nginx\n...\n"})})]})}function T(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>c});var o=t(296540);const i={},r=o.createContext(i);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);