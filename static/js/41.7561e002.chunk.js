(this["webpackJsonpckb-explorer-fronted"]=this["webpackJsonpckb-explorer-fronted"]||[]).push([[41],{273:function(e,t,n){"use strict";var r=n(7),a=n(0),o=n.n(a),c=n(6),i=n(8);function s(){const e=Object(r.a)(["\n  width: 100%;\n  background: #1c1c1c;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  position: -webkit-fixed;\n  z-index: 2;\n  color: white;\n  top: 64px;\n  bottom: 0px;\n  overflow: hidden;\n"]);return s=function(){return e},e}const l=c.c.div(s());var u=n(51),p=n(52),d=n(49),m=n(50),f=()=>o.a.createElement(l,null,o.a.createElement(u.a,null),o.a.createElement(m.a,null),o.a.createElement(d.a,null),o.a.createElement(p.a,null));function y(){const e=Object(r.a)(["\n  width: 100%;\n  overflow-x: hidden;\n  flex: 1;\n  margin-top: 64px;\n  background: #ededed;\n"]);return y=function(){return e},e}const h=c.c.div(y());t.a=({children:e,style:t})=>{const n=Object(i.b)().components.mobileMenuVisible;return o.a.createElement(h,{style:t},n?o.a.createElement(f,null):e)}},558:function(e,t,n){"use strict";var r=n(57),a=n(102);const o=n(600),c=n(601),i=n(602);function s(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}function u(e,t){return t.decode?c(e):e}function p(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function d(e){const t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function m(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return(t,n,r)=>{const a="string"===typeof n&&n.split("").indexOf(e.arrayFormatSeparator)>-1?n.split(e.arrayFormatSeparator).map(t=>u(t,e)):null===n?n:u(n,e);r[t]=a};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),o=Object.create(null);if("string"!==typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;var c,l=a(e.split("&"));try{for(l.s();!(c=l.n()).done;){const e=c.value;let a=i(t.decode?e.replace(/\+/g," "):e,"="),s=r(a,2),l=s[0],p=s[1];p=void 0===p?null:["comma","separator"].includes(t.arrayFormat)?p:u(p,t),n(u(l,t),p,o)}}catch(h){l.e(h)}finally{l.f()}for(var p=0,d=Object.keys(o);p<d.length;p++){const e=d[p],n=o[e];if("object"===typeof n&&null!==n)for(var f=0,y=Object.keys(n);f<y.length;f++){const e=y[f];n[e]=m(n[e],t)}else o[e]=m(n,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((e,t)=>{const n=o[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"===typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=d,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>{return t.skipNull&&(null===(r=e[n])||void 0===r)||t.skipEmptyString&&""===e[n];var r},r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const a=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[l(t,e),"[",a,"]"].join("")]:[...n,[l(t,e),"[",l(a,e),"]=",l(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[l(t,e),"[]"].join("")]:[...n,[l(t,e),"[]=",l(r,e)].join("")];case"comma":case"separator":return t=>(n,r)=>null===r||void 0===r||0===r.length?n:0===n.length?[[l(t,e),"=",l(r,e)].join("")]:[[n,l(r,e)].join(e.arrayFormatSeparator)];default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,l(t,e)]:[...n,[l(t,e),"=",l(r,e)].join("")]}}(t),a={};for(var o=0,c=Object.keys(e);o<c.length;o++){const t=c[o];n(t)||(a[t]=e[t])}const i=Object.keys(a);return!1!==t.sort&&i.sort(t.sort),i.map(n=>{const a=e[n];return void 0===a?"":null===a?l(n,t):Array.isArray(a)?a.reduce(r(n),[]).join("&"):l(n,t)+"="+l(a,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const n=i(e,"#"),a=r(n,2),o=a[0],c=a[1];return Object.assign({url:o.split("?")[0]||"",query:f(d(e),t)},t&&t.parseFragmentIdentifier&&c?{fragmentIdentifier:u(c,t)}:{})},t.stringifyUrl=(e,n)=>{n=Object.assign({encode:!0,strict:!0},n);const r=p(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),c=Object.assign(o,e.query);let i=t.stringify(c,n);i&&(i="?".concat(i));let s=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(l(e.fragmentIdentifier,n))),"".concat(r).concat(i).concat(s)}},600:function(e,t,n){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>"%".concat(e.charCodeAt(0).toString(16).toUpperCase()))},601:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],o(n),o(r))}function c(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=a.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var o=c(r[0]);o!==r[0]&&(n[r[0]]=o)}r=a.exec(e)}n["%C2"]="\ufffd";for(var i=Object.keys(n),s=0;s<i.length;s++){var l=i[s];e=e.replace(new RegExp(l,"g"),n[l])}return e}(e)}}},602:function(e,t,n){"use strict";e.exports=(e,t)=>{if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},849:function(e,t,n){"use strict";n.r(t),n.d(t,"chainUrl",(function(){return j}));var r=n(0),a=n.n(r),o=n(558),c=n.n(o),i=n(12),s=n(273),l=n(60),u=n(3),p=n(9),d=n(10),m=n(7),f=n(6);function y(){const e=Object(m.a)(["\n  font-size: 14px;\n  color: #606060;\n  margin: 0 auto;\n  margin-top: 20px;\n  text-align: center;\n  white-space: pre-wrap;\n  width: 600px;\n\n  @media (max-width: 750px) {\n    width: 340px;\n  }\n\n  a {\n    color: ",";\n    margin-left: 3px;\n  }\n\n  a:hover {\n    color: ",";\n  }\n\n  @media (max-width: 750px) {\n    font-size: 12px;\n  }\n\n  @media (max-width: 375px) {\n    font-size: 11px;\n  }\n\n  .search__fail__items {\n    font-weight: bold;\n    font-size: 16px;\n\n    @media (max-width: 750px) {\n      font-size: 12px;\n    }\n\n    @media (max-width: 375px) {\n      font-size: 11px;\n    }\n  }\n"]);return y=function(){return e},e}function h(){const e=Object(m.a)(["\n  margin-top: 200px;\n  margin-bottom: 240px;\n\n  @media (max-width: 750px) {\n    margin-top: 120px;\n    margin-bottom: 150px;\n  }\n\n  .search__fail__bar {\n    width: 600px;\n    margin: 0 auto;\n\n    @media (max-width: 750px) {\n      width: 340px;\n    }\n  }\n"]);return h=function(){return e},e}const g=f.c.div(h()),x=f.c.div(y(),e=>e.theme.primary,e=>e.theme.primary);var b=n(5);const j=()=>{const e="".concat(b.a.MAINNET_URL),t="".concat(b.a.MAINNET_URL,"/").concat(b.a.TESTNET_NAME);return Object(d.b)()?t:e};t.default=({address:e})=>{const t=Object(i.h)().search,n=c.a.parse(t);let r=n.q,o=n.type;return r=e||r,a.a.createElement(s.a,null,a.a.createElement(g,{className:"container"},a.a.createElement("div",{className:"search__fail__bar"},a.a.createElement(l.a,{content:r,hasButton:!0})),a.a.createElement(x,null,o&&o===p.v.CHAIN_ERROR||e?a.a.createElement("div",null,a.a.createElement("span",null,Object(d.b)()?u.c.t("search.address_type_testnet_error"):u.c.t("search.address_type_mainnet_error")),a.a.createElement("a",{href:"".concat(j(),"/address/").concat(r),rel:"noopener noreferrer"},Object(d.b)()?u.c.t("search.address_type_testnet_url"):u.c.t("search.address_type_mainnet_url"))):a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,u.c.t("search.empty_result")),a.a.createElement("span",{className:"search__fail__items"},u.c.t("search.empty_result_items"))))))}}}]);
//# sourceMappingURL=41.7561e002.chunk.js.map