"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[63882],{501187:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>g});var i=e(474848),r=e(28453);const t={title:"grpool (Goroutine\u6c60)",sidebar_position:16},c=void 0,s={id:"\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/grpool -Goroutine\u6c60",title:"grpool (Goroutine\u6c60)",description:"Go\u8bed\u8a00\u4e2d\u7684 goroutine \u867d\u7136\u76f8\u5bf9\u4e8e\u7cfb\u7edf\u7ebf\u7a0b\u6765\u8bf4\u6bd4\u8f83\u8f7b\u91cf\u7ea7\uff08\u521d\u59cb\u6808\u5927\u5c0f\u4ec5 2KB\uff09\uff0c\u4f46\u662f\u5728\u9ad8\u5e76\u53d1\u91cf\u4e0b\u7684 goroutine \u9891\u7e41\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u4e8e\u6027\u80fd\u635f\u8017\u4ee5\u53ca GC \u6765\u8bf4\u538b\u529b\u4e5f\u4e0d\u5c0f\u3002\u5145\u5206\u5c06 goroutine \u590d\u7528\uff0c\u51cf\u5c11 goroutine \u7684\u521b\u5efa/\u9500\u6bc1\u7684\u6027\u80fd\u635f\u8017\uff0c\u8fd9\u4fbf\u662f grpool \u5bf9 goroutine \u8fdb\u884c\u6c60\u5316\u5c01\u88c5\u7684\u76ee\u7684\u3002\u4f8b\u5982\uff0c\u9488\u5bf9\u4e8e 100W \u4e2a\u6267\u884c\u4efb\u52a1\uff0c\u4f7f\u7528 goroutine \u7684\u8bdd\u9700\u8981\u4e0d\u505c\u521b\u5efa\u5e76\u9500\u6bc1 100W \u4e2a goroutine\uff0c\u800c\u4f7f\u7528 grpool \u4e5f\u8bb8\u5e95\u5c42\u53ea\u9700\u8981\u51e0\u4e07\u4e2a goroutine \u4fbf\u80fd\u5145\u5206\u590d\u7528\u5730\u6267\u884c\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u3002",source:"@site/versioned_docs/version-1.14.x/2-\u6a21\u5757\u5217\u8868/3-\u7cfb\u7edf\u76f8\u5173/16-grpool -Goroutine\u6c60.md",sourceDirName:"2-\u6a21\u5757\u5217\u8868/3-\u7cfb\u7edf\u76f8\u5173",slug:"/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/grpool -Goroutine\u6c60",permalink:"/gf-site/docs/1.14.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/grpool -Goroutine\u6c60",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.14.x/2-\u6a21\u5757\u5217\u8868/3-\u7cfb\u7edf\u76f8\u5173/16-grpool -Goroutine\u6c60.md",tags:[],version:"1.14.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:16,frontMatter:{title:"grpool (Goroutine\u6c60)",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"gview (\u6a21\u677f\u5f15\u64ce\u6a21\u5757)",permalink:"/gf-site/docs/1.14.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gview -\u6a21\u677f\u5f15\u64ce\u6a21\u5757"},next:{title:"gbuild (\u6784\u5efa\u4fe1\u606f\u83b7\u53d6)",permalink:"/gf-site/docs/1.14.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gbuild -\u6784\u5efa\u4fe1\u606f\u83b7\u53d6"}},l={},g=[{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:3}];function d(n){const o={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.p,{children:["Go\u8bed\u8a00\u4e2d\u7684 ",(0,i.jsx)(o.code,{children:"goroutine"})," \u867d\u7136\u76f8\u5bf9\u4e8e\u7cfb\u7edf\u7ebf\u7a0b\u6765\u8bf4\u6bd4\u8f83\u8f7b\u91cf\u7ea7\uff08\u521d\u59cb\u6808\u5927\u5c0f\u4ec5 ",(0,i.jsx)(o.code,{children:"2KB"}),"\uff09\uff0c\u4f46\u662f\u5728\u9ad8\u5e76\u53d1\u91cf\u4e0b\u7684 ",(0,i.jsx)(o.code,{children:"goroutine"})," \u9891\u7e41\u521b\u5efa\u548c\u9500\u6bc1\u5bf9\u4e8e\u6027\u80fd\u635f\u8017\u4ee5\u53ca ",(0,i.jsx)(o.code,{children:"GC"})," \u6765\u8bf4\u538b\u529b\u4e5f\u4e0d\u5c0f\u3002\u5145\u5206\u5c06 ",(0,i.jsx)(o.code,{children:"goroutine"})," \u590d\u7528\uff0c\u51cf\u5c11 ",(0,i.jsx)(o.code,{children:"goroutine"})," \u7684\u521b\u5efa/\u9500\u6bc1\u7684\u6027\u80fd\u635f\u8017\uff0c\u8fd9\u4fbf\u662f ",(0,i.jsx)(o.code,{children:"grpool"})," \u5bf9 ",(0,i.jsx)(o.code,{children:"goroutine"})," \u8fdb\u884c\u6c60\u5316\u5c01\u88c5\u7684\u76ee\u7684\u3002\u4f8b\u5982\uff0c\u9488\u5bf9\u4e8e ",(0,i.jsx)(o.code,{children:"100W"})," \u4e2a\u6267\u884c\u4efb\u52a1\uff0c\u4f7f\u7528 ",(0,i.jsx)(o.code,{children:"goroutine"})," \u7684\u8bdd\u9700\u8981\u4e0d\u505c\u521b\u5efa\u5e76\u9500\u6bc1 ",(0,i.jsx)(o.code,{children:"100W"})," \u4e2a ",(0,i.jsx)(o.code,{children:"goroutine"}),"\uff0c\u800c\u4f7f\u7528 ",(0,i.jsx)(o.code,{children:"grpool"})," \u4e5f\u8bb8\u5e95\u5c42\u53ea\u9700\u8981\u51e0\u4e07\u4e2a ",(0,i.jsx)(o.code,{children:"goroutine"})," \u4fbf\u80fd\u5145\u5206\u590d\u7528\u5730\u6267\u884c\u5b8c\u6210\u6240\u6709\u4efb\u52a1\u3002"]}),"\n",(0,i.jsxs)(o.p,{children:["\u7ecf\u6d4b\u8bd5\uff0c ",(0,i.jsx)(o.code,{children:"goroutine"})," \u6c60\u5bf9\u4e8e\u4e1a\u52a1\u903b\u8f91\u7684\u6267\u884c\u6548\u7387\uff08\u964d\u4f4e\u6267\u884c\u65f6\u95f4/CPU\u4f7f\u7528\u7387\uff09\u63d0\u5347\u4e0d\u5927\uff0c\u751a\u81f3\u6ca1\u6709\u539f\u751f\u7684 ",(0,i.jsx)(o.code,{children:"goroutine"})," \u6267\u884c\u5feb\u901f\uff08\u6c60\u5316 ",(0,i.jsx)(o.code,{children:"goroutine"})," \u6267\u884c\u8c03\u5ea6\u5e76\u6ca1\u6709\u5e95\u5c42go\u8c03\u5ea6\u5668\u9ad8\u6548\uff0c\u56e0\u4e3a\u6c60\u5316 ",(0,i.jsx)(o.code,{children:"goroutine"})," \u7684\u6267\u884c\u8c03\u5ea6\u4e5f\u662f\u57fa\u4e8e\u5e95\u5c42go\u8c03\u5ea6\u5668\uff09\uff0c\u4f46\u662f\u7531\u4e8e\u91c7\u7528\u4e86\u590d\u7528\u7684\u8bbe\u8ba1\uff0c\u6c60\u5316\u540e\u5bf9\u5185\u5b58\u7684\u4f7f\u7528\u7387\u5f97\u5230\u6781\u5927\u7684\u964d\u4f4e\u3002"]}),"\n",(0,i.jsx)(o.p,{children:"\u6982\u5ff5\uff1a"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"Pool"}),"\uff1a ",(0,i.jsx)(o.code,{children:"goroutine"})," \u6c60\uff0c\u7528\u4e8e\u7ba1\u7406\u82e5\u5e72\u53ef\u590d\u7528\u7684 ",(0,i.jsx)(o.code,{children:"goroutine"})," \u534f\u7a0b\u8d44\u6e90\uff1b"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"Worker"}),"\uff1a\u6c60\u5bf9\u8c61\u4e2d\u53c2\u4e0e\u4efb\u52a1\u6267\u884c\u7684 ",(0,i.jsx)(o.code,{children:"goroutine"}),"\uff0c\u4e00\u4e2a ",(0,i.jsx)(o.code,{children:"Worker"})," \u53ef\u4ee5\u6267\u884c\u82e5\u5e72\u4e2a ",(0,i.jsx)(o.code,{children:"Job"}),"\uff0c\u76f4\u5230\u961f\u5217\u4e2d\u518d\u65e0\u7b49\u5f85\u7684 ",(0,i.jsx)(o.code,{children:"Job"}),"\uff1b"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"Job"}),"\uff1a\u6dfb\u52a0\u5230\u6c60\u5bf9\u8c61\u7684\u4efb\u52a1\u961f\u5217\u4e2d\u7b49\u5f85\u6267\u884c\u7684\u4efb\u52a1\uff0c\u662f\u4e00\u4e2a ",(0,i.jsx)(o.code,{children:"func()"})," \u7684\u65b9\u6cd5\uff0c\u4e00\u4e2a ",(0,i.jsx)(o.code,{children:"Job"})," \u540c\u65f6\u53ea\u80fd\u88ab\u4e00\u4e2a ",(0,i.jsx)(o.code,{children:"Worker"})," \u83b7\u53d6\u5e76\u6267\u884c\uff1b"]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-go",children:'import "github.com/gogf/gf/os/grpool"\n\n'})}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,i.jsx)(o.p,{children:"\u7ba1\u7406\u5927\u91cf\u5f02\u6b65\u4efb\u52a1\u7684\u573a\u666f\u3001\u9700\u8981\u5f02\u6b65\u534f\u7a0b\u590d\u7528\u7684\u573a\u666f\u3001\u9700\u8981\u964d\u4f4e\u5185\u5b58\u4f7f\u7528\u7387\u7684\u573a\u666f\u3002"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://godoc.org/github.com/gogf/gf/os/grpool",children:"https://godoc.org/github.com/gogf/gf/os/grpool"})}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-go",children:"func Add(f func()) error\nfunc Jobs() int\nfunc Size() int\ntype Pool\n    func New(limit ...int) *Pool\n    func (p *Pool) Add(f func()) error\n    func (p *Pool) Cap() int\n    func (p *Pool) Close()\n    func (p *Pool) IsClosed() bool\n    func (p *Pool) Jobs() int\n    func (p *Pool) Size() int\n\n"})}),"\n",(0,i.jsxs)(o.p,{children:["\u901a\u8fc7 ",(0,i.jsx)(o.code,{children:"grpool.New"})," \u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a ",(0,i.jsx)(o.code,{children:"goroutine\u6c60"})," \u5bf9\u8c61\uff0c\u53c2\u6570 ",(0,i.jsx)(o.code,{children:"limit"})," \u4e3a\u975e\u5fc5\u9700\u53c2\u6570\uff0c\u7528\u4e8e\u9650\u5b9a\u6c60\u4e2d\u7684\u5de5\u4f5c ",(0,i.jsx)(o.code,{children:"goroutine"})," \u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a\u4e0d\u9650\u5236\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4efb\u52a1\u53ef\u4ee5\u4e0d\u505c\u5730\u5f80\u6c60\u4e2d\u6dfb\u52a0\uff0c\u6ca1\u6709\u9650\u5236\uff0c\u4f46\u662f\u5de5\u4f5c\u7684 ",(0,i.jsx)(o.code,{children:"goroutine"})," \u662f\u53ef\u4ee5\u505a\u9650\u5236\u7684\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(o.code,{children:"Size()"})," \u65b9\u6cd5\u67e5\u8be2\u5f53\u524d\u7684\u5de5\u4f5c ",(0,i.jsx)(o.code,{children:"goroutine"})," \u6570\u91cf\uff0c\u4f7f\u7528 ",(0,i.jsx)(o.code,{children:"Jobs()"})," \u65b9\u6cd5\u67e5\u8be2\u5f53\u524d\u6c60\u4e2d\u5f85\u5904\u7406\u7684\u4efb\u52a1\u6570\u91cf\u3002"]}),"\n",(0,i.jsxs)(o.p,{children:["\u540c\u65f6\uff0c\u4e3a\u4fbf\u4e8e\u4f7f\u7528\uff0c ",(0,i.jsx)(o.code,{children:"grpool"})," \u5305\u63d0\u4f9b\u4e86\u9ed8\u8ba4\u7684 ",(0,i.jsx)(o.code,{children:"goroutine"})," \u6c60\uff0c\u9ed8\u8ba4\u7684\u6c60\u5bf9\u8c61\u4e0d\u9650\u5236 ",(0,i.jsx)(o.code,{children:"goroutine"})," \u6570\u91cf\uff0c\u76f4\u63a5\u901a\u8fc7 ",(0,i.jsx)(o.code,{children:"grpool.Add"})," \u5373\u53ef\u5f80\u9ed8\u8ba4\u7684\u6c60\u4e2d\u6dfb\u52a0\u4efb\u52a1\uff0c\u4efb\u52a1\u53c2\u6570\u5fc5\u987b\u662f\u4e00\u4e2a ",(0,i.jsx)(o.code,{children:"func()"})," \u7c7b\u578b\u7684\u51fd\u6570/\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(o.h3,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"1\u3001\u4f7f\u7528\u9ed8\u8ba4\u7684goroutine\u6c60\uff0c\u9650\u5236100\u4e2a\u5de5\u4f5cgoroutine\u6267\u884c1000\u4e2a\u4efb\u52a1"})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://github.com/gogf/gf/blob/master/.example/os/grpool/grpool1.go",children:"https://github.com/gogf/gf/blob/master/.example/os/grpool/grpool1.go"})}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n\t"time"\n\t"fmt"\n\t"github.com/gogf/gf/os/grpool"\n\t"github.com/gogf/gf/os/gtimer"\n)\n\nfunc job() {\n\ttime.Sleep(1*time.Second)\n}\n\nfunc main() {\n\tpool := grpool.New(100)\n\tfor i := 0; i < 1000; i++ {\n\t\tpool.Add(job)\n\t}\n\tfmt.Println("worker:", pool.Size())\n\tfmt.Println("  jobs:", pool.Jobs())\n\tgtimer.SetInterval(time.Second, func() {\n\t\tfmt.Println("worker:", pool.Size())\n\t\tfmt.Println("  jobs:", pool.Jobs())\n\t\tfmt.Println()\n\t})\n\n\tselect {}\n}\n\n'})}),"\n",(0,i.jsxs)(o.p,{children:["\u8fd9\u6bb5\u7a0b\u5e8f\u4e2d\u7684\u4efb\u52a1\u51fd\u6570\u7684\u529f\u80fd\u662f ",(0,i.jsx)(o.code,{children:"sleep 1\u79d2\u949f"}),"\uff0c\u8fd9\u6837\u4fbf\u80fd\u5145\u5206\u5c55\u793a\u51fagoroutine\u6570\u91cf\u9650\u5236\u529f\u80fd\u3002\u5176\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,i.jsx)(o.code,{children:"gtime.SetInterval"})," \u5b9a\u65f6\u5668\u6bcf\u96941\u79d2\u949f\u6253\u5370\u51fa\u5f53\u524d\u9ed8\u8ba4\u6c60\u4e2d\u7684\u5de5\u4f5cgoroutine\u6570\u91cf\u4ee5\u53ca\u5f85\u5904\u7406\u7684\u4efb\u52a1\u6570\u91cf\u3002"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"2\u3001\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e2a\u65b0\u624b\u7ecf\u5e38\u5bb9\u6613\u51fa\u9519\u7684\u4f8b\u5b50"})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://github.com/gogf/gf/blob/master/.example/os/grpool/grpool2.go",children:"https://github.com/gogf/gf/blob/master/.example/os/grpool/grpool2.go"})}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "sync"\n    "github.com/gogf/gf/os/grpool"\n)\n\nfunc main() {\n    wg := sync.WaitGroup{}\n    for i := 0; i < 10; i++ {\n        wg.Add(1)\n        grpool.Add(func() {\n            fmt.Println(i)\n            wg.Done()\n        })\n    }\n    wg.Wait()\n}\n\n'})}),"\n",(0,i.jsx)(o.p,{children:"\u6211\u4eec\u8fd9\u6bb5\u4ee3\u7801\u7684\u76ee\u7684\u662f\u8981\u987a\u5e8f\u5730\u6253\u5370\u51fa0-9\uff0c\u7136\u800c\u8fd0\u884c\u540e\u5374\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-undefined",children:"10\n10\n10\n10\n10\n10\n10\n10\n10\n10\n\n"})}),"\n",(0,i.jsxs)(o.p,{children:["\u4e3a\u4ec0\u4e48\u5462\uff1f\u8fd9\u91cc\u7684\u6267\u884c\u7ed3\u679c\u65e0\u8bba\u662f\u91c7\u7528 ",(0,i.jsx)(o.code,{children:"go"})," \u5173\u952e\u5b57\u6765\u6267\u884c\u8fd8\u662f ",(0,i.jsx)(o.code,{children:"grpool"})," \u6765\u6267\u884c\u90fd\u662f\u5982\u6b64\u3002\u539f\u56e0\u662f\uff0c\u5bf9\u4e8e\u5f02\u6b65\u7ebf\u7a0b/\u534f\u7a0b\u6765\u8bb2\uff0c\u51fd\u6570\u8fdb\u884c\u5f02\u6b65\u6267\u884c\u6ce8\u518c\u65f6\uff0c\u8be5\u51fd\u6570\u5e76\u672a\u771f\u6b63\u5f00\u59cb\u6267\u884c(\u6ce8\u518c\u65f6\u53ea\u5728goroutine\u7684\u6808\u4e2d\u4fdd\u5b58\u4e86\u53d8\u91cfi\u7684\u5185\u5b58\u5730\u5740)\uff0c\u800c\u4e00\u65e6\u5f00\u59cb\u6267\u884c\u65f6\u51fd\u6570\u624d\u4f1a\u53bb\u8bfb\u53d6\u53d8\u91cfi\u7684\u503c\uff0c\u800c\u8fd9\u4e2a\u65f6\u5019\u53d8\u91cfi\u7684\u503c\u5df2\u7ecf\u81ea\u589e\u5230\u4e8610\u3002 \u6e05\u695a\u539f\u56e0\u4e4b\u540e\uff0c\u6539\u8fdb\u65b9\u6848\u4e5f\u5f88\u7b80\u5355\u4e86\uff0c\u5c31\u662f\u5728\u6ce8\u518c\u5f02\u6b65\u6267\u884c\u51fd\u6570\u7684\u65f6\u5019\uff0c\u628a\u5f53\u65f6\u53d8\u91cfi\u7684\u503c\u4e5f\u4e00\u5e76\u4f20\u9012\u83b7\u53d6\uff1b\u6216\u8005\u628a\u5f53\u524d\u53d8\u91cfi\u7684\u503c\u8d4b\u503c\u7ed9\u4e00\u4e2a\u4e0d\u4f1a\u6539\u53d8\u7684\u4e34\u65f6\u53d8\u91cf\uff0c\u5728\u51fd\u6570\u4e2d\u4f7f\u7528\u8be5\u4e34\u65f6\u53d8\u91cf\u800c\u4e0d\u662f\u76f4\u63a5\u4f7f\u7528\u53d8\u91cfi\u3002"]}),"\n",(0,i.jsx)(o.p,{children:"\u6539\u8fdb\u540e\u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"1)\u3001\u4f7f\u7528go\u5173\u952e\u5b57"})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://github.com/gogf/gf/blob/master/.example/os/grpool/grpool3.go",children:"https://github.com/gogf/gf/blob/master/.example/os/grpool/grpool3.go"})}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\nfunc main() {\n    wg := sync.WaitGroup{}\n    for i := 0; i < 10; i++ {\n        wg.Add(1)\n        go func(v int){\n            fmt.Println(v)\n            wg.Done()\n        }(i)\n    }\n    wg.Wait()\n}\n\n'})}),"\n",(0,i.jsx)(o.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-undefined",children:"9\n0\n1\n2\n3\n4\n5\n6\n7\n8\n\n"})}),"\n",(0,i.jsx)(o.p,{children:"\u6ce8\u610f\uff0c\u5f02\u6b65\u6267\u884c\u65f6\u5e76\u4e0d\u4f1a\u4fdd\u8bc1\u6309\u7167\u51fd\u6570\u6ce8\u518c\u65f6\u7684\u987a\u5e8f\u6267\u884c\uff0c\u4ee5\u4e0b\u540c\u7406\u3002"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"2)\u3001\u4f7f\u7528\u4e34\u65f6\u53d8\u91cf"})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://github.com/gogf/gf/blob/master/.example/os/grpool/grpool4.go",children:"https://github.com/gogf/gf/blob/master/.example/os/grpool/grpool4.go"})}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "sync"\n    "github.com/gogf/gf/os/grpool"\n)\n\nfunc main() {\n    wg := sync.WaitGroup{}\n    for i := 0; i < 10; i++ {\n        wg.Add(1)\n        v := i\n        grpool.Add(func() {\n            fmt.Println(v)\n            wg.Done()\n        })\n    }\n    wg.Wait()\n}\n\n'})}),"\n",(0,i.jsx)(o.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-undefined",children:"9\n0\n1\n2\n3\n4\n5\n6\n7\n8\n\n"})}),"\n",(0,i.jsx)(o.p,{children:"\u8fd9\u91cc\u53ef\u4ee5\u770b\u5230\uff0c\u4f7f\u7528grpool\u8fdb\u884c\u4efb\u52a1\u6ce8\u518c\u65f6\uff0c\u53ea\u80fd\u4f7f\u7528func()\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u56e0\u6b64\u65e0\u6cd5\u5728\u4efb\u52a1\u6ce8\u518c\u65f6\u628a\u53d8\u91cfi\u7684\u503c\u6ce8\u518c\u8fdb\u53bb\uff0c\u56e0\u6b64\u53ea\u80fd\u91c7\u7528\u4e34\u65f6\u53d8\u91cf\u7684\u5f62\u5f0f\u6765\u4f20\u9012\u5f53\u524d\u53d8\u91cfi\u7684\u503c\u3002"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"3\u3001\u6700\u540e\u6211\u4eec\u4f7f\u7528\u7a0b\u5e8f\u6d4b\u8bd5\u4e00\u4e0bgrpool\u548c\u539f\u751f\u7684goroutine\u4e4b\u95f4\u7684\u6027\u80fd"})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"1)\u3001grpool"})}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "sync"\n    "time"\n    "github.com/gogf/gf/os/gtime"\n    "github.com/gogf/gf/os/grpool"\n)\n\nfunc main() {\n    start := gtime.Millisecond()\n    wg    := sync.WaitGroup{}\n    for i := 0; i < 10000000; i++ {\n        wg.Add(1)\n        grpool.Add(func() {\n            time.Sleep(time.Millisecond)\n            wg.Done()\n        })\n    }\n    wg.Wait()\n    fmt.Println(grpool.Size())\n    fmt.Println("time spent:", gtime.Millisecond() - start)\n}\n\n'})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"2)\u3001goroutine"})}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "sync"\n    "time"\n    "github.com/gogf/gf/os/gtime"\n)\n\nfunc main() {\n    start := gtime.Millisecond()\n    wg    := sync.WaitGroup{}\n    for i := 0; i < 10000000; i++ {\n        wg.Add(1)\n        go func() {\n            time.Sleep(time.Millisecond)\n            wg.Done()\n        }()\n    }\n    wg.Wait()\n    fmt.Println("time spent:", gtime.Millisecond() - start)\n}\n\n'})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"3)\u3001\u8fd0\u884c\u7ed3\u679c\u6bd4\u8f83"})}),"\n",(0,i.jsx)(o.p,{children:"\u6d4b\u8bd5\u7ed3\u679c\u4e3a\u4e24\u4e2a\u7a0b\u5e8f\u5404\u8fd0\u884c3\u6b21\u53d6\u5e73\u5747\u503c\u3002"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-shell",children:"grpool:\n    goroutine count: 847313\n     memory   spent: ~2.1 G\n     time     spent: 37792 ms\n\ngoroutine:\n    goroutine count: 1000W\n    memory    spent: ~4.8 GB\n    time      spent: 27085 ms\n\n"})}),"\n",(0,i.jsxs)(o.p,{children:["\u53ef\u4ee5\u770b\u5230\u6c60\u5316\u8fc7\u540e\uff0c\u6267\u884c\u76f8\u540c\u6570\u91cf\u7684\u4efb\u52a1\uff0c ",(0,i.jsx)(o.code,{children:"goroutine"})," \u6570\u91cf\u51cf\u5c11\u5f88\u591a\uff0c\u76f8\u5bf9\u7684\u5185\u5b58\u4e5f\u964d\u4f4e\u4e86\u4e00\u500d\u4ee5\u4e0a\uff0cCPU\u65f6\u95f4\u8017\u65f6\u4e5f\u52c9\u5f3a\u53ef\u4ee5\u63a5\u53d7\u3002"]})]})}function p(n={}){const{wrapper:o}={...(0,r.R)(),...n.components};return o?(0,i.jsx)(o,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,o,e)=>{e.d(o,{R:()=>c,x:()=>s});var i=e(296540);const r={},t=i.createContext(r);function c(n){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function s(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(t.Provider,{value:o},n.children)}}}]);