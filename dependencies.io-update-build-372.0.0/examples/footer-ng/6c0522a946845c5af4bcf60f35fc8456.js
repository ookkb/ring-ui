!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1090)}({10:function(n,e){function t(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function r(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=t(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},1090:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(51),o=t.n(r),i=t(999),a=t(507);t.n(a),o.a.module("TestApp",[i.a])},11:function(n,e,t){n.exports=t(2)(247)},12:function(n,e,t){n.exports=t(2)(374)},1273:function(n,e){n.exports='<div ng-class=":: $ctrl.styles.footer" data-test=ring-footer> <div ng-class=":: $ctrl.styles.columnLeft"> <div ng-transclude=left ng-class=":: $ctrl.styles.columnItem"></div> </div> <div ng-class=":: $ctrl.styles.columnCenter"> <div ng-transclude=center ng-class=":: $ctrl.styles.columnItem"></div> </div> <div ng-class=":: $ctrl.styles.columnRight"> <div ng-transclude=right ng-class=":: $ctrl.styles.columnItem"></div> </div> </div> '},13:function(n,e,t){n.exports=t(2)(362)},14:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},15:function(n,e,t){function r(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],l=i[1],c=i[2],s=i[3],u={css:l,media:c,sourceMap:s};r[a]?r[a].parts.push(u):t.push(r[a]={id:a,parts:[u]})}return t}function i(n,e){var t=y(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=w[w.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),w.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=y(n.insertAt.before,t);t.insertBefore(e,o)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=w.indexOf(n);e>=0&&w.splice(e,1)}function l(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=u();t&&(n.attrs.nonce=t)}return s(e,n.attrs),i(n,e),e}function c(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",s(e,n.attrs),i(n,e),e}function s(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function u(){return t.nc}function f(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var s=x++;t=v||(v=l(e)),r=p.bind(null,t,s,!1),o=p.bind(null,t,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=c(e),r=b.bind(null,t,e),o=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=l(e),r=d.bind(null,t),o=function(){a(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}function p(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=O(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function b(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=_(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=n.href;n.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}var h={},g=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n,e){return e?e.querySelector(n):document.querySelector(n)},y=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=m.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),v=null,x=0,w=[],_=t(64);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=g()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=o(n,e);return r(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var l=t[a],c=h[l.id];c.refs--,i.push(c)}n&&r(o(n,e),e);for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete h[c.id]}}}};var O=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},19:function(n,e,t){n.exports=t(2)(331)},192:function(n,e,t){e=n.exports=t(10)(!1),e.i(t(14),""),e.push([n.i,".link_46b {\n  cursor: pointer;\n  transition: color 0.15s ease-out;\n  transition: color var(--ring-fast-ease);\n  color: #0f5b99;\n  color: var(--ring-link-color);\n}\n\n.link_46b,\n  .link_46b:hover {\n  text-decoration: none;\n}\n\n.link_46b:hover,\n  .link_46b.hover_723 {\n  transition: none;\n  color: #ff008c;\n  color: var(--ring-link-hover-color);\n}\n\n.link_46b:hover .inner_e7d {\n  border-width: 0;\n  border-bottom: 2px solid;\n  border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n  border-image-slice: 0 0 100% 0;\n}\n\n.link_46b.active_8b4 {\n  color: inherit;\n}\n\n.link_46b.compatibilityUnderlineMode_a72:hover {\n  text-decoration: underline;\n  /* stylelint-disable-next-line selector-max-specificity */\n}\n\n.link_46b.compatibilityUnderlineMode_a72:hover .inner_e7d {\n  border: none;\n}\n\n.link_46b.pseudo_b5d:hover {\n  text-decoration: none;\n  /* stylelint-disable-next-line selector-max-specificity */\n}\n\n.link_46b.pseudo_b5d:hover .inner_e7d {\n  border: none;\n}\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  .link_46b:hover .inner_e7d {\n    border-bottom-width: 1px;\n  }\n}\n\n.inherit_bc0:not(:hover) {\n  color: inherit;\n}\n\n.pseudo_b5d {\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit\n}\n\n.pseudo_b5d::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n",""]),e.locals={link:"link_46b",hover:"hover_723",inner:"inner_e7d",active:"active_8b4",compatibilityUnderlineMode:"compatibilityUnderlineMode_a72",pseudo:"pseudo_b5d",inherit:"inherit_bc0"}},193:function(n,e,t){n.exports=t(2)(332)},195:function(n,e,t){"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(){return o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o.apply(this,arguments)}function i(n,e){if(null==n)return{};var t,r,o=a(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function a(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}function l(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function c(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function s(n,e,t){return e&&c(n.prototype,e),t&&c(n,t),n}function u(n,e){return!e||"object"!==r(e)&&"function"!=typeof e?f(n):e}function f(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&b(n,e)}function b(n,e){return(b=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function h(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function g(n){L=n}function m(n){var e,r,a="string"!=typeof n&&n!==z.a;return r=e=function(e){function r(){return l(this,r),u(this,p(r).apply(this,arguments))}return d(r,e),s(r,[{key:"getChildren",value:function(){var n=this.props,e=n.children,t=n.innerClassName,r=M(t);return"function"==typeof e?e(r):C.a.createElement(r,null,e)}},{key:"render",value:function(){var e,r=this.props,l=r.active,c=r.inherit,s=r.pseudo,u=r.hover,f=r.className,p=r["data-test"],d=r.href,b=(r.innerClassName,r.children,i(r,["active","inherit","pseudo","hover","className","data-test","href","innerClassName","children"])),g=s||!a&&!d,m=N()(R.a.link,f,(e={},h(e,R.a.active,l),h(e,R.a.inherit,c),h(e,R.a.hover,u),h(e,R.a.compatibilityUnderlineMode,L),h(e,R.a.pseudo,g),e));return a&&!b.activeClassName&&(b.activeClassName=R.a.active),g?C.a.createElement("button",o({type:"button"},b,{className:m,"data-test":t.i(T.a)("ring-link",p)}),this.getChildren()):C.a.createElement(n,o({},b,{href:d,className:m,"data-test":t.i(T.a)("ring-link",p)}),this.getChildren())}}]),r}(j.Component),h(e,"propTypes",{className:E.a.string,innerClassName:E.a.string,active:E.a.bool,inherit:E.a.bool,pseudo:E.a.bool,hover:E.a.bool,children:E.a.oneOfType([E.a.node,E.a.func]),"data-test":E.a.string,href:E.a.string}),r}e.c=g,e.b=m;var y=t(5),v=(t.n(y),t(4)),x=(t.n(v),t(13)),w=(t.n(x),t(6)),_=(t.n(w),t(9)),O=(t.n(_),t(12)),k=(t.n(O),t(197)),j=(t.n(k),t(3)),C=t.n(j),S=t(7),E=t.n(S),P=t(11),N=t.n(P),U=t(35),T=t(21),z=t(75),A=t(231),R=t.n(A),L=!1,M=t.i(U.a)(function(n){var e=function(e){var t=e.className,r=e.children,o=N()(R.a.inner,t,n);return C.a.createElement("span",{className:o},r)};return e.propTypes={className:E.a.string,children:E.a.node},e});e.a=m(z.a)},197:function(n,e,t){n.exports=t(2)(415)},198:function(n,e,t){n.exports=t(2)(436)},2:function(n,e){n.exports=vendor_lib},21:function(n,e,t){"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n){return l(n)||a(n)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function l(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}function c(n,e){return f(n)||u(n,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var a,l=n[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return t}function f(n){if(Array.isArray(n))return n}function p(n){return Object.entries(n).reduce(function(n,e){var t=c(e,2),r=t[0];return t[1]?o(n).concat([r]):n},[])}function d(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.filter(function(n){return!!n}).reduce(function(n,e){return"object"===r(e)?o(n).concat(o(p(e))):o(n).concat([e])},[]).join(" ")}e.a=d;var b=t(24),h=(t.n(b),t(63)),g=(t.n(h),t(22)),m=(t.n(g),t(5)),y=(t.n(m),t(4)),v=(t.n(y),t(6)),x=(t.n(v),t(9)),w=(t.n(x),t(38));t.n(w)},22:function(n,e,t){n.exports=t(2)(400)},231:function(n,e,t){var r=t(192);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,t(15)(r,o),r.locals&&(n.exports=r.locals)},24:function(n,e,t){n.exports=t(2)(414)},3:function(n,e,t){n.exports=t(2)(57)},349:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",function(){return c});var l=t(6),c=(t.n(l),function(){function n(){for(var e=this,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];r(this,n),a(this,"$inject",{}),this.constructor.$inject.forEach(function(n,t){e.$inject[n]=o[t]})}return i(n,null,[{key:"controller",get:function(){return this}}]),n}());a(c,"$inject",[])},35:function(n,e,t){"use strict";function r(n){var e=new Map,t=new WeakMap;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"__singleValue__",o=r instanceof Object?t:e;if(o.has(r))return o.get(r);var i=n(r);return o.set(r,i),i}}e.a=r;var o=t(198),i=(t.n(o),t(6)),a=(t.n(i),t(9)),l=(t.n(a),t(24)),c=(t.n(l),t(193));t.n(c)},36:function(n,e,t){n.exports=t(2)(249)},38:function(n,e,t){n.exports=t(2)(439)},4:function(n,e,t){n.exports=t(2)(424)},5:function(n,e,t){n.exports=t(2)(445)},507:function(n,e,t){var r=t(599);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,t(15)(r,o),r.locals&&(n.exports=r.locals)},51:function(n,e,t){n.exports=t(2)(246)},599:function(n,e,t){e=n.exports=t(10)(!1),e.i(t(14),""),e.push([n.i,'/**\n  These styles are deprecated and kept for backward compatibility with direct class usages\n  like `<a class="ring-link">link</a>\n */\n\n.ring-link {\n  cursor: pointer;\n  transition: color 0.15s ease-out;\n  transition: color var(--ring-fast-ease);\n  text-decoration: none;\n  color: #0f5b99;\n  color: var(--ring-link-color);\n}\n\n.ring-link:hover {\n  transition: none;\n  text-decoration: underline;\n  color: #ff008c;\n  color: var(--ring-link-hover-color);\n}\n\n.ring-link_inherit:not(:hover) {\n  color: inherit;\n}\n',""])},6:function(n,e,t){n.exports=t(2)(446)},63:function(n,e,t){n.exports=t(2)(311)},64:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},7:function(n,e,t){n.exports=t(2)(84)},75:function(n,e,t){"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(){return o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o.apply(this,arguments)}function i(n,e){if(null==n)return{};var t,r,o=a(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function a(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}function l(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function c(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function s(n,e,t){return e&&c(n.prototype,e),t&&c(n,t),n}function u(n,e){return!e||"object"!==r(e)&&"function"!=typeof e?b(n):e}function f(n){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function p(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&d(n,e)}function d(n,e){return(d=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function b(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function h(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",function(){return S});var g=t(5),m=(t.n(g),t(4)),y=(t.n(m),t(13)),v=(t.n(y),t(6)),x=(t.n(v),t(9)),w=(t.n(x),t(12)),_=(t.n(w),t(3)),O=t.n(_),k=t(7),j=t.n(k),C=function(n){return!(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey)},S=function(n){function e(){var n,t;l(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=u(this,(n=f(e)).call.apply(n,[this].concat(o))),h(b(b(t)),"onClick",function(n){var e=t.props,r=e.onClick,o=e.onConditionalClick,i=e.onPlainLeftClick,a=C(n);r&&r(n),o&&o(a,n),i&&a&&(n.preventDefault(),i(n))}),t}return p(e,n),s(e,[{key:"render",value:function(){var n=this.props,e=(n.onConditionalClick,n.onPlainLeftClick,n.activeClassName,i(n,["onConditionalClick","onPlainLeftClick","activeClassName"]));return O.a.createElement("a",o({},e,{onClick:this.onClick}))}}]),e}(_.PureComponent);h(S,"propTypes",{onClick:j.a.func,onPlainLeftClick:j.a.func,onConditionalClick:j.a.func,activeClassName:j.a.string})},8:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},9:function(n,e,t){n.exports=t(2)(83)},948:function(n,e,t){var r=t(968);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,t(15)(r,o),r.locals&&(n.exports=r.locals)},954:function(n,e,t){"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),n}function l(n,e){return!e||"object"!==r(e)&&"function"!=typeof e?c(n):e}function c(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&f(n,e)}function f(n,e){return(f=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function d(n){var e=(new Date).getUTCFullYear(),t="Copyright © ";return t+=n>=e?n:n+"–"+e}e.a=d,t.d(e,"b",function(){return E});var b=t(5),h=(t.n(b),t(4)),g=(t.n(h),t(36)),m=(t.n(g),t(3)),y=t.n(m),v=t(7),x=t.n(v),w=t(11),_=t.n(w),O=t(195),k=t(948),j=t.n(k),C=function(n){function e(){return o(this,e),l(this,s(e).apply(this,arguments))}return u(e,n),a(e,[{key:"render",value:function(){var n,e=this.props,t=e.position,r=e.children,o=_()((n={},p(n,j.a.columnLeft,"left"===t),p(n,j.a.columnCenter,"center"===t),p(n,j.a.columnRight,"right"===t),n));return y.a.createElement("div",{className:o},y.a.createElement("ul",{className:j.a.columnItem},r))}}]),e}(m.PureComponent);p(C,"propTypes",{position:x.a.string,children:x.a.node});var S=function(n){function e(){return o(this,e),l(this,s(e).apply(this,arguments))}return u(e,n),a(e,[{key:"render",value:function(){function n(n){if(t.i(m.isValidElement)(n))return n;var e=(n.copyright?d(n.copyright):"")+(n.label||n);return n.url?y.a.createElement(O.a,{href:n.url,target:n.target,key:n.url+n.title,title:n.title},e):e}var e=Array.isArray(this.props.item)?this.props.item:[this.props.item];return y.a.createElement("li",{className:j.a.line},e.map(n))}}]),e}(m.PureComponent);p(S,"propTypes",{item:x.a.oneOfType([x.a.object,x.a.array,x.a.string])});var E=function(n){function e(){return o(this,e),l(this,s(e).apply(this,arguments))}return u(e,n),a(e,[{key:"render",value:function(){function n(n,e){return!!n&&y.a.createElement(C,{key:e,position:e},n.map(function(n,e){return y.a.createElement(S,{key:e,item:n})}))}var e=this.props.floating,t=_()(j.a.footer,this.props.className,p({},j.a.footerFloating,e));return y.a.createElement("div",{className:t,"data-test":"ring-footer"},[n(this.props.left,"left"),n(this.props.center,"center"),n(this.props.right,"right")])}}]),e}(m.PureComponent);p(E,"propTypes",{className:x.a.string,floating:x.a.bool,left:x.a.array,center:x.a.array,right:x.a.array})},968:function(n,e,t){e=n.exports=t(10)(!1),e.i(t(14),""),e.i(t(8),void 0),e.push([n.i,".footer_3ef {\n\n  position: relative;\n\n  box-sizing: border-box;\n  height: 64px;\n  margin: 40px 32px 0 32px;\n  padding-top: 16px;\n\n  text-align: center;\n\n  border-top: 1px solid #dfe5eb;\n\n  border-top: 1px solid var(--ring-line-color);\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.footerFloating_0c3 {\n\n  position: absolute;\n  z-index: 1;\n  z-index: var(--ring-fixed-z-index);\n  bottom: 0;\n\n  width: 100%;\n  margin-right: 0;\n  margin-bottom: 8px;\n  margin-left: 0;\n}\n\n.column_fb5 {\n  position: absolute;\n\n  width: 33%;\n}\n\n.columnItem_6d2 {\n  display: inline-block;\n\n  margin: 0;\n  padding: 0;\n\n  vertical-align: top;\n}\n\n.columnLeft_1ba {\n\n  text-align: left;\n}\n\n.columnCenter_567 {\n\n  left: 33.6%;\n}\n\n.columnCenter_567 .line_cd2 {\n  text-align: left;\n}\n\n.columnRight_f89 {\n\n  top: 16px;\n  right: 0;\n\n  text-align: right;\n}\n\n.line_cd2 {\n  padding: 0;\n\n  list-style: none;\n\n  line-height: 16px;\n}\n\n.lineCenter_cc3 {\n  text-align: left;\n}\n",""]),e.locals={unit:""+t(8).locals.unit,"footer-height":""+t(8).locals["footer-height"],footer:"footer_3ef "+t(8).locals.font,footerFloating:"footerFloating_0c3 footer_3ef "+t(8).locals.font,column:"column_fb5",columnItem:"columnItem_6d2",columnLeft:"columnLeft_1ba column_fb5",columnCenter:"columnCenter_567 column_fb5",line:"line_cd2",columnRight:"columnRight_f89 column_fb5",lineCenter:"lineCenter_cc3"}},999:function(n,e,t){"use strict";function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function l(n,e){return!e||"object"!==i(e)&&"function"!=typeof e?f(n):e}function c(n){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function s(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&u(n,e)}function u(n,e){return(u=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function f(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var d=t(19),b=(t.n(d),t(5)),h=(t.n(b),t(4)),g=(t.n(h),t(51)),m=t.n(g),y=t(349),v=t(948),x=t.n(v),w=t(954),_=m.a.module("Ring.footer",[]),O=function(n){function e(){var n,t;a(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=l(this,(n=c(e)).call.apply(n,[this].concat(o))),p(f(f(t)),"styles",x.a),t}return s(e,n),e}(y.a);p(O,"transclude",{left:"?rgFooterLeft",center:"?rgFooterCenter",right:"?rgFooterRight"}),p(O,"template",t(1273));var k=function(n){function e(){return a(this,e),l(this,c(e).apply(this,arguments))}return s(e,n),e}(y.a);p(k,"transclude",!0),p(k,"template",'<div class="'.concat(x.a.line,'" ng-transclude></div>'));var j=function(n){function e(){return a(this,e),l(this,c(e).apply(this,arguments))}return s(e,n),o(e,[{key:"$onInit",value:function(){this.copyrightYears=t.i(w.a)(this.year)}}]),e}(y.a);p(j,"template","<span>{{:: $ctrl.copyrightYears}} {{:: $ctrl.companyName}}</span>"),p(j,"bindings",{year:"@",companyName:"@"}),_.component("rgFooter",O),_.component("rgFooterLine",k),_.component("rgFooterCopyright",j),e.a=_.name}});