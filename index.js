// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var t=n(),r=Object.prototype.toString,o=Object.prototype.hasOwnProperty;function e(n,t){return null!=n&&o.call(n,t)}var i,f="function"==typeof Symbol?Symbol:void 0,u="function"==typeof f?f.toStringTag:"",y=t&&"symbol"==typeof Symbol.toStringTag?function(n){var t,o,i;if(null==n)return r.call(n);o=n[u],t=e(n,u);try{n[u]=void 0}catch(t){return r.call(n)}return i=r.call(n),t?n[u]=o:delete n[u],i}:function(n){return r.call(n)},c="function"==typeof Uint8Array,l="function"==typeof Uint8Array?Uint8Array:null,a="function"==typeof Uint8Array?Uint8Array:void 0;i=function(){var n,t,r;if("function"!=typeof l)return!1;try{t=new l(t=[1,3.14,-3.14,256,257]),r=t,n=(c&&r instanceof Uint8Array||"[object Uint8Array]"===y(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?a:function(){throw new Error("not implemented")};var p,d=i,b=n(),m=Object.prototype.toString,v="function"==typeof Symbol?Symbol:void 0,s="function"==typeof v?v.toStringTag:"",A=b&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,o;if(null==n)return m.call(n);r=n[s],t=e(n,s);try{n[s]=void 0}catch(t){return m.call(n)}return o=m.call(n),t?n[s]=r:delete n[s],o}:function(n){return m.call(n)},S="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,g="function"==typeof Uint16Array?Uint16Array:void 0;p=function(){var n,t,r;if("function"!=typeof U)return!1;try{t=new U(t=[1,3.14,-3.14,65536,65537]),r=t,n=(S&&r instanceof Uint16Array||"[object Uint16Array]"===A(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?g:function(){throw new Error("not implemented")};var w,h=p,T={uint16:h,uint8:d};(w=new T.uint16(1))[0]=4660;var j,O=52===new T.uint8(w.buffer)[0],E={uint16:h,uint8:d};return j=function(){var n;return(n=new E.uint16(1))[0]=4660,52===new E.uint8(n.buffer)[1]}(),O&&j?"mixed-endian":O?"little-endian":j?"big-endian":"unknown"},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).BYTE_ORDER=t();
//# sourceMappingURL=index.js.map
