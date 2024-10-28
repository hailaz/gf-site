"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[94761],{91534:(E,B,e)=>{e.r(B),e.d(B,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>t,toc:()=>s});var d=e(474848),n=e(28453);const r={title:"ORM\u94fe\u5f0f\u64cd\u4f5c(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)",sidebar_position:1},i=void 0,t={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c",title:"ORM\u94fe\u5f0f\u64cd\u4f5c(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/1-ORM\u94fe\u5f0f\u64cd\u4f5c.md",sourceDirName:"2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/",permalink:"/gf-site/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/1-ORM\u94fe\u5f0f\u64cd\u4f5c.md",tags:[],version:"2.6.x",sidebarPosition:1,frontMatter:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ORM\u4f7f\u7528\u914d\u7f6e",permalink:"/gf-site/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e"},next:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa",permalink:"/gf-site/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa"}},l={},s=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u90e8\u5206\u4e0d\u652f\u6301\u7684\u64cd\u4f5c",id:"\u90e8\u5206\u4e0d\u652f\u6301\u7684\u64cd\u4f5c",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function h(E){const B={a:"a",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...E.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(B.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,d.jsxs)(B.p,{children:[(0,d.jsx)(B.code,{children:"gdb"})," \u94fe\u5f0f\u64cd\u4f5c\u4f7f\u7528\u65b9\u5f0f\u7b80\u5355\u7075\u6d3b\uff0c\u662f ",(0,d.jsx)(B.code,{children:"GoFrame"})," \u6846\u67b6\u5b98\u65b9\u63a8\u8350\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u65b9\u5f0f\u3002\u94fe\u5f0f\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u6570\u636e\u5e93\u5bf9\u8c61\u7684 ",(0,d.jsx)(B.code,{children:"db.Model"})," \u65b9\u6cd5\u6216\u8005\u4e8b\u52a1\u5bf9\u8c61\u7684 ",(0,d.jsx)(B.code,{children:"tx.Model"})," \u65b9\u6cd5\uff0c\u57fa\u4e8e\u6307\u5b9a\u7684\u6570\u636e\u8868\u8fd4\u56de\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u5bf9\u8c61 ",(0,d.jsx)(B.code,{children:"*Model"}),"\uff0c\u8be5\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u65b9\u6cd5\u3002\u5f53\u524d\u65b9\u6cd5\u5217\u8868\u53ef\u80fd\u6ede\u540e\u4e8e\u6e90\u4ee3\u7801\uff0c\u8be6\u7ec6\u7684\u65b9\u6cd5\u5217\u8868\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\uff1a ",(0,d.jsx)(B.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Model",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb#Model"})]}),"\n",(0,d.jsx)(B.h2,{id:"\u90e8\u5206\u4e0d\u652f\u6301\u7684\u64cd\u4f5c",children:"\u90e8\u5206\u4e0d\u652f\u6301\u7684\u64cd\u4f5c"}),"\n",(0,d.jsx)(B.p,{children:"\u4ee5\u4e0b\u662f\u6700\u65b0\u7248\u672c\u7684\u652f\u6301\u60c5\u51b5"}),"\n",(0,d.jsxs)(B.table,{children:[(0,d.jsx)(B.thead,{children:(0,d.jsxs)(B.tr,{children:[(0,d.jsx)(B.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(B.th,{children:"Replace"}),(0,d.jsx)(B.th,{children:"Save"}),(0,d.jsx)(B.th,{children:"InsertIgnore"}),(0,d.jsx)(B.th,{children:"InsertGetId"}),(0,d.jsx)(B.th,{children:"LastInsertId"}),(0,d.jsx)(B.th,{children:"Transaction"}),(0,d.jsx)(B.th,{children:"RowsAffected"})]})}),(0,d.jsxs)(B.tbody,{children:[(0,d.jsxs)(B.tr,{children:[(0,d.jsx)(B.td,{children:(0,d.jsx)(B.code,{children:"mysql"})}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"})]}),(0,d.jsxs)(B.tr,{children:[(0,d.jsx)(B.td,{children:(0,d.jsx)(B.code,{children:"mariadb"})}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"})]}),(0,d.jsxs)(B.tr,{children:[(0,d.jsx)(B.td,{children:(0,d.jsx)(B.code,{children:"tidb"})}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"})]}),(0,d.jsxs)(B.tr,{children:[(0,d.jsx)(B.td,{children:(0,d.jsx)(B.code,{children:"pgsql"})}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"})]}),(0,d.jsxs)(B.tr,{children:[(0,d.jsx)(B.td,{children:(0,d.jsx)(B.code,{children:"mssql"})}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"})]}),(0,d.jsxs)(B.tr,{children:[(0,d.jsx)(B.td,{children:(0,d.jsx)(B.code,{children:"sqlite"})}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"})]}),(0,d.jsxs)(B.tr,{children:[(0,d.jsx)(B.td,{children:(0,d.jsx)(B.code,{children:"oracle"})}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"})]}),(0,d.jsxs)(B.tr,{children:[(0,d.jsx)(B.td,{children:(0,d.jsx)(B.code,{children:"clickhouse"})}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"})]}),(0,d.jsxs)(B.tr,{children:[(0,d.jsx)(B.td,{children:(0,d.jsx)(B.code,{children:"dm"})}),(0,d.jsx)(B.td,{children:"\u4e0d\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u4ec5\u652f\u6301\u4e3b\u952e\u4e3a ID \u7684\u8bbe\u8ba1"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"}),(0,d.jsx)(B.td,{children:"\u652f\u6301"})]})]})]}),"\n",(0,d.jsx)(B.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,d.jsxs)(B.ul,{children:["\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%A8%A1%E5%9E%8B%E5%88%9B%E5%BB%BA",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E5%86%99%E5%85%A5%E4%BF%9D%E5%AD%98",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%9B%B4%E6%96%B0%E5%88%A0%E9%99%A4",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664"})}),"\n",(0,d.jsxs)(B.li,{children:[(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2"}),"\n",(0,d.jsxs)(B.ul,{children:["\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-WhereWhereOrWhereNot",children:"ORM\u67e5\u8be2-Where/WhereOr/WhereNot"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-AllOneArrayValueCount",children:"ORM\u67e5\u8be2-All/One/Array/Value/Count"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-AllAndCount",children:"ORM\u67e5\u8be2-AllAndCount"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-Scan",children:"ORM\u67e5\u8be2-Scan"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-ScanAndCount",children:"ORM\u67e5\u8be2-ScanAndCount"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-LeftJoinRightJoinInnerJoin",children:"ORM\u67e5\u8be2-LeftJoin/RightJoin/InnerJoin"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-GroupOrderHaving",children:"ORM\u67e5\u8be2-Group/Order/Having"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-UnionUnionAll",children:"ORM\u67e5\u8be2-Union/UnionAll"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-%E5%AD%90%E6%9F%A5%E8%AF%A2%E7%89%B9%E6%80%A7",children:"ORM\u67e5\u8be2-\u5b50\u67e5\u8be2\u7279\u6027"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2/ORM%E6%9F%A5%E8%AF%A2-%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B",children:"ORM\u67e5\u8be2-\u5e38\u7528\u64cd\u4f5c\u793a\u4f8b"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(B.li,{children:[(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%A8%A1%E5%9E%8B%E5%85%B3%E8%81%94",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u5173\u8054"}),"\n",(0,d.jsxs)(B.ul,{children:["\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%A8%A1%E5%9E%8B%E5%85%B3%E8%81%94/%E6%A8%A1%E5%9E%8B%E5%85%B3%E8%81%94-%E5%8A%A8%E6%80%81%E5%85%B3%E8%81%94-ScanList",children:"\u6a21\u578b\u5173\u8054-\u52a8\u6001\u5173\u8054-ScanList"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%A8%A1%E5%9E%8B%E5%85%B3%E8%81%94/%E6%A8%A1%E5%9E%8B%E5%85%B3%E8%81%94-%E9%9D%99%E6%80%81%E5%85%B3%E8%81%94-With%E7%89%B9%E6%80%A7",children:"\u6a21\u578b\u5173\u8054-\u9759\u6001\u5173\u8054-With\u7279\u6027"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E5%AF%B9%E8%B1%A1%E8%BE%93%E5%85%A5",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5bf9\u8c61\u8f93\u5165"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E5%AD%97%E6%AE%B5%E8%BF%87%E6%BB%A4",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E5%AD%97%E6%AE%B5%E8%8E%B7%E5%8F%96",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e8b\u52a1\u5904\u7406"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E4%B8%BB%E4%BB%8E%E5%88%87%E6%8D%A2",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e3b\u4ece\u5207\u6362"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%9F%A5%E8%AF%A2%E7%BC%93%E5%AD%98",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u67e5\u8be2\u7f13\u5b58"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%97%B6%E9%97%B4%E7%BB%B4%E6%8A%A4",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%88%87%E6%8D%A2",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-Hook%E7%89%B9%E6%80%A7",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-Handler%E7%89%B9%E6%80%A7",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027"})}),"\n",(0,d.jsx)(B.li,{children:(0,d.jsx)(B.a,{href:"output/goframe-v2.6-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%82%B2%E8%A7%82%E9%94%81%20&%20%E4%B9%90%E8%A7%82%E9%94%81",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501"})}),"\n"]})]})}function c(E={}){const{wrapper:B}={...(0,n.R)(),...E.components};return B?(0,d.jsx)(B,{...E,children:(0,d.jsx)(h,{...E})}):h(E)}},28453:(E,B,e)=>{e.d(B,{R:()=>i,x:()=>t});var d=e(296540);const n={},r=d.createContext(n);function i(E){const B=d.useContext(r);return d.useMemo((function(){return"function"==typeof E?E(B):{...B,...E}}),[B,E])}function t(E){let B;return B=E.disableParentContext?"function"==typeof E.components?E.components(n):E.components||n:i(E.components),d.createElement(r.Provider,{value:B},E.children)}}}]);