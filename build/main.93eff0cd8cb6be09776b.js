webpackJsonp([6,46],{100:function(e,t,n){var o=n(110);"string"==typeof o&&(o=[[e.i,o,""]]),n(103)(o,{}),o.locals&&(e.exports=o.locals)},101:function(e,t){e.exports={icons:[{src:"build/9588d25f5f5176f599dcd02f9617a64f.png",sizes:"32x32",type:"image/png",density:1},{src:"build/a259794cd45770878f27e0f86ebeb945.png",sizes:"96x96",type:"image/png",density:2},{src:"favicon-128x128.png",sizes:"128x128",type:"image/png",density:3},{src:"favicon-196x196.png",sizes:"196x196",type:"image/png",density:4}],name:"Evan Turner | Software Engineer",short_name:"Evan Turner",start_url:"index.html",display:"standalone",orientation:"portrait",theme_color:"#00d2ff",background_color:"#00d2ff"}},102:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},103:function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=p[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],t));p[o.id]={id:o.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],l=r[2],u=r[3],c={css:a,media:l,sourceMap:u};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function r(e,t){var n=h(),o=y[y.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function u(e,t){var n,o,r;if(t.singleton){var u=v++;n=m||(m=a(t)),o=c.bind(null,n,u,!1),r=c.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=s.bind(null,n),r=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),o=f.bind(null,n),r=function(){i(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function c(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function s(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var p={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,y=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],a=0;a<r.length;a++){var l=r[a],u=p[l.id];u.refs--,i.push(u)}if(e){var c=o(e);n(c,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete p[u.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},104:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),l=n(2),u=o(l),c=n(62),f=o(c),s=n(60),p=o(s),d=function(e){var t=e.pattern,n=e.component,o=r(e,["pattern","component"]);return u.default.createElement(f.default,i({pattern:t},o,{render:function(e){return a(p.default,{modules:{component:n}},void 0,function(t){var n=t.component;return u.default.createElement(n,i({},e,o))})}}))};t.default=d,e.exports=t.default},105:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.Curtain=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(2),l=o(a),u=n(114),c=o(u),f=t.Curtain=function(e){var t=e.show,n=void 0===t||t,o=e.onClick,a=e.className,u=r(e,["show","onClick","className"]);return n?l.default.createElement("div",i({},u,{onClick:o,className:c.default.root+" "+(a?a:"")})):null};t.default=f},106:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Hamburger=void 0;var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),i=n(2),a=(o(i),n(115)),l=o(a),u=t.Hamburger=function(e){var t=e.open,n=e.onClick;return e.className,r("div",{onClick:n,className:l.default.root+" "+(t?l.default.open:"")},void 0,r("hr",{className:l.default.bar}),r("hr",{className:l.default.bar}))};t.default=u},107:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),i=n(2),a=(o(i),n(61)),l=o(a),u=n(116),c=o(u),f=function(e){var t=e.routes,n=e.open,o=e.onClick;return r("nav",{className:c.default.root+" "+(n?c.default.open:"")},void 0,r("ul",{className:c.default.ul,role:"menu"},void 0,t.map(function(e){return r("li",{className:c.default.li,role:"menuitem"},e.to,r(l.default,{to:e.to,onClick:o,className:c.default.link},void 0,e.text))})))};t.default=f,e.exports=t.default},108:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),i=n(2),a=(o(i),n(37)),l=o(a),u=function(e){return r(l.default,{htmlAttributes:{lang:"en"},defaultTitle:"Evan Turner | Software Engineer",titleAttributes:{itemprop:"name",lang:"en"},title:"Software Engineer",titleTemplate:"Evan Turner | %s",meta:[{property:"og:description",content:"Software Engineer based in New York City developing apps for web, mobile, and emerging technologies"},{property:"og:title",content:"Evan Turner | Software Engineer"},{property:"og:site_name",content:"Evan Turner"},{property:"og:url",content:"https://evturn.com/#/"},{property:"og:image",content:n(39)},{property:"og:image:alt",content:"An elegant stencil in black and white of a guy with a beard and shades"},{property:"og:type",content:"website"},{property:"og:locale",content:"en_US"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:"Evan Turner | Software Engineer"},{name:"twitter:image",content:n(39)},{name:"twitter:image:src",content:n(39)},{name:"twitter:image:alt",content:"An elegant stencil in black and white of a guy with a beard and shades"},{name:"twitter:site",content:"@evturn"},{name:"twitter:url",content:"https://evturn.com/#/"},{name:"twitter:description",content:"Software Engineer based in New York City developing apps for web, mobile, and emerging technologies"},{name:"keywords",content:"evturn, evturn.com, evan turner, web apps, developer, software, javascript, mobile, technologies"},{name:"description",content:"Software Engineer based in New York City developing apps for web, mobile, and emerging technologies"},{name:"theme-color",content:"#00d2ff"}],link:[{rel:"canonical",href:"https://evturn.com/#/"},{rel:"apple-touch-icon",href:n(139)},{rel:"apple-touch-icon",sizes:"57x57",href:n(135)},{rel:"apple-touch-icon",sizes:"60x60",href:n(136)},{rel:"apple-touch-icon",sizes:"72x72",href:n(137)},{rel:"apple-touch-icon",sizes:"76x7",href:n(138)},{rel:"apple-touch-icon",sizes:"114x114",href:n(131)},{rel:"apple-touch-icon",sizes:"120x120",href:n(132)},{rel:"apple-touch-icon",sizes:"144x144",href:n(133)},{rel:"apple-touch-icon",sizes:"152x152",href:n(134)},{rel:"icon",sizes:"32x32",href:n(140)},{rel:"icon",sizes:"96x96",href:n(141)},{rel:"shortcut icon",type:"image/x-icon",href:n(142)}]})};t.default=u,e.exports=t.default},109:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(2),f=(o(c),n(107)),s=o(f),p=n(105),d=o(p),b=n(106),h=o(b),m=n(118),v=o(m),y=function(e){function t(){var e,n,o,a;r(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={open:!1},o.toggleMenu=function(e){o.setState({open:!o.state.open})},a=n,i(o,a)}return a(t,e),u(t,[{key:"render",value:function(){var e=this.state.open,t=this.props.routes;return l("div",{className:v.default.root},void 0,l("header",{className:v.default.header},void 0,l("div",{className:v.default.wrap},void 0,l(h.default,{open:e,onClick:this.toggleMenu}),l(s.default,{open:e,routes:t,onClick:this.toggleMenu}))),l(d.default,{show:e,onClick:this.toggleMenu}))}}]),t}(c.Component);y.defaultProps={routes:[{to:"/",text:"Start"},{to:"/web",text:"Web"},{to:"/mobile",text:"Mobile"},{to:"/software",text:"Software"},{to:"/contact",text:"Contact"}]},t.default=y,e.exports=t.default},110:function(e,t,n){t=e.exports=n(102)(),t.push([e.i,"/*! sanitize.css v4.1.0 | CC0 License | github.com/jonathantneal/sanitize.css */article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}*,:after,:before{background-repeat:no-repeat;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;font-family:sans-serif;line-height:1.5;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{height:0;overflow:visible}nav ol,nav ul{list-style:none}abbr[title]{border-bottom:1px dotted;text-decoration:none}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}progress{vertical-align:baseline}small,sub,sup{font-size:83.3333%}sub,sup{line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:hover{outline-width:0}table{border-collapse:collapse;border-spacing:0}button,input,select,textarea{background-color:transparent;border-style:none;color:inherit;font-size:1em;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-cancel-button,::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled]{cursor:default}[tabindex],a,area,button,input,label,select,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hidden][aria-hidden=false]{clip:rect(0,0,0,0);display:inherit;position:absolute}[hidden][aria-hidden=false]:focus{clip:auto}",""])},114:function(e,t){e.exports={root:"_3soI4Y83hlzRpyfwFbWQHY"}},115:function(e,t){e.exports={root:"_33l8Cu9g-QzuvNoQQl1tSt",bar:"_3jC0YlDJbpqLqPoJk7dqzn",open:"_2BbtjyU1lAQRmBPyU4hFZm"}},116:function(e,t){e.exports={root:"_3dje0LBIDrhhZQd-V6eszU",open:"_3xrJNTM63EoK9HGy1Tsws1",ul:"-pREEZfXVM09RL0BSjhXh",li:"_2R1w1KWmpHvjKULTDZ1-C",link:"_3mASRdSY61-SJn6r9x9xWe"}},117:function(e,t){e.exports={root:"_2zy9mwSOfa7qg0SnVJpRAZ"}},118:function(e,t){e.exports={root:"_3Cx6bSd0ilgH5aWN-8sQAw",header:"Mym9cTuy0YEaE0EOqPWl9",wrap:"_31Bgmibh4lUCUO_f1uYtfJ",hamburger:"_1QCpQy_jX6mZ-mxhjFALt6",line:"_1QP8YkAg3aces0_x29nwXW",line1:"_3xzZvaUUMMUaeNd_hhXARD _1QP8YkAg3aces0_x29nwXW",line3:"_27tPrQgIabKmuGObxGAYGJ _1QP8YkAg3aces0_x29nwXW",open:"oKtaq9XlhcIgTZUZnw9dJ"}},131:function(e,t,n){e.exports=n.p+"385a434660351a5785fbac1bdad8bcee.png"},132:function(e,t,n){e.exports=n.p+"63e5d9f47bb61823600b1e125c39e243.png"},133:function(e,t,n){e.exports=n.p+"f07d21418831787c0b1e6a868687a27c.png"},134:function(e,t,n){e.exports=n.p+"608548f1339140b4a269f990661e881e.png"},135:function(e,t,n){e.exports=n.p+"d19652e9c7b3efe6c1bacd1cf2e540df.png"},136:function(e,t,n){e.exports=n.p+"10b09f22ef6bda392be1a9919f37bfa5.png"},137:function(e,t,n){e.exports=n.p+"79d9c0e9c4969adc70a4075566e4f030.png"},138:function(e,t,n){e.exports=n.p+"1caf851adccc81faca6c014c7ee3c08d.png"},139:function(e,t,n){e.exports=n.p+"63e5d9f47bb61823600b1e125c39e243.png"},140:function(e,t,n){e.exports=n.p+"9588d25f5f5176f599dcd02f9617a64f.png"},141:function(e,t,n){e.exports=n.p+"a259794cd45770878f27e0f86ebeb945.png"},142:function(e,t,n){e.exports=n.p+"2bfe38b798cd331b13913469d2958695.ico"},244:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),i=n(2),a=(o(i),n(36)),l=n(98),u=o(l);n(101),n(100),n(97),(0,a.render)(r(u.default,{}),document.getElementById("app"))},39:function(e,t,n){e.exports=n.p+"9588d25f5f5176f599dcd02f9617a64f.png"},60:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.importDefault=t.LazyLoad=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(2),c=(o(u),t.LazyLoad=function(e){function t(){var e,n,o,a;r(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={loaded:!1},a=n,i(o,a)}return a(t,e),l(t,[{key:"componentWillMount",value:function(){this.load(this.props)}},{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillReceiveProps",value:function(e){return e.modules===this.props.modules?null:void this.load(e)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"load",value:function(e){var t=this;this.setState({loaded:!1});var n=e.modules,o=Object.keys(n);Promise.all(o.map(function(e){return n[e]()})).then(function(e){return o.reduce(function(t,n,o){return t[n]=e[o],t},{})}).then(function(e){return t.mounted?void t.setState({modules:e,loaded:!0}):null})}},{key:"render",value:function(){var e=this.state,t=e.modules,n=e.loaded,o=this.props.children;return n?u.Children.only(o(t)):null}}]),t}(u.Component));t.importDefault=function(e){return e.then(function(e){return e.default})},t.default=c},97:function(e,t,n){"use strict";!function(e,t,n,o,r,i,a){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,i=t.createElement(n),a=t.getElementsByTagName(n)[0],i.async=1,i.src=o,a.parentNode.insertBefore(i,a)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-58635966-1","auto"),ga("send","pageview")},98:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),i=n(2),a=(o(i),n(89)),l=o(a),u=n(104),c=o(u),f=n(60),s=n(108),p=o(s),d=n(109),b=o(d),h=n(117),m=o(h),v=r(p.default,{}),y=r(b.default,{}),g=t.App=function(e){return r(l.default,{},void 0,function(e){var t=e.router;return r("div",{className:m.default.root},void 0,v,y,r(c.default,{pattern:"/",exactly:!0,component:function(e){return(0,f.importDefault)(n.e(3).then(n.bind(null,247)))}}),r(c.default,{pattern:"/web",router:t,component:function(e){return(0,f.importDefault)(n.e(1).then(n.bind(null,250)))}}),r(c.default,{pattern:"/software",component:function(e){return(0,f.importDefault)(n.e(0).then(n.bind(null,249)))}}),r(c.default,{pattern:"/mobile",component:function(e){return(0,f.importDefault)(n.e(2).then(n.bind(null,248)))}}),r(c.default,{pattern:"/contact",component:function(e){return(0,f.importDefault)(n.e(4).then(n.bind(null,246)))}}))})};t.default=g}},[244]);