(this["webpackJsonpn-r-media"]=this["webpackJsonpn-r-media"]||[]).push([[0],{11:function(e,t,a){e.exports={article:"home-detail_article__3fDK2",back:"home-detail_back__1RGeb",header:"home-detail_header__2QtHu",headerLeft:"home-detail_headerLeft__3DvIw",headerRight:"home-detail_headerRight__2gNjx",overview:"home-detail_overview__3BKaf",move:"home-detail_move__1-JuI"}},13:function(e,t,a){e.exports={footer:"footer_footer__1lZIc",title:"footer_title__pkoUs",email:"footer_email__qVh63",link:"footer_link__1Jh0W"}},14:function(e,t,a){e.exports={paging:"page_paging__3Plo-",page:"page_page__KUQfq",left:"page_left__HVMgi",right:"page_right__2bOef"}},15:function(e,t,a){e.exports={navbar:"navbar_navbar__q1H5d",logo:"navbar_logo__2iJVN",menu:"navbar_menu__3MUJB"}},20:function(e,t,a){e.exports={list:"movie-list_list__30Z-K",show:"movie-list_show__2Ghfb",swipe:"movie-list_swipe__1XBaZ"}},34:function(e,t,a){e.exports={main:"main_main__2W-l3"}},36:function(e,t,a){e.exports={container:"loading_container__BXYsr"}},38:function(e,t,a){e.exports={poster:"movie_poster__wM_Ia"}},40:function(e,t,a){e.exports={ball:"ball_ball__1hyPM",spin:"ball_spin__155rn"}},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(32),i=a.n(r),o=a(4),s=a(2),l=a(15),j=a.n(l),d=a.p+"static/media/logo.f6c094c7.png",h=[{path:"/",label:"\uc601\ud654"},{path:"/tv",label:"TV"},{path:"/people",label:"\uc778\ubb3c"}],b=a(0);var u=function(){return Object(b.jsxs)("nav",{className:j.a.navbar,children:[Object(b.jsx)("div",{className:j.a.logo,children:Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("img",{src:d,alt:"logo"})})}),Object(b.jsx)("ul",{className:j.a.menu,children:h.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsxs)(o.b,{to:e.path,children:[" ",e.label]})},e.label)}))})]})},v=a(34),m=a.n(v);var f=function(e){var t=e.children;return Object(b.jsx)("main",{className:m.a.main,children:t})},p=a(13),O=a.n(p);var x=function(){return Object(b.jsxs)("footer",{id:"contact",className:O.a.footer,children:[Object(b.jsx)("h1",{className:O.a.title,children:"Let talk"}),Object(b.jsx)("h2",{className:O.a.email,children:"wkdrjsdlf2@gmail.com"}),Object(b.jsx)("div",{className:O.a.link,children:Object(b.jsx)("a",{href:"https://github.com/takeaways",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:"fab fa-github"})})}),Object(b.jsxs)("p",{className:"contact__rights",children:[(new Date).getFullYear()," Median - All rights reserved"]})]})},g=a(9),_=a(35),w=a.n(_),N=a(36),k=a.n(N);var M=function(){return Object(b.jsx)("div",{className:k.a.container,children:Object(b.jsx)(w.a,{type:"cylon",height:"10%",width:"10%"})})},y=Object(n.createContext)(!1),I=Object(n.createContext)(null);var P,C,F=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(g.a)(a,2),r=c[0],i=c[1];return Object(b.jsx)(y.Provider,{value:r,children:Object(b.jsxs)(I.Provider,{value:i,children:[t,r&&Object(b.jsx)(M,{})]})})},L=a(37),R=a.n(L).a.create({baseURL:null!==(P="https://api.themoviedb.org/3")?P:"https://api.themoviedb.org/3",params:{api_key:null!==(C="def604eb5a3e1c5dc74b8390a4fd10a3")?C:"def604eb5a3e1c5dc74b8390a4fd10a3",language:"ko-KR"}});var B=function(e,t){var a=function(){var e=Object(n.useContext)(I);if(!e)throw new Error("Can't use dispatch before initialize");return e}(),c=Object(n.useState)(null),r=Object(g.a)(c,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){a(!0),R.get(e,t).then((function(e){o(e.data),setTimeout((function(){a(!1)}),1300)}))}),[null===t||void 0===t?void 0:t.params.page]),i},E=a(38),J=a.n(E);var q=function(e){var t=e.movie;return Object(b.jsx)(o.b,{to:"/movie/".concat(t.id),children:Object(b.jsx)("div",{className:J.a.poster,style:{backgroundImage:"url(https://image.tmdb.org/t/p/w500".concat(t.poster_path,")")},children:Object(b.jsxs)("header",{children:[Object(b.jsx)("h3",{children:t.title}),Object(b.jsx)("span",{children:t.genre_ids.join(",")}),Object(b.jsx)("span",{children:t.release_date}),Object(b.jsxs)("p",{children:[t.overview.substr(0,100),"..."]})]})})})},A=a(20),H=a.n(A);var K=function(e){var t=e.movies,a=e.genres,c=Object(n.useState)(!1),r=Object(g.a)(c,2),i=r[0],o=r[1],s=Object(n.useMemo)((function(){return o(!1),t.map((function(e){return e.genre_ids=e.genre_ids.map((function(e){var t=a.find((function(t){return t.id===e}));return t?t.name:e})),e}))}),[t,a]);return Object(n.useEffect)((function(){setTimeout((function(){o(!0)}),100)}),[t]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:"".concat(H.a.list," ").concat(i?H.a.show:""),children:s.map((function(e){return Object(b.jsx)(q,{movie:e},e.id)}))})})},S=a(14),D=a.n(S);var T=function(e){var t=e.page,a=e.total,n=Object(s.f)(),c=Object(s.g)(),r=function(e){n.push({pathname:c.pathname,search:"?page=".concat(e)})};return Object(b.jsxs)("div",{className:D.a.paging,children:[Object(b.jsx)("div",{className:D.a.left,onClick:function(){return r(t-1<1?1:t-1)},children:"<"}),Object(b.jsxs)("div",{className:D.a.page,children:[t," / ",a]}),Object(b.jsx)("div",{className:D.a.right,onClick:function(){return r(t+1>a?a:t+1)},children:">"})]})},U=a(39),V=a.n(U);var W=function(){var e=Object(s.g)(),t=V.a.parse(e.search,{ignoreQueryPrefix:!0}),a=Object(n.useState)(t.page?Number(t.page):1),c=Object(g.a)(a,2),r=c[0],i=c[1],o=B("/genre/movie/list"),l=B("/movie/popular",{params:{page:r}});return Object(n.useEffect)((function(){i(t.page?Number(t.page):1)}),[t]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(T,{page:(null===l||void 0===l?void 0:l.page)||0,total:(null===l||void 0===l?void 0:l.total_pages)||0}),Object(b.jsx)(K,{movies:(null===l||void 0===l?void 0:l.results)||[],genres:(null===o||void 0===o?void 0:o.genres)||[]})]})},Q=a(40),Z=a.n(Q);var G=function(e){var t=e.src,a=Object(n.useRef)(null);return Object(n.useLayoutEffect)((function(){var e=function(e){var t=Math.floor(2*Math.random()+1),a=Math.floor(2*Math.random()+1),n=40;return function(){if(null!==e.current){var c=e.current.getBoundingClientRect(),r=c.x,i=c.y;i>=innerHeight-n?a=-2*Math.floor(2*Math.random()):r>=innerWidth-n?t=-2*Math.floor(2*Math.random()):i<=0?a=2*Math.floor(2*Math.random()):r<=0&&(t=2*Math.floor(2*Math.random())),e.current.style.left="".concat(r+1*t,"px"),e.current.style.top="".concat(i+1*a,"px")}}}(a);var t=requestAnimationFrame((function t(){e(),requestAnimationFrame(t)}));return function(){cancelAnimationFrame(t)}}),[]),Object(b.jsx)("div",{ref:a,className:Z.a.ball,style:{top:Math.floor(Math.random()*window.innerHeight),left:Math.floor(Math.random()*window.innerWidth)},children:t&&Object(b.jsx)("img",{src:t})})},X=a.p+"static/media/snow.39916083.png",Y=a(11),z=a.n(Y);var $=function(){var e=Object(s.h)().movieId,t=B("/movie/".concat(e)),a=Object(s.f)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("article",{className:z.a.article,style:{backgroundImage:"url(https://image.tmdb.org/t/p/w500".concat(null===t||void 0===t?void 0:t.poster_path,")")},children:[Object(b.jsx)("button",{className:z.a.back,onClick:function(){a.goBack()},children:Object(b.jsx)("i",{className:"fas fa-chevron-left"})}),Object(b.jsxs)("header",{className:z.a.header,children:[Object(b.jsxs)("div",{className:z.a.headerLeft,children:[Object(b.jsx)("h2",{children:null===t||void 0===t?void 0:t.title}),Object(b.jsx)("h3",{children:null===t||void 0===t?void 0:t.tagline}),Object(b.jsx)("span",{children:null===t||void 0===t?void 0:t.release_date})]}),Object(b.jsx)("div",{className:z.a.headerRight,style:{backgroundImage:"url(https://image.tmdb.org/t/p/w500".concat(null===t||void 0===t?void 0:t.backdrop_path,")")},children:Object(b.jsx)("p",{className:z.a.overview,children:null===t||void 0===t?void 0:t.overview})})]}),new Array(10).fill(0).map((function(e,t){return Object(b.jsx)(G,{src:X},t)}))]})})};var ee=function(){var e=Object(s.i)().url;return Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{exact:!0,path:e,children:Object(b.jsx)(W,{})}),Object(b.jsx)(s.a,{path:"".concat(e,"/:movieId"),children:Object(b.jsx)($,{})})]})};var te=function(){return Object(b.jsx)("div",{children:"TvListPage"})};var ae=function(){var e=Object(s.i)().url;return Object(b.jsx)(s.c,{children:Object(b.jsx)(s.a,{exact:!0,path:e,children:Object(b.jsx)(te,{})})})};var ne=function(){return Object(b.jsx)("div",{children:"PeopleListPage"})};var ce=function(){return Object(b.jsx)("div",{children:"PeopleDetailPage"})};var re=function(){var e=Object(s.i)().url;return console.log("".concat(e,"/:id")),Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{path:"".concat(e,"/:id"),children:Object(b.jsx)(ce,{})}),Object(b.jsx)(s.a,{exact:!0,path:e,children:Object(b.jsx)(ne,{})})]})};var ie=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{}),Object(b.jsx)(f,{children:Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{path:"/tv",children:Object(b.jsx)(ae,{})}),Object(b.jsx)(s.a,{path:"/people",children:Object(b.jsx)(re,{})}),Object(b.jsx)(s.a,{path:["/movie","/"],children:Object(b.jsx)(ee,{})})]})}),Object(b.jsx)(x,{})]})};a(71),a(72);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(F,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(ie,{})})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.dd8c5c26.chunk.js.map