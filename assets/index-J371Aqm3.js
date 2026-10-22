const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-c2A74lX-.js","assets/markdown-vbR1zjGP.js","assets/LetterList-CO6S9Hc8.js","assets/readingProgress-C06MaQqM.js","assets/arrow-right-BoKH6onE.js","assets/react-C46pKI1t.js","assets/ArchiveView-DY4upIoW.js","assets/rotate-ccw-Bj8yxQ5b.js","assets/LetterDetailView-CbXA_IBW.js","assets/arrow-left-BfwZwtXt.js","assets/AboutView-B9Hx-o2Q.js"])))=>i.map(i=>d[i]);
import{r as $b,a as te,j}from"./markdown-vbR1zjGP.js";import{r as Pb}from"./react-C46pKI1t.js";(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))p(E);new MutationObserver(E=>{for(const z of E)if(z.type==="childList")for(const C of z.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&p(C)}).observe(document,{childList:!0,subtree:!0});function x(E){const z={};return E.integrity&&(z.integrity=E.integrity),E.referrerPolicy&&(z.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?z.credentials="include":E.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function p(E){if(E.ep)return;E.ep=!0;const z=x(E);fetch(E.href,z)}})();var bs={exports:{}},Pt={},gs={exports:{}},hs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function Ib(){return Jf||(Jf=1,(function(q){function T(N,L){var Q=N.length;N.push(L);e:for(;0<Q;){var pe=Q-1>>>1,re=N[pe];if(0<E(re,L))N[pe]=L,N[Q]=re,Q=pe;else break e}}function x(N){return N.length===0?null:N[0]}function p(N){if(N.length===0)return null;var L=N[0],Q=N.pop();if(Q!==L){N[0]=Q;e:for(var pe=0,re=N.length,tn=re>>>1;pe<tn;){var il=2*(pe+1)-1,at=N[il],qa=il+1,sl=N[qa];if(0>E(at,Q))qa<re&&0>E(sl,at)?(N[pe]=sl,N[qa]=Q,pe=qa):(N[pe]=at,N[il]=Q,pe=il);else if(qa<re&&0>E(sl,Q))N[pe]=sl,N[qa]=Q,pe=qa;else break e}}return L}function E(N,L){var Q=N.sortIndex-L.sortIndex;return Q!==0?Q:N.id-L.id}if(q.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var z=performance;q.unstable_now=function(){return z.now()}}else{var C=Date,H=C.now();q.unstable_now=function(){return C.now()-H}}var U=[],$=[],ye=1,G=null,M=3,ba=!1,oe=!1,ga=!1,X=!1,ua=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;function se(N){for(var L=x($);L!==null;){if(L.callback===null)p($);else if(L.startTime<=N)p($),L.sortIndex=L.expirationTime,T(U,L);else break;L=x($)}}function ha(N){if(ga=!1,se(N),!oe)if(x(U)!==null)oe=!0,xa||(xa=!0,Ga());else{var L=x($);L!==null&&Ve(ha,L.startTime-N)}}var xa=!1,F=-1,ao=5,Un=-1;function ln(){return X?!0:!(q.unstable_now()-Un<ao)}function Da(){if(X=!1,xa){var N=q.unstable_now();Un=N;var L=!0;try{e:{oe=!1,ga&&(ga=!1,S(F),F=-1),ba=!0;var Q=M;try{a:{for(se(N),G=x(U);G!==null&&!(G.expirationTime>N&&ln());){var pe=G.callback;if(typeof pe=="function"){G.callback=null,M=G.priorityLevel;var re=pe(G.expirationTime<=N);if(N=q.unstable_now(),typeof re=="function"){G.callback=re,se(N),L=!0;break a}G===x(U)&&p(U),se(N)}else p(U);G=x(U)}if(G!==null)L=!0;else{var tn=x($);tn!==null&&Ve(ha,tn.startTime-N),L=!1}}break e}finally{G=null,M=Q,ba=!1}L=void 0}}finally{L?Ga():xa=!1}}}var Ga;if(typeof fe=="function")Ga=function(){fe(Da)};else if(typeof MessageChannel<"u"){var rl=new MessageChannel,no=rl.port2;rl.port1.onmessage=Da,Ga=function(){no.postMessage(null)}}else Ga=function(){ua(Da,0)};function Ve(N,L){F=ua(function(){N(q.unstable_now())},L)}q.unstable_IdlePriority=5,q.unstable_ImmediatePriority=1,q.unstable_LowPriority=4,q.unstable_NormalPriority=3,q.unstable_Profiling=null,q.unstable_UserBlockingPriority=2,q.unstable_cancelCallback=function(N){N.callback=null},q.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ao=0<N?Math.floor(1e3/N):5},q.unstable_getCurrentPriorityLevel=function(){return M},q.unstable_next=function(N){switch(M){case 1:case 2:case 3:var L=3;break;default:L=M}var Q=M;M=L;try{return N()}finally{M=Q}},q.unstable_requestPaint=function(){X=!0},q.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=M;M=N;try{return L()}finally{M=Q}},q.unstable_scheduleCallback=function(N,L,Q){var pe=q.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?pe+Q:pe):Q=pe,N){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Q+re,N={id:ye++,callback:L,priorityLevel:N,startTime:Q,expirationTime:re,sortIndex:-1},Q>pe?(N.sortIndex=Q,T($,N),x(U)===null&&N===x($)&&(ga?(S(F),F=-1):ga=!0,Ve(ha,Q-pe))):(N.sortIndex=re,T(U,N),oe||ba||(oe=!0,xa||(xa=!0,Ga()))),N},q.unstable_shouldYield=ln,q.unstable_wrapCallback=function(N){var L=M;return function(){var Q=M;M=L;try{return N.apply(this,arguments)}finally{M=Q}}}})(hs)),hs}var Kf;function eg(){return Kf||(Kf=1,gs.exports=Ib()),gs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf;function ag(){if(wf)return Pt;wf=1;var q=eg(),T=$b(),x=Pb();function p(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function z(e){for(var a=e,n=a;n&&!n.alternate;)a=n,(a.flags&4098)!==0&&(e=a.return),n=a.return;for(;a.return;)a=a.return;return a.tag===3?e:null}function C(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function H(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function U(e){if(z(e)!==e)throw Error(p(188))}function $(e){var a=e.alternate;if(!a){if(a=z(e),a===null)throw Error(p(188));return a!==e?null:e}for(var n=e,l=a;;){var t=n.return;if(t===null)break;var o=t.alternate;if(o===null){if(l=t.return,l!==null){n=l;continue}break}if(t.child===o.child){for(o=t.child;o;){if(o===n)return U(t),e;if(o===l)return U(t),a;o=o.sibling}throw Error(p(188))}if(n.return!==l.return)n=t,l=o;else{for(var u=!1,r=t.child;r;){if(r===n){u=!0,n=t,l=o;break}if(r===l){u=!0,l=t,n=o;break}r=r.sibling}if(!u){for(r=o.child;r;){if(r===n){u=!0,n=o,l=t;break}if(r===l){u=!0,l=o,n=t;break}r=r.sibling}if(!u)throw Error(p(189))}}if(n.alternate!==l)throw Error(p(190))}if(n.tag!==3)throw Error(p(188));return n.stateNode.current===n?e:a}function ye(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=ye(e),a!==null)return a;e=e.sibling}return null}function G(e,a,n,l,t,o){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,l,t,o)||(e.tag!==22||e.memoizedState===null)&&(a||e.tag!==5&&e.tag!==27)&&G(e.child,a,n,l,t,o))return!0;e=e.sibling}return!1}function M(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function ba(e){var a=!1;for(e=e.return;e!==null&&(e.tag===4&&(a=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return a}function oe(e){var a=[null,null],n=M(e);return n===null||ga(a,e,n.child,{foundSelf:!1}),a}function ga(e,a,n,l){for(;n!==null;){if(n===a)l.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(l.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ga(e,a,n.child,l))return!0;n=n.sibling}return!1}function X(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(p(559))}}var ua=null,S=null;function fe(e,a,n){return e===n?!0:e===a?(ua=e,!0):!1}function se(e,a,n){return e===n?(S=e,!1):e===a?(S!==null&&(ua=e),!0):!1}function ha(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function xa(e,a,n){for(var l=0,t=e;t;t=n(t))l++;t=0;for(var o=a;o;o=n(o))t++;for(;0<l-t;)e=n(e),l--;for(;0<t-l;)a=n(a),t--;for(;l--;){if(e===a||a!==null&&e===a.alternate)return e;e=n(e),a=n(a)}return null}var F=Object.assign,ao=Symbol.for("react.element"),Un=Symbol.for("react.transitional.element"),ln=Symbol.for("react.portal"),Da=Symbol.for("react.fragment"),Ga=Symbol.for("react.strict_mode"),rl=Symbol.for("react.profiler"),no=Symbol.for("react.consumer"),Ve=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),tn=Symbol.for("react.activity"),il=Symbol.for("react.legacy_hidden"),at=Symbol.for("react.memo_cache_sentinel"),qa=Symbol.for("react.view_transition"),sl=Symbol.for("react.recoverable"),qs=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=qs&&e[qs]||e["@@iterator"],typeof e=="function"?e:null)}var ep=Symbol.for("react.client.reference");function Yu(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ep?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Da:return"Fragment";case rl:return"Profiler";case Ga:return"StrictMode";case L:return"Suspense";case Q:return"SuspenseList";case tn:return"Activity";case qa:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ln:return"Portal";case Ve:return e.displayName||"Context";case no:return(e._context.displayName||"Context")+".Consumer";case N:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pe:return a=e.displayName||null,a!==null?a:Yu(e.type)||"Memo";case re:a=e._payload,e=e._init;try{return Yu(e(a))}catch{}}return null}var lt=Array.isArray,Y=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Hn={pending:!1,data:null,method:null,action:null},Uu=[],cl=-1;function Aa(e){return{current:e}}function je(e){0>cl||(e.current=Uu[cl],Uu[cl]=null,cl--)}function ce(e,a){cl++,Uu[cl]=e.current,e.current=a}var Oa=Aa(null),tt=Aa(null),on=Aa(null),lo=Aa(null);function to(e,a){switch(ce(on,a),ce(tt,e),ce(Oa,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Im(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Im(a),e=ef(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}je(Oa),ce(Oa,e)}function dl(){je(Oa),je(tt),je(on)}function Hu(e){var a=e.memoizedState;a!==null&&(Pl._currentValue=a.memoizedState,ce(lo,e)),a=Oa.current;var n=ef(a,e.type);a!==n&&(ce(tt,e),ce(Oa,n))}function oo(e){tt.current===e&&(je(Oa),je(tt)),lo.current===e&&(je(lo),Pl._currentValue=Hn)}var Qu,ys;function un(e){if(Qu===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);Qu=a&&a[1]||"",ys=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qu+e+ys}var Ru=!1;function Bu(e,a){if(!e||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(y){var c=y}Reflect.construct(e,[],h)}else{try{h.call()}catch(y){c=y}h=!1;try{var v=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),h=!0,new e}finally{h&&(v!==void 0?Object.defineProperty(e.prototype,"props",v):delete e.prototype.props)}}}else{try{throw Error()}catch(y){c=y}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(y){if(y&&c&&typeof y.stack=="string")return[y.stack,c.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var t=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");t&&t.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=l.DetermineComponentFrameRoot(),u=o[0],r=o[1];if(u&&r){var i=u.split(`
`),m=r.split(`
`);for(t=l=0;l<i.length&&!i[l].includes("DetermineComponentFrameRoot");)l++;for(;t<m.length&&!m[t].includes("DetermineComponentFrameRoot");)t++;if(l===i.length||t===m.length)for(l=i.length-1,t=m.length-1;1<=l&&0<=t&&i[l]!==m[t];)t--;for(;1<=l&&0<=t;l--,t--)if(i[l]!==m[t]){if(l!==1||t!==1)do if(l--,t--,0>t||i[l]!==m[t]){var b=`
`+i[l].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=l&&0<=t);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?un(n):""}function ap(e,a){switch(e.tag){case 26:case 27:case 5:return un(e.type);case 16:return un("Lazy");case 13:return e.child!==a&&a!==null?un("Suspense Fallback"):un("Suspense");case 19:return un("SuspenseList");case 0:case 15:return Bu(e.type,!1);case 11:return Bu(e.type.render,!1);case 1:return Bu(e.type,!0);case 31:return un("Activity");case 30:return un("ViewTransition");default:return""}}function zs(e){try{var a="",n=null;do a+=ap(e,n),n=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Lu=Object.prototype.hasOwnProperty,Gu=q.unstable_scheduleCallback,Vu=q.unstable_cancelCallback,np=q.unstable_shouldYield,lp=q.unstable_requestPaint,Fe=q.unstable_now,tp=q.unstable_getCurrentPriorityLevel,Ss=q.unstable_ImmediatePriority,Es=q.unstable_UserBlockingPriority,uo=q.unstable_NormalPriority,op=q.unstable_LowPriority,Ts=q.unstable_IdlePriority,up=q.log,rp=q.unstable_setDisableYieldValue,ot=null,We=null;function rn(e){if(typeof up=="function"&&rp(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(ot,e)}catch{}}var $e=Math.clz32?Math.clz32:cp,ip=Math.log,sp=Math.LN2;function cp(e){return e>>>=0,e===0?32:31-(ip(e)/sp|0)|0}var ro=256,io=262144,so=4194304;function Qn(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function co(e,a,n){var l=e.pendingLanes;if(l===0)return 0;var t=0,o=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~o,l!==0?t=Qn(l):(u&=r,u!==0?t=Qn(u):n||(n=r&~e,n!==0&&(t=Qn(n))))):(r=l&~o,r!==0?t=Qn(r):u!==0?t=Qn(u):n||(n=l&~e,n!==0&&(t=Qn(n)))),t===0?0:a!==0&&a!==t&&(a&o)===0&&(o=t&-t,n=a&-a,o>=n||o===32&&(n&4194048)!==0)?a:t}function ut(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Ns(e,a){(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var l=31-$e(n),t=1<<l;a|=e[l],n&=~t}return a}function dp(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xs(){var e=so;return so<<=1,(so&62914560)===0&&(so=4194304),e}function Xu(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function rt(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mp(e,a,n,l,t,o){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var r=e.entanglements,i=e.expirationTimes,m=e.hiddenUpdates;for(n=u&~n;0<n;){var b=31-$e(n),h=1<<b;r[b]=0,i[b]=-1;var c=m[b];if(c!==null)for(m[b]=null,b=0;b<c.length;b++){var v=c[b];v!==null&&(v.lane&=-536870913)}n&=~h}l!==0&&Ds(e,l,0),o!==0&&t===0&&e.tag!==0&&(e.suspendedLanes|=o&~(u&~a))}function Ds(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-$e(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function As(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var l=31-$e(n),t=1<<l;t&a|e[l]&a&&(e[l]|=a),n&=~t}}function Os(e,a){var n=a&-a;return n=(n&42)!==0?1:Zu(n),(n&(e.suspendedLanes|a))!==0?0:n}function Zu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ju(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function js(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Rf(e.type))}function Ms(e,a){var n=P.p;try{return P.p=e,a()}finally{P.p=n}}var Va=Math.random().toString(36).slice(2),Me="__reactFiber$"+Va,Xe="__reactProps$"+Va,ml="__reactContainer$"+Va,_s="__reactEvents$"+Va,fp="__reactListeners$"+Va,pp="__reactHandles$"+Va,Cs="__reactResources$"+Va,it="__reactMarker$"+Va,mo="__reactLoad$"+Va;function fo(e){delete e[Me],delete e[Xe],delete e[fp],delete e[pp]}function Rn(e){var a;if(a=e[Me])return a;for(var n=e.parentNode;n;){if(a=n[ml]||n[Me]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=hf(e);e!==null;){if(n=e[Me])return n;e=hf(e)}return a}e=n,n=e.parentNode}return null}function fl(e){if(e=e[Me]||e[ml]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function st(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(p(33))}function pl(e){var a=e[Cs];return a||(a=e[Cs]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function xe(e){e[it]=!0}function Ys(e){e[mo]=void 0}var Us=new Set,Hs={};function Bn(e,a){vl(e,a),vl(e+"Capture",a)}function vl(e,a){for(Hs[e]=a,e=0;e<a.length;e++)Us.add(a[e])}var vp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qs={},Rs={};function bp(e){return Lu.call(Rs,e)?!0:Lu.call(Qs,e)?!1:vp.test(e)?Rs[e]=!0:(Qs[e]=!0,!1)}var W=!1;function Bs(){var e=W;return W=!1,e}function po(e,a,n){if(bp(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,n)}}function vo(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,n)}}function Xa(e,a,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,l)}}function Pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ls(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function gp(e,a,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var t=l.get,o=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return t.call(this)},set:function(u){n=""+u,o.call(this,u)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ku(e){if(!e._valueTracker){var a=Ls(e)?"checked":"value";e._valueTracker=gp(e,a,""+e[a])}}function Gs(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),l="";return e&&(l=Ls(e)?e.checked?"true":"false":e.value),e=l,e!==n?(a.setValue(e),!0):!1}var hp=/[\n"\\]/g;function ra(e){return e.replace(hp,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function wu(e,a,n,l,t,o,u,r){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),a!=null?u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Pe(a)):e.value!==""+Pe(a)&&(e.value=""+Pe(a)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),a!=null?u==="number"&&e.value==a?ku(e,Pe(e.value)):ku(e,Pe(a)):n!=null?ku(e,Pe(n)):l!=null&&e.removeAttribute("value"),t==null&&o!=null&&(e.defaultChecked=!!o),t!=null&&(e.checked=t&&typeof t!="function"&&typeof t!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+Pe(r):e.removeAttribute("name")}function Vs(e,a,n,l,t,o,u,r){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),a!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||a!=null)){Ku(e);return}n=n!=null?""+Pe(n):"",a=a!=null?""+Pe(a):n,r||a===e.value||(e.value=a),e.defaultValue=a}l=l??t,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Ku(e)}function ku(e,a){e.defaultValue!==""+a&&(e.defaultValue=""+a)}function bl(e,a,n,l){if(e=e.options,a){a={};for(var t=0;t<n.length;t++)a["$"+n[t]]=!0;for(n=0;n<e.length;n++)t=a.hasOwnProperty("$"+e[n].value),e[n].selected!==t&&(e[n].selected=t),t&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Pe(n),a=null,t=0;t<e.length;t++){if(e[t].value===n){e[t].selected=!0,l&&(e[t].defaultSelected=!0);return}a!==null||e[t].disabled||(a=e[t])}a!==null&&(a.selected=!0)}}function Xs(e,a,n){if(a!=null&&(a=""+Pe(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+Pe(n):""}function Zs(e,a,n,l){if(a==null){if(l!=null){if(n!=null)throw Error(p(92));if(lt(l)){if(1<l.length)throw Error(p(93));l=l[0]}n=l}n==null&&(n=""),a=n}n=Pe(a),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Ku(e)}function gl(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var qp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Js(e,a,n){var l=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,n):typeof n!="number"||n===0||qp.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function Ks(e,a,n){if(a!=null&&typeof a!="object")throw Error(p(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="",W=!0);for(var t in a)l=a[t],a.hasOwnProperty(t)&&n[t]!==l&&(Js(e,t,l),W=!0)}else for(var o in a)a.hasOwnProperty(o)&&Js(e,o,a[o])}function Fu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bo(e){return zp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ja(){}var Wu=null;function $u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,ql=null;function ws(e){var a=fl(e);if(a&&(e=a.stateNode)){var n=e[Xe]||null;e:switch(e=a.stateNode,a.type){case"input":if(wu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ra(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var l=n[a];if(l!==e&&l.form===e.form){var t=l[Xe]||null;if(!t)throw Error(p(90));wu(l,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name)}}for(a=0;a<n.length;a++)l=n[a],l.form===e.form&&Gs(l)}break e;case"textarea":Xs(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&bl(e,!!n.multiple,a,!1)}}}var Pu=!1;function ks(e,a,n){if(Pu)return e(a,n);Pu=!0;try{var l=e(a);return l}finally{if(Pu=!1,(hl!==null||ql!==null)&&(bu(),hl&&(a=hl,e=ql,ql=hl=null,ws(a),e)))for(a=0;a<e.length;a++)ws(e[a])}}function ct(e,a){var n=e.stateNode;if(n===null)return null;var l=n[Xe]||null;if(l===null)return null;n=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(p(231,a,typeof n));return n}var Za=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=!1;if(Za)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{Iu=!1}var sn=null,er=null,go=null;function Fs(){if(go)return go;var e,a=er,n=a.length,l,t="value"in sn?sn.value:sn.textContent,o=t.length;for(e=0;e<n&&a[e]===t[e];e++);var u=n-e;for(l=1;l<=u&&a[n-l]===t[o-l];l++);return go=t.slice(e,1<l?1-l:void 0)}function ho(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function Ws(){return!1}function Re(e){function a(n,l,t,o,u){this._reactName=n,this._targetInst=t,this.type=l,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],this[r]=n?n(o):o[r]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qo:Ws,this.isPropagationStopped=Ws,this}return F(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),a}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yo=Re(cn),mt=F({},cn,{view:0,detail:0}),Sp=Re(mt),ar,nr,ft,zo=F({},mt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ft&&(ft&&e.type==="mousemove"?(ar=e.screenX-ft.screenX,nr=e.screenY-ft.screenY):nr=ar=0,ft=e),ar)},movementY:function(e){return"movementY"in e?e.movementY:nr}}),$s=Re(zo),Ep=F({},zo,{dataTransfer:0}),Tp=Re(Ep),Np=F({},mt,{relatedTarget:0}),lr=Re(Np),xp=F({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dp=Re(xp),Ap=F({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Op=Re(Ap),jp=F({},cn,{data:0}),Ps=Re(jp),Mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_p={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yp(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Cp[e])?!!a[e]:!1}function tr(){return Yp}var Up=F({},mt,{key:function(e){if(e.key){var a=Mp[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_p[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hp=Re(Up),Qp=F({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Is=Re(Qp),Rp=F({},cn,{submitter:0}),Bp=Re(Rp),Lp=F({},mt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),Gp=Re(Lp),Vp=F({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xp=Re(Vp),Zp=F({},zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jp=Re(Zp),Kp=F({},cn,{newState:0,oldState:0,source:0}),wp=Re(Kp),kp=[9,13,27,32],or=Za&&"CompositionEvent"in window,pt=null;Za&&"documentMode"in document&&(pt=document.documentMode);var Fp=Za&&"TextEvent"in window&&!pt,ec=Za&&(!or||pt&&8<pt&&11>=pt),ac=" ",nc=!1;function lc(e,a){switch(e){case"keyup":return kp.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yl=!1;function Wp(e,a){switch(e){case"compositionend":return tc(a);case"keypress":return a.which!==32?null:(nc=!0,ac);case"textInput":return e=a.data,e===ac&&nc?null:e;default:return null}}function $p(e,a){if(yl)return e==="compositionend"||!or&&lc(e,a)?(e=Fs(),go=er=sn=null,yl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ec&&a.locale!=="ko"?null:a.data;default:return null}}var Pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Pp[e.type]:a==="textarea"}function uc(e,a,n,l){hl?ql?ql.push(l):ql=[l]:hl=l,a=Su(a,"onChange"),0<a.length&&(n=new yo("onChange","change",null,n,l),e.push({event:n,listeners:a}))}var vt=null,bt=null;function Ip(e){wm(e,0)}function So(e){var a=st(e);if(Gs(a))return e}function rc(e,a){if(e==="change")return a}var ic=!1;if(Za){var ur;if(Za){var rr="oninput"in document;if(!rr){var sc=document.createElement("div");sc.setAttribute("oninput","return;"),rr=typeof sc.oninput=="function"}ur=rr}else ur=!1;ic=ur&&(!document.documentMode||9<document.documentMode)}function cc(){vt&&(vt.detachEvent("onpropertychange",dc),bt=vt=null)}function dc(e){if(e.propertyName==="value"&&So(bt)){var a=[];uc(a,bt,e,$u(e)),ks(Ip,a)}}function ev(e,a,n){e==="focusin"?(cc(),vt=a,bt=n,vt.attachEvent("onpropertychange",dc)):e==="focusout"&&cc()}function av(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return So(bt)}function nv(e,a){if(e==="click")return So(a)}function lv(e,a){if(e==="input"||e==="change")return So(a)}function tv(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Ie=typeof Object.is=="function"?Object.is:tv;function gt(e,a){if(Ie(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),l=Object.keys(a);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var t=n[l];if(!Lu.call(a,t)||!Ie(e[t],a[t]))return!1}return!0}function ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fc(e,a){var n=mc(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=a&&l>=a)return{node:n,offset:a-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mc(n)}}function pc(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?pc(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function vc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=ir(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=ir(e.document)}return a}function sr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var ov=Za&&"documentMode"in document&&11>=document.documentMode,zl=null,cr=null,ht=null,dr=!1;function bc(e,a,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dr||zl==null||zl!==ir(l)||(l=zl,"selectionStart"in l&&sr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ht&&gt(ht,l)||(ht=l,l=Su(cr,"onSelect"),0<l.length&&(a=new yo("onSelect","select",null,a,n),e.push({event:a,listeners:l}),a.target=zl)))}function Ln(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var Sl={animationend:Ln("Animation","AnimationEnd"),animationiteration:Ln("Animation","AnimationIteration"),animationstart:Ln("Animation","AnimationStart"),transitionrun:Ln("Transition","TransitionRun"),transitionstart:Ln("Transition","TransitionStart"),transitioncancel:Ln("Transition","TransitionCancel"),transitionend:Ln("Transition","TransitionEnd")},mr={},gc={};Za&&(gc=document.createElement("div").style,"AnimationEvent"in window||(delete Sl.animationend.animation,delete Sl.animationiteration.animation,delete Sl.animationstart.animation),"TransitionEvent"in window||delete Sl.transitionend.transition);function Gn(e){if(mr[e])return mr[e];if(!Sl[e])return e;var a=Sl[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in gc)return mr[e]=a[n];return e}var hc=Gn("animationend"),qc=Gn("animationiteration"),yc=Gn("animationstart"),uv=Gn("transitionrun"),rv=Gn("transitionstart"),iv=Gn("transitioncancel"),zc=Gn("transitionend"),Sc=new Map,fr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fr.push("scrollEnd");function ya(e,a){Sc.set(e,a),Bn(a,[e])}var sv=0;function Ja(e,a){if(e.name!=null&&e.name!=="auto")return e.name;if(a.autoName!==null)return a.autoName;e=Ta.identifierPrefix;var n=sv++;return e="_"+e+"t_"+n.toString(32)+"_",a.autoName=e}function Ec(e){if(e==null||typeof e=="string")return e;var a=null,n=Vl;if(n!==null)for(var l=0;l<n.length;l++){var t=e[n[l]];if(t!=null){if(t==="none")return"none";a=a==null?t:a+(" "+t)}}return a??e.default}function Ka(e,a){return e=Ec(e),a=Ec(a),a==null?e==="auto"?null:e:a==="auto"?null:a}var Eo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ia=[],El=0,pr=0;function To(){for(var e=El,a=pr=El=0;a<e;){var n=ia[a];ia[a++]=null;var l=ia[a];ia[a++]=null;var t=ia[a];ia[a++]=null;var o=ia[a];if(ia[a++]=null,l!==null&&t!==null){var u=l.pending;u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t}o!==0&&Tc(n,t,o)}}function No(e,a,n,l){ia[El++]=e,ia[El++]=a,ia[El++]=n,ia[El++]=l,pr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function vr(e,a,n,l){return No(e,a,n,l),xo(e)}function Vn(e,a){return No(e,null,null,a),xo(e)}function Tc(e,a,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var t=!1,o=e.return;o!==null;)o.childLanes|=n,l=o.alternate,l!==null&&(l.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(t=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,t&&a!==null&&(t=31-$e(n),e=o.hiddenUpdates,l=e[t],l===null?e[t]=[a]:l.push(a),a.lane=n|536870912),o):null}function xo(e){if(50<Lt)throw Lt=0,vu=null,Error(p(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Tl={};function cv(e,a,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,a,n,l){return new cv(e,a,n,l)}function br(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wa(e,a){var n=e.alternate;return n===null?(n=Ze(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Nc(e,a){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Do(e,a,n,l,t,o){var u=0;if(l=e,typeof l=="function")br(l)&&(u=1);else if(typeof l=="string")u=Rb(e,n,Oa.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(l){case tn:return e=Ze(31,n,a,t),e.elementType=tn,e.lanes=o,e;case Da:return Xn(n.children,t,o,a);case Ga:u=8,t|=24;break;case rl:return e=Ze(12,n,a,t|2),e.elementType=rl,e.lanes=o,e;case L:return e=Ze(13,n,a,t),e.elementType=L,e.lanes=o,e;case Q:return e=Ze(19,n,a,t),e.elementType=Q,e.lanes=o,e;case il:case qa:return e=t|32,e=Ze(30,n,a,e),e.elementType=qa,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Ve:u=10;break e;case no:u=9;break e;case N:u=11;break e;case pe:u=14;break e;case re:u=16,l=null;break e}u=29,n=Error(p(130,e===null?"null":typeof e,"")),l=null}return a=Ze(u,n,a,t),a.elementType=e,a.type=l,a.lanes=o,a}function Xn(e,a,n,l){return e=Ze(7,e,l,a),e.lanes=n,e}function gr(e,a,n){return e=Ze(6,e,null,a),e.lanes=n,e}function xc(e){var a=Ze(18,null,null,0);return a.stateNode=e,a}function hr(e,a,n){return a=Ze(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Dc=new WeakMap;function sa(e,a){if(typeof e=="object"&&e!==null){var n=Dc.get(e);return n!==void 0?n:(a={value:e,source:a,stack:zs(a)},Dc.set(e,a),a)}return{value:e,source:a,stack:zs(a)}}var Nl=[],xl=0,Ao=null,qt=0,ca=[],da=0,dn=null,Ma=1,_a="";function ka(e,a){Nl[xl++]=qt,Nl[xl++]=Ao,Ao=e,qt=a}function Ac(e,a,n){ca[da++]=Ma,ca[da++]=_a,ca[da++]=dn,dn=e;var l=Ma;e=_a;var t=32-$e(l)-1;l&=~(1<<t),n+=1;var o=32-$e(a)+t;if(30<o){var u=t-t%5;o=(l&(1<<u)-1).toString(32),l>>=u,t-=u,Ma=1<<32-$e(a)+t|n<<t|l,_a=o+e}else Ma=1<<o|n<<t|l,_a=e}function Oo(e){e.return!==null&&(ka(e,1),Ac(e,1,0))}function qr(e){for(;e===Ao;)Ao=Nl[--xl],Nl[xl]=null,qt=Nl[--xl],Nl[xl]=null;for(;e===dn;)dn=ca[--da],ca[da]=null,_a=ca[--da],ca[da]=null,Ma=ca[--da],ca[da]=null}function Oc(e,a){ca[da++]=Ma,ca[da++]=_a,ca[da++]=dn,Ma=a.id,_a=a.overflow,dn=e}var De=null,de=null,V=!1,mn=null,ma=!1,yr=Error(p(519));function fn(e){var a=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yt(sa(a,e)),yr}function jc(e){var a=e.stateNode,n=e.type,l=e.memoizedProps;switch(a[Me]=e,a[Xe]=l,n){case"dialog":J("cancel",a),J("close",a);break;case"iframe":case"object":case"embed":J("load",a);break;case"video":case"audio":for(n=0;n<Vt.length;n++)J(Vt[n],a);break;case"source":J("error",a);break;case"img":case"image":case"link":J("error",a),J("load",a);break;case"details":J("toggle",a);break;case"input":J("invalid",a),Vs(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":J("invalid",a);break;case"textarea":J("invalid",a),Zs(a,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||l.suppressHydrationWarning===!0||$m(a.textContent,n)?(l.popover!=null&&(J("beforetoggle",a),J("toggle",a)),l.onScroll!=null&&J("scroll",a),l.onScrollEnd!=null&&J("scrollend",a),l.onClick!=null&&(a.onclick=ja),a=!0):a=!1,a||fn(e,!0)}function jo(e){for(De=e.return;De;)switch(De.tag){case 5:case 31:case 13:ma=!1;return;case 27:case 3:ma=!0;return;default:De=De.return}}function Dl(e){if(e!==De)return!1;if(!V)return jo(e),V=!0,!1;var a=e.tag,n;if((n=a!==3&&a!==27)&&((n=a===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Wi(e.type,e.memoizedProps)),n=!n),n&&de&&fn(e),jo(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));de=gf(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));de=gf(e)}else a===27?(a=de,On(e.type)?(e=os,os=null,de=e):de=a):de=De?pa(e.stateNode.nextSibling):null;return!0}function Zn(){de=De=null,V=!1}function zr(){var e=mn;return e!==null&&(we===null?we=e:we.push.apply(we,e),mn=null),e}function yt(e){mn===null?mn=[e]:mn.push(e)}var Sr=Aa(null),Jn=null,Fa=null;function pn(e,a,n){ce(Sr,a._currentValue),a._currentValue=n}function Wa(e){e._currentValue=Sr.current,je(Sr)}function Mo(e,a,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===n)break;e=e.return}}function Er(e,a,n,l){var t=e.child;for(t!==null&&(t.return=e);t!==null;){var o=t.dependencies;if(o!==null){var u=t.child;o=o.firstContext;e:for(;o!==null;){var r=o;o=t;for(var i=0;i<a.length;i++)if(r.context===a[i]){o.lanes|=n,r=o.alternate,r!==null&&(r.lanes|=n),Mo(o.return,n,e),l||(u=null);break e}o=r.next}}else if(t.tag===18){if(u=t.return,u===null)throw Error(p(341));u.lanes|=n,o=u.alternate,o!==null&&(o.lanes|=n),Mo(u,n,e),u=null}else t.tag===13&&t.memoizedState!==null&&t.memoizedState.dehydrated===null?(t.lanes|=n,u=t.alternate,u!==null&&(u.lanes|=n),Mo(t.return,n,e),u=t.child,u=u!==null?u.sibling:null):u=t.child;if(u!==null)u.return=t;else for(u=t;u!==null;){if(u===e){u=null;break}if(t=u.sibling,t!==null){t.return=u.return,u=t;break}u=u.return}t=u}}function Kn(e,a,n,l){e=null;for(var t=a,o=!1;t!==null;){if(!o){if((t.flags&524288)!==0)o=!0;else if((t.flags&262144)!==0)break}if(t.tag===10){var u=t.alternate;if(u===null)throw Error(p(387));if(u=u.memoizedProps,u!==null){var r=t.type;Ie(t.pendingProps.value,u.value)||(e!==null?e.push(r):e=[r])}}else if(t===lo.current){if(u=t.alternate,u===null)throw Error(p(387));u.memoizedState.memoizedState!==t.memoizedState.memoizedState&&(e!==null?e.push(Pl):e=[Pl])}t=t.return}return e!==null&&Er(a,e,n,l),a.flags|=262144,e!==null}function _o(e){for(e=e.firstContext;e!==null;){if(!Ie(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wn(e){Jn=e,Fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _e(e){return Mc(Jn,e)}function Co(e,a){return Jn===null&&wn(e),Mc(e,a)}function Mc(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},Fa===null){if(e===null)throw Error(p(308));Fa=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Fa=Fa.next=a;return n}var dv=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},mv=q.unstable_scheduleCallback,fv=q.unstable_NormalPriority,ze={$$typeof:Ve,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tr(){return{controller:new dv,data:new Map,refCount:0}}function zt(e){e.refCount--,e.refCount===0&&mv(fv,function(){e.controller.abort()})}function _c(e,a){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<a.length;e++){var l=a[e];n.indexOf(l)===-1&&n.push(l)}}}var St=null;function pv(e){var a=e.transitionTypes;return e.transitionTypes=null,a}var Et=null,Nr=0,kn=0,Al=null;function vv(e,a){if(Et===null){var n=Et=[];Nr=0,kn=Gi(),Al={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Nr++,a.then(Cc,Cc),a}function Cc(){if(--Nr===0&&(St=null,Et!==null)){Al!==null&&(Al.status="fulfilled");var e=Et;Et=null,kn=0,Al=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function bv(e,a){var n=[],l={status:"pending",value:null,reason:null,then:function(t){n.push(t)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var t=0;t<n.length;t++)(0,n[t])(a)},function(t){for(l.status="rejected",l.reason=t,t=0;t<n.length;t++)(0,n[t])(void 0)}),l}var Yc=Y.S;Y.S=function(e,a){if(xm=Fe(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&vv(e,a),St!==null)for(var n=Kl;n!==null;)_c(n,St),n=n.next;if(n=e.types,n!==null){for(var l=Kl;l!==null;)_c(l,n),l=l.next;if(kn!==0){l=St,l===null&&(l=St=[]);for(var t=0;t<n.length;t++){var o=n[t];l.indexOf(o)===-1&&l.push(o)}}}Yc!==null&&Yc(e,a)};var Fn=Aa(null);function xr(){var e=Fn.current;return e!==null?e:ie.pooledCache}function Yo(e,a){a===null?ce(Fn,Fn.current):ce(Fn,a.pool)}function Uc(){var e=xr();return e===null?null:{parent:ze._currentValue,pool:e}}var Ol=Error(p(460)),Dr=Error(p(474)),Uo=Error(p(542)),Ho={then:function(){}};function Hc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qc(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(ja,ja),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Bc(e),e===void 0&&!("reason"in a)?Error(p(600)):e;default:if(typeof a.status=="string")a.then(ja,ja);else{if(e=ie,e!==null&&100<e.shellSuspendCounter)throw Error(p(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var t=a;t.status="fulfilled",t.value=l}},function(l){if(a.status==="pending"){var t=a;t.status="rejected",t.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Bc(e),e}throw $n=a,Ol}}function Wn(e){try{var a=e._init;return a(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?($n=n,Ol):n}}var $n=null;function Rc(){if($n===null)throw Error(p(459));var e=$n;return $n=null,e}function Bc(e){if(e===Ol||e===Uo)throw Error(p(483))}var jl=null,Tt=0;function Qo(e){var a=Tt;return Tt+=1,jl===null&&(jl=[]),Qc(jl,e,a)}function vn(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Ro(e,a){throw a.$$typeof===ao?Error(p(525)):(e=Object.prototype.toString.call(a),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Lc(e){function a(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)a(d,s),s=s.sibling;return null}function l(d){for(var s=new Map;d!==null;)d.key===null?s.set(d.index,d):s.set(d.key,d),d=d.sibling;return s}function t(d,s){return d=wa(d,s),d.index=0,d.sibling=null,d}function o(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=2,s):f):(d.flags|=134217730,s)):(d.flags|=1048576,s)}function u(d){return e&&d.alternate===null&&(d.flags|=134217730),d}function r(d,s,f,g){return s===null||s.tag!==6?(s=gr(f,d.mode,g),s.return=d,s):(s=t(s,f),s.return=d,s)}function i(d,s,f,g){var D=f.type;return D===Da?(d=b(d,s,f.props.children,g,f.key),vn(d,f),d):s!==null&&(s.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===re&&Wn(D)===s.type)?(s=t(s,f.props),vn(s,f),s.return=d,s):(s=Do(f.type,f.key,f.props,null,d.mode,g),vn(s,f),s.return=d,s)}function m(d,s,f,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=hr(f,d.mode,g),s.return=d,s):(s=t(s,f.children||[]),s.return=d,s)}function b(d,s,f,g,D){return s===null||s.tag!==7?(s=Xn(f,d.mode,g,D),s.return=d,s):(s=t(s,f),s.return=d,s)}function h(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=gr(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Un:return f=Do(s.type,s.key,s.props,null,d.mode,f),vn(f,s),f.return=d,f;case ln:return s=hr(s,d.mode,f),s.return=d,s;case re:return s=Wn(s),h(d,s,f)}if(lt(s)||nt(s))return s=Xn(s,d.mode,f,null),s.return=d,s;if(typeof s.then=="function")return h(d,Qo(s),f);if(s.$$typeof===Ve)return h(d,Co(d,s),f);Ro(d,s)}return null}function c(d,s,f,g){var D=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return D!==null?null:r(d,s,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Un:return f.key===D?i(d,s,f,g):null;case ln:return f.key===D?m(d,s,f,g):null;case re:return f=Wn(f),c(d,s,f,g)}if(lt(f)||nt(f))return D!==null?null:b(d,s,f,g,null);if(typeof f.then=="function")return c(d,s,Qo(f),g);if(f.$$typeof===Ve)return c(d,s,Co(d,f),g);Ro(d,f)}return null}function v(d,s,f,g,D){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return d=d.get(f)||null,r(s,d,""+g,D);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Un:return d=d.get(g.key===null?f:g.key)||null,i(s,d,g,D);case ln:return d=d.get(g.key===null?f:g.key)||null,m(s,d,g,D);case re:return g=Wn(g),v(d,s,f,g,D)}if(lt(g)||nt(g))return d=d.get(f)||null,b(s,d,g,D,null);if(typeof g.then=="function")return v(d,s,f,Qo(g),D);if(g.$$typeof===Ve)return v(d,s,f,Co(s,g),D);Ro(s,g)}return null}function y(d,s,f,g){for(var D=null,w=null,O=s,_=s=0,Te=null;O!==null&&_<f.length;_++){O.index>_?(Te=O,O=null):Te=O.sibling;var k=c(d,O,f[_],g);if(k===null){O===null&&(O=Te);break}e&&O&&k.alternate===null&&a(d,O),s=o(k,s,_),w===null?D=k:w.sibling=k,w=k,O=Te}if(_===f.length)return n(d,O),V&&ka(d,_),D;if(O===null){for(;_<f.length;_++)O=h(d,f[_],g),O!==null&&(s=o(O,s,_),w===null?D=O:w.sibling=O,w=O);return V&&ka(d,_),D}for(O=l(O);_<f.length;_++)Te=v(O,d,_,f[_],g),Te!==null&&(e&&(k=Te.alternate,k!==null&&O.delete(k.key===null?_:k.key)),s=o(Te,s,_),w===null?D=Te:w.sibling=Te,w=Te);return e&&O.forEach(function(Yn){return a(d,Yn)}),V&&ka(d,_),D}function A(d,s,f,g){if(f==null)throw Error(p(151));for(var D=null,w=null,O=s,_=s=0,Te=null,k=f.next();O!==null&&!k.done;_++,k=f.next()){O.index>_?(Te=O,O=null):Te=O.sibling;var Yn=c(d,O,k.value,g);if(Yn===null){O===null&&(O=Te);break}e&&O&&Yn.alternate===null&&a(d,O),s=o(Yn,s,_),w===null?D=Yn:w.sibling=Yn,w=Yn,O=Te}if(k.done)return n(d,O),V&&ka(d,_),D;if(O===null){for(;!k.done;_++,k=f.next())k=h(d,k.value,g),k!==null&&(s=o(k,s,_),w===null?D=k:w.sibling=k,w=k);return V&&ka(d,_),D}for(O=l(O);!k.done;_++,k=f.next())k=v(O,d,_,k.value,g),k!==null&&(e&&(Te=k.alternate,Te!==null&&O.delete(Te.key===null?_:Te.key)),s=o(k,s,_),w===null?D=k:w.sibling=k,w=k);return e&&O.forEach(function(Wb){return a(d,Wb)}),V&&ka(d,_),D}function B(d,s,f,g){if(typeof f=="object"&&f!==null&&f.type===Da&&f.key===null&&f.props.ref===void 0&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Un:e:{for(var D=f.key;s!==null;){if(s.key===D){if(D=f.type,D===Da){if(s.tag===7){n(d,s.sibling),g=t(s,f.props.children),vn(g,f),g.return=d,d=g;break e}}else if(s.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===re&&Wn(D)===s.type){n(d,s.sibling),g=t(s,f.props),vn(g,f),g.return=d,d=g;break e}n(d,s);break}else a(d,s);s=s.sibling}f.type===Da?(g=Xn(f.props.children,d.mode,g,f.key),vn(g,f),g.return=d,d=g):(g=Do(f.type,f.key,f.props,null,d.mode,g),vn(g,f),g.return=d,d=g)}return u(d);case ln:e:{for(D=f.key;s!==null;){if(s.key===D)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){n(d,s.sibling),g=t(s,f.children||[]),g.return=d,d=g;break e}else{n(d,s);break}else a(d,s);s=s.sibling}g=hr(f,d.mode,g),g.return=d,d=g}return u(d);case re:return f=Wn(f),B(d,s,f,g)}if(lt(f))return y(d,s,f,g);if(nt(f)){if(D=nt(f),typeof D!="function")throw Error(p(150));return f=D.call(f),A(d,s,f,g)}if(typeof f.then=="function")return B(d,s,Qo(f),g);if(f.$$typeof===Ve)return B(d,s,Co(d,f),g);Ro(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,s!==null&&s.tag===6?(n(d,s.sibling),g=t(s,f),g.return=d,d=g):(n(d,s),g=gr(f,d.mode,g),g.return=d,d=g),u(d)):n(d,s)}return function(d,s,f,g){try{Tt=0;var D=B(d,s,f,g);return jl=null,D}catch(O){if(O===Ol||O===Uo)throw O;var w=Ze(29,O,null,d.mode);return w.lanes=g,w.return=d,w}finally{}}}var Pn=Lc(!0),Gc=Lc(!1),bn=!1;function Ar(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Or(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hn(e,a,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(I&2)!==0){var t=l.pending;return t===null?a.next=a:(a.next=t.next,t.next=a),l.pending=a,a=xo(e),Tc(e,null,n),a}return No(e,l,a,n),xo(e)}function Nt(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,n|=l,a.lanes=n,As(e,n)}}function jr(e,a){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var t=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?t=o=u:o=o.next=u,n=n.next}while(n!==null);o===null?t=o=a:o=o.next=a}else t=o=a;n={baseState:l.baseState,firstBaseUpdate:t,lastBaseUpdate:o,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var Mr=!1;function xt(){if(Mr){var e=Al;if(e!==null)throw e}}function Dt(e,a,n,l){Mr=!1;var t=e.updateQueue;bn=!1;var o=t.firstBaseUpdate,u=t.lastBaseUpdate,r=t.shared.pending;if(r!==null){t.shared.pending=null;var i=r,m=i.next;i.next=null,u===null?o=m:u.next=m,u=i;var b=e.alternate;b!==null&&(b=b.updateQueue,r=b.lastBaseUpdate,r!==u&&(r===null?b.firstBaseUpdate=m:r.next=m,b.lastBaseUpdate=i))}if(o!==null){var h=t.baseState;u=0,b=m=i=null,r=o;do{var c=r.lane&-536870913,v=c!==r.lane;if(v?(K&c)===c:(l&c)===c){c!==0&&c===kn&&(Mr=!0),b!==null&&(b=b.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var y=e,A=r;c=a;var B=n;switch(A.tag){case 1:if(y=A.payload,typeof y=="function"){h=y.call(B,h,c);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=A.payload,c=typeof y=="function"?y.call(B,h,c):y,c==null)break e;h=F({},h,c);break e;case 2:bn=!0}}c=r.callback,c!==null&&(e.flags|=64,v&&(e.flags|=8192),v=t.callbacks,v===null?t.callbacks=[c]:v.push(c))}else v={lane:c,tag:r.tag,payload:r.payload,callback:r.callback,next:null},b===null?(m=b=v,i=h):b=b.next=v,u|=c;if(r=r.next,r===null){if(r=t.shared.pending,r===null)break;v=r,r=v.next,v.next=null,t.lastBaseUpdate=v,t.shared.pending=null}}while(!0);b===null&&(i=h),t.baseState=i,t.firstBaseUpdate=m,t.lastBaseUpdate=b,o===null&&(t.shared.lanes=0),Nn|=u,e.lanes=u,e.memoizedState=h}}function Vc(e,a){if(typeof e!="function")throw Error(p(191,e));e.call(a)}function Xc(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Vc(n[e],a)}var qn=Aa(null),Bo=Aa(0);function Zc(e,a){e=an,ce(Bo,e),ce(qn,a),an=e|a.baseLanes}function _r(){ce(Bo,an),ce(qn,qn.current)}function Cr(){an=Bo.current,je(qn),je(Bo)}var Ce=Aa(null),Qe=null;function yn(e){var a=e.alternate;ce(Ye,Ye.current&1),ce(Ce,e),Qe===null&&(a===null||qn.current!==null||a.memoizedState!==null)&&(Qe=e)}function Yr(e){ce(Ye,Ye.current),ce(Ce,e),Qe===null&&(Qe=e)}function Jc(e){e.tag===22?(ce(Ye,Ye.current),ce(Ce,e),Qe===null&&(Qe=e)):zn()}function zn(){ce(Ye,Ye.current),ce(Ce,Ce.current)}function ea(e){je(Ce),Qe===e&&(Qe=null),je(Ye)}var Ye=Aa(0);function At(e,a){ce(Ce,Ce.current),ce(Ye,a)}function Ur(e){je(Ye),je(Ce),Qe===e&&(Qe=null)}function Lo(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ls(n)||ts(n)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!=="independent"){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var $a=0,R=null,ue=null,Se=null,Go=!1,Ml=!1,In=!1,Vo=0,Ot=0,_l=null,gv=0;function ge(){throw Error(p(321))}function Hr(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!Ie(e[n],a[n]))return!1;return!0}function Qr(e,a,n,l,t,o){return $a=o,R=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Y.H=e===null||e.memoizedState===null?Ad:Od,In=!1,o=n(l,t),In=!1,Ml&&(o=wc(a,n,l,t)),Kc(e),o}function Kc(e){Y.H=Fo;var a=ue!==null&&ue.next!==null;if($a=0,Se=ue=R=null,Go=!1,Ot=0,_l=null,a)throw Error(p(300));e===null||Ee||(e=e.dependencies,e!==null&&_o(e)&&(Ee=!0))}function wc(e,a,n,l){R=e;var t=0;do{if(Ml&&(_l=null),Ot=0,Ml=!1,25<=t)throw Error(p(301));if(t+=1,Se=ue=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}Y.H=Nv,o=a(n,l)}while(Ml);return o}function hv(){var e=Y.H,a=e.useState()[0];return a=typeof a.then=="function"?jt(a):a,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(R.flags|=1024),a}function Rr(){var e=Vo!==0;return Vo=0,e}function Br(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function Lr(e){if(Go){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Go=!1}$a=0,Se=ue=R=null,Ml=!1,Ot=Vo=0,_l=null}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?R.memoizedState=Se=e:Se=Se.next=e,Se}function qe(){if(ue===null){var e=R.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var a=Se===null?R.memoizedState:Se.next;if(a!==null)Se=a,ue=e;else{if(e===null)throw R.alternate===null?Error(p(467)):Error(p(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Se===null?R.memoizedState=Se=e:Se=Se.next=e}return Se}function Xo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jt(e){var a=Ot;return Ot+=1,_l===null&&(_l=[]),e=Qc(_l,e,a),a=R,(Se===null?a.memoizedState:Se.next)===null&&(a=a.alternate,Y.H=a===null||a.memoizedState===null?Ad:Od),e}function Zo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jt(e);if(e.$$typeof===sl)return;if(e.$$typeof===Ve)return _e(e)}throw Error(p(438,String(e)))}function Gr(e){var a=null,n=R.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var l=R.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(t){return t.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=Xo(),R.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),l=0;l<e;l++)n[l]=at;return a.index++,n}function Pa(e,a){return typeof a=="function"?a(e):a}function Jo(e){var a=qe();return Vr(a,ue,e)}function Vr(e,a,n){var l=e.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=n;var t=e.baseQueue,o=l.pending;if(o!==null){if(t!==null){var u=t.next;t.next=o.next,o.next=u}a.baseQueue=t=o,l.pending=null}if(o=e.baseState,t===null)e.memoizedState=o;else{a=t.next;var r=u=null,i=null,m=a,b=!1;do{var h=m.lane&-536870913;if(h!==m.lane?(K&h)===h:($a&h)===h){var c=m.revertLane;if(c===0)i!==null&&(i=i.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),h===kn&&(b=!0);else if(($a&c)===c){m=m.next,c===kn&&(b=!0);continue}else h={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},i===null?(r=i=h,u=o):i=i.next=h,R.lanes|=c,Nn|=c;h=m.action,In&&n(o,h),o=m.hasEagerState?m.eagerState:n(o,h)}else c={lane:h,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},i===null?(r=i=c,u=o):i=i.next=c,R.lanes|=h,Nn|=h;m=m.next}while(m!==null&&m!==a);if(i===null?u=o:i.next=r,!Ie(o,e.memoizedState)&&(Ee=!0,b&&(n=Al,n!==null)))throw n;e.memoizedState=o,e.baseState=u,e.baseQueue=i,l.lastRenderedState=o}return t===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Xr(e){var a=qe(),n=a.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var l=n.dispatch,t=n.pending,o=a.memoizedState;if(t!==null){n.pending=null;var u=t=t.next;do o=e(o,u.action),u=u.next;while(u!==t);Ie(o,a.memoizedState)||(Ee=!0),a.memoizedState=o,a.baseQueue===null&&(a.baseState=o),n.lastRenderedState=o}return[o,l]}function kc(e,a,n){var l=R,t=qe(),o=V;if(o){if(n===void 0)throw Error(p(407));n=n()}else n=a();var u=!Ie((ue||t).memoizedState,n);if(u&&(t.memoizedState=n,Ee=!0),t=t.queue,Kr($c.bind(null,l,t,e),[e]),e=t.getSnapshot!==a||u||Se!==null&&(Se.memoizedState.tag&1)!==0,Cl(e?9:8,{destroy:void 0},Wc.bind(null,l,t,n,a),null),e){if(l.flags|=2048,ie===null)throw Error(p(349));o||($a&127)!==0||Fc(l,a,n)}return n}function Fc(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=R.updateQueue,a===null?(a=Xo(),R.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function Wc(e,a,n,l){a.value=n,a.getSnapshot=l,Pc(a)&&Ic(e)}function $c(e,a,n){return n(function(){Pc(a)&&Ic(e)})}function Pc(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!Ie(e,n)}catch{return!0}}function Ic(e){var a=Vn(e,2);a!==null&&ke(a,e,2)}function Zr(e){var a=Be();if(typeof e=="function"){var n=e;if(e=n(),In){rn(!0);try{n()}finally{rn(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},a}function ed(e,a,n,l){return e.baseState=n,Vr(e,ue,typeof l=="function"?l:Pa)}function qv(e,a,n,l,t){if(ko(e))throw Error(p(485));if(e=a.action,e!==null){var o={payload:t,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){o.listeners.push(u)}};Y.T!==null?n(!0):o.isTransition=!1,l(o),n=a.pending,n===null?(o.next=a.pending=o,ad(a,o)):(o.next=n.next,a.pending=n.next=o)}}function ad(e,a){var n=a.action,l=a.payload,t=e.state;if(a.isTransition){var o=Y.T,u={};u.types=o!==null?o.types:null,Y.T=u;try{var r=n(t,l),i=Y.S;i!==null&&i(u,r),nd(e,a,r)}catch(m){Jr(e,a,m)}finally{o!==null&&u.types!==null&&(o.types=u.types),Y.T=o}}else try{o=n(t,l),nd(e,a,o)}catch(m){Jr(e,a,m)}}function nd(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){ld(e,a,l)},function(l){return Jr(e,a,l)}):ld(e,a,n)}function ld(e,a,n){a.status="fulfilled",a.value=n,td(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,ad(e,n)))}function Jr(e,a,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=n,td(a),a=a.next;while(a!==l)}e.action=null}function td(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function od(e,a){return a}function ud(e,a){if(V){var n=ie.formState;if(n!==null){e:{var l=R;if(V){if(de){a:{for(var t=de,o=ma;t.nodeType!==8;){if(!o){t=null;break a}if(t=pa(t.nextSibling),t===null){t=null;break a}}o=t.data,t=o==="F!"||o==="F"?t:null}if(t){de=pa(t.nextSibling),l=t.data==="F!";break e}}fn(l)}l=!1}l&&(a=n[0])}}return n=Be(),n.memoizedState=n.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:od,lastRenderedState:a},n.queue=l,n=Nd.bind(null,R,l),l.dispatch=n,l=Zr(!1),o=$r.bind(null,R,!1,l.queue),l=Be(),t={state:a,dispatch:null,action:e,pending:null},l.queue=t,n=qv.bind(null,R,t,o,n),t.dispatch=n,l.memoizedState=e,[a,n,!1]}function rd(e){var a=qe();return id(a,ue,e)}function id(e,a,n){if(a=Vr(e,a,od)[0],e=Jo(Pa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=jt(a)}catch(u){throw u===Ol?Uo:u}else l=a;a=qe();var t=a.queue,o=t.dispatch;return n!==a.memoizedState&&(R.flags|=2048,Cl(9,{destroy:void 0},yv.bind(null,t,n),null)),[l,o,e]}function yv(e,a){e.action=a}function sd(e){var a=qe(),n=ue;if(n!==null)return id(a,n,e);qe(),a=a.memoizedState,n=qe();var l=n.queue.dispatch;return n.memoizedState=e,[a,l,!1]}function Cl(e,a,n,l){return e={tag:e,create:n,deps:l,inst:a,next:null},a=R.updateQueue,a===null&&(a=Xo(),R.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,a.lastEffect=e),e}function cd(){return qe().memoizedState}function Ko(e,a,n,l){var t=Be();R.flags|=e,t.memoizedState=Cl(1|a,{destroy:void 0},n,l===void 0?null:l)}function wo(e,a,n,l){var t=qe();l=l===void 0?null:l;var o=t.memoizedState.inst;ue!==null&&l!==null&&Hr(l,ue.memoizedState.deps)?t.memoizedState=Cl(a,o,n,l):(R.flags|=e,t.memoizedState=Cl(1|a,o,n,l))}function dd(e,a){Ko(8390656,8,e,a)}function Kr(e,a){wo(2048,8,e,a)}function zv(e){R.flags|=4;var a=R.updateQueue;if(a===null)a=Xo(),R.updateQueue=a,a.events=[e];else{var n=a.events;n===null?a.events=[e]:n.push(e)}}function md(e){var a=qe().memoizedState;return zv({ref:a,nextImpl:e}),function(){if((I&2)!==0)throw Error(p(440));return a.impl.apply(void 0,arguments)}}function fd(e,a){return wo(4,2,e,a)}function pd(e,a){return wo(4,4,e,a)}function vd(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function bd(e,a,n){n=n!=null?n.concat([e]):null,wo(4,4,vd.bind(null,a,e),n)}function wr(){}function gd(e,a){var n=qe();a=a===void 0?null:a;var l=n.memoizedState;return a!==null&&Hr(a,l[1])?l[0]:(n.memoizedState=[e,a],e)}function hd(e,a){var n=qe();a=a===void 0?null:a;var l=n.memoizedState;if(a!==null&&Hr(a,l[1]))return l[0];if(l=e(),In){rn(!0);try{e()}finally{rn(!1)}}return n.memoizedState=[l,a],l}function kr(e,a,n){return n===void 0||($a&1073741824)!==0&&(K&261930)===0?e.memoizedState=a:(e.memoizedState=n,e=Am(),R.lanes|=e,Nn|=e,n)}function qd(e,a,n,l){return Ie(n,a)?n:qn.current!==null?(e=kr(e,n,l),Ie(e,a)||(Ee=!0),e):($a&106)===0||($a&1073741824)!==0&&(K&261930)===0?(Ee=!0,e.memoizedState=n):(e=Am(),R.lanes|=e,Nn|=e,a)}function yd(e,a,n,l,t){var o=P.p;P.p=o!==0&&8>o?o:8;var u=Y.T,r={};r.types=u!==null?u.types:null,Y.T=r,$r(e,!1,a,n);try{var i=t(),m=Y.S;if(m!==null&&m(r,i),i!==null&&typeof i=="object"&&typeof i.then=="function"){var b=bv(i,l);Mt(e,a,b,ta(e))}else Mt(e,a,l,ta(e))}catch(h){Mt(e,a,{then:function(){},status:"rejected",reason:h},ta())}finally{P.p=o,u!==null&&r.types!==null&&(u.types=r.types),Y.T=u}}function Sv(){}function Fr(e,a,n,l){if(e.tag!==5)throw Error(p(476));var t=zd(e).queue;yd(e,t,a,Hn,n===null?Sv:function(){return Sd(e),n(l)})}function zd(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Hn,baseState:Hn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:Hn},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Sd(e){var a=zd(e);a.next===null&&(a=e.alternate.memoizedState),Mt(e,a.next.queue,{},ta())}function Wr(){return _e(Pl)}function Ed(){return qe().memoizedState}function Td(){return qe().memoizedState}function Ev(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=ta();e=gn(n);var l=hn(a,e,n);l!==null&&(ke(l,a,n),Nt(l,a,n)),a={cache:Tr()},e.payload=a;return}a=a.return}}function Tv(e,a,n){var l=ta();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ko(e)?xd(a,n):(n=vr(e,a,n,l),n!==null&&(ke(n,e,l),Dd(n,a,l)))}function Nd(e,a,n){var l=ta();Mt(e,a,n,l)}function Mt(e,a,n,l){var t={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ko(e))xd(a,t);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=a.lastRenderedReducer,o!==null))try{var u=a.lastRenderedState,r=o(u,n);if(t.hasEagerState=!0,t.eagerState=r,Ie(r,u))return No(e,a,t,0),ie===null&&To(),!1}catch{}finally{}if(n=vr(e,a,t,l),n!==null)return ke(n,e,l),Dd(n,a,l),!0}return!1}function $r(e,a,n,l){if(l={lane:2,revertLane:Gi(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ko(e)){if(a)throw Error(p(479))}else a=vr(e,n,l,2),a!==null&&ke(a,e,2)}function ko(e){var a=e.alternate;return e===R||a!==null&&a===R}function xd(e,a){Ml=Go=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function Dd(e,a,n){if((n&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,n|=l,a.lanes=n,As(e,n)}}var Fo={readContext:_e,use:Zo,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useLayoutEffect:ge,useInsertionEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useSyncExternalStore:ge,useId:ge,useHostTransitionStatus:ge,useFormState:ge,useActionState:ge,useOptimistic:ge,useMemoCache:ge,useCacheRefresh:ge,useEffectEvent:ge},Ad={readContext:_e,use:Zo,useCallback:function(e,a){return Be().memoizedState=[e,a===void 0?null:a],e},useContext:_e,useEffect:dd,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,Ko(4194308,4,vd.bind(null,a,e),n)},useLayoutEffect:function(e,a){return Ko(4194308,4,e,a)},useInsertionEffect:function(e,a){Ko(4,2,e,a)},useMemo:function(e,a){var n=Be();a=a===void 0?null:a;var l=e();if(In){rn(!0);try{e()}finally{rn(!1)}}return n.memoizedState=[l,a],l},useReducer:function(e,a,n){var l=Be();if(n!==void 0){var t=n(a);if(In){rn(!0);try{n(a)}finally{rn(!1)}}}else t=a;return l.memoizedState=l.baseState=t,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Tv.bind(null,R,e),[l.memoizedState,e]},useRef:function(e){var a=Be();return e={current:e},a.memoizedState=e},useState:function(e){e=Zr(e);var a=e.queue,n=Nd.bind(null,R,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:wr,useDeferredValue:function(e,a){var n=Be();return kr(n,e,a)},useTransition:function(){var e=Zr(!1);return e=yd.bind(null,R,e.queue,!0,!1),Be().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var l=R,t=Be();if(V){if(n===void 0)throw Error(p(407));n=n()}else{if(n=a(),ie===null)throw Error(p(349));(K&127)!==0||Fc(l,a,n)}t.memoizedState=n;var o={value:n,getSnapshot:a};return t.queue=o,dd($c.bind(null,l,o,e),[e]),l.flags|=2048,Cl(9,{destroy:void 0},Wc.bind(null,l,o,n,a),null),n},useId:function(){var e=Be(),a=ie.identifierPrefix;if(V){var n=_a,l=Ma;n=(l&~(1<<32-$e(l)-1)).toString(32)+n,a="_"+a+"R_"+n,n=Vo++,0<n&&(a+="H"+n.toString(32)),a+="_"}else n=gv++,a="_"+a+"r_"+n.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Wr,useFormState:ud,useActionState:ud,useOptimistic:function(e){var a=Be();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=$r.bind(null,R,!0,n),n.dispatch=a,[e,a]},useMemoCache:Gr,useCacheRefresh:function(){return Be().memoizedState=Ev.bind(null,R)},useEffectEvent:function(e){var a=Be(),n={impl:e};return a.memoizedState=n,function(){if((I&2)!==0)throw Error(p(440));return n.impl.apply(void 0,arguments)}}},Od={readContext:_e,use:Zo,useCallback:gd,useContext:_e,useEffect:Kr,useImperativeHandle:bd,useInsertionEffect:fd,useLayoutEffect:pd,useMemo:hd,useReducer:Jo,useRef:cd,useState:function(){return Jo(Pa)},useDebugValue:wr,useDeferredValue:function(e,a){var n=qe();return qd(n,ue.memoizedState,e,a)},useTransition:function(){var e=Jo(Pa)[0],a=qe().memoizedState;return[typeof e=="boolean"?e:jt(e),a]},useSyncExternalStore:kc,useId:Ed,useHostTransitionStatus:Wr,useFormState:rd,useActionState:rd,useOptimistic:function(e,a){var n=qe();return ed(n,ue,e,a)},useMemoCache:Gr,useCacheRefresh:Td,useEffectEvent:md},Nv={readContext:_e,use:Zo,useCallback:gd,useContext:_e,useEffect:Kr,useImperativeHandle:bd,useInsertionEffect:fd,useLayoutEffect:pd,useMemo:hd,useReducer:Xr,useRef:cd,useState:function(){return Xr(Pa)},useDebugValue:wr,useDeferredValue:function(e,a){var n=qe();return ue===null?kr(n,e,a):qd(n,ue.memoizedState,e,a)},useTransition:function(){var e=Xr(Pa)[0],a=qe().memoizedState;return[typeof e=="boolean"?e:jt(e),a]},useSyncExternalStore:kc,useId:Ed,useHostTransitionStatus:Wr,useFormState:sd,useActionState:sd,useOptimistic:function(e,a){var n=qe();return ue!==null?ed(n,ue,e,a):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Gr,useCacheRefresh:Td,useEffectEvent:md};function Pr(e,a,n,l){a=e.memoizedState,n=n(l,a),n=n==null?a:F({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ir={enqueueSetState:function(e,a,n){e=e._reactInternals;var l=ta(),t=gn(l);t.payload=a,n!=null&&(t.callback=n),a=hn(e,t,l),a!==null&&(ke(a,e,l),Nt(a,e,l))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var l=ta(),t=gn(l);t.tag=1,t.payload=a,n!=null&&(t.callback=n),a=hn(e,t,l),a!==null&&(ke(a,e,l),Nt(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=ta(),l=gn(n);l.tag=2,a!=null&&(l.callback=a),a=hn(e,l,n),a!==null&&(ke(a,e,n),Nt(a,e,n))}};function jd(e,a,n,l,t,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,o,u):a.prototype&&a.prototype.isPureReactComponent?!gt(n,l)||!gt(t,o):!0}function Md(e,a,n,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,l),a.state!==e&&Ir.enqueueReplaceState(a,a.state,null)}function el(e,a){var n=a;if("ref"in a){n={};for(var l in a)l!=="ref"&&(n[l]=a[l])}if(e=e.defaultProps){n===a&&(n=F({},n));for(var t in e)n[t]===void 0&&(n[t]=e[t])}return n}function _d(e){Eo(e)}function Cd(e){console.error(e)}function Yd(e){Eo(e)}function Wo(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Ud(e,a,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(t){setTimeout(function(){throw t})}}function ei(e,a,n){return n=gn(n),n.tag=3,n.payload={element:null},n.callback=function(){Wo(e,a)},n}function Hd(e){return e=gn(e),e.tag=3,e}function Qd(e,a,n,l){var t=n.type.getDerivedStateFromError;if(typeof t=="function"){var o=l.value;e.payload=function(){return t(o)},e.callback=function(){Ud(a,n,l)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Ud(a,n,l),typeof t!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function xv(e,a,n,l,t){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=n.alternate,a!==null&&Kn(a,n,t,!0),n=Ce.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Qe===null?gu():n.alternate===null&&he===0&&(he=3),n.flags&=-257,n.flags|=65536,n.lanes=t,l===Ho?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([l]):a.add(l),Ri(e,l,t)),!1;case 22:return n.flags|=65536,l===Ho?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([l]):n.add(l)),Ri(e,l,t)),!1}throw Error(p(435,n.tag))}return Ri(e,l,t),gu(),!1}if(V)return a=Ce.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=t,l!==yr&&(e=Error(p(422),{cause:l}),yt(sa(e,n)))):(l!==yr&&(a=Error(p(423),{cause:l}),yt(sa(a,n))),e=e.current.alternate,e.flags|=65536,t&=-t,e.lanes|=t,l=sa(l,n),t=ei(e.stateNode,l,t),jr(e,t),he!==4&&(he=2)),!1;var o=Error(p(520),{cause:l});if(o=sa(o,n),Bt===null?Bt=[o]:Bt.push(o),he!==4&&(he=2),a===null)return!0;l=sa(l,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=t&-t,n.lanes|=e,e=ei(n.stateNode,l,e),jr(n,e),!1;case 1:if(a=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(xn===null||!xn.has(o))))return n.flags|=65536,t&=-t,n.lanes|=t,t=Hd(t),Qd(t,e,n,l),jr(n,t),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var ai=Error(p(461)),Ee=!1;function Ne(e,a,n,l){a.child=e===null?Gc(a,null,n,l):Pn(a,e.child,n,l)}function Rd(e,a,n,l,t){n=n.render;var o=a.ref;if("ref"in l){var u={};for(var r in l)r!=="ref"&&(u[r]=l[r])}else u=l;return wn(a),l=Qr(e,a,n,u,o,t),r=Rr(),e!==null&&!Ee?(Br(e,a,t),Ia(e,a,t)):(V&&r&&Oo(a),a.flags|=1,Ne(e,a,l,t),a.child)}function Bd(e,a,n,l,t){if(e===null){var o=n.type;return typeof o=="function"&&!br(o)&&o.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=o,Ld(e,a,o,l,t)):(e=Do(n.type,null,l,a,a.mode,t),e.ref=a.ref,e.return=a,a.child=e)}if(o=e.child,!si(e,t)){var u=o.memoizedProps;if(n=n.compare,n=n!==null?n:gt,n(u,l)&&e.ref===a.ref)return Ia(e,a,t)}return a.flags|=1,e=wa(o,l),e.ref=a.ref,e.return=a,a.child=e}function Ld(e,a,n,l,t){if(e!==null){var o=e.memoizedProps;if(gt(o,l)&&e.ref===a.ref)if(Ee=!1,a.pendingProps=l=o,si(e,t))(e.flags&131072)!==0&&(Ee=!0);else return a.lanes=e.lanes,Ia(e,a,t)}return ni(e,a,n,l,t)}function Gd(e,a,n,l){var t=l.children,o=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(o=o!==null?o.baseLanes|n:n,e!==null){for(l=a.child=e.child,t=0;l!==null;)t=t|l.lanes|l.childLanes,l=l.sibling;l=t&~o}else l=0,a.child=null;return Vd(e,a,o,n,l)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Yo(a,o!==null?o.cachePool:null),o!==null?Zc(a,o):_r(),Jc(a);else return l=a.lanes=536870912,Vd(e,a,o!==null?o.baseLanes|n:n,n,l)}else o!==null?(Yo(a,o.cachePool),Zc(a,o),zn(),a.memoizedState=null):(e!==null&&Yo(a,null),_r(),zn());return Ne(e,a,t,n),a.child}function _t(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Vd(e,a,n,l,t){var o=xr();return o=o===null?null:{parent:ze._currentValue,pool:o},a.memoizedState={baseLanes:n,cachePool:o},e!==null&&Yo(a,null),_r(),Jc(a),e!==null&&Kn(e,a,l,!0),a.childLanes=t,null}function $o(e,a){return a=Po({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Xd(e,a,n){return Pn(a,e.child,null,n),e=$o(a,a.pendingProps),e.flags|=2,ea(a),a.memoizedState=null,e}function Dv(e,a,n){var l=a.pendingProps,t=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(V){if(l.mode==="hidden")return e=$o(a,l),a.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},_t(null,e);if(Yr(a),(e=de)?(e=bf(e,ma),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:dn!==null?{id:Ma,overflow:_a}:null,retryLane:536870912,hydrationErrors:null},n=xc(e),n.return=a,a.child=n,De=a,de=null)):e=null,e===null)throw fn(a);return a.lanes=536870912,null}return $o(a,l)}var o=e.memoizedState;if(o!==null){var u=o.dehydrated;if(Yr(a),t)if(a.flags&256)a.flags&=-257,a=Xd(e,a,n);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(p(558));else if(Ee||Kn(e,a,n,!1),t=(n&e.childLanes)!==0,Ee||t){if(qn.current===null){if(l=ie,l!==null&&(u=Os(l,n),u!==0&&u!==o.retryLane))throw o.retryLane=u,Vn(e,u),ke(l,e,u),ai;gu()}a=Xd(e,a,n)}else e=o.treeContext,de=pa(u.nextSibling),De=a,V=!0,mn=null,ma=!1,e!==null&&Oc(a,e),a=$o(a,l),a.flags|=134221824;return a}return e=wa(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Yl(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(p(284));(e===null||e.ref!==n)&&(a.flags|=4194816)}}function ni(e,a,n,l,t){return wn(a),n=Qr(e,a,n,l,void 0,t),l=Rr(),e!==null&&!Ee?(Br(e,a,t),Ia(e,a,t)):(V&&l&&Oo(a),a.flags|=1,Ne(e,a,n,t),a.child)}function Zd(e,a,n,l,t,o){return wn(a),a.updateQueue=null,n=wc(a,l,n,t),Kc(e),l=Rr(),e!==null&&!Ee?(Br(e,a,o),Ia(e,a,o)):(V&&l&&Oo(a),a.flags|=1,Ne(e,a,n,o),a.child)}function Jd(e,a,n,l,t){if(wn(a),a.stateNode===null){var o=Tl,u=n.contextType;typeof u=="object"&&u!==null&&(o=_e(u)),o=new n(l,o),a.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ir,a.stateNode=o,o._reactInternals=a,o=a.stateNode,o.props=l,o.state=a.memoizedState,o.refs={},Ar(a),u=n.contextType,o.context=typeof u=="object"&&u!==null?_e(u):Tl,o.state=a.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Pr(a,n,u,l),o.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(u=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),u!==o.state&&Ir.enqueueReplaceState(o,o.state,null),Dt(a,l,o,t),xt(),o.state=a.memoizedState),typeof o.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){o=a.stateNode;var r=a.memoizedProps,i=el(n,r);o.props=i;var m=o.context,b=n.contextType;u=Tl,typeof b=="object"&&b!==null&&(u=_e(b));var h=n.getDerivedStateFromProps;b=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function",r=a.pendingProps!==r,b||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(r||m!==u)&&Md(a,o,l,u),bn=!1;var c=a.memoizedState;o.state=c,Dt(a,l,o,t),xt(),m=a.memoizedState,r||c!==m||bn?(typeof h=="function"&&(Pr(a,n,h,l),m=a.memoizedState),(i=bn||jd(a,n,i,l,c,m,u))?(b||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(a.flags|=4194308)):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=m),o.props=l,o.state=m,o.context=u,l=i):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{o=a.stateNode,Or(e,a),u=a.memoizedProps,b=el(n,u),o.props=b,h=a.pendingProps,c=o.context,m=n.contextType,i=Tl,typeof m=="object"&&m!==null&&(i=_e(m)),r=n.getDerivedStateFromProps,(m=typeof r=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==h||c!==i)&&Md(a,o,l,i),bn=!1,c=a.memoizedState,o.state=c,Dt(a,l,o,t),xt();var v=a.memoizedState;u!==h||c!==v||bn||e!==null&&e.dependencies!==null&&_o(e.dependencies)?(typeof r=="function"&&(Pr(a,n,r,l),v=a.memoizedState),(b=bn||jd(a,n,b,l,c,v,i)||e!==null&&e.dependencies!==null&&_o(e.dependencies))?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,v,i),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,v,i)),typeof o.componentDidUpdate=="function"&&(a.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&c===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&c===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=v),o.props=l,o.state=v,o.context=i,l=b):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&c===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&c===e.memoizedState||(a.flags|=1024),l=!1)}return o=l,Yl(e,a),l=(a.flags&128)!==0,o||l?(o=a.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:o.render(),a.flags|=1,e!==null&&l?(a.child=Pn(a,e.child,null,t),a.child=Pn(a,null,n,t)):Ne(e,a,n,t),a.memoizedState=o.state,e=a.child):e=Ia(e,a,t),e}function Kd(e,a,n,l){return Zn(),a.flags|=256,Ne(e,a,n,l),a.child}var li={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ti(e){return{baseLanes:e,cachePool:Uc()}}function oi(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=la),e}function wd(e,a,n){var l=a.pendingProps,t=!1,o=(a.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),u&&(t=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,e===null){if(V){if(t?yn(a):zn(),(e=de)?(e=bf(e,ma),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:dn!==null?{id:Ma,overflow:_a}:null,retryLane:536870912,hydrationErrors:null},n=xc(e),n.return=a,a.child=n,De=a,de=null)):e=null,e===null)throw fn(a);return ts(e)?a.lanes=32:a.lanes=536870912,null}return o=l.children,l=l.fallback,t?(zn(),t=a.mode,o=Po({mode:"hidden",children:o},t),l=Xn(l,t,n,null),o.return=a,l.return=a,o.sibling=l,a.child=o,l=a.child,l.memoizedState=ti(n),l.childLanes=oi(e,u,n),a.memoizedState=li,_t(null,l)):(yn(a),ui(a,o))}var r=e.memoizedState;if(r!==null){var i=r.dehydrated;if(i!==null)return Av(e,a,o,u,l,i,r,n)}return t?(zn(),t=l.fallback,o=a.mode,r=e.child,i=r.sibling,l=wa(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&1206910976,i!==null?t=wa(i,t):(t=Xn(t,o,n,null),t.flags|=2),t.return=a,l.return=a,l.sibling=t,a.child=l,_t(null,l),l=a.child,t=e.child.memoizedState,t===null?t=ti(n):(o=t.cachePool,o!==null?(r=ze._currentValue,o=o.parent!==r?{parent:r,pool:r}:o):o=Uc(),t={baseLanes:t.baseLanes|n,cachePool:o}),l.memoizedState=t,l.childLanes=oi(e,u,n),a.memoizedState=li,_t(e.child,l)):(yn(a),n=e.child,e=n.sibling,n=wa(n,{mode:"visible",children:l.children}),n.return=a,n.sibling=null,e!==null&&(u=a.deletions,u===null?(a.deletions=[e],a.flags|=16):u.push(e)),a.child=n,a.memoizedState=null,n)}function ui(e,a){return a=Po({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Po(e,a){return e=Ze(22,e,null,a),e.lanes=0,e}function Io(e,a,n){return Pn(a,e.child,null,n),e=ui(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Av(e,a,n,l,t,o,u,r){if(n)return a.flags&256?(yn(a),a.flags&=-257,Io(e,a,r)):a.memoizedState!==null?(zn(),a.child=e.child,a.flags|=128,null):(zn(),o=t.fallback,u=a.mode,t=Po({mode:"visible",children:t.children},u),o=Xn(o,u,r,null),o.flags|=2,t.return=a,o.return=a,t.sibling=o,a.child=t,Pn(a,e.child,null,r),t=a.child,t.memoizedState=ti(r),t.childLanes=oi(e,l,r),a.memoizedState=li,_t(null,t));if(yn(a),ts(o)){if(l=o.nextSibling&&o.nextSibling.dataset,l)var i=l.dgst;return l=i,l!==""&&(t=Error(p(419)),t.stack="",t.digest=l,yt({value:t,source:null,stack:null})),Io(e,a,r)}if(Ee||Kn(e,a,r,!1),l=(r&e.childLanes)!==0,Ee||l){if(qn.current!==null)return Io(e,a,r);if(l=ie,l!==null&&(t=Os(l,r),t!==0&&t!==u.retryLane))throw u.retryLane=t,Vn(e,t),ke(l,e,t),ai;return ls(o)||gu(),Io(e,a,r)}return ls(o)?(a.flags|=192,a.child=e.child,null):(e=u.treeContext,de=pa(o.nextSibling),De=a,V=!0,mn=null,ma=!1,e!==null&&Oc(a,e),a=ui(a,t.children),a.flags|=134221824,a)}function kd(e,a,n){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Mo(e.return,a,n)}function Fd(e){for(var a=null;e!==null;){var n=e.alternate;n!==null&&Lo(n)===null&&(a=e),e=e.sibling}return a}function eu(e,a,n,l,t,o){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:t,treeForkCount:o}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=n,u.tailMode=t,u.treeForkCount=o)}function ri(e){var a=e.child;for(e.child=null;a!==null;){var n=a.sibling;a.sibling=e.child,e.child=a,a=n}}function ii(e,a,n){var l=a.pendingProps,t=l.revealOrder,o=l.tail;l=l.children;var u=Ye.current;if(a.flags&128)return At(a,u),null;var r=(u&2)!==0;if(r?(u=u&1|2,a.flags|=128):u&=1,At(a,u),t==="backwards"&&e!==null?(ri(e),Ne(e,a,l,n),ri(e)):Ne(e,a,l,n),l=V?qt:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kd(e,n,a);else if(e.tag===19)kd(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(t){case"backwards":n=Fd(a.child),n===null?(t=a.child,a.child=null):(t=n.sibling,n.sibling=null,ri(a)),eu(a,!0,t,null,o,l);break;case"unstable_legacy-backwards":for(n=null,t=a.child,a.child=null;t!==null;){if(e=t.alternate,e!==null&&Lo(e)===null){a.child=t;break}e=t.sibling,t.sibling=n,n=t,t=e}eu(a,!0,n,null,o,l);break;case"together":eu(a,!1,null,null,void 0,l);break;case"independent":a.memoizedState=null;break;default:n=Fd(a.child),n===null?(t=a.child,a.child=null):(t=n.sibling,n.sibling=null),eu(a,!1,t,n,o,l)}return a.child}function Wd(e,a,n){var l=a.pendingProps;return pn(a,a.type,l.value),Ne(e,a,l.children,n),a.child}function Ia(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),Nn|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(Kn(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(p(153));if(a.child!==null){for(e=a.child,n=wa(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=wa(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function si(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&_o(e)))}function Ov(e,a,n){switch(a.tag){case 3:to(a,a.stateNode.containerInfo),pn(a,ze,e.memoizedState.cache),Zn();break;case 27:case 5:Hu(a);break;case 4:to(a,a.stateNode.containerInfo);break;case 10:pn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Yr(a),null;break;case 13:var l=a.memoizedState;if(l!==null){if(l.dehydrated!==null)return yn(a),a.flags|=128,null;l=Kn(e,a,n,!1);var t=a.child.childLanes;return l||(n&t)!==0?wd(e,a,n):(yn(a),e=Ia(e,a,n),e!==null?e.sibling:null)}yn(a);break;case 19:if(a.flags&128)return ii(e,a,n);if(t=(e.flags&128)!==0,l=(n&a.childLanes)!==0,l||(Kn(e,a,n,!1),l=(n&a.childLanes)!==0),t){if(l)return ii(e,a,n);a.flags|=128}if(t=a.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),At(a,Ye.current),l)break;return null;case 22:return a.lanes=0,Gd(e,a,n,a.pendingProps);case 24:pn(a,ze,e.memoizedState.cache)}return Ia(e,a,n)}function $d(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ee=!0;else{if(!si(e,n)&&(a.flags&128)===0)return Ee=!1,Ov(e,a,n);Ee=(e.flags&131072)!==0}else Ee=!1,V&&(a.flags&1048576)!==0&&Ac(a,qt,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=Wn(a.elementType),a.type=e,typeof e=="function")br(e)?(l=el(e,l),a.tag=1,a=Jd(null,a,e,l,n)):(a.tag=0,a=ni(null,a,e,l,n));else{if(e!=null){var t=e.$$typeof;if(t===N){a.tag=11,a=Rd(null,a,e,l,n);break e}else if(t===pe){a.tag=14,a=Bd(null,a,e,l,n);break e}else if(t===Ve){a.tag=10,a.type=e,a=Wd(null,a,n);break e}}throw a=Yu(e)||e,Error(p(306,a,""))}}return a;case 0:return ni(e,a,a.type,a.pendingProps,n);case 1:return l=a.type,t=el(l,a.pendingProps),Jd(e,a,l,t,n);case 3:e:{if(to(a,a.stateNode.containerInfo),e===null)throw Error(p(387));l=a.pendingProps;var o=a.memoizedState;t=o.element,Or(e,a),Dt(a,l,null,n);var u=a.memoizedState;if(l=u.cache,pn(a,ze,l),l!==o.cache&&Er(a,[ze],n,!0),xt(),l=u.element,o.isDehydrated)if(o={element:l,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=o,a.memoizedState=o,a.flags&256){a=Kd(e,a,l,n);break e}else if(l!==t){t=sa(Error(p(424)),a),yt(t),a=Kd(e,a,l,n);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(de=pa(e.firstChild),De=a,V=!0,mn=null,ma=!0,n=Gc(a,null,l,n),a.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Zn(),l===t){a=Ia(e,a,n);break e}Ne(e,a,l,n)}a=a.child}return a;case 26:return Yl(e,a),e===null?(n=Ef(a.type,null,a.pendingProps,null))?a.memoizedState=n:V||(a.stateNode=af(a.type,a.pendingProps,on.current,a)):a.memoizedState=Ef(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Hu(a),e===null&&V&&(l=a.stateNode=qf(a.type,a.pendingProps,on.current),De=a,ma=!0,t=de,On(a.type)?(os=t,de=pa(l.firstChild)):de=t),Ne(e,a,a.pendingProps.children,n),Yl(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&V&&((t=l=de)&&(l=Eb(l,a.type,a.pendingProps,ma),l!==null?(a.stateNode=l,De=a,de=pa(l.firstChild),ma=!1,t=!0):t=!1),t||fn(a)),Hu(a),t=a.type,o=a.pendingProps,u=e!==null?e.memoizedProps:null,l=o.children,Wi(t,o)?l=null:u!==null&&Wi(t,u)&&(a.flags|=32),a.memoizedState!==null&&(t=Qr(e,a,hv,null,null,n),Pl._currentValue=t),Yl(e,a),Ne(e,a,l,n),a.child;case 6:return e===null&&V&&((e=n=de)&&(n=Tb(n,a.pendingProps,ma),n!==null?(a.stateNode=n,De=a,de=null,e=!0):e=!1),e||fn(a)),null;case 13:return wd(e,a,n);case 4:return to(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Pn(a,null,l,n):Ne(e,a,l,n),a.child;case 11:return Rd(e,a,a.type,a.pendingProps,n);case 7:return l=a.pendingProps,Yl(e,a),Ne(e,a,l,n),a.child;case 8:return Ne(e,a,a.pendingProps.children,n),a.child;case 12:return Ne(e,a,a.pendingProps.children,n),a.child;case 10:return Wd(e,a,n);case 9:return t=a.type._context,l=a.pendingProps.children,wn(a),t=_e(t),l=l(t),a.flags|=1,Ne(e,a,l,n),a.child;case 14:return Bd(e,a,a.type,a.pendingProps,n);case 15:return Ld(e,a,a.type,a.pendingProps,n);case 19:return ii(e,a,n);case 31:return Dv(e,a,n);case 22:return Gd(e,a,n,a.pendingProps);case 24:return wn(a),l=_e(ze),e===null?(t=xr(),t===null&&(t=ie,o=Tr(),t.pooledCache=o,o.refCount++,o!==null&&(t.pooledCacheLanes|=n),t=o),a.memoizedState={parent:l,cache:t},Ar(a),pn(a,ze,t)):((e.lanes&n)!==0&&(Or(e,a),Dt(a,null,null,n),xt()),t=e.memoizedState,o=a.memoizedState,t.parent!==l?(t={parent:l,cache:l},a.memoizedState=t,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=t),pn(a,ze,l)):(l=o.cache,pn(a,ze,l),l!==t.cache&&Er(a,[ze],n,!0))),Ne(e,a,a.pendingProps.children,n),a.child;case 30:return a.stateNode===null&&(a.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=a.pendingProps,l.name!=null&&l.name!=="auto"?a.flags|=e===null?18882560:18874368:V&&Oo(a),e!==null&&e.memoizedProps.name!==l.name?a.flags|=4194816:Yl(e,a),Ne(e,a,l.children,n),a.child;case 29:throw a.pendingProps}throw Error(p(156,a.tag))}function en(e){e.flags|=4}function ci(e,a,n,l,t){var o;if((o=(e.mode&32)!==0)&&(o=n===null?Df(a,l):Df(a,l)&&(l.src!==n.src||l.srcSet!==n.srcSet)),o){if(e.flags|=16777216,(t&335544128)===t)if(e.stateNode.complete)e.flags|=8192;else if(_m())e.flags|=8192;else throw $n=Ho,Dr}else e.flags&=-16777217}function Pd(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Af(a))if(_m())e.flags|=8192;else throw $n=Ho,Dr}function au(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?xs():536870912,e.lanes|=a,Bl|=a)}function Ct(e,a){if(!V)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null;break;default:for(a=e.tail,n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null}}function me(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(a)for(var t=e.child;t!==null;)n|=t.lanes|t.childLanes,l|=t.subtreeFlags&1206910976,l|=t.flags&1206910976,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)n|=t.lanes|t.childLanes,l|=t.subtreeFlags,l|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=l,e.childLanes=n,a}function jv(e,a,n){var l=a.pendingProps;switch(qr(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(a),null;case 1:return me(a),null;case 3:return n=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Wa(ze),dl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Dl(a)?en(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,zr())),me(a),null;case 26:var t=a.type,o=a.memoizedState;return e===null?(en(a),o!==null?(me(a),Pd(a,o)):(me(a),ci(a,t,null,l,n))):o?o!==e.memoizedState?(en(a),me(a),Pd(a,o)):(me(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&en(a),me(a),ci(a,t,e,l,n)),null;case 27:if(oo(a),n=on.current,t=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&en(a);else{if(!l){if(a.stateNode===null)throw Error(p(166));return me(a),a.subtreeFlags&=-33554433,null}e=Oa.current,Dl(a)?jc(a):(e=qf(t,l,n),a.stateNode=e,en(a))}return me(a),a.subtreeFlags&=-33554433,null;case 5:if(oo(a),t=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&en(a);else{if(!l){if(a.stateNode===null)throw Error(p(166));return me(a),a.subtreeFlags&=-33554433,null}if(o=Oa.current,Dl(a))jc(a);else{var u=Zt(on.current);switch(o){case 1:o=u.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:o=u.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":o=u.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":o=u.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":o=u.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?o.multiple=!0:l.size&&(o.size=l.size);break;default:o=typeof l.is=="string"?u.createElement(t,{is:l.is}):u.createElement(t)}}o[Me]=a,o[Xe]=l;e:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)o.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=o;e:switch(He(o,t,l),t){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&en(a)}}return me(a),a.subtreeFlags&=-33554433,ci(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,n),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&en(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(p(166));if(e=on.current,Dl(a)){if(e=a.stateNode,n=a.memoizedProps,l=null,t=De,t!==null)switch(t.tag){case 27:case 5:l=t.memoizedProps}e[Me]=a,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||$m(e.nodeValue,n)),e||fn(a,!0)}else e=Zt(e).createTextNode(l),e[Me]=a,a.stateNode=e}return me(a),null;case 31:if(n=a.memoizedState,e===null||e.memoizedState!==null){if(l=Dl(a),n!==null){if(e===null){if(!l)throw Error(p(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(557));e[Me]=a}else Zn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;me(a),e=!1}else n=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return a.flags&256?(ea(a),a):(ea(a),null);if((a.flags&128)!==0)throw Error(p(558))}return me(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(t=Dl(a),l!==null&&l.dehydrated!==null){if(e===null){if(!t)throw Error(p(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(p(317));t[Me]=a}else Zn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;me(a),t=!1}else t=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),t=!0;if(!t)return a.flags&256?(ea(a),a):(ea(a),null)}return ea(a),(a.flags&128)!==0?(a.lanes=n,a):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=a.child,t=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(t=l.alternate.memoizedState.cachePool.pool),o=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(o=l.memoizedState.cachePool.pool),o!==t&&(l.flags|=2048)),n!==e&&n&&(a.child.flags|=8192),au(a,a.updateQueue),me(a),null);case 4:return dl(),e===null&&Ji(a.stateNode.containerInfo),a.flags|=67108864,me(a),null;case 10:return Wa(a.type),me(a),null;case 19:if(Ur(a),l=a.memoizedState,l===null)return me(a),null;if(t=(a.flags&128)!==0,o=l.rendering,o===null)if(t)Ct(l,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(o=Lo(e),o!==null){for(a.flags|=128,Ct(l,!1),e=o.updateQueue,a.updateQueue=e,au(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)Nc(n,e),n=n.sibling;return At(a,Ye.current&1|2),V&&ka(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&Fe()>fu&&(a.flags|=128,t=!0,Ct(l,!1),a.lanes=4194304)}else{if(!t)if(e=Lo(o),e!==null){if(a.flags|=128,t=!0,e=e.updateQueue,a.updateQueue=e,au(a,e),Ct(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!o.alternate&&!V)return me(a),null}else 2*Fe()-l.renderingStartTime>fu&&n!==536870912&&(a.flags|=128,t=!0,Ct(l,!1),a.lanes=4194304);l.isBackwards?(o.sibling=a.child,a.child=o):(e=l.last,e!==null?e.sibling=o:a.child=o,l.last=o)}if(l.tail!==null){e=l.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Fe(),e.sibling=null,o=Ye.current,o=t?o&1|2:o&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!n||V?At(a,o):(n=o,ce(Ce,a),ce(Ye,n),Qe===null&&(Qe=a)),V&&ka(a,l.treeForkCount),e}return me(a),null;case 22:case 23:return ea(a),Cr(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(n&536870912)!==0&&(a.flags&128)===0&&(me(a),a.subtreeFlags&6&&(a.flags|=8192)):me(a),n=a.updateQueue,n!==null&&au(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==n&&(a.flags|=2048),e!==null&&je(Fn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Wa(ze),me(a),null;case 25:return null;case 30:return a.flags|=33554432,me(a),null}throw Error(p(156,a.tag))}function Mv(e,a){switch(qr(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Wa(ze),dl(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return oo(a),null;case 31:if(a.memoizedState!==null){if(ea(a),a.alternate===null)throw Error(p(340));Zn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ea(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(p(340));Zn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Ur(a),e=a.flags,e&65536?(a.flags=e&-65537|128,e=a.memoizedState,e!==null&&(e.rendering=null,e.tail=null),a.flags|=4,a):null;case 4:return dl(),null;case 10:return Wa(a.type),null;case 22:case 23:return ea(a),Cr(),e!==null&&je(Fn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Wa(ze),null;case 25:return null;default:return null}}function Id(e,a){switch(qr(a),a.tag){case 3:Wa(ze),dl();break;case 26:case 27:case 5:oo(a);break;case 4:dl();break;case 31:a.memoizedState!==null&&ea(a);break;case 13:ea(a);break;case 19:Ur(a);break;case 10:Wa(a.type);break;case 22:case 23:ea(a),Cr(),e!==null&&je(Fn);break;case 24:Wa(ze)}}function Yt(e,a){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var t=l.next;n=t;do{if((n.tag&e)===e){l=void 0;var o=n.create,u=n.inst;l=o(),u.destroy=l}n=n.next}while(n!==t)}}catch(r){ne(a,a.return,r)}}function Sn(e,a,n){try{var l=a.updateQueue,t=l!==null?l.lastEffect:null;if(t!==null){var o=t.next;l=o;do{if((l.tag&e)===e){var u=l.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,t=a;var i=n,m=r;try{m()}catch(b){ne(t,i,b)}}}l=l.next}while(l!==o)}}catch(b){ne(a,a.return,b)}}function em(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{Xc(a,n)}catch(l){ne(e,e.return,l)}}}function am(e,a,n){n.props=el(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){ne(e,a,l)}}function Ca(e,a){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:var t=e.stateNode,o=Ja(e.memoizedProps,t);(t.ref===null||t.ref.name!==o)&&(t.ref=sf(o)),l=t.ref;break;case 7:if(e.stateNode===null){var u=new oa(e);G(e.child,!1,zb,u,void 0,void 0),e.stateNode=u}l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(r){ne(e,a,r)}}function Ue(e,a){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(t){ne(e,a,t)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(t){ne(e,a,t)}else n.current=null}function nu(e,a){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&a!==null)for(var n=0;n<a.length;n++)vf(e.stateNode,a[n])}function nm(e){for(var a=e.return;a!==null&&(mi(a)&&vf(e.stateNode,a.stateNode),!di(a));)a=a.return}function Ut(e){for(var a=e.return;a!==null&&(mi(a)&&Sb(e.stateNode,a.stateNode),!di(a));)a=a.return}function di(e){return e.tag===5||e.tag===3||e.tag===27}function mi(e){return e&&e.tag===7&&e.stateNode!==null}function fi(e){var a=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(t){ne(e,e.return,t)}}function pi(e,a,n){try{var l=e.stateNode;lb(l,e.type,n,a),l[Xe]=a}catch(t){ne(e,e.return,t)}}function lm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&On(e.type)||e.tag===4}function vi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&On(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bi(e,a,n,l){var t=e.tag;if(t===5||t===6)t=e.stateNode,a?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,a):(a=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.appendChild(t),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=ja)),nu(e,l),W=!0;else if(t!==4&&(t===27&&(nu(e,l),l=null,On(e.type)&&(n=e.stateNode,a=null)),e=e.child,e!==null))for(bi(e,a,n,l),e=e.sibling;e!==null;)bi(e,a,n,l),e=e.sibling}function lu(e,a,n,l){var t=e.tag;if(t===5||t===6)t=e.stateNode,a?n.insertBefore(t,a):n.appendChild(t),nu(e,l),W=!0;else if(t!==4&&(t===27&&(nu(e,l),l=null,On(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(lu(e,a,n,l),e=e.sibling;e!==null;)lu(e,a,n,l),e=e.sibling}function tm(e){var a=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,t=a.attributes;t.length;)a.removeAttributeNode(t[0]);He(a,l,n),a[Me]=e,a[Xe]=n}catch(o){ne(e,e.return,o)}}var tu=!1,aa=null;function om(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(tu=!0)}var Ya=null;function um(){var e=Ya;return Ya=null,e}var Je=0;function Ul(e,a,n,l,t){return Je=0,rm(e.child,a,n,l,t)}function rm(e,a,n,l,t){for(var o=!1;e!==null;){if(e.tag===5){var u=e.stateNode;if(l!==null){var r=Ii(u);l.push(r),r.view&&(o=!0)}else o||Ii(u).view&&(o=!0);tu=!0,uf(u,Je===0?a:a+"_"+Je,n),Je++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||rm(e.child,a,n,l,t)&&(o=!0));e=e.sibling}return o}function Ua(e,a){for(;e!==null;)e.tag===5?rf(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||Ua(e.child,a)),e=e.sibling}function ou(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ou(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var a=e.memoizedProps;if(a.name==null||a.name==="auto")throw Error(p(544));var n=a.name;a=Ka(a.default,a.share),a!=="none"&&(Ul(e,n,a,null,!1)||Ua(e.child,!1))}e=e.sibling}}function gi(e,a){if(e.tag===30){var n=e.stateNode,l=e.memoizedProps,t=Ja(l,n),o=Ka(l.default,n.paired?l.share:l.enter);o!=="none"?Ul(e,t,o,null,!1)?(ou(e),n.paired||a||Xl(e,l.onEnter)):Ua(e.child,!1):ou(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)gi(e,a),e=e.sibling;else ou(e)}function hi(e){if(aa!==null&&aa.size!==0){var a=aa;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,l=n.name;if(l!=null&&l!=="auto"){var t=a.get(l);if(t!==void 0){var o=Ka(n.default,n.share);if(o!=="none"&&(Ul(e,l,o,null,!1)?(o=e.stateNode,t.paired=o,o.paired=t,Xl(e,n.onShare)):Ua(e.child,!1)),a.delete(l),a.size===0)break}}}hi(e)}e=e.sibling}}}function qi(e){if(e.tag===30){var a=e.memoizedProps,n=Ja(a,e.stateNode),l=aa!==null?aa.get(n):void 0,t=Ka(a.default,l!==void 0?a.share:a.exit);t!=="none"&&(Ul(e,n,t,null,!1)?l!==void 0?(t=e.stateNode,l.paired=t,t.paired=l,aa.delete(n),Xl(e,a.onShare)):Xl(e,a.onExit):Ua(e.child,!1)),aa!==null&&hi(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)qi(e),e=e.sibling;else aa!==null&&hi(e)}function im(e){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,n=Ja(a,e.stateNode);a=Ka(a.default,a.update),e.flags&=-5,a!=="none"&&Ul(e,n,a,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&im(e);e=e.sibling}}function yi(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.stateNode;a.paired!==null&&(a.paired=null,Ua(e.child,!1))}yi(e)}e=e.sibling}}function uu(e){if(e.tag===30)e.stateNode.paired=null,Ua(e.child,!1),yi(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)uu(e),e=e.sibling;else yi(e)}function sm(e){for(e=e.child;e!==null;)e.tag===30?Ua(e.child,!1):(e.subtreeFlags&33554432)!==0&&sm(e),e=e.sibling}function zi(e,a,n,l,t,o,u){for(var r=!1;a!==null;){if(a.tag===5){var i=a.stateNode;if(o!==null&&Je<o.length){var m=o[Je],b=Ii(i);(m.view||b.view)&&(r=!0);var h;if(h=(e.flags&4)===0)if(b.clip)h=!0;else{h=m.rect;var c=b.rect;h=h.y!==c.y||h.x!==c.x||h.height!==c.height||h.width!==c.width}h&&(e.flags|=4),b.abs?b=!m.abs:(m=m.rect,b=b.rect,b=m.height!==b.height||m.width!==b.width),b&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&uf(i,Je===0?n:n+"_"+Je,t),r&&(e.flags&4)!==0||(Ya===null&&(Ya=[]),Ya.push(i,Je===0?l:l+"_"+Je,a.memoizedProps)),Je++}else(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&u?e.flags|=a.flags&32:zi(e,a.child,n,l,t,o,u)&&(r=!0));a=a.sibling}return r}function cm(e,a){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,l=e.stateNode,t=Ja(n,l),o=Ka(n.default,n.update),u;u=e.memoizedState,e.memoizedState=null,l=e;var r=e.child;Je=0,t=zi(l,r,t,t,o,u,!1),(e.flags&4)!==0&&t&&Xl(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&cm(e);e=e.sibling}}var Ae=!1,ee=!1,Ha=!1,Si=!1,dm=typeof WeakSet=="function"?WeakSet:Set,Oe=null,Qa=!1,Ht=!1,ru=!1,Ei=!1;function _v(e,a,n){if(e=e.containerInfo,ki=Il,e=vc(e),sr(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var t=l.getSelection&&l.getSelection();if(t&&t.rangeCount!==0){l=t.anchorNode;var o=t.anchorOffset,u=t.focusNode;t=t.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var r=0,i=-1,m=-1,b=0,h=0,c=e,v=null;a:for(;;){for(var y;c!==l||o!==0&&c.nodeType!==3||(i=r+o),c!==u||t!==0&&c.nodeType!==3||(m=r+t),c.nodeType===3&&(r+=c.nodeValue.length),(y=c.firstChild)!==null;)v=c,c=y;for(;;){if(c===e)break a;if(v===l&&++b===o&&(i=r),v===u&&++h===t&&(m=r),(y=c.nextSibling)!==null)break;c=v,v=c.parentNode}c=y}l=i===-1||m===-1?null:{start:i,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(Fi={focusedElem:e,selectionRange:l},Il=!1,n=(n&335544064)===n,Oe=a,a=n?9270:1024;Oe!==null;){if(e=Oe,n&&(l=e.deletions,l!==null))for(o=0;o<l.length;o++)n&&qi(l[o]);if(e.alternate===null&&(e.flags&2)!==0)n&&om(e),iu(n);else{if(e.tag===22){if(l=e.alternate,e.memoizedState!==null){l!==null&&l.memoizedState===null&&n&&qi(l),iu(n);continue}else if(l!==null&&l.memoizedState!==null){n&&om(e),iu(n);continue}}l=e.child,(e.subtreeFlags&a)!==0&&l!==null?(l.return=e,Oe=l):(n&&im(e),iu(n))}}aa=null}function iu(e){for(;Oe!==null;){var a=Oe,n=e,l=a.alternate,t=a.flags;switch(a.tag){case 0:case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){n=void 0,t=l.memoizedProps,l=l.memoizedState;var o=a.stateNode;try{var u=el(a.type,t);n=o.getSnapshotBeforeUpdate(u,l),o.__reactInternalSnapshotBeforeUpdate=n}catch(r){ne(a,a.return,r)}}break;case 3:if((t&1024)!==0){if(l=a.stateNode.containerInfo,n=l.nodeType,n===9)ns(l);else if(n===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":ns(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&l!==null&&(n=Ja(l.memoizedProps,l.stateNode),t=a.memoizedProps,t=Ka(t.default,t.update),t!=="none"&&Ul(l,n,t,l.memoizedState=[],!0));break;default:if((t&1024)!==0)throw Error(p(163))}if(l=a.sibling,l!==null){l.return=a.return,Oe=l;break}Oe=a.return}}function mm(e,a,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Ra(e,n),l&4&&Yt(5,n);break;case 1:if(Ra(e,n),l&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(u){ne(n,n.return,u)}else{var t=el(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(t,a,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ne(n,n.return,u)}}l&64&&em(n),l&512&&Ca(n,n.return);break;case 3:if(Ra(e,n),l&64&&(e=n.updateQueue,e!==null)){if(a=null,n.child!==null)switch(n.child.tag){case 27:case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}try{Xc(e,a)}catch(u){ne(n,n.return,u)}}break;case 27:a===null&&l&4&&tm(n);case 26:case 5:Ra(e,n),a===null&&l&4&&fi(n),l&512&&Ca(n,n.return);break;case 12:Ra(e,n);break;case 31:Ra(e,n),l&4&&bm(e,n);break;case 13:Ra(e,n),l&4&&gm(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zv.bind(null,n),Nb(e,n))));break;case 22:if(l=n.memoizedState!==null||Ae,!l){var o=a!==null&&a.memoizedState!==null||ee;a=Ae,t=ee,Ae=l,(ee=o)&&!t?(l=2,(n.subtreeFlags&8772)!==0&&(l|=1),Ea(e,n,l)):Ra(e,n),Ae=a,ee=t}break;case 30:Ra(e,n),l&512&&Ca(n,n.return);break;case 7:l&512&&Ca(n,n.return);default:Ra(e,n)}}function Ti(e,a){for(e=e.child;e!==null;)fm(e,a),e=e.sibling}function fm(e,a){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(a){var l=n.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var t=e.stateNode,o=e.memoizedProps.style,u=o!=null&&o.hasOwnProperty("display")?o.display:null;t.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(i){ne(e,e.return,i)}Ni(e,a);break;case 6:try{e.stateNode.nodeValue=a?"":e.memoizedProps,W=!0}catch(i){ne(e,e.return,i)}break;case 18:try{var r=e.stateNode;a?of(r,!0):of(e.stateNode,!1)}catch(i){ne(e,e.return,i)}break;case 22:case 23:e.memoizedState===null&&Ti(e,a);break;default:Ti(e,a)}}function Ni(e,a){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,l=a;switch(n.tag){case 4:fm(n,l);break e;case 22:n.memoizedState===null&&Ni(n,l);break e;default:Ni(n,l)}}e=e.sibling}}function pm(e){var a=e.alternate;a!==null&&(e.alternate=null,pm(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&fo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,Ke=!1;function za(e,a,n){for(n=n.child;n!==null;)vm(e,a,n),n=n.sibling}function vm(e,a,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(ot,n)}catch{}switch(n.tag){case 26:ee||Ue(n,a),za(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ee&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ee||Ue(n,a),Ut(n);var l=ve,t=Ke;On(n.type)&&(ve=n.stateNode,Ke=!1),za(e,a,n),yf(n.stateNode,n.type,n.memoizedProps),ve=l,Ke=t;break;case 5:ee||Ue(n,a),Ut(n);case 6:if(n.tag===6&&Ut(n),l=ve,t=Ke,ve=null,za(e,a,n),ve=l,Ke=t,ve!==null)if(Ke)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(n.stateNode),W=!0}catch(o){ne(n,a,o)}else try{ve.removeChild(n.stateNode),W=!0}catch(o){ne(n,a,o)}break;case 18:ve!==null&&(Ke?(e=ve,tf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),et(e)):tf(ve,n.stateNode));break;case 4:l=ve,t=Ke,ve=n.stateNode.containerInfo,Ke=!0,za(e,a,n),ve=l,Ke=t;break;case 0:case 11:case 14:case 15:Sn(2,n,a),ee||Sn(4,n,a),za(e,a,n);break;case 1:ee||(Ue(n,a),l=n.stateNode,typeof l.componentWillUnmount=="function"&&am(n,a,l)),za(e,a,n);break;case 21:za(e,a,n);break;case 22:ee=(l=ee)||n.memoizedState!==null,za(e,a,n),ee=l;break;case 30:Ue(n,a),za(e,a,n);break;case 7:ee||Ue(n,a),za(e,a,n);break;default:za(e,a,n)}}function bm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{et(e)}catch(n){ne(a,a.return,n)}}}function gm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{et(e)}catch(n){ne(a,a.return,n)}}function Cv(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new dm),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new dm),a;default:throw Error(p(435,e.tag))}}function su(e,a){var n=Cv(e);a.forEach(function(l){if(!n.has(l)){n.add(l);var t=Jv.bind(null,e,l);l.then(t,t)}})}function Le(e,a,n){var l=a.deletions;if(l!==null)for(var t=0;t<l.length;t++){var o=l[t],u=e,r=a,i=r;e:for(;i!==null;){switch(i.tag){case 27:if(On(i.type)){ve=i.stateNode,Ke=!1;break e}break;case 5:ve=i.stateNode,Ke=!1;break e;case 3:case 4:ve=i.stateNode.containerInfo,Ke=!0;break e}i=i.return}if(ve===null)throw Error(p(160));vm(u,r,o),ve=null,Ke=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)hm(a,e,n),a=a.sibling}var Sa=null;function hm(e,a,n){var l=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(t&4&&(l=e.updateQueue,l=l!==null?l.events:null,l!==null))for(var o=0;o<l.length;o++){var u=l[o];u.ref.impl=u.nextImpl}Le(a,e,n),Ge(e),t&4&&(Sn(3,e,e.return),Yt(3,e),Sn(5,e,e.return));break;case 1:Le(a,e,n),Ge(e),t&512&&(ee||l===null||Ue(l,l.return)),t&64&&Ae&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:if(o=Sa,Le(a,e,n),Ge(e),t&512&&(ee||l===null||Ue(l,l.return)),t&4)if(t=l!==null?l.memoizedState:null,n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null)if(Ae)e.stateNode=af(e.type,e.memoizedProps,a.containerInfo,e);else{e:{a=e.type,n=e.memoizedProps,t=o.ownerDocument||o;a:switch(a){case"title":l=t.getElementsByTagName("title")[0],(!l||l[it]||l[Me]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=t.createElement(a),t.head.insertBefore(l,t.querySelector("head > title"))),He(l,a,n),l[Me]=e,xe(l),a=l;break e;case"link":if(o=xf("link","href",t).get(a+(n.href||""))){for(u=0;u<o.length;u++)if(l=o[u],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(u,1);break a}}l=t.createElement(a),He(l,a,n),t.head.appendChild(l);break;case"meta":if(o=xf("meta","content",t).get(a+(n.content||""))){for(u=0;u<o.length;u++)if(l=o[u],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(u,1);break a}}l=t.createElement(a),He(l,a,n),t.head.appendChild(l);break;default:throw Error(p(468,a))}l[Me]=e,xe(l),a=l}e.stateNode=a}else Ae||ss(o,e.type,e.stateNode);else e.stateNode=Nf(o,n,e.memoizedProps);else t!==n?(t===null?(a=l.stateNode,a===null||ee||a.parentNode.removeChild(a)):t.count--,n===null?Ae||ss(o,e.type,e.stateNode):Nf(o,n,e.memoizedProps)):n===null&&e.stateNode!==null&&pi(e,e.memoizedProps,l.memoizedProps);break;case 27:Le(a,e,n),Ge(e),t&512&&(ee||l===null||Ue(l,l.return)),l!==null&&t&4&&pi(e,e.memoizedProps,l.memoizedProps);break;case 5:if(o=Ha,Ha=!1,Le(a,e,n),Ha=o,Ge(e),t&512&&(ee||l===null||Ue(l,l.return)),e.flags&32){a=e.stateNode;try{gl(a,""),W=!0}catch(b){ne(e,e.return,b)}}t&4&&e.stateNode!=null&&(a=e.memoizedProps,pi(e,a,l!==null?l.memoizedProps:a)),t&1024&&(Si=!0);break;case 6:if(Le(a,e,n),Ge(e),t&4){if(e.stateNode===null)throw Error(p(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a,W=!0}catch(b){ne(e,e.return,b)}}break;case 3:if(W=!1,Tu=null,o=Sa,Sa=Jt(a.containerInfo),Le(a,e,n),Sa=o,Ge(e),t&4&&l!==null&&l.memoizedState.isDehydrated)try{et(a.containerInfo)}catch(b){ne(e,e.return,b)}Si&&(Si=!1,qm(e)),W=!1;break;case 4:t=Ha,Ha=Ae,l=Bs(),o=Sa,Sa=Jt(e.stateNode.containerInfo),Le(a,e,n),Ge(e),Sa=o,W&&Ht&&(ru=!0),W=l,Ha=t;break;case 12:Le(a,e,n),Ge(e);break;case 31:Le(a,e,n),Ge(e),t&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,su(e,a)));break;case 13:Le(a,e,n),Ge(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(mu=Fe()),t&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,su(e,a)));break;case 22:o=e.memoizedState!==null,u=l!==null&&l.memoizedState!==null;var r=Ae,i=ee,m=Ha;Ae=r||o,Ha=m||o,ee=i||u,Le(a,e,n),ee=i,Ha=m,Ae=r,Ge(e),t&8192&&(a=e.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,!o||l===null||u||Ae||ee||(a=u||ee,n=Ae,l=ee,Ae=o||Ae,ee=a,En(e,2),Ae=n,ee=l),!o&&Ha||Ti(e,o)),t&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,su(e,n))));break;case 19:Le(a,e,n),Ge(e),t&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,su(e,a)));break;case 30:t&512&&(ee||l===null||Ue(l,l.return)),t=Bs(),o=Ht,u=(n&335544064)===n,r=e.memoizedProps,Ht=u&&Ka(r.default,r.update)!=="none",Le(a,e,n),Ge(e),u&&l!==null&&W&&(e.flags|=4),Ht=o,W=t;break;case 21:break;case 7:t&512&&(ee||l===null||Ue(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=e);default:Le(a,e,n),Ge(e)}}function Ge(e){var a=e.flags;if(a&2){try{for(var n,l=e.return;l!==null;){if(lm(l)){n=l;break}l=l.return}l=null;for(var t=e.return;t!==null;){if(mi(t)){var o=t.stateNode;l===null?l=[o]:l.push(o)}if(di(t))break;t=t.return}var u=l;if(n==null)throw Error(p(160));switch(n.tag){case 27:var r=n.stateNode,i=vi(e);lu(e,i,r,u);break;case 5:var m=n.stateNode;n.flags&32&&(gl(m,""),n.flags&=-33);var b=vi(e);lu(e,b,m,u);break;case 3:case 4:var h=n.stateNode.containerInfo,c=vi(e);bi(e,c,h,u);break;default:throw Error(p(161))}}catch(v){ne(e,e.return,v)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function qm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;qm(a),a.tag===5&&a.flags&1024&&(a=a.stateNode,Il=!0,a.reset(),Il=!1),e=e.sibling}}function Hl(e,a){if(a.subtreeFlags&9270)for(a=a.child;a!==null;)ym(a,e),a=a.sibling;else cm(a)}function ym(e,a){var n=e.alternate;if(n===null)gi(e,!1);else switch(e.tag){case 3:if(Ei=Qa=!1,um(),Hl(a,e),!Qa&&!ru){if(e=Ya,e!==null)for(var l=0;l<e.length;l+=3){n=e[l];var t=e[l+1];rf(n,e[l+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+t+")"})}e=a.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ei=!0}Ya=null;break;case 5:Hl(a,e);break;case 4:l=Qa,Qa=!1,Hl(a,e),Qa&&(ru=!0),Qa=l;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?gi(e,!1):Hl(a,e));break;case 30:l=Qa,t=um(),Qa=!1,Hl(a,e),Qa&&(e.flags|=4);var o=e.memoizedProps,u=e.stateNode;a=Ja(o,u),u=Ja(n.memoizedProps,u);var r=Ka(o.default,o.update);r==="none"?a=!1:(o=n.memoizedState,n.memoizedState=null,n=e.child,Je=0,a=zi(e,n,a,u,r,o,!0),Je!==(o===null?0:o.length)&&(e.flags|=32)),(e.flags&4)!==0&&a?(Xl(e,e.memoizedProps.onUpdate),Ya=t):t!==null&&(t.push.apply(t,Ya),Ya=t),Qa=(e.flags&32)!==0?!0:l;break;default:Hl(a,e)}}function Ra(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)mm(e,a.alternate,a),a=a.sibling}function En(e,a){for(e=e.child;e!==null;){var n=e,l=a;switch(n.tag){case 0:case 11:case 14:case 15:Sn(4,n,n.return),En(n,l);break;case 1:Ue(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&am(n,n.return,t),En(n,l);break;case 27:(l&2)!==0&&yf(n.stateNode,n.type,n.memoizedProps);case 5:Ue(n,n.return),n.tag!==5&&n.tag!==27||Ut(n),En(n,l);break;case 6:Ut(n);break;case 26:Ue(n,n.return),t=n.stateNode,n.memoizedState!==null||t===null||ee||t.parentNode.removeChild(t),En(n,l);break;case 22:n.memoizedState===null&&En(n,l);break;case 30:Ue(n,n.return),En(n,l);break;case 7:Ue(n,n.return);default:En(n,l)}e=e.sibling}}function Ea(e,a,n){for(n=(a.subtreeFlags&8772)!==0?n:n&-2,a=a.child;a!==null;){var l=a.alternate,t=e,o=a,u=o.flags,r=(n&1)!==0;switch(o.tag){case 0:case 11:case 15:Ea(t,o,n),Yt(4,o);break;case 1:if(Ea(t,o,n),l=o,t=l.stateNode,typeof t.componentDidMount=="function")try{t.componentDidMount()}catch(b){ne(l,l.return,b)}if(l=o,t=l.updateQueue,t!==null){var i=l.stateNode;try{var m=t.shared.hiddenCallbacks;if(m!==null)for(t.shared.hiddenCallbacks=null,t=0;t<m.length;t++)Vc(m[t],i)}catch(b){ne(l,l.return,b)}}r&&u&64&&em(o),Ca(o,o.return);break;case 27:(n&2)!==0&&tm(o);case 5:o.tag!==5&&o.tag!==27||nm(o),Ea(t,o,n),r&&l===null&&u&4&&fi(o),Ca(o,o.return);break;case 6:nm(o);break;case 26:i=o.stateNode,o.memoizedState!==null||i===null||Ae||ss(Jt(i.ownerDocument),o.type,i),Ea(t,o,n),r&&l===null&&u&4&&fi(o),Ca(o,o.return);break;case 12:Ea(t,o,n);break;case 31:Ea(t,o,n),r&&u&4&&bm(t,o);break;case 13:Ea(t,o,n),r&&u&4&&gm(t,o);break;case 22:o.memoizedState===null&&Ea(t,o,n),Ca(o,o.return);break;case 30:Ea(t,o,n),Ca(o,o.return);break;case 7:Ca(o,o.return);default:Ea(t,o,n)}a=a.sibling}}function xi(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&zt(n))}function Di(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&zt(e))}function fa(e,a,n,l){var t=(n&335544064)===n;if(a.subtreeFlags&(t?10262:10256))for(a=a.child;a!==null;)zm(e,a,n,l),a=a.sibling;else t&&sm(a)}function zm(e,a,n,l){var t=(n&335544064)===n;t&&a.alternate===null&&a.return!==null&&a.return.alternate!==null&&uu(a);var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a,n,l),o&2048&&Yt(9,a);break;case 1:fa(e,a,n,l);break;case 3:fa(e,a,n,l),t&&Ei&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),o&2048&&(o=null,a.alternate!==null&&(o=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==o&&(a.refCount++,o!=null&&zt(o)));break;case 12:if(o&2048){fa(e,a,n,l),o=a.stateNode;try{var u=a.memoizedProps,r=u.id,i=u.onPostCommit;typeof i=="function"&&i(r,a.alternate===null?"mount":"update",o.passiveEffectDuration,-0)}catch(m){ne(a,a.return,m)}}else fa(e,a,n,l);break;case 31:fa(e,a,n,l);break;case 13:fa(e,a,n,l);break;case 23:break;case 22:u=a.stateNode,r=a.alternate,a.memoizedState!==null?(t&&r!==null&&r.memoizedState===null&&uu(r),u._visibility&2?fa(e,a,n,l):Qt(e,a)):(t&&r!==null&&r.memoizedState!==null&&uu(a),u._visibility&2?fa(e,a,n,l):(u._visibility|=2,Ql(e,a,n,l,(a.subtreeFlags&10256)!==0||!1))),o&2048&&xi(r,a);break;case 24:fa(e,a,n,l),o&2048&&Di(a.alternate,a);break;case 30:t&&(o=a.alternate,o!==null&&(Ua(o.child,!0),Ua(a.child,!0))),fa(e,a,n,l);break;default:fa(e,a,n,l)}}function Ql(e,a,n,l,t){for(t=t&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var o=e,u=a,r=n,i=l,m=u.flags;switch(u.tag){case 0:case 11:case 15:Ql(o,u,r,i,t),Yt(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?Ql(o,u,r,i,t):Qt(o,u):(b._visibility|=2,Ql(o,u,r,i,t)),t&&m&2048&&xi(u.alternate,u);break;case 24:Ql(o,u,r,i,t),t&&m&2048&&Di(u.alternate,u);break;default:Ql(o,u,r,i,t)}a=a.sibling}}function Qt(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,l=a,t=l.flags;switch(l.tag){case 22:Qt(n,l),t&2048&&xi(l.alternate,l);break;case 24:Qt(n,l),t&2048&&Di(l.alternate,l);break;default:Qt(n,l)}a=a.sibling}}var al=8192;function nl(e,a,n){if(e.subtreeFlags&al)for(e=e.child;e!==null;)Sm(e,a,n),e=e.sibling}function Sm(e,a,n){switch(e.tag){case 26:nl(e,a,n),e.flags&al&&(e.memoizedState!==null?Bb(n,Sa,e.memoizedState,e.memoizedProps):(e=e.stateNode,(a&335544128)===a&&jf(n,e)));break;case 5:nl(e,a,n),e.flags&al&&(e=e.stateNode,(a&335544128)===a&&jf(n,e));break;case 3:case 4:var l=Sa;Sa=Jt(e.stateNode.containerInfo),nl(e,a,n),Sa=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=al,al=16777216,nl(e,a,n),al=l):nl(e,a,n));break;case 30:if((e.flags&al)!==0&&(l=e.memoizedProps.name,l!=null&&l!=="auto")){var t=e.stateNode;t.paired=null,aa===null&&(aa=new Map),aa.set(l,t)}nl(e,a,n);break;default:nl(e,a,n)}}function Em(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Rt(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var l=a[n];Oe=l,Nm(l,e)}Em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tm(e),e=e.sibling}function Tm(e){switch(e.tag){case 0:case 11:case 15:Rt(e),e.flags&2048&&Sn(9,e,e.return);break;case 3:Rt(e);break;case 12:Rt(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,cu(e)):Rt(e);break;default:Rt(e)}}function cu(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var l=a[n];Oe=l,Nm(l,e)}Em(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Sn(8,a,a.return),cu(a);break;case 22:n=a.stateNode,n._visibility&2&&(n._visibility&=-3,cu(a));break;default:cu(a)}e=e.sibling}}function Nm(e,a){for(;Oe!==null;){var n=Oe;switch(n.tag){case 0:case 11:case 15:Sn(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:zt(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Oe=l;else e:for(n=e;Oe!==null;){l=Oe;var t=l.sibling,o=l.return;if(pm(l),l===n){Oe=null;break e}if(t!==null){t.return=o,Oe=t;break e}Oe=o}}}var Yv={getCacheForType:function(e){var a=_e(ze),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n},cacheSignal:function(){return _e(ze).controller.signal}},Uv=typeof WeakMap=="function"?WeakMap:Map,I=0,ie=null,Z=null,K=0,ae=0,na=null,Tn=!1,Rl=!1,Ai=!1,an=0,he=0,Nn=0,ll=0,du=0,la=0,Bl=0,Bt=null,we=null,Oi=!1,mu=0,xm=0,fu=1/0,pu=null,xn=null,be=0,Ta=null,tl=null,Ba=0,ji=0,Mi=null,Dm=null,Ll=null,Gl=null,Vl=null,Lt=0,vu=null;function ta(){return(I&2)!==0&&K!==0?K&-K:Y.T!==null?Gi():js()}function Am(){if(la===0)if((K&536870912)===0||V){var e=io;io<<=1,(io&3932160)===0&&(io=262144),la=e}else la=536870912;return e=Ce.current,e!==null&&(e.flags|=32),la}function Xl(e,a){if(a!=null){var n=e.stateNode,l=n.ref;l===null&&(l=n.ref=sf(Ja(e.memoizedProps,n))),Gl===null&&(Gl=[]),Gl.push(a.bind(null,l))}}function ke(e,a,n){(e===ie&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(Zl(e,0),Dn(e,K,la,!1)),rt(e,n),((I&2)===0||e!==ie)&&(e===ie&&((I&2)===0&&(ll|=n),he===4&&Dn(e,K,la,!1)),La(e))}function Om(e,a,n){if((I&6)!==0)throw Error(p(327));var l=!n&&(a&127)===0&&(a&e.expiredLanes)===0||ut(e,a),t=l?Rv(e,a):Ci(e,a,!0),o=l;do{if(t===0){Rl&&!l&&Dn(e,a,0,!1);break}else{if(n=e.current.alternate,o&&!Hv(n)){t=Ci(e,a,!1),o=!1;continue}if(t===2){if(o=a,e.errorRecoveryDisabledLanes&o)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;e:{var r=e;t=Bt;var i=r.current.memoizedState.isDehydrated;if(i&&(Zl(r,u).flags|=256),u=Ci(r,u,!1),u!==2&&u!==6){if(Ai&&!i){r.errorRecoveryDisabledLanes|=o,ll|=o,t=4;break e}o=we,we=t,o!==null&&(we===null?we=o:we.push.apply(we,o))}t=u}if(o=!1,t!==2)continue}}if(t===1){Zl(e,0),Dn(e,a,0,!0);break}e:{switch(l=e,o=t,o){case 0:case 1:throw Error(p(345));case 4:if((a&4194048)!==a&&(a&62914560)!==a)break;case 6:Dn(l,a,la,!Tn);break e;case 2:we=null;break;case 3:case 5:break;default:throw Error(p(329))}if((a&62914560)===a&&(t=mu+300-Fe(),10<t)){if(Dn(l,a,la,!Tn),co(l,0,!0)!==0)break e;Ba=a,l.timeoutHandle=Pi(jm.bind(null,l,n,we,pu,Oi,a,la,ll,Bl,Tn,o,"Throttled",-0,0),t);break e}jm(l,n,we,pu,Oi,a,la,ll,Bl,Tn,o,null,-0,0)}}break}while(!0);La(e)}function jm(e,a,n,l,t,o,u,r,i,m,b,h,c,v){e.timeoutHandle=-1;var y=a.subtreeFlags,A=(o&335544064)===o;if(h=null,(A||y&8192||(y&16785408)===16785408)&&(h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ja},aa=null,Sm(a,o,h),A&&(y=h,A=e.containerInfo,A=(A.nodeType===9?A:A.ownerDocument).__reactViewTransition,A!=null&&(y.count++,y.waitingForViewTransition=!0,y=kt.bind(y),A.finished.then(y,y))),y=(o&62914560)===o?mu-Fe():(o&4194048)===o?xm-Fe():0,y=Lb(h,y),y!==null)){Ba=o,e.cancelPendingCommit=y(Rm.bind(null,e,a,o,n,l,t,u,r,i,m,b,h,null,c,v)),Dn(e,o,u,!m);return}Rm(e,a,o,n,l,t,u,r,i,m,b,h)}function Hv(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var t=n[l],o=t.getSnapshot;t=t.value;try{if(!Ie(o(),t))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Dn(e,a,n,l){a=Ns(e,a),a&=~du,a&=~ll,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var t=a;0<t;){var o=31-$e(t),u=1<<o;l[o]=-1,t&=~u}n!==0&&Ds(e,n,a)}function bu(){return(I&6)===0?(Gt(0),!1):!0}function _i(){if(Z!==null){if(ae===0)var e=Z.return;else e=Z,Fa=Jn=null,Lr(e),jl=null,Tt=0,e=Z;for(;e!==null;)Id(e.alternate,e),e=e.return;Z=null}}function Zl(e,a){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,ub(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ba=0,_i(),ie=e,Z=n=wa(e.current,null),K=a,ae=0,na=null,Tn=!1,Rl=ut(e,a),Ai=!1,Bl=la=du=ll=Nn=he=0,we=Bt=null,Oi=!1,an=Ns(e,a),To(),n}function Mm(e,a){R=null,Y.H=Fo,a===Ol||a===Uo?(a=Rc(),ae=3):a===Dr?(a=Rc(),ae=4):ae=a===ai?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,na=a,Z===null&&(he=1,Wo(e,sa(a,e.current)))}function _m(){var e=Ce.current;return e===null?!0:(K&4194048)===K?Qe===null:(K&62914560)===K||(K&536870912)!==0?e===Qe:!1}function Cm(){var e=Y.H;return Y.H=Fo,e===null?Fo:e}function Ym(){var e=Y.A;return Y.A=Yv,e}function gu(){he=4,Tn||(K&4194048)!==K&&Ce.current!==null||(Rl=!0),(Nn&134217727)===0&&(ll&134217727)===0||ie===null||Dn(ie,K,la,!1)}function Ci(e,a,n){var l=I;I|=2;var t=Cm(),o=Ym();(ie!==e||K!==a)&&(pu=null,Zl(e,a)),a=!1;var u=he;e:do try{if(ae!==0&&Z!==null){var r=Z,i=na;switch(ae){case 8:_i(),u=6;break e;case 3:case 2:case 9:case 6:Ce.current===null&&(a=!0);var m=ae;if(ae=0,na=null,Jl(e,r,i,m),n&&Rl){u=0;break e}break;default:m=ae,ae=0,na=null,Jl(e,r,i,m)}}Qv(),u=he;break}catch(b){Mm(e,b)}while(!0);return a&&e.shellSuspendCounter++,Fa=Jn=null,I=l,Y.H=t,Y.A=o,Z===null&&(ie=null,K=0,To()),u}function Qv(){for(;Z!==null;)Um(Z)}function Rv(e,a){var n=I;I|=2;var l=Cm(),t=Ym();ie!==e||K!==a?(pu=null,fu=Fe()+500,Zl(e,a)):Rl=ut(e,a);e:do try{if(ae!==0&&Z!==null){a=Z;var o=na;a:switch(ae){case 1:ae=0,na=null,Jl(e,a,o,1);break;case 2:case 9:if(Hc(o)){ae=0,na=null,Hm(a);break}a=function(){ae!==2&&ae!==9||ie!==e||(ae=7),La(e)},o.then(a,a);break e;case 3:ae=7;break e;case 4:ae=5;break e;case 7:Hc(o)?(ae=0,na=null,Hm(a)):(ae=0,na=null,Jl(e,a,o,7));break;case 5:var u=null;switch(Z.tag){case 26:u=Z.memoizedState;case 5:case 27:var r=Z;if(u?Af(u):r.stateNode.complete){ae=0,na=null;var i=r.sibling;if(i!==null)Z=i;else{var m=r.return;m!==null?(Z=m,hu(m)):Z=null}break a}}ae=0,na=null,Jl(e,a,o,5);break;case 6:ae=0,na=null,Jl(e,a,o,6);break;case 8:_i(),he=6;break e;default:throw Error(p(462))}}Bv();break}catch(b){Mm(e,b)}while(!0);return Fa=Jn=null,Y.H=l,Y.A=t,I=n,Z!==null?0:(ie=null,K=0,To(),he)}function Bv(){for(;Z!==null&&!np();)Um(Z)}function Um(e){var a=$d(e.alternate,e,an);e.memoizedProps=e.pendingProps,a===null?hu(e):Z=a}function Hm(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=Zd(n,a,a.pendingProps,a.type,void 0,K);break;case 11:a=Zd(n,a,a.pendingProps,a.type.render,a.ref,K);break;case 5:Lr(a);var l=a;l===De&&(V?(jo(l),l.tag===5&&l.stateNode!=null&&(de=l.stateNode)):(jo(l),V=!0));default:Id(n,a),a=Z=Nc(a,an),a=$d(n,a,an)}e.memoizedProps=e.pendingProps,a===null?hu(e):Z=a}function Jl(e,a,n,l){Fa=Jn=null,Lr(a),jl=null,Tt=0;var t=a.return;try{if(xv(e,t,a,n,K)){he=1,Wo(e,sa(n,e.current)),Z=null;return}}catch(o){if(t!==null)throw Z=t,o;he=1,Wo(e,sa(n,e.current)),Z=null;return}a.flags&32768?(V||l===1?e=!0:Rl||(K&536870912)!==0?e=!1:(Tn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ce.current,l!==null&&l.tag===13&&(l.flags|=16384))),Qm(a,e)):hu(a)}function hu(e){var a=e;do{if((a.flags&32768)!==0){Qm(a,Tn);return}e=a.return;var n=jv(a.alternate,a,an);if(n!==null){Z=n;return}if(a=a.sibling,a!==null){Z=a;return}Z=a=e}while(a!==null);he===0&&(he=5)}function Qm(e,a){do{var n=Mv(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);he=6,Z=null}function Rm(e,a,n,l,t,o,u,r,i,m,b,h){e.cancelPendingCommit=null;do qu();while(be!==0);if((I&6)!==0)throw Error(p(327));if(a!==null){if(a===e.current)throw Error(p(177));e===ie&&(Z=ie=null,K=0),tl=a,Ta=e,Ba=n,Mi=t,Dm=l,Lv(e,a,n,u,r,i,h)}}function Lv(e,a,n,l,t,o,u){var r=a.lanes|a.childLanes;if(ji=r,r|=pr,mp(e,n,r,l,t,o),Gl=null,(n&335544064)===n?(Vl=pv(e),l=10262):(Vl=null,l=10256),(a.subtreeFlags&l)!==0||(a.flags&l)!==0?(e.callbackNode=null,e.callbackPriority=0,Kv(uo,function(){return Qi(),null})):(e.callbackNode=null,e.callbackPriority=0),tu=!1,l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=Y.T,Y.T=null,t=P.p,P.p=2,o=I,I|=4;try{_v(e,a,n)}finally{I=o,P.p=t,Y.T=l}}be=1,tu?Ll=mb(u,e.containerInfo,Vl,Yi,Ui,Vv,Hi,Qi,Gv):(Yi(),Ui(),Hi())}function Gv(e){if(be!==0){var a=Ta.onRecoverableError;a(e,{componentStack:null})}}function Vv(){be===3&&(be=0,ym(tl,Ta),be=4)}function Yi(){if(be===1){be=0;var e=Ta,a=tl,n=Ba,l=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||l){l=Y.T,Y.T=null;var t=P.p;P.p=2;var o=I;I|=4;try{Ht=ru=!1,hm(a,e,n),n=Fi;var u=vc(e.containerInfo),r=n.focusedElem,i=n.selectionRange;if(u!==r&&r&&r.ownerDocument&&pc(r.ownerDocument.documentElement,r)){if(i!==null&&sr(r)){var m=i.start,b=i.end;if(b===void 0&&(b=m),"selectionStart"in r)r.selectionStart=m,r.selectionEnd=Math.min(b,r.value.length);else{var h=r.ownerDocument||document,c=h&&h.defaultView||window;if(c.getSelection){var v=c.getSelection(),y=r.textContent.length,A=Math.min(i.start,y),B=i.end===void 0?A:Math.min(i.end,y);!v.extend&&A>B&&(u=B,B=A,A=u);var d=fc(r,A),s=fc(r,B);if(d&&s&&(v.rangeCount!==1||v.anchorNode!==d.node||v.anchorOffset!==d.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)){var f=h.createRange();f.setStart(d.node,d.offset),v.removeAllRanges(),A>B?(v.addRange(f),v.extend(s.node,s.offset)):(f.setEnd(s.node,s.offset),v.addRange(f))}}}}for(h=[],v=r;v=v.parentNode;)v.nodeType===1&&h.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<h.length;r++){var g=h[r];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Il=!!ki,Fi=ki=null}finally{I=o,P.p=t,Y.T=l}}e.current=a,be=2}}function Ui(){if(be===2){be=0;var e=Ta,a=tl,n=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||n){n=Y.T,Y.T=null;var l=P.p;P.p=2;var t=I;I|=4;try{mm(e,a.alternate,a)}finally{I=t,P.p=l,Y.T=n}}be=3}}function Hi(){if(be===4||be===3){be=0;var e=Ll;Ll=null,lp();var a=Ta,n=tl,l=Ba,t=Dm,o=(l&335544064)===l?10262:10256;if((n.subtreeFlags&o)!==0||(n.flags&o)!==0?be=5:(be=0,tl=Ta=null,Bm(a,a.pendingLanes)),o=a.pendingLanes,o===0&&(xn=null),Ju(l),n=n.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}if(t!==null){n=Y.T,o=P.p,P.p=2,Y.T=null;try{for(var u=a.onRecoverableError,r=0;r<t.length;r++){var i=t[r];u(i.value,{componentStack:i.stack})}}finally{Y.T=n,P.p=o}}if(t=Gl,u=Vl,Vl=null,t!==null&&(Gl=null,u===null&&(u=[]),e!==null))for(i=0;i<t.length;i++)n=(0,t[i])(u),n!==void 0&&e.finished.finally(n);(Ba&3)!==0&&qu(),La(a),o=a.pendingLanes,(l&261930)!==0&&(o&42)!==0?a===vu?Lt++:(Lt=0,vu=a):(Lt=0,vu=null),Gt(0)}}function Bm(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,zt(a)))}function qu(){return Ll!==null&&(Ll.skipTransition(),Ll=null),Yi(),Ui(),Hi(),Qi()}function Qi(){if(be!==5)return!1;var e=Ta,a=ji;ji=0;var n=Ju(Ba),l=Y.T,t=P.p;try{P.p=32>n?32:n,Y.T=null,n=Mi,Mi=null;var o=Ta,u=Ba;if(be=0,tl=Ta=null,Ba=0,(I&6)!==0)throw Error(p(331));var r=I;if(I|=4,Tm(o.current),zm(o,o.current,u,n),I=r,Gt(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(ot,o)}catch{}return!0}finally{P.p=t,Y.T=l,Bm(e,a)}}function Lm(e,a,n){a=sa(n,a),a=ei(e.stateNode,a,2),e=hn(e,a,2),e!==null&&(rt(e,2),La(e))}function ne(e,a,n){if(e.tag===3)Lm(e,e,n);else for(;a!==null;){if(a.tag===3){Lm(a,e,n);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xn===null||!xn.has(l))){e=sa(n,e),n=Hd(2),l=hn(a,n,2),l!==null&&(Qd(n,l,a,e),rt(l,2),La(l));break}}a=a.return}}function Ri(e,a,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Uv;var t=new Set;l.set(a,t)}else t=l.get(a),t===void 0&&(t=new Set,l.set(a,t));t.has(n)||(Ai=!0,t.add(n),e=Xv.bind(null,e,a,n),a.then(e,e))}function Xv(e,a,n){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ie===e&&(K&n)===n&&((he===4||he===3&&(K&62914560)===K&&300>Fe()-mu)&&(I&2)===0?Zl(e,0):du|=n,Bl===K&&(Bl=0)),La(e)}function Gm(e,a){a===0&&(a=xs()),e=Vn(e,a),e!==null&&(rt(e,a),La(e))}function Zv(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),Gm(e,n)}function Jv(e,a){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,t=e.memoizedState;t!==null&&(n=t.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(p(314))}l!==null&&l.delete(a),Gm(e,n)}function Kv(e,a){return Gu(e,a)}var Kl=null,wl=null,Bi=!1,yu=!1,Li=!1,An=0;function La(e){e!==wl&&e.next===null&&(wl===null?Kl=wl=e:wl=wl.next=e),yu=!0,Bi||(Bi=!0,kv())}function Gt(e,a){if(!Li&&yu){Li=!0;do for(var n=!1,l=Kl;l!==null;){if(e!==0){var t=l.pendingLanes;if(t===0)var o=0;else{var u=l.suspendedLanes,r=l.pingedLanes;o=(1<<31-$e(42|e)+1)-1,o&=t&~(u&~r),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,Jm(l,o))}else o=K,o=co(l,l===ie?o:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(o&3)===0||ut(l,o)||(n=!0,Jm(l,o));l=l.next}while(n);Li=!1}}function wv(){Vm()}function Vm(){yu=Bi=!1;var e=0;An!==0&&ob()&&(e=An);for(var a=Fe(),n=null,l=Kl;l!==null;){var t=l.next,o=Xm(l,a);o===0?(l.next=null,n===null?Kl=t:n.next=t,t===null&&(wl=n)):(n=l,(e!==0||(o&3)!==0)&&(yu=!0)),l=t}be!==0&&be!==5||Gt(e),An!==0&&(An=0)}function Xm(e,a){for(var n=e.suspendedLanes,l=e.pingedLanes,t=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var u=31-$e(o),r=1<<u,i=t[u];i===-1?((r&n)===0||(r&l)!==0)&&(t[u]=dp(r,a)):i<=a&&(e.expiredLanes|=r),o&=~r}if(a=ie,n=K,n=co(e,e===a?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===a&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Vu(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ut(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(l!==null&&Vu(l),Ju(n)){case 2:case 8:n=Es;break;case 32:n=uo;break;case 268435456:n=Ts;break;default:n=uo}return l=Zm.bind(null,e),n=Gu(n,l),e.callbackPriority=a,e.callbackNode=n,a}return l!==null&&l!==null&&Vu(l),e.callbackPriority=2,e.callbackNode=null,2}function Zm(e,a){if(be!==0&&be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(qu()&&e.callbackNode!==n)return null;var l=K;return l=co(e,e===ie?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Om(e,l,a),Xm(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?Zm.bind(null,e):null)}function Jm(e,a){if(qu())return null;Om(e,a,!0)}function kv(){rb(function(){(I&6)!==0?Gu(Ss,wv):Vm()})}function Gi(){if(An===0){var e=kn;e===0&&(e=ro,ro<<=1,(ro&261888)===0&&(ro=256)),An=e}return An}function Km(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bo(e)}function Fv(e,a,n,l,t){if(a==="submit"&&n&&n.stateNode===t){var o=Km((t[Xe]||null).action),u=l.submitter;u&&(a=(a=u[Xe]||null)?Km(a.formAction):u.getAttribute("formAction"),a!==null&&(o=a,u=null));var r=new yo("action","action",null,l,t);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(An!==0){var i=new FormData(t,u);Fr(n,{pending:!0,data:i,method:t.method,action:o},null,i)}}else typeof o=="function"&&(r.preventDefault(),i=new FormData(t,u),Fr(n,{pending:!0,data:i,method:t.method,action:o},o,i))},currentTarget:t}]})}}for(var Vi=0;Vi<fr.length;Vi++){var Xi=fr[Vi],Wv=Xi.toLowerCase(),$v=Xi[0].toUpperCase()+Xi.slice(1);ya(Wv,"on"+$v)}ya(hc,"onAnimationEnd"),ya(qc,"onAnimationIteration"),ya(yc,"onAnimationStart"),ya("dblclick","onDoubleClick"),ya("focusin","onFocus"),ya("focusout","onBlur"),ya(uv,"onTransitionRun"),ya(rv,"onTransitionStart"),ya(iv,"onTransitionCancel"),ya(zc,"onTransitionEnd"),vl("onMouseEnter",["mouseout","mouseover"]),vl("onMouseLeave",["mouseout","mouseover"]),vl("onPointerEnter",["pointerout","pointerover"]),vl("onPointerLeave",["pointerout","pointerover"]),Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vt));function wm(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],t=l.event;l=l.listeners;e:{var o=void 0;if(a)for(var u=l.length-1;0<=u;u--){var r=l[u],i=r.instance,m=r.currentTarget;if(r=r.listener,i!==o&&t.isPropagationStopped())break e;o=r,t.currentTarget=m;try{o(t)}catch(b){Eo(b)}t.currentTarget=null,o=i}else for(u=0;u<l.length;u++){if(r=l[u],i=r.instance,m=r.currentTarget,r=r.listener,i!==o&&t.isPropagationStopped())break e;o=r,t.currentTarget=m;try{o(t)}catch(b){Eo(b)}t.currentTarget=null,o=i}}}}function J(e,a){var n=a[_s];n===void 0&&(n=a[_s]=new Set);var l=e+"__bubble";n.has(l)||(km(a,e,2,!1),n.add(l))}function Zi(e,a,n){var l=0;a&&(l|=4),km(n,e,l,a)}var zu="_reactListening"+Math.random().toString(36).slice(2);function Ji(e){if(!e[zu]){e[zu]=!0,Us.forEach(function(n){n!=="selectionchange"&&(Pv.has(n)||Zi(n,!1,e),Zi(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[zu]||(a[zu]=!0,Zi("selectionchange",!1,a))}}function km(e,a,n,l){switch(Rf(a)){case 2:var t=Zb;break;case 8:t=Jb;break;default:t=ds}n=t.bind(null,a,n,e),t=void 0,!Iu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(t=!0),l?t!==void 0?e.addEventListener(a,n,{capture:!0,passive:t}):e.addEventListener(a,n,!0):t!==void 0?e.addEventListener(a,n,{passive:t}):e.addEventListener(a,n,!1)}function Ki(e,a,n,l,t){var o=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var r=l.stateNode.containerInfo;if(r===t)break;if(u===4)for(u=l.return;u!==null;){var i=u.tag;if((i===3||i===4)&&u.stateNode.containerInfo===t)return;u=u.return}for(;r!==null;){if(u=Rn(r),u===null)return;if(i=u.tag,i===5||i===6||i===26||i===27){l=o=u;continue e}r=r.parentNode}}l=l.return}ks(function(){var m=o,b=$u(n),h=[];e:{var c=Sc.get(e);if(c!==void 0){var v=yo,y=e;switch(e){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":v=Hp;break;case"focusin":y="focus",v=lr;break;case"focusout":y="blur",v=lr;break;case"beforeblur":case"afterblur":v=lr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Gp;break;case hc:case qc:case yc:v=Dp;break;case zc:v=Xp;break;case"scroll":case"scrollend":v=Sp;break;case"wheel":v=Jp;break;case"copy":case"cut":case"paste":v=Op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Is;break;case"submit":v=Bp;break;case"toggle":case"beforetoggle":v=wp}var A=(a&4)!==0,B=!A&&(e==="scroll"||e==="scrollend"),d=A?c!==null?c+"Capture":null:c;A=[];for(var s=m,f;s!==null;){var g=s;if(f=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||f===null||d===null||(g=ct(s,d),g!=null&&A.push(Xt(s,g,f))),B)break;s=s.return}0<A.length&&(c=new v(c,y,null,n,b),h.push({event:c,listeners:A}))}}if((a&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",c=e==="mouseout"||e==="pointerout",v&&n!==Wu&&(y=n.relatedTarget||n.fromElement)&&(Rn(y)||y[ml]))break e;(c||v)&&(y=b.window===b?b:(v=b.ownerDocument)?v.defaultView||v.parentWindow:window,c?(v=n.relatedTarget||n.toElement,c=m,v=v?Rn(v):null,v!==null&&(B=z(v),A=v.tag,v!==B||A!==5&&A!==27&&A!==6)&&(v=null)):(c=null,v=m),c!==v&&(A=$s,g="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(A=Is,g="onPointerLeave",d="onPointerEnter",s="pointer"),B=c==null?y:st(c),f=v==null?y:st(v),y=new A(g,s+"leave",c,n,b),y.target=B,y.relatedTarget=f,g=null,Rn(b)===m&&(A=new A(d,s+"enter",v,n,b),A.target=f,A.relatedTarget=B,g=A),B=g,A=c&&v?xa(c,v,Iv):null,c!==null&&Fm(h,y,c,A,!1),v!==null&&B!==null&&Fm(h,B,v,A,!0)))}e:{if(c=m?st(m):window,v=c.nodeName&&c.nodeName.toLowerCase(),v==="select"||v==="input"&&c.type==="file")var D=rc;else if(oc(c))if(ic)D=lv;else{D=av;var w=ev}else v=c.nodeName,!v||v.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?m&&Fu(m.elementType)&&(D=rc):D=nv;if(D&&(D=D(e,m))){uc(h,D,n,b);break e}w&&w(e,c,m)}switch(w=m?st(m):window,e){case"focusin":(oc(w)||w.contentEditable==="true")&&(zl=w,cr=m,ht=null);break;case"focusout":ht=cr=zl=null;break;case"mousedown":dr=!0;break;case"contextmenu":case"mouseup":case"dragend":dr=!1,bc(h,n,b);break;case"selectionchange":if(ov)break;case"keydown":case"keyup":bc(h,n,b)}var O;if(or)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else yl?lc(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ec&&n.locale!=="ko"&&(yl||_!=="onCompositionStart"?_==="onCompositionEnd"&&yl&&(O=Fs()):(sn=b,er="value"in sn?sn.value:sn.textContent,yl=!0)),w=Su(m,_),0<w.length&&(_=new Ps(_,e,null,n,b),h.push({event:_,listeners:w}),O?_.data=O:(O=tc(n),O!==null&&(_.data=O)))),(O=Fp?Wp(e,n):$p(e,n))&&(_=Su(m,"onBeforeInput"),0<_.length&&(w=new Ps("onBeforeInput","beforeinput",null,n,b),h.push({event:w,listeners:_}),w.data=O)),Fv(h,e,m,n,b)}wm(h,a)})}function Xt(e,a,n){return{instance:e,listener:a,currentTarget:n}}function Su(e,a){for(var n=a+"Capture",l=[];e!==null;){var t=e,o=t.stateNode;if(t=t.tag,t!==5&&t!==26&&t!==27||o===null||(t=ct(e,n),t!=null&&l.unshift(Xt(e,t,o)),t=ct(e,a),t!=null&&l.push(Xt(e,t,o))),e.tag===3)return l;e=e.return}return[]}function Iv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fm(e,a,n,l,t){for(var o=a._reactName,u=[];n!==null&&n!==l;){var r=n,i=r.alternate,m=r.stateNode;if(r=r.tag,i!==null&&i===l)break;r!==5&&r!==26&&r!==27||m===null||(i=m,t?(m=ct(n,o),m!=null&&u.unshift(Xt(n,m,i))):t||(m=ct(n,o),m!=null&&u.push(Xt(n,m,i)))),n=n.return}u.length!==0&&e.push({event:a,listeners:u})}var eb=/\r\n?/g,ab=/\u0000|\uFFFD/g;function Wm(e){return(typeof e=="string"?e:""+e).replace(eb,`
`).replace(ab,"")}function $m(e,a){return a=Wm(a),Wm(e)===a}function le(e,a,n,l,t,o){switch(n){case"children":if(typeof l=="string")a==="body"||a==="textarea"&&l===""||gl(e,l);else if(typeof l=="number"||typeof l=="bigint")a!=="body"&&gl(e,""+l);else return;break;case"className":vo(e,"class",l);break;case"tabIndex":vo(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":vo(e,n,l);break;case"style":Ks(e,l,o);return;case"data":if(a!=="object"){vo(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=bo(l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(a!=="input"&&le(e,a,"name",t.name,t,null),le(e,a,"formEncType",t.formEncType,t,null),le(e,a,"formMethod",t.formMethod,t,null),le(e,a,"formTarget",t.formTarget,t,null)):(le(e,a,"encType",t.encType,t,null),le(e,a,"method",t.method,t,null),le(e,a,"target",t.target,t,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=bo(l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=ja);return;case"onScroll":l!=null&&J("scroll",e);return;case"onScrollEnd":l!=null&&J("scrollend",e);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(p(61));if(n=l.__html,n!=null){if(t.children!=null)throw Error(p(60));(o!=null?o.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=bo(l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":J("beforetoggle",e),J("toggle",e),po(e,"popover",l);break;case"xlinkActuate":Xa(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xa(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xa(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xa(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xa(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xa(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xa(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":po(e,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=yp.get(n)||n,po(e,n,l);else return}W=!0}function wi(e,a,n,l,t,o){switch(n){case"style":Ks(e,l,o);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(p(61));if(n=l.__html,n!=null){if(t.children!=null)throw Error(p(60));(o!=null?o.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof l=="string")gl(e,l);else if(typeof l=="number"||typeof l=="bigint")gl(e,""+l);else return;break;case"onScroll":l!=null&&J("scroll",e);return;case"onScrollEnd":l!=null&&J("scrollend",e);return;case"onClick":l!=null&&(e.onclick=ja);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Hs.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(t=n.endsWith("Capture"),o=n.slice(2,t?n.length-7:void 0),a=e[Xe]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(o,a,t),typeof l=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,l,t);break e}W=!0,n in e?e[n]=l:l===!0?e.setAttribute(n,""):po(e,n,l)}return}W=!0}function He(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":J("error",e),J("load",e);var l=!1,t=!1,o;for(o in n)if(n.hasOwnProperty(o)){var u=n[o];if(u!=null)switch(o){case"src":l=!0;break;case"srcSet":t=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,a));default:le(e,a,o,u,n,null)}}t&&le(e,a,"srcSet",n.srcSet,n,null),l&&le(e,a,"src",n.src,n,null);return;case"input":J("invalid",e);var r=o=u=t=null,i=null,m=null;for(l in n)if(n.hasOwnProperty(l)){var b=n[l];if(b!=null)switch(l){case"name":t=b;break;case"type":u=b;break;case"checked":i=b;break;case"defaultChecked":m=b;break;case"value":o=b;break;case"defaultValue":r=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(p(137,a));break;default:le(e,a,l,b,n,null)}}Vs(e,o,r,i,m,u,t,!1);return;case"select":J("invalid",e),l=u=o=null;for(t in n)if(n.hasOwnProperty(t)&&(r=n[t],r!=null))switch(t){case"value":o=r;break;case"defaultValue":u=r;break;case"multiple":l=r;default:le(e,a,t,r,n,null)}a=o,n=u,e.multiple=!!l,a!=null?bl(e,!!l,a,!1):n!=null&&bl(e,!!l,n,!0);return;case"textarea":J("invalid",e),o=t=l=null;for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case"value":l=r;break;case"defaultValue":t=r;break;case"children":o=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(p(91));break;default:le(e,a,u,r,n,null)}Zs(e,l,t,o);return;case"option":for(i in n)if(n.hasOwnProperty(i)&&(l=n[i],l!=null))switch(i){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:le(e,a,i,l,n,null)}return;case"dialog":J("beforetoggle",e),J("toggle",e),J("cancel",e),J("close",e);break;case"iframe":case"object":J("load",e);break;case"video":case"audio":for(l=0;l<Vt.length;l++)J(Vt[l],e);break;case"image":J("error",e),J("load",e);break;case"details":J("toggle",e);break;case"embed":case"source":case"link":J("error",e),J("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in n)if(n.hasOwnProperty(m)&&(l=n[m],l!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,a));default:le(e,a,m,l,n,null)}return;default:if(Fu(a)){for(b in n)n.hasOwnProperty(b)&&(l=n[b],l!==void 0&&wi(e,a,b,l,n,void 0));return}}for(r in n)n.hasOwnProperty(r)&&(l=n[r],l!=null&&le(e,a,r,l,n,null))}var nb={};function lb(e,a,n,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var t=null,o=null,u=null,r=null,i=null,m=null,b=null;for(v in n){var h=n[v];if(n.hasOwnProperty(v)&&h!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":i=h;default:l.hasOwnProperty(v)||le(e,a,v,null,l,h)}}for(var c in l){var v=l[c];if(h=n[c],l.hasOwnProperty(c)&&(v!=null||h!=null))switch(c){case"type":v!==h&&(W=!0),o=v;break;case"name":v!==h&&(W=!0),t=v;break;case"checked":v!==h&&(W=!0),m=v;break;case"defaultChecked":v!==h&&(W=!0),b=v;break;case"value":v!==h&&(W=!0),u=v;break;case"defaultValue":v!==h&&(W=!0),r=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(p(137,a));break;default:v!==h&&le(e,a,c,v,l,h)}}wu(e,u,r,i,m,b,o,t);return;case"select":v=u=r=c=null;for(o in n)if(i=n[o],n.hasOwnProperty(o)&&i!=null)switch(o){case"value":break;case"multiple":v=i;default:l.hasOwnProperty(o)||le(e,a,o,null,l,i)}for(t in l)if(o=l[t],i=n[t],l.hasOwnProperty(t)&&(o!=null||i!=null))switch(t){case"value":o!==i&&(W=!0),c=o;break;case"defaultValue":o!==i&&(W=!0),r=o;break;case"multiple":o!==i&&(W=!0),u=o;default:o!==i&&le(e,a,t,o,l,i)}a=r,n=u,l=v,c!=null?bl(e,!!n,c,!1):!!l!=!!n&&(a!=null?bl(e,!!n,a,!0):bl(e,!!n,n?[]:"",!1));return;case"textarea":v=c=null;for(r in n)if(t=n[r],n.hasOwnProperty(r)&&t!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:le(e,a,r,null,l,t)}for(u in l)if(t=l[u],o=n[u],l.hasOwnProperty(u)&&(t!=null||o!=null))switch(u){case"value":t!==o&&(W=!0),c=t;break;case"defaultValue":t!==o&&(W=!0),v=t;break;case"children":break;case"dangerouslySetInnerHTML":if(t!=null)throw Error(p(91));break;default:t!==o&&le(e,a,u,t,l,o)}Xs(e,c,v);return;case"option":for(var y in n)if(c=n[y],n.hasOwnProperty(y)&&c!=null&&!l.hasOwnProperty(y))switch(y){case"selected":e.selected=!1;break;default:le(e,a,y,null,l,c)}for(i in l)if(c=l[i],v=n[i],l.hasOwnProperty(i)&&c!==v&&(c!=null||v!=null))switch(i){case"selected":c!==v&&(W=!0),e.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:le(e,a,i,c,l,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var A in n)c=n[A],n.hasOwnProperty(A)&&c!=null&&!l.hasOwnProperty(A)&&le(e,a,A,null,l,c);for(m in l)if(c=l[m],v=n[m],l.hasOwnProperty(m)&&c!==v&&(c!=null||v!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(p(137,a));break;default:le(e,a,m,c,l,v)}return;default:if(Fu(a)){for(var B in n)c=n[B],n.hasOwnProperty(B)&&c!==void 0&&!l.hasOwnProperty(B)&&wi(e,a,B,void 0,l,c);for(b in l)c=l[b],v=n[b],!l.hasOwnProperty(b)||c===v||c===void 0&&v===void 0||wi(e,a,b,c,l,v);return}}for(var d in n)c=n[d],n.hasOwnProperty(d)&&c!=null&&!l.hasOwnProperty(d)&&le(e,a,d,null,l,c);for(h in l)c=l[h],v=n[h],!l.hasOwnProperty(h)||c===v||c==null&&v==null||le(e,a,h,c,l,v)}function Pm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var t=n[l],o=t.transferSize,u=t.initiatorType,r=t.duration;if(o&&r&&Pm(u)){for(u=0,r=t.responseEnd,l+=1;l<n.length;l++){var i=n[l],m=i.startTime;if(m>r)break;var b=i.transferSize,h=i.initiatorType;b&&Pm(h)&&(i=i.responseEnd,u+=b*(i<r?1:(r-m)/(i-m)))}if(--l,a+=8*(o+u)/(t.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ki=null,Fi=null;function Zt(e){return e.nodeType===9?e:e.ownerDocument}function Im(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ef(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function af(e,a,n,l){return n=Zt(n).createElement(e),n[Me]=l,n[Xe]=a,He(n,e,a),xe(n),n}function Wi(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var $i=null;function ob(){var e=window.event;return e&&e.type==="popstate"?e===$i?!1:($i=e,!0):($i=null,!1)}var Pi=typeof setTimeout=="function"?setTimeout:void 0,ub=typeof clearTimeout=="function"?clearTimeout:void 0,nf=typeof Promise=="function"?Promise:void 0,lf=typeof requestAnimationFrame=="function"?requestAnimationFrame:Pi,rb=typeof queueMicrotask=="function"?queueMicrotask:typeof nf<"u"?function(e){return nf.resolve(null).then(e).catch(ib)}:Pi;function ib(e){setTimeout(function(){throw e})}function On(e){return e==="head"}function tf(e,a){var n=a,l=0;do{var t=n.nextSibling;if(e.removeChild(n),t&&t.nodeType===8)if(n=t.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(t),et(a);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")us(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,us(n);for(var o=n.firstChild;o;){var u=o.nextSibling,r=o.nodeName;o[it]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=u}}else n==="body"&&us(e.ownerDocument.body);n=t}while(n);et(a)}function of(e,a){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?a?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(a?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function uf(e,a,n){if(a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,e.style.viewTransitionName=a,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(a=e.getClientRects(),a.length===1)var l=1;else for(var t=l=0;t<a.length;t++){var o=a[t];0<o.width&&0<o.height&&l++}l===1&&(e=e.style,e.display=a.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function rf(e,a){e=e.style,a=a.style;var n=a!=null?a.hasOwnProperty("viewTransitionName")?a.viewTransitionName:a.hasOwnProperty("view-transition-name")?a["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=a!=null?a.hasOwnProperty("viewTransitionClass")?a.viewTransitionClass:a.hasOwnProperty("view-transition-class")?a["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(a==null?e.display=e.margin="":(n=a.display,e.display=n==null||typeof n=="boolean"?"":n,n=a.margin,n!=null?e.margin=n:(n=a.hasOwnProperty("marginTop")?a.marginTop:a["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,a=a.hasOwnProperty("marginBottom")?a.marginBottom:a["margin-bottom"],e.marginBottom=a==null||typeof a=="boolean"?"":a)))}function sb(e,a,n){return n=n.ownerDocument.defaultView,{rect:e,abs:a.position==="absolute"||a.position==="fixed",clip:a.clipPath!=="none"||a.overflow!=="visible"||a.filter!=="none"||a.mask!=="none"||a.mask!=="none"||a.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Ii(e){var a=e.getBoundingClientRect(),n=getComputedStyle(e);return sb(a,n,e)}function cb(e){return e.documentElement.clientHeight}function db(e){this.addEventListener("load",e),this.addEventListener("error",e)}function mb(e,a,n,l,t,o,u,r,i){var m=a.nodeType===9?a:a.ownerDocument;try{var b=m.startViewTransition({update:function(){var c=m.defaultView,v=c.navigation&&c.navigation.transition,y=m.fonts.status;l();var A=[];if(y==="loaded"&&(cb(m),m.fonts.status==="loading"&&A.push(m.fonts.ready)),y=A.length,e!==null)for(var B=e.suspenseyImages,d=0,s=0;s<B.length;s++){var f=B[s];if(!f.complete){var g=f.getBoundingClientRect();if(0<g.bottom&&0<g.right&&g.top<c.innerHeight&&g.left<c.innerWidth){if(d+=Of(f),d>Nu){A.length=y;break}f=new Promise(db.bind(f)),A.push(f)}}}if(0<A.length)return c=Promise.race([Promise.all(A),new Promise(function(D){return setTimeout(D,500)})]).then(t,t),(v?Promise.allSettled([v.finished,c]):c).then(o,o);if(t(),v)return v.finished.then(o,o);o()},types:n});m.__reactViewTransition=b;var h=[];return b.ready.then(function(){for(var c=m.documentElement.getAnimations({subtree:!0}),v=0;v<c.length;v++){var y=c[v],A=y.effect,B=A.pseudoElement;if(B!=null&&B.startsWith("::view-transition")){h.push(y),y=A.getKeyframes();for(var d=B=void 0,s=!0,f=0;f<y.length;f++){var g=y[f],D=g.width;if(B===void 0)B=D;else if(B!==D){s=!1;break}if(D=g.height,d===void 0)d=D;else if(d!==D){s=!1;break}delete g.width,delete g.height,g.transform==="none"&&delete g.transform}s&&B!==void 0&&d!==void 0&&(A.setKeyframes(y),s=getComputedStyle(A.target,A.pseudoElement),s.width!==B||s.height!==d)&&(s=y[0],s.width=B,s.height=d,s=y[y.length-1],s.width=B,s.height=d,A.setKeyframes(y))}}u()},function(c){m.__reactViewTransition===b&&(m.__reactViewTransition=null);try{if(typeof c=="object"&&c!==null)switch(c.name){case"InvalidStateError":(c.message==="View transition was skipped because document visibility state is hidden."||c.message==="Skipping view transition because document visibility state has become hidden."||c.message==="Skipping view transition because viewport size changed."||c.message==="Transition was aborted because of invalid state")&&(c=null)}c!==null&&i(c)}finally{l(),t(),u()}}),b.finished.finally(function(){for(var c=0;c<h.length;c++)h[c].cancel();m.__reactViewTransition===b&&(m.__reactViewTransition=null),r()}),b}catch{return l(),t(),u(),null}}function ol(e,a){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+a+")"}ol.prototype.animate=function(e,a){return a=typeof a=="number"?{duration:a}:F({},a),a.pseudoElement=this._selector,this._scope.animate(e,a)},ol.prototype.getAnimations=function(){for(var e=this._scope,a=this._selector,n=e.getAnimations({subtree:!0}),l=[],t=0;t<n.length;t++){var o=n[t].effect;o!==null&&o.target===e&&o.pseudoElement===a&&l.push(n[t])}return l},ol.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function sf(e){return{name:e,group:new ol("group",e),imagePair:new ol("image-pair",e),old:new ol("old",e),new:new ol("new",e)}}function oa(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}oa.prototype.addEventListener=function(e,a,n){var l=null,t=null;if(!(n!=null&&typeof n!="boolean"&&(l=n.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var o=this._eventListeners;if(df(o,e,a,n)===-1){var u=this,r=a;n!=null&&typeof n!="boolean"&&n.once===!0&&(r=function(i){u.removeEventListener(e,a,n),typeof a=="function"?a.call(this,i):a.handleEvent(i)}),l!==null&&(t=u.removeEventListener.bind(u,e,a,n),l.addEventListener("abort",t,{once:!0}),t=l.removeEventListener.bind(l,"abort",t)),l=kl(n),o.push({type:e,listener:a,optionsOrUseCapture:n,attachedListener:r,cleanup:t}),G(this._fragmentFiber.child,!1,fb,e,r,l)}this._eventListeners=o}};function fb(e,a,n,l){return X(e).addEventListener(a,n,l),!1}oa.prototype.removeEventListener=function(e,a,n){var l=this._eventListeners;if(l!==null&&(a=df(l,e,a,n),a!==-1)){var t=l[a];n=t.attachedListener;var o=t.cleanup;t=kl(t.optionsOrUseCapture),G(this._fragmentFiber.child,!1,pb,e,n,t),l.splice(a,1),o!==null&&o()}};function pb(e,a,n,l){return X(e).removeEventListener(a,n,l),!1}function kl(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function cf(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function df(e,a,n,l){if(e.length===0)return-1;l=cf(l);for(var t=0;t<e.length;t++){var o=e[t];if(o.type===a&&o.listener===n&&cf(o.optionsOrUseCapture)===l)return t}return-1}oa.prototype.dispatchEvent=function(e){var a=M(this._fragmentFiber);if(a===null)return!0;a=X(a);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var l=a.nodeType===9?a.createComment(""):document.createTextNode("");if(n)for(var t=0;t<n.length;t++){var o=n[t];l.addEventListener(o.type,o.attachedListener,kl(o.optionsOrUseCapture))}if(a.appendChild(l),e=l.dispatchEvent(e),n)for(t=0;t<n.length;t++)o=n[t],l.removeEventListener(o.type,o.attachedListener,kl(o.optionsOrUseCapture));return a.removeChild(l),e}return a.dispatchEvent(e)},oa.prototype.focus=function(e){G(this._fragmentFiber.child,!0,mf,e,void 0,void 0)};function mf(e,a){return e.tag===6?!1:(e=X(e),xb(e,a))}oa.prototype.focusLast=function(e){var a=[];G(this._fragmentFiber.child,!0,es,a,void 0,void 0);for(var n=a.length-1;0<=n&&!mf(a[n],e);n--);};function es(e,a){return a.push(e),!1}oa.prototype.blur=function(){var e=M(this._fragmentFiber);e!==null&&(e=X(e),e=Zt(e).activeElement,e!==null&&G(this._fragmentFiber.child,!1,vb,e,void 0,void 0))};function vb(e,a){return e.tag===6?!1:(e=X(e),e===a||e.contains(a)?(a.blur(),!0):!1)}oa.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),G(this._fragmentFiber.child,!1,bb,e,void 0,void 0)};function bb(e,a){return e.tag===6||(e=X(e),a.observe(e)),!1}oa.prototype.unobserveUsing=function(e){var a=this._observers;if(a!==null&&a.has(e)){a.delete(e),G(this._fragmentFiber.child,!1,gb,e,void 0,void 0);for(var n=a=0;n<Na.length;n++){var l=Na[n];l.fragmentInstance===this&&l.observer===e?e.unobserve(l.instance):Na[a++]=l}Na.length=a}};function gb(e,a){return e.tag===6||(e=X(e),a.unobserve(e)),!1}var Na=[],as=!1;function hb(e,a,n){Na.push({fragmentInstance:e,observer:a,instance:n}),as||(as=!0,Db(function(){as=!1;var l=Na;Na=[];for(var t=0;t<l.length;t++){var o=l[t];o.observer.unobserve(o.instance)}}))}oa.prototype.getClientRects=function(){var e=[];return G(this._fragmentFiber.child,!1,qb,e,void 0,void 0),e};function qb(e,a){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),a.push.apply(a,n.getClientRects())}else e=X(e),a.push.apply(a,e.getClientRects());return!1}oa.prototype.getRootNode=function(e){var a=M(this._fragmentFiber);return a===null?this:X(a).getRootNode(e)},oa.prototype.compareDocumentPosition=function(e){var a=M(this._fragmentFiber);if(a===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];G(this._fragmentFiber.child,!1,es,n,void 0,void 0);var l=X(a);if(n.length===0){if(n=l,ba(this._fragmentFiber)){e:{for(a=this._fragmentFiber.return;a!==null;){if(a.tag===4){a=a.stateNode.containerInfo;break e}if(a.tag===3||a.tag===5||a.tag===27)break;a=a.return}a=null}a!=null&&(n=a)}a=this._fragmentFiber;var t=l=n.compareDocumentPosition(e);return n===e?t=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=oe(a)[1],n===null?t=Node.DOCUMENT_POSITION_PRECEDING:(e=X(n).compareDocumentPosition(e),t=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),t|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}a=X(n[0]),t=X(n[n.length-1]);var o=ba(this._fragmentFiber)?a.parentElement:l;if(o==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=o.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY,o=o.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY;var u=a.compareDocumentPosition(e),r=t.compareDocumentPosition(e),i=u&Node.DOCUMENT_POSITION_CONTAINED_BY||r&Node.DOCUMENT_POSITION_CONTAINED_BY;return r=l&&o&&u&Node.DOCUMENT_POSITION_FOLLOWING&&r&Node.DOCUMENT_POSITION_PRECEDING,a=l&&a===e||o&&t===e||i||r?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&a===e||!o&&t===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:u,a&Node.DOCUMENT_POSITION_DISCONNECTED||a&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||yb(a,this._fragmentFiber,n[0],n[n.length-1],e)?a:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function yb(e,a,n,l,t){var o=Rn(t);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!o)e:{for(;o!==null;){if(o.tag===7&&(o===a||o.alternate===a)){n=!0;break e}o=o.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(o===null)return o=t.ownerDocument,t===o||t===o.documentElement||t===o.body;e:{for(o=a,a=M(a);o!==null;){if(!(o.tag!==5&&o.tag!==3&&o.tag!==27||o!==a&&o.alternate!==a)){o=!0;break e}o=o.return}o=!1}return o}return e&Node.DOCUMENT_POSITION_PRECEDING?((a=!!o)&&!(a=o===n)&&(a=xa(n,o,ha),a===null?a=!1:(G(a,!0,fe,o,n),o=ua,ua=null,a=o!==null)),a):e&Node.DOCUMENT_POSITION_FOLLOWING?((a=!!o)&&!(a=o===l)&&(a=xa(l,o,ha),a===null?a=!1:(G(a,!0,se,o,l),o=ua,S=ua=null,a=o!==null)),a):!1}function ff(e,a){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,a?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}oa.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(p(566));var a=[];G(this._fragmentFiber.child,!1,es,a,void 0,void 0);var n=e!==!1;if(a.length===0){var l=oe(this._fragmentFiber);if(l=n?l[1]||l[0]||M(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){e=X(l),ff(e,n);return}if(l=X(l),l.nodeType!==9){if(l.nodeType===11){n="host"in l?l.host:null,n!==null&&n.scrollIntoView(e);return}l.scrollIntoView(e)}}for(l=n?a.length-1:0;l!==(n?-1:a.length);){var t=a[l];t.tag===6?(t=X(t),ff(t,n)):X(t).scrollIntoView(e),l+=n?-1:1}};function zb(e,a){return e=X(e),pf(e,a),!1}function pf(e,a){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(a)}function vf(e,a){var n=a._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var t=n[l];e.addEventListener(t.type,t.attachedListener,kl(t.optionsOrUseCapture))}e.nodeType!==3&&(n=a._observers,n!==null&&n.forEach(function(o){for(var u=0,r=0;r<Na.length;r++){var i=Na[r];(i.fragmentInstance!==a||i.observer!==o||i.instance!==e)&&(Na[u++]=i)}Na.length=u,o.observe(e)}),pf(e,a))}function Sb(e,a){var n=a._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var t=n[l];e.removeEventListener(t.type,t.attachedListener,kl(t.optionsOrUseCapture))}e.nodeType!==3&&(n=a._observers,n!==null&&n.forEach(function(o){typeof o.rootMargin=="string"?hb(a,o,e):o.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(a))}function ns(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ns(n),fo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Eb(e,a,n,l){for(;e.nodeType===1;){var t=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[it])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==t.rel||e.getAttribute("href")!==(t.href==null||t.href===""?null:t.href)||e.getAttribute("crossorigin")!==(t.crossOrigin==null?null:t.crossOrigin)||e.getAttribute("title")!==(t.title==null?null:t.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(t.src==null?null:t.src)||e.getAttribute("type")!==(t.type==null?null:t.type)||e.getAttribute("crossorigin")!==(t.crossOrigin==null?null:t.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var o=t.name==null?null:""+t.name;if(t.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=pa(e.nextSibling),e===null)break}return null}function Tb(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pa(e.nextSibling),e===null))return null;return e}function bf(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pa(e.nextSibling),e===null))return null;return e}function ls(e){return e.data==="$?"||e.data==="$~"}function ts(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Nb(e,a){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||n.readyState!=="loading")a();else{var l=function(){a(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function pa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var os=null;function gf(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(a===0)return pa(e.nextSibling);a--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||a++}e=e.nextSibling}return null}function hf(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(a===0)return e;a--}else n!=="/$"&&n!=="/&"||a++}e=e.previousSibling}return null}function xb(e,a){function n(){l=!0}if(e.ownerDocument.activeElement===e)return!0;var l=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,a)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return l}function Db(e){lf(function(){lf(function(a){return e(a)})})}function qf(e,a,n){switch(a=Zt(n),e){case"html":if(e=a.documentElement,!e)throw Error(p(452));return e;case"head":if(e=a.head,!e)throw Error(p(453));return e;case"body":if(e=a.body,!e)throw Error(p(454));return e;default:throw Error(p(451))}}function yf(e,a,n){for(var l in n){var t=n[l];n.hasOwnProperty(l)&&t!=null&&le(e,a,l,null,nb,t)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ja&&(e.onclick=null),fo(e)}function us(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);fo(e)}var va=new Map,zf=new Set;function Jt(e){if(typeof e.getRootNode=="function"){var a=e.getRootNode();if(a.nodeType===9||a.nodeType===11)return a}return e.nodeType===9?e:e.ownerDocument}var nn=P.d;P.d={f:Ab,r:Ob,D:jb,C:Mb,L:_b,m:Cb,X:Ub,S:Yb,M:Hb};function Ab(){var e=nn.f(),a=bu();return e||a}function Ob(e){var a=fl(e);a!==null&&a.tag===5&&a.type==="form"?Sd(a):nn.r(e)}var Fl=typeof document>"u"?null:document;function Sf(e,a,n){var l=Fl;if(l&&typeof a=="string"&&a){var t=ra(a);t='link[rel="'+e+'"][href="'+t+'"]',typeof n=="string"&&(t+='[crossorigin="'+n+'"]'),zf.has(t)||(zf.add(t),e={rel:e,crossOrigin:n,href:a},l.querySelector(t)===null&&(a=l.createElement("link"),He(a,"link",e),xe(a),l.head.appendChild(a)))}}function jb(e){nn.D(e),Sf("dns-prefetch",e,null)}function Mb(e,a){nn.C(e,a),Sf("preconnect",e,a)}function _b(e,a,n){nn.L(e,a,n);var l=Fl;if(l&&e&&a){var t='link[rel="preload"][as="'+ra(a)+'"]';a==="image"&&n&&n.imageSrcSet?(t+='[imagesrcset="'+ra(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(t+='[imagesizes="'+ra(n.imageSizes)+'"]')):t+='[href="'+ra(e)+'"]';var o=t;switch(a){case"style":o=Wl(e);break;case"script":o=$l(e)}if(!(va.has(o)||(e=F({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),va.set(o,e),l.querySelector(t)!==null||a==="style"&&l.querySelector(Kt(o))||a==="script"&&l.querySelector(wt(o))))){var u=l.createElement("link");He(u,"link",e),a==="style"&&(u[mo]=!0,u.onload=u.onerror=function(){Ys(u)}),xe(u),l.head.appendChild(u)}}}function Cb(e,a){nn.m(e,a);var n=Fl;if(n&&e){var l=a&&typeof a.as=="string"?a.as:"script",t='link[rel="modulepreload"][as="'+ra(l)+'"][href="'+ra(e)+'"]',o=t;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=$l(e)}if(!va.has(o)&&(e=F({rel:"modulepreload",href:e},a),va.set(o,e),n.querySelector(t)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wt(o)))return}l=n.createElement("link"),He(l,"link",e),xe(l),n.head.appendChild(l)}}}function Yb(e,a,n){nn.S(e,a,n);var l=Fl;if(l&&e){var t=pl(l).hoistableStyles,o=Wl(e);a=a||"default";var u=t.get(o);if(!u){var r={loading:0,preload:null};if(u=l.querySelector(Kt(o)))r.loading=5;else{e=F({rel:"stylesheet",href:e,"data-precedence":a},n),(n=va.get(o))&&rs(e,n);var i=u=l.createElement("link");xe(i),He(i,"link",e),i._p=new Promise(function(m,b){i.onload=m,i.onerror=b}),i.addEventListener("load",function(){r.loading|=1}),i.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Eu(u,a,l)}u={type:"stylesheet",instance:u,count:1,state:r},t.set(o,u)}}}function Ub(e,a){nn.X(e,a);var n=Fl;if(n&&e){var l=pl(n).hoistableScripts,t=$l(e),o=l.get(t);o||(o=n.querySelector(wt(t)),o||(e=F({src:e,async:!0},a),(a=va.get(t))&&is(e,a),o=n.createElement("script"),xe(o),He(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(t,o))}}function Hb(e,a){nn.M(e,a);var n=Fl;if(n&&e){var l=pl(n).hoistableScripts,t=$l(e),o=l.get(t);o||(o=n.querySelector(wt(t)),o||(e=F({src:e,async:!0,type:"module"},a),(a=va.get(t))&&is(e,a),o=n.createElement("script"),xe(o),He(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(t,o))}}function Ef(e,a,n,l){var t=(t=on.current)?Jt(t):null;if(!t)throw Error(p(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Wl(n.href),a=pl(t).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Wl(n.href);var o=pl(t).hoistableStyles,u=o.get(e);if(u||(t=t.ownerDocument||t,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,u),(o=t.querySelector(Kt(e)))?o._p||(u.instance=o,u.state.loading=5):(o=va.get(e),o||(o={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},va.set(e,o)),Qb(t,e,o,u.state))),a&&l===null)throw Error(p(528,""));return u}if(a&&l!==null)throw Error(p(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(n=$l(n),a=pl(t).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,e))}}function Wl(e){return'href="'+ra(e)+'"'}function Kt(e){return'link[rel="stylesheet"]['+e+"]"}function Tf(e){return F({},e,{"data-precedence":e.precedence,precedence:null})}function Qb(e,a,n,l){if(a=e.querySelector('link[rel="preload"][as="style"]['+a+"]")){if(a[mo]!==!0){l.loading=1;return}}else a=e.createElement("link"),a[mo]=!0,a.onload=a.onerror=Ys.bind(null,a),He(a,"link",n),xe(a),e.head.appendChild(a);l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2})}function $l(e){return'[src="'+ra(e)+'"]'}function wt(e){return"script[async]"+e}function Nf(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+ra(n.href)+'"]');if(l)return a.instance=l,xe(l),l;var t=F({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),xe(l),He(l,"style",t),Eu(l,n.precedence,e),a.instance=l;case"stylesheet":t=Wl(n.href);var o=e.querySelector(Kt(t));if(o)return a.state.loading|=4,a.instance=o,xe(o),o;l=Tf(n),(t=va.get(t))&&rs(l,t),o=(e.ownerDocument||e).createElement("link"),xe(o);var u=o;return u._p=new Promise(function(r,i){u.onload=r,u.onerror=i}),He(o,"link",l),a.state.loading|=4,Eu(o,n.precedence,e),a.instance=o;case"script":return o=$l(n.src),(t=e.querySelector(wt(o)))?(a.instance=t,xe(t),t):(l=n,(t=va.get(o))&&(l=F({},n),is(l,t)),e=e.ownerDocument||e,t=e.createElement("script"),xe(t),He(t,"link",l),e.head.appendChild(t),a.instance=t);case"void":return null;default:throw Error(p(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Eu(l,n.precedence,e));return a.instance}function Eu(e,a,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),t=l.length?l[l.length-1]:null,o=t,u=0;u<l.length;u++){var r=l[u];if(r.dataset.precedence===a)o=r;else if(o!==t)break}o?o.parentNode.insertBefore(e,o.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function rs(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function is(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Tu=null;function xf(e,a,n){if(Tu===null){var l=new Map,t=Tu=new Map;t.set(n,l)}else t=Tu,l=t.get(n),l||(l=new Map,t.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),t=0;t<n.length;t++){var o=n[t];if(!(o[it]||o[Me]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var u=o.getAttribute(a)||"";u=e+u;var r=l.get(u);r?r.push(o):l.set(u,[o])}}return l}function ss(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function Rb(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Df(e,a){return e==="img"&&a.src!=null&&a.src!==""&&a.onLoad==null&&a.loading!=="lazy"}function Af(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Of(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function jf(e,a){typeof a.decode=="function"&&(e.imgCount++,a.complete||(e.imgBytes+=Of(a),e.suspenseyImages.push(a)),e=Gb.bind(e),a.decode().then(e,e))}function Bb(e,a,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var t=Wl(l.href),o=a.querySelector(Kt(t));if(o){a=o._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=kt.bind(e),a.then(e,e)),n.state.loading|=4,n.instance=o,xe(o);return}o=a.ownerDocument||a,l=Tf(l),(t=va.get(t))&&rs(l,t),o=o.createElement("link"),xe(o);var u=o;u._p=new Promise(function(r,i){u.onload=r,u.onerror=i}),He(o,"link",l),n.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,a),(a=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=kt.bind(e),a.addEventListener("load",n),a.addEventListener("error",n))}}var Nu=0;function Lb(e,a){return e.stylesheets&&e.count===0&&Du(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Du(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+a);0<e.imgBytes&&Nu===0&&(Nu=62500*tb());var t=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Du(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Nu?50:800)+a);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(t)}}:null}function Mf(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Du(e,e.stylesheets);else if(e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}}}function kt(){this.count--,Mf(this)}function Gb(){this.imgCount--,Mf(this)}var xu=null;function Du(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xu=new Map,a.forEach(Vb,e),xu=null,kt.call(e))}function Vb(e,a){if(!(a.state.loading&4)){var n=xu.get(e);if(n)var l=n.get(null);else{n=new Map,xu.set(e,n);for(var t=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<t.length;o++){var u=t[o];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),l=u)}l&&n.set(null,l)}t=a.instance,u=t.getAttribute("data-precedence"),o=n.get(u)||l,o===l&&n.set(null,t),n.set(u,t),this.count++,l=kt.bind(this),t.addEventListener("load",l),t.addEventListener("error",l),o?o.parentNode.insertBefore(t,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(t,e.firstChild)),a.state.loading|=4}}var Pl={$$typeof:Ve,Provider:null,Consumer:null,_currentValue:Hn,_currentValue2:Hn,_threadCount:0};function Xb(e,a,n,l,t,o,u,r,i){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.hiddenUpdates=Xu(null),this.identifierPrefix=l,this.onUncaughtError=t,this.onCaughtError=o,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=i,this.transitionTypes=null,this.incompleteTransitions=new Map}function _f(e,a,n,l,t,o,u,r,i,m,b,h){return e=new Xb(e,a,n,u,i,m,b,h,r),a=1,o===!0&&(a|=24),o=Ze(3,null,null,a),e.current=o,o.stateNode=e,a=Tr(),a.refCount++,e.pooledCache=a,a.refCount++,o.memoizedState={element:l,isDehydrated:n,cache:a},Ar(o),e}function Cf(e){return e?(e=Tl,e):Tl}function Yf(e,a,n,l,t,o){t=Cf(t),l.context===null?l.context=t:l.pendingContext=t,l=gn(a),l.payload={element:n},o=o===void 0?null:o,o!==null&&(l.callback=o),n=hn(e,l,a),n!==null&&(ke(n,e,a),Nt(n,e,a))}function Uf(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function cs(e,a){Uf(e,a),(e=e.alternate)&&Uf(e,a)}function Hf(e){if(e.tag===13||e.tag===31){var a=Vn(e,67108864);a!==null&&ke(a,e,67108864),cs(e,67108864)}}function Qf(e){if(e.tag===13||e.tag===31){var a=ta();a=Zu(a);var n=Vn(e,a);n!==null&&ke(n,e,a),cs(e,a)}}var Il=!0;function Zb(e,a,n,l){var t=Y.T;Y.T=null;var o=P.p;try{P.p=2,ds(e,a,n,l)}finally{P.p=o,Y.T=t}}function Jb(e,a,n,l){var t=Y.T;Y.T=null;var o=P.p;try{P.p=8,ds(e,a,n,l)}finally{P.p=o,Y.T=t}}function ds(e,a,n,l){if(Il){var t=ms(l);if(t===null)Ki(e,a,l,Au,n),Bf(e,l);else if(wb(t,e,a,n,l))l.stopPropagation();else if(Bf(e,l),a&4&&-1<Kb.indexOf(e)){for(;t!==null;){var o=fl(t);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var u=Qn(o.pendingLanes);if(u!==0){var r=o;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var i=1<<31-$e(u);r.entanglements[1]|=i,u&=~i}La(o),(I&6)===0&&(fu=Fe()+500,Gt(0))}}break;case 31:case 13:r=Vn(o,2),r!==null&&ke(r,o,2),bu(),cs(o,2)}if(o=ms(l),o===null&&Ki(e,a,l,Au,n),o===t)break;t=o}t!==null&&l.stopPropagation()}else Ki(e,a,l,null,n)}}function ms(e){return e=$u(e),fs(e)}var Au=null;function fs(e){if(Au=null,e=Rn(e),e!==null){var a=z(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=C(a),e!==null)return e;e=null}else if(n===31){if(e=H(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Au=e,null}function Rf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tp()){case Ss:return 2;case Es:return 8;case uo:case op:return 32;case Ts:return 268435456;default:return 32}default:return 32}}var ps=!1,jn=null,Mn=null,_n=null,Ft=new Map,Wt=new Map,Cn=[],Kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bf(e,a){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Ft.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wt.delete(a.pointerId)}}function $t(e,a,n,l,t,o){return e===null||e.nativeEvent!==o?(e={blockedOn:a,domEventName:n,eventSystemFlags:l,nativeEvent:o,targetContainers:[t]},a!==null&&(a=fl(a),a!==null&&Hf(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,t!==null&&a.indexOf(t)===-1&&a.push(t),e)}function wb(e,a,n,l,t){switch(a){case"focusin":return jn=$t(jn,e,a,n,l,t),!0;case"dragenter":return Mn=$t(Mn,e,a,n,l,t),!0;case"mouseover":return _n=$t(_n,e,a,n,l,t),!0;case"pointerover":var o=t.pointerId;return Ft.set(o,$t(Ft.get(o)||null,e,a,n,l,t)),!0;case"gotpointercapture":return o=t.pointerId,Wt.set(o,$t(Wt.get(o)||null,e,a,n,l,t)),!0}return!1}function Lf(e){var a=Rn(e.target);if(a!==null){var n=z(a);if(n!==null){if(a=n.tag,a===13){if(a=C(n),a!==null){e.blockedOn=a,Ms(e.priority,function(){Qf(n)});return}}else if(a===31){if(a=H(n),a!==null){e.blockedOn=a,Ms(e.priority,function(){Qf(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ou(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=ms(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Wu=l,n.target.dispatchEvent(l),Wu=null}else return a=fl(n),a!==null&&Hf(a),e.blockedOn=n,!1;a.shift()}return!0}function Gf(e,a,n){Ou(e)&&n.delete(a)}function kb(){ps=!1,jn!==null&&Ou(jn)&&(jn=null),Mn!==null&&Ou(Mn)&&(Mn=null),_n!==null&&Ou(_n)&&(_n=null),Ft.forEach(Gf),Wt.forEach(Gf)}function ju(e,a){e.blockedOn===a&&(e.blockedOn=null,ps||(ps=!0,q.unstable_scheduleCallback(q.unstable_NormalPriority,kb)))}var Mu=null;function Vf(e){Mu!==e&&(Mu=e,q.unstable_scheduleCallback(q.unstable_NormalPriority,function(){Mu===e&&(Mu=null);for(var a=0;a<e.length;a+=3){var n=e[a],l=e[a+1],t=e[a+2];if(typeof l!="function"){if(fs(l||n)===null)continue;break}var o=fl(n);o!==null&&(e.splice(a,3),a-=3,Fr(o,{pending:!0,data:t,method:n.method,action:l},l,t))}}))}function et(e){function a(i){return ju(i,e)}jn!==null&&ju(jn,e),Mn!==null&&ju(Mn,e),_n!==null&&ju(_n,e),Ft.forEach(a),Wt.forEach(a);for(var n=0;n<Cn.length;n++){var l=Cn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)Lf(n),n.blockedOn===null&&Cn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var t=n[l],o=n[l+1],u=t[Xe]||null;if(typeof o=="function")u||Vf(n);else if(u){var r=null;if(o&&o.hasAttribute("formAction")){if(t=o,u=o[Xe]||null)r=u.formAction;else if(fs(t)!==null)continue}else r=u.action;typeof r=="function"?n[l+1]=r:(n.splice(l,3),l-=3),Vf(n)}}}function Xf(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(u){return t=u})},focusReset:"manual",scroll:"manual"})}function a(){t!==null&&(t(),t=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,t=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),t!==null&&(t(),t=null)}}}function vs(e){this._internalRoot=e}_u.prototype.render=vs.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(p(409));var n=a.current,l=ta();Yf(n,l,e,a,null,null)},_u.prototype.unmount=vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Yf(e.current,2,null,e,null,null),bu(),a[ml]=null}};function _u(e){this._internalRoot=e}_u.prototype.unstable_scheduleHydration=function(e){if(e){var a=js();e={blockedOn:null,target:e,priority:a};for(var n=0;n<Cn.length&&a!==0&&a<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&Lf(e)}};var Zf=T.version;if(Zf!=="19.3.0")throw Error(p(527,Zf,"19.3.0"));P.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=$(a),e=e!==null?ye(e):null,e=e===null?null:e.stateNode,e};var Fb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{ot=Cu.inject(Fb),We=Cu}catch{}}return Pt.createRoot=function(e,a){if(!E(e))throw Error(p(299));var n=!1,l="",t=_d,o=Cd,u=Yd;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(t=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=_f(e,1,!1,null,null,n,l,null,t,o,u,Xf),e[ml]=a.current,Ji(e),new vs(a)},Pt.hydrateRoot=function(e,a,n){if(!E(e))throw Error(p(299));var l=!1,t="",o=_d,u=Cd,r=Yd,i=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.formState!==void 0&&(i=n.formState)),a=_f(e,1,!0,a,n??null,l,t,i,o,u,r,Xf),a.context=Cf(null),n=a.current,l=ta(),l=Zu(l),t=gn(l),t.callback=null,hn(n,t,l),n=l,a.current.lanes=n,rt(a,n),La(a),e[ml]=a.current,Ji(e),new _u(a)},Pt.version="19.3.0",Pt}var kf;function ng(){if(kf)return bs.exports;kf=1;function q(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q)}catch(T){console.error(T)}}return q(),bs.exports=ag(),bs.exports}var lg=ng();const tg="modulepreload",og=function(q){return"/cartas/"+q},Ff={},It=function(T,x,p){let E=Promise.resolve();if(x&&x.length>0){let C=function($){return Promise.all($.map(ye=>Promise.resolve(ye).then(G=>({status:"fulfilled",value:G}),G=>({status:"rejected",reason:G}))))};document.getElementsByTagName("link");const H=document.querySelector("meta[property=csp-nonce]"),U=(H==null?void 0:H.nonce)||(H==null?void 0:H.getAttribute("nonce"));E=C(x.map($=>{if($=og($),$ in Ff)return;Ff[$]=!0;const ye=$.endsWith(".css"),G=ye?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${$}"]${G}`))return;const M=document.createElement("link");if(M.rel=ye?"stylesheet":tg,ye||(M.as="script"),M.crossOrigin="",M.href=$,U&&M.setAttribute("nonce",U),document.head.appendChild(M),ye)return new Promise((ba,oe)=>{M.addEventListener("load",ba),M.addEventListener("error",()=>oe(new Error(`Unable to preload CSS for ${$}`)))})}))}function z(C){const H=new Event("vite:preloadError",{cancelable:!0});if(H.payload=C,window.dispatchEvent(H),!H.defaultPrevented)throw C}return E.then(C=>{for(const H of C||[])H.status==="rejected"&&z(H.reason);return T().catch(z)})};function ug(q={}){const{immediate:T=!1,onNeedReload:x,onNeedRefresh:p,onOfflineReady:E,onRegistered:z,onRegisteredSW:C,onRegisterError:H}=q;let U,$;const ye=async(M=!0)=>{await $};async function G(){if("serviceWorker"in navigator){if(U=await It(async()=>{const{Workbox:M}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:M}},[]).then(({Workbox:M})=>new M("/cartas/sw.js",{scope:"/cartas/",type:"classic"})).catch(M=>{H==null||H(M)}),!U)return;U.addEventListener("activated",M=>{(M.isUpdate||M.isExternal)&&(x?x():window.location.reload())}),U.addEventListener("installed",M=>{M.isUpdate||E==null||E()}),U.register({immediate:T}).then(M=>{C?C("/cartas/sw.js",M):z==null||z(M)}).catch(M=>{H==null||H(M)})}}return $=G(),ye}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=q=>q.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ig=q=>q.replace(/^([A-Z])|[\s-_]+(\w)/g,(T,x,p)=>p?p.toUpperCase():x.toLowerCase()),Wf=q=>{const T=ig(q);return T.charAt(0).toUpperCase()+T.slice(1)},If=(...q)=>q.filter((T,x,p)=>!!T&&T.trim()!==""&&p.indexOf(T)===x).join(" ").trim(),sg=q=>{for(const T in q)if(T.startsWith("aria-")||T==="role"||T==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=te.forwardRef(({color:q="currentColor",size:T=24,strokeWidth:x=2,absoluteStrokeWidth:p,className:E="",children:z,iconNode:C,...H},U)=>te.createElement("svg",{ref:U,...cg,width:T,height:T,stroke:q,strokeWidth:p?Number(x)*24/Number(T):x,className:If("lucide",E),...!z&&!sg(H)&&{"aria-hidden":"true"},...H},[...C.map(([$,ye])=>te.createElement($,ye)),...Array.isArray(z)?z:[z]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=(q,T)=>{const x=te.forwardRef(({className:p,...E},z)=>te.createElement(dg,{ref:z,iconNode:T,className:If(`lucide-${rg(Wf(q))}`,`lucide-${q}`,p),...E}));return x.displayName=Wf(q),x};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],fg=eo("menu",mg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],vg=eo("moon",pg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],gg=eo("sun",bg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],qg=eo("wifi-off",hg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zg=eo("x",yg),$f=({theme:q,onToggle:T,className:x="",variant:p="minimal"})=>{const E=q==="dark";return j.jsxs("button",{id:"theme-toggle-btn",type:"button",onClick:T,"aria-label":E?"Cambiar a modo papel claro":"Cambiar a modo lectura nocturna",title:E?"Modo claro (papel)":"Modo nocturno (biblioteca)",className:`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-sm transition-colors text-xs font-sans tracking-wide text-[#6b645c] hover:text-[#211e1c] dark:text-[#9c958c] dark:hover:text-[#ede7e0] hover:bg-[#ece9e4]/60 dark:hover:bg-[#2a2927] border border-transparent hover:border-[#dad4cb]/70 dark:hover:border-[#383633] ${x}`,children:[E?j.jsx(gg,{className:"w-3.5 h-3.5 text-[#d0a65c]",strokeWidth:1.75}):j.jsx(vg,{className:"w-3.5 h-3.5 text-[#5d4837]",strokeWidth:1.75}),p==="labeled"&&j.jsx("span",{className:"font-normal",children:E?"Modo papel":"Modo noche"})]})},Sg=5e3,Eg=2e4;async function Tg(){if(typeof navigator<"u"&&navigator.onLine===!1)return!1;try{return(await fetch(`/cartas/ping.txt?t=${Date.now()}`,{method:"GET",cache:"no-store",signal:AbortSignal.timeout(Sg)})).ok}catch{return!1}}async function Ng(){var q;try{const T=await((q=navigator.serviceWorker)==null?void 0:q.getRegistration());await(T==null?void 0:T.update())}catch{}}function xg(){const[q,T]=te.useState(null),x=te.useRef(!0),p=te.useRef(!1),E=te.useCallback(async()=>{const z=await Tg();return x.current&&T(z),z&&p.current&&Ng(),p.current=!z,z},[]);return te.useEffect(()=>{x.current=!0,E();const z=()=>E(),C=()=>T(!1);return window.addEventListener("online",z),window.addEventListener("offline",C),()=>{x.current=!1,window.removeEventListener("online",z),window.removeEventListener("offline",C)}},[E]),te.useEffect(()=>{if(q!==!1)return;const z=window.setInterval(E,Eg);return()=>window.clearInterval(z)},[q,E]),{isOnline:q}}const Pf=({className:q="",iconClassName:T="w-3.5 h-3.5",align:x="right",side:p="bottom"})=>{const{isOnline:E}=xg(),[z,C]=te.useState(!1),U=`offline-indicator-tooltip-${te.useId()}`;return E!==!1?null:j.jsxs("div",{className:"relative inline-flex",children:[j.jsx("button",{type:"button","aria-label":"Sin conexión: viendo una versión guardada","aria-describedby":U,onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),onFocus:()=>C(!0),onBlur:()=>C(!1),onClick:()=>C(!0),className:`inline-flex items-center justify-center text-[#8c8479] dark:text-[#7d756a] hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors ${q}`,children:j.jsx(qg,{className:T,strokeWidth:1.75})}),j.jsx("div",{id:U,role:"tooltip",className:`absolute z-50 whitespace-nowrap rounded-sm border border-[#dad4cb] dark:border-[#383633] bg-[#ece9e4] dark:bg-[#1c1b1b] px-2.5 py-1.5 text-xs font-sans text-[#6b645c] dark:text-[#9c958c] shadow-lg transition-opacity ${p==="bottom"?"top-full mt-2":"bottom-full mb-2"} ${x==="right"?"right-0":"left-0"} ${z?"opacity-100":"opacity-0 pointer-events-none"}`,children:"Sin conexión: estás viendo una versión guardada"})]})},Dg=({currentView:q,onNavigate:T,theme:x,onToggleTheme:p})=>{const[E,z]=te.useState(!1),C=U=>q.type===U,H=U=>{T(U),z(!1)};return j.jsxs("header",{id:"main-header",className:"w-full border-b border-[#dad4cb] dark:border-[#383633] bg-[#ece9e4]/90 dark:bg-[#1c1b1b]/90 backdrop-blur-xs sticky top-0 z-40 transition-colors",children:[j.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between",children:[j.jsx("button",{id:"header-brand-logo",onClick:()=>H({type:"home"}),className:"text-left group inline-flex flex-col items-start focus:outline-none",children:j.jsx("span",{className:"font-serif text-lg sm:text-xl font-normal tracking-tight text-[#211e1c] dark:text-[#ede7e0] group-hover:text-[#b84e2a] dark:group-hover:text-[#cf6e4b] transition-colors",children:"Cartas que quedan"})}),j.jsxs("nav",{className:"hidden md:flex items-center gap-7 text-sm font-sans",children:[j.jsx("button",{id:"nav-link-archive",onClick:()=>H({type:"archive"}),className:`transition-colors tracking-wide py-1 text-xs uppercase ${C("archive")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium border-b border-[#b84e2a] dark:border-[#cf6e4b]":"text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0]"}`,children:"Archivo"}),j.jsx("button",{id:"nav-link-about",onClick:()=>H({type:"about"}),className:`transition-colors tracking-wide py-1 text-xs uppercase ${C("about")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium border-b border-[#b84e2a] dark:border-[#cf6e4b]":"text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0]"}`,children:"Sobre el proyecto"}),j.jsx("div",{className:"h-4 w-px bg-[#dad4cb] dark:bg-[#383633]"}),j.jsx($f,{theme:x,onToggle:p}),j.jsx(Pf,{className:"p-2 rounded-sm hover:bg-[#ece9e4]/60 dark:hover:bg-[#2a2927]"})]}),j.jsxs("div",{className:"flex items-center gap-2 md:hidden",children:[j.jsx($f,{theme:x,onToggle:p}),j.jsx(Pf,{className:"p-2 rounded-sm hover:bg-[#ece9e4]/60 dark:hover:bg-[#2a2927]"}),j.jsx("button",{id:"mobile-menu-toggle",type:"button",onClick:()=>z(!E),"aria-label":E?"Cerrar menú":"Abrir menú",className:"p-2 text-[#211e1c] dark:text-[#ede7e0] hover:bg-[#dad4cb]/40 dark:hover:bg-[#2a2927] rounded-sm transition-colors",children:E?j.jsx(zg,{className:"w-5 h-5",strokeWidth:1.75}):j.jsx(fg,{className:"w-5 h-5",strokeWidth:1.75})})]})]}),E&&j.jsx("div",{id:"mobile-nav-panel",className:"md:hidden border-t border-[#dad4cb] dark:border-[#383633] bg-[#ece9e4] dark:bg-[#1c1b1b] px-4 py-5 shadow-xs",children:j.jsxs("nav",{className:"flex flex-col gap-3 font-sans text-sm",children:[j.jsx("button",{id:"mobile-nav-home",onClick:()=>H({type:"home"}),className:`text-left py-2 px-2 text-sm tracking-wide rounded-xs ${C("home")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium bg-[#dad4cb]/30 dark:bg-[#2a2927]":"text-[#211e1c] dark:text-[#ede7e0]"}`,children:"Portada"}),j.jsx("button",{id:"mobile-nav-archive",onClick:()=>H({type:"archive"}),className:`text-left py-2 px-2 text-sm tracking-wide rounded-xs ${C("archive")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium bg-[#dad4cb]/30 dark:bg-[#2a2927]":"text-[#211e1c] dark:text-[#ede7e0]"}`,children:"Archivo de documentos"}),j.jsx("button",{id:"mobile-nav-about",onClick:()=>H({type:"about"}),className:`text-left py-2 px-2 text-sm tracking-wide rounded-xs ${C("about")?"text-[#b84e2a] dark:text-[#cf6e4b] font-medium bg-[#dad4cb]/30 dark:bg-[#2a2927]":"text-[#211e1c] dark:text-[#ede7e0]"}`,children:"Sobre el proyecto"})]})})]})},Ag=({onNavigate:q})=>j.jsx("footer",{id:"main-footer",className:"w-full border-t border-[#dad4cb] dark:border-[#383633] mt-24 py-14 transition-colors",children:j.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 md:px-8",children:[j.jsxs("div",{className:"flex flex-col md:flex-row md:items-baseline justify-between gap-8",children:[j.jsxs("div",{className:"max-w-md",children:[j.jsx("h3",{className:"font-serif text-lg font-normal text-[#211e1c] dark:text-[#ede7e0]",children:"Cartas que quedan"}),j.jsx("p",{className:"font-serif italic text-sm text-[#6b645c] dark:text-[#9c958c] mt-1.5 leading-relaxed",children:"«Hay cosas que vale la pena dejar escritas.»"}),j.jsx("p",{className:"font-sans text-xs text-[#6b645c] dark:text-[#9c958c] mt-3 leading-relaxed",children:"Un archivo personal y editorial de reflexiones, cartas y preguntas humanas pensado para perdurar y volver a ser leído con calma."})]}),j.jsxs("div",{className:"flex flex-wrap gap-x-8 gap-y-3 font-sans text-xs tracking-wider uppercase text-[#6b645c] dark:text-[#9c958c]",children:[j.jsx("button",{onClick:()=>q({type:"home"}),className:"hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors focus:outline-none",children:"Portada"}),j.jsx("button",{onClick:()=>q({type:"archive"}),className:"hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors focus:outline-none",children:"Archivo"}),j.jsx("button",{onClick:()=>q({type:"about"}),className:"hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors focus:outline-none",children:"Sobre el proyecto"})]})]}),j.jsxs("div",{className:"mt-12 pt-6 border-t border-[#dad4cb]/50 dark:border-[#383633]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#8c8479] dark:text-[#7d756a] font-sans",children:[j.jsx("span",{children:"Un archivo digital de lectura pausada."}),j.jsx("span",{className:"mt-1 sm:mt-0",children:"2026"})]})]})}),Og=`---\r
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
**«¿Qué podría aprender si, por una vez, me quedo en silencio y lo escucho?»**`,jg=`---\r
title: "El Diablo es Humano"\r
category: "Fe"\r
secondaryCategory: "Libertad · Sociedad"\r
tags: "Fe, Religión, Jesús, Sexualidad, Culpa, Libros apócrifos, Libertad, Colombia"\r
excerpt: "¿Y si nos hubieran enseñado a sentir vergüenza de aquello que simplemente nos hace humanos? Una reflexión sobre la culpa religiosa, el deseo, la sexualidad y la imagen de un Dios que nos habría creado con una naturaleza para después condenarnos por tenerla."\r
date: "2026-10-21"\r
readingTime: "14 min de lectura"\r
biblicalQuote: "Y crió Dios al hombre a su imagen, a imagen de Dios lo crió; varón y hembra los crió."\r
biblicalReference: "Génesis 1:27"\r
biblicalContext: "El relato de la creación presenta al ser humano como imagen de Dios, antes de que aparezca la historia de su desobediencia y expulsión del jardín del Edén."\r
---\r
\r
Hay una canción de Aurora que se llama *The Devil Is Human* y que me dejó pensando en una pregunta que llevo tiempo haciéndome: ¿en qué momento empezamos a sentir vergüenza de ser seres humanos?\r
\r
En la canción, Aurora cuestiona a ese Padre al que se le pide que no nos culpe por tratar de vivir, de amar, de querer más, de sangrar como seres humanos. También pregunta por qué algo tan natural como el placer termina disfrazado de codicia, como si desear fuera una falta que tuviéramos que pagar.\r
\r
Y hay una parte de esa canción que me parece especialmente poderosa: la imagen de una manzana en nuestras manos que nunca nos dejan tener.\r
\r
Porque, ¿de qué sirve crear a alguien con deseos si después lo vas a hacer sentir culpable por experimentarlos?\r
\r
¿Qué sentido tiene darnos un cuerpo, una mente, emociones, curiosidad y la capacidad de sentir placer, para después convertir todo eso en una lista de motivos por los que deberíamos avergonzarnos?\r
\r
No tengo una respuesta definitiva. Pero sí tengo una sospecha que quiero compartirte.\r
\r
**¿Y si algunas de las cosas que nos han enseñado a llamar pecado son, en realidad, partes de nuestra humanidad que aprendimos a temer?**\r
\r
## La culpa como negocio de la fe\r
\r
Hay algo que me incomoda de ciertas narrativas religiosas: la manera en que nos presentan como seres inevitablemente impuros, necesitados de una salvación que nunca terminamos de merecer.\r
\r
Primero nos enseñan que nacemos con una naturaleza defectuosa. Después nos enseñan a reconocer esa supuesta impureza en nuestros pensamientos, en nuestros deseos, en nuestro cuerpo y hasta en aquello que sentimos sin haberlo elegido. Finalmente, nos ofrecen el camino para limpiar esa condición, siempre que aceptemos las reglas que ellos consideran necesarias para conseguirlo.\r
\r
Y así podemos pasar una vida entera intentando pagar una deuda que ni siquiera sabemos si contrajimos.\r
\r
No estoy diciendo que toda religión funcione de esa manera, ni que todas las personas que encuentran refugio en la fe quieran manipular a alguien. Conozco el consuelo, la solidaridad y la esperanza que muchas personas encuentran en sus comunidades religiosas.\r
\r
Mi preocupación es otra: **¿qué pasa cuando la fe deja de ayudarnos a vivir mejor y empieza a enseñarnos a sentirnos culpables por existir?**\r
\r
Porque una cosa es reconocer que podemos hacer daño, que somos capaces de actuar con egoísmo, de mentir, de traicionar o de aprovecharnos de otros. Otra muy distinta es convencer a alguien de que hay algo malo en su naturaleza por sentir deseo, por experimentar placer o por tener pensamientos que nunca decidió que aparecieran.\r
\r
Y cuando esa culpa se convierte en una herramienta para controlar la vida íntima de las personas, hay algo que merece ser cuestionado.\r
\r
¿Quién define qué debemos sentir?\r
\r
¿Quién decide cuáles de nuestros deseos son aceptables?\r
\r
¿Y quién termina beneficiándose cuando aprendemos a desconfiar de nosotros mismos?\r
\r
A veces siento que hemos confundido la responsabilidad moral con la obediencia. Como si una persona fuera buena no porque trate bien a los demás, sino porque consigue ajustarse a determinadas normas, incluso cuando esas normas le exigen negar una parte de sí misma.\r
\r
Y ahí es donde empiezo a preguntarme si estamos hablando de espiritualidad o de control.\r
\r
## ¿Qué hicimos con el Jesús que también fue humano?\r
\r
Hay otra cosa que me parece fascinante cuando uno empieza a explorar la historia del cristianismo: los textos que quedaron por fuera de la Biblia que conocemos hoy.\r
\r
Los llamamos libros apócrifos. Son escritos antiguos relacionados con Jesús, sus discípulos y los primeros cristianos que no fueron incluidos en el canon de la mayoría de las iglesias cristianas.\r
\r
Y quiero detenerme en esto porque no estoy diciendo que todos esos textos sean históricos, que cuenten lo que realmente ocurrió o que exista una conspiración perfectamente organizada para esconder la verdad. La formación del canon fue un proceso histórico complejo, con diferencias entre comunidades y tradiciones.\r
\r
Pero sí creo que vale la pena preguntarnos qué otras imágenes de Jesús circularon entre los primeros cristianos y por qué algunas terminaron ocupando un lugar central mientras otras quedaron al margen.\r
\r
Por ejemplo, el *Evangelio de la infancia de Tomás*, un escrito que suele situarse en el siglo II, intenta llenar los vacíos que los evangelios canónicos dejaron sobre la niñez de Jesús.\r
\r
Y la imagen que presenta es bastante diferente de la que muchos imaginamos.\r
\r
En esos relatos, Jesús aparece haciendo milagros extraordinarios desde niño. En uno de ellos, convierte en seres vivos unos pájaros que había moldeado con barro. Pero también aparecen episodios mucho más incómodos: cuando otros niños o adultos lo contradicen, puede responder con maldiciones que les provocan la muerte o les causan daño.\r
\r
No es exactamente la imagen del niño perfectamente sereno que solemos ver en algunas representaciones religiosas.\r
\r
Es una narración antigua, con elementos fantásticos y una visión de Jesús que incluso hoy puede resultar difícil de aceptar. No tenemos razones suficientes para tomar esos episodios como hechos históricos.\r
\r
Pero su existencia nos permite hacer una pregunta interesante: ¿por qué sentimos tanta necesidad de imaginar a Jesús como alguien que nunca experimentó ninguna de las contradicciones que asociamos con la condición humana?\r
\r
¿Nos da miedo pensar que una figura sabia también pudo haber tenido una infancia?\r
\r
¿Que aprender, crecer y comprender a los demás son procesos que toman tiempo?\r
\r
¿Que la humanidad no es una falla que debemos esconder, sino una condición desde la que podemos aprender?\r
\r
No necesitamos creer que cada historia apócrifa ocurrió para reconocer que esos textos nos obligan a pensar en cómo construimos nuestras imágenes de lo sagrado.\r
\r
Y, sobre todo, nos recuerdan que los primeros cristianos no siempre imaginaron a Jesús de una sola manera.\r
\r
### ¿Y qué pasa con María Magdalena?\r
\r
Otro asunto que ha despertado muchísima curiosidad es la relación entre Jesús y María Magdalena.\r
\r
En el *Evangelio de Felipe*, un texto cristiano antiguo que no forma parte del Nuevo Testamento, María aparece descrita como compañera del Salvador y se cuenta que Jesús la amaba más que a los demás discípulos. También se menciona que la besaba, aunque el manuscrito está deteriorado precisamente en un punto importante para interpretar ese pasaje.\r
\r
¿Significa eso que fueron pareja? No podemos afirmarlo. El texto no demuestra que estuvieran casados ni que mantuvieran una relación sexual. La palabra que se traduce como «compañera» admite varias interpretaciones, y el beso también puede tener un sentido espiritual dentro de esa obra.\r
\r
Pero lo que sí podemos reconocer es que existieron tradiciones cristianas antiguas que presentaban a María Magdalena como una figura especialmente cercana a Jesús y le atribuían una posición importante entre sus seguidores.\r
\r
Y eso ya es suficiente para abrir una conversación.\r
\r
¿Por qué nos interesa tanto saber si Jesús tuvo una relación sentimental? ¿Por qué la posibilidad de que hubiera experimentado un vínculo afectivo nos parece, para algunos, incompatible con su sabiduría o su dignidad espiritual?\r
\r
¿Acaso amar a alguien lo habría hecho menos capaz de enseñar sobre el amor?\r
\r
No tenemos que inventarle una vida romántica a Jesús para reconocer su humanidad. Tampoco tenemos que demostrar que tuvo relaciones sexuales para admitir que compartió nuestra condición humana.\r
\r
**Ser humano no le habría quitado valor a sus enseñanzas.**\r
\r
Entonces, ¿por qué nos cuesta tanto aplicar esa misma idea a nosotros?\r
\r
¿Por qué nos cuesta aceptar que una persona puede ser sabia, compasiva, espiritual y digna sin dejar de tener un cuerpo, emociones, necesidades y deseos?\r
\r
Quizá hemos construido una imagen de Jesús tan alejada de nuestra humanidad que terminamos utilizándola como una vara imposible para medir la nuestra.\r
\r
Y, al hacerlo, olvidamos algo fundamental: si Jesús vino a enseñarnos cómo vivir, no tendría mucho sentido que su humanidad fuera precisamente aquello que debiéramos negar para parecernos a él.\r
\r
## El deseo no es lo mismo que el daño\r
\r
Quiero hablarte ahora de algo mucho más cercano. Algo que probablemente hemos experimentado, aunque no siempre nos atrevamos a decirlo en voz alta.\r
\r
El deseo sexual.\r
\r
Sentir atracción por alguien. Experimentar placer. Tener fantasías. Sentir curiosidad por el propio cuerpo. Enamorarse de una persona que otros consideran inapropiada. Descubrir que nuestra orientación sexual no coincide con lo que nos enseñaron que debía ser.\r
\r
¿Cuántas personas han pasado años sintiendo que hay algo malo en ellas por experimentar alguna de estas cosas?\r
\r
¿Cuántas han aprendido a esconderse, a mentir sobre lo que sienten o a vivir con miedo de que alguien descubra una parte de su intimidad?\r
\r
Yo quisiera decirte algo: **sentir un deseo no te convierte automáticamente en una mala persona.**\r
\r
Los seres humanos no elegimos voluntariamente cada pensamiento que aparece en nuestra mente, cada atracción que sentimos ni cada reacción de nuestro cuerpo. No escogemos desde cero nuestra orientación sexual, como quien escoge qué ropa ponerse. Y aunque podemos decidir cómo actuar frente a muchos de nuestros impulsos, no controlamos de manera absoluta todo lo que sentimos.\r
\r
Por eso me parece tan problemático que se nos enseñe a interpretar la mera aparición de un deseo como una señal de corrupción moral.\r
\r
Una cosa es sentir atracción por alguien y otra es irrespetar su voluntad. Una cosa es experimentar placer y otra es aprovecharse de una persona para conseguirlo. Una cosa es tener fantasías y otra es convertirlas en acciones que lastiman a alguien.\r
\r
**La responsabilidad moral debería estar mucho más relacionada con cómo tratamos a los demás que con la culpa que sentimos por tener un cuerpo.**\r
\r
Y no estoy diciendo que cualquier comportamiento sea válido porque nazca de un deseo. El consentimiento, la honestidad, el cuidado, la dignidad y la responsabilidad importan. Muchísimo.\r
\r
Lo que cuestiono es la idea de que el deseo, por sí mismo, nos haga impuros.\r
\r
Porque si podemos reconocer que no elegimos todos nuestros impulsos, ¿por qué deberíamos sentir vergüenza simplemente por experimentarlos?\r
\r
### ¿Qué dice realmente la Biblia sobre la sexualidad?\r
\r
Sé que esta pregunta incomoda, especialmente cuando hablamos de las relaciones entre personas del mismo sexo.\r
\r
En Levítico 18:22 y 20:13 aparecen prohibiciones de las relaciones sexuales entre varones. En el Nuevo Testamento, Romanos 1:26-27 habla de relaciones sexuales entre personas del mismo sexo dentro de un argumento sobre la idolatría y el comportamiento que Pablo considera contrario al orden establecido por Dios. También están 1 Corintios 6:9-10 y 1 Timoteo 1:9-10, cuyos términos griegos relacionados con las prácticas sexuales han sido objeto de debates de traducción e interpretación.\r
\r
No sería honesto fingir que esos pasajes no existen o que todas sus interpretaciones históricas han sido idénticas.\r
\r
Pero tampoco sería honesto afirmar que la Biblia presenta una explicación moderna de la orientación sexual, de las relaciones igualitarias entre adultos del mismo sexo o de la diversidad sexual tal como hoy la entendemos.\r
\r
**Los textos bíblicos surgieron en sociedades con ideas sobre el cuerpo, el género, el honor, la familia y la sexualidad diferentes de las nuestras.**\r
\r
En el mundo grecorromano, por ejemplo, las relaciones sexuales también se interpretaban a través de jerarquías sociales, estatus y roles de género. En determinados contextos, se consideraba especialmente importante quién ejercía el papel activo y quién ocupaba una posición social subordinada. Existían prácticas de explotación, relaciones entre hombres de distintas edades y formas de prostitución, aunque las costumbres variaban según la época y el lugar.\r
\r
Esto no significa que todas las relaciones entre personas del mismo sexo en la antigüedad fueran abusivas ni que podamos reducir todos los textos bíblicos a una condena de la explotación. Significa que necesitamos comprender el mundo en el que se escribieron antes de utilizarlos para dictar conclusiones sobre todas las relaciones humanas contemporáneas.\r
\r
También hay que reconocer que existen interpretaciones cristianas diferentes: algunas consideran que esas prohibiciones se aplican a toda relación sexual entre personas del mismo sexo; otras sostienen que su contexto histórico y las prácticas específicas que describen no permiten trasladarlas sin más a las relaciones amorosas, consensuadas e igualitarias de hoy.\r
\r
No te digo esto para imponerte una interpretación alternativa. Te lo digo porque **leer un texto antiguo sin preguntarnos por su contexto también es una forma de tomar una decisión interpretativa**, aunque a veces nos hayan enseñado que simplemente estamos leyendo la palabra de Dios tal como es.\r
\r
Y si vamos a utilizar la Biblia para juzgar la intimidad de otras personas, creo que tenemos la obligación de estudiar qué dice, qué no dice y qué estamos agregando nosotros.\r
\r
### ¿Por qué algunas normas bíblicas nos parecen intocables y otras no?\r
\r
Hay algo que me parece todavía más difícil de ignorar.\r
\r
En la Biblia encontramos normas que hoy nos resultan profundamente problemáticas. Algunas regulan formas de esclavitud, otras tratan a las mujeres dentro de estructuras patriarcales y otras describen castigos violentos que muchas comunidades cristianas actuales no aceptarían como normas aplicables a nuestra sociedad.\r
\r
Por ejemplo, Éxodo 21:7 contempla la venta de una hija como sierva. Éxodo 21:20-21 establece disposiciones sobre la violencia ejercida contra esclavos. Deuteronomio 21:18-21 describe el procedimiento para castigar a un hijo considerado rebelde y contumaz. Y Deuteronomio 22 contiene leyes sobre relaciones sexuales, violación y matrimonio que reflejan estructuras sociales muy diferentes de las que hoy defendemos.\r
\r
Es importante precisar algo: no todos estos pasajes funcionan igual. Algunos regulan prácticas existentes, otros establecen castigos y otros narran acontecimientos violentos. Tampoco es correcto afirmar que la Biblia permita indiscriminadamente cualquier violación o que todas las tradiciones religiosas hayan interpretado esos textos de la misma manera.\r
\r
Pero la pregunta sigue ahí.\r
\r
¿Por qué tantas personas consideran que ciertas prohibiciones sexuales deben aplicarse literalmente, mientras que otras normas del mismo conjunto de textos se interpretan a la luz de su contexto histórico?\r
\r
¿Por qué podemos reconocer que algunas disposiciones reflejan las estructuras de su época, pero nos cuesta considerar esa misma posibilidad cuando hablamos del deseo y la diversidad sexual?\r
\r
Si aceptamos que nuestra comprensión moral ha cambiado en asuntos como la esclavitud, la igualdad entre hombres y mujeres y el castigo físico, ¿por qué no podemos examinar también nuestras interpretaciones de la sexualidad?\r
\r
No estoy diciendo que debamos desechar la Biblia. Estoy diciendo que leerla con responsabilidad exige algo más que encontrar un versículo que confirme lo que ya creemos.\r
\r
Exige hacernos preguntas incómodas.\r
\r
Y exige aceptar que, en ocasiones, nuestras interpretaciones pueden decir tanto de la sociedad en la que vivimos como del texto que estamos leyendo.\r
\r
## ¿Y si el problema no fuera nuestro cuerpo?\r
\r
Quiero volver al principio.\r
\r
En Génesis 1:27 encontramos una afirmación que millones de personas han escuchado desde la infancia: Dios creó al ser humano a su imagen y semejanza.\r
\r
<blockquote data-biblical="true" data-ref="Génesis 1:27">\r
Y crió Dios al hombre a su imagen, a imagen de Dios lo crió; varón y hembra los crió.\r
</blockquote>\r
\r
Y en Génesis 1:31, después de contemplar todo lo que había creado, el relato dice que Dios vio que era bueno en gran manera.\r
\r
Entonces, ¿en qué momento nuestro cuerpo pasó a convertirse en una fuente de vergüenza?\r
\r
Si fuimos creados con capacidad de sentir, ¿por qué sentir se convirtió en sospecha?\r
\r
Si fuimos creados con capacidad de desear, ¿por qué el deseo aparece tantas veces en nuestras conversaciones religiosas como una amenaza de la que debemos defendernos?\r
\r
Si somos imagen de Dios, ¿qué significa eso para nuestra relación con nosotros mismos?\r
\r
Quiero ser cuidadoso con algo: la expresión bíblica «imagen de Dios» no significa necesariamente que seamos copias exactas de Dios ni que todo impulso humano sea moralmente correcto. Dentro de la propia tradición cristiana existen distintas interpretaciones de esa imagen, y el libre albedrío tampoco resuelve por sí solo todas las preguntas sobre el deseo y la responsabilidad.\r
\r
Pero precisamente por eso me cuesta aceptar una explicación demasiado sencilla: que Dios nos creó con una naturaleza humana, que esa naturaleza incluye necesidades y deseos que no elegimos por completo y que, aun así, deberíamos sentirnos culpables por experimentarlos.\r
\r
¿No hay algo ahí que merece una reflexión más profunda?\r
\r
Porque una cosa es reconocer que nuestra libertad implica responsabilidad. Otra es utilizar esa responsabilidad para hacernos sentir culpables por características que no escogimos.\r
\r
Y si Dios nos creó con la capacidad de amar, sentir placer, establecer vínculos y experimentar emociones, no entiendo por qué deberíamos asumir que esas capacidades son malas por definición.\r
\r
Lo que hacemos con ellas importa. Cómo tratamos a otras personas importa. El daño que podemos causar importa.\r
\r
Pero **no veo cómo podemos construir una ética del amor mientras enseñamos a las personas a odiar partes de sí mismas que no han elegido.**\r
\r
## El Dios conveniente de nuestra propia narrativa\r
\r
Sé que esto va a incomodar a algunos de mis amigos cristianos o a mis tías católicas. Y sé que puede que algunos le quiten validez a mis palabras simplemente porque no coinciden con sus creencias.\r
\r
Pero quiero que nos detengamos un momento antes de hacer eso.\r
\r
Cuando encontramos información que contradice lo que creemos y la rechazamos sin examinarla, podemos estar cayendo en lo que se conoce como sesgo de confirmación: la tendencia a buscar, interpretar y aceptar con mayor facilidad aquello que confirma nuestras ideas previas.\r
\r
Esto nos puede pasar a todos. A mí también.\r
\r
Por eso no te estoy pidiendo que aceptés lo que digo porque lo digo yo. Te estoy invitando a que lo examinés, que busqués otras fuentes, que leas los textos y que te permitás hacer preguntas, incluso cuando las respuestas puedan incomodarte.\r
\r
Y si creés en Dios, quisiera invitarte a hacerte una pregunta más personal: ¿estás dispuesto a examinar la imagen que construiste de él?\r
\r
No me refiero a que tengás que abandonar tu fe ni a que debás aceptar mi manera de interpretar las cosas. Me refiero a algo mucho más sencillo y, al mismo tiempo, más difícil: **¿estás dispuesto a considerar que algunas de las ideas que te enseñaron sobre Dios podrían ser interpretaciones humanas y no necesariamente la voluntad de Dios?**\r
\r
Porque una cosa es Dios y otra es lo que las personas decimos en su nombre.\r
\r
Una cosa es la búsqueda espiritual y otra son las instituciones que pretenden tener la última palabra sobre ella.\r
\r
Una cosa es la conciencia y otra es la culpa que alguien puede enseñarnos a sentir para conseguir que obedezcamos.\r
\r
No sé si Dios me puso frente a estas preguntas. No voy a fingir que tengo esa respuesta. Pero sí creo que vale la pena preguntarnos qué hacemos cuando una idea nos incomoda: si la examinamos con honestidad o si la descartamos para proteger aquello que ya creemos.\r
\r
Y quiero decirte algo más: no creo que cuestionar a Dios sea necesariamente lo mismo que rechazarlo. A veces, cuestionamos precisamente porque nos importa encontrar una respuesta honesta.\r
\r
Lo que me preocupa es que terminemos defendiendo una imagen de Dios tan conveniente para nuestras propias certezas que ya no seamos capaces de distinguir entre la voz de nuestra conciencia y las ideas que otros nos enseñaron a repetir.\r
\r
Quizá el verdadero desafío no sea defender a Dios de nuestras preguntas, sino permitir que nuestras preguntas examinen la imagen que hemos construido de él.\r
\r
## Y esto también nos toca a nosotros\r
\r
No hace falta que seas religioso para que esta conversación te toque.\r
\r
Todos hemos aprendido, de una manera u otra, qué cosas podemos mostrar y cuáles debemos esconder para que los demás nos acepten.\r
\r
Tal vez nunca te sentiste culpable por tu sexualidad, pero sí por llorar cuando te dijeron que tenías que ser fuerte. Tal vez aprendiste que mostrar miedo era de débiles, que expresar tristeza era exagerar o que pedir ayuda significaba fracasar.\r
\r
Tal vez te enseñaron que debías sacrificarte siempre por los demás, incluso cuando eso significaba dejar de cuidarte a vos mismo.\r
\r
Son formas diferentes de una misma pregunta: ¿cuántas partes de nosotros estamos dispuestos a negar para que otros nos consideren personas dignas?\r
\r
Y cuando hablamos de sexualidad, esa pregunta puede tener consecuencias especialmente dolorosas.\r
\r
Pensemos en alguien que descubre que se siente atraído por una persona de su mismo sexo. Antes de poder comprender lo que siente, puede encontrarse preguntándose si Dios lo rechaza, si su familia dejará de amarlo o si tendrá que vivir escondiendo una parte importante de su vida.\r
\r
Pensemos en alguien que experimenta deseo sexual y siente que ha fallado espiritualmente, aunque no haya lastimado a nadie.\r
\r
Pensemos en una persona que pasa años tratando de apagar sus emociones porque le enseñaron que sentirlas era una señal de debilidad moral.\r
\r
¿Qué estamos haciendo cuando les pedimos a esas personas que se avergüencen de sí mismas antes de haber hecho daño a alguien?\r
\r
¿Estamos ayudándolas a vivir con responsabilidad, amor y honestidad? ¿O estamos enseñándoles a tenerle miedo a su propia humanidad?\r
\r
Y aquí es donde quiero volver a algo que considero fundamental: **no necesitamos convertir nuestros deseos en mandamientos, pero tampoco necesitamos convertirlos en enemigos.**\r
\r
Podemos sentir atracción sin creer que tenemos derecho sobre otra persona. Podemos experimentar placer y, al mismo tiempo, cuidar de nosotros y de quienes nos acompañan. Podemos amar a alguien sin que su género determine automáticamente el valor moral de esa relación.\r
\r
Podemos reconocer que no somos dueños de todo lo que sentimos y, aun así, hacernos responsables de nuestras decisiones.\r
\r
Eso, para mí, es mucho más interesante que vivir intentando demostrar que somos seres sin contradicciones.\r
\r
Porque somos humanos. Y ser humanos implica aprender, equivocarnos, reconocer el daño, reparar cuando sea posible y seguir creciendo.\r
\r
No necesitamos odiarnos para mejorar.\r
\r
## Reflexión para responder internamente\r
\r
Quiero terminar volviendo a la canción de Aurora.\r
\r
A esa pregunta sobre por qué nos dieron corazones que no entendemos, deseos que aparecen sin pedir permiso y una capacidad de sentir que a veces parece enfrentarnos con todo lo que nos enseñaron.\r
\r
No sé si existe un Dios que nos juzga por cada pensamiento, por cada deseo o por cada impulso que aparece dentro de nosotros. Tampoco pretendo resolver en una carta siglos de discusiones teológicas.\r
\r
Pero sí sé que la culpa puede convertirse en una carga muy pesada cuando aprendemos a sentirnos responsables de cosas que nunca elegimos.\r
\r
Y sé que muchas personas han sufrido intentando reconciliar lo que sienten con lo que les dijeron que debían sentir.\r
\r
Por eso quiero dejarte unas preguntas, no para que me des la razón, sino para que te las respondás con honestidad.\r
\r
¿Hay alguna parte de vos que has aprendido a odiar porque alguien te enseñó que Dios también la odiaba?\r
\r
¿Hay algún deseo, alguna emoción o alguna forma de amar que escondés por miedo a ser juzgado?\r
\r
¿Estás defendiendo una convicción porque la examinaste y la considerás justa, o porque te da miedo descubrir que podría estar equivocada?\r
\r
Y si creés en Dios, ¿serías capaz de contemplar la posibilidad de que el amor que atribuís a ese Dios sea más grande que las interpretaciones humanas con las que aprendiste a conocerlo?\r
\r
No tengo todas las respuestas. Pero me cuesta creer que un Dios que nos habría creado con capacidad de amar necesite que aprendamos a despreciarnos para demostrarle nuestra devoción.\r
\r
Me cuesta creer que la dignidad de una persona dependa de que nunca experimente un deseo que otros consideran inaceptable.\r
\r
Y me cuesta aceptar que la vergüenza sea el precio que debemos pagar por tener un cuerpo, sentir placer o descubrir que somos diferentes de lo que alguien esperaba.\r
\r
Quizá el diablo no sea el deseo. Quizá tampoco sea el cuerpo, el placer o aquello que todavía no comprendemos de nosotros mismos.\r
\r
Quizá el verdadero peligro aparezca cuando dejamos de cuestionar a quienes nos enseñan a sentir vergüenza, cuando confundimos la obediencia con la bondad y cuando terminamos haciendo daño a otros para defender una idea de pureza.\r
\r
No sé si el diablo es humano.\r
\r
Pero sí sé que **ser humano no debería ser una condena.**\r
\r
Y ahora quiero preguntarte algo.\r
\r
**¿Qué vas a hacer después de leer esto?**\r
\r
¿Vas a olvidarlo porque te incomodó? ¿Vas a buscar versículos bíblicos para refutar cada argumento y demostrarme que estoy equivocado? ¿Vas a cerrar esta carta pensando en cómo llevarme la contraria, sin detenerte siquiera a considerar si hay algo de verdad en lo que acabás de leer?\r
\r
Te lo pregunto porque es muy fácil leer algo que cuestiona nuestras creencias y convertirlo inmediatamente en una batalla que tenemos que ganar. Es más cómodo defender lo que ya creemos que detenernos a examinar por qué lo creemos.\r
\r
Pero no escribí esto para ganarte una discusión. No necesito que estés de acuerdo conmigo. Lo que quisiera es que, por un momento, dejaras a un lado la necesidad de tener la razón y te dieras la oportunidad de pensar.\r
\r
No busqués solamente aquello que confirme tus creencias. Preguntate también qué pasaría si alguna de tus certezas estuviera equivocada. Qué ideas has defendido sin cuestionar. Qué partes de vos has aprendido a rechazar. Qué personas has juzgado porque te enseñaron que Dios las juzgaba primero.\r
\r
**No leas esta carta pensando en cómo vas a refutarme. Leela preguntándote qué puede enseñarte, incluso si al final seguís pensando diferente.**\r
\r
Porque si después de leerla solamente encontrás argumentos para defender lo que ya creías, quizá no hayas reflexionado sobre lo que escribí. Quizá solamente hayas encontrado una manera de evitar la pregunta.\r
\r
Y yo no pretendo tener todas las respuestas. Pero ojalá estas palabras te dejen, al menos, una pregunta que no podás resolver simplemente buscando un versículo que te dé la razón.\r
\r
Una pregunta que te obligue a mirarte por dentro, a examinar tus convicciones y a preguntarte si aquello que defendés nace del amor, de la conciencia y de la reflexión, o del miedo a descubrir que podrías estar equivocado.\r
\r
**No tenés que darme la razón. Pero date la oportunidad de cuestionarte a vos mismo.**`,Mg=`---\r
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
Vos podés culiar y eso no te hace impuro ni menos sabio. No te hace menos digno de ser escuchado y enseñar.\r
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
Sino en preguntarnos qué hacemos con lo que aprendemos de él.`,_g=`---\r
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
`,Cg=`---\r
title: "Si matamos a todos los malos, ¿quedan los buenos?"\r
category: "Guerra"\r
secondaryCategory: "Paz · Sociedad"\r
tags: "Guerra, Paz, Jesús, Colombia, Justicia, Perdón, Enemigos"\r
excerpt: "Una conversación entre un padre y su hijo abre una pregunta enorme sobre la violencia en Colombia: ¿podemos vencer el mal sin convertirnos en aquello que combatimos?"\r
date: "2026-09-10"\r
readingTime: "9 min de lectura"\r
biblicalQuote: "Vuelve tu espada a su lugar; porque todos los que tomen espada, a espada perecerán."\r
biblicalReference: "Mateo 26:52"\r
biblicalContext: "En el huerto de Getsemaní, cuando uno de sus discípulos intenta defender a Jesús con una espada."\r
---\r
\r
—Papá, si matamos a todos los malos, ¿solo quedamos los buenos?\r
\r
—No, hijo. Solo quedaríamos los asesinos.\r
\r
Creo que esa pequeña conversación contiene una pregunta enorme.\r
\r
Porque cuando hablamos de guerra solemos dividir el mundo de una manera muy sencilla: **ellos son los malos y nosotros somos los buenos** .\r
\r
Y cuando hacemos esa división, matar al otro empieza a parecernos justificable.\r
\r
Si ellos matan, nosotros tenemos derecho a matar.\r
\r
Si ellos son violentos, nosotros tenemos derecho a ser más violentos.\r
\r
Si ellos hacen el mal, nosotros podemos hacerles algo todavía peor porque, supuestamente, lo hacemos por una causa justa.\r
\r
Pero ahí aparece una pregunta incómoda:\r
\r
## ¿En qué momento combatir el mal empieza a convertirnos en aquello que decimos combatir?\r
\r
El papa León XIV lo expresó recientemente de una manera muy fuerte en la Sagrada Familia:\r
\r
<blockquote>“No se puede creer en Jesús y al mismo tiempo promover la guerra o matar a inocentes”</blockquote>\r
\r
Y esto no debería sorprendernos, porque Jesús fue incluso más radical.\r
\r
En Mateo 26:52 , cuando uno de sus discípulos intenta defenderlo con una espada, Jesús le dice:\r
\r
<blockquote>“Vuelve tu espada a su lugar; porque todos los que tomen espada, a espada perecerán.”</blockquote>\r
\r
Jesús no está diciendo que el mal no exista.\r
\r
No está diciendo que debamos ser indiferentes frente a la injusticia.\r
\r
Está diciendo algo mucho más difícil:\r
\r
**Que no podemos construir el bien utilizando exactamente las mismas herramientas del mal.**\r
\r
Y quizás por eso, cuando Jesús habla de nuestros enemigos, no dice:\r
\r
<blockquote>“Destrúyelos”.</blockquote>\r
\r
Dice:\r
\r
<blockquote>“Amad a vuestros enemigos, haced bien a los que os aborrecen.”</blockquote>\r
\r
Y en Mateo llega todavía más lejos:\r
\r
<blockquote>“Amad a vuestros enemigos y orad por quienes os persiguen.”</blockquote>\r
\r
Esto puede parecernos ingenuo.\r
\r
¿Cómo vamos a amar a alguien que nos quiere hacer daño?\r
\r
Pero quizá Jesús no está hablando de sentir cariño por nuestro enemigo.\r
\r
Está hablando de negarnos a convertirnos en enemigos nosotros también.\r
\r
Porque es muy fácil amar a quien nos ama.\r
\r
Lo difícil es romper la cadena.\r
\r
## Y aquí quiero traer esto a Colombia\r
\r
Colombia sabe perfectamente lo que ocurre cuando una sociedad decide que la violencia es el camino para solucionar sus problemas.\r
\r
No estamos hablando de una posibilidad hipotética.\r
\r
**Ya estuvimos allí.**\r
\r
El informe ¡Basta Ya! del Centro Nacional de Memoria Histórica estimó que entre 1958 y 2012 aproximadamente **220.000 personas murieron como consecuencia del conflicto armado colombiano** .\r
\r
Y hay un dato todavía más doloroso:\r
\r
**el 81 % de esas víctimas eran civiles.**\r
\r
No eran los grandes responsables de la guerra.\r
\r
Eran personas comunes.\r
\r
Padres.\r
\r
Madres.\r
\r
Hijos.\r
\r
Campesinos.\r
\r
Personas que simplemente estaban viviendo en el lugar equivocado cuando otros decidieron que la violencia era la solución.\r
\r
La Comisión de la Verdad posteriormente estimó que entre 1985 y 2018 **450.664 personas perdieron la vida a causa del conflicto armado** , y advierte que, considerando el subregistro, el universo podría llegar a unas 800.000 víctimas.\r
\r
Entonces deberíamos preguntarnos:\r
\r
**¿Qué nos dejó tanta violencia?**\r
\r
¿Nos dejó paz?\r
\r
¿Nos dejó un país sin enemigos?\r
\r
¿Nos convirtió finalmente en “los buenos”?\r
\r
No.\r
\r
Nos dejó generaciones enteras marcadas por el miedo, el desplazamiento, las desapariciones, las masacres y el dolor.\r
\r
Porque la violencia tiene algo terrible:\r
\r
**rara vez termina donde comenzó.**\r
\r
Una persona mata a otra.\r
\r
La familia de esa persona busca venganza.\r
\r
La otra familia responde.\r
\r
Aparece otro grupo.\r
\r
Después otro.\r
\r
Y cada generación hereda una nueva razón para odiar.\r
\r
La sangre derramada se convierte en argumento para derramar más sangre.\r
\r
Y así, la violencia se convierte en una cadena.\r
\r
## Por eso me preocupa cuando empezamos a celebrar la muerte\r
\r
No importa si quien murió pertenecía a una guerrilla, a una banda criminal, a un grupo paramilitar o a cualquier otra organización.\r
\r
Podemos condenar sus actos.\r
\r
Podemos exigir justicia.\r
\r
Podemos pedir que quienes hacen daño sean detenidos y juzgados.\r
\r
Pero hay una diferencia enorme entre **hacer justicia y celebrar la muerte** .\r
\r
Porque cuando empezamos a mirar un cadáver y sentir satisfacción, algo dentro de nosotros también empieza a morir.\r
\r
Y creo que eso es especialmente delicado cuando viene desde quienes tienen el poder.\r
\r
Un ciudadano puede sentir rabia.\r
\r
Puede incluso pedir venganza.\r
\r
Pero un jefe de Estado tiene una responsabilidad diferente.\r
\r
Tiene el poder de las armas, de las instituciones y de la fuerza pública.\r
\r
Por eso deberíamos exigirle algo más que fuerza.\r
\r
**Deberíamos exigirle sabiduría.**\r
\r
No solamente que pueda derrotar a un enemigo, sino que pueda evitar crear diez enemigos nuevos.\r
\r
No solamente que pueda ganar una batalla, sino que pueda construir una paz que sobreviva a su gobierno.\r
\r
Porque exhibir cuerpos, convertir la muerte en espectáculo o presentar la eliminación del enemigo como una victoria moral puede hacer que olvidemos algo fundamental:\r
\r
**el muerto también fue un ser humano.**\r
\r
Y si somos cristianos, eso debería importarnos.\r
\r
Incluso cuando ese ser humano hizo cosas terribles.\r
\r
## Jesús no nos enseñó a preguntar quién merece nuestro amor\r
\r
Jesús hizo algo mucho más incómodo.\r
\r
Nos pidió amar precisamente a quienes creemos que no lo merecen.\r
\r
Porque ahí está la diferencia entre la justicia humana y el mensaje de Jesús.\r
\r
La lógica humana dice:\r
\r
<blockquote>“Me hiciste daño, entonces te devuelvo el daño.”</blockquote>\r
\r
Jesús dice:\r
\r
<blockquote>“No devuelvas mal por mal.”</blockquote>\r
\r
La lógica humana dice:\r
\r
<blockquote>“Si quieres paz, tienes que destruir a tus enemigos.”</blockquote>\r
\r
Jesús dice:\r
\r
<blockquote>“Bienaventurados los que trabajan por la paz.”</blockquote>\r
\r
La lógica humana dice:\r
\r
<blockquote>“Vence al enemigo.”</blockquote>\r
\r
Jesús dice:\r
\r
<blockquote>“Vence el mal con el bien.”</blockquote>\r
\r
Y quizás esta última frase sea la que más deberíamos llevarnos hoy.\r
\r
Porque Jesús no dice:\r
\r
<blockquote>“vence al malo.”</blockquote>\r
\r
Dice:\r
\r
<blockquote>“vence al mal.”</blockquote>\r
\r
Hay una diferencia enorme.\r
\r
Si nuestro objetivo es destruir personas, siempre tendremos un enemigo nuevo que destruir.\r
\r
Pero si nuestro objetivo es destruir el mal, entonces tenemos que preguntarnos cómo acabar con las condiciones que producen violencia, pobreza, exclusión, odio, corrupción, narcotráfico, fanatismo y desesperanza.\r
\r
Eso es mucho más difícil que disparar.\r
\r
Pero también es mucho más parecido a Jesús.\r
\r
## Y esto también nos toca a nosotros\r
\r
Es fácil escuchar todo esto y pensar:\r
\r
“Esto es para el presidente.”\r
\r
Pero no.\r
\r
También es para nosotros.\r
\r
Porque la guerra no empieza necesariamente con un fusil.\r
\r
A veces empieza en una conversación.\r
\r
Empieza cuando dejamos de ver al otro como persona.\r
\r
Cuando decimos:\r
\r
“Es un hijueputa.”\r
\r
“Es un guerrillero.”\r
\r
“Es un paraco.”\r
\r
“Es un comunista.”\r
\r
“Es un uribista.”\r
\r
“Es un petrista.”\r
\r
“Es un criminal.”\r
\r
“Es de los otros.”\r
\r
Y poco a poco dejamos de ver a una persona y empezamos a ver una etiqueta.\r
\r
Y cuando dejamos de ver personas, resulta mucho más fácil justificar que sufran.\r
\r
Por eso la pregunta del principio vuelve a aparecer:\r
\r
—Papá, si matamos a todos los malos, ¿solo quedan los buenos?\r
\r
—No hijo. **Solo quedaríamos los asesinos.**\r
\r
Porque el verdadero triunfo de la violencia no ocurre solamente cuando alguien muere.\r
\r
Ocurre cuando consigue convencernos de que matar al otro nos hace mejores.\r
\r
Y Jesús nos propone exactamente lo contrario.\r
\r
No vencer al odio con más odio.\r
\r
No vencer la violencia con más violencia.\r
\r
No convertirnos en aquello que combatimos.\r
\r
Sino algo muchísimo más difícil:\r
\r
**vencer el mal con el bien.**\r
\r
Quizás esa sea la verdadera paz que Colombia todavía está aprendiendo a construir.\r
\r
## Reflexión para responder internamente\r
\r
Para vos que estás leyendo esto y decidiste votar por una opción que propone la guerra como camino para recuperar la seguridad, quisiera dejarte una pregunta, no para que me la respondas a mí, sino para que te la respondas a vos mismo:\r
\r
**Si durante más de seis décadas Colombia ha intentado resolver la violencia mediante más violencia, y ese camino nos ha dejado cientos de miles de muertos, desplazados, desaparecidos y familias destruidas, ¿qué te hace pensar que esta vez el resultado será diferente?**\r
\r
Si la fórmula de **matar al enemigo para alcanzar la paz** no nos ha dado paz en más de 66 años de conflicto, ¿por qué crees que volver a utilizarla ahora sí va a funcionar?\r
\r
Jesús nos dejó una advertencia hace más de dos mil años:\r
\r
<blockquote>“Todos los que tomen espada, a espada perecerán.”</blockquote>\r
\r
Quizás, como seguidores de Jesús, deberíamos preguntarnos:\r
\r
**¿Cómo rompemos el ciclo que convierte a cada enemigo derrotado en el origen de un nuevo enemigo?**\r
\r
**Cada uno de esos cuerpos expuestos por el presidente eran padres, hijos, esposos, amigos. Cada uno de ellos tenía personas que los amaban y que, en este momento, están cargadas de rencor. La muerte de cada guerrillero creará varios guerrilleros más.**\r
\r
Colombia ya conoce el camino de la guerra.\r
\r
**Lo que todavía necesitamos aprender es el camino de la paz: aquel en el que cada guerrillero reinsertado a la sociedad es un guerrillero menos en la guerra y una persona más contribuyendo a construir la paz.**\r
\r
Siempre nos han inculcado que ser un buen católico o cristiano consiste en amar a Jesús. Pero poco se habla de que también consiste en **amar a Judas.**\r
`,Yg=`---\r
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
**¿Qué tan parecido al amor de Dios se siente el mundo cuando pasa por vos?**`,Hg={"el-diablo-es-humano":1691.19,"la-relatividad-de-la-religion":635.16,"mientras-mas-se-sabe-mas-se-sufre":988};function Qg(q){const T={},x=q.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);if(!x)return{meta:T,body:q.trim()};const p=x[1],E=x[2].trim();for(const z of p.split(/\r?\n/)){const C=z.indexOf(":");if(C===-1)continue;const H=z.slice(0,C).trim();let U=z.slice(C+1).trim();(U.startsWith('"')&&U.endsWith('"')||U.startsWith("'")&&U.endsWith("'"))&&(U=U.slice(1,-1)),T[H]=U}return{meta:T,body:E}}function Rg(q,T){if(T.size===0)return q;const x=E=>{const z=E.replace(/^\.\//,"");return T.get(z)??E};let p=q.replace(/(!\[.*?\]\()(\.\/[^)\s]+)(\))/g,(E,z,C,H)=>`${z}${x(C)}${H}`);return p=p.replace(/(src|srcset)=["'](\.\/[^"']+)["']/gi,(E,z,C)=>`${z}="${x(C)}"`),p}function Bg(q){return q.replace(/<[^>]+>/g," ").replace(/[#>*_`~-]/g," ").replace(/\[[^\]]*\]\([^)]*\)/g," ").trim().split(/\s+/).filter(Boolean).length}function Lg(q){const[T,x,p]=q.split("-").map(Number);return!T||!x||!p?q:new Date(T,x-1,p).toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})}const Gg=Object.assign({"/src/contenido/el-arte-de-escuchar-a-quien-piensa-distinto/carta.md":Og,"/src/contenido/el-diablo-es-humano/carta.md":jg,"/src/contenido/la-relatividad-de-la-religion/carta.md":Mg,"/src/contenido/mientras-mas-se-sabe-mas-se-sufre/carta.md":_g,"/src/contenido/si-matamos-a-todos-los-malos/carta.md":Cg,"/src/contenido/y-si-dios-se-revela-a-traves-de-lo-humano/carta.md":Yg,"/src/contenido/y-si-hemos-entendido-mal-el-amor-de-dios/carta.md":Ug}),Vg=Object.assign({});function Xg(){const q=new Map;for(const[T,x]of Object.entries(Vg)){const p=T.replace(/\\/g,"/").split("/"),E=p[3],z=p.slice(4).join("/");!E||!z||(q.has(E)||q.set(E,new Map),q.get(E).set(z,x.default))}return q}const Zg=Xg();function Jg(){const q=[];for(const[T,x]of Object.entries(Gg)){const E=T.replace(/\\/g,"/").split("/")[3];if(!E)continue;const{meta:z,body:C}=Qg(x),H=Zg.get(E)??new Map,U=Rg(C,H),$=(z.tags??"").split(",").map(G=>G.trim()).filter(Boolean),ye=z.biblicalQuote&&z.biblicalReference?{quote:z.biblicalQuote,reference:z.biblicalReference,context:z.biblicalContext||void 0}:void 0;q.push({slug:E,title:z.title??"",category:z.category??"Sociedad",secondaryCategory:z.secondaryCategory||void 0,tags:$,excerpt:z.excerpt??"",date:z.date??"",year:(z.date??"").slice(0,4),formattedDate:Lg(z.date??""),readingTime:z.readingTime??"",wordCount:Bg(U),biblicalQuote:ye,body:U,audioDuration:Hg[E]})}return q.sort((T,x)=>new Date(x.date).getTime()-new Date(T.date).getTime()),q.map((T,x)=>({...T,indexNumber:String(x+1).padStart(2,"0")}))}const ul=Jg(),Kg={Guerra:"Reflexiones sobre el conflicto, la violencia y sus costos humanos",Paz:"La búsqueda activa de reconciliación y convivencia serena",Fe:"Preguntas honestas sobre lo sagrado, la gracia y la trascendencia",Amor:"La entrega sincera, el desapego y los vínculos afectivos",Justicia:"La defensa de la verdad y la dignidad de los desamparados",Libertad:"La soberanía de la conciencia frente a la coerción",Familia:"Los lazos de origen, las memorias compartidas y el perdón mutuo",Sociedad:"Los desafíos comunes de nuestra convivencia contemporánea",Miedo:"El reconocimiento de la vulnerabilidad y el valor de resistir",Empatía:"El ejercicio de ponerse en los zapatos y el dolor de otro ser",Política:"La integridad moral por encima del partidismo y el poder"},eh=Object.entries(Kg).map(([q,T])=>({name:q,description:T,count:ul.filter(x=>x.category.toLowerCase()===q.toLowerCase()||x.tags.some(p=>p.toLowerCase()===q.toLowerCase())).length})),wg=te.lazy(()=>It(()=>import("./HomeView-c2A74lX-.js"),__vite__mapDeps([0,1,2,3,4,5])).then(q=>({default:q.HomeView}))),kg=te.lazy(()=>It(()=>import("./ArchiveView-DY4upIoW.js"),__vite__mapDeps([6,1,2,3,7,5])).then(q=>({default:q.ArchiveView}))),Fg=te.lazy(()=>It(()=>import("./LetterDetailView-CbXA_IBW.js"),__vite__mapDeps([8,1,3,7,9,4,5])).then(q=>({default:q.LetterDetailView}))),Wg=te.lazy(()=>It(()=>import("./AboutView-B9Hx-o2Q.js"),__vite__mapDeps([10,1,9,5])).then(q=>({default:q.AboutView})));function $g(){const q="cartas_que_quedan_theme",T=()=>typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",[x,p]=te.useState(()=>{if(typeof window<"u"){const S=localStorage.getItem(q);if(S==="dark"||S==="light")return S}return T()});te.useEffect(()=>{const S=document.documentElement;x==="dark"?S.classList.add("dark"):S.classList.remove("dark")},[x]),te.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const S=window.matchMedia("(prefers-color-scheme: dark)"),fe=se=>{const ha=localStorage.getItem(q);ha==="dark"||ha==="light"||p(se.matches?"dark":"light")};return S.addEventListener("change",fe),()=>S.removeEventListener("change",fe)},[]);const E=()=>{p(S=>{const fe=S==="light"?"dark":"light";return localStorage.setItem(q,fe),fe})},[z,C]=te.useState(()=>{if(typeof window<"u"){const S=localStorage.getItem("cartas_que_quedan_fontsize");if(S&&["sm","base","lg","xl"].includes(S))return S}return"base"}),H=S=>{C(S),localStorage.setItem("cartas_que_quedan_fontsize",S)},[U,$]=te.useState(!1),ye="/cartas/",G=S=>{const fe=ye.replace(/\/$/,"");let se=S;return fe&&se.startsWith(fe)&&(se=se.slice(fe.length)),se.startsWith("/")||(se=`/${se}`),se},M=S=>`${ye.replace(/\/$/,"")}${S}`||"/",ba=()=>{if(typeof window>"u")return{type:"home"};const S=G(window.location.pathname);if(S.startsWith("/carta/")){const fe=S.replace("/carta/","").replace(/\/$/,"");if(fe)return{type:"letter",slug:fe}}else if(S==="/archivo"||S.startsWith("/archivo")){const fe=new URLSearchParams(window.location.search),se=fe.get("categoria")||void 0,ha=fe.get("q")||void 0;return{type:"archive",category:se,search:ha}}else if(S==="/sobre"||S.startsWith("/sobre"))return{type:"about"};return{type:"home"}},[oe,ga]=te.useState(ba),X=(S,fe=!1)=>{let se="/";S.type==="archive"?se=S.category?`/archivo?categoria=${encodeURIComponent(S.category)}`:"/archivo":S.type==="letter"?se=`/carta/${S.slug}`:S.type==="about"&&(se="/sobre"),se=M(se),fe?window.history.replaceState({view:S},"",se):window.history.pushState({view:S},"",se),ga(S),window.scrollTo({top:0,behavior:"smooth"})};te.useEffect(()=>{const S=()=>{ga(ba())};return window.addEventListener("popstate",S),()=>window.removeEventListener("popstate",S)},[]),te.useEffect(()=>{oe.type!=="letter"&&U&&$(!1)},[oe,U]),te.useEffect(()=>{if(oe.type==="letter"){const S=ul.find(fe=>fe.slug===oe.slug);if(S){document.title=`${S.title} — Cartas que quedan`;return}}else if(oe.type==="archive"){document.title="Archivo de documentos — Cartas que quedan";return}else if(oe.type==="about"){document.title="Sobre el proyecto — Cartas que quedan";return}document.title="Cartas que quedan — Un archivo digital"},[oe]);const ua=oe.type==="letter"?ul.find(S=>S.slug===oe.slug)||ul[0]:null;return j.jsxs("div",{className:"min-h-screen flex flex-col bg-[#ece9e4] dark:bg-[#1c1b1b] text-[#211e1c] dark:text-[#ede7e0] transition-colors duration-200 selection:bg-[#b84e2a]/20 selection:text-[#211e1c] dark:selection:bg-[#cf6e4b]/30 dark:selection:text-[#ede7e0]",children:[!U&&j.jsx(Dg,{currentView:oe,onNavigate:S=>X(S),theme:x,onToggleTheme:E}),j.jsx("main",{className:"flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 md:px-8",children:j.jsxs(te.Suspense,{fallback:j.jsx("div",{className:"flex items-center justify-center py-32 text-[#8c8479] dark:text-[#7d756a]",role:"status","aria-live":"polite",children:j.jsx("span",{className:"font-serif text-sm tracking-wide animate-pulse",children:"Cargando…"})}),children:[oe.type==="home"&&j.jsx(wg,{letters:ul,onSelectLetter:S=>X({type:"letter",slug:S.slug}),onListenLetter:S=>X({type:"letter",slug:S.slug,autoplay:!0}),onNavigateArchive:S=>X({type:"archive",category:S}),onNavigateAbout:()=>X({type:"about"})}),oe.type==="archive"&&j.jsx(kg,{letters:ul,initialCategory:oe.category,initialSearch:oe.search,onSelectLetter:S=>X({type:"letter",slug:S.slug}),onListenLetter:S=>X({type:"letter",slug:S.slug,autoplay:!0})}),oe.type==="letter"&&ua&&j.jsx(Fg,{letter:ua,autoplayAudio:oe.autoplay===!0,allLetters:ul,onBackToArchive:()=>X({type:"archive"}),onSelectCategory:S=>X({type:"archive",category:S}),onSelectLetter:S=>X({type:"letter",slug:S.slug}),theme:x,onToggleTheme:E,fontSize:z,onChangeFontSize:H,isFocusMode:U,onToggleFocusMode:()=>$(S=>!S)}),oe.type==="about"&&j.jsx(Wg,{onBackToHome:()=>X({type:"home"}),onGoToArchive:()=>X({type:"archive"})})]})}),!U&&j.jsx(Ag,{onNavigate:S=>X(S)})]})}ug({immediate:!0});lg.createRoot(document.getElementById("root")).render(j.jsx(te.StrictMode,{children:j.jsx($g,{})}));export{eh as C,vg as M,Pf as O,gg as S,zg as X,eo as c};
