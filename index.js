// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",i=t&&"symbol"==typeof Symbol.toStringTag?function(n){var t,i,f,u,y;if(null==n)return r.call(n);i=n[o],y=o,t=null!=(u=n)&&e.call(u,y);try{n[o]=void 0}catch(t){return r.call(n)}return f=r.call(n),t?n[o]=i:delete n[o],f}:function(n){return r.call(n)},f="function"==typeof Uint8Array,u="function"==typeof Uint8Array?Uint8Array:null,y="function"==typeof Uint8Array?Uint8Array:void 0;n=function(){var n,t,r;if("function"!=typeof u)return!1;try{t=new u(t=[1,3.14,-3.14,256,257]),r=t,n=(f&&r instanceof Uint8Array||"[object Uint8Array]"===i(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var a,c=n,l="function"==typeof Uint16Array,p="function"==typeof Uint16Array?Uint16Array:null,d="function"==typeof Uint16Array?Uint16Array:void 0;a=function(){var n,t,r;if("function"!=typeof p)return!1;try{t=new p(t=[1,3.14,-3.14,65536,65537]),r=t,n=(l&&r instanceof Uint16Array||"[object Uint16Array]"===i(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?d:function(){throw new Error("not implemented")};var b,m=a,A={uint16:m,uint8:c};(b=new A.uint16(1))[0]=4660;var U,s=52===new A.uint8(b.buffer)[0],v={uint16:m,uint8:c};return U=function(){var n;return(n=new v.uint16(1))[0]=4660,52===new v.uint8(n.buffer)[1]}(),s&&U?"mixed-endian":s?"little-endian":U?"big-endian":"unknown"},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).BYTE_ORDER=t();
//# sourceMappingURL=index.js.map
