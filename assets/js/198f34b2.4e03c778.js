"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[92454],{588968:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var c=o(474848),t=o(28453);const i={title:"\u534f\u7a0b\u7ba1\u7406-grpool",sidebar_position:16},r=void 0,d={id:"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u534f\u7a0b\u7ba1\u7406-grpool",title:"\u534f\u7a0b\u7ba1\u7406-grpool",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.5.x/3-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/16-\u534f\u7a0b\u7ba1\u7406-grpool.md",sourceDirName:"3-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173",slug:"/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u534f\u7a0b\u7ba1\u7406-grpool",permalink:"/docs/2.5.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u534f\u7a0b\u7ba1\u7406-grpool",draft:!1,unlisted:!1,tags:[],version:"2.5.x",sidebarPosition:16,frontMatter:{title:"\u534f\u7a0b\u7ba1\u7406-grpool",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u677f\u5f15\u64ce-gview",permalink:"/docs/2.5.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u6a21\u677f\u5f15\u64ce-gview"},next:{title:"\u6784\u5efa\u4fe1\u606f-gbuild",permalink:"/docs/2.5.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u6784\u5efa\u4fe1\u606f-gbuild"}},l={},s=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u75db\u70b9\u63cf\u8ff0",id:"\u75db\u70b9\u63cf\u8ff0",level:2},{value:"\u534f\u7a0b\u6267\u884c\u7684\u8d44\u6e90\u6d88\u8017\u5927",id:"\u534f\u7a0b\u6267\u884c\u7684\u8d44\u6e90\u6d88\u8017\u5927",level:3},{value:"\u5927\u91cf\u534f\u7a0b\u5f71\u54cd\u5168\u5c40\u534f\u7a0b\u8c03\u5ea6",id:"\u5927\u91cf\u534f\u7a0b\u5f71\u54cd\u5168\u5c40\u534f\u7a0b\u8c03\u5ea6",level:3},{value:"\u6982\u5ff5\u4ecb\u7ecd",id:"\u6982\u5ff5\u4ecb\u7ecd",level:2},{value:"<code>Pool</code>",id:"pool",level:3},{value:"<code>Job</code>",id:"job",level:3},{value:"<code>Worker</code>",id:"worker",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u4f7f\u7528\u9ed8\u8ba4\u7684 <code>goroutine</code> \u6c60\uff0c\u9650\u5236 <code>100</code> \u4e2a <code>goroutine</code> \u6267\u884c <code>1000</code> \u4e2a\u4efb\u52a1",id:"\u4f7f\u7528\u9ed8\u8ba4\u7684-goroutine-\u6c60\u9650\u5236-100-\u4e2a-goroutine-\u6267\u884c-1000-\u4e2a\u4efb\u52a1",level:3},{value:"\u5f02\u6b65\u4f20\u53c2\uff1a\u6765\u4e2a\u65b0\u624b\u5bb9\u6613\u51fa\u9519\u7684\u4f8b\u5b50",id:"\u5f02\u6b65\u4f20\u53c2\u6765\u4e2a\u65b0\u624b\u5bb9\u6613\u51fa\u9519\u7684\u4f8b\u5b50",level:3},{value:"\u81ea\u52a8\u6355\u83b7 <code>goroutine</code> \u9519\u8bef\uff1a <code>AddWithRecover</code>",id:"\u81ea\u52a8\u6355\u83b7-goroutine-\u9519\u8bef-addwithrecover",level:3},{value:"\u6d4b\u8bd5\u4e00\u4e0b <code>grpool</code> \u548c\u539f\u751f\u7684 <code>goroutine</code> \u4e4b\u95f4\u7684\u6027\u80fd",id:"\u6d4b\u8bd5\u4e00\u4e0b-grpool-\u548c\u539f\u751f\u7684-goroutine-\u4e4b\u95f4\u7684\u6027\u80fd",level:3}];function x(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"Go"})," \u8bed\u8a00\u4e2d\u7684 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u867d\u7136\u76f8\u5bf9\u4e8e\u7cfb\u7edf\u7ebf\u7a0b\u6765\u8bf4\u6bd4\u8f83\u8f7b\u91cf\u7ea7\uff08\u521d\u59cb\u6808\u5927\u5c0f\u4ec5 ",(0,c.jsx)(e.code,{children:"2KB"}),"\uff09\uff0c\uff08\u5e76\u4e14\u652f\u6301\u52a8\u6001\u6269\u5bb9\uff09\uff0c\u800c\u6b63\u5e38\u91c7\u7528 ",(0,c.jsx)(e.code,{children:"Java"}),"\u3001 ",(0,c.jsx)(e.code,{children:"C++"})," \u7b49\u8bed\u8a00\u542f\u7528\u7684\u7ebf\u7a0b\u4e00\u822c\u90fd\u662f\u5185\u6838\u6001\u7684\u5360\u7528\u7684\u5185\u5b58\u8d44\u6e90\u4e00\u822c\u5728 ",(0,c.jsx)(e.code,{children:"4m"})," \u5de6\u53f3\uff0c\u800c\u5047\u8bbe\u6211\u4eec\u7684\u670d\u52a1\u5668 ",(0,c.jsx)(e.code,{children:"CPU"})," \u5185\u5b58\u4e3a ",(0,c.jsx)(e.code,{children:"4G"}),"\uff0c\u90a3\u4e48\u5f88\u660e\u663e\u624d\u7528\u7684\u5185\u6838\u6001\u7ebf\u7a0b\u7684\u5e76\u53d1\u603b\u6570\u91cf\u4e5f\u5c31\u662f ",(0,c.jsx)(e.code,{children:"1024"})," \u4e2a\uff0c\u76f8\u53cd\u67e5\u770b\u4e00\u4e0b ",(0,c.jsx)(e.code,{children:"Go"})," \u8bed\u8a00\u7684\u534f\u7a0b\u5219\u53ef\u4ee5\u8fbe\u5230 ",(0,c.jsx)(e.code,{children:"4*1024*1024/2=200w"}),"\uff0c\u8fd9\u4e48\u4e00\u770b\u5c31\u660e\u767d\u4e86\u4e3a\u4ec0\u4e48Go\u8bed\u8a00\u5929\u751f\u652f\u6301\u9ad8\u5e76\u53d1\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u75db\u70b9\u63cf\u8ff0",children:"\u75db\u70b9\u63cf\u8ff0"}),"\n",(0,c.jsx)(e.h3,{id:"\u534f\u7a0b\u6267\u884c\u7684\u8d44\u6e90\u6d88\u8017\u5927",children:"\u534f\u7a0b\u6267\u884c\u7684\u8d44\u6e90\u6d88\u8017\u5927"}),"\n",(0,c.jsxs)(e.p,{children:["\u4f46\u662f\u5728\u9ad8\u5e76\u53d1\u91cf\u4e0b\u7684 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u9891\u7e41\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u4e8e\u6027\u80fd\u635f\u8017\u4ee5\u53ca ",(0,c.jsx)(e.code,{children:"GC"})," \u6765\u8bf4\u538b\u529b\u4e5f\u4e0d\u5c0f\u3002\u5145\u5206\u5c06 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u590d\u7528\uff0c\u51cf\u5c11 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u7684\u521b\u5efa/\u9500\u6bc1\u7684\u6027\u80fd\u635f\u8017\uff0c\u8fd9\u4fbf\u662f ",(0,c.jsx)(e.code,{children:"grpool"})," \u5bf9 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u8fdb\u884c\u6c60\u5316\u5c01\u88c5\u7684\u76ee\u7684\u3002\u4f8b\u5982\uff0c\u9488\u5bf9\u4e8e ",(0,c.jsx)(e.code,{children:"100W"})," \u4e2a\u6267\u884c\u4efb\u52a1\uff0c\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u7684\u8bdd\u9700\u8981\u4e0d\u505c\u521b\u5efa\u5e76\u9500\u6bc1 ",(0,c.jsx)(e.code,{children:"100W"})," \u4e2a ",(0,c.jsx)(e.code,{children:"goroutine"}),"\uff0c\u800c\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"grpool"})," \u4e5f\u8bb8\u5e95\u5c42\u53ea\u9700\u8981\u51e0\u4e07\u4e2a ",(0,c.jsx)(e.code,{children:"goroutine"})," \u4fbf\u80fd\u5145\u5206\u590d\u7528\u5730\u6267\u884c\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u7ecf\u6d4b\u8bd5\uff0c ",(0,c.jsx)(e.code,{children:"goroutine"})," \u6c60\u5bf9\u4e8e\u4e1a\u52a1\u903b\u8f91\u7684\u6267\u884c\u6548\u7387\uff08\u964d\u4f4e\u6267\u884c\u65f6\u95f4/CPU\u4f7f\u7528\u7387\uff09\u63d0\u5347\u4e0d\u5927\uff0c\u751a\u81f3\u6ca1\u6709\u539f\u751f\u7684 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u6267\u884c\u5feb\u901f\uff08\u6c60\u5316 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u6267\u884c\u8c03\u5ea6\u5e76\u6ca1\u6709\u5e95\u5c42 ",(0,c.jsx)(e.code,{children:"Go"})," \u8c03\u5ea6\u5668\u9ad8\u6548\uff0c\u56e0\u4e3a\u6c60\u5316 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u7684\u6267\u884c\u8c03\u5ea6\u4e5f\u662f\u57fa\u4e8e\u5e95\u5c42 ",(0,c.jsx)(e.code,{children:"Go"})," \u8c03\u5ea6\u5668\uff09\uff0c\u4f46\u662f\u7531\u4e8e\u91c7\u7528\u4e86\u590d\u7528\u7684\u8bbe\u8ba1\uff0c\u6c60\u5316\u540e\u5bf9\u5185\u5b58\u7684\u4f7f\u7528\u7387\u5f97\u5230\u6781\u5927\u7684\u964d\u4f4e\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"\u5927\u91cf\u534f\u7a0b\u5f71\u54cd\u5168\u5c40\u534f\u7a0b\u8c03\u5ea6",children:"\u5927\u91cf\u534f\u7a0b\u5f71\u54cd\u5168\u5c40\u534f\u7a0b\u8c03\u5ea6"}),"\n",(0,c.jsxs)(e.p,{children:["\u67d0\u4e9b\u4e1a\u52a1\u6a21\u5757\u9700\u8981\u52a8\u6001\u521b\u5efa\u534f\u7a0b\u6765\u6267\u884c\uff0c\u4f8b\u5982\u5f02\u6b65\u91c7\u96c6\u4efb\u52a1\u3001\u6307\u6807\u8ba1\u7b97\u4efb\u52a1\u7b49\u7b49\u3002\u8fd9\u4e9b\u4e1a\u52a1\u903b\u8f91\u4e0d\u662f\u670d\u52a1\u7684\u6838\u5fc3\u903b\u8f91\uff0c\u5e76\u4e14\u4f1a\u4ea7\u751f\u534f\u7a0b\u3002\u5728\u6781\u7aef\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u5f15\u8d77\u534f\u7a0b\u5927\u66b4\u6da8\uff0c\u5f71\u54cd\u5e95\u5c42 ",(0,c.jsx)(e.code,{children:"Go"})," \u5f15\u64ce\u5168\u5c40\u7684\u5199\u6210\u8c03\u5ea6\uff0c\u9020\u6210\u670d\u52a1\u6574\u4f53\u6267\u884c\u5ef6\u8fdf\u8f83\u5927\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u62ff\u5f02\u6b65\u91c7\u96c6\u4efb\u52a1\u6765\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6bcf\u9694 ",(0,c.jsx)(e.code,{children:"5"})," \u79d2\u6267\u884c\u4e00\u6b21\uff0c\u6bcf\u6b21\u521b\u5efa ",(0,c.jsx)(e.code,{children:"100"})," \u4e2a\u534f\u7a0b\u6765\u91c7\u96c6\u4e0d\u540c\u7684\u76ee\u6807\u7aef\u3002\u5f53\u91c7\u96c6\u51fa\u73b0\u7f51\u7edc\u5ef6\u8fdf\u65f6\uff0c\u4e0a\u4e00\u6b65\u7684\u4efb\u52a1\u5e76\u672a\u6267\u884c\u5b8c\uff0c\u4e0b\u4e00\u6b21\u7684\u4efb\u52a1\u53c8\u65b0\u521b\u5efa\u534f\u7a0b\u5f00\u59cb\u6267\u884c\u3002\u5f53\u79ef\u7d2f\u7684\u4efb\u52a1\u8d8a\u6765\u8d8a\u591a\uff0c\u4f1a\u9020\u6210\u534f\u7a0b\u7684\u66b4\u6da8\uff0c\u5f71\u54cd\u5168\u5c40\u7684\u670d\u52a1\u6267\u884c\u3002\u9488\u5bf9\u8fd9\u4e00\u7c7b\u573a\u666f\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6c60\u5316\u7684\u6280\u672f\u6765\u5c06\u4efb\u52a1\u8fdb\u884c\u5b9a\u91cf\u6267\u884c\uff0c\u5f53\u6c60\u4e2d\u7684\u4efb\u52a1\u5806\u79ef\u5230\u8fbe\u4e00\u5b9a\u91cf\u65f6\uff0c\u540e\u7eed\u7684\u4efb\u52a1\u5e94\u5f53\u963b\u585e\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u8bbe\u5b9a\u6c60\u4e2d\u4efb\u52a1\u7684\u6700\u5927\u6570\u91cf\u4e3a ",(0,c.jsx)(e.code,{children:"10000"})," \u4e2a\uff0c\u540e\u7eed\u4e0d\u505c\u5c06\u4efb\u52a1\u4e22\u5230\u6c60\u4e2d\u6267\u884c\uff0c\u5f53\u8d85\u8fc7\u6c60\u7684\u6700\u5927\u6570\u91cf\u65f6\uff0c\u4efb\u52a1\u6267\u884c\u5c06\u4f1a\u963b\u585e\uff0c\u4f46\u5e76\u4e0d\u4f1a\u5f71\u54cd\u5168\u5c40\u7684\u670d\u52a1\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u6982\u5ff5\u4ecb\u7ecd",children:"\u6982\u5ff5\u4ecb\u7ecd"}),"\n",(0,c.jsx)(e.h3,{id:"pool",children:(0,c.jsx)(e.code,{children:"Pool"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"goroutine"})," \u6c60\uff0c\u7528\u4e8e\u7ba1\u7406\u82e5\u5e72\u53ef\u590d\u7528\u7684 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u534f\u7a0b\u8d44\u6e90\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"job",children:(0,c.jsx)(e.code,{children:"Job"})}),"\n",(0,c.jsxs)(e.p,{children:["\u6dfb\u52a0\u5230\u6c60\u5bf9\u8c61\u7684\u4efb\u52a1\u961f\u5217\u4e2d\u7b49\u5f85\u6267\u884c\u7684\u4efb\u52a1\uff0c\u662f\u4e00\u4e2a ",(0,c.jsx)(e.code,{children:"Func"})," \u7684\u65b9\u6cd5\uff0c\u4e00\u4e2a ",(0,c.jsx)(e.code,{children:"Job"})," \u540c\u65f6\u53ea\u80fd\u88ab\u4e00\u4e2a ",(0,c.jsx)(e.code,{children:"Worker"})," \u83b7\u53d6\u5e76\u6267\u884c\u3002 ",(0,c.jsx)(e.code,{children:"Func"})," \u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"type Func func(ctx context.Context)\n"})}),"\n",(0,c.jsx)(e.h3,{id:"worker",children:(0,c.jsx)(e.code,{children:"Worker"})}),"\n",(0,c.jsxs)(e.p,{children:["\u6c60\u5bf9\u8c61\u4e2d\u53c2\u4e0e\u4efb\u52a1\u6267\u884c\u7684 ",(0,c.jsx)(e.code,{children:"goroutine"}),"\uff0c\u4e00\u4e2a ",(0,c.jsx)(e.code,{children:"Worker"})," \u53ef\u4ee5\u6267\u884c\u82e5\u5e72\u4e2a ",(0,c.jsx)(e.code,{children:"Job"}),"\uff0c\u76f4\u5230\u961f\u5217\u4e2d\u518d\u65e0\u7b49\u5f85\u7684 ",(0,c.jsx)(e.code,{children:"Job"}),"\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/grpool"\n\n'})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,c.jsx)(e.p,{children:"\u7ba1\u7406\u5927\u91cf\u5f02\u6b65\u4efb\u52a1\u7684\u573a\u666f\u3001\u9700\u8981\u5f02\u6b65\u534f\u7a0b\u590d\u7528\u7684\u573a\u666f\u3001\u9700\u8981\u964d\u4f4e\u5185\u5b58\u4f7f\u7528\u7387\u7684\u573a\u666f\u3002"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"func Add(ctx context.Context, f Func) error\nfunc AddWithRecover(ctx context.Context, userFunc Func, recoverFunc RecoverFunc) error\nfunc Jobs() int\nfunc Size() int\nfunc New(limit ...int) *Pool\n    func (p *Pool) Add(ctx context.Context, f Func) error\n    func (p *Pool) AddWithRecover(ctx context.Context, userFunc Func, recoverFunc RecoverFunc) error\n    func (p *Pool) Cap() int\n    func (p *Pool) Close()\n    func (p *Pool) IsClosed() bool\n    func (p *Pool) Jobs() int\n    func (p *Pool) Size() int\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,c.jsx)(e.code,{children:"grpool.New"})," \u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a ",(0,c.jsx)(e.code,{children:"goroutine\u6c60"})," \u5bf9\u8c61\uff0c\u53c2\u6570 ",(0,c.jsx)(e.code,{children:"limit"})," \u4e3a\u975e\u5fc5\u9700\u53c2\u6570\uff0c\u7528\u4e8e\u9650\u5b9a\u6c60\u4e2d\u7684\u5de5\u4f5c ",(0,c.jsx)(e.code,{children:"goroutine"})," \u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a\u4e0d\u9650\u5236\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4efb\u52a1\u53ef\u4ee5\u4e0d\u505c\u5730\u5f80\u6c60\u4e2d\u6dfb\u52a0\uff0c\u6ca1\u6709\u9650\u5236\uff0c\u4f46\u662f\u5de5\u4f5c\u7684 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u662f\u53ef\u4ee5\u505a\u9650\u5236\u7684\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(e.code,{children:"Size()"})," \u65b9\u6cd5\u67e5\u8be2\u5f53\u524d\u7684\u5de5\u4f5c ",(0,c.jsx)(e.code,{children:"goroutine"})," \u6570\u91cf\uff0c\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"Jobs()"})," \u65b9\u6cd5\u67e5\u8be2\u5f53\u524d\u6c60\u4e2d\u5f85\u5904\u7406\u7684\u4efb\u52a1\u6570\u91cf\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u540c\u65f6\uff0c\u4e3a\u4fbf\u4e8e\u4f7f\u7528\uff0c ",(0,c.jsx)(e.code,{children:"grpool"})," \u5305\u63d0\u4f9b\u4e86\u9ed8\u8ba4\u7684 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u6c60\uff0c\u9ed8\u8ba4\u7684\u6c60\u5bf9\u8c61\u4e0d\u9650\u5236 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u6570\u91cf\uff0c\u76f4\u63a5\u901a\u8fc7 ",(0,c.jsx)(e.code,{children:"grpool.Add"})," \u5373\u53ef\u5f80\u9ed8\u8ba4\u7684\u6c60\u4e2d\u6dfb\u52a0\u4efb\u52a1\uff0c\u4efb\u52a1\u53c2\u6570\u5fc5\u987b\u662f\u4e00\u4e2a ",(0,c.jsx)(e.code,{children:"func()"})," \u7c7b\u578b\u7684\u51fd\u6570/\u65b9\u6cd5\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u8fd9\u4e2a\u6a21\u5757\u5927\u5bb6\u95ee\u5f97\u6700\u591a\u7684\u662f\u5916\u90e8\u5982\u4f55\u7ed9 ",(0,c.jsx)(e.code,{children:"grpool"})," \u91cc\u9762\u7684\u4efb\u52a1\u4f20\u9012\u53c2\u6570\uff0c\u5177\u4f53\u8bf7\u770b\u793a\u4f8b2\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,c.jsxs)(e.h3,{id:"\u4f7f\u7528\u9ed8\u8ba4\u7684-goroutine-\u6c60\u9650\u5236-100-\u4e2a-goroutine-\u6267\u884c-1000-\u4e2a\u4efb\u52a1",children:["\u4f7f\u7528\u9ed8\u8ba4\u7684 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u6c60\uff0c\u9650\u5236 ",(0,c.jsx)(e.code,{children:"100"})," \u4e2a ",(0,c.jsx)(e.code,{children:"goroutine"})," \u6267\u884c ",(0,c.jsx)(e.code,{children:"1000"})," \u4e2a\u4efb\u52a1"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:'package main\n\nimport (\n \t"context"\n \t"fmt"\n \t"github.com/gogf/gf/v2/os/gctx"\n \t"github.com/gogf/gf/v2/os/grpool"\n \t"github.com/gogf/gf/v2/os/gtimer"\n \t"time"\n)\n\nvar (\n    ctx = gctx.New()\n)\n\nfunc job(ctx context.Context) {\n \ttime.Sleep(1*time.Second)\n}\n\nfunc main() {\n \tpool := grpool.New(100)\n \tfor i := 0; i < 1000; i++ {\n     \tpool.Add(ctx,job)\n \t}\n \tfmt.Println("worker:", pool.Size())\n \tfmt.Println(" jobs:", pool.Jobs())\n \tgtimer.SetInterval(ctx,time.Second, func(ctx context.Context) {\n     \tfmt.Println("worker:", pool.Size())\n     \tfmt.Println(" jobs:", pool.Jobs())\n     \tfmt.Println()\n \t})\n\n \tselect {}\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u8fd9\u6bb5\u7a0b\u5e8f\u4e2d\u7684\u4efb\u52a1\u51fd\u6570\u7684\u529f\u80fd\u662f ",(0,c.jsx)(e.code,{children:"sleep 1\u79d2\u949f"}),"\uff0c\u8fd9\u6837\u4fbf\u80fd\u5145\u5206\u5c55\u793a\u51fagoroutine\u6570\u91cf\u9650\u5236\u529f\u80fd\u3002\u5176\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,c.jsx)(e.code,{children:"gtime.SetInterval"})," \u5b9a\u65f6\u5668\u6bcf\u96941\u79d2\u949f\u6253\u5370\u51fa\u5f53\u524d\u9ed8\u8ba4\u6c60\u4e2d\u7684\u5de5\u4f5c ",(0,c.jsx)(e.code,{children:"goroutine"})," \u6570\u91cf\u4ee5\u53ca\u5f85\u5904\u7406\u7684\u4efb\u52a1\u6570\u91cf\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"\u5f02\u6b65\u4f20\u53c2\u6765\u4e2a\u65b0\u624b\u5bb9\u6613\u51fa\u9519\u7684\u4f8b\u5b50",children:"\u5f02\u6b65\u4f20\u53c2\uff1a\u6765\u4e2a\u65b0\u624b\u5bb9\u6613\u51fa\u9519\u7684\u4f8b\u5b50"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:'package main\n\nimport (\n \t"context"\n \t"fmt"\n \t"github.com/gogf/gf/v2/os/gctx"\n \t"github.com/gogf/gf/v2/os/grpool"\n \t"sync"\n)\n\nvar (\n    ctx = gctx.New()\n)\n\nfunc main() {\n \twg := sync.WaitGroup{}\n \tfor i := 0; i < 10; i++ {\n    \twg.Add(1)\n    \tgrpool.Add(ctx,func(ctx context.Context) {\n       \t\tfmt.Println(i)\n       \t\twg.Done()\n    \t})\n \t}\n \twg.Wait()\n}\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u6211\u4eec\u8fd9\u6bb5\u4ee3\u7801\u7684\u76ee\u7684\u662f\u8981\u987a\u5e8f\u5730\u6253\u5370\u51fa0-9\uff0c\u7136\u800c\u8fd0\u884c\u540e\u5374\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"10\n10\n10\n10\n10\n10\n10\n10\n10\n10\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4e3a\u4ec0\u4e48\u5462\uff1f\u8fd9\u91cc\u7684\u6267\u884c\u7ed3\u679c\u65e0\u8bba\u662f\u91c7\u7528 ",(0,c.jsx)(e.code,{children:"go"})," \u5173\u952e\u5b57\u6765\u6267\u884c\u8fd8\u662f ",(0,c.jsx)(e.code,{children:"grpool"})," \u6765\u6267\u884c\u90fd\u662f\u5982\u6b64\u3002\u539f\u56e0\u662f\uff0c\u5bf9\u4e8e\u5f02\u6b65\u7ebf\u7a0b/\u534f\u7a0b\u6765\u8bb2\uff0c\u51fd\u6570\u8fdb\u884c\u5f02\u6b65\u6267\u884c\u6ce8\u518c\u65f6\uff0c\u8be5\u51fd\u6570\u5e76\u672a\u771f\u6b63\u5f00\u59cb\u6267\u884c(\u6ce8\u518c\u65f6\u53ea\u5728 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u7684\u6808\u4e2d\u4fdd\u5b58\u4e86\u53d8\u91cf ",(0,c.jsx)(e.code,{children:"i"})," \u7684\u5185\u5b58\u5730\u5740)\uff0c\u800c\u4e00\u65e6\u5f00\u59cb\u6267\u884c\u65f6\u51fd\u6570\u624d\u4f1a\u53bb\u8bfb\u53d6\u53d8\u91cf ",(0,c.jsx)(e.code,{children:"i"})," \u7684\u503c\uff0c\u800c\u8fd9\u4e2a\u65f6\u5019\u53d8\u91cf ",(0,c.jsx)(e.code,{children:"i"})," \u7684\u503c\u5df2\u7ecf\u81ea\u589e\u5230\u4e86 ",(0,c.jsx)(e.code,{children:"10"}),"\u3002 \u6e05\u695a\u539f\u56e0\u4e4b\u540e\uff0c\u6539\u8fdb\u65b9\u6848\u4e5f\u5f88\u7b80\u5355\u4e86\uff0c\u5c31\u662f\u5728\u6ce8\u518c\u5f02\u6b65\u6267\u884c\u51fd\u6570\u7684\u65f6\u5019\uff0c\u628a\u5f53\u65f6\u53d8\u91cf ",(0,c.jsx)(e.code,{children:"i"})," \u7684\u503c\u4e5f\u4e00\u5e76\u4f20\u9012\u83b7\u53d6\uff1b\u6216\u8005\u628a\u5f53\u524d\u53d8\u91cfi\u7684\u503c\u8d4b\u503c\u7ed9\u4e00\u4e2a\u4e0d\u4f1a\u6539\u53d8\u7684\u4e34\u65f6\u53d8\u91cf\uff0c\u5728\u51fd\u6570\u4e2d\u4f7f\u7528\u8be5\u4e34\u65f6\u53d8\u91cf\u800c\u4e0d\u662f\u76f4\u63a5\u4f7f\u7528\u53d8\u91cf ",(0,c.jsx)(e.code,{children:"i"}),"\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u6539\u8fdb\u540e\u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"1)\u3001\u4f7f\u7528go\u5173\u952e\u5b57"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\nfunc main() {\n    wg := sync.WaitGroup{}\n    for i := 0; i < 10; i++ {\n        wg.Add(1)\n        go func(v int){\n            fmt.Println(v)\n            wg.Done()\n        }(i)\n    }\n    wg.Wait()\n}\n\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"0\n9\n3\n4\n5\n6\n7\n8\n1\n2\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u6ce8\u610f\uff0c\u5f02\u6b65\u6267\u884c\u65f6\u5e76\u4e0d\u4f1a\u4fdd\u8bc1\u6309\u7167\u51fd\u6570\u6ce8\u518c\u65f6\u7684\u987a\u5e8f\u6267\u884c\uff0c\u4ee5\u4e0b\u540c\u7406\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"2)\u3001\u4f7f\u7528\u4e34\u65f6\u53d8\u91cf"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:'package main\n\nimport (\n \t"context"\n \t"fmt"\n \t"github.com/gogf/gf/v2/os/gctx"\n \t"github.com/gogf/gf/v2/os/grpool"\n \t"sync"\n)\n\nvar (\n   ctx = gctx.New()\n)\n\nfunc main() {\n \twg := sync.WaitGroup{}\n \tfor i := 0; i < 10; i++ {\n    \twg.Add(1)\n    \tv := i\n    \tgrpool.Add(ctx, func(ctx context.Context) {\n       \t\tfmt.Println(v)\n       \t\twg.Done()\n    \t})\n \t}\n \twg.Wait()\n}\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"9\n0\n1\n2\n3\n4\n5\n6\n7\n8\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u8fd9\u91cc\u53ef\u4ee5\u770b\u5230\uff0c\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"grpool"})," \u8fdb\u884c\u4efb\u52a1\u6ce8\u518c\u65f6\uff0c\u6ce8\u518c\u65b9\u6cd5\u4e3a ",(0,c.jsx)(e.code,{children:"func(ctx context.Context)"}),"\uff0c\u56e0\u6b64\u65e0\u6cd5\u5728\u4efb\u52a1\u6ce8\u518c\u65f6\u628a\u53d8\u91cf ",(0,c.jsx)(e.code,{children:"i"})," \u7684\u503c\u6ce8\u518c\u8fdb\u53bb\uff08\u8bf7\u5c3d\u91cf\u4e0d\u8981\u901a\u8fc7 ",(0,c.jsx)(e.code,{children:"ctx"})," \u4f20\u9012\u4e1a\u52a1\u53c2\u6570\uff09\uff0c\u56e0\u6b64\u53ea\u80fd\u91c7\u7528\u4e34\u65f6\u53d8\u91cf\u7684\u5f62\u5f0f\u6765\u4f20\u9012\u5f53\u524d\u53d8\u91cf ",(0,c.jsx)(e.code,{children:"i"})," \u7684\u503c\u3002"]}),"\n",(0,c.jsxs)(e.h3,{id:"\u81ea\u52a8\u6355\u83b7-goroutine-\u9519\u8bef-addwithrecover",children:["\u81ea\u52a8\u6355\u83b7 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u9519\u8bef\uff1a ",(0,c.jsx)(e.code,{children:"AddWithRecover"})]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"AddWithRecover"})," \u5c06\u65b0\u4f5c\u4e1a\u63a8\u9001\u5230\u5177\u6709\u6307\u5b9a\u6062\u590d\u529f\u80fd\u7684\u6c60\u4e2d\u3002\u5f53 ",(0,c.jsx)(e.code,{children:"userFunc"})," \u6267\u884c\u8fc7\u7a0b\u4e2d\u51fa\u73b0 ",(0,c.jsx)(e.code,{children:"panic"})," \u65f6\uff0c\u4f1a\u8c03\u7528\u53ef\u9009\u7684 ",(0,c.jsx)(e.code,{children:"Recovery Func"}),"\u3002\u5982\u679c\u6ca1\u6709\u4f20\u5165 ",(0,c.jsx)(e.code,{children:"Recovery Func"})," \u6216\u8d4b\u7a7a\uff0c\u5219\u5ffd\u7565 ",(0,c.jsx)(e.code,{children:"userFunc"})," \u5f15\u53d1\u7684 ",(0,c.jsx)(e.code,{children:"panic"}),"\u3002\u8be5\u4f5c\u4e1a\u5c06\u5f02\u6b65\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/garray"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/grpool"\n\t"time"\n)\n\nvar (\n\tctx = gctx.New()\n)\nfunc main() {\n\tarray := garray.NewArray(true)\n\tgrpool.AddWithRecover(ctx, func(ctx context.Context) {\n\t\tarray.Append(1)\n\t\tarray.Append(2)\n\t\tpanic(1)\n\t}, func(err error) {\n\t\tarray.Append(1)\n\t})\n\tgrpool.AddWithRecover(ctx, func(ctx context.Context) {\n\t\tpanic(1)\n\t\tarray.Append(1)\n\t})\n\ttime.Sleep(500 * time.Millisecond)\n\tfmt.Print(array.Len())\n}\n'})}),"\n",(0,c.jsxs)(e.h3,{id:"\u6d4b\u8bd5\u4e00\u4e0b-grpool-\u548c\u539f\u751f\u7684-goroutine-\u4e4b\u95f4\u7684\u6027\u80fd",children:["\u6d4b\u8bd5\u4e00\u4e0b ",(0,c.jsx)(e.code,{children:"grpool"})," \u548c\u539f\u751f\u7684 ",(0,c.jsx)(e.code,{children:"goroutine"})," \u4e4b\u95f4\u7684\u6027\u80fd"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsxs)(e.strong,{children:["1)\u3001 ",(0,c.jsx)(e.code,{children:"grpool"})]})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:'package main\n\nimport (\n \t"context"\n \t"fmt"\n \t"github.com/gogf/gf/v2/os/gctx"\n \t"github.com/gogf/gf/v2/os/grpool"\n \t"github.com/gogf/gf/v2/os/gtime"\n \t"sync"\n \t"time"\n)\n\nvar (\n   ctx = gctx.New()\n)\n\nfunc main() {\n \tstart := gtime.TimestampMilli()\n \twg := sync.WaitGroup{}\n \tfor i := 0; i < 10000000; i++ {\n    \twg.Add(1)\n    \tgrpool.Add(ctx,func(ctx context.Context) {\n       \t\ttime.Sleep(time.Millisecond)\n       \t\twg.Done()\n    \t})\n \t}\n \twg.Wait()\n \tfmt.Println(grpool.Size())\n \tfmt.Println("time spent:", gtime.TimestampMilli() - start)\n}\n'})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsxs)(e.strong,{children:["2)\u3001 ",(0,c.jsx)(e.code,{children:"goroutine"})]})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:'package main\n\nimport (\n \t"fmt"\n \t"github.com/gogf/gf/v2/os/gtime"\n \t"sync"\n \t"time"\n)\n\nfunc main() {\n \tstart := gtime.TimestampMilli()\n \twg := sync.WaitGroup{}\n \tfor i := 0; i < 10000000; i++ {\n    \twg.Add(1)\n    \tgo func() {\n       \t\ttime.Sleep(time.Millisecond)\n       \t\twg.Done()\n    \t}()\n \t}\n \twg.Wait()\n \tfmt.Println("time spent:", gtime.TimestampMilli() - start)\n}\n'})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"3)\u3001\u8fd0\u884c\u7ed3\u679c\u6bd4\u8f83"})}),"\n",(0,c.jsxs)(e.p,{children:["\u6d4b\u8bd5\u7ed3\u679c\u4e3a\u4e24\u4e2a\u7a0b\u5e8f\u5404\u8fd0\u884c ",(0,c.jsx)(e.code,{children:"3"})," \u6b21\u53d6\u5e73\u5747\u503c\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-shell",children:"grpool:\n    goroutine count: 847313\n     memory   spent: ~2.1 G\n     time     spent: 37792 ms\n\ngoroutine:\n    goroutine count: 1000W\n    memory    spent: ~4.8 GB\n    time      spent: 27085 ms\n\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\u6c60\u5316\u8fc7\u540e\uff0c\u6267\u884c\u76f8\u540c\u6570\u91cf\u7684\u4efb\u52a1\uff0c ",(0,c.jsx)(e.code,{children:"goroutine"})," \u6570\u91cf\u51cf\u5c11\u5f88\u591a\uff0c\u76f8\u5bf9\u7684\u5185\u5b58\u4e5f\u964d\u4f4e\u4e86\u4e00\u500d\u4ee5\u4e0a\uff0cCPU\u65f6\u95f4\u8017\u65f6\u4e5f\u52c9\u5f3a\u53ef\u4ee5\u63a5\u53d7\u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(x,{...n})}):x(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>r,x:()=>d});var c=o(296540);const t={},i=c.createContext(t);function r(n){const e=c.useContext(i);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),c.createElement(i.Provider,{value:e},n.children)}}}]);