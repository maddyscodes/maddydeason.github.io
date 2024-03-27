import{S as $,i as x,s as ee,k as v,a as P,q as D,l as _,m as y,c as F,r as j,h as p,n as h,b as M,H as u,u as A,D as O,N as te,G as V}from"./index.c74dd74d.js";import{b as W}from"./paths.4792893e.js";function Q(n,e,s){const a=n.slice();return a[1]=e[s],a}function Z(n){let e,s,a;return{c(){e=v("img"),this.h()},l(t){e=_(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){h(e,"class","projectCard_image svelte-1nk8bry"),V(e.src,s=W+"/assets/"+n[0].image)||h(e,"src",s),h(e,"alt",a=n[0].imageAlt)},m(t,i){M(t,e,i)},p(t,i){i&1&&!V(e.src,s=W+"/assets/"+t[0].image)&&h(e,"src",s),i&1&&a!==(a=t[0].imageAlt)&&h(e,"alt",a)},d(t){t&&p(e)}}}function z(n){let e,s=n[0].endDate+"",a;return{c(){e=v("time"),a=D(s)},l(t){e=_(t,"TIME",{});var i=y(e);a=j(i,s),i.forEach(p)},m(t,i){M(t,e,i),u(e,a)},p(t,i){i&1&&s!==(s=t[0].endDate+"")&&A(a,s)},d(t){t&&p(e)}}}function J(n){let e,s=n[1]+"",a;return{c(){e=v("li"),a=D(s),this.h()},l(t){e=_(t,"LI",{class:!0});var i=y(e);a=j(i,s),i.forEach(p),this.h()},h(){h(e,"class","projectCard_listItem svelte-1nk8bry")},m(t,i){M(t,e,i),u(e,a)},p(t,i){i&1&&s!==(s=t[1]+"")&&A(a,s)},d(t){t&&p(e)}}}function Y(n){let e,s=n[0].urlText+"",a,t;return{c(){e=v("a"),a=D(s),this.h()},l(i){e=_(i,"A",{href:!0});var g=y(e);a=j(g,s),g.forEach(p),this.h()},h(){h(e,"href",t=n[0].url)},m(i,g){M(i,e,g),u(e,a)},p(i,g){g&1&&s!==(s=i[0].urlText+"")&&A(a,s),g&1&&t!==(t=i[0].url)&&h(e,"href",t)},d(i){i&&p(e)}}}function ae(n){let e,s,a,t=n[0].title+"",i,g,b,T,E=n[0].startDate+"",U,L,X,k,H,C,I=n[0].description+"",R,N,d=n[0].image&&Z(n),f=n[0].endDate&&z(n),S=n[0].skills,c=[];for(let l=0;l<S.length;l+=1)c[l]=J(Q(n,S,l));let m=n[0].url&&Y(n);return{c(){e=v("section"),d&&d.c(),s=P(),a=v("h3"),i=D(t),g=P(),b=v("span"),T=v("time"),U=D(E),L=D(" 〜 "),f&&f.c(),X=P(),k=v("ul");for(let l=0;l<c.length;l+=1)c[l].c();H=P(),C=v("p"),R=D(I),N=P(),m&&m.c(),this.h()},l(l){e=_(l,"SECTION",{class:!0});var r=y(e);d&&d.l(r),s=F(r),a=_(r,"H3",{class:!0});var o=y(a);i=j(o,t),o.forEach(p),g=F(r),b=_(r,"SPAN",{class:!0});var w=y(b);T=_(w,"TIME",{});var G=y(T);U=j(G,E),G.forEach(p),L=j(w," 〜 "),f&&f.l(w),w.forEach(p),X=F(r),k=_(r,"UL",{class:!0});var K=y(k);for(let q=0;q<c.length;q+=1)c[q].l(K);K.forEach(p),H=F(r),C=_(r,"P",{class:!0});var B=y(C);R=j(B,I),B.forEach(p),N=F(r),m&&m.l(r),r.forEach(p),this.h()},h(){h(a,"class","projectCard_heading svelte-1nk8bry"),h(b,"class","projectCard_period svelte-1nk8bry"),h(k,"class","projectCard_list svelte-1nk8bry"),h(C,"class","projectCard_body svelte-1nk8bry"),h(e,"class","projectCard svelte-1nk8bry")},m(l,r){M(l,e,r),d&&d.m(e,null),u(e,s),u(e,a),u(a,i),u(e,g),u(e,b),u(b,T),u(T,U),u(b,L),f&&f.m(b,null),u(e,X),u(e,k);for(let o=0;o<c.length;o+=1)c[o]&&c[o].m(k,null);u(e,H),u(e,C),u(C,R),u(e,N),m&&m.m(e,null)},p(l,[r]){if(l[0].image?d?d.p(l,r):(d=Z(l),d.c(),d.m(e,s)):d&&(d.d(1),d=null),r&1&&t!==(t=l[0].title+"")&&A(i,t),r&1&&E!==(E=l[0].startDate+"")&&A(U,E),l[0].endDate?f?f.p(l,r):(f=z(l),f.c(),f.m(b,null)):f&&(f.d(1),f=null),r&1){S=l[0].skills;let o;for(o=0;o<S.length;o+=1){const w=Q(l,S,o);c[o]?c[o].p(w,r):(c[o]=J(w),c[o].c(),c[o].m(k,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=S.length}r&1&&I!==(I=l[0].description+"")&&A(R,I),l[0].url?m?m.p(l,r):(m=Y(l),m.c(),m.m(e,null)):m&&(m.d(1),m=null)},i:O,o:O,d(l){l&&p(e),d&&d.d(),f&&f.d(),te(c,l),m&&m.d()}}}function ie(n,e,s){let{item:a}=e;return n.$$set=t=>{"item"in t&&s(0,a=t.item)},[a]}class oe extends ${constructor(e){super(),x(this,e,ie,ae,ee,{item:0})}}const se=[{title:"Developer Relations project for internal frontend ecosystem",startDate:"2023/01",endDate:"2024/02",skills:["Communication","Community Management","Documentation"],description:"A community building project aimed at fostering engagement and empowering tenants of the internal frontend ecosystem which provides a robust suite of frontend development tools, services, and resources. This project involved many initiatives including: creating and improving documentation to provide clear and accessible resources, developing an effective onboarding process to ensure a smooth transition for new tenants, designing and implementing a feedback survey and analysis to gather valuable insights, and fostering a collaborative environment through proactive engagement and support.",isFeatured:!1},{title:"Design System components development",startDate:"2022/9",endDate:"2023/03",skills:["React","Typescript","CSS(vanilla-extract)","HTML","Storybook","Cypress"],description:"Built a collection of reusable React components for a comprehensive Design System. By committing to code quality and collaborating closely with designers for the best approach, I contributed to a cohesive set of components that not only adhere to UX guidelines, but also streamline the development process for future projects. I continue to provide support for developers implementing the Design System.",isFeatured:!0},{title:"Web accessibility training for developers",startDate:"2021/4",endDate:"2024/02",skills:["Web Accessibility","HTML","Communication"],description:"Created and instructed an internal web accessibility training that achieved an NPS (Net Promoter Score) of +91 points and a knowledge increase KPI of almost 2x. One of the highest rated of all tech trainings in Rakuten.",url:"https://rakuten.today/blog/rakuten-creates-more-accessible-online-experience.html",urlText:"More about accessibility at Rakuten",image:"image-training.png",imageAlt:"me delivering my web accessibility training via Zoom",isFeatured:!0},{title:"Rakuten Keiba Odds Bet renewal project",startDate:"2018/07",endDate:"2019/02",skills:["Vue","Typescript","CSS(Sass)","HTML","GraphQL"],description:"Introduced Vue to renew a legacy betting system, drastically improving the user experience and web performance. Several new features were also introduced (such as being able to check the latest odds while selecting bets). Vue has now been widely implemented across the site, including in a completely new SPA version of the site.",url:"https://keiba.rakuten.co.jp/special_event/info/newoddsbet/",urlText:"Project promotional page (jp)",image:"image-keiba.png",imageAlt:"keiba odds bet renewal screens on mobile",isFeatured:!1},{title:"ArtKatsu - Art gallery loyalty app, UI/UX case study",startDate:"2023/04",endDate:"2023/12",skills:["Figma","Adobe XD","UX Research"],description:"A comprehensive UI/UX case study as part of the Google UX Design Professional Certificate program. Focusing on real-world scenarios and user-centered design principles, this project aimed to showcase my ability to create intuitive and visually appealing interfaces while solving complex user experience challenges. Stay tuned for the final results and an in-depth analysis of the design process.",url:"https://www.coursera.org/professional-certificates/google-ux-design",urlText:"More about this course",image:"image-artkatsu.png",imageAlt:"ArtKatsu wireframes",isFeatured:!1}];function le(n){return n.isFeatured}const ce=se.filter(le);export{oe as P,ce as f,se as p};
