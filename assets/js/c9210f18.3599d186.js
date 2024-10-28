"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[385],{204207:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var s=i(474848),d=i(28453);const r={title:"gtimer (\u4efb\u52a1\u5b9a\u65f6\u5668)",sidebar_position:3},c=void 0,l={id:"\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gtimer -\u4efb\u52a1\u5b9a\u65f6\u5668",title:"gtimer (\u4efb\u52a1\u5b9a\u65f6\u5668)",description:"gtimer \u662f\u4e00\u4e2a\u5e76\u53d1\u5b89\u5168\u7684\u9ad8\u6027\u80fd\u4efb\u52a1\u5b9a\u65f6\u5668\uff0c\u7c7b\u4f3c\u4e8e Java \u7684 Timer\u3002 gtimer \u5185\u90e8\u5b9e\u73b0\u91c7\u7528\u7075\u6d3b\u9ad8\u6548\u7684\u5206\u5c42\u65f6\u95f4\u8f6e\uff08 Hierarchical Timing Wheel\uff09\u8bbe\u8ba1\uff0c\u88ab\u8bbe\u8ba1\u4e3a\u53ef\u5355\u8fdb\u7a0b\u7ba1\u7406\u7ef4\u62a4\u767e\u4e07\u7ea7\u522b\u4ee5\u4e0a\u6570\u91cf\u7684\u5b9a\u65f6\u4efb\u52a1\u3002 gtimer \u4efb\u52a1\u5b9a\u65f6\u5668\u4e0e gcron \u5b9a\u65f6\u4efb\u52a1\u6a21\u5757\u533a\u522b:",source:"@site/versioned_docs/version-1.15.x/2-\u6a21\u5757\u5217\u8868/3-\u7cfb\u7edf\u76f8\u5173/3-gtimer -\u4efb\u52a1\u5b9a\u65f6\u5668.md",sourceDirName:"2-\u6a21\u5757\u5217\u8868/3-\u7cfb\u7edf\u76f8\u5173",slug:"/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gtimer -\u4efb\u52a1\u5b9a\u65f6\u5668",permalink:"/gf-site/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gtimer -\u4efb\u52a1\u5b9a\u65f6\u5668",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.15.x/2-\u6a21\u5757\u5217\u8868/3-\u7cfb\u7edf\u76f8\u5173/3-gtimer -\u4efb\u52a1\u5b9a\u65f6\u5668.md",tags:[],version:"1.15.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:3,frontMatter:{title:"gtimer (\u4efb\u52a1\u5b9a\u65f6\u5668)",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"gcron (\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757)",permalink:"/gf-site/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gcron -\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757"},next:{title:"gcache (\u7f13\u5b58\u7ba1\u7406\u6a21\u5757)",permalink:"/gf-site/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/gcache -\u7f13\u5b58\u7ba1\u7406\u6a21\u5757"}},t={},h=[{value:"\u65f6\u95f4\u8f6e\u8bbe\u8ba1",id:"\u65f6\u95f4\u8f6e\u8bbe\u8ba1",level:3},{value:"\u9ed8\u8ba4\u5b9a\u65f6\u5668",id:"\u9ed8\u8ba4\u5b9a\u65f6\u5668",level:3},{value:"\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5",id:"\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5",level:3}];function o(n){const e={a:"a",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gtimer"})," \u662f\u4e00\u4e2a\u5e76\u53d1\u5b89\u5168\u7684\u9ad8\u6027\u80fd\u4efb\u52a1\u5b9a\u65f6\u5668\uff0c\u7c7b\u4f3c\u4e8e ",(0,s.jsx)(e.code,{children:"Java"})," \u7684 ",(0,s.jsx)(e.code,{children:"Timer"}),"\u3002 ",(0,s.jsx)(e.code,{children:"gtimer"})," \u5185\u90e8\u5b9e\u73b0\u91c7\u7528\u7075\u6d3b\u9ad8\u6548\u7684\u5206\u5c42\u65f6\u95f4\u8f6e\uff08 ",(0,s.jsx)(e.code,{children:"Hierarchical Timing Wheel"}),"\uff09\u8bbe\u8ba1\uff0c\u88ab\u8bbe\u8ba1\u4e3a\u53ef\u5355\u8fdb\u7a0b\u7ba1\u7406\u7ef4\u62a4\u767e\u4e07\u7ea7\u522b\u4ee5\u4e0a\u6570\u91cf\u7684\u5b9a\u65f6\u4efb\u52a1\u3002 ",(0,s.jsx)(e.code,{children:"gtimer"})," \u4efb\u52a1\u5b9a\u65f6\u5668\u4e0e ",(0,s.jsx)(e.code,{children:"gcron"})," \u5b9a\u65f6\u4efb\u52a1\u6a21\u5757\u533a\u522b:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"gtimer"})," \u5c5e\u4e8e\u9ad8\u6027\u80fd\u6a21\u5757\uff0c\u662f\u6846\u67b6\u6838\u5fc3\u6a21\u5757\uff0c\u6784\u5efa\u4efb\u4f55\u5b9a\u65f6\u4efb\u52a1\u7684\u57fa\u7840\uff0c\u4efb\u4f55\u65b9\u6cd5\u64cd\u4f5c\u8017\u65f6\u5747\u5728 ",(0,s.jsx)(e.code,{children:"\u7eb3\u79d2"})," \u7ea7\u522b\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"gtimer"})," \u53ef\u9002\u7528\u4e8e\u4efb\u4f55\u7684\u5b9a\u65f6\u4efb\u52a1\u573a\u666f\u4e2d\uff0c\u4f8b\u5982: TCP\u901a\u4fe1\u3001\u6e38\u620f\u5f00\u53d1\u7b49\u573a\u666f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"gcron"})," \u652f\u6301\u7ecf\u5178\u7684 ",(0,s.jsx)(e.code,{children:"crontab"})," \u5f62\u5f0f\u7684\u5b9a\u65f6\u4efb\u52a1\u8bed\u6cd5\uff0c\u6700\u5c0f\u65f6\u95f4\u8bbe\u5b9a\u95f4\u9694\u4e3a ",(0,s.jsx)(e.code,{children:"\u79d2"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"gcron"})," \u5e95\u5c42\u5b9e\u73b0\u57fa\u4e8e ",(0,s.jsx)(e.code,{children:"gtimer"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:"\u4efb\u4f55\u5b9a\u65f6\u4efb\u52a1\u573a\u666f\uff0c\u5927\u6279\u91cf\u5b9a\u65f6\u4efb\u52a1/\u5ef6\u8fdf\u4efb\u52a1\u7684\u573a\u666f\uff0c\u8d85\u65f6\u63a7\u5236/\u9891\u7387\u63a7\u5236\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u5bf9\u4e8e\u5b9a\u65f6\u65f6\u95f4\u51c6\u786e\u5ea6\u8981\u6c42\u4e0d\u9ad8\u7684\u4e1a\u52a1\u573a\u666f\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6ce8\u610f\u4e8b\u9879"}),"\uff1a"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4efb\u4f55\u7684\u5b9a\u65f6\u4efb\u52a1\u90fd\u662f\u6709\u8bef\u5dee\u7684\uff0c\u5728\u65f6\u95f4\u8f6e\u523b\u5ea6\u6bd4\u8f83\u5927\uff0c\u6216\u8005\u5e76\u53d1\u91cf\u5927\uff0c\u8d1f\u8f7d\u8f83\u9ad8\u7684\u7cfb\u7edf\u4e2d\u5c24\u5176\u660e\u663e\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\uff1a ",(0,s.jsx)(e.a,{href:"https://github.com/golang/go/issues/14410",children:"https://github.com/golang/go/issues/14410"})]}),"\n",(0,s.jsx)(e.li,{children:"\u5b9a\u65f6\u95f4\u9694\u4e0d\u4f1a\u8003\u8651\u4efb\u52a1\u7684\u6267\u884c\u65f6\u95f4\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4e00\u9879\u5de5\u4f5c\u9700\u89813\u5206\u949f\u624d\u80fd\u6267\u884c\u5b8c\u6210\uff0c\u5e76\u4e14\u8ba1\u5212\u6bcf\u96945\u5206\u949f\u8fd0\u884c\u4e00\u6b21\uff0c\u90a3\u4e48\u6bcf\u6b21\u4efb\u52a1\u4e4b\u95f4\u53ea\u67092\u5206\u949f\u7684\u7a7a\u95f2\u65f6\u95f4\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f ",(0,s.jsx)(e.strong,{children:"\u5355\u4f8b\u6a21\u5f0f"})," \u8fd0\u884c\u7684\u5b9a\u65f6\u4efb\u52a1\uff0c\u4efb\u52a1\u7684\u6267\u884c\u65f6\u95f4\u4f1a\u5f71\u54cd\u8be5\u4efb\u52a1\u4e0b\u4e00\u6b21\u6267\u884c\u7684 ",(0,s.jsx)(e.strong,{children:"\u5f00\u59cb\u65f6\u95f4"}),"\u3002\u4f8b\u5982\uff1a\u4e00\u4e2a\u6bcf\u79d2\u6267\u884c\u7684\u4efb\u52a1\uff0c\u8fd0\u884c\u8017\u65f6\u4e3a1\u79d2\uff0c\u90a3\u4e48\u5728 ",(0,s.jsx)(e.strong,{children:"\u7b2c1\u79d2"})," \u5f00\u59cb\u8fd0\u884c\u540e\uff0c\u4e0b\u4e00\u6b21\u4efb\u52a1\u5c06\u4f1a\u5728 ",(0,s.jsx)(e.strong,{children:"\u7b2c3\u79d2"})," \u5f00\u59cb\u6267\u884c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'import "github.com/gogf/gf/os/gtimer"\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://godoc.org/github.com/gogf/gf/os/gtimer",children:"https://godoc.org/github.com/gogf/gf/os/gtimer"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"New"})," \u65b9\u6cd5\u7528\u4e8e\u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u4efb\u52a1\u5b9a\u65f6\u5668\u5bf9\u8c61:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"slot"})," \u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u6bcf\u4e2a\u65f6\u95f4\u8f6e\u7684\u69fd\u6570\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"interval"})," \u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u5b9a\u65f6\u5668\u7684\u6700\u5c0ftick\u65f6\u95f4\u95f4\u9694\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"level"})," \u4e3a\u975e\u5fc5\u9700\u53c2\u6570\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u5206\u5c42\u65f6\u95f4\u8f6e\u7684\u5c42\u6570\uff0c\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(e.code,{children:"6"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Add"})," \u65b9\u6cd5\u7528\u4e8e\u6dfb\u52a0\u5b9a\u65f6\u4efb\u52a1\uff0c\u5176\u4e2d\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"interval"})," \u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u65b9\u6cd5\u7684\u6267\u884c\u7684\u65f6\u95f4\u95f4\u9694\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"job"})," \u53c2\u6570\u4e3a\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1\u65b9\u6cd5(\u65b9\u6cd5\u5730\u5740)\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"AddEntry"})," \u65b9\u6cd5\u6dfb\u52a0\u5b9a\u65f6\u4efb\u52a1\uff0c\u652f\u6301\u66f4\u591a\u53c2\u6570\u7684\u63a7\u5236\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"AddSingleton"})," \u65b9\u6cd5\u7528\u4e8e\u6dfb\u52a0\u5355\u4f8b\u5b9a\u65f6\u4efb\u52a1\uff0c\u5373\u540c\u65f6\u53ea\u80fd\u6709\u4e00\u4e2a\u8be5\u4efb\u52a1\u6b63\u5728\u8fd0\u884c\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"AddOnce"})," \u65b9\u6cd5\u7528\u4e8e\u6dfb\u52a0\u53ea\u8fd0\u884c\u4e00\u6b21\u7684\u5b9a\u65f6\u4efb\u52a1\uff0c\u5f53\u8fd0\u884c\u4e00\u6b21\u6570\u540e\u8be5\u5b9a\u65f6\u4efb\u52a1\u81ea\u52a8\u9500\u6bc1\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"AddTimes"})," \u65b9\u6cd5\u7528\u4e8e\u6dfb\u52a0\u8fd0\u884c\u6307\u5b9a\u6b21\u6570\u7684\u5b9a\u65f6\u4efb\u52a1\uff0c\u5f53\u8fd0\u884c ",(0,s.jsx)(e.code,{children:"times"})," \u6b21\u6570\u540e\u8be5\u5b9a\u65f6\u4efb\u52a1\u81ea\u52a8\u9500\u6bc1\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Search"})," \u65b9\u6cd5\u7528\u4e8e\u6839\u636e\u540d\u79f0\u8fdb\u884c\u5b9a\u65f6\u4efb\u52a1\u641c\u7d22(\u8fd4\u56de\u5b9a\u65f6\u4efb\u52a1 ",(0,s.jsx)(e.code,{children:"*Entry"})," \u5bf9\u8c61\u6307\u9488)\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Start"})," \u65b9\u6cd5\u7528\u4e8e\u542f\u52a8\u5b9a\u65f6\u5668(\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"New"})," \u521b\u5efa\u5b9a\u65f6\u5668\u65f6\u4f1a\u81ea\u52a8\u542f\u52a8)\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Stop"})," \u65b9\u6cd5\u7528\u4e8e\u505c\u6b62\u5b9a\u65f6\u5668\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Close"})," \u65b9\u6cd5\u7528\u4e8e\u5173\u95ed\u5b9a\u65f6\u5668\uff1b"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u65f6\u95f4\u8f6e\u8bbe\u8ba1",children:"\u65f6\u95f4\u8f6e\u8bbe\u8ba1"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(46894).A+"",width:"735",height:"573"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gtimer"})," \u91c7\u7528\u7684\u662f \u5206\u5c42\u65f6\u95f4\u8f6e( ",(0,s.jsx)(e.code,{children:"Hierarchical Timing Wheel"}),") \u8bbe\u8ba1\uff0c\u4f7f\u7528\u7684\u6570\u636e\u7ed3\u6784\u4e3a ",(0,s.jsx)(e.code,{children:"array + list"}),"\uff0c\u76f8\u6bd4\u8f83\u4e8e\u5355\u5c42\u65f6\u95f4\u8f6e\u8bbe\u8ba1\uff0c\u53ef\u4ee5\u66f4\u9ad8\u6548\u5730\u7ba1\u7406\u66f4\u591a\u7684\u5b9a\u65f6\u4efb\u52a1\u3002\u5206\u5c42\u65f6\u95f4\u8f6e\u7684\u8bbe\u8ba1\u7c7b\u4f3c\u4e8e\u65f6\u949f\u7684\u8f6c\u52a8\uff0c\u5728\u5206\u5c42\u65f6\u95f4\u8f6e\u7684\u5185\u90e8\uff0c\u4ec5\u4f7f\u7528\u4e86\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"goroutine"})," \u6765\u201c\u6eda\u52a8\u201d\u523b\u5ea6\uff0c\u6709\u4e14\u53ea\u6709\u6700\u5e95\u5c42\u7684\u65f6\u95f4\u8f6e\u4f1a\u6267\u884c\u523b\u5ea6\u7684\u201c\u6eda\u52a8\u201d\u3002\u76f8\u5f53\u4e8e\u5e95\u5c42\u7684\u65f6\u95f4\u8f6e\u8f6c\u4e00\u5708\uff0c\u4e0a\u5c42\u7684\u65f6\u95f4\u8f6e\u624d\u4f1a\u79fb\u52a8\u4e00\u4e2a\u523b\u5ea6\uff0c\u5982\u6b64\u5faa\u73af\u3002\u65f6\u95f4\u95f4\u9694\u6bd4\u8f83\u5927\u7684\u5b9a\u65f6\u4efb\u52a1\u5c06\u4f1a\u88ab\u6dfb\u52a0\u5230\u9ad8\u5c42\u7684\u65f6\u95f4\u8f6e\uff0c\u5f53\u523b\u5ea6\u6307\u5411\u8be5\u4efb\u52a1\u7684\u69fd\u65f6\uff0c\u4f1a\u5c06\u8be5\u4efb\u52a1\u79fb\u52a8\u5230\u4f4e\u5c42\u7684\u65f6\u95f4\u8f6e\u7ee7\u7eed\u8fd0\u884c\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u65f6\u95f4\u8f6e\u7684\u6bcf\u4e00\u4e2a\u523b\u5ea6\u4e0a\u7ed1\u5b9a\u4e86\u4e00\u4e2a\u5e76\u53d1\u5b89\u5168\u7684\u94fe\u8868\uff0c\u8fbe\u5230\u523b\u5ea6\u65f6\u81ea\u52a8\u904d\u5386\u8be5\u94fe\u8868\uff0c\u6ee1\u8db3\u6761\u4ef6\u7684\u4efb\u52a1\u5c06\u4f1a\u521b\u5efa\u72ec\u7acb\u7684 ",(0,s.jsx)(e.code,{children:"goroutine"})," \u8fdb\u884c\u5f02\u6b65\u6267\u884c\u3002\u4e0d\u6ee1\u8db3\u6761\u4ef6\u7684\u4efb\u52a1\uff0c\u6216\u8005\u9700\u8981\u7ee7\u7eed\u6267\u884c\u7684\u4efb\u52a1\u5c06\u4f1a\u8ba1\u7b97\u5269\u4f59\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u88ab\u91cd\u65b0\u8c03\u5ea6\u5230\u65b0\u7684\u65f6\u95f4\u8f6e\u523b\u5ea6\u4e0a\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5173\u4e8e\u65f6\u95f4\u8f6e\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u67e5\u770b\u4ee5\u4e0b\u51e0\u4e2a\u94fe\u63a5\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"http://www.embeddedlinux.org.cn/RTConforEmbSys/5107final/LiB0071.html",children:"http://www.embeddedlinux.org.cn/RTConforEmbSys/5107final/LiB0071.html"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.slideshare.net/supperniu/timing-wheels",children:"https://www.slideshare.net/supperniu/timing-wheels"})}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u9ed8\u8ba4\u5b9a\u65f6\u5668",children:"\u9ed8\u8ba4\u5b9a\u65f6\u5668"}),"\n",(0,s.jsx)(e.p,{children:"\u5927\u90e8\u5206\u7684\u573a\u666f\u4e0b\u4f7f\u7528\u9ed8\u8ba4\u7684\u5b9a\u65f6\u5668\u5373\u53ef\u3002\u5982\u679c\u786e\u5b9e\u6709\u521b\u5efa\u81ea\u5b9a\u4e49\u65f6\u95f4\u8f6e\u5bf9\u8c61\u7684\u5fc5\u8981\uff0c\u52a1\u5fc5\u63d0\u524d\u7406\u89e3\u65f6\u95f4\u8f6e\u8bbe\u8ba1\u6982\u5ff5\uff0c\u5e76\u4e14\u9632\u6b62\u8bbe\u8ba1\u7684\u65f6\u95f4\u523b\u5ea6\u5927\u5c0f\u6ea2\u51fa\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"gtimer"})," \u7684\u9ed8\u8ba4\u5b9a\u65f6\u5668\u65f6\uff0c\u9ed8\u8ba4\u7684\u65f6\u95f4\u8f6e\u69fd\u6570\u4e3a ",(0,s.jsx)(e.code,{children:"6"}),"\uff0c\u95f4\u9694\u65f6\u95f4\u4e3a ",(0,s.jsx)(e.code,{children:"60ms"}),"\uff0c\u5206\u5c42\u5927\u5c0f\u4e3a ",(0,s.jsx)(e.code,{children:"6"}),"\uff0c\u6bcf\u4e00\u5c42\u7684\u65f6\u95f4\u8f6e\u4fe1\u606f\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5c42\u7ea7"}),(0,s.jsx)(e.th,{children:"\u69fd\u6570"}),(0,s.jsx)(e.th,{children:"\u95f4\u9694"}),(0,s.jsx)(e.th,{children:"\u4e00\u5468\u5927\u5c0f"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"0"}),(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"60ms"}),(0,s.jsx)(e.td,{children:"600ms"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"600ms"}),(0,s.jsx)(e.td,{children:"6000ms = 6s"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"6000ms = 6s"}),(0,s.jsx)(e.td,{children:"60000ms = 1m"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"60000ms = 1m"}),(0,s.jsx)(e.td,{children:"600000ms = 10m"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"4"}),(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"600000ms = 10m"}),(0,s.jsx)(e.td,{children:"6000000ms = 100m"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"5"}),(0,s.jsx)(e.td,{children:"10"}),(0,s.jsx)(e.td,{children:"6000000ms = 100m"}),(0,s.jsx)(e.td,{children:"60000000ms = 1000m"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u4fee\u6539\u9ed8\u8ba4\u7684\u5b9a\u65f6\u5668\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4f7f\u7528\u542f\u52a8\u53c2\u6570","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"gf.gtimer.slots=100"}),": \u4fee\u6539\u9ed8\u8ba4\u7684\u69fd\u6570\u4e3a ",(0,s.jsx)(e.code,{children:"100"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"gf.gtimer.level=5"}),": \u4fee\u6539\u9ed8\u8ba4\u7684\u5206\u5c42\u6570\u4e3a ",(0,s.jsx)(e.code,{children:"5"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"gf.gtimer.interval=100"}),": \u4fee\u6539\u9ed8\u8ba4\u7684\u65f6\u95f4\u523b\u5ea6\u4e3a ",(0,s.jsx)(e.code,{children:"100\u6beb\u79d2"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4f7f\u7528\u73af\u5883\u53d8\u91cf","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"GF_GTIMER_SLOTS=100"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"GF_GTIMER_LEVEL=5"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"GF_GTIMER_INTERVAL=100"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5",children:"\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"goos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/os/gtimer\nBenchmark_Add-4               3000000             484 ns/op         152 B/op           5 allocs/op\nBenchmark_StartStop-4       100000000            10.1 ns/op           0 B/op           0 allocs/op\nPASS\nok      command-line-arguments    6.602s\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b1, \u95f4\u9694\u4efb\u52a1"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    now      := time.Now()\n    interval := 1400*time.Millisecond\n    gtimer.Add(interval, func() {\n        fmt.Println(time.Now(), time.Duration(time.Now().UnixNano() - now.UnixNano()))\n        now = time.Now()\n    })\n\n    select { }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"2019-01-17 18:17:37.022442 +0800 CST m=+1.354132542 1.353568s\n2019-01-17 18:17:38.422467 +0800 CST m=+2.754148119 1.399624s\n2019-01-17 18:17:39.82318 +0800 CST m=+4.154851847 1.40066s\n2019-01-17 18:17:41.222422 +0800 CST m=+5.554084408 1.399094s\n2019-01-17 18:17:42.622461 +0800 CST m=+6.954112968 1.399962s\n2019-01-17 18:17:44.022769 +0800 CST m=+8.354411089 1.400251s\n...\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b2, \u5355\u4f8b\u4efb\u52a1"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'package main\n\nimport (\n    "github.com/gogf/gf/os/glog"\n    "github.com/gogf/gf/os/gtimer"\n    "time"\n)\n\nfunc main() {\n    interval := time.Second\n    gtimer.AddSingleton(interval, func() {\n        glog.Println("doing")\n        time.Sleep(5*time.Second)\n    })\n\n    select { }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"2019-01-23 17:04:18.892 doing\n2019-01-23 17:04:24.890 doing\n2019-01-23 17:04:29.892 doing\n2019-01-23 17:04:35.891 doing\n...\n"})})]})}function x(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},46894:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/cf1562e9d5f5be8b0143c107811a0502-347c2a532d2b51ba162dbc7b87b1390f.png"},28453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>l});var s=i(296540);const d={},r=s.createContext(d);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);