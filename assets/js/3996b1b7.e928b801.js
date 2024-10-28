"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[85020],{980516:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=r(474848),o=r(28453);const s={title:"\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807",sidebar_position:3},i=void 0,c={id:"\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807",title:"\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.7.x/9-\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/1-\u670d\u52a1\u76d1\u63a7\u544a\u8b66/3-\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807.md",sourceDirName:"9-\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/1-\u670d\u52a1\u76d1\u63a7\u544a\u8b66",slug:"/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807",permalink:"/docs/2.7.x/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807",draft:!1,unlisted:!1,tags:[],version:"2.7.x",sidebarPosition:3,frontMatter:{title:"\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u76d1\u63a7\u544a\u8b66-\u540c\u6b65\u6307\u6807",permalink:"/docs/2.7.x/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u540c\u6b65\u6307\u6807"},next:{title:"\u76d1\u63a7\u544a\u8b66-\u6307\u6807\u5c5e\u6027",permalink:"/docs/2.7.x/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u6307\u6807\u5c5e\u6027"}},l={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"Meter Callback",id:"meter-callback",level:2},{value:"Metric Callback",id:"metric-callback",level:2},{value:"Primetheus Exporter",id:"primetheus-exporter",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u5f02\u6b65\u7c7b\u578b"})," \u7684\u76d1\u63a7\u6307\u6807\u53ea\u6709\u5728 ",(0,n.jsx)(t.code,{children:"metrics reader"})," \u5f00\u59cb\u4f7f\u7528\u8be5\u76d1\u63a7\u6307\u6807\u65f6\u624d\u4f1a\u6267\u884c\u6307\u6807\u8ba1\u7b97\u903b\u8f91\u3002\u5f02\u6b65\u7c7b\u578b\u7684\u76d1\u63a7\u6307\u6807\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u8be5\u56de\u8c03\u51fd\u6570\u7528\u4e8e\u751f\u6210\u6307\u6807\u6570\u503c\uff0c\u5e76\u5728 ",(0,n.jsx)(t.code,{children:"metrics reader"})," \u8bfb\u53d6\u6307\u6807\u65f6\u624d\u4f1a\u89e6\u53d1\u56de\u8c03\u51fd\u6570\u3002\u4f8b\u5982\uff0c\u673a\u5668CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8\u4f7f\u7528\u91cf\u7684\u6307\u6807\uff0c\u5982\u679c\u6ca1\u6709\u76ee\u6807\u7aef\u62c9\u53d6\u6216\u8005\u4f7f\u7528\u8be5\u6307\u6807\u65f6\uff0c\u63d0\u524d\u8ba1\u7b97\u6307\u6807\u503c\u6beb\u65e0\u610f\u4e49\u4e14\u6d6a\u8d39\u8ba1\u7b97\u8d44\u6e90\uff0c\u9002\u5408\u4f5c\u4e3a\u5f02\u6b65\u6307\u6807\u6765\u7ba1\u7406\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"gmetric"})," \u63d0\u4f9b\u7684\u5f02\u6b65\u7c7b\u578b\u6307\u6807\u5305\u542b\uff1a ",(0,n.jsx)(t.code,{children:"ObservableCounter, ObservableUpDownCounter, OvservableGauge"}),"\u3002\u5f02\u6b65\u6307\u6807\u7c7b\u578b\u5747\u662f\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"Observable"})," \u5f00\u5934\u547d\u540d\uff0c\u4e09\u79cd\u5f02\u6b65\u6307\u6807\u7684\u64cd\u4f5c\u90fd\u5dee\u4e0d\u591a\uff0c\u5747\u662f\u5728\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\u4e0b\u6709\u4e0d\u540c\u7684\u4f7f\u7528\u5dee\u5f02\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4eec\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u6765\u6f14\u793a\u5f02\u6b65\u6307\u6807\u7684\u57fa\u672c\u4f7f\u7528\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'package main\n\nimport (\n\t"context"\n\n\t"go.opentelemetry.io/otel/exporters/prometheus"\n\n\t"github.com/gogf/gf/contrib/metric/otelmetric/v2"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/gmetric"\n)\n\nvar (\n\tmeter = gmetric.GetGlobalProvider().Meter(gmetric.MeterOption{\n\t\tInstrument:        "github.com/gogf/gf/example/metric/basic",\n\t\tInstrumentVersion: "v1.0",\n\t})\n\tobservableCounter = meter.MustObservableCounter(\n\t\t"goframe.metric.demo.observable_counter",\n\t\tgmetric.MetricOption{\n\t\t\tHelp: "This is a simple demo for ObservableCounter usage",\n\t\t\tUnit: "%",\n\t\t},\n\t)\n\tobservableUpDownCounter = meter.MustObservableUpDownCounter(\n\t\t"goframe.metric.demo.observable_updown_counter",\n\t\tgmetric.MetricOption{\n\t\t\tHelp: "This is a simple demo for ObservableUpDownCounter usage",\n\t\t\tUnit: "%",\n\t\t},\n\t)\n\tobservableGauge = meter.MustObservableGauge(\n\t\t"goframe.metric.demo.observable_gauge",\n\t\tgmetric.MetricOption{\n\t\t\tHelp: "This is a simple demo for ObservableGauge usage",\n\t\t\tUnit: "%",\n\t\t},\n\t)\n)\n\nfunc main() {\n\tvar ctx = gctx.New()\n\n\t// Callback for observable metrics.\n\tmeter.MustRegisterCallback(func(ctx context.Context, obs gmetric.Observer) error {\n\t\tobs.Observe(observableCounter, 10)\n\t\tobs.Observe(observableUpDownCounter, 20)\n\t\tobs.Observe(observableGauge, 30)\n\t\treturn nil\n\t}, observableCounter, observableUpDownCounter, observableGauge)\n\n\t// Prometheus exporter to export metrics as Prometheus format.\n\texporter, err := prometheus.New(\n\t\tprometheus.WithoutCounterSuffixes(),\n\t\tprometheus.WithoutUnits(),\n\t)\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\n\t// OpenTelemetry provider.\n\tprovider := otelmetric.MustProvider(otelmetric.WithReader(exporter))\n\tprovider.SetAsGlobal()\n\tdefer provider.Shutdown(ctx)\n\n\t// HTTP Server for metrics exporting.\n\totelmetric.StartPrometheusMetricsServer(8000, "/metrics")\n}\n\n'})}),"\n",(0,n.jsx)(t.h2,{id:"meter-callback",children:"Meter Callback"}),"\n",(0,n.jsxs)(t.p,{children:["\u5f02\u6b65\u6307\u6807\u9700\u8981\u5b9a\u4e49 ",(0,n.jsx)(t.code,{children:"Callback"})," \u51fd\u6570\u6765\u7ba1\u7406\u6307\u6807\u6570\u503c\u53d8\u5316\uff0c\u53ea\u6709\u5728\u8bf7\u6c42\u6216\u4f7f\u7528\u8be5\u6307\u6807\u65f6\u624d\u4f1a\u6267\u884c\u8be5 ",(0,n.jsx)(t.code,{children:"Callback"})," \u51fd\u6570\u3002 ",(0,n.jsx)(t.code,{children:"Callback"})," \u51fd\u6570\u4e2d\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"Observe"})," \u51fd\u6570\u6765\u66f4\u65b0\u6307\u6807\u7684\u6570\u503c\uff0c\u9488\u5bf9\u4e0d\u540c\u5f02\u6b65\u6307\u6807\u7c7b\u578b\u7684 ",(0,n.jsx)(t.code,{children:"Observe"})," \u4f1a\u4ea7\u751f\u4e0d\u540c\u7684\u7ed3\u679c\u3002"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\u9488\u5bf9 ",(0,n.jsx)(t.code,{children:"ObservableCounter/ObservableUpDownCounter"})," \u6307\u6807\u7c7b\u578b\uff0c\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"Observe"})," \u51fd\u6570\u540e\u5c06\u4f1a\u5728\u539f\u6709\u6307\u6807\u6570\u503c\u4e0a\u8fdb\u884c\u589e\u51cf\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:["\u9488\u5bf9 ",(0,n.jsx)(t.code,{children:"ObservableGauge"})," \u6307\u6807\u7c7b\u578b\uff0c\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"Observe"})," \u51fd\u6570\u540e\uff0c\u8be5\u6307\u6807\u7684\u503c\u66f4\u4f1a\u66f4\u65b0\u4e3a ",(0,n.jsx)(t.code,{children:"Observe"})," \u7ed9\u5b9a\u7684\u6570\u503c\u3002"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"metric-callback",children:"Metric Callback"}),"\n",(0,n.jsxs)(t.p,{children:["\u9664\u4e86\u901a\u8fc7 ",(0,n.jsx)(t.code,{children:"Meter CallBack"})," \u6765\u5b9e\u73b0\u5f02\u6b65\u6307\u6807\u7684\u6570\u503c\u66f4\u65b0\uff0c\u4e5f\u53ef\u4ee5\u5728\u521b\u5efa\u6307\u6807\u65f6\u901a\u8fc7 ",(0,n.jsx)(t.code,{children:"MetricOption"})," \u6307\u5b9a ",(0,n.jsx)(t.code,{children:"Callback"})," \u51fd\u6570\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'observableCounter = meter.MustObservableCounter(\n\t"goframe.metric.demo.observable_counter",\n\tgmetric.MetricOption{\n\t\tHelp: "This is a simple demo for ObservableCounter usage",\n\t\tUnit: "%",\n\t\tCallback: func(ctx context.Context, obs gmetric.MetricObserver) error {\n\t\t\tobs.Observe(10)\n\t\t\treturn nil\n\t\t},\n\t},\n)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"primetheus-exporter",children:"Primetheus Exporter"}),"\n",(0,n.jsxs)(t.p,{children:["\u901a\u8fc7\u4ee5\u4e0b\u8def\u7531\u5c06\u6307\u6807\u901a\u8fc7 ",(0,n.jsx)(t.code,{children:"Prometheus"})," \u534f\u8bae\u66b4\u9732\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'otelmetric.StartPrometheusMetricsServer(8000, "/metrics")\n'})}),"\n",(0,n.jsxs)(t.p,{children:["\u6267\u884c\u540e\uff0c\u8bbf\u95ee ",(0,n.jsx)(t.a,{href:"http://127.0.0.1:8000/metrics",children:"http://127.0.0.1:8000/metrics"})," \u67e5\u770b\u66b4\u9732\u7684\u6307\u6807\uff1a"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(931004).A+"",width:"2858",height:"2014"})}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4eec\u8fd9\u91cc\u53ea\u5173\u6ce8\u672c\u6b21\u793a\u4f8b\u4e2d\u7684\u6307\u6807\uff0c\u5176\u4ed6\u81ea\u52a8\u66b4\u9732\u7684\u6307\u6807\u5728\u540e\u7eed\u7ae0\u8282\u4ecb\u7ecd\u3002"})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},931004:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/5e79d0fe7ae3773ee055a5d600abe7dd-1c2591143081cb2cfae2c39b619489bf.png"},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(296540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);