(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{119:function(t,s,r){"use strict";r.r(s);var _={layout:"admin",middleware:["auth","admin"],metaInfo:{title:"Orders",titleTemplate:"%s | Khodgi"},data:function(){return{order:[]}},created:function(){var t=this;axios.get("/api/admin/orders/single-order/".concat(this.$route.params.id)).then((function(s){t.order=s.data.order})).catch((function(t){console.log()}))},methods:{printme:function(t){window.print()}},computed:{finalTotal:function(){return parseFloat(this.order.total)-parseFloat(this.order.discount?this.order.discount:0)+parseFloat(this.order.shipping_cost?this.order.shipping_cost:0)}}},e=r(0),i=Object(e.a)(_,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{attrs:{id:"printable"}},[r("div",{staticClass:"mt-3"},[r("div",{staticClass:"d-flex "},[r("h3",{staticClass:"my-2 float-left"},[t._v("View Order")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"hidden-print-only float-right",attrs:{icon:"",color:"",target:"_blank",to:"/admin/orders/print/"+t.order.id}},[r("v-icon",[t._v("\n                mdi-printer\n            ")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6"}},[r("h4",{staticClass:"my-2"},[t._v("Order Details")]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Telephone:")]),t._v(" "),r("td",{staticClass:"pl-5"},[t._v(t._s(t.order.customer_phone))])]),t._v(" "),r("tr",[r("td",[t._v("Email:")]),t._v(" "),r("td",{staticClass:"pl-5"},[t._v(t._s(t.order.customer_email))])]),t._v(" "),r("tr",[r("td",[t._v("Date:")]),t._v(" "),r("td",{staticClass:"pl-5"},[t._v(t._s(t._f("date")(t.order.created_at)))])]),t._v(" "),r("tr",[r("td",{},[t._v("Payment Method:")]),t._v(" "),r("td",{staticClass:"pl-5"},[t._v(t._s(t.order.payment_method))])])])])],1),t._v(" "),r("div",{},[r("v-col",{staticClass:"float-left",attrs:{cols:"12",sm:"6",md:"6",lg:"6"}},[r("h4",{staticClass:"my-2"},[t._v("Billing Address")]),t._v(" "),r("tr",[t._v(t._s(t.order.billing_first_name)+" "+t._s(t.order.billing_last_name))]),t._v(" "),r("tr",[t._v(t._s(t.order.billing_address))]),t._v(" "),r("tr",[t._v(t._s(t.order.billing_appartment))]),t._v(" "),r("tr",[t._v(t._s(t.order.billing_city)+" "+t._s(t.order.billing_postal_code))]),t._v(" "),r("tr",[t._v(t._s(t.order.billing_country_region))])]),t._v(" "),r("v-col",{staticClass:"float-right",attrs:{cols:"12",sm:"6",md:"6",lg:"6"}},[r("h4",{staticClass:"my-2"},[t._v("Shipping Address")]),t._v(" "),r("tr",[t._v(t._s(t.order.shipping_first_name)+" "+t._s(t.order.shipping_last_name))]),t._v(" "),r("tr",[t._v(t._s(t.order.shipping_address))]),t._v(" "),r("tr",[t._v(t._s(t.order.shipping_appartment))]),t._v(" "),r("tr",[t._v(t._s(t.order.shipping_city)+" "+t._s(t.order.shipping_postal_code))]),t._v(" "),r("tr",[t._v(t._s(t.order.shipping_country_region))])])],1),t._v(" "),r("div",[r("v-col",{staticClass:"mt-6",attrs:{cols:"12"}},[r("h4",{staticClass:"my-2"},[t._v("Items Ordered")]),t._v(" "),r("v-divider"),t._v(" "),r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("Product")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("Type")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("Size")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("Unit Price")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("Quantity")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("Line Total")])])]),t._v(" "),r("tbody",t._l(t.order.order_items,(function(s){return r("tr",{key:s.id},[r("td",[t._v(t._s(s.product_name))]),t._v(" "),r("td",[t._v(t._s(s.type))]),t._v(" "),r("td",[t._v(t._s(s.size))]),t._v(" "),r("td",[t._v(t._s(s.currency_symbol)+t._s(s.unit_price))]),t._v(" "),r("td",[t._v(t._s(s.qty))]),t._v(" "),r("td",[t._v(t._s(s.currency_symbol)+t._s(s.line_total))])])})),0)]},proxy:!0}])})],1),t._v(" "),r("v-col",{staticClass:"float-right",attrs:{cols:"12",sm:"5",md:"5",lg:"5"}},[r("v-simple-table",[r("tbody",{},[r("tr",[r("td",[t._v("Subtotal:")]),t._v(" "),r("td",{staticClass:"pl-5 text-right"},[t._v(t._s(t.order.currency_symbol)+t._s(t.order.total))])]),t._v(" "),t.order.discount>0?r("tr",[r("td",[t._v("Discount:")]),t._v(" "),r("td",{staticClass:"pl-5 text-right"},[t._v(t._s(t.order.currency_symbol)+t._s(t.order.discount))])]):t._e(),t._v(" "),t.order.shipping_cost>0?r("tr",[r("td",[t._v("Shipping Cost:")]),t._v(" "),r("td",{staticClass:"pl-5 text-right"},[t._v(t._s(t.order.currency_symbol)+t._s(t.order.shipping_cost))])]):t._e(),t._v(" "),r("tr",[r("td",[r("strong",[t._v("Total:")])]),t._v(" "),r("td",{staticClass:"pl-5 text-right"},[r("strong",[t._v(t._s(t.order.currency_symbol)+t._s(t.finalTotal))])])])])])],1)],1)])}),[],!1,null,null,null);s.default=i.exports}}]);