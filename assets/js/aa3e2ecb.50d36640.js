"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[88625],{340483:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var i=r(474848),t=r(28453);const c={title:"Redis-\u57fa\u672c\u4f7f\u7528",sidebar_position:1},s=void 0,o={id:"\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u57fa\u672c\u4f7f\u7528",title:"Redis-\u57fa\u672c\u4f7f\u7528",description:"Do/DoVar \u65b9\u6cd5",source:"@site/versioned_docs/version-1.14.x/1-\u6838\u5fc3\u7ec4\u4ef6/11-NoSQL Redis/1-Redis-\u57fa\u672c\u4f7f\u7528.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6/11-NoSQL Redis",slug:"/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u57fa\u672c\u4f7f\u7528",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.14.x/1-\u6838\u5fc3\u7ec4\u4ef6/11-NoSQL Redis/1-Redis-\u57fa\u672c\u4f7f\u7528.md",tags:[],version:"1.14.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:1,frontMatter:{title:"Redis-\u57fa\u672c\u4f7f\u7528",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Redis-\u914d\u7f6e\u7ba1\u7406",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406"},next:{title:"Redis-\u7ed3\u679c\u5904\u7406",permalink:"/gf-site/docs/1.14.x/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u7ed3\u679c\u5904\u7406"}},d={},l=[{value:"<code>Do/DoVar</code> \u65b9\u6cd5",id:"dodovar-\u65b9\u6cd5",level:3},{value:"<code>Conn</code> \u8fde\u63a5\u5bf9\u8c61",id:"conn-\u8fde\u63a5\u5bf9\u8c61",level:3},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:4},{value:"<code>Send</code> \u65b9\u6cd5",id:"send-\u65b9\u6cd5",level:4},{value:"\u8ba2\u9605/\u53d1\u5e03",id:"\u8ba2\u9605\u53d1\u5e03",level:4},{value:"\u81ea\u52a8\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316",id:"\u81ea\u52a8\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316",level:3},{value:"<code>map</code> \u5b58\u53d6",id:"map-\u5b58\u53d6",level:4},{value:"<code>struct</code> \u5b58\u53d6",id:"struct-\u5b58\u53d6",level:4}];function a(n){const e={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h3,{id:"dodovar-\u65b9\u6cd5",children:[(0,i.jsx)(e.code,{children:"Do/DoVar"})," \u65b9\u6cd5"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u6700\u5e38\u7528\u7684\u662f ",(0,i.jsx)(e.code,{children:"Do/DoVar"})," \u65b9\u6cd5\uff0c\u6267\u884c\u540c\u6b65\u6307\u4ee4\uff0c\u901a\u8fc7\u5411 ",(0,i.jsx)(e.code,{children:"Redis Server"})," \u53d1\u9001\u5bf9\u5e94\u7684 ",(0,i.jsx)(e.code,{children:"Redis API"})," \u547d\u4ee4\uff0c\u6765\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"Redis Server"})," \u7684\u670d\u52a1\u3002 ",(0,i.jsx)(e.code,{children:"Do/Var"})," \u65b9\u6cd5\u6700\u5927\u7684\u7279\u70b9\u662f\u5185\u90e8\u81ea\u884c\u4ece\u8fde\u63a5\u6c60\u4e2d\u83b7\u53d6\u8fde\u63a5\u5bf9\u8c61\uff0c\u4f7f\u7528\u5b8c\u6bd5\u540e\u81ea\u52a8\u4e22\u56de\u8fde\u63a5\u6c60\u4e2d\uff0c\u5f00\u53d1\u8005\u65e0\u9700\u624b\u52a8\u8c03\u7528 ",(0,i.jsx)(e.code,{children:"Close"})," \u65b9\u6cd5\uff0c\u65b9\u4fbf\u4f7f\u7528\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Do"})," \u548c ",(0,i.jsx)(e.code,{children:"DoVar"})," \u7684\u533a\u522b\u5728\u4e8e\u8fd4\u56de\u7684\u7ed3\u679c\u7c7b\u578b\u4e0d\u4e00\u6837\uff0c ",(0,i.jsx)(e.code,{children:"DoVar"})," \u8fd4\u56de\u7684\u662f ",(0,i.jsx)(e.code,{children:"gvar.Var"})," \u7c7b\u578b\uff0c\u8be5\u7c7b\u578b\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u975e\u5e38\u65b9\u4fbf\u7684\u7c7b\u578b\u8f6c\u6362\u3002"]}),"\n",(0,i.jsxs)(e.h3,{id:"conn-\u8fde\u63a5\u5bf9\u8c61",children:[(0,i.jsx)(e.code,{children:"Conn"})," \u8fde\u63a5\u5bf9\u8c61"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"Do/DoVar"})," \u65b9\u6cd5\u5df2\u7ecf\u80fd\u591f\u6ee1\u8db3\u7edd\u5927\u90e8\u5206\u7684\u573a\u666f\u9700\u8981\uff0c\u5982\u679c\u9700\u8981\u66f4\u590d\u6742\u7684Redis\u64cd\u4f5c\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"Conn"})," \u65b9\u6cd5\u4ece\u8fde\u63a5\u6c60\u4e2d\u83b7\u53d6\u4e00\u4e2a\u8fde\u63a5\u5bf9\u8c61\uff0c\u968f\u540e\u4f7f\u7528\u8be5\u8fde\u63a5\u5bf9\u8c61\u8fdb\u884c\u64cd\u4f5c\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8be5\u8fde\u63a5\u5bf9\u8c61\u4e0d\u518d\u4f7f\u7528\u65f6\uff0c\u5e94\u5f53\u663e\u5f0f\u8c03\u7528 ",(0,i.jsx)(e.code,{children:"Close"})," \u65b9\u6cd5\u8fdb\u884c\u5173\u95ed\uff08\u4e22\u56de\u8fde\u63a5\u6c60\uff09\u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u7531\u4e8e\u8be5 ",(0,i.jsx)(e.code,{children:"Conn"})," \u662f\u4e2a\u8fde\u63a5\u5bf9\u8c61\uff0c\u6ce8\u610f\u8be5\u5bf9\u8c61\u5b58\u5728\u8fde\u63a5\u8d85\u65f6\u7684\u9650\u5236\uff0c\u8d85\u65f6\u548c\u670d\u52a1\u7aef\u914d\u7f6e\u6709\u5173\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/util/gconv"\n)\n\nfunc main() {\n    conn := g.Redis().Conn()\n    defer conn.Close()\n    conn.Do("SET", "k", "v")\n    v, _ := conn.Do("GET", "k")\n    fmt.Println(gconv.String(v))\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"v\n\n"})}),"\n",(0,i.jsxs)(e.h4,{id:"send-\u65b9\u6cd5",children:[(0,i.jsx)(e.code,{children:"Send"})," \u65b9\u6cd5"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Send"})," \u53ef\u4ee5\u6267\u884c\u6279\u91cf\u6307\u4ee4\uff0c\u5e76\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"Receive"})," \u65b9\u6cd5\u4e00\u4e00\u83b7\u53d6\u8fd4\u56de\u7ed3\u679c\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/util/gconv"\n)\n\nfunc main() {\n    conn := g.Redis().Conn()\n    defer conn.Close()\n    conn.Send("SET", "foo", "bar")\n    conn.Send("GET", "foo")\n    conn.Flush()\n    // reply from SET\n    conn.Receive()\n    // reply from GET\n    v, _ := conn.Receive()\n    fmt.Println(gconv.String(v))\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"bar\n\n"})}),"\n",(0,i.jsx)(e.h4,{id:"\u8ba2\u9605\u53d1\u5e03",children:"\u8ba2\u9605/\u53d1\u5e03"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/util/gconv"\n)\n\nfunc main() {\n    conn := g.Redis().Conn()\n    defer conn.Close()\n    _, err := conn.Do("SUBSCRIBE", "channel")\n    if err != nil {\n        panic(err)\n    }\n    for {\n        reply, err := conn.Receive()\n        if err != nil {\n            panic(err)\n        }\n        fmt.Println(gconv.Strings(reply))\n    }\n}\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7a0b\u5e8f\u5c06\u963b\u585e\u7b49\u5f85\u83b7\u53d6\u6570\u636e\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u53e6\u5916\u6253\u5f00\u4e00\u4e2a\u7ec8\u7aef\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"redis-cli"})," \u547d\u4ee4\u8fdb\u5165Redis Server\uff0c\u53d1\u5e03\u4e00\u6761\u6d88\u606f\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"$ redis-cli\n127.0.0.1:6379> publish channel test\n(integer) 1\n127.0.0.1:6379>\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u968f\u540e\u7a0b\u5e8f\u7ec8\u7aef\u7acb\u5373\u6253\u5370\u51fa\u4eceRedis Server\u83b7\u53d6\u7684\u6570\u636e\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"[message channel test]\n\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u81ea\u52a8\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316",children:"\u81ea\u52a8\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316"}),"\n",(0,i.jsxs)(e.p,{children:["\u5f53\u7ed9\u5b9a\u7684\u53c2\u6570\u4e3a ",(0,i.jsx)(e.code,{children:"map"}),", ",(0,i.jsx)(e.code,{children:"slice"}),", ",(0,i.jsx)(e.code,{children:"struct"})," \u65f6\uff0c ",(0,i.jsx)(e.code,{children:"gredis"})," \u5185\u90e8\u652f\u6301\u81ea\u52a8\u5bf9\u5176\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"json"})," \u5e8f\u5217\u5316\uff0c\u5e76\u4e14\u8bfb\u53d6\u6570\u636e\u65f6\u53ef\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"gvar.Var"})," \u7684\u8f6c\u6362\u529f\u80fd\u5b9e\u73b0\u53cd\u5e8f\u5217\u5316\u3002"]}),"\n",(0,i.jsxs)(e.h4,{id:"map-\u5b58\u53d6",children:[(0,i.jsx)(e.code,{children:"map"})," \u5b58\u53d6"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/container/gvar"\n\t"github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n\tvar (\n\t\terr    error\n\t\tresult *gvar.Var\n\t\tkey    = "user"\n\t\tdata   = g.Map{\n\t\t\t"id":   10000,\n\t\t\t"name": "john",\n\t\t}\n\t)\n\t_, err = g.Redis().Do("SET", key, data)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tresult, err = g.Redis().DoVar("GET", key)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(result.Map())\n}\n\n'})}),"\n",(0,i.jsxs)(e.h4,{id:"struct-\u5b58\u53d6",children:[(0,i.jsx)(e.code,{children:"struct"})," \u5b58\u53d6"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/container/gvar"\n\t"github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n\ttype User struct {\n\t\tId   int\n\t\tName string\n\t}\n\tvar (\n\t\terr    error\n\t\tresult *gvar.Var\n\t\tkey    = "user"\n\t\tuser   = &User{\n\t\t\tId:   10000,\n\t\t\tName: "john",\n\t\t}\n\t)\n\n\t_, err = g.Redis().Do("SET", key, user)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tresult, err = g.Redis().DoVar("GET", key)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tvar user2 *User\n\tif err = result.Struct(&user2); err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(user2.Id, user2.Name)\n}\n\n'})})]})}function g(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>o});var i=r(296540);const t={},c=i.createContext(t);function s(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);