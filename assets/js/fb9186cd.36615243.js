"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[21054],{8207:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=t(474848),r=t(28453);const i={title:"\u670d\u52a1\u7aef\u914d\u7f6e",sidebar_position:3},s=void 0,c={id:"\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e",title:"\u670d\u52a1\u7aef\u914d\u7f6e",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.3.x/3-\u5fae\u670d\u52a1\u5f00\u53d1/3-\u670d\u52a1\u7aef\u914d\u7f6e.md",sourceDirName:"3-\u5fae\u670d\u52a1\u5f00\u53d1",slug:"/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e",permalink:"/docs/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e",draft:!1,unlisted:!1,tags:[],version:"2.3.x",sidebarPosition:3,frontMatter:{title:"\u670d\u52a1\u7aef\u914d\u7f6e",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u811a\u624b\u67b6\u6a21\u5757",permalink:"/docs/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u811a\u624b\u67b6\u6a21\u5757"},next:{title:"\u62e6\u622a\u5668\u7ec4\u4ef6",permalink:"/docs/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u62e6\u622a\u5668\u7ec4\u4ef6"}},l={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u914d\u7f6e\u6a21\u677f",id:"\u914d\u7f6e\u6a21\u677f",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,n.jsx)(o.p,{children:"\u670d\u52a1\u7aef\u652f\u6301\u914d\u7f6e\u6587\u4ef6\uff0c\u6240\u6709\u7684\u914d\u7f6e\u5c06\u4f1a\u81ea\u52a8\u6620\u5c04\u5230\u914d\u7f6e\u5bf9\u8c61\u4e2d\u3002\u914d\u7f6e\u5bf9\u8c61\u5982\u4e0b\uff1a"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"// GrpcServerConfig is the configuration for server.\ntype GrpcServerConfig struct {\n\tAddress          string              // (optional) Address for server listening.\n\tName             string              // (optional) Name for current service.\n\tLogger           *glog.Logger        // (optional) Logger for server.\n\tLogPath          string              // (optional) LogPath specifies the directory for storing logging files.\n\tLogStdout        bool                // (optional) LogStdout specifies whether printing logging content to stdout.\n\tErrorStack       bool                // (optional) ErrorStack specifies whether logging stack information when error.\n\tErrorLogEnabled  bool                // (optional) ErrorLogEnabled enables error logging content to files.\n\tErrorLogPattern  string              // (optional) ErrorLogPattern specifies the error log file pattern like: error-{Ymd}.log\n\tAccessLogEnabled bool                // (optional) AccessLogEnabled enables access logging content to file.\n\tAccessLogPattern string              // (optional) AccessLogPattern specifies the error log file pattern like: access-{Ymd}.log\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["\u914d\u7f6e\u6587\u4ef6\u7684\u81ea\u52a8\u8bfb\u53d6\u903b\u8f91\u4e0e\u6846\u67b6\u4e00\u81f4\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,n.jsx)(o.a,{href:"output/goframe-v2.3-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86",children:"\u914d\u7f6e\u7ba1\u7406"})]}),"\n",(0,n.jsx)(o.h2,{id:"\u914d\u7f6e\u6a21\u677f",children:"\u914d\u7f6e\u6a21\u677f"}),"\n",(0,n.jsx)(o.p,{children:"\u4e00\u4e2a\u5b8c\u6574\u7684\u914d\u7f6e\u6a21\u677f\u793a\u4f8b\uff1a"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'grpc:\n  name:             "demo"  # \u670d\u52a1\u540d\u79f0\n  address:          ":8000" # \u81ea\u5b9a\u4e49\u670d\u52a1\u76d1\u542c\u5730\u5740\n  logPath:          "./log" # \u65e5\u5fd7\u5b58\u50a8\u76ee\u5f55\u8def\u5f84\n  logStdout:        true    # \u65e5\u5fd7\u662f\u5426\u8f93\u51fa\u5230\u7ec8\u7aef\n  errorLogEnabled:  true    # \u662f\u5426\u5f00\u542f\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\n  accessLogEnabled: true    # \u662f\u5426\u5f00\u542f\u8bbf\u95ee\u65e5\u5fd7\u8bb0\u5f55\n  errorStack:       true    # \u5f53\u4ea7\u751f\u9519\u8bef\u65f6\uff0c\u662f\u5426\u8bb0\u5f55\u9519\u8bef\u5806\u6808\n'})})]})}function g(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>c});var n=t(296540);const r={},i=n.createContext(r);function s(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);