(self.webpackChunkblog=self.webpackChunkblog||[]).push([[672],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(c=s;0!=c--;)if(!o(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(c=s;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!o(e[l[c]],i[l[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",s),f}}},8754:function(e,t,n){"use strict";n.d(t,{Z:function(){return Je}});var r={};n.r(r),n.d(r,{g:function(){return Te},m:function(){return we}});var a,o,i,s,c=n(7294),l=n(5697),u=n.n(l),f=n(4839),p=n.n(f),d=n(2993),m=n.n(d),h=n(6494),E=n.n(h),v="bodyAttributes",g="htmlAttributes",b="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},C=(Object.keys(y).map((function(e){return y[e]})),"charset"),T="cssText",w="href",x="http-equiv",S="innerHTML",O="itemprop",A="name",N="property",k="rel",j="src",L="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",R="encodeSpecialCharacters",H="onChangeClientState",B="titleTemplate",D=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),_=[y.NOSCRIPT,y.SCRIPT,y.STYLE],V="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=Q(e,y.TITLE),n=Q(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},W=function(e){return Q(e,H)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],c=s.toLowerCase();-1===t.indexOf(c)||n===k&&"canonical"===e[n].toLowerCase()||c===k&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==S&&s!==T&&s!==O||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var s=o[i],c=E()({},r[s],a[s]);r[s]=c}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;le(y.BODY,r),le(y.HTML,a),ce(f,p);var d={baseTag:ue(y.BASE,n),linkTags:ue(y.LINK,o),metaTags:ue(y.META,i),noscriptTags:ue(y.NOSCRIPT,s),scriptTags:ue(y.SCRIPT,l),styleTags:ue(y.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),c(e,m,h)},se=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=se(e)),le(y.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(V),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var c=i[s],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(V):n.getAttribute(V)!==i.join(",")&&n.setAttribute(V,i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(V,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[V]=!0,a=pe(n,r),[c.createElement(y.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=fe(n),o=se(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+G(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case g:return{toComponent:function(){return pe(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[V]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===S||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===S||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:de(y.BASE,t,r),bodyAttributes:de(v,n,r),htmlAttributes:de(g,a,r),link:de(y.LINK,o,r),meta:de(y.META,i,r),noscript:de(y.NOSCRIPT,s,r),script:de(y.SCRIPT,c,r),style:de(y.STYLE,l,r),title:de(y.TITLE,{title:f,titleAttributes:p},r)}},he=p()((function(e){return{baseTag:J([w,L],e),bodyAttributes:Z(v,e),defer:Q(e,I),encode:Q(e,R),htmlAttributes:Z(g,e),linkTags:X(y.LINK,[k,w],e),metaTags:X(y.META,[A,C,x,N,O],e),noscriptTags:X(y.NOSCRIPT,[S],e),onChangeClientState:W(e),scriptTags:X(y.SCRIPT,[j,S],e),styleTags:X(y.STYLE,[T],e),title:$(e),titleAttributes:Z(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=ne((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),me)((function(){return null})),Ee=(o=he,s=i=function(e){function t(){return F(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case y.TITLE:return q({},a,((t={})[r.type]=i,t.titleAttributes=q({},o),t));case y.BODY:return q({},a,{bodyAttributes:q({},o)});case y.HTML:return q({},a,{htmlAttributes:q({},o)})}return q({},a,((n={})[r.type]=q({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},U(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},s);Ee.renderStatic=Ee.rewind;var ve=function(e){return c.createElement("svg",Object.assign({viewBox:"0 0 1024 1024",fill:"currentColor",height:"1em",width:"1em"},e),c.createElement("path",{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}))};var ge=function(e){return c.createElement("svg",Object.assign({viewBox:"0 0 1024 1024",fill:"currentColor",height:"1em",width:"1em"},e),c.createElement("path",{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"}))};var be=function(e){return c.createElement("svg",Object.assign({viewBox:"0 0 1024 1024",fill:"currentColor",height:"1em",width:"1em"},e),c.createElement("path",{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"}))};var ye=function(e){return c.createElement("svg",Object.assign({viewBox:"0 0 45.057 45.057",fill:"currentColor",height:"1em",width:"1em"},e),c.createElement("path",{d:"M19.558,25.389c-0.067,0.176-0.155,0.328-0.264,0.455c-0.108,0.129-0.24,0.229-0.396,0.301\r c-0.156,0.072-0.347,0.107-0.57,0.107c-0.313,0-0.572-0.068-0.78-0.203c-0.208-0.137-0.374-0.316-0.498-0.541\r c-0.124-0.223-0.214-0.477-0.27-0.756c-0.057-0.279-0.084-0.564-0.084-0.852c0-0.289,0.027-0.572,0.084-0.853\r c0.056-0.281,0.146-0.533,0.27-0.756c0.124-0.225,0.29-0.404,0.498-0.541c0.208-0.137,0.468-0.203,0.78-0.203\r c0.271,0,0.494,0.051,0.666,0.154c0.172,0.105,0.31,0.225,0.414,0.361c0.104,0.137,0.176,0.273,0.216,0.414\r c0.04,0.139,0.068,0.25,0.084,0.33h2.568c-0.112-1.08-0.49-1.914-1.135-2.502c-0.644-0.588-1.558-0.887-2.741-0.895\r c-0.664,0-1.263,0.107-1.794,0.324c-0.532,0.215-0.988,0.52-1.368,0.912c-0.38,0.392-0.672,0.863-0.876,1.416\r c-0.204,0.551-0.307,1.165-0.307,1.836c0,0.631,0.097,1.223,0.288,1.77c0.192,0.549,0.475,1.021,0.847,1.422\r s0.825,0.717,1.361,0.949c0.536,0.23,1.152,0.348,1.849,0.348c0.624,0,1.18-0.105,1.668-0.312\r c0.487-0.209,0.897-0.482,1.229-0.822s0.584-0.723,0.756-1.146c0.172-0.422,0.259-0.852,0.259-1.283h-2.593\r C19.68,25.023,19.627,25.214,19.558,25.389z"}),c.createElement("polygon",{points:"26.62,24.812 26.596,24.812 25.192,19.616 22.528,19.616 25.084,28.184 28.036,28.184 30.713,19.616 28,19.616 \r "}),c.createElement("path",{d:"M33.431,0H5.179v45.057h34.699V6.251L33.431,0z M36.878,42.056H8.179V3h23.706v4.76h4.992L36.878,42.056L36.878,42.056z"}))},Ce=n.p+"static/CV-943abbb9217d5294faed667db5258c6b.pdf",Te="social-module--HeaderContainer--wabKk",we="social-module--InnerLeft--FEEe-";function xe(){return c.createElement("div",{className:Te},c.createElement("div",{className:we},c.createElement("a",{className:r.HeaderLink,href:"https://github.com/sametcl2",target:"_blank"},c.createElement(ve,{className:r.SVGIcon,fill:"#ffb038",stroke:"#ffb038"})),c.createElement("a",{className:r.HeaderLink,href:"https://linkedin.com/in/sametsahin0",target:"_blank"},c.createElement(ge,{className:r.SVGIcon,fill:"#ffb038",stroke:"#ffb038"})),c.createElement("a",{className:r.HeaderLink,href:"https://twitter.com/sametsah_in",target:"_blank"},c.createElement(be,{className:r.SVGIcon,fill:"#ffb038",stroke:"#ffb038"}))),c.createElement("div",null,c.createElement("a",{className:r.HeaderLink,href:Ce,download:"SametSahin_Ozgecmis.pdf"},c.createElement(ye,{fill:"#ffb038",stroke:"#ffb038"}))))}function Se(){return Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(this,arguments)}function Oe(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var Ae=n(1721);function Ne(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var ke=n(3935),je=!1,Le=c.createContext(null),Me="unmounted",Pe="exited",Ie="entering",Re="entered",He="exiting",Be=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=Pe,r.appearStatus=Ie):a=Re:a=t.unmountOnExit||t.mountOnEnter?Me:Pe,r.state={status:a},r.nextCallback=null,r}(0,Ae.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===Me?{status:Pe}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==Ie&&n!==Re&&(t=Ie):n!==Ie&&n!==Re||(t=He)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===Ie?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===Pe&&this.setState({status:Me})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[ke.findDOMNode(this),r],o=a[0],i=a[1],s=this.getTimeouts(),c=r?s.appear:s.enter;!e&&!n||je?this.safeSetState({status:Re},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:Ie},(function(){t.props.onEntering(o,i),t.onTransitionEnd(c,(function(){t.safeSetState({status:Re},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:ke.findDOMNode(this);t&&!je?(this.props.onExit(r),this.safeSetState({status:He},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:Pe},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:Pe},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:ke.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===Me)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Oe(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return c.createElement(Le.Provider,{value:null},"function"==typeof n?n(e,r):c.cloneElement(c.Children.only(n),r))},t}(c.Component);function De(){}Be.contextType=Le,Be.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:De,onEntering:De,onEntered:De,onExit:De,onExiting:De,onExited:De},Be.UNMOUNTED=Me,Be.EXITED=Pe,Be.ENTERING=Ie,Be.ENTERED=Re,Be.EXITING=He;var _e=Be,Ve=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=Ne(n.className,r):n.setAttribute("class",Ne(n.className&&n.className.baseVal||"",r)));var n,r}))},ze=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),a=r[0],o=r[1];t.removeClasses(a,"exit"),t.addClass(a,o?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),a=r[0],o=r[1]?"appear":"enter";t.addClass(a,o,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),a=r[0],o=r[1]?"appear":"enter";t.removeClasses(a,o),t.addClass(a,o,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,a=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:a,activeClassName:r?a+"-active":n[e+"Active"],doneClassName:r?a+"-done":n[e+"Done"]}},t}(0,Ae.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&a&&(r+=" "+a),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,a=n.active,o=n.done;this.appliedClasses[t]={},r&&Ve(e,r),a&&Ve(e,a),o&&Ve(e,o)},n.render=function(){var e=this.props,t=(e.classNames,Oe(e,["classNames"]));return c.createElement(_e,Se({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(c.Component);ze.defaultProps={classNames:""};var Fe=ze,Ue=function(e){var t=e.children;return c.createElement("div",{className:"notch-module--Container--ljGFw"},t)};var qe=function(e){var t;return c.createElement("svg",Object.assign(((t={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"92.833px",height:"92.833px",viewBox:"0 0 92.833 92.833",fill:"currentColor"}).height="1.2rem",t.width="1.2rem",t),e),c.createElement("g",null,c.createElement("g",null,c.createElement("path",{d:"M89.834,1.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V4.75\r C92.834,3.096,91.488,1.75,89.834,1.75z"}),c.createElement("path",{d:"M89.834,36.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V39.75\r C92.834,38.096,91.488,36.75,89.834,36.75z"}),c.createElement("path",{d:"M89.834,71.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V74.75\r C92.834,73.095,91.488,71.75,89.834,71.75z"}))),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null))},Ye=function(e){e.showMenu;var t=e.setShowMenu;return c.createElement("div",{className:"button-module--ButtonStyle--uEJV8",onClick:function(){t(!0)}},c.createElement(Ue,null,c.createElement(qe,{fill:"#ffb038",stroke:"#ffb038"})))},Ke=n(5444);var Ge=function(e){return c.createElement("svg",Object.assign({version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 490 490",fill:"currentColor",height:"2.3rem",width:"2.3rem"},e),c.createElement("polygon",{points:"386.813,0 245,141.812 103.188,0 0,103.188 141.813,245 0,386.812 103.187,489.999 245,348.187 386.813,490 \r 490,386.812 348.187,244.999 490,103.187 "}),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null),c.createElement("g",null))},$e="menu-module--MenuLink--KFBCT",We=function(e){e.showMenu;var t=e.setShowMenu;e.handleClick;return c.createElement("div",{className:"menu-module--MenuStyle--cbJtl"},c.createElement(Ge,{className:"menu-module--CrossStyle--6FlDt",fill:"#ffb038",stroke:"#ffb038",onClick:function(){t(!1)}}),c.createElement(Ke.rU,{className:$e,to:"/"},"Hakkımda"),c.createElement(Ke.rU,{className:$e,to:"/blog"},"Blog"))},Ze=function(){var e=(0,c.useState)(!0),t=e[0],n=e[1],r=(0,c.useState)(!1),a=r[0],o=r[1];return c.createElement("div",{className:"navigation-module--navigationContainer--bd1at"},t&&c.createElement(Ye,{showMenu:a,setShowMenu:o}),c.createElement(Fe,{in:a,timeout:300,classNames:"animation",unmountOnExit:!0,onEnter:function(){return n(!1)},onExited:function(){return n(!0)}},c.createElement(We,{showMenu:a,setShowMenu:o})))},Je=function(e){var t=e.children;return c.createElement(c.Fragment,null,c.createElement(Ee,null,c.createElement("meta",{charSet:"utf-8"}),c.createElement("title",null,"Samet Şahin Blog")),c.createElement("div",{className:"layout-module--container--eLBMS"},c.createElement("header",{className:"layout-module--site-title--5N6mf"},c.createElement(xe,null)),c.createElement(Ze,null),c.createElement("main",null,t)))}}}]);
//# sourceMappingURL=ed9bbed841a32b4c7a1582eadf6d71d316bffb3c-27299efba5360037f856.js.map