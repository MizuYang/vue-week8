(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dfcd0e7"],{"4f6c":function(t,e,n){"use strict";n("de62")},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return q}});var r=n(279),o=n.n(r),i=n(370),c=n.n(i),u=n(817),a=n.n(u);function l(t){try{return document.execCommand(t)}catch(e){return!1}}var s=function(t){var e=a()(t);return l("cut"),e},f=s;function d(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=t,n}var y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";if("string"===typeof t){var r=d(t);e.container.appendChild(r),n=a()(r),l("copy"),r.remove()}else n=a()(t),l("copy");return n},p=y;function m(t){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}var h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container,o=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==m(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?p(i,{container:r}):o?"cut"===n?f(o):p(o,{container:r}):void 0},v=h;function b(t){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e,n){return e&&S(t.prototype,e),n&&S(t,n),t}function L(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}function _(t,e){return _=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},_(t,e)}function E(t){var e=k();return function(){var n,r=A(t);if(e){var o=A(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(t,e){return!e||"object"!==b(e)&&"function"!==typeof e?T(t):e}function T(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}function O(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var j=function(t){L(n,t);var e=E(n);function n(t,r){var o;return g(this,n),o=e.call(this),o.resolveOptions(r),o.listenClick(t),o}return w(n,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===b(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=c()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",r=v({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(r?"success":"error",{action:n,text:r,trigger:e,clearSelection:function(){e&&e.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return O("action",t)}},{key:"defaultTarget",value:function(t){var e=O("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return O("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return p(t,e)}},{key:"cut",value:function(t){return f(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),n}(o()),q=j},828:function(t){var e=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function r(t,n){while(t&&t.nodeType!==e){if("function"===typeof t.matches&&t.matches(n))return t;t=t.parentNode}}t.exports=r},438:function(t,e,n){var r=n(828);function o(t,e,n,r,o){var i=c.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}function i(t,e,n,r,i){return"function"===typeof t.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}function c(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=i},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,n){var r=n(879),o=n(438);function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return c(t,e,n);if(r.nodeList(t))return u(t,e,n);if(r.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function c(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function u(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function a(t,e,n){return o(document.body,t,e,n)}t.exports=i},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,c=r.length;i<c;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),n(686)}().default}))},de62:function(t,e,n){},f94c:function(t,e,n){"use strict";var r=n("7a23"),o={class:"d-flex justify-content-between align-items-center list-unstyled mb-5 time_line"},i=Object(r["createStaticVNode"])('<li class="finish_1 timelineStyle timeLineText" data-v-77ec1897>確認商品</li><i class="bi bi-arrow-right fs-2 me-4 arrowLeft arrowMoveLeft" data-v-77ec1897></i><li class="finish_2 timeLineText" data-v-77ec1897><span data-v-77ec1897>填寫資料</span></li><i class="bi bi-arrow-right fs-2 me-4 arrowLeft arrowMoveLeft" data-v-77ec1897></i><li class="finish_3 timeLineText" data-v-77ec1897><span data-v-77ec1897>確認付款</span></li><i class="bi bi-arrow-right fs-2 me-4 arrowLeft arrowMoveLeft" data-v-77ec1897></i><li class="finish_4 timeLineText" data-v-77ec1897>完成訂單</li>',7),c=[i];function u(t,e,n,i,u,a){return Object(r["openBlock"])(),Object(r["createElementBlock"])("ul",o,c)}var a={props:["is_pay"],data:function(){return{timelineRoutePath:""}},watch:{timelineRoutePath:function(){this.change_time_line()},is_pay:function(){document.querySelector(".finish_2").classList.add("timelineStyle"),document.querySelector(".finish_3").classList.add("timelineStyle"),document.querySelector(".finish_4").classList.add("timelineStyle")}},methods:{change_time_line:function(){"/cart"===this.timelineRoutePath?(document.querySelector(".finish_2").classList.remove("timelineStyle"),document.querySelector(".finish_3").classList.remove("timelineStyle"),document.querySelector(".finish_4").classList.remove("timelineStyle")):"/checkout"===this.timelineRoutePath?(document.querySelector(".finish_2").classList.add("timelineStyle"),document.querySelector(".finish_3").classList.remove("timelineStyle"),document.querySelector(".finish_4").classList.remove("timelineStyle")):this.$route.params.orderId?(document.querySelector(".finish_2").classList.add("timelineStyle"),document.querySelector(".finish_3").classList.add("timelineStyle"),document.querySelector(".finish_4").classList.remove("timelineStyle")):"/order_completed"===this.timelineRoutePath&&(document.querySelector(".finish_2").classList.add("timelineStyle"),document.querySelector(".finish_3").classList.add("timelineStyle"),document.querySelector(".finish_4").classList.add("timelineStyle"))}},mounted:function(){this.timelineRoutePath=this.$route.path}},l=(n("4f6c"),n("d959")),s=n.n(l);const f=s()(a,[["render",u],["__scopeId","data-v-77ec1897"]]);e["a"]=f}}]);
//# sourceMappingURL=chunk-6dfcd0e7.8c38f8f8.js.map