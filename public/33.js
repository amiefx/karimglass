(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{127:function(e,t,n){"use strict";n.r(t);var a={layout:"mardom",middleware:["guest"],name:"About",metaInfo:{title:"Login",titleTemplate:"%s | Khodgi"},data:function(){return{form:{email:""},text:"",loading:!1,snackbar:!1,showPassword:!1,valid:!0,rules:{required:function(e){return!!e||"This Field is Required"},min:function(e){return e.length>=3||"Minimum 5 Chracters Required"},minpass:function(e){return e.length>=8||"Minimum 8 Chracters Required"},validEmail:function(e){return/.+@.+\..+/.test(e)||"Email must be valid"}}}},methods:{submit:function(){var e=this;axios.interceptors.request.use((function(t){return e.loading=!0,t}),(function(t){return e.loading=!1,Promise.reject(t)})),axios.interceptors.response.use((function(t){return e.loading=!1,t}),(function(t){return e.loading=!1,Promise.reject(t)})),axios.post("/api/password/email",{email:this.form.email}).then((function(t){e.text="We have e-mailed your password reset link!",e.snackbar=!0})).catch((function(t){e.text=console.log(t.response),e.text=t.response.data.email,e.snackbar=!0}))}}},i=n(0),r=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"5"}},[n("v-card",{staticClass:"elevation-12"},[n("v-progress-linear",{attrs:{active:e.loading,indeterminate:e.loading,absolute:"",top:"",color:"primary"}}),e._v(" "),n("v-form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-card-text",{staticClass:"pt-8"},[n("v-text-field",{attrs:{label:"Email",rules:[e.rules.required,e.rules.validEmail],name:"email","prepend-icon":"mdi-account-circle",type:"text",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),e.loading?e._e():n("v-btn",{attrs:{color:"primary",block:"",disabled:!e.valid,type:"submit"}},[e._v("Send reset link")])],1)],1),e._v(" "),n("v-card-actions",{staticClass:"d-flex justify-end mr-2"},[n("router-link",{staticClass:"overline",attrs:{to:{name:"signin"}}},[e._v(" Back to login ")])],1)],1),e._v(" "),n("v-snackbar",{model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.text)+"\n      "),n("v-btn",{attrs:{color:"white",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n          Close\n      ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);