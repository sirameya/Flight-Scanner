(self.webpackChunkwebpack_react_setup=self.webpackChunkwebpack_react_setup||[]).push([[551],{6551:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var l=r(282),n=r(8623),a=r(6856),o=r(9525),i=r(2122),u=r(1253),f=r(7294),c=r(5697),d=r.n(c),s=r(6010),p=r(4670),b=r(2318),h=f.forwardRef((function(e,t){var r=e.children,l=e.classes,n=e.className,a=e.disableTypography,o=void 0!==a&&a,c=(0,u.Z)(e,["children","classes","className","disableTypography"]);return f.createElement("div",(0,i.Z)({className:(0,s.Z)(l.root,n),ref:t},c),o?r:f.createElement(b.Z,{component:"h2",variant:"h6"},r))}));const g=(0,p.Z)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(h);var y=r(6398),m=r(8048),O=r(7193),v=r(8595),E=r(8230),w=function(e){var t=e.modalStatus,r=e.toggleModal,i=(0,E.Z)();return f.createElement(n.Z,{open:t,onClose:r,"aria-labelledby":"form-dialog-title"},f.createElement(g,{id:"form-dialog-title"},"Login"),f.createElement(o.Z,null,f.createElement("a",{className:i.link,href:"".concat(O.v,"auth/google")},f.createElement(y.ZP,null))),f.createElement(a.Z,null,f.createElement(l.Z,{onClick:r,color:"primary"},"Cancel")))};w.propTypes={modalStatus:d().bool.isRequired,toggleModal:d().func.isRequired};const x=(0,m.$j)((function(e){return{modalStatus:e.modal.status}}),{toggleModal:v.$})(w)},8246:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=l?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(r,n,a):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}(r(7294)),a=(l=r(5697))&&l.__esModule?l:{default:l},o=r(4292),i=r(5004);function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var l=t[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(u,e);var t,r,l,a=(t=u,function(){var e,r=m(t);if(y()){var l=m(this).constructor;e=Reflect.construct(r,arguments,l)}else e=r.apply(this,arguments);return h(this,e)});function u(){var e;p(this,u);for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return v(g(e=a.call.apply(a,[this].concat(r))),"state",{hovered:!1}),v(g(e),"getStyle",(function(t){var r="dark"===e.props.type?i.darkStyle:i.lightStyle;return e.state.hovered?s({},r,{},i.hoverStyle,{},t):e.props.disabled?s({},r,{},i.disabledStyle,{},t):s({},r,{},t)})),v(g(e),"mouseOver",(function(){e.props.disabled||e.setState({hovered:!0})})),v(g(e),"mouseOut",(function(){e.props.disabled||e.setState({hovered:!1})})),v(g(e),"click",(function(t){e.props.disabled||e.props.onClick(t)})),e}return r=u,(l=[{key:"render",value:function(){var e=this.props,t=e.label,r=e.style,l=function(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["label","style"]);return n.default.createElement("div",c({},l,{role:"button",onClick:this.click,style:this.getStyle(r),onMouseOver:this.mouseOver,onMouseOut:this.mouseOut}),n.default.createElement(o.GoogleIcon,this.props),n.default.createElement("span",null,t))}}])&&b(r.prototype,l),u}(n.PureComponent);t.default=E,v(E,"propTypes",{label:a.default.string,disabled:a.default.bool,tabIndex:a.default.number,onClick:a.default.func,type:a.default.oneOf(["light","dark"]),style:a.default.object}),v(E,"defaultProps",{label:"Sign in with Google",disabled:!1,type:"dark",tabIndex:0,onClick:function(){}})},4292:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleIcon=void 0;var l=o(r(7294)),n=o(r(5697)),a=r(5004);function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=l.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:a.svgStyle},l.default.createElement("defs",null,l.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},l.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),l.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),l.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),l.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),l.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),l.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),l.default.createElement("feMerge",null,l.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),l.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),l.default.createElement("feMergeNode",{in:"SourceGraphic"}))),l.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"}),l.default.createElement("rect",{id:"path-3",x:"5",y:"5",width:"38",height:"38",rx:"1"})),l.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -219.000000)"}),l.default.createElement("g",{id:"btn_google_dark_normal",transform:"translate(-1.000000, -1.000000)"},l.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},l.default.createElement("g",{id:"button-bg"},l.default.createElement("use",{fill:"#4285F4",fillRule:"evenodd"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}))),l.default.createElement("g",{id:"button-bg-copy"},l.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"})),l.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},l.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),l.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),l.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),l.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),l.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),l.default.createElement("g",{id:"handles_square"})))),d=l.default.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"46px",height:"46px",viewBox:"0 0 46 46",style:a.svgStyle},l.default.createElement("defs",null,l.default.createElement("filter",{x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox",id:"filter-1"},l.default.createElement("feOffset",{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),l.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),l.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",in:"shadowBlurOuter1",type:"matrix",result:"shadowMatrixOuter1"}),l.default.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter2"}),l.default.createElement("feGaussianBlur",{stdDeviation:"0.5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),l.default.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",in:"shadowBlurOuter2",type:"matrix",result:"shadowMatrixOuter2"}),l.default.createElement("feMerge",null,l.default.createElement("feMergeNode",{in:"shadowMatrixOuter1"}),l.default.createElement("feMergeNode",{in:"shadowMatrixOuter2"}),l.default.createElement("feMergeNode",{in:"SourceGraphic"}))),l.default.createElement("rect",{id:"path-2",x:"0",y:"0",width:"40",height:"40",rx:"2"})),l.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l.default.createElement("g",{id:"9-PATCH",transform:"translate(-608.000000, -160.000000)"}),l.default.createElement("g",{id:"btn_google_light_normal",transform:"translate(-1.000000, -1.000000)"},l.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)",filter:"url(#filter-1)"},l.default.createElement("g",{id:"button-bg"},l.default.createElement("use",{fill:"#FFFFFF",fillRule:"evenodd"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}))),l.default.createElement("g",{id:"logo_googleg_48dp",transform:"translate(15.000000, 15.000000)"},l.default.createElement("path",{d:"M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",id:"Shape",fill:"#4285F4"}),l.default.createElement("path",{d:"M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",id:"Shape",fill:"#34A853"}),l.default.createElement("path",{d:"M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",id:"Shape",fill:"#FBBC05"}),l.default.createElement("path",{d:"M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",id:"Shape",fill:"#EA4335"}),l.default.createElement("path",{d:"M0,0 L18,0 L18,18 L0,18 L0,0 Z",id:"Shape"})),l.default.createElement("g",{id:"handles_square"})))),s=l.default.createElement("svg",{width:"46px",height:"46px",viewBox:"0 0 46 46",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:a.svgStyle},l.default.createElement("defs",null,l.default.createElement("rect",{id:"path-1",x:"0",y:"0",width:"40",height:"40",rx:"2"})),l.default.createElement("g",{id:"Google-Button",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l.default.createElement("g",{id:"9-PATCH",transform:"translate(-788.000000, -219.000000)"}),l.default.createElement("g",{id:"btn_google_dark_disabled",transform:"translate(-1.000000, -1.000000)"},l.default.createElement("g",{id:"button",transform:"translate(4.000000, 4.000000)"},l.default.createElement("g",{id:"button-bg"},l.default.createElement("use",{fillOpacity:"0.08",fill:"#000000",fillRule:"evenodd"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}),l.default.createElement("use",{fill:"none"}))),l.default.createElement("path",{d:"M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z",id:"Shape-Copy",fillOpacity:"0.4",fill:"#000000"}),l.default.createElement("g",{id:"handles_square"})))),p=function(e){var t=e.disabled,r=e.type;return l.default.createElement("div",{style:t?u({},a.iconStyle,{},a.disabledIconStyle):a.iconStyle},t?s:"dark"===r?c:d)};t.GoogleIcon=p,p.propTypes={disabled:n.default.bool,type:n.default.oneOf(["light","dark"])},p.defaultProps={type:"dark"}},6398:(e,t,r)=>{"use strict";Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return n.default}});var l,n=(l=r(8246))&&l.__esModule?l:{default:l}},5004:(e,t)=>{"use strict";function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function l(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.disabledIconStyle=t.disabledStyle=t.hoverStyle=t.svgStyle=t.iconStyle=t.lightStyle=t.darkStyle=void 0;var a={height:"50px",width:"240px",border:"none",textAlign:"center",verticalAlign:"center",boxShadow:"0 2px 4px 0 rgba(0,0,0,.25)",fontSize:"16px",lineHeight:"48px",display:"block",borderRadius:"1px",transition:"background-color .218s, border-color .218s, box-shadow .218s",fontFamily:"Roboto,arial,sans-serif",cursor:"pointer",userSelect:"none"},o=l({backgroundColor:"#4285f4",color:"#fff"},a);t.darkStyle=o;var i=l({backgroundColor:"#fff",color:"rgba(0,0,0,.54)"},a);t.lightStyle=i,t.iconStyle={width:"48px",height:"48px",textAlign:"center",verticalAlign:"center",display:"block",marginTop:"1px",marginLeft:"1px",float:"left",backgroundColor:"#fff",borderRadius:"1px",whiteSpace:"nowrap"},t.svgStyle={width:"48px",height:"48px",display:"block"},t.hoverStyle={boxShadow:"0 0 3px 3px rgba(66,133,244,.3)",transition:"background-color .218s, border-color .218s, box-shadow .218s"},t.disabledStyle={backgroundColor:"rgba(37, 5, 5, .08)",color:"rgba(0, 0, 0, .40)",cursor:"not-allowed"},t.disabledIconStyle={backgroundColor:"transparent"}}}]);