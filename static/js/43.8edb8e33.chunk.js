"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[43],{43:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r,c,i=t(861),s=t(439),a=t(687),u=t.n(a),o=t(168),p=t(686),h=p.Z.div(r||(r=(0,o.Z)(["\ndisplay: flex;\n\n> img {\n    width: 200px;\n    margin-right: 20px;\n}\n"]))),l=p.Z.span(c||(c=(0,o.Z)(["\nfont-weight: 900;\nfont-size: 24px\n"]))),f=t(184);function v(e){var n=e.movie,t=n.poster_path,r=n.title,c=n.release_date,i=n.vote_average,s=n.overview,a=n.genres,u="https://image.tmdb.org/t/p/w200".concat(t),o=a.map((function(e){return e.name}));return(0,f.jsxs)(h,{children:[(0,f.jsx)("img",{src:u,alt:r}),(0,f.jsxs)("div",{children:[(0,f.jsx)(l,{children:r}),(0,f.jsxs)(l,{children:["(",c.slice(0,4),")"]}),(0,f.jsxs)("p",{children:["User score: ",Math.round(10*i)," %"]}),(0,f.jsx)("h4",{children:"Overview:"}),(0,f.jsx)("p",{children:s}),(0,f.jsx)("h4",{children:"Genres: "}),(0,f.jsx)("p",{children:o.join(", ")})]})]})}var d=t(791),x=t(689),m=t(87),j=t(916);function g(){var e,n,t=(0,d.useState)(null),r=(0,s.Z)(t,2),c=r[0],a=r[1],o=(0,x.UO)().movieId,p=(0,x.TH)(),h=(0,d.useRef)(null!==(e=null===(n=p.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,d.useEffect)((function(){function e(){return(e=(0,i.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.vq)(n);case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(n){e.apply(this,arguments)}(o)}),[o]),(0,f.jsxs)("div",{children:[(0,f.jsx)(m.rU,{to:h.current,children:"Go back"}),c&&(0,f.jsx)(v,{movie:c}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(m.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(m.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,f.jsx)(x.j3,{})]})}},916:function(e,n,t){t.d(n,{Hg:function(){return a},M1:function(){return f},UN:function(){return h},tx:function(){return d},vq:function(){return o}});var r=t(861),c=t(687),i=t.n(c),s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGUzZjFhNWMzYmU3YjcyZWM4MjA1MWE5YTM1ZTlmYiIsInN1YiI6IjY0NmE3ZGRiZjg1OTU4MDE3NDA4MzAzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c1FUz_8z8vCObT-x5HWLuwQhDIDSQZJcUHKPD0QJOTU"}};function a(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",s);case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),s);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),s);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),s);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US"),s);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}},861:function(e,n,t){function r(e,n,t,r,c,i,s){try{var a=e[i](s),u=a.value}catch(o){return void t(o)}a.done?n(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,i){var s=e.apply(n,t);function a(e){r(s,c,i,a,u,"next",e)}function u(e){r(s,c,i,a,u,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=43.8edb8e33.chunk.js.map