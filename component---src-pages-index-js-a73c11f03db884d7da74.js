(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=(r("E9XD"),r("7O5W")),l=r("17x9"),i=r.n(l);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=b(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var d=!1;try{d=!0}catch(x){}function O(e){return o.parse.icon?o.parse.icon(e):null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function h(e){var t=e.forwardedRef,r=p(e,["forwardedRef"]),n=r.icon,a=r.mask,l=r.symbol,i=r.className,c=r.title,u=r.titleId,b=O(n),y=v("classes",[].concat(m(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,o=e.inverse,l=e.border,i=e.listItem,c=e.flip,u=e.size,f=e.rotation,p=e.pull,m=(s(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),s(t,"fa-rotate-".concat(f),null!=f&&0!==f),s(t,"fa-pull-".concat(p),null!=p),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map((function(e){return m[e]?e:null})).filter((function(e){return e}))}(r)),m(i.split(" ")))),E=v("transform","string"==typeof r.transform?o.parse.transform(r.transform):r.transform),w=v("mask",O(a)),j=Object(o.icon)(b,f({},y,{},E,{},w,{symbol:l,title:c,titleId:u}));if(!j)return function(){var e;!d&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",b),null;var x=j.abstract,k={ref:t};return Object.keys(r).forEach((function(e){h.defaultProps.hasOwnProperty(e)||(k[e]=r[e])})),g(x[0],k)}h.displayName="FontAwesomeIcon",h.propTypes={border:i.a.bool,className:i.a.string,mask:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),fixedWidth:i.a.bool,inverse:i.a.bool,flip:i.a.oneOf(["horizontal","vertical","both"]),icon:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),listItem:i.a.bool,pull:i.a.oneOf(["right","left"]),pulse:i.a.bool,rotation:i.a.oneOf([0,90,180,270]),size:i.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i.a.bool,symbol:i.a.oneOfType([i.a.bool,i.a.string]),title:i.a.string,transform:i.a.oneOfType([i.a.string,i.a.object]),swapOpacity:i.a.bool},h.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,c=p(n,["style"]);return o.attrs.style=f({},o.attrs.style,{},i),t.apply(void 0,[r.tag,f({},o.attrs,{},c)].concat(m(a)))}.bind(null,a.a.createElement),E=r("wHSu"),w=function(){return a.a.createElement("header",{className:"pink-linear-gradient"},a.a.createElement("div",null,a.a.createElement(h,{icon:E.a})),a.a.createElement("h1",null,"Expandable Content"),a.a.createElement("div",null))},j=function(e){var t=e.data,r=Object(n.useState)(""),o=r[0],l=r[1],i=Object(n.useState)("0px"),c=i[0],s=i[1],u=Object(n.useState)("accordion-icon"),f=u[0],p=u[1];return a.a.createElement("div",{className:"accordion-section"},a.a.createElement("div",{className:"accordion-top"},a.a.createElement("div",null,a.a.createElement("img",{src:t.picture.thumbnail,alt:t.name.first+" "+t.name.last+" Profile Picture"})),a.a.createElement("div",null,a.a.createElement("h3",null,t.name.first," ",t.name.last),a.a.createElement("h4",null,t.location.city,", ",t.location.country)),a.a.createElement("div",{className:"accordion-icon "+o,onClick:function(){l(""===o?"active":""),s("active"===o?"0px":"80px"),p("active"===o?"accordion-icon":"accordion-icon rotate")}},a.a.createElement(h,{className:""+f,icon:E.b}))),a.a.createElement("div",{className:"accordion-bottom pink-linear-gradient",style:{maxHeight:""+c}},a.a.createElement("div",null,a.a.createElement("h5",null,"Phone"),a.a.createElement("p",null,t.phone)),a.a.createElement("div",null,a.a.createElement("h5",null,"Email"),a.a.createElement("p",null,t.email))))};r("oaNO"),t.default=function(e){var t=e.data;return a.a.createElement(n.Fragment,null,a.a.createElement(w,null),t.allRandomUser.nodes.map((function(e){return a.a.createElement(j,{data:e,key:e.id})})))}},oaNO:function(e,t,r){}}]);
//# sourceMappingURL=component---src-pages-index-js-a73c11f03db884d7da74.js.map