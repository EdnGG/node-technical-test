(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"34c3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container justify-content-center mt-4",staticStyle:{width:"40%"}},[s("h1",[t._v("Register")]),s("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.message.color},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.message.text)+" ")]),s("hr"),s("form",{staticClass:"mt-5",on:{submit:function(e){return e.preventDefault(),t.signUp.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control my-2",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.pass,expression:"user.pass"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Password"},domProps:{value:t.user.pass},on:{input:function(e){e.target.composing||t.$set(t.user,"pass",e.target.value)}}}),s("b-button",{staticClass:"btn-block my-5",attrs:{type:"submit"}},[t._v("Sign Up")])],1)],1)},n=[],o={data:function(){return{dismissSecs:5,dismissCountDown:0,message:{color:"",text:""},user:{name:"",email:"",pass:""}}},methods:{countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},signUp:function(){var t=this;this.axios.post("/signup",this.user).then((function(e){t.$router.push({name:"Login"})})).catch((function(e){t.message.text=e.response.data.message,t.message.color="danger",t.showAlert()}))}}},i=o,r=s("2877"),m=Object(r["a"])(i,a,n,!1,null,null,null);e["default"]=m.exports},5875:function(t,e,s){},"71fd":function(t,e,s){"use strict";s("5875")},bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",staticStyle:{width:"100%"}},[s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-md-6"},[s("h1",[t._v("Pokemon API")]),s("Cards",{attrs:{getPokemons:t.pokemons},on:{imagenPockemon:function(e){t.imagenPockeUrl=e}}})],1),s("div",{staticClass:"col-md-6"},[s("h1",[t._v("Details")]),s("Details",{attrs:{imagenPockemon:t.imagenPockeUrl}})],1)])])},n=[],o=s("5530"),i=s("2f62"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("ul",{staticClass:"list-group mt-4"},t._l(t.getPokemons.results,(function(e,a){return s("li",{key:a,staticClass:"list-group-item text-uppercase"},[t._v(" "+t._s(e.name)+" "),s("button",{staticClass:"btn btn-dark btn-sm float-right",on:{click:function(s){return t.getDetails(e)}}},[t._v(" Details ")])])})),0),s("div",{staticClass:"d-flex justify-content-between mt-4"})])},m=[],c=s("1da1"),l=(s("96cf"),s("d3b7"),{name:"Cards",props:["getPokemons"],data:function(){return{imgUrl:"",nextPokemons:[]}},methods:{getDetails:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function s(){var a,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,fetch(t.url);case 2:return a=s.sent,s.next=5,a.json();case 5:n=s.sent,e.imgUrl=n,e.$emit("imagenPockemon",e.imgUrl);case 8:case"end":return s.stop()}}),s)})))()},getNextPokemons:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function s(){var a,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,fetch(t);case 2:return a=s.sent,s.next=5,a.json();case 5:n=s.sent,e.nextPokemons=n.results;case 7:case"end":return s.stop()}}),s)})))()}},beforeUpdate:function(){this.$emit("imagenPockemon",this.imgUrl)}}),u=l,d=s("2877"),p=Object(d["a"])(u,r,m,!1,null,null,null),g=p.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card mt-4 text-center"},[s("div",{staticClass:"card-body"},[t.imagenPockemon?s("img",{staticClass:"img-fluid",attrs:{src:t.imagenPockemon.sprites.front_default?t.imagenPockemon.sprites.front_default:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png",alt:"imagenPockemon.name"}}):t._e(),s("div",{staticClass:"card-title text-uppercase"},[t._v(t._s(t.imagenPockemon.name))]),s("p",{staticClass:"card-text"},[t._v("Weigth: "+t._s(t.imagenPockemon.weight?t.imagenPockemon.weight:"")+" | Height: "+t._s(t.imagenPockemon.height?t.imagenPockemon.height:""))])])])},f=[],v={name:"Details",props:["imagenPockemon"],data:function(){return{isDataExist:!0,details:null,defaultImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"}},methods:{}},C=v,_=Object(d["a"])(C,h,f,!1,null,null,null),b=_.exports,w={name:"Home",components:{Cards:g,Details:b},data:function(){return{pokes:this.pokemons,imagenPockeUrl:""}},created:function(){this.getInfo(),console.log(".env: ","http://localhost:5000"),console.log("userDB: ",this.userDB)},computed:Object(o["a"])({},Object(i["d"])(["pokemons","userDB"])),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["getPokemons"])),{},{getInfo:function(){this.getPokemons()}})},k=w,D=Object(d["a"])(k,a,n,!1,null,null,null);e["default"]=D.exports},c66d:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex justify-content-center mt-5"},[s("div",{staticClass:"card",staticStyle:{width:"18rem"}},[s("img",{staticClass:"card-img-top",attrs:{src:t.userDB.image?t.userDB.image:t.imageDefault,alt:"..."}}),s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[t._v(t._s(t.userDB.email))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.userDB.name))]),s("p",{staticClass:"card-text"},[t._v("Active user: "+t._s(t.userDB.active))])])])]),s("div",{staticClass:"mb-4"},[s("span",{staticClass:"home__date--member"},[t._v(" Member since: "+t._s(t._f("moment")(t.userDB.date,"dddd, MMMM Do YYYY, h:mm:ss a"))+" ")])]),s("div",{staticClass:"my-4"},[s("button",{staticClass:"btn btn-lg btn-dark",on:{click:function(e){return t.showCommitsListElement()}}},[t._v(" Show Commit History ")]),t.showCommitsHistory?t._e():s("ul",{staticClass:"my-4"},t._l(t.showCommitsData,(function(e,a){return s("li",{key:a},[s("hr"),s("h5",[t._v(t._s(e.commit.message)+" ")]),s("p",[t._v("Author: "+t._s(e.commit.author.name))]),s("p",[t._v("Date: "+t._s(t._f("moment")(e.commit.author.date,"dddd, MMMM Do YYYY, h:mm:ss a")))])])})),0)]),s("div",{staticClass:"py-2 formdata--div"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.uploadImage.apply(null,arguments)}}},[s("div",{staticClass:"form-group formdata--div"},[s("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},on:{change:t.onFileUpload}}),s("div",{staticClass:"mt-5"},[t._v("Selected file: "+t._s(t.image?t.image.name:""))])],1),s("b-button",{staticClass:"btn-lg mt-5 mb-5",attrs:{pill:"",type:"submit"}},[t._v("Upload")]),t.message?s("p",[t._v("Error : "+t._s(t.message))]):t._e()],1)])])},n=[],o=s("1da1"),i=s("5530"),r=(s("96cf"),s("d3b7"),s("2f62")),m={data:function(){return{imageDefault:"https://lenguajejs.com/javascript/logo.svg",image:null,message:null,showCommitsHistory:!0,showCommitsData:[]}},computed:Object(i["a"])({},Object(r["d"])(["userDB"])),created:function(){this.gettingCommmits(),console.log("User: ",this.userDB)},methods:Object(i["a"])(Object(i["a"])({gettingCommmits:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/EdnGG/vue-technical-test/commits");case 2:return s=e.sent,e.next=5,s.json();case 5:a=e.sent,t.showCommitsData=a;case 7:case"end":return e.stop()}}),e)})))()},showCommitsListElement:function(){this.showCommitsHistory?this.showCommitsHistory=!1:this.showCommitsHistory=!0}},Object(r["b"])(["guardarUsuario","updateImageUsuario"])),{},{uploadImage:function(){var t=this,e=new FormData;e.append("image",this.image),this.axios.put("/upload/".concat(this.userDB._id),e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.updateImageUsuario(e.data.userDB)})).catch((function(e){t.message=e.response.data.err.message}))},onFileUpload:function(t){this.image=t.target.files[0]}})},c=m,l=(s("71fd"),s("2877")),u=Object(l["a"])(c,a,n,!1,null,"9eb9cd4e",null);e["default"]=u.exports}}]);
//# sourceMappingURL=about.f4d7210c.js.map