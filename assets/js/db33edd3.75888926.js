"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[29623],{800790:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var r=t(474848),i=t(28453);const c={title:"ORM\u4e8b\u52a1\u5904\u7406",sidebar_position:3},d=void 0,s={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406",title:"ORM\u4e8b\u52a1\u5904\u7406",description:"\u4f7f\u7528 goframe \u7684 ORM \u7ec4\u4ef6\u8fdb\u884c\u4e8b\u52a1\u64cd\u4f5c\u6bd4\u8f83\u7b80\u4fbf\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u64cd\u4f5c\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002",source:"@site/versioned_docs/version-1.16.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/3-ORM\u4e8b\u52a1\u5904\u7406.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/3-ORM\u4e8b\u52a1\u5904\u7406.md",tags:[],version:"1.16.x",sidebarPosition:3,frontMatter:{title:"ORM\u4e8b\u52a1\u5904\u7406",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"ORM\u65b9\u6cd5\u64cd\u4f5c",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u65b9\u6cd5\u64cd\u4f5c"},next:{title:"ORM\u7ed3\u679c\u5904\u7406",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406"}},o={},a=[{value:"\u5e38\u89c4\u4e8b\u52a1\u65b9\u6cd5",id:"\u5e38\u89c4\u4e8b\u52a1\u65b9\u6cd5",level:2},{value:"1. \u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c",id:"1-\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c",level:3},{value:"2. \u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c",id:"2-\u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c",level:3},{value:"3. \u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c",id:"3-\u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c",level:3},{value:"4. \u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c",id:"4-\u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c",level:3},{value:"<code>Transaction</code> \u95ed\u5305\u64cd\u4f5c",id:"transaction-\u95ed\u5305\u64cd\u4f5c",level:2},{value:"<code>Transaction</code> \u5d4c\u5957\u4e8b\u52a1",id:"transaction-\u5d4c\u5957\u4e8b\u52a1",level:2},{value:"1.\xa0\u57fa\u672c\u64cd\u4f5c",id:"1\u57fa\u672c\u64cd\u4f5c",level:3},{value:"<code>db.Begin</code> \u4e0e <code>tx.Begin</code>",id:"dbbegin-\u4e0e-txbegin",level:4},{value:"\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7",id:"\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7",level:4},{value:"2. \u95ed\u5305\u64cd\u4f5c",id:"2-\u95ed\u5305\u64cd\u4f5c",level:3},{value:"3. <code>SavePoint/RollbackTo</code>",id:"3-savepointrollbackto",level:3},{value:"\u5d4c\u5957\u4e8b\u52a1\u5728\u5de5\u7a0b\u4e2d\u7684\u53c2\u8003\u793a\u4f8b",id:"\u5d4c\u5957\u4e8b\u52a1\u5728\u5de5\u7a0b\u4e2d\u7684\u53c2\u8003\u793a\u4f8b",level:2}];function l(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"goframe"})," \u7684 ",(0,r.jsx)(e.code,{children:"ORM"})," \u7ec4\u4ef6\u8fdb\u884c\u4e8b\u52a1\u64cd\u4f5c\u6bd4\u8f83\u7b80\u4fbf\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u64cd\u4f5c\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u4e00\u79cd\u662f ",(0,r.jsx)(e.code,{children:"Begin"})," \u5f00\u542f\u4e8b\u52a1\u4e4b\u540e\u4f1a\u8fd4\u56de\u4e00\u4e2a\u4e8b\u52a1\u64cd\u4f5c\u5bf9\u8c61 ",(0,r.jsx)(e.code,{children:"*gdb.TX"}),"\uff0c\u968f\u540e\u53ef\u4ee5\u4f7f\u7528\u8be5\u5bf9\u8c61\u8fdb\u884c\u5982\u4e4b\u524d\u7ae0\u8282\u4ecb\u7ecd\u7684\u65b9\u6cd5\u64cd\u4f5c\u548c\u94fe\u5f0f\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u4e00\u79cd\u662f\u4ee5 ",(0,r.jsx)(e.code,{children:"Transaction"})," \u95ed\u5305\u65b9\u6cd5\u7684\u5f62\u5f0f\u6765\u64cd\u4f5c\u4e8b\u52a1\uff0c\u6240\u6709\u7684\u4e8b\u52a1\u903b\u8f91\u5728\u95ed\u5305\u4e2d\u5b9e\u73b0\uff0c\u5e76\u4e14\u652f\u6301\u975e\u5e38\u4fbf\u6377\u7684\u5d4c\u5957\u4e8b\u52a1\uff0c\u5d4c\u5957\u4e8b\u52a1\u5728\u4e1a\u52a1\u64cd\u4f5c\u4e2d\u900f\u660e\u65e0\u611f\u77e5\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6211\u4eec\u63a8\u8350\u4e8b\u52a1\u64cd\u4f5c\u5747\u7edf\u4e00\u91c7\u7528 ",(0,r.jsx)(e.code,{children:"Transaction"})," \u95ed\u5305\u65b9\u5f0f\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,r.jsx)(e.a,{href:"https://godoc.org/github.com/gogf/gf/database/gdb#TX",children:"https://godoc.org/github.com/gogf/gf/database/gdb#TX"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u5e38\u89c4\u4e8b\u52a1\u65b9\u6cd5",children:"\u5e38\u89c4\u4e8b\u52a1\u65b9\u6cd5"}),"\n",(0,r.jsxs)(e.p,{children:["\u5e38\u89c4\u7684\u4e8b\u52a1\u64cd\u4f5c\u65b9\u6cd5\u4e3a ",(0,r.jsx)(e.code,{children:"Begin/Commit/Rollback"}),"\uff0c\u6bcf\u4e00\u4e2a\u65b9\u6cd5\u6307\u5b9a\u7279\u5b9a\u7684\u4e8b\u52a1\u64cd\u4f5c\u3002\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u6267\u884c ",(0,r.jsx)(e.code,{children:"db.Begin"})," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de\u4e8b\u52a1\u7684\u64cd\u4f5c\u5bf9\u8c61\uff0c\u7c7b\u578b\u4e3a ",(0,r.jsx)(e.code,{children:"*gdb.Tx"}),"\uff0c\u901a\u8fc7\u8be5\u5bf9\u8c61\u6267\u884c\u540e\u7eed\u7684\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u5e76\u53ef\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"tx.Commit"})," \u63d0\u4ea4\u4fee\u6539\uff0c\u6216\u8005\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"tx.Rollback"})," \u56de\u6eda\u4fee\u6539\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5e38\u89c1\u95ee\u9898\u6ce8\u610f\uff1a\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c\u540e\uff0c\u8bf7\u52a1\u5fc5\u5728\u4e0d\u9700\u8981\u4f7f\u7528\u8be5\u4e8b\u52a1\u5bf9\u8c61\u65f6\uff0c\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"Commit"}),"/ ",(0,r.jsx)(e.code,{children:"Rollback"})," \u64cd\u4f5c\u5173\u95ed\u6389\u8be5\u4e8b\u52a1\uff0c\u5efa\u8bae\u5145\u5206\u5229\u7528\u597d ",(0,r.jsx)(e.code,{children:"defer"})," \u65b9\u6cd5\u3002\u5982\u679c\u4e8b\u52a1\u4f7f\u7528\u540e\u4e0d\u5173\u95ed\uff0c\u5728\u5e94\u7528\u4fa7\u4f1a\u5f15\u8d77 ",(0,r.jsx)(e.code,{children:"goroutine"})," \u4e0d\u65ad\u6fc0\u589e\u6cc4\u9732\uff0c\u5728\u6570\u636e\u5e93\u4fa7\u4f1a\u5f15\u8d77\u4e8b\u52a1\u7ebf\u7a0b\u6570\u91cf\u88ab\u6253\u6ee1\uff0c\u4ee5\u81f3\u4e8e\u540e\u7eed\u7684\u4e8b\u52a1\u8bf7\u6c42\u6267\u884c\u8d85\u65f6\u3002\u6b64\u5916\uff0c\u5efa\u8bae\u5c3d\u53ef\u80fd\u4f7f\u7528\u540e\u7eed\u4ecb\u7ecd\u7684 ",(0,r.jsx)(e.code,{children:"Transaction"})," \u95ed\u5305\u65b9\u6cd5\u6765\u5b89\u5168\u5b9e\u73b0\u4e8b\u52a1\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"1-\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c",children:"1. \u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'if tx, err := db.Begin(); err == nil {\n    fmt.Println("\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c")\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u4e8b\u52a1\u64cd\u4f5c\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u6240\u6709 ",(0,r.jsx)(e.code,{children:"db"})," \u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,r.jsx)(e.a,{href:"https://godoc.org/github.com/gogf/gf/database/gdb",children:"API\u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"2-\u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c",children:"2. \u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'if tx, err := db.Begin(); err == nil {\n    r, err := tx.Save("user", g.Map{\n        "id"   :  1,\n        "name" : "john",\n    })\n    if err != nil {\n        tx.Rollback()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"3-\u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c",children:"3. \u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'if tx, err := db.Begin(); err == nil {\n    r, err := tx.Save("user", g.Map{\n        "id"   :  1,\n        "name" : "john",\n    })\n    if err == nil {\n       tx.Commit()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"4-\u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c",children:"4. \u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c"}),"\n",(0,r.jsxs)(e.p,{children:["\u4e8b\u52a1\u64cd\u4f5c\u5bf9\u8c61\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"tx.Model"})," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u7684\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u4e0e ",(0,r.jsx)(e.code,{children:"db.Model"})," \u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u540c\uff0c\u53ea\u4e0d\u8fc7\u6570\u636e\u5e93\u64cd\u4f5c\u5728\u4e8b\u52a1\u4e0a\u6267\u884c\uff0c\u53ef\u63d0\u4ea4\u6216\u56de\u6eda\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'if tx, err := db.Begin(); err == nil {\n    r, err := tx.Table("user").Data(g.Map{"id":1, "name": "john_1"}).Save()\n    if err == nil {\n       tx.Commit()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4ed6\u94fe\u5f0f\u64cd\u4f5c\u8bf7\u53c2\u8003 ",(0,r.jsx)(e.a,{href:"output/goframe-v1.16-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%87%8D%E7%82%B9",children:"ORM\u94fe\u5f0f\u64cd\u4f5c(\u91cd\u70b9)"})," \u7ae0\u8282\u3002"]}),"\n",(0,r.jsxs)(e.h2,{id:"transaction-\u95ed\u5305\u64cd\u4f5c",children:[(0,r.jsx)(e.code,{children:"Transaction"})," \u95ed\u5305\u64cd\u4f5c"]}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u901a\u8fc7\u5e38\u89c4\u7684\u4e8b\u52a1\u65b9\u6cd5\u6765\u7ba1\u7406\u4e8b\u52a1\u6709\u5f88\u591a\u91cd\u590d\u6027\u7684\u64cd\u4f5c\uff0c\u5e76\u4e14\u5b58\u5728\u9057\u5fd8\u63d0\u4ea4/\u56de\u6eda\u64cd\u4f5c\u6765\u5173\u95ed\u4e8b\u52a1\u7684\u98ce\u9669\uff0c\u56e0\u6b64\u4e3a\u65b9\u4fbf\u5b89\u5168\u6267\u884c\u4e8b\u52a1\u64cd\u4f5c\uff0c ",(0,r.jsx)(e.code,{children:"ORM"})," \u7ec4\u4ef6\u540c\u6837\u63d0\u4f9b\u4e86\u4e8b\u52a1\u7684\u95ed\u5305\u64cd\u4f5c\uff0c\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"Transaction"})," \u65b9\u6cd5\u5b9e\u73b0\uff0c\u8be5\u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func (db DB) Transaction(ctx context.Context, f func(ctx context.Context, tx *TX) error) (err error)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5f53\u7ed9\u5b9a\u7684\u95ed\u5305\u65b9\u6cd5\u8fd4\u56de\u7684 ",(0,r.jsx)(e.code,{children:"error"})," \u4e3a ",(0,r.jsx)(e.code,{children:"nil"})," \u65f6\uff0c\u90a3\u4e48\u95ed\u5305\u6267\u884c\u7ed3\u675f\u540e\u5f53\u524d\u4e8b\u52a1\u81ea\u52a8\u6267\u884c ",(0,r.jsx)(e.code,{children:"Commit"})," \u63d0\u4ea4\u64cd\u4f5c\uff1b\u5426\u5219\u81ea\u52a8\u6267\u884c ",(0,r.jsx)(e.code,{children:"Rollback"})," \u56de\u6eda\u64cd\u4f5c\u3002\u95ed\u5305\u4e2d\u7684 ",(0,r.jsx)(e.code,{children:"context.Context"})," \u53c2\u6570\u4e3a ",(0,r.jsx)(e.code,{children:"goframe v1.16"})," \u7248\u672c\u540e\u65b0\u589e\u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u4e3b\u8981\u7528\u4e8e\u94fe\u8def\u8ddf\u8e2a\u4f20\u9012\u4ee5\u53ca\u5d4c\u5957\u4e8b\u52a1\u7ba1\u7406\u3002\u7531\u4e8e\u4e0a\u4e0b\u6587\u53d8\u91cf\u662f\u5d4c\u5957\u4e8b\u52a1\u7ba1\u7406\u7684\u91cd\u8981\u53c2\u6570\uff0c\u56e0\u6b64\u4e0a\u4e0b\u6587\u53d8\u91cf\u901a\u8fc7\u663e\u793a\u7684\u53c2\u6570\u4f20\u9012\u5b9a\u4e49\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u95ed\u5305\u5185\u90e8\u64cd\u4f5c\u4ea7\u751f ",(0,r.jsx)(e.code,{children:"panic"})," \u4e2d\u65ad\uff0c\u8be5\u4e8b\u52a1\u4e5f\u5c06\u81ea\u52a8\u8fdb\u884c\u56de\u6eda\uff0c\u4ee5\u4fdd\u8bc1\u64cd\u4f5c\u5b89\u5168\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'db.Transaction(context.TODO(), func(ctx context.Context, tx *gdb.TX) error {\n\t// user\n\tresult, err := tx.Ctx(ctx).Insert("user", g.Map{\n\t\t"passport": "john",\n\t\t"password": "12345678",\n\t\t"nickname": "JohnGuo",\n\t})\n\tif err != nil {\n\t\treturn err\n\t}\n\t// user_detail\n\tid, err := result.LastInsertId()\n\tif err != nil {\n\t\treturn err\n\t}\n\t_, err = tx.Ctx(ctx).Insert("user_detail", g.Map{\n\t\t"uid":       id,\n\t\t"site":      "https://johng.cn",\n\t\t"true_name": "GuoQiang",\n\t})\n\tif err != nil {\n\t\treturn err\n\t}\n\treturn nil\n})\n'})}),"\n",(0,r.jsxs)(e.h2,{id:"transaction-\u5d4c\u5957\u4e8b\u52a1",children:[(0,r.jsx)(e.code,{children:"Transaction"})," \u5d4c\u5957\u4e8b\u52a1"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4ece ",(0,r.jsx)(e.code,{children:"goframe"})," \u7248\u672c ",(0,r.jsx)(e.code,{children:"v1.16"})," \u7248\u672c\u5f00\u59cb\uff0c\u63d0\u4f9b\u4e86\u5bf9\u6570\u636e\u5e93\u5d4c\u5957\u4e8b\u52a1\u7684\u652f\u6301\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6570\u636e\u5e93\u670d\u52a1\u5f80\u5f80\u5e76\u4e0d\u652f\u6301\u5d4c\u5957\u4e8b\u52a1\uff0c\u800c\u662f\u4f9d\u9760 ",(0,r.jsx)(e.code,{children:"ORM"})," \u7ec4\u4ef6\u5c42\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"Transaction Save Point"})," \u7279\u6027\u5b9e\u73b0\u7684\u3002\u76f8\u5173\u65b9\u6cd5\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"// Begin starts a nested transaction procedure.\nfunc (tx *TX) Begin() error\n\n// Commit commits current transaction.\n// Note that it releases previous saved transaction point if it's in a nested transaction procedure,\n// or else it commits the hole transaction.\nfunc (tx *TX) Commit() error\n\n// Rollback aborts current transaction.\n// Note that it aborts current transaction if it's in a nested transaction procedure,\n// or else it aborts the hole transaction.\nfunc (tx *TX) Rollback() error\n\n// SavePoint performs `SAVEPOINT xxx` SQL statement that saves transaction at current point.\n// The parameter `point` specifies the point name that will be saved to server.\nfunc (tx *TX) SavePoint(point string) error\n\n// RollbackTo performs `ROLLBACK TO SAVEPOINT xxx` SQL statement that rollbacks to specified saved transaction.\n// The parameter `point` specifies the point name that was saved previously.\nfunc (tx *TX) RollbackTo(point string) error\n\n// Transaction wraps the transaction logic using function `f`.\n// It rollbacks the transaction and returns the error from function `f` if\n// it returns non-nil error. It commits the transaction and returns nil if\n// function `f` returns nil.\n//\n// Note that, you should not Commit or Rollback the transaction in function `f`\n// as it is automatically handled by this function.\nfunc (tx *TX) Transaction(ctx context.Context, f func(ctx context.Context, tx *TX) error) (err error)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u540c\u6837\u7684\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"Transaction"})," \u95ed\u5305\u65b9\u6cd5\u6765\u5b9e\u73b0\u5d4c\u5957\u4e8b\u52a1\u64cd\u4f5c\u3002\u4e3a\u4e86\u4fdd\u8bc1\u6587\u6863\u7684\u5b8c\u6574\u6027\uff0c\u56e0\u6b64\u6211\u4eec\u8fd9\u91cc\u4ecd\u7136\u4ece\u6700\u57fa\u672c\u7684\u4e8b\u52a1\u64cd\u4f5c\u65b9\u6cd5\u5f00\u59cb\u6765\u4ecb\u7ecd\u5d4c\u5957\u4e8b\u52a1\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"1\u57fa\u672c\u64cd\u4f5c",children:"1.\xa0\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,r.jsxs)(e.p,{children:["\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b ",(0,r.jsx)(e.code,{children:"SQL"}),"\uff0c\u5305\u542b\u4e24\u4e2a\u5b57\u6bb5 ",(0,r.jsx)(e.code,{children:"id"})," \u548c ",(0,r.jsx)(e.code,{children:"name"}),"\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"CREATE TABLE `user` (\n  `id` int(10) unsigned NOT NULL COMMENT '\u7528\u6237ID',\n  `name` varchar(45) NOT NULL COMMENT '\u7528\u6237\u540d\u79f0',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u793a\u4f8b\u7a0b\u5e8f\u4ee3\u7801\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'tx, err := db.Begin()\nif err != nil {\n\tpanic(err)\n}\nif err = tx.Begin(); err != nil {\n\tpanic(err)\n}\n_, err = tx.Model(table).Data(g.Map{"id": 1, "name": "john"}).Insert()\nif err = tx.Rollback(); err != nil {\n\tpanic(err)\n}\n_, err = tx.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert()\nif err = tx.Commit(); err != nil {\n\tpanic(err)\n}\n'})}),"\n",(0,r.jsxs)(e.h4,{id:"dbbegin-\u4e0e-txbegin",children:[(0,r.jsx)(e.code,{children:"db.Begin"})," \u4e0e ",(0,r.jsx)(e.code,{children:"tx.Begin"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u6211\u4eec\u7684\u5d4c\u5957\u4e8b\u52a1\u4e2d\u51fa\u73b0\u4e86 ",(0,r.jsx)(e.code,{children:"db.Begin"})," \u548c ",(0,r.jsx)(e.code,{children:"tx.Begin"})," \u4e24\u79cd\u4e8b\u52a1\u5f00\u542f\u65b9\u5f0f\uff0c\u4e24\u8005\u6709\u4ec0\u4e48\u533a\u522b\u5462\uff1f ",(0,r.jsx)(e.code,{children:"db.Begin"})," \u662f\u5728\u6570\u636e\u5e93\u670d\u52a1\u4e0a\u771f\u6b63\u5f00\u542f\u4e00\u4e2a\u4e8b\u52a1\u64cd\u4f5c\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u4e8b\u52a1\u64cd\u4f5c\u5bf9\u8c61 ",(0,r.jsx)(e.code,{children:"tx"}),"\uff0c\u968f\u540e\u6240\u6709\u7684\u4e8b\u52a1\u64cd\u4f5c\u90fd\u662f\u901a\u8fc7\u8be5 ",(0,r.jsx)(e.code,{children:"tx"})," \u4e8b\u52a1\u5bf9\u8c61\u6765\u64cd\u4f5c\u7ba1\u7406\u3002 ",(0,r.jsx)(e.code,{children:"tx.Begin"})," \u8868\u793a\u5728\u5f53\u524d\u4e8b\u52a1\u64cd\u4f5c\u4e2d\u5f00\u542f\u5d4c\u5957\u4e8b\u52a1\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u5bf9\u5d4c\u5957\u4e8b\u52a1\u7684 ",(0,r.jsx)(e.code,{children:"SavePoint"})," \u91c7\u7528\u81ea\u52a8\u547d\u540d\uff0c\u547d\u540d\u683c\u5f0f\u4e3a ",(0,r.jsx)(e.code,{children:"transactionN"}),"\uff0c\u5176\u4e2d\u7684 ",(0,r.jsx)(e.code,{children:"N"})," \u8868\u793a\u5d4c\u5957\u7684\u5c42\u7ea7\u6570\u91cf\uff0c\u5982\u679c\u60a8\u770b\u5230\u65e5\u5fd7\u4e2d\u51fa\u73b0 ",(0,r.jsx)(e.code,{children:"SAVEPOINT `transaction1` "})," \u8868\u793a\u5f53\u524d\u5d4c\u5957\u5c42\u7ea7\u4e3a ",(0,r.jsx)(e.code,{children:"2"}),"\uff08\u4ece ",(0,r.jsx)(e.code,{children:"0"})," \u5f00\u59cb\u8ba1\u7b97\uff09\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7",children:"\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"goframe"})," \u7684 ",(0,r.jsx)(e.code,{children:"ORM"})," \u62e5\u6709\u76f8\u5f53\u5b8c\u5584\u7684\u65e5\u5fd7\u8bb0\u5f55\u673a\u5236\uff0c\u5982\u679c\u60a8\u6253\u5f00 ",(0,r.jsx)(e.code,{children:"SQL"})," \u65e5\u5fd7\uff0c\u90a3\u4e48\u5c06\u4f1a\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u4fe1\u606f\uff0c\u5c55\u793a\u4e86\u6574\u4e2a\u6570\u636e\u5e93\u8bf7\u6c42\u7684\u8be6\u7ec6\u6267\u884c\u6d41\u7a0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"2021-05-22 21:12:10.776 [DEBU] [  4 ms] [default] [1] BEGIN\n2021-05-22 21:12:10.776 [DEBU] [  0 ms] [default] [1] SAVEPOINT `transaction0`\n2021-05-22 21:12:10.789 [DEBU] [ 13 ms] [default] [1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:12:10.790 [DEBU] [  1 ms] [default] [1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:12:10.791 [DEBU] [  1 ms] [default] [1] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-22 21:12:10.791 [DEBU] [  0 ms] [default] [1] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-22 21:12:10.792 [DEBU] [  1 ms] [default] [1] COMMIT\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4e2d\u7684 ",(0,r.jsx)(e.code,{children:"[1]"})," \u8868\u793a ",(0,r.jsx)(e.code,{children:"ORM"})," \u7ec4\u4ef6\u8bb0\u5f55\u7684\u4e8b\u52a1ID\uff0c\u591a\u4e2a\u771f\u5b9e\u7684\u4e8b\u52a1\u540c\u65f6\u64cd\u4f5c\u65f6\uff0c\u6bcf\u4e2a\u4e8b\u52a1\u7684ID\u5c06\u4f1a\u4e0d\u540c\u3002\u5728\u540c\u4e00\u4e2a\u771f\u5b9e\u4e8b\u52a1\u4e0b\u7684\u5d4c\u5957\u4e8b\u52a1\u7684\u4e8b\u52a1ID\u662f\u4e00\u6837\u7684\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u540e\u67e5\u8be2\u6570\u636e\u5e93\u7ed3\u679c\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mysql> select * from `user`;\n+----+-------+\n| id | name  |\n+----+-------+\n|  2 | smith |\n+----+-------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u88ab\u6210\u529f\u56de\u6eda\uff0c\u53ea\u6709\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6267\u884c\u5e76\u63d0\u4ea4\u6210\u529f\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"2-\u95ed\u5305\u64cd\u4f5c",children:"2. \u95ed\u5305\u64cd\u4f5c"}),"\n",(0,r.jsxs)(e.p,{children:["\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u95ed\u5305\u64cd\u4f5c\u6765\u5b9e\u73b0\u5d4c\u5957\u4e8b\u52a1\uff0c\u540c\u6837\u4e5f\u662f\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"Transaction"})," \u65b9\u6cd5\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n\t// Nested transaction 1.\n\tif err := tx.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n\t\t_, err := tx.Model(table).Ctx(ctx).Data(g.Map{"id": 1, "name": "john"}).Insert()\n\t\treturn err\n\t}); err != nil {\n\t\treturn err\n\t}\n\t// Nested transaction 2, panic.\n\tif err := tx.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n\t\t_, err := tx.Model(table).Ctx(ctx).Data(g.Map{"id": 2, "name": "smith"}).Insert()\n\t\t// Create a panic that can make this transaction rollback automatically.\n\t\tpanic("error")\n\t\treturn err\n\t}); err != nil {\n\t\treturn err\n\t}\n\treturn nil\n})\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5d4c\u5957\u4e8b\u52a1\u7684\u95ed\u5305\u5d4c\u5957\u4e2d\u4e5f\u53ef\u4ee5\u4e0d\u4f7f\u7528\u5176\u4e2d\u7684 ",(0,r.jsx)(e.code,{children:"tx"})," \u5bf9\u8c61\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"db"})," \u5bf9\u8c61\u6216\u8005 ",(0,r.jsx)(e.code,{children:"dao"})," \u5305\uff0c\u8fd9\u79cd\u65b9\u5f0f\u66f4\u5e38\u89c1\u4e00\u4e9b\u3002\u7279\u522b\u662f\u5728\u65b9\u6cd5\u5c42\u7ea7\u8c03\u7528\u65f6\uff0c\u4f7f\u5f97\u5bf9\u4e8e\u5f00\u53d1\u8005\u6765\u8bf4\u5e76\u4e0d\u7528\u5173\u5fc3 ",(0,r.jsx)(e.code,{children:"tx"})," \u5bf9\u8c61\u7684\u4f20\u9012\uff0c\u4e5f\u5e76\u4e0d\u7528\u5173\u5fc3\u5f53\u524d\u4e8b\u52a1\u662f\u5426\u9700\u8981\u5d4c\u5957\u6267\u884c\uff0c\u4e00\u5207\u90fd\u7531\u7ec4\u4ef6\u81ea\u52a8\u7ef4\u62a4\uff0c\u6781\u5927\u51cf\u5c11\u5f00\u53d1\u8005\u7684\u5fc3\u667a\u8d1f\u62c5\u3002\u4f46\u662f\u52a1\u5fc5\u8bb0\u5f97\u5c06 ",(0,r.jsx)(e.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u5c42\u5c42\u4f20\u9012\u4e0b\u53bb\u54e6\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n\t// Nested transaction 1.\n\tif err := db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n\t\t_, err := db.Model(table).Ctx(ctx).Data(g.Map{"id": 1, "name": "john"}).Insert()\n\t\treturn err\n\t}); err != nil {\n\t\treturn err\n\t}\n\t// Nested transaction 2, panic.\n\tif err := db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n\t\t_, err := db.Model(table).Ctx(ctx).Data(g.Map{"id": 2, "name": "smith"}).Insert()\n\t\t// Create a panic that can make this transaction rollback automatically.\n\t\tpanic("error")\n\t\treturn err\n\t}); err != nil {\n\t\treturn err\n\t}\n\treturn nil\n})\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u6253\u5f00 ",(0,r.jsx)(e.code,{children:"SQL"})," \u65e5\u5fd7\uff0c\u90a3\u4e48\u6267\u884c\u540e\u5c06\u4f1a\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u4fe1\u606f\uff0c\u5c55\u793a\u4e86\u6574\u4e2a\u6570\u636e\u5e93\u8bf7\u6c42\u7684\u8be6\u7ec6\u6267\u884c\u6d41\u7a0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"2021-05-22 21:18:46.672 [DEBU] [  2 ms] [default] [1] BEGIN\n2021-05-22 21:18:46.672 [DEBU] [  0 ms] [default] [1] SAVEPOINT `transaction0`\n2021-05-22 21:18:46.673 [DEBU] [  0 ms] [default] [1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:18:46.674 [DEBU] [  0 ms] [default] [1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:18:46.674 [DEBU] [  0 ms] [default] [1] RELEASE SAVEPOINT `transaction0`\n2021-05-22 21:18:46.675 [DEBU] [  1 ms] [default] [1] SAVEPOINT `transaction0`\n2021-05-22 21:18:46.675 [DEBU] [  0 ms] [default] [1] INSERT INTO `user`(`name`,`id`) VALUES('smith',2)\n2021-05-22 21:18:46.675 [DEBU] [  0 ms] [default] [1] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-22 21:18:46.676 [DEBU] [  1 ms] [default] [1] ROLLBACK\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5047\u5982 ",(0,r.jsx)(e.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u6ca1\u6709\u5c42\u5c42\u4f20\u9012\u4e0b\u53bb\uff0c\u90a3\u4e48\u5d4c\u5957\u4e8b\u52a1\u5c06\u4f1a\u5931\u8d25\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u9519\u8bef\u7684\u4f8b\u5b50\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n\t// Nested transaction 1.\n\tif err := db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n\t\t_, err := db.Model(table).Ctx(ctx).Data(g.Map{"id": 1, "name": "john"}).Insert()\n\t\treturn err\n\t}); err != nil {\n\t\treturn err\n\t}\n\t// Nested transaction 2, panic.\n\tif err := db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n\t\t_, err := db.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert()\n\t\t// Create a panic that can make this transaction rollback automatically.\n\t\tpanic("error")\n\t\treturn err\n\t}); err != nil {\n\t\treturn err\n\t}\n\treturn nil\n})\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u6253\u5f00 ",(0,r.jsx)(e.code,{children:"SQL"})," \u6267\u884c\u65e5\u5fd7\uff0c\u6267\u884c\u540e\uff0c\u60a8\u5c06\u4f1a\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u5185\u5bb9\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"2021-05-22 21:29:38.841 [DEBU] [  3 ms] [default] [1] BEGIN\n2021-05-22 21:29:38.842 [DEBU] [  1 ms] [default] [1] SAVEPOINT `transaction0`\n2021-05-22 21:29:38.843 [DEBU] [  1 ms] [default] [1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:29:38.845 [DEBU] [  2 ms] [default] [1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:29:38.845 [DEBU] [  0 ms] [default] [1] RELEASE SAVEPOINT `transaction0`\n2021-05-22 21:29:38.846 [DEBU] [  1 ms] [default] [1] SAVEPOINT `transaction0`\n2021-05-22 21:29:38.847 [DEBU] [  1 ms] [default] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-22 21:29:38.848 [DEBU] [  0 ms] [default] [1] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-22 21:29:38.848 [DEBU] [  0 ms] [default] [1] ROLLBACK\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u7b2c\u4e8c\u6761 ",(0,r.jsx)(e.code,{children:"INSERT"})," \u64cd\u4f5c\u6ca1\u6709\u4e8b\u52a1ID\u6253\u5370\uff0c\u8868\u793a\u6ca1\u6709\u4f7f\u7528\u5230\u4e8b\u52a1\uff0c\u90a3\u4e48\u8be5\u64cd\u4f5c\u5c06\u4f1a\u88ab\u771f\u6b63\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\uff0c\u5e76\u4e0d\u80fd\u88ab\u56de\u6eda\u3002"]}),"\n",(0,r.jsxs)(e.h3,{id:"3-savepointrollbackto",children:["3. ",(0,r.jsx)(e.code,{children:"SavePoint/RollbackTo"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u7075\u6d3b\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"Transaction Save Point"})," \u7279\u6027\uff0c\u5e76\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684 ",(0,r.jsx)(e.code,{children:"SavePoint"})," \u547d\u540d\u4ee5\u53ca\u6307\u5b9a ",(0,r.jsx)(e.code,{children:"Point"})," \u56de\u6eda\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'tx, err := db.Begin()\nif err != nil {\n\tpanic(err)\n}\ndefer func() {\n\tif err := recover(); err != nil {\n\t\t_ = tx.Rollback()\n\t}\n}()\nif _, err = tx.Model(table).Data(g.Map{"id": 1, "name": "john"}).Insert(); err != nil {\n\tpanic(err)\n}\nif err = tx.SavePoint("MyPoint"); err != nil {\n\tpanic(err)\n}\nif _, err = tx.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert(); err != nil {\n\tpanic(err)\n}\nif _, err = tx.Model(table).Data(g.Map{"id": 3, "name": "green"}).Insert(); err != nil {\n\tpanic(err)\n}\nif err = tx.RollbackTo("MyPoint"); err != nil {\n\tpanic(err)\n}\nif err = tx.Commit(); err != nil {\n\tpanic(err)\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u6253\u5f00 ",(0,r.jsx)(e.code,{children:"SQL"})," \u65e5\u5fd7\uff0c\u90a3\u4e48\u5c06\u4f1a\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u4fe1\u606f\uff0c\u5c55\u793a\u4e86\u6574\u4e2a\u6570\u636e\u5e93\u8bf7\u6c42\u7684\u8be6\u7ec6\u6267\u884c\u6d41\u7a0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"2021-05-22 21:38:51.992 [DEBU] [  3 ms] [default] [1] BEGIN\n2021-05-22 21:38:52.002 [DEBU] [  9 ms] [default] [1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:38:52.002 [DEBU] [  0 ms] [default] [1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:38:52.003 [DEBU] [  1 ms] [default] [1] SAVEPOINT `MyPoint`\n2021-05-22 21:38:52.004 [DEBU] [  1 ms] [default] [1] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-22 21:38:52.005 [DEBU] [  1 ms] [default] [1] INSERT INTO `user`(`id`,`name`) VALUES(3,'green')\n2021-05-22 21:38:52.006 [DEBU] [  0 ms] [default] [1] ROLLBACK TO SAVEPOINT `MyPoint`\n2021-05-22 21:38:52.006 [DEBU] [  0 ms] [default] [1] COMMIT\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u540e\u67e5\u8be2\u6570\u636e\u5e93\u7ed3\u679c\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mysql> select * from `user`;\n+----+------+\n| id | name |\n+----+------+\n|  1 | john |\n+----+------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u901a\u8fc7\u5728\u7b2c\u4e00\u4e2a ",(0,r.jsx)(e.code,{children:"Insert"})," \u64cd\u4f5c\u540e\u4fdd\u5b58\u4e86\u4e00\u4e2a ",(0,r.jsx)(e.code,{children:"SavePoint"})," \u540d\u79f0 ",(0,r.jsx)(e.code,{children:"MyPoint"}),"\uff0c\u968f\u540e\u7684\u51e0\u6b21\u64cd\u4f5c\u90fd\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"RollbackTo"})," \u65b9\u6cd5\u88ab\u56de\u6eda\u6389\u4e86\uff0c\u56e0\u6b64\u53ea\u6709\u7b2c\u4e00\u6b21 ",(0,r.jsx)(e.code,{children:"Insert"})," \u64cd\u4f5c\u88ab\u6210\u529f\u63d0\u4ea4\u6267\u884c\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5d4c\u5957\u4e8b\u52a1\u5728\u5de5\u7a0b\u4e2d\u7684\u53c2\u8003\u793a\u4f8b",children:"\u5d4c\u5957\u4e8b\u52a1\u5728\u5de5\u7a0b\u4e2d\u7684\u53c2\u8003\u793a\u4f8b"}),"\n",(0,r.jsxs)(e.p,{children:["\u4e3a\u4e86\u7b80\u5316\u793a\u4f8b\uff0c\u6211\u4eec\u8fd8\u662f\u4f7f\u7528\u7528\u6237\u6a21\u5757\u76f8\u5173\u7684\u793a\u4f8b\uff0c\u4f8b\u5982\u7528\u6237\u6ce8\u518c\uff0c\u901a\u8fc7\u4e8b\u52a1\u64cd\u4f5c\u4fdd\u5b58\u7528\u6237\u57fa\u672c\u4fe1\u606f( ",(0,r.jsx)(e.code,{children:"user"}),")\u3001\u8be6\u7ec6\u4fe1\u606f( ",(0,r.jsx)(e.code,{children:"user_detail"}),")\u4e24\u4e2a\u8868\uff0c\u4efb\u4e00\u4e2a\u8868\u64cd\u4f5c\u5931\u8d25\u6574\u4e2a\u6ce8\u518c\u64cd\u4f5c\u90fd\u5c06\u5931\u8d25\u3002\u4e3a\u5c55\u793a\u5d4c\u5957\u4e8b\u52a1\u6548\u679c\uff0c\u6211\u4eec\u5c06\u7528\u6237\u57fa\u672c\u4fe1\u606f\u7ba1\u7406\u548c\u7528\u6237\u8be6\u7ec6\u4fe1\u606f\u7ba1\u7406\u5212\u5206\u4e3a\u4e86\u4e24\u4e2a ",(0,r.jsx)(e.code,{children:"dao"})," \u5bf9\u8c61\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5047\u5982\u6211\u4eec\u7684\u9879\u76ee\u6309\u7167 ",(0,r.jsx)(e.code,{children:"goframe"})," \u6807\u51c6\u9879\u76ee\u5de5\u7a0b\u5316\u5206\u4e3a\u4e09\u5c42 ",(0,r.jsx)(e.code,{children:"api-service-dao"}),"\uff0c\u90a3\u4e48\u6211\u4eec\u7684\u5d4c\u5957\u4e8b\u52a1\u64cd\u4f5c\u53ef\u80fd\u662f\u8fd9\u6837\u7684\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"api"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"// \u7528\u6237\u6ce8\u518cHTTP\u63a5\u53e3\nfunc (*userApi) Signup(r *ghttp.Request) {\n\t// ....\n\tservice.User.Signup(r.Context(), userServiceSignupReq)\n\t// ...\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u627f\u63a5HTTP\u8bf7\u6c42\uff0c\u5e76\u4e14\u5c06 ",(0,r.jsx)(e.code,{children:"Context"})," \u4e0a\u4e0b\u6587\u8fb9\u53d8\u91cf\u4f20\u9012\u7ed9\u540e\u7eed\u7684\u6d41\u7a0b\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"service"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"// \u7528\u6237\u6ce8\u518c\u4e1a\u52a1\u903b\u8f91\u5904\u7406\nfunc (*userService) Signup(ctx context.Context, r *model.UserServiceSignupReq) {\n\t// ....\n\tdao.User.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n\t\terr := dao.User.Ctx(ctx).Save(r.UserInfo)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\terr := dao.UserDetail.Ctx(ctx).Save(r.UserDetail)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\treturn nil\n\t})\n\t// ...\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5185\u90e8\u7684 ",(0,r.jsx)(e.code,{children:"user"})," \u8868\u548c ",(0,r.jsx)(e.code,{children:"user_detail"})," \u8868\u4f7f\u7528\u4e86\u5d4c\u5957\u4e8b\u52a1\u6765\u7edf\u4e00\u6267\u884c\u4e8b\u52a1\u64cd\u4f5c\u3002\u6ce8\u610f\u5728\u95ed\u5305\u5185\u90e8\u9700\u8981\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"Ctx"})," \u65b9\u6cd5\u5c06\u4e0a\u4e0b\u6587\u53d8\u91cf\u4f20\u9012\u7ed9\u4e0b\u4e00\u5c42\u7ea7\u3002\u5047\u5982\u5728\u95ed\u5305\u4e2d\u5b58\u5728\u5bf9\u5176\u4ed6 ",(0,r.jsx)(e.code,{children:"service"})," \u5bf9\u8c61\u7684\u8c03\u7528\uff0c\u90a3\u4e48\u4e5f\u9700\u8981\u5c06 ",(0,r.jsx)(e.code,{children:"ctx"})," \u53d8\u91cf\u4f20\u9012\u8fc7\u53bb\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func (*userService) Signup(ctx context.Context, r *model.UserServiceSignupReq) {\n\t// ....\n\tdao.User.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n\t\terr := dao.User.Ctx(ctx).Save(r.UserInfo)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\terr := dao.UserDetail.Ctx(ctx).Save(r.UserDetail)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\terr := service.XXXA.Call(ctx, ...)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\terr := service.XXXB.Call(ctx, ...)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\terr := service.XXXB.Call(ctx, ...)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n        // ...\n\t\treturn nil\n\t})\n\t// ...\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"dao"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"dao"})," \u5c42\u7684\u4ee3\u7801\u7531 ",(0,r.jsx)(e.code,{children:"goframe cli"})," \u5de5\u5177\u5168\u81ea\u52a8\u5316\u751f\u6210\u5373\u53ef\u3002"]})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>d,x:()=>s});var r=t(296540);const i={},c=r.createContext(i);function d(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);