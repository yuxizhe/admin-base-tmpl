import{C as t,V as s,n as e}from"./index.470c5695.js";import{g as a}from"./tasks.fd564974.js";import"./vendor.c9fb42f9.js";var i=Object.defineProperty,r=Object.getOwnPropertyDescriptor;let l=class extends s{constructor(){super(...arguments),this.list=[],this.listLoading=!0,this.listQuery={page:1,limit:12}}created(){this.getList()}async getList(){this.listLoading=!0,await a(this.listQuery).then((t=>{t&&t.data.list&&(this.list=t.data.list)})),setTimeout((()=>{this.listLoading=!1}),500)}};l=((t,s,e,a)=>{for(var l,n=a>1?void 0:a?r(s,e):s,c=t.length-1;c>=0;c--)(l=t[c])&&(n=(a?l(s,e,n):l(n))||n);return a&&n&&i(s,e,n),n})([t({name:"Table",filters:{statusFilter:t=>({published:"success",draft:"gray",deleted:"danger"}[t]),parseTime:t=>{}}})],l);const n={};var c=e(l,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-router"},[e("h3",{staticClass:"page-title"},[t._v("人像库：")]),t._v(" "),e("el-row",{staticClass:"card-list",attrs:{gutter:16}},t._l(t.list,(function(s,a){return e("el-col",{key:a,attrs:{span:8,xs:24,sm:12,md:8}},[e("el-card",{staticClass:"box-card card-item"},[e("dl",{staticClass:"img-layer"},[e("dd",[e("img",{attrs:{src:s.avatar,alt:""}})]),t._v(" "),e("dt",[e("strong",[t._v(t._s(s.device.position))]),e("br"),t._v(" "),e("time",{attrs:{datetime:"2021-02-14 12:21:22"}},[t._v(t._s(s.time))])])]),t._v(" "),e("div",{staticClass:"content-layer"},[e("h5",[t._v("姓名："+t._s(s.name))]),t._v(" "),e("span",{staticClass:"mini"},[t._v(t._s(s.uuid))]),t._v(" "),e("p",[t._v("相似度：98.33%")]),t._v(" "),e("p",{staticClass:"card-attrs"},[e("em",[t._v("特征：")]),t._v(" "),t._l(s.attr,(function(s,a){return e("el-tag",{key:a,attrs:{size:"mini"}},[t._v(t._s(s))])}))],2)])])],1)})),1)],1)}),[],!1,(function(t){for(let s in n)this[s]=n[s]}),null,null,null).exports;export default c;
