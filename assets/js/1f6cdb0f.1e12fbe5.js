"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[91531],{187767:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(474848),d=t(28453);const a={title:"ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027",sidebar_position:14},o=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027",title:"ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027",description:"Handler \u7279\u6027\u5141\u8bb8\u60a8\u8f7b\u677e\u5730\u590d\u7528\u5e38\u89c1\u7684\u903b\u8f91\u3002",source:"@site/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/14-ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027.md",sourceDirName:"2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027",permalink:"/gf-site/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/14-ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:14,frontMatter:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027",permalink:"/gf-site/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027"},next:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501",permalink:"/gf-site/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501"}},s={},c=[{value:"\u793a\u4f8b1\uff0c\u67e5\u8be2",id:"\u793a\u4f8b1\u67e5\u8be2",level:2},{value:"\u793a\u4f8b2\uff0c\u5206\u9875",id:"\u793a\u4f8b2\u5206\u9875",level:2}];function l(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,d.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Handler"})," \u7279\u6027\u5141\u8bb8\u60a8\u8f7b\u677e\u5730\u590d\u7528\u5e38\u89c1\u7684\u903b\u8f91\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b1\u67e5\u8be2",children:"\u793a\u4f8b1\uff0c\u67e5\u8be2"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'func AmountGreaterThan1000(m *gdb.Model) *gdb.Model {\n\treturn m.WhereGT("amount", 1000)\n}\n\nfunc PaidWithCreditCard(m *gdb.Model) *gdb.Model {\n\treturn m.Where("pay_mode_sign", "credit_card")\n}\n\nfunc PaidWithCod(m *gdb.Model) *gdb.Model {\n\treturn m.Where("pay_mode_sign", "cod")\n}\n\nfunc OrderStatus(statuses []string) func(m *gdb.Model) *gdb.Model {\n\treturn func(m *gdb.Model) *gdb.Model {\n\t\treturn m.Where("status", statuses)\n\t}\n}\n\nvar (\n\tm = g.Model("product_order")\n)\n\nm.Handler(AmountGreaterThan1000, PaidWithCreditCard).Scan(&orders)\n// SELECT * FROM `product_order` WHERE `amount`>1000 AND `pay_mode_sign`=\'credit_card\'\n// \u67e5\u627e\u6240\u6709\u91d1\u989d\u5927\u4e8e 1000 \u7684\u4fe1\u7528\u5361\u8ba2\u5355\n\nm.Handler(AmountGreaterThan1000, PaidWithCod).Scan(&orders)\n// SELECT * FROM `product_order` WHERE `amount`>1000 AND `pay_mode_sign`=\'cod\'\n// \u67e5\u627e\u6240\u6709\u91d1\u989d\u5927\u4e8e 1000 \u7684 COD \u8ba2\u5355\n\nm.Handler(AmountGreaterThan1000, OrderStatus([]string{"paid", "shipped"})).Scan(&orders)\n// SELECT * FROM `product_order` WHERE `amount`>1000 AND `status` IN(\'paid\',\'shipped\')\n// \u67e5\u627e\u6240\u6709\u91d1\u989d\u5927\u4e8e1000 \u7684\u5df2\u4ed8\u6b3e\u6216\u5df2\u53d1\u8d27\u8ba2\u5355\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b2\u5206\u9875",children:"\u793a\u4f8b2\uff0c\u5206\u9875"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func Paginate(r *ghttp.Request) func(m *gdb.Model) *gdb.Model {\n\treturn func(m *gdb.Model) *gdb.Model {\n\t\ttype Pagination struct {\n\t\t\tPage int\n\t\t\tSize int\n\t\t}\n\t\tvar pagination Pagination\n\t\t_ = r.Parse(&pagination)\n\t\tswitch {\n\t\tcase pagination.Size > 100:\n\t\t\tpagination.Size = 100\n\n\t\tcase pagination.Size <= 0:\n\t\t\tpagination.Size = 10\n\t\t}\n\t\treturn m.Page(pagination.Page, pagination.Size)\n\t}\n}\n\nm.Handler(Paginate(r)).Scan(&users)\nm.Handler(Paginate(r)).Scan(&articles)\n"})})]})}function u(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>i});var r=t(296540);const d={},a=r.createContext(d);function o(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:o(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);