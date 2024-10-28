"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[3720],{253079:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var l=t(474848),o=t(28453);const i={title:"HTTPClient-\u6587\u4ef6\u4e0a\u4f20",sidebar_position:2},r=void 0,s={id:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u6587\u4ef6\u4e0a\u4f20",title:"HTTPClient-\u6587\u4ef6\u4e0a\u4f20",description:"GF \u652f\u6301\u975e\u5e38\u65b9\u4fbf\u7684\u8868\u5355\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd\uff0c\u5e76\u4e14HTTP\u5ba2\u6237\u7aef\u5bf9\u4e0a\u4f20\u529f\u80fd\u8fdb\u884c\u4e86\u5fc5\u8981\u7684\u5c01\u88c5\u5e76\u6781\u5927\u7b80\u5316\u4e86\u4e0a\u4f20\u529f\u80fd\u8c03\u7528\u3002",source:"@site/versioned_docs/version-1.14.x/3-WEB\u670d\u52a1\u5f00\u53d1/8-HTTPClient/2-HTTPClient-\u6587\u4ef6\u4e0a\u4f20.md",sourceDirName:"3-WEB\u670d\u52a1\u5f00\u53d1/8-HTTPClient",slug:"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u6587\u4ef6\u4e0a\u4f20",permalink:"/docs/1.14.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u6587\u4ef6\u4e0a\u4f20",draft:!1,unlisted:!1,tags:[],version:"1.14.x",sidebarPosition:2,frontMatter:{title:"HTTPClient-\u6587\u4ef6\u4e0a\u4f20",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"HTTPClient-\u57fa\u672c\u4f7f\u7528",permalink:"/docs/1.14.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u57fa\u672c\u4f7f\u7528"},next:{title:"HTTPClient-\u81ea\u5b9a\u4e49Cookie",permalink:"/docs/1.14.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Cookie"}},d={},c=[{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:2},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:2},{value:"\u5355\u6587\u4ef6\u4e0a\u4f20",id:"\u5355\u6587\u4ef6\u4e0a\u4f20",level:3},{value:"\u591a\u6587\u4ef6\u4e0a\u4f20",id:"\u591a\u6587\u4ef6\u4e0a\u4f20",level:3},{value:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d\u79f0",id:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d\u79f0",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"GF"})," \u652f\u6301\u975e\u5e38\u65b9\u4fbf\u7684\u8868\u5355\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd\uff0c\u5e76\u4e14HTTP\u5ba2\u6237\u7aef\u5bf9\u4e0a\u4f20\u529f\u80fd\u8fdb\u884c\u4e86\u5fc5\u8981\u7684\u5c01\u88c5\u5e76\u6781\u5927\u7b80\u5316\u4e86\u4e0a\u4f20\u529f\u80fd\u8c03\u7528\u3002"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6ce8\u610f\u54e6\uff1a\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u53d7\u5230 ",(0,l.jsx)(n.code,{children:"ghttp.Server"})," \u7684 ",(0,l.jsx)(n.code,{children:"ClientMaxBodySize"})," \u914d\u7f6e\u5f71\u54cd\uff1a ",(0,l.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/net/ghttp#ServerConfig",children:"https://godoc.org/github.com/gogf/gf/net/ghttp#ServerConfig"})," \u9ed8\u8ba4\u652f\u6301\u7684\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u4e3a ",(0,l.jsx)(n.code,{children:"8MB"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u670d\u52a1\u7aef",children:"\u670d\u52a1\u7aef"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/gogf/gf/blob/master/.example/net/ghttp/client/upload/server.go",children:"https://github.com/gogf/gf/blob/master/.example/net/ghttp/client/upload/server.go"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/gogf/gf/frame/g"\n\t"github.com/gogf/gf/net/ghttp"\n)\n\n// Upload uploads files to /tmp .\nfunc Upload(r *ghttp.Request) {\n\tfiles := r.GetUploadFiles("upload-file")\n    names, err := files.Save("/tmp/")\n    if err != nil {\n\t\tr.Response.WriteExit(err)\n\t}\n\tr.Response.WriteExit("upload successfully: ", names)\n}\n\n// UploadShow shows uploading simgle file page.\nfunc UploadShow(r *ghttp.Request) {\n\tr.Response.Write(`\n    <html>\n    <head>\n        <title>GF Upload File Demo</title>\n    </head>\n        <body>\n            <form enctype="multipart/form-data" action="/upload" method="post">\n                <input type="file" name="upload-file" />\n                <input type="submit" value="upload" />\n            </form>\n        </body>\n    </html>\n    `)\n}\n\n// UploadShowBatch shows uploading multiple files page.\nfunc UploadShowBatch(r *ghttp.Request) {\n\tr.Response.Write(`\n    <html>\n    <head>\n        <title>GF Upload Files Demo</title>\n    </head>\n        <body>\n            <form enctype="multipart/form-data" action="/upload" method="post">\n                <input type="file" name="upload-file" />\n                <input type="file" name="upload-file" />\n                <input type="submit" value="upload" />\n            </form>\n        </body>\n    </html>\n    `)\n}\n\nfunc main() {\n\ts := g.Server()\n\ts.Group("/upload", func(group *ghttp.RouterGroup) {\n\t\tgroup.POST("/", Upload)\n\t\tgroup.ALL("/show", UploadShow)\n\t\tgroup.ALL("/batch", UploadShowBatch)\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8be5\u670d\u52a1\u7aef\u63d0\u4f9b\u4e863\u4e2a\u63a5\u53e3\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"http://127.0.0.1:8199/upload/show",children:"http://127.0.0.1:8199/upload/show"})," \u5730\u5740\u7528\u4e8e\u5c55\u793a\u5355\u4e2a\u6587\u4ef6\u4e0a\u4f20\u7684H5\u9875\u9762\uff1b"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"http://127.0.0.1:8199/upload/batch",children:"http://127.0.0.1:8199/upload/batch"})," \u5730\u5740\u7528\u4e8e\u5c55\u793a\u591a\u4e2a\u6587\u4ef6\u4e0a\u4f20\u7684H5\u9875\u9762\uff1b"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"http://127.0.0.1:8199/upload",children:"http://127.0.0.1:8199/upload"})," \u63a5\u53e3\u7528\u4e8e\u771f\u5b9e\u7684\u8868\u5355\u6587\u4ef6\u4e0a\u4f20\uff0c\u8be5\u63a5\u53e3\u540c\u65f6\u652f\u6301\u5355\u4e2a\u6587\u4ef6\u6216\u8005\u591a\u4e2a\u6587\u4ef6\u4e0a\u4f20\uff1b"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4eec\u8fd9\u91cc\u8bbf\u95ee ",(0,l.jsx)(n.a,{href:"http://127.0.0.1:8199/upload/show",children:"http://127.0.0.1:8199/upload/show"})," \u9009\u62e9\u9700\u8981\u4e0a\u4f20\u7684\u5355\u4e2a\u6587\u4ef6\uff0c\u63d0\u4ea4\u4e4b\u540e\u53ef\u4ee5\u770b\u5230\u6587\u4ef6\u4e0a\u4f20\u6210\u529f\u5230\u670d\u52a1\u5668\u4e0a\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5173\u952e\u4ee3\u7801\u8bf4\u660e"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6211\u4eec\u5728\u670d\u52a1\u7aef\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"r.GetUploadFiles"})," \u65b9\u6cd5\u83b7\u5f97\u4e0a\u4f20\u7684\u6240\u6709\u6587\u4ef6\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"r.GetUploadFile"})," \u83b7\u53d6\u5355\u4e2a\u4e0a\u4f20\u7684\u6587\u4ef6\u5bf9\u8c61\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5728 ",(0,l.jsx)(n.code,{children:'r.GetUploadFiles("upload-file")'})," \u4e2d\u7684\u53c2\u6570 ",(0,l.jsx)(n.code,{children:'"upload-file"'})," \u4e3a\u672c\u793a\u4f8b\u4e2d\u5ba2\u6237\u7aef\u4e0a\u4f20\u65f6\u7684\u8868\u5355\u6587\u4ef6\u57df\u540d\u79f0\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u524d\u540e\u7aef\u7ea6\u5b9a\u5728\u5ba2\u6237\u7aef\u4e2d\u5b9a\u4e49\uff0c\u4ee5\u65b9\u4fbf\u670d\u52a1\u7aef\u63a5\u6536\u8868\u5355\u6587\u4ef6\u57df\u53c2\u6570\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"files.Save"})," \u53ef\u4ee5\u5c06\u4e0a\u4f20\u7684\u591a\u4e2a\u6587\u4ef6\u65b9\u4fbf\u5730\u4fdd\u5b58\u5230\u6307\u5b9a\u7684\u76ee\u5f55\u4e0b\uff0c\u5e76\u8fd4\u56de\u4fdd\u5b58\u6210\u529f\u7684\u6587\u4ef6\u540d\u3002\u5982\u679c\u662f\u6279\u91cf\u4fdd\u5b58\uff0c\u53ea\u8981\u4efb\u610f\u4e00\u4e2a\u6587\u4ef6\u4fdd\u5b58\u5931\u8d25\uff0c\u90fd\u5c06\u4f1a\u7acb\u5373\u8fd4\u56de\u9519\u8bef\u3002\u6b64\u5916\uff0c ",(0,l.jsx)(n.code,{children:"Save"})," \u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u652f\u6301\u968f\u673a\u81ea\u52a8\u547d\u540d\u4e0a\u4f20\u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:'group.POST("/", Upload)'})," \u6ce8\u518c\u7684\u8def\u7531\u4ec5\u652f\u6301 ",(0,l.jsx)(n.code,{children:"POST"})," \u65b9\u5f0f\u8bbf\u95ee\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5ba2\u6237\u7aef",children:"\u5ba2\u6237\u7aef"}),"\n",(0,l.jsx)(n.h3,{id:"\u5355\u6587\u4ef6\u4e0a\u4f20",children:"\u5355\u6587\u4ef6\u4e0a\u4f20"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/gogf/gf/blob/master/.example/net/ghttp/client/upload/client.go",children:"https://github.com/gogf/gf/blob/master/.example/net/ghttp/client/upload/client.go"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/net/ghttp"\n    "github.com/gogf/gf/os/glog"\n)\n\nfunc main() {\n    path := "/home/john/Workspace/Go/github.com/gogf/gf/version.go"\n    r, e := ghttp.Post("http://127.0.0.1:8199/upload", "upload-file=@file:"+path)\n    if e != nil {\n        glog.Error(e)\n    } else {\n        fmt.Println(string(r.ReadAll()))\n        r.Close()\n    }\n}\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u6ce8\u610f\u5230\u4e86\u5417\uff1f\u6587\u4ef6\u4e0a\u4f20\u53c2\u6570\u683c\u5f0f\u4f7f\u7528\u4e86 ",(0,l.jsx)(n.code,{children:"\u53c2\u6570\u540d=@file:\u6587\u4ef6\u8def\u5f84"})," \uff0cHTTP\u5ba2\u6237\u7aef\u5c06\u4f1a\u81ea\u52a8\u89e3\u6790 ",(0,l.jsx)(n.strong,{children:"\u6587\u4ef6\u8def\u5f84"})," \u5bf9\u5e94\u7684\u6587\u4ef6\u5185\u5bb9\u5e76\u8bfb\u53d6\u63d0\u4ea4\u7ed9\u670d\u52a1\u7aef\u3002\u539f\u672c\u590d\u6742\u7684\u6587\u4ef6\u4e0a\u4f20\u64cd\u4f5c\u88ab ",(0,l.jsx)(n.code,{children:"gf"})," \u8fdb\u884c\u4e86\u5c01\u88c5\u5904\u7406\uff0c\u7528\u6237\u53ea\u9700\u8981\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"@file:+\u6587\u4ef6\u8def\u5f84"})," \u6765\u6784\u6210\u53c2\u6570\u503c\u5373\u53ef\u3002\u5176\u4e2d\uff0c ",(0,l.jsx)(n.code,{children:"\u6587\u4ef6\u8def\u5f84"})," \u8bf7\u4f7f\u7528\u672c\u5730\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u9996\u5148\u8fd0\u884c\u670d\u52a1\u7aef\u7a0b\u5e8f\u4e4b\u540e\uff0c\u6211\u4eec\u518d\u8fd0\u884c\u8fd9\u4e2a\u4e0a\u4f20\u5ba2\u6237\u7aef\uff08\u6ce8\u610f\u4fee\u6539\u4e0a\u4f20\u7684\u6587\u4ef6\u8def\u5f84\u4e3a\u672c\u5730\u771f\u5b9e\u6587\u4ef6\u8def\u5f84\uff09\uff0c\u6267\u884c\u540e\u53ef\u4ee5\u770b\u5230\u6587\u4ef6\u88ab\u6210\u529f\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u6307\u5b9a\u8def\u5f84\u4e0b\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u591a\u6587\u4ef6\u4e0a\u4f20",children:"\u591a\u6587\u4ef6\u4e0a\u4f20"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/gogf/gf/blob/master/.example/net/ghttp/client/upload-batch/client.go",children:"https://github.com/gogf/gf/blob/master/.example/net/ghttp/client/upload-batch/client.go"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/net/ghttp"\n\t"github.com/gogf/gf/os/glog"\n)\n\nfunc main() {\n\tpath1 := "/Users/john/Pictures/logo1.png"\n\tpath2 := "/Users/john/Pictures/logo2.png"\n\tr, e := ghttp.Post(\n\t\t"http://127.0.0.1:8199/upload",\n\t\tfmt.Sprintf(`upload-file=@file:%s&upload-file=@file:%s`, path1, path2),\n\t)\n\tif e != nil {\n\t\tglog.Error(e)\n\t} else {\n\t\tfmt.Println(string(r.ReadAll()))\n\t\tr.Close()\n\t}\n}\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u591a\u4e2a\u6587\u4ef6\u4e0a\u4f20\u63d0\u4ea4\u53c2\u6570\u683c\u5f0f\u4e3a ",(0,l.jsx)(n.code,{children:"\u53c2\u6570\u540d=@file:xxx&\u53c2\u6570\u540d=@file:xxx..."}),"\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"\u53c2\u6570\u540d[]=@file:xxx&\u53c2\u6570\u540d[]=@file:xxx..."})," \u7684\u5f62\u5f0f\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u9996\u5148\u8fd0\u884c\u670d\u52a1\u7aef\u7a0b\u5e8f\u4e4b\u540e\uff0c\u6211\u4eec\u518d\u8fd0\u884c\u8fd9\u4e2a\u4e0a\u4f20\u5ba2\u6237\u7aef\uff08\u6ce8\u610f\u4fee\u6539\u4e0a\u4f20\u7684\u6587\u4ef6\u8def\u5f84\u4e3a\u672c\u5730\u771f\u5b9e\u6587\u4ef6\u8def\u5f84\uff09\uff0c\u6267\u884c\u540e\u53ef\u4ee5\u770b\u5230\u6587\u4ef6\u88ab\u6210\u529f\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u6307\u5b9a\u8def\u5f84\u4e0b\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d\u79f0",children:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d\u79f0"}),"\n",(0,l.jsxs)(n.p,{children:["\u5f88\u7b80\u5355\uff0c\u4fee\u6539 ",(0,l.jsx)(n.code,{children:"FileName"})," \u5c5e\u6027\u5373\u53ef\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'s := g.Server()\ns.BindHandler("/upload", func(r *ghttp.Request) {\n    file := r.GetUploadFile("TestFile")\n    if file == nil {\n        r.Response.Write("empty file")\n        return\n    }\n    file.Filename = "MyCustomFileName.txt"\n    fileName, err := file.Save(gfile.TempDir())\n    if err != nil {\n        r.Response.Write(err)\n        return\n    }\n    r.Response.Write(fileName)\n})\ns.SetPort(8999)\ns.Run()\n\n'})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var l=t(296540);const o={},i=l.createContext(o);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);