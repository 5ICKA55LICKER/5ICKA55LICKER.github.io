(this.webpackJsonpkomfront=this.webpackJsonpkomfront||[]).push([[0],{120:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(42),c=t.n(o),i=(t(53),t(15)),l=t(2),u=(t(54),t(7)),f=t(8),s=t(43);function m(){var e=Object(u.a)(["\n    position: relative;\n    display: inline-block;\n    text-decoration: none;\n    z-index: 99;\n    pointer-events: auto;\n    font-size: 26px;\n    transform: scale(.6, 1);\n    -webkit-transform: scale(.6, 1); /* Safari and Chrome */\n    -moz-transform: scale(.6, 1); /* Firefox */\n    -ms-transform: scale(.6, 1); /* IE 9+ */\n    -o-transform: scale(.6, 1); /* Opera */\n\n    color: #cbcbcb;\n"]);return m=function(){return e},e}function d(){var e=Object(u.a)(["\n    position: relative;\n    z-index: 99;\n    display: inline-block;\n    text-decoration: none;\n    pointer-events: auto;\n    font-size: 26px;\n    transform: scale(.6, 1);\n    -webkit-transform: scale(.6, 1); /* Safari and Chrome */\n    -moz-transform: scale(.6, 1); /* Firefox */\n    -ms-transform: scale(.6, 1); /* IE 9+ */\n    -o-transform: scale(.6, 1); /* Opera */\n   \n    color: #cbcbcb;\n"]);return d=function(){return e},e}function h(){var e=Object(u.a)(["\n    \n    padding: 25px 35px; \n    box-sizing: border-box;\n    @media screen and (max-width: 900px) {\n        padding: 25px 10px; \n    }\n  \n"]);return h=function(){return e},e}var b=f.a.div(h()),v=Object(f.a)(i.Link)(d()),p=Object(f.a)(s.HashLink)(m()),E=function(e){var n=e.item;return a.a.createElement(b,null,"WORKS"!==n.name?a.a.createElement(v,{onClick:function(){return"HOME"===n.name?window.scroll({top:0,left:0,behavior:"smooth"}):null},to:n.link},n.name):a.a.createElement(p,{scroll:function(e){return function(e,n){var t=e.offsetTop-n;window.scroll({top:t,left:0,behavior:"smooth"})}(e,85)},to:"/#".concat(n.link)},n.name))},x=t(20);function O(){var e=Object(u.a)(["\n\n    display: flex;\n    width: 100%;\n    max-width: 100%;\n    height: 100%\n    max-height: 100%;\n    justify-content: center;\n    height: auto;\n    writing-mode: vertical-rl;\n    -webkit-transform:rotate(180deg);\n    -moz-transform:rotate(180deg);\n    -o-transform: rotate(180deg);\n    -ms-transform:rotate(180deg);\n    transform: rotate(180deg);\n"]);return O=function(){return e},e}var j=f.a.div(O()),g=function(){var e=Object(r.useContext)(x.a).header;return console.log(e),a.a.createElement(j,null,e?e.menu.map((function(e,n){return a.a.createElement(E,{key:n,item:e})})):null)};function w(){var e=Object(u.a)(["\n    position: fixed;\n    width: 100%;\n    max-width: 100%;\n    height: 100vh;\n    max-height: 100vh;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return w=function(){return e},e}var k=f.a.div(w()),y=function(){return a.a.createElement(k,null,a.a.createElement(g,null))},z=t(10),C=t(9),S=Object(r.createContext)(),P=function(e){var n=Object(r.useState)(""),t=Object(z.a)(n,2),o=t[0],c=t[1];return Object(r.useEffect)((function(){C.a.fetch('*[_type == "general"]').then((function(e){e.forEach((function(e){c(e)}))}))}),[]),a.a.createElement(S.Provider,{value:{general:o}},e.children)};function I(){var e=Object(u.a)(["\n    width: 100%;\n    min-height: 100vh;\n    height: auto;\n    position: relative;\n    z-index: 1;\n"]);return I=function(){return e},e}var _=f.a.div(I()),B=function(e){var n=Object(r.useContext)(S).general;return a.a.createElement(_,{style:n?{background:"".concat(n.backgroundColor.hex),color:"".concat(n.textColor.hex)}:null},e.children)},L=t(40),W=t(41),q=Object(r.lazy)((function(){return t.e(6).then(t.bind(null,134))})),F=Object(r.lazy)((function(){return t.e(4).then(t.bind(null,136))})),H=Object(r.lazy)((function(){return Promise.all([t.e(3),t.e(5)]).then(t.bind(null,135))}));var J=function(){return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[]),a.a.createElement("div",{className:"App"},a.a.createElement(P,null,a.a.createElement(B,null,a.a.createElement(x.b,null,a.a.createElement(y,null),a.a.createElement(l.g,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loadding...")},a.a.createElement(l.d,{path:"/",exact:!0},a.a.createElement(F,null)),a.a.createElement(L.b,null,a.a.createElement(l.d,{path:"/about",component:H})),a.a.createElement(W.b,null,a.a.createElement(l.d,{path:"/contact",component:q}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.BrowserRouter,null,a.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(10),a=t(0),o=t.n(a),c=t(9),i=Object(a.createContext)();n.b=function(e){var n=Object(a.useState)(""),t=Object(r.a)(n,2),l=t[0],u=t[1];return Object(a.useEffect)((function(){c.a.fetch('*[_type == "header"]').then((function(e){e.forEach((function(e){u(e)}))}))}),[]),o.a.createElement(i.Provider,{value:{header:l}},e.children)}},40:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(10),a=t(0),o=t.n(a),c=t(9),i=Object(a.createContext)();n.b=function(e){var n=Object(a.useState)(""),t=Object(r.a)(n,2),l=t[0],u=t[1];return Object(a.useEffect)((function(){c.a.fetch('*[_type == "about"]').then((function(e){e.forEach((function(e){u(e)}))}))}),[]),o.a.createElement(i.Provider,{value:{about:l}},e.children)}},41:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(10),a=t(0),o=t.n(a),c=t(9),i=Object(a.createContext)();n.b=function(e){var n=Object(a.useState)(""),t=Object(r.a)(n,2),l=t[0],u=t[1];return Object(a.useEffect)((function(){c.a.fetch('*[_type == "contact"]').then((function(e){e.forEach((function(e){u(e)}))}))}),[]),o.a.createElement(i.Provider,{value:{contact:l}},e.children)}},48:function(e,n,t){e.exports=t(120)},53:function(e,n,t){},54:function(e,n,t){},9:function(e,n,t){"use strict";var r=t(47),a=t.n(r);n.a=a()({projectId:"955qdoql",dataset:"production",token:"",useCdn:!0})}},[[48,1,2]]]);
//# sourceMappingURL=main.e9aae3d2.chunk.js.map