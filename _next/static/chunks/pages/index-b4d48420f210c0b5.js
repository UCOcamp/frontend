(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},8045:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,c=void 0!==r&&r,l=e.priority,p=void 0!==l&&l,v=e.loading,A=e.lazyRoot,S=void 0===A?null:A,O=e.lazyBoundary,z=void 0===O?"200px":O,k=e.className,E=e.quality,N=e.width,I=e.height,P=e.objectFit,R=e.objectPosition,C=e.onLoadingComplete,L=e.loader,q=void 0===L?_:L,M=e.placeholder,D=void 0===M?"empty":M,H=e.blurDataURL,W=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),U=s.useRef(null),T=s.useContext(m.ImageConfigContext),B=s.useMemo((function(){var e=g||T||d.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return h({},e,{allSizes:t,deviceSizes:n})}),[T]),F=W,G=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(G=F.layout),delete F.layout);var V="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=w(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(H=H||Q.blurDataURL,V=Q.src,(!G||"fill"!==G)&&(I=I||Q.height,N=N||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}t="string"===typeof t?t:V;var J=j(N),X=j(I),$=j(E),K=!p&&("lazy"===v||"undefined"===typeof v);(t.startsWith("data:")||t.startsWith("blob:"))&&(c=!0,K=!1);y.has(t)&&(K=!1);0;var Y,Z=o(f.useIntersection({rootRef:S,rootMargin:z,disabled:!K}),2),ee=Z[0],te=Z[1],ne=!K||te,re={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ie={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},oe=!1,ae={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:R},ce="blur"===D?{filter:"blur(20px)",backgroundSize:P||"cover",backgroundImage:'url("'.concat(H,'")'),backgroundPosition:R||"0% 0%"}:{};if("fill"===G)re.display="block",re.position="absolute",re.top=0,re.left=0,re.bottom=0,re.right=0;else if("undefined"!==typeof J&&"undefined"!==typeof X){var le=X/J,se=isNaN(le)?"100%":"".concat(100*le,"%");"responsive"===G?(re.display="block",re.position="relative",oe=!0,ie.paddingTop=se):"intrinsic"===G?(re.display="inline-block",re.position="relative",re.maxWidth="100%",oe=!0,ie.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(J,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===G&&(re.display="inline-block",re.position="relative",re.width=J,re.height=X)}else 0;var ue={src:b,srcSet:void 0,sizes:void 0};ne&&(ue=x({config:B,src:t,unoptimized:c,layout:G,width:J,quality:$,sizes:n,loader:q}));var de=t;0;var fe;0;var me=(i(fe={},"imagesrcset",ue.srcSet),i(fe,"imagesizes",ue.sizes),fe),pe=s.default.useLayoutEffect,he=s.useRef(C);return s.useEffect((function(){he.current=C}),[C]),pe((function(){ee(U.current)}),[ee]),s.useEffect((function(){!function(e,t,n,r,i){var o=function(){var n=e.current;n&&(n.src!==b&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(y.add(t),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),i.current)){var o=n.naturalWidth,a=n.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(U,de,0,D,he)}),[de,G,D,ne]),s.default.createElement("span",{style:re},oe?s.default.createElement("span",{style:ie},Y?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,s.default.createElement("img",Object.assign({},F,ue,{decoding:"async","data-nimg":G,className:k,ref:U,style:h({},ae,ce)})),K&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},F,x({config:B,src:t,unoptimized:c,layout:G,width:J,quality:$,sizes:n,loader:q}),{decoding:"async","data-nimg":G,style:ae,className:k,loading:v||"lazy"}))),p?s.default.createElement(u.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ue.src+ue.srcSet+ue.sizes,rel:"preload",as:"image",href:ue.srcSet?void 0:ue.src},me))):null)};var l,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),u=(l=n(5443))&&l.__esModule?l:{default:l},d=n(5809),f=n(7190),m=n(9977);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){p(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://example.com/myaccount/",loader:"imgix"},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(A(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(A(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(A(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,c=e.quality,l=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(r);c)s.push(parseInt(c[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,a(s));return{widths:o.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,l),d=u.widths,f=u.kind,m=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:c,width:d[m]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=v.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function A(e){return"/"===e[0]?e.slice(1):e}},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,u=o.useRef(),d=i(o.useState(!1),2),f=d[0],m=d[1],p=i(o.useState(t?t.current:null),2),h=p[0],g=p[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),s.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var t=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:h,rootMargin:n}))}),[r,h,n,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&g(t.current)}),[t]),[y,f]};var o=n(7294),a=n(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[]},5075:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(9008),o=n(5675),a=n(214),c=n.n(a);t.default=function(){return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:c().main,children:[(0,r.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,r.jsx)("a",{href:"https://nextjs.org",children:"ESTO NO FUNCIONA!"})]}),(0,r.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,r.jsx)("code",{className:c().code,children:"pages/index.tsx"})]}),(0,r.jsxs)("div",{className:c().grid,children:[(0,r.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,r.jsx)("h2",{children:"Documentation \u2192"}),(0,r.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,r.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,r.jsx)("h2",{children:"Learn \u2192"}),(0,r.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,r.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:c().card,children:[(0,r.jsx)("h2",{children:"Examples \u2192"}),(0,r.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,r.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:c().card,children:[(0,r.jsx)("h2",{children:"Deploy \u2192"}),(0,r.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,r.jsx)("footer",{className:c().footer,children:(0,r.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,r.jsx)("span",{className:c().logo,children:(0,r.jsx)(o.default,{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);