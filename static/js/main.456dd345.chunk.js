(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,n,t){e.exports=t(32)},30:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(12),i=t.n(a),c=t(6),s=t(2),l=t(4),u={searchfield:""},d={error:"",robots:[],pending:!1},h=(t(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function f(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var p=t(14),E=t(15),g=t(19),b=t(16),v=t(20),w=function(e){return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.id,"?200x200"),alt:""}),r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.email)))},m=function(e){return r.a.createElement("div",null,e.robots.map(function(n,t){return r.a.createElement(w,Object.assign({key:t},e.robots[t]))}))},S=function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"pa2 ma3",placeholder:"Search...",onInput:e.onTextChange}))},_=function(e){return r.a.createElement("div",{style:{overflow:"scroll",height:"600px",border:"1px solid black"}},e.children)},y=function(e){function n(e){return Object(p.a)(this,n),Object(g.a)(this,Object(b.a)(n).call(this))}return Object(v.a)(n,e),Object(E.a)(n,[{key:"componentWillMount",value:function(){this.props.onRequest()}},{key:"render",value:function(){var e=this,n=this.props.robots.filter(function(n){return n.name.toLowerCase().includes(e.props.searchField.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robofriends"),r.a.createElement(S,{onTextChange:this.props.onTextChange}),r.a.createElement(_,null,r.a.createElement(m,{robots:n})))}}]),n}(r.a.Component),O=Object(c.b)(function(e){return{searchField:e.search.searchfield,error:e.request.error,robots:e.request.robots,pending:e.request.pending}},function(e){return{onTextChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequest:function(n){return e(function(e){e({type:"REQUEST_PENDING",isPending:!0}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e({type:"REQUEST_SUCCESS",robots:n,isPending:!1})}).catch(function(n){return e({type:"REQUEST_FAILED",error:n,isPending:!1})})})}}})(y),j=(t(31),t(17)),C=t.n(j),R=t(18),T=Object(s.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object(l.a)({},e,{searchfield:n.payload});default:return e}},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_PENDING":return Object(l.a)({},e,{pending:n.isPending});case"REQUEST_SUCCESS":return Object(l.a)({},e,{robots:n.robots,pending:n.isPending});case"REQUEST_FAILED":return Object(l.a)({},e,{error:n.error,pending:n.isPending});default:return e}}}),N=Object(s.d)(T,+window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(s.a)(R.a,C.a));i.a.render(r.a.createElement(c.a,{store:N},r.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Robofriends-PWA",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/Robofriends-PWA","/service-worker.js");h?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):f(n,e)})}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.456dd345.chunk.js.map