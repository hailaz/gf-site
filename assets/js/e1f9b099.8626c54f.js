"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[52866],{872333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=n(474848),c=n(28453);const r={title:"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58",sidebar_position:2},s=void 0,d={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58",title:"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.2.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/8-\u7f13\u5b58\u7ba1\u7406/2-\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/8-\u7f13\u5b58\u7ba1\u7406",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/8-\u7f13\u5b58\u7ba1\u7406/2-\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58.md",tags:[],version:"2.2.x",sidebarPosition:2,frontMatter:{title:"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u7f13\u5b58\u7ba1\u7406-\u5185\u5b58\u7f13\u5b58",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-\u5185\u5b58\u7f13\u5b58"},next:{title:"\u7f13\u5b58\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd"}},o={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,i.jsxs)(t.p,{children:["\u7f13\u5b58\u7ec4\u4ef6\u540c\u65f6\u63d0\u4f9b\u4e86 ",(0,i.jsx)(t.code,{children:"gcache"})," \u7684 ",(0,i.jsx)(t.code,{children:"Redis"})," \u7f13\u5b58\u9002\u914d\u5b9e\u73b0\u3002 ",(0,i.jsx)(t.code,{children:"Redis"})," \u7f13\u5b58\u5728\u591a\u8282\u70b9\u4fdd\u8bc1\u7f13\u5b58\u7684\u6570\u636e\u4e00\u81f4\u6027\u65f6\u975e\u5e38\u6709\u7528\uff0c\u7279\u522b\u662f ",(0,i.jsx)(t.code,{children:"Session"})," \u5171\u4eab\u3001\u6570\u636e\u5e93\u67e5\u8be2\u7f13\u5b58\u7b49\u573a\u666f\u4e2d\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'func ExampleCache_SetAdapter() {\n\tvar (\n\t\terr         error\n\t\tctx         = gctx.New()\n\t\tcache       = gcache.New()\n\t\tredisConfig = &gredis.Config{\n\t\t\tAddress: "127.0.0.1:6379",\n\t\t\tDb:      9,\n\t\t}\n\t\tcacheKey   = `key`\n\t\tcacheValue = `value`\n\t)\n\t// Create redis client object.\n\tredis, err := gredis.New(redisConfig)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\t// Create redis cache adapter and set it to cache object.\n\tcache.SetAdapter(gcache.NewAdapterRedis(redis))\n\n\t// Set and Get using cache object.\n\terr = cache.Set(ctx, cacheKey, cacheValue, time.Second)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(cache.MustGet(ctx, cacheKey).String())\n\n\t// Get using redis client.\n\tfmt.Println(redis.MustDo(ctx, "GET", cacheKey).String())\n\n\t// Output:\n\t// value\n\t// value\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var i=n(296540);const c={},r=i.createContext(c);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);