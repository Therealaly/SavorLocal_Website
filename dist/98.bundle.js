"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[98],{298:(n,r,e)=>{e.d(r,{Z:()=>A});var t=e(537),a=e.n(t),i=e(645),o=e.n(i)()(a());o.push([n.id,".detail-restaurant {\n  margin-top: 25px;\n  display: flex;\n  flex-direction: row;\n  flex: 2;\n}\n\n.detail_restaurant_item {\n  flex: 1;\n}\n\n#detailRestaurantText {\n  margin-left: 20px;\n}\n\n.detail-restaurant_menus {\n  margin-top: 10px;\n}\n\n.detail-restaurant_menus-foods {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-column-gap: 5px;\n  grid-row-gap: 5px;\n}\n\n.detail-restaurant_menus-drinks {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-column-gap: 8px;\n  grid-row-gap: 8px;\n}\n\n.detail-restaurant_menus-item {\n  text-align: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 10px;\n  font-size: 1rem;\n}\n\n.detail-restaurant_reviews {\n  padding-inline: 20px;\n}\n\n.detail-restaurant_menus-reviews {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row-gap: 3px;\n}\n\n#reviewerName {\n  margin-bottom: 5px;\n}\n\n#reviewDate {\n  font-size: small;\n  font-weight: 300;\n  color: rgb(75, 75, 75);\n  margin-top: 5px;\n}\n\n#reviewComment {\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n","",{version:3,sources:["webpack://./src/styles/detail.css"],names:[],mappings:"AAAA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,0CAA0C;EAC1C,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;;EAEzB,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,SAAS;;EAET,eAAe;EACf,YAAY;EACZ,eAAe;AACjB",sourcesContent:[".detail-restaurant {\r\n  margin-top: 25px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex: 2;\r\n}\r\n\r\n.detail_restaurant_item {\r\n  flex: 1;\r\n}\r\n\r\n#detailRestaurantText {\r\n  margin-left: 20px;\r\n}\r\n\r\n.detail-restaurant_menus {\r\n  margin-top: 10px;\r\n}\r\n\r\n.detail-restaurant_menus-foods {\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  grid-column-gap: 5px;\r\n  grid-row-gap: 5px;\r\n}\r\n\r\n.detail-restaurant_menus-drinks {\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  grid-column-gap: 8px;\r\n  grid-row-gap: 8px;\r\n}\r\n\r\n.detail-restaurant_menus-item {\r\n  text-align: center;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  font-size: 1rem;\r\n}\r\n\r\n.detail-restaurant_reviews {\r\n  padding-inline: 20px;\r\n}\r\n\r\n.detail-restaurant_menus-reviews {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-row-gap: 3px;\r\n}\r\n\r\n#reviewerName {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#reviewDate {\r\n  font-size: small;\r\n  font-weight: 300;\r\n  color: rgb(75, 75, 75);\r\n  margin-top: 5px;\r\n}\r\n\r\n#reviewComment {\r\n  margin-top: 0px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.like {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n  \r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n  \r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n"],sourceRoot:""}]);const A=o},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(o[s]=!0)}for(var p=0;p<n.length;p++){var c=[].concat(n[p]);t&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),r.push(c))}},r}},537:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(a," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},98:(n,r,e)=>{e.r(r),e.d(r,{default:()=>C});var t=e(379),a=e.n(t),i=e(795),o=e.n(i),A=e(569),s=e.n(A),p=e(565),c=e.n(p),u=e(216),d=e.n(u),l=e(589),m=e.n(l),f=e(298),g={};g.styleTagTransform=m(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),a()(f.Z,g);const C=f.Z&&f.Z.locals?f.Z.locals:void 0},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},o=[],A=0;A<n.length;A++){var s=n[A],p=t.base?s[0]+t.base:s[0],c=i[p]||0,u="".concat(p," ").concat(c);i[p]=c+1;var d=e(u),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(l);else{var m=a(l,t);t.byIndex=A,r.splice(A,0,{identifier:u,updater:m,references:1})}o.push(u)}return o}function a(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,a){var i=t(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var A=e(i[o]);r[A].references--}for(var s=t(n,a),p=0;p<i.length;p++){var c=e(i[p]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,a&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}}]);
//# sourceMappingURL=98.bundle.js.map