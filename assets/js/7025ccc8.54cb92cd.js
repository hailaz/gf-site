"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[3306],{678419:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=r(474848),c=r(28453);const t={title:"gparser (\u901a\u7528\u7f16\u7801\u89e3\u6790)",sidebar_position:1},i=void 0,l={id:"\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gparser -\u901a\u7528\u7f16\u7801\u89e3\u6790",title:"gparser (\u901a\u7528\u7f16\u7801\u89e3\u6790)",description:"gf \u6846\u67b6\u9488\u5bf9\u5e38\u7528\u7684\u6570\u636e\u683c\u5f0f\u7f16\u7801\u89e3\u6790\uff0c\u63d0\u4f9b\u4e86\u975e\u5e38\u5f3a\u5927\u7075\u6d3b\u7684\u529f\u80fd\uff0c\u7531 gparser \u6a21\u5757\u63d0\u4f9b\uff0c \u652f\u6301Go\u53d8\u91cf(interface{})\u3001Struct\u3001JSON\u3001XML\u3001YAML/YML\u3001TOML\u6570\u636e\u683c\u5f0f\u4e4b\u95f4\u7684\u76f8\u4e92\u8f6c\u6362\uff0c\u652f\u6301\u6309\u7167\u5c42\u7ea7\u8fdb\u884c\u6570\u636e\u68c0\u7d22\u8bbf\u95ee\u3001\u652f\u6301\u8fd0\u884c\u65f6\u52a8\u6001\u65b0\u589e/\u4fee\u6539/\u5220\u9664\u5c42\u7ea7\u53d8\u91cf(\u5e76\u53d1\u5b89\u5168)\u7b49\u7279\u6027\u3002 gparser \u5305\u4f7f\u5f97\u5bf9\u4e8e\u672a\u77e5\u6570\u636e\u7ed3\u6784\u3001\u591a\u7ef4\u6570\u7ec4\u7ed3\u6784\u7684\u8bbf\u95ee\u3001\u64cd\u4f5c\u53d8\u5f97\u5f02\u5e38\u7684\u7b80\u4fbf\u3002",source:"@site/versioned_docs/version-1.14.x/2-\u6a21\u5757\u5217\u8868/2-\u7f16\u7801\u89e3\u7801/1-gparser -\u901a\u7528\u7f16\u7801\u89e3\u6790.md",sourceDirName:"2-\u6a21\u5757\u5217\u8868/2-\u7f16\u7801\u89e3\u7801",slug:"/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gparser -\u901a\u7528\u7f16\u7801\u89e3\u6790",permalink:"/docs/1.14.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gparser -\u901a\u7528\u7f16\u7801\u89e3\u6790",draft:!1,unlisted:!1,tags:[],version:"1.14.x",sidebarPosition:1,frontMatter:{title:"gparser (\u901a\u7528\u7f16\u7801\u89e3\u6790)",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"gjson-\u6570\u636e\u683c\u5f0f\u8f6c\u6362",permalink:"/docs/1.14.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/gjson-\u6570\u636e\u683c\u5f0f\u8f6c\u6362"},next:{title:"gbinary (\u4e8c\u8fdb\u5236\u7f16\u89e3\u7801)",permalink:"/docs/1.14.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gbinary -\u4e8c\u8fdb\u5236\u7f16\u89e3\u7801"}},o={},d=[{value:"\u6570\u636e\u5c42\u7ea7\u68c0\u7d22",id:"\u6570\u636e\u5c42\u7ea7\u68c0\u7d22",level:3},{value:"\u952e\u540d\u672c\u8eab\u5e26\u6709\u5c42\u7ea7\u7b26\u53f7\u201d.\u201c\u7684\u60c5\u51b5",id:"\u952e\u540d\u672c\u8eab\u5e26\u6709\u5c42\u7ea7\u7b26\u53f7\u7684\u60c5\u51b5",level:3},{value:"\u8fd0\u884c\u65f6\u52a8\u6001\u4fee\u6539\u6570\u636e",id:"\u8fd0\u884c\u65f6\u52a8\u6001\u4fee\u6539\u6570\u636e",level:3},{value:"\u8fd0\u884c\u65f6\u52a8\u6001\u5220\u9664\u53d8\u91cf",id:"\u8fd0\u884c\u65f6\u52a8\u6001\u5220\u9664\u53d8\u91cf",level:3},{value:"\u52a8\u6001\u751f\u6210\u6307\u5b9a\u683c\u5f0f\u7684\u7f16\u7801\u6570\u636e",id:"\u52a8\u6001\u751f\u6210\u6307\u5b9a\u683c\u5f0f\u7684\u7f16\u7801\u6570\u636e",level:3},{value:"\u53d8\u91cf\u4e0estruct\u76f8\u4e92\u8f6c\u6362",id:"\u53d8\u91cf\u4e0estruct\u76f8\u4e92\u8f6c\u6362",level:3},{value:"\u6570\u636e\u683c\u5f0f\u76f8\u4e92\u8f6c\u6362",id:"\u6570\u636e\u683c\u5f0f\u76f8\u4e92\u8f6c\u6362",level:3}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gf"})," \u6846\u67b6\u9488\u5bf9\u5e38\u7528\u7684\u6570\u636e\u683c\u5f0f\u7f16\u7801\u89e3\u6790\uff0c\u63d0\u4f9b\u4e86\u975e\u5e38\u5f3a\u5927\u7075\u6d3b\u7684\u529f\u80fd\uff0c\u7531 ",(0,s.jsx)(e.code,{children:"gparser"})," \u6a21\u5757\u63d0\u4f9b\uff0c ",(0,s.jsxs)(e.strong,{children:["\u652f\u6301Go\u53d8\u91cf(interface",")\u3001Struct\u3001JSON\u3001XML\u3001YAML/YML\u3001TOML\u6570\u636e\u683c\u5f0f\u4e4b\u95f4\u7684\u76f8\u4e92\u8f6c\u6362"]}),"\uff0c\u652f\u6301\u6309\u7167\u5c42\u7ea7\u8fdb\u884c\u6570\u636e\u68c0\u7d22\u8bbf\u95ee\u3001\u652f\u6301\u8fd0\u884c\u65f6\u52a8\u6001\u65b0\u589e/\u4fee\u6539/\u5220\u9664\u5c42\u7ea7\u53d8\u91cf(\u5e76\u53d1\u5b89\u5168)\u7b49\u7279\u6027\u3002 ",(0,s.jsx)(e.code,{children:"gparser"})," \u5305\u4f7f\u5f97\u5bf9\u4e8e\u672a\u77e5\u6570\u636e\u7ed3\u6784\u3001\u591a\u7ef4\u6570\u7ec4\u7ed3\u6784\u7684\u8bbf\u95ee\u3001\u64cd\u4f5c\u53d8\u5f97\u5f02\u5e38\u7684\u7b80\u4fbf\u3002"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u9700\u8981\u8bf4\u660e\u7684\u662f\uff0c ",(0,s.jsx)(e.code,{children:"gparser"})," \u6a21\u5757\u5e95\u5c42\u57fa\u4e8e ",(0,s.jsx)(e.code,{children:"gjson"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u7ee7\u627f\u4e86 ",(0,s.jsx)(e.code,{children:"gjson"})," \u5305\u6240\u6709\u7684\u7279\u6027\u3002\u53ef\u4ee5\u5c06 ",(0,s.jsx)(e.code,{children:"gparser"})," \u6a21\u5757\u5f53\u505a ",(0,s.jsx)(e.code,{children:"gjson"})," \u6a21\u5757\u7684\u4e00\u4e2a\u522b\u540d\u6a21\u5757\uff0c\u9632\u6b62 ",(0,s.jsx)(e.code,{children:"json"})," \u8fd9\u4e2a\u540d\u79f0\u5bf9\u5f00\u53d1\u8005\u9020\u6210\u7684\u6df7\u6dc6\u3002\u5177\u4f53\u8bf7\u53c2\u8003 \xa0",(0,s.jsx)(e.a,{href:"output/goframe-v1.14-md/%E6%A8%A1%E5%9D%97%E5%88%97%E8%A1%A8/%E7%BC%96%E7%A0%81%E8%A7%A3%E7%A0%81/gjson%20-%E6%95%B0%E6%8D%AE%E5%8A%A8%E6%80%81%E7%BC%96%E8%A7%A3%E7%A0%81",children:"gjson (\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801)"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/encoding/gparser"\n\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://godoc.org/github.com/gogf/gf/encoding/gparser",children:"https://godoc.org/github.com/gogf/gf/encoding/gparser"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Load"})," \u4e0e ",(0,s.jsx)(e.code,{children:"LoadContent"})," \u65b9\u6cd5\u652f\u6301\u6839\u636e\u6587\u4ef6\u53ca\u5185\u5bb9\uff0c\u751f\u6210 ",(0,s.jsx)(e.code,{children:"gparser.Parser"})," \u5bf9\u8c61\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"New"})," \u65b9\u6cd5\u652f\u6301\u751f\u6210\u4e00\u4e2a\u7a7a\u7684 ",(0,s.jsx)(e.code,{children:"gparser.Parser"})," \u5bf9\u8c61\uff0c\u5e38\u7528\u7528\u4e8e\u52a8\u6001\u6570\u636e\u751f\u6210\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"New"})," \u65b9\u6cd5\u540c\u65f6\u4e5f\u652f\u6301\u6309\u7167\u7ed9\u5b9a\u7684\u4efb\u610fGo\u53d8\u91cf\u751f\u6210\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"gparser.Parser"})," \u5bf9\u8c61\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Get*"})," \u76f8\u5173\u65b9\u6cd5\u652f\u6301\u6309\u7167\u5c42\u7ea7\u68c0\u7d22\u6570\u636e\uff0c ",(0,s.jsx)(e.code,{children:"pattern"}),' \u53c2\u6570\u4e2d\u4f7f\u7528\u82f1\u6587" ',(0,s.jsx)(e.code,{children:"."}),'"\u53f7\u533a\u5206\u5c42\u7ea7\u5173\u7cfb\uff1b']}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Set"})," \u65b9\u6cd5\u652f\u6301\u6309\u7167\u5c42\u7ea7\u65b0\u589e/\u4fee\u6539\uff0c\u7ed9\u5b9a\u7684 ",(0,s.jsx)(e.strong,{children:"\u53d8\u91cf\u7c7b\u578b\u652f\u6301\u4efb\u610f\u7c7b\u578b"}),"\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Remove"})," \u65b9\u6cd5\u652f\u6301\u6309\u7167\u5c42\u7ea7\u5220\u9664\u53d8\u91cf\uff0c\u53ea\u9700\u8981\u7ed9\u5b9a ",(0,s.jsx)(e.code,{children:"pattern"})," \u5c42\u7ea7\u68c0\u7d22\u53c2\u6570\u5373\u53ef\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"To*"})," \u76f8\u5173\u65b9\u6cd5\u652f\u6301\u5c06 ",(0,s.jsx)(e.code,{children:"gparser.Parser"})," \u5bf9\u8c61\u751f\u6210\u4e3a\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f\u5b57\u7b26\u4e32\uff1b"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"VarTo*"})," \u76f8\u5173\u65b9\u6cd5\u652f\u6301\u5c06 ",(0,s.jsx)(e.strong,{children:"\u4efb\u610f\u7684Go\u53d8\u91cf"})," \u76f4\u63a5\u8f6c\u6362\u4e3a\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f\u5b57\u7b26\u4e32\uff1b"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u6570\u636e\u5c42\u7ea7\u68c0\u7d22",children:"\u6570\u636e\u5c42\u7ea7\u68c0\u7d22"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u793a\u4f8b1\uff0c\u8bfb\u53d6JSON"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'data :=\n    `{\n        "users" : {\n                "count" : 100,\n                "list"  : [\n                    {"name" : "Ming", "score" : 60},\n                    {"name" : "John", "score" : 99.5}\n                ]\n        }\n    }`\n\nif p, e := gparser.LoadContent([]byte(data), "json"); e != nil {\n    glog.Error(e)\n} else {\n    fmt.Println("John Score:", p.GetFloat32("users.list.1.score"))\n}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u82f1\u6587 ",(0,s.jsx)(e.code,{children:"."})," \u53f7\u5b9e\u73b0\u975e\u5e38\u65b9\u4fbf\u7684\u5c42\u7ea7\u8bbf\u95ee\uff0c\u9488\u5bf9\u4e8e\u6570\u7ec4\u5217\u8868\uff0c\u7d22\u5f15\u4ece ",(0,s.jsx)(e.code,{children:"0"})," \u5f00\u59cb\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"."})," \u53f7\u8bbf\u95ee\u5176\u5bf9\u5e94\u7684\u7d22\u5f15\u9879\u6570\u636e\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u793a\u4f8b2\uff0c\u8bfb\u53d6XML"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'data :=\n    `<?xml version="1.0" encoding="UTF-8"?>\n     <note>\n         <to>Tove</to>\n         <from>Jani</from>\n         <heading>Reminder</heading>\n         <body>Don\'t forget me this weekend!</body>\n     </note>`\n\nif p, e := gparser.LoadContent([]byte(data), "xml"); e != nil {\n    glog.Error(e)\n} else {\n    fmt.Println("Heading:", p.GetString("note.heading"))\n}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"LoadContent"})," \u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6307\u5b9a\u5185\u5bb9\u7684\u6570\u636e\u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3a( ",(0,s.jsx)(e.code,{children:"json,xml,yaml/yml,toml"}),")\u3002\u5176\u4ed6\u4e24\u79cd\u6570\u636e\u7c7b\u578b\u53ef\u81ea\u884c\u6d4b\u8bd5\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u952e\u540d\u672c\u8eab\u5e26\u6709\u5c42\u7ea7\u7b26\u53f7\u7684\u60c5\u51b5",children:"\u952e\u540d\u672c\u8eab\u5e26\u6709\u5c42\u7ea7\u7b26\u53f7\u201d.\u201c\u7684\u60c5\u51b5"}),"\n",(0,s.jsx)(e.p,{children:"\u5f53\u952e\u540d\u548c\u5c42\u7ea7\u5728\u8bbf\u95ee\u65f6\u5b58\u5728pattern\u540c\u540d\u7684\u60c5\u51b5\uff0c\u5f53\u7136\u8fd9\u5e76\u4e0d\u662f\u4ec0\u4e48\u95ee\u9898\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'data :=\n    `{\n        "users" : {\n            "count" : 100\n        },\n        "users.count" : 101\n    }`\nif p, e := gparser.LoadContent([]byte(data), "json"); e != nil {\n    glog.Error(e)\n} else {\n    p.SetViolenceCheck(true)\n    fmt.Println("Users Count:", p.Get("users.count"))\n}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd0\u884c\u4e4b\u540e\u6253\u5370\u51fa\u7684\u7ed3\u679c\u4e3a ",(0,s.jsx)(e.code,{children:"101"}),"\u3002\u5f53\u952e\u540d\u5b58\u5728\u201d.\u201c\u53f7\u65f6\uff0c\u68c0\u7d22\u4f18\u5148\u7ea7\uff1a\u952e\u540d->\u5c42\u7ea7\uff0c\u56e0\u6b64\u5e76\u4e0d\u4f1a\u5f15\u8d77\u6b67\u4e49\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u518d\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'data :=\n    `{\n        "users" : {\n            "count" : {\n                "type1" : 1,\n                "type2" : 2\n            },\n            "count.type1" : 100\n        }\n    }`\nif p, e := gparser.LoadContent([]byte(data), "json"); e != nil {\n    glog.Error(e)\n} else {\n    p.SetViolenceCheck(true)\n    fmt.Println("Users Count:", p.Get("users.count.type1"))\n    fmt.Println("Users Count:", p.Get("users.count.type2"))\n}\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-undefined",children:"100\n2\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u770b\u5230\u4e86\u4e48\uff0c ",(0,s.jsx)(e.code,{children:"gparser"})," \u4f1a\u6309\u7167\u7ed9\u5b9a ",(0,s.jsx)(e.code,{children:"pattern"})," \u5bf9\u5c42\u7ea7\u8fdb\u884c\u81ea\u52a8\u63a2\u6d4b\uff0c\u68c0\u7d22\u65f6\u6309\u7167\u952e\u540d\u4f18\u5148\u7684\u539f\u5219\u8fdb\u884c\u5339\u914d\uff0c\u5e76\u4e0d\u4f1a\u51fa\u73b0\u6b67\u4e49\u51b2\u7a81\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u8fd0\u884c\u65f6\u52a8\u6001\u4fee\u6539\u6570\u636e",children:"\u8fd0\u884c\u65f6\u52a8\u6001\u4fee\u6539\u6570\u636e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'data :=\n    `{\n        "users" : {\n            "count" : 100\n        }\n    }`\nif p, e := gparser.LoadContent([]byte(data), "json"); e != nil {\n    glog.Error(e)\n} else {\n    p.Set("users.count",  2)\n    p.Set("users.list",  []string{"John", "\u5c0f\u660e"})\n    c, _ := p.ToJson()\n    fmt.Println(string(c))\n}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u4fee\u6539 ",(0,s.jsx)(e.code,{children:"count"})," \u4e3a ",(0,s.jsx)(e.code,{children:"2"}),"\uff0c\u5e76\u5728 ",(0,s.jsx)(e.code,{children:"users"})," \u8282\u70b9\u4e0b\u65b0\u589e\u589e\u52a0 ",(0,s.jsx)(e.code,{children:"list"})," \u8282\u70b9\uff0c\u8282\u70b9\u7c7b\u578b\u4e3a\u6570\u7ec4\u3002 \u6267\u884c\u540e\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{"users":{"count":2,"list":["John","\u5c0f\u660e"]}}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gparser"})," \u5305\u7684\u6570\u636e\u8fd0\u884c\u65f6\u4fee\u6539\u7279\u6027\u975e\u5e38\u5f3a\u5927\uff0c\u5728\u8be5\u7279\u6027\u7684\u652f\u6301\u4e0b\uff0c\u5404\u79cd\u6570\u636e\u7ed3\u6784\u7684\u7f16\u7801/\u89e3\u6790\u663e\u5f97\u5f02\u5e38\u7684\u7075\u6d3b\u65b9\u4fbf\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u8fd0\u884c\u65f6\u52a8\u6001\u5220\u9664\u53d8\u91cf",children:"\u8fd0\u884c\u65f6\u52a8\u6001\u5220\u9664\u53d8\u91cf"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e2a\u5220\u9664\u53d8\u91cf\u7684\u4f8b\u5b50\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'data :=\n    `<?xml version="1.0" encoding="UTF-8"?>\n     <article>\n         <count>10</count>\n         <list><title>gf article1</title><content>gf content1</content></list>\n         <list><title>gf article2</title><content>gf content2</content></list>\n         <list><title>gf article3</title><content>gf content3</content></list>\n     </article>`\nif p, e := gparser.LoadContent([]byte(data), "xml"); e != nil {\n    glog.Error(e)\n} else {\n    p.Remove("article.list.0")\n    c, _ := p.ToJson()\n    fmt.Println(string(c))\n}\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0a\u7a0b\u5e8f\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{"article":{"count":"10","list":[{"content":"gf content2","title":"gf article2"},{"content":"gf content3","title":"gf article3"}]}}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"Remove"})," \u65b9\u6cd5\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u6839\u636e ",(0,s.jsx)(e.code,{children:"pattern"})," \u53c2\u6570\u52a8\u6001\u5220\u9664\u53d8\u91cf\u3002\u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5220\u9664\u4e86 ",(0,s.jsx)(e.code,{children:"article.list"})," \u6570\u7ec4\u7684\u7d22\u5f15 ",(0,s.jsx)(e.code,{children:"0"})," \u6570\u636e\u9879\uff0c\u5e76\u5c06 ",(0,s.jsx)(e.code,{children:"XML"})," \u8f6c\u6362\u4e3a ",(0,s.jsx)(e.code,{children:"JSON"})," \u6570\u636e\u683c\u5f0f\u8fd4\u56de\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u52a8\u6001\u751f\u6210\u6307\u5b9a\u683c\u5f0f\u7684\u7f16\u7801\u6570\u636e",children:"\u52a8\u6001\u751f\u6210\u6307\u5b9a\u683c\u5f0f\u7684\u7f16\u7801\u6570\u636e"}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u6765\u52a8\u6001\u751f\u6210\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"XML"}),"\uff0c\u5148\u6765\u4e00\u4e2a\u7b80\u5355\u4e00\u70b9\u7684\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'p := gparser.New(nil)\np.Set("name",   "john")\np.Set("age",    18)\np.Set("scores", map[string]int{\n    "\u8bed\u6587" : 100,\n    "\u6570\u5b66" : 100,\n    "\u82f1\u8bed" : 100,\n})\nc, _ := p.ToXmlIndent("simple-xml")\nfmt.Println(string(c))\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:"<simple-xml>\n    <age>18</age>\n    <name>john</name>\n    <scores>\n        <\u6570\u5b66>100</\u6570\u5b66>\n        <\u82f1\u8bed>100</\u82f1\u8bed>\n        <\u8bed\u6587>100</\u8bed\u6587>\n    </scores>\n</simple-xml>\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u76f4\u63a5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"Set"})," \u65b9\u5f0f\u4fbf\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"XML"})," \u6570\u636e\u683c\u5f0f\uff0c\u6839\u672c\u5c31\u4e0d\u9700\u8981 ",(0,s.jsx)(e.code,{children:"struct"})," \u6709\u6728\u6709\uff1f\uff01\u60f3\u8981 ",(0,s.jsx)(e.code,{children:"struct"}),"\uff1f\u5f53\u7136\u4e5f\u53ef\u4ee5\uff0c\u8bf7\u770b\u4e0b\u9762\u7684\u793a\u4f8b\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u53d8\u91cf\u4e0estruct\u76f8\u4e92\u8f6c\u6362",children:"\u53d8\u91cf\u4e0estruct\u76f8\u4e92\u8f6c\u6362"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:["\u793a\u4f8b1\uff0c ",(0,s.jsx)(e.code,{children:"struct"})," \u8f6c\u6362\u4e3a ",(0,s.jsx)(e.code,{children:"gparser.Parser"})," \u5bf9\u8c61\uff0c\u5e76\u8f6c\u6362\u8f93\u51fa\u4e3a ",(0,s.jsx)(e.code,{children:"JSON"})," \u683c\u5f0f"]})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'type Order struct {\n    Id    int      `json:"id"`\n    Price float32  `json:"price"`\n}\np := gparser.New(nil)\np.Set("orders.list.0", Order{1, 100})\np.Set("orders.list.1", Order{2, 666})\np.Set("orders.list.2", Order{3, 999.99})\nfmt.Println("Order 1 Price:", p.Get("orders.list.1.price"))\nc, _ := p.ToJson()\nfmt.Println(string(c))\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-undefined",children:'Order 1 Price: 666\n{"orders":{"list":{"0":{"id":1,"price":100},"1":{"id":2,"price":666},"2":{"id":3,"price":999.99}}}}\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u600e\u4e48\u6837\uff0c\u6709\u6ca1\u6709\u89c9\u5f97\u5f886\uff1f"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f46\u662f\u9488\u5bf9\u4e8e ",(0,s.jsx)(e.code,{children:"struct"})," \u5904\u7406\uff0c\u8fd9\u91cc\u6709\u4e00\u70b9\u9700\u8981\u7279\u522b\u8bf4\u660e\u7684\u662f\uff0c\u5982\u679c ",(0,s.jsx)(e.code,{children:"struct"})," \u4e2d\u7684\u53d8\u91cf\u4e0d\u5bf9\u5916\u516c\u5f00\uff0c\u90a3\u4e48\u8be5\u53d8\u91cf\u540c\u65f6\u4e5f\u4e0d\u80fd\u88ab ",(0,s.jsx)(e.code,{children:"gparser"})," \u901a\u8fc7\u5c42\u7ea7\u68c0\u7d22\u65b9\u5f0f\u8bbf\u95ee\u5230\u3002\u7531\u4e8e ",(0,s.jsx)(e.code,{children:"gparser"})," \u7684\u5e95\u5c42\u6570\u636e\u7ed3\u6784\u91c7\u7528\u4e86 ",(0,s.jsx)(e.code,{children:"json"})," \u683c\u5f0f\uff0c\u5982\u679c ",(0,s.jsx)(e.code,{children:"struct"})," \u540c\u65f6\u5b9a\u4e49\u4e86 ",(0,s.jsx)(e.code,{children:"json tag"}),"\uff0c\u90a3\u4e48\u5c42\u7ea7\u68c0\u7d22\u5c06\u4f1a\u6309\u7167 ",(0,s.jsx)(e.code,{children:"json tag"})," \u8fdb\u884c\u68c0\u7d22\u8bbf\u95ee\uff0c\u4e0d\u652f\u6301 ",(0,s.jsx)(e.code,{children:"struct"})," \u7684\u5176\u4ed6 ",(0,s.jsx)(e.code,{children:"tag"})," \u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:["\u793a\u4f8b2\uff0c\u53d8\u91cf\u8f6c\u6362\u4e3a ",(0,s.jsx)(e.code,{children:"struct"})," \u5bf9\u8c61"]})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'type Info struct {\n    Name string\n    Url  string\n}\no := Info{}\np := gparser.New(map[string]string {\n    "Name" : "gf",\n    "Url"  : "https://gitee.com/johng",\n})\np.ToStruct(&o)\nfmt.Println("Name:", o.Name)\nfmt.Println("Url :", o.Url)\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"Name: gf\nUrl : https://gitee.com/johng\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"gparser.VarToStruct"})," \u65b9\u6cd5\u6765\u8fdb\u884c\u76f4\u63a5\u8f6c\u6362\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u6570\u636e\u683c\u5f0f\u76f8\u4e92\u8f6c\u6362",children:"\u6570\u636e\u683c\u5f0f\u76f8\u4e92\u8f6c\u6362"}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u4e8e\u53ea\u662f\u6f14\u793a\u6570\u636e\u683c\u5f0f\u7684\u8f6c\u6362\uff0c\u54b1\u4eec\u6765\u4e2a\u6570\u636e\u7ed3\u6784\u7b80\u5355\u70b9\u7684\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'p := gparser.New(map[string]string{\n    "name" : "gf",\n    "site" : "https://gitee.com/johng",\n})\nc, _ := p.ToJson()\nfmt.Println("JSON:")\nfmt.Println(string(c))\nfmt.Println("======================")\n\nfmt.Println("XML:")\nc, _ = p.ToXmlIndent()\nfmt.Println(string(c))\nfmt.Println("======================")\n\nfmt.Println("YAML:")\nc, _ = p.ToYaml()\nfmt.Println(string(c))\nfmt.Println("======================")\n\nfmt.Println("TOML:")\nc, _ = p.ToToml()\nfmt.Println(string(c))\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:'JSON:\n{"name":"gf","site":"https://gitee.com/johng"}\n======================\nXML:\n<doc>\n    <name>gf</name>\n    <site>https://gitee.com/johng</site>\n</doc>\n======================\nYAML:\nname: gf\nsite: https://gitee.com/johng\n\n======================\nTOML:\nname = "gf"\nsite = "https://gitee.com/johng"\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c ",(0,s.jsx)(e.code,{children:"gparser"})," \u5305\u4f7f\u5f97\u6570\u636e\u683c\u5f0f\u7684\u8f6c\u6362\u53d8\u5f97\u5f02\u5e38\u7684\u65b9\u4fbf\u7075\u6d3b\u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>l});var s=r(296540);const c={},t=s.createContext(c);function i(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);