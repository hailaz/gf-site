"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[48914],{721285:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(474848),i=t(28453);const c={title:"Redis-\u4f7f\u7528\u793a\u4f8b",sidebar_position:1},s=void 0,o={id:"\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b",title:"Redis-\u4f7f\u7528\u793a\u4f8b",description:"Set/Get \u64cd\u4f5c",source:"@site/versioned_docs/version-2.7.x/5-\u7ec4\u4ef6\u5217\u8868/11-NoSQL Redis/1-Redis-\u4f7f\u7528\u793a\u4f8b.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/11-NoSQL Redis",slug:"/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b",permalink:"/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b",draft:!1,unlisted:!1,tags:[],version:"2.7.x",sidebarPosition:1,frontMatter:{title:"Redis-\u4f7f\u7528\u793a\u4f8b",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Redis-\u914d\u7f6e\u7ba1\u7406",permalink:"/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406"},next:{title:"Redis-\u547d\u4ee4\u4ea4\u4e92",permalink:"/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92"}},d={},l=[{value:"<code>Set/Get</code> \u64cd\u4f5c",id:"setget-\u64cd\u4f5c",level:2},{value:"<code>SetEx</code> \u64cd\u4f5c",id:"setex-\u64cd\u4f5c",level:2},{value:"<code>HSet/HGetAll</code> \u64cd\u4f5c",id:"hsethgetall-\u64cd\u4f5c",level:2},{value:"<code>HMSet/HMGet</code> \u64cd\u4f5c",id:"hmsethmget-\u64cd\u4f5c",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"setget-\u64cd\u4f5c",children:[(0,r.jsx)(n.code,{children:"Set/Get"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'package main\n\nimport (\n\t"fmt"\n\n\t_ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar ctx = gctx.New()\n\t_, err := g.Redis().Set(ctx, "key", "value")\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tvalue, err := g.Redis().Get(ctx, "key")\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tfmt.Println(value.String())\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"value\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"setex-\u64cd\u4f5c",children:[(0,r.jsx)(n.code,{children:"SetEx"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"time"\n\n\t_ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar ctx = gctx.New()\n\terr := g.Redis().SetEX(ctx, "key", "value", 1)\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tvalue, err := g.Redis().Get(ctx, "key")\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tfmt.Println(value.IsNil())\n\tfmt.Println(value.String())\n\n\ttime.Sleep(time.Second)\n\n\tvalue, err = g.Redis().Get(ctx, "key")\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tfmt.Println(value.IsNil())\n\tfmt.Println(value.Val())\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"false\nvalue\ntrue\n<nil>\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"hsethgetall-\u64cd\u4f5c",children:[(0,r.jsx)(n.code,{children:"HSet/HGetAll"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'package main\n\nimport (\n\t"fmt"\n\n\t_ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar (\n\t\tctx = gctx.New()\n\t\tkey = "key"\n\t)\n\t_, err := g.Redis().HSet(ctx, key, g.Map{\n\t\t"id":    1,\n\t\t"name":  "john",\n\t\t"score": 100,\n\t})\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\n\t// retrieve hash map\n\tvalue, err := g.Redis().HGetAll(ctx, key)\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tfmt.Println(value.Map())\n\n\t// scan to struct\n\ttype User struct {\n\t\tId    uint64\n\t\tName  string\n\t\tScore float64\n\t}\n\tvar user *User\n\tif err = value.Scan(&user); err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tg.Dump(user)\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'map[id:1 name:john score:100]\n{\n    Id:    1,\n    Name:  "john",\n    Score: 100,\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"hmsethmget-\u64cd\u4f5c",children:[(0,r.jsx)(n.code,{children:"HMSet/HMGet"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'package main\n\nimport (\n\t_ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar (\n\t\tctx = gctx.New()\n\t\tkey = "key"\n\t)\n\terr := g.Redis().HMSet(ctx, key, g.Map{\n\t\t"id":    1,\n\t\t"name":  "john",\n\t\t"score": 100,\n\t})\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\n\t// retrieve hash map\n\tvalues, err := g.Redis().HMGet(ctx, key, "id", "name")\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tg.Dump(values.Strings())\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[\n    "1",\n    "john",\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"As per Redis 4.0.0, HMSET is considered deprecated. Please use HSET in new code. "})}),"\n",(0,r.jsxs)(n.p,{children:["\u6839\u636e ",(0,r.jsx)(n.code,{children:"Redis 4.0.0"}),"\uff0c ",(0,r.jsx)(n.code,{children:"HMSET"})," \u88ab\u89c6\u4e3a\u5df2\u5f03\u7528\u3002\u8bf7\u5728\u65b0\u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"HSET"}),"\u3002"]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(296540);const i={},c=r.createContext(i);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);