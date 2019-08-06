/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.13 (2019-08-06)
 */
!function(s){"use strict";var t,e,n,r,i,o,a,f,u=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=function(){},l=function(t){return function(){return t}},d=function(t){return t},m=l(!1),p=l(!0),g=m,h=p,y=function(){return v},v=(r={fold:function(t,e){return t()},is:g,isSome:g,isNone:h,getOr:n=function(t){return t},getOrThunk:e=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:n,orThunk:e,map:y,ap:y,each:function(){},bind:y,flatten:y,exists:g,forall:h,filter:y,equals:t=function(t){return t.isNone()},equals_:t,toArray:function(){return[]},toString:l("none()")},Object.freeze&&Object.freeze(r),r),b=function(n){var t=function(){return n},e=function(){return i},r=function(t){return t(n)},i={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:h,isNone:g,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(t){return b(t(n))},ap:function(t){return t.fold(y,function(t){return b(t(n))})},each:function(t){t(n)},bind:r,flatten:t,exists:r,forall:r,filter:function(t){return t(n)?i:v},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(g,function(t){return e(n,t)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return i},w={some:b,none:y,from:function(t){return null===t||t===undefined?v:b(t)}},T=function(e){return function(t){return function(t){if(null===t)return"null";var e=typeof t;return"object"===e&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"===e&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":e}(t)===e}},_=T("string"),U=T("object"),x=T("array"),A=T("boolean"),I=T("function"),S=Array.prototype.slice,D=Array.prototype.push,O=function(t){for(var e=[],n=0,r=t.length;n<r;++n){if(!x(t[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+t);D.apply(e,t[n])}return e},C=(I(Array.from)&&Array.from,function(){return(C=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)}),P={},E={exports:P};i=undefined,o=P,a=E,f=undefined,function(t){"object"==typeof o&&void 0!==a?a.exports=t():"function"==typeof i&&i.amd?i([],t):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EphoxContactWrapper=t()}(function(){return function s(o,a,u){function c(e,t){if(!a[e]){if(!o[e]){var n="function"==typeof f&&f;if(!t&&n)return n(e,!0);if(l)return l(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var i=a[e]={exports:{}};o[e][0].call(i.exports,function(t){return c(o[e][1][t]||t)},i,i.exports,s,o,a,u)}return a[e].exports}for(var l="function"==typeof f&&f,t=0;t<u.length;t++)c(u[t]);return c}({1:[function(t,e,n){var r,i,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(r===setTimeout)return setTimeout(t,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(t){r=a}try{i="function"==typeof clearTimeout?clearTimeout:u}catch(t){i=u}}();var l,s=[],f=!1,d=-1;function m(){f&&l&&(f=!1,l.length?s=l.concat(s):d=-1,s.length&&p())}function p(){if(!f){var t=c(m);f=!0;for(var e=s.length;e;){for(l=s,s=[];++d<e;)l&&l[d].run();d=-1,e=s.length}l=null,f=!1,function n(t){if(i===clearTimeout)return clearTimeout(t);if((i===u||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{return i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new g(t,e)),1!==s.length||f||c(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],2:[function(t,f,e){(function(n){!function(t){var e=setTimeout;function r(){}function o(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],s(t,this)}function i(r,i){for(;3===r._state;)r=r._value;0!==r._state?(r._handled=!0,o._immediateFn(function(){var t=1===r._state?i.onFulfilled:i.onRejected;if(null!==t){var e;try{e=t(r._value)}catch(n){return void u(i.promise,n)}a(i.promise,e)}else(1===r._state?a:u)(i.promise,r._value)})):r._deferreds.push(i)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof o)return t._state=3,t._value=e,void c(t);if("function"==typeof n)return void s(function r(t,e){return function(){t.apply(e,arguments)}}(n,e),t)}t._state=1,t._value=e,c(t)}catch(i){u(t,i)}}function u(t,e){t._state=2,t._value=e,c(t)}function c(t){2===t._state&&0===t._deferreds.length&&o._immediateFn(function(){t._handled||o._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)i(t,t._deferreds[e]);t._deferreds=null}function l(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function s(t,e){var n=!1;try{t(function(t){n||(n=!0,a(e,t))},function(t){n||(n=!0,u(e,t))})}catch(r){if(n)return;n=!0,u(e,r)}}o.prototype["catch"]=function(t){return this.then(null,t)},o.prototype.then=function(t,e){var n=new this.constructor(r);return i(this,new l(t,e,n)),n},o.all=function(t){var c=Array.prototype.slice.call(t);return new o(function(i,o){if(0===c.length)return i([]);var a=c.length;function u(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void n.call(t,function(t){u(e,t)},o)}c[e]=t,0==--a&&i(c)}catch(r){o(r)}}for(var t=0;t<c.length;t++)u(t,c[t])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(n){return new o(function(t,e){e(n)})},o.race=function(i){return new o(function(t,e){for(var n=0,r=i.length;n<r;n++)i[n].then(t,e)})},o._immediateFn="function"==typeof n?function(t){n(t)}:function(t){e(t,0)},o._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},o._setImmediateFn=function(t){o._immediateFn=t},o._setUnhandledRejectionFn=function(t){o._unhandledRejectionFn=t},void 0!==f&&f.exports?f.exports=o:t.Promise||(t.Promise=o)}(this)}).call(this,t("timers").setImmediate)},{timers:3}],3:[function(c,t,l){(function(t,e){var r=c("process/browser.js").nextTick,n=Function.prototype.apply,i=Array.prototype.slice,o={},a=0;function u(t,e){this._id=t,this._clearFn=e}l.setTimeout=function(){return new u(n.call(setTimeout,window,arguments),clearTimeout)},l.setInterval=function(){return new u(n.call(setInterval,window,arguments),clearInterval)},l.clearTimeout=l.clearInterval=function(t){t.close()},u.prototype.unref=u.prototype.ref=function(){},u.prototype.close=function(){this._clearFn.call(window,this._id)},l.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},l.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},l._unrefActive=l.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;0<=e&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},l.setImmediate="function"==typeof t?t:function(t){var e=a++,n=!(arguments.length<2)&&i.call(arguments,1);return o[e]=!0,r(function(){o[e]&&(n?t.apply(null,n):t.call(null),l.clearImmediate(e))}),e},l.clearImmediate="function"==typeof e?e:function(t){delete o[t]}}).call(this,c("timers").setImmediate,c("timers").clearImmediate)},{"process/browser.js":1,timers:3}],4:[function(t,e,n){var r=t("promise-polyfill"),i="undefined"!=typeof window?window:Function("return this;")();e.exports={boltExport:i.Promise||r}},{"promise-polyfill":2}]},{},[4])(4)});var L=E.exports.boltExport,N=function(t){var n=w.none(),e=[],r=function(t){i()?a(t):e.push(t)},i=function(){return n.isSome()},o=function(t){!function(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n,t)}(t,a)},a=function(e){n.each(function(t){s.setTimeout(function(){e(t)},0)})};return t(function(t){n=w.some(t),o(e),e=[]}),{get:r,map:function(n){return N(function(e){r(function(t){e(n(t))})})},isReady:i}},j={nu:N,pure:function(e){return N(function(t){t(e)})}},R=function(t){s.setTimeout(function(){throw t},0)},F=function(n){var t=function(t){n().then(t,R)};return{map:function(t){return F(function(){return n().then(t)})},bind:function(e){return F(function(){return n().then(function(t){return e(t).toPromise()})})},anonBind:function(t){return F(function(){return n().then(function(){return t.toPromise()})})},toLazy:function(){return j.nu(t)},toCached:function(){var t=null;return F(function(){return null===t&&(t=n()),t})},toPromise:n,get:t}},k=function(t){return F(function(){return new L(t)})},z=function(t){return F(function(){return L.resolve(t)})},H=function(n){return{is:function(t){return n===t},isValue:p,isError:m,getOr:l(n),getOrThunk:l(n),getOrDie:l(n),or:function(t){return H(n)},orThunk:function(t){return H(n)},fold:function(t,e){return e(n)},map:function(t){return H(t(n))},mapError:function(t){return H(n)},each:function(t){t(n)},bind:function(t){return t(n)},exists:function(t){return t(n)},forall:function(t){return t(n)},toOption:function(){return w.some(n)}}},B=function(n){return{is:m,isValue:m,isError:p,getOr:d,getOrThunk:function(t){return t()},getOrDie:function(){return t=String(n),function(){throw new Error(t)}();var t},or:function(t){return t},orThunk:function(t){return t()},fold:function(t,e){return t(n)},map:function(t){return B(n)},mapError:function(t){return B(t(n))},each:c,bind:function(t){return B(n)},exists:m,forall:p,toOption:w.none}},M={value:H,error:B,fromOption:function(t,e){return t.fold(function(){return B(e)},H)}},G=function(o){return C({},o,{toCached:function(){return G(o.toCached())},bindFuture:function(e){return G(o.bind(function(t){return t.fold(function(t){return z(M.error(t))},function(t){return e(t)})}))},bindResult:function(e){return G(o.map(function(t){return t.bind(e)}))},mapResult:function(e){return G(o.map(function(t){return t.map(e)}))},mapError:function(e){return G(o.map(function(t){return t.mapError(e)}))},foldResult:function(e,n){return o.map(function(t){return t.fold(e,n)})},withTimeout:function(t,i){return G(k(function(e){var n=!1,r=s.setTimeout(function(){n=!0,e(M.error(i()))},t);o.get(function(t){n||(s.clearTimeout(r),e(t))})}))}})},W=function(t){return G(k(t))},q=W,$=Object.prototype.hasOwnProperty,J=function(a){return function(){for(var t=new Array(arguments.length),e=0;e<t.length;e++)t[e]=arguments[e];if(0===t.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<t.length;r++){var i=t[r];for(var o in i)$.call(i,o)&&(n[o]=a(n[o],i[o]))}return n}},V=J(function(t,e){return U(t)&&U(e)?V(t,e):e}),X=J(function(t,e){return e}),Z=function(t){var e=t.imageList.map(function(t){return{name:"images",type:"selectbox",label:"Image list",items:t}}),n=t.classList.map(function(t){return{name:"classes",type:"selectbox",label:"Class",items:t}});return O([[{name:"src",type:"urlinput",filetype:"image",label:"Source"}],e.toArray(),t.hasDescription?[{name:"alt",type:"input",label:"Image description"}]:[],t.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],t.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[{type:"grid",columns:2,items:O([n.toArray(),t.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])}]])},K=function(t){return{title:"General",name:"general",items:Z(t)}},Q=Z,Y=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),tt=tinymce.util.Tools.resolve("tinymce.util.Promise"),et=tinymce.util.Tools.resolve("tinymce.util.XHR"),nt=function(t){return t.getParam("images_upload_url","","string")},rt=function(t){return t.getParam("images_upload_handler",undefined,"function")},it={hasDimensions:function(t){return t.getParam("image_dimensions",!0,"boolean")},hasUploadTab:function(t){return t.getParam("image_uploadtab",!0,"boolean")},hasAdvTab:function(t){return t.getParam("image_advtab",!1,"boolean")},getPrependUrl:function(t){return t.getParam("image_prepend_url","","string")},getClassList:function(t){return t.getParam("image_class_list")},hasDescription:function(t){return t.getParam("image_description",!0,"boolean")},hasImageTitle:function(t){return t.getParam("image_title",!1,"boolean")},hasImageCaption:function(t){return t.getParam("image_caption",!1,"boolean")},getImageList:function(t){return t.getParam("image_list",!1)},hasUploadUrl:function(t){return!!nt(t)},hasUploadHandler:function(t){return!!rt(t)},getUploadUrl:nt,getUploadHandler:rt,getUploadBasePath:function(t){return t.getParam("images_upload_base_path",undefined,"string")},getUploadCredentials:function(t){return t.getParam("images_upload_credentials",!1,"boolean")}},ot=function(t,e){return Math.max(parseInt(t,10),parseInt(e,10))},at=function(t,e){var n=s.document.createElement("img"),r=function(t){n.parentNode&&n.parentNode.removeChild(n),e(t)};n.onload=function(){var t={width:ot(n.width,n.clientWidth),height:ot(n.height,n.clientHeight)};r(M.value(t))},n.onerror=function(){r(M.error("Failed to get image dimensions for: "+t))};var i=n.style;i.visibility="hidden",i.position="fixed",i.bottom=i.left="0px",i.width=i.height="auto",s.document.body.appendChild(n),n.src=t},ut=function(t){return t&&(t=t.replace(/px$/,"")),t},ct=function(t){return 0<t.length&&/^[0-9]+$/.test(t)&&(t+="px"),t},lt=function(t){if(t.margin){var e=String(t.margin).split(" ");switch(e.length){case 1:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[0],t["margin-bottom"]=t["margin-bottom"]||e[0],t["margin-left"]=t["margin-left"]||e[0];break;case 2:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[1],t["margin-bottom"]=t["margin-bottom"]||e[0],t["margin-left"]=t["margin-left"]||e[1];break;case 3:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[1],t["margin-bottom"]=t["margin-bottom"]||e[2],t["margin-left"]=t["margin-left"]||e[1];break;case 4:t["margin-top"]=t["margin-top"]||e[0],t["margin-right"]=t["margin-right"]||e[1],t["margin-bottom"]=t["margin-bottom"]||e[2],t["margin-left"]=t["margin-left"]||e[3]}delete t.margin}return t},st=function(t,e){var n=it.getImageList(t);"string"==typeof n?et.send({url:n,success:function(t){e(JSON.parse(t))}}):"function"==typeof n?n(e):e(n)},ft=function(t,e,n){var r=function(){n.onload=n.onerror=null,t.selection&&(t.selection.select(n),t.nodeChanged())};n.onload=function(){e.width||e.height||!it.hasDimensions(t)||t.dom.setAttribs(n,{width:String(n.clientWidth),height:String(n.clientHeight)}),r()},n.onerror=r},dt=function(r){return new tt(function(t,e){var n=new s.FileReader;n.onload=function(){t(n.result)},n.onerror=function(){e(n.error.message)},n.readAsDataURL(r)})},mt=function(t){return"IMG"===t.nodeName&&(t.hasAttribute("data-mce-object")||t.hasAttribute("data-mce-placeholder"))},pt=Y.DOM,gt=function(t){return t.style.marginLeft&&t.style.marginRight&&t.style.marginLeft===t.style.marginRight?ut(t.style.marginLeft):""},ht=function(t){return t.style.marginTop&&t.style.marginBottom&&t.style.marginTop===t.style.marginBottom?ut(t.style.marginTop):""},yt=function(t){return t.style.borderWidth?ut(t.style.borderWidth):""},vt=function(t,e){return t.hasAttribute(e)?t.getAttribute(e):""},bt=function(t,e){return t.style[e]?t.style[e]:""},wt=function(t){return null!==t.parentNode&&"FIGURE"===t.parentNode.nodeName},Tt=function(t,e,n){t.setAttribute(e,n)},_t=function(t){var e,n,r,i;wt(t)?(i=(r=t).parentNode,pt.insertAfter(r,i),pt.remove(i)):(e=t,n=pt.create("figure",{"class":"image"}),pt.insertAfter(n,e),n.appendChild(e),n.appendChild(pt.create("figcaption",{contentEditable:"true"},"Caption")),n.contentEditable="false")},Ut=function(t,e){var n=t.getAttribute("style"),r=e(null!==n?n:"");0<r.length?(t.setAttribute("style",r),t.setAttribute("data-mce-style",r)):t.removeAttribute("style")},xt=function(t,r){return function(t,e,n){t.style[e]?(t.style[e]=ct(n),Ut(t,r)):Tt(t,e,n)}},At=function(t,e){return t.style[e]?ut(t.style[e]):vt(t,e)},It=function(t,e){var n=ct(e);t.style.marginLeft=n,t.style.marginRight=n},St=function(t,e){var n=ct(e);t.style.marginTop=n,t.style.marginBottom=n},Dt=function(t,e){var n=ct(e);t.style.borderWidth=n},Ot=function(t,e){t.style.borderStyle=e},Ct=function(t){return"FIGURE"===t.nodeName},Pt=function(t,e){var n=s.document.createElement("img");return Tt(n,"style",e.style),(gt(n)||""!==e.hspace)&&It(n,e.hspace),(ht(n)||""!==e.vspace)&&St(n,e.vspace),(yt(n)||""!==e.border)&&Dt(n,e.border),(bt(n,"borderStyle")||""!==e.borderStyle)&&Ot(n,e.borderStyle),t(n.getAttribute("style"))},Et=function(t,e){return{src:vt(e,"src"),alt:vt(e,"alt"),title:vt(e,"title"),width:At(e,"width"),height:At(e,"height"),"class":vt(e,"class"),style:t(vt(e,"style")),caption:wt(e),hspace:gt(e),vspace:ht(e),border:yt(e),borderStyle:bt(e,"borderStyle")}},Lt=function(t,e,n,r,i){n[r]!==e[r]&&i(t,r,n[r])},Nt=function(r,i){return function(t,e,n){r(t,n),Ut(t,i)}},jt=function(t,e,n){var r=Et(t,n);Lt(n,r,e,"caption",function(t,e,n){return _t(t)}),Lt(n,r,e,"src",Tt),Lt(n,r,e,"alt",Tt),Lt(n,r,e,"title",Tt),Lt(n,r,e,"width",xt(0,t)),Lt(n,r,e,"height",xt(0,t)),Lt(n,r,e,"class",Tt),Lt(n,r,e,"style",Nt(function(t,e){return Tt(t,"style",e)},t)),Lt(n,r,e,"hspace",Nt(It,t)),Lt(n,r,e,"vspace",Nt(St,t)),Lt(n,r,e,"border",Nt(Dt,t)),Lt(n,r,e,"borderStyle",Nt(Ot,t))},Rt=function(t,e){var n=t.dom.styles.parse(e),r=lt(n),i=t.dom.styles.parse(t.dom.styles.serialize(r));return t.dom.styles.serialize(i)},Ft=function(t){var e=t.selection.getNode(),n=t.dom.getParent(e,"figure.image");return n?t.dom.select("img",n)[0]:e&&("IMG"!==e.nodeName||mt(e))?null:e},kt=function(e,t){var n=e.dom,r=n.getParent(t.parentNode,function(t){return e.schema.getTextBlockElements()[t.nodeName]},e.getBody());return r?n.split(r,t):t},zt=function(e,t){var n=function(t,e){var n=s.document.createElement("img");if(jt(t,X(e,{caption:!1}),n),Tt(n,"alt",e.alt),e.caption){var r=pt.create("figure",{"class":"image"});return r.appendChild(n),r.appendChild(pt.create("figcaption",{contentEditable:"true"},"Caption")),r.contentEditable="false",r}return n}(function(t){return Rt(e,t)},t);e.dom.setAttrib(n,"data-mce-id","__mcenew"),e.focus(),e.selection.setContent(n.outerHTML);var r=e.dom.select('*[data-mce-id="__mcenew"]')[0];if(e.dom.setAttrib(r,"data-mce-id",null),Ct(r)){var i=kt(e,r);e.selection.select(i)}else e.selection.select(r)},Ht=function(t,e){var n=Ft(t);n?e.src?function(e,t){var n,r=Ft(e);if(jt(function(t){return Rt(e,t)},t,r),n=r,e.dom.setAttrib(n,"src",n.getAttribute("src")),Ct(r.parentNode)){var i=r.parentNode;kt(e,i),e.selection.select(r.parentNode)}else e.selection.select(r),ft(e,t,r)}(t,e):function(t,e){if(e){var n=t.dom.is(e.parentNode,"figure.image")?e.parentNode:e;t.dom.remove(n),t.focus(),t.nodeChanged(),t.dom.isEmpty(t.getBody())&&(t.setContent(""),t.selection.setCursorLocation())}}(t,n):e.src&&zt(t,e)},Bt=tinymce.util.Tools.resolve("tinymce.util.Tools"),Mt=function(t){return _(t.value)?t.value:""},Gt=function(t,i){var o=[];return Bt.each(t,function(t){var e=_(t.text)?t.text:_(t.title)?t.title:"";if(t.menu!==undefined){var n=Gt(t.menu,i);o.push({text:e,items:n})}else{var r=i(t);o.push({text:e,value:r})}}),o},Wt=function(e){return void 0===e&&(e=Mt),function(t){return t?w.from(t).map(function(t){return Gt(t,e)}):w.none()}},qt=function(t,n){return function(t,e){for(var n=0;n<t.length;n++){var r=e(t[n],n);if(r.isSome())return r}return w.none()}(t,function(t){return e=t,Object.prototype.hasOwnProperty.call(e,"items")?qt(t.items,n):t.value===n?w.some(t):w.none();var e})},$t=Wt,Jt=function(t){return Wt(Mt)(t)},Vt=function(t,e){return t.bind(function(t){return qt(t,e)})};function Xt(a){var e=function(t,r,i,e){var o,n;(o=new s.XMLHttpRequest).open("POST",a.url),o.withCredentials=a.credentials,o.upload.onprogress=function(t){e(t.loaded/t.total*100)},o.onerror=function(){i("Image upload failed due to a XHR Transport error. Code: "+o.status)},o.onload=function(){var t,e,n;o.status<200||300<=o.status?i("HTTP Error: "+o.status):(t=JSON.parse(o.responseText))&&"string"==typeof t.location?r((e=a.basePath,n=t.location,e?e.replace(/\/$/,"")+"/"+n.replace(/^\//,""):n)):i("Invalid JSON: "+o.responseText)},(n=new s.FormData).append("file",t.blob(),t.filename()),o.send(n)};return a=Bt.extend({credentials:!1,handler:e},a),{upload:function(t){return a.url||a.handler!==e?(r=t,i=a.handler,new tt(function(t,e){try{i(r,t,e,c)}catch(n){e(n.message)}})):tt.reject("Upload url missing from the settings.");var r,i}}}var Zt=function(t){return{title:"Advanced",name:"advanced",items:[{type:"input",label:"Style",name:"style"},{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace"},{type:"input",label:"Horizontal space",name:"hspace"},{type:"input",label:"Border width",name:"border"},{type:"selectbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}},Kt=function(n){var e,t,r=$t(function(t){return n.convertURL(t.value||t.url,"src")}),i=k(function(e){st(n,function(t){e(r(t).map(function(t){return O([[{text:"None",value:""}],t])}))})}),o=Jt(it.getClassList(n)),a=it.hasAdvTab(n),u=it.hasUploadTab(n),c=it.hasUploadUrl(n),l=it.hasUploadHandler(n),s=(t=Ft(e=n))?Et(function(t){return Rt(e,t)},t):{src:"",alt:"",title:"",width:"",height:"","class":"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:""},f=it.hasDescription(n),d=it.hasImageTitle(n),m=it.hasDimensions(n),p=it.hasImageCaption(n),g=it.getUploadUrl(n),h=it.getUploadBasePath(n),y=it.getUploadCredentials(n),v=it.getUploadHandler(n),b=w.some(it.getPrependUrl(n)).filter(function(t){return _(t)&&0<t.length});return i.map(function(t){return{image:s,imageList:t,classList:o,hasAdvTab:a,hasUploadTab:u,hasUploadUrl:c,hasUploadHandler:l,hasDescription:f,hasImageTitle:d,hasDimensions:m,hasImageCaption:p,url:g,basePath:h,credentials:y,handler:v,prependURL:b}})},Qt=function(t){return{title:"Upload",name:"upload",items:[{type:"dropzone",name:"fileinput"}]}},Yt=function(t){return{src:{value:t.src,meta:{}},images:t.src,alt:t.alt,title:t.title,dimensions:{width:t.width,height:t.height},classes:t["class"],caption:t.caption,style:t.style,vspace:t.vspace,border:t.border,hspace:t.hspace,borderstyle:t.borderStyle,fileinput:[]}},te=function(t){return{src:t.src.value,alt:t.alt,title:t.title,width:t.dimensions.width,height:t.dimensions.height,"class":t.classes,style:t.style,caption:t.caption,hspace:t.hspace,vspace:t.vspace,border:t.border,borderStyle:t.borderstyle}},ee=function(t,e){var n,r,i=e.getData();(n=t,r=i.src.value,/^(?:[a-zA-Z]+:)?\/\//.test(r)?w.none():n.prependURL.bind(function(t){return r.substring(0,t.length)!==t?w.some(t+r):w.none()})).each(function(t){e.setData({src:{value:t,meta:i.src.meta}})})},ne=function(t,e){var n,r,i,o=e.getData(),a=o.src.meta;if(a!==undefined){var u=V({},o);r=u,i=a,(n=t).hasDescription&&_(i.alt)&&(r.alt=i.alt),n.hasImageTitle&&_(i.title)&&(r.title=i.title),n.hasDimensions&&(_(i.width)&&(r.dimensions.width=i.width),_(i.height)&&(r.dimensions.height=i.height)),_(i["class"])&&Vt(n.classList,i["class"]).each(function(t){r.classes=t.value}),n.hasImageCaption&&A(i.caption)&&(r.caption=i.caption),n.hasAdvTab&&(_(i.vspace)&&(r.vspace=i.vspace),_(i.border)&&(r.border=i.border),_(i.hspace)&&(r.hspace=i.hspace),_(i.borderstyle)&&(r.borderstyle=i.borderstyle)),e.setData(u)}},re=function(t,e,n,r){var i,o,a,u,c,l,s,f,d,m,p,g;ee(e,r),ne(e,r),i=t,o=e,a=n,c=(u=r).getData(),l=c.src.value,(s=c.src.meta||{}).width||s.height||!o.hasDimensions||i.imageSize(l).get(function(t){t.each(function(t){a.open&&u.setData({dimensions:t})})}),f=e,d=n,p=(m=r).getData(),g=Vt(f.imageList,p.src.value),d.prevImage=g,m.setData({images:g.map(function(t){return t.value}).getOr("")})},ie=function(t,e,n){var r,i,o,a,u,c=lt(t(n.style)),l=V({},n);return l.vspace=(r=c)["margin-top"]&&r["margin-bottom"]&&r["margin-top"]===r["margin-bottom"]?ut(String(r["margin-top"])):"",l.hspace=(i=c)["margin-right"]&&i["margin-left"]&&i["margin-right"]===i["margin-left"]?ut(String(i["margin-right"])):"",l.border=(o=c)["border-width"]?ut(String(o["border-width"])):"",l.borderstyle=(a=c)["border-style"]?String(a["border-style"]):"",l.style=(u=e)(t(u(c))),l},oe=function(a,u,c,l){var t,e=l.getData();l.block("Uploading image"),(t=e.fileinput,0===t.length?w.none():w.some(t[0])).fold(function(){l.unblock()},function(n){var r=s.URL.createObjectURL(n),i=Xt({url:u.url,basePath:u.basePath,credentials:u.credentials,handler:u.handler}),o=function(){l.unblock(),s.URL.revokeObjectURL(r)};dt(n).then(function(t){var e=a.createBlobCache(n,r,t);i.upload(e).then(function(t){l.setData({src:{value:t,meta:{}}}),l.showTab("general"),re(a,u,c,l),o()})["catch"](function(t){o(),a.alertErr(l,t)})})})},ae=function(h,y,v){return function(t,e){var n,r,i,o,a,u,c,l,s,f,d,m,p,g;"src"===e.name?re(h,y,v,t):"images"===e.name?(s=h,f=y,d=v,p=(m=t).getData(),(g=Vt(f.imageList,p.images)).each(function(t){""===p.alt||d.prevImage.map(function(t){return t.text===p.alt}).getOr(!1)?""===t.value?m.setData({src:t,alt:d.prevAlt}):m.setData({src:t,alt:t.text}):m.setData({src:t})}),d.prevImage=g,re(s,f,d,m)):"alt"===e.name?v.prevAlt=t.getData().alt:"style"===e.name?(a=h,c=(u=t).getData(),l=ie(a.parseStyle,a.serializeStyle,c),u.setData(l)):"vspace"===e.name||"hspace"===e.name||"border"===e.name||"borderstyle"===e.name?(n=h,r=t,i=V(Yt(y.image),r.getData()),o=Pt(n.normalizeCss,te(i)),r.setData({style:o})):"fileinput"===e.name&&oe(h,y,v,t)}},ue=function(o){return function(t){var e,n,r,i={prevImage:Vt((e=t).imageList,e.image.src),prevAlt:e.image.alt,open:!0};return{title:"Insert/Edit Image",size:"normal",body:(r=t,r.hasAdvTab||r.hasUploadUrl||r.hasUploadHandler?{type:"tabpanel",tabs:O([[K(r)],r.hasAdvTab?[Zt(r)]:[],r.hasUploadTab&&(r.hasUploadUrl||r.hasUploadHandler)?[Qt(r)]:[]])}:{type:"panel",items:Q(r)}),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:Yt(t.image),onSubmit:o.onSubmit(t),onChange:ae(o,t,i),onClose:(n=i,function(){n.open=!1})}}},ce=function(e){var n,r,i,o,a,u,c,t={onSubmit:(c=e,function(n){return function(t){var e=V(Yt(n.image),t.getData());c.undoManager.transact(function(){Ht(c,te(e))}),c.editorUpload.uploadImagesAuto(),t.close()}}),imageSize:(u=e,function(t){return q(function(n){at(u.documentBaseURI.toAbsolute(t),function(t){var e=t.map(function(t){return{width:String(t.width),height:String(t.height)}});n(e)})})}),createBlobCache:(a=e,function(t,e,n){return a.editorUpload.blobCache.create({blob:t,blobUri:e,name:t.name?t.name.replace(/\.[^\.]+$/,""):null,base64:n.split(",")[1]})}),alertErr:(o=e,function(t,e){o.windowManager.alert(e,t.close)}),normalizeCss:(i=e,function(t){return Rt(i,t)}),parseStyle:(r=e,function(t){return r.dom.parseStyle(t)}),serializeStyle:(n=e,function(t,e){return n.dom.serializeStyle(t,e)})};return{open:function(){return Kt(e).map(ue(t)).get(function(t){e.windowManager.open(t)})}}},le=function(t){t.addCommand("mceImage",ce(t).open)},se=function(o){return function(t){for(var e,n=t.length,r=function(t){t.attr("contenteditable",o?"true":null)};n--;){var i=t[n];void 0,(e=i.attr("class"))&&/\bimage\b/.test(e)&&(i.attr("contenteditable",o?"false":null),Bt.each(i.getAll("figcaption"),r))}}},fe=function(t){t.on("PreInit",function(){t.parser.addNodeFilter("figure",se(!0)),t.serializer.addNodeFilter("figure",se(!1))})},de=function(e){e.ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:ce(e).open,onSetup:function(t){return e.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image",t.setActive).unbind}}),e.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:ce(e).open}),e.ui.registry.addContextMenu("image",{update:function(t){return Ct(t)||"IMG"===t.nodeName&&!mt(t)?["image"]:[]}})};!function me(){u.add("image",function(t){fe(t),de(t),le(t)})}()}(window);