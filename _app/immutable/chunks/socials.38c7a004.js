import{S as b,i as w,s as v,k as r,l as h,m as u,h as i,n as o,b as y,D as _,N as k,a as S,c as E,O as x,H as d}from"./index.c74dd74d.js";const L="/maddyscodes.github.io/_app/immutable/assets/logo_maddy.5b197900.svg",j=new Date().getFullYear(),O=j-2015,p=[{name:"linkedin",url:"https://www.linkedin.com/in/maddysugiyoshi/"},{name:"codepen",url:"https://codepen.io/maddyscodes"},{name:"github",url:"https://github.com/maddyscodes"},{name:"behance",url:"http://www.behance.net/maddycodes"},{name:"twitter",url:"https://twitter.com/manasugiyoshi"}];function f(c,s,l){const e=c.slice();return e[0]=s[l],e}function g(c){let s,l,e;return{c(){s=r("li"),l=r("a"),e=S(),this.h()},l(t){s=h(t,"LI",{class:!0});var n=u(s);l=h(n,"A",{class:!0,href:!0,"aria-label":!0}),u(l).forEach(i),e=E(n),n.forEach(i),this.h()},h(){o(l,"class",x(`socials_link ${c[0].name}`)+" svelte-14jstow"),o(l,"href",c[0].url),o(l,"aria-label",`my ${c[0].name}`),o(s,"class","socials_item")},m(t,n){y(t,s,n),d(s,l),d(s,e)},p:_,d(t){t&&i(s)}}}function A(c){let s,l=p,e=[];for(let t=0;t<l.length;t+=1)e[t]=g(f(c,l,t));return{c(){s=r("ul");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){s=h(t,"UL",{class:!0});var n=u(s);for(let a=0;a<e.length;a+=1)e[a].l(n);n.forEach(i),this.h()},h(){o(s,"class","socials svelte-14jstow")},m(t,n){y(t,s,n);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(s,null)},p(t,[n]){if(n&0){l=p;let a;for(a=0;a<l.length;a+=1){const m=f(t,l,a);e[a]?e[a].p(m,n):(e[a]=g(m),e[a].c(),e[a].m(s,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=l.length}},i:_,o:_,d(t){t&&i(s),k(e,t)}}}class Y extends b{constructor(s){super(),w(this,s,null,A,v,{})}}export{Y as S,L as _,j as c,O as y};