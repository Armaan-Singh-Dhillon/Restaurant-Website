import{S as p,i as y,s as D,k as _,l as d,m,h as o,n as g,b as v,I as c,W as S}from"./index.5177b346.js";function h(s,a,l){const t=s.slice();return t[2]=a[l],t}function f(s){let a;return{c(){a=_("div"),this.h()},l(l){a=d(l,"DIV",{class:!0}),m(a).forEach(o),this.h()},h(){g(a,"class","star "+s[0](s[2])+" svelte-o0wt08")},m(l,t){v(l,a,t)},p:c,d(l){l&&o(a)}}}function b(s){let a,l=Array.from({length:5},u),t=[];for(let n=0;n<l.length;n+=1)t[n]=f(h(s,l,n));return{c(){a=_("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){a=d(n,"DIV",{class:!0});var r=m(a);for(let e=0;e<t.length;e+=1)t[e].l(r);r.forEach(o),this.h()},h(){g(a,"class","star-container svelte-o0wt08")},m(n,r){v(n,a,r);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(a,null)},p(n,[r]){if(r&1){l=Array.from({length:5},u);let e;for(e=0;e<l.length;e+=1){const i=h(n,l,e);t[e]?t[e].p(i,r):(t[e]=f(i),t[e].c(),t[e].m(a,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=l.length}},i:c,o:c,d(n){n&&o(a),S(t,n)}}}const u=(s,a)=>a+1;function k(s,a,l){let{starData:t=0}=a;function n(r){const e=Math.round(t*2)/2;return r<=e?r===Math.floor(e)&&e%1!==0?"half":"full":"empty"}return s.$$set=r=>{"starData"in r&&l(1,t=r.starData)},[n,t]}class I extends p{constructor(a){super(),y(this,a,k,b,D,{starData:1})}}export{I as S};
