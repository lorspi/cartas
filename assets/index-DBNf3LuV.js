const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-DG-WTxpx.js","assets/markdown-vbR1zjGP.js","assets/LetterList-D4H4-3Rc.js","assets/readingProgress-61gHvNLH.js","assets/arrow-right-t16A5b-5.js","assets/react-C46pKI1t.js","assets/ArchiveView-v59GDOXd.js","assets/LetterDetailView-D8r9_G5J.js","assets/arrow-left--iQbD_Fu.js","assets/AboutView-BOGUG3nd.js"])))=>i.map(i=>d[i]);
import{r as $b,a as te,j as _}from"./markdown-vbR1zjGP.js";import{r as Pb}from"./react-C46pKI1t.js";(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))v(E);new MutationObserver(E=>{for(const z of E)if(z.type==="childList")for(const C of z.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&v(C)}).observe(document,{childList:!0,subtree:!0});function A(E){const z={};return E.integrity&&(z.integrity=E.integrity),E.referrerPolicy&&(z.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?z.credentials="include":E.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function v(E){if(E.ep)return;E.ep=!0;const z=A(E);fetch(E.href,z)}})();var bs={exports:{}},Pt={},gs={exports:{}},hs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function Ib(){return Jm||(Jm=1,(function(y){function S(N,L){var R=N.length;N.push(L);e:for(;0<R;){var ve=R-1>>>1,ie=N[ve];if(0<E(ie,L))N[ve]=L,N[R]=ie,R=ve;else break e}}function A(N){return N.length===0?null:N[0]}function v(N){if(N.length===0)return null;var L=N[0],R=N.pop();if(R!==L){N[0]=R;e:for(var ve=0,ie=N.length,tn=ie>>>1;ve<tn;){var rl=2*(ve+1)-1,at=N[rl],ya=rl+1,sl=N[ya];if(0>E(at,R))ya<ie&&0>E(sl,at)?(N[ve]=sl,N[ya]=R,ve=ya):(N[ve]=at,N[rl]=R,ve=rl);else if(ya<ie&&0>E(sl,R))N[ve]=sl,N[ya]=R,ve=ya;else break e}}return L}function E(N,L){var R=N.sortIndex-L.sortIndex;return R!==0?R:N.id-L.id}if(y.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var z=performance;y.unstable_now=function(){return z.now()}}else{var C=Date,H=C.now();y.unstable_now=function(){return C.now()-H}}var Y=[],$=[],qe=1,G=null,M=3,ba=!1,oe=!1,ga=!1,w=!1,oa=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;function se(N){for(var L=A($);L!==null;){if(L.callback===null)v($);else if(L.startTime<=N)v($),L.sortIndex=L.expirationTime,S(Y,L);else break;L=A($)}}function ha(N){if(ga=!1,se(N),!oe)if(A(Y)!==null)oe=!0,Aa||(Aa=!0,Ga());else{var L=A($);L!==null&&Xe(ha,L.startTime-N)}}var Aa=!1,F=-1,au=5,Yn=-1;function ln(){return w?!0:!(y.unstable_now()-Yn<au)}function Da(){if(w=!1,Aa){var N=y.unstable_now();Yn=N;var L=!0;try{e:{oe=!1,ga&&(ga=!1,T(F),F=-1),ba=!0;var R=M;try{a:{for(se(N),G=A(Y);G!==null&&!(G.expirationTime>N&&ln());){var ve=G.callback;if(typeof ve=="function"){G.callback=null,M=G.priorityLevel;var ie=ve(G.expirationTime<=N);if(N=y.unstable_now(),typeof ie=="function"){G.callback=ie,se(N),L=!0;break a}G===A(Y)&&v(Y),se(N)}else v(Y);G=A(Y)}if(G!==null)L=!0;else{var tn=A($);tn!==null&&Xe(ha,tn.startTime-N),L=!1}}break e}finally{G=null,M=R,ba=!1}L=void 0}}finally{L?Ga():Aa=!1}}}var Ga;if(typeof me=="function")Ga=function(){me(Da)};else if(typeof MessageChannel<"u"){var il=new MessageChannel,nu=il.port2;il.port1.onmessage=Da,Ga=function(){nu.postMessage(null)}}else Ga=function(){oa(Da,0)};function Xe(N,L){F=oa(function(){N(y.unstable_now())},L)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(N){N.callback=null},y.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):au=0<N?Math.floor(1e3/N):5},y.unstable_getCurrentPriorityLevel=function(){return M},y.unstable_next=function(N){switch(M){case 1:case 2:case 3:var L=3;break;default:L=M}var R=M;M=L;try{return N()}finally{M=R}},y.unstable_requestPaint=function(){w=!0},y.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=M;M=N;try{return L()}finally{M=R}},y.unstable_scheduleCallback=function(N,L,R){var ve=y.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ve+R:ve):R=ve,N){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=R+ie,N={id:qe++,callback:L,priorityLevel:N,startTime:R,expirationTime:ie,sortIndex:-1},R>ve?(N.sortIndex=R,S($,N),A(Y)===null&&N===A($)&&(ga?(T(F),F=-1):ga=!0,Xe(ha,R-ve))):(N.sortIndex=ie,S(Y,N),oe||ba||(oe=!0,Aa||(Aa=!0,Ga()))),N},y.unstable_shouldYield=ln,y.unstable_wrapCallback=function(N){var L=M;return function(){var R=M;M=L;try{return N.apply(this,arguments)}finally{M=R}}}})(hs)),hs}var Km;function eg(){return Km||(Km=1,gs.exports=Ib()),gs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function ag(){if(wm)return Pt;wm=1;var y=eg(),S=$b(),A=Pb();function v(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function z(e){for(var a=e,n=a;n&&!n.alternate;)a=n,(a.flags&4098)!==0&&(e=a.return),n=a.return;for(;a.return;)a=a.return;return a.tag===3?e:null}function C(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function H(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function Y(e){if(z(e)!==e)throw Error(v(188))}function $(e){var a=e.alternate;if(!a){if(a=z(e),a===null)throw Error(v(188));return a!==e?null:e}for(var n=e,l=a;;){var t=n.return;if(t===null)break;var u=t.alternate;if(u===null){if(l=t.return,l!==null){n=l;continue}break}if(t.child===u.child){for(u=t.child;u;){if(u===n)return Y(t),e;if(u===l)return Y(t),a;u=u.sibling}throw Error(v(188))}if(n.return!==l.return)n=t,l=u;else{for(var o=!1,i=t.child;i;){if(i===n){o=!0,n=t,l=u;break}if(i===l){o=!0,l=t,n=u;break}i=i.sibling}if(!o){for(i=u.child;i;){if(i===n){o=!0,n=u,l=t;break}if(i===l){o=!0,l=u,n=t;break}i=i.sibling}if(!o)throw Error(v(189))}}if(n.alternate!==l)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:a}function qe(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=qe(e),a!==null)return a;e=e.sibling}return null}function G(e,a,n,l,t,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,l,t,u)||(e.tag!==22||e.memoizedState===null)&&(a||e.tag!==5&&e.tag!==27)&&G(e.child,a,n,l,t,u))return!0;e=e.sibling}return!1}function M(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function ba(e){var a=!1;for(e=e.return;e!==null&&(e.tag===4&&(a=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return a}function oe(e){var a=[null,null],n=M(e);return n===null||ga(a,e,n.child,{foundSelf:!1}),a}function ga(e,a,n,l){for(;n!==null;){if(n===a)l.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(l.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ga(e,a,n.child,l))return!0;n=n.sibling}return!1}function w(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(v(559))}}var oa=null,T=null;function me(e,a,n){return e===n?!0:e===a?(oa=e,!0):!1}function se(e,a,n){return e===n?(T=e,!1):e===a?(T!==null&&(oa=e),!0):!1}function ha(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Aa(e,a,n){for(var l=0,t=e;t;t=n(t))l++;t=0;for(var u=a;u;u=n(u))t++;for(;0<l-t;)e=n(e),l--;for(;0<t-l;)a=n(a),t--;for(;l--;){if(e===a||a!==null&&e===a.alternate)return e;e=n(e),a=n(a)}return null}var F=Object.assign,au=Symbol.for("react.element"),Yn=Symbol.for("react.transitional.element"),ln=Symbol.for("react.portal"),Da=Symbol.for("react.fragment"),Ga=Symbol.for("react.strict_mode"),il=Symbol.for("react.profiler"),nu=Symbol.for("react.consumer"),Xe=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),tn=Symbol.for("react.activity"),rl=Symbol.for("react.legacy_hidden"),at=Symbol.for("react.memo_cache_sentinel"),ya=Symbol.for("react.view_transition"),sl=Symbol.for("react.recoverable"),ys=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=ys&&e[ys]||e["@@iterator"],typeof e=="function"?e:null)}var ev=Symbol.for("react.client.reference");function Uo(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ev?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Da:return"Fragment";case il:return"Profiler";case Ga:return"StrictMode";case L:return"Suspense";case R:return"SuspenseList";case tn:return"Activity";case ya:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ln:return"Portal";case Xe:return e.displayName||"Context";case nu:return(e._context.displayName||"Context")+".Consumer";case N:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ve:return a=e.displayName||null,a!==null?a:Uo(e.type)||"Memo";case ie:a=e._payload,e=e._init;try{return Uo(e(a))}catch{}}return null}var lt=Array.isArray,U=S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Hn={pending:!1,data:null,method:null,action:null},Yo=[],cl=-1;function Oa(e){return{current:e}}function _e(e){0>cl||(e.current=Yo[cl],Yo[cl]=null,cl--)}function ce(e,a){cl++,Yo[cl]=e.current,e.current=a}var xa=Oa(null),tt=Oa(null),un=Oa(null),lu=Oa(null);function tu(e,a){switch(ce(un,a),ce(tt,e),ce(xa,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?em(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=em(a),e=am(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_e(xa),ce(xa,e)}function dl(){_e(xa),_e(tt),_e(un)}function Ho(e){var a=e.memoizedState;a!==null&&(Pl._currentValue=a.memoizedState,ce(lu,e)),a=xa.current;var n=am(a,e.type);a!==n&&(ce(tt,e),ce(xa,n))}function uu(e){tt.current===e&&(_e(xa),_e(tt)),lu.current===e&&(_e(lu),Pl._currentValue=Hn)}var Ro,qs;function on(e){if(Ro===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);Ro=a&&a[1]||"",qs=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ro+e+qs}var Bo=!1;function Qo(e,a){if(!e||Bo)return"";Bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(q){var c=q}Reflect.construct(e,[],h)}else{try{h.call()}catch(q){c=q}h=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),h=!0,new e}finally{h&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(q){c=q}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(q){if(q&&c&&typeof q.stack=="string")return[q.stack,c.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var t=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");t&&t.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),o=u[0],i=u[1];if(o&&i){var r=o.split(`
`),f=i.split(`
`);for(t=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;t<f.length&&!f[t].includes("DetermineComponentFrameRoot");)t++;if(l===r.length||t===f.length)for(l=r.length-1,t=f.length-1;1<=l&&0<=t&&r[l]!==f[t];)t--;for(;1<=l&&0<=t;l--,t--)if(r[l]!==f[t]){if(l!==1||t!==1)do if(l--,t--,0>t||r[l]!==f[t]){var b=`
`+r[l].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=l&&0<=t);break}}}finally{Bo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?on(n):""}function av(e,a){switch(e.tag){case 26:case 27:case 5:return on(e.type);case 16:return on("Lazy");case 13:return e.child!==a&&a!==null?on("Suspense Fallback"):on("Suspense");case 19:return on("SuspenseList");case 0:case 15:return Qo(e.type,!1);case 11:return Qo(e.type.render,!1);case 1:return Qo(e.type,!0);case 31:return on("Activity");case 30:return on("ViewTransition");default:return""}}function zs(e){try{var a="",n=null;do a+=av(e,n),n=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Lo=Object.prototype.hasOwnProperty,Go=y.unstable_scheduleCallback,Xo=y.unstable_cancelCallback,nv=y.unstable_shouldYield,lv=y.unstable_requestPaint,Fe=y.unstable_now,tv=y.unstable_getCurrentPriorityLevel,Ss=y.unstable_ImmediatePriority,Es=y.unstable_UserBlockingPriority,ou=y.unstable_NormalPriority,uv=y.unstable_LowPriority,Ts=y.unstable_IdlePriority,ov=y.log,iv=y.unstable_setDisableYieldValue,ut=null,We=null;function rn(e){if(typeof ov=="function"&&iv(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(ut,e)}catch{}}var $e=Math.clz32?Math.clz32:cv,rv=Math.log,sv=Math.LN2;function cv(e){return e>>>=0,e===0?32:31-(rv(e)/sv|0)|0}var iu=256,ru=262144,su=4194304;function Rn(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cu(e,a,n){var l=e.pendingLanes;if(l===0)return 0;var t=0,u=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var i=l&134217727;return i!==0?(l=i&~u,l!==0?t=Rn(l):(o&=i,o!==0?t=Rn(o):n||(n=i&~e,n!==0&&(t=Rn(n))))):(i=l&~u,i!==0?t=Rn(i):o!==0?t=Rn(o):n||(n=l&~e,n!==0&&(t=Rn(n)))),t===0?0:a!==0&&a!==t&&(a&u)===0&&(u=t&-t,n=a&-a,u>=n||u===32&&(n&4194048)!==0)?a:t}function ot(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Ns(e,a){(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var l=31-$e(n),t=1<<l;a|=e[l],n&=~t}return a}function dv(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function As(){var e=su;return su<<=1,(su&62914560)===0&&(su=4194304),e}function Vo(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function it(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fv(e,a,n,l,t,u){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var i=e.entanglements,r=e.expirationTimes,f=e.hiddenUpdates;for(n=o&~n;0<n;){var b=31-$e(n),h=1<<b;i[b]=0,r[b]=-1;var c=f[b];if(c!==null)for(f[b]=null,b=0;b<c.length;b++){var p=c[b];p!==null&&(p.lane&=-536870913)}n&=~h}l!==0&&Ds(e,l,0),u!==0&&t===0&&e.tag!==0&&(e.suspendedLanes|=u&~(o&~a))}function Ds(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-$e(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Os(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var l=31-$e(n),t=1<<l;t&a|e[l]&a&&(e[l]|=a),n&=~t}}function xs(e,a){var n=a&-a;return n=(n&42)!==0?1:Zo(n),(n&(e.suspendedLanes|a))!==0?0:n}function Zo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _s(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Bm(e.type))}function Ms(e,a){var n=P.p;try{return P.p=e,a()}finally{P.p=n}}var Xa=Math.random().toString(36).slice(2),Me="__reactFiber$"+Xa,Ve="__reactProps$"+Xa,fl="__reactContainer$"+Xa,js="__reactEvents$"+Xa,mv="__reactListeners$"+Xa,vv="__reactHandles$"+Xa,Cs="__reactResources$"+Xa,rt="__reactMarker$"+Xa,du="__reactLoad$"+Xa;function fu(e){delete e[Me],delete e[Ve],delete e[mv],delete e[vv]}function Bn(e){var a;if(a=e[Me])return a;for(var n=e.parentNode;n;){if(a=n[fl]||n[Me]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=hm(e);e!==null;){if(n=e[Me])return n;e=hm(e)}return a}e=n,n=e.parentNode}return null}function ml(e){if(e=e[Me]||e[fl]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function st(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(v(33))}function vl(e){var a=e[Cs];return a||(a=e[Cs]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ae(e){e[rt]=!0}function Us(e){e[du]=void 0}var Ys=new Set,Hs={};function Qn(e,a){pl(e,a),pl(e+"Capture",a)}function pl(e,a){for(Hs[e]=a,e=0;e<a.length;e++)Ys.add(a[e])}var pv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rs={},Bs={};function bv(e){return Lo.call(Bs,e)?!0:Lo.call(Rs,e)?!1:pv.test(e)?Bs[e]=!0:(Rs[e]=!0,!1)}var W=!1;function Qs(){var e=W;return W=!1,e}function mu(e,a,n){if(bv(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,n)}}function vu(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,n)}}function Va(e,a,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,l)}}function Pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ls(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function gv(e,a,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var t=l.get,u=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return t.call(this)},set:function(o){n=""+o,u.call(this,o)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ko(e){if(!e._valueTracker){var a=Ls(e)?"checked":"value";e._valueTracker=gv(e,a,""+e[a])}}function Gs(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),l="";return e&&(l=Ls(e)?e.checked?"true":"false":e.value),e=l,e!==n?(a.setValue(e),!0):!1}var hv=/[\n"\\]/g;function ia(e){return e.replace(hv,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function wo(e,a,n,l,t,u,o,i){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),a!=null?o==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Pe(a)):e.value!==""+Pe(a)&&(e.value=""+Pe(a)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),a!=null?o==="number"&&e.value==a?ko(e,Pe(e.value)):ko(e,Pe(a)):n!=null?ko(e,Pe(n)):l!=null&&e.removeAttribute("value"),t==null&&u!=null&&(e.defaultChecked=!!u),t!=null&&(e.checked=t&&typeof t!="function"&&typeof t!="symbol"),i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.name=""+Pe(i):e.removeAttribute("name")}function Xs(e,a,n,l,t,u,o,i){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),a!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||a!=null)){Ko(e);return}n=n!=null?""+Pe(n):"",a=a!=null?""+Pe(a):n,i||a===e.value||(e.value=a),e.defaultValue=a}l=l??t,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=i?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Ko(e)}function ko(e,a){e.defaultValue!==""+a&&(e.defaultValue=""+a)}function bl(e,a,n,l){if(e=e.options,a){a={};for(var t=0;t<n.length;t++)a["$"+n[t]]=!0;for(n=0;n<e.length;n++)t=a.hasOwnProperty("$"+e[n].value),e[n].selected!==t&&(e[n].selected=t),t&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Pe(n),a=null,t=0;t<e.length;t++){if(e[t].value===n){e[t].selected=!0,l&&(e[t].defaultSelected=!0);return}a!==null||e[t].disabled||(a=e[t])}a!==null&&(a.selected=!0)}}function Vs(e,a,n){if(a!=null&&(a=""+Pe(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+Pe(n):""}function Zs(e,a,n,l){if(a==null){if(l!=null){if(n!=null)throw Error(v(92));if(lt(l)){if(1<l.length)throw Error(v(93));l=l[0]}n=l}n==null&&(n=""),a=n}n=Pe(a),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Ko(e)}function gl(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var yv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Js(e,a,n){var l=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,n):typeof n!="number"||n===0||yv.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function Ks(e,a,n){if(a!=null&&typeof a!="object")throw Error(v(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="",W=!0);for(var t in a)l=a[t],a.hasOwnProperty(t)&&n[t]!==l&&(Js(e,t,l),W=!0)}else for(var u in a)a.hasOwnProperty(u)&&Js(e,u,a[u])}function Fo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pu(e){return zv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _a(){}var Wo=null;function $o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,yl=null;function ws(e){var a=ml(e);if(a&&(e=a.stateNode)){var n=e[Ve]||null;e:switch(e=a.stateNode,a.type){case"input":if(wo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ia(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var l=n[a];if(l!==e&&l.form===e.form){var t=l[Ve]||null;if(!t)throw Error(v(90));wo(l,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name)}}for(a=0;a<n.length;a++)l=n[a],l.form===e.form&&Gs(l)}break e;case"textarea":Vs(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&bl(e,!!n.multiple,a,!1)}}}var Po=!1;function ks(e,a,n){if(Po)return e(a,n);Po=!0;try{var l=e(a);return l}finally{if(Po=!1,(hl!==null||yl!==null)&&(bo(),hl&&(a=hl,e=yl,yl=hl=null,ws(a),e)))for(a=0;a<e.length;a++)ws(e[a])}}function ct(e,a){var n=e.stateNode;if(n===null)return null;var l=n[Ve]||null;if(l===null)return null;n=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,a,typeof n));return n}var Za=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=!1;if(Za)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){Io=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{Io=!1}var sn=null,ei=null,bu=null;function Fs(){if(bu)return bu;var e,a=ei,n=a.length,l,t="value"in sn?sn.value:sn.textContent,u=t.length;for(e=0;e<n&&a[e]===t[e];e++);var o=n-e;for(l=1;l<=o&&a[n-l]===t[u-l];l++);return bu=t.slice(e,1<l?1-l:void 0)}function gu(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function hu(){return!0}function Ws(){return!1}function Be(e){function a(n,l,t,u,o){this._reactName=n,this._targetInst=t,this.type=l,this.nativeEvent=u,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(u):u[i]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?hu:Ws,this.isPropagationStopped=Ws,this}return F(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hu)},persist:function(){},isPersistent:hu}),a}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yu=Be(cn),ft=F({},cn,{view:0,detail:0}),Sv=Be(ft),ai,ni,mt,qu=F({},ft,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mt&&(mt&&e.type==="mousemove"?(ai=e.screenX-mt.screenX,ni=e.screenY-mt.screenY):ni=ai=0,mt=e),ai)},movementY:function(e){return"movementY"in e?e.movementY:ni}}),$s=Be(qu),Ev=F({},qu,{dataTransfer:0}),Tv=Be(Ev),Nv=F({},ft,{relatedTarget:0}),li=Be(Nv),Av=F({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=Be(Av),Ov=F({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xv=Be(Ov),_v=F({},cn,{data:0}),Ps=Be(_v),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Cv[e])?!!a[e]:!1}function ti(){return Uv}var Yv=F({},ft,{key:function(e){if(e.key){var a=Mv[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=gu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(e){return e.type==="keypress"?gu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hv=Be(Yv),Rv=F({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Is=Be(Rv),Bv=F({},cn,{submitter:0}),Qv=Be(Bv),Lv=F({},ft,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),Gv=Be(Lv),Xv=F({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=Be(Xv),Zv=F({},qu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=Be(Zv),Kv=F({},cn,{newState:0,oldState:0,source:0}),wv=Be(Kv),kv=[9,13,27,32],ui=Za&&"CompositionEvent"in window,vt=null;Za&&"documentMode"in document&&(vt=document.documentMode);var Fv=Za&&"TextEvent"in window&&!vt,ec=Za&&(!ui||vt&&8<vt&&11>=vt),ac=" ",nc=!1;function lc(e,a){switch(e){case"keyup":return kv.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ql=!1;function Wv(e,a){switch(e){case"compositionend":return tc(a);case"keypress":return a.which!==32?null:(nc=!0,ac);case"textInput":return e=a.data,e===ac&&nc?null:e;default:return null}}function $v(e,a){if(ql)return e==="compositionend"||!ui&&lc(e,a)?(e=Fs(),bu=ei=sn=null,ql=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ec&&a.locale!=="ko"?null:a.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Pv[e.type]:a==="textarea"}function oc(e,a,n,l){hl?yl?yl.push(l):yl=[l]:hl=l,a=So(a,"onChange"),0<a.length&&(n=new yu("onChange","change",null,n,l),e.push({event:n,listeners:a}))}var pt=null,bt=null;function Iv(e){kf(e,0)}function zu(e){var a=st(e);if(Gs(a))return e}function ic(e,a){if(e==="change")return a}var rc=!1;if(Za){var oi;if(Za){var ii="oninput"in document;if(!ii){var sc=document.createElement("div");sc.setAttribute("oninput","return;"),ii=typeof sc.oninput=="function"}oi=ii}else oi=!1;rc=oi&&(!document.documentMode||9<document.documentMode)}function cc(){pt&&(pt.detachEvent("onpropertychange",dc),bt=pt=null)}function dc(e){if(e.propertyName==="value"&&zu(bt)){var a=[];oc(a,bt,e,$o(e)),ks(Iv,a)}}function ep(e,a,n){e==="focusin"?(cc(),pt=a,bt=n,pt.attachEvent("onpropertychange",dc)):e==="focusout"&&cc()}function ap(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zu(bt)}function np(e,a){if(e==="click")return zu(a)}function lp(e,a){if(e==="input"||e==="change")return zu(a)}function tp(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Ie=typeof Object.is=="function"?Object.is:tp;function gt(e,a){if(Ie(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),l=Object.keys(a);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var t=n[l];if(!Lo.call(a,t)||!Ie(e[t],a[t]))return!1}return!0}function ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,a){var n=fc(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=a&&l>=a)return{node:n,offset:a-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fc(n)}}function vc(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?vc(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function pc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=ri(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=ri(e.document)}return a}function si(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var up=Za&&"documentMode"in document&&11>=document.documentMode,zl=null,ci=null,ht=null,di=!1;function bc(e,a,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;di||zl==null||zl!==ri(l)||(l=zl,"selectionStart"in l&&si(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ht&&gt(ht,l)||(ht=l,l=So(ci,"onSelect"),0<l.length&&(a=new yu("onSelect","select",null,a,n),e.push({event:a,listeners:l}),a.target=zl)))}function Ln(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var Sl={animationend:Ln("Animation","AnimationEnd"),animationiteration:Ln("Animation","AnimationIteration"),animationstart:Ln("Animation","AnimationStart"),transitionrun:Ln("Transition","TransitionRun"),transitionstart:Ln("Transition","TransitionStart"),transitioncancel:Ln("Transition","TransitionCancel"),transitionend:Ln("Transition","TransitionEnd")},fi={},gc={};Za&&(gc=document.createElement("div").style,"AnimationEvent"in window||(delete Sl.animationend.animation,delete Sl.animationiteration.animation,delete Sl.animationstart.animation),"TransitionEvent"in window||delete Sl.transitionend.transition);function Gn(e){if(fi[e])return fi[e];if(!Sl[e])return e;var a=Sl[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in gc)return fi[e]=a[n];return e}var hc=Gn("animationend"),yc=Gn("animationiteration"),qc=Gn("animationstart"),op=Gn("transitionrun"),ip=Gn("transitionstart"),rp=Gn("transitioncancel"),zc=Gn("transitionend"),Sc=new Map,mi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mi.push("scrollEnd");function qa(e,a){Sc.set(e,a),Qn(a,[e])}var sp=0;function Ja(e,a){if(e.name!=null&&e.name!=="auto")return e.name;if(a.autoName!==null)return a.autoName;e=Ta.identifierPrefix;var n=sp++;return e="_"+e+"t_"+n.toString(32)+"_",a.autoName=e}function Ec(e){if(e==null||typeof e=="string")return e;var a=null,n=Xl;if(n!==null)for(var l=0;l<n.length;l++){var t=e[n[l]];if(t!=null){if(t==="none")return"none";a=a==null?t:a+(" "+t)}}return a??e.default}function Ka(e,a){return e=Ec(e),a=Ec(a),a==null?e==="auto"?null:e:a==="auto"?null:a}var Su=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ra=[],El=0,vi=0;function Eu(){for(var e=El,a=vi=El=0;a<e;){var n=ra[a];ra[a++]=null;var l=ra[a];ra[a++]=null;var t=ra[a];ra[a++]=null;var u=ra[a];if(ra[a++]=null,l!==null&&t!==null){var o=l.pending;o===null?t.next=t:(t.next=o.next,o.next=t),l.pending=t}u!==0&&Tc(n,t,u)}}function Tu(e,a,n,l){ra[El++]=e,ra[El++]=a,ra[El++]=n,ra[El++]=l,vi|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function pi(e,a,n,l){return Tu(e,a,n,l),Nu(e)}function Xn(e,a){return Tu(e,null,null,a),Nu(e)}function Tc(e,a,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var t=!1,u=e.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(t=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,t&&a!==null&&(t=31-$e(n),e=u.hiddenUpdates,l=e[t],l===null?e[t]=[a]:l.push(a),a.lane=n|536870912),u):null}function Nu(e){if(50<Lt)throw Lt=0,po=null,Error(v(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Tl={};function cp(e,a,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,a,n,l){return new cp(e,a,n,l)}function bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wa(e,a){var n=e.alternate;return n===null?(n=Ze(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Nc(e,a){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Au(e,a,n,l,t,u){var o=0;if(l=e,typeof l=="function")bi(l)&&(o=1);else if(typeof l=="string")o=Bb(e,n,xa.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(l){case tn:return e=Ze(31,n,a,t),e.elementType=tn,e.lanes=u,e;case Da:return Vn(n.children,t,u,a);case Ga:o=8,t|=24;break;case il:return e=Ze(12,n,a,t|2),e.elementType=il,e.lanes=u,e;case L:return e=Ze(13,n,a,t),e.elementType=L,e.lanes=u,e;case R:return e=Ze(19,n,a,t),e.elementType=R,e.lanes=u,e;case rl:case ya:return e=t|32,e=Ze(30,n,a,e),e.elementType=ya,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Xe:o=10;break e;case nu:o=9;break e;case N:o=11;break e;case ve:o=14;break e;case ie:o=16,l=null;break e}o=29,n=Error(v(130,e===null?"null":typeof e,"")),l=null}return a=Ze(o,n,a,t),a.elementType=e,a.type=l,a.lanes=u,a}function Vn(e,a,n,l){return e=Ze(7,e,l,a),e.lanes=n,e}function gi(e,a,n){return e=Ze(6,e,null,a),e.lanes=n,e}function Ac(e){var a=Ze(18,null,null,0);return a.stateNode=e,a}function hi(e,a,n){return a=Ze(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Dc=new WeakMap;function sa(e,a){if(typeof e=="object"&&e!==null){var n=Dc.get(e);return n!==void 0?n:(a={value:e,source:a,stack:zs(a)},Dc.set(e,a),a)}return{value:e,source:a,stack:zs(a)}}var Nl=[],Al=0,Du=null,yt=0,ca=[],da=0,dn=null,Ma=1,ja="";function ka(e,a){Nl[Al++]=yt,Nl[Al++]=Du,Du=e,yt=a}function Oc(e,a,n){ca[da++]=Ma,ca[da++]=ja,ca[da++]=dn,dn=e;var l=Ma;e=ja;var t=32-$e(l)-1;l&=~(1<<t),n+=1;var u=32-$e(a)+t;if(30<u){var o=t-t%5;u=(l&(1<<o)-1).toString(32),l>>=o,t-=o,Ma=1<<32-$e(a)+t|n<<t|l,ja=u+e}else Ma=1<<u|n<<t|l,ja=e}function Ou(e){e.return!==null&&(ka(e,1),Oc(e,1,0))}function yi(e){for(;e===Du;)Du=Nl[--Al],Nl[Al]=null,yt=Nl[--Al],Nl[Al]=null;for(;e===dn;)dn=ca[--da],ca[da]=null,ja=ca[--da],ca[da]=null,Ma=ca[--da],ca[da]=null}function xc(e,a){ca[da++]=Ma,ca[da++]=ja,ca[da++]=dn,Ma=a.id,ja=a.overflow,dn=e}var De=null,de=null,X=!1,fn=null,fa=!1,qi=Error(v(519));function mn(e){var a=Error(v(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qt(sa(a,e)),qi}function _c(e){var a=e.stateNode,n=e.type,l=e.memoizedProps;switch(a[Me]=e,a[Ve]=l,n){case"dialog":Z("cancel",a),Z("close",a);break;case"iframe":case"object":case"embed":Z("load",a);break;case"video":case"audio":for(n=0;n<Xt.length;n++)Z(Xt[n],a);break;case"source":Z("error",a);break;case"img":case"image":case"link":Z("error",a),Z("load",a);break;case"details":Z("toggle",a);break;case"input":Z("invalid",a),Xs(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Z("invalid",a);break;case"textarea":Z("invalid",a),Zs(a,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||l.suppressHydrationWarning===!0||Pf(a.textContent,n)?(l.popover!=null&&(Z("beforetoggle",a),Z("toggle",a)),l.onScroll!=null&&Z("scroll",a),l.onScrollEnd!=null&&Z("scrollend",a),l.onClick!=null&&(a.onclick=_a),a=!0):a=!1,a||mn(e,!0)}function xu(e){for(De=e.return;De;)switch(De.tag){case 5:case 31:case 13:fa=!1;return;case 27:case 3:fa=!0;return;default:De=De.return}}function Dl(e){if(e!==De)return!1;if(!X)return xu(e),X=!0,!1;var a=e.tag,n;if((n=a!==3&&a!==27)&&((n=a===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Wr(e.type,e.memoizedProps)),n=!n),n&&de&&mn(e),xu(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));de=gm(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));de=gm(e)}else a===27?(a=de,xn(e.type)?(e=us,us=null,de=e):de=a):de=De?va(e.stateNode.nextSibling):null;return!0}function Zn(){de=De=null,X=!1}function zi(){var e=fn;return e!==null&&(we===null?we=e:we.push.apply(we,e),fn=null),e}function qt(e){fn===null?fn=[e]:fn.push(e)}var Si=Oa(null),Jn=null,Fa=null;function vn(e,a,n){ce(Si,a._currentValue),a._currentValue=n}function Wa(e){e._currentValue=Si.current,_e(Si)}function _u(e,a,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===n)break;e=e.return}}function Ei(e,a,n,l){var t=e.child;for(t!==null&&(t.return=e);t!==null;){var u=t.dependencies;if(u!==null){var o=t.child;u=u.firstContext;e:for(;u!==null;){var i=u;u=t;for(var r=0;r<a.length;r++)if(i.context===a[r]){u.lanes|=n,i=u.alternate,i!==null&&(i.lanes|=n),_u(u.return,n,e),l||(o=null);break e}u=i.next}}else if(t.tag===18){if(o=t.return,o===null)throw Error(v(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),_u(o,n,e),o=null}else t.tag===13&&t.memoizedState!==null&&t.memoizedState.dehydrated===null?(t.lanes|=n,o=t.alternate,o!==null&&(o.lanes|=n),_u(t.return,n,e),o=t.child,o=o!==null?o.sibling:null):o=t.child;if(o!==null)o.return=t;else for(o=t;o!==null;){if(o===e){o=null;break}if(t=o.sibling,t!==null){t.return=o.return,o=t;break}o=o.return}t=o}}function Kn(e,a,n,l){e=null;for(var t=a,u=!1;t!==null;){if(!u){if((t.flags&524288)!==0)u=!0;else if((t.flags&262144)!==0)break}if(t.tag===10){var o=t.alternate;if(o===null)throw Error(v(387));if(o=o.memoizedProps,o!==null){var i=t.type;Ie(t.pendingProps.value,o.value)||(e!==null?e.push(i):e=[i])}}else if(t===lu.current){if(o=t.alternate,o===null)throw Error(v(387));o.memoizedState.memoizedState!==t.memoizedState.memoizedState&&(e!==null?e.push(Pl):e=[Pl])}t=t.return}return e!==null&&Ei(a,e,n,l),a.flags|=262144,e!==null}function Mu(e){for(e=e.firstContext;e!==null;){if(!Ie(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wn(e){Jn=e,Fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function je(e){return Mc(Jn,e)}function ju(e,a){return Jn===null&&wn(e),Mc(e,a)}function Mc(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},Fa===null){if(e===null)throw Error(v(308));Fa=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Fa=Fa.next=a;return n}var dp=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},fp=y.unstable_scheduleCallback,mp=y.unstable_NormalPriority,ze={$$typeof:Xe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ti(){return{controller:new dp,data:new Map,refCount:0}}function zt(e){e.refCount--,e.refCount===0&&fp(mp,function(){e.controller.abort()})}function jc(e,a){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<a.length;e++){var l=a[e];n.indexOf(l)===-1&&n.push(l)}}}var St=null;function vp(e){var a=e.transitionTypes;return e.transitionTypes=null,a}var Et=null,Ni=0,kn=0,Ol=null;function pp(e,a){if(Et===null){var n=Et=[];Ni=0,kn=Gr(),Ol={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Ni++,a.then(Cc,Cc),a}function Cc(){if(--Ni===0&&(St=null,Et!==null)){Ol!==null&&(Ol.status="fulfilled");var e=Et;Et=null,kn=0,Ol=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function bp(e,a){var n=[],l={status:"pending",value:null,reason:null,then:function(t){n.push(t)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var t=0;t<n.length;t++)(0,n[t])(a)},function(t){for(l.status="rejected",l.reason=t,t=0;t<n.length;t++)(0,n[t])(void 0)}),l}var Uc=U.S;U.S=function(e,a){if(Df=Fe(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&pp(e,a),St!==null)for(var n=Kl;n!==null;)jc(n,St),n=n.next;if(n=e.types,n!==null){for(var l=Kl;l!==null;)jc(l,n),l=l.next;if(kn!==0){l=St,l===null&&(l=St=[]);for(var t=0;t<n.length;t++){var u=n[t];l.indexOf(u)===-1&&l.push(u)}}}Uc!==null&&Uc(e,a)};var Fn=Oa(null);function Ai(){var e=Fn.current;return e!==null?e:re.pooledCache}function Cu(e,a){a===null?ce(Fn,Fn.current):ce(Fn,a.pool)}function Yc(){var e=Ai();return e===null?null:{parent:ze._currentValue,pool:e}}var xl=Error(v(460)),Di=Error(v(474)),Uu=Error(v(542)),Yu={then:function(){}};function Hc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rc(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(_a,_a),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Qc(e),e===void 0&&!("reason"in a)?Error(v(600)):e;default:if(typeof a.status=="string")a.then(_a,_a);else{if(e=re,e!==null&&100<e.shellSuspendCounter)throw Error(v(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var t=a;t.status="fulfilled",t.value=l}},function(l){if(a.status==="pending"){var t=a;t.status="rejected",t.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Qc(e),e}throw $n=a,xl}}function Wn(e){try{var a=e._init;return a(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?($n=n,xl):n}}var $n=null;function Bc(){if($n===null)throw Error(v(459));var e=$n;return $n=null,e}function Qc(e){if(e===xl||e===Uu)throw Error(v(483))}var _l=null,Tt=0;function Hu(e){var a=Tt;return Tt+=1,_l===null&&(_l=[]),Rc(_l,e,a)}function pn(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Ru(e,a){throw a.$$typeof===au?Error(v(525)):(e=Object.prototype.toString.call(a),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Lc(e){function a(d,s){if(e){var m=d.deletions;m===null?(d.deletions=[s],d.flags|=16):m.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)a(d,s),s=s.sibling;return null}function l(d){for(var s=new Map;d!==null;)d.key===null?s.set(d.index,d):s.set(d.key,d),d=d.sibling;return s}function t(d,s){return d=wa(d,s),d.index=0,d.sibling=null,d}function u(d,s,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<s?(d.flags|=2,s):m):(d.flags|=134217730,s)):(d.flags|=1048576,s)}function o(d){return e&&d.alternate===null&&(d.flags|=134217730),d}function i(d,s,m,g){return s===null||s.tag!==6?(s=gi(m,d.mode,g),s.return=d,s):(s=t(s,m),s.return=d,s)}function r(d,s,m,g){var D=m.type;return D===Da?(d=b(d,s,m.props.children,g,m.key),pn(d,m),d):s!==null&&(s.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===ie&&Wn(D)===s.type)?(s=t(s,m.props),pn(s,m),s.return=d,s):(s=Au(m.type,m.key,m.props,null,d.mode,g),pn(s,m),s.return=d,s)}function f(d,s,m,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==m.containerInfo||s.stateNode.implementation!==m.implementation?(s=hi(m,d.mode,g),s.return=d,s):(s=t(s,m.children||[]),s.return=d,s)}function b(d,s,m,g,D){return s===null||s.tag!==7?(s=Vn(m,d.mode,g,D),s.return=d,s):(s=t(s,m),s.return=d,s)}function h(d,s,m){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=gi(""+s,d.mode,m),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Yn:return m=Au(s.type,s.key,s.props,null,d.mode,m),pn(m,s),m.return=d,m;case ln:return s=hi(s,d.mode,m),s.return=d,s;case ie:return s=Wn(s),h(d,s,m)}if(lt(s)||nt(s))return s=Vn(s,d.mode,m,null),s.return=d,s;if(typeof s.then=="function")return h(d,Hu(s),m);if(s.$$typeof===Xe)return h(d,ju(d,s),m);Ru(d,s)}return null}function c(d,s,m,g){var D=s!==null?s.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return D!==null?null:i(d,s,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yn:return m.key===D?r(d,s,m,g):null;case ln:return m.key===D?f(d,s,m,g):null;case ie:return m=Wn(m),c(d,s,m,g)}if(lt(m)||nt(m))return D!==null?null:b(d,s,m,g,null);if(typeof m.then=="function")return c(d,s,Hu(m),g);if(m.$$typeof===Xe)return c(d,s,ju(d,m),g);Ru(d,m)}return null}function p(d,s,m,g,D){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return d=d.get(m)||null,i(s,d,""+g,D);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yn:return d=d.get(g.key===null?m:g.key)||null,r(s,d,g,D);case ln:return d=d.get(g.key===null?m:g.key)||null,f(s,d,g,D);case ie:return g=Wn(g),p(d,s,m,g,D)}if(lt(g)||nt(g))return d=d.get(m)||null,b(s,d,g,D,null);if(typeof g.then=="function")return p(d,s,m,Hu(g),D);if(g.$$typeof===Xe)return p(d,s,m,ju(s,g),D);Ru(s,g)}return null}function q(d,s,m,g){for(var D=null,K=null,x=s,j=s=0,Te=null;x!==null&&j<m.length;j++){x.index>j?(Te=x,x=null):Te=x.sibling;var k=c(d,x,m[j],g);if(k===null){x===null&&(x=Te);break}e&&x&&k.alternate===null&&a(d,x),s=u(k,s,j),K===null?D=k:K.sibling=k,K=k,x=Te}if(j===m.length)return n(d,x),X&&ka(d,j),D;if(x===null){for(;j<m.length;j++)x=h(d,m[j],g),x!==null&&(s=u(x,s,j),K===null?D=x:K.sibling=x,K=x);return X&&ka(d,j),D}for(x=l(x);j<m.length;j++)Te=p(x,d,j,m[j],g),Te!==null&&(e&&(k=Te.alternate,k!==null&&x.delete(k.key===null?j:k.key)),s=u(Te,s,j),K===null?D=Te:K.sibling=Te,K=Te);return e&&x.forEach(function(Un){return a(d,Un)}),X&&ka(d,j),D}function O(d,s,m,g){if(m==null)throw Error(v(151));for(var D=null,K=null,x=s,j=s=0,Te=null,k=m.next();x!==null&&!k.done;j++,k=m.next()){x.index>j?(Te=x,x=null):Te=x.sibling;var Un=c(d,x,k.value,g);if(Un===null){x===null&&(x=Te);break}e&&x&&Un.alternate===null&&a(d,x),s=u(Un,s,j),K===null?D=Un:K.sibling=Un,K=Un,x=Te}if(k.done)return n(d,x),X&&ka(d,j),D;if(x===null){for(;!k.done;j++,k=m.next())k=h(d,k.value,g),k!==null&&(s=u(k,s,j),K===null?D=k:K.sibling=k,K=k);return X&&ka(d,j),D}for(x=l(x);!k.done;j++,k=m.next())k=p(x,d,j,k.value,g),k!==null&&(e&&(Te=k.alternate,Te!==null&&x.delete(Te.key===null?j:Te.key)),s=u(k,s,j),K===null?D=k:K.sibling=k,K=k);return e&&x.forEach(function(Wb){return a(d,Wb)}),X&&ka(d,j),D}function Q(d,s,m,g){if(typeof m=="object"&&m!==null&&m.type===Da&&m.key===null&&m.props.ref===void 0&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Yn:e:{for(var D=m.key;s!==null;){if(s.key===D){if(D=m.type,D===Da){if(s.tag===7){n(d,s.sibling),g=t(s,m.props.children),pn(g,m),g.return=d,d=g;break e}}else if(s.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===ie&&Wn(D)===s.type){n(d,s.sibling),g=t(s,m.props),pn(g,m),g.return=d,d=g;break e}n(d,s);break}else a(d,s);s=s.sibling}m.type===Da?(g=Vn(m.props.children,d.mode,g,m.key),pn(g,m),g.return=d,d=g):(g=Au(m.type,m.key,m.props,null,d.mode,g),pn(g,m),g.return=d,d=g)}return o(d);case ln:e:{for(D=m.key;s!==null;){if(s.key===D)if(s.tag===4&&s.stateNode.containerInfo===m.containerInfo&&s.stateNode.implementation===m.implementation){n(d,s.sibling),g=t(s,m.children||[]),g.return=d,d=g;break e}else{n(d,s);break}else a(d,s);s=s.sibling}g=hi(m,d.mode,g),g.return=d,d=g}return o(d);case ie:return m=Wn(m),Q(d,s,m,g)}if(lt(m))return q(d,s,m,g);if(nt(m)){if(D=nt(m),typeof D!="function")throw Error(v(150));return m=D.call(m),O(d,s,m,g)}if(typeof m.then=="function")return Q(d,s,Hu(m),g);if(m.$$typeof===Xe)return Q(d,s,ju(d,m),g);Ru(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,s!==null&&s.tag===6?(n(d,s.sibling),g=t(s,m),g.return=d,d=g):(n(d,s),g=gi(m,d.mode,g),g.return=d,d=g),o(d)):n(d,s)}return function(d,s,m,g){try{Tt=0;var D=Q(d,s,m,g);return _l=null,D}catch(x){if(x===xl||x===Uu)throw x;var K=Ze(29,x,null,d.mode);return K.lanes=g,K.return=d,K}finally{}}}var Pn=Lc(!0),Gc=Lc(!1),bn=!1;function Oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xi(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hn(e,a,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(I&2)!==0){var t=l.pending;return t===null?a.next=a:(a.next=t.next,t.next=a),l.pending=a,a=Nu(e),Tc(e,null,n),a}return Tu(e,l,a,n),Nu(e)}function Nt(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,n|=l,a.lanes=n,Os(e,n)}}function _i(e,a){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var t=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?t=u=o:u=u.next=o,n=n.next}while(n!==null);u===null?t=u=a:u=u.next=a}else t=u=a;n={baseState:l.baseState,firstBaseUpdate:t,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var Mi=!1;function At(){if(Mi){var e=Ol;if(e!==null)throw e}}function Dt(e,a,n,l){Mi=!1;var t=e.updateQueue;bn=!1;var u=t.firstBaseUpdate,o=t.lastBaseUpdate,i=t.shared.pending;if(i!==null){t.shared.pending=null;var r=i,f=r.next;r.next=null,o===null?u=f:o.next=f,o=r;var b=e.alternate;b!==null&&(b=b.updateQueue,i=b.lastBaseUpdate,i!==o&&(i===null?b.firstBaseUpdate=f:i.next=f,b.lastBaseUpdate=r))}if(u!==null){var h=t.baseState;o=0,b=f=r=null,i=u;do{var c=i.lane&-536870913,p=c!==i.lane;if(p?(J&c)===c:(l&c)===c){c!==0&&c===kn&&(Mi=!0),b!==null&&(b=b.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var q=e,O=i;c=a;var Q=n;switch(O.tag){case 1:if(q=O.payload,typeof q=="function"){h=q.call(Q,h,c);break e}h=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=O.payload,c=typeof q=="function"?q.call(Q,h,c):q,c==null)break e;h=F({},h,c);break e;case 2:bn=!0}}c=i.callback,c!==null&&(e.flags|=64,p&&(e.flags|=8192),p=t.callbacks,p===null?t.callbacks=[c]:p.push(c))}else p={lane:c,tag:i.tag,payload:i.payload,callback:i.callback,next:null},b===null?(f=b=p,r=h):b=b.next=p,o|=c;if(i=i.next,i===null){if(i=t.shared.pending,i===null)break;p=i,i=p.next,p.next=null,t.lastBaseUpdate=p,t.shared.pending=null}}while(!0);b===null&&(r=h),t.baseState=r,t.firstBaseUpdate=f,t.lastBaseUpdate=b,u===null&&(t.shared.lanes=0),Nn|=o,e.lanes=o,e.memoizedState=h}}function Xc(e,a){if(typeof e!="function")throw Error(v(191,e));e.call(a)}function Vc(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xc(n[e],a)}var yn=Oa(null),Bu=Oa(0);function Zc(e,a){e=an,ce(Bu,e),ce(yn,a),an=e|a.baseLanes}function ji(){ce(Bu,an),ce(yn,yn.current)}function Ci(){an=Bu.current,_e(yn),_e(Bu)}var Ce=Oa(null),Re=null;function qn(e){var a=e.alternate;ce(Ue,Ue.current&1),ce(Ce,e),Re===null&&(a===null||yn.current!==null||a.memoizedState!==null)&&(Re=e)}function Ui(e){ce(Ue,Ue.current),ce(Ce,e),Re===null&&(Re=e)}function Jc(e){e.tag===22?(ce(Ue,Ue.current),ce(Ce,e),Re===null&&(Re=e)):zn()}function zn(){ce(Ue,Ue.current),ce(Ce,Ce.current)}function ea(e){_e(Ce),Re===e&&(Re=null),_e(Ue)}var Ue=Oa(0);function Ot(e,a){ce(Ce,Ce.current),ce(Ue,a)}function Yi(e){_e(Ue),_e(Ce),Re===e&&(Re=null)}function Qu(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ls(n)||ts(n)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!=="independent"){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var $a=0,B=null,ue=null,Se=null,Lu=!1,Ml=!1,In=!1,Gu=0,xt=0,jl=null,gp=0;function ge(){throw Error(v(321))}function Hi(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!Ie(e[n],a[n]))return!1;return!0}function Ri(e,a,n,l,t,u){return $a=u,B=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,U.H=e===null||e.memoizedState===null?Od:xd,In=!1,u=n(l,t),In=!1,Ml&&(u=wc(a,n,l,t)),Kc(e),u}function Kc(e){U.H=ku;var a=ue!==null&&ue.next!==null;if($a=0,Se=ue=B=null,Lu=!1,xt=0,jl=null,a)throw Error(v(300));e===null||Ee||(e=e.dependencies,e!==null&&Mu(e)&&(Ee=!0))}function wc(e,a,n,l){B=e;var t=0;do{if(Ml&&(jl=null),xt=0,Ml=!1,25<=t)throw Error(v(301));if(t+=1,Se=ue=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}U.H=Np,u=a(n,l)}while(Ml);return u}function hp(){var e=U.H,a=e.useState()[0];return a=typeof a.then=="function"?_t(a):a,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(B.flags|=1024),a}function Bi(){var e=Gu!==0;return Gu=0,e}function Qi(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function Li(e){if(Lu){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Lu=!1}$a=0,Se=ue=B=null,Ml=!1,xt=Gu=0,jl=null}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?B.memoizedState=Se=e:Se=Se.next=e,Se}function ye(){if(ue===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var a=Se===null?B.memoizedState:Se.next;if(a!==null)Se=a,ue=e;else{if(e===null)throw B.alternate===null?Error(v(467)):Error(v(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Se===null?B.memoizedState=Se=e:Se=Se.next=e}return Se}function Xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _t(e){var a=xt;return xt+=1,jl===null&&(jl=[]),e=Rc(jl,e,a),a=B,(Se===null?a.memoizedState:Se.next)===null&&(a=a.alternate,U.H=a===null||a.memoizedState===null?Od:xd),e}function Vu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _t(e);if(e.$$typeof===sl)return;if(e.$$typeof===Xe)return je(e)}throw Error(v(438,String(e)))}function Gi(e){var a=null,n=B.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var l=B.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(t){return t.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=Xu(),B.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),l=0;l<e;l++)n[l]=at;return a.index++,n}function Pa(e,a){return typeof a=="function"?a(e):a}function Zu(e){var a=ye();return Xi(a,ue,e)}function Xi(e,a,n){var l=e.queue;if(l===null)throw Error(v(311));l.lastRenderedReducer=n;var t=e.baseQueue,u=l.pending;if(u!==null){if(t!==null){var o=t.next;t.next=u.next,u.next=o}a.baseQueue=t=u,l.pending=null}if(u=e.baseState,t===null)e.memoizedState=u;else{a=t.next;var i=o=null,r=null,f=a,b=!1;do{var h=f.lane&-536870913;if(h!==f.lane?(J&h)===h:($a&h)===h){var c=f.revertLane;if(c===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),h===kn&&(b=!0);else if(($a&c)===c){f=f.next,c===kn&&(b=!0);continue}else h={lane:0,revertLane:f.revertLane,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},r===null?(i=r=h,o=u):r=r.next=h,B.lanes|=c,Nn|=c;h=f.action,In&&n(u,h),u=f.hasEagerState?f.eagerState:n(u,h)}else c={lane:h,revertLane:f.revertLane,gesture:f.gesture,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},r===null?(i=r=c,o=u):r=r.next=c,B.lanes|=h,Nn|=h;f=f.next}while(f!==null&&f!==a);if(r===null?o=u:r.next=i,!Ie(u,e.memoizedState)&&(Ee=!0,b&&(n=Ol,n!==null)))throw n;e.memoizedState=u,e.baseState=o,e.baseQueue=r,l.lastRenderedState=u}return t===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Vi(e){var a=ye(),n=a.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var l=n.dispatch,t=n.pending,u=a.memoizedState;if(t!==null){n.pending=null;var o=t=t.next;do u=e(u,o.action),o=o.next;while(o!==t);Ie(u,a.memoizedState)||(Ee=!0),a.memoizedState=u,a.baseQueue===null&&(a.baseState=u),n.lastRenderedState=u}return[u,l]}function kc(e,a,n){var l=B,t=ye(),u=X;if(u){if(n===void 0)throw Error(v(407));n=n()}else n=a();var o=!Ie((ue||t).memoizedState,n);if(o&&(t.memoizedState=n,Ee=!0),t=t.queue,Ki($c.bind(null,l,t,e),[e]),e=t.getSnapshot!==a||o||Se!==null&&(Se.memoizedState.tag&1)!==0,Cl(e?9:8,{destroy:void 0},Wc.bind(null,l,t,n,a),null),e){if(l.flags|=2048,re===null)throw Error(v(349));u||($a&127)!==0||Fc(l,a,n)}return n}function Fc(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=B.updateQueue,a===null?(a=Xu(),B.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function Wc(e,a,n,l){a.value=n,a.getSnapshot=l,Pc(a)&&Ic(e)}function $c(e,a,n){return n(function(){Pc(a)&&Ic(e)})}function Pc(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!Ie(e,n)}catch{return!0}}function Ic(e){var a=Xn(e,2);a!==null&&ke(a,e,2)}function Zi(e){var a=Qe();if(typeof e=="function"){var n=e;if(e=n(),In){rn(!0);try{n()}finally{rn(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},a}function ed(e,a,n,l){return e.baseState=n,Xi(e,ue,typeof l=="function"?l:Pa)}function yp(e,a,n,l,t){if(wu(e))throw Error(v(485));if(e=a.action,e!==null){var u={payload:t,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){u.listeners.push(o)}};U.T!==null?n(!0):u.isTransition=!1,l(u),n=a.pending,n===null?(u.next=a.pending=u,ad(a,u)):(u.next=n.next,a.pending=n.next=u)}}function ad(e,a){var n=a.action,l=a.payload,t=e.state;if(a.isTransition){var u=U.T,o={};o.types=u!==null?u.types:null,U.T=o;try{var i=n(t,l),r=U.S;r!==null&&r(o,i),nd(e,a,i)}catch(f){Ji(e,a,f)}finally{u!==null&&o.types!==null&&(u.types=o.types),U.T=u}}else try{u=n(t,l),nd(e,a,u)}catch(f){Ji(e,a,f)}}function nd(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){ld(e,a,l)},function(l){return Ji(e,a,l)}):ld(e,a,n)}function ld(e,a,n){a.status="fulfilled",a.value=n,td(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,ad(e,n)))}function Ji(e,a,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=n,td(a),a=a.next;while(a!==l)}e.action=null}function td(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function ud(e,a){return a}function od(e,a){if(X){var n=re.formState;if(n!==null){e:{var l=B;if(X){if(de){a:{for(var t=de,u=fa;t.nodeType!==8;){if(!u){t=null;break a}if(t=va(t.nextSibling),t===null){t=null;break a}}u=t.data,t=u==="F!"||u==="F"?t:null}if(t){de=va(t.nextSibling),l=t.data==="F!";break e}}mn(l)}l=!1}l&&(a=n[0])}}return n=Qe(),n.memoizedState=n.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ud,lastRenderedState:a},n.queue=l,n=Nd.bind(null,B,l),l.dispatch=n,l=Zi(!1),u=$i.bind(null,B,!1,l.queue),l=Qe(),t={state:a,dispatch:null,action:e,pending:null},l.queue=t,n=yp.bind(null,B,t,u,n),t.dispatch=n,l.memoizedState=e,[a,n,!1]}function id(e){var a=ye();return rd(a,ue,e)}function rd(e,a,n){if(a=Xi(e,a,ud)[0],e=Zu(Pa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=_t(a)}catch(o){throw o===xl?Uu:o}else l=a;a=ye();var t=a.queue,u=t.dispatch;return n!==a.memoizedState&&(B.flags|=2048,Cl(9,{destroy:void 0},qp.bind(null,t,n),null)),[l,u,e]}function qp(e,a){e.action=a}function sd(e){var a=ye(),n=ue;if(n!==null)return rd(a,n,e);ye(),a=a.memoizedState,n=ye();var l=n.queue.dispatch;return n.memoizedState=e,[a,l,!1]}function Cl(e,a,n,l){return e={tag:e,create:n,deps:l,inst:a,next:null},a=B.updateQueue,a===null&&(a=Xu(),B.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,a.lastEffect=e),e}function cd(){return ye().memoizedState}function Ju(e,a,n,l){var t=Qe();B.flags|=e,t.memoizedState=Cl(1|a,{destroy:void 0},n,l===void 0?null:l)}function Ku(e,a,n,l){var t=ye();l=l===void 0?null:l;var u=t.memoizedState.inst;ue!==null&&l!==null&&Hi(l,ue.memoizedState.deps)?t.memoizedState=Cl(a,u,n,l):(B.flags|=e,t.memoizedState=Cl(1|a,u,n,l))}function dd(e,a){Ju(8390656,8,e,a)}function Ki(e,a){Ku(2048,8,e,a)}function zp(e){B.flags|=4;var a=B.updateQueue;if(a===null)a=Xu(),B.updateQueue=a,a.events=[e];else{var n=a.events;n===null?a.events=[e]:n.push(e)}}function fd(e){var a=ye().memoizedState;return zp({ref:a,nextImpl:e}),function(){if((I&2)!==0)throw Error(v(440));return a.impl.apply(void 0,arguments)}}function md(e,a){return Ku(4,2,e,a)}function vd(e,a){return Ku(4,4,e,a)}function pd(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function bd(e,a,n){n=n!=null?n.concat([e]):null,Ku(4,4,pd.bind(null,a,e),n)}function wi(){}function gd(e,a){var n=ye();a=a===void 0?null:a;var l=n.memoizedState;return a!==null&&Hi(a,l[1])?l[0]:(n.memoizedState=[e,a],e)}function hd(e,a){var n=ye();a=a===void 0?null:a;var l=n.memoizedState;if(a!==null&&Hi(a,l[1]))return l[0];if(l=e(),In){rn(!0);try{e()}finally{rn(!1)}}return n.memoizedState=[l,a],l}function ki(e,a,n){return n===void 0||($a&1073741824)!==0&&(J&261930)===0?e.memoizedState=a:(e.memoizedState=n,e=xf(),B.lanes|=e,Nn|=e,n)}function yd(e,a,n,l){return Ie(n,a)?n:yn.current!==null?(e=ki(e,n,l),Ie(e,a)||(Ee=!0),e):($a&106)===0||($a&1073741824)!==0&&(J&261930)===0?(Ee=!0,e.memoizedState=n):(e=xf(),B.lanes|=e,Nn|=e,a)}function qd(e,a,n,l,t){var u=P.p;P.p=u!==0&&8>u?u:8;var o=U.T,i={};i.types=o!==null?o.types:null,U.T=i,$i(e,!1,a,n);try{var r=t(),f=U.S;if(f!==null&&f(i,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=bp(r,l);Mt(e,a,b,ta(e))}else Mt(e,a,l,ta(e))}catch(h){Mt(e,a,{then:function(){},status:"rejected",reason:h},ta())}finally{P.p=u,o!==null&&i.types!==null&&(o.types=i.types),U.T=o}}function Sp(){}function Fi(e,a,n,l){if(e.tag!==5)throw Error(v(476));var t=zd(e).queue;qd(e,t,a,Hn,n===null?Sp:function(){return Sd(e),n(l)})}function zd(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Hn,baseState:Hn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:Hn},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Sd(e){var a=zd(e);a.next===null&&(a=e.alternate.memoizedState),Mt(e,a.next.queue,{},ta())}function Wi(){return je(Pl)}function Ed(){return ye().memoizedState}function Td(){return ye().memoizedState}function Ep(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=ta();e=gn(n);var l=hn(a,e,n);l!==null&&(ke(l,a,n),Nt(l,a,n)),a={cache:Ti()},e.payload=a;return}a=a.return}}function Tp(e,a,n){var l=ta();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},wu(e)?Ad(a,n):(n=pi(e,a,n,l),n!==null&&(ke(n,e,l),Dd(n,a,l)))}function Nd(e,a,n){var l=ta();Mt(e,a,n,l)}function Mt(e,a,n,l){var t={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(wu(e))Ad(a,t);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=a.lastRenderedReducer,u!==null))try{var o=a.lastRenderedState,i=u(o,n);if(t.hasEagerState=!0,t.eagerState=i,Ie(i,o))return Tu(e,a,t,0),re===null&&Eu(),!1}catch{}finally{}if(n=pi(e,a,t,l),n!==null)return ke(n,e,l),Dd(n,a,l),!0}return!1}function $i(e,a,n,l){if(l={lane:2,revertLane:Gr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},wu(e)){if(a)throw Error(v(479))}else a=pi(e,n,l,2),a!==null&&ke(a,e,2)}function wu(e){var a=e.alternate;return e===B||a!==null&&a===B}function Ad(e,a){Ml=Lu=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function Dd(e,a,n){if((n&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,n|=l,a.lanes=n,Os(e,n)}}var ku={readContext:je,use:Vu,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useLayoutEffect:ge,useInsertionEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useSyncExternalStore:ge,useId:ge,useHostTransitionStatus:ge,useFormState:ge,useActionState:ge,useOptimistic:ge,useMemoCache:ge,useCacheRefresh:ge,useEffectEvent:ge},Od={readContext:je,use:Vu,useCallback:function(e,a){return Qe().memoizedState=[e,a===void 0?null:a],e},useContext:je,useEffect:dd,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,Ju(4194308,4,pd.bind(null,a,e),n)},useLayoutEffect:function(e,a){return Ju(4194308,4,e,a)},useInsertionEffect:function(e,a){Ju(4,2,e,a)},useMemo:function(e,a){var n=Qe();a=a===void 0?null:a;var l=e();if(In){rn(!0);try{e()}finally{rn(!1)}}return n.memoizedState=[l,a],l},useReducer:function(e,a,n){var l=Qe();if(n!==void 0){var t=n(a);if(In){rn(!0);try{n(a)}finally{rn(!1)}}}else t=a;return l.memoizedState=l.baseState=t,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Tp.bind(null,B,e),[l.memoizedState,e]},useRef:function(e){var a=Qe();return e={current:e},a.memoizedState=e},useState:function(e){e=Zi(e);var a=e.queue,n=Nd.bind(null,B,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:wi,useDeferredValue:function(e,a){var n=Qe();return ki(n,e,a)},useTransition:function(){var e=Zi(!1);return e=qd.bind(null,B,e.queue,!0,!1),Qe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var l=B,t=Qe();if(X){if(n===void 0)throw Error(v(407));n=n()}else{if(n=a(),re===null)throw Error(v(349));(J&127)!==0||Fc(l,a,n)}t.memoizedState=n;var u={value:n,getSnapshot:a};return t.queue=u,dd($c.bind(null,l,u,e),[e]),l.flags|=2048,Cl(9,{destroy:void 0},Wc.bind(null,l,u,n,a),null),n},useId:function(){var e=Qe(),a=re.identifierPrefix;if(X){var n=ja,l=Ma;n=(l&~(1<<32-$e(l)-1)).toString(32)+n,a="_"+a+"R_"+n,n=Gu++,0<n&&(a+="H"+n.toString(32)),a+="_"}else n=gp++,a="_"+a+"r_"+n.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Wi,useFormState:od,useActionState:od,useOptimistic:function(e){var a=Qe();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=$i.bind(null,B,!0,n),n.dispatch=a,[e,a]},useMemoCache:Gi,useCacheRefresh:function(){return Qe().memoizedState=Ep.bind(null,B)},useEffectEvent:function(e){var a=Qe(),n={impl:e};return a.memoizedState=n,function(){if((I&2)!==0)throw Error(v(440));return n.impl.apply(void 0,arguments)}}},xd={readContext:je,use:Vu,useCallback:gd,useContext:je,useEffect:Ki,useImperativeHandle:bd,useInsertionEffect:md,useLayoutEffect:vd,useMemo:hd,useReducer:Zu,useRef:cd,useState:function(){return Zu(Pa)},useDebugValue:wi,useDeferredValue:function(e,a){var n=ye();return yd(n,ue.memoizedState,e,a)},useTransition:function(){var e=Zu(Pa)[0],a=ye().memoizedState;return[typeof e=="boolean"?e:_t(e),a]},useSyncExternalStore:kc,useId:Ed,useHostTransitionStatus:Wi,useFormState:id,useActionState:id,useOptimistic:function(e,a){var n=ye();return ed(n,ue,e,a)},useMemoCache:Gi,useCacheRefresh:Td,useEffectEvent:fd},Np={readContext:je,use:Vu,useCallback:gd,useContext:je,useEffect:Ki,useImperativeHandle:bd,useInsertionEffect:md,useLayoutEffect:vd,useMemo:hd,useReducer:Vi,useRef:cd,useState:function(){return Vi(Pa)},useDebugValue:wi,useDeferredValue:function(e,a){var n=ye();return ue===null?ki(n,e,a):yd(n,ue.memoizedState,e,a)},useTransition:function(){var e=Vi(Pa)[0],a=ye().memoizedState;return[typeof e=="boolean"?e:_t(e),a]},useSyncExternalStore:kc,useId:Ed,useHostTransitionStatus:Wi,useFormState:sd,useActionState:sd,useOptimistic:function(e,a){var n=ye();return ue!==null?ed(n,ue,e,a):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Gi,useCacheRefresh:Td,useEffectEvent:fd};function Pi(e,a,n,l){a=e.memoizedState,n=n(l,a),n=n==null?a:F({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ii={enqueueSetState:function(e,a,n){e=e._reactInternals;var l=ta(),t=gn(l);t.payload=a,n!=null&&(t.callback=n),a=hn(e,t,l),a!==null&&(ke(a,e,l),Nt(a,e,l))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var l=ta(),t=gn(l);t.tag=1,t.payload=a,n!=null&&(t.callback=n),a=hn(e,t,l),a!==null&&(ke(a,e,l),Nt(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=ta(),l=gn(n);l.tag=2,a!=null&&(l.callback=a),a=hn(e,l,n),a!==null&&(ke(a,e,n),Nt(a,e,n))}};function _d(e,a,n,l,t,u,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,o):a.prototype&&a.prototype.isPureReactComponent?!gt(n,l)||!gt(t,u):!0}function Md(e,a,n,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,l),a.state!==e&&Ii.enqueueReplaceState(a,a.state,null)}function el(e,a){var n=a;if("ref"in a){n={};for(var l in a)l!=="ref"&&(n[l]=a[l])}if(e=e.defaultProps){n===a&&(n=F({},n));for(var t in e)n[t]===void 0&&(n[t]=e[t])}return n}function jd(e){Su(e)}function Cd(e){console.error(e)}function Ud(e){Su(e)}function Fu(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Yd(e,a,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(t){setTimeout(function(){throw t})}}function er(e,a,n){return n=gn(n),n.tag=3,n.payload={element:null},n.callback=function(){Fu(e,a)},n}function Hd(e){return e=gn(e),e.tag=3,e}function Rd(e,a,n,l){var t=n.type.getDerivedStateFromError;if(typeof t=="function"){var u=l.value;e.payload=function(){return t(u)},e.callback=function(){Yd(a,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Yd(a,n,l),typeof t!="function"&&(An===null?An=new Set([this]):An.add(this));var i=l.stack;this.componentDidCatch(l.value,{componentStack:i!==null?i:""})})}function Ap(e,a,n,l,t){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=n.alternate,a!==null&&Kn(a,n,t,!0),n=Ce.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Re===null?go():n.alternate===null&&he===0&&(he=3),n.flags&=-257,n.flags|=65536,n.lanes=t,l===Yu?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([l]):a.add(l),Br(e,l,t)),!1;case 22:return n.flags|=65536,l===Yu?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([l]):n.add(l)),Br(e,l,t)),!1}throw Error(v(435,n.tag))}return Br(e,l,t),go(),!1}if(X)return a=Ce.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=t,l!==qi&&(e=Error(v(422),{cause:l}),qt(sa(e,n)))):(l!==qi&&(a=Error(v(423),{cause:l}),qt(sa(a,n))),e=e.current.alternate,e.flags|=65536,t&=-t,e.lanes|=t,l=sa(l,n),t=er(e.stateNode,l,t),_i(e,t),he!==4&&(he=2)),!1;var u=Error(v(520),{cause:l});if(u=sa(u,n),Qt===null?Qt=[u]:Qt.push(u),he!==4&&(he=2),a===null)return!0;l=sa(l,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=t&-t,n.lanes|=e,e=er(n.stateNode,l,e),_i(n,e),!1;case 1:if(a=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(An===null||!An.has(u))))return n.flags|=65536,t&=-t,n.lanes|=t,t=Hd(t),Rd(t,e,n,l),_i(n,t),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var ar=Error(v(461)),Ee=!1;function Ne(e,a,n,l){a.child=e===null?Gc(a,null,n,l):Pn(a,e.child,n,l)}function Bd(e,a,n,l,t){n=n.render;var u=a.ref;if("ref"in l){var o={};for(var i in l)i!=="ref"&&(o[i]=l[i])}else o=l;return wn(a),l=Ri(e,a,n,o,u,t),i=Bi(),e!==null&&!Ee?(Qi(e,a,t),Ia(e,a,t)):(X&&i&&Ou(a),a.flags|=1,Ne(e,a,l,t),a.child)}function Qd(e,a,n,l,t){if(e===null){var u=n.type;return typeof u=="function"&&!bi(u)&&u.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=u,Ld(e,a,u,l,t)):(e=Au(n.type,null,l,a,a.mode,t),e.ref=a.ref,e.return=a,a.child=e)}if(u=e.child,!sr(e,t)){var o=u.memoizedProps;if(n=n.compare,n=n!==null?n:gt,n(o,l)&&e.ref===a.ref)return Ia(e,a,t)}return a.flags|=1,e=wa(u,l),e.ref=a.ref,e.return=a,a.child=e}function Ld(e,a,n,l,t){if(e!==null){var u=e.memoizedProps;if(gt(u,l)&&e.ref===a.ref)if(Ee=!1,a.pendingProps=l=u,sr(e,t))(e.flags&131072)!==0&&(Ee=!0);else return a.lanes=e.lanes,Ia(e,a,t)}return nr(e,a,n,l,t)}function Gd(e,a,n,l){var t=l.children,u=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(l=a.child=e.child,t=0;l!==null;)t=t|l.lanes|l.childLanes,l=l.sibling;l=t&~u}else l=0,a.child=null;return Xd(e,a,u,n,l)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cu(a,u!==null?u.cachePool:null),u!==null?Zc(a,u):ji(),Jc(a);else return l=a.lanes=536870912,Xd(e,a,u!==null?u.baseLanes|n:n,n,l)}else u!==null?(Cu(a,u.cachePool),Zc(a,u),zn(),a.memoizedState=null):(e!==null&&Cu(a,null),ji(),zn());return Ne(e,a,t,n),a.child}function jt(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Xd(e,a,n,l,t){var u=Ai();return u=u===null?null:{parent:ze._currentValue,pool:u},a.memoizedState={baseLanes:n,cachePool:u},e!==null&&Cu(a,null),ji(),Jc(a),e!==null&&Kn(e,a,l,!0),a.childLanes=t,null}function Wu(e,a){return a=$u({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Vd(e,a,n){return Pn(a,e.child,null,n),e=Wu(a,a.pendingProps),e.flags|=2,ea(a),a.memoizedState=null,e}function Dp(e,a,n){var l=a.pendingProps,t=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(X){if(l.mode==="hidden")return e=Wu(a,l),a.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},jt(null,e);if(Ui(a),(e=de)?(e=bm(e,fa),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:dn!==null?{id:Ma,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},n=Ac(e),n.return=a,a.child=n,De=a,de=null)):e=null,e===null)throw mn(a);return a.lanes=536870912,null}return Wu(a,l)}var u=e.memoizedState;if(u!==null){var o=u.dehydrated;if(Ui(a),t)if(a.flags&256)a.flags&=-257,a=Vd(e,a,n);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(v(558));else if(Ee||Kn(e,a,n,!1),t=(n&e.childLanes)!==0,Ee||t){if(yn.current===null){if(l=re,l!==null&&(o=xs(l,n),o!==0&&o!==u.retryLane))throw u.retryLane=o,Xn(e,o),ke(l,e,o),ar;go()}a=Vd(e,a,n)}else e=u.treeContext,de=va(o.nextSibling),De=a,X=!0,fn=null,fa=!1,e!==null&&xc(a,e),a=Wu(a,l),a.flags|=134221824;return a}return e=wa(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Ul(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(v(284));(e===null||e.ref!==n)&&(a.flags|=4194816)}}function nr(e,a,n,l,t){return wn(a),n=Ri(e,a,n,l,void 0,t),l=Bi(),e!==null&&!Ee?(Qi(e,a,t),Ia(e,a,t)):(X&&l&&Ou(a),a.flags|=1,Ne(e,a,n,t),a.child)}function Zd(e,a,n,l,t,u){return wn(a),a.updateQueue=null,n=wc(a,l,n,t),Kc(e),l=Bi(),e!==null&&!Ee?(Qi(e,a,u),Ia(e,a,u)):(X&&l&&Ou(a),a.flags|=1,Ne(e,a,n,u),a.child)}function Jd(e,a,n,l,t){if(wn(a),a.stateNode===null){var u=Tl,o=n.contextType;typeof o=="object"&&o!==null&&(u=je(o)),u=new n(l,u),a.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ii,a.stateNode=u,u._reactInternals=a,u=a.stateNode,u.props=l,u.state=a.memoizedState,u.refs={},Oi(a),o=n.contextType,u.context=typeof o=="object"&&o!==null?je(o):Tl,u.state=a.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Pi(a,n,o,l),u.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(o=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),o!==u.state&&Ii.enqueueReplaceState(u,u.state,null),Dt(a,l,u,t),At(),u.state=a.memoizedState),typeof u.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){u=a.stateNode;var i=a.memoizedProps,r=el(n,i);u.props=r;var f=u.context,b=n.contextType;o=Tl,typeof b=="object"&&b!==null&&(o=je(b));var h=n.getDerivedStateFromProps;b=typeof h=="function"||typeof u.getSnapshotBeforeUpdate=="function",i=a.pendingProps!==i,b||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i||f!==o)&&Md(a,u,l,o),bn=!1;var c=a.memoizedState;u.state=c,Dt(a,l,u,t),At(),f=a.memoizedState,i||c!==f||bn?(typeof h=="function"&&(Pi(a,n,h,l),f=a.memoizedState),(r=bn||_d(a,n,r,l,c,f,o))?(b||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(a.flags|=4194308)):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=f),u.props=l,u.state=f,u.context=o,l=r):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{u=a.stateNode,xi(e,a),o=a.memoizedProps,b=el(n,o),u.props=b,h=a.pendingProps,c=u.context,f=n.contextType,r=Tl,typeof f=="object"&&f!==null&&(r=je(f)),i=n.getDerivedStateFromProps,(f=typeof i=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==h||c!==r)&&Md(a,u,l,r),bn=!1,c=a.memoizedState,u.state=c,Dt(a,l,u,t),At();var p=a.memoizedState;o!==h||c!==p||bn||e!==null&&e.dependencies!==null&&Mu(e.dependencies)?(typeof i=="function"&&(Pi(a,n,i,l),p=a.memoizedState),(b=bn||_d(a,n,b,l,c,p,r)||e!==null&&e.dependencies!==null&&Mu(e.dependencies))?(f||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,p,r),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,p,r)),typeof u.componentDidUpdate=="function"&&(a.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof u.componentDidUpdate!="function"||o===e.memoizedProps&&c===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&c===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=p),u.props=l,u.state=p,u.context=r,l=b):(typeof u.componentDidUpdate!="function"||o===e.memoizedProps&&c===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&c===e.memoizedState||(a.flags|=1024),l=!1)}return u=l,Ul(e,a),l=(a.flags&128)!==0,u||l?(u=a.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),a.flags|=1,e!==null&&l?(a.child=Pn(a,e.child,null,t),a.child=Pn(a,null,n,t)):Ne(e,a,n,t),a.memoizedState=u.state,e=a.child):e=Ia(e,a,t),e}function Kd(e,a,n,l){return Zn(),a.flags|=256,Ne(e,a,n,l),a.child}var lr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tr(e){return{baseLanes:e,cachePool:Yc()}}function ur(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=la),e}function wd(e,a,n){var l=a.pendingProps,t=!1,u=(a.flags&128)!==0,o;if((o=u)||(o=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),o&&(t=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,e===null){if(X){if(t?qn(a):zn(),(e=de)?(e=bm(e,fa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:dn!==null?{id:Ma,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},n=Ac(e),n.return=a,a.child=n,De=a,de=null)):e=null,e===null)throw mn(a);return ts(e)?a.lanes=32:a.lanes=536870912,null}return u=l.children,l=l.fallback,t?(zn(),t=a.mode,u=$u({mode:"hidden",children:u},t),l=Vn(l,t,n,null),u.return=a,l.return=a,u.sibling=l,a.child=u,l=a.child,l.memoizedState=tr(n),l.childLanes=ur(e,o,n),a.memoizedState=lr,jt(null,l)):(qn(a),or(a,u))}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(r!==null)return Op(e,a,u,o,l,r,i,n)}return t?(zn(),t=l.fallback,u=a.mode,i=e.child,r=i.sibling,l=wa(i,{mode:"hidden",children:l.children}),l.subtreeFlags=i.subtreeFlags&1206910976,r!==null?t=wa(r,t):(t=Vn(t,u,n,null),t.flags|=2),t.return=a,l.return=a,l.sibling=t,a.child=l,jt(null,l),l=a.child,t=e.child.memoizedState,t===null?t=tr(n):(u=t.cachePool,u!==null?(i=ze._currentValue,u=u.parent!==i?{parent:i,pool:i}:u):u=Yc(),t={baseLanes:t.baseLanes|n,cachePool:u}),l.memoizedState=t,l.childLanes=ur(e,o,n),a.memoizedState=lr,jt(e.child,l)):(qn(a),n=e.child,e=n.sibling,n=wa(n,{mode:"visible",children:l.children}),n.return=a,n.sibling=null,e!==null&&(o=a.deletions,o===null?(a.deletions=[e],a.flags|=16):o.push(e)),a.child=n,a.memoizedState=null,n)}function or(e,a){return a=$u({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function $u(e,a){return e=Ze(22,e,null,a),e.lanes=0,e}function Pu(e,a,n){return Pn(a,e.child,null,n),e=or(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Op(e,a,n,l,t,u,o,i){if(n)return a.flags&256?(qn(a),a.flags&=-257,Pu(e,a,i)):a.memoizedState!==null?(zn(),a.child=e.child,a.flags|=128,null):(zn(),u=t.fallback,o=a.mode,t=$u({mode:"visible",children:t.children},o),u=Vn(u,o,i,null),u.flags|=2,t.return=a,u.return=a,t.sibling=u,a.child=t,Pn(a,e.child,null,i),t=a.child,t.memoizedState=tr(i),t.childLanes=ur(e,l,i),a.memoizedState=lr,jt(null,t));if(qn(a),ts(u)){if(l=u.nextSibling&&u.nextSibling.dataset,l)var r=l.dgst;return l=r,l!==""&&(t=Error(v(419)),t.stack="",t.digest=l,qt({value:t,source:null,stack:null})),Pu(e,a,i)}if(Ee||Kn(e,a,i,!1),l=(i&e.childLanes)!==0,Ee||l){if(yn.current!==null)return Pu(e,a,i);if(l=re,l!==null&&(t=xs(l,i),t!==0&&t!==o.retryLane))throw o.retryLane=t,Xn(e,t),ke(l,e,t),ar;return ls(u)||go(),Pu(e,a,i)}return ls(u)?(a.flags|=192,a.child=e.child,null):(e=o.treeContext,de=va(u.nextSibling),De=a,X=!0,fn=null,fa=!1,e!==null&&xc(a,e),a=or(a,t.children),a.flags|=134221824,a)}function kd(e,a,n){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),_u(e.return,a,n)}function Fd(e){for(var a=null;e!==null;){var n=e.alternate;n!==null&&Qu(n)===null&&(a=e),e=e.sibling}return a}function Iu(e,a,n,l,t,u){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:t,treeForkCount:u}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=n,o.tailMode=t,o.treeForkCount=u)}function ir(e){var a=e.child;for(e.child=null;a!==null;){var n=a.sibling;a.sibling=e.child,e.child=a,a=n}}function rr(e,a,n){var l=a.pendingProps,t=l.revealOrder,u=l.tail;l=l.children;var o=Ue.current;if(a.flags&128)return Ot(a,o),null;var i=(o&2)!==0;if(i?(o=o&1|2,a.flags|=128):o&=1,Ot(a,o),t==="backwards"&&e!==null?(ir(e),Ne(e,a,l,n),ir(e)):Ne(e,a,l,n),l=X?yt:0,!i&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kd(e,n,a);else if(e.tag===19)kd(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(t){case"backwards":n=Fd(a.child),n===null?(t=a.child,a.child=null):(t=n.sibling,n.sibling=null,ir(a)),Iu(a,!0,t,null,u,l);break;case"unstable_legacy-backwards":for(n=null,t=a.child,a.child=null;t!==null;){if(e=t.alternate,e!==null&&Qu(e)===null){a.child=t;break}e=t.sibling,t.sibling=n,n=t,t=e}Iu(a,!0,n,null,u,l);break;case"together":Iu(a,!1,null,null,void 0,l);break;case"independent":a.memoizedState=null;break;default:n=Fd(a.child),n===null?(t=a.child,a.child=null):(t=n.sibling,n.sibling=null),Iu(a,!1,t,n,u,l)}return a.child}function Wd(e,a,n){var l=a.pendingProps;return vn(a,a.type,l.value),Ne(e,a,l.children,n),a.child}function Ia(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),Nn|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(Kn(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(v(153));if(a.child!==null){for(e=a.child,n=wa(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=wa(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function sr(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Mu(e)))}function xp(e,a,n){switch(a.tag){case 3:tu(a,a.stateNode.containerInfo),vn(a,ze,e.memoizedState.cache),Zn();break;case 27:case 5:Ho(a);break;case 4:tu(a,a.stateNode.containerInfo);break;case 10:vn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ui(a),null;break;case 13:var l=a.memoizedState;if(l!==null){if(l.dehydrated!==null)return qn(a),a.flags|=128,null;l=Kn(e,a,n,!1);var t=a.child.childLanes;return l||(n&t)!==0?wd(e,a,n):(qn(a),e=Ia(e,a,n),e!==null?e.sibling:null)}qn(a);break;case 19:if(a.flags&128)return rr(e,a,n);if(t=(e.flags&128)!==0,l=(n&a.childLanes)!==0,l||(Kn(e,a,n,!1),l=(n&a.childLanes)!==0),t){if(l)return rr(e,a,n);a.flags|=128}if(t=a.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),Ot(a,Ue.current),l)break;return null;case 22:return a.lanes=0,Gd(e,a,n,a.pendingProps);case 24:vn(a,ze,e.memoizedState.cache)}return Ia(e,a,n)}function $d(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ee=!0;else{if(!sr(e,n)&&(a.flags&128)===0)return Ee=!1,xp(e,a,n);Ee=(e.flags&131072)!==0}else Ee=!1,X&&(a.flags&1048576)!==0&&Oc(a,yt,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=Wn(a.elementType),a.type=e,typeof e=="function")bi(e)?(l=el(e,l),a.tag=1,a=Jd(null,a,e,l,n)):(a.tag=0,a=nr(null,a,e,l,n));else{if(e!=null){var t=e.$$typeof;if(t===N){a.tag=11,a=Bd(null,a,e,l,n);break e}else if(t===ve){a.tag=14,a=Qd(null,a,e,l,n);break e}else if(t===Xe){a.tag=10,a.type=e,a=Wd(null,a,n);break e}}throw a=Uo(e)||e,Error(v(306,a,""))}}return a;case 0:return nr(e,a,a.type,a.pendingProps,n);case 1:return l=a.type,t=el(l,a.pendingProps),Jd(e,a,l,t,n);case 3:e:{if(tu(a,a.stateNode.containerInfo),e===null)throw Error(v(387));l=a.pendingProps;var u=a.memoizedState;t=u.element,xi(e,a),Dt(a,l,null,n);var o=a.memoizedState;if(l=o.cache,vn(a,ze,l),l!==u.cache&&Ei(a,[ze],n,!0),At(),l=o.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=u,a.memoizedState=u,a.flags&256){a=Kd(e,a,l,n);break e}else if(l!==t){t=sa(Error(v(424)),a),qt(t),a=Kd(e,a,l,n);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(de=va(e.firstChild),De=a,X=!0,fn=null,fa=!0,n=Gc(a,null,l,n),a.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Zn(),l===t){a=Ia(e,a,n);break e}Ne(e,a,l,n)}a=a.child}return a;case 26:return Ul(e,a),e===null?(n=Em(a.type,null,a.pendingProps,null))?a.memoizedState=n:X||(a.stateNode=nm(a.type,a.pendingProps,un.current,a)):a.memoizedState=Em(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Ho(a),e===null&&X&&(l=a.stateNode=ym(a.type,a.pendingProps,un.current),De=a,fa=!0,t=de,xn(a.type)?(us=t,de=va(l.firstChild)):de=t),Ne(e,a,a.pendingProps.children,n),Ul(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&X&&((t=l=de)&&(l=Eb(l,a.type,a.pendingProps,fa),l!==null?(a.stateNode=l,De=a,de=va(l.firstChild),fa=!1,t=!0):t=!1),t||mn(a)),Ho(a),t=a.type,u=a.pendingProps,o=e!==null?e.memoizedProps:null,l=u.children,Wr(t,u)?l=null:o!==null&&Wr(t,o)&&(a.flags|=32),a.memoizedState!==null&&(t=Ri(e,a,hp,null,null,n),Pl._currentValue=t),Ul(e,a),Ne(e,a,l,n),a.child;case 6:return e===null&&X&&((e=n=de)&&(n=Tb(n,a.pendingProps,fa),n!==null?(a.stateNode=n,De=a,de=null,e=!0):e=!1),e||mn(a)),null;case 13:return wd(e,a,n);case 4:return tu(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Pn(a,null,l,n):Ne(e,a,l,n),a.child;case 11:return Bd(e,a,a.type,a.pendingProps,n);case 7:return l=a.pendingProps,Ul(e,a),Ne(e,a,l,n),a.child;case 8:return Ne(e,a,a.pendingProps.children,n),a.child;case 12:return Ne(e,a,a.pendingProps.children,n),a.child;case 10:return Wd(e,a,n);case 9:return t=a.type._context,l=a.pendingProps.children,wn(a),t=je(t),l=l(t),a.flags|=1,Ne(e,a,l,n),a.child;case 14:return Qd(e,a,a.type,a.pendingProps,n);case 15:return Ld(e,a,a.type,a.pendingProps,n);case 19:return rr(e,a,n);case 31:return Dp(e,a,n);case 22:return Gd(e,a,n,a.pendingProps);case 24:return wn(a),l=je(ze),e===null?(t=Ai(),t===null&&(t=re,u=Ti(),t.pooledCache=u,u.refCount++,u!==null&&(t.pooledCacheLanes|=n),t=u),a.memoizedState={parent:l,cache:t},Oi(a),vn(a,ze,t)):((e.lanes&n)!==0&&(xi(e,a),Dt(a,null,null,n),At()),t=e.memoizedState,u=a.memoizedState,t.parent!==l?(t={parent:l,cache:l},a.memoizedState=t,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=t),vn(a,ze,l)):(l=u.cache,vn(a,ze,l),l!==t.cache&&Ei(a,[ze],n,!0))),Ne(e,a,a.pendingProps.children,n),a.child;case 30:return a.stateNode===null&&(a.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=a.pendingProps,l.name!=null&&l.name!=="auto"?a.flags|=e===null?18882560:18874368:X&&Ou(a),e!==null&&e.memoizedProps.name!==l.name?a.flags|=4194816:Ul(e,a),Ne(e,a,l.children,n),a.child;case 29:throw a.pendingProps}throw Error(v(156,a.tag))}function en(e){e.flags|=4}function cr(e,a,n,l,t){var u;if((u=(e.mode&32)!==0)&&(u=n===null?Dm(a,l):Dm(a,l)&&(l.src!==n.src||l.srcSet!==n.srcSet)),u){if(e.flags|=16777216,(t&335544128)===t)if(e.stateNode.complete)e.flags|=8192;else if(Cf())e.flags|=8192;else throw $n=Yu,Di}else e.flags&=-16777217}function Pd(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Om(a))if(Cf())e.flags|=8192;else throw $n=Yu,Di}function eo(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?As():536870912,e.lanes|=a,Ql|=a)}function Ct(e,a){if(!X)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null;break;default:for(a=e.tail,n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null}}function fe(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(a)for(var t=e.child;t!==null;)n|=t.lanes|t.childLanes,l|=t.subtreeFlags&1206910976,l|=t.flags&1206910976,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)n|=t.lanes|t.childLanes,l|=t.subtreeFlags,l|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=l,e.childLanes=n,a}function _p(e,a,n){var l=a.pendingProps;switch(yi(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(a),null;case 1:return fe(a),null;case 3:return n=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Wa(ze),dl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Dl(a)?en(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,zi())),fe(a),null;case 26:var t=a.type,u=a.memoizedState;return e===null?(en(a),u!==null?(fe(a),Pd(a,u)):(fe(a),cr(a,t,null,l,n))):u?u!==e.memoizedState?(en(a),fe(a),Pd(a,u)):(fe(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&en(a),fe(a),cr(a,t,e,l,n)),null;case 27:if(uu(a),n=un.current,t=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&en(a);else{if(!l){if(a.stateNode===null)throw Error(v(166));return fe(a),a.subtreeFlags&=-33554433,null}e=xa.current,Dl(a)?_c(a):(e=ym(t,l,n),a.stateNode=e,en(a))}return fe(a),a.subtreeFlags&=-33554433,null;case 5:if(uu(a),t=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&en(a);else{if(!l){if(a.stateNode===null)throw Error(v(166));return fe(a),a.subtreeFlags&=-33554433,null}if(u=xa.current,Dl(a))_c(a);else{var o=Zt(un.current);switch(u){case 1:u=o.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:u=o.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":u=o.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":u=o.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":u=o.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?o.createElement(t,{is:l.is}):o.createElement(t)}}u[Me]=a,u[Ve]=l;e:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)u.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=u;e:switch(He(u,t,l),t){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&en(a)}}return fe(a),a.subtreeFlags&=-33554433,cr(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,n),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&en(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(v(166));if(e=un.current,Dl(a)){if(e=a.stateNode,n=a.memoizedProps,l=null,t=De,t!==null)switch(t.tag){case 27:case 5:l=t.memoizedProps}e[Me]=a,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Pf(e.nodeValue,n)),e||mn(a,!0)}else e=Zt(e).createTextNode(l),e[Me]=a,a.stateNode=e}return fe(a),null;case 31:if(n=a.memoizedState,e===null||e.memoizedState!==null){if(l=Dl(a),n!==null){if(e===null){if(!l)throw Error(v(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(557));e[Me]=a}else Zn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;fe(a),e=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return a.flags&256?(ea(a),a):(ea(a),null);if((a.flags&128)!==0)throw Error(v(558))}return fe(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(t=Dl(a),l!==null&&l.dehydrated!==null){if(e===null){if(!t)throw Error(v(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));t[Me]=a}else Zn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;fe(a),t=!1}else t=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),t=!0;if(!t)return a.flags&256?(ea(a),a):(ea(a),null)}return ea(a),(a.flags&128)!==0?(a.lanes=n,a):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=a.child,t=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(t=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==t&&(l.flags|=2048)),n!==e&&n&&(a.child.flags|=8192),eo(a,a.updateQueue),fe(a),null);case 4:return dl(),e===null&&Jr(a.stateNode.containerInfo),a.flags|=67108864,fe(a),null;case 10:return Wa(a.type),fe(a),null;case 19:if(Yi(a),l=a.memoizedState,l===null)return fe(a),null;if(t=(a.flags&128)!==0,u=l.rendering,u===null)if(t)Ct(l,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(u=Qu(e),u!==null){for(a.flags|=128,Ct(l,!1),e=u.updateQueue,a.updateQueue=e,eo(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)Nc(n,e),n=n.sibling;return Ot(a,Ue.current&1|2),X&&ka(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&Fe()>mo&&(a.flags|=128,t=!0,Ct(l,!1),a.lanes=4194304)}else{if(!t)if(e=Qu(u),e!==null){if(a.flags|=128,t=!0,e=e.updateQueue,a.updateQueue=e,eo(a,e),Ct(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!u.alternate&&!X)return fe(a),null}else 2*Fe()-l.renderingStartTime>mo&&n!==536870912&&(a.flags|=128,t=!0,Ct(l,!1),a.lanes=4194304);l.isBackwards?(u.sibling=a.child,a.child=u):(e=l.last,e!==null?e.sibling=u:a.child=u,l.last=u)}if(l.tail!==null){e=l.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Fe(),e.sibling=null,u=Ue.current,u=t?u&1|2:u&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!n||X?Ot(a,u):(n=u,ce(Ce,a),ce(Ue,n),Re===null&&(Re=a)),X&&ka(a,l.treeForkCount),e}return fe(a),null;case 22:case 23:return ea(a),Ci(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(n&536870912)!==0&&(a.flags&128)===0&&(fe(a),a.subtreeFlags&6&&(a.flags|=8192)):fe(a),n=a.updateQueue,n!==null&&eo(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==n&&(a.flags|=2048),e!==null&&_e(Fn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Wa(ze),fe(a),null;case 25:return null;case 30:return a.flags|=33554432,fe(a),null}throw Error(v(156,a.tag))}function Mp(e,a){switch(yi(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Wa(ze),dl(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return uu(a),null;case 31:if(a.memoizedState!==null){if(ea(a),a.alternate===null)throw Error(v(340));Zn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ea(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(v(340));Zn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Yi(a),e=a.flags,e&65536?(a.flags=e&-65537|128,e=a.memoizedState,e!==null&&(e.rendering=null,e.tail=null),a.flags|=4,a):null;case 4:return dl(),null;case 10:return Wa(a.type),null;case 22:case 23:return ea(a),Ci(),e!==null&&_e(Fn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Wa(ze),null;case 25:return null;default:return null}}function Id(e,a){switch(yi(a),a.tag){case 3:Wa(ze),dl();break;case 26:case 27:case 5:uu(a);break;case 4:dl();break;case 31:a.memoizedState!==null&&ea(a);break;case 13:ea(a);break;case 19:Yi(a);break;case 10:Wa(a.type);break;case 22:case 23:ea(a),Ci(),e!==null&&_e(Fn);break;case 24:Wa(ze)}}function Ut(e,a){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var t=l.next;n=t;do{if((n.tag&e)===e){l=void 0;var u=n.create,o=n.inst;l=u(),o.destroy=l}n=n.next}while(n!==t)}}catch(i){ne(a,a.return,i)}}function Sn(e,a,n){try{var l=a.updateQueue,t=l!==null?l.lastEffect:null;if(t!==null){var u=t.next;l=u;do{if((l.tag&e)===e){var o=l.inst,i=o.destroy;if(i!==void 0){o.destroy=void 0,t=a;var r=n,f=i;try{f()}catch(b){ne(t,r,b)}}}l=l.next}while(l!==u)}}catch(b){ne(a,a.return,b)}}function ef(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{Vc(a,n)}catch(l){ne(e,e.return,l)}}}function af(e,a,n){n.props=el(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){ne(e,a,l)}}function Ca(e,a){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:var t=e.stateNode,u=Ja(e.memoizedProps,t);(t.ref===null||t.ref.name!==u)&&(t.ref=sm(u)),l=t.ref;break;case 7:if(e.stateNode===null){var o=new ua(e);G(e.child,!1,zb,o,void 0,void 0),e.stateNode=o}l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(i){ne(e,a,i)}}function Ye(e,a){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(t){ne(e,a,t)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(t){ne(e,a,t)}else n.current=null}function ao(e,a){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&a!==null)for(var n=0;n<a.length;n++)pm(e.stateNode,a[n])}function nf(e){for(var a=e.return;a!==null&&(fr(a)&&pm(e.stateNode,a.stateNode),!dr(a));)a=a.return}function Yt(e){for(var a=e.return;a!==null&&(fr(a)&&Sb(e.stateNode,a.stateNode),!dr(a));)a=a.return}function dr(e){return e.tag===5||e.tag===3||e.tag===27}function fr(e){return e&&e.tag===7&&e.stateNode!==null}function mr(e){var a=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(t){ne(e,e.return,t)}}function vr(e,a,n){try{var l=e.stateNode;lb(l,e.type,n,a),l[Ve]=a}catch(t){ne(e,e.return,t)}}function lf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xn(e.type)||e.tag===4}function pr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function br(e,a,n,l){var t=e.tag;if(t===5||t===6)t=e.stateNode,a?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,a):(a=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.appendChild(t),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=_a)),ao(e,l),W=!0;else if(t!==4&&(t===27&&(ao(e,l),l=null,xn(e.type)&&(n=e.stateNode,a=null)),e=e.child,e!==null))for(br(e,a,n,l),e=e.sibling;e!==null;)br(e,a,n,l),e=e.sibling}function no(e,a,n,l){var t=e.tag;if(t===5||t===6)t=e.stateNode,a?n.insertBefore(t,a):n.appendChild(t),ao(e,l),W=!0;else if(t!==4&&(t===27&&(ao(e,l),l=null,xn(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(no(e,a,n,l),e=e.sibling;e!==null;)no(e,a,n,l),e=e.sibling}function tf(e){var a=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,t=a.attributes;t.length;)a.removeAttributeNode(t[0]);He(a,l,n),a[Me]=e,a[Ve]=n}catch(u){ne(e,e.return,u)}}var lo=!1,aa=null;function uf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(lo=!0)}var Ua=null;function of(){var e=Ua;return Ua=null,e}var Je=0;function Yl(e,a,n,l,t){return Je=0,rf(e.child,a,n,l,t)}function rf(e,a,n,l,t){for(var u=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(l!==null){var i=Ir(o);l.push(i),i.view&&(u=!0)}else u||Ir(o).view&&(u=!0);lo=!0,im(o,Je===0?a:a+"_"+Je,n),Je++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||rf(e.child,a,n,l,t)&&(u=!0));e=e.sibling}return u}function Ya(e,a){for(;e!==null;)e.tag===5?rm(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||Ya(e.child,a)),e=e.sibling}function to(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(to(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var a=e.memoizedProps;if(a.name==null||a.name==="auto")throw Error(v(544));var n=a.name;a=Ka(a.default,a.share),a!=="none"&&(Yl(e,n,a,null,!1)||Ya(e.child,!1))}e=e.sibling}}function gr(e,a){if(e.tag===30){var n=e.stateNode,l=e.memoizedProps,t=Ja(l,n),u=Ka(l.default,n.paired?l.share:l.enter);u!=="none"?Yl(e,t,u,null,!1)?(to(e),n.paired||a||Vl(e,l.onEnter)):Ya(e.child,!1):to(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)gr(e,a),e=e.sibling;else to(e)}function hr(e){if(aa!==null&&aa.size!==0){var a=aa;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,l=n.name;if(l!=null&&l!=="auto"){var t=a.get(l);if(t!==void 0){var u=Ka(n.default,n.share);if(u!=="none"&&(Yl(e,l,u,null,!1)?(u=e.stateNode,t.paired=u,u.paired=t,Vl(e,n.onShare)):Ya(e.child,!1)),a.delete(l),a.size===0)break}}}hr(e)}e=e.sibling}}}function yr(e){if(e.tag===30){var a=e.memoizedProps,n=Ja(a,e.stateNode),l=aa!==null?aa.get(n):void 0,t=Ka(a.default,l!==void 0?a.share:a.exit);t!=="none"&&(Yl(e,n,t,null,!1)?l!==void 0?(t=e.stateNode,l.paired=t,t.paired=l,aa.delete(n),Vl(e,a.onShare)):Vl(e,a.onExit):Ya(e.child,!1)),aa!==null&&hr(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)yr(e),e=e.sibling;else aa!==null&&hr(e)}function sf(e){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,n=Ja(a,e.stateNode);a=Ka(a.default,a.update),e.flags&=-5,a!=="none"&&Yl(e,n,a,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&sf(e);e=e.sibling}}function qr(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.stateNode;a.paired!==null&&(a.paired=null,Ya(e.child,!1))}qr(e)}e=e.sibling}}function uo(e){if(e.tag===30)e.stateNode.paired=null,Ya(e.child,!1),qr(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)uo(e),e=e.sibling;else qr(e)}function cf(e){for(e=e.child;e!==null;)e.tag===30?Ya(e.child,!1):(e.subtreeFlags&33554432)!==0&&cf(e),e=e.sibling}function zr(e,a,n,l,t,u,o){for(var i=!1;a!==null;){if(a.tag===5){var r=a.stateNode;if(u!==null&&Je<u.length){var f=u[Je],b=Ir(r);(f.view||b.view)&&(i=!0);var h;if(h=(e.flags&4)===0)if(b.clip)h=!0;else{h=f.rect;var c=b.rect;h=h.y!==c.y||h.x!==c.x||h.height!==c.height||h.width!==c.width}h&&(e.flags|=4),b.abs?b=!f.abs:(f=f.rect,b=b.rect,b=f.height!==b.height||f.width!==b.width),b&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&im(r,Je===0?n:n+"_"+Je,t),i&&(e.flags&4)!==0||(Ua===null&&(Ua=[]),Ua.push(r,Je===0?l:l+"_"+Je,a.memoizedProps)),Je++}else(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&o?e.flags|=a.flags&32:zr(e,a.child,n,l,t,u,o)&&(i=!0));a=a.sibling}return i}function df(e,a){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,l=e.stateNode,t=Ja(n,l),u=Ka(n.default,n.update),o;o=e.memoizedState,e.memoizedState=null,l=e;var i=e.child;Je=0,t=zr(l,i,t,t,u,o,!1),(e.flags&4)!==0&&t&&Vl(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&df(e);e=e.sibling}}var Oe=!1,ee=!1,Ha=!1,Sr=!1,ff=typeof WeakSet=="function"?WeakSet:Set,xe=null,Ra=!1,Ht=!1,oo=!1,Er=!1;function jp(e,a,n){if(e=e.containerInfo,kr=Il,e=pc(e),si(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var t=l.getSelection&&l.getSelection();if(t&&t.rangeCount!==0){l=t.anchorNode;var u=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{l.nodeType,o.nodeType}catch{l=null;break e}var i=0,r=-1,f=-1,b=0,h=0,c=e,p=null;a:for(;;){for(var q;c!==l||u!==0&&c.nodeType!==3||(r=i+u),c!==o||t!==0&&c.nodeType!==3||(f=i+t),c.nodeType===3&&(i+=c.nodeValue.length),(q=c.firstChild)!==null;)p=c,c=q;for(;;){if(c===e)break a;if(p===l&&++b===u&&(r=i),p===o&&++h===t&&(f=i),(q=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=q}l=r===-1||f===-1?null:{start:r,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for(Fr={focusedElem:e,selectionRange:l},Il=!1,n=(n&335544064)===n,xe=a,a=n?9270:1024;xe!==null;){if(e=xe,n&&(l=e.deletions,l!==null))for(u=0;u<l.length;u++)n&&yr(l[u]);if(e.alternate===null&&(e.flags&2)!==0)n&&uf(e),io(n);else{if(e.tag===22){if(l=e.alternate,e.memoizedState!==null){l!==null&&l.memoizedState===null&&n&&yr(l),io(n);continue}else if(l!==null&&l.memoizedState!==null){n&&uf(e),io(n);continue}}l=e.child,(e.subtreeFlags&a)!==0&&l!==null?(l.return=e,xe=l):(n&&sf(e),io(n))}}aa=null}function io(e){for(;xe!==null;){var a=xe,n=e,l=a.alternate,t=a.flags;switch(a.tag){case 0:case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){n=void 0,t=l.memoizedProps,l=l.memoizedState;var u=a.stateNode;try{var o=el(a.type,t);n=u.getSnapshotBeforeUpdate(o,l),u.__reactInternalSnapshotBeforeUpdate=n}catch(i){ne(a,a.return,i)}}break;case 3:if((t&1024)!==0){if(l=a.stateNode.containerInfo,n=l.nodeType,n===9)ns(l);else if(n===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":ns(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&l!==null&&(n=Ja(l.memoizedProps,l.stateNode),t=a.memoizedProps,t=Ka(t.default,t.update),t!=="none"&&Yl(l,n,t,l.memoizedState=[],!0));break;default:if((t&1024)!==0)throw Error(v(163))}if(l=a.sibling,l!==null){l.return=a.return,xe=l;break}xe=a.return}}function mf(e,a,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Ba(e,n),l&4&&Ut(5,n);break;case 1:if(Ba(e,n),l&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(o){ne(n,n.return,o)}else{var t=el(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(t,a,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ne(n,n.return,o)}}l&64&&ef(n),l&512&&Ca(n,n.return);break;case 3:if(Ba(e,n),l&64&&(e=n.updateQueue,e!==null)){if(a=null,n.child!==null)switch(n.child.tag){case 27:case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}try{Vc(e,a)}catch(o){ne(n,n.return,o)}}break;case 27:a===null&&l&4&&tf(n);case 26:case 5:Ba(e,n),a===null&&l&4&&mr(n),l&512&&Ca(n,n.return);break;case 12:Ba(e,n);break;case 31:Ba(e,n),l&4&&gf(e,n);break;case 13:Ba(e,n),l&4&&hf(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zp.bind(null,n),Nb(e,n))));break;case 22:if(l=n.memoizedState!==null||Oe,!l){var u=a!==null&&a.memoizedState!==null||ee;a=Oe,t=ee,Oe=l,(ee=u)&&!t?(l=2,(n.subtreeFlags&8772)!==0&&(l|=1),Ea(e,n,l)):Ba(e,n),Oe=a,ee=t}break;case 30:Ba(e,n),l&512&&Ca(n,n.return);break;case 7:l&512&&Ca(n,n.return);default:Ba(e,n)}}function Tr(e,a){for(e=e.child;e!==null;)vf(e,a),e=e.sibling}function vf(e,a){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(a){var l=n.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var t=e.stateNode,u=e.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null;t.style.display=o==null||typeof o=="boolean"?"":(""+o).trim()}}catch(r){ne(e,e.return,r)}Nr(e,a);break;case 6:try{e.stateNode.nodeValue=a?"":e.memoizedProps,W=!0}catch(r){ne(e,e.return,r)}break;case 18:try{var i=e.stateNode;a?om(i,!0):om(e.stateNode,!1)}catch(r){ne(e,e.return,r)}break;case 22:case 23:e.memoizedState===null&&Tr(e,a);break;default:Tr(e,a)}}function Nr(e,a){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,l=a;switch(n.tag){case 4:vf(n,l);break e;case 22:n.memoizedState===null&&Nr(n,l);break e;default:Nr(n,l)}}e=e.sibling}}function pf(e){var a=e.alternate;a!==null&&(e.alternate=null,pf(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&fu(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var pe=null,Ke=!1;function za(e,a,n){for(n=n.child;n!==null;)bf(e,a,n),n=n.sibling}function bf(e,a,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(ut,n)}catch{}switch(n.tag){case 26:ee||Ye(n,a),za(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ee&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ee||Ye(n,a),Yt(n);var l=pe,t=Ke;xn(n.type)&&(pe=n.stateNode,Ke=!1),za(e,a,n),qm(n.stateNode,n.type,n.memoizedProps),pe=l,Ke=t;break;case 5:ee||Ye(n,a),Yt(n);case 6:if(n.tag===6&&Yt(n),l=pe,t=Ke,pe=null,za(e,a,n),pe=l,Ke=t,pe!==null)if(Ke)try{(pe.nodeType===9?pe.body:pe.nodeName==="HTML"?pe.ownerDocument.body:pe).removeChild(n.stateNode),W=!0}catch(u){ne(n,a,u)}else try{pe.removeChild(n.stateNode),W=!0}catch(u){ne(n,a,u)}break;case 18:pe!==null&&(Ke?(e=pe,um(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),et(e)):um(pe,n.stateNode));break;case 4:l=pe,t=Ke,pe=n.stateNode.containerInfo,Ke=!0,za(e,a,n),pe=l,Ke=t;break;case 0:case 11:case 14:case 15:Sn(2,n,a),ee||Sn(4,n,a),za(e,a,n);break;case 1:ee||(Ye(n,a),l=n.stateNode,typeof l.componentWillUnmount=="function"&&af(n,a,l)),za(e,a,n);break;case 21:za(e,a,n);break;case 22:ee=(l=ee)||n.memoizedState!==null,za(e,a,n),ee=l;break;case 30:Ye(n,a),za(e,a,n);break;case 7:ee||Ye(n,a),za(e,a,n);break;default:za(e,a,n)}}function gf(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{et(e)}catch(n){ne(a,a.return,n)}}}function hf(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{et(e)}catch(n){ne(a,a.return,n)}}function Cp(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new ff),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new ff),a;default:throw Error(v(435,e.tag))}}function ro(e,a){var n=Cp(e);a.forEach(function(l){if(!n.has(l)){n.add(l);var t=Jp.bind(null,e,l);l.then(t,t)}})}function Le(e,a,n){var l=a.deletions;if(l!==null)for(var t=0;t<l.length;t++){var u=l[t],o=e,i=a,r=i;e:for(;r!==null;){switch(r.tag){case 27:if(xn(r.type)){pe=r.stateNode,Ke=!1;break e}break;case 5:pe=r.stateNode,Ke=!1;break e;case 3:case 4:pe=r.stateNode.containerInfo,Ke=!0;break e}r=r.return}if(pe===null)throw Error(v(160));bf(o,i,u),pe=null,Ke=!1,o=u.alternate,o!==null&&(o.return=null),u.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)yf(a,e,n),a=a.sibling}var Sa=null;function yf(e,a,n){var l=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(t&4&&(l=e.updateQueue,l=l!==null?l.events:null,l!==null))for(var u=0;u<l.length;u++){var o=l[u];o.ref.impl=o.nextImpl}Le(a,e,n),Ge(e),t&4&&(Sn(3,e,e.return),Ut(3,e),Sn(5,e,e.return));break;case 1:Le(a,e,n),Ge(e),t&512&&(ee||l===null||Ye(l,l.return)),t&64&&Oe&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:if(u=Sa,Le(a,e,n),Ge(e),t&512&&(ee||l===null||Ye(l,l.return)),t&4)if(t=l!==null?l.memoizedState:null,n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null)if(Oe)e.stateNode=nm(e.type,e.memoizedProps,a.containerInfo,e);else{e:{a=e.type,n=e.memoizedProps,t=u.ownerDocument||u;a:switch(a){case"title":l=t.getElementsByTagName("title")[0],(!l||l[rt]||l[Me]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=t.createElement(a),t.head.insertBefore(l,t.querySelector("head > title"))),He(l,a,n),l[Me]=e,Ae(l),a=l;break e;case"link":if(u=Am("link","href",t).get(a+(n.href||""))){for(o=0;o<u.length;o++)if(l=u[o],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(o,1);break a}}l=t.createElement(a),He(l,a,n),t.head.appendChild(l);break;case"meta":if(u=Am("meta","content",t).get(a+(n.content||""))){for(o=0;o<u.length;o++)if(l=u[o],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(o,1);break a}}l=t.createElement(a),He(l,a,n),t.head.appendChild(l);break;default:throw Error(v(468,a))}l[Me]=e,Ae(l),a=l}e.stateNode=a}else Oe||ss(u,e.type,e.stateNode);else e.stateNode=Nm(u,n,e.memoizedProps);else t!==n?(t===null?(a=l.stateNode,a===null||ee||a.parentNode.removeChild(a)):t.count--,n===null?Oe||ss(u,e.type,e.stateNode):Nm(u,n,e.memoizedProps)):n===null&&e.stateNode!==null&&vr(e,e.memoizedProps,l.memoizedProps);break;case 27:Le(a,e,n),Ge(e),t&512&&(ee||l===null||Ye(l,l.return)),l!==null&&t&4&&vr(e,e.memoizedProps,l.memoizedProps);break;case 5:if(u=Ha,Ha=!1,Le(a,e,n),Ha=u,Ge(e),t&512&&(ee||l===null||Ye(l,l.return)),e.flags&32){a=e.stateNode;try{gl(a,""),W=!0}catch(b){ne(e,e.return,b)}}t&4&&e.stateNode!=null&&(a=e.memoizedProps,vr(e,a,l!==null?l.memoizedProps:a)),t&1024&&(Sr=!0);break;case 6:if(Le(a,e,n),Ge(e),t&4){if(e.stateNode===null)throw Error(v(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a,W=!0}catch(b){ne(e,e.return,b)}}break;case 3:if(W=!1,To=null,u=Sa,Sa=Jt(a.containerInfo),Le(a,e,n),Sa=u,Ge(e),t&4&&l!==null&&l.memoizedState.isDehydrated)try{et(a.containerInfo)}catch(b){ne(e,e.return,b)}Sr&&(Sr=!1,qf(e)),W=!1;break;case 4:t=Ha,Ha=Oe,l=Qs(),u=Sa,Sa=Jt(e.stateNode.containerInfo),Le(a,e,n),Ge(e),Sa=u,W&&Ht&&(oo=!0),W=l,Ha=t;break;case 12:Le(a,e,n),Ge(e);break;case 31:Le(a,e,n),Ge(e),t&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ro(e,a)));break;case 13:Le(a,e,n),Ge(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(fo=Fe()),t&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ro(e,a)));break;case 22:u=e.memoizedState!==null,o=l!==null&&l.memoizedState!==null;var i=Oe,r=ee,f=Ha;Oe=i||u,Ha=f||u,ee=r||o,Le(a,e,n),ee=r,Ha=f,Oe=i,Ge(e),t&8192&&(a=e.stateNode,a._visibility=u?a._visibility&-2:a._visibility|1,!u||l===null||o||Oe||ee||(a=o||ee,n=Oe,l=ee,Oe=u||Oe,ee=a,En(e,2),Oe=n,ee=l),!u&&Ha||Tr(e,u)),t&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ro(e,n))));break;case 19:Le(a,e,n),Ge(e),t&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ro(e,a)));break;case 30:t&512&&(ee||l===null||Ye(l,l.return)),t=Qs(),u=Ht,o=(n&335544064)===n,i=e.memoizedProps,Ht=o&&Ka(i.default,i.update)!=="none",Le(a,e,n),Ge(e),o&&l!==null&&W&&(e.flags|=4),Ht=u,W=t;break;case 21:break;case 7:t&512&&(ee||l===null||Ye(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=e);default:Le(a,e,n),Ge(e)}}function Ge(e){var a=e.flags;if(a&2){try{for(var n,l=e.return;l!==null;){if(lf(l)){n=l;break}l=l.return}l=null;for(var t=e.return;t!==null;){if(fr(t)){var u=t.stateNode;l===null?l=[u]:l.push(u)}if(dr(t))break;t=t.return}var o=l;if(n==null)throw Error(v(160));switch(n.tag){case 27:var i=n.stateNode,r=pr(e);no(e,r,i,o);break;case 5:var f=n.stateNode;n.flags&32&&(gl(f,""),n.flags&=-33);var b=pr(e);no(e,b,f,o);break;case 3:case 4:var h=n.stateNode.containerInfo,c=pr(e);br(e,c,h,o);break;default:throw Error(v(161))}}catch(p){ne(e,e.return,p)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function qf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;qf(a),a.tag===5&&a.flags&1024&&(a=a.stateNode,Il=!0,a.reset(),Il=!1),e=e.sibling}}function Hl(e,a){if(a.subtreeFlags&9270)for(a=a.child;a!==null;)zf(a,e),a=a.sibling;else df(a)}function zf(e,a){var n=e.alternate;if(n===null)gr(e,!1);else switch(e.tag){case 3:if(Er=Ra=!1,of(),Hl(a,e),!Ra&&!oo){if(e=Ua,e!==null)for(var l=0;l<e.length;l+=3){n=e[l];var t=e[l+1];rm(n,e[l+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+t+")"})}e=a.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Er=!0}Ua=null;break;case 5:Hl(a,e);break;case 4:l=Ra,Ra=!1,Hl(a,e),Ra&&(oo=!0),Ra=l;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?gr(e,!1):Hl(a,e));break;case 30:l=Ra,t=of(),Ra=!1,Hl(a,e),Ra&&(e.flags|=4);var u=e.memoizedProps,o=e.stateNode;a=Ja(u,o),o=Ja(n.memoizedProps,o);var i=Ka(u.default,u.update);i==="none"?a=!1:(u=n.memoizedState,n.memoizedState=null,n=e.child,Je=0,a=zr(e,n,a,o,i,u,!0),Je!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&a?(Vl(e,e.memoizedProps.onUpdate),Ua=t):t!==null&&(t.push.apply(t,Ua),Ua=t),Ra=(e.flags&32)!==0?!0:l;break;default:Hl(a,e)}}function Ba(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)mf(e,a.alternate,a),a=a.sibling}function En(e,a){for(e=e.child;e!==null;){var n=e,l=a;switch(n.tag){case 0:case 11:case 14:case 15:Sn(4,n,n.return),En(n,l);break;case 1:Ye(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&af(n,n.return,t),En(n,l);break;case 27:(l&2)!==0&&qm(n.stateNode,n.type,n.memoizedProps);case 5:Ye(n,n.return),n.tag!==5&&n.tag!==27||Yt(n),En(n,l);break;case 6:Yt(n);break;case 26:Ye(n,n.return),t=n.stateNode,n.memoizedState!==null||t===null||ee||t.parentNode.removeChild(t),En(n,l);break;case 22:n.memoizedState===null&&En(n,l);break;case 30:Ye(n,n.return),En(n,l);break;case 7:Ye(n,n.return);default:En(n,l)}e=e.sibling}}function Ea(e,a,n){for(n=(a.subtreeFlags&8772)!==0?n:n&-2,a=a.child;a!==null;){var l=a.alternate,t=e,u=a,o=u.flags,i=(n&1)!==0;switch(u.tag){case 0:case 11:case 15:Ea(t,u,n),Ut(4,u);break;case 1:if(Ea(t,u,n),l=u,t=l.stateNode,typeof t.componentDidMount=="function")try{t.componentDidMount()}catch(b){ne(l,l.return,b)}if(l=u,t=l.updateQueue,t!==null){var r=l.stateNode;try{var f=t.shared.hiddenCallbacks;if(f!==null)for(t.shared.hiddenCallbacks=null,t=0;t<f.length;t++)Xc(f[t],r)}catch(b){ne(l,l.return,b)}}i&&o&64&&ef(u),Ca(u,u.return);break;case 27:(n&2)!==0&&tf(u);case 5:u.tag!==5&&u.tag!==27||nf(u),Ea(t,u,n),i&&l===null&&o&4&&mr(u),Ca(u,u.return);break;case 6:nf(u);break;case 26:r=u.stateNode,u.memoizedState!==null||r===null||Oe||ss(Jt(r.ownerDocument),u.type,r),Ea(t,u,n),i&&l===null&&o&4&&mr(u),Ca(u,u.return);break;case 12:Ea(t,u,n);break;case 31:Ea(t,u,n),i&&o&4&&gf(t,u);break;case 13:Ea(t,u,n),i&&o&4&&hf(t,u);break;case 22:u.memoizedState===null&&Ea(t,u,n),Ca(u,u.return);break;case 30:Ea(t,u,n),Ca(u,u.return);break;case 7:Ca(u,u.return);default:Ea(t,u,n)}a=a.sibling}}function Ar(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&zt(n))}function Dr(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&zt(e))}function ma(e,a,n,l){var t=(n&335544064)===n;if(a.subtreeFlags&(t?10262:10256))for(a=a.child;a!==null;)Sf(e,a,n,l),a=a.sibling;else t&&cf(a)}function Sf(e,a,n,l){var t=(n&335544064)===n;t&&a.alternate===null&&a.return!==null&&a.return.alternate!==null&&uo(a);var u=a.flags;switch(a.tag){case 0:case 11:case 15:ma(e,a,n,l),u&2048&&Ut(9,a);break;case 1:ma(e,a,n,l);break;case 3:ma(e,a,n,l),t&&Er&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,a.alternate!==null&&(u=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==u&&(a.refCount++,u!=null&&zt(u)));break;case 12:if(u&2048){ma(e,a,n,l),u=a.stateNode;try{var o=a.memoizedProps,i=o.id,r=o.onPostCommit;typeof r=="function"&&r(i,a.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(f){ne(a,a.return,f)}}else ma(e,a,n,l);break;case 31:ma(e,a,n,l);break;case 13:ma(e,a,n,l);break;case 23:break;case 22:o=a.stateNode,i=a.alternate,a.memoizedState!==null?(t&&i!==null&&i.memoizedState===null&&uo(i),o._visibility&2?ma(e,a,n,l):Rt(e,a)):(t&&i!==null&&i.memoizedState!==null&&uo(a),o._visibility&2?ma(e,a,n,l):(o._visibility|=2,Rl(e,a,n,l,(a.subtreeFlags&10256)!==0||!1))),u&2048&&Ar(i,a);break;case 24:ma(e,a,n,l),u&2048&&Dr(a.alternate,a);break;case 30:t&&(u=a.alternate,u!==null&&(Ya(u.child,!0),Ya(a.child,!0))),ma(e,a,n,l);break;default:ma(e,a,n,l)}}function Rl(e,a,n,l,t){for(t=t&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var u=e,o=a,i=n,r=l,f=o.flags;switch(o.tag){case 0:case 11:case 15:Rl(u,o,i,r,t),Ut(8,o);break;case 23:break;case 22:var b=o.stateNode;o.memoizedState!==null?b._visibility&2?Rl(u,o,i,r,t):Rt(u,o):(b._visibility|=2,Rl(u,o,i,r,t)),t&&f&2048&&Ar(o.alternate,o);break;case 24:Rl(u,o,i,r,t),t&&f&2048&&Dr(o.alternate,o);break;default:Rl(u,o,i,r,t)}a=a.sibling}}function Rt(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,l=a,t=l.flags;switch(l.tag){case 22:Rt(n,l),t&2048&&Ar(l.alternate,l);break;case 24:Rt(n,l),t&2048&&Dr(l.alternate,l);break;default:Rt(n,l)}a=a.sibling}}var al=8192;function nl(e,a,n){if(e.subtreeFlags&al)for(e=e.child;e!==null;)Ef(e,a,n),e=e.sibling}function Ef(e,a,n){switch(e.tag){case 26:nl(e,a,n),e.flags&al&&(e.memoizedState!==null?Qb(n,Sa,e.memoizedState,e.memoizedProps):(e=e.stateNode,(a&335544128)===a&&_m(n,e)));break;case 5:nl(e,a,n),e.flags&al&&(e=e.stateNode,(a&335544128)===a&&_m(n,e));break;case 3:case 4:var l=Sa;Sa=Jt(e.stateNode.containerInfo),nl(e,a,n),Sa=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=al,al=16777216,nl(e,a,n),al=l):nl(e,a,n));break;case 30:if((e.flags&al)!==0&&(l=e.memoizedProps.name,l!=null&&l!=="auto")){var t=e.stateNode;t.paired=null,aa===null&&(aa=new Map),aa.set(l,t)}nl(e,a,n);break;default:nl(e,a,n)}}function Tf(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Bt(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var l=a[n];xe=l,Af(l,e)}Tf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nf(e),e=e.sibling}function Nf(e){switch(e.tag){case 0:case 11:case 15:Bt(e),e.flags&2048&&Sn(9,e,e.return);break;case 3:Bt(e);break;case 12:Bt(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,so(e)):Bt(e);break;default:Bt(e)}}function so(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var l=a[n];xe=l,Af(l,e)}Tf(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Sn(8,a,a.return),so(a);break;case 22:n=a.stateNode,n._visibility&2&&(n._visibility&=-3,so(a));break;default:so(a)}e=e.sibling}}function Af(e,a){for(;xe!==null;){var n=xe;switch(n.tag){case 0:case 11:case 15:Sn(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:zt(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,xe=l;else e:for(n=e;xe!==null;){l=xe;var t=l.sibling,u=l.return;if(pf(l),l===n){xe=null;break e}if(t!==null){t.return=u,xe=t;break e}xe=u}}}var Up={getCacheForType:function(e){var a=je(ze),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n},cacheSignal:function(){return je(ze).controller.signal}},Yp=typeof WeakMap=="function"?WeakMap:Map,I=0,re=null,V=null,J=0,ae=0,na=null,Tn=!1,Bl=!1,Or=!1,an=0,he=0,Nn=0,ll=0,co=0,la=0,Ql=0,Qt=null,we=null,xr=!1,fo=0,Df=0,mo=1/0,vo=null,An=null,be=0,Ta=null,tl=null,Qa=0,_r=0,Mr=null,Of=null,Ll=null,Gl=null,Xl=null,Lt=0,po=null;function ta(){return(I&2)!==0&&J!==0?J&-J:U.T!==null?Gr():_s()}function xf(){if(la===0)if((J&536870912)===0||X){var e=ru;ru<<=1,(ru&3932160)===0&&(ru=262144),la=e}else la=536870912;return e=Ce.current,e!==null&&(e.flags|=32),la}function Vl(e,a){if(a!=null){var n=e.stateNode,l=n.ref;l===null&&(l=n.ref=sm(Ja(e.memoizedProps,n))),Gl===null&&(Gl=[]),Gl.push(a.bind(null,l))}}function ke(e,a,n){(e===re&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(Zl(e,0),Dn(e,J,la,!1)),it(e,n),((I&2)===0||e!==re)&&(e===re&&((I&2)===0&&(ll|=n),he===4&&Dn(e,J,la,!1)),La(e))}function _f(e,a,n){if((I&6)!==0)throw Error(v(327));var l=!n&&(a&127)===0&&(a&e.expiredLanes)===0||ot(e,a),t=l?Bp(e,a):Cr(e,a,!0),u=l;do{if(t===0){Bl&&!l&&Dn(e,a,0,!1);break}else{if(n=e.current.alternate,u&&!Hp(n)){t=Cr(e,a,!1),u=!1;continue}if(t===2){if(u=a,e.errorRecoveryDisabledLanes&u)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;e:{var i=e;t=Qt;var r=i.current.memoizedState.isDehydrated;if(r&&(Zl(i,o).flags|=256),o=Cr(i,o,!1),o!==2&&o!==6){if(Or&&!r){i.errorRecoveryDisabledLanes|=u,ll|=u,t=4;break e}u=we,we=t,u!==null&&(we===null?we=u:we.push.apply(we,u))}t=o}if(u=!1,t!==2)continue}}if(t===1){Zl(e,0),Dn(e,a,0,!0);break}e:{switch(l=e,u=t,u){case 0:case 1:throw Error(v(345));case 4:if((a&4194048)!==a&&(a&62914560)!==a)break;case 6:Dn(l,a,la,!Tn);break e;case 2:we=null;break;case 3:case 5:break;default:throw Error(v(329))}if((a&62914560)===a&&(t=fo+300-Fe(),10<t)){if(Dn(l,a,la,!Tn),cu(l,0,!0)!==0)break e;Qa=a,l.timeoutHandle=Pr(Mf.bind(null,l,n,we,vo,xr,a,la,ll,Ql,Tn,u,"Throttled",-0,0),t);break e}Mf(l,n,we,vo,xr,a,la,ll,Ql,Tn,u,null,-0,0)}}break}while(!0);La(e)}function Mf(e,a,n,l,t,u,o,i,r,f,b,h,c,p){e.timeoutHandle=-1;var q=a.subtreeFlags,O=(u&335544064)===u;if(h=null,(O||q&8192||(q&16785408)===16785408)&&(h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_a},aa=null,Ef(a,u,h),O&&(q=h,O=e.containerInfo,O=(O.nodeType===9?O:O.ownerDocument).__reactViewTransition,O!=null&&(q.count++,q.waitingForViewTransition=!0,q=kt.bind(q),O.finished.then(q,q))),q=(u&62914560)===u?fo-Fe():(u&4194048)===u?Df-Fe():0,q=Lb(h,q),q!==null)){Qa=u,e.cancelPendingCommit=q(Qf.bind(null,e,a,u,n,l,t,o,i,r,f,b,h,null,c,p)),Dn(e,u,o,!f);return}Qf(e,a,u,n,l,t,o,i,r,f,b,h)}function Hp(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var t=n[l],u=t.getSnapshot;t=t.value;try{if(!Ie(u(),t))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Dn(e,a,n,l){a=Ns(e,a),a&=~co,a&=~ll,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var t=a;0<t;){var u=31-$e(t),o=1<<u;l[u]=-1,t&=~o}n!==0&&Ds(e,n,a)}function bo(){return(I&6)===0?(Gt(0),!1):!0}function jr(){if(V!==null){if(ae===0)var e=V.return;else e=V,Fa=Jn=null,Li(e),_l=null,Tt=0,e=V;for(;e!==null;)Id(e.alternate,e),e=e.return;V=null}}function Zl(e,a){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,ob(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qa=0,jr(),re=e,V=n=wa(e.current,null),J=a,ae=0,na=null,Tn=!1,Bl=ot(e,a),Or=!1,Ql=la=co=ll=Nn=he=0,we=Qt=null,xr=!1,an=Ns(e,a),Eu(),n}function jf(e,a){B=null,U.H=ku,a===xl||a===Uu?(a=Bc(),ae=3):a===Di?(a=Bc(),ae=4):ae=a===ar?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,na=a,V===null&&(he=1,Fu(e,sa(a,e.current)))}function Cf(){var e=Ce.current;return e===null?!0:(J&4194048)===J?Re===null:(J&62914560)===J||(J&536870912)!==0?e===Re:!1}function Uf(){var e=U.H;return U.H=ku,e===null?ku:e}function Yf(){var e=U.A;return U.A=Up,e}function go(){he=4,Tn||(J&4194048)!==J&&Ce.current!==null||(Bl=!0),(Nn&134217727)===0&&(ll&134217727)===0||re===null||Dn(re,J,la,!1)}function Cr(e,a,n){var l=I;I|=2;var t=Uf(),u=Yf();(re!==e||J!==a)&&(vo=null,Zl(e,a)),a=!1;var o=he;e:do try{if(ae!==0&&V!==null){var i=V,r=na;switch(ae){case 8:jr(),o=6;break e;case 3:case 2:case 9:case 6:Ce.current===null&&(a=!0);var f=ae;if(ae=0,na=null,Jl(e,i,r,f),n&&Bl){o=0;break e}break;default:f=ae,ae=0,na=null,Jl(e,i,r,f)}}Rp(),o=he;break}catch(b){jf(e,b)}while(!0);return a&&e.shellSuspendCounter++,Fa=Jn=null,I=l,U.H=t,U.A=u,V===null&&(re=null,J=0,Eu()),o}function Rp(){for(;V!==null;)Hf(V)}function Bp(e,a){var n=I;I|=2;var l=Uf(),t=Yf();re!==e||J!==a?(vo=null,mo=Fe()+500,Zl(e,a)):Bl=ot(e,a);e:do try{if(ae!==0&&V!==null){a=V;var u=na;a:switch(ae){case 1:ae=0,na=null,Jl(e,a,u,1);break;case 2:case 9:if(Hc(u)){ae=0,na=null,Rf(a);break}a=function(){ae!==2&&ae!==9||re!==e||(ae=7),La(e)},u.then(a,a);break e;case 3:ae=7;break e;case 4:ae=5;break e;case 7:Hc(u)?(ae=0,na=null,Rf(a)):(ae=0,na=null,Jl(e,a,u,7));break;case 5:var o=null;switch(V.tag){case 26:o=V.memoizedState;case 5:case 27:var i=V;if(o?Om(o):i.stateNode.complete){ae=0,na=null;var r=i.sibling;if(r!==null)V=r;else{var f=i.return;f!==null?(V=f,ho(f)):V=null}break a}}ae=0,na=null,Jl(e,a,u,5);break;case 6:ae=0,na=null,Jl(e,a,u,6);break;case 8:jr(),he=6;break e;default:throw Error(v(462))}}Qp();break}catch(b){jf(e,b)}while(!0);return Fa=Jn=null,U.H=l,U.A=t,I=n,V!==null?0:(re=null,J=0,Eu(),he)}function Qp(){for(;V!==null&&!nv();)Hf(V)}function Hf(e){var a=$d(e.alternate,e,an);e.memoizedProps=e.pendingProps,a===null?ho(e):V=a}function Rf(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=Zd(n,a,a.pendingProps,a.type,void 0,J);break;case 11:a=Zd(n,a,a.pendingProps,a.type.render,a.ref,J);break;case 5:Li(a);var l=a;l===De&&(X?(xu(l),l.tag===5&&l.stateNode!=null&&(de=l.stateNode)):(xu(l),X=!0));default:Id(n,a),a=V=Nc(a,an),a=$d(n,a,an)}e.memoizedProps=e.pendingProps,a===null?ho(e):V=a}function Jl(e,a,n,l){Fa=Jn=null,Li(a),_l=null,Tt=0;var t=a.return;try{if(Ap(e,t,a,n,J)){he=1,Fu(e,sa(n,e.current)),V=null;return}}catch(u){if(t!==null)throw V=t,u;he=1,Fu(e,sa(n,e.current)),V=null;return}a.flags&32768?(X||l===1?e=!0:Bl||(J&536870912)!==0?e=!1:(Tn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ce.current,l!==null&&l.tag===13&&(l.flags|=16384))),Bf(a,e)):ho(a)}function ho(e){var a=e;do{if((a.flags&32768)!==0){Bf(a,Tn);return}e=a.return;var n=_p(a.alternate,a,an);if(n!==null){V=n;return}if(a=a.sibling,a!==null){V=a;return}V=a=e}while(a!==null);he===0&&(he=5)}function Bf(e,a){do{var n=Mp(e.alternate,e);if(n!==null){n.flags&=32767,V=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){V=e;return}V=e=n}while(e!==null);he=6,V=null}function Qf(e,a,n,l,t,u,o,i,r,f,b,h){e.cancelPendingCommit=null;do yo();while(be!==0);if((I&6)!==0)throw Error(v(327));if(a!==null){if(a===e.current)throw Error(v(177));e===re&&(V=re=null,J=0),tl=a,Ta=e,Qa=n,Mr=t,Of=l,Lp(e,a,n,o,i,r,h)}}function Lp(e,a,n,l,t,u,o){var i=a.lanes|a.childLanes;if(_r=i,i|=vi,fv(e,n,i,l,t,u),Gl=null,(n&335544064)===n?(Xl=vp(e),l=10262):(Xl=null,l=10256),(a.subtreeFlags&l)!==0||(a.flags&l)!==0?(e.callbackNode=null,e.callbackPriority=0,Kp(ou,function(){return Rr(),null})):(e.callbackNode=null,e.callbackPriority=0),lo=!1,l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=U.T,U.T=null,t=P.p,P.p=2,u=I,I|=4;try{jp(e,a,n)}finally{I=u,P.p=t,U.T=l}}be=1,lo?Ll=fb(o,e.containerInfo,Xl,Ur,Yr,Xp,Hr,Rr,Gp):(Ur(),Yr(),Hr())}function Gp(e){if(be!==0){var a=Ta.onRecoverableError;a(e,{componentStack:null})}}function Xp(){be===3&&(be=0,zf(tl,Ta),be=4)}function Ur(){if(be===1){be=0;var e=Ta,a=tl,n=Qa,l=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||l){l=U.T,U.T=null;var t=P.p;P.p=2;var u=I;I|=4;try{Ht=oo=!1,yf(a,e,n),n=Fr;var o=pc(e.containerInfo),i=n.focusedElem,r=n.selectionRange;if(o!==i&&i&&i.ownerDocument&&vc(i.ownerDocument.documentElement,i)){if(r!==null&&si(i)){var f=r.start,b=r.end;if(b===void 0&&(b=f),"selectionStart"in i)i.selectionStart=f,i.selectionEnd=Math.min(b,i.value.length);else{var h=i.ownerDocument||document,c=h&&h.defaultView||window;if(c.getSelection){var p=c.getSelection(),q=i.textContent.length,O=Math.min(r.start,q),Q=r.end===void 0?O:Math.min(r.end,q);!p.extend&&O>Q&&(o=Q,Q=O,O=o);var d=mc(i,O),s=mc(i,Q);if(d&&s&&(p.rangeCount!==1||p.anchorNode!==d.node||p.anchorOffset!==d.offset||p.focusNode!==s.node||p.focusOffset!==s.offset)){var m=h.createRange();m.setStart(d.node,d.offset),p.removeAllRanges(),O>Q?(p.addRange(m),p.extend(s.node,s.offset)):(m.setEnd(s.node,s.offset),p.addRange(m))}}}}for(h=[],p=i;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<h.length;i++){var g=h[i];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Il=!!kr,Fr=kr=null}finally{I=u,P.p=t,U.T=l}}e.current=a,be=2}}function Yr(){if(be===2){be=0;var e=Ta,a=tl,n=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||n){n=U.T,U.T=null;var l=P.p;P.p=2;var t=I;I|=4;try{mf(e,a.alternate,a)}finally{I=t,P.p=l,U.T=n}}be=3}}function Hr(){if(be===4||be===3){be=0;var e=Ll;Ll=null,lv();var a=Ta,n=tl,l=Qa,t=Of,u=(l&335544064)===l?10262:10256;if((n.subtreeFlags&u)!==0||(n.flags&u)!==0?be=5:(be=0,tl=Ta=null,Lf(a,a.pendingLanes)),u=a.pendingLanes,u===0&&(An=null),Jo(l),n=n.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(t!==null){n=U.T,u=P.p,P.p=2,U.T=null;try{for(var o=a.onRecoverableError,i=0;i<t.length;i++){var r=t[i];o(r.value,{componentStack:r.stack})}}finally{U.T=n,P.p=u}}if(t=Gl,o=Xl,Xl=null,t!==null&&(Gl=null,o===null&&(o=[]),e!==null))for(r=0;r<t.length;r++)n=(0,t[r])(o),n!==void 0&&e.finished.finally(n);(Qa&3)!==0&&yo(),La(a),u=a.pendingLanes,(l&261930)!==0&&(u&42)!==0?a===po?Lt++:(Lt=0,po=a):(Lt=0,po=null),Gt(0)}}function Lf(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,zt(a)))}function yo(){return Ll!==null&&(Ll.skipTransition(),Ll=null),Ur(),Yr(),Hr(),Rr()}function Rr(){if(be!==5)return!1;var e=Ta,a=_r;_r=0;var n=Jo(Qa),l=U.T,t=P.p;try{P.p=32>n?32:n,U.T=null,n=Mr,Mr=null;var u=Ta,o=Qa;if(be=0,tl=Ta=null,Qa=0,(I&6)!==0)throw Error(v(331));var i=I;if(I|=4,Nf(u.current),Sf(u,u.current,o,n),I=i,Gt(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(ut,u)}catch{}return!0}finally{P.p=t,U.T=l,Lf(e,a)}}function Gf(e,a,n){a=sa(n,a),a=er(e.stateNode,a,2),e=hn(e,a,2),e!==null&&(it(e,2),La(e))}function ne(e,a,n){if(e.tag===3)Gf(e,e,n);else for(;a!==null;){if(a.tag===3){Gf(a,e,n);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(An===null||!An.has(l))){e=sa(n,e),n=Hd(2),l=hn(a,n,2),l!==null&&(Rd(n,l,a,e),it(l,2),La(l));break}}a=a.return}}function Br(e,a,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Yp;var t=new Set;l.set(a,t)}else t=l.get(a),t===void 0&&(t=new Set,l.set(a,t));t.has(n)||(Or=!0,t.add(n),e=Vp.bind(null,e,a,n),a.then(e,e))}function Vp(e,a,n){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,re===e&&(J&n)===n&&((he===4||he===3&&(J&62914560)===J&&300>Fe()-fo)&&(I&2)===0?Zl(e,0):co|=n,Ql===J&&(Ql=0)),La(e)}function Xf(e,a){a===0&&(a=As()),e=Xn(e,a),e!==null&&(it(e,a),La(e))}function Zp(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),Xf(e,n)}function Jp(e,a){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,t=e.memoizedState;t!==null&&(n=t.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(v(314))}l!==null&&l.delete(a),Xf(e,n)}function Kp(e,a){return Go(e,a)}var Kl=null,wl=null,Qr=!1,qo=!1,Lr=!1,On=0;function La(e){e!==wl&&e.next===null&&(wl===null?Kl=wl=e:wl=wl.next=e),qo=!0,Qr||(Qr=!0,kp())}function Gt(e,a){if(!Lr&&qo){Lr=!0;do for(var n=!1,l=Kl;l!==null;){if(e!==0){var t=l.pendingLanes;if(t===0)var u=0;else{var o=l.suspendedLanes,i=l.pingedLanes;u=(1<<31-$e(42|e)+1)-1,u&=t&~(o&~i),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Kf(l,u))}else u=J,u=cu(l,l===re?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||ot(l,u)||(n=!0,Kf(l,u));l=l.next}while(n);Lr=!1}}function wp(){Vf()}function Vf(){qo=Qr=!1;var e=0;On!==0&&ub()&&(e=On);for(var a=Fe(),n=null,l=Kl;l!==null;){var t=l.next,u=Zf(l,a);u===0?(l.next=null,n===null?Kl=t:n.next=t,t===null&&(wl=n)):(n=l,(e!==0||(u&3)!==0)&&(qo=!0)),l=t}be!==0&&be!==5||Gt(e),On!==0&&(On=0)}function Zf(e,a){for(var n=e.suspendedLanes,l=e.pingedLanes,t=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var o=31-$e(u),i=1<<o,r=t[o];r===-1?((i&n)===0||(i&l)!==0)&&(t[o]=dv(i,a)):r<=a&&(e.expiredLanes|=i),u&=~i}if(a=re,n=J,n=cu(e,e===a?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===a&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Xo(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ot(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(l!==null&&Xo(l),Jo(n)){case 2:case 8:n=Es;break;case 32:n=ou;break;case 268435456:n=Ts;break;default:n=ou}return l=Jf.bind(null,e),n=Go(n,l),e.callbackPriority=a,e.callbackNode=n,a}return l!==null&&l!==null&&Xo(l),e.callbackPriority=2,e.callbackNode=null,2}function Jf(e,a){if(be!==0&&be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(yo()&&e.callbackNode!==n)return null;var l=J;return l=cu(e,e===re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(_f(e,l,a),Zf(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?Jf.bind(null,e):null)}function Kf(e,a){if(yo())return null;_f(e,a,!0)}function kp(){ib(function(){(I&6)!==0?Go(Ss,wp):Vf()})}function Gr(){if(On===0){var e=kn;e===0&&(e=iu,iu<<=1,(iu&261888)===0&&(iu=256)),On=e}return On}function wf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pu(e)}function Fp(e,a,n,l,t){if(a==="submit"&&n&&n.stateNode===t){var u=wf((t[Ve]||null).action),o=l.submitter;o&&(a=(a=o[Ve]||null)?wf(a.formAction):o.getAttribute("formAction"),a!==null&&(u=a,o=null));var i=new yu("action","action",null,l,t);e.push({event:i,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(On!==0){var r=new FormData(t,o);Fi(n,{pending:!0,data:r,method:t.method,action:u},null,r)}}else typeof u=="function"&&(i.preventDefault(),r=new FormData(t,o),Fi(n,{pending:!0,data:r,method:t.method,action:u},u,r))},currentTarget:t}]})}}for(var Xr=0;Xr<mi.length;Xr++){var Vr=mi[Xr],Wp=Vr.toLowerCase(),$p=Vr[0].toUpperCase()+Vr.slice(1);qa(Wp,"on"+$p)}qa(hc,"onAnimationEnd"),qa(yc,"onAnimationIteration"),qa(qc,"onAnimationStart"),qa("dblclick","onDoubleClick"),qa("focusin","onFocus"),qa("focusout","onBlur"),qa(op,"onTransitionRun"),qa(ip,"onTransitionStart"),qa(rp,"onTransitionCancel"),qa(zc,"onTransitionEnd"),pl("onMouseEnter",["mouseout","mouseover"]),pl("onMouseLeave",["mouseout","mouseover"]),pl("onPointerEnter",["pointerout","pointerover"]),pl("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xt));function kf(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],t=l.event;l=l.listeners;e:{var u=void 0;if(a)for(var o=l.length-1;0<=o;o--){var i=l[o],r=i.instance,f=i.currentTarget;if(i=i.listener,r!==u&&t.isPropagationStopped())break e;u=i,t.currentTarget=f;try{u(t)}catch(b){Su(b)}t.currentTarget=null,u=r}else for(o=0;o<l.length;o++){if(i=l[o],r=i.instance,f=i.currentTarget,i=i.listener,r!==u&&t.isPropagationStopped())break e;u=i,t.currentTarget=f;try{u(t)}catch(b){Su(b)}t.currentTarget=null,u=r}}}}function Z(e,a){var n=a[js];n===void 0&&(n=a[js]=new Set);var l=e+"__bubble";n.has(l)||(Ff(a,e,2,!1),n.add(l))}function Zr(e,a,n){var l=0;a&&(l|=4),Ff(n,e,l,a)}var zo="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[zo]){e[zo]=!0,Ys.forEach(function(n){n!=="selectionchange"&&(Pp.has(n)||Zr(n,!1,e),Zr(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[zo]||(a[zo]=!0,Zr("selectionchange",!1,a))}}function Ff(e,a,n,l){switch(Bm(a)){case 2:var t=Zb;break;case 8:t=Jb;break;default:t=ds}n=t.bind(null,a,n,e),t=void 0,!Io||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(t=!0),l?t!==void 0?e.addEventListener(a,n,{capture:!0,passive:t}):e.addEventListener(a,n,!0):t!==void 0?e.addEventListener(a,n,{passive:t}):e.addEventListener(a,n,!1)}function Kr(e,a,n,l,t){var u=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var i=l.stateNode.containerInfo;if(i===t)break;if(o===4)for(o=l.return;o!==null;){var r=o.tag;if((r===3||r===4)&&o.stateNode.containerInfo===t)return;o=o.return}for(;i!==null;){if(o=Bn(i),o===null)return;if(r=o.tag,r===5||r===6||r===26||r===27){l=u=o;continue e}i=i.parentNode}}l=l.return}ks(function(){var f=u,b=$o(n),h=[];e:{var c=Sc.get(e);if(c!==void 0){var p=yu,q=e;switch(e){case"keypress":if(gu(n)===0)break e;case"keydown":case"keyup":p=Hv;break;case"focusin":q="focus",p=li;break;case"focusout":q="blur",p=li;break;case"beforeblur":case"afterblur":p=li;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Gv;break;case hc:case yc:case qc:p=Dv;break;case zc:p=Vv;break;case"scroll":case"scrollend":p=Sv;break;case"wheel":p=Jv;break;case"copy":case"cut":case"paste":p=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Is;break;case"submit":p=Qv;break;case"toggle":case"beforetoggle":p=wv}var O=(a&4)!==0,Q=!O&&(e==="scroll"||e==="scrollend"),d=O?c!==null?c+"Capture":null:c;O=[];for(var s=f,m;s!==null;){var g=s;if(m=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||m===null||d===null||(g=ct(s,d),g!=null&&O.push(Vt(s,g,m))),Q)break;s=s.return}0<O.length&&(c=new p(c,q,null,n,b),h.push({event:c,listeners:O}))}}if((a&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",c=e==="mouseout"||e==="pointerout",p&&n!==Wo&&(q=n.relatedTarget||n.fromElement)&&(Bn(q)||q[fl]))break e;(c||p)&&(q=b.window===b?b:(p=b.ownerDocument)?p.defaultView||p.parentWindow:window,c?(p=n.relatedTarget||n.toElement,c=f,p=p?Bn(p):null,p!==null&&(Q=z(p),O=p.tag,p!==Q||O!==5&&O!==27&&O!==6)&&(p=null)):(c=null,p=f),c!==p&&(O=$s,g="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(O=Is,g="onPointerLeave",d="onPointerEnter",s="pointer"),Q=c==null?q:st(c),m=p==null?q:st(p),q=new O(g,s+"leave",c,n,b),q.target=Q,q.relatedTarget=m,g=null,Bn(b)===f&&(O=new O(d,s+"enter",p,n,b),O.target=m,O.relatedTarget=Q,g=O),Q=g,O=c&&p?Aa(c,p,Ip):null,c!==null&&Wf(h,q,c,O,!1),p!==null&&Q!==null&&Wf(h,Q,p,O,!0)))}e:{if(c=f?st(f):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var D=ic;else if(uc(c))if(rc)D=lp;else{D=ap;var K=ep}else p=c.nodeName,!p||p.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?f&&Fo(f.elementType)&&(D=ic):D=np;if(D&&(D=D(e,f))){oc(h,D,n,b);break e}K&&K(e,c,f)}switch(K=f?st(f):window,e){case"focusin":(uc(K)||K.contentEditable==="true")&&(zl=K,ci=f,ht=null);break;case"focusout":ht=ci=zl=null;break;case"mousedown":di=!0;break;case"contextmenu":case"mouseup":case"dragend":di=!1,bc(h,n,b);break;case"selectionchange":if(up)break;case"keydown":case"keyup":bc(h,n,b)}var x;if(ui)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else ql?lc(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(ec&&n.locale!=="ko"&&(ql||j!=="onCompositionStart"?j==="onCompositionEnd"&&ql&&(x=Fs()):(sn=b,ei="value"in sn?sn.value:sn.textContent,ql=!0)),K=So(f,j),0<K.length&&(j=new Ps(j,e,null,n,b),h.push({event:j,listeners:K}),x?j.data=x:(x=tc(n),x!==null&&(j.data=x)))),(x=Fv?Wv(e,n):$v(e,n))&&(j=So(f,"onBeforeInput"),0<j.length&&(K=new Ps("onBeforeInput","beforeinput",null,n,b),h.push({event:K,listeners:j}),K.data=x)),Fp(h,e,f,n,b)}kf(h,a)})}function Vt(e,a,n){return{instance:e,listener:a,currentTarget:n}}function So(e,a){for(var n=a+"Capture",l=[];e!==null;){var t=e,u=t.stateNode;if(t=t.tag,t!==5&&t!==26&&t!==27||u===null||(t=ct(e,n),t!=null&&l.unshift(Vt(e,t,u)),t=ct(e,a),t!=null&&l.push(Vt(e,t,u))),e.tag===3)return l;e=e.return}return[]}function Ip(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wf(e,a,n,l,t){for(var u=a._reactName,o=[];n!==null&&n!==l;){var i=n,r=i.alternate,f=i.stateNode;if(i=i.tag,r!==null&&r===l)break;i!==5&&i!==26&&i!==27||f===null||(r=f,t?(f=ct(n,u),f!=null&&o.unshift(Vt(n,f,r))):t||(f=ct(n,u),f!=null&&o.push(Vt(n,f,r)))),n=n.return}o.length!==0&&e.push({event:a,listeners:o})}var eb=/\r\n?/g,ab=/\u0000|\uFFFD/g;function $f(e){return(typeof e=="string"?e:""+e).replace(eb,`
`).replace(ab,"")}function Pf(e,a){return a=$f(a),$f(e)===a}function le(e,a,n,l,t,u){switch(n){case"children":if(typeof l=="string")a==="body"||a==="textarea"&&l===""||gl(e,l);else if(typeof l=="number"||typeof l=="bigint")a!=="body"&&gl(e,""+l);else return;break;case"className":vu(e,"class",l);break;case"tabIndex":vu(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":vu(e,n,l);break;case"style":Ks(e,l,u);return;case"data":if(a!=="object"){vu(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=pu(l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(a!=="input"&&le(e,a,"name",t.name,t,null),le(e,a,"formEncType",t.formEncType,t,null),le(e,a,"formMethod",t.formMethod,t,null),le(e,a,"formTarget",t.formTarget,t,null)):(le(e,a,"encType",t.encType,t,null),le(e,a,"method",t.method,t,null),le(e,a,"target",t.target,t,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=pu(l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=_a);return;case"onScroll":l!=null&&Z("scroll",e);return;case"onScrollEnd":l!=null&&Z("scrollend",e);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(v(61));if(n=l.__html,n!=null){if(t.children!=null)throw Error(v(60));(u!=null?u.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=pu(l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Z("beforetoggle",e),Z("toggle",e),mu(e,"popover",l);break;case"xlinkActuate":Va(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Va(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Va(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Va(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Va(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Va(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Va(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Va(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Va(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":mu(e,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=qv.get(n)||n,mu(e,n,l);else return}W=!0}function wr(e,a,n,l,t,u){switch(n){case"style":Ks(e,l,u);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(v(61));if(n=l.__html,n!=null){if(t.children!=null)throw Error(v(60));(u!=null?u.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof l=="string")gl(e,l);else if(typeof l=="number"||typeof l=="bigint")gl(e,""+l);else return;break;case"onScroll":l!=null&&Z("scroll",e);return;case"onScrollEnd":l!=null&&Z("scrollend",e);return;case"onClick":l!=null&&(e.onclick=_a);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Hs.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(t=n.endsWith("Capture"),u=n.slice(2,t?n.length-7:void 0),a=e[Ve]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(u,a,t),typeof l=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(u,l,t);break e}W=!0,n in e?e[n]=l:l===!0?e.setAttribute(n,""):mu(e,n,l)}return}W=!0}function He(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",e),Z("load",e);var l=!1,t=!1,u;for(u in n)if(n.hasOwnProperty(u)){var o=n[u];if(o!=null)switch(u){case"src":l=!0;break;case"srcSet":t=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(v(137,a));default:le(e,a,u,o,n,null)}}t&&le(e,a,"srcSet",n.srcSet,n,null),l&&le(e,a,"src",n.src,n,null);return;case"input":Z("invalid",e);var i=u=o=t=null,r=null,f=null;for(l in n)if(n.hasOwnProperty(l)){var b=n[l];if(b!=null)switch(l){case"name":t=b;break;case"type":o=b;break;case"checked":r=b;break;case"defaultChecked":f=b;break;case"value":u=b;break;case"defaultValue":i=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(v(137,a));break;default:le(e,a,l,b,n,null)}}Xs(e,u,i,r,f,o,t,!1);return;case"select":Z("invalid",e),l=o=u=null;for(t in n)if(n.hasOwnProperty(t)&&(i=n[t],i!=null))switch(t){case"value":u=i;break;case"defaultValue":o=i;break;case"multiple":l=i;default:le(e,a,t,i,n,null)}a=u,n=o,e.multiple=!!l,a!=null?bl(e,!!l,a,!1):n!=null&&bl(e,!!l,n,!0);return;case"textarea":Z("invalid",e),u=t=l=null;for(o in n)if(n.hasOwnProperty(o)&&(i=n[o],i!=null))switch(o){case"value":l=i;break;case"defaultValue":t=i;break;case"children":u=i;break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(v(91));break;default:le(e,a,o,i,n,null)}Zs(e,l,t,u);return;case"option":for(r in n)if(n.hasOwnProperty(r)&&(l=n[r],l!=null))switch(r){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:le(e,a,r,l,n,null)}return;case"dialog":Z("beforetoggle",e),Z("toggle",e),Z("cancel",e),Z("close",e);break;case"iframe":case"object":Z("load",e);break;case"video":case"audio":for(l=0;l<Xt.length;l++)Z(Xt[l],e);break;case"image":Z("error",e),Z("load",e);break;case"details":Z("toggle",e);break;case"embed":case"source":case"link":Z("error",e),Z("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(f in n)if(n.hasOwnProperty(f)&&(l=n[f],l!=null))switch(f){case"children":case"dangerouslySetInnerHTML":throw Error(v(137,a));default:le(e,a,f,l,n,null)}return;default:if(Fo(a)){for(b in n)n.hasOwnProperty(b)&&(l=n[b],l!==void 0&&wr(e,a,b,l,n,void 0));return}}for(i in n)n.hasOwnProperty(i)&&(l=n[i],l!=null&&le(e,a,i,l,n,null))}var nb={};function lb(e,a,n,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var t=null,u=null,o=null,i=null,r=null,f=null,b=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":r=h;default:l.hasOwnProperty(p)||le(e,a,p,null,l,h)}}for(var c in l){var p=l[c];if(h=n[c],l.hasOwnProperty(c)&&(p!=null||h!=null))switch(c){case"type":p!==h&&(W=!0),u=p;break;case"name":p!==h&&(W=!0),t=p;break;case"checked":p!==h&&(W=!0),f=p;break;case"defaultChecked":p!==h&&(W=!0),b=p;break;case"value":p!==h&&(W=!0),o=p;break;case"defaultValue":p!==h&&(W=!0),i=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(v(137,a));break;default:p!==h&&le(e,a,c,p,l,h)}}wo(e,o,i,r,f,b,u,t);return;case"select":p=o=i=c=null;for(u in n)if(r=n[u],n.hasOwnProperty(u)&&r!=null)switch(u){case"value":break;case"multiple":p=r;default:l.hasOwnProperty(u)||le(e,a,u,null,l,r)}for(t in l)if(u=l[t],r=n[t],l.hasOwnProperty(t)&&(u!=null||r!=null))switch(t){case"value":u!==r&&(W=!0),c=u;break;case"defaultValue":u!==r&&(W=!0),i=u;break;case"multiple":u!==r&&(W=!0),o=u;default:u!==r&&le(e,a,t,u,l,r)}a=i,n=o,l=p,c!=null?bl(e,!!n,c,!1):!!l!=!!n&&(a!=null?bl(e,!!n,a,!0):bl(e,!!n,n?[]:"",!1));return;case"textarea":p=c=null;for(i in n)if(t=n[i],n.hasOwnProperty(i)&&t!=null&&!l.hasOwnProperty(i))switch(i){case"value":break;case"children":break;default:le(e,a,i,null,l,t)}for(o in l)if(t=l[o],u=n[o],l.hasOwnProperty(o)&&(t!=null||u!=null))switch(o){case"value":t!==u&&(W=!0),c=t;break;case"defaultValue":t!==u&&(W=!0),p=t;break;case"children":break;case"dangerouslySetInnerHTML":if(t!=null)throw Error(v(91));break;default:t!==u&&le(e,a,o,t,l,u)}Vs(e,c,p);return;case"option":for(var q in n)if(c=n[q],n.hasOwnProperty(q)&&c!=null&&!l.hasOwnProperty(q))switch(q){case"selected":e.selected=!1;break;default:le(e,a,q,null,l,c)}for(r in l)if(c=l[r],p=n[r],l.hasOwnProperty(r)&&c!==p&&(c!=null||p!=null))switch(r){case"selected":c!==p&&(W=!0),e.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:le(e,a,r,c,l,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var O in n)c=n[O],n.hasOwnProperty(O)&&c!=null&&!l.hasOwnProperty(O)&&le(e,a,O,null,l,c);for(f in l)if(c=l[f],p=n[f],l.hasOwnProperty(f)&&c!==p&&(c!=null||p!=null))switch(f){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(v(137,a));break;default:le(e,a,f,c,l,p)}return;default:if(Fo(a)){for(var Q in n)c=n[Q],n.hasOwnProperty(Q)&&c!==void 0&&!l.hasOwnProperty(Q)&&wr(e,a,Q,void 0,l,c);for(b in l)c=l[b],p=n[b],!l.hasOwnProperty(b)||c===p||c===void 0&&p===void 0||wr(e,a,b,c,l,p);return}}for(var d in n)c=n[d],n.hasOwnProperty(d)&&c!=null&&!l.hasOwnProperty(d)&&le(e,a,d,null,l,c);for(h in l)c=l[h],p=n[h],!l.hasOwnProperty(h)||c===p||c==null&&p==null||le(e,a,h,c,l,p)}function If(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var t=n[l],u=t.transferSize,o=t.initiatorType,i=t.duration;if(u&&i&&If(o)){for(o=0,i=t.responseEnd,l+=1;l<n.length;l++){var r=n[l],f=r.startTime;if(f>i)break;var b=r.transferSize,h=r.initiatorType;b&&If(h)&&(r=r.responseEnd,o+=b*(r<i?1:(i-f)/(r-f)))}if(--l,a+=8*(u+o)/(t.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kr=null,Fr=null;function Zt(e){return e.nodeType===9?e:e.ownerDocument}function em(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function am(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function nm(e,a,n,l){return n=Zt(n).createElement(e),n[Me]=l,n[Ve]=a,He(n,e,a),Ae(n),n}function Wr(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var $r=null;function ub(){var e=window.event;return e&&e.type==="popstate"?e===$r?!1:($r=e,!0):($r=null,!1)}var Pr=typeof setTimeout=="function"?setTimeout:void 0,ob=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,tm=typeof requestAnimationFrame=="function"?requestAnimationFrame:Pr,ib=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(e){return lm.resolve(null).then(e).catch(rb)}:Pr;function rb(e){setTimeout(function(){throw e})}function xn(e){return e==="head"}function um(e,a){var n=a,l=0;do{var t=n.nextSibling;if(e.removeChild(n),t&&t.nodeType===8)if(n=t.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(t),et(a);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")os(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,os(n);for(var u=n.firstChild;u;){var o=u.nextSibling,i=u.nodeName;u[rt]||i==="SCRIPT"||i==="STYLE"||i==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=o}}else n==="body"&&os(e.ownerDocument.body);n=t}while(n);et(a)}function om(e,a){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?a?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(a?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function im(e,a,n){if(a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,e.style.viewTransitionName=a,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(a=e.getClientRects(),a.length===1)var l=1;else for(var t=l=0;t<a.length;t++){var u=a[t];0<u.width&&0<u.height&&l++}l===1&&(e=e.style,e.display=a.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function rm(e,a){e=e.style,a=a.style;var n=a!=null?a.hasOwnProperty("viewTransitionName")?a.viewTransitionName:a.hasOwnProperty("view-transition-name")?a["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=a!=null?a.hasOwnProperty("viewTransitionClass")?a.viewTransitionClass:a.hasOwnProperty("view-transition-class")?a["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(a==null?e.display=e.margin="":(n=a.display,e.display=n==null||typeof n=="boolean"?"":n,n=a.margin,n!=null?e.margin=n:(n=a.hasOwnProperty("marginTop")?a.marginTop:a["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,a=a.hasOwnProperty("marginBottom")?a.marginBottom:a["margin-bottom"],e.marginBottom=a==null||typeof a=="boolean"?"":a)))}function sb(e,a,n){return n=n.ownerDocument.defaultView,{rect:e,abs:a.position==="absolute"||a.position==="fixed",clip:a.clipPath!=="none"||a.overflow!=="visible"||a.filter!=="none"||a.mask!=="none"||a.mask!=="none"||a.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Ir(e){var a=e.getBoundingClientRect(),n=getComputedStyle(e);return sb(a,n,e)}function cb(e){return e.documentElement.clientHeight}function db(e){this.addEventListener("load",e),this.addEventListener("error",e)}function fb(e,a,n,l,t,u,o,i,r){var f=a.nodeType===9?a:a.ownerDocument;try{var b=f.startViewTransition({update:function(){var c=f.defaultView,p=c.navigation&&c.navigation.transition,q=f.fonts.status;l();var O=[];if(q==="loaded"&&(cb(f),f.fonts.status==="loading"&&O.push(f.fonts.ready)),q=O.length,e!==null)for(var Q=e.suspenseyImages,d=0,s=0;s<Q.length;s++){var m=Q[s];if(!m.complete){var g=m.getBoundingClientRect();if(0<g.bottom&&0<g.right&&g.top<c.innerHeight&&g.left<c.innerWidth){if(d+=xm(m),d>No){O.length=q;break}m=new Promise(db.bind(m)),O.push(m)}}}if(0<O.length)return c=Promise.race([Promise.all(O),new Promise(function(D){return setTimeout(D,500)})]).then(t,t),(p?Promise.allSettled([p.finished,c]):c).then(u,u);if(t(),p)return p.finished.then(u,u);u()},types:n});f.__reactViewTransition=b;var h=[];return b.ready.then(function(){for(var c=f.documentElement.getAnimations({subtree:!0}),p=0;p<c.length;p++){var q=c[p],O=q.effect,Q=O.pseudoElement;if(Q!=null&&Q.startsWith("::view-transition")){h.push(q),q=O.getKeyframes();for(var d=Q=void 0,s=!0,m=0;m<q.length;m++){var g=q[m],D=g.width;if(Q===void 0)Q=D;else if(Q!==D){s=!1;break}if(D=g.height,d===void 0)d=D;else if(d!==D){s=!1;break}delete g.width,delete g.height,g.transform==="none"&&delete g.transform}s&&Q!==void 0&&d!==void 0&&(O.setKeyframes(q),s=getComputedStyle(O.target,O.pseudoElement),s.width!==Q||s.height!==d)&&(s=q[0],s.width=Q,s.height=d,s=q[q.length-1],s.width=Q,s.height=d,O.setKeyframes(q))}}o()},function(c){f.__reactViewTransition===b&&(f.__reactViewTransition=null);try{if(typeof c=="object"&&c!==null)switch(c.name){case"InvalidStateError":(c.message==="View transition was skipped because document visibility state is hidden."||c.message==="Skipping view transition because document visibility state has become hidden."||c.message==="Skipping view transition because viewport size changed."||c.message==="Transition was aborted because of invalid state")&&(c=null)}c!==null&&r(c)}finally{l(),t(),o()}}),b.finished.finally(function(){for(var c=0;c<h.length;c++)h[c].cancel();f.__reactViewTransition===b&&(f.__reactViewTransition=null),i()}),b}catch{return l(),t(),o(),null}}function ul(e,a){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+a+")"}ul.prototype.animate=function(e,a){return a=typeof a=="number"?{duration:a}:F({},a),a.pseudoElement=this._selector,this._scope.animate(e,a)},ul.prototype.getAnimations=function(){for(var e=this._scope,a=this._selector,n=e.getAnimations({subtree:!0}),l=[],t=0;t<n.length;t++){var u=n[t].effect;u!==null&&u.target===e&&u.pseudoElement===a&&l.push(n[t])}return l},ul.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function sm(e){return{name:e,group:new ul("group",e),imagePair:new ul("image-pair",e),old:new ul("old",e),new:new ul("new",e)}}function ua(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ua.prototype.addEventListener=function(e,a,n){var l=null,t=null;if(!(n!=null&&typeof n!="boolean"&&(l=n.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(dm(u,e,a,n)===-1){var o=this,i=a;n!=null&&typeof n!="boolean"&&n.once===!0&&(i=function(r){o.removeEventListener(e,a,n),typeof a=="function"?a.call(this,r):a.handleEvent(r)}),l!==null&&(t=o.removeEventListener.bind(o,e,a,n),l.addEventListener("abort",t,{once:!0}),t=l.removeEventListener.bind(l,"abort",t)),l=kl(n),u.push({type:e,listener:a,optionsOrUseCapture:n,attachedListener:i,cleanup:t}),G(this._fragmentFiber.child,!1,mb,e,i,l)}this._eventListeners=u}};function mb(e,a,n,l){return w(e).addEventListener(a,n,l),!1}ua.prototype.removeEventListener=function(e,a,n){var l=this._eventListeners;if(l!==null&&(a=dm(l,e,a,n),a!==-1)){var t=l[a];n=t.attachedListener;var u=t.cleanup;t=kl(t.optionsOrUseCapture),G(this._fragmentFiber.child,!1,vb,e,n,t),l.splice(a,1),u!==null&&u()}};function vb(e,a,n,l){return w(e).removeEventListener(a,n,l),!1}function kl(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function cm(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function dm(e,a,n,l){if(e.length===0)return-1;l=cm(l);for(var t=0;t<e.length;t++){var u=e[t];if(u.type===a&&u.listener===n&&cm(u.optionsOrUseCapture)===l)return t}return-1}ua.prototype.dispatchEvent=function(e){var a=M(this._fragmentFiber);if(a===null)return!0;a=w(a);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var l=a.nodeType===9?a.createComment(""):document.createTextNode("");if(n)for(var t=0;t<n.length;t++){var u=n[t];l.addEventListener(u.type,u.attachedListener,kl(u.optionsOrUseCapture))}if(a.appendChild(l),e=l.dispatchEvent(e),n)for(t=0;t<n.length;t++)u=n[t],l.removeEventListener(u.type,u.attachedListener,kl(u.optionsOrUseCapture));return a.removeChild(l),e}return a.dispatchEvent(e)},ua.prototype.focus=function(e){G(this._fragmentFiber.child,!0,fm,e,void 0,void 0)};function fm(e,a){return e.tag===6?!1:(e=w(e),Ab(e,a))}ua.prototype.focusLast=function(e){var a=[];G(this._fragmentFiber.child,!0,es,a,void 0,void 0);for(var n=a.length-1;0<=n&&!fm(a[n],e);n--);};function es(e,a){return a.push(e),!1}ua.prototype.blur=function(){var e=M(this._fragmentFiber);e!==null&&(e=w(e),e=Zt(e).activeElement,e!==null&&G(this._fragmentFiber.child,!1,pb,e,void 0,void 0))};function pb(e,a){return e.tag===6?!1:(e=w(e),e===a||e.contains(a)?(a.blur(),!0):!1)}ua.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),G(this._fragmentFiber.child,!1,bb,e,void 0,void 0)};function bb(e,a){return e.tag===6||(e=w(e),a.observe(e)),!1}ua.prototype.unobserveUsing=function(e){var a=this._observers;if(a!==null&&a.has(e)){a.delete(e),G(this._fragmentFiber.child,!1,gb,e,void 0,void 0);for(var n=a=0;n<Na.length;n++){var l=Na[n];l.fragmentInstance===this&&l.observer===e?e.unobserve(l.instance):Na[a++]=l}Na.length=a}};function gb(e,a){return e.tag===6||(e=w(e),a.unobserve(e)),!1}var Na=[],as=!1;function hb(e,a,n){Na.push({fragmentInstance:e,observer:a,instance:n}),as||(as=!0,Db(function(){as=!1;var l=Na;Na=[];for(var t=0;t<l.length;t++){var u=l[t];u.observer.unobserve(u.instance)}}))}ua.prototype.getClientRects=function(){var e=[];return G(this._fragmentFiber.child,!1,yb,e,void 0,void 0),e};function yb(e,a){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),a.push.apply(a,n.getClientRects())}else e=w(e),a.push.apply(a,e.getClientRects());return!1}ua.prototype.getRootNode=function(e){var a=M(this._fragmentFiber);return a===null?this:w(a).getRootNode(e)},ua.prototype.compareDocumentPosition=function(e){var a=M(this._fragmentFiber);if(a===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];G(this._fragmentFiber.child,!1,es,n,void 0,void 0);var l=w(a);if(n.length===0){if(n=l,ba(this._fragmentFiber)){e:{for(a=this._fragmentFiber.return;a!==null;){if(a.tag===4){a=a.stateNode.containerInfo;break e}if(a.tag===3||a.tag===5||a.tag===27)break;a=a.return}a=null}a!=null&&(n=a)}a=this._fragmentFiber;var t=l=n.compareDocumentPosition(e);return n===e?t=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=oe(a)[1],n===null?t=Node.DOCUMENT_POSITION_PRECEDING:(e=w(n).compareDocumentPosition(e),t=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),t|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}a=w(n[0]),t=w(n[n.length-1]);var u=ba(this._fragmentFiber)?a.parentElement:l;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=u.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=a.compareDocumentPosition(e),i=t.compareDocumentPosition(e),r=o&Node.DOCUMENT_POSITION_CONTAINED_BY||i&Node.DOCUMENT_POSITION_CONTAINED_BY;return i=l&&u&&o&Node.DOCUMENT_POSITION_FOLLOWING&&i&Node.DOCUMENT_POSITION_PRECEDING,a=l&&a===e||u&&t===e||r||i?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&a===e||!u&&t===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,a&Node.DOCUMENT_POSITION_DISCONNECTED||a&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||qb(a,this._fragmentFiber,n[0],n[n.length-1],e)?a:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function qb(e,a,n,l,t){var u=Bn(t);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===a||u.alternate===a)){n=!0;break e}u=u.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=t.ownerDocument,t===u||t===u.documentElement||t===u.body;e:{for(u=a,a=M(a);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==a&&u.alternate!==a)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((a=!!u)&&!(a=u===n)&&(a=Aa(n,u,ha),a===null?a=!1:(G(a,!0,me,u,n),u=oa,oa=null,a=u!==null)),a):e&Node.DOCUMENT_POSITION_FOLLOWING?((a=!!u)&&!(a=u===l)&&(a=Aa(l,u,ha),a===null?a=!1:(G(a,!0,se,u,l),u=oa,T=oa=null,a=u!==null)),a):!1}function mm(e,a){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,a?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ua.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(v(566));var a=[];G(this._fragmentFiber.child,!1,es,a,void 0,void 0);var n=e!==!1;if(a.length===0){var l=oe(this._fragmentFiber);if(l=n?l[1]||l[0]||M(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){e=w(l),mm(e,n);return}if(l=w(l),l.nodeType!==9){if(l.nodeType===11){n="host"in l?l.host:null,n!==null&&n.scrollIntoView(e);return}l.scrollIntoView(e)}}for(l=n?a.length-1:0;l!==(n?-1:a.length);){var t=a[l];t.tag===6?(t=w(t),mm(t,n)):w(t).scrollIntoView(e),l+=n?-1:1}};function zb(e,a){return e=w(e),vm(e,a),!1}function vm(e,a){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(a)}function pm(e,a){var n=a._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var t=n[l];e.addEventListener(t.type,t.attachedListener,kl(t.optionsOrUseCapture))}e.nodeType!==3&&(n=a._observers,n!==null&&n.forEach(function(u){for(var o=0,i=0;i<Na.length;i++){var r=Na[i];(r.fragmentInstance!==a||r.observer!==u||r.instance!==e)&&(Na[o++]=r)}Na.length=o,u.observe(e)}),vm(e,a))}function Sb(e,a){var n=a._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var t=n[l];e.removeEventListener(t.type,t.attachedListener,kl(t.optionsOrUseCapture))}e.nodeType!==3&&(n=a._observers,n!==null&&n.forEach(function(u){typeof u.rootMargin=="string"?hb(a,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(a))}function ns(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ns(n),fu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Eb(e,a,n,l){for(;e.nodeType===1;){var t=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[rt])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==t.rel||e.getAttribute("href")!==(t.href==null||t.href===""?null:t.href)||e.getAttribute("crossorigin")!==(t.crossOrigin==null?null:t.crossOrigin)||e.getAttribute("title")!==(t.title==null?null:t.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(t.src==null?null:t.src)||e.getAttribute("type")!==(t.type==null?null:t.type)||e.getAttribute("crossorigin")!==(t.crossOrigin==null?null:t.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var u=t.name==null?null:""+t.name;if(t.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=va(e.nextSibling),e===null)break}return null}function Tb(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=va(e.nextSibling),e===null))return null;return e}function bm(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=va(e.nextSibling),e===null))return null;return e}function ls(e){return e.data==="$?"||e.data==="$~"}function ts(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Nb(e,a){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||n.readyState!=="loading")a();else{var l=function(){a(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function va(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var us=null;function gm(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(a===0)return va(e.nextSibling);a--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||a++}e=e.nextSibling}return null}function hm(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(a===0)return e;a--}else n!=="/$"&&n!=="/&"||a++}e=e.previousSibling}return null}function Ab(e,a){function n(){l=!0}if(e.ownerDocument.activeElement===e)return!0;var l=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,a)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return l}function Db(e){tm(function(){tm(function(a){return e(a)})})}function ym(e,a,n){switch(a=Zt(n),e){case"html":if(e=a.documentElement,!e)throw Error(v(452));return e;case"head":if(e=a.head,!e)throw Error(v(453));return e;case"body":if(e=a.body,!e)throw Error(v(454));return e;default:throw Error(v(451))}}function qm(e,a,n){for(var l in n){var t=n[l];n.hasOwnProperty(l)&&t!=null&&le(e,a,l,null,nb,t)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===_a&&(e.onclick=null),fu(e)}function os(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);fu(e)}var pa=new Map,zm=new Set;function Jt(e){if(typeof e.getRootNode=="function"){var a=e.getRootNode();if(a.nodeType===9||a.nodeType===11)return a}return e.nodeType===9?e:e.ownerDocument}var nn=P.d;P.d={f:Ob,r:xb,D:_b,C:Mb,L:jb,m:Cb,X:Yb,S:Ub,M:Hb};function Ob(){var e=nn.f(),a=bo();return e||a}function xb(e){var a=ml(e);a!==null&&a.tag===5&&a.type==="form"?Sd(a):nn.r(e)}var Fl=typeof document>"u"?null:document;function Sm(e,a,n){var l=Fl;if(l&&typeof a=="string"&&a){var t=ia(a);t='link[rel="'+e+'"][href="'+t+'"]',typeof n=="string"&&(t+='[crossorigin="'+n+'"]'),zm.has(t)||(zm.add(t),e={rel:e,crossOrigin:n,href:a},l.querySelector(t)===null&&(a=l.createElement("link"),He(a,"link",e),Ae(a),l.head.appendChild(a)))}}function _b(e){nn.D(e),Sm("dns-prefetch",e,null)}function Mb(e,a){nn.C(e,a),Sm("preconnect",e,a)}function jb(e,a,n){nn.L(e,a,n);var l=Fl;if(l&&e&&a){var t='link[rel="preload"][as="'+ia(a)+'"]';a==="image"&&n&&n.imageSrcSet?(t+='[imagesrcset="'+ia(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(t+='[imagesizes="'+ia(n.imageSizes)+'"]')):t+='[href="'+ia(e)+'"]';var u=t;switch(a){case"style":u=Wl(e);break;case"script":u=$l(e)}if(!(pa.has(u)||(e=F({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),pa.set(u,e),l.querySelector(t)!==null||a==="style"&&l.querySelector(Kt(u))||a==="script"&&l.querySelector(wt(u))))){var o=l.createElement("link");He(o,"link",e),a==="style"&&(o[du]=!0,o.onload=o.onerror=function(){Us(o)}),Ae(o),l.head.appendChild(o)}}}function Cb(e,a){nn.m(e,a);var n=Fl;if(n&&e){var l=a&&typeof a.as=="string"?a.as:"script",t='link[rel="modulepreload"][as="'+ia(l)+'"][href="'+ia(e)+'"]',u=t;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=$l(e)}if(!pa.has(u)&&(e=F({rel:"modulepreload",href:e},a),pa.set(u,e),n.querySelector(t)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wt(u)))return}l=n.createElement("link"),He(l,"link",e),Ae(l),n.head.appendChild(l)}}}function Ub(e,a,n){nn.S(e,a,n);var l=Fl;if(l&&e){var t=vl(l).hoistableStyles,u=Wl(e);a=a||"default";var o=t.get(u);if(!o){var i={loading:0,preload:null};if(o=l.querySelector(Kt(u)))i.loading=5;else{e=F({rel:"stylesheet",href:e,"data-precedence":a},n),(n=pa.get(u))&&is(e,n);var r=o=l.createElement("link");Ae(r),He(r,"link",e),r._p=new Promise(function(f,b){r.onload=f,r.onerror=b}),r.addEventListener("load",function(){i.loading|=1}),r.addEventListener("error",function(){i.loading|=2}),i.loading|=4,Eo(o,a,l)}o={type:"stylesheet",instance:o,count:1,state:i},t.set(u,o)}}}function Yb(e,a){nn.X(e,a);var n=Fl;if(n&&e){var l=vl(n).hoistableScripts,t=$l(e),u=l.get(t);u||(u=n.querySelector(wt(t)),u||(e=F({src:e,async:!0},a),(a=pa.get(t))&&rs(e,a),u=n.createElement("script"),Ae(u),He(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(t,u))}}function Hb(e,a){nn.M(e,a);var n=Fl;if(n&&e){var l=vl(n).hoistableScripts,t=$l(e),u=l.get(t);u||(u=n.querySelector(wt(t)),u||(e=F({src:e,async:!0,type:"module"},a),(a=pa.get(t))&&rs(e,a),u=n.createElement("script"),Ae(u),He(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(t,u))}}function Em(e,a,n,l){var t=(t=un.current)?Jt(t):null;if(!t)throw Error(v(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Wl(n.href),a=vl(t).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Wl(n.href);var u=vl(t).hoistableStyles,o=u.get(e);if(o||(t=t.ownerDocument||t,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,o),(u=t.querySelector(Kt(e)))?u._p||(o.instance=u,o.state.loading=5):(u=pa.get(e),u||(u={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},pa.set(e,u)),Rb(t,e,u,o.state))),a&&l===null)throw Error(v(528,""));return o}if(a&&l!==null)throw Error(v(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(n=$l(n),a=vl(t).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(v(444,e))}}function Wl(e){return'href="'+ia(e)+'"'}function Kt(e){return'link[rel="stylesheet"]['+e+"]"}function Tm(e){return F({},e,{"data-precedence":e.precedence,precedence:null})}function Rb(e,a,n,l){if(a=e.querySelector('link[rel="preload"][as="style"]['+a+"]")){if(a[du]!==!0){l.loading=1;return}}else a=e.createElement("link"),a[du]=!0,a.onload=a.onerror=Us.bind(null,a),He(a,"link",n),Ae(a),e.head.appendChild(a);l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2})}function $l(e){return'[src="'+ia(e)+'"]'}function wt(e){return"script[async]"+e}function Nm(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+ia(n.href)+'"]');if(l)return a.instance=l,Ae(l),l;var t=F({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ae(l),He(l,"style",t),Eo(l,n.precedence,e),a.instance=l;case"stylesheet":t=Wl(n.href);var u=e.querySelector(Kt(t));if(u)return a.state.loading|=4,a.instance=u,Ae(u),u;l=Tm(n),(t=pa.get(t))&&is(l,t),u=(e.ownerDocument||e).createElement("link"),Ae(u);var o=u;return o._p=new Promise(function(i,r){o.onload=i,o.onerror=r}),He(u,"link",l),a.state.loading|=4,Eo(u,n.precedence,e),a.instance=u;case"script":return u=$l(n.src),(t=e.querySelector(wt(u)))?(a.instance=t,Ae(t),t):(l=n,(t=pa.get(u))&&(l=F({},n),rs(l,t)),e=e.ownerDocument||e,t=e.createElement("script"),Ae(t),He(t,"link",l),e.head.appendChild(t),a.instance=t);case"void":return null;default:throw Error(v(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Eo(l,n.precedence,e));return a.instance}function Eo(e,a,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),t=l.length?l[l.length-1]:null,u=t,o=0;o<l.length;o++){var i=l[o];if(i.dataset.precedence===a)u=i;else if(u!==t)break}u?u.parentNode.insertBefore(e,u.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function is(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function rs(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var To=null;function Am(e,a,n){if(To===null){var l=new Map,t=To=new Map;t.set(n,l)}else t=To,l=t.get(n),l||(l=new Map,t.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),t=0;t<n.length;t++){var u=n[t];if(!(u[rt]||u[Me]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var o=u.getAttribute(a)||"";o=e+o;var i=l.get(o);i?i.push(u):l.set(o,[u])}}return l}function ss(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function Bb(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Dm(e,a){return e==="img"&&a.src!=null&&a.src!==""&&a.onLoad==null&&a.loading!=="lazy"}function Om(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function _m(e,a){typeof a.decode=="function"&&(e.imgCount++,a.complete||(e.imgBytes+=xm(a),e.suspenseyImages.push(a)),e=Gb.bind(e),a.decode().then(e,e))}function Qb(e,a,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var t=Wl(l.href),u=a.querySelector(Kt(t));if(u){a=u._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=kt.bind(e),a.then(e,e)),n.state.loading|=4,n.instance=u,Ae(u);return}u=a.ownerDocument||a,l=Tm(l),(t=pa.get(t))&&is(l,t),u=u.createElement("link"),Ae(u);var o=u;o._p=new Promise(function(i,r){o.onload=i,o.onerror=r}),He(u,"link",l),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,a),(a=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=kt.bind(e),a.addEventListener("load",n),a.addEventListener("error",n))}}var No=0;function Lb(e,a){return e.stylesheets&&e.count===0&&Do(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Do(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+a);0<e.imgBytes&&No===0&&(No=62500*tb());var t=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Do(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>No?50:800)+a);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(t)}}:null}function Mm(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Do(e,e.stylesheets);else if(e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}}}function kt(){this.count--,Mm(this)}function Gb(){this.imgCount--,Mm(this)}var Ao=null;function Do(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ao=new Map,a.forEach(Xb,e),Ao=null,kt.call(e))}function Xb(e,a){if(!(a.state.loading&4)){var n=Ao.get(e);if(n)var l=n.get(null);else{n=new Map,Ao.set(e,n);for(var t=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<t.length;u++){var o=t[u];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}t=a.instance,o=t.getAttribute("data-precedence"),u=n.get(o)||l,u===l&&n.set(null,t),n.set(o,t),this.count++,l=kt.bind(this),t.addEventListener("load",l),t.addEventListener("error",l),u?u.parentNode.insertBefore(t,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(t,e.firstChild)),a.state.loading|=4}}var Pl={$$typeof:Xe,Provider:null,Consumer:null,_currentValue:Hn,_currentValue2:Hn,_threadCount:0};function Vb(e,a,n,l,t,u,o,i,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.hiddenUpdates=Vo(null),this.identifierPrefix=l,this.onUncaughtError=t,this.onCaughtError=u,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.transitionTypes=null,this.incompleteTransitions=new Map}function jm(e,a,n,l,t,u,o,i,r,f,b,h){return e=new Vb(e,a,n,o,r,f,b,h,i),a=1,u===!0&&(a|=24),u=Ze(3,null,null,a),e.current=u,u.stateNode=e,a=Ti(),a.refCount++,e.pooledCache=a,a.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:a},Oi(u),e}function Cm(e){return e?(e=Tl,e):Tl}function Um(e,a,n,l,t,u){t=Cm(t),l.context===null?l.context=t:l.pendingContext=t,l=gn(a),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=hn(e,l,a),n!==null&&(ke(n,e,a),Nt(n,e,a))}function Ym(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function cs(e,a){Ym(e,a),(e=e.alternate)&&Ym(e,a)}function Hm(e){if(e.tag===13||e.tag===31){var a=Xn(e,67108864);a!==null&&ke(a,e,67108864),cs(e,67108864)}}function Rm(e){if(e.tag===13||e.tag===31){var a=ta();a=Zo(a);var n=Xn(e,a);n!==null&&ke(n,e,a),cs(e,a)}}var Il=!0;function Zb(e,a,n,l){var t=U.T;U.T=null;var u=P.p;try{P.p=2,ds(e,a,n,l)}finally{P.p=u,U.T=t}}function Jb(e,a,n,l){var t=U.T;U.T=null;var u=P.p;try{P.p=8,ds(e,a,n,l)}finally{P.p=u,U.T=t}}function ds(e,a,n,l){if(Il){var t=fs(l);if(t===null)Kr(e,a,l,Oo,n),Qm(e,l);else if(wb(t,e,a,n,l))l.stopPropagation();else if(Qm(e,l),a&4&&-1<Kb.indexOf(e)){for(;t!==null;){var u=ml(t);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var o=Rn(u.pendingLanes);if(o!==0){var i=u;for(i.pendingLanes|=2,i.entangledLanes|=2;o;){var r=1<<31-$e(o);i.entanglements[1]|=r,o&=~r}La(u),(I&6)===0&&(mo=Fe()+500,Gt(0))}}break;case 31:case 13:i=Xn(u,2),i!==null&&ke(i,u,2),bo(),cs(u,2)}if(u=fs(l),u===null&&Kr(e,a,l,Oo,n),u===t)break;t=u}t!==null&&l.stopPropagation()}else Kr(e,a,l,null,n)}}function fs(e){return e=$o(e),ms(e)}var Oo=null;function ms(e){if(Oo=null,e=Bn(e),e!==null){var a=z(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=C(a),e!==null)return e;e=null}else if(n===31){if(e=H(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Oo=e,null}function Bm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tv()){case Ss:return 2;case Es:return 8;case ou:case uv:return 32;case Ts:return 268435456;default:return 32}default:return 32}}var vs=!1,_n=null,Mn=null,jn=null,Ft=new Map,Wt=new Map,Cn=[],Kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qm(e,a){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Ft.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wt.delete(a.pointerId)}}function $t(e,a,n,l,t,u){return e===null||e.nativeEvent!==u?(e={blockedOn:a,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[t]},a!==null&&(a=ml(a),a!==null&&Hm(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,t!==null&&a.indexOf(t)===-1&&a.push(t),e)}function wb(e,a,n,l,t){switch(a){case"focusin":return _n=$t(_n,e,a,n,l,t),!0;case"dragenter":return Mn=$t(Mn,e,a,n,l,t),!0;case"mouseover":return jn=$t(jn,e,a,n,l,t),!0;case"pointerover":var u=t.pointerId;return Ft.set(u,$t(Ft.get(u)||null,e,a,n,l,t)),!0;case"gotpointercapture":return u=t.pointerId,Wt.set(u,$t(Wt.get(u)||null,e,a,n,l,t)),!0}return!1}function Lm(e){var a=Bn(e.target);if(a!==null){var n=z(a);if(n!==null){if(a=n.tag,a===13){if(a=C(n),a!==null){e.blockedOn=a,Ms(e.priority,function(){Rm(n)});return}}else if(a===31){if(a=H(n),a!==null){e.blockedOn=a,Ms(e.priority,function(){Rm(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=fs(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Wo=l,n.target.dispatchEvent(l),Wo=null}else return a=ml(n),a!==null&&Hm(a),e.blockedOn=n,!1;a.shift()}return!0}function Gm(e,a,n){xo(e)&&n.delete(a)}function kb(){vs=!1,_n!==null&&xo(_n)&&(_n=null),Mn!==null&&xo(Mn)&&(Mn=null),jn!==null&&xo(jn)&&(jn=null),Ft.forEach(Gm),Wt.forEach(Gm)}function _o(e,a){e.blockedOn===a&&(e.blockedOn=null,vs||(vs=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,kb)))}var Mo=null;function Xm(e){Mo!==e&&(Mo=e,y.unstable_scheduleCallback(y.unstable_NormalPriority,function(){Mo===e&&(Mo=null);for(var a=0;a<e.length;a+=3){var n=e[a],l=e[a+1],t=e[a+2];if(typeof l!="function"){if(ms(l||n)===null)continue;break}var u=ml(n);u!==null&&(e.splice(a,3),a-=3,Fi(u,{pending:!0,data:t,method:n.method,action:l},l,t))}}))}function et(e){function a(r){return _o(r,e)}_n!==null&&_o(_n,e),Mn!==null&&_o(Mn,e),jn!==null&&_o(jn,e),Ft.forEach(a),Wt.forEach(a);for(var n=0;n<Cn.length;n++){var l=Cn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)Lm(n),n.blockedOn===null&&Cn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var t=n[l],u=n[l+1],o=t[Ve]||null;if(typeof u=="function")o||Xm(n);else if(o){var i=null;if(u&&u.hasAttribute("formAction")){if(t=u,o=u[Ve]||null)i=o.formAction;else if(ms(t)!==null)continue}else i=o.action;typeof i=="function"?n[l+1]=i:(n.splice(l,3),l-=3),Xm(n)}}}function Vm(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(o){return t=o})},focusReset:"manual",scroll:"manual"})}function a(){t!==null&&(t(),t=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,t=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),t!==null&&(t(),t=null)}}}function ps(e){this._internalRoot=e}jo.prototype.render=ps.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(v(409));var n=a.current,l=ta();Um(n,l,e,a,null,null)},jo.prototype.unmount=ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Um(e.current,2,null,e,null,null),bo(),a[fl]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var a=_s();e={blockedOn:null,target:e,priority:a};for(var n=0;n<Cn.length&&a!==0&&a<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&Lm(e)}};var Zm=S.version;if(Zm!=="19.3.0")throw Error(v(527,Zm,"19.3.0"));P.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=$(a),e=e!==null?qe(e):null,e=e===null?null:e.stateNode,e};var Fb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{ut=Co.inject(Fb),We=Co}catch{}}return Pt.createRoot=function(e,a){if(!E(e))throw Error(v(299));var n=!1,l="",t=jd,u=Cd,o=Ud;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(t=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=jm(e,1,!1,null,null,n,l,null,t,u,o,Vm),e[fl]=a.current,Jr(e),new ps(a)},Pt.hydrateRoot=function(e,a,n){if(!E(e))throw Error(v(299));var l=!1,t="",u=jd,o=Cd,i=Ud,r=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(i=n.onRecoverableError),n.formState!==void 0&&(r=n.formState)),a=jm(e,1,!0,a,n??null,l,t,r,u,o,i,Vm),a.context=Cm(null),n=a.current,l=ta(),l=Zo(l),t=gn(l),t.callback=null,hn(n,t,l),n=l,a.current.lanes=n,it(a,n),La(a),e[fl]=a.current,Jr(e),new jo(a)},Pt.version="19.3.0",Pt}var km;function ng(){if(km)return bs.exports;km=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(S){console.error(S)}}return y(),bs.exports=ag(),bs.exports}var lg=ng();const tg="modulepreload",ug=function(y){return"/cartas/"+y},Fm={},It=function(S,A,v){let E=Promise.resolve();if(A&&A.length>0){let C=function($){return Promise.all($.map(qe=>Promise.resolve(qe).then(G=>({status:"fulfilled",value:G}),G=>({status:"rejected",reason:G}))))};document.getElementsByTagName("link");const H=document.querySelector("meta[property=csp-nonce]"),Y=(H==null?void 0:H.nonce)||(H==null?void 0:H.getAttribute("nonce"));E=C(A.map($=>{if($=ug($),$ in Fm)return;Fm[$]=!0;const qe=$.endsWith(".css"),G=qe?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${$}"]${G}`))return;const M=document.createElement("link");if(M.rel=qe?"stylesheet":tg,qe||(M.as="script"),M.crossOrigin="",M.href=$,Y&&M.setAttribute("nonce",Y),document.head.appendChild(M),qe)return new Promise((ba,oe)=>{M.addEventListener("load",ba),M.addEventListener("error",()=>oe(new Error(`Unable to preload CSS for ${$}`)))})}))}function z(C){const H=new Event("vite:preloadError",{cancelable:!0});if(H.payload=C,window.dispatchEvent(H),!H.defaultPrevented)throw C}return E.then(C=>{for(const H of C||[])H.status==="rejected"&&z(H.reason);return S().catch(z)})};function og(y={}){const{immediate:S=!1,onNeedReload:A,onNeedRefresh:v,onOfflineReady:E,onRegistered:z,onRegisteredSW:C,onRegisterError:H}=y;let Y,$;const qe=async(M=!0)=>{await $};async function G(){if("serviceWorker"in navigator){if(Y=await It(async()=>{const{Workbox:M}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:M}},[]).then(({Workbox:M})=>new M("/cartas/sw.js",{scope:"/cartas/",type:"classic"})).catch(M=>{H==null||H(M)}),!Y)return;Y.addEventListener("activated",M=>{(M.isUpdate||M.isExternal)&&(A?A():window.location.reload())}),Y.addEventListener("installed",M=>{M.isUpdate||E==null||E()}),Y.register({immediate:S}).then(M=>{C?C("/cartas/sw.js",M):z==null||z(M)}).catch(M=>{H==null||H(M)})}}return $=G(),qe}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=y=>y.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rg=y=>y.replace(/^([A-Z])|[\s-_]+(\w)/g,(S,A,v)=>v?v.toUpperCase():A.toLowerCase()),Wm=y=>{const S=rg(y);return S.charAt(0).toUpperCase()+S.slice(1)},Im=(...y)=>y.filter((S,A,v)=>!!S&&S.trim()!==""&&v.indexOf(S)===A).join(" ").trim(),sg=y=>{for(const S in y)if(S.startsWith("aria-")||S==="role"||S==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=te.forwardRef(({color:y="currentColor",size:S=24,strokeWidth:A=2,absoluteStrokeWidth:v,className:E="",children:z,iconNode:C,...H},Y)=>te.createElement("svg",{ref:Y,...cg,width:S,height:S,stroke:y,strokeWidth:v?Number(A)*24/Number(S):A,className:Im("lucide",E),...!z&&!sg(H)&&{"aria-hidden":"true"},...H},[...C.map(([$,qe])=>te.createElement($,qe)),...Array.isArray(z)?z:[z]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=(y,S)=>{const A=te.forwardRef(({className:v,...E},z)=>te.createElement(dg,{ref:z,iconNode:S,className:Im(`lucide-${ig(Wm(y))}`,`lucide-${y}`,v),...E}));return A.displayName=Wm(y),A};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],mg=eu("menu",fg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],pg=eu("moon",vg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],gg=eu("sun",bg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],yg=eu("wifi-off",hg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zg=eu("x",qg),$m=({theme:y,onToggle:S,className:A="",variant:v="minimal"})=>{const E=y==="dark";return _.jsxs("button",{id:"theme-toggle-btn",type:"button",onClick:S,"aria-label":E?"Cambiar a modo papel claro":"Cambiar a modo lectura nocturna",title:E?"Modo claro (papel)":"Modo nocturno (biblioteca)",className:`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-sm transition-colors text-xs font-sans tracking-wide text-[#6b645c] hover:text-[#211e1c] dark:text-[#9c958c] dark:hover:text-[#ede7e0] hover:bg-[#ece9e4]/60 dark:hover:bg-[#2a2927] border border-transparent hover:border-[#dad4cb]/70 dark:hover:border-[#383633] ${A}`,children:[E?_.jsx(gg,{className:"w-3.5 h-3.5 text-[#d0a65c]",strokeWidth:1.75}):_.jsx(pg,{className:"w-3.5 h-3.5 text-[#5d4837]",strokeWidth:1.75}),v==="labeled"&&_.jsx("span",{className:"font-normal",children:E?"Modo papel":"Modo noche"})]})},Sg=5e3,Eg=2e4;async function Tg(){if(typeof navigator<"u"&&navigator.onLine===!1)return!1;try{return(await fetch(`/cartas/ping.txt?t=${Date.now()}`,{method:"GET",cache:"no-store",signal:AbortSignal.timeout(Sg)})).ok}catch{return!1}}async function Ng(){var y;try{const S=await((y=navigator.serviceWorker)==null?void 0:y.getRegistration());await(S==null?void 0:S.update())}catch{}}function Ag(){const[y,S]=te.useState(null),A=te.useRef(!0),v=te.useRef(!1),E=te.useCallback(async()=>{const z=await Tg();return A.current&&S(z),z&&v.current&&Ng(),v.current=!z,z},[]);return te.useEffect(()=>{A.current=!0,E();const z=()=>E(),C=()=>S(!1);return window.addEventListener("online",z),window.addEventListener("offline",C),()=>{A.current=!1,window.removeEventListener("online",z),window.removeEventListener("offline",C)}},[E]),te.useEffect(()=>{if(y!==!1)return;const z=window.setInterval(E,Eg);return()=>window.clearInterval(z)},[y,E]),{isOnline:y}}const Pm=({className:y="",iconClassName:S="w-3.5 h-3.5",align:A="right",side:v="bottom"})=>{const{isOnline:E}=Ag(),[z,C]=te.useState(!1),Y=`offline-indicator-tooltip-${te.useId()}`;return E!==!1?null:_.jsxs("div",{className:"relative inline-flex",children:[_.jsx("button",{type:"button","aria-label":"Sin conexión: viendo una versión guardada","aria-describedby":Y,onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),onFocus:()=>C(!0),onBlur:()=>C(!1),onClick:()=>C(!0),className:`inline-flex items-center justify-center text-[#8c8479] dark:text-[#7d756a] hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors ${y}`,children:_.jsx(yg,{className:S,strokeWidth:1.75})}),_.jsx("div",{id:Y,role:"tooltip",className:`absolute z-50 whitespace-nowrap rounded-sm border border-[#dad4cb] dark:border-[#383633] bg-[#ece9e4] dark:bg-[#1c1b1b] px-2.5 py-1.5 text-xs font-sans text-[#6b645c] dark:text-[#9c958c] shadow-lg transition-opacity ${v==="bottom"?"top-full mt-2":"bottom-full mb-2"} ${A==="right"?"right-0":"left-0"} ${z?"opacity-100":"opacity-0 pointer-events-none"}`,children:"Sin conexión: estás viendo una versión guardada"})]})},Dg=({currentView:y,onNavigate:S,theme:A,onToggleTheme:v})=>{const[E,z]=te.useState(!1),C=Y=>y.type===Y,H=Y=>{S(Y),z(!1)};return _.jsxs("header",{id:"main-header",className:"w-full border-b border-[#dad4cb] dark:border-[#383633] bg-[#ece9e4]/90 dark:bg-[#1c1b1b]/90 backdrop-blur-xs sticky top-0 z-40 transition-colors",children:[_.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between",children:[_.jsx("button",{id:"header-brand-logo",onClick:()=>H({type:"home"}),className:"text-left group inline-flex flex-col items-start focus:outline-none",children:_.jsx("span",{className:"font-serif text-lg sm:text-xl font-normal tracking-tight text-[#211e1c] dark:text-[#ede7e0] group-hover:text-[#b84e2a] dark:group-hover:text-[#cf6e4b] transition-colors",children:"Cartas que quedan"})}),_.jsxs("nav",{className:"hidden md:flex items-center gap-7 text-sm font-sans",children:[_.jsx("button",{id:"nav-link-archive",onClick:()=>H({type:"archive"}),className:`transition-colors tracking-wide py-1 text-xs uppercase ${C("archive")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium border-b border-[#b84e2a] dark:border-[#cf6e4b]":"text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0]"}`,children:"Archivo"}),_.jsx("button",{id:"nav-link-about",onClick:()=>H({type:"about"}),className:`transition-colors tracking-wide py-1 text-xs uppercase ${C("about")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium border-b border-[#b84e2a] dark:border-[#cf6e4b]":"text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0]"}`,children:"Sobre el proyecto"}),_.jsx("div",{className:"h-4 w-px bg-[#dad4cb] dark:bg-[#383633]"}),_.jsx($m,{theme:A,onToggle:v}),_.jsx(Pm,{className:"p-2 rounded-sm hover:bg-[#ece9e4]/60 dark:hover:bg-[#2a2927]"})]}),_.jsxs("div",{className:"flex items-center gap-2 md:hidden",children:[_.jsx($m,{theme:A,onToggle:v}),_.jsx(Pm,{className:"p-2 rounded-sm hover:bg-[#ece9e4]/60 dark:hover:bg-[#2a2927]"}),_.jsx("button",{id:"mobile-menu-toggle",type:"button",onClick:()=>z(!E),"aria-label":E?"Cerrar menú":"Abrir menú",className:"p-2 text-[#211e1c] dark:text-[#ede7e0] hover:bg-[#dad4cb]/40 dark:hover:bg-[#2a2927] rounded-sm transition-colors",children:E?_.jsx(zg,{className:"w-5 h-5",strokeWidth:1.75}):_.jsx(mg,{className:"w-5 h-5",strokeWidth:1.75})})]})]}),E&&_.jsx("div",{id:"mobile-nav-panel",className:"md:hidden border-t border-[#dad4cb] dark:border-[#383633] bg-[#ece9e4] dark:bg-[#1c1b1b] px-4 py-5 shadow-xs",children:_.jsxs("nav",{className:"flex flex-col gap-3 font-sans text-sm",children:[_.jsx("button",{id:"mobile-nav-home",onClick:()=>H({type:"home"}),className:`text-left py-2 px-2 text-sm tracking-wide rounded-xs ${C("home")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium bg-[#dad4cb]/30 dark:bg-[#2a2927]":"text-[#211e1c] dark:text-[#ede7e0]"}`,children:"Portada"}),_.jsx("button",{id:"mobile-nav-archive",onClick:()=>H({type:"archive"}),className:`text-left py-2 px-2 text-sm tracking-wide rounded-xs ${C("archive")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium bg-[#dad4cb]/30 dark:bg-[#2a2927]":"text-[#211e1c] dark:text-[#ede7e0]"}`,children:"Archivo de documentos"}),_.jsx("button",{id:"mobile-nav-about",onClick:()=>H({type:"about"}),className:`text-left py-2 px-2 text-sm tracking-wide rounded-xs ${C("about")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium bg-[#dad4cb]/30 dark:bg-[#2a2927]":"text-[#211e1c] dark:text-[#ede7e0]"}`,children:"Sobre el proyecto"})]})})]})},Og=({onNavigate:y})=>_.jsx("footer",{id:"main-footer",className:"w-full border-t border-[#dad4cb] dark:border-[#383633] mt-24 py-14 transition-colors",children:_.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 md:px-8",children:[_.jsxs("div",{className:"flex flex-col md:flex-row md:items-baseline justify-between gap-8",children:[_.jsxs("div",{className:"max-w-md",children:[_.jsx("h3",{className:"font-serif text-lg font-normal text-[#211e1c] dark:text-[#ede7e0]",children:"Cartas que quedan"}),_.jsx("p",{className:"font-serif italic text-sm text-[#6b645c] dark:text-[#9c958c] mt-1.5 leading-relaxed",children:"«Hay cosas que vale la pena dejar escritas.»"}),_.jsx("p",{className:"font-sans text-xs text-[#6b645c] dark:text-[#9c958c] mt-3 leading-relaxed",children:"Un archivo personal y editorial de reflexiones, cartas y preguntas humanas pensado para perdurar y volver a ser leído con calma."})]}),_.jsxs("div",{className:"flex flex-wrap gap-x-8 gap-y-3 font-sans text-xs tracking-wider uppercase text-[#6b645c] dark:text-[#9c958c]",children:[_.jsx("button",{onClick:()=>y({type:"home"}),className:"hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors focus:outline-none",children:"Portada"}),_.jsx("button",{onClick:()=>y({type:"archive"}),className:"hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors focus:outline-none",children:"Archivo"}),_.jsx("button",{onClick:()=>y({type:"about"}),className:"hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors focus:outline-none",children:"Sobre el proyecto"})]})]}),_.jsxs("div",{className:"mt-12 pt-6 border-t border-[#dad4cb]/50 dark:border-[#383633]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#8c8479] dark:text-[#7d756a] font-sans",children:[_.jsx("span",{children:"Un archivo digital de lectura pausada."}),_.jsx("span",{className:"mt-1 sm:mt-0",children:"2026"})]})]})}),xg=`---\r
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
**«¿Qué podría aprender si, por una vez, me quedo en silencio y lo escucho?»**`,_g=`---\r
title: "La relatividad de la religión"\r
category: "Fe"\r
secondaryCategory: "Sociedad · Empatía"\r
tags: "Fe, Religión, Jesús, Dios, Biblia, Discernimiento, Fanatismo, Empatía"\r
excerpt: "Quizás el mensaje no dependa tanto de la religión desde la que lo contamos, sino de lo que hacemos con aquello que aprendemos. Una invitación a separar la fe del fanatismo y aprender a discernir."\r
date: "2026-10-05"\r
readingTime: "8 min de lectura"\r
biblicalQuote: "Examinadlo todo; retened lo bueno."\r
biblicalReference: "1 Tesalonicenses 5:21"\r
biblicalContext: "Pablo invita a la comunidad a no aceptar todo ciegamente, sino a examinar lo que escucha y conservar aquello que considera bueno."\r
---\r
\r
Estas cartas te las estoy escribiendo en términos de Jesús, Dios y la Biblia porque es el entorno que nos rodea. Pero hay algo que quiero dejar claro: **esto no está limitado a esos conceptos**.\r
\r
Es la forma en la que me comunico con vos porque tenemos en común una crianza católica o cristiana y vivimos en un continente donde estas son algunas de las tradiciones religiosas predominantes. Compartimos ciertas historias, símbolos, personajes y libros. Es nuestro lenguaje común.\r
\r
Pero el mensaje no depende necesariamente de ese lenguaje.\r
\r
Todas estas ideas podrían explicarse de otra manera a alguien que no cree en Dios. A un ateo probablemente le hablaría de ética, moral, filosofía, empatía, justicia o responsabilidad humana, y citaría autores que hayan reflexionado sobre estos temas desde una perspectiva no religiosa.\r
\r
A un musulmán podría hablarle de Alá, Isa al-Masih y el Corán. A un hinduista podría hablarle del dharma, el karma, la compasión y las enseñanzas de sus distintas tradiciones. A un budista podría hablarle del sufrimiento, la compasión, el desapego y el camino hacia una vida más consciente.\r
\r
**El lenguaje cambia. La conversación no necesariamente.**\r
\r
A vos te hablo en términos cristianos porque es la tradición que tenemos en común, aunque yo no siga ninguna religión.\r
\r
No necesito considerarme religioso para encontrar valor en algunas de las enseñanzas que contiene la Biblia. Puedo leerla como una colección de textos religiosos, históricos, poéticos, sapienciales y mitológicos que han sido transmitidos, traducidos, interpretados, editados y reinterpretados durante siglos.\r
\r
Puedo encontrar en ella cosas que considero profundamente valiosas y otras que considero terribles.\r
\r
Y ahí está, para mí, una de las cosas más importantes:\r
\r
**Discernir.**\r
\r
<blockquote data-biblical="true" data-ref="1 Tesalonicenses 5:21">\r
Examinadlo todo; retened lo bueno.\r
</blockquote>\r
\r
No creo que debamos aceptar una enseñanza únicamente porque está escrita en un libro sagrado, ni rechazarla únicamente porque pertenece a una religión.\r
\r
Una idea no se vuelve verdadera porque sea religiosa, ni falsa porque no lo sea.\r
\r
Hay que pensarla, cuestionarla y preguntarnos qué consecuencias tiene sobre nuestra manera de tratar a los demás.\r
\r
Las religiones son, en buena medida, intentos humanos de explicar cosas que se salen de nuestro entendimiento: la existencia, la muerte, el sufrimiento, el amor, el bien, el mal, la conciencia, el propósito de la vida y aquello que algunas personas llaman Dios.\r
\r
Cada tradición construyó sus propias respuestas, con sus dioses, profetas, historias, rituales y libros sagrados. Algunas respuestas son muy diferentes entre sí. Otras terminan llegando a lugares sorprendentemente parecidos.\r
\r
Por eso me interesa mucho más lo que podemos aprender de ellas que la necesidad de decidir cuál tiene la razón absoluta.\r
\r
Podemos discutir durante siglos si Dios existe, cuál religión es verdadera o cuál libro fue realmente inspirado por una divinidad.\r
\r
Pero mientras hacemos eso, podemos estar olvidando algo mucho más sencillo:\r
\r
**¿Cómo estamos tratando a las personas que tenemos al lado?**\r
\r
Porque si una enseñanza me hace más empático, más justo, más humilde, más compasivo y más consciente del daño que puedo causar, me interesa.\r
\r
Si me enseña a cuidar al vulnerable, a perdonar, a escuchar a quien piensa diferente y a reconocer mis propios errores, me interesa.\r
\r
Y si una interpretación de la religión me lleva al odio, a la discriminación, a la violencia o a creer que tengo derecho a despreciar a otros porque piensan diferente, entonces creo que tengo la obligación de cuestionarla, incluso si alguien puede encontrar una justificación para ella dentro de un libro sagrado.\r
\r
## Cuando la religión se convierte en fanatismo\r
\r
A veces alguien muy religioso se ofende cuando otra persona habla de Jesús de una manera que no coincide exactamente con lo que conoce de la Biblia.\r
\r
Incluso aparecen discusiones absurdas sobre cosas que, en realidad, no podemos saber.\r
\r
Por ejemplo, hay personas que se indignan ante la posibilidad de que Jesús haya tenido relaciones sexuales. No porque exista una prueba histórica de que las tuvo o no las tuvo, sino porque para ellos la idea resulta incompatible con la imagen sagrada que construyeron alrededor de él.\r
\r
Pero hay que entender algo fundamental:\r
\r
**Vos y yo no conocimos a Jesús en persona.**\r
\r
No sabemos con certeza absoluta ni siquiera todos los detalles de su existencia histórica. Creemos determinadas cosas sobre él porque existen tradiciones y textos antiguos que hablan de su vida.\r
\r
Tampoco podemos saber qué hizo durante cada momento de su vida, qué pensó en privado, qué sintió o qué ocurrió en todos esos años de los que prácticamente no tenemos información.\r
\r
Los evangelios tampoco son una grabación de una cámara que estuvo presente durante toda su vida. Son textos religiosos transmitidos dentro de una tradición determinada y escritos décadas después de los acontecimientos que narran.\r
\r
Y alrededor de Jesús también surgieron otros textos y tradiciones que no terminaron formando parte del canon bíblico. Incluso dentro del cristianismo existen distintas interpretaciones sobre cuáles textos tienen autoridad y cómo deben entenderse.\r
\r
Entonces, ¿por qué convertir en una batalla moral algo que simplemente no podemos saber?\r
\r
No sabemos qué hizo Jesús "fuera de cámaras".\r
\r
Y, sinceramente, tampoco debería importarnos demasiado.\r
\r
Jesús era un ser humano. Comía, dormía, sudaba, se enfermaba, tenía necesidades fisiológicas y, como cualquier persona, tenía un cuerpo.\r
\r
Hacía popó.\r
\r
Y probablemente su mierda olía feo como la de cualquier ser vivo.\r
\r
Eso no le quita absolutamente nada a sus enseñanzas.\r
\r
Tampoco tendría sentido escandalizarse porque alguien plantee que pudo haber sentido deseo sexual, haberse masturbado o haber tenido relaciones sexuales.\r
\r
No estoy afirmando que haya ocurrido.\r
\r
**Estoy diciendo que no lo sabemos y que tampoco necesitamos saberlo para valorar sus enseñanzas.**\r
\r
Si Jesús tuvo una vida sexual, eso no convertiría automáticamente sus enseñanzas en falsas. Si alguna vez se equivocó, tampoco significa que todo lo que enseñó pierda valor. Y si alguna vez hirió a alguien, pudo haber aprendido de ello.\r
\r
Tal vez tu problema es que considerás que alguien que puede sangrar, que puede equivocarse y que tiene tus mismos deseos no te puede enseñar nada. Porque tenés esa necesidad de que solo podés aprender de un ser divino y perfecto.\r
\r
**Y ahí te veo mal porque esto de da la excusa de rechazar las enseñanzas de tu prójimo y excusarte en un libro antiguo para sentir superioridad moral.**\r
\r
De hecho, podemos entender algo importante desde ahí:\r
\r
**Tener necesidades humanas, cometer errores o sentir deseos no convierte a una persona en alguien malo.**\r
\r
Vos podés culiar y ser una buena persona.\r
\r
Podés equivocarte, hacerle daño a alguien, reconocerlo, aprender de ello y convertirte en una persona mejor.\r
\r
Podés sentir rabia y aun así decidir no hacerle daño a nadie.\r
\r
Podés tener deseos que no compartís con otras personas y seguir siendo alguien digno, empático y responsable.\r
\r
No deberíamos convertir cada aspecto de la condición humana en algo impuro.\r
\r
## Lo importante no es ganar la discusión\r
\r
Creo que parte del problema del fanatismo religioso es que convierte las enseñanzas en una especie de examen de pertenencia.\r
\r
Ya no importa tanto qué podemos aprender de una historia, sino demostrar que nuestra interpretación es la correcta y que la del otro está equivocada.\r
\r
Entonces terminamos discutiendo si Jesús tuvo sexo, si María Magdalena fue su pareja, si determinado milagro ocurrió exactamente como está escrito, cuál traducción de un versículo es más correcta o qué palabra utilizó realmente una persona hace dos mil años.\r
\r
Y mientras tanto, podemos estar ignorando lo más importante.\r
\r
¿Estamos siendo buenas personas?<br>\r
¿Estamos tratando con dignidad a quienes piensan diferente?<br>\r
¿Estamos ayudando a quien necesita ayuda?<br>\r
¿Estamos siendo justos?<br>\r
¿Estamos escuchando?<br>\r
¿Estamos perdonando?<br>\r
¿Estamos cuestionando nuestras propias ideas?<br>\r
¿Estamos utilizando nuestra fe para amar o para sentirnos superiores?\r
\r
Para mí, esas preguntas tienen mucho más valor que ganar una discusión sobre quién interpreta correctamente un texto antiguo.\r
\r
No quiero quitarle valor a la religión.\r
\r
**Quiero quitarle el fanatismo.**\r
\r
No quiero decirte qué tenés que creer. Quiero que tengás la libertad de pensar.\r
\r
No quiero que aceptés algo porque yo lo digo. Quiero que lo cuestionés.\r
\r
Y tampoco quiero que rechacés una enseñanza solamente porque proviene de una religión.\r
\r
**Quiero que aprendás a discernir.**\r
\r
Tomá lo que te haga una persona más justa, más libre, más consciente y más humana.\r
\r
Cuestioná aquello que te enseñe a odiar, a discriminar o a justificar el daño.\r
\r
Y no tengás miedo de reconocer que una misma tradición puede contener sabiduría y contradicciones, belleza y barbarie, compasión y violencia.\r
\r
Quizás ese sea uno de los mayores aprendizajes que podemos sacar de todas las religiones: no que alguna de ellas tenga necesariamente todas las respuestas, sino que **los seres humanos llevamos miles de años intentando encontrar respuestas a las mismas preguntas fundamentales**.\r
\r
Cambian los nombres.<br>\r
Cambian los dioses.<br>\r
Cambian los profetas.<br>\r
Cambian los libros.<br>\r
Cambian los rituales.\r
\r
Pero seguimos preguntándonos cómo vivir, cómo amar, cómo convivir, cómo enfrentar el sufrimiento y cómo construir una sociedad más justa.\r
\r
Y quizás ahí está lo verdaderamente importante.\r
\r
No en discutir quién tiene el libro correcto.\r
\r
Sino en preguntarnos qué hacemos con lo que aprendemos de él.`,Mg=`---\r
title: "Mientras más se sabe, más se sufre"\r
category: "Sociedad"\r
secondaryCategory: "Política · Empatía"\r
tags: "Sociedad, Política, Colombia, Empatía, Consciencia, Violencia, Fe, Eclesiastés"\r
excerpt: "Hay cosas que duelen no solamente por lo que están pasando, sino por descubrir que a muchas de las personas que queremos parece no importarles. Esta es una carta sobre el dolor de estar consciente cuando otros prefieren no mirar."\r
date: "2026-09-25"\r
readingTime: "8 min de lectura"\r
biblicalQuote: "Francamente, mientras más sabiduría, más problemas; mientras más se sabe, más se sufre."\r
biblicalReference: "Eclesiastés 1:18"\r
biblicalContext: "El autor de Eclesiastés reflexiona sobre el peso que puede traer el conocimiento y la conciencia de la realidad humana."\r
---\r
\r
Este proyecto es mi interpretación personal de la forma en la que yo entiendo las enseñanzas que nos dejan las Sagradas Escrituras. Precisamente por eso lo creé. Porque hay cosas que pienso, cosas que siento y cosas que voy entendiendo que no me quiero guardar.\r
\r
No pretendo tener la verdad absoluta. Mucho menos pretendo decirle a alguien cómo tiene que pensar. Pero sí quiero poder decir lo que pienso.\r
\r
Y si no te gusta lo que estás leyendo y vas a buscarme para tratarme mal por lo que aquí escribo, esto no es para vos. Evitáte la fatiga y salíte de aquí.\r
\r
No porque no quiera escuchar a quien piensa diferente. Al contrario. Creo que conversar con quien piensa distinto puede ser una de las cosas más enriquecedoras que podemos hacer. Pero una cosa es pensar diferente y otra muy distinta es querer callar al otro porque lo que dice nos incomoda. Y si que lo he vivido de gente que consideraba cercana. Recibir insultos, gritos, que tuerza sus ojos cuando le hablo por tener un punto de vista diferente.\r
\r
Yo necesito hablar de esto.\r
\r
Porque desde muy niño he cuestionado prácticamente todo. Todo lo quiero entender. Y cuando algo no me gusta, necesito expresarlo. A veces eso es una virtud y otras veces es una condena.\r
\r
Porque es una pesadilla crecer rodeado de personas que no quieren cuestionar nada, que no quieren entender demasiado y que prefieren no expresar lo que piensan para no meterse en problemas. Y hay algo que a veces me duele todavía más: personas que durante años me han dicho que soy muy inteligente, que valoran mi forma de pensar y de cuestionar las cosas, de repente parecen dejar de verme así cuando lo que pienso deja de coincidir con lo que ellos creen. Ya no les parece tan interesante escucharme, o simplemente dejan de hacerlo. Y tal vez ser tan consciente sea, en parte, la raíz de mucho de mi dolor.\r
\r
<blockquote data-biblical="true" data-ref="Eclesiastés 1:18">\r
Francamente, mientras más sabiduría, más problemas; mientras más se sabe, más se sufre.\r
</blockquote>\r
\r
## Hay cosas que preferiría no saber\r
\r
A veces entiendo por qué alguien preferiría no enterarse de ciertas cosas. Entiendo que alguien quiera vivir tranquilo, apagar las noticias, dejar de discutir de política, no leer informes, no mirar las cifras y seguir con su vida.\r
\r
Porque hay una tranquilidad que se pierde cuando empezás a mirar demasiado. Cuando empezás a entender que detrás de una cifra hay personas, que detrás de una decisión política hay familias, que detrás de una guerra hay alguien que no volvió a su casa, que detrás de un desplazamiento hay alguien que tuvo que abandonar la suya y que detrás de una reforma económica puede haber alguien que simplemente no tenga cómo pagar las consecuencias.\r
\r
Tal vez por eso Eclesiastés me parece tan incómodo. Porque no presenta el conocimiento como algo completamente agradable. A veces saber más significa sufrir más.\r
\r
Y yo lo entiendo.\r
\r
Entiendo incluso que algunas personas prefieran permanecer anestesiadas. Lo que me cuesta entender es cuando esa anestesia empieza a convertirse en indiferencia. Cuando dejamos de mirar porque aquello que estamos viendo no nos afecta directamente. Cuando una tragedia solamente nos importa cuando toca nuestra puerta.\r
\r
## Lo que está pasando en Colombia\r
\r
No quiero convertir esta carta en un informe político. Pero tampoco quiero fingir que nada está pasando.\r
\r
Colombia sigue enfrentando una situación humanitaria que no debería parecernos normal. La Defensoría del Pueblo reportó que durante el primer semestre de 2026 hubo 83 eventos de desplazamiento forzado masivo que afectaron a 15.960 personas, mientras otros 44 eventos de confinamiento restringieron la movilidad de 64.787 personas.\r
\r
Y esto no es una discusión de Twitter.\r
\r
No son números para ganar una pelea política.\r
\r
Son personas. Son campesinos. Son comunidades enteras. Son familias.\r
\r
También hay razones para preocuparnos por la economía. En su informe de política monetaria de agosto de 2026, el Banco de la República señaló que la inflación continuaba aumentando y se alejaba de la meta del 3 %, en un contexto de presiones asociadas, entre otras cosas, al gasto y a los costos laborales.\r
\r
Y en materia internacional también estamos viendo cambios importantes. El nuevo gobierno ha anunciado una nueva etapa de relaciones con Estados Unidos y ha firmado instrumentos de cooperación en energía nuclear y minerales críticos. Apenas el 24 de septiembre, además, la Cancillería anunció la ruptura de relaciones diplomáticas con Irán.\r
\r
Podemos discutir cada una de estas decisiones. Podemos estar de acuerdo o no. Podemos defenderlas o cuestionarlas.\r
\r
Eso es precisamente lo que deberíamos estar haciendo.\r
\r
**Pensando. Preguntando. Investigando.**\r
\r
No repitiendo lo que dice el político que nos gusta.\r
\r
Porque el problema no es que pensemos diferente.\r
\r
El problema es cuando dejamos de pensar.\r
\r
## Lo que más me duele\r
\r
A veces hablo con algunas personas acerca de la violencia que estamos viviendo. Y me preocupa profundamente que volvamos a creer que la violencia puede ser el camino para construir paz.\r
\r
Ya hemos vivido eso.\r
\r
Colombia lleva décadas intentando resolver problemas políticos y sociales a través de la fuerza. Y todavía estamos pagando las consecuencias.\r
\r
Lo que más me duele es escuchar como respuesta:\r
\r
**«En Colombia siempre ha habido violencia».**\r
\r
Sí.\r
\r
Precisamente por eso debería importarnos.\r
\r
Que algo haya ocurrido siempre no significa que debamos aceptarlo como normal. Decir «siempre ha sido así» no explica nada, no soluciona nada y mucho menos debería servir para justificar que siga ocurriendo.\r
\r
Porque si usamos el pasado para justificar el presente, entonces nunca vamos a cambiar nada.\r
\r
Me duele lo que está pasando. Pero, honestamente, a veces me duele todavía más que a muchas personas que conozco les parezca completamente normal.\r
\r
O que incluso lo justifiquen.\r
\r
O que inmediatamente busquen la manera de culpar al gobierno anterior por cualquier cosa que ocurre hoy.\r
\r
Y aquí también tengo que ser justo. Los gobiernos anteriores dejaron problemas. Muchísimos. Hay decisiones de gobiernos anteriores que yo mismo cuestiono.\r
\r
Pero resulta extraño que durante años cualquier mínimo detalle del gobierno anterior fuera motivo de indignación, odio, rabia y crítica, mientras ahora algunas cosas mucho más graves parecen recibir silencio.\r
\r
¿Dónde quedó esa indignación?\r
\r
¿Dónde quedó la capacidad de cuestionar?\r
\r
¿Dónde quedó el criterio?\r
\r
No me preocupa que alguien vote diferente a mí. Me preocupa que, después de hacerlo, parezca perder la capacidad de cuestionar a la persona que eligió. Que todo lo que antes le parecía criticable de un gobierno, de repente deje de serlo simplemente porque esta vez ganó alguien por quien votó.\r
\r
Porque la democracia no debería funcionar como una hinchada de fútbol. Un presidente no es nuestro equipo. No tenemos que defender todo lo que haga solamente porque alguna vez marcamos su nombre en un tarjetón.\r
\r
## No entiendo algunas cosas\r
\r
Hay decisiones que simplemente no logro comprender.\r
\r
No sé en qué cabeza cabe que acabar con nuestras zonas de producción agrícola pueda ser presentado como algo positivo. \r
\r
No sé en qué cabeza cabe que privatizar o debilitar la educación pública pueda considerarse una buena noticia para todos. \r
\r
No sé en qué cabeza cabe que entregar recursos estratégicos del país a intereses extranjeros sea automáticamente beneficioso para los colombianos.\r
\r
No sé en qué cabeza cabe que alguien que piensa diferente sea convertido en un enemigo al que hay que destripar.\r
\r
No sé en qué cabeza cabe que matar ciudadanos inocentes y después presentarlos como guerrilleros pueda llegar a justificarse.\r
\r
Y tampoco entiendo esa facilidad que tenemos para defender determinadas cosas cuando las hace «nuestro lado», pero considerarlas imperdonables cuando las hace el lado contrario.\r
\r
Ahí hay algo que me preocupa más que cualquier partido político.\r
\r
**La incoherencia.**\r
\r
Porque si algo está mal, debería estar mal independientemente de quién lo haga.\r
\r
Si matar inocentes está mal, está mal cuando lo hace un guerrillero, un paramilitar, un soldado o cualquier otra persona. \r
\r
Si la corrupción está mal, está mal cuando la comete alguien por el que votamos. \r
\r
Si mentir está mal, está mal incluso cuando la mentira favorece nuestra causa.\r
\r
Si un gobierno abusa de su poder, deberíamos cuestionarlo aunque hayamos ayudado a elegirlo.\r
\r
Eso, para mí, también es tener conciencia.\r
\r
## La burbuja en la que vivimos\r
\r
Hay algo que me cuesta mucho aceptar: que nuestra percepción de la realidad depende demasiado de cuánto nos toca.\r
\r
Si vivimos tranquilos, pensamos que el país está tranquilo. Si tenemos trabajo, pensamos que la economía está bien. Si nuestros hijos pueden estudiar, pensamos que la educación funciona. Si nunca hemos tenido que salir corriendo de nuestra casa, pensamos que el desplazamiento es un problema lejano.\r
\r
Si nunca hemos visto un cadáver en una carretera, podemos permitirnos discutir sobre la guerra como si fuera un concepto abstracto.\r
\r
Y tal vez ahí está una de las formas más silenciosas de la indiferencia: **confundir nuestra experiencia personal con la realidad de todo un país.**\r
\r
Yo también tengo una burbuja. También tengo privilegios. También hay dolores de Colombia que no conozco porque nunca me han tocado directamente.\r
\r
Por eso no escribo esto desde un pedestal. Lo escribo precisamente porque me preocupa descubrir cuánto podemos acostumbrarnos al sufrimiento de otros.\r
\r
## Y también me duele la tibieza\r
\r
Hay algo más que me cuesta: la tibieza.\r
\r
Esas personas que ven que algo está mal, lo reconocen en privado, incluso se quejan de ello, pero cuando llega el momento de decir algo prefieren quedarse calladas.\r
\r
No porque estén de acuerdo.\r
\r
Sino porque no quieren meterse en problemas.\r
\r
Y entiendo ese miedo. Yo también quiero evitar conflictos. Yo también quisiera vivir tranquilo.\r
\r
Pero a veces siento que hemos convertido la tranquilidad personal en una prioridad tan grande que estamos dispuestos a tolerar casi cualquier cosa con tal de conservarla.\r
\r
Y eso me preocupa.\r
\r
Porque hubo momentos en nuestra historia en los que alguien tuvo que hablar. Alguien tuvo que salir. Alguien tuvo que incomodarse. Alguien tuvo que decir «esto no está bien».\r
\r
Y seguramente muchos de los que hoy admiramos por haber defendido ciertos derechos también fueron vistos en su momento como problemáticos, exagerados, revoltosos o peligrosos.\r
\r
No quiero romantizar la violencia ni la confrontación. Al contrario. Creo profundamente que podemos defender nuestros derechos sin convertir al otro en nuestro enemigo.\r
\r
Pero **callar tampoco es neutral cuando lo que está ocurriendo afecta la vida de otros.**\r
\r
## Y aquí aparece Jesús\r
\r
Esto es, quizá, lo que más me interesa de todo este proyecto.\r
\r
Porque si yo digo que creo en Jesús, entonces también tengo que preguntarme qué hago con todo esto.\r
\r
Jesús no parecía demasiado interesado en que sus seguidores vivieran cómodamente mientras otros sufrían. No parecía interesado en construir una fe encerrada en un templo. No parecía decirle a la gente que ignorara el dolor del que estaba al lado.\r
\r
Al contrario.\r
\r
Una y otra vez llevó la mirada hacia el otro. Hacia el pobre, hacia el enfermo, hacia el extranjero, hacia el rechazado, hacia el que nadie quería tocar.\r
\r
Y eso me hace pensar que **la conciencia también puede ser una forma de amor**.\r
\r
Porque si veo el sufrimiento de alguien y me importa, algo dentro de mí cambia. Ya no puedo decir que no sabía. Ya no puedo esconderme detrás de la ignorancia. Ya no puedo actuar como si el problema no existiera.\r
\r
Tal vez por eso saber duele.\r
\r
Porque cuando realmente entendemos algo, también adquirimos una responsabilidad frente a lo que entendimos.\r
\r
## No quiero que pensemos igual\r
\r
Quiero aclarar algo.\r
\r
No escribí esta carta para que vos pensés como yo. De hecho, espero que no.\r
\r
Quiero que pensés. Que investigués. Que leás. Que escuchés incluso a quien no votó como vos. Que cuestionés al gobierno que apoyaste y que cuestionés al gobierno que rechazaste. Que no conviertas a ningún político en una figura que tenga permiso para hacer cualquier cosa.\r
\r
Y, sobre todo, que no permitás que tu ideología sea más importante que la vida de una persona.\r
\r
Porque tal vez ahí es donde nos estamos equivocando.\r
\r
Nos hemos acostumbrado tanto a discutir quién tiene la razón que se nos olvidó preguntarnos quién está sufriendo.\r
\r
Y mientras nosotros discutimos en redes sociales, hay gente que está perdiendo su casa. Hay gente que está siendo desplazada. Hay familias que tienen miedo. Hay personas que no saben qué va a pasar mañana.\r
\r
Y yo no quiero acostumbrarme a eso.\r
\r
## Esto es lo que necesitaba sacar\r
\r
Me duele Colombia.\r
\r
Me preocupa Colombia.\r
\r
Pero también me duele estar rodeado de personas a las que parece no importarles.\r
\r
Me duele escuchar cómo se justifican cosas que, si las hubiera hecho el otro bando, probablemente estarían denunciando con toda la fuerza. Me duele ver cómo la empatía se vuelve selectiva. Me duele ver cómo la indignación depende del color político de quien hizo la cosa.\r
\r
Me duele la indiferencia.\r
\r
Me duele la tibieza.\r
\r
Me duele esa tranquilidad de quien piensa que mientras no le toque a él, todo está bien.\r
\r
Y quizás todo este dolor sea precisamente el precio de estar consciente.\r
\r
Eclesiastés lo dijo hace muchísimo tiempo.\r
\r
<blockquote data-biblical="true" data-ref="Eclesiastés 1:18">\r
Mientras más sabiduría, más problemas; mientras más se sabe, más se sufre.\r
</blockquote>\r
\r
Tal vez sí.\r
\r
Tal vez saber duele.\r
\r
Pero prefiero que me duela saber que estoy viviendo en un país donde hay personas sufriendo, a vivir tranquilo porque decidí no mirar.\r
\r
Prefiero hacerme preguntas incómodas. Prefiero equivocarme intentando entender. Prefiero incomodarme. Prefiero hablar.\r
\r
Prefiero que alguien me diga que estoy equivocado y tener que revisar mis ideas, antes que dejar de pensar solamente para sentirme tranquilo.\r
\r
Porque al final, esta carta no es realmente sobre el gobierno.\r
\r
Ni sobre la izquierda.\r
\r
Ni sobre la derecha.\r
\r
Ni sobre Petro.\r
\r
Ni sobre Abelardo.\r
\r
Es sobre algo mucho más incómodo:\r
\r
**¿Qué hacemos cuando empezamos a ver cosas que preferiríamos no ver?**\r
\r
¿Miramos para otro lado? ¿Nos convencemos de que no es tan grave? ¿Esperamos a que le pase a alguien cercano? ¿O dejamos que lo que vemos nos mueva a hacer algo?\r
\r
No sé cuál sea tu respuesta.\r
\r
Yo todavía estoy tratando de encontrar la mía.\r
\r
Solo sé que guardar todo esto adentro se estaba convirtiendo en veneno para mi alma.\r
\r
Y necesitaba sacarlo.\r
\r
Perdón si te incomodé.\r
\r
No sé por qué llegaste hasta este punto.\r
\r
Pero yo sí necesitaba llegar hasta acá.\r
\r
Y si algo de lo que escribí te molestó, ojalá no te quedés solamente con la molestia.\r
\r
**Ojalá te haga pensar.**\r
`,jg=`---
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
`,Cg=`---\r
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
**Es si estamos dispuestos a reconocer el mensaje cuando llega en una voz humana.**`,Ug=`---\r
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
**¿Qué tan parecido al amor de Dios se siente el mundo cuando pasa por vos?**`;function Yg(y){const S={},A=y.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);if(!A)return{meta:S,body:y.trim()};const v=A[1],E=A[2].trim();for(const z of v.split(/\r?\n/)){const C=z.indexOf(":");if(C===-1)continue;const H=z.slice(0,C).trim();let Y=z.slice(C+1).trim();(Y.startsWith('"')&&Y.endsWith('"')||Y.startsWith("'")&&Y.endsWith("'"))&&(Y=Y.slice(1,-1)),S[H]=Y}return{meta:S,body:E}}function Hg(y,S){if(S.size===0)return y;const A=E=>{const z=E.replace(/^\.\//,"");return S.get(z)??E};let v=y.replace(/(!\[.*?\]\()(\.\/[^)\s]+)(\))/g,(E,z,C,H)=>`${z}${A(C)}${H}`);return v=v.replace(/(src|srcset)=["'](\.\/[^"']+)["']/gi,(E,z,C)=>`${z}="${A(C)}"`),v}function Rg(y){return y.replace(/<[^>]+>/g," ").replace(/[#>*_`~-]/g," ").replace(/\[[^\]]*\]\([^)]*\)/g," ").trim().split(/\s+/).filter(Boolean).length}function Bg(y){const[S,A,v]=y.split("-").map(Number);return!S||!A||!v?y:new Date(S,A-1,v).toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})}const Qg=Object.assign({"/src/contenido/el-arte-de-escuchar-a-quien-piensa-distinto/carta.md":xg,"/src/contenido/la-relatividad-de-la-religion/carta.md":_g,"/src/contenido/mientras-mas-se-sabe-mas-se-sufre/carta.md":Mg,"/src/contenido/si-matamos-a-todos-los-malos/carta.md":jg,"/src/contenido/y-si-dios-se-revela-a-traves-de-lo-humano/carta.md":Cg,"/src/contenido/y-si-hemos-entendido-mal-el-amor-de-dios/carta.md":Ug}),Lg=Object.assign({});function Gg(){const y=new Map;for(const[S,A]of Object.entries(Lg)){const v=S.replace(/\\/g,"/").split("/"),E=v[3],z=v.slice(4).join("/");!E||!z||(y.has(E)||y.set(E,new Map),y.get(E).set(z,A.default))}return y}const Xg=Gg();function Vg(){const y=[];for(const[S,A]of Object.entries(Qg)){const E=S.replace(/\\/g,"/").split("/")[3];if(!E)continue;const{meta:z,body:C}=Yg(A),H=Xg.get(E)??new Map,Y=Hg(C,H),$=(z.tags??"").split(",").map(G=>G.trim()).filter(Boolean),qe=z.biblicalQuote&&z.biblicalReference?{quote:z.biblicalQuote,reference:z.biblicalReference,context:z.biblicalContext||void 0}:void 0;y.push({slug:E,title:z.title??"",category:z.category??"Sociedad",secondaryCategory:z.secondaryCategory||void 0,tags:$,excerpt:z.excerpt??"",date:z.date??"",year:(z.date??"").slice(0,4),formattedDate:Bg(z.date??""),readingTime:z.readingTime??"",wordCount:Rg(Y),biblicalQuote:qe,body:Y})}return y.sort((S,A)=>new Date(A.date).getTime()-new Date(S.date).getTime()),y.map((S,A)=>({...S,indexNumber:String(A+1).padStart(2,"0")}))}const ol=Vg(),Zg={Guerra:"Reflexiones sobre el conflicto, la violencia y sus costos humanos",Paz:"La búsqueda activa de reconciliación y convivencia serena",Fe:"Preguntas honestas sobre lo sagrado, la gracia y la trascendencia",Amor:"La entrega sincera, el desapego y los vínculos afectivos",Justicia:"La defensa de la verdad y la dignidad de los desamparados",Libertad:"La soberanía de la conciencia frente a la coerción",Familia:"Los lazos de origen, las memorias compartidas y el perdón mutuo",Sociedad:"Los desafíos comunes de nuestra convivencia contemporánea",Miedo:"El reconocimiento de la vulnerabilidad y el valor de resistir",Empatía:"El ejercicio de ponerse en los zapatos y el dolor de otro ser",Política:"La integridad moral por encima del partidismo y el poder"},Pg=Object.entries(Zg).map(([y,S])=>({name:y,description:S,count:ol.filter(A=>A.category.toLowerCase()===y.toLowerCase()||A.tags.some(v=>v.toLowerCase()===y.toLowerCase())).length})),Jg=te.lazy(()=>It(()=>import("./HomeView-DG-WTxpx.js"),__vite__mapDeps([0,1,2,3,4,5])).then(y=>({default:y.HomeView}))),Kg=te.lazy(()=>It(()=>import("./ArchiveView-v59GDOXd.js"),__vite__mapDeps([6,1,2,3,5])).then(y=>({default:y.ArchiveView}))),wg=te.lazy(()=>It(()=>import("./LetterDetailView-D8r9_G5J.js"),__vite__mapDeps([7,1,3,8,4,5])).then(y=>({default:y.LetterDetailView}))),kg=te.lazy(()=>It(()=>import("./AboutView-BOGUG3nd.js"),__vite__mapDeps([9,1,8,5])).then(y=>({default:y.AboutView})));function Fg(){const y="cartas_que_quedan_theme",S=()=>typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",[A,v]=te.useState(()=>{if(typeof window<"u"){const T=localStorage.getItem(y);if(T==="dark"||T==="light")return T}return S()});te.useEffect(()=>{const T=document.documentElement;A==="dark"?T.classList.add("dark"):T.classList.remove("dark")},[A]),te.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const T=window.matchMedia("(prefers-color-scheme: dark)"),me=se=>{const ha=localStorage.getItem(y);ha==="dark"||ha==="light"||v(se.matches?"dark":"light")};return T.addEventListener("change",me),()=>T.removeEventListener("change",me)},[]);const E=()=>{v(T=>{const me=T==="light"?"dark":"light";return localStorage.setItem(y,me),me})},[z,C]=te.useState(()=>{if(typeof window<"u"){const T=localStorage.getItem("cartas_que_quedan_fontsize");if(T&&["sm","base","lg","xl"].includes(T))return T}return"base"}),H=T=>{C(T),localStorage.setItem("cartas_que_quedan_fontsize",T)},[Y,$]=te.useState(!1),qe="/cartas/",G=T=>{const me=qe.replace(/\/$/,"");let se=T;return me&&se.startsWith(me)&&(se=se.slice(me.length)),se.startsWith("/")||(se=`/${se}`),se},M=T=>`${qe.replace(/\/$/,"")}${T}`||"/",ba=()=>{if(typeof window>"u")return{type:"home"};const T=G(window.location.pathname);if(T.startsWith("/carta/")){const me=T.replace("/carta/","").replace(/\/$/,"");if(me)return{type:"letter",slug:me}}else if(T==="/archivo"||T.startsWith("/archivo")){const me=new URLSearchParams(window.location.search),se=me.get("categoria")||void 0,ha=me.get("q")||void 0;return{type:"archive",category:se,search:ha}}else if(T==="/sobre"||T.startsWith("/sobre"))return{type:"about"};return{type:"home"}},[oe,ga]=te.useState(ba),w=(T,me=!1)=>{let se="/";T.type==="archive"?se=T.category?`/archivo?categoria=${encodeURIComponent(T.category)}`:"/archivo":T.type==="letter"?se=`/carta/${T.slug}`:T.type==="about"&&(se="/sobre"),se=M(se),me?window.history.replaceState({view:T},"",se):window.history.pushState({view:T},"",se),ga(T),window.scrollTo({top:0,behavior:"smooth"})};te.useEffect(()=>{const T=()=>{ga(ba())};return window.addEventListener("popstate",T),()=>window.removeEventListener("popstate",T)},[]),te.useEffect(()=>{oe.type!=="letter"&&Y&&$(!1)},[oe,Y]),te.useEffect(()=>{if(oe.type==="letter"){const T=ol.find(me=>me.slug===oe.slug);if(T){document.title=`${T.title} — Cartas que quedan`;return}}else if(oe.type==="archive"){document.title="Archivo de documentos — Cartas que quedan";return}else if(oe.type==="about"){document.title="Sobre el proyecto — Cartas que quedan";return}document.title="Cartas que quedan — Un archivo digital"},[oe]);const oa=oe.type==="letter"?ol.find(T=>T.slug===oe.slug)||ol[0]:null;return _.jsxs("div",{className:"min-h-screen flex flex-col bg-[#ece9e4] dark:bg-[#1c1b1b] text-[#211e1c] dark:text-[#ede7e0] transition-colors duration-200 selection:bg-[#b84e2a]/20 selection:text-[#211e1c] dark:selection:bg-[#cf6e4b]/30 dark:selection:text-[#ede7e0]",children:[!Y&&_.jsx(Dg,{currentView:oe,onNavigate:T=>w(T),theme:A,onToggleTheme:E}),_.jsx("main",{className:"flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 md:px-8",children:_.jsxs(te.Suspense,{fallback:_.jsx("div",{className:"flex items-center justify-center py-32 text-[#8c8479] dark:text-[#7d756a]",role:"status","aria-live":"polite",children:_.jsx("span",{className:"font-serif text-sm tracking-wide animate-pulse",children:"Cargando…"})}),children:[oe.type==="home"&&_.jsx(Jg,{letters:ol,onSelectLetter:T=>w({type:"letter",slug:T.slug}),onNavigateArchive:T=>w({type:"archive",category:T}),onNavigateAbout:()=>w({type:"about"})}),oe.type==="archive"&&_.jsx(Kg,{letters:ol,initialCategory:oe.category,initialSearch:oe.search,onSelectLetter:T=>w({type:"letter",slug:T.slug})}),oe.type==="letter"&&oa&&_.jsx(wg,{letter:oa,allLetters:ol,onBackToArchive:()=>w({type:"archive"}),onSelectCategory:T=>w({type:"archive",category:T}),onSelectLetter:T=>w({type:"letter",slug:T.slug}),theme:A,onToggleTheme:E,fontSize:z,onChangeFontSize:H,isFocusMode:Y,onToggleFocusMode:()=>$(T=>!T)}),oe.type==="about"&&_.jsx(kg,{onBackToHome:()=>w({type:"home"}),onGoToArchive:()=>w({type:"archive"})})]})}),!Y&&_.jsx(Og,{onNavigate:T=>w(T)})]})}og({immediate:!0});lg.createRoot(document.getElementById("root")).render(_.jsx(te.StrictMode,{children:_.jsx(Fg,{})}));export{Pg as C,pg as M,Pm as O,gg as S,zg as X,eu as c};
