/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.13 (2019-08-06)
 */
!function(c){"use strict";var n,t,e,r,o,u,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),f=tinymce.util.Tools.resolve("tinymce.util.Tools"),d=function(n,t){var e,r=n.dom,o=n.selection.getSelectedBlocks();o.length&&(e=r.getAttrib(o[0],"dir"),f.each(o,function(n){r.getParent(n.parentNode,'*[dir="'+t+'"]',r.getRoot())||r.setAttrib(n,"dir",e!==t?t:null)}),n.nodeChanged())},l=function(n){n.addCommand("mceDirectionLTR",function(){d(n,"ltr")}),n.addCommand("mceDirectionRTL",function(){d(n,"rtl")})},a=function(n){return function(){return n}},m=a(!1),N=a(!0),s=m,g=N,T=function(){return E},E=(r={fold:function(n,t){return n()},is:s,isSome:s,isNone:g,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:e,orThunk:t,map:T,ap:T,each:function(){},bind:T,flatten:T,exists:s,forall:g,filter:T,equals:n=function(n){return n.isNone()},equals_:n,toArray:function(){return[]},toString:a("none()")},Object.freeze&&Object.freeze(r),r),O=function(e){var n=function(){return e},t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:g,isNone:s,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return O(n(e))},ap:function(n){return n.fold(T,function(n){return O(n(e))})},each:function(n){n(e)},bind:r,flatten:n,exists:r,forall:r,filter:function(n){return n(e)?o:E},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(s,function(n){return t(e,n)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}};return o},y=function(n){return null===n||n===undefined?E:O(n)},D=function(n){if(null===n||n===undefined)throw new Error("Node cannot be null or undefined");return{dom:a(n)}},p={fromHtml:function(n,t){var e=(t||c.document).createElement("div");if(e.innerHTML=n,!e.hasChildNodes()||1<e.childNodes.length)throw c.console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node");return D(e.childNodes[0])},fromTag:function(n,t){var e=(t||c.document).createElement(n);return D(e)},fromText:function(n,t){var e=(t||c.document).createTextNode(n);return D(e)},fromDom:D,fromPoint:function(n,t,e){var r=n.dom();return y(r.elementFromPoint(t,e)).map(D)}},h=(o="function",function(n){return function(n){if(null===n)return"null";var t=typeof n;return"object"===t&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":t}(n)===o}),_=Array.prototype.slice,v=(h(Array.from)&&Array.from,c.Node.ATTRIBUTE_NODE,c.Node.CDATA_SECTION_NODE,c.Node.COMMENT_NODE,c.Node.DOCUMENT_NODE,c.Node.DOCUMENT_TYPE_NODE,c.Node.DOCUMENT_FRAGMENT_NODE,c.Node.ELEMENT_NODE,c.Node.TEXT_NODE),C=(c.Node.PROCESSING_INSTRUCTION_NODE,c.Node.ENTITY_REFERENCE_NODE,c.Node.ENTITY_NODE,c.Node.NOTATION_NODE,u=v,function(n){return n.dom().nodeType===u}),A=function(n,t){var e,r,o=n.dom(),u=c.window.getComputedStyle(o).getPropertyValue(t),i=""!==u||(r=C(e=n)?e.dom().parentNode:e.dom())!==undefined&&null!==r&&r.ownerDocument.body.contains(r)?u:S(o,t);return null===i?undefined:i},S=function(n,t){return(e=n).style!==undefined&&h(e.style.getPropertyValue)?n.style.getPropertyValue(t):"";var e},R=function(t,r){return function(e){var n=function(n){var t=p.fromDom(n.element);e.setActive(("rtl"===A(t,"direction")?"rtl":"ltr")===r)};return t.on("NodeChange",n),function(){return t.off("NodeChange",n)}}},w=function(n){n.ui.registry.addToggleButton("ltr",{tooltip:"Left to right",icon:"ltr",onAction:function(){return n.execCommand("mceDirectionLTR")},onSetup:R(n,"ltr")}),n.ui.registry.addToggleButton("rtl",{tooltip:"Right to left",icon:"rtl",onAction:function(){return n.execCommand("mceDirectionRTL")},onSetup:R(n,"rtl")})};!function M(){i.add("directionality",function(n){l(n),w(n)})}()}(window);