(function(e){function t(t){for(var o,r,i=t[0],u=t[1],c=t[2],l=0,m=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},s=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7d11f065"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"7f72dd44"}[e]+".css",a=u.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===a))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){c=m[i],l=c.getAttribute("data-href");if(l===o||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[e],d.parentNode.removeChild(d),n(s)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var m=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",m.name="ChunkLoadError",m.type=o,m.request=r,n[1](m)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("bc3a"),a=n.n(r),s=n("2106"),i=n.n(s),u=n("5f5b"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"justify-content-center text-center",attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},l=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e.isActive?n("router-link",{staticClass:"navbar-brand",attrs:{to:"/home"}},[e._v("Pockemons")]):e._e(),e.isActive?n("router-link",{staticClass:"navbar-brand",attrs:{to:"/profile"}},[e._v("Profile")]):e._e(),e.isActive?e._e():n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Login")]),e.isActive?e._e():n("router-link",{staticClass:"navbar-brand",attrs:{to:"/signup"}},[e._v("Register")]),e.isActive?n("a",{staticClass:"navbar-brand",on:{click:function(t){return e.closeSesion()}}},[e._v("Log Out")]):e._e()],1)])},d=[],f=n("5530"),p=n("2f62"),g={methods:Object(f["a"])({},Object(p["b"])(["closeSesion"])),computed:Object(f["a"])(Object(f["a"])({},Object(p["c"])(["isActive"])),Object(p["d"])(["userDB"]))},h=g,v=n("2877"),b=Object(v["a"])(h,m,d,!1,null,null,null),w=b.exports,y={components:{Navbar:w}},_=y,k=(n("034f"),Object(v["a"])(_,c,l,!1,null,null,null)),j=k.exports,O=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container justify-content-center mt-4",staticStyle:{width:"40%"}},[n("h1",[e._v("Login")]),n("b-alert",{attrs:{show:e.dismissCountDown,dismissible:"",variant:e.message.color},on:{dismissed:function(t){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[e._v(" "+e._s(e.message.text)+" ")]),n("hr"),n("form",{staticClass:"mt-5",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control my-2",attrs:{type:"email",placeholder:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.pass,expression:"user.pass"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"password"},domProps:{value:e.user.pass},on:{input:function(t){t.target.composing||e.$set(e.user,"pass",t.target.value)}}}),n("b-button",{staticClass:"btn-block my-5",attrs:{type:"submit"}},[e._v("Log in")])],1),n("div",[n("GoogleLogin",{attrs:{params:e.params,renderParams:e.renderParams,onSuccess:e.onSuccess,onFailure:e.onFailure}})],1)],1)},P=[],x=n("e571"),A=n.n(x),S={components:{GoogleLogin:A.a},data:function(){return{params:{client_id:"784763271473-mfngi6muqqlvk5spuadfre52ebj7ts1a.apps.googleusercontent.com"},dismissSecs:5,dismissCountDown:0,message:{color:"",text:""},renderParams:{width:250,height:50,longtitle:!0},id_token:"",user:{email:"",pass:""}}},methods:Object(f["a"])(Object(f["a"])({},Object(p["b"])(["guardarUsuario"])),{},{countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},onFailure:function(e){console.log("Autentication failure",e)},onSuccess:function(e){var t=this;console.log("google sign in: ",e),console.log("Google info user : ",e.getBasicProfile()),this.id_token=e.getAuthResponse().id_token,this.axios.post("/google",{id_token:this.id_token}).then((function(e){var n=e.data;t.guardarUsuario(n),t.$router.push({name:"Home"})})).catch((function(e){t.message.text=e.response.data.msg,t.message.color="danger",t.showAlert()}))},login:function(){var e=this;this.axios.post("/login",this.user).then((function(t){var n=t.data;e.guardarUsuario(n),e.$router.push({name:"Home"})})).catch((function(t){e.message.text=t.response.data.message,e.message.color="danger",e.showAlert()}))}})},E=S,D=Object(v["a"])(E,C,P,!1,null,null,null),L=D.exports,U=n("1da1"),N=(n("96cf"),n("0e44"));o["default"].use(p["a"]);var B=new p["a"].Store({state:{token:"",userDB:{},pokemons:[]},mutations:{getAllPokemons:function(e,t){e.pokemons=t},obtenerUsuario:function(e,t){e.token=t.token,e.userDB=t.userDB},actualizarImagenUsuario:function(e,t){e.userDB=t}},actions:{getPokemons:function(e){return Object(U["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");case 3:return o=t.sent,t.next=6,o.json();case 6:r=t.sent,n("getAllPokemons",r);case 8:case"end":return t.stop()}}),t)})))()},updateImageUsuario:function(e,t){var n=e.commit;n("actualizarImagenUsuario",t)},guardarUsuario:function(e,t){var n=e.commit;localStorage.setItem("token",t.token),n("obtenerUsuario",t)},closeSesion:function(e){var t=e.commit;localStorage.removeItem("token"),q.push({name:"Login"}),t("obtenerUsuario","")}},modules:{},getters:{isActive:function(e){return!!e.token}},plugins:[Object(N["a"])()]});o["default"].use(O["a"]);var T=[{path:"/",name:"Login",component:L},{path:"/signup",name:"Signup",component:function(){return n.e("about").then(n.bind(null,"34c3"))}},{path:"/profile",name:"Profile",component:function(){return n.e("about").then(n.bind(null,"c66d"))},meta:{requireAuth:!0}},{path:"/home",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))},meta:{requireAuth:!0}}],$=new O["a"]({mode:"history",base:"/",routes:T});$.beforeEach((function(e,t,n){var o=e.matched.some((function(e){return e.meta.requireAuth}));o&&""===B.state.token?n({name:"Login"}):n()}));var q=$;n("f9e3"),n("2dd8");o["default"].use(n("2ead")),o["default"].use(i.a,a.a),a.a.defaults.baseURL=PROCESS.ENV.VUE_APP_KEY_CLOUD,o["default"].use(u["a"]),o["default"].config.productionTip=!1,new o["default"]({router:q,store:B,render:function(e){return e(j)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.d087b52a.js.map