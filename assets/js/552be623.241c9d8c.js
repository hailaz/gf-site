"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[19749],{92470:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(474848),c=r(28453);const s={title:"TCP\u7ec4\u4ef6",sidebar_position:0},o=void 0,i={id:"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6",title:"TCP\u7ec4\u4ef6",description:"gtcp \u6a21\u5757\u5b9e\u73b0\u7b80\u4fbf\u6613\u7528\u3001\u8f7b\u91cf\u7ea7\u7684 TCPServer \u670d\u52a1\u7aef\u3002",source:"@site/versioned_docs/version-2.4.x/5-\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/0-TCP\u7ec4\u4ef6/0-TCP\u7ec4\u4ef6.md",sourceDirName:"5-\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/0-TCP\u7ec4\u4ef6",slug:"/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/",permalink:"/gf-site/docs/2.4.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/5-\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/0-TCP\u7ec4\u4ef6/0-TCP\u7ec4\u4ef6.md",tags:[],version:"2.4.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:0,frontMatter:{title:"TCP\u7ec4\u4ef6",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1",permalink:"/gf-site/docs/2.4.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/"},next:{title:"TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61",permalink:"/gf-site/docs/2.4.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61/"}},d={},l=[];function a(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gtcp"})," \u6a21\u5757\u5b9e\u73b0\u7b80\u4fbf\u6613\u7528\u3001\u8f7b\u91cf\u7ea7\u7684 ",(0,t.jsx)(n.code,{children:"TCPServer"})," \u670d\u52a1\u7aef\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'import "github.com/gogf/gf/v2/net/gtcp"\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"type Server\n    func GetServer(name ...interface{}) *Server\n    func NewServer(address string, handler func(*Conn), name ...string) *Server\n    func NewServerKeyCrt(address, crtFile, keyFile string, handler func(*Conn), name ...string) *Server\n    func NewServerTLS(address string, tlsConfig *tls.Config, handler func(*Conn), name ...string) *Server\n    func (s *Server) Close() error\n    func (s *Server) Run() (err error)\n    func (s *Server) SetAddress(address string)\n    func (s *Server) SetHandler(handler func(*Conn))\n    func (s *Server) SetTLSConfig(tlsConfig *tls.Config)\n    func (s *Server) SetTLSKeyCrt(crtFile, keyFile string) error\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c ",(0,t.jsx)(n.code,{children:"GetServer"})," \u4f7f\u7528\u5355\u4f8b\u6a21\u5f0f\u901a\u8fc7\u7ed9\u5b9a\u4e00\u4e2a\u552f\u4e00\u7684\u540d\u79f0\u83b7\u53d6/\u521b\u5efa\u4e00\u4e2a\u5355\u4f8b ",(0,t.jsx)(n.code,{children:"Server"}),"\uff0c\u540e\u7eed\u53ef\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"SetAddress"})," \u548c ",(0,t.jsx)(n.code,{children:"SetHandler"})," \u65b9\u6cd5\u52a8\u6001\u4fee\u6539Server\u5c5e\u6027\uff1b ",(0,t.jsx)(n.code,{children:"NewServer"})," \u5219\u76f4\u63a5\u6839\u636e\u7ed9\u5b9a\u53c2\u6570\u521b\u5efa\u4e00\u4e2aServer\u5bf9\u8c61\uff0c\u5e76\u53ef\u6307\u5b9a\u540d\u79f0\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u901a\u8fc7\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,t.jsx)(n.code,{children:"echo\u670d\u52a1\u5668"})," \u6765\u6f14\u793a ",(0,t.jsx)(n.code,{children:"TCPServer"})," \u7684\u4f7f\u7528\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/net/gtcp"\n)\n\nfunc main() {\n    gtcp.NewServer("127.0.0.1:8999", func(conn *gtcp.Conn) {\n        defer conn.Close()\n        for {\n            data, err := conn.Recv(-1)\n            if len(data) > 0 {\n                if err := conn.Send(append([]byte("> "), data...)); err != nil {\n                  fmt.Println(err)\n                }\n            }\n            if err != nil {\n                break\n            }\n        }\n    }).Run()\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,t.jsx)(n.code,{children:"Send"})," \u548c ",(0,t.jsx)(n.code,{children:"Recv"})," \u6765\u53d1\u9001\u548c\u63a5\u6536\u6570\u636e\u3002\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"Recv"})," \u65b9\u6cd5\u4f1a\u901a\u8fc7\u963b\u585e\u65b9\u5f0f\u63a5\u6536\u6570\u636e\uff0c\u76f4\u5230\u5ba2\u6237\u7aef\u201d\u53d1\u9001\u5b8c\u6bd5\u4e00\u6761\u6570\u636e\u201d(\u6267\u884c\u4e00\u6b21 ",(0,t.jsx)(n.code,{children:"Send"}),"\uff0c\u5e95\u5c42Socket\u901a\u4fe1\u4e0d\u5e26\u7f13\u51b2\u5b9e\u73b0)\uff0c\u6216\u8005\u5173\u95ed\u94fe\u63a5\u3002\u5173\u4e8e\u5176\u4e2d\u7684\u94fe\u63a5\u5bf9\u8c61 ",(0,t.jsx)(n.code,{children:"gtcp.Conn"})," \u7684\u4ecb\u7ecd\uff0c\u8bf7\u7ee7\u7eed\u9605\u8bfb\u540e\u7eed\u7ae0\u8282\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6267\u884c\u4e4b\u540e\u6211\u4eec\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"telnet"})," \u5de5\u5177\u6765\u8fdb\u884c\u6d4b\u8bd5\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"john@home:~$ telnet 127.0.0.1 8999\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is '^]'.\nhello\n> hello\nhi there\n> hi there\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6bcf\u4e00\u4e2a\u5ba2\u6237\u7aef\u53d1\u8d77\u7684TCP\u94fe\u63a5\uff0cTCPServer\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"goroutine"})," \u8fdb\u884c\u5904\u7406\uff0c\u76f4\u81f3TCP\u94fe\u63a5\u65ad\u5f00\u3002\u7531\u4e8egoroutine\u6bd4\u8f83\u8f7b\u91cf\u7ea7\uff0c\u56e0\u6b64\u53ef\u4ee5\u652f\u6491\u5f88\u9ad8\u7684\u5e76\u53d1\u91cf\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(296540);const c={},s=t.createContext(c);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);