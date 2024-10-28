"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[12795],{654689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=n(474848),i=n(28453);const s={title:"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",sidebar_position:4},d=void 0,o={id:"\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",title:"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",description:"gredis \u91c7\u7528\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u5177\u6709\u5f3a\u5927\u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u3002",source:"@site/versioned_docs/version-2.7.x/5-\u7ec4\u4ef6\u5217\u8868/11-NoSQL Redis/4-Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/11-NoSQL Redis",slug:"/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",permalink:"/gf-site/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/5-\u7ec4\u4ef6\u5217\u8868/11-NoSQL Redis/4-Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1.md",tags:[],version:"2.7.x",sidebarPosition:4,frontMatter:{title:"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Redis-Conn\u5bf9\u8c61",permalink:"/gf-site/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-Conn\u5bf9\u8c61"},next:{title:"\u5fae\u670d\u52a1\u5f00\u53d1",permalink:"/gf-site/docs/2.7.x/\u5fae\u670d\u52a1\u5f00\u53d1/"}},c={},a=[{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49",level:2},{value:"\u76f8\u5173\u65b9\u6cd5",id:"\u76f8\u5173\u65b9\u6cd5",level:2},{value:"\u81ea\u5b9e\u73b0Redis Adapter",id:"\u81ea\u5b9e\u73b0redis-adapter",level:2}];function g(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"gredis"})," \u91c7\u7528\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u5177\u6709\u5f3a\u5927\u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u63a5\u53e3\u5b9a\u4e49",children:"\u63a5\u53e3\u5b9a\u4e49"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis#Adapter",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis#Adapter"})}),"\n",(0,r.jsx)(t.h2,{id:"\u76f8\u5173\u65b9\u6cd5",children:"\u76f8\u5173\u65b9\u6cd5"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"// SetAdapter sets custom adapter for current redis client.\nfunc (r *Redis) SetAdapter(adapter Adapter)\n\n// GetAdapter returns the adapter that is set in current redis client.\nfunc (r *Redis) GetAdapter() Adapter\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u81ea\u5b9e\u73b0redis-adapter",children:"\u81ea\u5b9e\u73b0Redis Adapter"}),"\n",(0,r.jsxs)(t.p,{children:["\u6846\u67b6\u793e\u533a\u7ec4\u4ef6\u63d0\u4f9b\u4e86 ",(0,r.jsx)(t.code,{children:"Redis Adapter"})," \u7684\u9ed8\u8ba4\u5b9e\u73b0\uff0c\u5982\u679c\u5f00\u53d1\u8005\u9700\u8981\u81ea\u5b9e\u73b0 ",(0,r.jsx)(t.code,{children:"Redis Adapter"})," \u6216\u8005\u60f3\u8981\u8986\u76d6\u5176\u4e2d\u7684\u67d0\u4e00\u4e9b\u65b9\u6cd5\uff0c\u53ef\u4ee5\u57fa\u4e8e\u8be5\u5b9e\u73b0\u6765\u6269\u5c55\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5728\u8be5\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 ",(0,r.jsx)(t.code,{children:"Redis Adapter"}),"\uff0c\u5e76\u4e14\u8986\u76d6\u5b83\u7684 ",(0,r.jsx)(t.code,{children:"Do"})," \u5e95\u5c42\u65b9\u6cd5\u3002\u4e3a\u7b80\u5316\u793a\u4f8b\uff0c\u6211\u4eec\u8fd9\u91cc\u5728\u81ea\u5b9e\u73b0\u7684 ",(0,r.jsx)(t.code,{children:"Do"})," \u65b9\u6cd5\u4e2d\u6253\u5370\u4e00\u6761\u65e5\u5fd7\u5373\u53ef\uff0c\u540e\u7eed\u903b\u8f91\u4ecd\u7136\u8d70\u793e\u533a ",(0,r.jsx)(t.code,{children:"Redis Adapter"})," \u7684\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/gogf/gf/contrib/nosql/redis/v2"\n\n\t"github.com/gogf/gf/v2/container/gvar"\n\t"github.com/gogf/gf/v2/database/gredis"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nvar (\n\tctx    = gctx.New()\n\tgroup  = "cache"\n\tconfig = gredis.Config{\n\t\tAddress: "127.0.0.1:6379",\n\t\tDb:      1,\n\t}\n)\n\n// MyRedis description\ntype MyRedis struct {\n\t*redis.Redis\n}\n\n// Do implements and overwrites the underlying function Do from Adapter.\nfunc (r *MyRedis) Do(ctx context.Context, command string, args ...interface{}) (*gvar.Var, error) {\n\tfmt.Println("MyRedis Do:", command, args)\n\treturn r.Redis.Do(ctx, command, args...)\n}\n\nfunc main() {\n\tgredis.RegisterAdapterFunc(func(config *gredis.Config) gredis.Adapter {\n\t\tr := &MyRedis{redis.New(config)}\n\t\tr.AdapterOperation = r // This is necessary.\n\t\treturn r\n\t})\n\tgredis.SetConfig(&config, group)\n\n\t_, err := g.Redis(group).Set(ctx, "key", "value")\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tvalue, err := g.Redis(group).Get(ctx, "key")\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tfmt.Println(value.String())\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"MyRedis Do: Set [key value]\nMyRedis Do: Get [key]\nvalue\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(296540);const i={},s=r.createContext(i);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);