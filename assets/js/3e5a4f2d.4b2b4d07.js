"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[68285],{573872:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var s=r(474848),i=r(28453);const a={title:"\u5199\u5165\u4fdd\u5b58",sidebar_position:1},d=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/\u5199\u5165\u4fdd\u5b58",title:"\u5199\u5165\u4fdd\u5b58",description:"Insert/InsertIgnore/Replace/Save",source:"@site/versioned_docs/version-1.14.x/1-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/1-\u5199\u5165\u4fdd\u5b58.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/\u5199\u5165\u4fdd\u5b58",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/\u5199\u5165\u4fdd\u5b58",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.14.x/1-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/1-\u5199\u5165\u4fdd\u5b58.md",tags:[],version:"1.14.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:1,frontMatter:{title:"\u5199\u5165\u4fdd\u5b58",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u578b\u521b\u5efa",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/\u6a21\u578b\u521b\u5efa"},next:{title:"\u66f4\u65b0\u5220\u9664",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/\u66f4\u65b0\u5220\u9664"}},t={},o=[{value:"<code>Insert/InsertIgnore/Replace/Save</code>",id:"insertinsertignorereplacesave",level:3},{value:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528",id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u793a\u4f8b2\uff0c\u6570\u636e\u6279\u91cf\u5199\u5165",id:"\u793a\u4f8b2\u6570\u636e\u6279\u91cf\u5199\u5165",level:3},{value:"\u793a\u4f8b3\uff0c\u6570\u636e\u6279\u91cf\u4fdd\u5b58",id:"\u793a\u4f8b3\u6570\u636e\u6279\u91cf\u4fdd\u5b58",level:3}];function l(e){const n={blockquote:"blockquote",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"insertinsertignorereplacesave",children:(0,s.jsx)(n.code,{children:"Insert/InsertIgnore/Replace/Save"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u51e0\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\u7528\u4e8e\u6570\u636e\u7684\u5199\u5165\uff0c\u5e76\u4e14\u652f\u6301\u81ea\u52a8\u7684\u5355\u6761\u6216\u8005\u6279\u91cf\u7684\u6570\u636e\u5199\u5165\uff0c\u533a\u522b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Insert"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"INSERT INTO"})," \u8bed\u53e5\u8fdb\u884c\u6570\u636e\u5e93\u5199\u5165\uff0c\u5982\u679c\u5199\u5165\u7684\u6570\u636e\u4e2d\u5b58\u5728\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u65f6\uff0c\u8fd4\u56de\u5931\u8d25\uff0c\u5426\u5219\u5199\u5165\u4e00\u6761\u65b0\u6570\u636e\uff1b"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"InsertIgnore"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"INSERT IGNORE INTO"})," \u8bed\u53e5\u8fdb\u884c\u6570\u636e\u5e93\u5199\u5165\uff0c\u5982\u679c\u5199\u5165\u7684\u6570\u636e\u4e2d\u5b58\u5728\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u65f6\uff0c\u5ffd\u7565\u9519\u8bef\u7ee7\u7eed\u6267\u884c\u5199\u5165\uff1b"]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Replace"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"REPLACE INTO"})," \u8bed\u53e5\u8fdb\u884c\u6570\u636e\u5e93\u5199\u5165\uff0c\u5982\u679c\u5199\u5165\u7684\u6570\u636e\u4e2d\u5b58\u5728\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u65f6\uff0c\u4f1a\u5220\u9664\u539f\u6709\u7684\u8bb0\u5f55\uff0c\u5fc5\u5b9a\u4f1a\u5199\u5165\u4e00\u6761\u65b0\u8bb0\u5f55\uff1b"]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Save"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"INSERT INTO"})," \u8bed\u53e5\u8fdb\u884c\u6570\u636e\u5e93\u5199\u5165\uff0c\u5982\u679c\u5199\u5165\u7684\u6570\u636e\u4e2d\u5b58\u5728\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u65f6\uff0c\u66f4\u65b0\u539f\u6709\u6570\u636e\uff0c\u5426\u5219\u5199\u5165\u4e00\u6761\u65b0\u6570\u636e\uff1b"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5728\u90e8\u5206\u6570\u636e\u5e93\u7c7b\u578b\u4e2d\uff0c\u5e76\u4e0d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"Replace/Save"})," \u65b9\u6cd5\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u6570\u636e\u5e93\u7c7b\u578b\u4ecb\u7ecd\u7ae0\u8282\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u5f80\u5f80\u9700\u8981\u7ed3\u5408 ",(0,s.jsx)(n.code,{children:"Data"})," \u65b9\u6cd5\u4f7f\u7528\uff0c\u8be5\u65b9\u6cd5\u7528\u4e8e\u4f20\u9012\u6570\u636e\u53c2\u6570\uff0c\u7528\u4e8e\u6570\u636e\u5199\u5165/\u66f4\u65b0\u7b49\u5199\u64cd\u4f5c\uff0c\u652f\u6301\u7684\u53c2\u6570\u4e3a ",(0,s.jsx)(n.code,{children:"string/map/slice/struct/*struct"}),"\u3002\u4f8b\u5982\uff0c\u5728\u8fdb\u884c ",(0,s.jsx)(n.code,{children:"Insert"})," \u64cd\u4f5c\u65f6\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4f20\u9012\u4efb\u610f\u7684 ",(0,s.jsx)(n.code,{children:"map"})," \u7c7b\u578b\uff0c\u5982: ",(0,s.jsx)(n.code,{children:"map[string]string"}),"/ ",(0,s.jsx)(n.code,{children:"map[string]interface{}"}),"/ ",(0,s.jsx)(n.code,{children:"map[interface{}]interface{}"})," \u7b49\u7b49\uff0c\u4e5f\u53ef\u4ee5\u4f20\u9012\u4efb\u610f\u7684 ",(0,s.jsx)(n.code,{children:"struct/*struct/[]struct/[]*struct"})," \u7c7b\u578b\u3002\u6b64\u5916\uff0c\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u4e5f\u652f\u6301\u76f4\u63a5\u7684 ",(0,s.jsx)(n.code,{children:"data"})," \u53c2\u6570\u8f93\u5165\uff0c\u8be5\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"Data"})," \u65b9\u6cd5\u53c2\u6570\u4e00\u81f4\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",children:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsxs)(n.p,{children:["\u6570\u636e\u5199\u5165/\u4fdd\u5b58\u65b9\u6cd5\u5f80\u5f80\u9700\u8981\u7ed3\u5408 ",(0,s.jsx)(n.code,{children:"Data"})," \u65b9\u6cd5\u4f7f\u7528\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`name`) VALUES(\'john\')\nr, err := db.Table("user").Data(g.Map{"name": "john"}).Insert()\n// INSERT IGNORE INTO `user`(`uid`,`name`) VALUES(10000,\'john\')\nr, err := db.Table("user").Data(g.Map{"uid": 10000, "name": "john"}).InsertIgnore()\n// REPLACE INTO `user`(`uid`,`name`) VALUES(10000,\'john\')\nr, err := db.Table("user").Data(g.Map{"uid": 10000, "name": "john"}).Replace()\n// INSERT INTO `user`(`uid`,`name`) VALUES(10001,\'john\') ON DUPLICATE KEY UPDATE `uid`=VALUES(`uid`),`name`=VALUES(`name`)\nr, err := db.Table("user").Data(g.Map{"uid": 10001, "name": "john"}).Save()\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u4e0d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Data"})," \u65b9\u6cd5\uff0c\u800c\u7ed9\u5199\u5165/\u4fdd\u5b58\u65b9\u6cd5\u76f4\u63a5\u4f20\u9012\u6570\u636e\u53c2\u6570\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'r, err := db.Table("user").Insert(g.Map{"name": "john"})\nr, err := db.Table("user").Replace(g.Map{"uid": 10000, "name": "john"})\nr, err := db.Table("user").Save(g.Map{"uid": 10001, "name": "john"})\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6570\u636e\u53c2\u6570\u4e5f\u5e38\u7528 ",(0,s.jsx)(n.code,{children:"struct"})," \u7c7b\u578b\uff0c\u4f8b\u5982\u5f53\u8868\u5b57\u6bb5\u4e3a ",(0,s.jsx)(n.code,{children:"uid/name/site"})," \u65f6\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Uid  int    `orm:"uid"`\n    Name string `orm:"name"`\n    Site string `orm:"site"`\n}\nuser := &User{\n    Uid:  1,\n    Name: "john",\n    Site: "https://goframe.org",\n}\n// INSERT INTO `user`(`uid`,`name`,`site`) VALUES(1,\'john\',\'https://goframe.org\')\nr, err := g.DB().Table("user").Data(user).Insert()\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b2\u6570\u636e\u6279\u91cf\u5199\u5165",children:"\u793a\u4f8b2\uff0c\u6570\u636e\u6279\u91cf\u5199\u5165"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`name`) VALUES(\'john_1\'),(\'john_2\'),(\'john_3\')\nr, err := db.Table("user").Data(g.List{\n    {"name": "john_1"},\n    {"name": "john_2"},\n    {"name": "john_3"},\n}).Insert()\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"Batch"})," \u65b9\u6cd5\u6307\u5b9a\u6279\u91cf\u64cd\u4f5c\u4e2d\u5206\u6279\u5199\u5165\u6761\u6570\u6570\u91cf\uff08\u9ed8\u8ba4\u662f ",(0,s.jsx)(n.code,{children:"10"}),"\uff09\uff0c\u4ee5\u4e0b\u793a\u4f8b\u5c06\u4f1a\u88ab\u62c6\u5206\u4e3a\u4e24\u6761\u5199\u5165\u8bf7\u6c42\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`name`) VALUES(\'john_1\'),(\'john_2\')\n// INSERT INTO `user`(`name`) VALUES(\'john_3\')\nr, err := db.Table("user").Data(g.List{\n    {"name": "john_1"},\n    {"name": "john_2"},\n    {"name": "john_3"},\n}).Batch(2).Insert()\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b3\u6570\u636e\u6279\u91cf\u4fdd\u5b58",children:"\u793a\u4f8b3\uff0c\u6570\u636e\u6279\u91cf\u4fdd\u5b58"}),"\n",(0,s.jsx)(n.p,{children:"\u6279\u91cf\u4fdd\u5b58\u64cd\u4f5c\u4e0e\u5355\u6761\u4fdd\u5b58\u64cd\u4f5c\u539f\u7406\u662f\u4e00\u6837\u7684\uff0c\u5f53\u5199\u5165\u7684\u6570\u636e\u4e2d\u5b58\u5728\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u65f6\u5c06\u4f1a\u66f4\u65b0\u539f\u6709\u8bb0\u5f55\u503c\uff0c\u5426\u5219\u65b0\u5199\u5165\u4e00\u6761\u8bb0\u5f55\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`uid`,`name`) VALUES(10000,\'john_1\'),(10001,\'john_2\'),(10002,\'john_3\')\n// ON DUPLICATE KEY UPDATE `uid`=VALUES(`uid`),`name`=VALUES(`name`)\nr, err := db.Table("user").Data(g.List{\n    {"uid":10000, "name": "john_1"},\n    {"uid":10001, "name": "john_2"},\n    {"uid":10002, "name": "john_3"},\n}).Save()\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var s=r(296540);const i={},a=s.createContext(i);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);