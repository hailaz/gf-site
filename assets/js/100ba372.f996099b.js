"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[86681],{665745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(474848),o=t(28453);const c={title:"\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406",sidebar_position:5},s=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406",title:"\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6a21\u677f\u5f15\u64ce\u5bf9\u6240\u6709\u7684\u53d8\u91cf\u8f93\u51fa\u5e76\u6ca1\u6709\u4f7f\u7528 HTML \u8f6c\u7801\u5904\u7406\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u5f00\u53d1\u8005\u5904\u7406\u4e0d\u597d\uff0c\u53ef\u80fd\u4f1a\u5b58\u5728XSS\u6f0f\u6d1e\u3002",source:"@site/versioned_docs/version-1.16.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/9-\u6a21\u677f\u5f15\u64ce/5-\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/9-\u6a21\u677f\u5f15\u64ce",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406",permalink:"/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406",draft:!1,unlisted:!1,tags:[],version:"1.16.x",sidebarPosition:5,frontMatter:{title:"\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u5e03\u5c40",permalink:"/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u6a21\u677f\u5e03\u5c40"},next:{title:"\u6a21\u677f\u5f15\u64ce-\u5176\u4ed6\u4f7f\u7528",permalink:"/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u5176\u4ed6\u4f7f\u7528"}},d={},l=[];function a(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6a21\u677f\u5f15\u64ce\u5bf9\u6240\u6709\u7684\u53d8\u91cf\u8f93\u51fa\u5e76\u6ca1\u6709\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"HTML"})," \u8f6c\u7801\u5904\u7406\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u5f00\u53d1\u8005\u5904\u7406\u4e0d\u597d\uff0c\u53ef\u80fd\u4f1a\u5b58\u5728XSS\u6f0f\u6d1e\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u7528\u62c5\u5fc3\uff0c ",(0,r.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u5f53\u7136\u5df2\u7ecf\u5145\u5206\u8003\u8651\u5230\u8fd9\u70b9\uff0c\u5e76\u4e14\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u6bd4\u8f83\u7075\u6d3b\u7684\u914d\u7f6e\u53c2\u6570\u6765\u63a7\u5236\u662f\u5426\u9ed8\u8ba4\u8f6c\u4e49\u53d8\u91cf\u8f93\u51fa\u7684 ",(0,r.jsx)(n.code,{children:"HTML"})," \u5185\u5bb9\u3002\u8be5\u7279\u6027\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"AutoEncode"})," \u914d\u7f6e\u9879\uff0c\u6216\u8005 ",(0,r.jsx)(n.code,{children:"SetAutoEncode"})," \u65b9\u6cd5\u6765\u5f00\u542f/\u5173\u95ed\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8be5\u7279\u6027\u5e76\u4e0d\u4f1a\u5f71\u54cd ",(0,r.jsx)(n.code,{children:"include"})," \u6a21\u677f\u7684\u5185\u7f6e\u51fd\u6570\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"1\u3001\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[viewer]\n    delimiters  =  ["${", "}"]\n    autoencode  =  true\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"2\u3001\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n\tresult, _ := g.View().ParseContent(context.TODO(), "\u59d3\u540d: ${.name}", g.Map{\n\t\t"name": "<script>alert(\'john\');<\/script>",\n\t})\n\tfmt.Println(result)\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"3\u3001\u6267\u884c\u8f93\u51fa"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-undefined",children:"\u59d3\u540d: &lt;script&gt;alert(&#39;john&#39;);&lt;/script&gt;\n\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(296540);const o={},c=r.createContext(o);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);