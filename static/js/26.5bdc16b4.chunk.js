(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[26],{698:function(e,i,n){},699:function(e,i,n){},722:function(e,i,n){"use strict";n.r(i);var s=n(125),a=n(25),t=n(5),c=n(30),d=n(644),l=(n(646),n(22)),o=n(165),b=n(594),r=n.n(b),j=n(88),u=n(607),h=(n(698),n(699),n(54)),p=o[l.DeriEnv.get()].chainInfo;i.default=Object(j.b)("wallet")(Object(j.c)((function(e){var i=e.wallet,n=e.lang,l=Object(t.useState)("liquidity"),o=Object(a.a)(l,2),b=o[0],j=o[1],O=Object(c.useParams)(),m=O.version,f=O.chainId,v=O.baseToken,k=O.address,y=O.type,I=Object(u.a)(),g=p[f].text,x={version:m,chainId:f,baseToken:v,address:k,wallet:i,type:y,lang:n},w=r()("mining-info",b);return I.has("baseTokenId")&&(x.baseTokenId=I.get("baseTokenId")),I.has("symbolId")&&(x.symbolId=I.get("symbolId")),Object(h.jsxs)("div",{className:w,children:[Object(h.jsxs)("div",{className:"pool-header",children:[Object(h.jsxs)("div",{className:"pool-network",children:[v," @ ",g]}),Object(h.jsx)("div",{className:"check-trade-liquidity",children:Object(h.jsx)("div",{className:"liquidity-mining",onClick:function(){return j("liquidity")},children:n["liquidity-mining"]})})]}),Object(h.jsx)("div",{className:"pool-info",children:Object(h.jsx)(d.a,Object(s.a)({},x))})]})})))}}]);
//# sourceMappingURL=26.5bdc16b4.chunk.js.map