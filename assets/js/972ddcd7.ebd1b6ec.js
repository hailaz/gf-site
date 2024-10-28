"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[28697],{409633:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=s(474848),i=s(28453);const o={title:"Session-Storage\u63a5\u53e3\u5f00\u53d1",sidebar_position:4},r=void 0,a={id:"WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Storage\u63a5\u53e3\u5f00\u53d1",title:"Session-Storage\u63a5\u53e3\u5f00\u53d1",description:"\u5927\u90e8\u5206\u573a\u666f\u4e0b\uff0c\u901a\u8fc7 gsession \u7ec4\u4ef6\u5185\u7f6e\u63d0\u4f9b\u7684\u5e38\u89c1 Storage \u5b9e\u73b0\u5df2\u7ecf\u80fd\u591f\u6ee1\u8db3\u9700\u6c42\u3002\u5982\u679c\u6709\u7279\u6b8a\u7684\u573a\u666f\u9700\u8981\u5236\u5b9a\u4e0d\u6613\u5f00\u53d1 Storage \u5f53\u7136\u4e5f\u662f\u652f\u6301\u7684\uff0c\u56e0\u4e3a gsession \u7684\u529f\u80fd\u90fd\u91c7\u7528\u4e86\u63a5\u53e3\u5316\u8bbe\u8ba1\u3002",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/7-Session/4-Session-Storage\u63a5\u53e3\u5f00\u53d1.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/7-Session",slug:"/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Storage\u63a5\u53e3\u5f00\u53d1",permalink:"/gf-site/docs/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Storage\u63a5\u53e3\u5f00\u53d1",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/7-WEB\u670d\u52a1\u5f00\u53d1/7-Session/4-Session-Storage\u63a5\u53e3\u5f00\u53d1.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Session-Storage\u63a5\u53e3\u5f00\u53d1",sidebar_position:4},sidebar:"hiddenSidebar",previous:{title:"Session-Redis-HashTable",permalink:"/gf-site/docs/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Redis-HashTable"},next:{title:"\u5f02\u5e38\u5904\u7406",permalink:"/gf-site/docs/WEB\u670d\u52a1\u5f00\u53d1/\u5f02\u5e38\u5904\u7406"}},c={},d=[{value:"Storage\u5b9a\u4e49",id:"storage\u5b9a\u4e49",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["\u5927\u90e8\u5206\u573a\u666f\u4e0b\uff0c\u901a\u8fc7 ",(0,n.jsx)(t.code,{children:"gsession"})," \u7ec4\u4ef6\u5185\u7f6e\u63d0\u4f9b\u7684\u5e38\u89c1 ",(0,n.jsx)(t.code,{children:"Storage"})," \u5b9e\u73b0\u5df2\u7ecf\u80fd\u591f\u6ee1\u8db3\u9700\u6c42\u3002\u5982\u679c\u6709\u7279\u6b8a\u7684\u573a\u666f\u9700\u8981\u5236\u5b9a\u4e0d\u6613\u5f00\u53d1 ",(0,n.jsx)(t.code,{children:"Storage"})," \u5f53\u7136\u4e5f\u662f\u652f\u6301\u7684\uff0c\u56e0\u4e3a ",(0,n.jsx)(t.code,{children:"gsession"})," \u7684\u529f\u80fd\u90fd\u91c7\u7528\u4e86\u63a5\u53e3\u5316\u8bbe\u8ba1\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"storage\u5b9a\u4e49",children:"Storage\u5b9a\u4e49"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/gogf/gf/v2/blob/master/os/gsession/gsession_storage.go",children:"https://github.com/gogf/gf/v2/blob/master/os/gsession/gsession_storage.go"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"// Storage is the interface definition for session storage.\ntype Storage interface {\n\t// New creates a custom session id.\n\t// This function can be used for custom session creation.\n\tNew(ctx context.Context, ttl time.Duration) (id string, err error)\n\n\t// Get retrieves and returns session value with given key.\n\t// It returns nil if the key does not exist in the session.\n\tGet(ctx context.Context, id string, key string) (value interface{}, err error)\n\n\t// GetMap retrieves all key-value pairs as map from storage.\n\tGetMap(ctx context.Context, id string) (data map[string]interface{}, err error)\n\n\t// GetSize retrieves and returns the size of key-value pairs from storage.\n\tGetSize(ctx context.Context, id string) (size int, err error)\n\n\t// Set sets one key-value session pair to the storage.\n\t// The parameter `ttl` specifies the TTL for the session id.\n\tSet(ctx context.Context, id string, key string, value interface{}, ttl time.Duration) error\n\n\t// SetMap batch sets key-value session pairs as map to the storage.\n\t// The parameter `ttl` specifies the TTL for the session id.\n\tSetMap(ctx context.Context, id string, data map[string]interface{}, ttl time.Duration) error\n\n\t// Remove deletes key with its value from storage.\n\tRemove(ctx context.Context, id string, key string) error\n\n\t// RemoveAll deletes all key-value pairs from storage.\n\tRemoveAll(ctx context.Context, id string) error\n\n\t// GetSession returns the session data as `*gmap.StrAnyMap` for given session id from storage.\n\t//\n\t// The parameter `ttl` specifies the TTL for this session.\n\t// The parameter `data` is the current old session data stored in memory,\n\t// and for some storage it might be nil if memory storage is disabled.\n\t//\n\t// This function is called ever when session starts. It returns nil if the TTL is exceeded.\n\tGetSession(ctx context.Context, id string, ttl time.Duration, data *gmap.StrAnyMap) (*gmap.StrAnyMap, error)\n\n\t// SetSession updates the data for specified session id.\n\t// This function is called ever after session, which is changed dirty, is closed.\n\t// This copy all session data map from memory to storage.\n\tSetSession(ctx context.Context, id string, data *gmap.StrAnyMap, ttl time.Duration) error\n\n\t// UpdateTTL updates the TTL for specified session id.\n\t// This function is called ever after session, which is not dirty, is closed.\n\tUpdateTTL(ctx context.Context, id string, ttl time.Duration) error\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u6bcf\u4e00\u4e2a\u65b9\u6cd5\u7684\u8c03\u7528\u65f6\u673a\u90fd\u5728\u6ce8\u91ca\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86\uff0c\u5f00\u53d1\u8005\u5728\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684 ",(0,n.jsx)(t.code,{children:"Storage"})," \u65f6\uff0c\u53ef\u4ee5\u5145\u5206\u53c2\u8003\u5185\u7f6e\u7684\u51e0\u79cd ",(0,n.jsx)(t.code,{children:"Storage"})," \u5b9e\u73b0\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Storage"})," \u63a5\u53e3\u4e2d\uff0c\u5e76\u4e0d\u662f\u6240\u6709\u7684\u63a5\u53e3\u65b9\u6cd5\u90fd\u9700\u8981\u5b9e\u73b0\uff0c\u5f00\u53d1\u8005\u4ec5\u9700\u8981\u6839\u636e\u4e1a\u52a1\u9700\u8981\uff0c\u5b9e\u73b0\u7279\u5b9a\u8c03\u7528\u65f6\u673a\u7684\u4e00\u4e9b\u63a5\u53e3\u5373\u53ef\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:["\u4e3a\u4e86\u63d0\u9ad8 ",(0,n.jsx)(t.code,{children:"Session"})," \u7684\u6267\u884c\u6027\u80fd\uff0c\u63a5\u53e3\u6709 ",(0,n.jsx)(t.code,{children:"gmap.StrAnyMap"})," \u5bb9\u5668\u7c7b\u578b\u7684\u4f7f\u7528\uff0c\u5f00\u53d1\u65f6\u53ef\u4ee5\u53c2\u8003\u4e00\u4e0b\u7ae0\u8282\uff1a ",(0,n.jsx)(t.a,{href:"/docs/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%AD%97%E5%85%B8%E7%B1%BB%E5%9E%8B-gmap",children:"\u5b57\u5178\u7c7b\u578b-gmap"})]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(296540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);