!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}([function(e,t,n){"use strict";var r=n(1),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(17),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n(5)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n(16))},function(e,t,n){"use strict";var r=n(0),o=n(18),i=n(2),a=n(20),s=n(23),c=n(24),u=n(6);e.exports=function(e){return new Promise((function(t,l){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+btoa(h+":"+m)}var v=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,l,r),p=null}},p.onabort=function(){p&&(l(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=n(25),g=(e.withCredentials||c(v))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),l(e),p=null)})),void 0===f&&(f=null),p.send(f)}))}},function(e,t,n){"use strict";var r=n(19);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(i,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(a,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var s=o.concat(i).concat(a),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return r.forEach(c,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){e.exports=n(11)},function(e,t,n){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.keys,o=Object.freeze,i=Object.seal,a="undefined"!=typeof Reflect&&Reflect,s=a.apply,c=a.construct;s||(s=function(e,t,n){return e.apply(t,n)}),o||(o=function(e){return e}),i||(i=function(e){return e}),c||(c=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var u=w(Array.prototype.forEach),l=w(Array.prototype.indexOf),f=w(Array.prototype.join),d=w(Array.prototype.pop),p=w(Array.prototype.push),h=w(Array.prototype.slice),m=w(String.prototype.toLowerCase),v=w(String.prototype.match),y=w(String.prototype.replace),g=w(String.prototype.indexOf),b=w(String.prototype.trim),T=w(RegExp.prototype.test),x=S(RegExp),A=S(TypeError);function w(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return s(e,t,r)}}function S(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return c(e,n)}}function L(e,r){t&&t(e,null);for(var o=r.length;o--;){var i=r[o];if("string"==typeof i){var a=m(i);a!==i&&(n(r)||(r[o]=a),i=a)}e[i]=!0}return e}function E(t){var n={},r=void 0;for(r in t)s(e,t,[r])&&(n[r]=t[r]);return n}var k=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),O=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),N=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),C=o(["#text"]),M=o(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),D=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),_=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),j=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),H=i(/\{\{[\s\S]*|[\s\S]*\}\}/gm),F=i(/<%[\s\S]*|[\s\S]*%>/gm),I=i(/^data-[\-\w.\u00B7-\uFFFF]/),q=i(/^aria-[\-\w]+$/),P=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),U=i(/^(?:\w+script|data):/i),z=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function W(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var G=function(){return"undefined"==typeof window?null:window},V=function(e,t){if("object"!==(void 0===e?"undefined":B(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G(),n=function(t){return e(t)};if(n.version="2.0.11",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var i=t.document,a=!1,s=t.document,c=t.DocumentFragment,w=t.HTMLTemplateElement,S=t.Node,Y=t.NodeFilter,X=t.NamedNodeMap,K=void 0===X?t.NamedNodeMap||t.MozNamedAttrMap:X,$=t.Text,J=t.Comment,Q=t.DOMParser,Z=t.trustedTypes;if("function"==typeof w){var ee=s.createElement("template");ee.content&&ee.content.ownerDocument&&(s=ee.content.ownerDocument)}var te=V(Z,i),ne=te?te.createHTML(""):"",re=s,oe=re.implementation,ie=re.createNodeIterator,ae=re.getElementsByTagName,se=re.createDocumentFragment,ce=i.importNode,ue={};n.isSupported=oe&&void 0!==oe.createHTMLDocument&&9!==s.documentMode;var le=H,fe=F,de=I,pe=q,he=U,me=z,ve=P,ye=null,ge=L({},[].concat(W(k),W(R),W(O),W(N),W(C))),be=null,Te=L({},[].concat(W(M),W(D),W(_),W(j))),xe=null,Ae=null,we=!0,Se=!0,Le=!1,Ee=!1,ke=!1,Re=!1,Oe=!1,Ne=!1,Ce=!1,Me=!1,De=!1,_e=!1,je=!0,He=!0,Fe=!1,Ie={},qe=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),Pe=null,Ue=L({},["audio","video","img","source","image","track"]),ze=null,Be=L({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),We=null,Ge=s.createElement("form"),Ve=function(e){We&&We===e||(e&&"object"===(void 0===e?"undefined":B(e))||(e={}),ye="ALLOWED_TAGS"in e?L({},e.ALLOWED_TAGS):ge,be="ALLOWED_ATTR"in e?L({},e.ALLOWED_ATTR):Te,ze="ADD_URI_SAFE_ATTR"in e?L(E(Be),e.ADD_URI_SAFE_ATTR):Be,Pe="ADD_DATA_URI_TAGS"in e?L(E(Ue),e.ADD_DATA_URI_TAGS):Ue,xe="FORBID_TAGS"in e?L({},e.FORBID_TAGS):{},Ae="FORBID_ATTR"in e?L({},e.FORBID_ATTR):{},Ie="USE_PROFILES"in e&&e.USE_PROFILES,we=!1!==e.ALLOW_ARIA_ATTR,Se=!1!==e.ALLOW_DATA_ATTR,Le=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ee=e.SAFE_FOR_JQUERY||!1,ke=e.SAFE_FOR_TEMPLATES||!1,Re=e.WHOLE_DOCUMENT||!1,Ce=e.RETURN_DOM||!1,Me=e.RETURN_DOM_FRAGMENT||!1,De=e.RETURN_DOM_IMPORT||!1,_e=e.RETURN_TRUSTED_TYPE||!1,Ne=e.FORCE_BODY||!1,je=!1!==e.SANITIZE_DOM,He=!1!==e.KEEP_CONTENT,Fe=e.IN_PLACE||!1,ve=e.ALLOWED_URI_REGEXP||ve,ke&&(Se=!1),Me&&(Ce=!0),Ie&&(ye=L({},[].concat(W(C))),be=[],!0===Ie.html&&(L(ye,k),L(be,M)),!0===Ie.svg&&(L(ye,R),L(be,D),L(be,j)),!0===Ie.svgFilters&&(L(ye,O),L(be,D),L(be,j)),!0===Ie.mathMl&&(L(ye,N),L(be,_),L(be,j))),e.ADD_TAGS&&(ye===ge&&(ye=E(ye)),L(ye,e.ADD_TAGS)),e.ADD_ATTR&&(be===Te&&(be=E(be)),L(be,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&L(ze,e.ADD_URI_SAFE_ATTR),He&&(ye["#text"]=!0),Re&&L(ye,["html","head","body"]),ye.table&&(L(ye,["tbody"]),delete xe.tbody),o&&o(e),We=e)},Ye=function(e){p(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=ne}},Xe=function(e,t){try{p(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){p(n.removed,{attribute:null,from:t})}t.removeAttribute(e)},Ke=function(e){var t=void 0,n=void 0;if(Ne)e="<remove></remove>"+e;else{var r=v(e,/^[\r\n\t ]+/);n=r&&r[0]}var o=te?te.createHTML(e):e;try{t=(new Q).parseFromString(o,"text/html")}catch(e){}if(a&&L(xe,["title"]),!t||!t.documentElement){var i=(t=oe.createHTMLDocument("")).body;i.parentNode.removeChild(i.parentNode.firstElementChild),i.outerHTML=o}return e&&n&&t.body.insertBefore(s.createTextNode(n),t.body.childNodes[0]||null),ae.call(t,Re?"html":"body")[0]};n.isSupported&&function(){try{var e=Ke("<x/><title>&lt;/title&gt;&lt;img&gt;");T(/<\/title/,e.querySelector("title").innerHTML)&&(a=!0)}catch(e){}}();var $e=function(e){return ie.call(e.ownerDocument||e,e,Y.SHOW_ELEMENT|Y.SHOW_COMMENT|Y.SHOW_TEXT,(function(){return Y.FILTER_ACCEPT}),!1)},Je=function(e){return!(e instanceof $||e instanceof J||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof K&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},Qe=function(e){return"object"===(void 0===S?"undefined":B(S))?e instanceof S:e&&"object"===(void 0===e?"undefined":B(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Ze=function(e,t,r){ue[e]&&u(ue[e],(function(e){e.call(n,t,r,We)}))},et=function(e){var t=void 0;if(Ze("beforeSanitizeElements",e,null),Je(e))return Ye(e),!0;var r=m(e.nodeName);if(Ze("uponSanitizeElement",e,{tagName:r,allowedTags:ye}),("svg"===r||"math"===r)&&0!==e.querySelectorAll("p, br").length)return Ye(e),!0;if(!ye[r]||xe[r]){if(He&&!qe[r]&&"function"==typeof e.insertAdjacentHTML)try{var o=e.innerHTML;e.insertAdjacentHTML("AfterEnd",te?te.createHTML(o):o)}catch(e){}return Ye(e),!0}return"noscript"===r&&T(/<\/noscript/i,e.innerHTML)||"noembed"===r&&T(/<\/noembed/i,e.innerHTML)?(Ye(e),!0):(!Ee||e.firstElementChild||e.content&&e.content.firstElementChild||!T(/</g,e.textContent)||(p(n.removed,{element:e.cloneNode()}),e.innerHTML?e.innerHTML=y(e.innerHTML,/</g,"&lt;"):e.innerHTML=y(e.textContent,/</g,"&lt;")),ke&&3===e.nodeType&&(t=e.textContent,t=y(t,le," "),t=y(t,fe," "),e.textContent!==t&&(p(n.removed,{element:e.cloneNode()}),e.textContent=t)),Ze("afterSanitizeElements",e,null),!1)},tt=function(e,t,n){if(je&&("id"===t||"name"===t)&&(n in s||n in Ge))return!1;if(Se&&T(de,t));else if(we&&T(pe,t));else{if(!be[t]||Ae[t])return!1;if(ze[t]);else if(T(ve,y(n,me,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==g(n,"data:")||!Pe[e])if(Le&&!T(he,y(n,me,"")));else if(n)return!1}return!0},nt=function(e){var t=void 0,o=void 0,i=void 0,a=void 0,s=void 0;Ze("beforeSanitizeAttributes",e,null);var c=e.attributes;if(c){var u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:be};for(s=c.length;s--;){var p=t=c[s],v=p.name,g=p.namespaceURI;if(o=b(t.value),i=m(v),u.attrName=i,u.attrValue=o,u.keepAttr=!0,u.forceKeepAttr=void 0,Ze("uponSanitizeAttribute",e,u),o=u.attrValue,!u.forceKeepAttr){if("name"===i&&"IMG"===e.nodeName&&c.id)a=c.id,c=h(c,[]),Xe("id",e),Xe(v,e),l(c,a)>s&&e.setAttribute("id",a.value);else{if("INPUT"===e.nodeName&&"type"===i&&"file"===o&&u.keepAttr&&(be[i]||!Ae[i]))continue;"id"===v&&e.setAttribute(v,""),Xe(v,e)}if(u.keepAttr)if(Ee&&T(/\/>/i,o))Xe(v,e);else if(T(/svg|math/i,e.namespaceURI)&&T(x("</("+f(r(qe),"|")+")","i"),o))Xe(v,e);else{ke&&(o=y(o,le," "),o=y(o,fe," "));var A=e.nodeName.toLowerCase();if(tt(A,i,o))try{g?e.setAttributeNS(g,v,o):e.setAttribute(v,o),d(n.removed)}catch(e){}}}}Ze("afterSanitizeAttributes",e,null)}},rt=function e(t){var n=void 0,r=$e(t);for(Ze("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Ze("uponSanitizeShadowNode",n,null),et(n)||(n.content instanceof c&&e(n.content),nt(n));Ze("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,r){var o=void 0,a=void 0,s=void 0,u=void 0,l=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Qe(e)){if("function"!=typeof e.toString)throw A("toString is not a function");if("string"!=typeof(e=e.toString()))throw A("dirty is not a string, aborting")}if(!n.isSupported){if("object"===B(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Qe(e))return t.toStaticHTML(e.outerHTML)}return e}if(Oe||Ve(r),n.removed=[],"string"==typeof e&&(Fe=!1),Fe);else if(e instanceof S)1===(a=(o=Ke("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?o=a:o.appendChild(a);else{if(!Ce&&!ke&&!Re&&_e&&-1===e.indexOf("<"))return te?te.createHTML(e):e;if(!(o=Ke(e)))return Ce?null:ne}o&&Ne&&Ye(o.firstChild);for(var f=$e(Fe?e:o);s=f.nextNode();)3===s.nodeType&&s===u||et(s)||(s.content instanceof c&&rt(s.content),nt(s),u=s);if(u=null,Fe)return e;if(Ce){if(Me)for(l=se.call(o.ownerDocument);o.firstChild;)l.appendChild(o.firstChild);else l=o;return De&&(l=ce.call(i,l,!0)),l}var d=Re?o.outerHTML:o.innerHTML;return ke&&(d=y(d,le," "),d=y(d,fe," ")),te&&_e?te.createHTML(d):d},n.setConfig=function(e){Ve(e),Oe=!0},n.clearConfig=function(){We=null,Oe=!1},n.isValidAttribute=function(e,t,n){We||Ve({});var r=m(e),o=m(t);return tt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(ue[e]=ue[e]||[],p(ue[e],t))},n.removeHook=function(e){ue[e]&&d(ue[e])},n.removeHooks=function(e){ue[e]&&(ue[e]=[])},n.removeAllHooks=function(){ue={}},n}()}()},function(e,t,n){"use strict";var r=n(0),o=n(1),i=n(12),a=n(7);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(n(4));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(8),c.CancelToken=n(26),c.isCancel=n(3),c.all=function(e){return Promise.all(e)},c.spread=n(27),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(13),a=n(14),s=n(7);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(15),i=n(3),a=n(4);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(21),o=n(22);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(8);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);var r=n(9),o=n.n(r),i=n(10),a=n.n(i);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.headerSearchIcon=document.querySelector(".header-search-icon"),this.overlay=document.querySelector(".search-overlay"),this.closeIcon=document.querySelector(".close-live-search"),this.inputField=document.querySelector("#live-search-field"),this.resultsArea=document.querySelector(".live-search-results"),this.loaderIcon=document.querySelector(".circle-loader"),this.typingWaitTimer,this.previousValue="",this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;this.inputField.addEventListener("keyup",(function(){return e.keyPressHandler()})),this.closeIcon.addEventListener("click",(function(){return e.closeOverlay()})),this.headerSearchIcon.addEventListener("click",(function(t){t.preventDefault(),e.openOverlay()}))}},{key:"keyPressHandler",value:function(){var e=this,t=this.inputField.value;""==t&&(clearTimeout(this.typingWaitTimer),this.hideLoaderIcon(),this.hideResultsArea()),""!=t&&t!=this.previousValue&&(clearTimeout(this.typingWaitTimer),this.showLoaderIcon(),this.hideResultsArea(),this.typingWaitTimer=setTimeout((function(){return e.sendRequest()}),750)),this.previousValue=t}},{key:"sendRequest",value:function(){var e=this;o.a.post("/search",{searchTerm:this.inputField.value}).then((function(t){console.log("this is the response data: "+t.data),e.renderResultsHTML(t.data)})).catch((function(){alert("hello , the request failed")}))}},{key:"renderResultsHTML",value:function(e){e.length?this.resultsArea.innerHTML=a.a.sanitize('<div class="list-group shadow-sm">\n            <div class="list-group-item active"><strong>Search Results</strong> ('.concat(e.length>1?"".concat(e.length," items found"):"1 item found",")</div>\n            ").concat(e.map((function(e){var t=new Date(e.createdDate);return'<a href="/post/'.concat(e._id,'" class="list-group-item list-group-item-action">\n                <img class="avatar-tiny" src="').concat(e.author.avatar,'"> <strong>').concat(e.title,'</strong>\n                <span class="text-muted small">').concat(e.author.username," on ").concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear(),"</span>\n              </a>")})).join(""),"    \n          </div>")):this.resultsArea.innerHTML='<p class="alert alert-danger text-center shadow-sm">Sorry, we could not find any results for that search',this.hideLoaderIcon(),this.showResultsArea()}},{key:"showLoaderIcon",value:function(){this.loaderIcon.classList.add("circle-loader--visible")}},{key:"hideLoaderIcon",value:function(){this.loaderIcon.classList.remove("circle-loader--visible")}},{key:"showResultsArea",value:function(){this.resultsArea.classList.add("live-search-results--visible")}},{key:"hideResultsArea",value:function(){this.resultsArea.classList.remove("live-search-results--visible")}},{key:"openOverlay",value:function(){var e=this;this.overlay.classList.add("search-overlay--visible"),setTimeout((function(){return e.inputField.focus()}),50)}},{key:"closeOverlay",value:function(){this.overlay.classList.remove("search-overlay--visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'<div class="search-overlay">\n        <div class="search-overlay-top shadow-sm">\n          <div class="container container--narrow">\n            <label for="live-search-field" class="search-overlay-icon"><i class="fas fa-search"></i></label>\n            <input type="text" id="live-search-field" class="live-search-field" placeholder="What are you interested in?">\n            <span class="close-live-search"><i class="fas fa-times-circle"></i></span>\n          </div>\n        </div>\n    \n        <div class="search-overlay-bottom">\n          <div class="container container--narrow py-3">\n            <div class="circle-loader"></div>\n            <div class="live-search-results "></div>\n          </div>\n        </div>\n      </div>')}}])&&s(t.prototype,n),r&&s(t,r),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.openedYet=!1,this.chatWrapper=document.querySelector("#chat-wrapper"),this.openIcon=document.querySelector(".header-chat-icon"),this.injectHTML(),this.closeIcon=document.querySelector(".chat-title-bar-close"),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;this.openIcon.addEventListener("click",(function(){return e.showChat()})),this.closeIcon.addEventListener("click",(function(){return e.hideChat()}))}},{key:"showChat",value:function(){this.openedYet||this.openConnection(),this.openedYet=!0,this.chatWrapper.classList.add("chat--visible")}},{key:"hideChat",value:function(){this.chatWrapper.classList.remove("chat--visible")}},{key:"openConnection",value:function(){alert("Opening a connection")}},{key:"injectHTML",value:function(){this.chatWrapper.innerHTML='\n        <div class="chat-title-bar">Chat <span class="chat-title-bar-close"><i class="fas fa-times-circle"></i></span></div>\n        <div id="chat" class="chat-log"></div>\n\n        <form id="chatForm" class="chat-form border-top">\n        <input type="text" class="chat-field" id="chatField" placeholder="Type a message…" autocomplete="off">\n        </form>\n        '}}])&&u(t.prototype,n),r&&u(t,r),e}();document.querySelector(".header-search-icon")&&new c,document.querySelector("#chat-wrapper")&&new l}]);