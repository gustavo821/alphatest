(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[32],{1144:function(e,n,t){},1145:function(e,n,t){},1183:function(e,n,t){"use strict";t.r(n);var c=t(55),a=t(0),i=t.n(a),o=t(1),s=t(14),r=t(6),l=t(25),d=t(819),u=(t(821),t(11)),b=t(65),j=(t(1144),t(1145),t(614)),p=t.n(j),f=t(48),h=t(655),v=t(18),O=b[u.a.get()].chainInfo;n.default=Object(f.b)("wallet")(Object(f.c)((function(e){var n=e.wallet,t=e.lang,a=Object(r.useState)("liquidity"),b=Object(s.a)(a,2),j=b[0],f=b[1],m=Object(l.useHistory)(),y=Object(r.useState)(!1),x=Object(s.a)(y,2),k=x[0],_=x[1],g=Object(l.useParams)(),w=g.version,I=g.chainId,N=g.symbol,q=g.baseToken,T=g.address,S=g.type,C=Object(h.a)(),J=O[I]&&O[I].name,z={version:w,chainId:I,symbol:N,baseToken:q,address:T,wallet:n,type:S,lang:t},E="/addsymbol/".concat(w||"v1","/").concat(I,"/").concat(S,"/").concat(N,"/").concat(q,"/").concat(T);C.has("baseTokenId")&&(z.baseTokenId=C.get("baseTokenId")),C.has("symbolId")&&(z.symbolId=C.get("symbolId"));var F=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.S)(n.detail.chainId,T,n.detail.account).catch((function(e){return console.log(e)}));case 2:t=e.sent,_(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Y.update();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){n&&n.detail&&n.detail.account&&"v2_lite_open"===w&&(F(),H())}),[n,n.detail,T]);var P=p()("mining-info",j,{"open-zone":"v2_lite_open"===w});return Object(v.jsxs)("div",{className:P,children:[Object(v.jsxs)("div",{className:"pool-header",children:[Object(v.jsx)("div",{className:"pool-network",children:"lp"===S||"v2"===w||"v2_lite"===w||"v2_lite_open"===w||"option"===w?"".concat(q," @ ").concat(J):"".concat(N,"/").concat(q," @ ").concat(J)}),"v2_lite_open"!==w&&Object(v.jsx)("div",{className:"check-trade-liquidity",children:Object(v.jsx)("div",{className:"liquidity-mining",onClick:function(){return f("liquidity")},children:t["liquidity-mining"]})})]}),Object(v.jsx)("div",{className:"pool-info",children:Object(v.jsx)(d.a,Object(c.a)({},z))}),k&&"v2_lite_open"===w&&Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"add-symbol",children:Object(v.jsx)("button",{onClick:function(){return function(e){m.push(e)}(E)},children:t["add-symbol"]})})})]})})))}}]);
//# sourceMappingURL=32.e77359dd.chunk.js.map