(function(e){function t(t){for(var n,r,u=t[0],i=t[1],l=t[2],c=0,p=[];c<u.length;c++)r=u[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);m&&m(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var u=a[r];0!==o[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o={app:0},s=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b79fbf84"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={about:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"35f5d6de"}[e]+".css",o=i.p+n,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var l=s[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){l=p[u],c=l.getAttribute("data-href");if(c===n||c===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],m.parentNode.removeChild(m),a(s)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=s);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var p=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(m);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,a[1](p)}o[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var m=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("bc3a"),o=a.n(r),s=a("2106"),u=a.n(s),i=a("5f5b"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view")],1)},c=[],p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Home")]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"}),a("form",{staticClass:"form-inline my-2 my-lg-0"},[a("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),a("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[e._v(" Search ")])])])])}],f={},d=f,g=a("2877"),b=Object(g["a"])(d,p,m,!1,null,null,null),v=b.exports,h={components:{Navbar:v}},y=h,_=(a("034f"),Object(g["a"])(y,l,c,!1,null,null,null)),C=_.exports,w=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Login")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control my-2",attrs:{type:"email",placeholder:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.pass,expression:"user.pass"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"password"},domProps:{value:e.user.pass},on:{input:function(t){t.target.composing||e.$set(e.user,"pass",t.target.value)}}}),a("b-button",{staticClass:"btn-block my-4",attrs:{type:"submit"}},[e._v("Log in")])],1),""!=e.message?a("div",[a("p",[e._v(e._s(e.message))])]):e._e()])},k=[],j=a("5530"),O=a("2f62"),x={data:function(){return{user:{email:"",pass:""},message:""}},methods:Object(j["a"])(Object(j["a"])({},Object(O["b"])(["guardarUsuario"])),{},{login:function(){var e=this;this.axios.post("/login",this.user).then((function(t){var a=t.data;console.log("res.data: ",t.data),console.log("Data: ",t),e.guardarUsuario(a),e.$router.push({name:"Home"})})).catch((function(t){console.log(t.response),e.mensaje=t.response}))}})},P=x,E=Object(g["a"])(P,S,k,!1,null,null,null),U=E.exports,A=a("0e44");n["default"].use(O["a"]);var T=new O["a"].Store({state:{token:"",userDB:{}},mutations:{obtenerUsuario:function(e,t){e.token=t.token,e.userDB=t.userDB},actualizarImagenUsuario:function(e,t){console.log("Payload de actualizarImagenUsuario: ",t),e.userDB=t}},actions:{updateImageUsuario:function(e,t){var a=e.commit;console.log("Payload de updateImageUsuarios: ",t),a("actualizarImagenUsuario",t)},guardarUsuario:function(e,t){var a=e.commit;localStorage.setItem("token",t.token),a("obtenerUsuario",t)},cerrarSesion:function(e){var t=e.commit;t("obtenerUsuario",""),localStorage.removeItem("token"),N.push({name:"login"})},leerToken:function(e){e.commit,localStorage.getItem("token")}},modules:{},getters:{estaActivo:function(e){return!!e.token}},plugins:[Object(A["a"])()]});n["default"].use(w["a"]);var I=[{path:"/",name:"Login",component:U},{path:"/signup",name:"Signup",component:function(){return a.e("about").then(a.bind(null,"34c3"))}},{path:"/profile",name:"Profile",component:function(){return a.e("about").then(a.bind(null,"c66d"))},meta:{requireAuth:!0}},{path:"/home",name:"Home",component:function(){return a.e("about").then(a.bind(null,"bb51"))},meta:{requireAuth:!0}}],L=new w["a"]({mode:"history",base:"/",routes:I});L.beforeEach((function(e,t,a){console.log(a());var n=e.matched.some((function(e){return e.meta.requireAuth}));return n&&""===T.state.token?(console.log("login"),a({name:"login"})):(console.log("next"),a())}));var N=L;a("f9e3"),a("2dd8");n["default"].use(a("2ead")),n["default"].use(u.a,o.a),o.a.defaults.baseURL="https://fulltimeforce.herokuapp.com",n["default"].use(i["a"]),n["default"].config.productionTip=!1,new n["default"]({router:N,store:T,render:function(e){return e(C)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.dae2f84f.js.map