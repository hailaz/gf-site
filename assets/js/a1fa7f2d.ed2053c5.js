"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[31019],{633936:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var r=e(474848),i=e(28453);const o={title:"I18N\u56fd\u9645\u5316",sidebar_position:13},s=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/I18N\u56fd\u9645\u5316/I18N\u56fd\u9645\u5316",title:"I18N\u56fd\u9645\u5316",description:"GoFrame \u6846\u67b6\u63d0\u4f9b\u4e86\u5e38\u7528\u7684 I18N \u56fd\u9645\u5316\u7ec4\u4ef6\uff0c\u7531 gi18n \u6a21\u5757\u5b9e\u73b0\u3002",source:"@site/versioned_docs/version-1.16.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/13-I18N\u56fd\u9645\u5316/13-I18N\u56fd\u9645\u5316.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/13-I18N\u56fd\u9645\u5316",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/I18N\u56fd\u9645\u5316/",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/I18N\u56fd\u9645\u5316/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/13-I18N\u56fd\u9645\u5316/13-I18N\u56fd\u9645\u5316.md",tags:[],version:"1.16.x",sidebarPosition:13,frontMatter:{title:"I18N\u56fd\u9645\u5316",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Redis-Context",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-Context"},next:{title:"I18N\u56fd\u9645\u5316-\u914d\u7f6e\u7ba1\u7406",permalink:"/gf-site/docs/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/I18N\u56fd\u9645\u5316/I18N\u56fd\u9645\u5316-\u914d\u7f6e\u7ba1\u7406"}},a={},g=[];function x(t){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u5e38\u7528\u7684 ",(0,r.jsx)(n.code,{children:"I18N"})," \u56fd\u9645\u5316\u7ec4\u4ef6\uff0c\u7531 ",(0,r.jsx)(n.code,{children:"gi18n"})," \u6a21\u5757\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'import "github.com/gogf/gf/i18n/gi18n"\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/i18n/gi18n",children:"https://pkg.go.dev/github.com/gogf/gf/i18n/gi18n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"func GetContent(ctx context.Context, key string) string\nfunc LanguageFromCtx(ctx context.Context) string\nfunc SetDelimiters(left, right string)\nfunc SetLanguage(language string)\nfunc SetPath(path string) error\nfunc T(ctx context.Context, content string) string\nfunc Tf(ctx context.Context, format string, values ...interface{}) string\nfunc Translate(ctx context.Context, content string) string\nfunc TranslateFormat(ctx context.Context, format string, values ...interface{}) string\nfunc WithLanguage(ctx context.Context, language string) context.Context\ntype Manager\n\tfunc Instance(name ...string) *Manager\n\tfunc New(options ...Options) *Manager\n\tfunc (m *Manager) GetContent(ctx context.Context, key string) string\n\tfunc (m *Manager) SetDelimiters(left, right string)\n\tfunc (m *Manager) SetLanguage(language string)\n\tfunc (m *Manager) SetPath(path string) error\n\tfunc (m *Manager) T(ctx context.Context, content string) string\n\tfunc (m *Manager) Tf(ctx context.Context, format string, values ...interface{}) string\n\tfunc (m *Manager) Translate(ctx context.Context, content string) string\n\tfunc (m *Manager) TranslateFormat(ctx context.Context, format string, values ...interface{}) string\ntype Options\n\tfunc DefaultOptions() Options\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u76f8\u5173\u7ae0\u8282\uff1a"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"output/goframe-v1.16-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/I18N%E5%9B%BD%E9%99%85%E5%8C%96/I18N%E5%9B%BD%E9%99%85%E5%8C%96-%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86",children:"I18N\u56fd\u9645\u5316-\u914d\u7f6e\u7ba1\u7406"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"output/goframe-v1.16-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/I18N%E5%9B%BD%E9%99%85%E5%8C%96/I18N%E5%9B%BD%E9%99%85%E5%8C%96-%E4%BD%BF%E7%94%A8%E4%BB%8B%E7%BB%8D",children:"I18N\u56fd\u9645\u5316-\u4f7f\u7528\u4ecb\u7ecd"})}),"\n"]})]})}function l(t={}){const{wrapper:n}={...(0,i.R)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(x,{...t})}):x(t)}},28453:(t,n,e)=>{e.d(n,{R:()=>s,x:()=>c});var r=e(296540);const i={},o=r.createContext(i);function s(t){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),r.createElement(o.Provider,{value:n},t.children)}}}]);