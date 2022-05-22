(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{118:function(n,e,t){"use strict";t.r(e);var i,r,o,a,c,l,s,h,d=t(21),b=t(0),j=t(39),u=t.n(j),p=t(83),f=t(19),g=t(49),v=t(54),x=t(11),m=t(7),O=t(123),w=t(124),y=t(125),k=t(6),z=Object(f.c)(O.a.nav)(i||(i=Object(d.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    width: 100%;\n    top: 0;\n    height: 80px;\n    font-style: 14px;\n    padding: 20px 60px;\n    color: white;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));\n"]))),q=f.c.div(r||(r=Object(d.a)(["\n    display: flex;\n    align-items: center;\n"]))),C=Object(f.c)(O.a.svg)(o||(o=Object(d.a)(["\n    margin-right: 50px;\n    width: 95px;\n    height: 25px;\n    fill: ",";\n    path {\n        stroke-width: 6px;\n        stroke: white;\n    }\n"])),(function(n){return n.theme.red})),S=f.c.ul(a||(a=Object(d.a)(["\n    display: flex;\n    align-items: center;\n"]))),M=f.c.li(c||(c=Object(d.a)(["\n    margin-right: 20px;\n    color: ",";\n    transition: color 0.3s ease-in-out;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    &:hover {\n        color: ",";\n    }\n"])),(function(n){return n.theme.white.darker}),(function(n){return n.theme.white.lighter})),H=f.c.span(l||(l=Object(d.a)(["\n    color: white;\n    display: flex;\n    align-items: center;\n    position: relative;\n    svg {\n        height: 25px;\n        cursor: pointer;\n    }\n"]))),P=Object(f.c)(O.a.span)(s||(s=Object(d.a)(["\n    position: absolute;\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    bottom: -10px;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    background-color: ",";\n"])),(function(n){return n.theme.red})),T=Object(f.c)(O.a.input)(h||(h=Object(d.a)(["\n    transform-origin: right center;\n    position: absolute;\n    right: 0;\n    width: 280px;\n    line-height: 40px;\n    text-indent: 40px;\n    z-index: -1;\n    color: white;\n    font-size: 16px;\n    background-color: rgba(0, 0, 0, 0.7);\n    border: 1px solid ",";\n"])),(function(n){return n.theme.white.lighter})),B={normal:{fillOpacity:1},active:{fillOpacity:[1,0,.5,0,.7,1]}},E={top:{backgroundColor:"rgba(0,0,0,0)"},scroll:{backgroundColor:"rgba(0,0,0,1)"}};var I=function(){var n=Object(b.useState)(!1),e=Object(m.a)(n,2),t=e[0],i=e[1],r=Object(x.f)("/"),o=Object(x.f)("/tv"),a=Object(w.a)(),c=Object(w.a)(),l=Object(y.a)().scrollY;return Object(b.useEffect)((function(){l.onChange((function(){l.get()>80?c.start("scroll"):c.start("top")}))}),[c,l]),Object(k.jsxs)(z,{variants:E,initial:"top",animate:c,children:[Object(k.jsxs)(q,{children:[Object(k.jsx)(C,{variants:B,whileHover:"active",initial:"normal",xmlns:"http://www.w3.org/2000/svg",width:"1024",height:"276.742",viewBox:"0 0 1024 276.742",children:Object(k.jsx)(O.a.path,{d:"M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"})}),Object(k.jsxs)(S,{children:[Object(k.jsx)(M,{children:Object(k.jsxs)(v.b,{to:"/",children:["Home",(null===r||void 0===r?void 0:r.isExact)&&Object(k.jsx)(P,{layoutId:"dot"})]})}),Object(k.jsx)(M,{children:Object(k.jsxs)(v.b,{to:"tv",children:["Tv Shows",o&&Object(k.jsx)(P,{layoutId:"dot"})]})})]})]}),Object(k.jsx)(q,{children:Object(k.jsxs)(H,{children:[Object(k.jsx)(O.a.svg,{onClick:function(){t?a.start({scaleX:0}):a.start({scaleX:1}),i((function(n){return!n}))},animate:{x:t?-245:0},transition:{type:"linear"},fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(k.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),Object(k.jsx)(T,{animate:a,initial:{scaleX:0},transition:{type:"linear"},placeholder:"Search for movie or TV show..."})]})})]})};function L(){return fetch("".concat("https://api.themoviedb.org/3","/movie/now_playing?api_key=").concat("c5db3f44685f4f998fe09a6423a816b2")).then((function(n){return n.json()}))}var Q=function(){var n=Object(g.useQuery)(["movies","nowPlaying"],L),e=n.data,t=n.isLoading;return console.log(e,t),Object(k.jsx)("div",{style:{backgroundColor:"whitesmoke",height:"200vh"}})};var X=function(){return null};var J=function(){return null};var R,_=function(){return Object(k.jsxs)(v.a,{children:[Object(k.jsx)(I,{}),Object(k.jsxs)(x.c,{children:[Object(k.jsx)(x.a,{path:"/tv",children:Object(k.jsx)(J,{})}),Object(k.jsx)(x.a,{path:"/search",children:Object(k.jsx)(X,{})}),Object(k.jsx)(x.a,{path:"/",children:Object(k.jsx)(Q,{})})]})]})},A=Object(f.b)(R||(R=Object(d.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:black;\n  line-height: 1.2;\n  \n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"]))),D=new g.QueryClient;u.a.render(Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(p.a,{children:Object(k.jsx)(g.QueryClientProvider,{client:D,children:Object(k.jsxs)(f.a,{theme:{red:"#e51013",black:{veryDark:"#141414",darker:"#181818",lighter:"#2f2f2f"},white:{lighter:"#fff",darker:"#e5e5e5"}},children:[Object(k.jsx)(A,{}),Object(k.jsx)(_,{})]})})})}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.11b314c6.chunk.js.map