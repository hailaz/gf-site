"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[87322],{249679:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>t});var c=d(474848),i=d(28453);const s={slug:"/configure-env",title:"\u5f00\u53d1\u73af\u5883\u914d\u7f6e",sidebar_position:2},o=void 0,l={id:"\u5176\u4ed6\u8d44\u6599/\u51c6\u5907\u5de5\u4f5c/\u5f00\u53d1\u73af\u5883\u914d\u7f6e",title:"\u5f00\u53d1\u73af\u5883\u914d\u7f6e",description:"Go\u73af\u5883\u53d8\u91cf",source:"@site/docs/16-\u5176\u4ed6\u8d44\u6599/0-\u51c6\u5907\u5de5\u4f5c/2-\u5f00\u53d1\u73af\u5883\u914d\u7f6e.md",sourceDirName:"16-\u5176\u4ed6\u8d44\u6599/0-\u51c6\u5907\u5de5\u4f5c",slug:"/configure-env",permalink:"/docs/configure-env",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/configure-env",title:"\u5f00\u53d1\u73af\u5883\u914d\u7f6e",sidebar_position:2},sidebar:"hiddenSidebar",previous:{title:"Go Module",permalink:"/docs/go-module"},next:{title:"\u79c1\u6709\u4f9d\u8d56\u7ba1\u7406",permalink:"/docs/private-go-module"}},r={},t=[{value:"Go\u73af\u5883\u53d8\u91cf",id:"go\u73af\u5883\u53d8\u91cf",level:2},{value:"\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e",id:"\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e",level:3},{value:"<code>*nix</code> \u4e0b\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",id:"nix-\u4e0b\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",level:3},{value:"<code>Windows</code> \u4e0b\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",id:"windows-\u4e0b\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",level:3},{value:"IDE\u5de5\u5177\u914d\u7f6e",id:"ide\u5de5\u5177\u914d\u7f6e",level:2},{value:"<code>go fmt</code>, <code>goimports</code>, <code>golangci-lint</code>",id:"go-fmt-goimports-golangci-lint",level:3},{value:"<code>golint</code> \u5de5\u5177\u7684\u5b89\u88c5\u53ca\u914d\u7f6e(\u53ef\u9009)",id:"golint-\u5de5\u5177\u7684\u5b89\u88c5\u53ca\u914d\u7f6e\u53ef\u9009",level:3},{value:"<code>golint</code> \u7684\u5b89\u88c5",id:"golint-\u7684\u5b89\u88c5",level:4},{value:"<code>golint</code> \u7684\u914d\u7f6e",id:"golint-\u7684\u914d\u7f6e",level:4},{value:"<code>golangci-lint</code> \u7684\u914d\u7f6e(\u53ef\u9009)",id:"golangci-lint-\u7684\u914d\u7f6e\u53ef\u9009",level:3},{value:"IDE\u4ee3\u7801\u98ce\u683c\u914d\u7f6e",id:"ide\u4ee3\u7801\u98ce\u683c\u914d\u7f6e",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"go\u73af\u5883\u53d8\u91cf",children:"Go\u73af\u5883\u53d8\u91cf"}),"\n",(0,c.jsx)(n.p,{children:"\u4e3a\u65b9\u4fbf\u5f00\u53d1\uff0c\u5728\u5f00\u53d1\u73af\u5883\u5f80\u5f80\u9700\u8981\u8bbe\u7f6e\u4e09\u4e2a\u73af\u5883\u53d8\u91cf\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"$GOROOT"}),"\uff1a ",(0,c.jsx)(n.code,{children:"go"})," \u7684\u5b89\u88c5\u76ee\u5f55\uff0c\u914d\u7f6e\u540e\u4e0d\u4f1a\u518d\u66f4\u6539\uff1b"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"$GOPATH"}),"\uff1a ",(0,c.jsx)(n.code,{children:"go"})," \u9879\u76ee\u5728\u672c\u5730\u7684\u5f00\u53d1\u73af\u5883\u7684\u7684\u9879\u76ee\u6839\u8def\u5f84(\u4ee5\u4fbf\u9879\u76ee\u7f16\u8bd1\uff0c ",(0,c.jsx)(n.code,{children:"go build"}),", ",(0,c.jsx)(n.code,{children:"go install"}),")\uff0c\u4e0d\u540c\u7684\u9879\u76ee\u5728\u7f16\u8bd1\u7684\u65f6\u5019\u8be5\u73af\u5883\u53d8\u91cf\u53ef\u4ee5\u4e0d\u540c\uff1b"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"$PATH"}),"\uff08\u91cd\u8981\uff09\uff1a\u9700\u8981\u5c06 ",(0,c.jsx)(n.code,{children:"go"})," \u7684 ",(0,c.jsx)(n.code,{children:"bin"})," \u76ee\u5f55\u6dfb\u52a0\u5230\u7cfb\u7edf ",(0,c.jsx)(n.code,{children:"$PATH"})," \u4e2d\u4ee5\u4fbf\u65b9\u4fbf\u4f7f\u7528go\u7684\u76f8\u5173\u547d\u4ee4\uff0c\u914d\u7f6e\u540e\u4e5f\u4e0d\u4f1a\u518d\u66f4\u6539\uff1b"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Go\u7684\u73af\u5883\u53d8\u91cf\u5728\u5b98\u65b9\u6587\u6863\u4e2d\u4e5f\u6709\u8be6\u60c5\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003\u94fe\u63a5\uff1a ",(0,c.jsx)(n.a,{href:"https://golang.google.cn/doc/install/source",children:"https://golang.google.cn/doc/install/source"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u73af\u5883\u53d8\u91cf\u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"$GOOS"})," \u548c ",(0,c.jsx)(n.code,{children:"$GOARCH"})," \u662f\u6bd4\u8f83\u5b9e\u7528\u7684\u4e24\u4e2a\u53d8\u91cf\uff0c\u53ef\u4ee5\u7528\u5728\u4e0d\u540c\u5e73\u53f0\u7684\u4ea4\u53c9\u7f16\u8bd1\u4e2d\uff0c\u53ea\u9700\u8981\u5728 ",(0,c.jsx)(n.code,{children:"go build"})," \u4e4b\u524d\u8bbe\u7f6e\u8fd9\u4e24\u4e2a\u53d8\u91cf\u5373\u53ef\uff0c\u8fd9\u4e5f\u662fgo\u8bed\u8a00\u7684\u4f18\u52bf\u4e4b\u4e00\uff1a\u53ef\u4ee5\u7f16\u8bd1\u751f\u6210\u8de8\u5e73\u53f0\u8fd0\u884c\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3002\u611f\u89c9\u6bd4QT\u66f4\u9ad8\u6548\u66f4\u8f7b\u91cf\u7ea7\uff0c\u867d\u7136\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\u662f\u5927\u4e86\u4e00\u70b9\uff0c\u4e0d\u8fc7\u4e5f\u5728\u53ef\u63a5\u53d7\u7684\u8303\u56f4\u4e4b\u5185\u3002 \u4f8b\u5982\uff0c\u5728 ",(0,c.jsx)(n.code,{children:"Linux amd64"})," \u67b6\u6784\u4e0b\u7f16\u8bd1 ",(0,c.jsx)(n.code,{children:"Windows x86"})," \u7684\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"CGO_ENABLED=0 GOOS=windows GOARCH=386 go build hello.go\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u9057\u61be\u7684\u662f\u4ea4\u53c9\u7f16\u8bd1\u6682\u4e0d\u652f\u6301 ",(0,c.jsx)(n.code,{children:"cgo"})," \u65b9\u5f0f\uff0c\u56e0\u6b64\u9700\u8981\u5c06\u73af\u5883\u53d8\u91cf ",(0,c.jsx)(n.code,{children:"$CGO_ENABLED"})," \u8bbe\u7f6e\u4e3a0\uff0c\u8fd9\u6837\u6267\u884c\u4e4b\u540e\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u751f\u6210\u4e00\u4e2a ",(0,c.jsx)(n.code,{children:"hello.exe"})," \u7684 ",(0,c.jsx)(n.code,{children:"windows x86"})," \u67b6\u6784\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e",children:"\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e"}),"\n",(0,c.jsxs)(n.p,{children:["\u9664\u4e86 ",(0,c.jsx)(n.code,{children:"$PATH"})," \u73af\u5883\u5916\uff0c\u5176\u4ed6\u73af\u5883\u53d8\u91cf\u90fd\u662f\u53ef\u9009\u7684\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3a\u4ec0\u4e48\u8bf4\u8fd9\u4e2a\u6b65\u9aa4\u53ef\u9009\u5462\uff1f\u56e0\u4e3a\u672a\u6765\u7684 ",(0,c.jsx)(n.code,{children:"Go"})," \u7248\u672c\u6162\u6162\u5f00\u59cb\u79fb\u9664\u5bf9 ",(0,c.jsx)(n.code,{children:"$GOPATH"}),"/ ",(0,c.jsx)(n.code,{children:"$GOROOT"})," \u7684\u652f\u6301\u3002\u6b64\u5916\uff0c\u5728 ",(0,c.jsx)(n.code,{children:"Goland"})," \u8fd9\u4e2aIDE\u4e2d\u96c6\u6210\u6709 ",(0,c.jsx)(n.code,{children:"Terminal"})," \u529f\u80fd\uff0c\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\u4e2d\u5df2\u7ecf\u8bbe\u7f6e\u597d\u4e86\u73af\u5883\u53d8\u91cf\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:d(178423).A+"",width:"763",height:"591"})}),"\n",(0,c.jsxs)(n.h3,{id:"nix-\u4e0b\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",children:[(0,c.jsx)(n.code,{children:"*nix"})," \u4e0b\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"*nix"})," \u7cfb\u7edf\u4e0b( ",(0,c.jsx)(n.code,{children:"Linux/Unix/MacOS/*BSD"})," \u7b49\u7b49)\uff0c\u9700\u8981\u5728 ",(0,c.jsx)(n.code,{children:"/etc/profile"})," \u4e2d\u589e\u52a0\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\u540e\uff0c\u6267\u884c\u547d\u4ee4 ",(0,c.jsx)(n.code,{children:"#source /etc/profile"})," \u91cd\u65b0\u52a0\u8f7dprofile\u914d\u7f6e\u6587\u4ef6\uff08\u6216\u91cd\u65b0\u767b\u5f55\uff09\uff0c\u5c06\u4ee5\u4e0b\u53d8\u91cf\u6dfb\u52a0\u5230\u7528\u6237\u7684\u73af\u5883\u53d8\u91cf\u4e2d:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"export GOROOT=/usr/local/go\nexport GOPATH=/Users/john/Workspace/Go/GOPATH\nexport PATH=$GOPATH/bin:$GOROOT/bin:$PATH\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"windows-\u4e0b\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",children:[(0,c.jsx)(n.code,{children:"Windows"})," \u4e0b\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"]}),"\n",(0,c.jsxs)(n.p,{children:["Windows\u5982\u4f55\u4fee\u6539\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\uff0c\u4ee5\u53ca\u4fee\u6539\u73af\u5883\u53d8\u91cf ",(0,c.jsx)(n.code,{children:"PATH"}),"\uff0c\u8bf7\u53c2\u8003\u7f51\u4e0a\u6559\u7a0b\uff08 ",(0,c.jsx)(n.a,{href:"https://www.baidu.com/s?wd=Windows%20%E4%BF%AE%E6%94%B9%E7%B3%BB%E7%BB%9F%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%20PATH",children:"\u767e\u5ea6"})," \u6216 ",(0,c.jsx)(n.a,{href:"https://www.google.com/search?q=Windows+%E4%BF%AE%E6%94%B9%E7%B3%BB%E7%BB%9F%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F+PATH",children:"Google"}),"\uff09\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"ide\u5de5\u5177\u914d\u7f6e",children:"IDE\u5de5\u5177\u914d\u7f6e"}),"\n",(0,c.jsxs)(n.p,{children:["\u672c\u6587\u4ee5 ",(0,c.jsx)(n.code,{children:"Goland"})," \u5f00\u53d1\u5de5\u5177\u4e3a\u57fa\u7840\uff0c\u4ecb\u7ecd\u5728\u8be5IDE\u4e0b\u7684\u5e38\u7528\u5de5\u5177\u914d\u7f6e\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5e38\u7528\u7684\u5de5\u5177\u5305\u62ec\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"go fmt"})," : \u7edf\u4e00\u7684\u4ee3\u7801\u683c\u5f0f\u5316\u5de5\u5177\uff08\u5fc5\u987b\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"golangci-lint"})," : \u9759\u6001\u4ee3\u7801\u8d28\u91cf\u68c0\u6d4b\u5de5\u5177\uff0c\u7528\u4e8e\u5305\u7684\u8d28\u91cf\u5206\u6790\uff08\u63a8\u8350\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"goimports"})," : \u81ea\u52a8 ",(0,c.jsx)(n.code,{children:"import"})," \u4f9d\u8d56\u5305\u5de5\u5177\uff08\u53ef\u9009\uff09\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"golint"})," : \u4ee3\u7801\u89c4\u8303\u68c0\u6d4b\uff0c\u5e76\u4e14\u4e5f\u68c0\u6d4b\u5355\u6587\u4ef6\u7684\u4ee3\u7801\u8d28\u91cf\uff0c\u6bd4\u8f83\u51fa\u540d\u7684Go\u8d28\u91cf\u8bc4\u4f30\u7ad9\u70b9 ",(0,c.jsx)(n.a,{href:"https://goreportcard.com",children:"Go Report"})," \u5728\u4f7f\u7528\uff08\u53ef\u9009\uff09\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"go-fmt-goimports-golangci-lint",children:[(0,c.jsx)(n.code,{children:"go fmt"}),", ",(0,c.jsx)(n.code,{children:"goimports"}),", ",(0,c.jsx)(n.code,{children:"golangci-lint"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e8e\u8fd9\u4e09\u4e2a\u5de5\u5177\u662f ",(0,c.jsx)(n.code,{children:"Goland"})," \u81ea\u5e26\u7684\uff0c\u56e0\u6b64\u914d\u7f6e\u6bd4\u8f83\u7b80\u5355\uff0c\u53c2\u8003\u4ee5\u4e0b\u56fe\u6587\u64cd\u4f5c\u793a\u4f8b\uff1a"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"Goland"})," \u7684\u8bbe\u7f6e\u4e2d\uff0c\u9009\u62e9 ",(0,c.jsx)(n.code,{children:"Tools"})," - ",(0,c.jsx)(n.code,{children:"File Watchers"}),"\uff0c\u968f\u540e\u9009\u62e9\u6dfb\u52a0"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:d(427398).A+"",width:"827",height:"618"})}),"\n",(0,c.jsxs)(n.ol,{start:"2",children:["\n",(0,c.jsx)(n.li,{children:"\u4f9d\u6b21\u70b9\u51fb\u6dfb\u52a0\u8fd93\u4e2a\u5de5\u5177\uff0c\u4f7f\u7528\u9ed8\u8ba4\u7684\u914d\u7f6e\u5373\u53ef"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:d(576809).A+"",width:"810",height:"558"})}),"\n",(0,c.jsxs)(n.ol,{start:"3",children:["\n",(0,c.jsx)(n.li,{children:"\u968f\u540e\u5728\u64b8\u4ee3\u7801\u7684\u8fc7\u7a0b\u4e2d\u4fdd\u5b58\u4ee3\u7801\u6587\u4ef6\u65f6\u5c06\u4f1a\u81ea\u52a8\u89e6\u53d1\u8fd93\u4e2a\u5de5\u5177\u7684\u81ea\u52a8\u68c0\u6d4b\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"golint-\u5de5\u5177\u7684\u5b89\u88c5\u53ca\u914d\u7f6e\u53ef\u9009",children:[(0,c.jsx)(n.code,{children:"golint"})," \u5de5\u5177\u7684\u5b89\u88c5\u53ca\u914d\u7f6e(\u53ef\u9009)"]}),"\n",(0,c.jsxs)(n.h4,{id:"golint-\u7684\u5b89\u88c5",children:[(0,c.jsx)(n.code,{children:"golint"})," \u7684\u5b89\u88c5"]}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,c.jsx)(n.code,{children:"Goland"})," \u6ca1\u6709\u81ea\u5e26 ",(0,c.jsx)(n.code,{children:"golint"})," \u5de5\u5177\uff0c\u56e0\u6b64\u9996\u5148\u8981\u81ea\u5df1\u53bb\u4e0b\u8f7d\u5b89\u88c5\u8be5\u5de5\u5177\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u5982\u679c\u6709goproxy\u914d\u7f6e\u4e86"}),"\uff0c\u53ef\u4ee5\u76f4\u63a5 ",(0,c.jsx)(n.code,{children:"go install golang.org/x/lint/golint@latest"}),"\xa0\u5b89\u88c5\uff0c\u5c31\u4e0d\u9700\u8981\u4f7f\u7528\u4e0b\u65b9\u547d\u4ee4\u4e86\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"mkdir -p $GOPATH/src/golang.org/x/\ncd $GOPATH/src/golang.org/x/\ngit clone https://github.com/golang/lint.git\ngit clone https://github.com/golang/tools.git\ncd $GOPATH/src/golang.org/x/lint/golint\ngo install\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5b89\u88c5\u6210\u529f\u4e4b\u540e\u5c06\u4f1a\u5728 ",(0,c.jsx)(n.code,{children:"$GOPATH/bin"})," \u76ee\u5f55\u4e0b\u770b\u5230\u81ea\u52a8\u751f\u6210\u4e86 ",(0,c.jsx)(n.code,{children:"golint"})," \u4e8c\u8fdb\u5236\u5de5\u5177\u6587\u4ef6\u3002"]}),"\n",(0,c.jsxs)(n.h4,{id:"golint-\u7684\u914d\u7f6e",children:[(0,c.jsx)(n.code,{children:"golint"})," \u7684\u914d\u7f6e"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u968f\u540e\u5728 ",(0,c.jsx)(n.code,{children:"Goland"})," \u7684 ",(0,c.jsx)(n.code,{children:"Tools"})," - ",(0,c.jsx)(n.code,{children:"File Watchers"})," \u914d\u7f6e\u4e0b\uff0c\u901a\u8fc7\u590d\u5236 ",(0,c.jsx)(n.code,{children:"go fmt"})," \u7684\u914d\u7f6e"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:d(113786).A+"",width:"810",height:"558"})}),"\n",(0,c.jsxs)(n.ol,{start:"2",children:["\n",(0,c.jsxs)(n.li,{children:["\u4fee\u6539 ",(0,c.jsx)(n.code,{children:"Name"}),", ",(0,c.jsx)(n.code,{children:"Program"}),", ",(0,c.jsx)(n.code,{children:"Arguments"})," \u4e09\u9879\u914d\u7f6e\uff0c\u5176\u4e2d ",(0,c.jsx)(n.code,{children:"Arguments"})," \u9700\u8981\u52a0\u4e0a ",(0,c.jsx)(n.code,{children:"-set_exit_status"})," \u53c2\u6570\uff0c\u5982\u56fe\u6240\u793a\uff1a"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:d(438696).A+"",width:"813",height:"565"})}),"\n",(0,c.jsxs)(n.ol,{start:"3",children:["\n",(0,c.jsxs)(n.li,{children:["\u4fdd\u5b58\u5373\u53ef\uff0c\u968f\u540e\u5728\u4ee3\u7801\u7f16\u5199\u4e2d\u6267\u884c\u4fdd\u5b58\u64cd\u4f5c\u65f6\u5c06\u4f1a\u81ea\u52a8\u89e6\u53d1 ",(0,c.jsx)(n.code,{children:"golint"})," \u5de5\u5177\u68c0\u6d4b\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"golangci-lint-\u7684\u914d\u7f6e\u53ef\u9009",children:[(0,c.jsx)(n.code,{children:"golangci-lint"})," \u7684\u914d\u7f6e(\u53ef\u9009)"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\xa0\u968f\u540e\u5728 ",(0,c.jsx)(n.code,{children:"Goland"})," \u7684 ",(0,c.jsx)(n.code,{children:"Tools"})," - ",(0,c.jsx)(n.code,{children:"File Watchers"})," \u914d\u7f6e\u4e0b\uff0c\u901a\u8fc7\u590d\u5236 ",(0,c.jsx)(n.code,{children:"go fmt"})," \u7684\u914d\u7f6e",(0,c.jsx)(n.img,{src:d(659743).A+"",width:"2784",height:"1750"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u4fee\u6539 ",(0,c.jsx)(n.code,{children:"Name"}),", ",(0,c.jsx)(n.code,{children:"Program"}),", ",(0,c.jsx)(n.code,{children:"Arguments"})," \u4e09\u9879\u914d\u7f6e\uff0c\u5176\u4e2d ",(0,c.jsx)(n.code,{children:"Arguments"})," \u9700\u8981\u52a0\u4e0a ",(0,c.jsx)(n.code,{children:"run $FileDir$"})," \u53c2\u6570\uff0c ",(0,c.jsx)(n.code,{children:"\u6ce8\u610f\uff1a"})," \u5982 `Advanced Options`\u7684\u9009\u9879\u53ef\u4ee5\u5728\u673a\u5668\u6bd4\u8f83\u6162\u7684\u65f6\u53d6\u6d88\u9009\u62e9\uff0c\u5982\u56fe\u6240\u793a\uff1a",(0,c.jsx)(n.img,{src:d(135972).A+"",width:"1620",height:"1656"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u4fdd\u5b58\u5373\u53ef\uff0c\u968f\u540e\u5728\u4ee3\u7801\u7f16\u5199\u4e2d\u6267\u884c\u4fdd\u5b58\u64cd\u4f5c\u65f6\u5c06\u4f1a\u81ea\u52a8\u89e6\u53d1 ",(0,c.jsx)(n.code,{children:"golangci-lint"})," \u5de5\u5177\u68c0\u6d4b\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"go Linter"})," \u63d2\u4ef6\u7ba1\u7406 ",(0,c.jsx)(n.code,{children:"golangci-lint"})," \u5de5\u5177\u7684\u914d\u7f6e\uff0c\u5982\u4e0b\u662f ",(0,c.jsx)(n.code,{children:"go Linter"})," \u7684\u5b89\u88c5\u4ee5\u53ca\u914d\u7f6e\u3002",(0,c.jsx)(n.img,{src:d(917979).A+"",width:"2784",height:"1750"}),(0,c.jsx)(n.img,{src:d(382028).A+"",width:"2784",height:"1750"})]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"ide\u4ee3\u7801\u98ce\u683c\u914d\u7f6e",children:"IDE\u4ee3\u7801\u98ce\u683c\u914d\u7f6e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.img,{src:d(399564).A+"",width:"2784",height:"1750"}),(0,c.jsx)(n.img,{src:d(262171).A+"",width:"2784",height:"1750"})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},917979:(e,n,d)=>{d.d(n,{A:()=>c});const c=d.p+"assets/images/0f0fbd2a3a937573cdc317bbe005a6cf-5cf2ce05a4ada2c0c3537b8abdac9825.png"},382028:(e,n,d)=>{d.d(n,{A:()=>c});const c=d.p+"assets/images/1c10390d9bfca56c0528f43f122b9ebd-84c53f0e33aa813541cb2c070fc9c803.png"},262171:(e,n,d)=>{d.d(n,{A:()=>c});const c=d.p+"assets/images/1f470b73547b12cd36ff1d4c7328f847-7c43d501be24bb6e9b7c9835bbbed936.png"},438696:(e,n,d)=>{d.d(n,{A:()=>c});const c=d.p+"assets/images/219fe697e559aa6980100557996686a0-598f4fd6a0c3e10e9acc08accf8bb21e.jpg"},576809:(e,n,d)=>{d.d(n,{A:()=>c});const c=d.p+"assets/images/23d9056527febe75f82dcc8117f086fd-74e5ed84bef90e39bbf8df220a9a001b.jpg"},659743:(e,n,d)=>{d.d(n,{A:()=>c});const c=d.p+"assets/images/267c777a8db90758dd8bad6013f60d7e-3541a302590fd6633c8491c8e48692e7.png"},135972:(e,n,d)=>{d.d(n,{A:()=>c});const c=d.p+"assets/images/5bf774ae9e6d123efa9010dd223a618a-628f5976480e07f27d96feb309f32ad4.png"},399564:(e,n,d)=>{d.d(n,{A:()=>c});const c=d.p+"assets/images/b63649f6d3ac9d3a9eaadb2c94d00cb8-8bc88cc0a33b4dd60ed67bb47e0ed9d0.png"},178423:(e,n,d)=>{d.d(n,{A:()=>c});const c=d.p+"assets/images/ba5f3276cff792caf62056ba0ee5987d-f03192da4890ef4ff5d496fb0dbabd0e.png"},427398:(e,n,d)=>{d.d(n,{A:()=>c});const c=d.p+"assets/images/beffdaf59725b7091d27c05db1cbef06-6b3b3b2b13f6ebdf22a3107a9a473318.jpg"},113786:(e,n,d)=>{d.d(n,{A:()=>c});const c=d.p+"assets/images/d6e625d79c63024347705acfc013463c-349bdc8cd5331d69c6626beec8a6e775.jpg"},28453:(e,n,d)=>{d.d(n,{R:()=>o,x:()=>l});var c=d(296540);const i={},s=c.createContext(i);function o(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);