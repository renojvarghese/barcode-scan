(function(e){function r(r){for(var t,c,i=r[0],u=r[1],l=r[2],d=0,p=[];d<i.length;d++)c=i[d],a[c]&&p.push(a[c][0]),a[c]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);s&&s(r);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,r=0;r<o.length;r++){for(var n=o[r],t=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(t=!1)}t&&(o.splice(r--,1),e=c(c.s=n[0]))}return e}var t={},a={app:0},o=[];function c(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=t,c.d=function(e,r,n){c.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,r){if(1&r&&(e=c(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)c.d(n,t,function(r){return e[r]}.bind(null,t));return n},c.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(r,"a",r),r},c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.p="/barcode-scan/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=r,i=i.slice();for(var l=0;l<i.length;l++)r(i[l]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,r,n){e.exports=n("56d7")},"16eb":function(e,r,n){"use strict";var t=n("3aa1"),a=n.n(t);a.a},"3aa1":function(e,r,n){},"56d7":function(e,r,n){"use strict";n.r(r);n("cadf"),n("551c"),n("097d");var t=n("2b0e"),a=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{attrs:{id:"app"}},[n("ScanBarcode")],1)},o=[],c=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"scan"},[n("h3",[e._v("Scan barcode from image")]),n("div",{staticClass:"pict-btn",class:{hasImage:e.image}},[n("picture-input",{ref:"pictureInput",attrs:{accept:"image/jpeg,image/png",width:"450",height:"320",plain:!0,crop:!1,hideChangeButton:!0},on:{change:e.onChange}})],1),e.error?n("div",{staticClass:"error"},[e._v("\n    "+e._s(e.error)+"\n  ")]):e._e(),e.barcode?n("div",{staticClass:"barcode-container"},[n("div",{staticClass:"barcode"},[e._v(e._s(e.barcode))])]):e._e()])},i=[],u=n("e597"),l=n("8a00"),s=n.n(l),d={name:"ScanBarcode",data:function(){return{barcode:null,image:null,error:null}},components:{PictureInput:u["a"]},methods:{onChange:function(e){var r=this;this.image=e;var n={inputStream:{size:1e3,singleChannel:!1},locator:{patchSize:"large",halfSample:!1},decoder:{readers:["upc_reader","code_128_reader","code_39_reader","code_39_vin_reader","ean_8_reader","ean_reader","upc_e_reader","codabar_reader"]},locate:!0,src:e};s.a.decodeSingle(n,function(e){e.codeResult?(r.barcode=e.codeResult.code,r.error=null):(r.barcode=null,r.error="barcode not found")})}}},p=d,f=(n("16eb"),n("2877")),b=Object(f["a"])(p,c,i,!1,null,"be8ff76c",null);b.options.__file="ScanBarcode.vue";var v=b.exports,_={name:"app",components:{ScanBarcode:v}},h=_,g=(n("5c0b"),Object(f["a"])(h,a,o,!1,null,null,null));g.options.__file="App.vue";var m=g.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,r,n){"use strict";var t=n("5e27"),a=n.n(t);a.a},"5e27":function(e,r,n){}});
//# sourceMappingURL=app.2137eecb.js.map