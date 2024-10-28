"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[67902],{478020:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=r(474848),i=r(28453);const s={title:"Redis-\u7ed3\u679c\u5904\u7406",sidebar_position:2},c=void 0,d={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u7ed3\u679c\u5904\u7406",title:"Redis-\u7ed3\u679c\u5904\u7406",description:"\u53ef\u4ee5\u770b\u5230\u901a\u8fc7\u5ba2\u6237\u7aef\u65b9\u6cd5 Do/Receive \u83b7\u53d6\u7684\u6570\u636e\u90fd\u662f\u4e8c\u8fdb\u5236\u5f62\u5f0f []byte \u7684\uff0c\u9700\u8981\u5f00\u53d1\u8005\u624b\u52a8\u8fdb\u884c\u6570\u636e\u8f6c\u6362\u3002",source:"@site/versioned_docs/version-1.16.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/12-NoSQL Redis/2-Redis-\u7ed3\u679c\u5904\u7406.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/12-NoSQL Redis",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u7ed3\u679c\u5904\u7406",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u7ed3\u679c\u5904\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/12-NoSQL Redis/2-Redis-\u7ed3\u679c\u5904\u7406.md",tags:[],version:"1.16.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:2,frontMatter:{title:"Redis-\u7ed3\u679c\u5904\u7406",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Redis-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u57fa\u672c\u4f7f\u7528"},next:{title:"Redis-Context",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Context"}},o={},a=[{value:"<code>DoVar</code> \u793a\u4f8b",id:"dovar-\u793a\u4f8b",level:3},{value:"<code>ReceiveVar</code> \u793a\u4f8b",id:"receivevar-\u793a\u4f8b",level:3},{value:"<code>HashSet</code> \u793a\u4f8b",id:"hashset-\u793a\u4f8b",level:3}];function l(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u901a\u8fc7\u5ba2\u6237\u7aef\u65b9\u6cd5 ",(0,t.jsx)(n.code,{children:"Do/Receive"})," \u83b7\u53d6\u7684\u6570\u636e\u90fd\u662f\u4e8c\u8fdb\u5236\u5f62\u5f0f ",(0,t.jsx)(n.code,{children:"[]byte"})," \u7684\uff0c\u9700\u8981\u5f00\u53d1\u8005\u624b\u52a8\u8fdb\u884c\u6570\u636e\u8f6c\u6362\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u7136\uff0c ",(0,t.jsx)(n.code,{children:"gredis"})," \u6a21\u5757\u4e5f\u63d0\u4f9b\u4e86 ",(0,t.jsx)(n.code,{children:"DoVar/ReceiveVar"})," \u65b9\u6cd5\uff0c\u7528\u4ee5\u83b7\u53d6\u53ef\u4f9b\u65b9\u4fbf\u8f6c\u6362\u7684 ",(0,t.jsx)(n.code,{children:"gvar.Var"})," \u901a\u7528\u53d8\u91cf\u7ed3\u679c\u3002\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"gvar.Var"})," \u7684\u5f3a\u5927\u8f6c\u6362\u529f\u80fd\u53ef\u4ee5\u8f6c\u6362\u4e3a\u4efb\u610f\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5982\u57fa\u672c\u6570\u636e\u7c7b\u578b ",(0,t.jsx)(n.code,{children:"Int"}),", ",(0,t.jsx)(n.code,{children:"String"}),", ",(0,t.jsx)(n.code,{children:"Strings"}),"\uff0c\u6216\u8005\u7ed3\u6784\u4f53 ",(0,t.jsx)(n.code,{children:"Struct"})," \u7b49\u7b49\u3002"]}),"\n",(0,t.jsxs)(n.h3,{id:"dovar-\u793a\u4f8b",children:[(0,t.jsx)(n.code,{children:"DoVar"})," \u793a\u4f8b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n    conn := g.Redis().Conn()\n    defer conn.Close()\n    conn.Do("SET", "k", "v")\n    v, _ := conn.DoVar("GET", "k")\n    fmt.Println(v.String())\n}\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"v\n\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"receivevar-\u793a\u4f8b",children:[(0,t.jsx)(n.code,{children:"ReceiveVar"})," \u793a\u4f8b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n\tconn := g.Redis().Conn()\n\tdefer conn.Close()\n\t_, err := conn.Do("SUBSCRIBE", "channel")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfor {\n\t\treply, err := conn.ReceiveVar()\n\t\tif err != nil {\n\t\t\tpanic(err)\n\t\t}\n\t\tfmt.Println(reply.Strings())\n\t}\n}\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7a0b\u5e8f\u5c06\u963b\u585e\u7b49\u5f85\u83b7\u53d6\u6570\u636e\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u53e6\u5916\u6253\u5f00\u4e00\u4e2a\u7ec8\u7aef\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"redis-cli"})," \u547d\u4ee4\u8fdb\u5165Redis Server\uff0c\u53d1\u5e03\u4e00\u6761\u6d88\u606f\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ redis-cli\n127.0.0.1:6379> publish channel test\n(integer) 1\n127.0.0.1:6379>\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u968f\u540e\u7a0b\u5e8f\u7ec8\u7aef\u7acb\u5373\u6253\u5370\u51fa\u4eceRedis Server\u83b7\u53d6\u7684\u6570\u636e\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"[message channel test]\n\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"hashset-\u793a\u4f8b",children:[(0,t.jsx)(n.code,{children:"HashSet"})," \u793a\u4f8b"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"HashSet"})," \u662f\u6211\u4eec\u6bd4\u8f83\u5e38\u7528\u7684 ",(0,t.jsx)(n.code,{children:"Redis"})," \u6570\u636e\u7ed3\u6784\uff0c\u6211\u4eec\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u5c06 ",(0,t.jsx)(n.code,{children:"Redis"})," \u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"HashSet"})," \u83b7\u53d6\u5e76\u8f6c\u6362\u4e3a ",(0,t.jsx)(n.code,{children:"Golang Map"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/container/gvar"\n\t"github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n\tvar (\n\t\terr    error\n\t\tresult *gvar.Var\n\t\tkey    = "user"\n\t)\n\t_, err = g.Redis().Do("HSET", key, "id", 10000)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\t_, err = g.Redis().Do("HSET", key, "name", "john")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tresult, err = g.Redis().DoVar("HGETALL", key)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(result.Map())\n\n\t// May Output:\n\t// map[id:10000 name:john]\n}\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var t=r(296540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);