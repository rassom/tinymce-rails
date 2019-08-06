/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.13 (2019-08-06)
 */
!function(h){"use strict";var t,e,n,r,o,i,a,u,f,p=function(t){var e=t,n=function(){return e};return{get:n,set:function(t){e=t},clone:function(){return p(n())}}},s=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=function(t){return!(!/(^|[ ,])powerpaste([, ]|$)/.test(t.settings.plugins)||!s.get("powerpaste")||("undefined"!=typeof h.window.console&&h.window.console.log&&h.window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),0))},l=function(t,e){return{clipboard:t,quirks:e}},d=function(t,e,n,r){return t.fire("PastePreProcess",{content:e,internal:n,wordContent:r})},m=function(t,e,n,r){return t.fire("PastePostProcess",{node:e,internal:n,wordContent:r})},g=function(t,e){return t.fire("PastePlainTextToggle",{state:e})},v=function(t,e){return t.fire("paste",{ieFake:e})},y=function(t,e){"text"===e.pasteFormat.get()?(e.pasteFormat.set("html"),g(t,!1)):(e.pasteFormat.set("text"),g(t,!0)),t.focus()},b=function(t,n){t.addCommand("mceTogglePlainTextPaste",function(){y(t,n)}),t.addCommand("mceInsertClipboardContent",function(t,e){e.content&&n.pasteHtml(e.content,e.internal),e.text&&n.pasteText(e.text)})},w=function(t){return function(){return t}},x=w(!1),_=w(!0),P=x,T=_,D=function(){return C},C=(r={fold:function(t,e){return t()},is:P,isSome:P,isNone:T,getOr:n=function(t){return t},getOrThunk:e=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:n,orThunk:e,map:D,ap:D,each:function(){},bind:D,flatten:D,exists:P,forall:T,filter:D,equals:t=function(t){return t.isNone()},equals_:t,toArray:function(){return[]},toString:w("none()")},Object.freeze&&Object.freeze(r),r),k=function(n){var t=function(){return n},e=function(){return o},r=function(t){return t(n)},o={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:T,isNone:P,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(t){return k(t(n))},ap:function(t){return t.fold(D,function(t){return k(t(n))})},each:function(t){t(n)},bind:r,flatten:t,exists:r,forall:r,filter:function(t){return t(n)?o:C},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(P,function(t){return e(n,t)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return o},S={some:k,none:D,from:function(t){return null===t||t===undefined?C:k(t)}},F=(o="function",function(t){return function(t){if(null===t)return"null";var e=typeof t;return"object"===e&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"===e&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":e}(t)===o}),I=Array.prototype.slice,E=function(t,e){for(var n=t.length,r=new Array(n),o=0;o<n;o++){var i=t[o];r[o]=e(i,o,t)}return r},O=function(t,e){for(var n=0,r=t.length;n<r;n++){e(t[n],n,t)}},R=F(Array.from)?Array.from:function(t){return I.call(t)},A={},j={exports:A};i=undefined,a=A,u=j,f=undefined,function(t){"object"==typeof a&&void 0!==u?u.exports=t():"function"==typeof i&&i.amd?i([],t):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EphoxContactWrapper=t()}(function(){return function l(i,a,u){function s(e,t){if(!a[e]){if(!i[e]){var n="function"==typeof f&&f;if(!t&&n)return n(e,!0);if(c)return c(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var o=a[e]={exports:{}};i[e][0].call(o.exports,function(t){return s(i[e][1][t]||t)},o,o.exports,l,i,a,u)}return a[e].exports}for(var c="function"==typeof f&&f,t=0;t<u.length;t++)s(u[t]);return s}({1:[function(t,e,n){var r,o,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(t){r=a}try{o="function"==typeof clearTimeout?clearTimeout:u}catch(t){o=u}}();var c,l=[],f=!1,d=-1;function m(){f&&c&&(f=!1,c.length?l=c.concat(l):d=-1,l.length&&p())}function p(){if(!f){var t=s(m);f=!0;for(var e=l.length;e;){for(c=l,l=[];++d<e;)c&&c[d].run();d=-1,e=l.length}c=null,f=!1,function n(t){if(o===clearTimeout)return clearTimeout(t);if((o===u||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{return o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function h(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new g(t,e)),1!==l.length||f||s(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],2:[function(t,f,e){(function(n){!function(t){var e=setTimeout;function r(){}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],l(t,this)}function o(r,o){for(;3===r._state;)r=r._value;0!==r._state?(r._handled=!0,i._immediateFn(function(){var t=1===r._state?o.onFulfilled:o.onRejected;if(null!==t){var e;try{e=t(r._value)}catch(n){return void u(o.promise,n)}a(o.promise,e)}else(1===r._state?a:u)(o.promise,r._value)})):r._deferreds.push(o)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void s(t);if("function"==typeof n)return void l(function r(t,e){return function(){t.apply(e,arguments)}}(n,e),t)}t._state=1,t._value=e,s(t)}catch(o){u(t,o)}}function u(t,e){t._state=2,t._value=e,s(t)}function s(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)o(t,t._deferreds[e]);t._deferreds=null}function c(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function l(t,e){var n=!1;try{t(function(t){n||(n=!0,a(e,t))},function(t){n||(n=!0,u(e,t))})}catch(r){if(n)return;n=!0,u(e,r)}}i.prototype["catch"]=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(r);return o(this,new c(t,e,n)),n},i.all=function(t){var s=Array.prototype.slice.call(t);return new i(function(o,i){if(0===s.length)return o([]);var a=s.length;function u(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void n.call(t,function(t){u(e,t)},i)}s[e]=t,0==--a&&o(s)}catch(r){i(r)}}for(var t=0;t<s.length;t++)u(t,s[t])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(n){return new i(function(t,e){e(n)})},i.race=function(o){return new i(function(t,e){for(var n=0,r=o.length;n<r;n++)o[n].then(t,e)})},i._immediateFn="function"==typeof n?function(t){n(t)}:function(t){e(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==f&&f.exports?f.exports=i:t.Promise||(t.Promise=i)}(this)}).call(this,t("timers").setImmediate)},{timers:3}],3:[function(s,t,c){(function(t,e){var r=s("process/browser.js").nextTick,n=Function.prototype.apply,o=Array.prototype.slice,i={},a=0;function u(t,e){this._id=t,this._clearFn=e}c.setTimeout=function(){return new u(n.call(setTimeout,window,arguments),clearTimeout)},c.setInterval=function(){return new u(n.call(setInterval,window,arguments),clearInterval)},c.clearTimeout=c.clearInterval=function(t){t.close()},u.prototype.unref=u.prototype.ref=function(){},u.prototype.close=function(){this._clearFn.call(window,this._id)},c.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},c.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},c._unrefActive=c.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;0<=e&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},c.setImmediate="function"==typeof t?t:function(t){var e=a++,n=!(arguments.length<2)&&o.call(arguments,1);return i[e]=!0,r(function(){i[e]&&(n?t.apply(null,n):t.call(null),c.clearImmediate(e))}),e},c.clearImmediate="function"==typeof e?e:function(t){delete i[t]}}).call(this,s("timers").setImmediate,s("timers").clearImmediate)},{"process/browser.js":1,timers:3}],4:[function(t,e,n){var r=t("promise-polyfill"),o="undefined"!=typeof window?window:Function("return this;")();e.exports={boltExport:o.Promise||r}},{"promise-polyfill":2}]},{},[4])(4)});var M=j.exports.boltExport,L=function(t){var n=S.none(),e=[],r=function(t){o()?a(t):e.push(t)},o=function(){return n.isSome()},i=function(t){O(t,a)},a=function(e){n.each(function(t){h.setTimeout(function(){e(t)},0)})};return t(function(t){n=S.some(t),i(e),e=[]}),{get:r,map:function(n){return L(function(e){r(function(t){e(n(t))})})},isReady:o}},N={nu:L,pure:function(e){return L(function(t){t(e)})}},B=function(t){h.setTimeout(function(){throw t},0)},H=function(n){var t=function(t){n().then(t,B)};return{map:function(t){return H(function(){return n().then(t)})},bind:function(e){return H(function(){return n().then(function(t){return e(t).toPromise()})})},anonBind:function(t){return H(function(){return n().then(function(){return t.toPromise()})})},toLazy:function(){return N.nu(t)},toCached:function(){var t=null;return H(function(){return null===t&&(t=n()),t})},toPromise:n,get:t}},$=function(t){return H(function(){return new M(t)})},W=function(a,t){return t(function(r){var o=[],i=0;0===a.length?r([]):O(a,function(t,e){var n;t.get((n=e,function(t){o[n]=t,++i>=a.length&&r(o)}))})})},U=function(t,e){var n=E(t,e);return W(n,$)},z=tinymce.util.Tools.resolve("tinymce.Env"),V=tinymce.util.Tools.resolve("tinymce.util.Delay"),q=tinymce.util.Tools.resolve("tinymce.util.Tools"),K=tinymce.util.Tools.resolve("tinymce.util.VK"),G="x-tinymce/html",X="\x3c!-- "+G+" --\x3e",Y=function(t){return X+t},Z=function(t){return t.replace(X,"")},J=function(t){return-1!==t.indexOf(X)},Q=function(){return G},tt=tinymce.util.Tools.resolve("tinymce.html.Entities"),et=function(t){return t.replace(/\r?\n/g,"<br>")},nt=function(t,e,n){var r=t.split(/\n\n/),o=function(t,e){var n,r=[],o="<"+t;if("object"==typeof e){for(n in e)e.hasOwnProperty(n)&&r.push(n+'="'+tt.encodeAllRaw(e[n])+'"');r.length&&(o+=" "+r.join(" "))}return o+">"}(e,n),i="</"+e+">",a=q.map(r,function(t){return t.split(/\n/).join("<br />")});return 1===a.length?a[0]:q.map(a,function(t){return o+t+i}).join("")},rt=function(t){return!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(t)},ot=function(t,e,n){return e?nt(t,!0===e?"p":e,n):et(t)},it=tinymce.util.Tools.resolve("tinymce.html.DomParser"),at=tinymce.util.Tools.resolve("tinymce.html.Node"),ut=tinymce.util.Tools.resolve("tinymce.html.Schema"),st=tinymce.util.Tools.resolve("tinymce.html.Serializer"),ct={shouldBlockDrop:function(t){return t.getParam("paste_block_drop",!1)},shouldPasteDataImages:function(t){return t.getParam("paste_data_images",!1)},shouldFilterDrop:function(t){return t.getParam("paste_filter_drop",!0)},getPreProcess:function(t){return t.getParam("paste_preprocess")},getPostProcess:function(t){return t.getParam("paste_postprocess")},getWebkitStyles:function(t){return t.getParam("paste_webkit_styles")},shouldRemoveWebKitStyles:function(t){return t.getParam("paste_remove_styles_if_webkit",!0)},shouldMergeFormats:function(t){return t.getParam("paste_merge_formats",!0)},isSmartPasteEnabled:function(t){return t.getParam("smart_paste",!0)},isPasteAsTextEnabled:function(t){return t.getParam("paste_as_text",!1)},getRetainStyleProps:function(t){return t.getParam("paste_retain_style_properties")},getWordValidElements:function(t){return t.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody")},shouldConvertWordFakeLists:function(t){return t.getParam("paste_convert_word_fake_lists",!0)},shouldUseDefaultFilters:function(t){return t.getParam("paste_enable_default_filters",!0)}};function lt(e,t){return q.each(t,function(t){e=t.constructor===RegExp?e.replace(t,""):e.replace(t[0],t[1])}),e}var ft={filter:lt,innerText:function se(t){var e=ut(),n=it({},e),r="",o=e.getShortEndedElements(),i=q.makeMap("script noscript style textarea video audio iframe object"," "),a=e.getBlockElements();return t=lt(t,[/<!\[[^\]]+\]>/g]),function u(t){var e=t.name,n=t;if("br"!==e){if("wbr"!==e)if(o[e]&&(r+=" "),i[e])r+=" ";else{if(3===t.type&&(r+=t.value),!t.shortEnded&&(t=t.firstChild))for(;u(t),t=t.next;);a[e]&&n.next&&(r+="\n","p"===e&&(r+="\n"))}}else r+="\n"}(n.parse(t)),r},trimHtml:function ce(t){return t=lt(t,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function r(t,e,n){return e||n?"\xa0":" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])},createIdGenerator:function le(t){var e=0;return function(){return t+e++}},isMsEdge:function(){return-1!==h.navigator.userAgent.indexOf(" Edge/")}};function dt(e){var n,t;return t=[/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],e=e.replace(/^[\u00a0 ]+/,""),q.each(t,function(t){if(t.test(e))return!(n=!0)}),n}function mt(t){var i,a,u=1;function n(t){var e="";if(3===t.type)return t.value;if(t=t.firstChild)for(;e+=n(t),t=t.next;);return e}function s(t,e){if(3===t.type&&e.test(t.value))return t.value=t.value.replace(e,""),!1;if(t=t.firstChild)do{if(!s(t,e))return!1}while(t=t.next);return!0}function e(t,e,n){var r=t._listLevel||u;r!==u&&(r<u?i&&(i=i.parent.parent):(a=i,i=null)),i&&i.name===e?i.append(t):(a=a||i,i=new at(e,1),1<n&&i.attr("start",""+n),t.wrap(i)),t.name="li",u<r&&a&&a.lastChild.append(i),u=r,function o(t){if(t._listIgnore)t.remove();else if(t=t.firstChild)for(;o(t),t=t.next;);}(t),s(t,/^\u00a0+/),s(t,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),s(t,/^\u00a0+/)}for(var r=[],o=t.firstChild;null!=o;)if(r.push(o),null!==(o=o.walk()))for(;void 0!==o&&o.parent!==t;)o=o.walk();for(var c=0;c<r.length;c++)if("p"===(t=r[c]).name&&t.firstChild){var l=n(t);if(/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(l)){e(t,"ul");continue}if(dt(l)){var f=/([0-9]+)\./.exec(l),d=1;f&&(d=parseInt(f[1],10)),e(t,"ol",d);continue}if(t._listLevel){e(t,"ul",1);continue}i=null}else a=i,i=null}function pt(n,r,o,i){var a,u={},t=n.dom.parseStyle(i);return q.each(t,function(t,e){switch(e){case"mso-list":(a=/\w+ \w+([0-9]+)/i.exec(i))&&(o._listLevel=parseInt(a[1],10)),/Ignore/i.test(t)&&o.firstChild&&(o._listIgnore=!0,o.firstChild._listIgnore=!0);break;case"horiz-align":e="text-align";break;case"vert-align":e="vertical-align";break;case"font-color":case"mso-foreground":e="color";break;case"mso-background":case"mso-highlight":e="background";break;case"font-weight":case"font-style":return void("normal"!==t&&(u[e]=t));case"mso-element":if(/^(comment|comment-list)$/i.test(t))return void o.remove()}0!==e.indexOf("mso-comment")?0!==e.indexOf("mso-")&&("all"===ct.getRetainStyleProps(n)||r&&r[e])&&(u[e]=t):o.remove()}),/(bold)/i.test(u["font-weight"])&&(delete u["font-weight"],o.wrap(new at("b",1))),/(italic)/i.test(u["font-style"])&&(delete u["font-style"],o.wrap(new at("i",1))),(u=n.dom.serializeStyle(u,o.name))||null}var gt={preProcess:function(t,e){return ct.shouldUseDefaultFilters(t)?function(r,t){var e,o;(e=ct.getRetainStyleProps(r))&&(o=q.makeMap(e.split(/[, ]/))),t=ft.filter(t,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,"\xa0"],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(t,e){return 0<e.length?e.replace(/./," ").slice(Math.floor(e.length/2)).split("").join("\xa0"):""}]]);var n=ct.getWordValidElements(r),i=ut({valid_elements:n,valid_children:"-li[p]"});q.each(i.elements,function(t){t.attributes["class"]||(t.attributes["class"]={},t.attributesOrder.push("class")),t.attributes.style||(t.attributes.style={},t.attributesOrder.push("style"))});var a=it({},i);a.addAttributeFilter("style",function(t){for(var e,n=t.length;n--;)(e=t[n]).attr("style",pt(r,o,e,e.attr("style"))),"span"===e.name&&e.parent&&!e.attributes.length&&e.unwrap()}),a.addAttributeFilter("class",function(t){for(var e,n,r=t.length;r--;)n=(e=t[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&e.remove(),e.attr("class",null)}),a.addNodeFilter("del",function(t){for(var e=t.length;e--;)t[e].remove()}),a.addNodeFilter("a",function(t){for(var e,n,r,o=t.length;o--;)if(n=(e=t[o]).attr("href"),r=e.attr("name"),n&&-1!==n.indexOf("#_msocom_"))e.remove();else if(n&&0===n.indexOf("file://")&&(n=n.split("#")[1])&&(n="#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){e.unwrap();continue}e.attr({href:n,name:r})}else e.unwrap()});var u=a.parse(t);return ct.shouldConvertWordFakeLists(r)&&mt(u),t=st({validate:r.settings.validate},i).serialize(u)}(t,e):e},isWordContent:function fe(t){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(t)||/class="OutlineElement/.test(t)||/id="?docs\-internal\-guid\-/.test(t)}},ht=function(t,e){return{content:t,cancelled:e}},vt=function(t,e,n,r){var o,i,a,u,s,c,l=d(t,e,n,r);return t.hasEventListeners("PastePostProcess")&&!l.isDefaultPrevented()?(o=t,i=l.content,a=n,u=r,s=o.dom.create("div",{style:"display:none"},i),c=m(o,s,a,u),ht(c.node.innerHTML,c.isDefaultPrevented())):ht(l.content,l.isDefaultPrevented())},yt=function(t,e,n){var r=gt.isWordContent(e),o=r?gt.preProcess(t,e):e;return vt(t,o,n,r)},bt=function(t,e){var n,r;return t.insertContent((n=e,r=t.dom.create("body",{},n),q.each(r.querySelectorAll("meta"),function(t){return t.parentNode.removeChild(t)}),r.innerHTML),{merge:ct.shouldMergeFormats(t),paste:!0}),!0},wt=function(t){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(t)},xt=function(t){return wt(t)&&/.(gif|jpe?g|png)$/.test(t)},_t=function(t,e,n){return!(!1!==t.selection.isCollapsed()||!wt(e))&&(o=e,i=n,(r=t).undoManager.extra(function(){i(r,o)},function(){r.execCommand("mceInsertLink",!1,o)}),!0);var r,o,i},Pt=function(t,e,n){return!!xt(e)&&(o=e,i=n,(r=t).undoManager.extra(function(){i(r,o)},function(){r.insertContent('<img src="'+o+'">')}),!0);var r,o,i},Tt=function(t,e){var n,r;!1===ct.isSmartPasteEnabled(t)?bt(t,e):(n=t,r=e,q.each([_t,Pt,bt],function(t){return!0!==t(n,r,bt)}))},Dt=function(t){return"\n"===t||"\r"===t},Ct=function(o){var e,n;return(n={pcIsSpace:!(e=function(t,e){return-1!==" \f\t\x0B".indexOf(e)||"\xa0"===e?t.pcIsSpace||""===t.str||t.str.length===o.length-1||(n=o,(r=t.str.length+1)<n.length&&0<=r&&Dt(n[r]))?{pcIsSpace:!1,str:t.str+"\xa0"}:{pcIsSpace:!0,str:t.str+" "}:{pcIsSpace:Dt(e),str:t.str+e};var n,r}),str:""},O(o,function(t){n=e(n,t)}),n).str},kt=function(t,e,n){var r=n||J(e),o=yt(t,Z(e),r);!1===o.cancelled&&Tt(t,o.content)},St=function(t,e){var n=t.dom.encode(e).replace(/\r\n/g,"\n"),r=Ct(n),o=ot(r,t.settings.forced_root_block,t.settings.forced_root_block_attrs);kt(t,o,!1)},Ft=function(t){var e={};if(t){if(t.getData){var n=t.getData("Text");n&&0<n.length&&-1===n.indexOf("data:text/mce-internal,")&&(e["text/plain"]=n)}if(t.types)for(var r=0;r<t.types.length;r++){var o=t.types[r];try{e[o]=t.getData(o)}catch(i){e[o]=""}}}return e},It=function(t,e){return e in t&&0<t[e].length},Et=function(t){return It(t,"text/html")||It(t,"text/plain")},Ot=ft.createIdGenerator("mceclip"),Rt=function(e,t,n){var r,o,i,a,u="paste"===t.type?t.clipboardData:t.dataTransfer;if(e.settings.paste_data_images&&u){var s=(i=(o=u).items?E(R(o.items),function(t){return t.getAsFile()}):[],a=o.files?R(o.files):[],function(t,e){for(var n=[],r=0,o=t.length;r<o;r++){var i=t[r];e(i,r,t)&&n.push(i)}return n}(0<i.length?i:a,function(t){return/^image\/(jpeg|png|gif|bmp)$/.test(t.type)}));if(0<s.length)return t.preventDefault(),(r=s,U(r,function(r){return $(function(t){var e=r.getAsFile?r.getAsFile():r,n=new window.FileReader;n.onload=function(){t({blob:e,uri:n.result})},n.readAsDataURL(e)})})).get(function(t){n&&e.selection.setRng(n),O(t,function(t){!function(t,e){var n,r,o,i,a,u,s,c=(n=e.uri,-1!==(r=n.indexOf(","))?n.substr(r+1):null),l=Ot(),f=t.settings.images_reuse_filename&&e.blob.name?(o=t,i=e.blob.name,(a=i.match(/([\s\S]+?)\.(?:jpeg|jpg|png|gif)$/i))?o.dom.encode(a[1]):null):l,d=new h.Image;if(d.src=e.uri,u=t.settings,s=d,!u.images_dataimg_filter||u.images_dataimg_filter(s)){var m,p=t.editorUpload.blobCache,g=void 0;(m=p.findFirst(function(t){return t.base64()===c}))?g=m:(g=p.create(l,e.blob,c,f),p.add(g)),kt(t,'<img src="'+g.blobUri()+'">',!1)}else kt(t,'<img src="'+e.uri+'">',!1)}(e,t)})}),!0}return!1},At=function(t){return K.metaKeyPressed(t)&&86===t.keyCode||t.shiftKey&&45===t.keyCode},jt=function(s,c,l){var e,f,d=(e=p(S.none()),{clear:function(){e.set(S.none())},set:function(t){e.set(S.some(t))},isSet:function(){return e.get().isSome()},on:function(t){e.get().each(t)}});function m(t,e,n,r){var o,i;It(t,"text/html")?o=t["text/html"]:(o=c.getHtml(),r=r||J(o),c.isDefaultContent(o)&&(n=!0)),o=ft.trimHtml(o),c.remove(),i=!1===r&&rt(o),o.length&&!i||(n=!0),n&&(o=It(t,"text/plain")&&i?t["text/plain"]:ft.innerText(o)),c.isDefaultContent(o)?e||s.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):n?St(s,o):kt(s,o,r)}s.on("keydown",function(t){function e(t){At(t)&&!t.isDefaultPrevented()&&c.remove()}if(At(t)&&!t.isDefaultPrevented()){if((f=t.shiftKey&&86===t.keyCode)&&z.webkit&&-1!==h.navigator.userAgent.indexOf("Version/"))return;if(t.stopImmediatePropagation(),d.set(t),window.setTimeout(function(){d.clear()},100),z.ie&&f)return t.preventDefault(),void v(s,!0);c.remove(),c.create(),s.once("keyup",e),s.once("paste",function(){s.off("keyup",e)})}});s.on("paste",function(t){var e,n,r,o=d.isSet(),i=(e=s,n=Ft(t.clipboardData||e.getDoc().dataTransfer),ft.isMsEdge()?q.extend(n,{"text/html":""}):n),a="text"===l.get()||f,u=It(i,Q());(f=!1,t.isDefaultPrevented()||(r=t.clipboardData,-1!==h.navigator.userAgent.indexOf("Android")&&r&&r.items&&0===r.items.length))?c.remove():Et(i)||!Rt(s,t,c.getLastRng()||s.selection.getRng())?(o||t.preventDefault(),!z.ie||o&&!t.ieFake||It(i,"text/html")||(c.create(),s.dom.bind(c.getEl(),"paste",function(t){t.stopPropagation()}),s.getDoc().execCommand("Paste",!1,null),i["text/html"]=c.getHtml()),It(i,"text/html")?(t.preventDefault(),u||(u=J(i["text/html"])),m(i,o,a,u)):V.setEditorTimeout(s,function(){m(i,o,a,u)},0)):c.remove()})},Mt=function(t){return z.ie&&t.inline?h.document.body:t.getBody()},Lt=function(e,t,n){var r;Mt(r=e)!==r.getBody()&&e.dom.bind(t,"paste keyup",function(t){Ht(e,n)||e.fire("paste")})},Nt=function(t){return t.dom.get("mcepastebin")},Bt=function(t,e){return e===t},Ht=function(t,e){var n,r=Nt(t);return(n=r)&&"mcepastebin"===n.id&&Bt(e,r.innerHTML)},$t=function(a){var u=p(null),s="%MCEPASTEBIN%";return{create:function(){return e=u,n=s,o=(t=a).dom,i=t.getBody(),e.set(t.selection.getRng()),r=t.dom.add(Mt(t),"div",{id:"mcepastebin","class":"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},n),(z.ie||z.gecko)&&o.setStyle(r,"left","rtl"===o.getStyle(i,"direction",!0)?65535:-65535),o.bind(r,"beforedeactivate focusin focusout",function(t){t.stopPropagation()}),Lt(t,r,n),r.focus(),void t.selection.select(r,!0);var t,e,n,r,o,i},remove:function(){return function(t,e){if(Nt(t)){for(var n=void 0,r=e.get();n=t.dom.get("mcepastebin");)t.dom.remove(n),t.dom.unbind(n);r&&t.selection.setRng(r)}e.set(null)}(a,u)},getEl:function(){return Nt(a)},getHtml:function(){return function(n){var e,t,r,o,i,a=function(t,e){t.appendChild(e),n.dom.remove(e,!0)};for(t=q.grep(Mt(n).childNodes,function(t){return"mcepastebin"===t.id}),e=t.shift(),q.each(t,function(t){a(e,t)}),r=(o=n.dom.select("div[id=mcepastebin]",e)).length-1;0<=r;r--)i=n.dom.create("div"),e.insertBefore(i,o[r]),a(i,o[r]);return e?e.innerHTML:""}(a)},getLastRng:function(){return u.get()},isDefault:function(){return Ht(a,s)},isDefaultContent:function(t){return Bt(s,t)}}},Wt=function(n,t){var e=$t(n);return n.on("PreInit",function(){return jt(a=n,e,t),void a.parser.addNodeFilter("img",function(t,e,n){var r,o=function(t){t.attr("data-mce-object")||u===z.transparentSrc||t.remove()};if(!a.settings.paste_data_images&&(r=n).data&&!0===r.data.paste)for(var i=t.length;i--;)(u=t[i].attr("src"))&&(0===u.indexOf("webkit-fake-url")?o(t[i]):a.settings.allow_html_data_urls||0!==u.indexOf("data:")||o(t[i]))});var a,u}),{pasteFormat:t,pasteHtml:function(t,e){return kt(n,t,e)},pasteText:function(t){return St(n,t)},pasteImageData:function(t,e){return Rt(n,t,e)},getDataTransferItems:Ft,hasHtmlOrText:Et,hasContentType:It}},Ut=function(){},zt=function(t,e,n){if(r=t,!1!==z.iOS||r===undefined||"function"!=typeof r.setData||!0===ft.isMsEdge())return!1;try{return t.clearData(),t.setData("text/html",e),t.setData("text/plain",n),t.setData(Q(),e),!0}catch(o){return!1}var r},Vt=function(t,e,n,r){zt(t.clipboardData,e.html,e.text)?(t.preventDefault(),r()):n(e.html,r)},qt=function(u){return function(t,e){var n=Y(t),r=u.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),o=u.dom.create("div",{contenteditable:"true"},n);u.dom.setStyles(r,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),r.appendChild(o),u.dom.add(u.getBody(),r);var i=u.selection.getRng();o.focus();var a=u.dom.createRng();a.selectNodeContents(o),u.selection.setRng(a),V.setTimeout(function(){u.selection.setRng(i),r.parentNode.removeChild(r),e()},0)}},Kt=function(t){return{html:t.selection.getContent({contextual:!0}),text:t.selection.getContent({format:"text"})}},Gt=function(t){return!t.selection.isCollapsed()||!!(e=t).dom.getParent(e.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",e.getBody());var e},Xt=function(t){var e,n;t.on("cut",(e=t,function(t){Gt(e)&&Vt(t,Kt(e),qt(e),function(){V.setTimeout(function(){e.execCommand("Delete")},0)})})),t.on("copy",(n=t,function(t){Gt(n)&&Vt(t,Kt(n),qt(n),Ut)}))},Yt=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),Zt=function(t,e){return Yt.getCaretRangeFromPoint(e.clientX,e.clientY,t.getDoc())},Jt=function(t,e){t.focus(),t.selection.setRng(e)},Qt=function(a,u,s){ct.shouldBlockDrop(a)&&a.on("dragend dragover draggesture dragdrop drop drag",function(t){t.preventDefault(),t.stopPropagation()}),ct.shouldPasteDataImages(a)||a.on("drop",function(t){var e=t.dataTransfer;e&&e.files&&0<e.files.length&&t.preventDefault()}),a.on("drop",function(t){var e,n;if(n=Zt(a,t),!t.isDefaultPrevented()&&!s.get()){e=u.getDataTransferItems(t.dataTransfer);var r,o=u.hasContentType(e,Q());if((u.hasHtmlOrText(e)&&(!(r=e["text/plain"])||0!==r.indexOf("file://"))||!u.pasteImageData(t,n))&&n&&ct.shouldFilterDrop(a)){var i=e["mce-internal"]||e["text/html"]||e["text/plain"];i&&(t.preventDefault(),V.setEditorTimeout(a,function(){a.undoManager.transact(function(){e["mce-internal"]&&a.execCommand("Delete"),Jt(a,n),i=ft.trimHtml(i),e["text/html"]?u.pasteHtml(i,o):u.pasteText(i)})}))}}}),a.on("dragstart",function(t){s.set(!0)}),a.on("dragover dragend",function(t){ct.shouldPasteDataImages(a)&&!1===s.get()&&(t.preventDefault(),Jt(a,Zt(a,t))),"dragend"===t.type&&s.set(!1)})},te=function(t){var e=t.plugins.paste,n=ct.getPreProcess(t);n&&t.on("PastePreProcess",function(t){n.call(e,e,t)});var r=ct.getPostProcess(t);r&&t.on("PastePostProcess",function(t){r.call(e,e,t)})};function ee(e,n){e.on("PastePreProcess",function(t){t.content=n(e,t.content,t.internal,t.wordContent)})}function ne(t,e){if(!gt.isWordContent(e))return e;var n=[];q.each(t.schema.getBlockElements(),function(t,e){n.push(e)});var r=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g");return e=ft.filter(e,[[r,"$1"]]),e=ft.filter(e,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function re(t,e,n,r){if(r||n)return e;var c,o=ct.getWebkitStyles(t);if(!1===ct.shouldRemoveWebKitStyles(t)||"all"===o)return e;if(o&&(c=o.split(/[, ]/)),c){var l=t.dom,f=t.selection.getNode();e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,function(t,e,n,r){var o=l.parseStyle(l.decode(n)),i={};if("none"===c)return e+r;for(var a=0;a<c.length;a++){var u=o[c[a]],s=l.getStyle(f,c[a],!0);/color/.test(c[a])&&(u=l.toHex(u),s=l.toHex(s)),s!==u&&(i[c[a]]=u)}return(i=l.serializeStyle(i,"span"))?e+' style="'+i+'"'+r:e+r})}else e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");return e=e.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,function(t,e,n,r){return e+' style="'+n+'"'+r})}function oe(n,t){n.$("a",t).find("font,u").each(function(t,e){n.dom.remove(e,!0)})}var ie=function(t){z.webkit&&ee(t,re),z.ie&&(ee(t,ne),function r(e,n){e.on("PastePostProcess",function(t){n(e,t.node)})}(t,oe))},ae=function(n,r){return function(e){e.setActive("text"===r.pasteFormat.get());var t=function(t){return e.setActive(t.state)};return n.on("PastePlainTextToggle",t),function(){return n.off("PastePlainTextToggle",t)}}},ue=function(t,e){t.ui.registry.addToggleButton("pastetext",{active:!1,icon:"paste-text",tooltip:"Paste as text",onAction:function(){return t.execCommand("mceTogglePlainTextPaste")},onSetup:ae(t,e)}),t.ui.registry.addToggleMenuItem("pastetext",{text:"Paste as text",onAction:function(){return t.execCommand("mceTogglePlainTextPaste")},onSetup:ae(t,e)})};!function de(){s.add("paste",function(t){if(!1===c(t)){var e=p(!1),n=p(ct.isPasteAsTextEnabled(t)?"text":"html"),r=Wt(t,n),o=ie(t);return ue(t,r),b(t,r),te(t),Xt(t),Qt(t,r,e),l(r,o)}})}()}(window);