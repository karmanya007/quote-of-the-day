!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=53)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(54))},function(t,e,n){var r=n(0),o=n(28),i=n(5),c=n(33),a=n(34),u=n(55),f=o("wks"),s=r.Symbol,l=u?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(a&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(3),o=n(31),i=n(7),c=n(18),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(3),o=n(6),i=n(19);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(0),o=n(22).f,i=n(9),c=n(12),a=n(17),u=n(60),f=n(40);t.exports=function(t,e){var n,s,l,p,h,v=t.target,d=t.global,y=t.stat;if(n=d?r:y?r[v]||a(v,{}):(r[v]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(h=o(n,s))&&h.value:n[s],!f(d?s:v+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,s,p,t)}}},function(t,e,n){var r=n(62),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(0),o=n(9),i=n(5),c=n(17),a=n(20),u=n(35),f=u.get,s=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var u=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=l.join("string"==typeof e?e:"")),t!==r?(u?!p&&t[e]&&(f=!0):delete t[e],f?t[e]=n:o(t,e,n)):f?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a(this)}))},function(t,e,n){var r=n(39),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(16),o=n(12),i=n(58);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){var r={};r[n(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){var r=n(0),o=n(9);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(30),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){"use strict";var r,o,i,c,a=n(10),u=n(29),f=n(0),s=n(11),l=n(69),p=n(12),h=n(70),v=n(71),d=n(72),y=n(4),g=n(14),m=n(73),x=n(8),b=n(20),w=n(74),S=n(78),L=n(79),j=n(42).set,E=n(81),k=n(82),O=n(83),T=n(45),_=n(84),q=n(35),P=n(40),M=n(1),A=n(26),R=M("species"),C="Promise",I=q.get,N=q.set,F=q.getterFor(C),G=l,H=f.TypeError,U=f.document,D=f.process,V=s("fetch"),z=T.f,B=z,K="process"==x(D),W=!!(U&&U.createEvent&&f.dispatchEvent),Y=P(C,(function(){if(!(b(G)!==String(G))){if(66===A)return!0;if(!K&&"function"!=typeof PromiseRejectionEvent)return!0}if(u&&!G.prototype.finally)return!0;if(A>=51&&/native code/.test(G))return!1;var t=G.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[R]=e,!(t.then((function(){}))instanceof e)})),Q=Y||!S((function(t){G.all(t).catch((function(){}))})),X=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},J=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;E((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var a,u,f,s=r[c++],l=i?s.ok:s.fail,p=s.resolve,h=s.reject,v=s.domain;try{l?(i||(2===e.rejection&&et(t,e),e.rejection=1),!0===l?a=o:(v&&v.enter(),a=l(o),v&&(v.exit(),f=!0)),a===s.promise?h(H("Promise-chain cycle")):(u=X(a))?u.call(a,p,h):p(a)):h(o)}catch(t){v&&!f&&v.exit(),h(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&$(t,e)}))}},Z=function(t,e,n){var r,o;W?((r=U.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:e,reason:n},(o=f["on"+t])?o(r):"unhandledrejection"===t&&O("Unhandled promise rejection",n)},$=function(t,e){j.call(f,(function(){var n,r=e.value;if(tt(e)&&(n=_((function(){K?D.emit("unhandledRejection",r,t):Z("unhandledrejection",t,r)})),e.rejection=K||tt(e)?2:1,n.error))throw n.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},et=function(t,e){j.call(f,(function(){K?D.emit("rejectionHandled",t):Z("rejectionhandled",t,e.value)}))},nt=function(t,e,n,r){return function(o){t(e,n,o,r)}},rt=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,J(t,e,!0))},ot=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw H("Promise can't be resolved itself");var o=X(n);o?E((function(){var r={done:!1};try{o.call(n,nt(ot,t,r,e),nt(rt,t,r,e))}catch(n){rt(t,r,n,e)}})):(e.value=n,e.state=1,J(t,e,!1))}catch(n){rt(t,{done:!1},n,e)}}};Y&&(G=function(t){m(this,G,C),g(t),r.call(this);var e=I(this);try{t(nt(ot,this,e),nt(rt,this,e))}catch(t){rt(this,e,t)}},(r=function(t){N(this,{type:C,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=h(G.prototype,{then:function(t,e){var n=F(this),r=z(L(this,G));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=K?D.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&J(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=I(t);this.promise=t,this.resolve=nt(ot,t,e),this.reject=nt(rt,t,e)},T.f=z=function(t){return t===G||t===i?new o(t):B(t)},u||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,e){var n=this;return new G((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof V&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return k(G,V.apply(f,arguments))}}))),a({global:!0,wrap:!0,forced:Y},{Promise:G}),v(G,C,!1,!0),d(C),i=s(C),a({target:C,stat:!0,forced:Y},{reject:function(t){var e=z(this);return e.reject.call(void 0,t),e.promise}}),a({target:C,stat:!0,forced:u||Y},{resolve:function(t){return k(u&&this===i?G:this,t)}}),a({target:C,stat:!0,forced:Q},{all:function(t){var e=this,n=z(e),r=n.resolve,o=n.reject,i=_((function(){var n=g(e.resolve),i=[],c=0,a=1;w(t,(function(t){var u=c++,f=!1;i.push(void 0),a++,n.call(e,t).then((function(t){f||(f=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=z(e),r=n.reject,o=_((function(){var o=g(e.resolve);w(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(3),o=n(59),i=n(19),c=n(23),a=n(18),u=n(5),f=n(31),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=a(e,!0),f)try{return s(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(38),o=n(24);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(14);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r,o,i=n(0),c=n(44),a=i.process,u=a&&a.versions,f=u&&u.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),c=new L(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=b(c,n);if(a){if(a===s)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,c),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function l(){}function p(){}function h(){}var v={};v[o]=function(){return this};var d=Object.getPrototypeOf,y=d&&d(d(j([])));y&&y!==e&&n.call(y,o)&&(v=y);var g=h.prototype=l.prototype=Object.create(v);function m(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var r;this._invoke=function(o,i){function c(){return new e((function(r,c){!function r(o,i,c,a){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,a)}))}a(u.arg)}(o,i,r,c)}))}return r=r?r.then(c,c):c()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=g.constructor=h,h.constructor=p,p.displayName=a(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(x.prototype),x.prototype[i]=function(){return this},t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new x(u(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},m(g),a(g,c,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){var r=n(29),o=n(30);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),o=n(17),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(3),o=n(2),i=n(32);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r,o,i,c=n(56),a=n(0),u=n(4),f=n(9),s=n(5),l=n(57),p=n(36),h=a.WeakMap;if(c){var v=new h,d=v.get,y=v.has,g=v.set;r=function(t,e){return g.call(v,t,e),e},o=function(t){return d.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var m=l("state");p[m]=!0,r=function(t,e){return f(t,m,e),e},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e){t.exports={}},function(t,e,n){var r=n(16),o=n(8),i=n(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:c?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){var r=n(2),o=n(8),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(2),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==f||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,e){t.exports={}},function(t,e,n){var r,o,i,c=n(0),a=n(2),u=n(8),f=n(25),s=n(80),l=n(32),p=n(43),h=c.location,v=c.setImmediate,d=c.clearImmediate,y=c.process,g=c.MessageChannel,m=c.Dispatch,x=0,b={},w=function(t){if(b.hasOwnProperty(t)){var e=b[t];delete b[t],e()}},S=function(t){return function(){w(t)}},L=function(t){w(t.data)},j=function(t){c.postMessage(t+"",h.protocol+"//"+h.host)};v&&d||(v=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return b[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(x),x},d=function(t){delete b[t]},"process"==u(y)?r=function(t){y.nextTick(S(t))}:m&&m.now?r=function(t){m.now(S(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=L,r=f(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||a(j)||"file:"===h.protocol?r="onreadystatechange"in l("script")?function(t){s.appendChild(l("script")).onreadystatechange=function(){s.removeChild(this),w(t)}}:function(t){setTimeout(S(t),0)}:(r=j,c.addEventListener("message",L,!1))),t.exports={set:v,clear:d}},function(t,e,n){var r=n(44);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){var r=n(11);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(14),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){var r=n(10),o=n(3);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:n(6).f})},function(t,e,n){"use strict";var r=n(10),o=n(85);r({target:"String",proto:!0,forced:n(86)("link")},{link:function(t){return o(this,"a","href",t)}})},function(t,e,n){"use strict";var r=n(10),o=n(2),i=n(49),c=n(4),a=n(50),u=n(13),f=n(87),s=n(51),l=n(88),p=n(1),h=n(26),v=p("isConcatSpreadable"),d=h>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=l("concat"),g=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!d||!y},{concat:function(t){var e,n,r,o,i,c=a(this),l=s(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(g(i=-1===e?c:arguments[e])){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&f(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,e,n){var r=n(8);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(24);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4),o=n(49),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){"use strict";var r=n(90).forEach,o=n(91),i=n(92),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){t.exports=n(96)},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(34);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(0),o=n(20),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(28),o=n(33),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){"use strict";var r=n(16),o=n(37);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(5),o=n(61),i=n(22),c=n(6);t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||a(t,s,u(e,s))}}},function(t,e,n){var r=n(11),o=n(63),i=n(68),c=n(7);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(64),o=n(67).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(5),o=n(23),i=n(65).indexOf,c=n(36);t.exports=function(t,e){var n,a=o(t),u=0,f=[];for(n in a)!r(c,n)&&r(a,n)&&f.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(23),o=n(13),i=n(66),c=function(t){return function(e,n,c){var a,u=r(e),f=o(u.length),s=i(c,f);if(t&&n!=n){for(;f>s;)if((a=u[s++])!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(39),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(0);t.exports=r.Promise},function(t,e,n){var r=n(12);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){var r=n(6).f,o=n(5),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(11),o=n(6),i=n(1),c=n(3),a=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(7),o=n(75),i=n(13),c=n(25),a=n(76),u=n(77),f=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,s,l){var p,h,v,d,y,g,m,x=c(e,n,s?2:1);if(l)p=t;else{if("function"!=typeof(h=a(t)))throw TypeError("Target is not iterable");if(o(h)){for(v=0,d=i(t.length);d>v;v++)if((y=s?x(r(m=t[v])[0],m[1]):x(t[v]))&&y instanceof f)return y;return new f(!1)}p=h.call(t)}for(g=p.next;!(m=g.call(p)).done;)if("object"==typeof(y=u(p,x,m.value,s))&&y&&y instanceof f)return y;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,e,n){var r=n(1),o=n(41),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(37),o=n(41),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(7);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(7),o=n(14),i=n(1)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r=n(11);t.exports=r("document","documentElement")},function(t,e,n){var r,o,i,c,a,u,f,s,l=n(0),p=n(22).f,h=n(8),v=n(42).set,d=n(43),y=l.MutationObserver||l.WebKitMutationObserver,g=l.process,m=l.Promise,x="process"==h(g),b=p(l,"queueMicrotask"),w=b&&b.value;w||(r=function(){var t,e;for(x&&(t=g.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},x?c=function(){g.nextTick(r)}:y&&!d?(a=!0,u=document.createTextNode(""),new y(r).observe(u,{characterData:!0}),c=function(){u.data=a=!a}):m&&m.resolve?(f=m.resolve(void 0),s=f.then,c=function(){s.call(f,r)}):c=function(){v.call(l,r)}),t.exports=w||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(7),o=n(4),i=n(45);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){var r=n(24),o=/"/g;t.exports=function(t,e,n,i){var c=String(r(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),a+">"+c+"</"+e+">"}},function(t,e,n){var r=n(2);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},function(t,e,n){"use strict";var r=n(18),o=n(6),i=n(19);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e,n){var r=n(2),o=n(1),i=n(26),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){"use strict";var r=n(10),o=n(52);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){var r=n(25),o=n(38),i=n(50),c=n(13),a=n(51),u=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(h,v,d,y){for(var g,m,x=i(h),b=o(x),w=r(v,d,3),S=c(b.length),L=0,j=y||a,E=e?j(h,S):n?j(h,0):void 0;S>L;L++)if((p||L in b)&&(m=w(g=b[L],L,x),t))if(e)E[L]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return L;case 2:u.call(E,g)}else if(s)return!1;return l?-1:f||s?s:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(3),o=n(2),i=n(5),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var n=[][t],f=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:u,l=i(e,1)?e[1]:void 0;return a[t]=!!n&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,s,l)}))}},function(t,e,n){var r=n(0),o=n(94),i=n(52),c=n(9);for(var a in o){var u=r[a],f=u&&u.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){var r=n(3),o=n(6).f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},function(t,e,n){"use strict";n.r(e);n(15),n(21),n(27),n(46),n(47);function r(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.query=e}var e,n,i,c,a;return e=t,(n=[{key:"getResults",value:(c=regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://quotes.rest/qod.json?category=".concat(this.query)).then((function(t){return t.json()})).then((function(t){var n=t.contents.quotes[0];e.quote=n.quote,e.author=n.author,e.backgroundURL=n.background,e.category=n.category,e.date=n.date,e.link=n.permalink,e.tags=n.tags})).catch((function(t){alert(t),console.error("Error:",t)}));case 2:case"end":return t.stop()}}),t,this)})),a=function(){var t=this,e=arguments;return new Promise((function(n,o){var i=c.apply(t,e);function a(t){r(i,n,o,a,u,"next",t)}function u(t){r(i,n,o,a,u,"throw",t)}a(void 0)}))},function(){return a.apply(this,arguments)})}])&&o(e.prototype,n),i&&o(e,i),t}(),c={searchForm:document.querySelector(".form-horizontal"),searchInput:document.querySelector(".search-bar"),quoteArea:document.querySelector(".blockquote"),category:document.querySelector(".category"),date:document.querySelector(".date"),tags:document.querySelector(".tags"),quote_link:document.querySelector("#quote_link"),quote_img_link:document.querySelector("#quote_img_link"),quote_container:document.querySelector(".quote_container"),image_container:document.querySelector(".unsplash"),photo_link:document.querySelector("#photo_link"),portfolio:document.querySelector("#portfolio"),catagory_eg:document.querySelector(".catagory-eg"),bottom:document.querySelector(".bottom"),footer:document.querySelector(".Footer")},a=function(){var t=document.querySelector(".loader");t&&t.parentElement.removeChild(t)},u=(n(48),n(89),n(93),function(){c.quoteArea.innerHTML="",c.category.innerHTML="",c.date.innerHTML="",c.tags.innerHTML="",c.quote_link.innerHTML=""}),f=function(t){var e="",n='\n\t<p class="mb-0 quote">\n\t\t'.concat(t.quote,'\n\t</p>\n\t<footer class="blockquote-footer quote-footer text-white">').concat(t.author,"</footer>\n\t"),r="\n\t\t<a href = ".concat(t.link," target = '_blank''>QUOTE LINK</a>\n\t"),o="\n\t\t<a href = ".concat(t.backgroundURL," target = '_blank''>IMAGE LINK</a>\n\t");c.quoteArea.insertAdjacentHTML("afterbegin",n),c.category.textContent=t.category.toUpperCase(),c.date.textContent=t.date,t.tags.forEach((function(t){e=e+t.toUpperCase()+" | "})),c.tags.textContent=e,c.quote_link.insertAdjacentHTML("afterbegin",r),c.quote_img_link.insertAdjacentHTML("afterbegin",o),c.quote_container.style.backgroundImage="linear-gradient(rgba(255,255,255,0.01), rgba(255,255,255,0.01)),url(".concat(t.backgroundURL,")")},s=function(t){c.image_container.style.backgroundImage="linear-gradient(rgba(255,255,255,0.001), rgba(255,255,255,0.001)),url(".concat(t.imageURL,")");var e="\n        <a href = ".concat(t.image_location," target = '_blank''>PHOTO</a>\n    "),n="\n        <a href = ".concat(t.userPortURL," target = '_blank''>By ").concat(t.user,"</a>\n    ");for(var r in c.photo_link.insertAdjacentHTML("afterbegin",e),c.portfolio.insertAdjacentHTML("afterbegin",n),t.categories)c.catagory_eg.insertAdjacentHTML("beforeend",'<div class="ml-2 bd-highlight">'.concat(r,"</div>"))};n(95);function l(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r,o,i;return e=t,(n=[{key:"getResults",value:(o=regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.unsplash.com/photos/random?client_id=".concat("jmllfxayOO3gXqd9BzGwMlP9_Q9DbHMK68GTxUnvyyE")).then((function(t){return t.json()})).then((function(t){var n=t;e.imageURL=n.urls.regular,e.image_location=n.links.html,e.user=n.user.name,e.userPortURL=n.user.portfolio_url})).catch((function(t){alert(t),console.error("Error processing image:",t)}));case 2:return t.next=4,fetch("http://quotes.rest/qod/categories.json").then((function(t){return t.json()})).then((function(t){e.categories=t.contents.categories})).catch((function(t){alert(t),console.error("Error in processing categories:",t)}));case 4:case"end":return t.stop()}}),t)})),i=function(){var t=this,e=arguments;return new Promise((function(n,r){var i=o.apply(t,e);function c(t){l(i,n,r,c,a,"next",t)}function a(t){l(i,n,r,c,a,"throw",t)}c(void 0)}))},function(){return i.apply(this,arguments)})}])&&p(e.prototype,n),r&&p(e,r),t}();function v(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){v(i,r,o,c,a,"next",t)}function a(t){v(i,r,o,c,a,"throw",t)}c(void 0)}))}}var y={},g=function(){var t=d(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=c.searchInput.value)){t.next=21;break}return y.quote=new i(e),c.bottom.style.display="block",c.footer.style.display="block",c.searchInput.value="",u(),c.quoteArea.insertAdjacentHTML("afterbegin",'\n        <div class="d-flex justify-content-center loader">\n            <div class="spinner-border" role="status">\n                <span class="sr-only">Loading...</span>\n            </div>\n        </div>\n    '),t.prev=8,t.next=11,y.quote.getResults();case 11:a(),u(),f(y.quote),t.next=21;break;case 16:t.prev=16,t.t0=t.catch(8),alert("Error processing the query"),a(),u();case 21:case"end":return t.stop()}}),t,null,[[8,16]])})));return function(){return t.apply(this,arguments)}}();c.searchForm.addEventListener("submit",(function(t){t.preventDefault(),g(),window.location.href="#focus"})),window.addEventListener("load",d(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y.image=new h,t.prev=1,t.next=4,y.image.getResults();case 4:s(y.image),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),alert(t.t0),console.error("Error!",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,7]])}))))}]);