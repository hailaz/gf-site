"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[60246],{788633:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var s=d(474848),i=d(28453);const c={title:"\u63a5\u53e3\u7ef4\u62a4-gen service",sidebar_position:1},r=void 0,l={id:"\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u63a5\u53e3\u7ef4\u62a4-gen service",title:"\u63a5\u53e3\u7ef4\u62a4-gen service",description:"\u8be5\u529f\u80fd\u7279\u6027\u4ece v2.1 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002",source:"@site/versioned_docs/version-2.3.x/0-\u5f00\u53d1\u5de5\u5177/5-\u4ee3\u7801\u751f\u6210-gen/1-\u63a5\u53e3\u7ef4\u62a4-gen service.md",sourceDirName:"0-\u5f00\u53d1\u5de5\u5177/5-\u4ee3\u7801\u751f\u6210-gen",slug:"/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u63a5\u53e3\u7ef4\u62a4-gen service",permalink:"/gf-site/docs/2.3.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u63a5\u53e3\u7ef4\u62a4-gen service",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/0-\u5f00\u53d1\u5de5\u5177/5-\u4ee3\u7801\u751f\u6210-gen/1-\u63a5\u53e3\u7ef4\u62a4-gen service.md",tags:[],version:"2.3.x",sidebarPosition:1,frontMatter:{title:"\u63a5\u53e3\u7ef4\u62a4-gen service",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u89c4\u8303-gen dao",permalink:"/gf-site/docs/2.3.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u6570\u636e\u89c4\u8303-gen dao"},next:{title:"\u534f\u8bae\u7f16\u8bd1-gen pb",permalink:"/gf-site/docs/2.3.x/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u534f\u8bae\u7f16\u8bd1-gen pb"}},t={},h=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u8bbe\u8ba1\u80cc\u666f",id:"\u8bbe\u8ba1\u80cc\u666f",level:3},{value:"\u8bbe\u8ba1\u76ee\u6807",id:"\u8bbe\u8ba1\u76ee\u6807",level:3},{value:"\u547d\u4ee4\u4f7f\u7528",id:"\u547d\u4ee4\u4f7f\u7528",level:2},{value:"\u624b\u52a8\u6a21\u5f0f",id:"\u624b\u52a8\u6a21\u5f0f",level:3},{value:"\u81ea\u52a8\u6a21\u5f0f",id:"\u81ea\u52a8\u6a21\u5f0f",level:3},{value:"\u5177\u4f53\u4f7f\u7528\u624b\u6478\u624b",id:"\u5177\u4f53\u4f7f\u7528\u624b\u6478\u624b",level:2},{value:"Step1\uff1a\u5f15\u5165\u6211\u4eec\u63d0\u4f9b\u7684\u914d\u7f6e",id:"step1\u5f15\u5165\u6211\u4eec\u63d0\u4f9b\u7684\u914d\u7f6e",level:3},{value:"Step2\uff1a\u7f16\u5199\u60a8\u7684\u4e1a\u52a1\u903b\u8f91\u4ee3\u7801",id:"step2\u7f16\u5199\u60a8\u7684\u4e1a\u52a1\u903b\u8f91\u4ee3\u7801",level:3},{value:"Step3\uff1a\u751f\u6210\u63a5\u53e3\u53ca\u670d\u52a1\u6ce8\u518c\u6587\u4ef6",id:"step3\u751f\u6210\u63a5\u53e3\u53ca\u670d\u52a1\u6ce8\u518c\u6587\u4ef6",level:3},{value:"Step4\uff1a\u6ce8\u610f\u670d\u52a1\u7684\u5b9e\u73b0\u6ce8\u5165\u90e8\u5206\uff08\u4ec5\u4e00\u6b21\uff09",id:"step4\u6ce8\u610f\u670d\u52a1\u7684\u5b9e\u73b0\u6ce8\u5165\u90e8\u5206\u4ec5\u4e00\u6b21",level:3},{value:"Step5\uff1a\u5728\u542f\u52a8\u6587\u4ef6\u4e2d\u5f15\u7528\u63a5\u53e3\u5b9e\u73b0\u6ce8\u518c\uff08\u4ec5\u4e00\u6b21\uff09",id:"step5\u5728\u542f\u52a8\u6587\u4ef6\u4e2d\u5f15\u7528\u63a5\u53e3\u5b9e\u73b0\u6ce8\u518c\u4ec5\u4e00\u6b21",level:3},{value:"Step6\uff1aStart&amp;Enjoy",id:"step6startenjoy",level:3},{value:"\u5e38\u89c1\u95ee\u9898FAQ",id:"\u5e38\u89c1\u95ee\u9898faq",level:2},{value:"\u5feb\u901f\u5b9a\u4f4d\u63a5\u53e3\u7684\u5177\u4f53\u5b9e\u73b0",id:"\u5feb\u901f\u5b9a\u4f4d\u63a5\u53e3\u7684\u5177\u4f53\u5b9e\u73b0",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u8be5\u529f\u80fd\u7279\u6027\u4ece ",(0,s.jsx)(n.code,{children:"v2.1"})," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.h3,{id:"\u8bbe\u8ba1\u80cc\u666f",children:"\u8bbe\u8ba1\u80cc\u666f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4e1a\u52a1\u9879\u76ee\u5b9e\u8df5\u4e2d\uff0c\u4e1a\u52a1\u903b\u8f91\u5c01\u88c5\u5f80\u5f80\u662f\u6700\u590d\u6742\u7684\u90e8\u5206\uff0c\u540c\u65f6\uff0c\u4e1a\u52a1\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5341\u5206\u590d\u6742\u3001\u8fb9\u754c\u6a21\u7cca\uff0c\u65e0\u6cd5\u91c7\u7528 ",(0,s.jsx)(n.code,{children:"Golang"})," \u5305\u7ba1\u7406\u7684\u5f62\u5f0f\u3002\u5982\u4f55\u6709\u6548\u7ba1\u7406\u9879\u76ee\u4e2d\u7684\u4e1a\u52a1\u903b\u8f91\u5c01\u88c5\u90e8\u5206\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u91c7\u7528 ",(0,s.jsx)(n.code,{children:"Golang"})," \u5f00\u53d1\u7684\u9879\u76ee\u90fd\u662f\u5fc5\u5b9a\u4f1a\u9047\u5230\u7684\u96be\u9898\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u8bbe\u8ba1\u76ee\u6807",children:"\u8bbe\u8ba1\u76ee\u6807"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,s.jsx)(n.code,{children:"logic"})," \u5206\u7c7b\u76ee\u5f55\uff0c\u5c06\u6240\u6709\u4e1a\u52a1\u903b\u8f91\u4ee3\u7801\u8fc1\u79fb\u5230 ",(0,s.jsx)(n.code,{children:"logic"})," \u5206\u7c7b\u76ee\u5f55\u4e0b\uff0c\u91c7\u7528\u5305\u7ba1\u7406\u5f62\u5f0f\u6765\u7ba1\u7406\u4e1a\u52a1\u6a21\u5757\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e1a\u52a1\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u901a\u8fc7\u63a5\u53e3\u5316\u89e3\u8026\uff0c\u5c06\u539f\u6709\u7684 ",(0,s.jsx)(n.code,{children:"service"})," \u5206\u7c7b\u8c03\u6574\u4e3a\u63a5\u53e3\u76ee\u5f55\u3002\u8fd9\u6837\u6bcf\u4e2a\u4e1a\u52a1\u6a21\u5757\u5c06\u4f1a\u5404\u81ea\u7ef4\u62a4\u3001\u66f4\u52a0\u7075\u6d3b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53ef\u4ee5\u6309\u7167\u4e00\u5b9a\u7684\u9879\u76ee\u89c4\u8303\uff0c\u4ece ",(0,s.jsx)(n.code,{children:"logic"})," \u4e1a\u52a1\u903b\u8f91\u4ee3\u7801\u751f\u6210 ",(0,s.jsx)(n.code,{children:"service"})," \u63a5\u53e3\u5b9a\u4e49\u4ee3\u7801\u3002\u540c\u65f6\uff0c\u4e5f\u5141\u8bb8\u4eba\u5de5\u7ef4\u62a4\u8fd9\u90e8\u5206 ",(0,s.jsx)(n.code,{children:"service"})," \u63a5\u53e3\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u547d\u4ee4\u4f7f\u7528",children:"\u547d\u4ee4\u4f7f\u7528"}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u547d\u4ee4\u901a\u8fc7\u5206\u6790\u7ed9\u5b9a\u7684 ",(0,s.jsx)(n.code,{children:"logic"})," \u4e1a\u52a1\u903b\u8f91\u6a21\u5757\u76ee\u5f55\u4e0b\u7684\u4ee3\u7801\uff0c\u81ea\u52a8\u751f\u6210 ",(0,s.jsx)(n.code,{children:"service"})," \u76ee\u5f55\u63a5\u53e3\u4ee3\u7801\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u7531\u4e8e\u8be5\u547d\u4ee4\u662f\u6839\u636e\u4e1a\u52a1\u6a21\u5757\u751f\u6210 ",(0,s.jsx)(n.code,{children:"service"})," \u63a5\u53e3\uff0c\u56e0\u6b64\u53ea\u4f1a\u89e3\u6790\u4e8c\u7ea7\u76ee\u5f55\u4e0b\u7684 ",(0,s.jsx)(n.code,{children:"go"})," \u4ee3\u7801\u6587\u4ef6\uff0c\u5e76\u4e0d\u4f1a\u65e0\u9650\u9012\u5f52\u5206\u6790\u4ee3\u7801\u6587\u4ef6\u3002\u4ee5 ",(0,s.jsx)(n.code,{children:"logic"})," \u76ee\u5f55\u4e3a\u4f8b\uff0c\u8be5\u547d\u4ee4\u53ea\u4f1a\u89e3\u6790 ",(0,s.jsx)(n.code,{children:"logic/xxx/*.go"})," \u6587\u4ef6\u3002\u56e0\u6b64\uff0c\u9700\u8981 ",(0,s.jsx)(n.code,{children:"logic"})," \u5c42\u4ee3\u7801\u7ed3\u6784\u6ee1\u8db3\u4e00\u5b9a\u89c4\u8303\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e0d\u540c\u4e1a\u52a1\u6a21\u5757\u4e2d\u5b9a\u4e49\u7684\u7ed3\u6784\u4f53\u540d\u79f0\u5728\u751f\u6210\u7684 ",(0,s.jsx)(n.code,{children:"service"})," \u63a5\u53e3\u540d\u79f0\u65f6\u53ef\u80fd\u4f1a\u91cd\u590d\u8986\u76d6\uff0c\u56e0\u6b64\u9700\u8981\u5728\u8bbe\u8ba1\u4e1a\u52a1\u6a21\u5757\u65f6\u4fdd\u8bc1\u540d\u79f0\u4e0d\u80fd\u51b2\u7a81\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u624b\u52a8\u6a21\u5f0f",children:"\u624b\u52a8\u6a21\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u662f\u624b\u52a8\u6267\u884c\u547d\u4ee4\u884c\uff0c\u76f4\u63a5\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c ",(0,s.jsx)(n.code,{children:"gf gen service"})," \u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ gf gen service -h\nUSAGE\n    gf gen service [OPTION]\n\nOPTION\n    -s, --srcFolder         source folder path to be parsed. default: internal/logic\n    -d, --dstFolder         destination folder path storing automatically generated go files. default: internal/service\n    -f, --dstFileNameCase   destination file name storing automatically generated go files, cases are as follows:\n                            | Case            | Example            |\n                            |---------------- |--------------------|\n                            | Lower           | anykindofstring    |\n                            | Camel           | AnyKindOfString    |\n                            | CamelLower      | anyKindOfString    |\n                            | Snake           | any_kind_of_string | default\n                            | SnakeScreaming  | ANY_KIND_OF_STRING |\n                            | SnakeFirstUpper | rgb_code_md5       |\n                            | Kebab           | any-kind-of-string |\n                            | KebabScreaming  | ANY-KIND-OF-STRING |\n    -w, --watchFile         used in file watcher, it re-generates all service go files only if given file is under\n                            srcFolder\n    -a, --stPattern         regular expression matching struct name for generating service. default: ^s([A-Z]\\\\w+)$\n    -p, --packages          produce go files only for given source packages\n    -i, --importPrefix      custom import prefix to calculate import path for generated importing go file of logic\n    -l, --clear             delete all generated go files that are not used any further\n    -h, --help              more information about this command\n\nEXAMPLE\n    gf gen service\n    gf gen service -f Snake\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f7f\u7528\u6846\u67b6\u63a8\u8350\u7684\u9879\u76ee\u5de5\u7a0b\u811a\u624b\u67b6\uff0c\u5e76\u4e14\u7cfb\u7edf\u5b89\u88c5\u4e86 ",(0,s.jsx)(n.code,{children:"make"})," \u5de5\u5177\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"make service"})," \u5feb\u6377\u6307\u4ee4\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u5fc5\u987b"}),(0,s.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(n.th,{children:"\u542b\u4e49"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"srcFolder"})}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"internal/logic"})}),(0,s.jsx)(n.td,{children:"\u6307\u5411logic\u4ee3\u7801\u76ee\u5f55\u5730\u5740"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"dstFolder"})}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"internal/service"})}),(0,s.jsx)(n.td,{children:"\u6307\u5411\u751f\u6210\u7684\u63a5\u53e3\u6587\u4ef6\u5b58\u653e\u76ee\u5f55"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"dstFileNameCase"})}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Snake"})}),(0,s.jsx)(n.td,{children:"\u751f\u6210\u7684\u6587\u4ef6\u540d\u540d\u79f0\u683c\u5f0f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"stPattern"})}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"s([A-A]\\w+)"})}),(0,s.jsxs)(n.td,{children:["\u4f7f\u7528\u6b63\u5219\u6307\u5b9a\u4e1a\u52a1\u6a21\u5757\u7ed3\u6784\u4f53\u5b9a\u4e49\u683c\u5f0f\uff0c\u4fbf\u4e8e\u89e3\u6790\u4e1a\u52a1\u63a5\u53e3\u5b9a\u4e49\u540d\u79f0\u3002\u5728\u9ed8\u8ba4\u7684\u6b63\u5219\u4e0b\uff0c\u6240\u6709\u5c0f\u5199 ",(0,s.jsx)(n.code,{children:"s"})," \u5f00\u5934\uff0c\u5927\u5199\u5b57\u6bcd\u968f\u540e\u7684\u7ed3\u6784\u4f53\u90fd\u5c06\u88ab\u5f53\u505a\u4e1a\u52a1\u6a21\u5757\u63a5\u53e3\u540d\u79f0\u3002\u4f8b\u5982\uff1a"]})]})]})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"logic\u7ed3\u6784\u4f53\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"service\u63a5\u53e3\u540d\u79f0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sUser"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"User"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sMetaData"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"MetaData"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"watchFile"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"packages"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"importPrefix"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"overwrite"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"clear"})}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u81ea\u52a8\u6a21\u5f0f",children:"\u81ea\u52a8\u6a21\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u662f\u4f7f\u7528\u7684 ",(0,s.jsx)(n.code,{children:"GolandIDE"}),"\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u7684\u914d\u7f6e\u6587\u4ef6\uff1a ",(0,s.jsx)(n.a,{href:"https://goframe.org/download/attachments/92131572/watchers.xml?version=1&modificationDate=1655298456643&api=v2",children:"watchers.xml"}),"\xa0 \u81ea\u52a8\u76d1\u542c\u4ee3\u7801\u6587\u4ef6\u4fee\u6539\u65f6\u81ea\u52a8\u751f\u6210\u63a5\u53e3\u6587\u4ef6\u3002\u4f7f\u7528\u65b9\u5f0f\uff0c\u5982\u4e0b\u56fe\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(991266).A+"",width:"1826",height:"1424"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5177\u4f53\u4f7f\u7528\u624b\u6478\u624b",children:"\u5177\u4f53\u4f7f\u7528\u624b\u6478\u624b"}),"\n",(0,s.jsx)(n.h3,{id:"step1\u5f15\u5165\u6211\u4eec\u63d0\u4f9b\u7684\u914d\u7f6e",children:"Step1\uff1a\u5f15\u5165\u6211\u4eec\u63d0\u4f9b\u7684\u914d\u7f6e"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u5efa\u8bae\u60a8\u5728\u4f7f\u7528Goland IDE\u65f6\uff0c\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u7684\u914d\u7f6e\u6587\u4ef6\uff1a ",(0,s.jsx)(n.a,{href:"https://goframe.org/download/attachments/92131572/watchers.xml?version=1&modificationDate=1655298456643&api=v2",children:"watchers.xml"})]}),"\n",(0,s.jsx)(n.h3,{id:"step2\u7f16\u5199\u60a8\u7684\u4e1a\u52a1\u903b\u8f91\u4ee3\u7801",children:"Step2\uff1a\u7f16\u5199\u60a8\u7684\u4e1a\u52a1\u903b\u8f91\u4ee3\u7801"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(88287).A+"",width:"1422",height:"1522"})}),"\n",(0,s.jsx)(n.h3,{id:"step3\u751f\u6210\u63a5\u53e3\u53ca\u670d\u52a1\u6ce8\u518c\u6587\u4ef6",children:"Step3\uff1a\u751f\u6210\u63a5\u53e3\u53ca\u670d\u52a1\u6ce8\u518c\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u5df2\u7ecf\u6309\u7167Step1\u505a\u597d\u4e86\u914d\u7f6e\uff0c\u90a3\u4e48\u8fd9\u4e00\u6b65\u53ef\u4ee5\u5ffd\u7565\u3002\u56e0\u4e3a\u5728\u60a8\u7f16\u5199\u4ee3\u7801\u7684\u65f6\u5019\uff0c ",(0,s.jsx)(n.code,{children:"service"})," \u4fbf\u540c\u65f6\u751f\u6210\u4e86\u63a5\u53e3\u5b9a\u4e49\u6587\u4ef6\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5426\u5219\uff0c\u6bcf\u4e00\u6b21\u5728\u60a8\u5f00\u53d1/\u66f4\u65b0\u5b8c\u6210 ",(0,s.jsx)(n.code,{children:"logic"})," \u4e1a\u52a1\u6a21\u5757\u540e\uff0c\u60a8\u9700\u8981\u624b\u52a8\u6267\u884c\u4e00\u4e0b ",(0,s.jsx)(n.code,{children:"gf gen service"})," \u547d\u4ee4\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(699166).A+"",width:"2020",height:"1522"})}),"\n",(0,s.jsx)(n.h3,{id:"step4\u6ce8\u610f\u670d\u52a1\u7684\u5b9e\u73b0\u6ce8\u5165\u90e8\u5206\u4ec5\u4e00\u6b21",children:"Step4\uff1a\u6ce8\u610f\u670d\u52a1\u7684\u5b9e\u73b0\u6ce8\u5165\u90e8\u5206\uff08\u4ec5\u4e00\u6b21\uff09"}),"\n",(0,s.jsx)(n.p,{children:"\u53ea\u6709\u5728\u751f\u6210\u5b8c\u6210\u63a5\u53e3\u6587\u4ef6\u540e\uff0c\u60a8\u624d\u80fd\u5728\u6bcf\u4e2a\u4e1a\u52a1\u6a21\u5757\u4e2d\u52a0\u4e0a\u63a5\u53e3\u7684\u5177\u4f53\u5b9e\u73b0\u6ce8\u5165\u3002\u8be5\u65b9\u6cd5\u6bcf\u4e2a\u4e1a\u52a1\u6a21\u5757\u52a0\u4e00\u6b21\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(816451).A+"",width:"3050",height:"2110"})}),"\n",(0,s.jsx)(n.h3,{id:"step5\u5728\u542f\u52a8\u6587\u4ef6\u4e2d\u5f15\u7528\u63a5\u53e3\u5b9e\u73b0\u6ce8\u518c\u4ec5\u4e00\u6b21",children:"Step5\uff1a\u5728\u542f\u52a8\u6587\u4ef6\u4e2d\u5f15\u7528\u63a5\u53e3\u5b9e\u73b0\u6ce8\u518c\uff08\u4ec5\u4e00\u6b21\uff09"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u53d1\u73b0\uff0c\u8be5\u547d\u4ee4\u9664\u4e86\u751f\u6210\u63a5\u53e3\u6587\u4ef6\u4e4b\u5916\uff0c\u8fd8\u751f\u6210\u4e86\u4e00\u4e2a\u63a5\u53e3\u5b9e\u73b0\u6ce8\u518c\u6587\u4ef6\u3002\u8be5\u6587\u4ef6\u7528\u4e8e\u5728\u7a0b\u5e8f\u542f\u52a8\u65f6\uff0c\u5c06\u63a5\u53e3\u7684\u5177\u4f53\u5b9e\u73b0\u5728\u542f\u52a8\u65f6\u6267\u884c\u6ce8\u518c\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(525508).A+"",width:"3050",height:"2110"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u6587\u4ef6\u7684\u5f15\u5165\u9700\u8981\u5728 ",(0,s.jsx)(n.code,{children:"main"})," \u5305\u7684\u6700\u9876\u90e8\u5f15\u5165\uff0c\u9700\u8981\u6ce8\u610f ",(0,s.jsx)(n.code,{children:"import"})," \u7684\u987a\u5e8f\uff0c\u653e\u5230\u6700\u9876\u90e8\uff0c\u540e\u9762\u52a0\u4e00\u4e2a\u7a7a\u884c\u3002\u5982\u679c\u540c\u65f6\u5b58\u5728 ",(0,s.jsx)(n.code,{children:"packed"})," \u5305\u7684\u5f15\u5165\uff0c\u90a3\u4e48\u653e\u5230 ",(0,s.jsx)(n.code,{children:"packed"})," \u5305\u540e\u9762\u3002\u50cf\u8fd9\u6837\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(885045).A+"",width:"3050",height:"2110"})}),"\n",(0,s.jsx)(n.h3,{id:"step6startenjoy",children:"Step6\uff1aStart&Enjoy"}),"\n",(0,s.jsxs)(n.p,{children:["\u542f\u52a8 ",(0,s.jsx)(n.code,{children:"main.go"})," \u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898faq",children:"\u5e38\u89c1\u95ee\u9898FAQ"}),"\n",(0,s.jsx)(n.h3,{id:"\u5feb\u901f\u5b9a\u4f4d\u63a5\u53e3\u7684\u5177\u4f53\u5b9e\u73b0",children:"\u5feb\u901f\u5b9a\u4f4d\u63a5\u53e3\u7684\u5177\u4f53\u5b9e\u73b0"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u9879\u76ee\u4e1a\u52a1\u6a21\u5757\u91c7\u7528\u63a5\u53e3\u5316\u89e3\u8026\u540e\u4f53\u9a8c\u975e\u5e38\u68d2\uff01\u4f46\u662f\u6211\u5728\u5f00\u53d1\u548c\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\uff0c\u60f3\u8981\u5feb\u901f\u627e\u5230\u6307\u5b9a\u63a5\u53e3\u7684\u5177\u4f53\u5b9e\u73b0\u6709\u70b9\u56f0\u96be\uff0c\u80fd\u7ed9\u70b9\u6307\u5bfc\u601d\u8def\u5417\uff1f"})}),"\n",(0,s.jsxs)(n.p,{children:["> \u8fd9\u91cc\u6211\u63a8\u8350\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Goland IDE"}),"\uff0c\u6709\u4e2a\u5f88\u68d2\u7684\u63a5\u53e3\u5b9e\u73b0\u5b9a\u4f4d\u529f\u80fd\uff0c\u5177\u4f53\u5982\u56fe\u3002\u627e\u5230\u63a5\u53e3\u5b9a\u4e49\u540e\uff0c\u70b9\u51fb\u5de6\u8fb9\u7684\u5c0f\u56fe\u6807\u53ef\u5feb\u901f\u5b9a\u4f4d\u5177\u4f53\u7684\u5b9e\u73b0\u3002\u5982\u679cGoland\u4e0d\u663e\u793a\u5c0f\u56fe\u6807\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5347\u7ea7\u4f7f\u7528\u6700\u65b0\u7248\u672c\u7684 ",(0,s.jsx)(n.code,{children:"Goland"})," \u54c8\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d(739594).A+"",width:"3072",height:"1764"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},699166:(e,n,d)=>{d.d(n,{A:()=>s});const s=d.p+"assets/images/2f0100cd33c025b8d02d25903cdb0def-e7162f3a55d523d5dd76967d61a52829.png"},739594:(e,n,d)=>{d.d(n,{A:()=>s});const s=d.p+"assets/images/3e9e4f8ad446d9ecf8510c4647a43b1b-1c34085c95fe5c6974e9d9375de08bc9.png"},88287:(e,n,d)=>{d.d(n,{A:()=>s});const s=d.p+"assets/images/42231789be801a41849e8fa07e3e9b7a-723a35a803151dc8f8eaf23a76d0548e.png"},991266:(e,n,d)=>{d.d(n,{A:()=>s});const s=d.p+"assets/images/5cad5c5d473b4bbf6ab317866d04b991-9597c764ad6aeb6059dfea8a84e0f11d.png"},525508:(e,n,d)=>{d.d(n,{A:()=>s});const s=d.p+"assets/images/62b48ffd2b6ba5e7ec209d8c5b8334c7-e21a05cf450d707dedccd61f25519924.png"},885045:(e,n,d)=>{d.d(n,{A:()=>s});const s=d.p+"assets/images/9a5dac471443b4ebf386a27dffe4386d-95dc5e0efba73dad2d31cbafb05c143f.png"},816451:(e,n,d)=>{d.d(n,{A:()=>s});const s=d.p+"assets/images/abb1ac753a635d63e79b47c70343424c-2dbf7fa79de55c01dd7e36e80feb772b.png"},28453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>l});var s=d(296540);const i={},c=s.createContext(i);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);