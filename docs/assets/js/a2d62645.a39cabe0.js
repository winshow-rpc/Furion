(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(216)),c=n(10),o={id:"deploy-iis",title:"30.1 \u5728 IIS \u90e8\u7f72",sidebar_label:"30.1 \u5728 IIS \u90e8\u7f72"},d={unversionedId:"deploy-iis",id:"deploy-iis",isDocsHomePage:!1,title:"30.1 \u5728 IIS \u90e8\u7f72",description:"\u5982\u679c\u9700\u8981\u7cbe\u7b80\u53d1\u5e03\u540e\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u7f16\u8f91 Web \u9879\u76ee\u7684 .csproj \u5e76\u6dfb\u52a0 en-US\uff0c\u5982\uff1a",source:"@site/docs/deploy-iis.mdx",sourceDirName:".",slug:"/deploy-iis",permalink:"/docs/deploy-iis",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/deploy-iis.mdx",version:"current",lastUpdatedBy:"\u767e\u5c0f\u50e7",lastUpdatedAt:1619441379,formattedLastUpdatedAt:"4/26/2021",sidebar_label:"30.1 \u5728 IIS \u90e8\u7f72",frontMatter:{id:"deploy-iis",title:"30.1 \u5728 IIS \u90e8\u7f72",sidebar_label:"30.1 \u5728 IIS \u90e8\u7f72"},sidebar:"docs",previous:{title:"29. Anno \u5fae\u670d\u52a1",permalink:"/docs/microservice"},next:{title:"30.2 \u5728 Docker \u90e8\u7f72",permalink:"/docs/deploy-docker"}},b=[{value:"30.1.1 \u53d1\u5e03\u7f51\u7ad9",id:"3011-\u53d1\u5e03\u7f51\u7ad9",children:[{value:"30.1.1.1 \u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03",id:"30111-\u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03",children:[]},{value:"30.1.1.2 \u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939",id:"30112-\u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939",children:[]},{value:"30.1.1.3 \u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84",id:"30113-\u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84",children:[]},{value:"30.1.1.4 \u70b9\u51fb\u53d1\u5e03",id:"30114-\u70b9\u51fb\u53d1\u5e03",children:[]}]},{value:"30.1.2 \u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e",id:"3012-\u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e",children:[{value:"30.1.2.1 \u7b2c\u4e00\u6b65",id:"30121-\u7b2c\u4e00\u6b65",children:[]},{value:"30.1.2.2 \u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09",id:"30122-\u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09",children:[]},{value:"30.1.2.3 \u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09",id:"30123-\u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09",children:[]},{value:"30.1.2.4 \u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09",id:"30124-\u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09",children:[]}]},{value:"30.1.3 \u90e8\u7f72\u5230 IIS",id:"3013-\u90e8\u7f72\u5230-iis",children:[{value:"30.1.3.1 \u6dfb\u52a0\u65b0\u7f51\u7ad9",id:"30131-\u6dfb\u52a0\u65b0\u7f51\u7ad9",children:[]},{value:"30.1.3.2 \u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f",id:"30132-\u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f",children:[]},{value:"30.1.3.3 \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60",id:"30133-\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60",children:[]},{value:"30.1.3.4 \u8bbe\u7f6e\u4e3a <code>\u975e\u6258\u7ba1</code>",id:"30134-\u8bbe\u7f6e\u4e3a-\u975e\u6258\u7ba1",children:[]},{value:"30.1.3.5 \u91cd\u542f\u7f51\u7ad9",id:"30135-\u91cd\u542f\u7f51\u7ad9",children:[]}]},{value:"30.1.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3014-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],l={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u7cbe\u7b80\u53d1\u5e03\u6587\u4ef6")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u5982\u679c\u9700\u8981\u7cbe\u7b80\u53d1\u5e03\u540e\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u7f16\u8f91 Web \u9879\u76ee\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},".csproj")," \u5e76\u6dfb\u52a0 ",Object(i.b)("inlineCode",{parentName:"p"},"<SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>"),"\uff0c\u5982\uff1a"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-cs",metastring:"{3}","{3}":!0},"<PropertyGroup>\n  <TargetFramework>net5.0</TargetFramework>\n  <SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>\n</PropertyGroup>\n")))),Object(i.b)("h2",{id:"3011-\u53d1\u5e03\u7f51\u7ad9"},"30.1.1 \u53d1\u5e03\u7f51\u7ad9"),Object(i.b)("h3",{id:"30111-\u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03"},"30.1.1.1 \u9009\u62e9\u542f\u52a8\u9879\u53d1\u5e03"),Object(i.b)("img",{src:Object(c.a)("img/dp1.png")}),Object(i.b)("h3",{id:"30112-\u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939"},"30.1.1.2 \u9009\u62e9\u53d1\u5e03\u5230\u6587\u4ef6\u5939"),Object(i.b)("img",{src:Object(c.a)("img/dy2.png")}),Object(i.b)("h3",{id:"30113-\u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84"},"30.1.1.3 \u914d\u7f6e\u53d1\u5e03\u540e\u8def\u5f84"),Object(i.b)("img",{src:Object(c.a)("img/dp3.png")}),Object(i.b)("h3",{id:"30114-\u70b9\u51fb\u53d1\u5e03"},"30.1.1.4 \u70b9\u51fb\u53d1\u5e03"),Object(i.b)("img",{src:Object(c.a)("img/dp4.png")}),Object(i.b)("h2",{id:"3012-\u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e"},"30.1.2 \u670d\u52a1\u5668\u73af\u5883\u914d\u7f6e"),Object(i.b)("h3",{id:"30121-\u7b2c\u4e00\u6b65"},"30.1.2.1 \u7b2c\u4e00\u6b65"),Object(i.b)("p",null,"\u5b89\u88c5.NET Core \u8fd0\u884c\u65f6\u6346\u7ed1\u5305\uff1a",Object(i.b)("a",{parentName:"p",href:"https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer"},"\u70b9\u51fb\u4e0b\u8f7d")),Object(i.b)("h3",{id:"30122-\u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09"},"30.1.2.2 \u7b2c\u4e8c\u6b65\uff08\u547d\u4ee4\uff09"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"net stop was /y\n")),Object(i.b)("h3",{id:"30123-\u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09"},"30.1.2.3 \u7b2c\u4e09\u6b65\uff08\u547d\u4ee4\uff09"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"net start w3svc\n")),Object(i.b)("h3",{id:"30124-\u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09"},"30.1.2.4 \u7b2c\u56db\u6b65\uff08\u547d\u4ee4\uff09"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"set ASPNETCORE_ENVIRONMENT=Production\n")),Object(i.b)("h2",{id:"3013-\u90e8\u7f72\u5230-iis"},"30.1.3 \u90e8\u7f72\u5230 IIS"),Object(i.b)("h3",{id:"30131-\u6dfb\u52a0\u65b0\u7f51\u7ad9"},"30.1.3.1 \u6dfb\u52a0\u65b0\u7f51\u7ad9"),Object(i.b)("img",{src:Object(c.a)("img/ds1.png")}),Object(i.b)("h3",{id:"30132-\u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f"},"30.1.3.2 \u914d\u7f6e\u7f51\u7ad9\u4fe1\u606f"),Object(i.b)("img",{src:Object(c.a)("img/ds2.png")}),Object(i.b)("h3",{id:"30133-\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60"},"30.1.3.3 \u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u6c60"),Object(i.b)("img",{src:Object(c.a)("img/ds3.png")}),Object(i.b)("h3",{id:"30134-\u8bbe\u7f6e\u4e3a-\u975e\u6258\u7ba1"},"30.1.3.4 \u8bbe\u7f6e\u4e3a ",Object(i.b)("inlineCode",{parentName:"h3"},"\u975e\u6258\u7ba1")),Object(i.b)("img",{src:Object(c.a)("img/ds4.png")}),Object(i.b)("h3",{id:"30135-\u91cd\u542f\u7f51\u7ad9"},"30.1.3.5 \u91cd\u542f\u7f51\u7ad9"),Object(i.b)("p",null,"\u53ea\u9700\u91cd\u542f\u7f51\u7ad9\u6216\u5e94\u7528\u7a0b\u5e8f\u6c60\u5373\u53ef\u3002"),Object(i.b)("h2",{id:"3014-\u53cd\u9988\u4e0e\u5efa\u8bae"},"30.1.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(i.b)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}s.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,m=s["".concat(c,".").concat(u)]||s[u]||p[u]||i;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);