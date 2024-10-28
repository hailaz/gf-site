"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[41588],{824334:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>i});var a=t(474848),s=t(28453);const c={title:"gmap (\u5b57\u5178\u8868)",sidebar_position:0},o=void 0,r={id:"\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/gmap -\u5b57\u5178\u8868",title:"gmap (\u5b57\u5178\u8868)",description:"\u652f\u6301\u5e76\u53d1\u5b89\u5168\u5f00\u5173\u9009\u9879\u7684 map \u5bb9\u5668\uff0c\u6700\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784\u3002\u8be5\u6a21\u5757\u5305\u542b\u591a\u4e2a\u6570\u636e\u7ed3\u6784\u7684 map \u5bb9\u5668\uff1a HashMap\u3001 TreeMap \u548c ListMap\u3002",source:"@site/versioned_docs/version-1.16.x/2-\u6a21\u5757\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/0-gmap -\u5b57\u5178\u8868.md",sourceDirName:"2-\u6a21\u5757\u5217\u8868/0-\u6570\u636e\u7ed3\u6784",slug:"/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/gmap -\u5b57\u5178\u8868",permalink:"/gf-site/docs/1.16.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/gmap -\u5b57\u5178\u8868",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/2-\u6a21\u5757\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/0-gmap -\u5b57\u5178\u8868.md",tags:[],version:"1.16.x",sidebarPosition:0,frontMatter:{title:"gmap (\u5b57\u5178\u8868)",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/gf-site/docs/1.16.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/"},next:{title:"garray (\u6570\u7ec4)",permalink:"/gf-site/docs/1.16.x/\u6a21\u5757\u5217\u8868/\u6570\u636e\u7ed3\u6784/garray -\u6570\u7ec4"}},l={},i=[{value:"\u5e76\u53d1\u5b89\u5168",id:"\u5e76\u53d1\u5b89\u5168",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u6709\u5e8f\u904d\u5386",id:"\u6709\u5e8f\u904d\u5386",level:3},{value:"<code>FilterEmpty/FilterNil</code> \u7a7a\u503c\u8fc7\u6ee4",id:"filteremptyfilternil-\u7a7a\u503c\u8fc7\u6ee4",level:3},{value:"<code>Flip</code> \u952e\u503c\u5bf9\u53cd\u8f6c",id:"flip-\u952e\u503c\u5bf9\u53cd\u8f6c",level:3},{value:"<code>Keys/Values</code> \u952e\u540d/\u6570\u503c\u5217\u8868",id:"keysvalues-\u952e\u540d\u6570\u503c\u5217\u8868",level:3},{value:"<code>Pop/Pops</code> \u968f\u673a\u51fa\u6808",id:"poppops-\u968f\u673a\u51fa\u6808",level:3},{value:"<code>SetIfNotExist*</code> \u5224\u65ad\u6027\u5199\u5165",id:"setifnotexist-\u5224\u65ad\u6027\u5199\u5165",level:3},{value:"<code>Merge</code> \u5b57\u5178\u8868\u5408\u5e76",id:"merge-\u5b57\u5178\u8868\u5408\u5e76",level:3},{value:"<code>JSON</code> \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217",id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",level:3},{value:"\u6027\u80fd\u6d4b\u8bd5",id:"\u6027\u80fd\u6d4b\u8bd5",level:2},{value:"\u5e76\u53d1\u5b89\u5168",id:"\u5e76\u53d1\u5b89\u5168-1",level:3},{value:"\u975e\u5e76\u53d1\u5b89\u5168",id:"\u975e\u5e76\u53d1\u5b89\u5168",level:3},{value:"\u4e0d\u540c\u7c7b\u578bmap\u6027\u80fd",id:"\u4e0d\u540c\u7c7b\u578bmap\u6027\u80fd",level:3},{value:"<code>gmap</code> \u4e0e <code>sync.Map</code> \u6027\u80fd\u6bd4\u8f83",id:"gmap-\u4e0e-syncmap-\u6027\u80fd\u6bd4\u8f83",level:3}];function p(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["\u652f\u6301\u5e76\u53d1\u5b89\u5168\u5f00\u5173\u9009\u9879\u7684 ",(0,a.jsx)(e.code,{children:"map"})," \u5bb9\u5668\uff0c\u6700\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784\u3002\u8be5\u6a21\u5757\u5305\u542b\u591a\u4e2a\u6570\u636e\u7ed3\u6784\u7684 ",(0,a.jsx)(e.code,{children:"map"})," \u5bb9\u5668\uff1a ",(0,a.jsx)(e.code,{children:"HashMap"}),"\u3001 ",(0,a.jsx)(e.code,{children:"TreeMap"})," \u548c ",(0,a.jsx)(e.code,{children:"ListMap"}),"\u3002"]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,a.jsx)(e.th,{children:"\u6570\u636e\u7ed3\u6784"}),(0,a.jsx)(e.th,{children:"\u5e73\u5747\u590d\u6742\u5ea6"}),(0,a.jsx)(e.th,{children:"\u652f\u6301\u6392\u5e8f"}),(0,a.jsx)(e.th,{children:"\u6709\u5e8f\u904d\u5386"}),(0,a.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"HashMap"})}),(0,a.jsx)(e.td,{children:"\u54c8\u5e0c\u8868"}),(0,a.jsx)(e.td,{children:"O(1)"}),(0,a.jsx)(e.td,{children:"\u5426"}),(0,a.jsx)(e.td,{children:"\u5426"}),(0,a.jsx)(e.td,{children:"\u9ad8\u6027\u80fd\u8bfb\u5199\u64cd\u4f5c\uff0c\u5185\u5b58\u5360\u7528\u8f83\u9ad8\uff0c\u968f\u673a\u904d\u5386"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"ListMap"})}),(0,a.jsx)(e.td,{children:"\u54c8\u5e0c\u8868+\u53cc\u5411\u94fe\u8868"}),(0,a.jsx)(e.td,{children:"O(2)"}),(0,a.jsx)(e.td,{children:"\u5426"}),(0,a.jsx)(e.td,{children:"\u662f"}),(0,a.jsx)(e.td,{children:"\u652f\u6301\u6309\u7167\u5199\u5165\u987a\u5e8f\u904d\u5386\uff0c\u5185\u5b58\u5360\u7528\u8f83\u9ad8"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"TreeMap"})}),(0,a.jsx)(e.td,{children:"\u7ea2\u9ed1\u6811"}),(0,a.jsx)(e.td,{children:"O(log N)"}),(0,a.jsx)(e.td,{children:"\u662f"}),(0,a.jsx)(e.td,{children:"\u662f"}),(0,a.jsx)(e.td,{children:"\u5185\u5b58\u5360\u7528\u7d27\u51d1\uff0c\u652f\u6301\u952e\u540d\u6392\u5e8f\u53ca\u6709\u5e8f\u904d\u5386"})]})]})]}),"\n",(0,a.jsxs)(e.p,{children:["\u6b64\u5916\uff0c ",(0,a.jsx)(e.code,{children:"gmap"})," \u6a21\u5757\u652f\u6301\u591a\u79cd\u4ee5\u54c8\u5e0c\u8868\u4e3a\u57fa\u7840\u6570\u636e\u7ed3\u6784\u7684\u5e38\u89c1\u7c7b\u578b ",(0,a.jsx)(e.code,{children:"map"})," \u5b9a\u4e49\uff1a ",(0,a.jsx)(e.code,{children:"IntIntMap"}),"\u3001 ",(0,a.jsx)(e.code,{children:"IntStrMap"}),"\u3001 ",(0,a.jsx)(e.code,{children:"IntAnyMap"}),"\u3001 ",(0,a.jsx)(e.code,{children:"StrIntMap"}),"\u3001 ",(0,a.jsx)(e.code,{children:"StrStrMap"}),"\u3001 ",(0,a.jsx)(e.code,{children:"StrAnyMap"}),"\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,a.jsxs)(e.p,{children:["\u4efb\u4f55 ",(0,a.jsx)(e.code,{children:"map"}),"/\u54c8\u5e0c\u8868/\u5173\u8054\u6570\u7ec4\u4f7f\u7528\u573a\u666f\uff0c\u5c24\u5176\u662f\u5e76\u53d1\u5b89\u5168\u573a\u666f\u4e2d\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/container/gmap"\n\n'})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://godoc.org/github.com/gogf/gf/container/gmap",children:"https://godoc.org/github.com/gogf/gf/container/gmap"})}),"\n",(0,a.jsx)(e.h2,{id:"\u5e76\u53d1\u5b89\u5168",children:"\u5e76\u53d1\u5b89\u5168"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"gmap"})," \u652f\u6301\u5e76\u53d1\u5b89\u5168\u9009\u9879\u5f00\u5173\uff0c\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f ",(0,a.jsx)(e.code,{children:"\u975e\u5e76\u53d1\u5b89\u5168"})," \u7684\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u9009\u62e9\u5f00\u542f ",(0,a.jsx)(e.code,{children:"gmap"})," \u7684\u5e76\u53d1\u5b89\u5168\u7279\u6027(\u4f20\u9012\u521d\u59cb\u5316\u5f00\u5173\u53c2\u6570 ",(0,a.jsx)(e.code,{children:"safe"})," \u53c2\u6570\u503c\u4e3a ",(0,a.jsx)(e.code,{children:"true"}),", \u5fc5\u987b\u5728\u521d\u59cb\u5316\u65f6\u8bbe\u5b9a\uff0c\u4e0d\u80fd\u8fd0\u884c\u65f6\u52a8\u6001\u8bbe\u5b9a)\u3002\u5982\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:"m := gmap.New(true)\n\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u4e0d\u4ec5\u4ec5\u662f ",(0,a.jsx)(e.code,{children:"gmap"})," \u6a21\u5757\uff0c ",(0,a.jsx)(e.code,{children:"goframe"})," \u6846\u67b6\u7684\u5176\u4ed6\u5e76\u53d1\u5b89\u5168\u6570\u636e\u7ed3\u6784\u4e5f\u652f\u6301\u5e76\u53d1\u5b89\u5168\u7279\u6027\u5f00\u5173\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,a.jsx)(e.h3,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/container/gmap"\n)\n\nfunc main() {\n    // \u521b\u5efa\u4e00\u4e2a\u9ed8\u8ba4\u7684gmap\u5bf9\u8c61\uff0c\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8be5gmap\u5bf9\u8c61\u4e0d\u652f\u6301\u5e76\u53d1\u5b89\u5168\u7279\u6027\uff0c\n    // \u521d\u59cb\u5316\u65f6\u53ef\u4ee5\u7ed9\u5b9atrue\u53c2\u6570\u5f00\u542f\u5e76\u53d1\u5b89\u5168\u7279\u6027\u3002\n    m := gmap.New()\n\n    // \u8bbe\u7f6e\u952e\u503c\u5bf9\n    for i := 0; i < 10; i++ {\n        m.Set(i, i)\n    }\n    // \u67e5\u8be2\u5927\u5c0f\n    fmt.Println(m.Size())\n    // \u6279\u91cf\u8bbe\u7f6e\u952e\u503c\u5bf9(\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u5bf9\u8c61\u53c2\u6570\u4e0d\u540c)\n    m.Sets(map[interface{}]interface{}{\n        10 : 10,\n        11 : 11,\n    })\n    fmt.Println(m.Size())\n\n    // \u67e5\u8be2\u662f\u5426\u5b58\u5728\n    fmt.Println(m.Contains(1))\n\n    // \u67e5\u8be2\u952e\u503c\n    fmt.Println(m.Get(1))\n\n    // \u5220\u9664\u6570\u636e\u9879\n    m.Remove(9)\n    fmt.Println(m.Size())\n\n    // \u6279\u91cf\u5220\u9664\n    m.Removes([]interface{}{10, 11})\n    fmt.Println(m.Size())\n\n    // \u5f53\u524d\u952e\u540d\u5217\u8868(\u968f\u673a\u6392\u5e8f)\n    fmt.Println(m.Keys())\n    // \u5f53\u524d\u952e\u503c\u5217\u8868(\u968f\u673a\u6392\u5e8f)\n    fmt.Println(m.Values())\n\n    // \u67e5\u8be2\u952e\u540d\uff0c\u5f53\u952e\u503c\u4e0d\u5b58\u5728\u65f6\uff0c\u5199\u5165\u7ed9\u5b9a\u7684\u9ed8\u8ba4\u503c\n    fmt.Println(m.GetOrSet(100, 100))\n\n    // \u5220\u9664\u952e\u503c\u5bf9\uff0c\u5e76\u8fd4\u56de\u5bf9\u5e94\u7684\u952e\u503c\n    fmt.Println(m.Remove(100))\n\n    // \u904d\u5386map\n    m.Iterator(func(k interface{}, v interface{}) bool {\n        fmt.Printf("%v:%v ", k, v)\n        return true\n    })\n\n    // \u81ea\u5b9a\u4e49\u5199\u9501\u64cd\u4f5c\n    m.LockFunc(func(m map[interface{}]interface{}) {\n        m[99] = 99\n    })\n\n    // \u81ea\u5b9a\u4e49\u8bfb\u9501\u64cd\u4f5c\n    m.RLockFunc(func(m map[interface{}]interface{}) {\n        fmt.Println(m[99])\n    })\n\n    // \u6e05\u7a7amap\n    m.Clear()\n\n    // \u5224\u65admap\u662f\u5426\u4e3a\u7a7a\n    fmt.Println(m.IsEmpty())\n}\n\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:"10\n12\ntrue\n1\n11\n9\n[0 1 2 4 6 7 3 5 8]\n[3 5 8 0 1 2 4 6 7]\n100\n100\n3:3 5:5 8:8 7:7 0:0 1:1 2:2 4:4 6:6 99\ntrue\n\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u6709\u5e8f\u904d\u5386",children:"\u6709\u5e8f\u904d\u5386"}),"\n",(0,a.jsxs)(e.p,{children:["\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u4e09\u79cd\u4e0d\u540c\u7c7b\u578b ",(0,a.jsx)(e.code,{children:"map"})," \u7684\u6709\u5e8f\u6027\u904d\u5386\u793a\u4f8b\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/frame/g"\n    "github.com/gogf/gf/container/gmap"\n    "github.com/gogf/gf/util/gutil"\n)\n\nfunc main() {\n    array   := g.Slice{2, 3, 1, 5, 4, 6, 8, 7, 9}\n    hashMap := gmap.New(true)\n    listMap := gmap.NewListMap(true)\n    treeMap := gmap.NewTreeMap(gutil.ComparatorInt, true)\n    for _, v := range array {\n        hashMap.Set(v, v)\n    }\n    for _, v := range array {\n        listMap.Set(v, v)\n    }\n    for _, v := range array {\n        treeMap.Set(v, v)\n    }\n    fmt.Println("HashMap   Keys:", hashMap.Keys())\n    fmt.Println("HashMap Values:", hashMap.Values())\n    fmt.Println("ListMap   Keys:", listMap.Keys())\n    fmt.Println("ListMap Values:", listMap.Values())\n    fmt.Println("TreeMap   Keys:", treeMap.Keys())\n    fmt.Println("TreeMap Values:", treeMap.Values())\n}\n\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:"HashMap   Keys: [4 6 8 7 9 2 3 1 5]\nHashMap Values: [6 8 4 3 1 5 7 9 2]\nListMap   Keys: [2 3 1 5 4 6 8 7 9]\nListMap Values: [2 3 1 5 4 6 8 7 9]\nTreeMap   Keys: [1 2 3 4 5 6 7 8 9]\nTreeMap Values: [1 2 3 4 5 6 7 8 9]\n\n"})}),"\n",(0,a.jsxs)(e.h3,{id:"filteremptyfilternil-\u7a7a\u503c\u8fc7\u6ee4",children:[(0,a.jsx)(e.code,{children:"FilterEmpty/FilterNil"})," \u7a7a\u503c\u8fc7\u6ee4"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/container/gmap"\n\t"github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n\tm1 := gmap.NewFrom(g.MapAnyAny{\n\t\t"k1": "",\n\t\t"k2": nil,\n\t\t"k3": 0,\n\t\t"k4": 1,\n\t})\n\tm2 := gmap.NewFrom(g.MapAnyAny{\n\t\t"k1": "",\n\t\t"k2": nil,\n\t\t"k3": 0,\n\t\t"k4": 1,\n\t})\n\tm1.FilterEmpty()\n\tm2.FilterNil()\n\tfmt.Println(m1.Map())\n\tfmt.Println(m2.Map())\n\n\t// Output:\n\t// map[k4:1]\n\t// map[k1: k3:0 k4:1]\n}\n\n'})}),"\n",(0,a.jsxs)(e.h3,{id:"flip-\u952e\u503c\u5bf9\u53cd\u8f6c",children:[(0,a.jsx)(e.code,{children:"Flip"})," \u952e\u503c\u5bf9\u53cd\u8f6c"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/container/gmap"\n\t"github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n\tvar m gmap.Map\n\tm.Sets(g.MapAnyAny{\n\t\t"k1": "v1",\n\t\t"k2": "v2",\n\t})\n\tm.Flip()\n\tfmt.Println(m.Map())\n\n\t// May Output:\n\t// map[v1:k1 v2:k2]\n}\n\n'})}),"\n",(0,a.jsxs)(e.h3,{id:"keysvalues-\u952e\u540d\u6570\u503c\u5217\u8868",children:[(0,a.jsx)(e.code,{children:"Keys/Values"})," \u952e\u540d/\u6570\u503c\u5217\u8868"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/container/gmap"\n\t"github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n\tvar m gmap.Map\n\tm.Sets(g.MapAnyAny{\n\t\t"k1": "v1",\n\t\t"k2": "v2",\n\t\t"k3": "v3",\n\t\t"k4": "v4",\n\t})\n\tfmt.Println(m.Keys())\n\tfmt.Println(m.Values())\n\n\t// May Output:\n\t// [k1 k2 k3 k4]\n\t// [v2 v3 v4 v1]\n}\n\n'})}),"\n",(0,a.jsxs)(e.h3,{id:"poppops-\u968f\u673a\u51fa\u6808",children:[(0,a.jsx)(e.code,{children:"Pop/Pops"})," \u968f\u673a\u51fa\u6808"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/container/gmap"\n\t"github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n\tvar m gmap.Map\n\tm.Sets(g.MapAnyAny{\n\t\t"k1": "v1",\n\t\t"k2": "v2",\n\t\t"k3": "v3",\n\t\t"k4": "v4",\n\t})\n\tfmt.Println(m.Pop())\n\tfmt.Println(m.Pops(2))\n\tfmt.Println(m.Size())\n\n\t// May Output:\n\t// k1 v1\n\t// map[k2:v2 k4:v4]\n\t// 1\n}\n\n'})}),"\n",(0,a.jsxs)(e.h3,{id:"setifnotexist-\u5224\u65ad\u6027\u5199\u5165",children:[(0,a.jsx)(e.code,{children:"SetIfNotExist*"})," \u5224\u65ad\u6027\u5199\u5165"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5224\u65ad\u6027\u5199\u5165\u662f\u6307\u5f53\u6307\u5b9a\u7684\u952e\u540d\u4e0d\u5b58\u5728\u65f6\u5219\u5199\u5165\u5e76\u4e14\u65b9\u6cd5\u8fd4\u56de ",(0,a.jsx)(e.code,{children:"true"}),"\uff0c\u5426\u5219\u5ffd\u7565\u5199\u5165\u5e76\u4e14\u65b9\u6cd5\u8fd4\u56de ",(0,a.jsx)(e.code,{children:"false"}),"\u3002\u76f8\u5173\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"SetIfNotExist"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"SetIfNotExistFunc"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"SetIfNotExistFuncLock"})}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u65b9\u6cd5\u5177\u4f53\u63cf\u8ff0\u8bf7\u67e5\u770b\u63a5\u53e3\u6587\u6863\u6216\u6e90\u7801\u6ce8\u91ca\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/container/gmap"\n)\n\nfunc main() {\n\tvar m gmap.Map\n\tfmt.Println(m.SetIfNotExist("k1", "v1"))\n\tfmt.Println(m.SetIfNotExist("k1", "v1"))\n\tfmt.Println(m.Map())\n\n\t// Output:\n\t// true\n\t// false\n\t// map[k1:v1]\n}\n\n'})}),"\n",(0,a.jsxs)(e.h3,{id:"merge-\u5b57\u5178\u8868\u5408\u5e76",children:[(0,a.jsx)(e.code,{children:"Merge"})," \u5b57\u5178\u8868\u5408\u5e76"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/container/gmap"\n)\n\nfunc main() {\n\tvar m1, m2 gmap.Map\n\tm1.Set("key1", "val1")\n\tm2.Set("key2", "val2")\n\tm1.Merge(&m2)\n\tfmt.Println(m1.Map())\n\n\t// May Output:\n\t// map[key1:val1 key2:val2]\n}\n\n'})}),"\n",(0,a.jsxs)(e.h3,{id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",children:[(0,a.jsx)(e.code,{children:"JSON"})," \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"gmap"})," \u6a21\u5757\u4e0b\u7684\u6240\u6709\u5bb9\u5668\u7c7b\u578b\u5747\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93 ",(0,a.jsx)(e.code,{children:"json"})," \u6570\u636e\u683c\u5f0f\u7684\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u63a5\u53e3\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["1. ",(0,a.jsx)(e.code,{children:"Marshal"})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "github.com/gogf/gf/frame/g"\n\n    "github.com/gogf/gf/container/gmap"\n)\n\nfunc main() {\n    m := gmap.New()\n    m.Sets(g.MapAnyAny{\n        "name":  "john",\n        "score": 100,\n    })\n    b, _ := json.Marshal(m)\n    fmt.Println(string(b))\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'{"name":"john","score":100}\n'})}),"\n",(0,a.jsxs)(e.ol,{start:"2",children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"Unmarshal"})}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "github.com/gogf/gf/container/gmap"\n)\n\nfunc main() {\n    m := gmap.Map{}\n    s := []byte(`{"name":"john","score":100}`)\n    json.Unmarshal(s, &m)\n    fmt.Println(m.Map())\n}\n\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-undefined",children:"map[name:john score:100]\n\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u6027\u80fd\u6d4b\u8bd5",children:"\u6027\u80fd\u6d4b\u8bd5"}),"\n",(0,a.jsx)(e.h3,{id:"\u5e76\u53d1\u5b89\u5168-1",children:"\u5e76\u53d1\u5b89\u5168"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_safe_test.go",children:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_safe_test.go"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"goos: linux\ngoarch: amd64\nBenchmark_IntIntMap_Set-4               10000000               202 ns/op              15 B/op          0 allocs/op\nBenchmark_IntAnyMap_Set-4               10000000               262 ns/op              29 B/op          1 allocs/op\nBenchmark_IntStrMap_Set-4               10000000               241 ns/op              22 B/op          0 allocs/op\nBenchmark_AnyAnyMap_Set-4                5000000               359 ns/op              40 B/op          2 allocs/op\nBenchmark_StrIntMap_Set-4                5000000               305 ns/op              26 B/op          1 allocs/op\nBenchmark_StrAnyMap_Set-4                5000000               354 ns/op              40 B/op          2 allocs/op\nBenchmark_StrStrMap_Set-4                5000000               338 ns/op              32 B/op          1 allocs/op\nBenchmark_IntIntMap_Get-4               20000000              86.6 ns/op               0 B/op          0 allocs/op\nBenchmark_IntAnyMap_Get-4               30000000              69.7 ns/op               0 B/op          0 allocs/op\nBenchmark_IntStrMap_Get-4               30000000              69.6 ns/op               0 B/op          0 allocs/op\nBenchmark_AnyAnyMap_Get-4               20000000              74.4 ns/op               0 B/op          0 allocs/op\nBenchmark_StrIntMap_Get-4               20000000               116 ns/op               7 B/op          0 allocs/op\nBenchmark_StrAnyMap_Get-4               20000000              92.3 ns/op               7 B/op          0 allocs/op\nBenchmark_StrStrMap_Get-4               20000000              91.9 ns/op               7 B/op          0 allocs/op\n\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u975e\u5e76\u53d1\u5b89\u5168",children:"\u975e\u5e76\u53d1\u5b89\u5168"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_unsafe_test.go",children:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_unsafe_test.go"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"goos: linux\ngoarch: amd64\nBenchmark_Unsafe_IntIntMap_Set-4        10000000               318 ns/op              62 B/op          0 allocs/op\nBenchmark_Unsafe_IntAnyMap_Set-4         5000000               282 ns/op              57 B/op          1 allocs/op\nBenchmark_Unsafe_IntStrMap_Set-4         5000000               332 ns/op              82 B/op          1 allocs/op\nBenchmark_Unsafe_AnyAnyMap_Set-4         3000000               471 ns/op              73 B/op          2 allocs/op\nBenchmark_Unsafe_StrIntMap_Set-4         5000000               429 ns/op              82 B/op          1 allocs/op\nBenchmark_Unsafe_StrAnyMap_Set-4         3000000               424 ns/op              73 B/op          2 allocs/op\nBenchmark_Unsafe_StrStrMap_Set-4         2000000               515 ns/op              96 B/op          2 allocs/op\nBenchmark_Unsafe_IntIntMap_Get-4        10000000               133 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_IntAnyMap_Get-4        20000000               134 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_IntStrMap_Get-4        10000000               126 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_AnyAnyMap_Get-4        10000000               166 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_StrIntMap_Get-4         5000000               246 ns/op               7 B/op          0 allocs/op\nBenchmark_Unsafe_StrAnyMap_Get-4        10000000               238 ns/op               7 B/op          0 allocs/op\nBenchmark_Unsafe_StrStrMap_Get-4         5000000               229 ns/op               7 B/op          0 allocs/op\n\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u4e0d\u540c\u7c7b\u578bmap\u6027\u80fd",children:"\u4e0d\u540c\u7c7b\u578bmap\u6027\u80fd"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_maps_test.go",children:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_maps_test.go"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"goos: linux\ngoarch: amd64\nBenchmark_HashMap_Set-4                  5000000               349 ns/op              40 B/op          2 allocs/op\nBenchmark_ListMap_Set-4                  3000000               455 ns/op              87 B/op          3 allocs/op\nBenchmark_TreeMap_Set-4                  3000000               481 ns/op              28 B/op          2 allocs/op\nBenchmark_HashMap_Get-4                 30000000              67.8 ns/op               0 B/op          0 allocs/op\nBenchmark_ListMap_Get-4                 20000000              74.5 ns/op               0 B/op          0 allocs/op\nBenchmark_TreeMap_Get-4                 20000000               189 ns/op               8 B/op          1 allocs/op\n\n"})}),"\n",(0,a.jsxs)(e.h3,{id:"gmap-\u4e0e-syncmap-\u6027\u80fd\u6bd4\u8f83",children:[(0,a.jsx)(e.code,{children:"gmap"})," \u4e0e ",(0,a.jsx)(e.code,{children:"sync.Map"})," \u6027\u80fd\u6bd4\u8f83"]}),"\n",(0,a.jsxs)(e.p,{children:["go\u8bed\u8a00\u4ece ",(0,a.jsx)(e.code,{children:"1.9"})," \u7248\u672c\u5f00\u59cb\u5f15\u5165\u4e86\u5e76\u53d1\u5b89\u5168\u7684 ",(0,a.jsx)(e.code,{children:"sync.Map"}),"\uff0c\u4f46 ",(0,a.jsx)(e.code,{children:"gmap"})," \u6bd4\u8f83\u4e8e\u6807\u51c6\u5e93\u7684 ",(0,a.jsx)(e.code,{children:"sync.Map"})," \u6027\u80fd\u66f4\u52a0\u4f18\u5f02\uff0c\u5e76\u4e14\u529f\u80fd\u66f4\u52a0\u4e30\u5bcc\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u6211\u4eec\u6765\u770b\u770b\u57fa\u51c6\u6d4b\u8bd5\u5bf9\u6bd4\u7ed3\u679c\uff1a ",(0,a.jsx)(e.a,{href:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_syncmap_test.go",children:"https://github.com/gogf/gf/blob/master/container/gmap/gmap_z_bench_syncmap_test.go"})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"goos: linux\ngoarch: amd64\nBenchmark_GMapSet-4                     10000000               209 ns/op              15 B/op          0 allocs/op\nBenchmark_SyncMapSet-4                   3000000               451 ns/op              67 B/op          3 allocs/op\nBenchmark_GMapGet-4                     30000000              66.4 ns/op               0 B/op          0 allocs/op\nBenchmark_SyncMapGet-4                  30000000              36.0 ns/op               0 B/op          0 allocs/op\nBenchmark_GMapRemove-4                  10000000               207 ns/op               0 B/op          0 allocs/op\nBenchmark_SyncMapRmove-4                30000000              42.4 ns/op               0 B/op          0 allocs/op\n\n"})})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>r});var a=t(296540);const s={},c=a.createContext(s);function o(n){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),a.createElement(c.Provider,{value:e},n.children)}}}]);