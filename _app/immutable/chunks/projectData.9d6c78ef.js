import{S as N,i as B,s as O,k as v,a as S,q as T,l as b,m as k,c as A,r as P,h,n as p,b as I,H as f,u as q,D as M,N as V,G as R}from"./index.c74dd74d.js";import{b as L}from"./paths.93d9b8c4.js";function X(l,e,a){const i=l.slice();return i[1]=e[a],i}function H(l){let e,a,i;return{c(){e=v("img"),this.h()},l(t){e=b(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){p(e,"class","projectCard_image svelte-pirqb1"),R(e.src,a=L+"/assets/"+l[0].image)||p(e,"src",a),p(e,"alt",i=l[0].imageAlt)},m(t,n){I(t,e,n)},p(t,n){n&1&&!R(e.src,a=L+"/assets/"+t[0].image)&&p(e,"src",a),n&1&&i!==(i=t[0].imageAlt)&&p(e,"alt",i)},d(t){t&&h(e)}}}function G(l){let e,a=l[1]+"",i;return{c(){e=v("li"),i=T(a),this.h()},l(t){e=b(t,"LI",{class:!0});var n=k(e);i=P(n,a),n.forEach(h),this.h()},h(){p(e,"class","projectCard_listItem svelte-pirqb1")},m(t,n){I(t,e,n),f(e,i)},p(t,n){n&1&&a!==(a=t[1]+"")&&q(i,a)},d(t){t&&h(e)}}}function K(l){let e,a=l[0].urlText+"",i,t;return{c(){e=v("a"),i=T(a),this.h()},l(n){e=b(n,"A",{href:!0});var m=k(e);i=P(m,a),m.forEach(h),this.h()},h(){p(e,"href",t=l[0].url)},m(n,m){I(n,e,m),f(e,i)},p(n,m){m&1&&a!==(a=n[0].urlText+"")&&q(i,a),m&1&&t!==(t=n[0].url)&&p(e,"href",t)},d(n){n&&h(e)}}}function W(l){let e,a,i,t=l[0].title+"",n,m,g,F,_,w=l[0].description+"",C,D,u=l[0].image&&H(l),y=l[0].skills,c=[];for(let s=0;s<y.length;s+=1)c[s]=G(X(l,y,s));let d=l[0].url&&K(l);return{c(){e=v("section"),u&&u.c(),a=S(),i=v("h3"),n=T(t),m=S(),g=v("ul");for(let s=0;s<c.length;s+=1)c[s].c();F=S(),_=v("p"),C=T(w),D=S(),d&&d.c(),this.h()},l(s){e=b(s,"SECTION",{class:!0});var o=k(e);u&&u.l(o),a=A(o),i=b(o,"H3",{class:!0});var r=k(i);n=P(r,t),r.forEach(h),m=A(o),g=b(o,"UL",{class:!0});var j=k(g);for(let U=0;U<c.length;U+=1)c[U].l(j);j.forEach(h),F=A(o),_=b(o,"P",{class:!0});var E=k(_);C=P(E,w),E.forEach(h),D=A(o),d&&d.l(o),o.forEach(h),this.h()},h(){p(i,"class","projectCard_heading svelte-pirqb1"),p(g,"class","projectCard_list svelte-pirqb1"),p(_,"class","projectCard_body svelte-pirqb1"),p(e,"class","projectCard svelte-pirqb1")},m(s,o){I(s,e,o),u&&u.m(e,null),f(e,a),f(e,i),f(i,n),f(e,m),f(e,g);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(g,null);f(e,F),f(e,_),f(_,C),f(e,D),d&&d.m(e,null)},p(s,[o]){if(s[0].image?u?u.p(s,o):(u=H(s),u.c(),u.m(e,a)):u&&(u.d(1),u=null),o&1&&t!==(t=s[0].title+"")&&q(n,t),o&1){y=s[0].skills;let r;for(r=0;r<y.length;r+=1){const j=X(s,y,r);c[r]?c[r].p(j,o):(c[r]=G(j),c[r].c(),c[r].m(g,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=y.length}o&1&&w!==(w=s[0].description+"")&&q(C,w),s[0].url?d?d.p(s,o):(d=K(s),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i:M,o:M,d(s){s&&h(e),u&&u.d(),V(c,s),d&&d.d()}}}function Q(l,e,a){let{item:i}=e;return l.$$set=t=>{"item"in t&&a(0,i=t.item)},[i]}class $ extends N{constructor(e){super(),B(this,e,Q,W,O,{item:0})}}const Z=[{title:"Developer Relations project for internal frontend ecosystem",skills:["Communication","Community Management","Documentation"],description:"A community building project aimed at fostering engagement and empowering tenants of the internal frontend ecosystem which provides a robust suite of frontend development tools, services, and resources. This ongoing project involves many initiatives including: creating and improving documentation to provide clear and accessible resources, developing an effective onboarding process to ensure a smooth transition for new tenants, designing and implementing a feedback survey and analysis to gather valuable insights, and fostering a collaborative environment through proactive engagement and support.",isFeatured:!1},{title:"Design System components development",skills:["React","Typescript","CSS(vanilla-extract)","HTML","Storybook","Cypress"],description:"Built a collection of reusable React components for a comprehensive Design System. By committing to code quality and collaborating closely with designers for the best approach, I contributed to a cohesive set of components that not only adhere to UX guidelines, but also streamline the development process for future projects. I continue to provide support for developers implementing the Design System.",isFeatured:!0},{title:"Web accessibility training for developers",skills:["Web Accessibility","HTML","Communication"],description:"Created and continuously instruct an internal web accessibility training that achieved an NPS (Net Promoter Score) of +91 points and a knowledge increase KPI of almost 2x. One of the highest rated of all tech trainings in Rakuten.",url:"https://rakuten.today/blog/rakuten-creates-more-accessible-online-experience.html",urlText:"More about accessibility at Rakuten",image:"image-training.png",imageAlt:"me delivering my web accessibility training via Zoom",isFeatured:!0},{title:"Rakuten Keiba Odds Bet renewal project",skills:["Vue","Typescript","CSS(Sass)","HTML","GraphQL"],description:"Introduced Vue to renew a legacy betting system, drastically improving the user experience and web performance. Several new features were also introduced (such as being able to check the latest odds while selecting bets). Vue has now been widely implemented across the site, including in a completely new SPA version of the site.",url:"https://keiba.rakuten.co.jp/special_event/info/newoddsbet/",urlText:"Project promotional page (jp)",image:"image-keiba.png",imageAlt:"keiba odds bet renewal screens on mobile",isFeatured:!1},{title:"ArtKatsu - Art gallery loyalty app, UI/UX case study",skills:["Figma","Adobe XD","UX Research"],description:"Currently working on a comprehensive UI/UX case study as part of the Google UX Design Professional Certificate program. Focusing on real-world scenarios and user-centered design principles, this ongoing project aims to showcase my ability to create intuitive and visually appealing interfaces while solving complex user experience challenges. Stay tuned for the final results and an in-depth analysis of the design process.",url:"https://www.coursera.org/professional-certificates/google-ux-design",urlText:"More about this course",image:"image-artkatsu.png",imageAlt:"ArtKatsu wireframes",isFeatured:!1}];function z(l){return l.isFeatured}const x=Z.filter(z);export{$ as P,x as f,Z as p};
