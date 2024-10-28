"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[63150],{311915:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(474848),d=t(28453);const i={title:"URL\u7f16\u89e3\u7801-gurl",sidebar_position:5},l=void 0,s={id:"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/URL\u7f16\u89e3\u7801-gurl",title:"URL\u7f16\u89e3\u7801-gurl",description:"URL \u7f16\u7801\u89e3\u6790\u3002",source:"@site/versioned_docs/version-2.2.x/2-\u7ec4\u4ef6\u5217\u8868/3-\u7f16\u7801\u89e3\u7801/5-URL\u7f16\u89e3\u7801-gurl.md",sourceDirName:"2-\u7ec4\u4ef6\u5217\u8868/3-\u7f16\u7801\u89e3\u7801",slug:"/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/URL\u7f16\u89e3\u7801-gurl",permalink:"/gf-site/docs/2.2.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/URL\u7f16\u89e3\u7801-gurl",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/2-\u7ec4\u4ef6\u5217\u8868/3-\u7f16\u7801\u89e3\u7801/5-URL\u7f16\u89e3\u7801-gurl.md",tags:[],version:"2.2.x",sidebarPosition:5,frontMatter:{title:"URL\u7f16\u89e3\u7801-gurl",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"HTML\u7f16\u89e3\u7801-ghtml",permalink:"/gf-site/docs/2.2.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/HTML\u7f16\u89e3\u7801-ghtml"},next:{title:"XML\u7f16\u89e3\u7801-gxml",permalink:"/gf-site/docs/2.2.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/XML\u7f16\u89e3\u7801-gxml"}},c={},o=[{value:"<code>URL</code> \u53c2\u6570\u6784\u5efa",id:"url-\u53c2\u6570\u6784\u5efa",level:2},{value:"<code>URL</code> \u53c2\u6570\u7f16\u7801\u4e0e\u89e3\u7801",id:"url-\u53c2\u6570\u7f16\u7801\u4e0e\u89e3\u7801",level:2},{value:"\u89e3\u6790 <code>URL</code>",id:"\u89e3\u6790-url",level:2}];function h(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"URL"})," \u7f16\u7801\u89e3\u6790\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'import "github.com/gogf/gf/v2/encoding/gurl"\n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gurl",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gurl"})}),"\n",(0,r.jsxs)(e.h2,{id:"url-\u53c2\u6570\u6784\u5efa",children:[(0,r.jsx)(e.code,{children:"URL"})," \u53c2\u6570\u6784\u5efa"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/encoding/gurl"\n\t"net/url"\n)\n\nfunc main() {\n\t// \u6784\u5efaurl\u53c2\u6570\n\tvalues := url.Values{}\n\tvalues.Add("name", "gopher")\n\tvalues.Add("limit", "20")\n\tvalues.Add("page", "7")\n\n\t// \u751f\u6210URL\u7f16\u7801\u67e5\u8be2\u5b57\u7b26\u4e32 limit=20&name=gopher&page=7\n\turlStr := gurl.BuildQuery(values)\n\tfmt.Println(urlStr)\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"limit=20&name=gopher&page=7\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"url-\u53c2\u6570\u7f16\u7801\u4e0e\u89e3\u7801",children:[(0,r.jsx)(e.code,{children:"URL"})," \u53c2\u6570\u7f16\u7801\u4e0e\u89e3\u7801"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/encoding/gurl"\n\t"log"\n)\n\nfunc main() {\n\t// \u7f16\u7801\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u8f6c\u4e49\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u5c06\u5176\u5b89\u5168\u5730\u653e\u7f6e\u5728URL\u67e5\u8be2\u4e2d\u3002\n\tencodeStr := gurl.Encode("limit=20&name=gopher&page=7")\n\tfmt.Println(encodeStr)\n\n\t// \u8fdb\u884cURL\u89e3\u7801\n\tdecodeStr, err := gurl.Decode("limit%3D20%26name%3Dgopher%26page%3D7")\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\tfmt.Println(decodeStr)\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"limit%3D20%26name%3Dgopher%26page%3D7\nlimit=20&name=gopher&page=7\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"\u89e3\u6790-url",children:["\u89e3\u6790 ",(0,r.jsx)(e.code,{children:"URL"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"component"})," \u53c2\u6570\u503c\u53ef\u9009\u9879:"]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53c2\u6570\u503c"}),(0,r.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-1"}),(0,r.jsx)(e.td,{children:"all"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"scheme"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"2"}),(0,r.jsx)(e.td,{children:"host"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4"}),(0,r.jsx)(e.td,{children:"port"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"8"}),(0,r.jsx)(e.td,{children:"user"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"16"}),(0,r.jsx)(e.td,{children:"pass"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"32"}),(0,r.jsx)(e.td,{children:"path"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"64"}),(0,r.jsx)(e.td,{children:"query"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"128"}),(0,r.jsx)(e.td,{children:"fragment"})]})]})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/encoding/gurl"\n\t"log"\n)\n\nfunc main() {\n\t// \u89e3\u6790URL\u5e76\u8fd4\u56de\u5176\u7ec4\u4ef6\n\tdata, err := gurl.ParseURL("http://127.0.0.1:8199/goods?limit=20&name=gopher&page=7", -1)\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\tfmt.Println(data)\n\tfmt.Println(data["host"])\n\tfmt.Println(data["query"])\n\tfmt.Println(data["path"])\n\tfmt.Println(data["scheme"])\n\tfmt.Println(data["fragment"])\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"map[fragment: host:127.0.0.1 pass: path:/goods port:8199 query:limit=20&name=gopher&page=7 scheme:http user:]\n127.0.0.1\nlimit=20&name=gopher&page=7\n/goods\nhttp\n"})})]})}function a(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>s});var r=t(296540);const d={},i=r.createContext(d);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);