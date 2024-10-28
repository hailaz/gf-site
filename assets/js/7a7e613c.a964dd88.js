"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[29366],{78435:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var o=n(474848),i=n(28453);const d={title:"Session",sidebar_position:5},c=void 0,r={id:"WEB\u670d\u52a1\u5f00\u53d1/Session/Session",title:"Session",description:"GF \u6846\u67b6\u63d0\u4f9b\u4e86\u5b8c\u5584\u7684 Session \u7ba1\u7406\u80fd\u529b\uff0c\u7531 gsession \u6a21\u5757\u5b9e\u73b0\u3002\u7531\u4e8e Session \u673a\u5236\u5728 HTTP \u670d\u52a1\u4e2d\u6700\u5e38\u7528\uff0c\u56e0\u6b64\u540e\u7eed\u7ae0\u8282\u4e2d\u5c06\u7740\u91cd\u4ee5 HTTP \u670d\u52a1\u4e3a\u793a\u4f8b\u4ecb\u7ecd Session \u7684\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.14.x/3-WEB\u670d\u52a1\u5f00\u53d1/5-Session/5-Session.md",sourceDirName:"3-WEB\u670d\u52a1\u5f00\u53d1/5-Session",slug:"/WEB\u670d\u52a1\u5f00\u53d1/Session/",permalink:"/gf-site/docs/1.14.x/WEB\u670d\u52a1\u5f00\u53d1/Session/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.14.x/3-WEB\u670d\u52a1\u5f00\u53d1/5-Session/5-Session.md",tags:[],version:"1.14.x",sidebarPosition:5,frontMatter:{title:"Session",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cookie",permalink:"/gf-site/docs/1.14.x/WEB\u670d\u52a1\u5f00\u53d1/Cookie"},next:{title:"Session-\u6587\u4ef6\u5b58\u50a8",permalink:"/gf-site/docs/1.14.x/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-\u6587\u4ef6\u5b58\u50a8"}},t={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"<code>gsession</code> \u6a21\u5757",id:"gsession-\u6a21\u5757",level:2},{value:"\u5b58\u50a8\u5b9e\u73b0\u65b9\u5f0f",id:"\u5b58\u50a8\u5b9e\u73b0\u65b9\u5f0f",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"GF"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u5b8c\u5584\u7684 ",(0,o.jsx)(s.code,{children:"Session"})," \u7ba1\u7406\u80fd\u529b\uff0c\u7531 ",(0,o.jsx)(s.code,{children:"gsession"})," \u6a21\u5757\u5b9e\u73b0\u3002\u7531\u4e8e ",(0,o.jsx)(s.code,{children:"Session"})," \u673a\u5236\u5728 ",(0,o.jsx)(s.code,{children:"HTTP"})," \u670d\u52a1\u4e2d\u6700\u5e38\u7528\uff0c\u56e0\u6b64\u540e\u7eed\u7ae0\u8282\u4e2d\u5c06\u7740\u91cd\u4ee5 ",(0,o.jsx)(s.code,{children:"HTTP"})," \u670d\u52a1\u4e3a\u793a\u4f8b\u4ecb\u7ecd ",(0,o.jsx)(s.code,{children:"Session"})," \u7684\u4f7f\u7528\u3002"]}),"\n",(0,o.jsx)(s.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(s.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,o.jsx)(s.a,{href:"https://godoc.org/github.com/gogf/gf/os/gsession",children:"https://godoc.org/github.com/gogf/gf/os/gsession"})]}),"\n",(0,o.jsxs)(s.p,{children:["\u4efb\u4f55\u65f6\u5019\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"ghttp.Request"})," \u83b7\u53d6 ",(0,o.jsx)(s.code,{children:"Session"})," \u5bf9\u8c61\uff0c\u56e0\u4e3a ",(0,o.jsx)(s.code,{children:"Cookie"})," \u548c ",(0,o.jsx)(s.code,{children:"Session"})," \u90fd\u662f\u548c\u8bf7\u6c42\u4f1a\u8bdd\u76f8\u5173\uff0c\u56e0\u6b64\u90fd\u5c5e\u4e8e ",(0,o.jsx)(s.code,{children:"Request"})," \u7684\u6210\u5458\u5bf9\u8c61\uff0c\u5e76\u5bf9\u5916\u516c\u5f00\u3002 ",(0,o.jsx)(s.code,{children:"GF"})," \u6846\u67b6\u7684 ",(0,o.jsx)(s.code,{children:"Session"})," \u9ed8\u8ba4\u8fc7\u671f\u65f6\u95f4\u662f ",(0,o.jsx)(s.code,{children:"24\u5c0f\u65f6"}),"\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"SessionId"})," \u9ed8\u8ba4\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"Cookie"})," \u6765\u4f20\u9012\uff0c\u5e76\u4e14\u4e5f\u652f\u6301\u5ba2\u6237\u7aef\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"Header"})," \u4f20\u9012 ",(0,o.jsx)(s.code,{children:"SessionId"}),"\uff0c ",(0,o.jsx)(s.code,{children:"SessionId"})," \u7684\u8bc6\u522b\u540d\u79f0\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"ghttp.Server"})," \u7684 ",(0,o.jsx)(s.code,{children:"SetSessionIdName"})," \u8fdb\u884c\u4fee\u6539\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"Session"})," \u7684\u64cd\u4f5c\u662f\u652f\u6301 ",(0,o.jsx)(s.code,{children:"\u5e76\u53d1\u5b89\u5168"})," \u7684\uff0c\u8fd9\u4e5f\u662f\u6846\u67b6\u5728\u5bf9 ",(0,o.jsx)(s.code,{children:"Session"})," \u7684\u8bbe\u8ba1\u4e0a\u4e0d\u91c7\u7528\u76f4\u63a5\u4ee5 ",(0,o.jsx)(s.code,{children:"map"})," \u7684\u5f62\u5f0f\u64cd\u4f5c\u6570\u636e\u7684\u539f\u56e0\u3002\u5728 ",(0,o.jsx)(s.code,{children:"HTTP"})," \u8bf7\u6c42\u6d41\u7a0b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"ghttp.Request"})," \u5bf9\u8c61\u6765\u83b7\u53d6 ",(0,o.jsx)(s.code,{children:"Session"})," \u5bf9\u8c61\uff0c\u5e76\u6267\u884c\u76f8\u5e94\u7684\u6570\u636e\u64cd\u4f5c\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"ghttp.Server"})," \u4e2d\u7684 ",(0,o.jsx)(s.code,{children:"SessionId"})," \u4f7f\u7528\u7684\u662f\u5ba2\u6237\u7aef\u7684 ",(0,o.jsx)(s.code,{children:"RemoteAddr + Header"})," \u8bf7\u6c42\u4fe1\u606f\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"guid"})," \u6a21\u5757\u6765\u751f\u6210\u7684\uff0c\u4fdd\u8bc1\u968f\u673a\u53ca\u552f\u4e00\u6027\uff1a ",(0,o.jsx)(s.a,{href:"https://github.com/gogf/gf/blob/master/net/ghttp/ghttp_request.go",children:"https://github.com/gogf/gf/blob/master/net/ghttp/ghttp_request.go"})]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-go",children:'// Custom session id creating function.\nerr := request.Session.SetIdFunc(func(ttl time.Duration) string {\n    var (\n        address = request.RemoteAddr\n        header  = fmt.Sprintf("%v", request.Header)\n    )\n    intlog.Print(address, header)\n    return guid.S([]byte(address), []byte(header))\n})\n\n'})}),"\n",(0,o.jsxs)(s.h2,{id:"gsession-\u6a21\u5757",children:[(0,o.jsx)(s.code,{children:"gsession"})," \u6a21\u5757"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"Session"})," \u7684\u7ba1\u7406\u529f\u80fd\u7531\u72ec\u7acb\u7684 ",(0,o.jsx)(s.code,{children:"gsession"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u5e76\u5df2\u5b8c\u7f8e\u6574\u5408\u5230\u4e86 ",(0,o.jsx)(s.code,{children:"ghttp.Server"})," \u4e2d\u3002\u7531\u4e8e\u8be5\u6a21\u5757\u662f\u89e3\u8026\u72ec\u7acb\u7684\uff0c\u56e0\u6b64\u53ef\u4ee5\u5e94\u7528\u5230\u66f4\u591a\u4e0d\u540c\u7684\u573a\u666f\u4e2d\uff0c\u4f8b\u5982\uff1a ",(0,o.jsx)(s.code,{children:"TCP"})," \u901a\u4fe1\u3001 ",(0,o.jsx)(s.code,{children:"gRPC"})," \u63a5\u53e3\u670d\u52a1\u7b49\u7b49\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:["\u5728 ",(0,o.jsx)(s.code,{children:"gsession"})," \u6a21\u5757\u4e2d\u6709\u6bd4\u8f83\u91cd\u8981\u7684\u4e09\u4e2a\u5bf9\u8c61/\u63a5\u53e3\uff1a"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"gsession.Manager"}),"\uff1a\u7ba1\u7406 ",(0,o.jsx)(s.code,{children:"Session"})," \u5bf9\u8c61\u3001 ",(0,o.jsx)(s.code,{children:"Storage"})," \u6301\u4e45\u5316\u5b58\u50a8\u5bf9\u8c61\u3001\u4ee5\u53ca\u8fc7\u671f\u65f6\u95f4\u63a7\u5236\u3002"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"gsession.Session"}),"\uff1a\u5355\u4e2a ",(0,o.jsx)(s.code,{children:"Session"})," \u4f1a\u8bdd\u7ba1\u7406\u5bf9\u8c61\uff0c\u7528\u4e8e ",(0,o.jsx)(s.code,{children:"Session"})," \u53c2\u6570\u7684\u589e\u5220\u67e5\u6539\u7b49\u6570\u636e\u7ba1\u7406\u64cd\u4f5c\u3002"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"gsession.Storage"}),"\uff1a\u8fd9\u662f\u4e00\u4e2a\u63a5\u53e3\u5b9a\u4e49\uff0c\u7528\u4e8e ",(0,o.jsx)(s.code,{children:"Session"})," \u5bf9\u8c61\u7684\u6301\u4e45\u5316\u5b58\u50a8\u3001\u6570\u636e\u5199\u5165/\u8bfb\u53d6\u3001\u5b58\u6d3b\u66f4\u65b0\u7b49\u64cd\u4f5c\uff0c\u5f00\u53d1\u8005\u53ef\u57fa\u4e8e\u8be5\u63a5\u53e3\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u6301\u4e45\u5316\u5b58\u50a8\u7279\u6027\u3002 \u8be5\u63a5\u53e3\u5b9a\u4e49\u8be6\u89c1\uff1a ",(0,o.jsx)(s.a,{href:"https://github.com/gogf/gf/blob/master/os/gsession/gsession_storage.go",children:"https://github.com/gogf/gf/blob/master/os/gsession/gsession_storage.go"})]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"\u5b58\u50a8\u5b9e\u73b0\u65b9\u5f0f",children:"\u5b58\u50a8\u5b9e\u73b0\u65b9\u5f0f"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"gsession"})," \u5b9e\u73b0\u5e76\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u5e38\u89c1\u7684\u4e09\u79cd ",(0,o.jsx)(s.code,{children:"Session"})," \u5b58\u50a8\u5b9e\u73b0\u65b9\u5f0f\uff1a"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:"\u57fa\u4e8e\u6587\u4ef6\u5b58\u50a8\uff08\u9ed8\u8ba4\uff09\uff1a\u5355\u8282\u70b9\u90e8\u7f72\u65b9\u5f0f\u4e0b\u6bd4\u8f83\u9ad8\u6548\u7684\u6301\u4e45\u5316\u5b58\u50a8\u65b9\u5f0f\uff1b"}),"\n",(0,o.jsx)(s.li,{children:"\u57fa\u4e8e\u7eaf\u5185\u5b58\u5b58\u50a8\uff1a\u6027\u80fd\u6700\u9ad8\u6548\uff0c\u4f46\u662f\u65e0\u6cd5\u6301\u4e45\u5316\u4fdd\u5b58\uff0c\u91cd\u542f\u5373\u4e22\u5931\uff1b"}),"\n",(0,o.jsxs)(s.li,{children:["\u57fa\u4e8e ",(0,o.jsx)(s.code,{children:"Redis"})," \u5b58\u50a8\uff1a\u8fdc\u7a0b ",(0,o.jsx)(s.code,{children:"Redis"})," \u8282\u70b9\u5b58\u50a8 ",(0,o.jsx)(s.code,{children:"Session"})," \u6570\u636e\uff0c\u652f\u6301\u5e94\u7528\u591a\u8282\u70b9\u90e8\u7f72\uff1b"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"\u4e09\u79cd\u65b9\u5f0f\u5404\u6709\u4f18\u52a3\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u67e5\u770b\u540e\u7eed\u7ae0\u8282\u3002"})]})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>r});var o=n(296540);const i={},d=o.createContext(i);function c(e){const s=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(d.Provider,{value:s},e.children)}}}]);