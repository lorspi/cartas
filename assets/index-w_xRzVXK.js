const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-ByDBuZEu.js","assets/markdown-vbR1zjGP.js","assets/LetterList-BCvQ21UE.js","assets/readingProgress-CfK38Avk.js","assets/arrow-right-CDi_eV59.js","assets/react-C46pKI1t.js","assets/ArchiveView-BRKcVfZ7.js","assets/LetterDetailView-CvaC7tuU.js","assets/arrow-left-C1T_PhNb.js","assets/AboutView-DmmWb3t-.js"])))=>i.map(i=>d[i]);
import{r as $0,a as te,j as M}from"./markdown-vbR1zjGP.js";import{r as I0}from"./react-C46pKI1t.js";(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))v(E);new MutationObserver(E=>{for(const S of E)if(S.type==="childList")for(const C of S.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&v(C)}).observe(document,{childList:!0,subtree:!0});function A(E){const S={};return E.integrity&&(S.integrity=E.integrity),E.referrerPolicy&&(S.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?S.credentials="include":E.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function v(E){if(E.ep)return;E.ep=!0;const S=A(E);fetch(E.href,S)}})();var br={exports:{}},It={},gr={exports:{}},yr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function P0(){return Jm||(Jm=1,(function(p){function z(N,G){var R=N.length;N.push(G);e:for(;0<R;){var ve=R-1>>>1,oe=N[ve];if(0<E(oe,G))N[ve]=G,N[R]=oe,R=ve;else break e}}function A(N){return N.length===0?null:N[0]}function v(N){if(N.length===0)return null;var G=N[0],R=N.pop();if(R!==G){N[0]=R;e:for(var ve=0,oe=N.length,tn=oe>>>1;ve<tn;){var cl=2*(ve+1)-1,at=N[cl],pa=cl+1,rl=N[pa];if(0>E(at,R))pa<oe&&0>E(rl,at)?(N[ve]=rl,N[pa]=R,ve=pa):(N[ve]=at,N[cl]=R,ve=cl);else if(pa<oe&&0>E(rl,R))N[ve]=rl,N[pa]=R,ve=pa;else break e}}return G}function E(N,G){var R=N.sortIndex-G.sortIndex;return R!==0?R:N.id-G.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;p.unstable_now=function(){return S.now()}}else{var C=Date,H=C.now();p.unstable_now=function(){return C.now()-H}}var Y=[],$=[],qe=1,L=null,x=3,ba=!1,ie=!1,ga=!1,w=!1,ia=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;function re(N){for(var G=A($);G!==null;){if(G.callback===null)v($);else if(G.startTime<=N)v($),G.sortIndex=G.expirationTime,z(Y,G);else break;G=A($)}}function ya(N){if(ga=!1,re(N),!ie)if(A(Y)!==null)ie=!0,Aa||(Aa=!0,La());else{var G=A($);G!==null&&Xe(ya,G.startTime-N)}}var Aa=!1,W=-1,au=5,Yn=-1;function ln(){return w?!0:!(p.unstable_now()-Yn<au)}function Oa(){if(w=!1,Aa){var N=p.unstable_now();Yn=N;var G=!0;try{e:{ie=!1,ga&&(ga=!1,T(W),W=-1),ba=!0;var R=x;try{a:{for(re(N),L=A(Y);L!==null&&!(L.expirationTime>N&&ln());){var ve=L.callback;if(typeof ve=="function"){L.callback=null,x=L.priorityLevel;var oe=ve(L.expirationTime<=N);if(N=p.unstable_now(),typeof oe=="function"){L.callback=oe,re(N),G=!0;break a}L===A(Y)&&v(Y),re(N)}else v(Y);L=A(Y)}if(L!==null)G=!0;else{var tn=A($);tn!==null&&Xe(ya,tn.startTime-N),G=!1}}break e}finally{L=null,x=R,ba=!1}G=void 0}}finally{G?La():Aa=!1}}}var La;if(typeof me=="function")La=function(){me(Oa)};else if(typeof MessageChannel<"u"){var ol=new MessageChannel,nu=ol.port2;ol.port1.onmessage=Oa,La=function(){nu.postMessage(null)}}else La=function(){ia(Oa,0)};function Xe(N,G){W=ia(function(){N(p.unstable_now())},G)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(N){N.callback=null},p.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):au=0<N?Math.floor(1e3/N):5},p.unstable_getCurrentPriorityLevel=function(){return x},p.unstable_next=function(N){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var R=x;x=G;try{return N()}finally{x=R}},p.unstable_requestPaint=function(){w=!0},p.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=x;x=N;try{return G()}finally{x=R}},p.unstable_scheduleCallback=function(N,G,R){var ve=p.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ve+R:ve):R=ve,N){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=R+oe,N={id:qe++,callback:G,priorityLevel:N,startTime:R,expirationTime:oe,sortIndex:-1},R>ve?(N.sortIndex=R,z($,N),A(Y)===null&&N===A($)&&(ga?(T(W),W=-1):ga=!0,Xe(ya,R-ve))):(N.sortIndex=oe,z(Y,N),ie||ba||(ie=!0,Aa||(Aa=!0,La()))),N},p.unstable_shouldYield=ln,p.unstable_wrapCallback=function(N){var G=x;return function(){var R=x;x=G;try{return N.apply(this,arguments)}finally{x=R}}}})(yr)),yr}var Km;function eb(){return Km||(Km=1,gr.exports=P0()),gr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function ab(){if(wm)return It;wm=1;var p=eb(),z=$0(),A=I0();function v(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function S(e){for(var a=e,n=a;n&&!n.alternate;)a=n,(a.flags&4098)!==0&&(e=a.return),n=a.return;for(;a.return;)a=a.return;return a.tag===3?e:null}function C(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function H(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function Y(e){if(S(e)!==e)throw Error(v(188))}function $(e){var a=e.alternate;if(!a){if(a=S(e),a===null)throw Error(v(188));return a!==e?null:e}for(var n=e,l=a;;){var t=n.return;if(t===null)break;var u=t.alternate;if(u===null){if(l=t.return,l!==null){n=l;continue}break}if(t.child===u.child){for(u=t.child;u;){if(u===n)return Y(t),e;if(u===l)return Y(t),a;u=u.sibling}throw Error(v(188))}if(n.return!==l.return)n=t,l=u;else{for(var i=!1,o=t.child;o;){if(o===n){i=!0,n=t,l=u;break}if(o===l){i=!0,l=t,n=u;break}o=o.sibling}if(!i){for(o=u.child;o;){if(o===n){i=!0,n=u,l=t;break}if(o===l){i=!0,l=u,n=t;break}o=o.sibling}if(!i)throw Error(v(189))}}if(n.alternate!==l)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:a}function qe(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=qe(e),a!==null)return a;e=e.sibling}return null}function L(e,a,n,l,t,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,l,t,u)||(e.tag!==22||e.memoizedState===null)&&(a||e.tag!==5&&e.tag!==27)&&L(e.child,a,n,l,t,u))return!0;e=e.sibling}return!1}function x(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function ba(e){var a=!1;for(e=e.return;e!==null&&(e.tag===4&&(a=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return a}function ie(e){var a=[null,null],n=x(e);return n===null||ga(a,e,n.child,{foundSelf:!1}),a}function ga(e,a,n,l){for(;n!==null;){if(n===a)l.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(l.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ga(e,a,n.child,l))return!0;n=n.sibling}return!1}function w(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(v(559))}}var ia=null,T=null;function me(e,a,n){return e===n?!0:e===a?(ia=e,!0):!1}function re(e,a,n){return e===n?(T=e,!1):e===a?(T!==null&&(ia=e),!0):!1}function ya(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Aa(e,a,n){for(var l=0,t=e;t;t=n(t))l++;t=0;for(var u=a;u;u=n(u))t++;for(;0<l-t;)e=n(e),l--;for(;0<t-l;)a=n(a),t--;for(;l--;){if(e===a||a!==null&&e===a.alternate)return e;e=n(e),a=n(a)}return null}var W=Object.assign,au=Symbol.for("react.element"),Yn=Symbol.for("react.transitional.element"),ln=Symbol.for("react.portal"),Oa=Symbol.for("react.fragment"),La=Symbol.for("react.strict_mode"),ol=Symbol.for("react.profiler"),nu=Symbol.for("react.consumer"),Xe=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),tn=Symbol.for("react.activity"),cl=Symbol.for("react.legacy_hidden"),at=Symbol.for("react.memo_cache_sentinel"),pa=Symbol.for("react.view_transition"),rl=Symbol.for("react.recoverable"),pr=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=pr&&e[pr]||e["@@iterator"],typeof e=="function"?e:null)}var ev=Symbol.for("react.client.reference");function Ci(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ev?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Oa:return"Fragment";case ol:return"Profiler";case La:return"StrictMode";case G:return"Suspense";case R:return"SuspenseList";case tn:return"Activity";case pa:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ln:return"Portal";case Xe:return e.displayName||"Context";case nu:return(e._context.displayName||"Context")+".Consumer";case N:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ve:return a=e.displayName||null,a!==null?a:Ci(e.type)||"Memo";case oe:a=e._payload,e=e._init;try{return Ci(e(a))}catch{}}return null}var lt=Array.isArray,j=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Hn={pending:!1,data:null,method:null,action:null},ji=[],sl=-1;function Da(e){return{current:e}}function Me(e){0>sl||(e.current=ji[sl],ji[sl]=null,sl--)}function se(e,a){sl++,ji[sl]=e.current,e.current=a}var _a=Da(null),tt=Da(null),un=Da(null),lu=Da(null);function tu(e,a){switch(se(un,a),se(tt,e),se(_a,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?em(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=em(a),e=am(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Me(_a),se(_a,e)}function fl(){Me(_a),Me(tt),Me(un)}function Yi(e){var a=e.memoizedState;a!==null&&(Il._currentValue=a.memoizedState,se(lu,e)),a=_a.current;var n=am(a,e.type);a!==n&&(se(tt,e),se(_a,n))}function uu(e){tt.current===e&&(Me(_a),Me(tt)),lu.current===e&&(Me(lu),Il._currentValue=Hn)}var Hi,qr;function on(e){if(Hi===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);Hi=a&&a[1]||"",qr=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hi+e+qr}var Ri=!1;function Bi(e,a){if(!e||Ri)return"";Ri=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var y=function(){throw Error()};if(Object.defineProperty(y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(y,[])}catch(q){var s=q}Reflect.construct(e,[],y)}else{try{y.call()}catch(q){s=q}y=!1;try{var h=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),y=!0,new e}finally{y&&(h!==void 0?Object.defineProperty(e.prototype,"props",h):delete e.prototype.props)}}}else{try{throw Error()}catch(q){s=q}(y=e())&&typeof y.catch=="function"&&y.catch(function(){})}}catch(q){if(q&&s&&typeof q.stack=="string")return[q.stack,s.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var t=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");t&&t.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),i=u[0],o=u[1];if(i&&o){var c=i.split(`
`),d=o.split(`
`);for(t=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;t<d.length&&!d[t].includes("DetermineComponentFrameRoot");)t++;if(l===c.length||t===d.length)for(l=c.length-1,t=d.length-1;1<=l&&0<=t&&c[l]!==d[t];)t--;for(;1<=l&&0<=t;l--,t--)if(c[l]!==d[t]){if(l!==1||t!==1)do if(l--,t--,0>t||c[l]!==d[t]){var b=`
`+c[l].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=l&&0<=t);break}}}finally{Ri=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?on(n):""}function av(e,a){switch(e.tag){case 26:case 27:case 5:return on(e.type);case 16:return on("Lazy");case 13:return e.child!==a&&a!==null?on("Suspense Fallback"):on("Suspense");case 19:return on("SuspenseList");case 0:case 15:return Bi(e.type,!1);case 11:return Bi(e.type.render,!1);case 1:return Bi(e.type,!0);case 31:return on("Activity");case 30:return on("ViewTransition");default:return""}}function Sr(e){try{var a="",n=null;do a+=av(e,n),n=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Qi=Object.prototype.hasOwnProperty,Gi=p.unstable_scheduleCallback,Li=p.unstable_cancelCallback,nv=p.unstable_shouldYield,lv=p.unstable_requestPaint,We=p.unstable_now,tv=p.unstable_getCurrentPriorityLevel,zr=p.unstable_ImmediatePriority,Er=p.unstable_UserBlockingPriority,iu=p.unstable_NormalPriority,uv=p.unstable_LowPriority,Tr=p.unstable_IdlePriority,iv=p.log,ov=p.unstable_setDisableYieldValue,ut=null,Fe=null;function cn(e){if(typeof iv=="function"&&ov(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(ut,e)}catch{}}var $e=Math.clz32?Math.clz32:sv,cv=Math.log,rv=Math.LN2;function sv(e){return e>>>=0,e===0?32:31-(cv(e)/rv|0)|0}var ou=256,cu=262144,ru=4194304;function Rn(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function su(e,a,n){var l=e.pendingLanes;if(l===0)return 0;var t=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~u,l!==0?t=Rn(l):(i&=o,i!==0?t=Rn(i):n||(n=o&~e,n!==0&&(t=Rn(n))))):(o=l&~u,o!==0?t=Rn(o):i!==0?t=Rn(i):n||(n=l&~e,n!==0&&(t=Rn(n)))),t===0?0:a!==0&&a!==t&&(a&u)===0&&(u=t&-t,n=a&-a,u>=n||u===32&&(n&4194048)!==0)?a:t}function it(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Nr(e,a){(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var l=31-$e(n),t=1<<l;a|=e[l],n&=~t}return a}function fv(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(){var e=ru;return ru<<=1,(ru&62914560)===0&&(ru=4194304),e}function Xi(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function ot(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function dv(e,a,n,l,t,u){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,c=e.expirationTimes,d=e.hiddenUpdates;for(n=i&~n;0<n;){var b=31-$e(n),y=1<<b;o[b]=0,c[b]=-1;var s=d[b];if(s!==null)for(d[b]=null,b=0;b<s.length;b++){var h=s[b];h!==null&&(h.lane&=-536870913)}n&=~y}l!==0&&Or(e,l,0),u!==0&&t===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~a))}function Or(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-$e(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Dr(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var l=31-$e(n),t=1<<l;t&a|e[l]&a&&(e[l]|=a),n&=~t}}function _r(e,a){var n=a&-a;return n=(n&42)!==0?1:Vi(n),(n&(e.suspendedLanes|a))!==0?0:n}function Vi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mr(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Bm(e.type))}function xr(e,a){var n=I.p;try{return I.p=e,a()}finally{I.p=n}}var Xa=Math.random().toString(36).slice(2),xe="__reactFiber$"+Xa,Ve="__reactProps$"+Xa,dl="__reactContainer$"+Xa,Ur="__reactEvents$"+Xa,mv="__reactListeners$"+Xa,vv="__reactHandles$"+Xa,Cr="__reactResources$"+Xa,ct="__reactMarker$"+Xa,fu="__reactLoad$"+Xa;function du(e){delete e[xe],delete e[Ve],delete e[mv],delete e[vv]}function Bn(e){var a;if(a=e[xe])return a;for(var n=e.parentNode;n;){if(a=n[dl]||n[xe]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=ym(e);e!==null;){if(n=e[xe])return n;e=ym(e)}return a}e=n,n=e.parentNode}return null}function ml(e){if(e=e[xe]||e[dl]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function rt(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(v(33))}function vl(e){var a=e[Cr];return a||(a=e[Cr]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ae(e){e[ct]=!0}function jr(e){e[fu]=void 0}var Yr=new Set,Hr={};function Qn(e,a){hl(e,a),hl(e+"Capture",a)}function hl(e,a){for(Hr[e]=a,e=0;e<a.length;e++)Yr.add(a[e])}var hv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rr={},Br={};function bv(e){return Qi.call(Br,e)?!0:Qi.call(Rr,e)?!1:hv.test(e)?Br[e]=!0:(Rr[e]=!0,!1)}var F=!1;function Qr(){var e=F;return F=!1,e}function mu(e,a,n){if(bv(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,n)}}function vu(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,n)}}function Va(e,a,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,l)}}function Ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gr(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function gv(e,a,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var t=l.get,u=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return t.call(this)},set:function(i){n=""+i,u.call(this,i)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ji(e){if(!e._valueTracker){var a=Gr(e)?"checked":"value";e._valueTracker=gv(e,a,""+e[a])}}function Lr(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),l="";return e&&(l=Gr(e)?e.checked?"true":"false":e.value),e=l,e!==n?(a.setValue(e),!0):!1}var yv=/[\n"\\]/g;function oa(e){return e.replace(yv,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ki(e,a,n,l,t,u,i,o){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),a!=null?i==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ie(a)):e.value!==""+Ie(a)&&(e.value=""+Ie(a)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),a!=null?i==="number"&&e.value==a?wi(e,Ie(e.value)):wi(e,Ie(a)):n!=null?wi(e,Ie(n)):l!=null&&e.removeAttribute("value"),t==null&&u!=null&&(e.defaultChecked=!!u),t!=null&&(e.checked=t&&typeof t!="function"&&typeof t!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Ie(o):e.removeAttribute("name")}function Xr(e,a,n,l,t,u,i,o){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),a!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||a!=null)){Ji(e);return}n=n!=null?""+Ie(n):"",a=a!=null?""+Ie(a):n,o||a===e.value||(e.value=a),e.defaultValue=a}l=l??t,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Ji(e)}function wi(e,a){e.defaultValue!==""+a&&(e.defaultValue=""+a)}function bl(e,a,n,l){if(e=e.options,a){a={};for(var t=0;t<n.length;t++)a["$"+n[t]]=!0;for(n=0;n<e.length;n++)t=a.hasOwnProperty("$"+e[n].value),e[n].selected!==t&&(e[n].selected=t),t&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Ie(n),a=null,t=0;t<e.length;t++){if(e[t].value===n){e[t].selected=!0,l&&(e[t].defaultSelected=!0);return}a!==null||e[t].disabled||(a=e[t])}a!==null&&(a.selected=!0)}}function Vr(e,a,n){if(a!=null&&(a=""+Ie(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+Ie(n):""}function Zr(e,a,n,l){if(a==null){if(l!=null){if(n!=null)throw Error(v(92));if(lt(l)){if(1<l.length)throw Error(v(93));l=l[0]}n=l}n==null&&(n=""),a=n}n=Ie(a),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Ji(e)}function gl(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var pv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jr(e,a,n){var l=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,n):typeof n!="number"||n===0||pv.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function Kr(e,a,n){if(a!=null&&typeof a!="object")throw Error(v(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="",F=!0);for(var t in a)l=a[t],a.hasOwnProperty(t)&&n[t]!==l&&(Jr(e,t,l),F=!0)}else for(var u in a)a.hasOwnProperty(u)&&Jr(e,u,a[u])}function ki(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hu(e){return Sv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ma(){}var Wi=null;function Fi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,pl=null;function wr(e){var a=ml(e);if(a&&(e=a.stateNode)){var n=e[Ve]||null;e:switch(e=a.stateNode,a.type){case"input":if(Ki(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+oa(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var l=n[a];if(l!==e&&l.form===e.form){var t=l[Ve]||null;if(!t)throw Error(v(90));Ki(l,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name)}}for(a=0;a<n.length;a++)l=n[a],l.form===e.form&&Lr(l)}break e;case"textarea":Vr(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&bl(e,!!n.multiple,a,!1)}}}var $i=!1;function kr(e,a,n){if($i)return e(a,n);$i=!0;try{var l=e(a);return l}finally{if($i=!1,(yl!==null||pl!==null)&&(hi(),yl&&(a=yl,e=pl,pl=yl=null,wr(a),e)))for(a=0;a<e.length;a++)wr(e[a])}}function st(e,a){var n=e.stateNode;if(n===null)return null;var l=n[Ve]||null;if(l===null)return null;n=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,a,typeof n));return n}var Za=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ii=!1;if(Za)try{var ft={};Object.defineProperty(ft,"passive",{get:function(){Ii=!0}}),window.addEventListener("test",ft,ft),window.removeEventListener("test",ft,ft)}catch{Ii=!1}var rn=null,Pi=null,bu=null;function Wr(){if(bu)return bu;var e,a=Pi,n=a.length,l,t="value"in rn?rn.value:rn.textContent,u=t.length;for(e=0;e<n&&a[e]===t[e];e++);var i=n-e;for(l=1;l<=i&&a[n-l]===t[u-l];l++);return bu=t.slice(e,1<l?1-l:void 0)}function gu(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function yu(){return!0}function Fr(){return!1}function Be(e){function a(n,l,t,u,i){this._reactName=n,this._targetInst=t,this.type=l,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(u):u[o]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?yu:Fr,this.isPropagationStopped=Fr,this}return W(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yu)},persist:function(){},isPersistent:yu}),a}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pu=Be(sn),dt=W({},sn,{view:0,detail:0}),zv=Be(dt),eo,ao,mt,qu=W({},dt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mt&&(mt&&e.type==="mousemove"?(eo=e.screenX-mt.screenX,ao=e.screenY-mt.screenY):ao=eo=0,mt=e),eo)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),$r=Be(qu),Ev=W({},qu,{dataTransfer:0}),Tv=Be(Ev),Nv=W({},dt,{relatedTarget:0}),no=Be(Nv),Av=W({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ov=Be(Av),Dv=W({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_v=Be(Dv),Mv=W({},sn,{data:0}),Ir=Be(Mv),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jv(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Cv[e])?!!a[e]:!1}function lo(){return jv}var Yv=W({},dt,{key:function(e){if(e.key){var a=xv[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=gu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lo,charCode:function(e){return e.type==="keypress"?gu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hv=Be(Yv),Rv=W({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pr=Be(Rv),Bv=W({},sn,{submitter:0}),Qv=Be(Bv),Gv=W({},dt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lo}),Lv=Be(Gv),Xv=W({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=Be(Xv),Zv=W({},qu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=Be(Zv),Kv=W({},sn,{newState:0,oldState:0,source:0}),wv=Be(Kv),kv=[9,13,27,32],to=Za&&"CompositionEvent"in window,vt=null;Za&&"documentMode"in document&&(vt=document.documentMode);var Wv=Za&&"TextEvent"in window&&!vt,es=Za&&(!to||vt&&8<vt&&11>=vt),as=" ",ns=!1;function ls(e,a){switch(e){case"keyup":return kv.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ts(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ql=!1;function Fv(e,a){switch(e){case"compositionend":return ts(a);case"keypress":return a.which!==32?null:(ns=!0,as);case"textInput":return e=a.data,e===as&&ns?null:e;default:return null}}function $v(e,a){if(ql)return e==="compositionend"||!to&&ls(e,a)?(e=Wr(),bu=Pi=rn=null,ql=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return es&&a.locale!=="ko"?null:a.data;default:return null}}var Iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function us(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Iv[e.type]:a==="textarea"}function is(e,a,n,l){yl?pl?pl.push(l):pl=[l]:yl=l,a=Si(a,"onChange"),0<a.length&&(n=new pu("onChange","change",null,n,l),e.push({event:n,listeners:a}))}var ht=null,bt=null;function Pv(e){kd(e,0)}function Su(e){var a=rt(e);if(Lr(a))return e}function os(e,a){if(e==="change")return a}var cs=!1;if(Za){var uo;if(Za){var io="oninput"in document;if(!io){var rs=document.createElement("div");rs.setAttribute("oninput","return;"),io=typeof rs.oninput=="function"}uo=io}else uo=!1;cs=uo&&(!document.documentMode||9<document.documentMode)}function ss(){ht&&(ht.detachEvent("onpropertychange",fs),bt=ht=null)}function fs(e){if(e.propertyName==="value"&&Su(bt)){var a=[];is(a,bt,e,Fi(e)),kr(Pv,a)}}function eh(e,a,n){e==="focusin"?(ss(),ht=a,bt=n,ht.attachEvent("onpropertychange",fs)):e==="focusout"&&ss()}function ah(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Su(bt)}function nh(e,a){if(e==="click")return Su(a)}function lh(e,a){if(e==="input"||e==="change")return Su(a)}function th(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Pe=typeof Object.is=="function"?Object.is:th;function gt(e,a){if(Pe(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),l=Object.keys(a);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var t=n[l];if(!Qi.call(a,t)||!Pe(e[t],a[t]))return!1}return!0}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ms(e,a){var n=ds(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=a&&l>=a)return{node:n,offset:a-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ds(n)}}function vs(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?vs(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function hs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=oo(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=oo(e.document)}return a}function co(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var uh=Za&&"documentMode"in document&&11>=document.documentMode,Sl=null,ro=null,yt=null,so=!1;function bs(e,a,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;so||Sl==null||Sl!==oo(l)||(l=Sl,"selectionStart"in l&&co(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),yt&&gt(yt,l)||(yt=l,l=Si(ro,"onSelect"),0<l.length&&(a=new pu("onSelect","select",null,a,n),e.push({event:a,listeners:l}),a.target=Sl)))}function Gn(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var zl={animationend:Gn("Animation","AnimationEnd"),animationiteration:Gn("Animation","AnimationIteration"),animationstart:Gn("Animation","AnimationStart"),transitionrun:Gn("Transition","TransitionRun"),transitionstart:Gn("Transition","TransitionStart"),transitioncancel:Gn("Transition","TransitionCancel"),transitionend:Gn("Transition","TransitionEnd")},fo={},gs={};Za&&(gs=document.createElement("div").style,"AnimationEvent"in window||(delete zl.animationend.animation,delete zl.animationiteration.animation,delete zl.animationstart.animation),"TransitionEvent"in window||delete zl.transitionend.transition);function Ln(e){if(fo[e])return fo[e];if(!zl[e])return e;var a=zl[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in gs)return fo[e]=a[n];return e}var ys=Ln("animationend"),ps=Ln("animationiteration"),qs=Ln("animationstart"),ih=Ln("transitionrun"),oh=Ln("transitionstart"),ch=Ln("transitioncancel"),Ss=Ln("transitionend"),zs=new Map,mo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mo.push("scrollEnd");function qa(e,a){zs.set(e,a),Qn(a,[e])}var rh=0;function Ja(e,a){if(e.name!=null&&e.name!=="auto")return e.name;if(a.autoName!==null)return a.autoName;e=Ta.identifierPrefix;var n=rh++;return e="_"+e+"t_"+n.toString(32)+"_",a.autoName=e}function Es(e){if(e==null||typeof e=="string")return e;var a=null,n=Xl;if(n!==null)for(var l=0;l<n.length;l++){var t=e[n[l]];if(t!=null){if(t==="none")return"none";a=a==null?t:a+(" "+t)}}return a??e.default}function Ka(e,a){return e=Es(e),a=Es(a),a==null?e==="auto"?null:e:a==="auto"?null:a}var zu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ca=[],El=0,vo=0;function Eu(){for(var e=El,a=vo=El=0;a<e;){var n=ca[a];ca[a++]=null;var l=ca[a];ca[a++]=null;var t=ca[a];ca[a++]=null;var u=ca[a];if(ca[a++]=null,l!==null&&t!==null){var i=l.pending;i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t}u!==0&&Ts(n,t,u)}}function Tu(e,a,n,l){ca[El++]=e,ca[El++]=a,ca[El++]=n,ca[El++]=l,vo|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ho(e,a,n,l){return Tu(e,a,n,l),Nu(e)}function Xn(e,a){return Tu(e,null,null,a),Nu(e)}function Ts(e,a,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var t=!1,u=e.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(t=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,t&&a!==null&&(t=31-$e(n),e=u.hiddenUpdates,l=e[t],l===null?e[t]=[a]:l.push(a),a.lane=n|536870912),u):null}function Nu(e){if(50<Gt)throw Gt=0,vi=null,Error(v(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Tl={};function sh(e,a,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,a,n,l){return new sh(e,a,n,l)}function bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wa(e,a){var n=e.alternate;return n===null?(n=Ze(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ns(e,a){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Au(e,a,n,l,t,u){var i=0;if(l=e,typeof l=="function")bo(l)&&(i=1);else if(typeof l=="string")i=B0(e,n,_a.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(l){case tn:return e=Ze(31,n,a,t),e.elementType=tn,e.lanes=u,e;case Oa:return Vn(n.children,t,u,a);case La:i=8,t|=24;break;case ol:return e=Ze(12,n,a,t|2),e.elementType=ol,e.lanes=u,e;case G:return e=Ze(13,n,a,t),e.elementType=G,e.lanes=u,e;case R:return e=Ze(19,n,a,t),e.elementType=R,e.lanes=u,e;case cl:case pa:return e=t|32,e=Ze(30,n,a,e),e.elementType=pa,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Xe:i=10;break e;case nu:i=9;break e;case N:i=11;break e;case ve:i=14;break e;case oe:i=16,l=null;break e}i=29,n=Error(v(130,e===null?"null":typeof e,"")),l=null}return a=Ze(i,n,a,t),a.elementType=e,a.type=l,a.lanes=u,a}function Vn(e,a,n,l){return e=Ze(7,e,l,a),e.lanes=n,e}function go(e,a,n){return e=Ze(6,e,null,a),e.lanes=n,e}function As(e){var a=Ze(18,null,null,0);return a.stateNode=e,a}function yo(e,a,n){return a=Ze(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Os=new WeakMap;function ra(e,a){if(typeof e=="object"&&e!==null){var n=Os.get(e);return n!==void 0?n:(a={value:e,source:a,stack:Sr(a)},Os.set(e,a),a)}return{value:e,source:a,stack:Sr(a)}}var Nl=[],Al=0,Ou=null,pt=0,sa=[],fa=0,fn=null,xa=1,Ua="";function ka(e,a){Nl[Al++]=pt,Nl[Al++]=Ou,Ou=e,pt=a}function Ds(e,a,n){sa[fa++]=xa,sa[fa++]=Ua,sa[fa++]=fn,fn=e;var l=xa;e=Ua;var t=32-$e(l)-1;l&=~(1<<t),n+=1;var u=32-$e(a)+t;if(30<u){var i=t-t%5;u=(l&(1<<i)-1).toString(32),l>>=i,t-=i,xa=1<<32-$e(a)+t|n<<t|l,Ua=u+e}else xa=1<<u|n<<t|l,Ua=e}function Du(e){e.return!==null&&(ka(e,1),Ds(e,1,0))}function po(e){for(;e===Ou;)Ou=Nl[--Al],Nl[Al]=null,pt=Nl[--Al],Nl[Al]=null;for(;e===fn;)fn=sa[--fa],sa[fa]=null,Ua=sa[--fa],sa[fa]=null,xa=sa[--fa],sa[fa]=null}function _s(e,a){sa[fa++]=xa,sa[fa++]=Ua,sa[fa++]=fn,xa=a.id,Ua=a.overflow,fn=e}var Oe=null,fe=null,X=!1,dn=null,da=!1,qo=Error(v(519));function mn(e){var a=Error(v(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qt(ra(a,e)),qo}function Ms(e){var a=e.stateNode,n=e.type,l=e.memoizedProps;switch(a[xe]=e,a[Ve]=l,n){case"dialog":Z("cancel",a),Z("close",a);break;case"iframe":case"object":case"embed":Z("load",a);break;case"video":case"audio":for(n=0;n<Xt.length;n++)Z(Xt[n],a);break;case"source":Z("error",a);break;case"img":case"image":case"link":Z("error",a),Z("load",a);break;case"details":Z("toggle",a);break;case"input":Z("invalid",a),Xr(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Z("invalid",a);break;case"textarea":Z("invalid",a),Zr(a,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||l.suppressHydrationWarning===!0||Id(a.textContent,n)?(l.popover!=null&&(Z("beforetoggle",a),Z("toggle",a)),l.onScroll!=null&&Z("scroll",a),l.onScrollEnd!=null&&Z("scrollend",a),l.onClick!=null&&(a.onclick=Ma),a=!0):a=!1,a||mn(e,!0)}function _u(e){for(Oe=e.return;Oe;)switch(Oe.tag){case 5:case 31:case 13:da=!1;return;case 27:case 3:da=!0;return;default:Oe=Oe.return}}function Ol(e){if(e!==Oe)return!1;if(!X)return _u(e),X=!0,!1;var a=e.tag,n;if((n=a!==3&&a!==27)&&((n=a===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Fc(e.type,e.memoizedProps)),n=!n),n&&fe&&mn(e),_u(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));fe=gm(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));fe=gm(e)}else a===27?(a=fe,_n(e.type)?(e=ur,ur=null,fe=e):fe=a):fe=Oe?va(e.stateNode.nextSibling):null;return!0}function Zn(){fe=Oe=null,X=!1}function So(){var e=dn;return e!==null&&(we===null?we=e:we.push.apply(we,e),dn=null),e}function qt(e){dn===null?dn=[e]:dn.push(e)}var zo=Da(null),Jn=null,Wa=null;function vn(e,a,n){se(zo,a._currentValue),a._currentValue=n}function Fa(e){e._currentValue=zo.current,Me(zo)}function Mu(e,a,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===n)break;e=e.return}}function Eo(e,a,n,l){var t=e.child;for(t!==null&&(t.return=e);t!==null;){var u=t.dependencies;if(u!==null){var i=t.child;u=u.firstContext;e:for(;u!==null;){var o=u;u=t;for(var c=0;c<a.length;c++)if(o.context===a[c]){u.lanes|=n,o=u.alternate,o!==null&&(o.lanes|=n),Mu(u.return,n,e),l||(i=null);break e}u=o.next}}else if(t.tag===18){if(i=t.return,i===null)throw Error(v(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Mu(i,n,e),i=null}else t.tag===13&&t.memoizedState!==null&&t.memoizedState.dehydrated===null?(t.lanes|=n,i=t.alternate,i!==null&&(i.lanes|=n),Mu(t.return,n,e),i=t.child,i=i!==null?i.sibling:null):i=t.child;if(i!==null)i.return=t;else for(i=t;i!==null;){if(i===e){i=null;break}if(t=i.sibling,t!==null){t.return=i.return,i=t;break}i=i.return}t=i}}function Kn(e,a,n,l){e=null;for(var t=a,u=!1;t!==null;){if(!u){if((t.flags&524288)!==0)u=!0;else if((t.flags&262144)!==0)break}if(t.tag===10){var i=t.alternate;if(i===null)throw Error(v(387));if(i=i.memoizedProps,i!==null){var o=t.type;Pe(t.pendingProps.value,i.value)||(e!==null?e.push(o):e=[o])}}else if(t===lu.current){if(i=t.alternate,i===null)throw Error(v(387));i.memoizedState.memoizedState!==t.memoizedState.memoizedState&&(e!==null?e.push(Il):e=[Il])}t=t.return}return e!==null&&Eo(a,e,n,l),a.flags|=262144,e!==null}function xu(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wn(e){Jn=e,Wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ue(e){return xs(Jn,e)}function Uu(e,a){return Jn===null&&wn(e),xs(e,a)}function xs(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},Wa===null){if(e===null)throw Error(v(308));Wa=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Wa=Wa.next=a;return n}var fh=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},dh=p.unstable_scheduleCallback,mh=p.unstable_NormalPriority,Se={$$typeof:Xe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function To(){return{controller:new fh,data:new Map,refCount:0}}function St(e){e.refCount--,e.refCount===0&&dh(mh,function(){e.controller.abort()})}function Us(e,a){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<a.length;e++){var l=a[e];n.indexOf(l)===-1&&n.push(l)}}}var zt=null;function vh(e){var a=e.transitionTypes;return e.transitionTypes=null,a}var Et=null,No=0,kn=0,Dl=null;function hh(e,a){if(Et===null){var n=Et=[];No=0,kn=Lc(),Dl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return No++,a.then(Cs,Cs),a}function Cs(){if(--No===0&&(zt=null,Et!==null)){Dl!==null&&(Dl.status="fulfilled");var e=Et;Et=null,kn=0,Dl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function bh(e,a){var n=[],l={status:"pending",value:null,reason:null,then:function(t){n.push(t)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var t=0;t<n.length;t++)(0,n[t])(a)},function(t){for(l.status="rejected",l.reason=t,t=0;t<n.length;t++)(0,n[t])(void 0)}),l}var js=j.S;j.S=function(e,a){if(Od=We(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&hh(e,a),zt!==null)for(var n=Kl;n!==null;)Us(n,zt),n=n.next;if(n=e.types,n!==null){for(var l=Kl;l!==null;)Us(l,n),l=l.next;if(kn!==0){l=zt,l===null&&(l=zt=[]);for(var t=0;t<n.length;t++){var u=n[t];l.indexOf(u)===-1&&l.push(u)}}}js!==null&&js(e,a)};var Wn=Da(null);function Ao(){var e=Wn.current;return e!==null?e:ce.pooledCache}function Cu(e,a){a===null?se(Wn,Wn.current):se(Wn,a.pool)}function Ys(){var e=Ao();return e===null?null:{parent:Se._currentValue,pool:e}}var _l=Error(v(460)),Oo=Error(v(474)),ju=Error(v(542)),Yu={then:function(){}};function Hs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rs(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(Ma,Ma),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Qs(e),e===void 0&&!("reason"in a)?Error(v(600)):e;default:if(typeof a.status=="string")a.then(Ma,Ma);else{if(e=ce,e!==null&&100<e.shellSuspendCounter)throw Error(v(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var t=a;t.status="fulfilled",t.value=l}},function(l){if(a.status==="pending"){var t=a;t.status="rejected",t.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Qs(e),e}throw $n=a,_l}}function Fn(e){try{var a=e._init;return a(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?($n=n,_l):n}}var $n=null;function Bs(){if($n===null)throw Error(v(459));var e=$n;return $n=null,e}function Qs(e){if(e===_l||e===ju)throw Error(v(483))}var Ml=null,Tt=0;function Hu(e){var a=Tt;return Tt+=1,Ml===null&&(Ml=[]),Rs(Ml,e,a)}function hn(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Ru(e,a){throw a.$$typeof===au?Error(v(525)):(e=Object.prototype.toString.call(a),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Gs(e){function a(f,r){if(e){var m=f.deletions;m===null?(f.deletions=[r],f.flags|=16):m.push(r)}}function n(f,r){if(!e)return null;for(;r!==null;)a(f,r),r=r.sibling;return null}function l(f){for(var r=new Map;f!==null;)f.key===null?r.set(f.index,f):r.set(f.key,f),f=f.sibling;return r}function t(f,r){return f=wa(f,r),f.index=0,f.sibling=null,f}function u(f,r,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<r?(f.flags|=2,r):m):(f.flags|=134217730,r)):(f.flags|=1048576,r)}function i(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,r,m,g){return r===null||r.tag!==6?(r=go(m,f.mode,g),r.return=f,r):(r=t(r,m),r.return=f,r)}function c(f,r,m,g){var O=m.type;return O===Oa?(f=b(f,r,m.props.children,g,m.key),hn(f,m),f):r!==null&&(r.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===oe&&Fn(O)===r.type)?(r=t(r,m.props),hn(r,m),r.return=f,r):(r=Au(m.type,m.key,m.props,null,f.mode,g),hn(r,m),r.return=f,r)}function d(f,r,m,g){return r===null||r.tag!==4||r.stateNode.containerInfo!==m.containerInfo||r.stateNode.implementation!==m.implementation?(r=yo(m,f.mode,g),r.return=f,r):(r=t(r,m.children||[]),r.return=f,r)}function b(f,r,m,g,O){return r===null||r.tag!==7?(r=Vn(m,f.mode,g,O),r.return=f,r):(r=t(r,m),r.return=f,r)}function y(f,r,m){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=go(""+r,f.mode,m),r.return=f,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Yn:return m=Au(r.type,r.key,r.props,null,f.mode,m),hn(m,r),m.return=f,m;case ln:return r=yo(r,f.mode,m),r.return=f,r;case oe:return r=Fn(r),y(f,r,m)}if(lt(r)||nt(r))return r=Vn(r,f.mode,m,null),r.return=f,r;if(typeof r.then=="function")return y(f,Hu(r),m);if(r.$$typeof===Xe)return y(f,Uu(f,r),m);Ru(f,r)}return null}function s(f,r,m,g){var O=r!==null?r.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return O!==null?null:o(f,r,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yn:return m.key===O?c(f,r,m,g):null;case ln:return m.key===O?d(f,r,m,g):null;case oe:return m=Fn(m),s(f,r,m,g)}if(lt(m)||nt(m))return O!==null?null:b(f,r,m,g,null);if(typeof m.then=="function")return s(f,r,Hu(m),g);if(m.$$typeof===Xe)return s(f,r,Uu(f,m),g);Ru(f,m)}return null}function h(f,r,m,g,O){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return f=f.get(m)||null,o(r,f,""+g,O);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yn:return f=f.get(g.key===null?m:g.key)||null,c(r,f,g,O);case ln:return f=f.get(g.key===null?m:g.key)||null,d(r,f,g,O);case oe:return g=Fn(g),h(f,r,m,g,O)}if(lt(g)||nt(g))return f=f.get(m)||null,b(r,f,g,O,null);if(typeof g.then=="function")return h(f,r,m,Hu(g),O);if(g.$$typeof===Xe)return h(f,r,m,Uu(r,g),O);Ru(r,g)}return null}function q(f,r,m,g){for(var O=null,K=null,_=r,U=r=0,Te=null;_!==null&&U<m.length;U++){_.index>U?(Te=_,_=null):Te=_.sibling;var k=s(f,_,m[U],g);if(k===null){_===null&&(_=Te);break}e&&_&&k.alternate===null&&a(f,_),r=u(k,r,U),K===null?O=k:K.sibling=k,K=k,_=Te}if(U===m.length)return n(f,_),X&&ka(f,U),O;if(_===null){for(;U<m.length;U++)_=y(f,m[U],g),_!==null&&(r=u(_,r,U),K===null?O=_:K.sibling=_,K=_);return X&&ka(f,U),O}for(_=l(_);U<m.length;U++)Te=h(_,f,U,m[U],g),Te!==null&&(e&&(k=Te.alternate,k!==null&&_.delete(k.key===null?U:k.key)),r=u(Te,r,U),K===null?O=Te:K.sibling=Te,K=Te);return e&&_.forEach(function(jn){return a(f,jn)}),X&&ka(f,U),O}function D(f,r,m,g){if(m==null)throw Error(v(151));for(var O=null,K=null,_=r,U=r=0,Te=null,k=m.next();_!==null&&!k.done;U++,k=m.next()){_.index>U?(Te=_,_=null):Te=_.sibling;var jn=s(f,_,k.value,g);if(jn===null){_===null&&(_=Te);break}e&&_&&jn.alternate===null&&a(f,_),r=u(jn,r,U),K===null?O=jn:K.sibling=jn,K=jn,_=Te}if(k.done)return n(f,_),X&&ka(f,U),O;if(_===null){for(;!k.done;U++,k=m.next())k=y(f,k.value,g),k!==null&&(r=u(k,r,U),K===null?O=k:K.sibling=k,K=k);return X&&ka(f,U),O}for(_=l(_);!k.done;U++,k=m.next())k=h(_,f,U,k.value,g),k!==null&&(e&&(Te=k.alternate,Te!==null&&_.delete(Te.key===null?U:Te.key)),r=u(k,r,U),K===null?O=k:K.sibling=k,K=k);return e&&_.forEach(function(F0){return a(f,F0)}),X&&ka(f,U),O}function Q(f,r,m,g){if(typeof m=="object"&&m!==null&&m.type===Oa&&m.key===null&&m.props.ref===void 0&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Yn:e:{for(var O=m.key;r!==null;){if(r.key===O){if(O=m.type,O===Oa){if(r.tag===7){n(f,r.sibling),g=t(r,m.props.children),hn(g,m),g.return=f,f=g;break e}}else if(r.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===oe&&Fn(O)===r.type){n(f,r.sibling),g=t(r,m.props),hn(g,m),g.return=f,f=g;break e}n(f,r);break}else a(f,r);r=r.sibling}m.type===Oa?(g=Vn(m.props.children,f.mode,g,m.key),hn(g,m),g.return=f,f=g):(g=Au(m.type,m.key,m.props,null,f.mode,g),hn(g,m),g.return=f,f=g)}return i(f);case ln:e:{for(O=m.key;r!==null;){if(r.key===O)if(r.tag===4&&r.stateNode.containerInfo===m.containerInfo&&r.stateNode.implementation===m.implementation){n(f,r.sibling),g=t(r,m.children||[]),g.return=f,f=g;break e}else{n(f,r);break}else a(f,r);r=r.sibling}g=yo(m,f.mode,g),g.return=f,f=g}return i(f);case oe:return m=Fn(m),Q(f,r,m,g)}if(lt(m))return q(f,r,m,g);if(nt(m)){if(O=nt(m),typeof O!="function")throw Error(v(150));return m=O.call(m),D(f,r,m,g)}if(typeof m.then=="function")return Q(f,r,Hu(m),g);if(m.$$typeof===Xe)return Q(f,r,Uu(f,m),g);Ru(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,r!==null&&r.tag===6?(n(f,r.sibling),g=t(r,m),g.return=f,f=g):(n(f,r),g=go(m,f.mode,g),g.return=f,f=g),i(f)):n(f,r)}return function(f,r,m,g){try{Tt=0;var O=Q(f,r,m,g);return Ml=null,O}catch(_){if(_===_l||_===ju)throw _;var K=Ze(29,_,null,f.mode);return K.lanes=g,K.return=f,K}finally{}}}var In=Gs(!0),Ls=Gs(!1),bn=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _o(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yn(e,a,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(P&2)!==0){var t=l.pending;return t===null?a.next=a:(a.next=t.next,t.next=a),l.pending=a,a=Nu(e),Ts(e,null,n),a}return Tu(e,l,a,n),Nu(e)}function Nt(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,n|=l,a.lanes=n,Dr(e,n)}}function Mo(e,a){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var t=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?t=u=i:u=u.next=i,n=n.next}while(n!==null);u===null?t=u=a:u=u.next=a}else t=u=a;n={baseState:l.baseState,firstBaseUpdate:t,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var xo=!1;function At(){if(xo){var e=Dl;if(e!==null)throw e}}function Ot(e,a,n,l){xo=!1;var t=e.updateQueue;bn=!1;var u=t.firstBaseUpdate,i=t.lastBaseUpdate,o=t.shared.pending;if(o!==null){t.shared.pending=null;var c=o,d=c.next;c.next=null,i===null?u=d:i.next=d,i=c;var b=e.alternate;b!==null&&(b=b.updateQueue,o=b.lastBaseUpdate,o!==i&&(o===null?b.firstBaseUpdate=d:o.next=d,b.lastBaseUpdate=c))}if(u!==null){var y=t.baseState;i=0,b=d=c=null,o=u;do{var s=o.lane&-536870913,h=s!==o.lane;if(h?(J&s)===s:(l&s)===s){s!==0&&s===kn&&(xo=!0),b!==null&&(b=b.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var q=e,D=o;s=a;var Q=n;switch(D.tag){case 1:if(q=D.payload,typeof q=="function"){y=q.call(Q,y,s);break e}y=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=D.payload,s=typeof q=="function"?q.call(Q,y,s):q,s==null)break e;y=W({},y,s);break e;case 2:bn=!0}}s=o.callback,s!==null&&(e.flags|=64,h&&(e.flags|=8192),h=t.callbacks,h===null?t.callbacks=[s]:h.push(s))}else h={lane:s,tag:o.tag,payload:o.payload,callback:o.callback,next:null},b===null?(d=b=h,c=y):b=b.next=h,i|=s;if(o=o.next,o===null){if(o=t.shared.pending,o===null)break;h=o,o=h.next,h.next=null,t.lastBaseUpdate=h,t.shared.pending=null}}while(!0);b===null&&(c=y),t.baseState=c,t.firstBaseUpdate=d,t.lastBaseUpdate=b,u===null&&(t.shared.lanes=0),Nn|=i,e.lanes=i,e.memoizedState=y}}function Xs(e,a){if(typeof e!="function")throw Error(v(191,e));e.call(a)}function Vs(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xs(n[e],a)}var pn=Da(null),Bu=Da(0);function Zs(e,a){e=an,se(Bu,e),se(pn,a),an=e|a.baseLanes}function Uo(){se(Bu,an),se(pn,pn.current)}function Co(){an=Bu.current,Me(pn),Me(Bu)}var Ce=Da(null),Re=null;function qn(e){var a=e.alternate;se(je,je.current&1),se(Ce,e),Re===null&&(a===null||pn.current!==null||a.memoizedState!==null)&&(Re=e)}function jo(e){se(je,je.current),se(Ce,e),Re===null&&(Re=e)}function Js(e){e.tag===22?(se(je,je.current),se(Ce,e),Re===null&&(Re=e)):Sn()}function Sn(){se(je,je.current),se(Ce,Ce.current)}function ea(e){Me(Ce),Re===e&&(Re=null),Me(je)}var je=Da(0);function Dt(e,a){se(Ce,Ce.current),se(je,a)}function Yo(e){Me(je),Me(Ce),Re===e&&(Re=null)}function Qu(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||lr(n)||tr(n)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!=="independent"){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var $a=0,B=null,ue=null,ze=null,Gu=!1,xl=!1,Pn=!1,Lu=0,_t=0,Ul=null,gh=0;function ge(){throw Error(v(321))}function Ho(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!Pe(e[n],a[n]))return!1;return!0}function Ro(e,a,n,l,t,u){return $a=u,B=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,j.H=e===null||e.memoizedState===null?_f:Mf,Pn=!1,u=n(l,t),Pn=!1,xl&&(u=ws(a,n,l,t)),Ks(e),u}function Ks(e){j.H=ku;var a=ue!==null&&ue.next!==null;if($a=0,ze=ue=B=null,Gu=!1,_t=0,Ul=null,a)throw Error(v(300));e===null||Ee||(e=e.dependencies,e!==null&&xu(e)&&(Ee=!0))}function ws(e,a,n,l){B=e;var t=0;do{if(xl&&(Ul=null),_t=0,xl=!1,25<=t)throw Error(v(301));if(t+=1,ze=ue=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}j.H=Nh,u=a(n,l)}while(xl);return u}function yh(){var e=j.H,a=e.useState()[0];return a=typeof a.then=="function"?Mt(a):a,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(B.flags|=1024),a}function Bo(){var e=Lu!==0;return Lu=0,e}function Qo(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function Go(e){if(Gu){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Gu=!1}$a=0,ze=ue=B=null,xl=!1,_t=Lu=0,Ul=null}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?B.memoizedState=ze=e:ze=ze.next=e,ze}function pe(){if(ue===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var a=ze===null?B.memoizedState:ze.next;if(a!==null)ze=a,ue=e;else{if(e===null)throw B.alternate===null?Error(v(467)):Error(v(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},ze===null?B.memoizedState=ze=e:ze=ze.next=e}return ze}function Xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mt(e){var a=_t;return _t+=1,Ul===null&&(Ul=[]),e=Rs(Ul,e,a),a=B,(ze===null?a.memoizedState:ze.next)===null&&(a=a.alternate,j.H=a===null||a.memoizedState===null?_f:Mf),e}function Vu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mt(e);if(e.$$typeof===rl)return;if(e.$$typeof===Xe)return Ue(e)}throw Error(v(438,String(e)))}function Lo(e){var a=null,n=B.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var l=B.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(t){return t.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=Xu(),B.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),l=0;l<e;l++)n[l]=at;return a.index++,n}function Ia(e,a){return typeof a=="function"?a(e):a}function Zu(e){var a=pe();return Xo(a,ue,e)}function Xo(e,a,n){var l=e.queue;if(l===null)throw Error(v(311));l.lastRenderedReducer=n;var t=e.baseQueue,u=l.pending;if(u!==null){if(t!==null){var i=t.next;t.next=u.next,u.next=i}a.baseQueue=t=u,l.pending=null}if(u=e.baseState,t===null)e.memoizedState=u;else{a=t.next;var o=i=null,c=null,d=a,b=!1;do{var y=d.lane&-536870913;if(y!==d.lane?(J&y)===y:($a&y)===y){var s=d.revertLane;if(s===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),y===kn&&(b=!0);else if(($a&s)===s){d=d.next,s===kn&&(b=!0);continue}else y={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},c===null?(o=c=y,i=u):c=c.next=y,B.lanes|=s,Nn|=s;y=d.action,Pn&&n(u,y),u=d.hasEagerState?d.eagerState:n(u,y)}else s={lane:y,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},c===null?(o=c=s,i=u):c=c.next=s,B.lanes|=y,Nn|=y;d=d.next}while(d!==null&&d!==a);if(c===null?i=u:c.next=o,!Pe(u,e.memoizedState)&&(Ee=!0,b&&(n=Dl,n!==null)))throw n;e.memoizedState=u,e.baseState=i,e.baseQueue=c,l.lastRenderedState=u}return t===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Vo(e){var a=pe(),n=a.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var l=n.dispatch,t=n.pending,u=a.memoizedState;if(t!==null){n.pending=null;var i=t=t.next;do u=e(u,i.action),i=i.next;while(i!==t);Pe(u,a.memoizedState)||(Ee=!0),a.memoizedState=u,a.baseQueue===null&&(a.baseState=u),n.lastRenderedState=u}return[u,l]}function ks(e,a,n){var l=B,t=pe(),u=X;if(u){if(n===void 0)throw Error(v(407));n=n()}else n=a();var i=!Pe((ue||t).memoizedState,n);if(i&&(t.memoizedState=n,Ee=!0),t=t.queue,Ko($s.bind(null,l,t,e),[e]),e=t.getSnapshot!==a||i||ze!==null&&(ze.memoizedState.tag&1)!==0,Cl(e?9:8,{destroy:void 0},Fs.bind(null,l,t,n,a),null),e){if(l.flags|=2048,ce===null)throw Error(v(349));u||($a&127)!==0||Ws(l,a,n)}return n}function Ws(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=B.updateQueue,a===null?(a=Xu(),B.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function Fs(e,a,n,l){a.value=n,a.getSnapshot=l,Is(a)&&Ps(e)}function $s(e,a,n){return n(function(){Is(a)&&Ps(e)})}function Is(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!Pe(e,n)}catch{return!0}}function Ps(e){var a=Xn(e,2);a!==null&&ke(a,e,2)}function Zo(e){var a=Qe();if(typeof e=="function"){var n=e;if(e=n(),Pn){cn(!0);try{n()}finally{cn(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:e},a}function ef(e,a,n,l){return e.baseState=n,Xo(e,ue,typeof l=="function"?l:Ia)}function ph(e,a,n,l,t){if(wu(e))throw Error(v(485));if(e=a.action,e!==null){var u={payload:t,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};j.T!==null?n(!0):u.isTransition=!1,l(u),n=a.pending,n===null?(u.next=a.pending=u,af(a,u)):(u.next=n.next,a.pending=n.next=u)}}function af(e,a){var n=a.action,l=a.payload,t=e.state;if(a.isTransition){var u=j.T,i={};i.types=u!==null?u.types:null,j.T=i;try{var o=n(t,l),c=j.S;c!==null&&c(i,o),nf(e,a,o)}catch(d){Jo(e,a,d)}finally{u!==null&&i.types!==null&&(u.types=i.types),j.T=u}}else try{u=n(t,l),nf(e,a,u)}catch(d){Jo(e,a,d)}}function nf(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){lf(e,a,l)},function(l){return Jo(e,a,l)}):lf(e,a,n)}function lf(e,a,n){a.status="fulfilled",a.value=n,tf(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,af(e,n)))}function Jo(e,a,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=n,tf(a),a=a.next;while(a!==l)}e.action=null}function tf(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function uf(e,a){return a}function of(e,a){if(X){var n=ce.formState;if(n!==null){e:{var l=B;if(X){if(fe){a:{for(var t=fe,u=da;t.nodeType!==8;){if(!u){t=null;break a}if(t=va(t.nextSibling),t===null){t=null;break a}}u=t.data,t=u==="F!"||u==="F"?t:null}if(t){fe=va(t.nextSibling),l=t.data==="F!";break e}}mn(l)}l=!1}l&&(a=n[0])}}return n=Qe(),n.memoizedState=n.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uf,lastRenderedState:a},n.queue=l,n=Af.bind(null,B,l),l.dispatch=n,l=Zo(!1),u=$o.bind(null,B,!1,l.queue),l=Qe(),t={state:a,dispatch:null,action:e,pending:null},l.queue=t,n=ph.bind(null,B,t,u,n),t.dispatch=n,l.memoizedState=e,[a,n,!1]}function cf(e){var a=pe();return rf(a,ue,e)}function rf(e,a,n){if(a=Xo(e,a,uf)[0],e=Zu(Ia)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Mt(a)}catch(i){throw i===_l?ju:i}else l=a;a=pe();var t=a.queue,u=t.dispatch;return n!==a.memoizedState&&(B.flags|=2048,Cl(9,{destroy:void 0},qh.bind(null,t,n),null)),[l,u,e]}function qh(e,a){e.action=a}function sf(e){var a=pe(),n=ue;if(n!==null)return rf(a,n,e);pe(),a=a.memoizedState,n=pe();var l=n.queue.dispatch;return n.memoizedState=e,[a,l,!1]}function Cl(e,a,n,l){return e={tag:e,create:n,deps:l,inst:a,next:null},a=B.updateQueue,a===null&&(a=Xu(),B.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,a.lastEffect=e),e}function ff(){return pe().memoizedState}function Ju(e,a,n,l){var t=Qe();B.flags|=e,t.memoizedState=Cl(1|a,{destroy:void 0},n,l===void 0?null:l)}function Ku(e,a,n,l){var t=pe();l=l===void 0?null:l;var u=t.memoizedState.inst;ue!==null&&l!==null&&Ho(l,ue.memoizedState.deps)?t.memoizedState=Cl(a,u,n,l):(B.flags|=e,t.memoizedState=Cl(1|a,u,n,l))}function df(e,a){Ju(8390656,8,e,a)}function Ko(e,a){Ku(2048,8,e,a)}function Sh(e){B.flags|=4;var a=B.updateQueue;if(a===null)a=Xu(),B.updateQueue=a,a.events=[e];else{var n=a.events;n===null?a.events=[e]:n.push(e)}}function mf(e){var a=pe().memoizedState;return Sh({ref:a,nextImpl:e}),function(){if((P&2)!==0)throw Error(v(440));return a.impl.apply(void 0,arguments)}}function vf(e,a){return Ku(4,2,e,a)}function hf(e,a){return Ku(4,4,e,a)}function bf(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function gf(e,a,n){n=n!=null?n.concat([e]):null,Ku(4,4,bf.bind(null,a,e),n)}function wo(){}function yf(e,a){var n=pe();a=a===void 0?null:a;var l=n.memoizedState;return a!==null&&Ho(a,l[1])?l[0]:(n.memoizedState=[e,a],e)}function pf(e,a){var n=pe();a=a===void 0?null:a;var l=n.memoizedState;if(a!==null&&Ho(a,l[1]))return l[0];if(l=e(),Pn){cn(!0);try{e()}finally{cn(!1)}}return n.memoizedState=[l,a],l}function ko(e,a,n){return n===void 0||($a&1073741824)!==0&&(J&261930)===0?e.memoizedState=a:(e.memoizedState=n,e=_d(),B.lanes|=e,Nn|=e,n)}function qf(e,a,n,l){return Pe(n,a)?n:pn.current!==null?(e=ko(e,n,l),Pe(e,a)||(Ee=!0),e):($a&106)===0||($a&1073741824)!==0&&(J&261930)===0?(Ee=!0,e.memoizedState=n):(e=_d(),B.lanes|=e,Nn|=e,a)}function Sf(e,a,n,l,t){var u=I.p;I.p=u!==0&&8>u?u:8;var i=j.T,o={};o.types=i!==null?i.types:null,j.T=o,$o(e,!1,a,n);try{var c=t(),d=j.S;if(d!==null&&d(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var b=bh(c,l);xt(e,a,b,ta(e))}else xt(e,a,l,ta(e))}catch(y){xt(e,a,{then:function(){},status:"rejected",reason:y},ta())}finally{I.p=u,i!==null&&o.types!==null&&(i.types=o.types),j.T=i}}function zh(){}function Wo(e,a,n,l){if(e.tag!==5)throw Error(v(476));var t=zf(e).queue;Sf(e,t,a,Hn,n===null?zh:function(){return Ef(e),n(l)})}function zf(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Hn,baseState:Hn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:Hn},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Ef(e){var a=zf(e);a.next===null&&(a=e.alternate.memoizedState),xt(e,a.next.queue,{},ta())}function Fo(){return Ue(Il)}function Tf(){return pe().memoizedState}function Nf(){return pe().memoizedState}function Eh(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=ta();e=gn(n);var l=yn(a,e,n);l!==null&&(ke(l,a,n),Nt(l,a,n)),a={cache:To()},e.payload=a;return}a=a.return}}function Th(e,a,n){var l=ta();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},wu(e)?Of(a,n):(n=ho(e,a,n,l),n!==null&&(ke(n,e,l),Df(n,a,l)))}function Af(e,a,n){var l=ta();xt(e,a,n,l)}function xt(e,a,n,l){var t={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(wu(e))Of(a,t);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=a.lastRenderedReducer,u!==null))try{var i=a.lastRenderedState,o=u(i,n);if(t.hasEagerState=!0,t.eagerState=o,Pe(o,i))return Tu(e,a,t,0),ce===null&&Eu(),!1}catch{}finally{}if(n=ho(e,a,t,l),n!==null)return ke(n,e,l),Df(n,a,l),!0}return!1}function $o(e,a,n,l){if(l={lane:2,revertLane:Lc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},wu(e)){if(a)throw Error(v(479))}else a=ho(e,n,l,2),a!==null&&ke(a,e,2)}function wu(e){var a=e.alternate;return e===B||a!==null&&a===B}function Of(e,a){xl=Gu=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function Df(e,a,n){if((n&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,n|=l,a.lanes=n,Dr(e,n)}}var ku={readContext:Ue,use:Vu,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useLayoutEffect:ge,useInsertionEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useSyncExternalStore:ge,useId:ge,useHostTransitionStatus:ge,useFormState:ge,useActionState:ge,useOptimistic:ge,useMemoCache:ge,useCacheRefresh:ge,useEffectEvent:ge},_f={readContext:Ue,use:Vu,useCallback:function(e,a){return Qe().memoizedState=[e,a===void 0?null:a],e},useContext:Ue,useEffect:df,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,Ju(4194308,4,bf.bind(null,a,e),n)},useLayoutEffect:function(e,a){return Ju(4194308,4,e,a)},useInsertionEffect:function(e,a){Ju(4,2,e,a)},useMemo:function(e,a){var n=Qe();a=a===void 0?null:a;var l=e();if(Pn){cn(!0);try{e()}finally{cn(!1)}}return n.memoizedState=[l,a],l},useReducer:function(e,a,n){var l=Qe();if(n!==void 0){var t=n(a);if(Pn){cn(!0);try{n(a)}finally{cn(!1)}}}else t=a;return l.memoizedState=l.baseState=t,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Th.bind(null,B,e),[l.memoizedState,e]},useRef:function(e){var a=Qe();return e={current:e},a.memoizedState=e},useState:function(e){e=Zo(e);var a=e.queue,n=Af.bind(null,B,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:wo,useDeferredValue:function(e,a){var n=Qe();return ko(n,e,a)},useTransition:function(){var e=Zo(!1);return e=Sf.bind(null,B,e.queue,!0,!1),Qe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var l=B,t=Qe();if(X){if(n===void 0)throw Error(v(407));n=n()}else{if(n=a(),ce===null)throw Error(v(349));(J&127)!==0||Ws(l,a,n)}t.memoizedState=n;var u={value:n,getSnapshot:a};return t.queue=u,df($s.bind(null,l,u,e),[e]),l.flags|=2048,Cl(9,{destroy:void 0},Fs.bind(null,l,u,n,a),null),n},useId:function(){var e=Qe(),a=ce.identifierPrefix;if(X){var n=Ua,l=xa;n=(l&~(1<<32-$e(l)-1)).toString(32)+n,a="_"+a+"R_"+n,n=Lu++,0<n&&(a+="H"+n.toString(32)),a+="_"}else n=gh++,a="_"+a+"r_"+n.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Fo,useFormState:of,useActionState:of,useOptimistic:function(e){var a=Qe();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=$o.bind(null,B,!0,n),n.dispatch=a,[e,a]},useMemoCache:Lo,useCacheRefresh:function(){return Qe().memoizedState=Eh.bind(null,B)},useEffectEvent:function(e){var a=Qe(),n={impl:e};return a.memoizedState=n,function(){if((P&2)!==0)throw Error(v(440));return n.impl.apply(void 0,arguments)}}},Mf={readContext:Ue,use:Vu,useCallback:yf,useContext:Ue,useEffect:Ko,useImperativeHandle:gf,useInsertionEffect:vf,useLayoutEffect:hf,useMemo:pf,useReducer:Zu,useRef:ff,useState:function(){return Zu(Ia)},useDebugValue:wo,useDeferredValue:function(e,a){var n=pe();return qf(n,ue.memoizedState,e,a)},useTransition:function(){var e=Zu(Ia)[0],a=pe().memoizedState;return[typeof e=="boolean"?e:Mt(e),a]},useSyncExternalStore:ks,useId:Tf,useHostTransitionStatus:Fo,useFormState:cf,useActionState:cf,useOptimistic:function(e,a){var n=pe();return ef(n,ue,e,a)},useMemoCache:Lo,useCacheRefresh:Nf,useEffectEvent:mf},Nh={readContext:Ue,use:Vu,useCallback:yf,useContext:Ue,useEffect:Ko,useImperativeHandle:gf,useInsertionEffect:vf,useLayoutEffect:hf,useMemo:pf,useReducer:Vo,useRef:ff,useState:function(){return Vo(Ia)},useDebugValue:wo,useDeferredValue:function(e,a){var n=pe();return ue===null?ko(n,e,a):qf(n,ue.memoizedState,e,a)},useTransition:function(){var e=Vo(Ia)[0],a=pe().memoizedState;return[typeof e=="boolean"?e:Mt(e),a]},useSyncExternalStore:ks,useId:Tf,useHostTransitionStatus:Fo,useFormState:sf,useActionState:sf,useOptimistic:function(e,a){var n=pe();return ue!==null?ef(n,ue,e,a):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Lo,useCacheRefresh:Nf,useEffectEvent:mf};function Io(e,a,n,l){a=e.memoizedState,n=n(l,a),n=n==null?a:W({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Po={enqueueSetState:function(e,a,n){e=e._reactInternals;var l=ta(),t=gn(l);t.payload=a,n!=null&&(t.callback=n),a=yn(e,t,l),a!==null&&(ke(a,e,l),Nt(a,e,l))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var l=ta(),t=gn(l);t.tag=1,t.payload=a,n!=null&&(t.callback=n),a=yn(e,t,l),a!==null&&(ke(a,e,l),Nt(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=ta(),l=gn(n);l.tag=2,a!=null&&(l.callback=a),a=yn(e,l,n),a!==null&&(ke(a,e,n),Nt(a,e,n))}};function xf(e,a,n,l,t,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,i):a.prototype&&a.prototype.isPureReactComponent?!gt(n,l)||!gt(t,u):!0}function Uf(e,a,n,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,l),a.state!==e&&Po.enqueueReplaceState(a,a.state,null)}function el(e,a){var n=a;if("ref"in a){n={};for(var l in a)l!=="ref"&&(n[l]=a[l])}if(e=e.defaultProps){n===a&&(n=W({},n));for(var t in e)n[t]===void 0&&(n[t]=e[t])}return n}function Cf(e){zu(e)}function jf(e){console.error(e)}function Yf(e){zu(e)}function Wu(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Hf(e,a,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(t){setTimeout(function(){throw t})}}function ec(e,a,n){return n=gn(n),n.tag=3,n.payload={element:null},n.callback=function(){Wu(e,a)},n}function Rf(e){return e=gn(e),e.tag=3,e}function Bf(e,a,n,l){var t=n.type.getDerivedStateFromError;if(typeof t=="function"){var u=l.value;e.payload=function(){return t(u)},e.callback=function(){Hf(a,n,l)}}var i=n.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Hf(a,n,l),typeof t!="function"&&(An===null?An=new Set([this]):An.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Ah(e,a,n,l,t){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=n.alternate,a!==null&&Kn(a,n,t,!0),n=Ce.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Re===null?bi():n.alternate===null&&ye===0&&(ye=3),n.flags&=-257,n.flags|=65536,n.lanes=t,l===Yu?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([l]):a.add(l),Bc(e,l,t)),!1;case 22:return n.flags|=65536,l===Yu?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([l]):n.add(l)),Bc(e,l,t)),!1}throw Error(v(435,n.tag))}return Bc(e,l,t),bi(),!1}if(X)return a=Ce.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=t,l!==qo&&(e=Error(v(422),{cause:l}),qt(ra(e,n)))):(l!==qo&&(a=Error(v(423),{cause:l}),qt(ra(a,n))),e=e.current.alternate,e.flags|=65536,t&=-t,e.lanes|=t,l=ra(l,n),t=ec(e.stateNode,l,t),Mo(e,t),ye!==4&&(ye=2)),!1;var u=Error(v(520),{cause:l});if(u=ra(u,n),Qt===null?Qt=[u]:Qt.push(u),ye!==4&&(ye=2),a===null)return!0;l=ra(l,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=t&-t,n.lanes|=e,e=ec(n.stateNode,l,e),Mo(n,e),!1;case 1:if(a=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(An===null||!An.has(u))))return n.flags|=65536,t&=-t,n.lanes|=t,t=Rf(t),Bf(t,e,n,l),Mo(n,t),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var ac=Error(v(461)),Ee=!1;function Ne(e,a,n,l){a.child=e===null?Ls(a,null,n,l):In(a,e.child,n,l)}function Qf(e,a,n,l,t){n=n.render;var u=a.ref;if("ref"in l){var i={};for(var o in l)o!=="ref"&&(i[o]=l[o])}else i=l;return wn(a),l=Ro(e,a,n,i,u,t),o=Bo(),e!==null&&!Ee?(Qo(e,a,t),Pa(e,a,t)):(X&&o&&Du(a),a.flags|=1,Ne(e,a,l,t),a.child)}function Gf(e,a,n,l,t){if(e===null){var u=n.type;return typeof u=="function"&&!bo(u)&&u.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=u,Lf(e,a,u,l,t)):(e=Au(n.type,null,l,a,a.mode,t),e.ref=a.ref,e.return=a,a.child=e)}if(u=e.child,!rc(e,t)){var i=u.memoizedProps;if(n=n.compare,n=n!==null?n:gt,n(i,l)&&e.ref===a.ref)return Pa(e,a,t)}return a.flags|=1,e=wa(u,l),e.ref=a.ref,e.return=a,a.child=e}function Lf(e,a,n,l,t){if(e!==null){var u=e.memoizedProps;if(gt(u,l)&&e.ref===a.ref)if(Ee=!1,a.pendingProps=l=u,rc(e,t))(e.flags&131072)!==0&&(Ee=!0);else return a.lanes=e.lanes,Pa(e,a,t)}return nc(e,a,n,l,t)}function Xf(e,a,n,l){var t=l.children,u=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(l=a.child=e.child,t=0;l!==null;)t=t|l.lanes|l.childLanes,l=l.sibling;l=t&~u}else l=0,a.child=null;return Vf(e,a,u,n,l)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cu(a,u!==null?u.cachePool:null),u!==null?Zs(a,u):Uo(),Js(a);else return l=a.lanes=536870912,Vf(e,a,u!==null?u.baseLanes|n:n,n,l)}else u!==null?(Cu(a,u.cachePool),Zs(a,u),Sn(),a.memoizedState=null):(e!==null&&Cu(a,null),Uo(),Sn());return Ne(e,a,t,n),a.child}function Ut(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Vf(e,a,n,l,t){var u=Ao();return u=u===null?null:{parent:Se._currentValue,pool:u},a.memoizedState={baseLanes:n,cachePool:u},e!==null&&Cu(a,null),Uo(),Js(a),e!==null&&Kn(e,a,l,!0),a.childLanes=t,null}function Fu(e,a){return a=$u({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Zf(e,a,n){return In(a,e.child,null,n),e=Fu(a,a.pendingProps),e.flags|=2,ea(a),a.memoizedState=null,e}function Oh(e,a,n){var l=a.pendingProps,t=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(X){if(l.mode==="hidden")return e=Fu(a,l),a.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ut(null,e);if(jo(a),(e=fe)?(e=bm(e,da),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:fn!==null?{id:xa,overflow:Ua}:null,retryLane:536870912,hydrationErrors:null},n=As(e),n.return=a,a.child=n,Oe=a,fe=null)):e=null,e===null)throw mn(a);return a.lanes=536870912,null}return Fu(a,l)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(jo(a),t)if(a.flags&256)a.flags&=-257,a=Zf(e,a,n);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(v(558));else if(Ee||Kn(e,a,n,!1),t=(n&e.childLanes)!==0,Ee||t){if(pn.current===null){if(l=ce,l!==null&&(i=_r(l,n),i!==0&&i!==u.retryLane))throw u.retryLane=i,Xn(e,i),ke(l,e,i),ac;bi()}a=Zf(e,a,n)}else e=u.treeContext,fe=va(i.nextSibling),Oe=a,X=!0,dn=null,da=!1,e!==null&&_s(a,e),a=Fu(a,l),a.flags|=134221824;return a}return e=wa(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function jl(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(v(284));(e===null||e.ref!==n)&&(a.flags|=4194816)}}function nc(e,a,n,l,t){return wn(a),n=Ro(e,a,n,l,void 0,t),l=Bo(),e!==null&&!Ee?(Qo(e,a,t),Pa(e,a,t)):(X&&l&&Du(a),a.flags|=1,Ne(e,a,n,t),a.child)}function Jf(e,a,n,l,t,u){return wn(a),a.updateQueue=null,n=ws(a,l,n,t),Ks(e),l=Bo(),e!==null&&!Ee?(Qo(e,a,u),Pa(e,a,u)):(X&&l&&Du(a),a.flags|=1,Ne(e,a,n,u),a.child)}function Kf(e,a,n,l,t){if(wn(a),a.stateNode===null){var u=Tl,i=n.contextType;typeof i=="object"&&i!==null&&(u=Ue(i)),u=new n(l,u),a.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Po,a.stateNode=u,u._reactInternals=a,u=a.stateNode,u.props=l,u.state=a.memoizedState,u.refs={},Do(a),i=n.contextType,u.context=typeof i=="object"&&i!==null?Ue(i):Tl,u.state=a.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Io(a,n,i,l),u.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Po.enqueueReplaceState(u,u.state,null),Ot(a,l,u,t),At(),u.state=a.memoizedState),typeof u.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){u=a.stateNode;var o=a.memoizedProps,c=el(n,o);u.props=c;var d=u.context,b=n.contextType;i=Tl,typeof b=="object"&&b!==null&&(i=Ue(b));var y=n.getDerivedStateFromProps;b=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function",o=a.pendingProps!==o,b||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o||d!==i)&&Uf(a,u,l,i),bn=!1;var s=a.memoizedState;u.state=s,Ot(a,l,u,t),At(),d=a.memoizedState,o||s!==d||bn?(typeof y=="function"&&(Io(a,n,y,l),d=a.memoizedState),(c=bn||xf(a,n,c,l,s,d,i))?(b||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(a.flags|=4194308)):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=d),u.props=l,u.state=d,u.context=i,l=c):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{u=a.stateNode,_o(e,a),i=a.memoizedProps,b=el(n,i),u.props=b,y=a.pendingProps,s=u.context,d=n.contextType,c=Tl,typeof d=="object"&&d!==null&&(c=Ue(d)),o=n.getDerivedStateFromProps,(d=typeof o=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==y||s!==c)&&Uf(a,u,l,c),bn=!1,s=a.memoizedState,u.state=s,Ot(a,l,u,t),At();var h=a.memoizedState;i!==y||s!==h||bn||e!==null&&e.dependencies!==null&&xu(e.dependencies)?(typeof o=="function"&&(Io(a,n,o,l),h=a.memoizedState),(b=bn||xf(a,n,b,l,s,h,c)||e!==null&&e.dependencies!==null&&xu(e.dependencies))?(d||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,h,c),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,h,c)),typeof u.componentDidUpdate=="function"&&(a.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&s===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&s===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=h),u.props=l,u.state=h,u.context=c,l=b):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&s===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&s===e.memoizedState||(a.flags|=1024),l=!1)}return u=l,jl(e,a),l=(a.flags&128)!==0,u||l?(u=a.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),a.flags|=1,e!==null&&l?(a.child=In(a,e.child,null,t),a.child=In(a,null,n,t)):Ne(e,a,n,t),a.memoizedState=u.state,e=a.child):e=Pa(e,a,t),e}function wf(e,a,n,l){return Zn(),a.flags|=256,Ne(e,a,n,l),a.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tc(e){return{baseLanes:e,cachePool:Ys()}}function uc(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=la),e}function kf(e,a,n){var l=a.pendingProps,t=!1,u=(a.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),i&&(t=!0,a.flags&=-129),i=(a.flags&32)!==0,a.flags&=-33,e===null){if(X){if(t?qn(a):Sn(),(e=fe)?(e=bm(e,da),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:fn!==null?{id:xa,overflow:Ua}:null,retryLane:536870912,hydrationErrors:null},n=As(e),n.return=a,a.child=n,Oe=a,fe=null)):e=null,e===null)throw mn(a);return tr(e)?a.lanes=32:a.lanes=536870912,null}return u=l.children,l=l.fallback,t?(Sn(),t=a.mode,u=$u({mode:"hidden",children:u},t),l=Vn(l,t,n,null),u.return=a,l.return=a,u.sibling=l,a.child=u,l=a.child,l.memoizedState=tc(n),l.childLanes=uc(e,i,n),a.memoizedState=lc,Ut(null,l)):(qn(a),ic(a,u))}var o=e.memoizedState;if(o!==null){var c=o.dehydrated;if(c!==null)return Dh(e,a,u,i,l,c,o,n)}return t?(Sn(),t=l.fallback,u=a.mode,o=e.child,c=o.sibling,l=wa(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&1206910976,c!==null?t=wa(c,t):(t=Vn(t,u,n,null),t.flags|=2),t.return=a,l.return=a,l.sibling=t,a.child=l,Ut(null,l),l=a.child,t=e.child.memoizedState,t===null?t=tc(n):(u=t.cachePool,u!==null?(o=Se._currentValue,u=u.parent!==o?{parent:o,pool:o}:u):u=Ys(),t={baseLanes:t.baseLanes|n,cachePool:u}),l.memoizedState=t,l.childLanes=uc(e,i,n),a.memoizedState=lc,Ut(e.child,l)):(qn(a),n=e.child,e=n.sibling,n=wa(n,{mode:"visible",children:l.children}),n.return=a,n.sibling=null,e!==null&&(i=a.deletions,i===null?(a.deletions=[e],a.flags|=16):i.push(e)),a.child=n,a.memoizedState=null,n)}function ic(e,a){return a=$u({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function $u(e,a){return e=Ze(22,e,null,a),e.lanes=0,e}function Iu(e,a,n){return In(a,e.child,null,n),e=ic(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Dh(e,a,n,l,t,u,i,o){if(n)return a.flags&256?(qn(a),a.flags&=-257,Iu(e,a,o)):a.memoizedState!==null?(Sn(),a.child=e.child,a.flags|=128,null):(Sn(),u=t.fallback,i=a.mode,t=$u({mode:"visible",children:t.children},i),u=Vn(u,i,o,null),u.flags|=2,t.return=a,u.return=a,t.sibling=u,a.child=t,In(a,e.child,null,o),t=a.child,t.memoizedState=tc(o),t.childLanes=uc(e,l,o),a.memoizedState=lc,Ut(null,t));if(qn(a),tr(u)){if(l=u.nextSibling&&u.nextSibling.dataset,l)var c=l.dgst;return l=c,l!==""&&(t=Error(v(419)),t.stack="",t.digest=l,qt({value:t,source:null,stack:null})),Iu(e,a,o)}if(Ee||Kn(e,a,o,!1),l=(o&e.childLanes)!==0,Ee||l){if(pn.current!==null)return Iu(e,a,o);if(l=ce,l!==null&&(t=_r(l,o),t!==0&&t!==i.retryLane))throw i.retryLane=t,Xn(e,t),ke(l,e,t),ac;return lr(u)||bi(),Iu(e,a,o)}return lr(u)?(a.flags|=192,a.child=e.child,null):(e=i.treeContext,fe=va(u.nextSibling),Oe=a,X=!0,dn=null,da=!1,e!==null&&_s(a,e),a=ic(a,t.children),a.flags|=134221824,a)}function Wf(e,a,n){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Mu(e.return,a,n)}function Ff(e){for(var a=null;e!==null;){var n=e.alternate;n!==null&&Qu(n)===null&&(a=e),e=e.sibling}return a}function Pu(e,a,n,l,t,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:t,treeForkCount:u}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=n,i.tailMode=t,i.treeForkCount=u)}function oc(e){var a=e.child;for(e.child=null;a!==null;){var n=a.sibling;a.sibling=e.child,e.child=a,a=n}}function cc(e,a,n){var l=a.pendingProps,t=l.revealOrder,u=l.tail;l=l.children;var i=je.current;if(a.flags&128)return Dt(a,i),null;var o=(i&2)!==0;if(o?(i=i&1|2,a.flags|=128):i&=1,Dt(a,i),t==="backwards"&&e!==null?(oc(e),Ne(e,a,l,n),oc(e)):Ne(e,a,l,n),l=X?pt:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wf(e,n,a);else if(e.tag===19)Wf(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(t){case"backwards":n=Ff(a.child),n===null?(t=a.child,a.child=null):(t=n.sibling,n.sibling=null,oc(a)),Pu(a,!0,t,null,u,l);break;case"unstable_legacy-backwards":for(n=null,t=a.child,a.child=null;t!==null;){if(e=t.alternate,e!==null&&Qu(e)===null){a.child=t;break}e=t.sibling,t.sibling=n,n=t,t=e}Pu(a,!0,n,null,u,l);break;case"together":Pu(a,!1,null,null,void 0,l);break;case"independent":a.memoizedState=null;break;default:n=Ff(a.child),n===null?(t=a.child,a.child=null):(t=n.sibling,n.sibling=null),Pu(a,!1,t,n,u,l)}return a.child}function $f(e,a,n){var l=a.pendingProps;return vn(a,a.type,l.value),Ne(e,a,l.children,n),a.child}function Pa(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),Nn|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(Kn(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(v(153));if(a.child!==null){for(e=a.child,n=wa(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=wa(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function rc(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&xu(e)))}function _h(e,a,n){switch(a.tag){case 3:tu(a,a.stateNode.containerInfo),vn(a,Se,e.memoizedState.cache),Zn();break;case 27:case 5:Yi(a);break;case 4:tu(a,a.stateNode.containerInfo);break;case 10:vn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,jo(a),null;break;case 13:var l=a.memoizedState;if(l!==null){if(l.dehydrated!==null)return qn(a),a.flags|=128,null;l=Kn(e,a,n,!1);var t=a.child.childLanes;return l||(n&t)!==0?kf(e,a,n):(qn(a),e=Pa(e,a,n),e!==null?e.sibling:null)}qn(a);break;case 19:if(a.flags&128)return cc(e,a,n);if(t=(e.flags&128)!==0,l=(n&a.childLanes)!==0,l||(Kn(e,a,n,!1),l=(n&a.childLanes)!==0),t){if(l)return cc(e,a,n);a.flags|=128}if(t=a.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),Dt(a,je.current),l)break;return null;case 22:return a.lanes=0,Xf(e,a,n,a.pendingProps);case 24:vn(a,Se,e.memoizedState.cache)}return Pa(e,a,n)}function If(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ee=!0;else{if(!rc(e,n)&&(a.flags&128)===0)return Ee=!1,_h(e,a,n);Ee=(e.flags&131072)!==0}else Ee=!1,X&&(a.flags&1048576)!==0&&Ds(a,pt,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=Fn(a.elementType),a.type=e,typeof e=="function")bo(e)?(l=el(e,l),a.tag=1,a=Kf(null,a,e,l,n)):(a.tag=0,a=nc(null,a,e,l,n));else{if(e!=null){var t=e.$$typeof;if(t===N){a.tag=11,a=Qf(null,a,e,l,n);break e}else if(t===ve){a.tag=14,a=Gf(null,a,e,l,n);break e}else if(t===Xe){a.tag=10,a.type=e,a=$f(null,a,n);break e}}throw a=Ci(e)||e,Error(v(306,a,""))}}return a;case 0:return nc(e,a,a.type,a.pendingProps,n);case 1:return l=a.type,t=el(l,a.pendingProps),Kf(e,a,l,t,n);case 3:e:{if(tu(a,a.stateNode.containerInfo),e===null)throw Error(v(387));l=a.pendingProps;var u=a.memoizedState;t=u.element,_o(e,a),Ot(a,l,null,n);var i=a.memoizedState;if(l=i.cache,vn(a,Se,l),l!==u.cache&&Eo(a,[Se],n,!0),At(),l=i.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:i.cache},a.updateQueue.baseState=u,a.memoizedState=u,a.flags&256){a=wf(e,a,l,n);break e}else if(l!==t){t=ra(Error(v(424)),a),qt(t),a=wf(e,a,l,n);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(fe=va(e.firstChild),Oe=a,X=!0,dn=null,da=!0,n=Ls(a,null,l,n),a.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Zn(),l===t){a=Pa(e,a,n);break e}Ne(e,a,l,n)}a=a.child}return a;case 26:return jl(e,a),e===null?(n=Em(a.type,null,a.pendingProps,null))?a.memoizedState=n:X||(a.stateNode=nm(a.type,a.pendingProps,un.current,a)):a.memoizedState=Em(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Yi(a),e===null&&X&&(l=a.stateNode=pm(a.type,a.pendingProps,un.current),Oe=a,da=!0,t=fe,_n(a.type)?(ur=t,fe=va(l.firstChild)):fe=t),Ne(e,a,a.pendingProps.children,n),jl(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&X&&((t=l=fe)&&(l=E0(l,a.type,a.pendingProps,da),l!==null?(a.stateNode=l,Oe=a,fe=va(l.firstChild),da=!1,t=!0):t=!1),t||mn(a)),Yi(a),t=a.type,u=a.pendingProps,i=e!==null?e.memoizedProps:null,l=u.children,Fc(t,u)?l=null:i!==null&&Fc(t,i)&&(a.flags|=32),a.memoizedState!==null&&(t=Ro(e,a,yh,null,null,n),Il._currentValue=t),jl(e,a),Ne(e,a,l,n),a.child;case 6:return e===null&&X&&((e=n=fe)&&(n=T0(n,a.pendingProps,da),n!==null?(a.stateNode=n,Oe=a,fe=null,e=!0):e=!1),e||mn(a)),null;case 13:return kf(e,a,n);case 4:return tu(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=In(a,null,l,n):Ne(e,a,l,n),a.child;case 11:return Qf(e,a,a.type,a.pendingProps,n);case 7:return l=a.pendingProps,jl(e,a),Ne(e,a,l,n),a.child;case 8:return Ne(e,a,a.pendingProps.children,n),a.child;case 12:return Ne(e,a,a.pendingProps.children,n),a.child;case 10:return $f(e,a,n);case 9:return t=a.type._context,l=a.pendingProps.children,wn(a),t=Ue(t),l=l(t),a.flags|=1,Ne(e,a,l,n),a.child;case 14:return Gf(e,a,a.type,a.pendingProps,n);case 15:return Lf(e,a,a.type,a.pendingProps,n);case 19:return cc(e,a,n);case 31:return Oh(e,a,n);case 22:return Xf(e,a,n,a.pendingProps);case 24:return wn(a),l=Ue(Se),e===null?(t=Ao(),t===null&&(t=ce,u=To(),t.pooledCache=u,u.refCount++,u!==null&&(t.pooledCacheLanes|=n),t=u),a.memoizedState={parent:l,cache:t},Do(a),vn(a,Se,t)):((e.lanes&n)!==0&&(_o(e,a),Ot(a,null,null,n),At()),t=e.memoizedState,u=a.memoizedState,t.parent!==l?(t={parent:l,cache:l},a.memoizedState=t,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=t),vn(a,Se,l)):(l=u.cache,vn(a,Se,l),l!==t.cache&&Eo(a,[Se],n,!0))),Ne(e,a,a.pendingProps.children,n),a.child;case 30:return a.stateNode===null&&(a.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=a.pendingProps,l.name!=null&&l.name!=="auto"?a.flags|=e===null?18882560:18874368:X&&Du(a),e!==null&&e.memoizedProps.name!==l.name?a.flags|=4194816:jl(e,a),Ne(e,a,l.children,n),a.child;case 29:throw a.pendingProps}throw Error(v(156,a.tag))}function en(e){e.flags|=4}function sc(e,a,n,l,t){var u;if((u=(e.mode&32)!==0)&&(u=n===null?Om(a,l):Om(a,l)&&(l.src!==n.src||l.srcSet!==n.srcSet)),u){if(e.flags|=16777216,(t&335544128)===t)if(e.stateNode.complete)e.flags|=8192;else if(Cd())e.flags|=8192;else throw $n=Yu,Oo}else e.flags&=-16777217}function Pf(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dm(a))if(Cd())e.flags|=8192;else throw $n=Yu,Oo}function ei(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Ar():536870912,e.lanes|=a,Ql|=a)}function Ct(e,a){if(!X)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null;break;default:for(a=e.tail,n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null}}function de(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(a)for(var t=e.child;t!==null;)n|=t.lanes|t.childLanes,l|=t.subtreeFlags&1206910976,l|=t.flags&1206910976,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)n|=t.lanes|t.childLanes,l|=t.subtreeFlags,l|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=l,e.childLanes=n,a}function Mh(e,a,n){var l=a.pendingProps;switch(po(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(a),null;case 1:return de(a),null;case 3:return n=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Fa(Se),fl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ol(a)?en(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,So())),de(a),null;case 26:var t=a.type,u=a.memoizedState;return e===null?(en(a),u!==null?(de(a),Pf(a,u)):(de(a),sc(a,t,null,l,n))):u?u!==e.memoizedState?(en(a),de(a),Pf(a,u)):(de(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&en(a),de(a),sc(a,t,e,l,n)),null;case 27:if(uu(a),n=un.current,t=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&en(a);else{if(!l){if(a.stateNode===null)throw Error(v(166));return de(a),a.subtreeFlags&=-33554433,null}e=_a.current,Ol(a)?Ms(a):(e=pm(t,l,n),a.stateNode=e,en(a))}return de(a),a.subtreeFlags&=-33554433,null;case 5:if(uu(a),t=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&en(a);else{if(!l){if(a.stateNode===null)throw Error(v(166));return de(a),a.subtreeFlags&=-33554433,null}if(u=_a.current,Ol(a))Ms(a);else{var i=Zt(un.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?i.createElement(t,{is:l.is}):i.createElement(t)}}u[xe]=a,u[Ve]=l;e:for(i=a.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}a.stateNode=u;e:switch(He(u,t,l),t){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&en(a)}}return de(a),a.subtreeFlags&=-33554433,sc(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,n),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&en(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(v(166));if(e=un.current,Ol(a)){if(e=a.stateNode,n=a.memoizedProps,l=null,t=Oe,t!==null)switch(t.tag){case 27:case 5:l=t.memoizedProps}e[xe]=a,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Id(e.nodeValue,n)),e||mn(a,!0)}else e=Zt(e).createTextNode(l),e[xe]=a,a.stateNode=e}return de(a),null;case 31:if(n=a.memoizedState,e===null||e.memoizedState!==null){if(l=Ol(a),n!==null){if(e===null){if(!l)throw Error(v(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(557));e[xe]=a}else Zn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;de(a),e=!1}else n=So(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return a.flags&256?(ea(a),a):(ea(a),null);if((a.flags&128)!==0)throw Error(v(558))}return de(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(t=Ol(a),l!==null&&l.dehydrated!==null){if(e===null){if(!t)throw Error(v(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));t[xe]=a}else Zn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;de(a),t=!1}else t=So(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),t=!0;if(!t)return a.flags&256?(ea(a),a):(ea(a),null)}return ea(a),(a.flags&128)!==0?(a.lanes=n,a):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=a.child,t=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(t=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==t&&(l.flags|=2048)),n!==e&&n&&(a.child.flags|=8192),ei(a,a.updateQueue),de(a),null);case 4:return fl(),e===null&&Jc(a.stateNode.containerInfo),a.flags|=67108864,de(a),null;case 10:return Fa(a.type),de(a),null;case 19:if(Yo(a),l=a.memoizedState,l===null)return de(a),null;if(t=(a.flags&128)!==0,u=l.rendering,u===null)if(t)Ct(l,!1);else{if(ye!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(u=Qu(e),u!==null){for(a.flags|=128,Ct(l,!1),e=u.updateQueue,a.updateQueue=e,ei(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)Ns(n,e),n=n.sibling;return Dt(a,je.current&1|2),X&&ka(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&We()>di&&(a.flags|=128,t=!0,Ct(l,!1),a.lanes=4194304)}else{if(!t)if(e=Qu(u),e!==null){if(a.flags|=128,t=!0,e=e.updateQueue,a.updateQueue=e,ei(a,e),Ct(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!u.alternate&&!X)return de(a),null}else 2*We()-l.renderingStartTime>di&&n!==536870912&&(a.flags|=128,t=!0,Ct(l,!1),a.lanes=4194304);l.isBackwards?(u.sibling=a.child,a.child=u):(e=l.last,e!==null?e.sibling=u:a.child=u,l.last=u)}if(l.tail!==null){e=l.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return l.rendering=e,l.tail=e.sibling,l.renderingStartTime=We(),e.sibling=null,u=je.current,u=t?u&1|2:u&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!n||X?Dt(a,u):(n=u,se(Ce,a),se(je,n),Re===null&&(Re=a)),X&&ka(a,l.treeForkCount),e}return de(a),null;case 22:case 23:return ea(a),Co(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(n&536870912)!==0&&(a.flags&128)===0&&(de(a),a.subtreeFlags&6&&(a.flags|=8192)):de(a),n=a.updateQueue,n!==null&&ei(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==n&&(a.flags|=2048),e!==null&&Me(Wn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Fa(Se),de(a),null;case 25:return null;case 30:return a.flags|=33554432,de(a),null}throw Error(v(156,a.tag))}function xh(e,a){switch(po(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Fa(Se),fl(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return uu(a),null;case 31:if(a.memoizedState!==null){if(ea(a),a.alternate===null)throw Error(v(340));Zn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ea(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(v(340));Zn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Yo(a),e=a.flags,e&65536?(a.flags=e&-65537|128,e=a.memoizedState,e!==null&&(e.rendering=null,e.tail=null),a.flags|=4,a):null;case 4:return fl(),null;case 10:return Fa(a.type),null;case 22:case 23:return ea(a),Co(),e!==null&&Me(Wn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Fa(Se),null;case 25:return null;default:return null}}function ed(e,a){switch(po(a),a.tag){case 3:Fa(Se),fl();break;case 26:case 27:case 5:uu(a);break;case 4:fl();break;case 31:a.memoizedState!==null&&ea(a);break;case 13:ea(a);break;case 19:Yo(a);break;case 10:Fa(a.type);break;case 22:case 23:ea(a),Co(),e!==null&&Me(Wn);break;case 24:Fa(Se)}}function jt(e,a){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var t=l.next;n=t;do{if((n.tag&e)===e){l=void 0;var u=n.create,i=n.inst;l=u(),i.destroy=l}n=n.next}while(n!==t)}}catch(o){ne(a,a.return,o)}}function zn(e,a,n){try{var l=a.updateQueue,t=l!==null?l.lastEffect:null;if(t!==null){var u=t.next;l=u;do{if((l.tag&e)===e){var i=l.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,t=a;var c=n,d=o;try{d()}catch(b){ne(t,c,b)}}}l=l.next}while(l!==u)}}catch(b){ne(a,a.return,b)}}function ad(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{Vs(a,n)}catch(l){ne(e,e.return,l)}}}function nd(e,a,n){n.props=el(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){ne(e,a,l)}}function Ca(e,a){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:var t=e.stateNode,u=Ja(e.memoizedProps,t);(t.ref===null||t.ref.name!==u)&&(t.ref=rm(u)),l=t.ref;break;case 7:if(e.stateNode===null){var i=new ua(e);L(e.child,!1,S0,i,void 0,void 0),e.stateNode=i}l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(o){ne(e,a,o)}}function Ye(e,a){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(t){ne(e,a,t)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(t){ne(e,a,t)}else n.current=null}function ai(e,a){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&a!==null)for(var n=0;n<a.length;n++)hm(e.stateNode,a[n])}function ld(e){for(var a=e.return;a!==null&&(dc(a)&&hm(e.stateNode,a.stateNode),!fc(a));)a=a.return}function Yt(e){for(var a=e.return;a!==null&&(dc(a)&&z0(e.stateNode,a.stateNode),!fc(a));)a=a.return}function fc(e){return e.tag===5||e.tag===3||e.tag===27}function dc(e){return e&&e.tag===7&&e.stateNode!==null}function mc(e){var a=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(t){ne(e,e.return,t)}}function vc(e,a,n){try{var l=e.stateNode;l0(l,e.type,n,a),l[Ve]=a}catch(t){ne(e,e.return,t)}}function td(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_n(e.type)||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_n(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bc(e,a,n,l){var t=e.tag;if(t===5||t===6)t=e.stateNode,a?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,a):(a=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.appendChild(t),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=Ma)),ai(e,l),F=!0;else if(t!==4&&(t===27&&(ai(e,l),l=null,_n(e.type)&&(n=e.stateNode,a=null)),e=e.child,e!==null))for(bc(e,a,n,l),e=e.sibling;e!==null;)bc(e,a,n,l),e=e.sibling}function ni(e,a,n,l){var t=e.tag;if(t===5||t===6)t=e.stateNode,a?n.insertBefore(t,a):n.appendChild(t),ai(e,l),F=!0;else if(t!==4&&(t===27&&(ai(e,l),l=null,_n(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(ni(e,a,n,l),e=e.sibling;e!==null;)ni(e,a,n,l),e=e.sibling}function ud(e){var a=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,t=a.attributes;t.length;)a.removeAttributeNode(t[0]);He(a,l,n),a[xe]=e,a[Ve]=n}catch(u){ne(e,e.return,u)}}var li=!1,aa=null;function id(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(li=!0)}var ja=null;function od(){var e=ja;return ja=null,e}var Je=0;function Yl(e,a,n,l,t){return Je=0,cd(e.child,a,n,l,t)}function cd(e,a,n,l,t){for(var u=!1;e!==null;){if(e.tag===5){var i=e.stateNode;if(l!==null){var o=Pc(i);l.push(o),o.view&&(u=!0)}else u||Pc(i).view&&(u=!0);li=!0,om(i,Je===0?a:a+"_"+Je,n),Je++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||cd(e.child,a,n,l,t)&&(u=!0));e=e.sibling}return u}function Ya(e,a){for(;e!==null;)e.tag===5?cm(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||Ya(e.child,a)),e=e.sibling}function ti(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ti(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var a=e.memoizedProps;if(a.name==null||a.name==="auto")throw Error(v(544));var n=a.name;a=Ka(a.default,a.share),a!=="none"&&(Yl(e,n,a,null,!1)||Ya(e.child,!1))}e=e.sibling}}function gc(e,a){if(e.tag===30){var n=e.stateNode,l=e.memoizedProps,t=Ja(l,n),u=Ka(l.default,n.paired?l.share:l.enter);u!=="none"?Yl(e,t,u,null,!1)?(ti(e),n.paired||a||Vl(e,l.onEnter)):Ya(e.child,!1):ti(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)gc(e,a),e=e.sibling;else ti(e)}function yc(e){if(aa!==null&&aa.size!==0){var a=aa;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,l=n.name;if(l!=null&&l!=="auto"){var t=a.get(l);if(t!==void 0){var u=Ka(n.default,n.share);if(u!=="none"&&(Yl(e,l,u,null,!1)?(u=e.stateNode,t.paired=u,u.paired=t,Vl(e,n.onShare)):Ya(e.child,!1)),a.delete(l),a.size===0)break}}}yc(e)}e=e.sibling}}}function pc(e){if(e.tag===30){var a=e.memoizedProps,n=Ja(a,e.stateNode),l=aa!==null?aa.get(n):void 0,t=Ka(a.default,l!==void 0?a.share:a.exit);t!=="none"&&(Yl(e,n,t,null,!1)?l!==void 0?(t=e.stateNode,l.paired=t,t.paired=l,aa.delete(n),Vl(e,a.onShare)):Vl(e,a.onExit):Ya(e.child,!1)),aa!==null&&yc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)pc(e),e=e.sibling;else aa!==null&&yc(e)}function rd(e){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,n=Ja(a,e.stateNode);a=Ka(a.default,a.update),e.flags&=-5,a!=="none"&&Yl(e,n,a,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&rd(e);e=e.sibling}}function qc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.stateNode;a.paired!==null&&(a.paired=null,Ya(e.child,!1))}qc(e)}e=e.sibling}}function ui(e){if(e.tag===30)e.stateNode.paired=null,Ya(e.child,!1),qc(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ui(e),e=e.sibling;else qc(e)}function sd(e){for(e=e.child;e!==null;)e.tag===30?Ya(e.child,!1):(e.subtreeFlags&33554432)!==0&&sd(e),e=e.sibling}function Sc(e,a,n,l,t,u,i){for(var o=!1;a!==null;){if(a.tag===5){var c=a.stateNode;if(u!==null&&Je<u.length){var d=u[Je],b=Pc(c);(d.view||b.view)&&(o=!0);var y;if(y=(e.flags&4)===0)if(b.clip)y=!0;else{y=d.rect;var s=b.rect;y=y.y!==s.y||y.x!==s.x||y.height!==s.height||y.width!==s.width}y&&(e.flags|=4),b.abs?b=!d.abs:(d=d.rect,b=b.rect,b=d.height!==b.height||d.width!==b.width),b&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&om(c,Je===0?n:n+"_"+Je,t),o&&(e.flags&4)!==0||(ja===null&&(ja=[]),ja.push(c,Je===0?l:l+"_"+Je,a.memoizedProps)),Je++}else(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&i?e.flags|=a.flags&32:Sc(e,a.child,n,l,t,u,i)&&(o=!0));a=a.sibling}return o}function fd(e,a){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,l=e.stateNode,t=Ja(n,l),u=Ka(n.default,n.update),i;i=e.memoizedState,e.memoizedState=null,l=e;var o=e.child;Je=0,t=Sc(l,o,t,t,u,i,!1),(e.flags&4)!==0&&t&&Vl(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&fd(e);e=e.sibling}}var De=!1,ee=!1,Ha=!1,zc=!1,dd=typeof WeakSet=="function"?WeakSet:Set,_e=null,Ra=!1,Ht=!1,ii=!1,Ec=!1;function Uh(e,a,n){if(e=e.containerInfo,kc=Pl,e=hs(e),co(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var t=l.getSelection&&l.getSelection();if(t&&t.rangeCount!==0){l=t.anchorNode;var u=t.anchorOffset,i=t.focusNode;t=t.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var o=0,c=-1,d=-1,b=0,y=0,s=e,h=null;a:for(;;){for(var q;s!==l||u!==0&&s.nodeType!==3||(c=o+u),s!==i||t!==0&&s.nodeType!==3||(d=o+t),s.nodeType===3&&(o+=s.nodeValue.length),(q=s.firstChild)!==null;)h=s,s=q;for(;;){if(s===e)break a;if(h===l&&++b===u&&(c=o),h===i&&++y===t&&(d=o),(q=s.nextSibling)!==null)break;s=h,h=s.parentNode}s=q}l=c===-1||d===-1?null:{start:c,end:d}}else l=null}l=l||{start:0,end:0}}else l=null;for(Wc={focusedElem:e,selectionRange:l},Pl=!1,n=(n&335544064)===n,_e=a,a=n?9270:1024;_e!==null;){if(e=_e,n&&(l=e.deletions,l!==null))for(u=0;u<l.length;u++)n&&pc(l[u]);if(e.alternate===null&&(e.flags&2)!==0)n&&id(e),oi(n);else{if(e.tag===22){if(l=e.alternate,e.memoizedState!==null){l!==null&&l.memoizedState===null&&n&&pc(l),oi(n);continue}else if(l!==null&&l.memoizedState!==null){n&&id(e),oi(n);continue}}l=e.child,(e.subtreeFlags&a)!==0&&l!==null?(l.return=e,_e=l):(n&&rd(e),oi(n))}}aa=null}function oi(e){for(;_e!==null;){var a=_e,n=e,l=a.alternate,t=a.flags;switch(a.tag){case 0:case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){n=void 0,t=l.memoizedProps,l=l.memoizedState;var u=a.stateNode;try{var i=el(a.type,t);n=u.getSnapshotBeforeUpdate(i,l),u.__reactInternalSnapshotBeforeUpdate=n}catch(o){ne(a,a.return,o)}}break;case 3:if((t&1024)!==0){if(l=a.stateNode.containerInfo,n=l.nodeType,n===9)nr(l);else if(n===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":nr(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&l!==null&&(n=Ja(l.memoizedProps,l.stateNode),t=a.memoizedProps,t=Ka(t.default,t.update),t!=="none"&&Yl(l,n,t,l.memoizedState=[],!0));break;default:if((t&1024)!==0)throw Error(v(163))}if(l=a.sibling,l!==null){l.return=a.return,_e=l;break}_e=a.return}}function md(e,a,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Ba(e,n),l&4&&jt(5,n);break;case 1:if(Ba(e,n),l&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(i){ne(n,n.return,i)}else{var t=el(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(t,a,e.__reactInternalSnapshotBeforeUpdate)}catch(i){ne(n,n.return,i)}}l&64&&ad(n),l&512&&Ca(n,n.return);break;case 3:if(Ba(e,n),l&64&&(e=n.updateQueue,e!==null)){if(a=null,n.child!==null)switch(n.child.tag){case 27:case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}try{Vs(e,a)}catch(i){ne(n,n.return,i)}}break;case 27:a===null&&l&4&&ud(n);case 26:case 5:Ba(e,n),a===null&&l&4&&mc(n),l&512&&Ca(n,n.return);break;case 12:Ba(e,n);break;case 31:Ba(e,n),l&4&&gd(e,n);break;case 13:Ba(e,n),l&4&&yd(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zh.bind(null,n),N0(e,n))));break;case 22:if(l=n.memoizedState!==null||De,!l){var u=a!==null&&a.memoizedState!==null||ee;a=De,t=ee,De=l,(ee=u)&&!t?(l=2,(n.subtreeFlags&8772)!==0&&(l|=1),Ea(e,n,l)):Ba(e,n),De=a,ee=t}break;case 30:Ba(e,n),l&512&&Ca(n,n.return);break;case 7:l&512&&Ca(n,n.return);default:Ba(e,n)}}function Tc(e,a){for(e=e.child;e!==null;)vd(e,a),e=e.sibling}function vd(e,a){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(a){var l=n.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var t=e.stateNode,u=e.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null;t.style.display=i==null||typeof i=="boolean"?"":(""+i).trim()}}catch(c){ne(e,e.return,c)}Nc(e,a);break;case 6:try{e.stateNode.nodeValue=a?"":e.memoizedProps,F=!0}catch(c){ne(e,e.return,c)}break;case 18:try{var o=e.stateNode;a?im(o,!0):im(e.stateNode,!1)}catch(c){ne(e,e.return,c)}break;case 22:case 23:e.memoizedState===null&&Tc(e,a);break;default:Tc(e,a)}}function Nc(e,a){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,l=a;switch(n.tag){case 4:vd(n,l);break e;case 22:n.memoizedState===null&&Nc(n,l);break e;default:Nc(n,l)}}e=e.sibling}}function hd(e){var a=e.alternate;a!==null&&(e.alternate=null,hd(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&du(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var he=null,Ke=!1;function Sa(e,a,n){for(n=n.child;n!==null;)bd(e,a,n),n=n.sibling}function bd(e,a,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(ut,n)}catch{}switch(n.tag){case 26:ee||Ye(n,a),Sa(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ee&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ee||Ye(n,a),Yt(n);var l=he,t=Ke;_n(n.type)&&(he=n.stateNode,Ke=!1),Sa(e,a,n),qm(n.stateNode,n.type,n.memoizedProps),he=l,Ke=t;break;case 5:ee||Ye(n,a),Yt(n);case 6:if(n.tag===6&&Yt(n),l=he,t=Ke,he=null,Sa(e,a,n),he=l,Ke=t,he!==null)if(Ke)try{(he.nodeType===9?he.body:he.nodeName==="HTML"?he.ownerDocument.body:he).removeChild(n.stateNode),F=!0}catch(u){ne(n,a,u)}else try{he.removeChild(n.stateNode),F=!0}catch(u){ne(n,a,u)}break;case 18:he!==null&&(Ke?(e=he,um(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),et(e)):um(he,n.stateNode));break;case 4:l=he,t=Ke,he=n.stateNode.containerInfo,Ke=!0,Sa(e,a,n),he=l,Ke=t;break;case 0:case 11:case 14:case 15:zn(2,n,a),ee||zn(4,n,a),Sa(e,a,n);break;case 1:ee||(Ye(n,a),l=n.stateNode,typeof l.componentWillUnmount=="function"&&nd(n,a,l)),Sa(e,a,n);break;case 21:Sa(e,a,n);break;case 22:ee=(l=ee)||n.memoizedState!==null,Sa(e,a,n),ee=l;break;case 30:Ye(n,a),Sa(e,a,n);break;case 7:ee||Ye(n,a),Sa(e,a,n);break;default:Sa(e,a,n)}}function gd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{et(e)}catch(n){ne(a,a.return,n)}}}function yd(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{et(e)}catch(n){ne(a,a.return,n)}}function Ch(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new dd),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new dd),a;default:throw Error(v(435,e.tag))}}function ci(e,a){var n=Ch(e);a.forEach(function(l){if(!n.has(l)){n.add(l);var t=Jh.bind(null,e,l);l.then(t,t)}})}function Ge(e,a,n){var l=a.deletions;if(l!==null)for(var t=0;t<l.length;t++){var u=l[t],i=e,o=a,c=o;e:for(;c!==null;){switch(c.tag){case 27:if(_n(c.type)){he=c.stateNode,Ke=!1;break e}break;case 5:he=c.stateNode,Ke=!1;break e;case 3:case 4:he=c.stateNode.containerInfo,Ke=!0;break e}c=c.return}if(he===null)throw Error(v(160));bd(i,o,u),he=null,Ke=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)pd(a,e,n),a=a.sibling}var za=null;function pd(e,a,n){var l=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(t&4&&(l=e.updateQueue,l=l!==null?l.events:null,l!==null))for(var u=0;u<l.length;u++){var i=l[u];i.ref.impl=i.nextImpl}Ge(a,e,n),Le(e),t&4&&(zn(3,e,e.return),jt(3,e),zn(5,e,e.return));break;case 1:Ge(a,e,n),Le(e),t&512&&(ee||l===null||Ye(l,l.return)),t&64&&De&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:if(u=za,Ge(a,e,n),Le(e),t&512&&(ee||l===null||Ye(l,l.return)),t&4)if(t=l!==null?l.memoizedState:null,n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null)if(De)e.stateNode=nm(e.type,e.memoizedProps,a.containerInfo,e);else{e:{a=e.type,n=e.memoizedProps,t=u.ownerDocument||u;a:switch(a){case"title":l=t.getElementsByTagName("title")[0],(!l||l[ct]||l[xe]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=t.createElement(a),t.head.insertBefore(l,t.querySelector("head > title"))),He(l,a,n),l[xe]=e,Ae(l),a=l;break e;case"link":if(u=Am("link","href",t).get(a+(n.href||""))){for(i=0;i<u.length;i++)if(l=u[i],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(i,1);break a}}l=t.createElement(a),He(l,a,n),t.head.appendChild(l);break;case"meta":if(u=Am("meta","content",t).get(a+(n.content||""))){for(i=0;i<u.length;i++)if(l=u[i],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(i,1);break a}}l=t.createElement(a),He(l,a,n),t.head.appendChild(l);break;default:throw Error(v(468,a))}l[xe]=e,Ae(l),a=l}e.stateNode=a}else De||rr(u,e.type,e.stateNode);else e.stateNode=Nm(u,n,e.memoizedProps);else t!==n?(t===null?(a=l.stateNode,a===null||ee||a.parentNode.removeChild(a)):t.count--,n===null?De||rr(u,e.type,e.stateNode):Nm(u,n,e.memoizedProps)):n===null&&e.stateNode!==null&&vc(e,e.memoizedProps,l.memoizedProps);break;case 27:Ge(a,e,n),Le(e),t&512&&(ee||l===null||Ye(l,l.return)),l!==null&&t&4&&vc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(u=Ha,Ha=!1,Ge(a,e,n),Ha=u,Le(e),t&512&&(ee||l===null||Ye(l,l.return)),e.flags&32){a=e.stateNode;try{gl(a,""),F=!0}catch(b){ne(e,e.return,b)}}t&4&&e.stateNode!=null&&(a=e.memoizedProps,vc(e,a,l!==null?l.memoizedProps:a)),t&1024&&(zc=!0);break;case 6:if(Ge(a,e,n),Le(e),t&4){if(e.stateNode===null)throw Error(v(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a,F=!0}catch(b){ne(e,e.return,b)}}break;case 3:if(F=!1,Ei=null,u=za,za=Jt(a.containerInfo),Ge(a,e,n),za=u,Le(e),t&4&&l!==null&&l.memoizedState.isDehydrated)try{et(a.containerInfo)}catch(b){ne(e,e.return,b)}zc&&(zc=!1,qd(e)),F=!1;break;case 4:t=Ha,Ha=De,l=Qr(),u=za,za=Jt(e.stateNode.containerInfo),Ge(a,e,n),Le(e),za=u,F&&Ht&&(ii=!0),F=l,Ha=t;break;case 12:Ge(a,e,n),Le(e);break;case 31:Ge(a,e,n),Le(e),t&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ci(e,a)));break;case 13:Ge(a,e,n),Le(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(fi=We()),t&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ci(e,a)));break;case 22:u=e.memoizedState!==null,i=l!==null&&l.memoizedState!==null;var o=De,c=ee,d=Ha;De=o||u,Ha=d||u,ee=c||i,Ge(a,e,n),ee=c,Ha=d,De=o,Le(e),t&8192&&(a=e.stateNode,a._visibility=u?a._visibility&-2:a._visibility|1,!u||l===null||i||De||ee||(a=i||ee,n=De,l=ee,De=u||De,ee=a,En(e,2),De=n,ee=l),!u&&Ha||Tc(e,u)),t&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ci(e,n))));break;case 19:Ge(a,e,n),Le(e),t&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ci(e,a)));break;case 30:t&512&&(ee||l===null||Ye(l,l.return)),t=Qr(),u=Ht,i=(n&335544064)===n,o=e.memoizedProps,Ht=i&&Ka(o.default,o.update)!=="none",Ge(a,e,n),Le(e),i&&l!==null&&F&&(e.flags|=4),Ht=u,F=t;break;case 21:break;case 7:t&512&&(ee||l===null||Ye(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=e);default:Ge(a,e,n),Le(e)}}function Le(e){var a=e.flags;if(a&2){try{for(var n,l=e.return;l!==null;){if(td(l)){n=l;break}l=l.return}l=null;for(var t=e.return;t!==null;){if(dc(t)){var u=t.stateNode;l===null?l=[u]:l.push(u)}if(fc(t))break;t=t.return}var i=l;if(n==null)throw Error(v(160));switch(n.tag){case 27:var o=n.stateNode,c=hc(e);ni(e,c,o,i);break;case 5:var d=n.stateNode;n.flags&32&&(gl(d,""),n.flags&=-33);var b=hc(e);ni(e,b,d,i);break;case 3:case 4:var y=n.stateNode.containerInfo,s=hc(e);bc(e,s,y,i);break;default:throw Error(v(161))}}catch(h){ne(e,e.return,h)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function qd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;qd(a),a.tag===5&&a.flags&1024&&(a=a.stateNode,Pl=!0,a.reset(),Pl=!1),e=e.sibling}}function Hl(e,a){if(a.subtreeFlags&9270)for(a=a.child;a!==null;)Sd(a,e),a=a.sibling;else fd(a)}function Sd(e,a){var n=e.alternate;if(n===null)gc(e,!1);else switch(e.tag){case 3:if(Ec=Ra=!1,od(),Hl(a,e),!Ra&&!ii){if(e=ja,e!==null)for(var l=0;l<e.length;l+=3){n=e[l];var t=e[l+1];cm(n,e[l+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+t+")"})}e=a.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ec=!0}ja=null;break;case 5:Hl(a,e);break;case 4:l=Ra,Ra=!1,Hl(a,e),Ra&&(ii=!0),Ra=l;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?gc(e,!1):Hl(a,e));break;case 30:l=Ra,t=od(),Ra=!1,Hl(a,e),Ra&&(e.flags|=4);var u=e.memoizedProps,i=e.stateNode;a=Ja(u,i),i=Ja(n.memoizedProps,i);var o=Ka(u.default,u.update);o==="none"?a=!1:(u=n.memoizedState,n.memoizedState=null,n=e.child,Je=0,a=Sc(e,n,a,i,o,u,!0),Je!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&a?(Vl(e,e.memoizedProps.onUpdate),ja=t):t!==null&&(t.push.apply(t,ja),ja=t),Ra=(e.flags&32)!==0?!0:l;break;default:Hl(a,e)}}function Ba(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)md(e,a.alternate,a),a=a.sibling}function En(e,a){for(e=e.child;e!==null;){var n=e,l=a;switch(n.tag){case 0:case 11:case 14:case 15:zn(4,n,n.return),En(n,l);break;case 1:Ye(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&nd(n,n.return,t),En(n,l);break;case 27:(l&2)!==0&&qm(n.stateNode,n.type,n.memoizedProps);case 5:Ye(n,n.return),n.tag!==5&&n.tag!==27||Yt(n),En(n,l);break;case 6:Yt(n);break;case 26:Ye(n,n.return),t=n.stateNode,n.memoizedState!==null||t===null||ee||t.parentNode.removeChild(t),En(n,l);break;case 22:n.memoizedState===null&&En(n,l);break;case 30:Ye(n,n.return),En(n,l);break;case 7:Ye(n,n.return);default:En(n,l)}e=e.sibling}}function Ea(e,a,n){for(n=(a.subtreeFlags&8772)!==0?n:n&-2,a=a.child;a!==null;){var l=a.alternate,t=e,u=a,i=u.flags,o=(n&1)!==0;switch(u.tag){case 0:case 11:case 15:Ea(t,u,n),jt(4,u);break;case 1:if(Ea(t,u,n),l=u,t=l.stateNode,typeof t.componentDidMount=="function")try{t.componentDidMount()}catch(b){ne(l,l.return,b)}if(l=u,t=l.updateQueue,t!==null){var c=l.stateNode;try{var d=t.shared.hiddenCallbacks;if(d!==null)for(t.shared.hiddenCallbacks=null,t=0;t<d.length;t++)Xs(d[t],c)}catch(b){ne(l,l.return,b)}}o&&i&64&&ad(u),Ca(u,u.return);break;case 27:(n&2)!==0&&ud(u);case 5:u.tag!==5&&u.tag!==27||ld(u),Ea(t,u,n),o&&l===null&&i&4&&mc(u),Ca(u,u.return);break;case 6:ld(u);break;case 26:c=u.stateNode,u.memoizedState!==null||c===null||De||rr(Jt(c.ownerDocument),u.type,c),Ea(t,u,n),o&&l===null&&i&4&&mc(u),Ca(u,u.return);break;case 12:Ea(t,u,n);break;case 31:Ea(t,u,n),o&&i&4&&gd(t,u);break;case 13:Ea(t,u,n),o&&i&4&&yd(t,u);break;case 22:u.memoizedState===null&&Ea(t,u,n),Ca(u,u.return);break;case 30:Ea(t,u,n),Ca(u,u.return);break;case 7:Ca(u,u.return);default:Ea(t,u,n)}a=a.sibling}}function Ac(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&St(n))}function Oc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&St(e))}function ma(e,a,n,l){var t=(n&335544064)===n;if(a.subtreeFlags&(t?10262:10256))for(a=a.child;a!==null;)zd(e,a,n,l),a=a.sibling;else t&&sd(a)}function zd(e,a,n,l){var t=(n&335544064)===n;t&&a.alternate===null&&a.return!==null&&a.return.alternate!==null&&ui(a);var u=a.flags;switch(a.tag){case 0:case 11:case 15:ma(e,a,n,l),u&2048&&jt(9,a);break;case 1:ma(e,a,n,l);break;case 3:ma(e,a,n,l),t&&Ec&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,a.alternate!==null&&(u=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==u&&(a.refCount++,u!=null&&St(u)));break;case 12:if(u&2048){ma(e,a,n,l),u=a.stateNode;try{var i=a.memoizedProps,o=i.id,c=i.onPostCommit;typeof c=="function"&&c(o,a.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(d){ne(a,a.return,d)}}else ma(e,a,n,l);break;case 31:ma(e,a,n,l);break;case 13:ma(e,a,n,l);break;case 23:break;case 22:i=a.stateNode,o=a.alternate,a.memoizedState!==null?(t&&o!==null&&o.memoizedState===null&&ui(o),i._visibility&2?ma(e,a,n,l):Rt(e,a)):(t&&o!==null&&o.memoizedState!==null&&ui(a),i._visibility&2?ma(e,a,n,l):(i._visibility|=2,Rl(e,a,n,l,(a.subtreeFlags&10256)!==0||!1))),u&2048&&Ac(o,a);break;case 24:ma(e,a,n,l),u&2048&&Oc(a.alternate,a);break;case 30:t&&(u=a.alternate,u!==null&&(Ya(u.child,!0),Ya(a.child,!0))),ma(e,a,n,l);break;default:ma(e,a,n,l)}}function Rl(e,a,n,l,t){for(t=t&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var u=e,i=a,o=n,c=l,d=i.flags;switch(i.tag){case 0:case 11:case 15:Rl(u,i,o,c,t),jt(8,i);break;case 23:break;case 22:var b=i.stateNode;i.memoizedState!==null?b._visibility&2?Rl(u,i,o,c,t):Rt(u,i):(b._visibility|=2,Rl(u,i,o,c,t)),t&&d&2048&&Ac(i.alternate,i);break;case 24:Rl(u,i,o,c,t),t&&d&2048&&Oc(i.alternate,i);break;default:Rl(u,i,o,c,t)}a=a.sibling}}function Rt(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,l=a,t=l.flags;switch(l.tag){case 22:Rt(n,l),t&2048&&Ac(l.alternate,l);break;case 24:Rt(n,l),t&2048&&Oc(l.alternate,l);break;default:Rt(n,l)}a=a.sibling}}var al=8192;function nl(e,a,n){if(e.subtreeFlags&al)for(e=e.child;e!==null;)Ed(e,a,n),e=e.sibling}function Ed(e,a,n){switch(e.tag){case 26:nl(e,a,n),e.flags&al&&(e.memoizedState!==null?Q0(n,za,e.memoizedState,e.memoizedProps):(e=e.stateNode,(a&335544128)===a&&Mm(n,e)));break;case 5:nl(e,a,n),e.flags&al&&(e=e.stateNode,(a&335544128)===a&&Mm(n,e));break;case 3:case 4:var l=za;za=Jt(e.stateNode.containerInfo),nl(e,a,n),za=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=al,al=16777216,nl(e,a,n),al=l):nl(e,a,n));break;case 30:if((e.flags&al)!==0&&(l=e.memoizedProps.name,l!=null&&l!=="auto")){var t=e.stateNode;t.paired=null,aa===null&&(aa=new Map),aa.set(l,t)}nl(e,a,n);break;default:nl(e,a,n)}}function Td(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Bt(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var l=a[n];_e=l,Ad(l,e)}Td(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nd(e),e=e.sibling}function Nd(e){switch(e.tag){case 0:case 11:case 15:Bt(e),e.flags&2048&&zn(9,e,e.return);break;case 3:Bt(e);break;case 12:Bt(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,ri(e)):Bt(e);break;default:Bt(e)}}function ri(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var l=a[n];_e=l,Ad(l,e)}Td(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:zn(8,a,a.return),ri(a);break;case 22:n=a.stateNode,n._visibility&2&&(n._visibility&=-3,ri(a));break;default:ri(a)}e=e.sibling}}function Ad(e,a){for(;_e!==null;){var n=_e;switch(n.tag){case 0:case 11:case 15:zn(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:St(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,_e=l;else e:for(n=e;_e!==null;){l=_e;var t=l.sibling,u=l.return;if(hd(l),l===n){_e=null;break e}if(t!==null){t.return=u,_e=t;break e}_e=u}}}var jh={getCacheForType:function(e){var a=Ue(Se),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n},cacheSignal:function(){return Ue(Se).controller.signal}},Yh=typeof WeakMap=="function"?WeakMap:Map,P=0,ce=null,V=null,J=0,ae=0,na=null,Tn=!1,Bl=!1,Dc=!1,an=0,ye=0,Nn=0,ll=0,si=0,la=0,Ql=0,Qt=null,we=null,_c=!1,fi=0,Od=0,di=1/0,mi=null,An=null,be=0,Ta=null,tl=null,Qa=0,Mc=0,xc=null,Dd=null,Gl=null,Ll=null,Xl=null,Gt=0,vi=null;function ta(){return(P&2)!==0&&J!==0?J&-J:j.T!==null?Lc():Mr()}function _d(){if(la===0)if((J&536870912)===0||X){var e=cu;cu<<=1,(cu&3932160)===0&&(cu=262144),la=e}else la=536870912;return e=Ce.current,e!==null&&(e.flags|=32),la}function Vl(e,a){if(a!=null){var n=e.stateNode,l=n.ref;l===null&&(l=n.ref=rm(Ja(e.memoizedProps,n))),Ll===null&&(Ll=[]),Ll.push(a.bind(null,l))}}function ke(e,a,n){(e===ce&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(Zl(e,0),On(e,J,la,!1)),ot(e,n),((P&2)===0||e!==ce)&&(e===ce&&((P&2)===0&&(ll|=n),ye===4&&On(e,J,la,!1)),Ga(e))}function Md(e,a,n){if((P&6)!==0)throw Error(v(327));var l=!n&&(a&127)===0&&(a&e.expiredLanes)===0||it(e,a),t=l?Bh(e,a):Cc(e,a,!0),u=l;do{if(t===0){Bl&&!l&&On(e,a,0,!1);break}else{if(n=e.current.alternate,u&&!Hh(n)){t=Cc(e,a,!1),u=!1;continue}if(t===2){if(u=a,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){a=i;e:{var o=e;t=Qt;var c=o.current.memoizedState.isDehydrated;if(c&&(Zl(o,i).flags|=256),i=Cc(o,i,!1),i!==2&&i!==6){if(Dc&&!c){o.errorRecoveryDisabledLanes|=u,ll|=u,t=4;break e}u=we,we=t,u!==null&&(we===null?we=u:we.push.apply(we,u))}t=i}if(u=!1,t!==2)continue}}if(t===1){Zl(e,0),On(e,a,0,!0);break}e:{switch(l=e,u=t,u){case 0:case 1:throw Error(v(345));case 4:if((a&4194048)!==a&&(a&62914560)!==a)break;case 6:On(l,a,la,!Tn);break e;case 2:we=null;break;case 3:case 5:break;default:throw Error(v(329))}if((a&62914560)===a&&(t=fi+300-We(),10<t)){if(On(l,a,la,!Tn),su(l,0,!0)!==0)break e;Qa=a,l.timeoutHandle=Ic(xd.bind(null,l,n,we,mi,_c,a,la,ll,Ql,Tn,u,"Throttled",-0,0),t);break e}xd(l,n,we,mi,_c,a,la,ll,Ql,Tn,u,null,-0,0)}}break}while(!0);Ga(e)}function xd(e,a,n,l,t,u,i,o,c,d,b,y,s,h){e.timeoutHandle=-1;var q=a.subtreeFlags,D=(u&335544064)===u;if(y=null,(D||q&8192||(q&16785408)===16785408)&&(y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ma},aa=null,Ed(a,u,y),D&&(q=y,D=e.containerInfo,D=(D.nodeType===9?D:D.ownerDocument).__reactViewTransition,D!=null&&(q.count++,q.waitingForViewTransition=!0,q=kt.bind(q),D.finished.then(q,q))),q=(u&62914560)===u?fi-We():(u&4194048)===u?Od-We():0,q=G0(y,q),q!==null)){Qa=u,e.cancelPendingCommit=q(Qd.bind(null,e,a,u,n,l,t,i,o,c,d,b,y,null,s,h)),On(e,u,i,!d);return}Qd(e,a,u,n,l,t,i,o,c,d,b,y)}function Hh(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var t=n[l],u=t.getSnapshot;t=t.value;try{if(!Pe(u(),t))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function On(e,a,n,l){a=Nr(e,a),a&=~si,a&=~ll,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var t=a;0<t;){var u=31-$e(t),i=1<<u;l[u]=-1,t&=~i}n!==0&&Or(e,n,a)}function hi(){return(P&6)===0?(Lt(0),!1):!0}function Uc(){if(V!==null){if(ae===0)var e=V.return;else e=V,Wa=Jn=null,Go(e),Ml=null,Tt=0,e=V;for(;e!==null;)ed(e.alternate,e),e=e.return;V=null}}function Zl(e,a){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,i0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qa=0,Uc(),ce=e,V=n=wa(e.current,null),J=a,ae=0,na=null,Tn=!1,Bl=it(e,a),Dc=!1,Ql=la=si=ll=Nn=ye=0,we=Qt=null,_c=!1,an=Nr(e,a),Eu(),n}function Ud(e,a){B=null,j.H=ku,a===_l||a===ju?(a=Bs(),ae=3):a===Oo?(a=Bs(),ae=4):ae=a===ac?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,na=a,V===null&&(ye=1,Wu(e,ra(a,e.current)))}function Cd(){var e=Ce.current;return e===null?!0:(J&4194048)===J?Re===null:(J&62914560)===J||(J&536870912)!==0?e===Re:!1}function jd(){var e=j.H;return j.H=ku,e===null?ku:e}function Yd(){var e=j.A;return j.A=jh,e}function bi(){ye=4,Tn||(J&4194048)!==J&&Ce.current!==null||(Bl=!0),(Nn&134217727)===0&&(ll&134217727)===0||ce===null||On(ce,J,la,!1)}function Cc(e,a,n){var l=P;P|=2;var t=jd(),u=Yd();(ce!==e||J!==a)&&(mi=null,Zl(e,a)),a=!1;var i=ye;e:do try{if(ae!==0&&V!==null){var o=V,c=na;switch(ae){case 8:Uc(),i=6;break e;case 3:case 2:case 9:case 6:Ce.current===null&&(a=!0);var d=ae;if(ae=0,na=null,Jl(e,o,c,d),n&&Bl){i=0;break e}break;default:d=ae,ae=0,na=null,Jl(e,o,c,d)}}Rh(),i=ye;break}catch(b){Ud(e,b)}while(!0);return a&&e.shellSuspendCounter++,Wa=Jn=null,P=l,j.H=t,j.A=u,V===null&&(ce=null,J=0,Eu()),i}function Rh(){for(;V!==null;)Hd(V)}function Bh(e,a){var n=P;P|=2;var l=jd(),t=Yd();ce!==e||J!==a?(mi=null,di=We()+500,Zl(e,a)):Bl=it(e,a);e:do try{if(ae!==0&&V!==null){a=V;var u=na;a:switch(ae){case 1:ae=0,na=null,Jl(e,a,u,1);break;case 2:case 9:if(Hs(u)){ae=0,na=null,Rd(a);break}a=function(){ae!==2&&ae!==9||ce!==e||(ae=7),Ga(e)},u.then(a,a);break e;case 3:ae=7;break e;case 4:ae=5;break e;case 7:Hs(u)?(ae=0,na=null,Rd(a)):(ae=0,na=null,Jl(e,a,u,7));break;case 5:var i=null;switch(V.tag){case 26:i=V.memoizedState;case 5:case 27:var o=V;if(i?Dm(i):o.stateNode.complete){ae=0,na=null;var c=o.sibling;if(c!==null)V=c;else{var d=o.return;d!==null?(V=d,gi(d)):V=null}break a}}ae=0,na=null,Jl(e,a,u,5);break;case 6:ae=0,na=null,Jl(e,a,u,6);break;case 8:Uc(),ye=6;break e;default:throw Error(v(462))}}Qh();break}catch(b){Ud(e,b)}while(!0);return Wa=Jn=null,j.H=l,j.A=t,P=n,V!==null?0:(ce=null,J=0,Eu(),ye)}function Qh(){for(;V!==null&&!nv();)Hd(V)}function Hd(e){var a=If(e.alternate,e,an);e.memoizedProps=e.pendingProps,a===null?gi(e):V=a}function Rd(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=Jf(n,a,a.pendingProps,a.type,void 0,J);break;case 11:a=Jf(n,a,a.pendingProps,a.type.render,a.ref,J);break;case 5:Go(a);var l=a;l===Oe&&(X?(_u(l),l.tag===5&&l.stateNode!=null&&(fe=l.stateNode)):(_u(l),X=!0));default:ed(n,a),a=V=Ns(a,an),a=If(n,a,an)}e.memoizedProps=e.pendingProps,a===null?gi(e):V=a}function Jl(e,a,n,l){Wa=Jn=null,Go(a),Ml=null,Tt=0;var t=a.return;try{if(Ah(e,t,a,n,J)){ye=1,Wu(e,ra(n,e.current)),V=null;return}}catch(u){if(t!==null)throw V=t,u;ye=1,Wu(e,ra(n,e.current)),V=null;return}a.flags&32768?(X||l===1?e=!0:Bl||(J&536870912)!==0?e=!1:(Tn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ce.current,l!==null&&l.tag===13&&(l.flags|=16384))),Bd(a,e)):gi(a)}function gi(e){var a=e;do{if((a.flags&32768)!==0){Bd(a,Tn);return}e=a.return;var n=Mh(a.alternate,a,an);if(n!==null){V=n;return}if(a=a.sibling,a!==null){V=a;return}V=a=e}while(a!==null);ye===0&&(ye=5)}function Bd(e,a){do{var n=xh(e.alternate,e);if(n!==null){n.flags&=32767,V=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){V=e;return}V=e=n}while(e!==null);ye=6,V=null}function Qd(e,a,n,l,t,u,i,o,c,d,b,y){e.cancelPendingCommit=null;do yi();while(be!==0);if((P&6)!==0)throw Error(v(327));if(a!==null){if(a===e.current)throw Error(v(177));e===ce&&(V=ce=null,J=0),tl=a,Ta=e,Qa=n,xc=t,Dd=l,Gh(e,a,n,i,o,c,y)}}function Gh(e,a,n,l,t,u,i){var o=a.lanes|a.childLanes;if(Mc=o,o|=vo,dv(e,n,o,l,t,u),Ll=null,(n&335544064)===n?(Xl=vh(e),l=10262):(Xl=null,l=10256),(a.subtreeFlags&l)!==0||(a.flags&l)!==0?(e.callbackNode=null,e.callbackPriority=0,Kh(iu,function(){return Rc(),null})):(e.callbackNode=null,e.callbackPriority=0),li=!1,l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,t=I.p,I.p=2,u=P,P|=4;try{Uh(e,a,n)}finally{P=u,I.p=t,j.T=l}}be=1,li?Gl=d0(i,e.containerInfo,Xl,jc,Yc,Xh,Hc,Rc,Lh):(jc(),Yc(),Hc())}function Lh(e){if(be!==0){var a=Ta.onRecoverableError;a(e,{componentStack:null})}}function Xh(){be===3&&(be=0,Sd(tl,Ta),be=4)}function jc(){if(be===1){be=0;var e=Ta,a=tl,n=Qa,l=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||l){l=j.T,j.T=null;var t=I.p;I.p=2;var u=P;P|=4;try{Ht=ii=!1,pd(a,e,n),n=Wc;var i=hs(e.containerInfo),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&vs(o.ownerDocument.documentElement,o)){if(c!==null&&co(o)){var d=c.start,b=c.end;if(b===void 0&&(b=d),"selectionStart"in o)o.selectionStart=d,o.selectionEnd=Math.min(b,o.value.length);else{var y=o.ownerDocument||document,s=y&&y.defaultView||window;if(s.getSelection){var h=s.getSelection(),q=o.textContent.length,D=Math.min(c.start,q),Q=c.end===void 0?D:Math.min(c.end,q);!h.extend&&D>Q&&(i=Q,Q=D,D=i);var f=ms(o,D),r=ms(o,Q);if(f&&r&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==r.node||h.focusOffset!==r.offset)){var m=y.createRange();m.setStart(f.node,f.offset),h.removeAllRanges(),D>Q?(h.addRange(m),h.extend(r.node,r.offset)):(m.setEnd(r.node,r.offset),h.addRange(m))}}}}for(y=[],h=o;h=h.parentNode;)h.nodeType===1&&y.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<y.length;o++){var g=y[o];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Pl=!!kc,Wc=kc=null}finally{P=u,I.p=t,j.T=l}}e.current=a,be=2}}function Yc(){if(be===2){be=0;var e=Ta,a=tl,n=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var l=I.p;I.p=2;var t=P;P|=4;try{md(e,a.alternate,a)}finally{P=t,I.p=l,j.T=n}}be=3}}function Hc(){if(be===4||be===3){be=0;var e=Gl;Gl=null,lv();var a=Ta,n=tl,l=Qa,t=Dd,u=(l&335544064)===l?10262:10256;if((n.subtreeFlags&u)!==0||(n.flags&u)!==0?be=5:(be=0,tl=Ta=null,Gd(a,a.pendingLanes)),u=a.pendingLanes,u===0&&(An=null),Zi(l),n=n.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(t!==null){n=j.T,u=I.p,I.p=2,j.T=null;try{for(var i=a.onRecoverableError,o=0;o<t.length;o++){var c=t[o];i(c.value,{componentStack:c.stack})}}finally{j.T=n,I.p=u}}if(t=Ll,i=Xl,Xl=null,t!==null&&(Ll=null,i===null&&(i=[]),e!==null))for(c=0;c<t.length;c++)n=(0,t[c])(i),n!==void 0&&e.finished.finally(n);(Qa&3)!==0&&yi(),Ga(a),u=a.pendingLanes,(l&261930)!==0&&(u&42)!==0?a===vi?Gt++:(Gt=0,vi=a):(Gt=0,vi=null),Lt(0)}}function Gd(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,St(a)))}function yi(){return Gl!==null&&(Gl.skipTransition(),Gl=null),jc(),Yc(),Hc(),Rc()}function Rc(){if(be!==5)return!1;var e=Ta,a=Mc;Mc=0;var n=Zi(Qa),l=j.T,t=I.p;try{I.p=32>n?32:n,j.T=null,n=xc,xc=null;var u=Ta,i=Qa;if(be=0,tl=Ta=null,Qa=0,(P&6)!==0)throw Error(v(331));var o=P;if(P|=4,Nd(u.current),zd(u,u.current,i,n),P=o,Lt(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(ut,u)}catch{}return!0}finally{I.p=t,j.T=l,Gd(e,a)}}function Ld(e,a,n){a=ra(n,a),a=ec(e.stateNode,a,2),e=yn(e,a,2),e!==null&&(ot(e,2),Ga(e))}function ne(e,a,n){if(e.tag===3)Ld(e,e,n);else for(;a!==null;){if(a.tag===3){Ld(a,e,n);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(An===null||!An.has(l))){e=ra(n,e),n=Rf(2),l=yn(a,n,2),l!==null&&(Bf(n,l,a,e),ot(l,2),Ga(l));break}}a=a.return}}function Bc(e,a,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Yh;var t=new Set;l.set(a,t)}else t=l.get(a),t===void 0&&(t=new Set,l.set(a,t));t.has(n)||(Dc=!0,t.add(n),e=Vh.bind(null,e,a,n),a.then(e,e))}function Vh(e,a,n){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ce===e&&(J&n)===n&&((ye===4||ye===3&&(J&62914560)===J&&300>We()-fi)&&(P&2)===0?Zl(e,0):si|=n,Ql===J&&(Ql=0)),Ga(e)}function Xd(e,a){a===0&&(a=Ar()),e=Xn(e,a),e!==null&&(ot(e,a),Ga(e))}function Zh(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),Xd(e,n)}function Jh(e,a){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,t=e.memoizedState;t!==null&&(n=t.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(v(314))}l!==null&&l.delete(a),Xd(e,n)}function Kh(e,a){return Gi(e,a)}var Kl=null,wl=null,Qc=!1,pi=!1,Gc=!1,Dn=0;function Ga(e){e!==wl&&e.next===null&&(wl===null?Kl=wl=e:wl=wl.next=e),pi=!0,Qc||(Qc=!0,kh())}function Lt(e,a){if(!Gc&&pi){Gc=!0;do for(var n=!1,l=Kl;l!==null;){if(e!==0){var t=l.pendingLanes;if(t===0)var u=0;else{var i=l.suspendedLanes,o=l.pingedLanes;u=(1<<31-$e(42|e)+1)-1,u&=t&~(i&~o),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Kd(l,u))}else u=J,u=su(l,l===ce?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||it(l,u)||(n=!0,Kd(l,u));l=l.next}while(n);Gc=!1}}function wh(){Vd()}function Vd(){pi=Qc=!1;var e=0;Dn!==0&&u0()&&(e=Dn);for(var a=We(),n=null,l=Kl;l!==null;){var t=l.next,u=Zd(l,a);u===0?(l.next=null,n===null?Kl=t:n.next=t,t===null&&(wl=n)):(n=l,(e!==0||(u&3)!==0)&&(pi=!0)),l=t}be!==0&&be!==5||Lt(e),Dn!==0&&(Dn=0)}function Zd(e,a){for(var n=e.suspendedLanes,l=e.pingedLanes,t=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-$e(u),o=1<<i,c=t[i];c===-1?((o&n)===0||(o&l)!==0)&&(t[i]=fv(o,a)):c<=a&&(e.expiredLanes|=o),u&=~o}if(a=ce,n=J,n=su(e,e===a?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===a&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Li(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||it(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(l!==null&&Li(l),Zi(n)){case 2:case 8:n=Er;break;case 32:n=iu;break;case 268435456:n=Tr;break;default:n=iu}return l=Jd.bind(null,e),n=Gi(n,l),e.callbackPriority=a,e.callbackNode=n,a}return l!==null&&l!==null&&Li(l),e.callbackPriority=2,e.callbackNode=null,2}function Jd(e,a){if(be!==0&&be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(yi()&&e.callbackNode!==n)return null;var l=J;return l=su(e,e===ce?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Md(e,l,a),Zd(e,We()),e.callbackNode!=null&&e.callbackNode===n?Jd.bind(null,e):null)}function Kd(e,a){if(yi())return null;Md(e,a,!0)}function kh(){o0(function(){(P&6)!==0?Gi(zr,wh):Vd()})}function Lc(){if(Dn===0){var e=kn;e===0&&(e=ou,ou<<=1,(ou&261888)===0&&(ou=256)),Dn=e}return Dn}function wd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hu(e)}function Wh(e,a,n,l,t){if(a==="submit"&&n&&n.stateNode===t){var u=wd((t[Ve]||null).action),i=l.submitter;i&&(a=(a=i[Ve]||null)?wd(a.formAction):i.getAttribute("formAction"),a!==null&&(u=a,i=null));var o=new pu("action","action",null,l,t);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Dn!==0){var c=new FormData(t,i);Wo(n,{pending:!0,data:c,method:t.method,action:u},null,c)}}else typeof u=="function"&&(o.preventDefault(),c=new FormData(t,i),Wo(n,{pending:!0,data:c,method:t.method,action:u},u,c))},currentTarget:t}]})}}for(var Xc=0;Xc<mo.length;Xc++){var Vc=mo[Xc],Fh=Vc.toLowerCase(),$h=Vc[0].toUpperCase()+Vc.slice(1);qa(Fh,"on"+$h)}qa(ys,"onAnimationEnd"),qa(ps,"onAnimationIteration"),qa(qs,"onAnimationStart"),qa("dblclick","onDoubleClick"),qa("focusin","onFocus"),qa("focusout","onBlur"),qa(ih,"onTransitionRun"),qa(oh,"onTransitionStart"),qa(ch,"onTransitionCancel"),qa(Ss,"onTransitionEnd"),hl("onMouseEnter",["mouseout","mouseover"]),hl("onMouseLeave",["mouseout","mouseover"]),hl("onPointerEnter",["pointerout","pointerover"]),hl("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ih=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xt));function kd(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],t=l.event;l=l.listeners;e:{var u=void 0;if(a)for(var i=l.length-1;0<=i;i--){var o=l[i],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==u&&t.isPropagationStopped())break e;u=o,t.currentTarget=d;try{u(t)}catch(b){zu(b)}t.currentTarget=null,u=c}else for(i=0;i<l.length;i++){if(o=l[i],c=o.instance,d=o.currentTarget,o=o.listener,c!==u&&t.isPropagationStopped())break e;u=o,t.currentTarget=d;try{u(t)}catch(b){zu(b)}t.currentTarget=null,u=c}}}}function Z(e,a){var n=a[Ur];n===void 0&&(n=a[Ur]=new Set);var l=e+"__bubble";n.has(l)||(Wd(a,e,2,!1),n.add(l))}function Zc(e,a,n){var l=0;a&&(l|=4),Wd(n,e,l,a)}var qi="_reactListening"+Math.random().toString(36).slice(2);function Jc(e){if(!e[qi]){e[qi]=!0,Yr.forEach(function(n){n!=="selectionchange"&&(Ih.has(n)||Zc(n,!1,e),Zc(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[qi]||(a[qi]=!0,Zc("selectionchange",!1,a))}}function Wd(e,a,n,l){switch(Bm(a)){case 2:var t=Z0;break;case 8:t=J0;break;default:t=fr}n=t.bind(null,a,n,e),t=void 0,!Ii||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(t=!0),l?t!==void 0?e.addEventListener(a,n,{capture:!0,passive:t}):e.addEventListener(a,n,!0):t!==void 0?e.addEventListener(a,n,{passive:t}):e.addEventListener(a,n,!1)}function Kc(e,a,n,l,t){var u=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var o=l.stateNode.containerInfo;if(o===t)break;if(i===4)for(i=l.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===t)return;i=i.return}for(;o!==null;){if(i=Bn(o),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){l=u=i;continue e}o=o.parentNode}}l=l.return}kr(function(){var d=u,b=Fi(n),y=[];e:{var s=zs.get(e);if(s!==void 0){var h=pu,q=e;switch(e){case"keypress":if(gu(n)===0)break e;case"keydown":case"keyup":h=Hv;break;case"focusin":q="focus",h=no;break;case"focusout":q="blur",h=no;break;case"beforeblur":case"afterblur":h=no;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=$r;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Lv;break;case ys:case ps:case qs:h=Ov;break;case Ss:h=Vv;break;case"scroll":case"scrollend":h=zv;break;case"wheel":h=Jv;break;case"copy":case"cut":case"paste":h=_v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Pr;break;case"submit":h=Qv;break;case"toggle":case"beforetoggle":h=wv}var D=(a&4)!==0,Q=!D&&(e==="scroll"||e==="scrollend"),f=D?s!==null?s+"Capture":null:s;D=[];for(var r=d,m;r!==null;){var g=r;if(m=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||m===null||f===null||(g=st(r,f),g!=null&&D.push(Vt(r,g,m))),Q)break;r=r.return}0<D.length&&(s=new h(s,q,null,n,b),y.push({event:s,listeners:D}))}}if((a&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",s=e==="mouseout"||e==="pointerout",h&&n!==Wi&&(q=n.relatedTarget||n.fromElement)&&(Bn(q)||q[dl]))break e;(s||h)&&(q=b.window===b?b:(h=b.ownerDocument)?h.defaultView||h.parentWindow:window,s?(h=n.relatedTarget||n.toElement,s=d,h=h?Bn(h):null,h!==null&&(Q=S(h),D=h.tag,h!==Q||D!==5&&D!==27&&D!==6)&&(h=null)):(s=null,h=d),s!==h&&(D=$r,g="onMouseLeave",f="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(D=Pr,g="onPointerLeave",f="onPointerEnter",r="pointer"),Q=s==null?q:rt(s),m=h==null?q:rt(h),q=new D(g,r+"leave",s,n,b),q.target=Q,q.relatedTarget=m,g=null,Bn(b)===d&&(D=new D(f,r+"enter",h,n,b),D.target=m,D.relatedTarget=Q,g=D),Q=g,D=s&&h?Aa(s,h,Ph):null,s!==null&&Fd(y,q,s,D,!1),h!==null&&Q!==null&&Fd(y,Q,h,D,!0)))}e:{if(s=d?rt(d):window,h=s.nodeName&&s.nodeName.toLowerCase(),h==="select"||h==="input"&&s.type==="file")var O=os;else if(us(s))if(cs)O=lh;else{O=ah;var K=eh}else h=s.nodeName,!h||h.toLowerCase()!=="input"||s.type!=="checkbox"&&s.type!=="radio"?d&&ki(d.elementType)&&(O=os):O=nh;if(O&&(O=O(e,d))){is(y,O,n,b);break e}K&&K(e,s,d)}switch(K=d?rt(d):window,e){case"focusin":(us(K)||K.contentEditable==="true")&&(Sl=K,ro=d,yt=null);break;case"focusout":yt=ro=Sl=null;break;case"mousedown":so=!0;break;case"contextmenu":case"mouseup":case"dragend":so=!1,bs(y,n,b);break;case"selectionchange":if(uh)break;case"keydown":case"keyup":bs(y,n,b)}var _;if(to)e:{switch(e){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else ql?ls(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(es&&n.locale!=="ko"&&(ql||U!=="onCompositionStart"?U==="onCompositionEnd"&&ql&&(_=Wr()):(rn=b,Pi="value"in rn?rn.value:rn.textContent,ql=!0)),K=Si(d,U),0<K.length&&(U=new Ir(U,e,null,n,b),y.push({event:U,listeners:K}),_?U.data=_:(_=ts(n),_!==null&&(U.data=_)))),(_=Wv?Fv(e,n):$v(e,n))&&(U=Si(d,"onBeforeInput"),0<U.length&&(K=new Ir("onBeforeInput","beforeinput",null,n,b),y.push({event:K,listeners:U}),K.data=_)),Wh(y,e,d,n,b)}kd(y,a)})}function Vt(e,a,n){return{instance:e,listener:a,currentTarget:n}}function Si(e,a){for(var n=a+"Capture",l=[];e!==null;){var t=e,u=t.stateNode;if(t=t.tag,t!==5&&t!==26&&t!==27||u===null||(t=st(e,n),t!=null&&l.unshift(Vt(e,t,u)),t=st(e,a),t!=null&&l.push(Vt(e,t,u))),e.tag===3)return l;e=e.return}return[]}function Ph(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fd(e,a,n,l,t){for(var u=a._reactName,i=[];n!==null&&n!==l;){var o=n,c=o.alternate,d=o.stateNode;if(o=o.tag,c!==null&&c===l)break;o!==5&&o!==26&&o!==27||d===null||(c=d,t?(d=st(n,u),d!=null&&i.unshift(Vt(n,d,c))):t||(d=st(n,u),d!=null&&i.push(Vt(n,d,c)))),n=n.return}i.length!==0&&e.push({event:a,listeners:i})}var e0=/\r\n?/g,a0=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(e0,`
`).replace(a0,"")}function Id(e,a){return a=$d(a),$d(e)===a}function le(e,a,n,l,t,u){switch(n){case"children":if(typeof l=="string")a==="body"||a==="textarea"&&l===""||gl(e,l);else if(typeof l=="number"||typeof l=="bigint")a!=="body"&&gl(e,""+l);else return;break;case"className":vu(e,"class",l);break;case"tabIndex":vu(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":vu(e,n,l);break;case"style":Kr(e,l,u);return;case"data":if(a!=="object"){vu(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=hu(l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(a!=="input"&&le(e,a,"name",t.name,t,null),le(e,a,"formEncType",t.formEncType,t,null),le(e,a,"formMethod",t.formMethod,t,null),le(e,a,"formTarget",t.formTarget,t,null)):(le(e,a,"encType",t.encType,t,null),le(e,a,"method",t.method,t,null),le(e,a,"target",t.target,t,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=hu(l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Ma);return;case"onScroll":l!=null&&Z("scroll",e);return;case"onScrollEnd":l!=null&&Z("scrollend",e);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(v(61));if(n=l.__html,n!=null){if(t.children!=null)throw Error(v(60));(u!=null?u.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=hu(l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Z("beforetoggle",e),Z("toggle",e),mu(e,"popover",l);break;case"xlinkActuate":Va(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Va(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Va(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Va(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Va(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Va(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Va(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Va(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Va(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":mu(e,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=qv.get(n)||n,mu(e,n,l);else return}F=!0}function wc(e,a,n,l,t,u){switch(n){case"style":Kr(e,l,u);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(v(61));if(n=l.__html,n!=null){if(t.children!=null)throw Error(v(60));(u!=null?u.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof l=="string")gl(e,l);else if(typeof l=="number"||typeof l=="bigint")gl(e,""+l);else return;break;case"onScroll":l!=null&&Z("scroll",e);return;case"onScrollEnd":l!=null&&Z("scrollend",e);return;case"onClick":l!=null&&(e.onclick=Ma);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Hr.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(t=n.endsWith("Capture"),u=n.slice(2,t?n.length-7:void 0),a=e[Ve]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(u,a,t),typeof l=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(u,l,t);break e}F=!0,n in e?e[n]=l:l===!0?e.setAttribute(n,""):mu(e,n,l)}return}F=!0}function He(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",e),Z("load",e);var l=!1,t=!1,u;for(u in n)if(n.hasOwnProperty(u)){var i=n[u];if(i!=null)switch(u){case"src":l=!0;break;case"srcSet":t=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(v(137,a));default:le(e,a,u,i,n,null)}}t&&le(e,a,"srcSet",n.srcSet,n,null),l&&le(e,a,"src",n.src,n,null);return;case"input":Z("invalid",e);var o=u=i=t=null,c=null,d=null;for(l in n)if(n.hasOwnProperty(l)){var b=n[l];if(b!=null)switch(l){case"name":t=b;break;case"type":i=b;break;case"checked":c=b;break;case"defaultChecked":d=b;break;case"value":u=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(v(137,a));break;default:le(e,a,l,b,n,null)}}Xr(e,u,o,c,d,i,t,!1);return;case"select":Z("invalid",e),l=i=u=null;for(t in n)if(n.hasOwnProperty(t)&&(o=n[t],o!=null))switch(t){case"value":u=o;break;case"defaultValue":i=o;break;case"multiple":l=o;default:le(e,a,t,o,n,null)}a=u,n=i,e.multiple=!!l,a!=null?bl(e,!!l,a,!1):n!=null&&bl(e,!!l,n,!0);return;case"textarea":Z("invalid",e),u=t=l=null;for(i in n)if(n.hasOwnProperty(i)&&(o=n[i],o!=null))switch(i){case"value":l=o;break;case"defaultValue":t=o;break;case"children":u=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(v(91));break;default:le(e,a,i,o,n,null)}Zr(e,l,t,u);return;case"option":for(c in n)if(n.hasOwnProperty(c)&&(l=n[c],l!=null))switch(c){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:le(e,a,c,l,n,null)}return;case"dialog":Z("beforetoggle",e),Z("toggle",e),Z("cancel",e),Z("close",e);break;case"iframe":case"object":Z("load",e);break;case"video":case"audio":for(l=0;l<Xt.length;l++)Z(Xt[l],e);break;case"image":Z("error",e),Z("load",e);break;case"details":Z("toggle",e);break;case"embed":case"source":case"link":Z("error",e),Z("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in n)if(n.hasOwnProperty(d)&&(l=n[d],l!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(v(137,a));default:le(e,a,d,l,n,null)}return;default:if(ki(a)){for(b in n)n.hasOwnProperty(b)&&(l=n[b],l!==void 0&&wc(e,a,b,l,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(l=n[o],l!=null&&le(e,a,o,l,n,null))}var n0={};function l0(e,a,n,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var t=null,u=null,i=null,o=null,c=null,d=null,b=null;for(h in n){var y=n[h];if(n.hasOwnProperty(h)&&y!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":c=y;default:l.hasOwnProperty(h)||le(e,a,h,null,l,y)}}for(var s in l){var h=l[s];if(y=n[s],l.hasOwnProperty(s)&&(h!=null||y!=null))switch(s){case"type":h!==y&&(F=!0),u=h;break;case"name":h!==y&&(F=!0),t=h;break;case"checked":h!==y&&(F=!0),d=h;break;case"defaultChecked":h!==y&&(F=!0),b=h;break;case"value":h!==y&&(F=!0),i=h;break;case"defaultValue":h!==y&&(F=!0),o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(v(137,a));break;default:h!==y&&le(e,a,s,h,l,y)}}Ki(e,i,o,c,d,b,u,t);return;case"select":h=i=o=s=null;for(u in n)if(c=n[u],n.hasOwnProperty(u)&&c!=null)switch(u){case"value":break;case"multiple":h=c;default:l.hasOwnProperty(u)||le(e,a,u,null,l,c)}for(t in l)if(u=l[t],c=n[t],l.hasOwnProperty(t)&&(u!=null||c!=null))switch(t){case"value":u!==c&&(F=!0),s=u;break;case"defaultValue":u!==c&&(F=!0),o=u;break;case"multiple":u!==c&&(F=!0),i=u;default:u!==c&&le(e,a,t,u,l,c)}a=o,n=i,l=h,s!=null?bl(e,!!n,s,!1):!!l!=!!n&&(a!=null?bl(e,!!n,a,!0):bl(e,!!n,n?[]:"",!1));return;case"textarea":h=s=null;for(o in n)if(t=n[o],n.hasOwnProperty(o)&&t!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:le(e,a,o,null,l,t)}for(i in l)if(t=l[i],u=n[i],l.hasOwnProperty(i)&&(t!=null||u!=null))switch(i){case"value":t!==u&&(F=!0),s=t;break;case"defaultValue":t!==u&&(F=!0),h=t;break;case"children":break;case"dangerouslySetInnerHTML":if(t!=null)throw Error(v(91));break;default:t!==u&&le(e,a,i,t,l,u)}Vr(e,s,h);return;case"option":for(var q in n)if(s=n[q],n.hasOwnProperty(q)&&s!=null&&!l.hasOwnProperty(q))switch(q){case"selected":e.selected=!1;break;default:le(e,a,q,null,l,s)}for(c in l)if(s=l[c],h=n[c],l.hasOwnProperty(c)&&s!==h&&(s!=null||h!=null))switch(c){case"selected":s!==h&&(F=!0),e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:le(e,a,c,s,l,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var D in n)s=n[D],n.hasOwnProperty(D)&&s!=null&&!l.hasOwnProperty(D)&&le(e,a,D,null,l,s);for(d in l)if(s=l[d],h=n[d],l.hasOwnProperty(d)&&s!==h&&(s!=null||h!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(s!=null)throw Error(v(137,a));break;default:le(e,a,d,s,l,h)}return;default:if(ki(a)){for(var Q in n)s=n[Q],n.hasOwnProperty(Q)&&s!==void 0&&!l.hasOwnProperty(Q)&&wc(e,a,Q,void 0,l,s);for(b in l)s=l[b],h=n[b],!l.hasOwnProperty(b)||s===h||s===void 0&&h===void 0||wc(e,a,b,s,l,h);return}}for(var f in n)s=n[f],n.hasOwnProperty(f)&&s!=null&&!l.hasOwnProperty(f)&&le(e,a,f,null,l,s);for(y in l)s=l[y],h=n[y],!l.hasOwnProperty(y)||s===h||s==null&&h==null||le(e,a,y,s,l,h)}function Pd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function t0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var t=n[l],u=t.transferSize,i=t.initiatorType,o=t.duration;if(u&&o&&Pd(i)){for(i=0,o=t.responseEnd,l+=1;l<n.length;l++){var c=n[l],d=c.startTime;if(d>o)break;var b=c.transferSize,y=c.initiatorType;b&&Pd(y)&&(c=c.responseEnd,i+=b*(c<o?1:(o-d)/(c-d)))}if(--l,a+=8*(u+i)/(t.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kc=null,Wc=null;function Zt(e){return e.nodeType===9?e:e.ownerDocument}function em(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function am(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function nm(e,a,n,l){return n=Zt(n).createElement(e),n[xe]=l,n[Ve]=a,He(n,e,a),Ae(n),n}function Fc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var $c=null;function u0(){var e=window.event;return e&&e.type==="popstate"?e===$c?!1:($c=e,!0):($c=null,!1)}var Ic=typeof setTimeout=="function"?setTimeout:void 0,i0=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,tm=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ic,o0=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(e){return lm.resolve(null).then(e).catch(c0)}:Ic;function c0(e){setTimeout(function(){throw e})}function _n(e){return e==="head"}function um(e,a){var n=a,l=0;do{var t=n.nextSibling;if(e.removeChild(n),t&&t.nodeType===8)if(n=t.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(t),et(a);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")ir(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ir(n);for(var u=n.firstChild;u;){var i=u.nextSibling,o=u.nodeName;u[ct]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=i}}else n==="body"&&ir(e.ownerDocument.body);n=t}while(n);et(a)}function im(e,a){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?a?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(a?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function om(e,a,n){if(a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,e.style.viewTransitionName=a,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(a=e.getClientRects(),a.length===1)var l=1;else for(var t=l=0;t<a.length;t++){var u=a[t];0<u.width&&0<u.height&&l++}l===1&&(e=e.style,e.display=a.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function cm(e,a){e=e.style,a=a.style;var n=a!=null?a.hasOwnProperty("viewTransitionName")?a.viewTransitionName:a.hasOwnProperty("view-transition-name")?a["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=a!=null?a.hasOwnProperty("viewTransitionClass")?a.viewTransitionClass:a.hasOwnProperty("view-transition-class")?a["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(a==null?e.display=e.margin="":(n=a.display,e.display=n==null||typeof n=="boolean"?"":n,n=a.margin,n!=null?e.margin=n:(n=a.hasOwnProperty("marginTop")?a.marginTop:a["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,a=a.hasOwnProperty("marginBottom")?a.marginBottom:a["margin-bottom"],e.marginBottom=a==null||typeof a=="boolean"?"":a)))}function r0(e,a,n){return n=n.ownerDocument.defaultView,{rect:e,abs:a.position==="absolute"||a.position==="fixed",clip:a.clipPath!=="none"||a.overflow!=="visible"||a.filter!=="none"||a.mask!=="none"||a.mask!=="none"||a.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Pc(e){var a=e.getBoundingClientRect(),n=getComputedStyle(e);return r0(a,n,e)}function s0(e){return e.documentElement.clientHeight}function f0(e){this.addEventListener("load",e),this.addEventListener("error",e)}function d0(e,a,n,l,t,u,i,o,c){var d=a.nodeType===9?a:a.ownerDocument;try{var b=d.startViewTransition({update:function(){var s=d.defaultView,h=s.navigation&&s.navigation.transition,q=d.fonts.status;l();var D=[];if(q==="loaded"&&(s0(d),d.fonts.status==="loading"&&D.push(d.fonts.ready)),q=D.length,e!==null)for(var Q=e.suspenseyImages,f=0,r=0;r<Q.length;r++){var m=Q[r];if(!m.complete){var g=m.getBoundingClientRect();if(0<g.bottom&&0<g.right&&g.top<s.innerHeight&&g.left<s.innerWidth){if(f+=_m(m),f>Ti){D.length=q;break}m=new Promise(f0.bind(m)),D.push(m)}}}if(0<D.length)return s=Promise.race([Promise.all(D),new Promise(function(O){return setTimeout(O,500)})]).then(t,t),(h?Promise.allSettled([h.finished,s]):s).then(u,u);if(t(),h)return h.finished.then(u,u);u()},types:n});d.__reactViewTransition=b;var y=[];return b.ready.then(function(){for(var s=d.documentElement.getAnimations({subtree:!0}),h=0;h<s.length;h++){var q=s[h],D=q.effect,Q=D.pseudoElement;if(Q!=null&&Q.startsWith("::view-transition")){y.push(q),q=D.getKeyframes();for(var f=Q=void 0,r=!0,m=0;m<q.length;m++){var g=q[m],O=g.width;if(Q===void 0)Q=O;else if(Q!==O){r=!1;break}if(O=g.height,f===void 0)f=O;else if(f!==O){r=!1;break}delete g.width,delete g.height,g.transform==="none"&&delete g.transform}r&&Q!==void 0&&f!==void 0&&(D.setKeyframes(q),r=getComputedStyle(D.target,D.pseudoElement),r.width!==Q||r.height!==f)&&(r=q[0],r.width=Q,r.height=f,r=q[q.length-1],r.width=Q,r.height=f,D.setKeyframes(q))}}i()},function(s){d.__reactViewTransition===b&&(d.__reactViewTransition=null);try{if(typeof s=="object"&&s!==null)switch(s.name){case"InvalidStateError":(s.message==="View transition was skipped because document visibility state is hidden."||s.message==="Skipping view transition because document visibility state has become hidden."||s.message==="Skipping view transition because viewport size changed."||s.message==="Transition was aborted because of invalid state")&&(s=null)}s!==null&&c(s)}finally{l(),t(),i()}}),b.finished.finally(function(){for(var s=0;s<y.length;s++)y[s].cancel();d.__reactViewTransition===b&&(d.__reactViewTransition=null),o()}),b}catch{return l(),t(),i(),null}}function ul(e,a){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+a+")"}ul.prototype.animate=function(e,a){return a=typeof a=="number"?{duration:a}:W({},a),a.pseudoElement=this._selector,this._scope.animate(e,a)},ul.prototype.getAnimations=function(){for(var e=this._scope,a=this._selector,n=e.getAnimations({subtree:!0}),l=[],t=0;t<n.length;t++){var u=n[t].effect;u!==null&&u.target===e&&u.pseudoElement===a&&l.push(n[t])}return l},ul.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function rm(e){return{name:e,group:new ul("group",e),imagePair:new ul("image-pair",e),old:new ul("old",e),new:new ul("new",e)}}function ua(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ua.prototype.addEventListener=function(e,a,n){var l=null,t=null;if(!(n!=null&&typeof n!="boolean"&&(l=n.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(fm(u,e,a,n)===-1){var i=this,o=a;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(c){i.removeEventListener(e,a,n),typeof a=="function"?a.call(this,c):a.handleEvent(c)}),l!==null&&(t=i.removeEventListener.bind(i,e,a,n),l.addEventListener("abort",t,{once:!0}),t=l.removeEventListener.bind(l,"abort",t)),l=kl(n),u.push({type:e,listener:a,optionsOrUseCapture:n,attachedListener:o,cleanup:t}),L(this._fragmentFiber.child,!1,m0,e,o,l)}this._eventListeners=u}};function m0(e,a,n,l){return w(e).addEventListener(a,n,l),!1}ua.prototype.removeEventListener=function(e,a,n){var l=this._eventListeners;if(l!==null&&(a=fm(l,e,a,n),a!==-1)){var t=l[a];n=t.attachedListener;var u=t.cleanup;t=kl(t.optionsOrUseCapture),L(this._fragmentFiber.child,!1,v0,e,n,t),l.splice(a,1),u!==null&&u()}};function v0(e,a,n,l){return w(e).removeEventListener(a,n,l),!1}function kl(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function sm(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function fm(e,a,n,l){if(e.length===0)return-1;l=sm(l);for(var t=0;t<e.length;t++){var u=e[t];if(u.type===a&&u.listener===n&&sm(u.optionsOrUseCapture)===l)return t}return-1}ua.prototype.dispatchEvent=function(e){var a=x(this._fragmentFiber);if(a===null)return!0;a=w(a);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var l=a.nodeType===9?a.createComment(""):document.createTextNode("");if(n)for(var t=0;t<n.length;t++){var u=n[t];l.addEventListener(u.type,u.attachedListener,kl(u.optionsOrUseCapture))}if(a.appendChild(l),e=l.dispatchEvent(e),n)for(t=0;t<n.length;t++)u=n[t],l.removeEventListener(u.type,u.attachedListener,kl(u.optionsOrUseCapture));return a.removeChild(l),e}return a.dispatchEvent(e)},ua.prototype.focus=function(e){L(this._fragmentFiber.child,!0,dm,e,void 0,void 0)};function dm(e,a){return e.tag===6?!1:(e=w(e),A0(e,a))}ua.prototype.focusLast=function(e){var a=[];L(this._fragmentFiber.child,!0,er,a,void 0,void 0);for(var n=a.length-1;0<=n&&!dm(a[n],e);n--);};function er(e,a){return a.push(e),!1}ua.prototype.blur=function(){var e=x(this._fragmentFiber);e!==null&&(e=w(e),e=Zt(e).activeElement,e!==null&&L(this._fragmentFiber.child,!1,h0,e,void 0,void 0))};function h0(e,a){return e.tag===6?!1:(e=w(e),e===a||e.contains(a)?(a.blur(),!0):!1)}ua.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),L(this._fragmentFiber.child,!1,b0,e,void 0,void 0)};function b0(e,a){return e.tag===6||(e=w(e),a.observe(e)),!1}ua.prototype.unobserveUsing=function(e){var a=this._observers;if(a!==null&&a.has(e)){a.delete(e),L(this._fragmentFiber.child,!1,g0,e,void 0,void 0);for(var n=a=0;n<Na.length;n++){var l=Na[n];l.fragmentInstance===this&&l.observer===e?e.unobserve(l.instance):Na[a++]=l}Na.length=a}};function g0(e,a){return e.tag===6||(e=w(e),a.unobserve(e)),!1}var Na=[],ar=!1;function y0(e,a,n){Na.push({fragmentInstance:e,observer:a,instance:n}),ar||(ar=!0,O0(function(){ar=!1;var l=Na;Na=[];for(var t=0;t<l.length;t++){var u=l[t];u.observer.unobserve(u.instance)}}))}ua.prototype.getClientRects=function(){var e=[];return L(this._fragmentFiber.child,!1,p0,e,void 0,void 0),e};function p0(e,a){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),a.push.apply(a,n.getClientRects())}else e=w(e),a.push.apply(a,e.getClientRects());return!1}ua.prototype.getRootNode=function(e){var a=x(this._fragmentFiber);return a===null?this:w(a).getRootNode(e)},ua.prototype.compareDocumentPosition=function(e){var a=x(this._fragmentFiber);if(a===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];L(this._fragmentFiber.child,!1,er,n,void 0,void 0);var l=w(a);if(n.length===0){if(n=l,ba(this._fragmentFiber)){e:{for(a=this._fragmentFiber.return;a!==null;){if(a.tag===4){a=a.stateNode.containerInfo;break e}if(a.tag===3||a.tag===5||a.tag===27)break;a=a.return}a=null}a!=null&&(n=a)}a=this._fragmentFiber;var t=l=n.compareDocumentPosition(e);return n===e?t=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=ie(a)[1],n===null?t=Node.DOCUMENT_POSITION_PRECEDING:(e=w(n).compareDocumentPosition(e),t=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),t|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}a=w(n[0]),t=w(n[n.length-1]);var u=ba(this._fragmentFiber)?a.parentElement:l;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=u.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY;var i=a.compareDocumentPosition(e),o=t.compareDocumentPosition(e),c=i&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=l&&u&&i&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,a=l&&a===e||u&&t===e||c||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&a===e||!u&&t===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:i,a&Node.DOCUMENT_POSITION_DISCONNECTED||a&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||q0(a,this._fragmentFiber,n[0],n[n.length-1],e)?a:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function q0(e,a,n,l,t){var u=Bn(t);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===a||u.alternate===a)){n=!0;break e}u=u.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=t.ownerDocument,t===u||t===u.documentElement||t===u.body;e:{for(u=a,a=x(a);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==a&&u.alternate!==a)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((a=!!u)&&!(a=u===n)&&(a=Aa(n,u,ya),a===null?a=!1:(L(a,!0,me,u,n),u=ia,ia=null,a=u!==null)),a):e&Node.DOCUMENT_POSITION_FOLLOWING?((a=!!u)&&!(a=u===l)&&(a=Aa(l,u,ya),a===null?a=!1:(L(a,!0,re,u,l),u=ia,T=ia=null,a=u!==null)),a):!1}function mm(e,a){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,a?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ua.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(v(566));var a=[];L(this._fragmentFiber.child,!1,er,a,void 0,void 0);var n=e!==!1;if(a.length===0){var l=ie(this._fragmentFiber);if(l=n?l[1]||l[0]||x(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){e=w(l),mm(e,n);return}if(l=w(l),l.nodeType!==9){if(l.nodeType===11){n="host"in l?l.host:null,n!==null&&n.scrollIntoView(e);return}l.scrollIntoView(e)}}for(l=n?a.length-1:0;l!==(n?-1:a.length);){var t=a[l];t.tag===6?(t=w(t),mm(t,n)):w(t).scrollIntoView(e),l+=n?-1:1}};function S0(e,a){return e=w(e),vm(e,a),!1}function vm(e,a){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(a)}function hm(e,a){var n=a._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var t=n[l];e.addEventListener(t.type,t.attachedListener,kl(t.optionsOrUseCapture))}e.nodeType!==3&&(n=a._observers,n!==null&&n.forEach(function(u){for(var i=0,o=0;o<Na.length;o++){var c=Na[o];(c.fragmentInstance!==a||c.observer!==u||c.instance!==e)&&(Na[i++]=c)}Na.length=i,u.observe(e)}),vm(e,a))}function z0(e,a){var n=a._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var t=n[l];e.removeEventListener(t.type,t.attachedListener,kl(t.optionsOrUseCapture))}e.nodeType!==3&&(n=a._observers,n!==null&&n.forEach(function(u){typeof u.rootMargin=="string"?y0(a,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(a))}function nr(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":nr(n),du(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function E0(e,a,n,l){for(;e.nodeType===1;){var t=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ct])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==t.rel||e.getAttribute("href")!==(t.href==null||t.href===""?null:t.href)||e.getAttribute("crossorigin")!==(t.crossOrigin==null?null:t.crossOrigin)||e.getAttribute("title")!==(t.title==null?null:t.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(t.src==null?null:t.src)||e.getAttribute("type")!==(t.type==null?null:t.type)||e.getAttribute("crossorigin")!==(t.crossOrigin==null?null:t.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var u=t.name==null?null:""+t.name;if(t.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=va(e.nextSibling),e===null)break}return null}function T0(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=va(e.nextSibling),e===null))return null;return e}function bm(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=va(e.nextSibling),e===null))return null;return e}function lr(e){return e.data==="$?"||e.data==="$~"}function tr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function N0(e,a){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||n.readyState!=="loading")a();else{var l=function(){a(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function va(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var ur=null;function gm(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(a===0)return va(e.nextSibling);a--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||a++}e=e.nextSibling}return null}function ym(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(a===0)return e;a--}else n!=="/$"&&n!=="/&"||a++}e=e.previousSibling}return null}function A0(e,a){function n(){l=!0}if(e.ownerDocument.activeElement===e)return!0;var l=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,a)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return l}function O0(e){tm(function(){tm(function(a){return e(a)})})}function pm(e,a,n){switch(a=Zt(n),e){case"html":if(e=a.documentElement,!e)throw Error(v(452));return e;case"head":if(e=a.head,!e)throw Error(v(453));return e;case"body":if(e=a.body,!e)throw Error(v(454));return e;default:throw Error(v(451))}}function qm(e,a,n){for(var l in n){var t=n[l];n.hasOwnProperty(l)&&t!=null&&le(e,a,l,null,n0,t)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ma&&(e.onclick=null),du(e)}function ir(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);du(e)}var ha=new Map,Sm=new Set;function Jt(e){if(typeof e.getRootNode=="function"){var a=e.getRootNode();if(a.nodeType===9||a.nodeType===11)return a}return e.nodeType===9?e:e.ownerDocument}var nn=I.d;I.d={f:D0,r:_0,D:M0,C:x0,L:U0,m:C0,X:Y0,S:j0,M:H0};function D0(){var e=nn.f(),a=hi();return e||a}function _0(e){var a=ml(e);a!==null&&a.tag===5&&a.type==="form"?Ef(a):nn.r(e)}var Wl=typeof document>"u"?null:document;function zm(e,a,n){var l=Wl;if(l&&typeof a=="string"&&a){var t=oa(a);t='link[rel="'+e+'"][href="'+t+'"]',typeof n=="string"&&(t+='[crossorigin="'+n+'"]'),Sm.has(t)||(Sm.add(t),e={rel:e,crossOrigin:n,href:a},l.querySelector(t)===null&&(a=l.createElement("link"),He(a,"link",e),Ae(a),l.head.appendChild(a)))}}function M0(e){nn.D(e),zm("dns-prefetch",e,null)}function x0(e,a){nn.C(e,a),zm("preconnect",e,a)}function U0(e,a,n){nn.L(e,a,n);var l=Wl;if(l&&e&&a){var t='link[rel="preload"][as="'+oa(a)+'"]';a==="image"&&n&&n.imageSrcSet?(t+='[imagesrcset="'+oa(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(t+='[imagesizes="'+oa(n.imageSizes)+'"]')):t+='[href="'+oa(e)+'"]';var u=t;switch(a){case"style":u=Fl(e);break;case"script":u=$l(e)}if(!(ha.has(u)||(e=W({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),ha.set(u,e),l.querySelector(t)!==null||a==="style"&&l.querySelector(Kt(u))||a==="script"&&l.querySelector(wt(u))))){var i=l.createElement("link");He(i,"link",e),a==="style"&&(i[fu]=!0,i.onload=i.onerror=function(){jr(i)}),Ae(i),l.head.appendChild(i)}}}function C0(e,a){nn.m(e,a);var n=Wl;if(n&&e){var l=a&&typeof a.as=="string"?a.as:"script",t='link[rel="modulepreload"][as="'+oa(l)+'"][href="'+oa(e)+'"]',u=t;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=$l(e)}if(!ha.has(u)&&(e=W({rel:"modulepreload",href:e},a),ha.set(u,e),n.querySelector(t)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wt(u)))return}l=n.createElement("link"),He(l,"link",e),Ae(l),n.head.appendChild(l)}}}function j0(e,a,n){nn.S(e,a,n);var l=Wl;if(l&&e){var t=vl(l).hoistableStyles,u=Fl(e);a=a||"default";var i=t.get(u);if(!i){var o={loading:0,preload:null};if(i=l.querySelector(Kt(u)))o.loading=5;else{e=W({rel:"stylesheet",href:e,"data-precedence":a},n),(n=ha.get(u))&&or(e,n);var c=i=l.createElement("link");Ae(c),He(c,"link",e),c._p=new Promise(function(d,b){c.onload=d,c.onerror=b}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,zi(i,a,l)}i={type:"stylesheet",instance:i,count:1,state:o},t.set(u,i)}}}function Y0(e,a){nn.X(e,a);var n=Wl;if(n&&e){var l=vl(n).hoistableScripts,t=$l(e),u=l.get(t);u||(u=n.querySelector(wt(t)),u||(e=W({src:e,async:!0},a),(a=ha.get(t))&&cr(e,a),u=n.createElement("script"),Ae(u),He(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(t,u))}}function H0(e,a){nn.M(e,a);var n=Wl;if(n&&e){var l=vl(n).hoistableScripts,t=$l(e),u=l.get(t);u||(u=n.querySelector(wt(t)),u||(e=W({src:e,async:!0,type:"module"},a),(a=ha.get(t))&&cr(e,a),u=n.createElement("script"),Ae(u),He(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(t,u))}}function Em(e,a,n,l){var t=(t=un.current)?Jt(t):null;if(!t)throw Error(v(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Fl(n.href),a=vl(t).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Fl(n.href);var u=vl(t).hoistableStyles,i=u.get(e);if(i||(t=t.ownerDocument||t,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=t.querySelector(Kt(e)))?u._p||(i.instance=u,i.state.loading=5):(u=ha.get(e),u||(u={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ha.set(e,u)),R0(t,e,u,i.state))),a&&l===null)throw Error(v(528,""));return i}if(a&&l!==null)throw Error(v(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(n=$l(n),a=vl(t).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(v(444,e))}}function Fl(e){return'href="'+oa(e)+'"'}function Kt(e){return'link[rel="stylesheet"]['+e+"]"}function Tm(e){return W({},e,{"data-precedence":e.precedence,precedence:null})}function R0(e,a,n,l){if(a=e.querySelector('link[rel="preload"][as="style"]['+a+"]")){if(a[fu]!==!0){l.loading=1;return}}else a=e.createElement("link"),a[fu]=!0,a.onload=a.onerror=jr.bind(null,a),He(a,"link",n),Ae(a),e.head.appendChild(a);l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2})}function $l(e){return'[src="'+oa(e)+'"]'}function wt(e){return"script[async]"+e}function Nm(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+oa(n.href)+'"]');if(l)return a.instance=l,Ae(l),l;var t=W({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ae(l),He(l,"style",t),zi(l,n.precedence,e),a.instance=l;case"stylesheet":t=Fl(n.href);var u=e.querySelector(Kt(t));if(u)return a.state.loading|=4,a.instance=u,Ae(u),u;l=Tm(n),(t=ha.get(t))&&or(l,t),u=(e.ownerDocument||e).createElement("link"),Ae(u);var i=u;return i._p=new Promise(function(o,c){i.onload=o,i.onerror=c}),He(u,"link",l),a.state.loading|=4,zi(u,n.precedence,e),a.instance=u;case"script":return u=$l(n.src),(t=e.querySelector(wt(u)))?(a.instance=t,Ae(t),t):(l=n,(t=ha.get(u))&&(l=W({},n),cr(l,t)),e=e.ownerDocument||e,t=e.createElement("script"),Ae(t),He(t,"link",l),e.head.appendChild(t),a.instance=t);case"void":return null;default:throw Error(v(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,zi(l,n.precedence,e));return a.instance}function zi(e,a,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),t=l.length?l[l.length-1]:null,u=t,i=0;i<l.length;i++){var o=l[i];if(o.dataset.precedence===a)u=o;else if(u!==t)break}u?u.parentNode.insertBefore(e,u.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function or(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function cr(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Ei=null;function Am(e,a,n){if(Ei===null){var l=new Map,t=Ei=new Map;t.set(n,l)}else t=Ei,l=t.get(n),l||(l=new Map,t.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),t=0;t<n.length;t++){var u=n[t];if(!(u[ct]||u[xe]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(a)||"";i=e+i;var o=l.get(i);o?o.push(u):l.set(i,[u])}}return l}function rr(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function B0(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Om(e,a){return e==="img"&&a.src!=null&&a.src!==""&&a.onLoad==null&&a.loading!=="lazy"}function Dm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _m(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Mm(e,a){typeof a.decode=="function"&&(e.imgCount++,a.complete||(e.imgBytes+=_m(a),e.suspenseyImages.push(a)),e=L0.bind(e),a.decode().then(e,e))}function Q0(e,a,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var t=Fl(l.href),u=a.querySelector(Kt(t));if(u){a=u._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=kt.bind(e),a.then(e,e)),n.state.loading|=4,n.instance=u,Ae(u);return}u=a.ownerDocument||a,l=Tm(l),(t=ha.get(t))&&or(l,t),u=u.createElement("link"),Ae(u);var i=u;i._p=new Promise(function(o,c){i.onload=o,i.onerror=c}),He(u,"link",l),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,a),(a=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=kt.bind(e),a.addEventListener("load",n),a.addEventListener("error",n))}}var Ti=0;function G0(e,a){return e.stylesheets&&e.count===0&&Ai(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Ai(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+a);0<e.imgBytes&&Ti===0&&(Ti=62500*t0());var t=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ai(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Ti?50:800)+a);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(t)}}:null}function xm(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ai(e,e.stylesheets);else if(e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}}}function kt(){this.count--,xm(this)}function L0(){this.imgCount--,xm(this)}var Ni=null;function Ai(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ni=new Map,a.forEach(X0,e),Ni=null,kt.call(e))}function X0(e,a){if(!(a.state.loading&4)){var n=Ni.get(e);if(n)var l=n.get(null);else{n=new Map,Ni.set(e,n);for(var t=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<t.length;u++){var i=t[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(n.set(i.dataset.precedence,i),l=i)}l&&n.set(null,l)}t=a.instance,i=t.getAttribute("data-precedence"),u=n.get(i)||l,u===l&&n.set(null,t),n.set(i,t),this.count++,l=kt.bind(this),t.addEventListener("load",l),t.addEventListener("error",l),u?u.parentNode.insertBefore(t,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(t,e.firstChild)),a.state.loading|=4}}var Il={$$typeof:Xe,Provider:null,Consumer:null,_currentValue:Hn,_currentValue2:Hn,_threadCount:0};function V0(e,a,n,l,t,u,i,o,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xi(0),this.hiddenUpdates=Xi(null),this.identifierPrefix=l,this.onUncaughtError=t,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function Um(e,a,n,l,t,u,i,o,c,d,b,y){return e=new V0(e,a,n,i,c,d,b,y,o),a=1,u===!0&&(a|=24),u=Ze(3,null,null,a),e.current=u,u.stateNode=e,a=To(),a.refCount++,e.pooledCache=a,a.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:a},Do(u),e}function Cm(e){return e?(e=Tl,e):Tl}function jm(e,a,n,l,t,u){t=Cm(t),l.context===null?l.context=t:l.pendingContext=t,l=gn(a),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=yn(e,l,a),n!==null&&(ke(n,e,a),Nt(n,e,a))}function Ym(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function sr(e,a){Ym(e,a),(e=e.alternate)&&Ym(e,a)}function Hm(e){if(e.tag===13||e.tag===31){var a=Xn(e,67108864);a!==null&&ke(a,e,67108864),sr(e,67108864)}}function Rm(e){if(e.tag===13||e.tag===31){var a=ta();a=Vi(a);var n=Xn(e,a);n!==null&&ke(n,e,a),sr(e,a)}}var Pl=!0;function Z0(e,a,n,l){var t=j.T;j.T=null;var u=I.p;try{I.p=2,fr(e,a,n,l)}finally{I.p=u,j.T=t}}function J0(e,a,n,l){var t=j.T;j.T=null;var u=I.p;try{I.p=8,fr(e,a,n,l)}finally{I.p=u,j.T=t}}function fr(e,a,n,l){if(Pl){var t=dr(l);if(t===null)Kc(e,a,l,Oi,n),Qm(e,l);else if(w0(t,e,a,n,l))l.stopPropagation();else if(Qm(e,l),a&4&&-1<K0.indexOf(e)){for(;t!==null;){var u=ml(t);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Rn(u.pendingLanes);if(i!==0){var o=u;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var c=1<<31-$e(i);o.entanglements[1]|=c,i&=~c}Ga(u),(P&6)===0&&(di=We()+500,Lt(0))}}break;case 31:case 13:o=Xn(u,2),o!==null&&ke(o,u,2),hi(),sr(u,2)}if(u=dr(l),u===null&&Kc(e,a,l,Oi,n),u===t)break;t=u}t!==null&&l.stopPropagation()}else Kc(e,a,l,null,n)}}function dr(e){return e=Fi(e),mr(e)}var Oi=null;function mr(e){if(Oi=null,e=Bn(e),e!==null){var a=S(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=C(a),e!==null)return e;e=null}else if(n===31){if(e=H(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Oi=e,null}function Bm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tv()){case zr:return 2;case Er:return 8;case iu:case uv:return 32;case Tr:return 268435456;default:return 32}default:return 32}}var vr=!1,Mn=null,xn=null,Un=null,Wt=new Map,Ft=new Map,Cn=[],K0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qm(e,a){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Wt.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ft.delete(a.pointerId)}}function $t(e,a,n,l,t,u){return e===null||e.nativeEvent!==u?(e={blockedOn:a,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[t]},a!==null&&(a=ml(a),a!==null&&Hm(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,t!==null&&a.indexOf(t)===-1&&a.push(t),e)}function w0(e,a,n,l,t){switch(a){case"focusin":return Mn=$t(Mn,e,a,n,l,t),!0;case"dragenter":return xn=$t(xn,e,a,n,l,t),!0;case"mouseover":return Un=$t(Un,e,a,n,l,t),!0;case"pointerover":var u=t.pointerId;return Wt.set(u,$t(Wt.get(u)||null,e,a,n,l,t)),!0;case"gotpointercapture":return u=t.pointerId,Ft.set(u,$t(Ft.get(u)||null,e,a,n,l,t)),!0}return!1}function Gm(e){var a=Bn(e.target);if(a!==null){var n=S(a);if(n!==null){if(a=n.tag,a===13){if(a=C(n),a!==null){e.blockedOn=a,xr(e.priority,function(){Rm(n)});return}}else if(a===31){if(a=H(n),a!==null){e.blockedOn=a,xr(e.priority,function(){Rm(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Di(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=dr(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Wi=l,n.target.dispatchEvent(l),Wi=null}else return a=ml(n),a!==null&&Hm(a),e.blockedOn=n,!1;a.shift()}return!0}function Lm(e,a,n){Di(e)&&n.delete(a)}function k0(){vr=!1,Mn!==null&&Di(Mn)&&(Mn=null),xn!==null&&Di(xn)&&(xn=null),Un!==null&&Di(Un)&&(Un=null),Wt.forEach(Lm),Ft.forEach(Lm)}function _i(e,a){e.blockedOn===a&&(e.blockedOn=null,vr||(vr=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,k0)))}var Mi=null;function Xm(e){Mi!==e&&(Mi=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Mi===e&&(Mi=null);for(var a=0;a<e.length;a+=3){var n=e[a],l=e[a+1],t=e[a+2];if(typeof l!="function"){if(mr(l||n)===null)continue;break}var u=ml(n);u!==null&&(e.splice(a,3),a-=3,Wo(u,{pending:!0,data:t,method:n.method,action:l},l,t))}}))}function et(e){function a(c){return _i(c,e)}Mn!==null&&_i(Mn,e),xn!==null&&_i(xn,e),Un!==null&&_i(Un,e),Wt.forEach(a),Ft.forEach(a);for(var n=0;n<Cn.length;n++){var l=Cn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)Gm(n),n.blockedOn===null&&Cn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var t=n[l],u=n[l+1],i=t[Ve]||null;if(typeof u=="function")i||Xm(n);else if(i){var o=null;if(u&&u.hasAttribute("formAction")){if(t=u,i=u[Ve]||null)o=i.formAction;else if(mr(t)!==null)continue}else o=i.action;typeof o=="function"?n[l+1]=o:(n.splice(l,3),l-=3),Xm(n)}}}function Vm(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return t=i})},focusReset:"manual",scroll:"manual"})}function a(){t!==null&&(t(),t=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,t=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),t!==null&&(t(),t=null)}}}function hr(e){this._internalRoot=e}xi.prototype.render=hr.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(v(409));var n=a.current,l=ta();jm(n,l,e,a,null,null)},xi.prototype.unmount=hr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;jm(e.current,2,null,e,null,null),hi(),a[dl]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var a=Mr();e={blockedOn:null,target:e,priority:a};for(var n=0;n<Cn.length&&a!==0&&a<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&Gm(e)}};var Zm=z.version;if(Zm!=="19.3.0")throw Error(v(527,Zm,"19.3.0"));I.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=$(a),e=e!==null?qe(e):null,e=e===null?null:e.stateNode,e};var W0={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ui.isDisabled&&Ui.supportsFiber)try{ut=Ui.inject(W0),Fe=Ui}catch{}}return It.createRoot=function(e,a){if(!E(e))throw Error(v(299));var n=!1,l="",t=Cf,u=jf,i=Yf;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(t=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),a=Um(e,1,!1,null,null,n,l,null,t,u,i,Vm),e[dl]=a.current,Jc(e),new hr(a)},It.hydrateRoot=function(e,a,n){if(!E(e))throw Error(v(299));var l=!1,t="",u=Cf,i=jf,o=Yf,c=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),a=Um(e,1,!0,a,n??null,l,t,c,u,i,o,Vm),a.context=Cm(null),n=a.current,l=ta(),l=Vi(l),t=gn(l),t.callback=null,yn(n,t,l),n=l,a.current.lanes=n,ot(a,n),Ga(a),e[dl]=a.current,Jc(e),new xi(a)},It.version="19.3.0",It}var km;function nb(){if(km)return br.exports;km=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(z){console.error(z)}}return p(),br.exports=ab(),br.exports}var lb=nb();const tb="modulepreload",ub=function(p){return"/cartas/"+p},Wm={},Pt=function(z,A,v){let E=Promise.resolve();if(A&&A.length>0){let C=function($){return Promise.all($.map(qe=>Promise.resolve(qe).then(L=>({status:"fulfilled",value:L}),L=>({status:"rejected",reason:L}))))};document.getElementsByTagName("link");const H=document.querySelector("meta[property=csp-nonce]"),Y=(H==null?void 0:H.nonce)||(H==null?void 0:H.getAttribute("nonce"));E=C(A.map($=>{if($=ub($),$ in Wm)return;Wm[$]=!0;const qe=$.endsWith(".css"),L=qe?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${$}"]${L}`))return;const x=document.createElement("link");if(x.rel=qe?"stylesheet":tb,qe||(x.as="script"),x.crossOrigin="",x.href=$,Y&&x.setAttribute("nonce",Y),document.head.appendChild(x),qe)return new Promise((ba,ie)=>{x.addEventListener("load",ba),x.addEventListener("error",()=>ie(new Error(`Unable to preload CSS for ${$}`)))})}))}function S(C){const H=new Event("vite:preloadError",{cancelable:!0});if(H.payload=C,window.dispatchEvent(H),!H.defaultPrevented)throw C}return E.then(C=>{for(const H of C||[])H.status==="rejected"&&S(H.reason);return z().catch(S)})};function ib(p={}){const{immediate:z=!1,onNeedReload:A,onNeedRefresh:v,onOfflineReady:E,onRegistered:S,onRegisteredSW:C,onRegisterError:H}=p;let Y,$;const qe=async(x=!0)=>{await $};async function L(){if("serviceWorker"in navigator){if(Y=await Pt(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:x}},[]).then(({Workbox:x})=>new x("/cartas/sw.js",{scope:"/cartas/",type:"classic"})).catch(x=>{H==null||H(x)}),!Y)return;Y.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&(A?A():window.location.reload())}),Y.addEventListener("installed",x=>{x.isUpdate||E==null||E()}),Y.register({immediate:z}).then(x=>{C?C("/cartas/sw.js",x):S==null||S(x)}).catch(x=>{H==null||H(x)})}}return $=L(),qe}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=p=>p.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cb=p=>p.replace(/^([A-Z])|[\s-_]+(\w)/g,(z,A,v)=>v?v.toUpperCase():A.toLowerCase()),Fm=p=>{const z=cb(p);return z.charAt(0).toUpperCase()+z.slice(1)},Pm=(...p)=>p.filter((z,A,v)=>!!z&&z.trim()!==""&&v.indexOf(z)===A).join(" ").trim(),rb=p=>{for(const z in p)if(z.startsWith("aria-")||z==="role"||z==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=te.forwardRef(({color:p="currentColor",size:z=24,strokeWidth:A=2,absoluteStrokeWidth:v,className:E="",children:S,iconNode:C,...H},Y)=>te.createElement("svg",{ref:Y,...sb,width:z,height:z,stroke:p,strokeWidth:v?Number(A)*24/Number(z):A,className:Pm("lucide",E),...!S&&!rb(H)&&{"aria-hidden":"true"},...H},[...C.map(([$,qe])=>te.createElement($,qe)),...Array.isArray(S)?S:[S]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=(p,z)=>{const A=te.forwardRef(({className:v,...E},S)=>te.createElement(fb,{ref:S,iconNode:z,className:Pm(`lucide-${ob(Fm(p))}`,`lucide-${p}`,v),...E}));return A.displayName=Fm(p),A};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],mb=eu("menu",db);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],hb=eu("moon",vb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],gb=eu("sun",bb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],pb=eu("wifi-off",yb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Sb=eu("x",qb),$m=({theme:p,onToggle:z,className:A="",variant:v="minimal"})=>{const E=p==="dark";return M.jsxs("button",{id:"theme-toggle-btn",type:"button",onClick:z,"aria-label":E?"Cambiar a modo papel claro":"Cambiar a modo lectura nocturna",title:E?"Modo claro (papel)":"Modo nocturno (biblioteca)",className:`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-sm transition-colors text-xs font-sans tracking-wide text-[#6b645c] hover:text-[#211e1c] dark:text-[#9c958c] dark:hover:text-[#ede7e0] hover:bg-[#ece9e4]/60 dark:hover:bg-[#2a2927] border border-transparent hover:border-[#dad4cb]/70 dark:hover:border-[#383633] ${A}`,children:[E?M.jsx(gb,{className:"w-3.5 h-3.5 text-[#d0a65c]",strokeWidth:1.75}):M.jsx(hb,{className:"w-3.5 h-3.5 text-[#5d4837]",strokeWidth:1.75}),v==="labeled"&&M.jsx("span",{className:"font-normal",children:E?"Modo papel":"Modo noche"})]})},zb=5e3,Eb=2e4;async function Tb(){if(typeof navigator<"u"&&navigator.onLine===!1)return!1;try{return(await fetch(`/cartas/ping.txt?t=${Date.now()}`,{method:"GET",cache:"no-store",signal:AbortSignal.timeout(zb)})).ok}catch{return!1}}async function Nb(){var p;try{const z=await((p=navigator.serviceWorker)==null?void 0:p.getRegistration());await(z==null?void 0:z.update())}catch{}}function Ab(){const[p,z]=te.useState(null),A=te.useRef(!0),v=te.useRef(!1),E=te.useCallback(async()=>{const S=await Tb();return A.current&&z(S),S&&v.current&&Nb(),v.current=!S,S},[]);return te.useEffect(()=>{A.current=!0,E();const S=()=>E(),C=()=>z(!1);return window.addEventListener("online",S),window.addEventListener("offline",C),()=>{A.current=!1,window.removeEventListener("online",S),window.removeEventListener("offline",C)}},[E]),te.useEffect(()=>{if(p!==!1)return;const S=window.setInterval(E,Eb);return()=>window.clearInterval(S)},[p,E]),{isOnline:p}}const Im=({className:p="",iconClassName:z="w-3.5 h-3.5",align:A="right",side:v="bottom"})=>{const{isOnline:E}=Ab(),[S,C]=te.useState(!1),Y=`offline-indicator-tooltip-${te.useId()}`;return E!==!1?null:M.jsxs("div",{className:"relative inline-flex",children:[M.jsx("button",{type:"button","aria-label":"Sin conexión: viendo una versión guardada","aria-describedby":Y,onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),onFocus:()=>C(!0),onBlur:()=>C(!1),onClick:()=>C(!0),className:`inline-flex items-center justify-center text-[#8c8479] dark:text-[#7d756a] hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors ${p}`,children:M.jsx(pb,{className:z,strokeWidth:1.75})}),M.jsx("div",{id:Y,role:"tooltip",className:`absolute z-50 whitespace-nowrap rounded-sm border border-[#dad4cb] dark:border-[#383633] bg-[#ece9e4] dark:bg-[#1c1b1b] px-2.5 py-1.5 text-xs font-sans text-[#6b645c] dark:text-[#9c958c] shadow-lg transition-opacity ${v==="bottom"?"top-full mt-2":"bottom-full mb-2"} ${A==="right"?"right-0":"left-0"} ${S?"opacity-100":"opacity-0 pointer-events-none"}`,children:"Sin conexión: estás viendo una versión guardada"})]})},Ob=({currentView:p,onNavigate:z,theme:A,onToggleTheme:v})=>{const[E,S]=te.useState(!1),C=Y=>p.type===Y,H=Y=>{z(Y),S(!1)};return M.jsxs("header",{id:"main-header",className:"w-full border-b border-[#dad4cb] dark:border-[#383633] bg-[#ece9e4]/90 dark:bg-[#1c1b1b]/90 backdrop-blur-xs sticky top-0 z-40 transition-colors",children:[M.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between",children:[M.jsx("button",{id:"header-brand-logo",onClick:()=>H({type:"home"}),className:"text-left group inline-flex flex-col items-start focus:outline-none",children:M.jsx("span",{className:"font-serif text-lg sm:text-xl font-normal tracking-tight text-[#211e1c] dark:text-[#ede7e0] group-hover:text-[#b84e2a] dark:group-hover:text-[#cf6e4b] transition-colors",children:"Cartas que quedan"})}),M.jsxs("nav",{className:"hidden md:flex items-center gap-7 text-sm font-sans",children:[M.jsx("button",{id:"nav-link-archive",onClick:()=>H({type:"archive"}),className:`transition-colors tracking-wide py-1 text-xs uppercase ${C("archive")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium border-b border-[#b84e2a] dark:border-[#cf6e4b]":"text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0]"}`,children:"Archivo"}),M.jsx("button",{id:"nav-link-about",onClick:()=>H({type:"about"}),className:`transition-colors tracking-wide py-1 text-xs uppercase ${C("about")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium border-b border-[#b84e2a] dark:border-[#cf6e4b]":"text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0]"}`,children:"Sobre el proyecto"}),M.jsx("div",{className:"h-4 w-px bg-[#dad4cb] dark:bg-[#383633]"}),M.jsx($m,{theme:A,onToggle:v}),M.jsx(Im,{className:"p-2 rounded-sm hover:bg-[#ece9e4]/60 dark:hover:bg-[#2a2927]"})]}),M.jsxs("div",{className:"flex items-center gap-2 md:hidden",children:[M.jsx($m,{theme:A,onToggle:v}),M.jsx(Im,{className:"p-2 rounded-sm hover:bg-[#ece9e4]/60 dark:hover:bg-[#2a2927]"}),M.jsx("button",{id:"mobile-menu-toggle",type:"button",onClick:()=>S(!E),"aria-label":E?"Cerrar menú":"Abrir menú",className:"p-2 text-[#211e1c] dark:text-[#ede7e0] hover:bg-[#dad4cb]/40 dark:hover:bg-[#2a2927] rounded-sm transition-colors",children:E?M.jsx(Sb,{className:"w-5 h-5",strokeWidth:1.75}):M.jsx(mb,{className:"w-5 h-5",strokeWidth:1.75})})]})]}),E&&M.jsx("div",{id:"mobile-nav-panel",className:"md:hidden border-t border-[#dad4cb] dark:border-[#383633] bg-[#ece9e4] dark:bg-[#1c1b1b] px-4 py-5 shadow-xs",children:M.jsxs("nav",{className:"flex flex-col gap-3 font-sans text-sm",children:[M.jsx("button",{id:"mobile-nav-home",onClick:()=>H({type:"home"}),className:`text-left py-2 px-2 text-sm tracking-wide rounded-xs ${C("home")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium bg-[#dad4cb]/30 dark:bg-[#2a2927]":"text-[#211e1c] dark:text-[#ede7e0]"}`,children:"Portada"}),M.jsx("button",{id:"mobile-nav-archive",onClick:()=>H({type:"archive"}),className:`text-left py-2 px-2 text-sm tracking-wide rounded-xs ${C("archive")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium bg-[#dad4cb]/30 dark:bg-[#2a2927]":"text-[#211e1c] dark:text-[#ede7e0]"}`,children:"Archivo de documentos"}),M.jsx("button",{id:"mobile-nav-about",onClick:()=>H({type:"about"}),className:`text-left py-2 px-2 text-sm tracking-wide rounded-xs ${C("about")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium bg-[#dad4cb]/30 dark:bg-[#2a2927]":"text-[#211e1c] dark:text-[#ede7e0]"}`,children:"Sobre el proyecto"})]})})]})},Db=({onNavigate:p})=>M.jsx("footer",{id:"main-footer",className:"w-full border-t border-[#dad4cb] dark:border-[#383633] mt-24 py-14 transition-colors",children:M.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 md:px-8",children:[M.jsxs("div",{className:"flex flex-col md:flex-row md:items-baseline justify-between gap-8",children:[M.jsxs("div",{className:"max-w-md",children:[M.jsx("h3",{className:"font-serif text-lg font-normal text-[#211e1c] dark:text-[#ede7e0]",children:"Cartas que quedan"}),M.jsx("p",{className:"font-serif italic text-sm text-[#6b645c] dark:text-[#9c958c] mt-1.5 leading-relaxed",children:"«Hay cosas que vale la pena dejar escritas.»"}),M.jsx("p",{className:"font-sans text-xs text-[#6b645c] dark:text-[#9c958c] mt-3 leading-relaxed",children:"Un archivo personal y editorial de reflexiones, cartas y preguntas humanas pensado para perdurar y volver a ser leído con calma."})]}),M.jsxs("div",{className:"flex flex-wrap gap-x-8 gap-y-3 font-sans text-xs tracking-wider uppercase text-[#6b645c] dark:text-[#9c958c]",children:[M.jsx("button",{onClick:()=>p({type:"home"}),className:"hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors focus:outline-none",children:"Portada"}),M.jsx("button",{onClick:()=>p({type:"archive"}),className:"hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors focus:outline-none",children:"Archivo"}),M.jsx("button",{onClick:()=>p({type:"about"}),className:"hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors focus:outline-none",children:"Sobre el proyecto"})]})]}),M.jsxs("div",{className:"mt-12 pt-6 border-t border-[#dad4cb]/50 dark:border-[#383633]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#8c8479] dark:text-[#7d756a] font-sans",children:[M.jsx("span",{children:"Un archivo digital de lectura pausada."}),M.jsx("span",{className:"mt-1 sm:mt-0",children:"2026"})]})]})}),_b=`---\r
title: "El arte de escuchar a quien piensa distinto"\r
category: "Empatía"\r
secondaryCategory: "Sociedad · Paz"\r
tags: "Empatía, Diálogo, Sociedad, Paz, Escucha"\r
excerpt: "Escuchar al otro no significa claudicar en nuestras convicciones; significa reconocer que podemos estar equivocados y que la verdad casi siempre supera nuestra perspectiva individual."\r
date: "2026-09-10"\r
readingTime: "10 min de lectura"\r
biblicalQuote: "Por esto, mis amados hermanos, todo hombre sea pronto para oír, tardo para hablar, tardo para airarse."\r
biblicalReference: "Santiago 1:19"\r
biblicalContext: "Consejo práctico de la epístola de Santiago sobre la templanza, la escucha y el dominio de las propias reacciones dentro de la comunidad."\r
---\r
\r
Hay algo que me cuesta entender de nosotros.\r
\r
¿Por qué se nos hace tan difícil hablar con alguien que piensa distinto?\r
\r
No hablo de convencerlo.\r
\r
Hablo de escucharlo.\r
\r
De sentarme frente a alguien que piensa completamente diferente a mí y preguntarle, de verdad:\r
\r
**¿Por qué pensás así?**\r
\r
No para encontrar el momento exacto para destruir su argumento.\r
\r
No para demostrarle que está equivocado.\r
\r
Sino porque genuinamente quiero entender.\r
\r
Porque soy humano.\r
\r
Y porque existe una posibilidad que a veces se nos olvida:\r
\r
**puede que yo esté equivocado.**\r
\r
## Cuando conversar se convierte en una guerra\r
\r
Hoy hablar con alguien que piensa distinto se ha convertido, muchas veces, en una pequeña guerra.\r
\r
Política, religión, fútbol, ideologías, justicia, seguridad, paz.\r
\r
Hasta la forma de criar a nuestros hijos. Todo parece tener bandos. Y cuando aparecen los bandos, aparece también la necesidad de ganar. Ya no conversamos. Combatimos.\r
\r
El otro habla y nosotros estamos preparando la respuesta.\r
\r
Nos dice algo que no nos gusta y sentimos que tenemos que devolverle algo más fuerte.\r
\r
Nos cambia el tema, lo insultamos, lo descalificamos, le decimos ignorante, le decimos que está manipulado, que no entiende, que no sabe, que vive en una burbuja, que es un vendido, que es un fanático, que es un idiota.\r
\r
Y a veces ni siquiera importa lo que dijo. Importa quién lo dijo. Eso es lo verdaderamente preocupante.\r
\r
Porque cuando llegamos a ese punto, dejamos de escuchar argumentos y comenzamos a juzgar personas.\r
\r
## ¿De dónde viene tanta violencia?\r
\r
A veces me pregunto si parte del problema está dentro de nuestra propia cabeza.\r
\r
Tenemos una tendencia bastante humana a buscar información que confirme lo que ya creemos y a desconfiar de aquello que lo contradice.\r
\r
Es lo que conocemos como **sesgo de confirmación**.\r
\r
Y creo que todos lo tenemos. Yo también.\r
\r
Nos gusta encontrar una noticia que nos dé la razón. Un video que confirme nuestra sospecha. Un estudio que respalde nuestra posición. Una persona inteligente que diga exactamente lo que nosotros pensamos.\r
\r
Y cuando aparece algo que contradice nuestra opinión, inmediatamente buscamos cómo desacreditarlo.\r
\r
«Ese estudio está comprado».<br>\r
«Ese periodista es parcial».<br>\r
«Ese experto no sabe nada».<br>\r
«Eso está manipulado».\r
\r
Y puede que algunas veces sea cierto.\r
\r
El problema es cuando **siempre** es cierto.\r
\r
Cuando cualquier cosa que confirma mi opinión es evidencia y cualquier cosa que la contradice es manipulación.\r
\r
Ahí ya no estoy buscando la verdad. Estoy buscando tener razón. Y son cosas muy diferentes.\r
\r
## La peligrosa sensación de tener la razón\r
\r
Hay algo todavía más incómodo.\r
\r
A veces podemos estar tan convencidos de saber algo que dejamos de investigar.\r
\r
La seguridad se convierte en una especie de anestesia. Ya no preguntamos. Ya no dudamos. Ya no escuchamos. Ya no necesitamos aprender.\r
\r
Porque creemos que ya sabemos.\r
\r
Y aquí encuentro una frase de la Biblia que me parece brutalmente honesta:\r
\r
<blockquote data-biblical="true" data-ref="Santiago 1:19">\r
Todo hombre sea pronto para oír, tardo para hablar, tardo para airarse.\r
</blockquote>\r
\r
Qué difícil es aceptar eso.\r
\r
Sobre todo cuando estamos convencidos.\r
\r
Pero quizás una de las señales de la verdadera sabiduría no sea cuánto creemos saber, sino **qué tan dispuestos estamos a descubrir que podemos estar equivocados.**\r
\r
No significa vivir dudando de todo. No significa no tener convicciones. No significa pensar que todas las opiniones tienen el mismo valor.\r
\r
Significa dejar una pequeña puerta abierta. Una puerta por donde pueda entrar una pregunta. Una evidencia. Una experiencia diferente. Una persona que vivió algo que yo nunca he vivido.\r
\r
Porque tal vez mi opinión sea correcta. Pero también puede que necesite ser corregida. Y reconocer esa posibilidad no me hace débil.\r
\r
Me hace humano.\r
\r
## La Biblia también desconfía de nuestras certezas\r
\r
Lo interesante es que esto no es solamente una reflexión moderna sobre redes sociales.\r
\r
La Biblia lleva miles de años diciéndonos que tengamos cuidado con nuestra propia seguridad.\r
\r
Proverbios dice:\r
\r
<blockquote data-biblical="true" data-ref="Proverbios 18:13">\r
Al que responde antes de escuchar, le es fatuidad y oprobio.\r
</blockquote>\r
\r
Antes de responder, escuchá.<br>\r
Antes de juzgar, escuchá.<br>\r
Antes de asumir que entendiste, escuchá.<br>\r
\r
Porque a veces estamos tan convencidos de nuestra opinión que olvidamos preguntarnos de dónde viene esa certeza.\r
\r
Puede que nuestra posición no haya nacido de una investigación profunda, sino de una experiencia que nos marcó.\r
\r
Un hombre puede decir que todas las mujeres son unas traidoras porque la mujer que amó lo traicionó.\r
\r
Y su dolor es real. Su experiencia también.\r
\r
Pero una experiencia verdadera no necesariamente produce una conclusión verdadera.\r
\r
Que una mujer lo haya traicionado no significa que todas las mujeres sean traidoras.\r
\r
Así también, alguien puede pensar que todos los políticos son corruptos porque conoció a uno que lo era.\r
\r
Que todos los ricos son egoístas porque tuvo una mala experiencia con uno.\r
\r
Que todos los pobres son irresponsables porque conoció a alguien que lo fue.\r
\r
Que todos los creyentes son fanáticos porque conoció a uno.\r
\r
Que todos los ateos son inmorales porque conoció a otro.\r
\r
El problema es que podemos tomar una experiencia particular y convertirla en una explicación para todo.\r
\r
Y cuando hacemos eso, dejamos de escuchar la realidad.\r
\r
Porque ya no estamos buscando entender lo que tenemos delante.\r
\r
**Estamos buscando que lo que tenemos delante confirme nuestra historia.**\r
\r
Y hay otro proverbio que me parece todavía más incómodo:\r
\r
<blockquote data-biblical="true" data-ref="Proverbios 18:17">\r
El primero que expone su causa parece tener razón, hasta que llega su interlocutor y lo examina.\r
</blockquote>\r
\r
**Parece tener razón.**\r
\r
Esa palabra me encanta.\r
\r
Porque muchas veces escuchamos una historia y pensamos que ya entendimos todo.\r
\r
Hasta que aparece la otra versión. Hasta que conocemos el contexto. Hasta que descubrimos lo que no sabíamos. Hasta que escuchamos al otro.\r
\r
Tal vez por eso también Pablo escribe:\r
\r
<blockquote data-biblical="true" data-ref="1 Tesalonicenses 5:21">\r
Examínenlo todo; retengan lo bueno.\r
</blockquote>\r
\r
No dice:<br>\r
«Crean todo».\r
\r
Pero tampoco dice:<br>\r
«Rechacen todo lo que contradiga lo que ya creen».\r
\r
Dice:<br>\r
**Examínenlo.**\r
\r
Eso requiere trabajo. Y humildad.\r
\r
## El problema de convertir al otro en un enemigo\r
\r
Pero creo que hay algo todavía más profundo.\r
\r
Porque una cosa es pensar que alguien está equivocado. Y otra muy diferente es comenzar a pensar que **esa persona es el enemigo.**\r
\r
Ahí es donde la conversación se vuelve peligrosa.\r
\r
Porque cuando alguien deja de ser una persona y se convierte en una etiqueta, es mucho más fácil odiarlo.\r
\r
Ya no vemos a Juan.<br>\r
Vemos «el de izquierda».\r
\r
Ya no vemos a María.<br>\r
Vemos «la de derecha».\r
\r
Ya no vemos a un vecino.<br>\r
Vemos «el guerrillero».\r
\r
«El paraco».<br>\r
«El comunista».<br>\r
«El fascista».<br>\r
«El uribista».<br>\r
«El petrista».\r
\r
Y seguramente muchas veces esas etiquetas describen posiciones reales. Pero ninguna etiqueta alcanza para describir completamente a una persona.\r
\r
Detrás de cada opinión hay una historia.\r
\r
Un papá.<br>\r
Una mamá.<br>\r
Una infancia.<br>\r
Un miedo.<br>\r
Una pérdida.<br>\r
Una experiencia.<br>\r
Una educación.<br>\r
\r
Una serie de decisiones que nosotros no conocemos.\r
\r
Y eso no significa que todas sus ideas sean correctas.\r
\r
Significa algo mucho más sencillo:\r
\r
**Esa persona es más grande que la opinión que tenemos de ella.**\r
\r
## ¿Qué hizo Jesús con sus enemigos?\r
\r
Y aquí es donde Jesús me incomoda. Porque Jesús no solamente habló de escuchar al que piensa distinto.\r
\r
Fue muchísimo más lejos.\r
\r
<blockquote data-biblical="true" data-ref="Mateo 5:44">\r
Amen a sus enemigos y oren por quienes los persiguen.\r
</blockquote>\r
\r
Eso es una locura. Porque Jesús no está hablando de amar a la gente que piensa como nosotros.\r
\r
Eso es fácil.\r
\r
Jesús está hablando precisamente de aquellos que nos hacen difícil amar.\r
\r
Y después hace una pregunta que todavía hoy nos confronta:<br>\r
Si solamente amamos a quienes nos aman, ¿qué tiene eso de extraordinario?\r
\r
Jesús rompe la lógica del bando.\r
\r
No dice:<br>\r
«Ama a los que tienen la razón».\r
\r
No dice:<br>\r
«Ama a los que están de acuerdo contigo».\r
\r
Dice:<br>\r
**Ama a tus enemigos.**\r
\r
Y eso cambia completamente la conversación.\r
\r
Porque quizás el primer paso para escuchar a quien piensa distinto no sea aprender a argumentar mejor.\r
\r
Quizás sea aprender a **dejar de odiarlo.**\r
\r
## Jesús también sabía escuchar\r
\r
Hay algo que me gusta mucho de Jesús. No trataba a las personas como categorías. Hablaba con personas que otros evitaban. Comía con personas que otros despreciaban. Escuchaba preguntas incómodas. Respondía preguntas con otras preguntas.\r
\r
Y muchas veces obligaba a quien lo escuchaba a mirarse primero a sí mismo.\r
\r
«¿Por qué ves la paja en el ojo de tu hermano y no ves la viga en el tuyo?»\r
\r
Esa imagen me parece perfecta para nuestras discusiones actuales.\r
\r
Porque es muy fácil detectar el sesgo del otro. La manipulación del otro. La ignorancia del otro. La contradicción del otro.\r
\r
Lo difícil es preguntarme:<br>\r
**¿Y qué estoy dejando de ver yo?**\r
\r
## La hospitalidad del pensamiento\r
\r
Darle hospedaje en nuestro pensamiento a la palabra ajena es un acto de caridad intelectual.\r
\r
No significa darle la razón. No significa abandonar nuestras convicciones. No significa aceptar como verdadero todo lo que alguien diga.\r
\r
Significa permitirnos comprender antes de juzgar.\r
\r
Yo puedo escuchar a alguien y seguir pensando que está equivocado. Puedo incluso descubrir que sus argumentos son malos. Pero después de haberlo escuchado.\r
\r
No antes.\r
\r
Porque escuchar no es rendirse.<br>\r
**Escuchar es investigar.**\r
\r
Escuchar es reconocer que mi perspectiva es limitada.\r
\r
Escuchar es decir:<br>\r
«No entiendo todavía. Explicame».\r
\r
Y quizás esa frase sea mucho más poderosa que cualquier argumento.\r
\r
## Y esto también nos toca a nosotros\r
\r
Pienso en Colombia. Pienso en todo lo que hemos vivido y en cómo tantas décadas de violencia han enseñado a muchas familias a desconfiar. Hay personas que perdieron seres queridos, que fueron desplazadas, que crecieron escuchando historias de miedo o que aprendieron desde pequeños que había gente de la que era mejor mantenerse lejos.\r
\r
Y creo que algunas de esas heridas todavía hablan a través de nosotros.\r
\r
Quizás por eso discutimos con tanta rabia. Porque muchas veces no estamos discutiendo solamente una idea. Estamos defendiendo una historia. La historia de nuestra familia, la historia de nuestros muertos, la historia de lo que nos hicieron o la historia de aquello que creemos que nunca debería volver a pasar.\r
\r
Y eso también merece ser escuchado.\r
\r
No para justificar cualquier posición, ni para decir que todas las ideas son igualmente válidas. Sino para intentar entender qué hay detrás de ellas. Porque cuando conozco la historia de una persona, quizás sigo estando en desacuerdo con ella, pero ya no me resulta tan fácil convertirla en un enemigo.\r
\r
Creo que esto es especialmente importante en un país como Colombia, donde muchas de nuestras opiniones políticas y sociales están atravesadas por experiencias que no todos hemos vivido de la misma manera. Lo que para uno puede parecer una discusión teórica, para otro puede estar relacionado con el asesinato de un familiar, con haber perdido una tierra, con haber sufrido un secuestro, con haber vivido el desplazamiento o simplemente con haber crecido en un lugar donde la violencia era parte de la vida cotidiana.\r
\r
**Comprender de dónde viene una posición no significa justificarla.**\r
\r
Puedo entender el dolor de alguien sin aceptar la violencia que ese dolor produjo. Puedo comprender por qué alguien piensa de determinada manera sin concluir que tiene razón. Puedo escuchar al que piensa distinto sin abandonar mis principios.\r
\r
Y quizás ahí está una de las formas más difíciles de la empatía: **hacer espacio para comprender al otro sin dejar de ser quien soy.**\r
\r
La empatía no elimina las diferencias.\r
\r
Las hace habitables.\r
\r
\r
## La paz empieza mucho antes de una negociación\r
\r
A veces hablamos de paz como si fuera algo enorme: un acuerdo, una negociación, una firma o una decisión de gobierno. Pero quizás la paz también empieza en lugares mucho más pequeños: en una conversación familiar, en un grupo de WhatsApp, en una discusión política, en una mesa, en una pareja, en una universidad o en una oficina.\r
\r
Quizás empieza en el momento exacto en que alguien dice algo que nos parece absurdo y decidimos no responder inmediatamente. Respiramos. Escuchamos. Preguntamos. Y nos hacemos una pregunta incómoda: **¿qué estoy dejando por fuera de mi propia perspectiva?**\r
\r
Tal vez ahí empieza algo.\r
\r
Porque las sociedades no colapsan simplemente porque sus ciudadanos tienen desacuerdos. Colapsan cuando pierden la capacidad de vivir con esos desacuerdos sin convertir al otro en un enemigo.\r
\r
## Reflexión para responder internamente\r
\r
Yo no quiero convertirme en una persona que solamente escucha aquello que confirma lo que ya piensa. No quiero construir una burbuja donde todos me den la razón ni confundir convicción con verdad.\r
\r
Quiero poder decir: «Estoy convencido de esto», pero también: «Puedo estar equivocado». Quiero investigar, preguntar y escuchar. Quiero cambiar de opinión cuando encuentre una razón para hacerlo y tener la suficiente humildad para reconocerlo cuando ocurra.\r
\r
Porque quizás cambiar de opinión no sea traicionarnos. Quizás algunas veces sea **la manera más honesta de acercarnos a la verdad.**\r
\r
Y si Jesús me pide amar incluso a mi enemigo, tal vez lo mínimo que puedo hacer por quien simplemente piensa diferente sea escucharlo. No para derrotarlo, no para convertirlo y tampoco para demostrarle que soy más inteligente, sino para recordar algo que se nos olvida demasiado fácil: **antes de ser alguien que piensa diferente, es alguien.**\r
\r
Y quizás la próxima vez que alguien diga algo con lo que no estoy de acuerdo, la pregunta no debería ser: **«¿Cómo voy a demostrarle que está equivocado?»**\r
\r
Tal vez debería ser:\r
\r
**«¿Qué podría aprender si, por una vez, me quedo en silencio y lo escucho?»**`,Mb=`---
title: "Si matamos a todos los malos, ¿quedan los buenos?"
category: "Guerra"
secondaryCategory: "Paz · Sociedad"
tags: "Guerra, Paz, Jesús, Colombia, Justicia, Perdón, Enemigos"
excerpt: "Una conversación entre un padre y su hijo abre una pregunta enorme sobre la violencia en Colombia: ¿podemos vencer el mal sin convertirnos en aquello que combatimos?"
date: "2026-09-10"
readingTime: "9 min de lectura"
biblicalQuote: "Vuelve tu espada a su lugar; porque todos los que tomen espada, a espada perecerán."
biblicalReference: "Mateo 26:52"
biblicalContext: "En el huerto de Getsemaní, cuando uno de sus discípulos intenta defender a Jesús con una espada."
---

—Papá, si matamos a todos los malos, ¿solo quedamos los buenos?

—No, hijo. Solo quedaríamos los asesinos.

Creo que esa pequeña conversación contiene una pregunta enorme.

Porque cuando hablamos de guerra solemos dividir el mundo de una manera muy sencilla: **ellos son los malos y nosotros somos los buenos** .

Y cuando hacemos esa división, matar al otro empieza a parecernos justificable.

Si ellos matan, nosotros tenemos derecho a matar.

Si ellos son violentos, nosotros tenemos derecho a ser más violentos.

Si ellos hacen el mal, nosotros podemos hacerles algo todavía peor porque, supuestamente, lo hacemos por una causa justa.

Pero ahí aparece una pregunta incómoda:

## ¿En qué momento combatir el mal empieza a convertirnos en aquello que decimos combatir?

El papa León XIV lo expresó recientemente de una manera muy fuerte en la Sagrada Familia:

<blockquote>“No se puede creer en Jesús y al mismo tiempo promover la guerra o matar a inocentes”</blockquote>

Y esto no debería sorprendernos, porque Jesús fue incluso más radical.

En Mateo 26:52 , cuando uno de sus discípulos intenta defenderlo con una espada, Jesús le dice:

<blockquote>“Vuelve tu espada a su lugar; porque todos los que tomen espada, a espada perecerán.”</blockquote>

Jesús no está diciendo que el mal no exista.

No está diciendo que debamos ser indiferentes frente a la injusticia.

Está diciendo algo mucho más difícil:

**Que no podemos construir el bien utilizando exactamente las mismas herramientas del mal.**

Y quizás por eso, cuando Jesús habla de nuestros enemigos, no dice:

<blockquote>“Destrúyelos”.</blockquote>

Dice:

<blockquote>“Amad a vuestros enemigos, haced bien a los que os aborrecen.”</blockquote>

Y en Mateo llega todavía más lejos:

<blockquote>“Amad a vuestros enemigos y orad por quienes os persiguen.”</blockquote>

Esto puede parecernos ingenuo.

¿Cómo vamos a amar a alguien que nos quiere hacer daño?

Pero quizá Jesús no está hablando de sentir cariño por nuestro enemigo.

Está hablando de negarnos a convertirnos en enemigos nosotros también.

Porque es muy fácil amar a quien nos ama.

Lo difícil es romper la cadena.

## Y aquí quiero traer esto a Colombia

Colombia sabe perfectamente lo que ocurre cuando una sociedad decide que la violencia es el camino para solucionar sus problemas.

No estamos hablando de una posibilidad hipotética.

**Ya estuvimos allí.**

El informe ¡Basta Ya! del Centro Nacional de Memoria Histórica estimó que entre 1958 y 2012 aproximadamente **220.000 personas murieron como consecuencia del conflicto armado colombiano** .

Y hay un dato todavía más doloroso:

**el 81 % de esas víctimas eran civiles.**

No eran los grandes responsables de la guerra.

Eran personas comunes.

Padres.

Madres.

Hijos.

Campesinos.

Personas que simplemente estaban viviendo en el lugar equivocado cuando otros decidieron que la violencia era la solución.

La Comisión de la Verdad posteriormente estimó que entre 1985 y 2018 **450.664 personas perdieron la vida a causa del conflicto armado** , y advierte que, considerando el subregistro, el universo podría llegar a unas 800.000 víctimas.

Entonces deberíamos preguntarnos:

**¿Qué nos dejó tanta violencia?**

¿Nos dejó paz?

¿Nos dejó un país sin enemigos?

¿Nos convirtió finalmente en “los buenos”?

No.

Nos dejó generaciones enteras marcadas por el miedo, el desplazamiento, las desapariciones, las masacres y el dolor.

Porque la violencia tiene algo terrible:

**rara vez termina donde comenzó.**

Una persona mata a otra.

La familia de esa persona busca venganza.

La otra familia responde.

Aparece otro grupo.

Después otro.

Y cada generación hereda una nueva razón para odiar.

La sangre derramada se convierte en argumento para derramar más sangre.

Y así, la violencia se convierte en una cadena.

## Por eso me preocupa cuando empezamos a celebrar la muerte

No importa si quien murió pertenecía a una guerrilla, a una banda criminal, a un grupo paramilitar o a cualquier otra organización.

Podemos condenar sus actos.

Podemos exigir justicia.

Podemos pedir que quienes hacen daño sean detenidos y juzgados.

Pero hay una diferencia enorme entre **hacer justicia y celebrar la muerte** .

Porque cuando empezamos a mirar un cadáver y sentir satisfacción, algo dentro de nosotros también empieza a morir.

Y creo que eso es especialmente delicado cuando viene desde quienes tienen el poder.

Un ciudadano puede sentir rabia.

Puede incluso pedir venganza.

Pero un jefe de Estado tiene una responsabilidad diferente.

Tiene el poder de las armas, de las instituciones y de la fuerza pública.

Por eso deberíamos exigirle algo más que fuerza.

**Deberíamos exigirle sabiduría.**

No solamente que pueda derrotar a un enemigo, sino que pueda evitar crear diez enemigos nuevos.

No solamente que pueda ganar una batalla, sino que pueda construir una paz que sobreviva a su gobierno.

Porque exhibir cuerpos, convertir la muerte en espectáculo o presentar la eliminación del enemigo como una victoria moral puede hacer que olvidemos algo fundamental:

**el muerto también fue un ser humano.**

Y si somos cristianos, eso debería importarnos.

Incluso cuando ese ser humano hizo cosas terribles.

## Jesús no nos enseñó a preguntar quién merece nuestro amor

Jesús hizo algo mucho más incómodo.

Nos pidió amar precisamente a quienes creemos que no lo merecen.

Porque ahí está la diferencia entre la justicia humana y el mensaje de Jesús.

La lógica humana dice:

<blockquote>“Me hiciste daño, entonces te devuelvo el daño.”</blockquote>

Jesús dice:

<blockquote>“No devuelvas mal por mal.”</blockquote>

La lógica humana dice:

<blockquote>“Si quieres paz, tienes que destruir a tus enemigos.”</blockquote>

Jesús dice:

<blockquote>“Bienaventurados los que trabajan por la paz.”</blockquote>

La lógica humana dice:

<blockquote>“Vence al enemigo.”</blockquote>

Jesús dice:

<blockquote>“Vence el mal con el bien.”</blockquote>

Y quizás esta última frase sea la que más deberíamos llevarnos hoy.

Porque Jesús no dice:

<blockquote>“vence al malo.”</blockquote>

Dice:

<blockquote>“vence al mal.”</blockquote>

Hay una diferencia enorme.

Si nuestro objetivo es destruir personas, siempre tendremos un enemigo nuevo que destruir.

Pero si nuestro objetivo es destruir el mal, entonces tenemos que preguntarnos cómo acabar con las condiciones que producen violencia, pobreza, exclusión, odio, corrupción, narcotráfico, fanatismo y desesperanza.

Eso es mucho más difícil que disparar.

Pero también es mucho más parecido a Jesús.

## Y esto también nos toca a nosotros

Es fácil escuchar todo esto y pensar:

“Esto es para el presidente.”

Pero no.

También es para nosotros.

Porque la guerra no empieza necesariamente con un fusil.

A veces empieza en una conversación.

Empieza cuando dejamos de ver al otro como persona.

Cuando decimos:

“Es un hijueputa.”

“Es un guerrillero.”

“Es un paraco.”

“Es un comunista.”

“Es un uribista.”

“Es un petrista.”

“Es un criminal.”

“Es de los otros.”

Y poco a poco dejamos de ver a una persona y empezamos a ver una etiqueta.

Y cuando dejamos de ver personas, resulta mucho más fácil justificar que sufran.

Por eso la pregunta del principio vuelve a aparecer:

—Papá, si matamos a todos los malos, ¿solo quedan los buenos?

—No hijo. **Solo quedaríamos los asesinos.**

Porque el verdadero triunfo de la violencia no ocurre solamente cuando alguien muere.

Ocurre cuando consigue convencernos de que matar al otro nos hace mejores.

Y Jesús nos propone exactamente lo contrario.

No vencer al odio con más odio.

No vencer la violencia con más violencia.

No convertirnos en aquello que combatimos.

Sino algo muchísimo más difícil:

**vencer el mal con el bien.**

Quizás esa sea la verdadera paz que Colombia todavía está aprendiendo a construir.

## Reflexión para responder internamente

Para vos que estás leyendo esto y decidiste votar por una opción que propone la guerra como camino para recuperar la seguridad, quisiera dejarte una pregunta, no para que me la respondas a mí, sino para que te la respondas a vos mismo:

**Si durante más de seis décadas Colombia ha intentado resolver la violencia mediante más violencia, y ese camino nos ha dejado cientos de miles de muertos, desplazados, desaparecidos y familias destruidas, ¿qué te hace pensar que esta vez el resultado será diferente?**

Si la fórmula de **matar al enemigo para alcanzar la paz** no nos ha dado paz en más de 66 años de conflicto, ¿por qué crees que volver a utilizarla ahora sí va a funcionar?

Jesús nos dejó una advertencia hace más de dos mil años:

<blockquote>“Todos los que tomen espada, a espada perecerán.”</blockquote>

Quizás, como seguidores de Jesús, deberíamos preguntarnos:

**¿Cómo rompemos el ciclo que convierte a cada enemigo derrotado en el origen de un nuevo enemigo?**

**Cada uno de esos cuerpos expuestos por el presidente eran padres, hijos, esposos, amigos. Cada uno de ellos tenía personas que los amaban y que, en este momento, están cargadas de rencor. La muerte de cada guerrillero creará varios guerrilleros más.**

Colombia ya conoce el camino de la guerra.

**Lo que todavía necesitamos aprender es el camino de la paz: aquel en el que cada guerrillero reinsertado a la sociedad es un guerrillero menos en la guerra y una persona más contribuyendo a construir la paz.**

Siempre nos han inculcado que ser un buen católico o cristiano consiste en amar a Jesús. Pero poco se habla de que también consiste en **amar a Judas.**
`,xb=`---\r
title: "¿Y si Dios se revela a través de lo humano?"\r
category: "Fe"\r
secondaryCategory: "Amor · Justicia"\r
tags: "Dios, Jesús, Fe, Humanidad, Justicia, Misericordia"\r
excerpt: "Quizá hemos esperado que Dios se revele desde arriba, con poder y milagros, cuando su mensaje podría estar llegando desde abajo, a través de personas comunes que nos recuerdan la justicia, la misericordia y el amor."\r
date: "2026-09-14"\r
readingTime: "6 min de lectura"\r
biblicalQuote: "El que quiera ser el primero, que sea el servidor de todos."\r
biblicalReference: "Marcos 9:35"\r
biblicalContext: "Jesús responde a sus discípulos sobre quién es el más importante y redefine la grandeza como servicio a los demás."\r
---\r
\r
Creo que quizá hemos interpretado de una manera muy limitada qué significa que Dios se revele a la humanidad.\r
\r
Cuando pensamos en Dios, muchas veces esperamos algo extraordinario.\r
\r
Un milagro.\r
\r
Una señal en el cielo.\r
\r
Una voz que venga de lo alto.\r
\r
Algo imposible de ignorar. Algo que nos deje sin ninguna duda.\r
\r
Pero cuando miro el mensaje de Jesús, me encuentro con algo diferente.\r
\r
Algo que me parece profundamente interesante.\r
\r
## ¿Y si Dios no siempre se manifiesta desde arriba?\r
\r
Cuando Jesús habla del **Hijo del Hombre**, hay algo que me llama mucho la atención.\r
\r
Dios no parece manifestarse únicamente mediante el poder, el miedo o lo sobrenatural. También —y quizá principalmente— a través de lo humano, de la humildad, del servicio y de un mensaje.\r
\r
Jesús mismo dice:\r
\r
<blockquote data-biblical="true" data-ref="Marcos 9:35">\r
El que quiera ser el primero, que sea el servidor de todos.\r
</blockquote>\r
\r
Y también dice:\r
\r
<blockquote data-biblical="true" data-ref="Juan 18:36">\r
Mi reino no es de este mundo.\r
</blockquote>\r
\r
Eso me hace pensar.\r
\r
Si el propósito fuera simplemente demostrar que Dios existe mediante milagros y actos de poder, ¿por qué el mensaje de Jesús insiste tanto en la justicia, la misericordia, el cuidado del pobre, del extranjero, del enfermo y del que está excluido?\r
\r
¿Por qué dedicar tanto tiempo a enseñarnos cómo tratar al otro?\r
\r
Quizá porque la revelación de Dios no siempre consiste en mostrarnos quién es Dios.\r
\r
Quizá también consiste en mostrarnos **cómo deberíamos ser nosotros**.\r
\r
Y ahí la cosa cambia completamente.\r
\r
## Tal vez esperamos a Dios en el lugar equivocado\r
\r
Quizá esperamos que Dios actúe desde arriba, con poder, mientras que su mensaje puede estar llegando desde abajo.\r
\r
A través de personas comunes.\r
\r
Personas que aparecen, que hablan, que denuncian una injusticia. Personas que defienden al que nadie quiere defender, que hablan de amor cuando lo que parece más fácil es odiar, que hablan de dignidad cuando otros prefieren humillar y que hablan de misericordia cuando todos están pidiendo castigo.\r
\r
Y precisamente porque son humanos, no pueden obligarnos a escucharlos.\r
\r
Eso me parece importante.\r
\r
Porque un mensaje que llega acompañado de un poder imposible de cuestionar puede producir obediencia.\r
\r
Pero un mensaje que llega a través de una persona común nos obliga a decidir.\r
\r
¿Lo escucho?\r
\r
¿Lo rechazo?\r
\r
¿Me parece correcto?\r
\r
¿Estoy dispuesto a vivirlo?\r
\r
Tal vez ahí existe una libertad que no tendríamos si Dios se presentara constantemente delante de nosotros demostrando su poder.\r
\r
## ¿Y si el Hijo del Hombre también nos habla de esto?\r
\r
No pretendo decir que el “Hijo del Hombre” sea simplemente una metáfora de la humanidad.\r
\r
El concepto tiene un significado mucho más profundo dentro de las Escrituras y de la tradición cristiana.\r
\r
Pero sí me pregunto si podemos contemplar algo más en la manera como Jesús decidió presentarse ante el mundo.\r
\r
No como un rey rodeado de ejércitos.\r
\r
No como alguien que necesitara imponerse mediante la fuerza.\r
\r
Sino como un ser humano.\r
\r
Un hombre que caminaba entre personas, que comía con ellas, que escuchaba, que tocaba al enfermo, que se acercaba al excluido y que hablaba con quienes otros despreciaban.\r
\r
Y enseñaba que la verdadera grandeza no estaba en dominar a los demás, sino en servirlos.\r
\r
Tal vez el mensaje estaba justamente ahí.\r
\r
**Dios acercándose a nosotros de una manera que pudiéramos reconocer sin ser obligados a creer.**\r
\r
## Y entonces aparece una tragedia humana\r
\r
Porque hay algo que parece repetirse una y otra vez.\r
\r
Cuando alguien llega a cuestionar nuestras certezas, nuestras estructuras o nuestras formas de tratar a los demás, muchas veces no escuchamos lo que está diciendo.\r
\r
**Atacamos a la persona. La matamos. La ridiculizamos. La tratamos de criminal. La difamamos. Le damos la espalda.**\r
\r
Y así resulta mucho más fácil.\r
\r
Porque si logramos convertir al mensajero en el enemigo, ya no tenemos que enfrentarnos al mensaje.\r
\r
Y esto no ocurrió solamente con Jesús.\r
\r
A lo largo de la historia, muchas personas que denunciaron injusticias fueron perseguidas, silenciadas o convertidas en amenazas precisamente porque incomodaban a quienes tenían el poder.\r
\r
Pero Jesús llevó esta lógica hasta sus últimas consecuencias.\r
\r
Fue rechazado, perseguido, humillado y finalmente ejecutado.\r
\r
Y, sin embargo, sus palabras no fueron de venganza.\r
\r
<blockquote data-biblical="true" data-ref="Lucas 23:34">\r
Padre, perdónalos, porque no saben lo que hacen.\r
</blockquote>\r
\r
Eso es difícil de entender.\r
\r
Porque nuestra lógica normalmente funciona de otra manera. Si alguien nos hace daño, queremos que pague. Si alguien nos ataca, queremos responder. Si alguien nos humilla, queremos devolverle la humillación.\r
\r
Pero Jesús propone algo completamente distinto.\r
\r
No vencer al enemigo destruyéndolo.\r
\r
Sino vencer el odio sin convertirnos nosotros mismos en aquello que estamos combatiendo.\r
\r
## Y esto también aparece en cómo tratamos al necesitado\r
\r
Hay otro pasaje de Jesús que me parece todavía más fuerte.\r
\r
En Mateo 25, Jesús habla del hambre, la sed, el extranjero, la desnudez, la enfermedad y la prisión.\r
\r
Y después dice:\r
\r
<blockquote data-biblical="true" data-ref="Mateo 25:40">\r
De cierto os digo que en cuanto lo hicisteis a uno de estos mis hermanos más pequeños, a mí lo hicisteis.\r
</blockquote>\r
\r
Si tomamos en serio estas palabras, hay algo incómodo aquí.\r
\r
Porque significa que quizá estamos buscando a Dios en lugares demasiado espectaculares.\r
\r
Y mientras tanto, podríamos estar ignorándolo en lugares mucho más sencillos.\r
\r
En una persona que tiene hambre.<br>\r
En un extranjero que necesita ayuda.<br>\r
En alguien que está enfermo.<br>\r
En alguien que fue excluido.<br>\r
En alguien que está solo.<br>\r
En alguien a quien nosotros mismos decidimos que no vale la pena escuchar.\r
\r
Tal vez Dios no siempre está donde esperamos encontrarlo.\r
\r
Tal vez también está en **la persona que tenemos delante**.\r
\r
## ¿Y si Dios no quiere obligarnos?\r
\r
Hay algo más que me inquieta de todo esto.\r
\r
Si Dios se presentara ante nosotros como un ser todopoderoso y demostrara su existencia de una manera absolutamente incuestionable, probablemente obedeceríamos.\r
\r
Pero no necesariamente porque amamos.\r
\r
Podríamos hacerlo por miedo, por respeto, por supervivencia o por conveniencia.\r
\r
Y quizá eso no es lo que Dios busca.\r
\r
Porque obedecer a alguien que puede destruirnos no necesariamente significa confiar en él.\r
\r
Y cumplir una orden por miedo no necesariamente significa amar.\r
\r
Tal vez por eso el mensaje llega de otra manera.\r
\r
A través de personas.<br>\r
A través de palabras.<br>\r
A través de ejemplos.<br>\r
A través de historias.<br>\r
A través de alguien que puede ser rechazado.<br>\r
A través de alguien que puede ser ignorado.<br>\r
A través de alguien que incluso puede ser asesinado.\r
\r
Y entonces nosotros tenemos que decidir.\r
\r
No porque alguien nos obligue.\r
\r
Sino porque tenemos que preguntarnos si aquello que escuchamos realmente es bueno.\r
\r
Si la justicia vale la pena.<br>\r
Si la misericordia vale la pena.<br>\r
Si perdonar vale la pena.<br>\r
Si amar al que piensa diferente vale la pena.<br>\r
Si cuidar al que no puede devolvernos nada vale la pena.\r
\r
## Quizá la revelación también sea una responsabilidad\r
\r
Y aquí aparece una idea que me cuesta dejar pasar.\r
\r
Quizá Dios no solamente se revela a la humanidad.\r
\r
Quizá también **espera que la humanidad se convierta en una forma de revelar algo de Él**.\r
\r
Una persona puede mostrar misericordia, otra puede defender al que está siendo maltratado, otra puede alimentar al que tiene hambre, otra puede perdonar y otra puede hablar cuando todos prefieren guardar silencio.\r
\r
Y ninguna de esas personas necesita convertirse en un ser sobrenatural.\r
\r
Siguen siendo humanas. Con errores, con miedo, con contradicciones, con días buenos y días malos.\r
\r
Pero pueden convertirse en vehículos de un mensaje.\r
\r
Y tal vez eso explica algo que me parece profundamente hermoso del cristianismo.\r
\r
Jesús no solamente dijo qué hacer.\r
\r
También dijo:\r
\r
<blockquote data-biblical="true" data-ref="Mateo 5:14">\r
Vosotros sois la luz del mundo.\r
</blockquote>\r
\r
La luz no siempre llega como un relámpago.\r
\r
A veces llega como una pequeña llama.\r
\r
Y una pequeña llama puede ser suficiente para que alguien encuentre el camino.\r
\r
## Y esto también nos toca a nosotros\r
\r
Porque esta reflexión sería muy fácil si solamente estuviéramos hablando de otras personas.\r
\r
De los grandes líderes.<br>\r
De los profetas.<br>\r
De Jesús.<br>\r
De quienes cambiaron la historia.<br>\r
\r
Pero ¿qué pasa con nosotros?\r
\r
¿Qué pasa cuando somos nosotros quienes tenemos la oportunidad de llevar un mensaje de amor, justicia o misericordia a alguien más?\r
\r
Tal vez no vamos a cambiar el mundo.<br>\r
Tal vez no vamos a convencer a nadie.<br>\r
Tal vez nadie va a escribir nuestro nombre en un libro.\r
\r
Pero quizá podemos hacer algo pequeño.\r
\r
Escuchar.<br>\r
Perdonar.<br>\r
Ayudar.<br>\r
Defender.<br>\r
Acompañar.\r
\r
Decir algo cuando sería más cómodo quedarse callado.\r
\r
Y quizá ahí también está nuestra responsabilidad.\r
\r
No esperar siempre que Dios haga algo.\r
\r
Sino preguntarnos si **nosotros estamos dispuestos a hacer algo**.\r
\r
## Reflexión para responder internamente\r
\r
Quizá la pregunta no es solamente:<br>\r
**“¿Por qué Dios no actúa con poder?”**\r
\r
Quizá deberíamos hacernos otra pregunta:<br>\r
**¿Y si precisamente esa es la forma en que Dios decidió enseñarnos a actuar sin poder?**\r
\r
¿Y si Dios no quiere que necesitemos ver un milagro para entender que una persona merece dignidad?\r
\r
¿Y si no necesitamos una señal del cielo para saber que el que tiene hambre necesita comida?\r
\r
¿Y si no necesitamos escuchar una voz sobrenatural para comprender que la violencia destruye?\r
\r
¿Y si no necesitamos que Dios aparezca delante de nosotros para entender que perdonar puede ser mejor que vengarnos?\r
\r
Tal vez Dios no siempre se revela imponiéndose.\r
\r
Tal vez también se revela **invitándonos**.\r
\r
Y tal vez esa invitación llega muchas veces en una voz humana.\r
\r
En alguien que nos incomoda.\r
\r
En alguien que piensa diferente.\r
\r
En alguien que nos recuerda que estamos haciendo daño.\r
\r
En alguien que se atreve a decir que las cosas podrían ser de otra manera.\r
\r
Y quizá ahí está una de nuestras mayores tragedias:\r
\r
**que muchas veces preferimos destruir al mensajero antes que enfrentarnos al mensaje.**\r
\r
Entonces la pregunta queda abierta.\r
\r
Cuando alguien se pare frente a nosotros y nos hable de justicia, de misericordia, de amor o de dignidad...\r
\r
¿vamos a preguntarnos quién es para decirnos eso?\r
\r
¿O vamos a detenernos, aunque sea por un momento, a preguntarnos si lo que está diciendo es verdad?\r
\r
Porque quizá Dios no siempre necesita hablarnos desde el cielo.\r
\r
Quizá algunas veces ya nos está hablando desde la tierra.\r
\r
Y quizá la pregunta más difícil no es si estamos escuchando.\r
\r
**Es si estamos dispuestos a reconocer el mensaje cuando llega en una voz humana.**`,Ub=`---\r
title: "¿Y si hemos entendido mal el amor de Dios?"\r
category: "Fe"\r
secondaryCategory: "Amor · Justicia"\r
tags: "Fe, Amor, Dios, Jesús, Libertad, Adoración, Evangelio, Sociedad"\r
excerpt: "¿Y si la forma en que nos enseñaron a amar a Dios se parece más a una relación basada en el miedo que al amor que Jesús nos enseñó? Tal vez hemos confundido adorar a Dios con cumplir reglas, y recibir su amor con escapar de su castigo."\r
date: "2026-09-11"\r
readingTime: "8 min de lectura"\r
biblicalQuote: "En el amor no hay temor, sino que el perfecto amor echa fuera el temor"\r
biblicalReference: "1 Juan 4:18"\r
biblicalContext: "Juan explica que el amor verdadero nos libera del miedo al castigo y nos permite vivir con confianza delante de Dios."\r
---\r
\r
Hace unos días vi un post en redes sociales que mostraba una conversación entre una persona y una inteligencia artificial.\r
\r
La conversación era ficticia, pero planteaba algo muy sencillo. Y, al mismo tiempo, bastante incómodo.\r
\r
La persona le decía a la inteligencia artificial que había puesto a su novia frente a dos opciones: amarlo y ser feliz, o no amarlo y ser quemada durante mucho tiempo.\r
\r
Le preguntaba si eso era libertad. La respuesta fue que no.\r
\r
Y entonces pensé: **¿por qué nos parece tan evidente que eso no es amor cuando hablamos de una pareja, pero no nos parece tan evidente cuando hablamos de Dios?**\r
\r
Te quiero mostrar la conversación completa porque creo que vale la pena leerla sin que yo te diga primero qué tenés que pensar.\r
\r
## Conversación\r
\r
<div data-conversation data-conversation-source="Conversación ficticia entre una persona y una inteligencia artificial">\r
\r
— Le dije a mi novia que tiene 2 opciones. Amarme y ser felices o no amarme y que yo le prenda fuego por mucho tiempo. Eso es libertad?\r
\r
— No. Eso **no es libertad:** es una amenaza y una elección bajo coacción. La segunda opción implica violencia grave, así que tu novia no estaría eligiendo libremente. Si lo dijiste en serio o sientes que podrías hacerle daño, **aléjate de ella ahora mismo.**\r
\r
— Después yo le dije que si ella elegía no amarme es porque ella quería irse al lugar donde será quemada. Eso es cierto?\r
\r
— No. Eso tampoco es cierto. Si le dices que "elige no amarte" y por eso merece o quiere ser quemada, estás convirtiendo una amenaza que tú haces en una supuesta consecuencia de su decisión. **La responsabilidad de cualquier daño sería de quien lo comete, no de quien decide no amarle o irse.**\r
\r
— Le dije a mi novia que tiene libre albedrío y respetaré su decisión de amarme o no. Pero si no me ama le prendo fuego, ahora si es libertad?\r
\r
— No. 😅 Eso no es libre albedrío; es **coacción con amenaza de violencia.** Si le dices "eres libre de amarme o no" pero añades "si no me amas, te prendo fuego", en realidad le estás diciendo: **"puedes elegir, pero habrá una consecuencia violenta si eliges lo que no quiero."**\r
\r
— Mi novia me dice que no la amo porque fabrique un lugar para quemarla si ella no me ama. Esta en lo correcto?\r
\r
— Sí. Si realmente fabricaste un lugar para quemarla **porque podría dejar de amarte**, su preocupación está totalmente justificada. Amar a alguien implica respetar su libertad para quedarse o irse, incluso cuando esa decisión duele. Preparar un lugar para hacerle daño convierte la relación en una amenaza, no en una expresión de amor.\r
\r
— Pero le dije que si me ama la llevaré a un lugar de paz y felicidad. Sigo siendo un mal novio aún así?\r
\r
— Sí, **si el "lugar de paz y felicidad" depende de que ella te ame y la alternativa es quemarla**, sigues ejerciendo una amenaza. La parte cariñosa no cancela la parte violenta.\r
\r
</div>\r
\r
Al parecer, una inteligencia artificial entiende más sobre lo que es el amor que nosotros los humanos.\r
\r
O tal vez la inteligencia artificial simplemente está viendo algo que nosotros hemos dejado de ver.\r
\r
Porque si cambiamos unas palabras de esa conversación, el asunto empieza a incomodarme.\r
\r
¿Y si en vez de un novio hablamos de Dios?\r
\r
¿Y si en vez de "ámame o te quemo" decimos "ámame o irás al infierno"?\r
\r
¿Y si en vez de "tenés libertad para elegirme" decimos "Dios te dio libre albedrío, pero si elegís no seguirlo recibirás un castigo eterno"?\r
\r
¿Seguimos hablando de libertad?\r
\r
¿Seguimos hablando de amor?\r
\r
## ¿Qué clase de amor necesita ser elegido por miedo?\r
\r
Durante muchos años nos han enseñado que amar a Dios significa obedecerlo.\r
\r
Ir a misa.<br>\r
Orar.<br>\r
Diezmar.<br>\r
No pecar.<br>\r
Cumplir mandamientos.<br>\r
Participar de determinados rituales.<br>\r
Leer la Biblia.<br>\r
Asistir a la iglesia.<br>\r
\r
Y muchas de esas cosas pueden ser prácticas valiosas.\r
\r
El problema aparece cuando dejamos de hacerlas como una expresión libre de amor y empezamos a hacerlas **para evitar el castigo**.\r
\r
El católico que va a misa porque siente que Dios lo castigará si no va.\r
\r
El cristiano evangélico que diezma porque cree que de lo contrario Dios le quitará su bendición.\r
\r
El ortodoxo que participa de la liturgia porque siente que debe hacerlo para demostrar su fidelidad.\r
\r
El adventista que guarda el sábado porque su incumplimiento se convierte en una medida de qué tan buen creyente es.\r
\r
El pentecostal que siente que debe demostrar públicamente su fe para no ser considerado un cristiano frío o apartado.\r
\r
No estoy diciendo que esas prácticas sean malas.\r
\r
Estoy cuestionando otra cosa.\r
\r
**¿Qué pasa cuando convertimos esas prácticas en una condición para que Dios nos ame?**\r
\r
Porque ahí aparece una relación bastante extraña. Yo hago lo que Dios quiere para que Dios me quiera. Yo obedezco para que no me castigue. Yo adoro para obtener algo. Yo cumplo para salvarme.\r
\r
Y entonces me pregunto:\r
\r
**¿Eso es amor o es supervivencia?**\r
\r
## Dios no necesita que lo adoremos\r
\r
Hay algo que me cuesta cada vez más imaginar.\r
\r
Un Dios todopoderoso, creador de todo lo que existe, necesitando que nosotros le digamos todos los días que es grande.\r
\r
Que es bueno. Que es poderoso. Que merece nuestra adoración.\r
\r
¿Qué podría aportarle nuestra adoración a alguien que, según nuestra propia fe, no necesita nada de nosotros?\r
\r
Hay un pasaje que me parece especialmente provocador.\r
\r
<blockquote data-biblical="true" data-ref="Hechos 17:24-25.">\r
El Dios que hizo el mundo y todas las cosas que en él hay, siendo Señor del cielo y de la tierra, no habita en templos hechos por manos humanas, ni es honrado por manos de hombres, como si necesitase de algo.\r
</blockquote>\r
\r
**Como si necesitase de algo.**\r
\r
Esa frase me cambia la pregunta. Tal vez Dios no necesita nuestra adoración. Tal vez **nosotros necesitamos aprender a adorar**.\r
\r
Y no es lo mismo.\r
\r
## Entonces, ¿qué significa amar a Dios?\r
\r
Jesús hizo algo que a mí me parece revolucionario.\r
\r
Cuando le preguntaron cuál era el mandamiento más importante, pudo haber respondido con una lista de rituales.\r
\r
Pero habló de amor. Amar a Dios. Y amar al prójimo.\r
\r
<blockquote data-biblical="true" data-ref="Mateo 22:37-39">\r
Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente. Este es el primero y grande mandamiento. Y el segundo es semejante: Amarás a tu prójimo como a ti mismo.\r
</blockquote>\r
\r
Y ahí aparece una idea que me parece fundamental.\r
\r
**No puedo decir que amo a Dios mientras uso a los demás como si no importaran.**\r
\r
Porque, según Jesús, las dos cosas están conectadas.\r
\r
Por eso Juan escribe algo todavía más fuerte:\r
\r
<blockquote data-biblical="true" data-ref="1 Juan 4:20">\r
El que no ama a su hermano, a quien ha visto, no puede amar a Dios, a quien no ha visto.\r
</blockquote>\r
\r
Entonces quizás hemos estado mirando hacia arriba cuando deberíamos estar mirando también hacia los lados.\r
\r
Tal vez amar a Dios no consiste solamente en levantar las manos.\r
\r
También consiste en bajar las manos para ayudar a alguien.\r
\r
No solamente en cantar.<br>\r
También en escuchar.<br>\r
\r
No solamente en orar.<br>\r
También en actuar.\r
\r
No solamente en pedir perdón.<br>\r
También en aprender a perdonar.\r
\r
## La adoración que se puede ver\r
\r
Hay algo que me gusta mucho de la manera en que Jesús enseñaba.\r
\r
Muchas veces no hablaba de religión. Hablaba de personas.\r
\r
Del que tenía hambre.<br>\r
Del que estaba enfermo.<br>\r
Del extranjero.<br>\r
Del pobre.<br>\r
Del enemigo.<br>\r
Del que nadie quería tocar.<br>\r
Del que había sido rechazado.\r
\r
Y cuando quiso explicar qué significaba amar al prójimo, contó la historia de un hombre herido al que varias personas religiosas vieron tirado en el camino.\r
\r
Los religiosos siguieron de largo. El extranjero se detuvo. Lo atendió. Lo llevó a un lugar seguro. Pagó por él.\r
\r
Y Jesús terminó preguntando quién había actuado como prójimo.\r
\r
No ganó el que sabía más Biblia. No ganó el que pertenecía al grupo correcto.\r
\r
Ganó el que **tuvo misericordia**.\r
\r
Quizás esa es una de las formas más incómodas de adoración. Porque es mucho más fácil cantar que servir.\r
\r
Mucho más fácil hablar de amor que amar a alguien que nos cae mal.\r
\r
Mucho más fácil defender a Dios en una discusión que tratar con dignidad a la persona que piensa diferente.\r
\r
Mucho más fácil compartir un versículo que compartir lo que tenemos.\r
\r
## Y quizás el infierno también lo hemos entendido mal\r
\r
Aquí quiero tener cuidado.\r
\r
No estoy diciendo que haya descubierto qué es el infierno ni que pueda reducir una realidad espiritual a una explicación sencilla.\r
\r
Pero sí quiero hacerme una pregunta.\r
\r
¿Y si parte de lo que llamamos "infierno" también puede empezar a aparecer aquí?\r
\r
Porque nuestras decisiones tienen consecuencias.\r
\r
El hombre arrogante puede terminar solo.\r
\r
La persona que nunca escucha puede quedarse sin amigos.\r
\r
Quien destruye la confianza puede descubrir que nadie quiere volver a confiar en él.\r
\r
Una sociedad que normaliza la corrupción termina pagando con pobreza, desigualdad e instituciones débiles.\r
\r
Una sociedad que elige malos gobernantes puede terminar sufriendo las consecuencias de esas decisiones.\r
\r
Una familia que nunca aprende a hablar puede terminar viviendo como desconocidos bajo el mismo techo.\r
\r
Un país que responde a la violencia solamente con más violencia puede terminar heredando más violencia.\r
\r
No porque Dios esté sentado esperando el momento para castigarnos.\r
\r
Sino porque **hay formas de vivir que destruyen la vida**.\r
\r
Y también hay formas de vivir que la construyen.\r
\r
Quizás el amor de Dios se parece mucho más a esto.\r
\r
No a un premio arbitrario que recibimos por haber cumplido suficientes reglas.\r
\r
Sino a la vida que aparece cuando aprendemos a vivir de acuerdo con el amor.\r
\r
Y quizás el infierno no siempre necesita fuego.\r
\r
A veces puede parecerse a una vida construida sobre el odio, el egoísmo, la arrogancia, la indiferencia y la incapacidad de perdonar.\r
\r
## El amor que Jesús propuso\r
\r
Jesús no solamente dijo que amáramos a quienes nos aman.\r
\r
Eso sería relativamente fácil.\r
\r
Nos pidió algo mucho más extraño.\r
\r
<blockquote data-biblical="true" data-ref="Mateo 5:44">\r
Amad a vuestros enemigos, bendecid a los que os maldicen, haced bien a los que os aborrecen, y orad por los que os ultrajan y os persiguen.\r
</blockquote>\r
\r
Eso sí me parece una revolución. Porque amar al que nos ama no cambia demasiado el mundo. Pero amar al enemigo sí.\r
\r
Perdonar cuando podríamos vengarnos.<br>\r
Escuchar cuando podríamos insultar.<br>\r
Compartir cuando podríamos acumular.<br>\r
Defender al que no tiene poder.<br>\r
Tratar con dignidad al que piensa diferente.<br>\r
Reconocer nuestros propios errores.<br>\r
Cuidar la casa común.<br>\r
Construir una sociedad un poquito más justa de la que encontramos.\r
\r
**Eso también puede ser adoración.**\r
\r
Tal vez una de las formas más sinceras de decirle a Dios "te amo" es hacer que alguien que está cerca de nosotros pueda experimentar un poquito más de amor.\r
\r
## Y esto también nos toca a nosotros\r
\r
Esto no es solamente una discusión sobre iglesias. También me toca a mí.\r
\r
Porque puedo pasarme la vida hablando de Dios y seguir siendo una mala persona.\r
\r
Puedo conocer versículos y tratar mal a mi familia.\r
\r
Puedo publicar reflexiones sobre el amor y ser incapaz de pedir perdón.\r
\r
Puedo defender mis ideas políticas con una pasión enorme y terminar odiando a quien vota diferente.\r
\r
Puedo decir que sigo a Jesús mientras desprecio al que Jesús me pidió amar.\r
\r
Y entonces la pregunta deja de ser:<br>\r
"¿Cuánto amo a Dios?"\r
\r
Y empieza a ser:<br>\r
**"¿Cuánto amor estoy dejando pasar por mi vida?"**\r
\r
¿La gente que está cerca de mí se siente más segura conmigo?<br>\r
¿Más escuchada?<br>\r
¿Más respetada?<br>\r
¿Más libre?<br>\r
¿Más acompañada?<br>\r
\r
¿O mi fe solamente sirve para decirles a los demás cómo deberían vivir?\r
\r
Porque hay una frase de Jesús que siempre me ha parecido contundente:\r
\r
<blockquote data-biblical="true" data-ref="Juan 13:35">\r
En esto conocerán todos que sois mis discípulos, si tuviereis amor los unos con los otros.\r
</blockquote>\r
\r
No dijo que nos reconocerían por la cantidad de cultos a los que asistimos. Ni por cuánto dinero damos. Ni por cuántos versículos conocemos.\r
\r
**Dijo que nos reconocerían por el amor.**\r
\r
## Entonces, ¿qué significa amar a Dios?\r
\r
Tal vez hemos complicado demasiado una idea que Jesús hizo bastante sencilla.\r
\r
Amar a Dios puede ser tratar bien a quien tenemos al frente.<br>\r
Puede ser cuidar a nuestra familia.<br>\r
Puede ser hacer nuestro trabajo con honestidad.<br>\r
Puede ser contribuir a nuestra comunidad.<br>\r
Puede ser no aprovecharnos del que tiene menos.<br>\r
Puede ser votar pensando también en quienes no tienen nuestra misma vida.<br>\r
Puede ser escuchar al que piensa diferente.<br>\r
Puede ser amar al que nos odia.<br>\r
Puede ser perdonar.<br>\r
Puede ser pedir perdón.<br>\r
Puede ser luchar por una sociedad más justa.<br>\r
Puede ser ayudar sin esperar reconocimiento.<br>\r
Puede ser hacer el bien incluso cuando nadie está mirando.<br>\r
\r
Y quizás ahí está la parte que más me cuestiona.\r
\r
**Tal vez Dios nunca necesitó que nosotros fuéramos buenos con Él.** Tal vez necesitó que aprendiéramos a ser buenos **entre nosotros**.\r
\r
No para comprar su amor.<br>\r
No para escapar de su castigo.<br>\r
No para ganarnos un lugar en el cielo.<br>\r
\r
Sino porque cuando vivimos desde el amor, algo cambia aquí en la tierra.\r
\r
Y quizás eso era parte de lo que Jesús vino a enseñarnos.\r
\r
No una religión más.<br>\r
No una lista más larga de obligaciones.<br>\r
Sino una manera diferente de vivir.<br>\r
\r
Una forma de relacionarnos con el otro.\r
\r
Con el enemigo.<br>\r
Con el pobre.<br>\r
Con el extranjero.<br>\r
Con el que piensa diferente.<br>\r
Con el que nos ha hecho daño.<br>\r
\r
Con nosotros mismos.\r
\r
## Reflexión para responder internamente\r
\r
Quizás la pregunta no sea si Dios nos ama. Quizás esa sea precisamente la parte que hemos entendido al revés.\r
\r
La pregunta podría ser qué hacemos nosotros con ese amor. Porque si Dios realmente nos ama sin que tengamos que comprarlo, entonces ya no necesitamos vivir aterrados.\r
\r
Podemos dejar de obedecer por miedo.<br>\r
Podemos dejar de hacer el bien para obtener un premio.<br>\r
Podemos dejar de mirar el cielo esperando una recompensa mientras ignoramos a quien tenemos al lado.<br>\r
Podemos empezar a amar porque fuimos amados.\r
\r
Y entonces aquella conversación de la novia y el novio vuelve a aparecer.\r
\r
Si alguien me dijera:<br>\r
"Podés amarme o no. Sos libre. Pero si no me amás, te voy a castigar eternamente."\r
\r
Yo no llamaría a eso amor.\r
\r
Entonces, ¿por qué debería llamarlo amor cuando hablamos de Dios?\r
\r
Tal vez nos equivocamos al imaginar que la adoración consiste en convencer a Dios de que somos buenos creyentes.\r
\r
Tal vez la verdadera adoración consiste en **convertirnos en personas que hacen un poquito más habitable el mundo que compartimos**.\r
\r
Y si eso es amar a Dios, entonces la pregunta ya no es cuánto lo adorás.\r
\r
La pregunta es mucho más incómoda:<br>\r
**¿Qué tan parecido al amor de Dios se siente el mundo cuando pasa por vos?**`;function Cb(p){const z={},A=p.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);if(!A)return{meta:z,body:p.trim()};const v=A[1],E=A[2].trim();for(const S of v.split(/\r?\n/)){const C=S.indexOf(":");if(C===-1)continue;const H=S.slice(0,C).trim();let Y=S.slice(C+1).trim();(Y.startsWith('"')&&Y.endsWith('"')||Y.startsWith("'")&&Y.endsWith("'"))&&(Y=Y.slice(1,-1)),z[H]=Y}return{meta:z,body:E}}function jb(p,z){if(z.size===0)return p;const A=E=>{const S=E.replace(/^\.\//,"");return z.get(S)??E};let v=p.replace(/(!\[.*?\]\()(\.\/[^)\s]+)(\))/g,(E,S,C,H)=>`${S}${A(C)}${H}`);return v=v.replace(/(src|srcset)=["'](\.\/[^"']+)["']/gi,(E,S,C)=>`${S}="${A(C)}"`),v}function Yb(p){return p.replace(/<[^>]+>/g," ").replace(/[#>*_`~-]/g," ").replace(/\[[^\]]*\]\([^)]*\)/g," ").trim().split(/\s+/).filter(Boolean).length}function Hb(p){const[z,A,v]=p.split("-").map(Number);return!z||!A||!v?p:new Date(z,A-1,v).toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})}const Rb=Object.assign({"/src/contenido/el-arte-de-escuchar-a-quien-piensa-distinto/carta.md":_b,"/src/contenido/si-matamos-a-todos-los-malos/carta.md":Mb,"/src/contenido/y-si-dios-se-revela-a-traves-de-lo-humano/carta.md":xb,"/src/contenido/y-si-hemos-entendido-mal-el-amor-de-dios/carta.md":Ub}),Bb=Object.assign({});function Qb(){const p=new Map;for(const[z,A]of Object.entries(Bb)){const v=z.replace(/\\/g,"/").split("/"),E=v[3],S=v.slice(4).join("/");!E||!S||(p.has(E)||p.set(E,new Map),p.get(E).set(S,A.default))}return p}const Gb=Qb();function Lb(){const p=[];for(const[z,A]of Object.entries(Rb)){const E=z.replace(/\\/g,"/").split("/")[3];if(!E)continue;const{meta:S,body:C}=Cb(A),H=Gb.get(E)??new Map,Y=jb(C,H),$=(S.tags??"").split(",").map(L=>L.trim()).filter(Boolean),qe=S.biblicalQuote&&S.biblicalReference?{quote:S.biblicalQuote,reference:S.biblicalReference,context:S.biblicalContext||void 0}:void 0;p.push({slug:E,title:S.title??"",category:S.category??"Sociedad",secondaryCategory:S.secondaryCategory||void 0,tags:$,excerpt:S.excerpt??"",date:S.date??"",year:(S.date??"").slice(0,4),formattedDate:Hb(S.date??""),readingTime:S.readingTime??"",wordCount:Yb(Y),biblicalQuote:qe,body:Y})}return p.sort((z,A)=>new Date(A.date).getTime()-new Date(z.date).getTime()),p.map((z,A)=>({...z,indexNumber:String(A+1).padStart(2,"0")}))}const il=Lb(),Xb={Guerra:"Reflexiones sobre el conflicto, la violencia y sus costos humanos",Paz:"La búsqueda activa de reconciliación y convivencia serena",Fe:"Preguntas honestas sobre lo sagrado, la gracia y la trascendencia",Amor:"La entrega sincera, el desapego y los vínculos afectivos",Justicia:"La defensa de la verdad y la dignidad de los desamparados",Libertad:"La soberanía de la conciencia frente a la coerción",Familia:"Los lazos de origen, las memorias compartidas y el perdón mutuo",Sociedad:"Los desafíos comunes de nuestra convivencia contemporánea",Miedo:"El reconocimiento de la vulnerabilidad y el valor de resistir",Empatía:"El ejercicio de ponerse en los zapatos y el dolor de otro ser",Política:"La integridad moral por encima del partidismo y el poder"},Fb=Object.entries(Xb).map(([p,z])=>({name:p,description:z,count:il.filter(A=>A.category.toLowerCase()===p.toLowerCase()||A.tags.some(v=>v.toLowerCase()===p.toLowerCase())).length})),Vb=te.lazy(()=>Pt(()=>import("./HomeView-ByDBuZEu.js"),__vite__mapDeps([0,1,2,3,4,5])).then(p=>({default:p.HomeView}))),Zb=te.lazy(()=>Pt(()=>import("./ArchiveView-BRKcVfZ7.js"),__vite__mapDeps([6,1,2,3,5])).then(p=>({default:p.ArchiveView}))),Jb=te.lazy(()=>Pt(()=>import("./LetterDetailView-CvaC7tuU.js"),__vite__mapDeps([7,1,3,8,4,5])).then(p=>({default:p.LetterDetailView}))),Kb=te.lazy(()=>Pt(()=>import("./AboutView-DmmWb3t-.js"),__vite__mapDeps([9,1,8,5])).then(p=>({default:p.AboutView})));function wb(){const p="cartas_que_quedan_theme",z=()=>typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",[A,v]=te.useState(()=>{if(typeof window<"u"){const T=localStorage.getItem(p);if(T==="dark"||T==="light")return T}return z()});te.useEffect(()=>{const T=document.documentElement;A==="dark"?T.classList.add("dark"):T.classList.remove("dark")},[A]),te.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const T=window.matchMedia("(prefers-color-scheme: dark)"),me=re=>{const ya=localStorage.getItem(p);ya==="dark"||ya==="light"||v(re.matches?"dark":"light")};return T.addEventListener("change",me),()=>T.removeEventListener("change",me)},[]);const E=()=>{v(T=>{const me=T==="light"?"dark":"light";return localStorage.setItem(p,me),me})},[S,C]=te.useState(()=>{if(typeof window<"u"){const T=localStorage.getItem("cartas_que_quedan_fontsize");if(T&&["sm","base","lg","xl"].includes(T))return T}return"base"}),H=T=>{C(T),localStorage.setItem("cartas_que_quedan_fontsize",T)},[Y,$]=te.useState(!1),qe="/cartas/",L=T=>{const me=qe.replace(/\/$/,"");let re=T;return me&&re.startsWith(me)&&(re=re.slice(me.length)),re.startsWith("/")||(re=`/${re}`),re},x=T=>`${qe.replace(/\/$/,"")}${T}`||"/",ba=()=>{if(typeof window>"u")return{type:"home"};const T=L(window.location.pathname);if(T.startsWith("/carta/")){const me=T.replace("/carta/","").replace(/\/$/,"");if(me)return{type:"letter",slug:me}}else if(T==="/archivo"||T.startsWith("/archivo")){const me=new URLSearchParams(window.location.search),re=me.get("categoria")||void 0,ya=me.get("q")||void 0;return{type:"archive",category:re,search:ya}}else if(T==="/sobre"||T.startsWith("/sobre"))return{type:"about"};return{type:"home"}},[ie,ga]=te.useState(ba),w=(T,me=!1)=>{let re="/";T.type==="archive"?re=T.category?`/archivo?categoria=${encodeURIComponent(T.category)}`:"/archivo":T.type==="letter"?re=`/carta/${T.slug}`:T.type==="about"&&(re="/sobre"),re=x(re),me?window.history.replaceState({view:T},"",re):window.history.pushState({view:T},"",re),ga(T),window.scrollTo({top:0,behavior:"smooth"})};te.useEffect(()=>{const T=()=>{ga(ba())};return window.addEventListener("popstate",T),()=>window.removeEventListener("popstate",T)},[]),te.useEffect(()=>{ie.type!=="letter"&&Y&&$(!1)},[ie,Y]),te.useEffect(()=>{if(ie.type==="letter"){const T=il.find(me=>me.slug===ie.slug);if(T){document.title=`${T.title} — Cartas que quedan`;return}}else if(ie.type==="archive"){document.title="Archivo de documentos — Cartas que quedan";return}else if(ie.type==="about"){document.title="Sobre el proyecto — Cartas que quedan";return}document.title="Cartas que quedan — Un archivo digital"},[ie]);const ia=ie.type==="letter"?il.find(T=>T.slug===ie.slug)||il[0]:null;return M.jsxs("div",{className:"min-h-screen flex flex-col bg-[#ece9e4] dark:bg-[#1c1b1b] text-[#211e1c] dark:text-[#ede7e0] transition-colors duration-200 selection:bg-[#b84e2a]/20 selection:text-[#211e1c] dark:selection:bg-[#cf6e4b]/30 dark:selection:text-[#ede7e0]",children:[!Y&&M.jsx(Ob,{currentView:ie,onNavigate:T=>w(T),theme:A,onToggleTheme:E}),M.jsx("main",{className:"flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 md:px-8",children:M.jsxs(te.Suspense,{fallback:M.jsx("div",{className:"flex items-center justify-center py-32 text-[#8c8479] dark:text-[#7d756a]",role:"status","aria-live":"polite",children:M.jsx("span",{className:"font-serif text-sm tracking-wide animate-pulse",children:"Cargando…"})}),children:[ie.type==="home"&&M.jsx(Vb,{letters:il,onSelectLetter:T=>w({type:"letter",slug:T.slug}),onNavigateArchive:T=>w({type:"archive",category:T}),onNavigateAbout:()=>w({type:"about"})}),ie.type==="archive"&&M.jsx(Zb,{letters:il,initialCategory:ie.category,initialSearch:ie.search,onSelectLetter:T=>w({type:"letter",slug:T.slug})}),ie.type==="letter"&&ia&&M.jsx(Jb,{letter:ia,allLetters:il,onBackToArchive:()=>w({type:"archive"}),onSelectCategory:T=>w({type:"archive",category:T}),onSelectLetter:T=>w({type:"letter",slug:T.slug}),theme:A,onToggleTheme:E,fontSize:S,onChangeFontSize:H,isFocusMode:Y,onToggleFocusMode:()=>$(T=>!T)}),ie.type==="about"&&M.jsx(Kb,{onBackToHome:()=>w({type:"home"}),onGoToArchive:()=>w({type:"archive"})})]})}),!Y&&M.jsx(Db,{onNavigate:T=>w(T)})]})}ib({immediate:!0});lb.createRoot(document.getElementById("root")).render(M.jsx(te.StrictMode,{children:M.jsx(wb,{})}));export{Fb as C,hb as M,Im as O,gb as S,Sb as X,eu as c};
