(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[216],{9655:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses-707f4c1e-389f-4909-8922-70dfc550081b-lessons-69ad1b6b-82e2-408a-b6bc-fd896485e8d9-lesson-6",function(){return n(8862)}])},3535:function(e,r,n){"use strict";n.d(r,{$:function(){return l}});var t=n(5893),l=function(){return(0,t.jsx)("div",{className:"footer",children:(0,t.jsxs)("div",{className:"contain",children:[(0,t.jsx)("div",{className:"col social",children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{className:"logo",style:{color:"White"},children:(0,t.jsx)("a",{href:"#",children:"\xa0UCOCAMP"})})})}),(0,t.jsxs)("div",{className:"col",children:[(0,t.jsx)("h1",{children:"Acerca de"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Nosotros"}),(0,t.jsx)("li",{children:"UCO"})]})]}),(0,t.jsxs)("div",{className:"col",children:[(0,t.jsx)("h1",{children:"Recursos"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Foros"}),(0,t.jsx)("li",{children:"Blog"})]})]}),(0,t.jsxs)("div",{className:"col",children:[(0,t.jsx)("h1",{children:"\xa0Legal"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"\xa0\xa0Terminos de uso"}),(0,t.jsx)("li",{children:"\xa0\xa0Seguridad"})]})]}),(0,t.jsxs)("div",{className:"col",children:[(0,t.jsx)("h1",{children:"Cuenta"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Mi cuenta"}),(0,t.jsx)("li",{children:"Colecciones"})]})]}),(0,t.jsxs)("div",{className:"col",children:[(0,t.jsx)("h1",{children:"Otros"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Recursos"}),(0,t.jsx)("li",{children:"Creadores"})]})]}),(0,t.jsx)("div",{className:"clearfix"})]})})}},6954:function(e,r,n){"use strict";n.d(r,{w:function(){return l}});var t=n(5893),l=function(){return(0,t.jsx)("nav",{children:(0,t.jsxs)("ul",{className:"menu",children:[(0,t.jsx)("li",{className:"logo",children:(0,t.jsx)("a",{href:"#",children:"\xa0UCOCAMP"})}),(0,t.jsx)("li",{className:"item",children:(0,t.jsxs)("a",{href:"#",children:[(0,t.jsx)("img",{src:"/calendar.png",alt:"Logo"}),"\xa0\xa0\xa0"]})}),(0,t.jsx)("li",{className:"item",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("img",{src:"/message.png",alt:"Logo"}),"\xa0\xa0\xa0"]})}),(0,t.jsx)("li",{className:"item",children:(0,t.jsx)("a",{href:"#",children:"Marcos Rivera Gavil\xe1n\xa0\xa0"})}),(0,t.jsx)("li",{className:"item",children:(0,t.jsxs)("a",{href:"#",children:[(0,t.jsx)("img",{src:"/profile.png",alt:"Logo"}),"\xa0\xa0"]})})]})})}},8418:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function l(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,l,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);i=!0);}catch(c){s=!0,l=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw l}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},s=n(6273),c=n(387),a=n(7190);var u={};function f(e,r,n,t){if(e&&s.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var l=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[r+"%"+n+(l?"%"+l:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,t=c.useRouter(),o=i.default.useMemo((function(){var r=l(s.resolveHref(t,e.href,!0),2),n=r[0],o=r[1];return{href:n,as:e.as?s.resolveHref(t,e.as):o||n}}),[t,e.href,e.as]),d=o.href,h=o.as,p=e.children,m=e.replace,v=e.shallow,j=e.scroll,x=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var y=(r=i.default.Children.only(p))&&"object"===typeof r&&r.ref,g=l(a.useIntersection({rootMargin:"200px"}),2),b=g[0],C=g[1],N=i.default.useCallback((function(e){b(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,b]);i.default.useEffect((function(){var e=C&&n&&s.isLocalURL(d),r="undefined"!==typeof x?x:t&&t.locale,l=u[d+"%"+h+(r?"%"+r:"")];e&&!l&&f(t,d,h,{locale:r})}),[h,d,C,x,n,t]);var w={ref:N,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,l,o,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),r[l?"replace":"push"](n,t,{shallow:o,locale:c,scroll:i}))}(e,t,d,h,m,v,j,x)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),s.isLocalURL(d)&&f(t,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof x?x:t&&t.locale,M=t&&t.isLocaleDomain&&s.getDomainLocale(h,E,t&&t.locales,t&&t.domainLocales);w.href=M||s.addBasePath(s.addLocale(h,E,t&&t.defaultLocale))}return i.default.cloneElement(r,w)};r.default=d},7190:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function l(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,l,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);i=!0);}catch(c){s=!0,l=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw l}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,t=e.disabled||!s,u=o.useRef(),f=l(o.useState(!1),2),d=f[0],h=f[1],p=l(o.useState(r?r.current:null),2),m=p[0],v=p[1],j=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||d||e&&e.tagName&&(u.current=function(e,r,n){var t=function(e){var r,n={root:e.root||null,margin:e.rootMargin||""},t=a.find((function(e){return e.root===n.root&&e.margin===n.margin}));t?r=c.get(t):(r=c.get(n),a.push(n));if(r)return r;var l=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return c.set(n,r={id:n,observer:o,elements:l}),r}(n),l=t.id,o=t.observer,i=t.elements;return i.set(e,r),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),c.delete(l);var r=a.findIndex((function(e){return e.root===l.root&&e.margin===l.margin}));r>-1&&a.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:n}))}),[t,m,n,d]);return o.useEffect((function(){if(!s&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){r&&v(r.current)}),[r]),[j,d]};var o=n(7294),i=n(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map,a=[]},8862:function(e,r,n){"use strict";n.r(r);var t=n(5893),l=n(9008),o=n(1664),i=n(6954),s=n(3535),c=n(2004),a=n(1163);r.default=function(){(0,a.useRouter)().query.course;return(0,t.jsxs)("div",{children:[(0,t.jsxs)(l.default,{children:[(0,t.jsx)("title",{children:"UCOCamp"}),(0,t.jsx)("meta",{name:"description",content:"UCOCamp landing page"}),(0,t.jsx)("link",{rel:"icon",href:"/logo.png"})]}),(0,t.jsx)(i.w,{}),(0,t.jsx)("main",{children:(0,t.jsxs)("div",{className:"hero",children:[(0,t.jsx)("h1",{children:"Conclusiones"}),(0,t.jsx)("br",{}),(0,t.jsx)(c.Z,{url:"https://ucocamp-courses.aulasoftwarelibre.uco.es/files/courses/tdd:testdrivendevelopment/4c2c1e73-5491-4398-b1dd-30253b311f75/lecci%C3%B3n1/lecci%C3%B3n1.mp4",controls:!0}),(0,t.jsx)("br",{}),(0,t.jsx)("button",{className:"loginButton",children:(0,t.jsx)(o.default,{href:"/homepage",children:"\xa0\xa0\xa0Volver al inicio\xa0\xa0\xa0"})})]})}),(0,t.jsx)(s.$,{})]})}},1664:function(e,r,n){e.exports=n(8418)}},function(e){e.O(0,[243,774,888,179],(function(){return r=9655,e(e.s=r);var r}));var r=e.O();_N_E=r}]);