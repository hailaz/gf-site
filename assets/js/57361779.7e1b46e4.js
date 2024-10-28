"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[45340],{821073:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>x,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var c=d(474848),i=d(28453);const r={title:"ORM\u9ad8\u7ea7\u7279\u6027",sidebar_position:5},s=void 0,t={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027",title:"ORM\u9ad8\u7ea7\u7279\u6027",description:"\u8c03\u8bd5\u6a21\u5f0f",source:"@site/versioned_docs/version-1.14.x/1-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/5-ORM\u9ad8\u7ea7\u7279\u6027.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.14.x/1-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/5-ORM\u9ad8\u7ea7\u7279\u6027.md",tags:[],version:"1.14.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:5,frontMatter:{title:"ORM\u9ad8\u7ea7\u7279\u6027",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"ORM\u7ed3\u679c\u5904\u7406",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406"},next:{title:"ORM\u6a21\u578b\u751f\u6210",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u6a21\u578b\u751f\u6210"}},l={},o=[{value:"\u8c03\u8bd5\u6a21\u5f0f",id:"\u8c03\u8bd5\u6a21\u5f0f",level:2},{value:"\u65e5\u5fd7\u8f93\u51fa",id:"\u65e5\u5fd7\u8f93\u51fa",level:2},{value:"\u7a7a\u8dd1\u7279\u6027",id:"\u7a7a\u8dd1\u7279\u6027",level:2},{value:"\u5b57\u6bb5\u6620\u5c04",id:"\u5b57\u6bb5\u6620\u5c04",level:2},{value:"\u7c7b\u578b\u8bc6\u522b",id:"\u7c7b\u578b\u8bc6\u522b",level:2},{value:"\u7c7b\u578b\u8f6c\u6362",id:"\u7c7b\u578b\u8f6c\u6362",level:2},{value:"\u7ee7\u627f\u652f\u6301",id:"\u7ee7\u627f\u652f\u6301",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u8c03\u8bd5\u6a21\u5f0f",children:"\u8c03\u8bd5\u6a21\u5f0f"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3a\u4fbf\u4e8e\u5f00\u53d1\u9636\u6bb5\u8c03\u8bd5\uff0c ",(0,c.jsx)(n.code,{children:"gdb"})," \u652f\u6301\u8c03\u8bd5\u6a21\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"Debug"})," \u914d\u7f6e\u6587\u4ef6\u9879\u6216\u8005 ",(0,c.jsx)(n.code,{children:"SetDebug"})," \u914d\u7f6e\u65b9\u5f0f\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f\uff0c \u968f\u540e\u4efb\u4f55\u7684\u6570\u636e\u5e93SQL\u64cd\u4f5c\u8bed\u53e5\u90fd\u5c06\u4f1a\u7531\u5185\u7f6e\u7684\u65e5\u5fd7\u5bf9\u8c61\u4e2d\u8f93\u51fa\u5230\u7ec8\u7aef\u6216\u8005\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u65e5\u5fd7\u8f93\u51fa",children:"\u65e5\u5fd7\u8f93\u51fa"}),"\n",(0,c.jsxs)(n.p,{children:["\u65e5\u5fd7\u8f93\u51fa\u5f80\u5f80\u662f\u6253\u5370\u4e00\u4e9b\u8c03\u8bd5\u6216\u8005 ",(0,c.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\uff0c\u65e5\u5fd7\u5bf9\u8c61\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"SetLogger"})," \u65b9\u6cd5\u6765\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u6765\u505a\u7b80\u5355\u914d\u7f6e\uff0c\u65e5\u5fd7\u7684\u914d\u7f6e\u8bf7\u67e5\u770b ",(0,c.jsx)(n.code,{children:"ORM"})," \u7684\u914d\u7f6e\u7ba1\u7406\u7ae0\u8282\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u7a7a\u8dd1\u7279\u6027",children:"\u7a7a\u8dd1\u7279\u6027"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ORM"})," \u7a7a\u8dd1\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"DryRun"})," \u914d\u7f6e\u9879\u6765\u542f\u7528\uff0c\u9ed8\u8ba4\u5173\u95ed\u3002\u5f53 ",(0,c.jsx)(n.code,{children:"ORM"})," \u7684\u7a7a\u8dd1\u7279\u6027\u5f00\u542f\u65f6\uff0c\u8bfb\u53d6\u64cd\u4f5c\u5c06\u4f1a\u63d0\u4ea4\uff0c\u800c\u5199\u5165\u3001\u66f4\u65b0\u3001\u5220\u9664\u64cd\u4f5c\u5c06\u4f1a\u88ab\u5ffd\u7565\u3002\u8be5\u7279\u6027\u5f80\u5f80\u7ed3\u5408\u8c03\u8bd5\u6a21\u5f0f\u548c\u65e5\u5fd7\u8f93\u51fa\u4e00\u8d77\u4f7f\u7528\uff0c\u7528\u4e8e\u6821\u9a8c\u5f53\u524d\u7684\u7a0b\u5e8f\uff08\u7279\u522b\u662f\u811a\u672c\uff09\u6267\u884c\u7684 ",(0,c.jsx)(n.code,{children:"SQL"})," \u662f\u5426\u7b26\u5408\u9884\u671f\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5b57\u6bb5\u6620\u5c04",children:"\u5b57\u6bb5\u6620\u5c04"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u5bf9\u6570\u636e\u8fdb\u884c\u5199\u5165/\u66f4\u65b0\u65f6\uff0c\u5982\u679c\u7ed9\u5b9a\u7684\u53c2\u6570\u4e3a ",(0,c.jsx)(n.code,{children:"map/struct"})," \u65f6\uff0c\u7ed9\u5b9a\u53c2\u6570\u7684\u952e\u540d/\u5c5e\u6027\u540d\u79f0\u5c06\u4f1a\u81ea\u52a8\u6309\u7167\u5ffd\u7565\u5927\u5c0f\u5199\u53ca\u7279\u6b8a\u5b57\u7b26\u7684\u65b9\u5f0f\u4e0e\u6570\u636e\u8868\u7684\u5b57\u6bb5\u8fdb\u884c\u81ea\u52a8\u8bc6\u522b\u6620\u5c04\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:"Map\u952e\u540d     \u5b57\u6bb5\u540d\u79f0     \u662f\u5426\u5339\u914d\nnickname   nickname      match\nNICKNAME   nickname      match\nNick-Name  nickname      match\nnick_name  nickname      match\nnick name  nickname      match\nNickName   nickname      match\nNick-name  nickname      match\nnick_name  nickname      match\nnick name  nickname      match\n\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u7c7b\u578b\u8bc6\u522b",children:"\u7c7b\u578b\u8bc6\u522b"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"gdb"})," \u67e5\u8be2\u6570\u636e\u65f6\uff0c\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u5c06\u4f1a\u88ab\u81ea\u52a8\u8bc6\u522b\u6620\u5c04\u5230 ",(0,c.jsx)(n.code,{children:"Go\u53d8\u91cf\u7c7b\u578b"}),"\u3002\u4f8b\u5982: \u5f53\u5b57\u6bb5\u7c7b\u578b\u4e3a ",(0,c.jsx)(n.code,{children:"int(xx)"})," \u65f6\uff0c\u67e5\u8be2\u5230\u7684\u5b57\u6bb5\u503c\u7c7b\u578b\u5c06\u4f1a\u88ab\u8bc6\u522b\u4f1a ",(0,c.jsx)(n.code,{children:"int"})," \u7c7b\u578b\uff1b\u5f53\u5b57\u6bb5\u7c7b\u578b\u4e3a ",(0,c.jsx)(n.code,{children:"varchar(xxx)"}),"/ ",(0,c.jsx)(n.code,{children:"char(xxx)"}),"/ ",(0,c.jsx)(n.code,{children:"text"})," \u7b49\u7c7b\u578b\u65f6\u5c06\u4f1a\u88ab\u81ea\u52a8\u8bc6\u522b\u4e3a ",(0,c.jsx)(n.code,{children:"string"})," \u7c7b\u578b\u3002\u4ee5\u4e0b\u4ee5 ",(0,c.jsx)(n.code,{children:"mysql"})," \u7c7b\u578b\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u6570\u636e\u5e93\u7c7b\u578b\u4e0eGo\u53d8\u91cf\u7c7b\u578b\u7684\u81ea\u52a8\u8bc6\u522b\u6620\u5c04\u5173\u7cfb: ",(0,c.jsx)(n.a,{href:"https://github.com/gogf/gf/blob/master/database/gdb/gdb_structure.go",children:"https://github.com/gogf/gf/blob/master/database/gdb/gdb_structure.go"})]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u6570\u636e\u5e93\u7c7b\u578b"}),(0,c.jsx)(n.th,{children:"Go\u53d8\u91cf\u7c7b\u578b"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"*char"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"string"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"*text"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"string"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"*binary"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"bytes"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"*blob"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"bytes"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"*int"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"int"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"*money"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"float64"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"bit"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"int"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"big_int"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"int64"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"float"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"float64"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"double"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"float64"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"decimal"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"float64"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"bool"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"bool"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"date"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"time.Time"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"datetime"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"time.Time"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"timestamp"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"time.Time"})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"\u5176\u4ed6"})}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"string"})})]})]})]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u4e00\u7279\u6027\u5bf9\u4e8e\u9700\u8981\u5c06\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u7f16\u7801\uff0c\u5e76\u901a\u8fc7\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"JSON"})," \u65b9\u5f0f\u76f4\u63a5\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u6765\u8bf4\u5c06\u4f1a\u975e\u5e38\u53cb\u597d\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u7c7b\u578b\u8f6c\u6362",children:"\u7c7b\u578b\u8f6c\u6362"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"gdb"})," \u7684\u6570\u636e\u8bb0\u5f55\u7ed3\u679c\uff08 ",(0,c.jsx)(n.code,{children:"Value"}),"\uff09\u652f\u6301\u975e\u5e38\u7075\u6d3b\u7684\u7c7b\u578b\u8f6c\u6362\uff0c\u5e76\u5185\u7f6e\u652f\u6301\u5e38\u7528\u7684\u6570\u5341\u79cd\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u3002 ",(0,c.jsx)(n.code,{children:"Result"}),"/ ",(0,c.jsx)(n.code,{children:"Record"})," \u7684\u7c7b\u578b\u8f6c\u6362\u8bf7\u67e5\u770b\u540e\u7eed ",(0,c.jsx)(n.a,{href:"https://itician.org/database/gdb/senior",children:"ORM\u9ad8\u7ea7\u7279\u6027"})," \u7ae0\u8282\u3002"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Value"})," \u7c7b\u578b\u662f ",(0,c.jsx)(n.code,{children:"*gvar.Var"})," \u7c7b\u578b\u7684\u522b\u540d\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"gvar.Var"})," \u6570\u636e\u7c7b\u578b\u7684\u6240\u6709\u8f6c\u6362\u65b9\u6cd5\uff0c\u5177\u4f53\u8bf7\u67e5\u770b ",(0,c.jsx)(n.a,{href:"https://itician.org/container/gvar/index",children:"\u901a\u7528\u52a8\u6001\u53d8\u91cf"})," \u7ae0\u8282"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.p,{children:"\u9996\u5148\uff0c\u6570\u636e\u8868\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"# \u5546\u54c1\u8868\nCREATE TABLE `goods` (\n  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,\n  `title` varchar(300) NOT NULL COMMENT '\u5546\u54c1\u540d\u79f0',\n  `price` decimal(10,2) NOT NULL COMMENT '\u5546\u54c1\u4ef7\u683c',\n  ...\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5176\u6b21\uff0c\u6570\u636e\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:"id   title     price\n1    IPhoneX   5999.99\n\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6700\u540e\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'if r, err := db.Table("goods").FindOne(1); err == nil {\n    fmt.Printf("goods    id: %d\\n",   r["id"].Int())\n    fmt.Printf("goods title: %s\\n",   r["title"].String())\n    fmt.Printf("goods proce: %.2f\\n", r["price"].Float32())\n} else {\n    g.Log().Error(err)\n}\n\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"goods    id: 1\ngoods title: IPhoneX\ngoods proce: 5999.99\n\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u7ee7\u627f\u652f\u6301",children:"\u7ee7\u627f\u652f\u6301"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"gdb"})," \u6a21\u5757\u9488\u5bf9\u4e8e ",(0,c.jsx)(n.code,{children:"struct"})," \u7ee7\u627f\u63d0\u4f9b\u4e86\u826f\u597d\u7684\u652f\u6301\uff0c\u5305\u62ec\u53c2\u6570\u4f20\u9012\u3001\u7ed3\u679c\u5904\u7406\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'type Base struct {\n    Uid        int         `orm:"uid"`\n    CreateAt   *gtime.Time `orm:"create_at"`\n    UpdateAt   *gtime.Time `orm:"update_at"`\n    DeleteAt   *gtime.Time `orm:"delete_at"`\n}\ntype User struct {\n    Base\n    Passport   string `orm:"passport"`\n    Password   string `orm:"password"`\n    Nickname   string `orm:"nickname"`\n}\n\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5e76\u4e14\uff0c\u65e0\u8bba\u591a\u5c11\u5c42\u7ea7\u7684 ",(0,c.jsx)(n.code,{children:"struct"})," \u7ee7\u627f\uff0c ",(0,c.jsx)(n.code,{children:"gdb"})," \u7684\u53c2\u6570\u4f20\u9012\u548c\u7ed3\u679c\u5904\u7406\u90fd\u652f\u6301\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>s,x:()=>t});var c=d(296540);const i={},r=c.createContext(i);function s(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);