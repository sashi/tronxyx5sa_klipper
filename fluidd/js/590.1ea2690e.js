(()=>{"use strict";var e={6898:e=>{e.exports=e=>!!e&&("symbol"===typeof Symbol.observable&&"function"===typeof e[Symbol.observable]?e===e[Symbol.observable]():"function"===typeof e["@@observable"]&&e===e["@@observable"]())},52511:(e,t,r)=>{r.r(t),r.d(t,{Observable:()=>j,Subject:()=>N,filter:()=>P,flatMap:()=>R,interval:()=>I,map:()=>q,merge:()=>L,multicast:()=>U,scan:()=>J,unsubscribe:()=>T});var n=function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function i(e){try{a(n.next(e))}catch(t){s(t)}}function c(e){try{a(n["throw"](e))}catch(t){s(t)}}function a(e){e.done?r(e.value):o(e.value).then(i,c)}a((n=n.apply(e,t||[])).next())}))};class o{constructor(e){this._baseObserver=e,this._pendingPromises=new Set}complete(){Promise.all(this._pendingPromises).then((()=>this._baseObserver.complete())).catch((e=>this._baseObserver.error(e)))}error(e){this._baseObserver.error(e)}schedule(e){const t=Promise.all(this._pendingPromises),r=[],o=e=>r.push(e),s=Promise.resolve().then((()=>n(this,void 0,void 0,(function*(){yield t,yield e(o),this._pendingPromises.delete(s);for(const e of r)this._baseObserver.next(e)})))).catch((e=>{this._pendingPromises.delete(s),this._baseObserver.error(e)}));this._pendingPromises.add(s)}}const s=()=>"function"===typeof Symbol,i=e=>s()&&Boolean(Symbol[e]),c=e=>i(e)?Symbol[e]:"@@"+e;i("asyncIterator")||(Symbol.asyncIterator=Symbol.asyncIterator||Symbol.for("Symbol.asyncIterator"));const a=c("iterator"),u=c("observable"),l=c("species");function f(e,t){const r=e[t];if(null!=r){if("function"!==typeof r)throw new TypeError(r+" is not a function");return r}}function p(e){let t=e.constructor;return void 0!==t&&(t=t[l],null===t&&(t=void 0)),void 0!==t?t:z}function d(e){return e instanceof z}function h(e){h.log?h.log(e):setTimeout((()=>{throw e}),0)}function b(e){Promise.resolve().then((()=>{try{e()}catch(t){h(t)}}))}function y(e){const t=e._cleanup;if(void 0!==t&&(e._cleanup=void 0,t))try{if("function"===typeof t)t();else{const e=f(t,"unsubscribe");e&&e.call(t)}}catch(r){h(r)}}function v(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function m(e){const t=e._queue;if(t){e._queue=void 0,e._state="ready";for(const r of t)if(_(e,r.type,r.value),"closed"===e._state)break}}function _(e,t,r){e._state="running";const n=e._observer;try{const o=n?f(n,t):void 0;switch(t){case"next":o&&o.call(n,r);break;case"error":if(v(e),!o)throw r;o.call(n,r);break;case"complete":v(e),o&&o.call(n);break}}catch(o){h(o)}"closed"===e._state?y(e):"running"===e._state&&(e._state="ready")}function g(e,t,r){if("closed"!==e._state)return"buffering"===e._state?(e._queue=e._queue||[],void e._queue.push({type:t,value:r})):"ready"!==e._state?(e._state="buffering",e._queue=[{type:t,value:r}],void b((()=>m(e)))):void _(e,t,r)}class w{constructor(e,t){this._cleanup=void 0,this._observer=e,this._queue=void 0,this._state="initializing";const r=new x(this);try{this._cleanup=t.call(void 0,r)}catch(n){r.error(n)}"initializing"===this._state&&(this._state="ready")}get closed(){return"closed"===this._state}unsubscribe(){"closed"!==this._state&&(v(this),y(this))}}class x{constructor(e){this._subscription=e}get closed(){return"closed"===this._subscription._state}next(e){g(this._subscription,"next",e)}error(e){g(this._subscription,"error",e)}complete(){g(this._subscription,"complete")}}class z{constructor(e){if(!(this instanceof z))throw new TypeError("Observable cannot be called as a function");if("function"!==typeof e)throw new TypeError("Observable initializer must be a function");this._subscriber=e}subscribe(e,t,r){return"object"===typeof e&&null!==e||(e={next:e,error:t,complete:r}),new w(e,this._subscriber)}pipe(e,...t){let r=this;for(const n of[e,...t])r=n(r);return r}tap(e,t,r){const n="object"!==typeof e||null===e?{next:e,error:t,complete:r}:e;return new z((e=>this.subscribe({next(t){n.next&&n.next(t),e.next(t)},error(t){n.error&&n.error(t),e.error(t)},complete(){n.complete&&n.complete(),e.complete()},start(e){n.start&&n.start(e)}})))}forEach(e){return new Promise(((t,r)=>{if("function"!==typeof e)return void r(new TypeError(e+" is not a function"));function n(){o.unsubscribe(),t(void 0)}const o=this.subscribe({next(t){try{e(t,n)}catch(s){r(s),o.unsubscribe()}},error(e){r(e)},complete(){t(void 0)}})}))}map(e){if("function"!==typeof e)throw new TypeError(e+" is not a function");const t=p(this);return new t((t=>this.subscribe({next(r){let n=r;try{n=e(r)}catch(o){return t.error(o)}t.next(n)},error(e){t.error(e)},complete(){t.complete()}})))}filter(e){if("function"!==typeof e)throw new TypeError(e+" is not a function");const t=p(this);return new t((t=>this.subscribe({next(r){try{if(!e(r))return}catch(n){return t.error(n)}t.next(r)},error(e){t.error(e)},complete(){t.complete()}})))}reduce(e,t){if("function"!==typeof e)throw new TypeError(e+" is not a function");const r=p(this),n=arguments.length>1;let o=!1,s=t;return new r((t=>this.subscribe({next(r){const i=!o;if(o=!0,!i||n)try{s=e(s,r)}catch(c){return t.error(c)}else s=r},error(e){t.error(e)},complete(){if(!o&&!n)return t.error(new TypeError("Cannot reduce an empty sequence"));t.next(s),t.complete()}})))}concat(...e){const t=p(this);return new t((r=>{let n,o=0;function s(i){n=i.subscribe({next(e){r.next(e)},error(e){r.error(e)},complete(){o===e.length?(n=void 0,r.complete()):s(t.from(e[o++]))}})}return s(this),()=>{n&&(n.unsubscribe(),n=void 0)}}))}flatMap(e){if("function"!==typeof e)throw new TypeError(e+" is not a function");const t=p(this);return new t((r=>{const n=[],o=this.subscribe({next(o){let i;if(e)try{i=e(o)}catch(a){return r.error(a)}else i=o;const c=t.from(i).subscribe({next(e){r.next(e)},error(e){r.error(e)},complete(){const e=n.indexOf(c);e>=0&&n.splice(e,1),s()}});n.push(c)},error(e){r.error(e)},complete(){s()}});function s(){o.closed&&0===n.length&&r.complete()}return()=>{n.forEach((e=>e.unsubscribe())),o.unsubscribe()}}))}[(Symbol.observable,u)](){return this}static from(e){const t="function"===typeof this?this:z;if(null==e)throw new TypeError(e+" is not an object");const r=f(e,u);if(r){const n=r.call(e);if(Object(n)!==n)throw new TypeError(n+" is not an object");return d(n)&&n.constructor===t?n:new t((e=>n.subscribe(e)))}if(i("iterator")){const r=f(e,a);if(r)return new t((t=>{b((()=>{if(!t.closed){for(const n of r.call(e))if(t.next(n),t.closed)return;t.complete()}}))}))}if(Array.isArray(e))return new t((t=>{b((()=>{if(!t.closed){for(const r of e)if(t.next(r),t.closed)return;t.complete()}}))}));throw new TypeError(e+" is not observable")}static of(...e){const t="function"===typeof this?this:z;return new t((t=>{b((()=>{if(!t.closed){for(const r of e)if(t.next(r),t.closed)return;t.complete()}}))}))}static get[l](){return this}}s()&&Object.defineProperty(z,Symbol("extensions"),{value:{symbol:u,hostReportError:h},configurable:!0});const j=z;function M(e){"function"===typeof e?e():e&&"function"===typeof e.unsubscribe&&e.unsubscribe()}const T=M;var O=function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function i(e){try{a(n.next(e))}catch(t){s(t)}}function c(e){try{a(n["throw"](e))}catch(t){s(t)}}function a(e){e.done?r(e.value):o(e.value).then(i,c)}a((n=n.apply(e,t||[])).next())}))};function S(e){return t=>new j((r=>{const n=new o(r),s=t.subscribe({complete(){n.complete()},error(e){n.error(e)},next(t){n.schedule((r=>O(this,void 0,void 0,(function*(){(yield e(t))&&r(t)}))))}});return()=>T(s)}))}const P=S;function k(e){return e&&i("asyncIterator")&&e[Symbol.asyncIterator]}function E(e){return e&&i("iterator")&&e[Symbol.iterator]}var $=function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function i(e){try{a(n.next(e))}catch(t){s(t)}}function c(e){try{a(n["throw"](e))}catch(t){s(t)}}function a(e){e.done?r(e.value):o(e.value).then(i,c)}a((n=n.apply(e,t||[])).next())}))},A=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e="function"===typeof __values?__values(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,s){t=e[r](t),o(n,s,t.done,t.value)}))}}function o(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}};function W(e){return t=>new j((r=>{const n=new o(r),s=t.subscribe({complete(){n.complete()},error(e){n.error(e)},next(t){n.schedule((r=>$(this,void 0,void 0,(function*(){var n,o;const s=yield e(t);if(E(s)||k(s))try{for(var i,c=A(s);i=yield c.next(),!i.done;){const e=i.value;r(e)}}catch(a){n={error:a}}finally{try{i&&!i.done&&(o=c.return)&&(yield o.call(c))}finally{if(n)throw n.error}}else s.map((e=>r(e)))}))))}});return()=>T(s)}))}const R=W;function I(e){return new z((t=>{let r=0;const n=setInterval((()=>{t.next(r++)}),e);return()=>clearInterval(n)}))}var C=function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function i(e){try{a(n.next(e))}catch(t){s(t)}}function c(e){try{a(n["throw"](e))}catch(t){s(t)}}function a(e){e.done?r(e.value):o(e.value).then(i,c)}a((n=n.apply(e,t||[])).next())}))};function G(e){return t=>new j((r=>{const n=new o(r),s=t.subscribe({complete(){n.complete()},error(e){n.error(e)},next(t){n.schedule((r=>C(this,void 0,void 0,(function*(){const n=yield e(t);r(n)}))))}});return()=>T(s)}))}const q=G;function D(...e){return 0===e.length?z.from([]):new z((t=>{let r=0;const n=e.map((n=>n.subscribe({error(e){t.error(e),o()},next(e){t.next(e)},complete(){++r===e.length&&(t.complete(),o())}}))),o=()=>{n.forEach((e=>T(e)))};return o}))}const L=D;class F extends j{constructor(){super((e=>(this._observers.add(e),()=>this._observers.delete(e)))),this._observers=new Set}next(e){for(const t of this._observers)t.next(e)}error(e){for(const t of this._observers)t.error(e)}complete(){for(const e of this._observers)e.complete()}}const N=F;function Q(e){const t=new N;let r,n=0;return new j((o=>{r||(r=e.subscribe(t));const s=t.subscribe(o);return n++,()=>{n--,s.unsubscribe(),0===n&&(T(r),r=void 0)}}))}const U=Q;var B=function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function i(e){try{a(n.next(e))}catch(t){s(t)}}function c(e){try{a(n["throw"](e))}catch(t){s(t)}}function a(e){e.done?r(e.value):o(e.value).then(i,c)}a((n=n.apply(e,t||[])).next())}))};function H(e,t){return r=>new j((n=>{let s,i=0;const c=new o(n),a=r.subscribe({complete(){c.complete()},error(e){c.error(e)},next(r){c.schedule((n=>B(this,void 0,void 0,(function*(){const o=0===i?"undefined"===typeof t?r:t:s;s=yield e(o,r,i++),n(s)}))))}});return()=>T(a)}))}const J=H},22467:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.serialize=t.deserialize=t.registerSerializer=void 0;const n=r(37381);let o=n.DefaultSerializer;function s(e){o=n.extendSerializer(o,e)}function i(e){return o.deserialize(e)}function c(e){return o.serialize(e)}t.registerSerializer=s,t.deserialize=i,t.serialize=c},50978:(e,t,r)=>{t.xQ=t.y$=void 0;const n=r(52511);Object.defineProperty(t,"y$",{enumerable:!0,get:function(){return n.Observable}});const o=Symbol("observers");class s extends n.Observable{constructor(){super((e=>{this[o]=[...this[o]||[],e];const t=()=>{this[o]=this[o].filter((t=>t!==e))};return t})),this[o]=[]}complete(){this[o].forEach((e=>e.complete()))}error(e){this[o].forEach((t=>t.error(e)))}next(e){this[o].forEach((t=>t.next(e)))}}t.xQ=s},37381:(e,t)=>{function r(e,t){const r=e.deserialize.bind(e),n=e.serialize.bind(e);return{deserialize(e){return t.deserialize(e,r)},serialize(e){return t.serialize(e,n)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultSerializer=t.extendSerializer=void 0,t.extendSerializer=r;const n={deserialize(e){return Object.assign(Error(e.message),{name:e.name,stack:e.stack})},serialize(e){return{__error_marker:"$$error",message:e.message,name:e.name,stack:e.stack}}},o=e=>e&&"object"===typeof e&&"__error_marker"in e&&"$$error"===e.__error_marker;t.DefaultSerializer={deserialize(e){return o(e)?n.deserialize(e):e},serialize(e){return e instanceof Error?n.serialize(e):e}}},8258:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.$worker=t.$transferable=t.$terminate=t.$events=t.$errors=void 0,t.$errors=Symbol("thread.errors"),t.$events=Symbol("thread.events"),t.$terminate=Symbol("thread.terminate"),t.$transferable=Symbol("thread.transferable"),t.$worker=Symbol("thread.worker")},88180:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Transfer=t.isTransferDescriptor=void 0;const n=r(8258);function o(e){return!(!e||"object"!==typeof e)}function s(e){return e&&"object"===typeof e&&e[n.$transferable]}function i(e,t){if(!t){if(!o(e))throw Error();t=[e]}return{[n.$transferable]:!0,send:e,transferables:t}}t.isTransferDescriptor=s,t.Transfer=i},43229:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WorkerMessageType=t.MasterMessageType=void 0,function(e){e["cancel"]="cancel",e["run"]="run"}(t.MasterMessageType||(t.MasterMessageType={})),function(e){e["error"]="error",e["init"]="init",e["result"]="result",e["running"]="running",e["uncaughtError"]="uncaughtError"}(t.WorkerMessageType||(t.WorkerMessageType={}))},3447:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=function(){const e="undefined"!==typeof self&&"undefined"!==typeof Window&&self instanceof Window;return!("undefined"===typeof self||!self.postMessage||e)},n=function(e,t){self.postMessage(e,t)},o=function(e){const t=t=>{e(t.data)},r=()=>{self.removeEventListener("message",t)};return self.addEventListener("message",t),r};t["default"]={isWorkerRuntime:r,postMessageToMaster:n,subscribeToMasterMessages:o}},11934:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function i(e){try{a(n.next(e))}catch(t){s(t)}}function c(e){try{a(n["throw"](e))}catch(t){s(t)}}function a(e){e.done?r(e.value):o(e.value).then(i,c)}a((n=n.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.expose=t.isWorkerRuntime=t.Transfer=t.registerSerializer=void 0;const s=o(r(6898)),i=r(22467),c=r(88180),a=r(43229),u=o(r(3447));var l=r(22467);Object.defineProperty(t,"registerSerializer",{enumerable:!0,get:function(){return l.registerSerializer}});var f=r(88180);Object.defineProperty(t,"Transfer",{enumerable:!0,get:function(){return f.Transfer}}),t.isWorkerRuntime=u.default.isWorkerRuntime;let p=!1;const d=new Map,h=e=>e&&e.type===a.MasterMessageType.cancel,b=e=>e&&e.type===a.MasterMessageType.run,y=e=>s.default(e)||v(e);function v(e){return e&&"object"===typeof e&&"function"===typeof e.subscribe}function m(e){return c.isTransferDescriptor(e)?{payload:e.send,transferables:e.transferables}:{payload:e,transferables:void 0}}function _(){const e={type:a.WorkerMessageType.init,exposed:{type:"function"}};u.default.postMessageToMaster(e)}function g(e){const t={type:a.WorkerMessageType.init,exposed:{type:"module",methods:e}};u.default.postMessageToMaster(t)}function w(e,t){const{payload:r,transferables:n}=m(t),o={type:a.WorkerMessageType.error,uid:e,error:i.serialize(r)};u.default.postMessageToMaster(o,n)}function x(e,t,r){const{payload:n,transferables:o}=m(r),s={type:a.WorkerMessageType.result,uid:e,complete:!!t||void 0,payload:n};u.default.postMessageToMaster(s,o)}function z(e,t){const r={type:a.WorkerMessageType.running,uid:e,resultType:t};u.default.postMessageToMaster(r)}function j(e){try{const t={type:a.WorkerMessageType.uncaughtError,error:i.serialize(e)};u.default.postMessageToMaster(t)}catch(t){console.error("Not reporting uncaught error back to master thread as it occured while reporting an uncaught error already.\nLatest error:",t,"\nOriginal error:",e)}}function M(e,t,r){return n(this,void 0,void 0,(function*(){let n;try{n=t(...r)}catch(s){return w(e,s)}const o=y(n)?"observable":"promise";if(z(e,o),y(n)){const t=n.subscribe((t=>x(e,!1,i.serialize(t))),(t=>{w(e,i.serialize(t)),d.delete(e)}),(()=>{x(e,!0),d.delete(e)}));d.set(e,t)}else try{const t=yield n;x(e,!0,i.serialize(t))}catch(s){w(e,i.serialize(s))}}))}function T(e){if(!u.default.isWorkerRuntime())throw Error("expose() called in the master thread.");if(p)throw Error("expose() called more than once. This is not possible. Pass an object to expose() if you want to expose multiple functions.");if(p=!0,"function"===typeof e)u.default.subscribeToMasterMessages((t=>{b(t)&&!t.method&&M(t.uid,e,t.args.map(i.deserialize))})),_();else{if("object"!==typeof e||!e)throw Error(`Invalid argument passed to expose(). Expected a function or an object, got: ${e}`);{u.default.subscribeToMasterMessages((t=>{b(t)&&t.method&&M(t.uid,e[t.method],t.args.map(i.deserialize))}));const t=Object.keys(e).filter((t=>"function"===typeof e[t]));g(t)}}u.default.subscribeToMasterMessages((e=>{if(h(e)){const t=e.uid,r=d.get(t);r&&(r.unsubscribe(),d.delete(t))}}))}t.expose=T,"undefined"!==typeof self&&"function"===typeof self.addEventListener&&u.default.isWorkerRuntime()&&(self.addEventListener("error",(e=>{setTimeout((()=>j(e.error||e)),250)})),self.addEventListener("unhandledrejection",(e=>{const t=e.reason;t&&"string"===typeof t.message&&setTimeout((()=>j(t)),250)}))),"undefined"!==typeof process&&"function"===typeof process.on&&u.default.isWorkerRuntime()&&(process.on("uncaughtException",(e=>{setTimeout((()=>j(e)),250)})),process.on("unhandledRejection",(e=>{e&&"string"===typeof e.message&&setTimeout((()=>j(e)),250)})))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})();(()=>{var e=r(11934);const t=e.expose;e.registerSerializer,e.Transfer;var n,o;(function(e){e["Clockwise"]="clockwise",e["CounterClockwise"]="counter-clockwise"})(n||(n={})),function(e){e["Relative"]="relative",e["Absolute"]="absolute"}(o||(o={}));var s=Array.isArray;const i=s;var c="object"==typeof global&&global&&global.Object===Object&&global;const a=c;var u="object"==typeof self&&self&&self.Object===Object&&self,l=a||u||Function("return this")();const f=l;var p=f.Symbol;const d=p;var h=Object.prototype,b=h.hasOwnProperty,y=h.toString,v=d?d.toStringTag:void 0;function m(e){var t=b.call(e,v),r=e[v];try{e[v]=void 0;var n=!0}catch(s){}var o=y.call(e);return n&&(t?e[v]=r:delete e[v]),o}const _=m;var g=Object.prototype,w=g.toString;function x(e){return w.call(e)}const z=x;var j="[object Null]",M="[object Undefined]",T=d?d.toStringTag:void 0;function O(e){return null==e?void 0===e?M:j:T&&T in Object(e)?_(e):z(e)}const S=O;function P(e){return null!=e&&"object"==typeof e}const k=P;var E="[object Symbol]";function $(e){return"symbol"==typeof e||k(e)&&S(e)==E}const A=$;var W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,R=/^\w*$/;function I(e,t){if(i(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!A(e))||(R.test(e)||!W.test(e)||null!=t&&e in Object(t))}const C=I;function G(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}const q=G;var D="[object AsyncFunction]",L="[object Function]",F="[object GeneratorFunction]",N="[object Proxy]";function Q(e){if(!q(e))return!1;var t=S(e);return t==L||t==F||t==D||t==N}const U=Q;var B=f["__core-js_shared__"];const H=B;var J=function(){var e=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function K(e){return!!J&&J in e}const V=K;var X=Function.prototype,Y=X.toString;function Z(e){if(null!=e){try{return Y.call(e)}catch(t){}try{return e+""}catch(t){}}return""}const ee=Z;var te=/[\\^$.*+?()[\]{}|]/g,re=/^\[object .+?Constructor\]$/,ne=Function.prototype,oe=Object.prototype,se=ne.toString,ie=oe.hasOwnProperty,ce=RegExp("^"+se.call(ie).replace(te,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ae(e){if(!q(e)||V(e))return!1;var t=U(e)?ce:re;return t.test(ee(e))}const ue=ae;function le(e,t){return null==e?void 0:e[t]}const fe=le;function pe(e,t){var r=fe(e,t);return ue(r)?r:void 0}const de=pe;var he=de(Object,"create");const be=he;function ye(){this.__data__=be?be(null):{},this.size=0}const ve=ye;function me(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}const _e=me;var ge="__lodash_hash_undefined__",we=Object.prototype,xe=we.hasOwnProperty;function ze(e){var t=this.__data__;if(be){var r=t[e];return r===ge?void 0:r}return xe.call(t,e)?t[e]:void 0}const je=ze;var Me=Object.prototype,Te=Me.hasOwnProperty;function Oe(e){var t=this.__data__;return be?void 0!==t[e]:Te.call(t,e)}const Se=Oe;var Pe="__lodash_hash_undefined__";function ke(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=be&&void 0===t?Pe:t,this}const Ee=ke;function $e(e){var t=-1,r=null==e?0:e.length;this.clear();while(++t<r){var n=e[t];this.set(n[0],n[1])}}$e.prototype.clear=ve,$e.prototype["delete"]=_e,$e.prototype.get=je,$e.prototype.has=Se,$e.prototype.set=Ee;const Ae=$e;function We(){this.__data__=[],this.size=0}const Re=We;function Ie(e,t){return e===t||e!==e&&t!==t}const Ce=Ie;function Ge(e,t){var r=e.length;while(r--)if(Ce(e[r][0],t))return r;return-1}const qe=Ge;var De=Array.prototype,Le=De.splice;function Fe(e){var t=this.__data__,r=qe(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Le.call(t,r,1),--this.size,!0}const Ne=Fe;function Qe(e){var t=this.__data__,r=qe(t,e);return r<0?void 0:t[r][1]}const Ue=Qe;function Be(e){return qe(this.__data__,e)>-1}const He=Be;function Je(e,t){var r=this.__data__,n=qe(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}const Ke=Je;function Ve(e){var t=-1,r=null==e?0:e.length;this.clear();while(++t<r){var n=e[t];this.set(n[0],n[1])}}Ve.prototype.clear=Re,Ve.prototype["delete"]=Ne,Ve.prototype.get=Ue,Ve.prototype.has=He,Ve.prototype.set=Ke;const Xe=Ve;var Ye=de(f,"Map");const Ze=Ye;function et(){this.size=0,this.__data__={hash:new Ae,map:new(Ze||Xe),string:new Ae}}const tt=et;function rt(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}const nt=rt;function ot(e,t){var r=e.__data__;return nt(t)?r["string"==typeof t?"string":"hash"]:r.map}const st=ot;function it(e){var t=st(this,e)["delete"](e);return this.size-=t?1:0,t}const ct=it;function at(e){return st(this,e).get(e)}const ut=at;function lt(e){return st(this,e).has(e)}const ft=lt;function pt(e,t){var r=st(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}const dt=pt;function ht(e){var t=-1,r=null==e?0:e.length;this.clear();while(++t<r){var n=e[t];this.set(n[0],n[1])}}ht.prototype.clear=tt,ht.prototype["delete"]=ct,ht.prototype.get=ut,ht.prototype.has=ft,ht.prototype.set=dt;const bt=ht;var yt="Expected a function";function vt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(yt);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],s=r.cache;if(s.has(o))return s.get(o);var i=e.apply(this,n);return r.cache=s.set(o,i)||s,i};return r.cache=new(vt.Cache||bt),r}vt.Cache=bt;const mt=vt;var _t=500;function gt(e){var t=mt(e,(function(e){return r.size===_t&&r.clear(),e})),r=t.cache;return t}const wt=gt;var xt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zt=/\\(\\)?/g,jt=wt((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(xt,(function(e,r,n,o){t.push(n?o.replace(zt,"$1"):r||e)})),t}));const Mt=jt;function Tt(e,t){var r=-1,n=null==e?0:e.length,o=Array(n);while(++r<n)o[r]=t(e[r],r,e);return o}const Ot=Tt;var St=1/0,Pt=d?d.prototype:void 0,kt=Pt?Pt.toString:void 0;function Et(e){if("string"==typeof e)return e;if(i(e))return Ot(e,Et)+"";if(A(e))return kt?kt.call(e):"";var t=e+"";return"0"==t&&1/e==-St?"-0":t}const $t=Et;function At(e){return null==e?"":$t(e)}const Wt=At;function Rt(e,t){return i(e)?e:C(e,t)?[e]:Mt(Wt(e))}const It=Rt;var Ct=1/0;function Gt(e){if("string"==typeof e||A(e))return e;var t=e+"";return"0"==t&&1/e==-Ct?"-0":t}const qt=Gt;function Dt(e,t){t=It(t,e);var r=0,n=t.length;while(null!=e&&r<n)e=e[qt(t[r++])];return r&&r==n?e:void 0}const Lt=Dt;var Ft=function(){try{var e=de(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();const Nt=Ft;function Qt(e,t,r){"__proto__"==t&&Nt?Nt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}const Ut=Qt;var Bt=Object.prototype,Ht=Bt.hasOwnProperty;function Jt(e,t,r){var n=e[t];Ht.call(e,t)&&Ce(n,r)&&(void 0!==r||t in e)||Ut(e,t,r)}const Kt=Jt;var Vt=9007199254740991,Xt=/^(?:0|[1-9]\d*)$/;function Yt(e,t){var r=typeof e;return t=null==t?Vt:t,!!t&&("number"==r||"symbol"!=r&&Xt.test(e))&&e>-1&&e%1==0&&e<t}const Zt=Yt;function er(e,t,r,n){if(!q(e))return e;t=It(t,e);var o=-1,s=t.length,i=s-1,c=e;while(null!=c&&++o<s){var a=qt(t[o]),u=r;if("__proto__"===a||"constructor"===a||"prototype"===a)return e;if(o!=i){var l=c[a];u=n?n(l,a,c):void 0,void 0===u&&(u=q(l)?l:Zt(t[o+1])?[]:{})}Kt(c,a,u),c=c[a]}return e}const tr=er;function rr(e,t,r){var n=-1,o=t.length,s={};while(++n<o){var i=t[n],c=Lt(e,i);r(c,i)&&tr(s,It(i,e),c)}return s}const nr=rr;function or(e,t){return null!=e&&t in Object(e)}const sr=or;var ir="[object Arguments]";function cr(e){return k(e)&&S(e)==ir}const ar=cr;var ur=Object.prototype,lr=ur.hasOwnProperty,fr=ur.propertyIsEnumerable,pr=ar(function(){return arguments}())?ar:function(e){return k(e)&&lr.call(e,"callee")&&!fr.call(e,"callee")};const dr=pr;var hr=9007199254740991;function br(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=hr}const yr=br;function vr(e,t,r){t=It(t,e);var n=-1,o=t.length,s=!1;while(++n<o){var c=qt(t[n]);if(!(s=null!=e&&r(e,c)))break;e=e[c]}return s||++n!=o?s:(o=null==e?0:e.length,!!o&&yr(o)&&Zt(c,o)&&(i(e)||dr(e)))}const mr=vr;function _r(e,t){return null!=e&&mr(e,t,sr)}const gr=_r;function wr(e,t){return nr(e,t,(function(t,r){return gr(e,r)}))}const xr=wr;function zr(e,t){var r=-1,n=t.length,o=e.length;while(++r<n)e[o+r]=t[r];return e}const jr=zr;var Mr=d?d.isConcatSpreadable:void 0;function Tr(e){return i(e)||dr(e)||!!(Mr&&e&&e[Mr])}const Or=Tr;function Sr(e,t,r,n,o){var s=-1,i=e.length;r||(r=Or),o||(o=[]);while(++s<i){var c=e[s];t>0&&r(c)?t>1?Sr(c,t-1,r,n,o):jr(o,c):n||(o[o.length]=c)}return o}const Pr=Sr;function kr(e){var t=null==e?0:e.length;return t?Pr(e,1):[]}const Er=kr;function $r(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}const Ar=$r;var Wr=Math.max;function Rr(e,t,r){return t=Wr(void 0===t?e.length-1:t,0),function(){var n=arguments,o=-1,s=Wr(n.length-t,0),i=Array(s);while(++o<s)i[o]=n[t+o];o=-1;var c=Array(t+1);while(++o<t)c[o]=n[o];return c[t]=r(i),Ar(e,this,c)}}const Ir=Rr;function Cr(e){return function(){return e}}const Gr=Cr;function qr(e){return e}const Dr=qr;var Lr=Nt?function(e,t){return Nt(e,"toString",{configurable:!0,enumerable:!1,value:Gr(t),writable:!0})}:Dr;const Fr=Lr;var Nr=800,Qr=16,Ur=Date.now;function Br(e){var t=0,r=0;return function(){var n=Ur(),o=Qr-(n-r);if(r=n,o>0){if(++t>=Nr)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}const Hr=Br;var Jr=Hr(Fr);const Kr=Jr;function Vr(e){return Kr(Ir(e,void 0,Er),e+"")}const Xr=Vr;var Yr=Xr((function(e,t){return null==e?{}:xr(e,t)}));const Zr=Yr;function en(e){const[,t,r=""]=e.trim().split(";",2)[0].split(/^([a-z][0-9]+)\s+/i);if(!/^(G|M)\d+$/.test(t))return null;const n={};for(const[,o,s]of r.matchAll(/([a-z])[ \t]*(-?(?:\d+(?:\.\d+)?|\.\d+))/gi))n[o.toLowerCase()]=Number(s);return{command:t.toUpperCase(),args:n}}function tn(e,t){var r,s,i,c,a,u,l,f,p,d,h;const b=[],y=e.split("\n");let v=o.Relative,m=o.Absolute;const _={x:0,y:0,z:0,e:0,filePosition:0},g={length:1,extrudeExtra:0,z:0};for(let w=0;w<y.length;w++){const{command:e,args:x}=null!==(r=en(y[w]))&&void 0!==r?r:{};if(!e){_.filePosition+=y[w].length+1;continue}let z=null;switch(e){case"G0":case"G1":z=Zr(x,["x","y","z","e"]);break;case"G2":case"G3":z={...Zr(x,["x","y","z","e","i","j","r"]),direction:"G2"===e?n.Clockwise:n.CounterClockwise};break;case"G10":z={e:-g.length},0!==g.z&&(z.z=_.z+g.z);break;case"G11":z={e:g.length+g.extrudeExtra},0!==g.z&&(z.z=_.z-g.z);break;case"G90":m=o.Absolute;case"M82":v=o.Absolute,_.e=0;break;case"G91":m=o.Relative;case"M83":v=o.Relative;break;case"G92":v===o.Absolute&&(_.e=null!==(s=x.e)&&void 0!==s?s:_.e),m===o.Absolute&&(_.x=null!==(i=x.x)&&void 0!==i?i:_.x,_.y=null!==(c=x.y)&&void 0!==c?c:_.y,_.z=null!==(a=x.z)&&void 0!==a?a:_.z);break;case"M207":g.length=null!==(u=x.s)&&void 0!==u?u:g.length,g.extrudeExtra=null!==(l=x.s)&&void 0!==l?l:g.extrudeExtra,g.z=null!==(f=x.z)&&void 0!==f?f:g.z;break}if(z){if(v===o.Absolute&&void 0!==z.e){const e=z.e-_.e;_.e=z.e,z.e=e}m===o.Relative&&(void 0!==z.x&&(z.x+=_.x),void 0!==z.y&&(z.y+=_.y),void 0!==z.z&&(z.z+=_.z)),_.x=null!==(p=z.x)&&void 0!==p?p:_.x,_.y=null!==(d=z.y)&&void 0!==d?d:_.y,_.z=null!==(h=z.z)&&void 0!==h?h:_.z,z.filePosition=_.filePosition,b.push(Object.freeze(z))}w%Math.floor(y.length/100)===0&&t.next(_.filePosition),_.filePosition+=y[w].length+1}return t.next(_.filePosition),b}var rn=r(50978);const nn=rn.y$,on=rn.xQ;let sn=new on;t({parse(e){const t=tn(e,sn);return sn.complete(),sn=new on,t},progress(){return nn.from(sn)}})})()})();
//# sourceMappingURL=590.1ea2690e.js.map