(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"34c3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("Sign Up")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.signUp.apply(null,arguments)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control my-2",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.pass,expression:"user.pass"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Password"},domProps:{value:t.user.pass},on:{input:function(e){e.target.composing||t.$set(t.user,"pass",e.target.value)}}}),a("div",{staticClass:"py-2"}),a("b-button",{staticClass:"btn-block",attrs:{type:"submit"}},[t._v("Sign Up")])],1),""!=t.message?a("div",[a("p",[t._v(t._s(t.message))])]):t._e()])},n=[],o={data:function(){return{user:{name:"",email:"",pass:""},message:""}},methods:{signUp:function(){var t=this;this.axios.post("/signup",this.user).then((function(e){console.log('Inside of "RES" object: ',e),t.$router.push({name:"Login"})})).catch((function(e){console.log("Error from frontend logic",e),t.message=e.response.message}))}}},i=o,r=a("2877"),l=Object(r["a"])(i,s,n,!1,null,null,null);e["default"]=l.exports},"81a9":function(t,e,a){"use strict";a("a027")},a027:function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-md-6"},[a("h1",[t._v("Pokemon API")]),a("Cards")],1),a("div",{staticClass:"col-md-6"},[a("h1",[t._v("Details")]),a("Details")],1)])},n=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("ul",{staticClass:"list-group mt-4"},[a("li",{staticClass:"list-group-item text-uppercase"},[t._v(" pokemon.name "),a("button",{staticClass:"btn btn-dark btn-sm float-right"},[t._v(" Details ")])])]),a("div",{staticClass:"d-flex justify-content-between mt-4"},[a("button",{staticClass:"btn btn-dark"},[t._v("Get Pockemons")]),a("button",{staticClass:"btn btn-dark"},[t._v("Next Pockemons")]),a("button",{staticClass:"btn btn-dark"},[t._v("Prev Pockemons")])])])}],r={},l=r,c=a("2877"),u=Object(c["a"])(l,o,i,!1,null,null,null),m=u.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card mt-4 text-center"},[a("div",{staticClass:"card-body"},[a("img",{staticClass:"img-fluid",attrs:{src:"",alt:""}}),a("div",{staticClass:"card-title text-uppercase"},[t._v("{pokemon.name}")]),a("p",{staticClass:"card-text"},[t._v("Weigth: {pokemon.weigth} | Height: {pokemon.height}")])])])}],v={},f=v,g=Object(c["a"])(f,d,p,!1,null,null,null),h=g.exports,b={name:"Home",components:{Cards:m,Details:h}},_=b,C=Object(c["a"])(_,s,n,!1,null,null,null);e["default"]=C.exports},c66d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container md text-center justify-content-center"},[a("div",{staticClass:"card text-center",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:t.imageDefault,alt:"..."}}),t._m(0)]),a("div",[a("span",{staticClass:"home__date--member"},[t._v(" Member since: "+t._s(t._f("moment")(t.userDB.date,"dddd, MMMM Do YYYY, h:mm:ss a"))+" ")])]),a("div",{staticClass:"py-2 formdata--div"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.uploadImage.apply(null,arguments)}}},[a("div",{staticClass:"form-group formdata--div"},[a("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},on:{change:t.onFileUpload}}),a("div",{staticClass:"mt-3"},[t._v("Selected file: "+t._s(t.image?t.image.name:""))])],1),a("b-button",{staticClass:"btn-block",attrs:{pill:"",type:"submit"}},[t._v("Upload")]),t.message?a("p",[t._v("Error : "+t._s(t.message))]):t._e()],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])}],o=a("5530"),i=a("2f62"),r={data:function(){return{imageDefault:"https://lenguajejs.com/javascript/logo.svg",image:null,message:null}},computed:Object(o["a"])({},Object(i["c"])(["userDB"])),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["guardarUsuario","updateImageUsuario"])),{},{uploadImage:function(){var t=this,e=new FormData;e.append("image",this.image),console.log("form-data: ",e),this.axios.put("/upload/".concat(this.userDB._id),e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log("res.data: ",e.data),console.log("usuarioDB ya con la imagen: ",e.data.userDB),t.updateImageUsuario(e.data.userDB)})).catch((function(e){console.log("Error: ",e.response.data.err.message),t.message=e.response.data.err.message}))},onFileUpload:function(t){this.image=t.target.files[0],console.log("contenido de this.image",this.image)}})},l=r,c=(a("81a9"),a("2877")),u=Object(c["a"])(l,s,n,!1,null,"7d7a1610",null);e["default"]=u.exports}}]);
//# sourceMappingURL=about.b79fbf84.js.map