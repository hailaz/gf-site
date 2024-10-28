"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[36564],{31566:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var t=c(474848),r=c(28453);const d={title:"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf",sidebar_position:9},i=void 0,s={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf",title:"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf",description:"ORM \u652f\u6301\u4f20\u9012\u81ea\u5b9a\u4e49\u7684 context \u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u7528\u4e8e\u5f02\u6b65 IO \u63a7\u5236\u3001\u4e0a\u4e0b\u6587\u4fe1\u606f\u4f20\u9012\uff08\u7279\u522b\u662f\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\u7684\u4f20\u9012\uff09\u3001\u4ee5\u53ca\u5d4c\u5957\u4e8b\u52a1\u652f\u6301\u3002",source:"@site/versioned_docs/version-2.4.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/10-\u6570\u636e\u5e93ORM/9-ORM\u4e0a\u4e0b\u6587\u53d8\u91cf.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/10-\u6570\u636e\u5e93ORM",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf",permalink:"/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf",draft:!1,unlisted:!1,tags:[],version:"2.4.x",sidebarPosition:9,frontMatter:{title:"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"ORM\u63a5\u53e3\u5f00\u53d1-\u9a71\u52a8\u5f00\u53d1",permalink:"/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u63a5\u53e3\u5f00\u53d1/ORM\u63a5\u53e3\u5f00\u53d1-\u9a71\u52a8\u5f00\u53d1"},next:{title:"ORM\u6700\u4f73\u5b9e\u8df5",permalink:"/docs/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5/"}},o={},l=[{value:"\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",id:"\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",level:2},{value:"\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f",id:"\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f",level:2},{value:"\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c",id:"\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c",level:2},{value:"\u5d4c\u5957\u4e8b\u52a1\u652f\u6301",id:"\u5d4c\u5957\u4e8b\u52a1\u652f\u6301",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ORM"})," \u652f\u6301\u4f20\u9012\u81ea\u5b9a\u4e49\u7684 ",(0,t.jsx)(n.code,{children:"context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\uff0c\u7528\u4e8e\u5f02\u6b65 ",(0,t.jsx)(n.code,{children:"IO"})," \u63a7\u5236\u3001\u4e0a\u4e0b\u6587\u4fe1\u606f\u4f20\u9012\uff08\u7279\u522b\u662f\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\u7684\u4f20\u9012\uff09\u3001\u4ee5\u53ca\u5d4c\u5957\u4e8b\u52a1\u652f\u6301\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"Ctx"})," \u65b9\u6cd5\u4f20\u9012\u81ea\u5b9a\u4e49\u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\u7ed9 ",(0,t.jsx)(n.code,{children:"ORM"})," \u5bf9\u8c61\uff0c ",(0,t.jsx)(n.code,{children:"Ctx"})," \u65b9\u6cd5\u5176\u5b9e\u662f\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\uff0c\u8be5\u4e0a\u4e0b\u6587\u4f20\u9012\u8fdb\u53bb\u540e\u4ec5\u5bf9\u5f53\u524d ",(0,t.jsx)(n.code,{children:"DB"})," \u63a5\u53e3\u5bf9\u8c61\u6709\u6548\uff0c\u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"func Ctx(ctx context.Context) DB\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236",children:"\u8bf7\u6c42\u8d85\u65f6\u63a7\u5236"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u901a\u8fc7\u4e0a\u4e0b\u6587\u53d8\u91cf\u63a7\u5236\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u7684\u793a\u4f8b\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'ctx, cancel := context.WithTimeout(context.Background(), time.Second)\ndefer cancel()\n_, err := db.Ctx(ctx).Query("SELECT SLEEP(10)")\nfmt.Println(err)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u8be5\u793a\u4f8b\u4e2d\u6267\u884c\u4f1a ",(0,t.jsx)(n.code,{children:"sleep 10"})," \u79d2\u4e2d\uff0c\u56e0\u6b64\u5fc5\u5b9a\u4f1a\u5f15\u53d1\u8bf7\u6c42\u7684\u8d85\u65f6\u3002\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"context deadline exceeded, SELECT SLEEP(10)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f",children:"\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u4e0b\u6587\u53d8\u91cf\u4e5f\u53ef\u4ee5\u4f20\u9012\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\uff0c\u5e76\u4e14\u53ef\u4ee5\u548c\u65e5\u5fd7\u7ec4\u4ef6\u7ed3\u5408\uff0c\u5c06\u94fe\u8def\u4fe1\u606f\u6253\u5370\u5230\u65e5\u5fd7\u4e2d\uff08\u4ec5\u5f53 ",(0,t.jsx)(n.code,{children:"ORM"})," \u65e5\u5fd7\u5f00\u542f\u65f6\uff09\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u94fe\u8def\u8ddf\u8e2a\u4e13\u9898\u4ecb\u7ecd\u7ae0\u8282\uff1a ",(0,t.jsx)(n.a,{href:"output/goframe-v2.4-md/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%9C%8D%E5%8A%A1%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA",children:"\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c",children:"\u6a21\u578b\u4e0a\u4e0b\u6587\u64cd\u4f5c"}),"\n",(0,t.jsxs)(n.p,{children:["\u6a21\u578b\u5bf9\u8c61\u4e5f\u652f\u6301\u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u4f20\u9012\uff0c\u540c\u6837\u4e5f\u662f\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"Ctx"})," \u65b9\u6cd5\u3002\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u6211\u4eec\u5c06\u793a\u4f8b2\u7684\u4f8b\u5b50\u901a\u8fc7\u6a21\u578b\u64cd\u4f5c\u8c03\u6574\u4e00\u4e0b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\t_, err := g.DB().Model("user").Ctx(gctx.New()).All()\n\tif err != nil {\n\t\tpanic(err)\n\t}\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u4e3a\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"2020-12-28 23:46:56.349 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  5 ms] [default] [rows:0  ] SHOW FULL COLUMNS FROM `user`\n2020-12-28 23:46:56.354 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  5 ms] [default] [rows:100] SELECT * FROM `user`\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"SHOW FULL COLUMNS FROM `user` "})," \u4e3a ",(0,t.jsx)(n.code,{children:"ORM"})," \u7ec4\u4ef6\u7684\u6570\u636e\u8868\u5b57\u6bb5\u83b7\u53d6\u67e5\u8be2\uff0c\u6bcf\u4e2a\u8868\u5728\u6267\u884c\u64cd\u4f5c\u4e4b\u524d\u4ec5\u4f1a\u67e5\u8be2\u4e00\u6b21\u5e76\u7f13\u5b58\u7ed3\u679c\u5230\u5185\u5b58\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5d4c\u5957\u4e8b\u52a1\u652f\u6301",children:"\u5d4c\u5957\u4e8b\u52a1\u652f\u6301"}),"\n",(0,t.jsxs)(n.p,{children:["\u5d4c\u5957\u4e8b\u52a1\u7684\u652f\u6301\u4f9d\u8d56 ",(0,t.jsx)(n.code,{children:"Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u7684\u5c42\u7ea7\u4f20\u9012\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,t.jsx)(n.a,{href:"output/goframe-v2.4-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86",children:"ORM\u4e8b\u52a1\u5904\u7406"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>i,x:()=>s});var t=c(296540);const r={},d=t.createContext(r);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);