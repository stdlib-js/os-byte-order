// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,i="function"==typeof o?o.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(n){var t,o,f,u,y;if(null==n)return r.call(n);o=n[i],y=i,t=null!=(u=n)&&e.call(u,y);try{n[i]=void 0}catch(t){return r.call(n)}return f=r.call(n),t?n[i]=o:delete n[i],f}:function(n){return r.call(n)},u="function"==typeof Uint8Array,y="function"==typeof Uint8Array?Uint8Array:null,a="function"==typeof Uint8Array?Uint8Array:void 0;n=function(){var n,t,r;if("function"!=typeof y)return!1;try{t=new y(t=[1,3.14,-3.14,256,257]),r=t,n=(u&&r instanceof Uint8Array||"[object Uint8Array]"===f(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?a:function(){throw new Error("not implemented")};var c,l=n,p="function"==typeof Uint16Array,d="function"==typeof Uint16Array?Uint16Array:null,b="function"==typeof Uint16Array?Uint16Array:void 0;c=function(){var n,t,r;if("function"!=typeof d)return!1;try{t=new d(t=[1,3.14,-3.14,65536,65537]),r=t,n=(p&&r instanceof Uint16Array||"[object Uint16Array]"===f(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")};var m,A=c,U={uint16:A,uint8:l};(m=new U.uint16(1))[0]=4660;var s,v=52===new U.uint8(m.buffer)[0],w={uint16:A,uint8:l};return s=function(){var n;return(n=new w.uint16(1))[0]=4660,52===new w.uint8(n.buffer)[1]}(),v&&s?"mixed-endian":v?"little-endian":s?"big-endian":"unknown"},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).BYTE_ORDER=t();
//# sourceMappingURL=browser.js.map