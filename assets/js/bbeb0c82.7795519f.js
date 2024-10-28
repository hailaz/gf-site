"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[75851],{133464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>E,toc:()=>d});var i=t(474848),o=t(28453);const r={title:"\u4ee3\u7801\u751f\u6210-gen(\u91cd\u70b9)",sidebar_position:5},s=void 0,E={id:"\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9/\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9",title:"\u4ee3\u7801\u751f\u6210-gen(\u91cd\u70b9)",description:"\u6700\u65b0\u7684 CLI \u5de5\u5177\u7248\u672c\u529f\u80fd\u4f1a\u968f\u7740 GoFrame \u6846\u67b6\u7684\u6700\u65b0\u7248\u672c\u7f16\u8bd1\uff0c\u5f15\u5165\u5982\u679c\u672c\u5730\u7684 CLI \u5de5\u5177\u81ea\u52a8\u5316\u751f\u6210\u7684\u4ee3\u7801\u4e0e\u9879\u76ee\u7684 GoFrame \u6846\u67b6\u7248\u672c\u51fa\u73b0\u517c\u5bb9\u6027\u95ee\u9898\u65f6\uff0c\u5efa\u8bae\u5347\u7ea7\u9879\u76ee\u6846\u67b6\u7248\u672c\uff0c\u6216\u8005\u81ea\u5b9a\u4e49\u5b89\u88c5\u65e7\u7248\u672c\u7684 CLI \u5de5\u5177\u3002\u65e7\u7248\u672cCLI\u5de5\u5177\u5b89\u88c5\u65b9\u5f0f\u53c2\u8003\u4ed3\u5e93\u9996\u9875\u4ecb\u7ecd\uff1a https://github.com/gogf/gf-cli",source:"@site/versioned_docs/version-2.4.x/0-\u5f00\u53d1\u5de5\u5177/5-\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9/5-\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9.md",sourceDirName:"0-\u5f00\u53d1\u5de5\u5177/5-\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9",slug:"/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9/",permalink:"/gf-site/docs/2.4.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/0-\u5f00\u53d1\u5de5\u5177/5-\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9/5-\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9.md",tags:[],version:"2.4.x",sidebarPosition:5,frontMatter:{title:"\u4ee3\u7801\u751f\u6210-gen(\u91cd\u70b9)",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u4ea4\u53c9\u7f16\u8bd1-build",permalink:"/gf-site/docs/2.4.x/\u5f00\u53d1\u5de5\u5177/\u4ea4\u53c9\u7f16\u8bd1-build"},next:{title:"\u63a5\u53e3\u89c4\u8303\uff08v2.5+\uff09-gen ctrl",permalink:"/gf-site/docs/2.4.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen-\u91cd\u70b9/\u63a5\u53e3\u89c4\u8303\uff08v2.5+\uff09-gen ctrl"}},c={},d=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u6700\u65b0\u7684 ",(0,i.jsx)(n.code,{children:"CLI"})," \u5de5\u5177\u7248\u672c\u529f\u80fd\u4f1a\u968f\u7740 ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u6700\u65b0\u7248\u672c\u7f16\u8bd1\uff0c\u5f15\u5165\u5982\u679c\u672c\u5730\u7684 ",(0,i.jsx)(n.code,{children:"CLI"})," \u5de5\u5177\u81ea\u52a8\u5316\u751f\u6210\u7684\u4ee3\u7801\u4e0e\u9879\u76ee\u7684 ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7248\u672c\u51fa\u73b0\u517c\u5bb9\u6027\u95ee\u9898\u65f6\uff0c\u5efa\u8bae\u5347\u7ea7\u9879\u76ee\u6846\u67b6\u7248\u672c\uff0c\u6216\u8005\u81ea\u5b9a\u4e49\u5b89\u88c5\u65e7\u7248\u672c\u7684 ",(0,i.jsx)(n.code,{children:"CLI"})," \u5de5\u5177\u3002\u65e7\u7248\u672cCLI\u5de5\u5177\u5b89\u88c5\u65b9\u5f0f\u53c2\u8003\u4ed3\u5e93\u9996\u9875\u4ecb\u7ecd\uff1a ",(0,i.jsx)(n.a,{href:"https://github.com/gogf/gf-cli",children:"https://github.com/gogf/gf-cli"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'$ gf gen -h\nUSAGE\n    gf gen COMMAND [OPTION]\n\nCOMMAND\n    dao         automatically generate go files for dao/do/entity\n    pb          parse proto files and generate protobuf go files\n    pbentity    generate entity message files in protobuf3 format\n    service     parse struct and associated functions from packages to generate service go file\n\nDESCRIPTION\n    The "gen" command is designed for multiple generating purposes.\n    It\'s currently supporting generating go files for ORM models, protobuf and protobuf entity files.\n    Please use "gf gen dao -h" for specified type help.\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"output/goframe-v2.4-md/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90-gen-%E9%87%8D%E7%82%B9/%E6%8E%A5%E5%8F%A3%E8%A7%84%E8%8C%83%EF%BC%88v2.5+%EF%BC%89-gen%20ctrl",children:"\u63a5\u53e3\u89c4\u8303\uff08v2.5+\uff09-gen ctrl"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"output/goframe-v2.4-md/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90-gen-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E8%A7%84%E8%8C%83-gen%20dao",children:"\u6570\u636e\u89c4\u8303-gen dao"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"output/goframe-v2.4-md/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90-gen-%E9%87%8D%E7%82%B9/%E6%A8%A1%E5%9D%97%E8%A7%84%E8%8C%83-gen%20service",children:"\u6a21\u5757\u89c4\u8303-gen service"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"output/goframe-v2.4-md/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90-gen-%E9%87%8D%E7%82%B9/%E6%9E%9A%E4%B8%BE%E7%BB%B4%E6%8A%A4-gen%20enums",children:"\u679a\u4e3e\u7ef4\u62a4-gen enums"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"output/goframe-v2.4-md/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90-gen-%E9%87%8D%E7%82%B9/%E5%8D%8F%E8%AE%AE%E7%BC%96%E8%AF%91-gen%20pb",children:"\u534f\u8bae\u7f16\u8bd1-gen pb"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"output/goframe-v2.4-md/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90-gen-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E8%A1%A8PB-gen%20pbentity",children:"\u6570\u636e\u8868PB-gen pbentity"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>E});var i=t(296540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function E(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);