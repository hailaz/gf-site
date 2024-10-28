"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[59651],{11271:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var t=r(474848),s=r(28453);const c={title:"\u94fe\u8def\u8ddf\u8e2a-GRPC\u8bf7\u6c42",sidebar_position:2},d=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6/\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-GRPC\u8bf7\u6c42",title:"\u94fe\u8def\u8ddf\u8e2a-GRPC\u8bf7\u6c42",description:"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4e4b\u524d\u4ecb\u7ecd HTTP Client&Server \u7684\u793a\u4f8b\u4fee\u6539\u4e3a GRPC \u5fae\u670d\u52a1\uff0c\u5e76\u6f14\u793a\u5982\u4f55\u4f7f\u7528 GoFrame \u6846\u67b6\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684 GRPC \u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\uff0c\u5e76\u4e14\u4e3a GRPC \u5fae\u670d\u52a1\u589e\u52a0\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\u3002 OK, Let's \u64b8\uff01",source:"@site/versioned_docs/version-1.15.x/1-\u6838\u5fc3\u7ec4\u4ef6/10-\u94fe\u8def\u8ddf\u8e2a/2-\u94fe\u8def\u8ddf\u8e2a-GRPC\u8bf7\u6c42.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6/10-\u94fe\u8def\u8ddf\u8e2a",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-GRPC\u8bf7\u6c42",permalink:"/gf-site/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-GRPC\u8bf7\u6c42",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.15.x/1-\u6838\u5fc3\u7ec4\u4ef6/10-\u94fe\u8def\u8ddf\u8e2a/2-\u94fe\u8def\u8ddf\u8e2a-GRPC\u8bf7\u6c42.md",tags:[],version:"1.15.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:2,frontMatter:{title:"\u94fe\u8def\u8ddf\u8e2a-GRPC\u8bf7\u6c42",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u8bf7\u6c42",permalink:"/gf-site/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u8bf7\u6c42"},next:{title:"\u6570\u636e\u5e93ORM",permalink:"/gf-site/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/"}},l={},o=[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"Protocol",id:"protocol",level:2},{value:"GRPC Server",id:"grpc-server",level:2},{value:"GRPC Client",id:"grpc-client",level:2},{value:"\u6548\u679c\u67e5\u770b",id:"\u6548\u679c\u67e5\u770b",level:2},{value:"GRPC Client",id:"grpc-client-1",level:3},{value:"Attributes",id:"attributes",level:4},{value:"Events/Logs",id:"eventslogs",level:4},{value:"GRPC Server",id:"grpc-server-1",level:3},{value:"Attributes",id:"attributes-1",level:4},{value:"Events",id:"events",level:4}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4e4b\u524d\u4ecb\u7ecd ",(0,t.jsx)(n.code,{children:"HTTP Client&Server"})," \u7684\u793a\u4f8b\u4fee\u6539\u4e3a ",(0,t.jsx)(n.code,{children:"GRPC"})," \u5fae\u670d\u52a1\uff0c\u5e76\u6f14\u793a\u5982\u4f55\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,t.jsx)(n.code,{children:"GRPC"})," \u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\uff0c\u5e76\u4e14\u4e3a ",(0,t.jsx)(n.code,{children:"GRPC"})," \u5fae\u670d\u52a1\u589e\u52a0\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\u3002 ",(0,t.jsx)(n.code,{children:"OK, Let's \u64b8\uff01"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u672c\u7ae0\u8282\u7684\u793a\u4f8b\u4ee3\u7801\u4f4d\u4e8e\uff1a ",(0,t.jsx)(n.a,{href:"https://github.com/gogf/gf-tracing/tree/master/grpc%2Bdb%2Bredis%2Blog",children:"https://github.com/gogf/gf-tracing/tree/master/grpc+db+redis+log"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u76ee\u5f55\u7ed3\u6784",children:"\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(939838).A+"",width:"614",height:"978"})}),"\n",(0,t.jsx)(n.h2,{id:"protocol",children:"Protocol"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'syntax = "proto3";\n\npackage user;\n\noption go_package = "protobuf/user";\n\nimport "github.com/gogo/protobuf/gogoproto/gogo.proto";\n\n// User service for tracing demo.\nservice User {\n  rpc Insert(InsertReq) returns (InsertRes) {}\n  rpc Query(QueryReq) returns (QueryRes) {}\n  rpc Delete(DeleteReq) returns (DeleteRes) {}\n}\n\nmessage InsertReq {\n  string Name = 1 [(gogoproto.moretags) = \'v:"required#Please input user name."\'];\n}\n\nmessage InsertRes {\n  int32 Id = 1;\n}\n\nmessage QueryReq {\n  int32 Id = 1 [(gogoproto.moretags) = \'v:"min:1#User id is required for querying."\'];\n}\n\nmessage QueryRes {\n  int32  Id = 1;\n  string Name = 2;\n}\n\nmessage DeleteReq {\n  int32 Id = 1 [(gogoproto.moretags) = \'v:"min:1#User id is required for deleting."\'];\n}\n\nmessage DeleteRes {}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u4f7f\u7528\u5230\u4e86\u7b2c\u4e09\u65b9\u7684 ",(0,t.jsx)(n.a,{href:"http://github.com/gogo/protobuf",children:"github.com/gogo/protobuf"})," \u5f00\u6e90\u9879\u76ee\uff0c\u7528\u4e8e\u6ce8\u5165\u81ea\u5b9a\u4e49\u7684 ",(0,t.jsx)(n.code,{children:"Golang struct"})," \u6807\u7b7e\u3002\u8fd9\u91cc\u4e0d\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u611f\u5174\u8da3\u7684\u5c0f\u4f19\u4f34\u53ef\u4ee5\u81ea\u884c\u4e86\u89e3\u3002\u672a\u6765 ",(0,t.jsx)(n.code,{children:"Katyusha"})," \u5fae\u670d\u52a1\u6846\u67b6\u7684\u5b98\u7f51\u6587\u6863\u4e5f\u4f1a\u505a\u5bf9\u8fd9\u5757\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u5305\u62ec ",(0,t.jsx)(n.code,{children:"GRPC"})," \u5de5\u7a0b\u76ee\u5f55\u3001\u5f00\u53d1\u89c4\u8303\u3001\u5f00\u53d1\u5de5\u5177\u3001\u62e6\u622a\u5668\u3001\u6ce8\u518c\u53d1\u73b0\u3001\u8d1f\u8f7d\u5747\u8861\u7b49\u8bbe\u8ba1\u8bdd\u9898\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"grpc-server",children:"GRPC Server"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"gftracing/examples/grpc+db+redis+log/protobuf/user"\n\t"gftracing/tracing"\n\t"github.com/gogf/gcache-adapter/adapter"\n\t"github.com/gogf/gf/frame/g"\n\t"github.com/gogf/katyusha/krpc"\n\t"google.golang.org/grpc"\n\t"net"\n\t"time"\n)\n\ntype server struct{}\n\nconst (\n\tServiceName       = "tracing-grpc-server"\n\tJaegerUdpEndpoint = "localhost:6831"\n)\n\nfunc main() {\n\tflush, err := tracing.InitJaeger(ServiceName, JaegerUdpEndpoint)\n\tif err != nil {\n\t\tg.Log().Fatal(err)\n\t}\n\tdefer flush()\n\n\tg.DB().GetCache().SetAdapter(adapter.NewRedis(g.Redis()))\n\n\taddress := ":8000"\n\tlisten, err := net.Listen("tcp", address)\n\tif err != nil {\n\t\tg.Log().Fatalf("failed to listen: %v", err)\n\t}\n\ts := grpc.NewServer(\n\t\tgrpc.ChainUnaryInterceptor(\n\t\t\tkrpc.Server.UnaryError,\n\t\t\tkrpc.Server.UnaryRecover,\n\t\t\tkrpc.Server.UnaryTracing,\n\t\t\tkrpc.Server.UnaryValidate,\n\t\t),\n\t)\n\tuser.RegisterUserServer(s, &server{})\n\tg.Log().Printf("grpc server starts listening on %s", address)\n\tif err := s.Serve(listen); err != nil {\n\t\tg.Log().Fatalf("failed to serve: %v", err)\n\t}\n}\n\n// Insert is a route handler for inserting user info into dtabase.\nfunc (s *server) Insert(ctx context.Context, req *user.InsertReq) (*user.InsertRes, error) {\n\tres := user.InsertRes{}\n\tresult, err := g.Table("user").Ctx(ctx).Insert(g.Map{\n\t\t"name": req.Name,\n\t})\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\tid, _ := result.LastInsertId()\n\tres.Id = int32(id)\n\treturn &res, nil\n}\n\n// Query is a route handler for querying user info. It firstly retrieves the info from redis,\n// if there\'s nothing in the redis, it then does db select.\nfunc (s *server) Query(ctx context.Context, req *user.QueryReq) (*user.QueryRes, error) {\n\tres := user.QueryRes{}\n\terr := g.Table("user").\n\t\tCtx(ctx).\n\t\tCache(5*time.Second, s.userCacheKey(req.Id)).\n\t\tWherePri(req.Id).\n\t\tScan(&res)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\treturn &res, nil\n}\n\n// Delete is a route handler for deleting specified user info.\nfunc (s *server) Delete(ctx context.Context, req *user.DeleteReq) (*user.DeleteRes, error) {\n\tres := user.DeleteRes{}\n\t_, err := g.Table("user").\n\t\tCtx(ctx).\n\t\tCache(-1, s.userCacheKey(req.Id)).\n\t\tWherePri(req.Id).\n\t\tDelete()\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\treturn &res, nil\n}\n\nfunc (s *server) userCacheKey(id int32) string {\n\treturn fmt.Sprintf(`userInfo:%d`, id)\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u670d\u52a1\u7aef\u4ee3\u7801\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.p,{children:["1\u3001\u9996\u5148\uff0c\u5ba2\u6237\u7aef\u4e5f\u662f\u9700\u8981\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"initTracer"})," \u65b9\u6cd5\u521d\u59cb\u5316 ",(0,t.jsx)(n.code,{children:"Jaeger"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"2\u3001\u53ef\u4ee5\u770b\u5230\uff0c\u4e1a\u52a1\u903b\u8f91\u548c\u4e4b\u524dHTTP\u793a\u4f8b\u9879\u76ee\u5b8c\u5168\u4e00\u81f4\uff0c\u53ea\u662f\u63a5\u5165\u5c42\u4fee\u6539\u4e3a\u4e86GRPC\u534f\u8bae\u3002"}),"\n",(0,t.jsx)(n.p,{children:"3\u3001\u6211\u4eec\u4ecd\u7136\u901a\u8fc7\u7f13\u5b58\u9002\u914d\u5668\u7684\u65b9\u5f0f\u6ce8\u5165Redis\u7f13\u5b58\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"g.DB().GetCache().SetAdapter(adapter.NewRedis(g.Redis()))\n"})}),"\n",(0,t.jsxs)(n.p,{children:["4\u3001\u5173\u952e\u6280\u672f\u70b9\u6765\u4e86\uff0c\u62e6\u622a\u5668\u3002\u8fd9\u91cc\u6211\u4eec\u6dfb\u52a0\u4e86\u82e5\u5e72\u4e2a\u62e6\u622a\u5668\uff0c\u5e76\u4e14\u90fd\u7531 ",(0,t.jsx)(n.code,{children:"Katyusha"})," \u5fae\u670d\u52a1\u6846\u67b6\u63d0\u4f9b\uff0c\u7531\u4e8e\u8fd9\u91cc\u4f7f\u7528\u7684 ",(0,t.jsx)(n.code,{children:"GRPC"})," \u539f\u751f\u7684\u670d\u52a1\u7aef\u521b\u5efa\u65b9\u5f0f\uff0c\u56e0\u6b64\u53ea\u662f\u590d\u7528\u4e86 ",(0,t.jsx)(n.code,{children:"Katyusha"})," \u7684\u4e00\u4e9b\u62e6\u622a\u5668\uff0c\u6240\u6709\u62e6\u622a\u5668\u4fbf\u9700\u8981\u663e\u5f0f\u8bbe\u7f6e\uff1a"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Unary Interceptor"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"krpc.Server.UnaryError"})}),(0,t.jsxs)(n.td,{children:["\u9519\u8bef\u5904\u7406\uff0c\u589e\u52a0\u4e86\u5bf9 ",(0,t.jsx)(n.code,{children:"gerror"})," \u7ec4\u4ef6\u7684\u652f\u6301\uff0c\u652f\u6301\u4e1a\u52a1\u65b9\u4fbf\u5730\u5b9a\u4e49\u9519\u8bef\u7801\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"krpc.Server.UnaryRecover"})}),(0,t.jsxs)(n.td,{children:["\u5f02\u5e38\u6355\u83b7\uff0c\u9632\u6b62\u4e1a\u52a1\u5904\u7406\u903b\u8f91\u629b\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"panic"})," \u6574\u4e2a\u8fdb\u7a0b\u5c31\u5d29\u6e83\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"krpc.Server.UnaryTracing"})}),(0,t.jsx)(n.td,{children:"\u94fe\u8def\u8ddf\u8e2a\uff0c\u901a\u8fc7\u8be5\u62e6\u622a\u5668\u542f\u7528\u670d\u52a1\u7aef\u7684\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"krpc.Server.UnaryValidate"})}),(0,t.jsxs)(n.td,{children:["\u6570\u636e\u6821\u9a8c\uff0c\u901a\u8fc7\u62e6\u622a\u5668\u7684\u5f62\u5f0f\u81ea\u52a8\u5bf9\u8f93\u5165\u5bf9\u8c61\u8c03\u7528 ",(0,t.jsx)(n.code,{children:"gvalid"})," \u7ec4\u4ef6\u6267\u884c\u6570\u636e\u6821\u9a8c\uff0c\u6821\u9a8c\u5931\u8d25\u76f4\u63a5\u8fd4\u56de\u3002\u5982\u679c\u5bf9\u8c61 ",(0,t.jsx)(n.code,{children:"struct"})," \u5b9a\u4e49\u4e2d\u4e0d\u5305\u542b\u6821\u9a8c\u6807\u7b7e\u65f6\uff0c\u8be5\u62e6\u622a\u5668\u4ec0\u4e48\u90fd\u4e0d\u4f1a\u505a\uff0c\u5feb\u901f\u8fd4\u56de\uff0c\u4e0d\u5f71\u54cd\u6027\u80fd\u3002"]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["5\u3001\u8fd9\u91cc\u4e5f\u662f\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"Cache"})," \u65b9\u6cd5\u542f\u7528 ",(0,t.jsx)(n.code,{children:"ORM"})," \u7684\u7f13\u5b58\u7279\u6027\uff0c\u4e4b\u524d\u5df2\u7ecf\u505a\u8fc7\u4ecb\u7ecd\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"grpc-client",children:"GRPC Client"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'package main\n\nimport (\n\t"context"\n\t"gftracing/examples/grpc+db+redis+log/protobuf/user"\n\t"gftracing/tracing"\n\t"github.com/gogf/gf/frame/g"\n\t"github.com/gogf/gf/net/gtrace"\n\t"github.com/gogf/katyusha/krpc"\n\t"google.golang.org/grpc"\n)\n\nconst (\n\tServiceName       = "tracing-grpc-client"\n\tJaegerUdpEndpoint = "localhost:6831"\n)\n\nfunc main() {\n\tflush, err := tracing.InitJaeger(ServiceName, JaegerUdpEndpoint)\n\tif err != nil {\n\t\tg.Log().Fatal(err)\n\t}\n\tdefer flush()\n\n\tStartRequests()\n}\n\nfunc StartRequests() {\n\tctx, span := gtrace.NewSpan(context.Background(), "StartRequests")\n\tdefer span.End()\n\n\tgrpcClientOptions := make([]grpc.DialOption, 0)\n\tgrpcClientOptions = append(\n\t\tgrpcClientOptions,\n\t\tgrpc.WithInsecure(),\n\t\tgrpc.WithBlock(),\n\t\tgrpc.WithChainUnaryInterceptor(\n\t\t\tkrpc.Client.UnaryError,\n\t\t\tkrpc.Client.UnaryTracing,\n\t\t),\n\t)\n\n\tconn, err := grpc.Dial(":8000", grpcClientOptions...)\n\tif err != nil {\n\t\tg.Log().Fatalf("did not connect: %v", err)\n\t}\n\tdefer conn.Close()\n\n\tclient := user.NewUserClient(conn)\n\n\t// Baggage.\n\tctx = gtrace.SetBaggageValue(ctx, "uid", 100)\n\n\t// Insert.\n\tinsertRes, err := client.Insert(ctx, &user.InsertReq{\n\t\tName: "john",\n\t})\n\tif err != nil {\n\t\tg.Log().Ctx(ctx).Fatalf(`%+v`, err)\n\t}\n\tg.Log().Ctx(ctx).Println("insert:", insertRes.Id)\n\n\t// Query.\n\tqueryRes, err := client.Query(ctx, &user.QueryReq{\n\t\tId: insertRes.Id,\n\t})\n\tif err != nil {\n\t\tg.Log().Ctx(ctx).Printf(`%+v`, err)\n\t\treturn\n\t}\n\tg.Log().Ctx(ctx).Println("query:", queryRes)\n\n\t// Delete.\n\t_, err = client.Delete(ctx, &user.DeleteReq{\n\t\tId: insertRes.Id,\n\t})\n\tif err != nil {\n\t\tg.Log().Ctx(ctx).Printf(`%+v`, err)\n\t\treturn\n\t}\n\tg.Log().Ctx(ctx).Println("delete:", insertRes.Id)\n\n\t// Delete with error.\n\t_, err = client.Delete(ctx, &user.DeleteReq{\n\t\tId: -1,\n\t})\n\tif err != nil {\n\t\tg.Log().Ctx(ctx).Printf(`%+v`, err)\n\t\treturn\n\t}\n\tg.Log().Ctx(ctx).Println("delete:", -1)\n\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u4ee3\u7801\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.p,{children:["1\u3001\u9996\u5148\uff0c\u5ba2\u6237\u7aef\u4e5f\u662f\u9700\u8981\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"initTracer"})," \u65b9\u6cd5\u521d\u59cb\u5316 ",(0,t.jsx)(n.code,{children:"Jaeger"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["2\u3001\u4e3b\u8981\u7684\u4e5f\u662f ",(0,t.jsx)(n.code,{children:"UnaryError"})," \u548c ",(0,t.jsx)(n.code,{children:"UnaryTracing"})," \u4e24\u4e2a\u62e6\u622a\u5668\u7684\u4f7f\u7528\uff0c\u4f5c\u7528\u540c\u4e0a\u670d\u52a1\u7aef\u4ecb\u7ecd\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6548\u679c\u67e5\u770b",children:"\u6548\u679c\u67e5\u770b"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u542f\u52a8\u670d\u52a1\u7aef\uff1a"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(487132).A+"",width:"2460",height:"332"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u542f\u52a8\u5ba2\u6237\u7aef\uff1a"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(486652).A+"",width:"2606",height:"958"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u5ba2\u6237\u7aef\u7684\u6267\u884c\u6700\u540e\u62a5\u4e86\u4e00\u4e2a\u9519\u8bef\uff0c\u90a3\u662f\u6211\u4eec ",(0,t.jsx)(n.strong,{children:"\u6545\u610f\u4e3a\u4e4b"}),"\uff0c\u76ee\u7684\u662f\u6f14\u793a ",(0,t.jsx)(n.code,{children:"GRPC"})," \u62a5\u9519\u65f6\u7684\u94fe\u8def\u4fe1\u606f\u5c55\u793a\u3002\u6211\u4eec\u6253\u5f00 ",(0,t.jsx)(n.code,{children:"jaeger"})," \u67e5\u770b\u4e00\u4e0b\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(109022).A+"",width:"1914",height:"855"})}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u672c\u6b21\u8bf7\u6c42\u6d89\u53ca\u5230\u4e24\u4e2a\u670d\u52a1\uff1a ",(0,t.jsx)(n.code,{children:"tracing-grpc-client"})," \u548c ",(0,t.jsx)(n.code,{children:"tracing-grpc-server"}),"\uff0c\u5373\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u3002\u6574\u4e2a\u8bf7\u6c42\u94fe\u8def\u6d89\u53ca\u5230 ",(0,t.jsx)(n.code,{children:"17"})," \u4e2a ",(0,t.jsx)(n.code,{children:"span"}),"\uff0c\u5ba2\u6237\u7aef ",(0,t.jsx)(n.code,{children:"5"})," \u4e2a ",(0,t.jsx)(n.code,{children:"span"}),"\uff0c\u670d\u52a1\u7aef ",(0,t.jsx)(n.code,{children:"12"})," \u4e2a ",(0,t.jsx)(n.code,{children:"span"}),"\uff0c\u5e76\u4e14\u4ea7\u751f\u4e86 ",(0,t.jsx)(n.code,{children:"2"})," \u4e2a\u9519\u8bef\u3002\u6211\u4eec\u70b9\u51fb\u67e5\u770b\u8be6\u60c5\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(202808).A+"",width:"1914",height:"744"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u70b9\u51fb\u67e5\u770b\u4e00\u4e0b\u6700\u540e\u63a5\u53e3\u8c03\u7528\u9519\u8bef\u7684 ",(0,t.jsx)(n.code,{children:"span"})," \u60c5\u51b5\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(426750).A+"",width:"1075",height:"784"})}),"\n",(0,t.jsxs)(n.p,{children:["\u770b\u8d77\u6765\u50cf\u4e2a\u53c2\u6570\u6821\u9a8c\u9519\u8bef\uff0c\u70b9\u51fb\u67e5\u770b ",(0,t.jsx)(n.code,{children:"Events/Logs"})," \u4e2d\u7684\u8bf7\u6c42\u53c2\u6570\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(16283).A+"",width:"1295",height:"767"})}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u770b ",(0,t.jsx)(n.code,{children:"Process"})," \u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"Log"})," \u4fe1\u606f\u53ef\u4ee5\u770b\u5230\uff0c\u662f\u7531\u4e8e\u4f20\u9012\u7684\u53c2\u6570\u4e3a ",(0,t.jsx)(n.code,{children:"-1"}),"\uff0c\u4e0d\u6ee1\u8db3\u6821\u9a8c\u89c4\u5219\uff0c\u56e0\u6b64\u5728\u6570\u636e\u6821\u9a8c\u7684\u65f6\u5019\u62a5\u9519\u8fd4\u56de\u4e86\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"grpc-client-1",children:"GRPC Client"}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,t.jsx)(n.code,{children:"orm"}),"\u3001 ",(0,t.jsx)(n.code,{children:"redis"}),"\u3001 ",(0,t.jsx)(n.code,{children:"logging"})," \u7ec4\u4ef6\u5728\u4e4b\u524d\u7684\u7ae0\u8282\u4e2d\u5df2\u7ecf\u4ecb\u7ecd\u8fc7\u94fe\u8def\u4fe1\u606f\uff0c\u56e0\u6b64\u6211\u4eec\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd ",(0,t.jsx)(n.code,{children:"GRPC Client&Server"})," \u7684\u94fe\u8def\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"attributes",children:"Attributes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(639885).A+"",width:"1125",height:"785"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute/Tag"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"net.peer.ip"})}),(0,t.jsx)(n.td,{children:"\u8bf7\u6c42\u7684\u76ee\u6807IP\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"net.peer.port"})}),(0,t.jsx)(n.td,{children:"\u8bf7\u6c42\u7684\u76ee\u6807\u7aef\u53e3\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rpc.grpc.status_code"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"GRPC"})," \u7684\u5185\u90e8\u72b6\u6001\u7801\uff0c ",(0,t.jsx)(n.code,{children:"0"})," \u8868\u793a\u6210\u529f\uff0c ",(0,t.jsx)(n.code,{children:"\u975e0"})," \u8868\u793a\u5931\u8d25\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rpc.service"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"RPC"})," \u7684\u670d\u52a1\u540d\u79f0\uff0c\u6ce8\u610f\u8fd9\u91cc\u662f ",(0,t.jsx)(n.code,{children:"RPC"})," \u800c\u4e0d\u662f ",(0,t.jsx)(n.code,{children:"GRPC"}),"\uff0c\u56e0\u4e3a\u8fd9\u91cc\u662f\u901a\u7528\u5b9a\u4e49\uff0c\u5ba2\u6237\u7aef\u652f\u6301\u591a\u79cd ",(0,t.jsx)(n.code,{children:"RPC"})," \u901a\u4fe1\u534f\u8bae\uff0c ",(0,t.jsx)(n.code,{children:"GRPC"})," \u53ea\u662f\u5176\u4e2d\u4e00\u79cd\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rpc.method"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"RPC"})," \u7684\u65b9\u6cd5\u540d\u79f0\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rpc.system"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"RPC"})," \u534f\u8bae\u7c7b\u578b\uff0c\u5982\uff1a ",(0,t.jsx)(n.code,{children:"grpc"}),", ",(0,t.jsx)(n.code,{children:"thrift"})," \u7b49\u3002"]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"eventslogs",children:"Events/Logs"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(820488).A+"",width:"1279",height:"782"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Event/Log"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"grpc.metadata.outgoing"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"GRPC"})," \u5ba2\u6237\u7aef\u8bf7\u6c42\u63d0\u4ea4\u7684 ",(0,t.jsx)(n.code,{children:"Metadata"})," \u4fe1\u606f\uff0c\u53ef\u80fd\u4f1a\u6bd4\u8f83\u5927\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"grpc.request.baggage"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"GRPC"})," \u5ba2\u6237\u7aef\u8bf7\u6c42\u63d0\u4ea4\u7684 ",(0,t.jsx)(n.code,{children:"Baggage"})," \u4fe1\u606f\uff0c\u7528\u4e8e\u670d\u52a1\u95f4\u94fe\u8def\u4fe1\u606f\u4f20\u9012\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"grpc.request.message"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"GRPC"})," \u5ba2\u6237\u7aef\u8bf7\u6c42\u63d0\u4ea4\u7684 ",(0,t.jsx)(n.code,{children:"Message"})," \u6570\u636e\uff0c\u53ef\u80fd\u4f1a\u6bd4\u8f83\u5927\uff0c\u6700\u5927\u53ea\u8bb0\u5f55 ",(0,t.jsx)(n.code,{children:"512KB"}),"\uff0c\u5982\u679c\u8d85\u8fc7\u8be5\u5927\u5c0f\u5219\u5ffd\u7565\u3002\u4ec5\u5bf9 ",(0,t.jsx)(n.code,{children:"Unary"})," \u8bf7\u6c42\u7c7b\u578b\u6709\u6548\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"grpc.response.message"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"GRPC"})," \u5ba2\u6237\u7aef\u8bf7\u6c42\u63a5\u6536\u8fd4\u56de\u7684\u7684 ",(0,t.jsx)(n.code,{children:"Message"})," \u4fe1\u606f\uff0c\u53ef\u80fd\u4f1a\u6bd4\u8f83\u5927\u3002\u4ec5\u5bf9 ",(0,t.jsx)(n.code,{children:"Unary"})," \u8bf7\u6c42\u7c7b\u578b\u6709\u6548\u3002"]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"grpc-server-1",children:"GRPC Server"}),"\n",(0,t.jsx)(n.h4,{id:"attributes-1",children:"Attributes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(277773).A+"",width:"1080",height:"778"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GRPC Server"})," \u7aef\u7684 ",(0,t.jsx)(n.code,{children:"Attributes"})," \u542b\u4e49\u540c ",(0,t.jsx)(n.code,{children:"GRPC Client"}),"\uff0c\u5728\u540c\u4e00\u8bf7\u6c42\u4e2d\uff0c\u6253\u5370\u7684\u6570\u636e\u57fa\u672c\u4e00\u81f4\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"events",children:"Events"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(803224).A+"",width:"1277",height:"773"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GRPC Server"})," \u7aef\u7684 ",(0,t.jsx)(n.code,{children:"Events"})," \u4e0e ",(0,t.jsx)(n.code,{children:"GRPC Client"})," \u4e0d\u540c\u7684\u662f\uff0c\u5728\u540c\u4e00\u8bf7\u6c42\u4e2d\uff0c\u670d\u52a1\u7aef\u63a5\u6536\u5230\u7684 ",(0,t.jsx)(n.code,{children:"metadata"})," \u4e3a ",(0,t.jsx)(n.code,{children:"grpc.metadata.incoming"}),"\uff0c\u5176\u4ed6\u540c ",(0,t.jsx)(n.code,{children:"GRPC Client"}),"\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},820488:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/0f927b890d51a96cd819857e6e826814-b98e306c04a82995c39d0bdddb329ff1.png"},803224:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/13950e44719de3a7f290604e14875ad9-22f82e3f5b019f8552a7006311b0dc90.png"},109022:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/2424a95e043743c114f602a7ebf671b6-0669d745ca35550a4d569052dad20229.png"},939838:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/24a9dec17cb299ef7f75cd7377f0ba37-1bd52bbbf5432545b9025ab265397b1b.png"},639885:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/274bc570949621ddcfc49bdec712a678-4c3f28e0dfaeaf50358dae8777b037e3.png"},16283:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/34194c58c244fa10fba209136a50b45a-ca14b58ed821a3be254208126eeb64bb.png"},202808:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/3d182e25e546bd73aa985a464cf08553-7bbb6da2f414799be534866f9905c2ec.png"},426750:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/9ceec71a1941fbfcf90cff7cec136e93-94fc8e15f0d06a9f6052f224b3ad1460.png"},486652:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/d22d732680afc44faeb3ba59dd0b4871-97bdb6eacc37e73fd29679c606c39d33.png"},277773:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/e3ffe9788f89155b009d360aeb4c1694-05ed17d69d6196e4e57a1c553a0ed93a.png"},487132:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/f8b6c13e6a79c6fbd88493d028b87bdf-33622e5880bb89478194538ef8da3a98.png"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var t=r(296540);const s={},c=t.createContext(s);function d(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);