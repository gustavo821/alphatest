(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[15],{628:function(e,i,s){},635:function(e,i,s){"use strict";s.r(i);var t=s(22),a=s(15),c=s(6),n=s(27),d=s(597),l=s(599),b=s(39),o=s(163),r=(s(628),s(570)),j=s.n(r),h=s(161),I=s(596),O=s(56),u=o[b.DeriEnv.get()].chainInfo;i.default=Object(h.b)("wallet")(Object(h.c)((function(e){var i=e.wallet,s=Object(c.useState)("liquidity"),b=Object(a.a)(s,2),o=b[0],r=b[1],h=Object(n.i)(),p=h.chainId,m=h.baseToken,N=h.address,f=h.type,k=Object(I.a)(),v=u[p].text,x={chainId:p,baseToken:m,address:N,wallet:i,type:f},y=j()("mining-info",o);return k.has("baseTokenId")&&(x.baseTokenId=k.get("baseTokenId")),k.has("symbolId")&&(x.symbolId=k.get("symbolId")),Object(O.jsxs)("div",{className:y,children:[Object(O.jsxs)("div",{className:"pool-header",children:[Object(O.jsxs)("div",{className:"pool-network",children:[m," @ ",v]}),Object(O.jsxs)("div",{className:"check-trade-liquidity",children:[Object(O.jsx)("div",{className:"liquidity-mining",onClick:function(){return r("liquidity")},children:"LIUQIDITY MINING"}),Object(O.jsx)("div",{className:"trade-mining",onClick:function(){return r("trade")},children:"TRADING MINING"})]})]}),Object(O.jsxs)("div",{className:"pool-info",children:[Object(O.jsx)(d.a,Object(t.a)({},x)),Object(O.jsx)(l.a,Object(t.a)({},x))]})]})})))}}]);
//# sourceMappingURL=15.fe2da7b2.chunk.js.map