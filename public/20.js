(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{138:function(t,a,e){"use strict";e.r(a);var i={layout:"admin",components:{},metaInfo:{title:"Privacy Policy",titleTemplate:"%s | Khodgi"},data:function(){return{text:"",text_id:""}},created:function(){var t=this;axios.get("/api/admin/privacy").then((function(a){t.text=a.data.privacy.text,t.text_id=a.data.privacy.id,console.log(a)})).catch((function(t){return console.log(t.response.data)}))},methods:{create:function(){var t=this;axios.post("/api/admin/privacy",{text:this.text}).then((function(a){t.text=a.data.privacy.text,t.text_id=a.data.privacy.id})).catch((function(t){return console.log(t.response.data)}))},update:function(){var t=this;axios.put("/api/admin/privacy/1",{text:this.text}).then((function(a){t.text=a.data.privacy.text,t.text_id=a.data.privacy.id})).catch((function(t){return console.log(t.response.data)}))}}},n=e(0),c=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("vue-editor",{model:{value:t.text,callback:function(a){t.text=a},expression:"text"}}),t._v(" "),e("div",{staticClass:"mt-2"},[1!=t.text_id?e("v-btn",{attrs:{color:"primary",dark:""},on:{click:t.create}},[t._v("Save")]):t._e(),t._v(" "),e("v-btn",{attrs:{color:"primary",dark:""},on:{click:t.update}},[t._v("Update")])],1)],1)}),[],!1,null,null,null);a.default=c.exports}}]);