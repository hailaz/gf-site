"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[45973],{244256:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var d=r(474848),s=r(28453);const i={title:"\u6570\u636e\u67e5\u8be2",sidebar_position:3},l=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/\u6570\u636e\u67e5\u8be2",title:"\u6570\u636e\u67e5\u8be2",description:"Where/And/Or \u67e5\u8be2\u6761\u4ef6",source:"@site/versioned_docs/version-1.14.x/1-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-\u6570\u636e\u67e5\u8be2.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/\u6570\u636e\u67e5\u8be2",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/\u6570\u636e\u67e5\u8be2",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.14.x/1-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-\u6570\u636e\u67e5\u8be2.md",tags:[],version:"1.14.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:3,frontMatter:{title:"\u6570\u636e\u67e5\u8be2",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u5220\u9664",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/\u66f4\u65b0\u5220\u9664"},next:{title:"\u6a21\u578b\u5173\u8054",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/\u6a21\u578b\u5173\u8054"}},u={},a=[{value:"<code>Where/And/Or</code> \u67e5\u8be2\u6761\u4ef6",id:"whereandor-\u67e5\u8be2\u6761\u4ef6",level:2},{value:"<code>WherePri</code> \u652f\u6301\u4e3b\u952e\u7684\u67e5\u8be2\u6761\u4ef6",id:"wherepri-\u652f\u6301\u4e3b\u952e\u7684\u67e5\u8be2\u6761\u4ef6",level:2},{value:"<code>All/One/Array/Value/Count</code> \u6570\u636e\u67e5\u8be2",id:"allonearrayvaluecount-\u6570\u636e\u67e5\u8be2",level:2},{value:"<code>Struct/Structs/Scan</code> \u6570\u636e\u67e5\u8be2",id:"structstructsscan-\u6570\u636e\u67e5\u8be2",level:2},{value:"<code>Find*</code> \u652f\u6301\u4e3b\u952e\u6761\u4ef6\u7684\u6570\u636e\u67e5\u8be2",id:"find-\u652f\u6301\u4e3b\u952e\u6761\u4ef6\u7684\u6570\u636e\u67e5\u8be2",level:2},{value:"<code>LeftJoin/RightJoin/InnerJoin</code> \u5173\u8054\u67e5\u8be2",id:"leftjoinrightjoininnerjoin-\u5173\u8054\u67e5\u8be2",level:2},{value:"<code>Group/Order</code> \u5206\u7ec4\u4e0e\u6392\u5e8f",id:"grouporder-\u5206\u7ec4\u4e0e\u6392\u5e8f",level:2},{value:"<code>Having</code> \u6761\u4ef6\u8fc7\u6ee4",id:"having-\u6761\u4ef6\u8fc7\u6ee4",level:2},{value:"\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u522b\u540d",id:"\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u522b\u540d",level:2},{value:"\u6570\u636e\u67e5\u8be2\u793a\u4f8b",id:"\u6570\u636e\u67e5\u8be2\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1, \u57fa\u672c\u4f7f\u7528",id:"\u793a\u4f8b1-\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u793a\u4f8b2, <code>select in</code> \u67e5\u8be2",id:"\u793a\u4f8b2-select-in-\u67e5\u8be2",level:3},{value:"\u793a\u4f8b3, <code>like</code> \u67e5\u8be2",id:"\u793a\u4f8b3-like-\u67e5\u8be2",level:3},{value:"\u793a\u4f8b4, <code>sum</code> \u67e5\u8be2",id:"\u793a\u4f8b4-sum-\u67e5\u8be2",level:3},{value:"\u793a\u4f8b5, <code>count</code> \u67e5\u8be2",id:"\u793a\u4f8b5-count-\u67e5\u8be2",level:3},{value:"\u793a\u4f8b6, <code>distinct</code> \u67e5\u8be2",id:"\u793a\u4f8b6-distinct-\u67e5\u8be2",level:3},{value:"\u793a\u4f8b7, <code>between</code> \u67e5\u8be2",id:"\u793a\u4f8b7-between-\u67e5\u8be2",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h2,{id:"whereandor-\u67e5\u8be2\u6761\u4ef6",children:[(0,d.jsx)(n.code,{children:"Where/And/Or"})," \u67e5\u8be2\u6761\u4ef6"]}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u7528\u4e8e\u4f20\u9012\u67e5\u8be2\u6761\u4ef6\u53c2\u6570\uff0c\u652f\u6301\u7684\u53c2\u6570\u4e3a\u4efb\u610f\u7684 ",(0,d.jsx)(n.code,{children:"string/map/slice/struct/*struct"})," \u7c7b\u578b\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Where"})," \u6761\u4ef6\u53c2\u6570\u63a8\u8350\u4f7f\u7528\u5b57\u7b26\u4e32\u7684\u53c2\u6570\u4f20\u9012\u65b9\u5f0f\uff08\u5e76\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"?"})," \u5360\u4f4d\u7b26\u9884\u5904\u7406\uff09\uff0c\u56e0\u4e3a ",(0,d.jsx)(n.code,{children:"map"}),"/ ",(0,d.jsx)(n.code,{children:"struct"})," \u7c7b\u578b\u4f5c\u4e3a\u67e5\u8be2\u53c2\u6570\u65e0\u6cd5\u4fdd\u8bc1\u987a\u5e8f\u6027\uff0c\u4e14\u5728\u90e8\u5206\u60c5\u51b5\u4e0b\uff08\u6570\u636e\u5e93\u6709\u65f6\u4f1a\u5e2e\u52a9\u4f60\u81ea\u52a8\u8fdb\u884c\u67e5\u8be2\u7d22\u5f15\u4f18\u5316\uff09\uff0c\u6570\u636e\u5e93\u7684\u7d22\u5f15\u548c\u4f60\u4f20\u9012\u7684\u67e5\u8be2\u6761\u4ef6\u987a\u5e8f\u6709\u4e00\u5b9a\u5173\u7cfb\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528\u591a\u4e2a ",(0,d.jsx)(n.code,{children:"Where"})," \u65b9\u6cd5\u8fde\u63a5\u67e5\u8be2\u6761\u4ef6\u65f6\uff0c\u4f5c\u7528\u540c ",(0,d.jsx)(n.code,{children:"And"}),"\u3002 \u6b64\u5916\uff0c\u5f53\u5b58\u5728\u591a\u4e2a\u67e5\u8be2\u6761\u4ef6\u65f6\uff0c ",(0,d.jsx)(n.code,{children:"gdb"})," \u4f1a\u9ed8\u8ba4\u5c06\u591a\u4e2a\u6761\u4ef6\u5206\u522b\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"()"})," \u7b26\u53f7\u8fdb\u884c\u5305\u542b\uff0c\u8fd9\u79cd\u8bbe\u8ba1\u53ef\u4ee5\u975e\u5e38\u53cb\u597d\u5730\u652f\u6301\u67e5\u8be2\u6761\u4ef6\u5206\u7ec4\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// WHERE `uid`=1\nWhere("uid=1")\nWhere("uid", 1)\nWhere("uid=?", 1)\nWhere(g.Map("uid" : 1))\n// WHERE `uid` <= 1000 AND `age` >= 18\nWhere(g.Map(\n    "uid <=" : 1000,\n    "age >=" : 18,\n))\n// WHERE (`uid` <= 1000) AND (`age` >= 18)\nWhere("uid <=?", 1000).Where("age >=?", 18)\nWhere("uid <=?", 1000).And("age >=?", 18)\n// WHERE `level`=1 OR `money`>=1000000\nWhere("level=? OR money >=?", 1, 1000000)\n// WHERE (`level`=1) OR (`money`>=1000000)\nWhere("level", 1).Or("money >=", 1000000)\n// WHERE `uid` IN(1,2,3)\nWhere("uid IN(?)", g.Slice{1,2,3})\n\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"struct"})," \u53c2\u6570\u7684\u793a\u4f8b\uff0c\u5176\u4e2d ",(0,d.jsx)(n.code,{children:"orm"})," \u7684 ",(0,d.jsx)(n.code,{children:"tag"})," \u7528\u4e8e\u6307\u5b9a ",(0,d.jsx)(n.code,{children:"struct"})," \u5c5e\u6027\u4e0e\u8868\u5b57\u6bb5\u7684\u6620\u5c04\u5173\u7cfb\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'type Condition struct{\n    Sex int `orm:"sex"`\n    Age int `orm:"age"`\n}\nWhere(Condition{1, 18})\n// WHERE `sex`=1 AND `age`=18\n\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"wherepri-\u652f\u6301\u4e3b\u952e\u7684\u67e5\u8be2\u6761\u4ef6",children:[(0,d.jsx)(n.code,{children:"WherePri"})," \u652f\u6301\u4e3b\u952e\u7684\u67e5\u8be2\u6761\u4ef6"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"WherePri"})," \u65b9\u6cd5\u7684\u529f\u80fd\u540c ",(0,d.jsx)(n.code,{children:"Where"}),"\uff0c\u4f46\u63d0\u4f9b\u4e86\u5bf9\u8868\u4e3b\u952e\u7684\u667a\u80fd\u8bc6\u522b\uff0c\u5e38\u7528\u4e8e\u6839\u636e\u4e3b\u952e\u7684\u4fbf\u6377\u6570\u636e\u67e5\u8be2\u3002\u5047\u5982 ",(0,d.jsx)(n.code,{children:"user"})," \u8868\u7684\u4e3b\u952e\u4e3a ",(0,d.jsx)(n.code,{children:"uid"}),"\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e0b ",(0,d.jsx)(n.code,{children:"Where"})," \u4e0e ",(0,d.jsx)(n.code,{children:"WherePri"})," \u7684\u533a\u522b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// WHERE `uid`=1\nTable("user").Where("uid", 1)\nTable("user").WherePri(1)\n// WHERE `uid` IN(1,2,3)\nTable("user").Where("uid", g.Slice{1,2,3})\nTable("user").WherePri(g.Slice{1,2,3})\n\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"WherePri"})," \u65b9\u6cd5\u4e14\u7ed9\u5b9a\u53c2\u6570\u4e3a\u5355\u4e00\u7684\u53c2\u6570\u57fa\u672c\u7c7b\u578b\u6216\u8005 ",(0,d.jsx)(n.code,{children:"slice"})," \u7c7b\u578b\u65f6\uff0c\u5c06\u4f1a\u88ab\u8bc6\u522b\u4e3a\u4e3b\u952e\u7684\u67e5\u8be2\u6761\u4ef6\u503c\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"allonearrayvaluecount-\u6570\u636e\u67e5\u8be2",children:[(0,d.jsx)(n.code,{children:"All/One/Array/Value/Count"})," \u6570\u636e\u67e5\u8be2"]}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u56db\u4e2a\u65b9\u6cd5\u662f\u6570\u636e\u67e5\u8be2\u6bd4\u8f83\u5e38\u7528\u7684\u65b9\u6cd5\uff1a"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"All"})," \u7528\u4e8e\u67e5\u8be2\u5e76\u8fd4\u56de\u591a\u6761\u8bb0\u5f55\u7684\u5217\u8868/\u6570\u7ec4\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"One"})," \u7528\u4e8e\u67e5\u8be2\u5e76\u8fd4\u56de\u5355\u6761\u8bb0\u5f55\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Array"})," \u7528\u4e8e\u67e5\u8be2\u6307\u5b9a\u5b57\u6bb5\u5217\u7684\u6570\u636e\uff0c\u8fd4\u56de\u6570\u7ec4\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Value"})," \u7528\u4e8e\u67e5\u8be2\u5e76\u8fd4\u56de\u4e00\u4e2a\u5b57\u6bb5\u503c\uff0c\u5f80\u5f80\u9700\u8981\u7ed3\u5408 ",(0,d.jsx)(n.code,{children:"Fields"})," \u65b9\u6cd5\u4f7f\u7528\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Count"})," \u7528\u4e8e\u67e5\u8be2\u5e76\u8fd4\u56de\u8bb0\u5f55\u6570\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u4e5f\u53ef\u4ee5\u770b\u5f97\u5230\u8fd9\u56db\u4e2a\u65b9\u6cd5\u5b9a\u4e49\u4e2d\u4e5f\u652f\u6301\u6761\u4ef6\u53c2\u6570\u7684\u76f4\u63a5\u8f93\u5165\uff0c\u53c2\u6570\u7c7b\u578b\u4e0e ",(0,d.jsx)(n.code,{children:"Where"})," \u65b9\u6cd5\u4e00\u81f4\u3002\u4f46\u9700\u8981\u6ce8\u610f\uff0c\u5176\u4e2d ",(0,d.jsx)(n.code,{children:"Array"})," \u548c ",(0,d.jsx)(n.code,{children:"Value"})," \u65b9\u6cd5\u7684\u53c2\u6570\u4e2d\u81f3\u5c11\u5e94\u8be5\u8f93\u5165\u5b57\u6bb5\u53c2\u6570\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT `name` FROM `user` WHERE `score`>60\nTable("user").Array("name", "score>?", 60)\n\n// SELECT `name` FROM `user` WHERE `uid`=1\nTable("user").Value("name", "uid=1")\nTable("user").Value("name", "uid", 1)\n// SELECT `name` FROM `user` WHERE `uid` IN(1,2,3)\nTable("user").Value("name", "uid", g.Slice{1,2,3})\n\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"structstructsscan-\u6570\u636e\u67e5\u8be2",children:[(0,d.jsx)(n.code,{children:"Struct/Structs/Scan"})," \u6570\u636e\u67e5\u8be2"]}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u7528\u4e8e\u4fbf\u6377\u5730\u5c06\u67e5\u8be2\u7684\u7ed3\u679c\u8f6c\u6362\u4e3a ",(0,d.jsx)(n.code,{children:"struct/*struct"})," \u6216\u8005 ",(0,d.jsx)(n.code,{children:"[]struct/[]*struct"})," \u6570\u636e\u3002"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Struct"}),": \u5c06\u67e5\u8be2\u7ed3\u679c\u8f6c\u6362\u4e3a\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"struct"})," \u5bf9\u8c61\uff0c\u67e5\u8be2\u7ed3\u679c\u5e94\u5f53\u662f\u7279\u5b9a\u7684\u4e00\u6761\u8bb0\u5f55\uff0c\u5e76\u4e14 ",(0,d.jsx)(n.code,{children:"pointer"})," \u53c2\u6570\u5e94\u5f53\u4e3a ",(0,d.jsx)(n.code,{children:"struct"})," \u5bf9\u8c61\u7684\u6307\u9488\u5730\u5740\uff08 ",(0,d.jsx)(n.code,{children:"*struct"})," \u6216\u8005 ",(0,d.jsx)(n.code,{children:"**struct"}),"\uff09\uff0c\u4f7f\u7528\u65b9\u5f0f\u4f8b\u5982\uff1a"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'    type User struct {\n        Id         int\n        Passport   string\n        Password   string\n        NickName   string\n        CreateTime gtime.Time\n    }\n    user := new(User)\n    err  := db.Table("user").Where("id", 1).Struct(user)\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'    user \uff1a= &User{}\n    err  := db.Table("user").Where("id", 1).Struct(user)\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u524d\u4e24\u79cd\u65b9\u5f0f\u90fd\u662f\u9884\u5148\u521d\u59cb\u5316\u5bf9\u8c61\uff08\u63d0\u524d\u5206\u914d\u5185\u5b58\uff09\uff0c\u63a8\u8350\u7684\u65b9\u5f0f\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'    user := (*User)(nil)\n    err  := db.Table("user").Where("id", 1).Struct(&user)\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u79cd\u65b9\u5f0f\u53ea\u6709\u5728\u67e5\u8be2\u5230\u6570\u636e\u7684\u65f6\u5019\u624d\u4f1a\u6267\u884c\u521d\u59cb\u5316\u53ca\u5185\u5b58\u5206\u914d\u3002\u6ce8\u610f\u5728\u7528\u6cd5\u4e0a\u7684\u533a\u522b\uff0c\u7279\u522b\u662f\u4f20\u9012\u53c2\u6570\u7c7b\u578b\u7684\u5dee\u522b\uff08\u524d\u4e24\u79cd\u65b9\u5f0f\u4f20\u9012\u7684\u53c2\u6570\u7c7b\u578b\u662f ",(0,d.jsx)(n.code,{children:"*User"}),"\uff0c\u8fd9\u91cc\u4f20\u9012\u7684\u53c2\u6570\u7c7b\u578b\u5176\u5b9e\u662f ",(0,d.jsx)(n.code,{children:"**User"}),"\uff09\u3002\n2. ",(0,d.jsx)(n.code,{children:"Structs"}),": \u5c06\u591a\u6761\u67e5\u8be2\u7ed3\u679c\u96c6\u8f6c\u6362\u4e3a\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"[]struct/[]*struct"})," \u6570\u7ec4\uff0c\u67e5\u8be2\u7ed3\u679c\u5e94\u5f53\u662f\u591a\u6761\u8bb0\u5f55\u7ec4\u6210\u7684\u7ed3\u679c\u96c6\uff0c\u5e76\u4e14 ",(0,d.jsx)(n.code,{children:"pointer"})," \u5e94\u5f53\u4e3a\u6570\u7ec4\u7684\u6307\u9488\u5730\u5740\uff0c\u4f7f\u7528\u65b9\u5f0f\u4f8b\u5982\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'    users := ([]User)(nil)\n    // \u6216\u8005 var users []User\n    err := db.Table("user").Structs(&users)\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'    users := ([]*User)(nil)\n    // \u6216\u8005 var user []*User\n    err := db.Table("user").Structs(&users)\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Scan"}),": \u8be5\u65b9\u6cd5\u4f1a\u6839\u636e\u8f93\u5165\u53c2\u6570 ",(0,d.jsx)(n.code,{children:"pointer"})," \u7684\u7c7b\u578b\u9009\u62e9\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"Struct"})," \u8fd8\u662f ",(0,d.jsx)(n.code,{children:"Structs"})," \u65b9\u6cd5\u3002\u5982\u679c\u7ed3\u679c\u662f\u7279\u5b9a\u7684\u4e00\u6761\u8bb0\u5f55\uff0c\u90a3\u4e48\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"Struct"})," \u65b9\u6cd5\uff1b\u5982\u679c\u7ed3\u679c\u662f ",(0,d.jsx)(n.code,{children:"slice"})," \u7c7b\u578b\u5219\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"Structs"})," \u65b9\u6cd5\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"find-\u652f\u6301\u4e3b\u952e\u6761\u4ef6\u7684\u6570\u636e\u67e5\u8be2",children:[(0,d.jsx)(n.code,{children:"Find*"})," \u652f\u6301\u4e3b\u952e\u6761\u4ef6\u7684\u6570\u636e\u67e5\u8be2"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Find*"})," \u65b9\u6cd5\u5305\u542b\uff1a ",(0,d.jsx)(n.code,{children:"FindAll/FindOne/FineValue/FindCount/FindScan"}),"\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u4e0e ",(0,d.jsx)(n.code,{children:"All/One/Value/Count/Scan"})," \u65b9\u6cd5\u7684\u533a\u522b\u5728\u4e8e\uff0c\u5f53\u65b9\u6cd5\u76f4\u63a5\u7ed9\u5b9a\u6761\u4ef6\u53c2\u6570\u65f6\uff0c\u524d\u8005\u7684\u6548\u679c\u4e0e ",(0,d.jsx)(n.code,{children:"WherePri"})," \u65b9\u6cd5\u4e00\u81f4\uff1b\u800c\u540e\u8005\u7684\u6548\u679c\u4e0e ",(0,d.jsx)(n.code,{children:"Where"})," \u65b9\u6cd5\u4e00\u81f4\u3002\u4e5f\u5c31\u662f\u8bf4 ",(0,d.jsx)(n.code,{children:"Find*"})," \u65b9\u6cd5\u7684\u6761\u4ef6\u53c2\u6570\u652f\u6301\u667a\u80fd\u4e3b\u952e\u8bc6\u522b\u7279\u6027\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"leftjoinrightjoininnerjoin-\u5173\u8054\u67e5\u8be2",children:[(0,d.jsx)(n.code,{children:"LeftJoin/RightJoin/InnerJoin"})," \u5173\u8054\u67e5\u8be2"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"LeftJoin"})," \u5de6\u5173\u8054\u67e5\u8be2\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"RightJoin"})," \u53f3\u5173\u8054\u67e5\u8be2\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"InnerJoin"})," \u5185\u5173\u8054\u67e5\u8be2\uff1b"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// \u67e5\u8be2\u7b26\u5408\u6761\u4ef6\u7684\u5355\u6761\u8bb0\u5f55(\u7b2c\u4e00\u6761)\n// SELECT u.*,ud.site FROM user u LEFT JOIN user_detail ud ON u.uid=ud.uid WHERE u.uid=1 LIMIT 1\nr, err := db.Table("user u").LeftJoin("user_detail ud", "u.uid=ud.uid").Fields("u.*,ud.site").Where("u.uid", 1).One()\n\n// \u67e5\u8be2\u6307\u5b9a\u5b57\u6bb5\u503c\n// SELECT ud.site FROM user u RIGHT JOIN user_detail ud ON u.uid=ud.uid WHERE u.uid=1 LIMIT 1\nr, err := db.Table("user u").RightJoin("user_detail ud", "u.uid=ud.uid").Fields("ud.site").Where("u.uid", 1).Value()\n\n// \u5206\u7ec4\u53ca\u6392\u5e8f\n// SELECT u.*,ud.city FROM user u INNER JOIN user_detail ud ON u.uid=ud.uid GROUP BY city ORDER BY register_time asc\nr, err := db.Table("user u").InnerJoin("user_detail ud", "u.uid=ud.uid").Fields("u.*,ud.city").Group("city").Order("register_time asc").All()\n\n// \u4e0d\u4f7f\u7528join\u7684\u8054\u8868\u67e5\u8be2\n// SELECT u.*,ud.city FROM user u,user_detail ud WHERE u.uid=ud.uid\nr, err := db.Table("user u,user_detail ud").Where("u.uid=ud.uid").Fields("u.*,ud.city").All()\n\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"grouporder-\u5206\u7ec4\u4e0e\u6392\u5e8f",children:[(0,d.jsx)(n.code,{children:"Group/Order"})," \u5206\u7ec4\u4e0e\u6392\u5e8f"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Group"})," \u65b9\u6cd5\u7528\u4e8e\u67e5\u8be2\u5206\u7ec4\uff0c ",(0,d.jsx)(n.code,{children:"Order"})," \u65b9\u6cd5\u7528\u4e8e\u67e5\u8be2\u6392\u5e8f\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT COUNT(*) total,age FROM `user` GROUP BY age\nr, err := db.Table("user").Fields("COUNT(*) total,age").Group("age").All()\n\n// SELECT * FROM `student` ORDER BY class asc,course asc,score desc\nr, err := db.Table("student").Order("class asc,course asc,score desc").All()\n\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"having-\u6761\u4ef6\u8fc7\u6ee4",children:[(0,d.jsx)(n.code,{children:"Having"})," \u6761\u4ef6\u8fc7\u6ee4"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Having"})," \u65b9\u6cd5\u7528\u4e8e\u67e5\u8be2\u7ed3\u679c\u7684\u6761\u4ef6\u8fc7\u6ee4\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT COUNT(*) total,age FROM `user` GROUP BY age HAVING total>100\nr, err := db.Table("user").Fields("COUNT(*) total,age").Group("age").Having("total>100").All()\n\n// SELECT * FROM `student` ORDER BY class HAVING score>60\nr, err := db.Table("student").Order("class").Having("score>?", 60).All()\n\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u522b\u540d",children:"\u81ea\u5b9a\u4e49\u6570\u636e\u8868\u522b\u540d"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` AS u LEFT JOIN `user_detail` as ud ON(ud.id=u.id) WHERE u.id=1 LIMIT 1\nr, err := db.Table("user", "u").LeftJoin("user_detail", "ud", "ud.id=u.id").Where("u.id", 1).One()\nr, err := db.Table("user").As("u").LeftJoin("user_detail", "ud", "ud.id=u.id").Where("u.id", 1).One()\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u6570\u636e\u67e5\u8be2\u793a\u4f8b",children:"\u6570\u636e\u67e5\u8be2\u793a\u4f8b"}),"\n",(0,d.jsx)(n.h3,{id:"\u793a\u4f8b1-\u57fa\u672c\u4f7f\u7528",children:"\u793a\u4f8b1, \u57fa\u672c\u4f7f\u7528"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Where + string"}),"\uff0c\u6761\u4ef6\u53c2\u6570\u4f7f\u7528\u5b57\u7b26\u4e32\u548c\u9884\u5904\u7406\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// \u67e5\u8be2\u591a\u6761\u8bb0\u5f55\u5e76\u4f7f\u7528Limit\u5206\u9875\n// SELECT * FROM user WHERE uid>1 LIMIT 0,10\nr, err := db.Table("user").Where("uid > ?", 1).Limit(0, 10).All()\n\n// \u4f7f\u7528Fields\u65b9\u6cd5\u67e5\u8be2\u6307\u5b9a\u5b57\u6bb5\n// \u672a\u4f7f\u7528Fields\u65b9\u6cd5\u6307\u5b9a\u67e5\u8be2\u5b57\u6bb5\u65f6\uff0c\u9ed8\u8ba4\u67e5\u8be2\u4e3a*\n// SELECT uid,name FROM user WHERE uid>1 LIMIT 0,10\nr, err := db.Table("user").Fileds("uid,name").Where("uid > ?", 1).Limit(0, 10).All()\n\n// \u652f\u6301\u591a\u79cdWhere\u6761\u4ef6\u53c2\u6570\u7c7b\u578b\n// SELECT * FROM user WHERE uid=1 LIMIT 1\nr, err := db.Table("user").Where("u.uid=1",).One()\nr, err := db.Table("user").Where("u.uid", 1).One()\nr, err := db.Table("user").Where("u.uid=?", 1).One()\n// SELECT * FROM user WHERE (uid=1) AND (name=\'john\') LIMIT 1\nr, err := db.Table("user").Where("uid", 1).Where("name", "john").One()\nr, err := db.Table("user").Where("uid=?", 1).And("name=?", "john").One()\n// SELECT * FROM user WHERE (uid=1) OR (name=\'john\') LIMIT 1\nr, err := db.Table("user").Where("uid=?", 1).Or("name=?", "john").One()\n\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Where + slice"}),"\uff0c\u9884\u5904\u7406\u53c2\u6570\u53ef\u76f4\u63a5\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"slice"})," \u53c2\u6570\u7ed9\u5b9a\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM user WHERE age>18 AND name like \'%john%\'\nr, err := db.Table("user").Where("age>? AND name like ?", g.Slice{18, "%john%"}).All()\n// SELECT * FROM user WHERE status=1\nr, err := db.Table("user").Where("status=?", g.Slice{1}).All()\n\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Where + map"}),"\uff0c\u6761\u4ef6\u53c2\u6570\u4f7f\u7528\u4efb\u610f ",(0,d.jsx)(n.code,{children:"map"})," \u7c7b\u578b\u4f20\u9012\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM user WHERE uid=1 AND name=\'john\' LIMIT 1\nr, err := db.Table("user").Where(g.Map{"uid" : 1, "name" : "john"}).One()\n// SELECT * FROM user WHERE uid=1 AND age>18 LIMIT 1\nr, err := db.Table("user").Where(g.Map{"uid" : 1, "age>" : 18}).One()\n\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Where + struct/*struct"}),"\uff0c ",(0,d.jsx)(n.code,{children:"struct"})," \u6807\u7b7e\u652f\u6301 ",(0,d.jsx)(n.code,{children:"orm/json"}),"\uff0c\u6620\u5c04\u5c5e\u6027\u5230\u5b57\u6bb5\u540d\u79f0\u5173\u7cfb\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Id       int    `json:"uid"`\n    UserName string `orm:"name"`\n}\n// SELECT * FROM user WHERE uid =1 AND name=\'john\' LIMIT 1\nr, err := db.Table("user").Where(User{ Id : 1, UserName : "john"}).One()\n// SELECT * FROM user WHERE uid =1 LIMIT 1\nr, err := db.Table("user").Where(&User{ Id : 1}).One()\n\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u4ee5\u4e0a\u7684\u67e5\u8be2\u6761\u4ef6\u76f8\u5bf9\u6bd4\u8f83\u7b80\u5355\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u6bd4\u8f83\u590d\u6742\u7684\u67e5\u8be2\u793a\u4f8b\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'condition := g.Map{\n    "title like ?"         : "%\u4e5d\u5be8%",\n    "online"               : 1,\n    "hits between ? and ?" : g.Slice{1, 10},\n    "exp > 0"              : nil,\n    "category"             : g.Slice{100, 200},\n}\nresult, err := db.Table("article").Where(condition).All()\n// SELECT * FROM article WHERE title like \'%\u4e5d\u5be8%\' AND online=1 AND hits between 1 and 10 AND exp > 0 AND category IN(100,200)\n\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"\u793a\u4f8b2-select-in-\u67e5\u8be2",children:["\u793a\u4f8b2, ",(0,d.jsx)(n.code,{children:"select in"})," \u67e5\u8be2"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528\u5b57\u7b26\u4e32\u3001 ",(0,d.jsx)(n.code,{children:"slice"})," \u53c2\u6570\u7c7b\u578b\u3002\u5f53\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"slice"})," \u53c2\u6570\u7c7b\u578b\u65f6\uff0c\u9884\u5904\u7406\u5360\u4f4d\u7b26\u53ea\u9700\u8981\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"?"})," \u5373\u53ef\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM user WHERE uid IN(100,10000,90000)\nr, err := db.Table("user").Where("uid IN(?,?,?)", 100, 10000, 90000).All()\nr, err := db.Table("user").Where("uid", g.Slice{100, 10000, 90000}).All()\n// SELECT * FROM user WHERE gender=1 AND uid IN(100,10000,90000)\nr, err := db.Table("user").Where("gender=? AND uid IN(?)", 1, g.Slice{100, 10000, 90000}).All()\n// SELECT COUNT(*) FROM user WHERE age in(18,50)\nr, err := db.Table("user").Where("age IN(?,?)", 18, 50).Count()\nr, err := db.Table("user").Where("age", g.Slice{18, 50}).Count()\n\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528\u4efb\u610f ",(0,d.jsx)(n.code,{children:"map"})," \u53c2\u6570\u7c7b\u578b\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM user WHERE gender=1 AND uid IN(100,10000,90000)\nr, err := db.Table("user").Where(g.Map{\n    "gender" : 1,\n    "uid"    : g.Slice{100,10000,90000},\n}).All()\n\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"struct"})," \u53c2\u6570\u7c7b\u578b\uff0c\u6ce8\u610f\u67e5\u8be2\u6761\u4ef6\u7684\u987a\u5e8f\u548c ",(0,d.jsx)(n.code,{children:"struct"})," \u7684\u5c5e\u6027\u5b9a\u4e49\u987a\u5e8f\u6709\u5173\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Id     []int  `orm:"uid"`\n    Gender int    `orm:"gender"`\n}\n// SELECT * FROM `user` WHERE uid IN(100,10000,90000) AND gender=1\nr, err := db.Table("user").Where(User{\n    "gender" : 1,\n    "uid"    : []int{100, 10000, 90000},\n}).All()\n\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"\u793a\u4f8b3-like-\u67e5\u8be2",children:["\u793a\u4f8b3, ",(0,d.jsx)(n.code,{children:"like"})," \u67e5\u8be2"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE name like \'%john%\'\nr, err := db.Table("user").Where("name like ?", "%john%").All()\n// SELECT * FROM `user` WHERE birthday like \'1990-%\'\nr, err := db.Table("user").Where("birthday like ?", "1990-%").All()\n\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"\u793a\u4f8b4-sum-\u67e5\u8be2",children:["\u793a\u4f8b4, ",(0,d.jsx)(n.code,{children:"sum"})," \u67e5\u8be2"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT SUM(score) FROM `user` WHERE `uid`=1\nr, err := db.Table("user").Fields("SUM(score)").Where("uid", 1).Value()\n\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"\u793a\u4f8b5-count-\u67e5\u8be2",children:["\u793a\u4f8b5, ",(0,d.jsx)(n.code,{children:"count"})," \u67e5\u8be2"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT COUNT(1) FROM `user` WHERE `birthday`=\'1990-10-01\'\nr, err := db.Table("user").Where("birthday", "1990-10-01").Count()\n// SELECT COUNT(uid) FROM `user` WHERE `birthday`=\'1990-10-01\'\nr, err := db.Table("user").Fields("uid").Where("birthday", "1990-10-01").Count()\n\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"\u793a\u4f8b6-distinct-\u67e5\u8be2",children:["\u793a\u4f8b6, ",(0,d.jsx)(n.code,{children:"distinct"})," \u67e5\u8be2"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT DISTINCT uid,name FROM `user `\nr, err := db.Table("user").Fields("DISTINCT uid,name").All()\n// SELECT COUNT(DISTINCT uid,name) FROM `user `\nr, err := db.Table("user").Fields("DISTINCT uid,name").Count()\n\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"\u793a\u4f8b7-between-\u67e5\u8be2",children:["\u793a\u4f8b7, ",(0,d.jsx)(n.code,{children:"between"})," \u67e5\u8be2"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user ` WHERE age between 18 and 20\nr, err := db.Table("user").Where("age between ? and ?", 18, 20).All()\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var d=r(296540);const s={},i=d.createContext(s);function l(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);