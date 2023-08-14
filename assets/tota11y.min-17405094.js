(function(){const P=document.createElement("link").relList;if(P&&P.supports&&P.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))v(h);new MutationObserver(h=>{for(const R of h)if(R.type==="childList")for(const W of R.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&v(W)}).observe(document,{childList:!0,subtree:!0});function x(h){const R={};return h.integrity&&(R.integrity=h.integrity),h.referrerPolicy&&(R.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?R.credentials="include":h.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function v(h){if(h.ep)return;h.ep=!0;const R=x(h);fetch(h.href,R)}})();/*!
 * tota11y v0.1.6
 * http://khan.github.io/tota11y
 * 
 * Includes Accessibility Developer Tools
 * http://github.com/GoogleChrome/accessibility-developer-tools
 * 
 * Copyright (c) 2015 Khan Academy
 * Released under the MIT license
 * http://github.com/Khan/tota11y/blob/master/LICENSE.txt
 * 
 * Date: 2016-10-03
 * 
 */(function(q){function P(v){if(x[v])return x[v].exports;var h=x[v]={exports:{},id:v,loaded:!1};return q[v].call(h.exports,h,h.exports,P),h.loaded=!0,h.exports}var x={};return P.m=q,P.c=x,P.p="",P(0)})([function(q,P,x){(function(v){function h(j,O){if(!(j instanceof O))throw new TypeError("Cannot call a class as a function")}var R=function(){function j(O,k){for(var _=0;_<k.length;_++){var u=k[_];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(O,u.key,u)}}return function(O,k,_){return k&&j(O.prototype,k),_&&j(O,_),O}}();x(43);var W=x(1),L=x(17),d=x(35);x(42);var F=function(){function j(){h(this,j),this.activePlugin=null}return R(j,[{key:"handlePluginClick",value:function(O){O===this.activePlugin?(O.deactivate(),this.activePlugin=null):(this.activePlugin&&this.activePlugin.deactivate(),O.activate(),this.activePlugin=O)}},{key:"appendTo",value:function(O){var k=this,_=W(d()),u=void 0,c=L.default.map(function(T){return v(T,{onClick:k.handlePluginClick.bind(k)})}),g=null;L.experimental.length&&(g=v("li",null,v("div",{className:"tota11y-plugins-separator"},"Experimental"),v("ul",null,L.experimental.map(function(T){return v(T,{onClick:k.handlePluginClick.bind(k)})}))));var A=v("ul",{className:"tota11y-plugins"},c,g),w=function(T){T.preventDefault(),T.stopPropagation(),u.toggleClass("tota11y-expanded"),u.attr("aria-expanded",u.is(".tota11y-expanded"))},D=v("button",{"aria-controls":"tota11y-toolbar",className:"tota11y-toolbar-toggle",onClick:w,"aria-label":"[tota11y] Toggle menu"},v("div",{"aria-hidden":"true",className:"tota11y-toolbar-logo"},_));u=v("div",{id:"tota11y-toolbar",className:"tota11y tota11y-toolbar",role:"region","aria-expanded":"false"},v("div",{className:"tota11y-toolbar-body"},A),D),O.append(u)}}]),j}();W(function(){var j=new F;j.appendTo(W("body"))})}).call(P,x(4))},function(q,P,x){var v,h;/*!
* jQuery JavaScript Library v2.2.4
* http://jquery.com/
*
* Includes Sizzle.js
* http://sizzlejs.com/
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2016-05-20T17:23Z
*/(function(R,W){typeof q=="object"&&typeof q.exports=="object"?q.exports=R.document?W(R,!0):function(L){if(!L.document)throw new Error("jQuery requires a window with a document");return W(L)}:W(R)})(typeof window<"u"?window:this,function(R,W){function L(e){var t=!!e&&"length"in e&&e.length,n=r.type(e);return n==="function"||r.isWindow(e)?!1:n==="array"||t===0||typeof t=="number"&&t>0&&t-1 in e}function d(e,t,n){if(r.isFunction(t))return r.grep(e,function(a,o){return!!t.call(a,o,a)!==n});if(t.nodeType)return r.grep(e,function(a){return a===t!==n});if(typeof t=="string"){if(Gn.test(t))return r.filter(t,e,n);t=r.filter(t,e)}return r.grep(e,function(a){return _t.call(t,a)>-1!==n})}function F(e,t){for(;(e=e[t])&&e.nodeType!==1;);return e}function j(e){var t={};return r.each(e.match(Ie)||[],function(n,a){t[a]=!0}),t}function O(){re.removeEventListener("DOMContentLoaded",O),R.removeEventListener("load",O),r.ready()}function k(){this.expando=r.expando+k.uid++}function _(e,t,n){var a;if(n===void 0&&e.nodeType===1)if(a="data-"+t.replace(cn,"-$&").toLowerCase(),n=e.getAttribute(a),typeof n=="string"){try{n=n==="true"?!0:n==="false"?!1:n==="null"?null:+n+""===n?+n:Kn.test(n)?r.parseJSON(n):n}catch{}xe.set(e,t,n)}else n=void 0;return n}function u(e,t,n,a){var o,i=1,s=20,p=a?function(){return a.cur()}:function(){return r.css(e,t,"")},y=p(),N=n&&n[3]||(r.cssNumber[t]?"":"px"),U=(r.cssNumber[t]||N!=="px"&&+y)&&ft.exec(r.css(e,t));if(U&&U[3]!==N){N=N||U[3],n=n||[],U=+y||1;do i=i||".5",U/=i,r.style(e,t,U+N);while(i!==(i=p()/y)&&i!==1&&--s)}return n&&(U=+U||+y||0,o=n[1]?U+(n[1]+1)*n[2]:+n[2],a&&(a.unit=N,a.start=U,a.end=o)),o}function c(e,t){var n=typeof e.getElementsByTagName<"u"?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll<"u"?e.querySelectorAll(t||"*"):[];return t===void 0||t&&r.nodeName(e,t)?r.merge([e],n):n}function g(e,t){for(var n=0,a=e.length;a>n;n++)te.set(e[n],"globalEval",!t||te.get(t[n],"globalEval"))}function A(e,t,n,a,o){for(var i,s,p,y,N,U,S=t.createDocumentFragment(),V=[],$=0,ie=e.length;ie>$;$++)if(i=e[$],i||i===0)if(r.type(i)==="object")r.merge(V,i.nodeType?[i]:i);else if(Jn.test(i)){for(s=s||S.appendChild(t.createElement("div")),p=(fn.exec(i)||["",""])[1].toLowerCase(),y=Ne[p]||Ne._default,s.innerHTML=y[1]+r.htmlPrefilter(i)+y[2],U=y[0];U--;)s=s.lastChild;r.merge(V,s.childNodes),s=S.firstChild,s.textContent=""}else V.push(t.createTextNode(i));for(S.textContent="",$=0;i=V[$++];)if(a&&r.inArray(i,a)>-1)o&&o.push(i);else if(N=r.contains(i.ownerDocument,i),s=c(S.appendChild(i),"script"),N&&g(s),n)for(U=0;i=s[U++];)gn.test(i.type||"")&&n.push(i);return S}function w(){return!0}function D(){return!1}function T(){try{return re.activeElement}catch{}}function b(e,t,n,a,o,i){var s,p;if(typeof t=="object"){typeof n!="string"&&(a=a||n,n=void 0);for(p in t)b(e,p,n,a,t[p],i);return e}if(a==null&&o==null?(o=n,a=n=void 0):o==null&&(typeof n=="string"?(o=a,a=void 0):(o=a,a=n,n=void 0)),o===!1)o=D;else if(!o)return e;return i===1&&(s=o,o=function(y){return r().off(y),s.apply(this,arguments)},o.guid=s.guid||(s.guid=r.guid++)),e.each(function(){r.event.add(this,t,o,a,n)})}function E(e,t){return r.nodeName(e,"table")&&r.nodeName(t.nodeType!==11?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function M(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function Y(e){var t=rr.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function ee(e,t){var n,a,o,i,s,p,y,N;if(t.nodeType===1){if(te.hasData(e)&&(i=te.access(e),s=te.set(t,i),N=i.events)){delete s.handle,s.events={};for(o in N)for(n=0,a=N[o].length;a>n;n++)r.event.add(t,o,N[o][n])}xe.hasData(e)&&(p=xe.access(e),y=r.extend({},p),xe.set(t,y))}}function ae(e,t){var n=t.nodeName.toLowerCase();n==="input"&&dn.test(e.type)?t.checked=e.checked:n!=="input"&&n!=="textarea"||(t.defaultValue=e.defaultValue)}function pe(e,t,n,a){t=rn.apply([],t);var o,i,s,p,y,N,U=0,S=e.length,V=S-1,$=t[0],ie=r.isFunction($);if(ie||S>1&&typeof $=="string"&&!fe.checkClone&&nr.test($))return e.each(function(le){var ue=e.eq(le);ie&&(t[0]=$.call(this,le,ue.html())),pe(ue,t,n,a)});if(S&&(o=A(t,e[0].ownerDocument,!1,e,a),i=o.firstChild,o.childNodes.length===1&&(o=i),i||a)){for(s=r.map(c(o,"script"),M),p=s.length;S>U;U++)y=o,U!==V&&(y=r.clone(y,!0,!0),p&&r.merge(s,c(y,"script"))),n.call(e[U],y,U);if(p)for(N=s[s.length-1].ownerDocument,r.map(s,Y),U=0;p>U;U++)y=s[U],gn.test(y.type||"")&&!te.access(y,"globalEval")&&r.contains(N,y)&&(y.src?r._evalUrl&&r._evalUrl(y.src):r.globalEval(y.textContent.replace(ar,"")))}return e}function be(e,t,n){for(var a,o=t?r.filter(t,e):e,i=0;(a=o[i])!=null;i++)n||a.nodeType!==1||r.cleanData(c(a)),a.parentNode&&(n&&r.contains(a.ownerDocument,a)&&g(c(a,"script")),a.parentNode.removeChild(a));return e}function ze(e,t){var n=r(t.createElement(e)).appendTo(t.body),a=r.css(n[0],"display");return n.detach(),a}function ut(e){var t=re,n=mn[e];return n||(n=ze(e,t),n!=="none"&&n||(St=(St||r("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=St[0].contentDocument,t.write(),t.close(),n=ze(e,t),St.detach()),mn[e]=n),n}function ke(e,t,n){var a,o,i,s,p=e.style;return n=n||kt(e),s=n?n.getPropertyValue(t)||n[t]:void 0,s!==""&&s!==void 0||r.contains(e.ownerDocument,e)||(s=r.style(e,t)),n&&!fe.pixelMarginRight()&&Ht.test(s)&&bn.test(t)&&(a=p.width,o=p.minWidth,i=p.maxWidth,p.minWidth=p.maxWidth=p.width=s,s=n.width,p.width=a,p.minWidth=o,p.maxWidth=i),s!==void 0?s+"":s}function rt(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function He(e){if(e in xn)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=yn.length;n--;)if(e=yn[n]+t,e in xn)return e}function ct(e,t,n){var a=ft.exec(t);return a?Math.max(0,a[2]-(n||0))+(a[3]||"px"):t}function Et(e,t,n,a,o){for(var i=n===(a?"border":"content")?4:t==="width"?1:0,s=0;4>i;i+=2)n==="margin"&&(s+=r.css(e,n+Je[i],!0,o)),a?(n==="content"&&(s-=r.css(e,"padding"+Je[i],!0,o)),n!=="margin"&&(s-=r.css(e,"border"+Je[i]+"Width",!0,o))):(s+=r.css(e,"padding"+Je[i],!0,o),n!=="padding"&&(s+=r.css(e,"border"+Je[i]+"Width",!0,o)));return s}function Kt(e,t,n){var a=!0,o=t==="width"?e.offsetWidth:e.offsetHeight,i=kt(e),s=r.css(e,"boxSizing",!1,i)==="border-box";if(0>=o||o==null){if(o=ke(e,t,i),(0>o||o==null)&&(o=e.style[t]),Ht.test(o))return o;a=s&&(fe.boxSizingReliable()||o===e.style[t]),o=parseFloat(o)||0}return o+Et(e,t,n||(s?"border":"content"),a,i)+"px"}function Jt(e,t){for(var n,a,o,i=[],s=0,p=e.length;p>s;s++)a=e[s],a.style&&(i[s]=te.get(a,"olddisplay"),n=a.style.display,t?(i[s]||n!=="none"||(a.style.display=""),a.style.display===""&&gt(a)&&(i[s]=te.access(a,"olddisplay",ut(a.nodeName)))):(o=gt(a),n==="none"&&o||te.set(a,"olddisplay",o?n:r.css(a,"display"))));for(s=0;p>s;s++)a=e[s],a.style&&(t&&a.style.display!=="none"&&a.style.display!==""||(a.style.display=t?i[s]||"":"none"));return e}function Ce(e,t,n,a,o){return new Ce.prototype.init(e,t,n,a,o)}function Zt(){return R.setTimeout(function(){it=void 0}),it=r.now()}function Ct(e,t){var n,a=0,o={height:e};for(t=t?1:0;4>a;a+=2-t)n=Je[a],o["margin"+n]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function Qt(e,t,n){for(var a,o=(Oe.tweeners[t]||[]).concat(Oe.tweeners["*"]),i=0,s=o.length;s>i;i++)if(a=o[i].call(n,t,e))return a}function Mn(e,t,n){var a,o,i,s,p,y,N,U,S=this,V={},$=e.style,ie=e.nodeType&&gt(e),le=te.get(e,"fxshow");n.queue||(p=r._queueHooks(e,"fx"),p.unqueued==null&&(p.unqueued=0,y=p.empty.fire,p.empty.fire=function(){p.unqueued||y()}),p.unqueued++,S.always(function(){S.always(function(){p.unqueued--,r.queue(e,"fx").length||p.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[$.overflow,$.overflowX,$.overflowY],N=r.css(e,"display"),U=N==="none"?te.get(e,"olddisplay")||ut(e.nodeName):N,U==="inline"&&r.css(e,"float")==="none"&&($.display="inline-block")),n.overflow&&($.overflow="hidden",S.always(function(){$.overflow=n.overflow[0],$.overflowX=n.overflow[1],$.overflowY=n.overflow[2]}));for(a in t)if(o=t[a],sr.exec(o)){if(delete t[a],i=i||o==="toggle",o===(ie?"hide":"show")){if(o!=="show"||!le||le[a]===void 0)continue;ie=!0}V[a]=le&&le[a]||r.style(e,a)}else N=void 0;if(r.isEmptyObject(V))(N==="none"?ut(e.nodeName):N)==="inline"&&($.display=N);else{le?"hidden"in le&&(ie=le.hidden):le=te.access(e,"fxshow",{}),i&&(le.hidden=!ie),ie?r(e).show():S.done(function(){r(e).hide()}),S.done(function(){var ue;te.remove(e,"fxshow");for(ue in V)r.style(e,ue,V[ue])});for(a in V)s=Qt(ie?le[a]:0,a,S),a in le||(le[a]=s.start,ie&&(s.end=s.start,s.start=a==="width"||a==="height"?1:0))}}function jn(e,t){var n,a,o,i,s;for(n in e)if(a=r.camelCase(n),o=t[a],i=e[n],r.isArray(i)&&(o=i[1],i=e[n]=i[0]),n!==a&&(e[a]=i,delete e[n]),s=r.cssHooks[a],s&&"expand"in s){i=s.expand(i),delete e[a];for(n in i)n in e||(e[n]=i[n],t[n]=o)}else t[a]=o}function Oe(e,t,n){var a,o,i=0,s=Oe.prefilters.length,p=r.Deferred().always(function(){delete y.elem}),y=function(){if(o)return!1;for(var S=it||Zt(),V=Math.max(0,N.startTime+N.duration-S),$=V/N.duration||0,ie=1-$,le=0,ue=N.tweens.length;ue>le;le++)N.tweens[le].run(ie);return p.notifyWith(e,[N,ie,V]),1>ie&&ue?V:(p.resolveWith(e,[N]),!1)},N=p.promise({elem:e,props:r.extend({},t),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},n),originalProperties:t,originalOptions:n,startTime:it||Zt(),duration:n.duration,tweens:[],createTween:function(S,V){var $=r.Tween(e,N.opts,S,V,N.opts.specialEasing[S]||N.opts.easing);return N.tweens.push($),$},stop:function(S){var V=0,$=S?N.tweens.length:0;if(o)return this;for(o=!0;$>V;V++)N.tweens[V].run(1);return S?(p.notifyWith(e,[N,1,0]),p.resolveWith(e,[N,S])):p.rejectWith(e,[N,S]),this}}),U=N.props;for(jn(U,N.opts.specialEasing);s>i;i++)if(a=Oe.prefilters[i].call(N,e,U,N.opts))return r.isFunction(a.stop)&&(r._queueHooks(N.elem,N.opts.queue).stop=r.proxy(a.stop,a)),a;return r.map(U,Qt,N),r.isFunction(N.opts.start)&&N.opts.start.call(e,N),r.fx.timer(r.extend(y,{elem:e,anim:N,queue:N.opts.queue})),N.progress(N.opts.progress).done(N.opts.done,N.opts.complete).fail(N.opts.fail).always(N.opts.always)}function Xe(e){return e.getAttribute&&e.getAttribute("class")||""}function en(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var a,o=0,i=t.toLowerCase().match(Ie)||[];if(r.isFunction(n))for(;a=i[o++];)a[0]==="+"?(a=a.slice(1)||"*",(e[a]=e[a]||[]).unshift(n)):(e[a]=e[a]||[]).push(n)}}function tn(e,t,n,a){function o(p){var y;return i[p]=!0,r.each(e[p]||[],function(N,U){var S=U(t,n,a);return typeof S!="string"||s||i[S]?s?!(y=S):void 0:(t.dataTypes.unshift(S),o(S),!1)}),y}var i={},s=e===Wt;return o(t.dataTypes[0])||!i["*"]&&o("*")}function Dt(e,t){var n,a,o=r.ajaxSettings.flatOptions||{};for(n in t)t[n]!==void 0&&((o[n]?e:a||(a={}))[n]=t[n]);return a&&r.extend(!0,e,a),e}function Hn(e,t,n){for(var a,o,i,s,p=e.contents,y=e.dataTypes;y[0]==="*";)y.shift(),a===void 0&&(a=e.mimeType||t.getResponseHeader("Content-Type"));if(a){for(o in p)if(p[o]&&p[o].test(a)){y.unshift(o);break}}if(y[0]in n)i=y[0];else{for(o in n){if(!y[0]||e.converters[o+" "+y[0]]){i=o;break}s||(s=o)}i=i||s}return i?(i!==y[0]&&y.unshift(i),n[i]):void 0}function qn(e,t,n,a){var o,i,s,p,y,N={},U=e.dataTypes.slice();if(U[1])for(s in e.converters)N[s.toLowerCase()]=e.converters[s];for(i=U.shift();i;)if(e.responseFields[i]&&(n[e.responseFields[i]]=t),!y&&a&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),y=i,i=U.shift()){if(i==="*")i=y;else if(y!=="*"&&y!==i){if(s=N[y+" "+i]||N["* "+i],!s){for(o in N)if(p=o.split(" "),p[1]===i&&(s=N[y+" "+p[0]]||N["* "+p[0]])){s===!0?s=N[o]:N[o]!==!0&&(i=p[0],U.unshift(p[1]));break}}if(s!==!0)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(S){return{state:"parsererror",error:s?S:"No conversion from "+y+" to "+i}}}}return{state:"success",data:t}}function Mt(e,t,n,a){var o;if(r.isArray(t))r.each(t,function(i,s){n||yr.test(e)?a(e,s):Mt(e+"["+(typeof s=="object"&&s!=null?i:"")+"]",s,n,a)});else if(n||r.type(t)!=="object")a(e,t);else for(o in t)Mt(e+"["+o+"]",t[o],n,a)}function nn(e){return r.isWindow(e)?e:e.nodeType===9&&e.defaultView}var Ke=[],re=R.document,Ve=Ke.slice,rn=Ke.concat,jt=Ke.push,_t=Ke.indexOf,Tt={},Fn=Tt.toString,pt=Tt.hasOwnProperty,fe={},an="2.2.4",r=function(e,t){return new r.fn.init(e,t)},Bn=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,Un=/^-ms-/,Wn=/-([\da-z])/gi,Vn=function(e,t){return t.toUpperCase()};r.fn=r.prototype={jquery:an,constructor:r,selector:"",length:0,toArray:function(){return Ve.call(this)},get:function(e){return e!=null?0>e?this[e+this.length]:this[e]:Ve.call(this)},pushStack:function(e){var t=r.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return r.each(this,e)},map:function(e){return this.pushStack(r.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Ve.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:jt,sort:Ke.sort,splice:Ke.splice},r.extend=r.fn.extend=function(){var e,t,n,a,o,i,s=arguments[0]||{},p=1,y=arguments.length,N=!1;for(typeof s=="boolean"&&(N=s,s=arguments[p]||{},p++),typeof s=="object"||r.isFunction(s)||(s={}),p===y&&(s=this,p--);y>p;p++)if((e=arguments[p])!=null)for(t in e)n=s[t],a=e[t],s!==a&&(N&&a&&(r.isPlainObject(a)||(o=r.isArray(a)))?(o?(o=!1,i=n&&r.isArray(n)?n:[]):i=n&&r.isPlainObject(n)?n:{},s[t]=r.extend(N,i,a)):a!==void 0&&(s[t]=a));return s},r.extend({expando:"jQuery"+(an+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return r.type(e)==="function"},isArray:Array.isArray,isWindow:function(e){return e!=null&&e===e.window},isNumeric:function(e){var t=e&&e.toString();return!r.isArray(e)&&t-parseFloat(t)+1>=0},isPlainObject:function(e){var t;if(r.type(e)!=="object"||e.nodeType||r.isWindow(e)||e.constructor&&!pt.call(e,"constructor")&&!pt.call(e.constructor.prototype||{},"isPrototypeOf"))return!1;for(t in e);return t===void 0||pt.call(e,t)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?Tt[Fn.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=r.trim(e),e&&(e.indexOf("use strict")===1?(t=re.createElement("script"),t.text=e,re.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(Un,"ms-").replace(Wn,Vn)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,a=0;if(L(e))for(n=e.length;n>a&&t.call(e[a],a,e[a])!==!1;a++);else for(a in e)if(t.call(e[a],a,e[a])===!1)break;return e},trim:function(e){return e==null?"":(e+"").replace(Bn,"")},makeArray:function(e,t){var n=t||[];return e!=null&&(L(Object(e))?r.merge(n,typeof e=="string"?[e]:e):jt.call(n,e)),n},inArray:function(e,t,n){return t==null?-1:_t.call(t,e,n)},merge:function(e,t){for(var n=+t.length,a=0,o=e.length;n>a;a++)e[o++]=t[a];return e.length=o,e},grep:function(e,t,n){for(var a,o=[],i=0,s=e.length,p=!n;s>i;i++)a=!t(e[i],i),a!==p&&o.push(e[i]);return o},map:function(e,t,n){var a,o,i=0,s=[];if(L(e))for(a=e.length;a>i;i++)o=t(e[i],i,n),o!=null&&s.push(o);else for(i in e)o=t(e[i],i,n),o!=null&&s.push(o);return rn.apply([],s)},guid:1,proxy:function(e,t){var n,a,o;return typeof t=="string"&&(n=e[t],t=e,e=n),r.isFunction(e)?(a=Ve.call(arguments,2),o=function(){return e.apply(t||this,a.concat(Ve.call(arguments)))},o.guid=e.guid=e.guid||r.guid++,o):void 0},now:Date.now,support:fe}),typeof Symbol=="function"&&(r.fn[Symbol.iterator]=Ke[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){Tt["[object "+t+"]"]=t.toLowerCase()});var at=function(e){function t(l,f,m,I){var C,B,H,G,K,ne,J,Q,oe=f&&f.ownerDocument,ce=f?f.nodeType:9;if(m=m||[],typeof l!="string"||!l||ce!==1&&ce!==9&&ce!==11)return m;if(!I&&((f?f.ownerDocument||f:Me)!==se&&ve(f),f=f||se,De)){if(ce!==11&&(ne=Mr.exec(l)))if(C=ne[1]){if(ce===9){if(!(H=f.getElementById(C)))return m;if(H.id===C)return m.push(H),m}else if(oe&&(H=oe.getElementById(C))&&yt(f,H)&&H.id===C)return m.push(H),m}else{if(ne[2])return $e.apply(m,f.getElementsByTagName(l)),m;if((C=ne[3])&&X.getElementsByClassName&&f.getElementsByClassName)return $e.apply(m,f.getElementsByClassName(C)),m}if(X.qsa&&!It[l+" "]&&(!we||!we.test(l))){if(ce!==1)oe=f,Q=l;else if(f.nodeName.toLowerCase()!=="object"){for((G=f.getAttribute("id"))?G=G.replace(jr,"\\$&"):f.setAttribute("id",G=ge),J=Ze(l),B=J.length,K=Pn.test(G)?"#"+G:"[id='"+G+"']";B--;)J[B]=K+" "+V(J[B]);Q=J.join(","),oe=Xt.test(l)&&U(f.parentNode)||f}if(Q)try{return $e.apply(m,oe.querySelectorAll(Q)),m}catch{}finally{G===ge&&f.removeAttribute("id")}}}return lt(l.replace(Lt,"$1"),f,m,I)}function n(){function l(m,I){return f.push(m+" ")>z.cacheLength&&delete l[f.shift()],l[m+" "]=I}var f=[];return l}function a(l){return l[ge]=!0,l}function o(l){var f=se.createElement("div");try{return!!l(f)}catch{return!1}finally{f.parentNode&&f.parentNode.removeChild(f),f=null}}function i(l,f){for(var m=l.split("|"),I=m.length;I--;)z.attrHandle[m[I]]=f}function s(l,f){var m=f&&l,I=m&&l.nodeType===1&&f.nodeType===1&&(~f.sourceIndex||On)-(~l.sourceIndex||On);if(I)return I;if(m){for(;m=m.nextSibling;)if(m===f)return-1}return l?1:-1}function p(l){return function(f){var m=f.nodeName.toLowerCase();return m==="input"&&f.type===l}}function y(l){return function(f){var m=f.nodeName.toLowerCase();return(m==="input"||m==="button")&&f.type===l}}function N(l){return a(function(f){return f=+f,a(function(m,I){for(var C,B=l([],m.length,f),H=B.length;H--;)m[C=B[H]]&&(m[C]=!(I[C]=m[C]))})})}function U(l){return l&&typeof l.getElementsByTagName<"u"&&l}function S(){}function V(l){for(var f=0,m=l.length,I="";m>f;f++)I+=l[f].value;return I}function $(l,f,m){var I=f.dir,C=m&&I==="parentNode",B=_r++;return f.first?function(H,G,K){for(;H=H[I];)if(H.nodeType===1||C)return l(H,G,K)}:function(H,G,K){var ne,J,Q,oe=[Be,B];if(K){for(;H=H[I];)if((H.nodeType===1||C)&&l(H,G,K))return!0}else for(;H=H[I];)if(H.nodeType===1||C){if(Q=H[ge]||(H[ge]={}),J=Q[H.uniqueID]||(Q[H.uniqueID]={}),(ne=J[I])&&ne[0]===Be&&ne[1]===B)return oe[2]=ne[2];if(J[I]=oe,oe[2]=l(H,G,K))return!0}}}function ie(l){return l.length>1?function(f,m,I){for(var C=l.length;C--;)if(!l[C](f,m,I))return!1;return!0}:l[0]}function le(l,f,m){for(var I=0,C=f.length;C>I;I++)t(l,f[I],m);return m}function ue(l,f,m,I,C){for(var B,H=[],G=0,K=l.length,ne=f!=null;K>G;G++)(B=l[G])&&(m&&!m(B,I,C)||(H.push(B),ne&&f.push(G)));return H}function Ge(l,f,m,I,C,B){return I&&!I[ge]&&(I=Ge(I)),C&&!C[ge]&&(C=Ge(C,B)),a(function(H,G,K,ne){var J,Q,oe,ce=[],Z=[],ye=G.length,Ae=H||le(f||"*",K.nodeType?[K]:K,[]),Re=!l||!H&&f?Ae:ue(Ae,ce,l,K,ne),me=m?C||(H?l:ye||I)?[]:G:Re;if(m&&m(Re,me,K,ne),I)for(J=ue(me,Z),I(J,[],K,ne),Q=J.length;Q--;)(oe=J[Q])&&(me[Z[Q]]=!(Re[Z[Q]]=oe));if(H){if(C||l){if(C){for(J=[],Q=me.length;Q--;)(oe=me[Q])&&J.push(Re[Q]=oe);C(null,me=[],J,ne)}for(Q=me.length;Q--;)(oe=me[Q])&&(J=C?tt(H,oe):ce[Q])>-1&&(H[J]=!(G[J]=oe))}}else me=ue(me===G?me.splice(ye,me.length):me),C?C(null,G,me,ne):$e.apply(G,me)})}function st(l){for(var f,m,I,C=l.length,B=z.relative[l[0].type],H=B||z.relative[" "],G=B?1:0,K=$(function(Q){return Q===f},H,!0),ne=$(function(Q){return tt(f,Q)>-1},H,!0),J=[function(Q,oe,ce){var Z=!B&&(ce||oe!==je)||((f=oe).nodeType?K(Q,oe,ce):ne(Q,oe,ce));return f=null,Z}];C>G;G++)if(m=z.relative[l[G].type])J=[$(ie(J),m)];else{if(m=z.filter[l[G].type].apply(null,l[G].matches),m[ge]){for(I=++G;C>I&&!z.relative[l[I].type];I++);return Ge(G>1&&ie(J),G>1&&V(l.slice(0,G-1).concat({value:l[G-2].type===" "?"*":""})).replace(Lt,"$1"),m,I>G&&st(l.slice(G,I)),C>I&&st(l=l.slice(I)),C>I&&V(l))}J.push(m)}return ie(J)}function _e(l,f){var m=f.length>0,I=l.length>0,C=function(B,H,G,K,ne){var J,Q,oe,ce=0,Z="0",ye=B&&[],Ae=[],Re=je,me=B||I&&z.find.TAG("*",ne),wt=Be+=Re==null?1:Math.random()||.1,At=me.length;for(ne&&(je=H===se||H||ne);Z!==At&&(J=me[Z])!=null;Z++){if(I&&J){for(Q=0,H||J.ownerDocument===se||(ve(J),G=!De);oe=l[Q++];)if(oe(J,H||se,G)){K.push(J);break}ne&&(Be=wt)}m&&((J=!oe&&J)&&ce--,B&&ye.push(J))}if(ce+=Z,m&&Z!==ce){for(Q=0;oe=f[Q++];)oe(ye,Ae,H,G);if(B){if(ce>0)for(;Z--;)ye[Z]||Ae[Z]||(Ae[Z]=Rr.call(K));Ae=ue(Ae)}$e.apply(K,Ae),ne&&!B&&Ae.length>0&&ce+f.length>1&&t.uniqueSort(K)}return ne&&(Be=wt,je=Re),ye};return m?a(C):C}var Fe,X,z,he,Ye,Ze,Le,lt,je,Ee,Te,ve,se,Pe,De,we,Qe,Ot,yt,ge="sizzle"+1*new Date,Me=e.document,Be=0,_r=0,kn=n(),Nn=n(),It=n(),Yt=function(l,f){return l===f&&(Te=!0),0},On=1<<31,Tr={}.hasOwnProperty,et=[],Rr=et.pop,Sr=et.push,$e=et.push,In=et.slice,tt=function(l,f){for(var m=0,I=l.length;I>m;m++)if(l[m]===f)return m;return-1},$t="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",de="[\\x20\\t\\r\\n\\f]",nt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",Ln="\\["+de+"*("+nt+")(?:"+de+"*([*^$|!~]?=)"+de+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+nt+"))|)"+de+"*\\]",zt=":("+nt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ln+")*)|.*)\\)|)",kr=new RegExp(de+"+","g"),Lt=new RegExp("^"+de+"+|((?:^|[^\\\\])(?:\\\\.)*)"+de+"+$","g"),Nr=new RegExp("^"+de+"*,"+de+"*"),Or=new RegExp("^"+de+"*([>+~]|"+de+")"+de+"*"),Ir=new RegExp("="+de+`*([^\\]'"]*?)`+de+"*\\]","g"),Lr=new RegExp(zt),Pn=new RegExp("^"+nt+"$"),Pt={ID:new RegExp("^#("+nt+")"),CLASS:new RegExp("^\\.("+nt+")"),TAG:new RegExp("^("+nt+"|[*])"),ATTR:new RegExp("^"+Ln),PSEUDO:new RegExp("^"+zt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+de+"*(even|odd|(([+-]|)(\\d*)n|)"+de+"*(?:([+-]|)"+de+"*(\\d+)|))"+de+"*\\)|)","i"),bool:new RegExp("^(?:"+$t+")$","i"),needsContext:new RegExp("^"+de+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+de+"*((?:-\\d)?\\d*)"+de+"*\\)|)(?=[^-]|$)","i")},Pr=/^(?:input|select|textarea|button)$/i,Dr=/^h\d$/i,xt=/^[^{]+\{\s*\[native \w/,Mr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Xt=/[+~]/,jr=/'|\\/g,Ue=new RegExp("\\\\([\\da-f]{1,6}"+de+"?|("+de+")|.)","ig"),We=function(l,f,m){var I="0x"+f-65536;return I!==I||m?f:0>I?String.fromCharCode(I+65536):String.fromCharCode(I>>10|55296,1023&I|56320)},Dn=function(){ve()};try{$e.apply(et=In.call(Me.childNodes),Me.childNodes),et[Me.childNodes.length].nodeType}catch{$e={apply:et.length?function(f,m){Sr.apply(f,In.call(m))}:function(f,m){for(var I=f.length,C=0;f[I++]=m[C++];);f.length=I-1}}}X=t.support={},Ye=t.isXML=function(l){var f=l&&(l.ownerDocument||l).documentElement;return f?f.nodeName!=="HTML":!1},ve=t.setDocument=function(l){var f,m,I=l?l.ownerDocument||l:Me;return I!==se&&I.nodeType===9&&I.documentElement&&(se=I,Pe=se.documentElement,De=!Ye(se),(m=se.defaultView)&&m.top!==m&&(m.addEventListener?m.addEventListener("unload",Dn,!1):m.attachEvent&&m.attachEvent("onunload",Dn)),X.attributes=o(function(C){return C.className="i",!C.getAttribute("className")}),X.getElementsByTagName=o(function(C){return C.appendChild(se.createComment("")),!C.getElementsByTagName("*").length}),X.getElementsByClassName=xt.test(se.getElementsByClassName),X.getById=o(function(C){return Pe.appendChild(C).id=ge,!se.getElementsByName||!se.getElementsByName(ge).length}),X.getById?(z.find.ID=function(C,B){if(typeof B.getElementById<"u"&&De){var H=B.getElementById(C);return H?[H]:[]}},z.filter.ID=function(C){var B=C.replace(Ue,We);return function(H){return H.getAttribute("id")===B}}):(delete z.find.ID,z.filter.ID=function(C){var B=C.replace(Ue,We);return function(H){var G=typeof H.getAttributeNode<"u"&&H.getAttributeNode("id");return G&&G.value===B}}),z.find.TAG=X.getElementsByTagName?function(C,B){return typeof B.getElementsByTagName<"u"?B.getElementsByTagName(C):X.qsa?B.querySelectorAll(C):void 0}:function(C,B){var H,G=[],K=0,ne=B.getElementsByTagName(C);if(C==="*"){for(;H=ne[K++];)H.nodeType===1&&G.push(H);return G}return ne},z.find.CLASS=X.getElementsByClassName&&function(C,B){return typeof B.getElementsByClassName<"u"&&De?B.getElementsByClassName(C):void 0},Qe=[],we=[],(X.qsa=xt.test(se.querySelectorAll))&&(o(function(C){Pe.appendChild(C).innerHTML="<a id='"+ge+"'></a><select id='"+ge+"-\r\\' msallowcapture=''><option selected=''></option></select>",C.querySelectorAll("[msallowcapture^='']").length&&we.push("[*^$]="+de+`*(?:''|"")`),C.querySelectorAll("[selected]").length||we.push("\\["+de+"*(?:value|"+$t+")"),C.querySelectorAll("[id~="+ge+"-]").length||we.push("~="),C.querySelectorAll(":checked").length||we.push(":checked"),C.querySelectorAll("a#"+ge+"+*").length||we.push(".#.+[+~]")}),o(function(C){var B=se.createElement("input");B.setAttribute("type","hidden"),C.appendChild(B).setAttribute("name","D"),C.querySelectorAll("[name=d]").length&&we.push("name"+de+"*[*^$|!~]?="),C.querySelectorAll(":enabled").length||we.push(":enabled",":disabled"),C.querySelectorAll("*,:x"),we.push(",.*:")})),(X.matchesSelector=xt.test(Ot=Pe.matches||Pe.webkitMatchesSelector||Pe.mozMatchesSelector||Pe.oMatchesSelector||Pe.msMatchesSelector))&&o(function(C){X.disconnectedMatch=Ot.call(C,"div"),Ot.call(C,"[s!='']:x"),Qe.push("!=",zt)}),we=we.length&&new RegExp(we.join("|")),Qe=Qe.length&&new RegExp(Qe.join("|")),f=xt.test(Pe.compareDocumentPosition),yt=f||xt.test(Pe.contains)?function(C,B){var H=C.nodeType===9?C.documentElement:C,G=B&&B.parentNode;return C===G||!(!G||G.nodeType!==1||!(H.contains?H.contains(G):C.compareDocumentPosition&&16&C.compareDocumentPosition(G)))}:function(C,B){if(B){for(;B=B.parentNode;)if(B===C)return!0}return!1},Yt=f?function(C,B){if(C===B)return Te=!0,0;var H=!C.compareDocumentPosition-!B.compareDocumentPosition;return H||(H=(C.ownerDocument||C)===(B.ownerDocument||B)?C.compareDocumentPosition(B):1,1&H||!X.sortDetached&&B.compareDocumentPosition(C)===H?C===se||C.ownerDocument===Me&&yt(Me,C)?-1:B===se||B.ownerDocument===Me&&yt(Me,B)?1:Ee?tt(Ee,C)-tt(Ee,B):0:4&H?-1:1)}:function(C,B){if(C===B)return Te=!0,0;var H,G=0,K=C.parentNode,ne=B.parentNode,J=[C],Q=[B];if(!K||!ne)return C===se?-1:B===se?1:K?-1:ne?1:Ee?tt(Ee,C)-tt(Ee,B):0;if(K===ne)return s(C,B);for(H=C;H=H.parentNode;)J.unshift(H);for(H=B;H=H.parentNode;)Q.unshift(H);for(;J[G]===Q[G];)G++;return G?s(J[G],Q[G]):J[G]===Me?-1:Q[G]===Me?1:0}),se},t.matches=function(l,f){return t(l,null,null,f)},t.matchesSelector=function(l,f){if((l.ownerDocument||l)!==se&&ve(l),f=f.replace(Ir,"='$1']"),X.matchesSelector&&De&&!It[f+" "]&&(!Qe||!Qe.test(f))&&(!we||!we.test(f)))try{var m=Ot.call(l,f);if(m||X.disconnectedMatch||l.document&&l.document.nodeType!==11)return m}catch{}return t(f,se,null,[l]).length>0},t.contains=function(l,f){return(l.ownerDocument||l)!==se&&ve(l),yt(l,f)},t.attr=function(l,f){(l.ownerDocument||l)!==se&&ve(l);var m=z.attrHandle[f.toLowerCase()],I=m&&Tr.call(z.attrHandle,f.toLowerCase())?m(l,f,!De):void 0;return I!==void 0?I:X.attributes||!De?l.getAttribute(f):(I=l.getAttributeNode(f))&&I.specified?I.value:null},t.error=function(l){throw new Error("Syntax error, unrecognized expression: "+l)},t.uniqueSort=function(l){var f,m=[],I=0,C=0;if(Te=!X.detectDuplicates,Ee=!X.sortStable&&l.slice(0),l.sort(Yt),Te){for(;f=l[C++];)f===l[C]&&(I=m.push(C));for(;I--;)l.splice(m[I],1)}return Ee=null,l},he=t.getText=function(l){var f,m="",I=0,C=l.nodeType;if(C){if(C===1||C===9||C===11){if(typeof l.textContent=="string")return l.textContent;for(l=l.firstChild;l;l=l.nextSibling)m+=he(l)}else if(C===3||C===4)return l.nodeValue}else for(;f=l[I++];)m+=he(f);return m},z=t.selectors={cacheLength:50,createPseudo:a,match:Pt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(l){return l[1]=l[1].replace(Ue,We),l[3]=(l[3]||l[4]||l[5]||"").replace(Ue,We),l[2]==="~="&&(l[3]=" "+l[3]+" "),l.slice(0,4)},CHILD:function(l){return l[1]=l[1].toLowerCase(),l[1].slice(0,3)==="nth"?(l[3]||t.error(l[0]),l[4]=+(l[4]?l[5]+(l[6]||1):2*(l[3]==="even"||l[3]==="odd")),l[5]=+(l[7]+l[8]||l[3]==="odd")):l[3]&&t.error(l[0]),l},PSEUDO:function(l){var f,m=!l[6]&&l[2];return Pt.CHILD.test(l[0])?null:(l[3]?l[2]=l[4]||l[5]||"":m&&Lr.test(m)&&(f=Ze(m,!0))&&(f=m.indexOf(")",m.length-f)-m.length)&&(l[0]=l[0].slice(0,f),l[2]=m.slice(0,f)),l.slice(0,3))}},filter:{TAG:function(l){var f=l.replace(Ue,We).toLowerCase();return l==="*"?function(){return!0}:function(m){return m.nodeName&&m.nodeName.toLowerCase()===f}},CLASS:function(l){var f=kn[l+" "];return f||(f=new RegExp("(^|"+de+")"+l+"("+de+"|$)"))&&kn(l,function(m){return f.test(typeof m.className=="string"&&m.className||typeof m.getAttribute<"u"&&m.getAttribute("class")||"")})},ATTR:function(l,f,m){return function(I){var C=t.attr(I,l);return C==null?f==="!=":f?(C+="",f==="="?C===m:f==="!="?C!==m:f==="^="?m&&C.indexOf(m)===0:f==="*="?m&&C.indexOf(m)>-1:f==="$="?m&&C.slice(-m.length)===m:f==="~="?(" "+C.replace(kr," ")+" ").indexOf(m)>-1:f==="|="?C===m||C.slice(0,m.length+1)===m+"-":!1):!0}},CHILD:function(l,f,m,I,C){var B=l.slice(0,3)!=="nth",H=l.slice(-4)!=="last",G=f==="of-type";return I===1&&C===0?function(K){return!!K.parentNode}:function(K,ne,J){var Q,oe,ce,Z,ye,Ae,Re=B!==H?"nextSibling":"previousSibling",me=K.parentNode,wt=G&&K.nodeName.toLowerCase(),At=!J&&!G,Se=!1;if(me){if(B){for(;Re;){for(Z=K;Z=Z[Re];)if(G?Z.nodeName.toLowerCase()===wt:Z.nodeType===1)return!1;Ae=Re=l==="only"&&!Ae&&"nextSibling"}return!0}if(Ae=[H?me.firstChild:me.lastChild],H&&At){for(Z=me,ce=Z[ge]||(Z[ge]={}),oe=ce[Z.uniqueID]||(ce[Z.uniqueID]={}),Q=oe[l]||[],ye=Q[0]===Be&&Q[1],Se=ye&&Q[2],Z=ye&&me.childNodes[ye];Z=++ye&&Z&&Z[Re]||(Se=ye=0)||Ae.pop();)if(Z.nodeType===1&&++Se&&Z===K){oe[l]=[Be,ye,Se];break}}else if(At&&(Z=K,ce=Z[ge]||(Z[ge]={}),oe=ce[Z.uniqueID]||(ce[Z.uniqueID]={}),Q=oe[l]||[],ye=Q[0]===Be&&Q[1],Se=ye),Se===!1)for(;(Z=++ye&&Z&&Z[Re]||(Se=ye=0)||Ae.pop())&&((G?Z.nodeName.toLowerCase()!==wt:Z.nodeType!==1)||!++Se||(At&&(ce=Z[ge]||(Z[ge]={}),oe=ce[Z.uniqueID]||(ce[Z.uniqueID]={}),oe[l]=[Be,Se]),Z!==K)););return Se-=C,Se===I||Se%I===0&&Se/I>=0}}},PSEUDO:function(l,f){var m,I=z.pseudos[l]||z.setFilters[l.toLowerCase()]||t.error("unsupported pseudo: "+l);return I[ge]?I(f):I.length>1?(m=[l,l,"",f],z.setFilters.hasOwnProperty(l.toLowerCase())?a(function(C,B){for(var H,G=I(C,f),K=G.length;K--;)H=tt(C,G[K]),C[H]=!(B[H]=G[K])}):function(C){return I(C,0,m)}):I}},pseudos:{not:a(function(l){var f=[],m=[],I=Le(l.replace(Lt,"$1"));return I[ge]?a(function(C,B,H,G){for(var K,ne=I(C,null,G,[]),J=C.length;J--;)(K=ne[J])&&(C[J]=!(B[J]=K))}):function(C,B,H){return f[0]=C,I(f,null,H,m),f[0]=null,!m.pop()}}),has:a(function(l){return function(f){return t(l,f).length>0}}),contains:a(function(l){return l=l.replace(Ue,We),function(f){return(f.textContent||f.innerText||he(f)).indexOf(l)>-1}}),lang:a(function(l){return Pn.test(l||"")||t.error("unsupported lang: "+l),l=l.replace(Ue,We).toLowerCase(),function(f){var m;do if(m=De?f.lang:f.getAttribute("xml:lang")||f.getAttribute("lang"))return m=m.toLowerCase(),m===l||m.indexOf(l+"-")===0;while((f=f.parentNode)&&f.nodeType===1);return!1}}),target:function(l){var f=e.location&&e.location.hash;return f&&f.slice(1)===l.id},root:function(l){return l===Pe},focus:function(l){return l===se.activeElement&&(!se.hasFocus||se.hasFocus())&&!!(l.type||l.href||~l.tabIndex)},enabled:function(l){return l.disabled===!1},disabled:function(l){return l.disabled===!0},checked:function(l){var f=l.nodeName.toLowerCase();return f==="input"&&!!l.checked||f==="option"&&!!l.selected},selected:function(l){return l.parentNode&&l.parentNode.selectedIndex,l.selected===!0},empty:function(l){for(l=l.firstChild;l;l=l.nextSibling)if(l.nodeType<6)return!1;return!0},parent:function(l){return!z.pseudos.empty(l)},header:function(l){return Dr.test(l.nodeName)},input:function(l){return Pr.test(l.nodeName)},button:function(l){var f=l.nodeName.toLowerCase();return f==="input"&&l.type==="button"||f==="button"},text:function(l){var f;return l.nodeName.toLowerCase()==="input"&&l.type==="text"&&((f=l.getAttribute("type"))==null||f.toLowerCase()==="text")},first:N(function(){return[0]}),last:N(function(l,f){return[f-1]}),eq:N(function(l,f,m){return[0>m?m+f:m]}),even:N(function(l,f){for(var m=0;f>m;m+=2)l.push(m);return l}),odd:N(function(l,f){for(var m=1;f>m;m+=2)l.push(m);return l}),lt:N(function(l,f,m){for(var I=0>m?m+f:m;--I>=0;)l.push(I);return l}),gt:N(function(l,f,m){for(var I=0>m?m+f:m;++I<f;)l.push(I);return l})}},z.pseudos.nth=z.pseudos.eq;for(Fe in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})z.pseudos[Fe]=p(Fe);for(Fe in{submit:!0,reset:!0})z.pseudos[Fe]=y(Fe);return S.prototype=z.filters=z.pseudos,z.setFilters=new S,Ze=t.tokenize=function(l,f){var m,I,C,B,H,G,K,ne=Nn[l+" "];if(ne)return f?0:ne.slice(0);for(H=l,G=[],K=z.preFilter;H;){m&&!(I=Nr.exec(H))||(I&&(H=H.slice(I[0].length)||H),G.push(C=[])),m=!1,(I=Or.exec(H))&&(m=I.shift(),C.push({value:m,type:I[0].replace(Lt," ")}),H=H.slice(m.length));for(B in z.filter)!(I=Pt[B].exec(H))||K[B]&&!(I=K[B](I))||(m=I.shift(),C.push({value:m,type:B,matches:I}),H=H.slice(m.length));if(!m)break}return f?H.length:H?t.error(l):Nn(l,G).slice(0)},Le=t.compile=function(l,f){var m,I=[],C=[],B=It[l+" "];if(!B){for(f||(f=Ze(l)),m=f.length;m--;)B=st(f[m]),B[ge]?I.push(B):C.push(B);B=It(l,_e(C,I)),B.selector=l}return B},lt=t.select=function(l,f,m,I){var C,B,H,G,K,ne=typeof l=="function"&&l,J=!I&&Ze(l=ne.selector||l);if(m=m||[],J.length===1){if(B=J[0]=J[0].slice(0),B.length>2&&(H=B[0]).type==="ID"&&X.getById&&f.nodeType===9&&De&&z.relative[B[1].type]){if(f=(z.find.ID(H.matches[0].replace(Ue,We),f)||[])[0],!f)return m;ne&&(f=f.parentNode),l=l.slice(B.shift().value.length)}for(C=Pt.needsContext.test(l)?0:B.length;C--&&(H=B[C],!z.relative[G=H.type]);)if((K=z.find[G])&&(I=K(H.matches[0].replace(Ue,We),Xt.test(B[0].type)&&U(f.parentNode)||f))){if(B.splice(C,1),l=I.length&&V(B),!l)return $e.apply(m,I),m;break}}return(ne||Le(l,J))(I,f,!De,m,!f||Xt.test(l)&&U(f.parentNode)||f),m},X.sortStable=ge.split("").sort(Yt).join("")===ge,X.detectDuplicates=!!Te,ve(),X.sortDetached=o(function(l){return 1&l.compareDocumentPosition(se.createElement("div"))}),o(function(l){return l.innerHTML="<a href='#'></a>",l.firstChild.getAttribute("href")==="#"})||i("type|href|height|width",function(l,f,m){return m?void 0:l.getAttribute(f,f.toLowerCase()==="type"?1:2)}),X.attributes&&o(function(l){return l.innerHTML="<input/>",l.firstChild.setAttribute("value",""),l.firstChild.getAttribute("value")===""})||i("value",function(l,f,m){return m||l.nodeName.toLowerCase()!=="input"?void 0:l.defaultValue}),o(function(l){return l.getAttribute("disabled")==null})||i($t,function(l,f,m){var I;return m?void 0:l[f]===!0?f.toLowerCase():(I=l.getAttributeNode(f))&&I.specified?I.value:null}),t}(R);r.find=at,r.expr=at.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=at.uniqueSort,r.text=at.getText,r.isXMLDoc=at.isXML,r.contains=at.contains;var ot=function(e,t,n){for(var a=[],o=n!==void 0;(e=e[t])&&e.nodeType!==9;)if(e.nodeType===1){if(o&&r(e).is(n))break;a.push(e)}return a},on=function(e,t){for(var n=[];e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n},sn=r.expr.match.needsContext,ln=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Gn=/^.[^:#\[\.,]*$/;r.filter=function(e,t,n){var a=t[0];return n&&(e=":not("+e+")"),t.length===1&&a.nodeType===1?r.find.matchesSelector(a,e)?[a]:[]:r.find.matches(e,r.grep(t,function(o){return o.nodeType===1}))},r.fn.extend({find:function(e){var t,n=this.length,a=[],o=this;if(typeof e!="string")return this.pushStack(r(e).filter(function(){for(t=0;n>t;t++)if(r.contains(o[t],this))return!0}));for(t=0;n>t;t++)r.find(e,o[t],a);return a=this.pushStack(n>1?r.unique(a):a),a.selector=this.selector?this.selector+" "+e:e,a},filter:function(e){return this.pushStack(d(this,e||[],!1))},not:function(e){return this.pushStack(d(this,e||[],!0))},is:function(e){return!!d(this,typeof e=="string"&&sn.test(e)?r(e):e||[],!1).length}});var un,Yn=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,$n=r.fn.init=function(e,t,n){var a,o;if(!e)return this;if(n=n||un,typeof e=="string"){if(a=e[0]==="<"&&e[e.length-1]===">"&&e.length>=3?[null,e,null]:Yn.exec(e),!a||!a[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(a[1]){if(t=t instanceof r?t[0]:t,r.merge(this,r.parseHTML(a[1],t&&t.nodeType?t.ownerDocument||t:re,!0)),ln.test(a[1])&&r.isPlainObject(t))for(a in t)r.isFunction(this[a])?this[a](t[a]):this.attr(a,t[a]);return this}return o=re.getElementById(a[2]),o&&o.parentNode&&(this.length=1,this[0]=o),this.context=re,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):r.isFunction(e)?n.ready!==void 0?n.ready(e):e(r):(e.selector!==void 0&&(this.selector=e.selector,this.context=e.context),r.makeArray(e,this))};$n.prototype=r.fn,un=r(re);var zn=/^(?:parents|prev(?:Until|All))/,Xn={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(e){var t=r(e,this),n=t.length;return this.filter(function(){for(var a=0;n>a;a++)if(r.contains(this,t[a]))return!0})},closest:function(e,t){for(var n,a=0,o=this.length,i=[],s=sn.test(e)||typeof e!="string"?r(e,t||this.context):0;o>a;a++)for(n=this[a];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:n.nodeType===1&&r.find.matchesSelector(n,e))){i.push(n);break}return this.pushStack(i.length>1?r.uniqueSort(i):i)},index:function(e){return e?typeof e=="string"?_t.call(r(e),this[0]):_t.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(e,t))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),r.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return ot(e,"parentNode")},parentsUntil:function(e,t,n){return ot(e,"parentNode",n)},next:function(e){return F(e,"nextSibling")},prev:function(e){return F(e,"previousSibling")},nextAll:function(e){return ot(e,"nextSibling")},prevAll:function(e){return ot(e,"previousSibling")},nextUntil:function(e,t,n){return ot(e,"nextSibling",n)},prevUntil:function(e,t,n){return ot(e,"previousSibling",n)},siblings:function(e){return on((e.parentNode||{}).firstChild,e)},children:function(e){return on(e.firstChild)},contents:function(e){return e.contentDocument||r.merge([],e.childNodes)}},function(e,t){r.fn[e]=function(n,a){var o=r.map(this,t,n);return e.slice(-5)!=="Until"&&(a=n),a&&typeof a=="string"&&(o=r.filter(a,o)),this.length>1&&(Xn[e]||r.uniqueSort(o),zn.test(e)&&o.reverse()),this.pushStack(o)}});var Ie=/\S+/g;r.Callbacks=function(e){e=typeof e=="string"?j(e):r.extend({},e);var t,n,a,o,i=[],s=[],p=-1,y=function(){for(o=e.once,a=t=!0;s.length;p=-1)for(n=s.shift();++p<i.length;)i[p].apply(n[0],n[1])===!1&&e.stopOnFalse&&(p=i.length,n=!1);e.memory||(n=!1),t=!1,o&&(i=n?[]:"")},N={add:function(){return i&&(n&&!t&&(p=i.length-1,s.push(n)),function U(S){r.each(S,function(V,$){r.isFunction($)?e.unique&&N.has($)||i.push($):$&&$.length&&r.type($)!=="string"&&U($)})}(arguments),n&&!t&&y()),this},remove:function(){return r.each(arguments,function(U,S){for(var V;(V=r.inArray(S,i,V))>-1;)i.splice(V,1),p>=V&&p--}),this},has:function(U){return U?r.inArray(U,i)>-1:i.length>0},empty:function(){return i&&(i=[]),this},disable:function(){return o=s=[],i=n="",this},disabled:function(){return!i},lock:function(){return o=s=[],n||(i=n=""),this},locked:function(){return!!o},fireWith:function(U,S){return o||(S=S||[],S=[U,S.slice?S.slice():S],s.push(S),t||y()),this},fire:function(){return N.fireWith(this,arguments),this},fired:function(){return!!a}};return N},r.extend({Deferred:function(e){var t=[["resolve","done",r.Callbacks("once memory"),"resolved"],["reject","fail",r.Callbacks("once memory"),"rejected"],["notify","progress",r.Callbacks("memory")]],n="pending",a={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var i=arguments;return r.Deferred(function(s){r.each(t,function(p,y){var N=r.isFunction(i[p])&&i[p];o[y[1]](function(){var U=N&&N.apply(this,arguments);U&&r.isFunction(U.promise)?U.promise().progress(s.notify).done(s.resolve).fail(s.reject):s[y[0]+"With"](this===a?s.promise():this,N?[U]:arguments)})}),i=null}).promise()},promise:function(i){return i!=null?r.extend(i,a):a}},o={};return a.pipe=a.then,r.each(t,function(i,s){var p=s[2],y=s[3];a[s[1]]=p.add,y&&p.add(function(){n=y},t[1^i][2].disable,t[2][2].lock),o[s[0]]=function(){return o[s[0]+"With"](this===o?a:this,arguments),this},o[s[0]+"With"]=p.fireWith}),a.promise(o),e&&e.call(o,o),o},when:function(e){var t,n,a,o=0,i=Ve.call(arguments),s=i.length,p=s!==1||e&&r.isFunction(e.promise)?s:0,y=p===1?e:r.Deferred(),N=function(U,S,V){return function($){S[U]=this,V[U]=arguments.length>1?Ve.call(arguments):$,V===t?y.notifyWith(S,V):--p||y.resolveWith(S,V)}};if(s>1)for(t=new Array(s),n=new Array(s),a=new Array(s);s>o;o++)i[o]&&r.isFunction(i[o].promise)?i[o].promise().progress(N(o,n,t)).done(N(o,a,i)).fail(y.reject):--p;return p||y.resolveWith(a,i),y.promise()}});var Rt;r.fn.ready=function(e){return r.ready.promise().done(e),this},r.extend({isReady:!1,readyWait:1,holdReady:function(e){e?r.readyWait++:r.ready(!0)},ready:function(e){(e===!0?--r.readyWait:r.isReady)||(r.isReady=!0,e!==!0&&--r.readyWait>0||(Rt.resolveWith(re,[r]),r.fn.triggerHandler&&(r(re).triggerHandler("ready"),r(re).off("ready"))))}}),r.ready.promise=function(e){return Rt||(Rt=r.Deferred(),re.readyState==="complete"||re.readyState!=="loading"&&!re.documentElement.doScroll?R.setTimeout(r.ready):(re.addEventListener("DOMContentLoaded",O),R.addEventListener("load",O))),Rt.promise(e)},r.ready.promise();var qe=function(e,t,n,a,o,i,s){var p=0,y=e.length,N=n==null;if(r.type(n)==="object"){o=!0;for(p in n)qe(e,t,p,n[p],!0,i,s)}else if(a!==void 0&&(o=!0,r.isFunction(a)||(s=!0),N&&(s?(t.call(e,a),t=null):(N=t,t=function(U,S,V){return N.call(r(U),V)})),t))for(;y>p;p++)t(e[p],n,s?a:a.call(e[p],p,t(e[p],n)));return o?e:N?t.call(e):y?t(e[0],n):i},dt=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};k.uid=1,k.prototype={register:function(e,t){var n=t||{};return e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,writable:!0,configurable:!0}),e[this.expando]},cache:function(e){if(!dt(e))return{};var t=e[this.expando];return t||(t={},dt(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var a,o=this.cache(e);if(typeof t=="string")o[t]=n;else for(a in t)o[a]=t[a];return o},get:function(e,t){return t===void 0?this.cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var a;return t===void 0||t&&typeof t=="string"&&n===void 0?(a=this.get(e,t),a!==void 0?a:this.get(e,r.camelCase(t))):(this.set(e,t,n),n!==void 0?n:t)},remove:function(e,t){var n,a,o,i=e[this.expando];if(i!==void 0){if(t===void 0)this.register(e);else for(r.isArray(t)?a=t.concat(t.map(r.camelCase)):(o=r.camelCase(t),t in i?a=[t,o]:(a=o,a=a in i?[a]:a.match(Ie)||[])),n=a.length;n--;)delete i[a[n]];(t===void 0||r.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return t!==void 0&&!r.isEmptyObject(t)}};var te=new k,xe=new k,Kn=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,cn=/[A-Z]/g;r.extend({hasData:function(e){return xe.hasData(e)||te.hasData(e)},data:function(e,t,n){return xe.access(e,t,n)},removeData:function(e,t){xe.remove(e,t)},_data:function(e,t,n){return te.access(e,t,n)},_removeData:function(e,t){te.remove(e,t)}}),r.fn.extend({data:function(e,t){var n,a,o,i=this[0],s=i&&i.attributes;if(e===void 0){if(this.length&&(o=xe.get(i),i.nodeType===1&&!te.get(i,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(a=s[n].name,a.indexOf("data-")===0&&(a=r.camelCase(a.slice(5)),_(i,a,o[a])));te.set(i,"hasDataAttrs",!0)}return o}return typeof e=="object"?this.each(function(){xe.set(this,e)}):qe(this,function(p){var y,N;if(i&&p===void 0){if(y=xe.get(i,e)||xe.get(i,e.replace(cn,"-$&").toLowerCase()),y!==void 0||(N=r.camelCase(e),y=xe.get(i,N),y!==void 0)||(y=_(i,N,void 0),y!==void 0))return y}else N=r.camelCase(e),this.each(function(){var U=xe.get(this,N);xe.set(this,N,p),e.indexOf("-")>-1&&U!==void 0&&xe.set(this,e,p)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){xe.remove(this,e)})}}),r.extend({queue:function(e,t,n){var a;return e?(t=(t||"fx")+"queue",a=te.get(e,t),n&&(!a||r.isArray(n)?a=te.access(e,t,r.makeArray(n)):a.push(n)),a||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=r.queue(e,t),a=n.length,o=n.shift(),i=r._queueHooks(e,t),s=function(){r.dequeue(e,t)};o==="inprogress"&&(o=n.shift(),a--),o&&(t==="fx"&&n.unshift("inprogress"),delete i.stop,o.call(e,s,i)),!a&&i&&i.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return te.get(e,n)||te.access(e,n,{empty:r.Callbacks("once memory").add(function(){te.remove(e,[t+"queue",n])})})}}),r.fn.extend({queue:function(e,t){var n=2;return typeof e!="string"&&(t=e,e="fx",n--),arguments.length<n?r.queue(this[0],e):t===void 0?this:this.each(function(){var a=r.queue(this,e,t);r._queueHooks(this,e),e==="fx"&&a[0]!=="inprogress"&&r.dequeue(this,e)})},dequeue:function(e){return this.each(function(){r.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,a=1,o=r.Deferred(),i=this,s=this.length,p=function(){--a||o.resolveWith(i,[i])};for(typeof e!="string"&&(t=e,e=void 0),e=e||"fx";s--;)n=te.get(i[s],e+"queueHooks"),n&&n.empty&&(a++,n.empty.add(p));return p(),o.promise(t)}});var pn=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ft=new RegExp("^(?:([+-])=|)("+pn+")([a-z%]*)$","i"),Je=["Top","Right","Bottom","Left"],gt=function(e,t){return e=t||e,r.css(e,"display")==="none"||!r.contains(e.ownerDocument,e)},dn=/^(?:checkbox|radio)$/i,fn=/<([\w:-]+)/,gn=/^$|\/(?:java|ecma)script/i,Ne={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ne.optgroup=Ne.option,Ne.tbody=Ne.tfoot=Ne.colgroup=Ne.caption=Ne.thead,Ne.th=Ne.td;var Jn=/<|&#?\w+;/;(function(){var e=re.createDocumentFragment(),t=e.appendChild(re.createElement("div")),n=re.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),fe.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",fe.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue})();var Zn=/^key/,Qn=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,hn=/^([^.]*)(?:\.(.+)|)/;r.event={global:{},add:function(e,t,n,a,o){var i,s,p,y,N,U,S,V,$,ie,le,ue=te.get(e);if(ue)for(n.handler&&(i=n,n=i.handler,o=i.selector),n.guid||(n.guid=r.guid++),(y=ue.events)||(y=ue.events={}),(s=ue.handle)||(s=ue.handle=function(Ge){return typeof r<"u"&&r.event.triggered!==Ge.type?r.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Ie)||[""],N=t.length;N--;)p=hn.exec(t[N])||[],$=le=p[1],ie=(p[2]||"").split(".").sort(),$&&(S=r.event.special[$]||{},$=(o?S.delegateType:S.bindType)||$,S=r.event.special[$]||{},U=r.extend({type:$,origType:le,data:a,handler:n,guid:n.guid,selector:o,needsContext:o&&r.expr.match.needsContext.test(o),namespace:ie.join(".")},i),(V=y[$])||(V=y[$]=[],V.delegateCount=0,S.setup&&S.setup.call(e,a,ie,s)!==!1||e.addEventListener&&e.addEventListener($,s)),S.add&&(S.add.call(e,U),U.handler.guid||(U.handler.guid=n.guid)),o?V.splice(V.delegateCount++,0,U):V.push(U),r.event.global[$]=!0)},remove:function(e,t,n,a,o){var i,s,p,y,N,U,S,V,$,ie,le,ue=te.hasData(e)&&te.get(e);if(ue&&(y=ue.events)){for(t=(t||"").match(Ie)||[""],N=t.length;N--;)if(p=hn.exec(t[N])||[],$=le=p[1],ie=(p[2]||"").split(".").sort(),$){for(S=r.event.special[$]||{},$=(a?S.delegateType:S.bindType)||$,V=y[$]||[],p=p[2]&&new RegExp("(^|\\.)"+ie.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=i=V.length;i--;)U=V[i],!o&&le!==U.origType||n&&n.guid!==U.guid||p&&!p.test(U.namespace)||a&&a!==U.selector&&(a!=="**"||!U.selector)||(V.splice(i,1),U.selector&&V.delegateCount--,S.remove&&S.remove.call(e,U));s&&!V.length&&(S.teardown&&S.teardown.call(e,ie,ue.handle)!==!1||r.removeEvent(e,$,ue.handle),delete y[$])}else for($ in y)r.event.remove(e,$+t[N],n,a,!0);r.isEmptyObject(y)&&te.remove(e,"handle events")}},dispatch:function(e){e=r.event.fix(e);var t,n,a,o,i,s=[],p=Ve.call(arguments),y=(te.get(this,"events")||{})[e.type]||[],N=r.event.special[e.type]||{};if(p[0]=e,e.delegateTarget=this,!N.preDispatch||N.preDispatch.call(this,e)!==!1){for(s=r.event.handlers.call(this,e,y),t=0;(o=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(i=o.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(i.namespace)||(e.handleObj=i,e.data=i.data,a=((r.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,p),a!==void 0&&(e.result=a)===!1&&(e.preventDefault(),e.stopPropagation()));return N.postDispatch&&N.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,a,o,i,s=[],p=t.delegateCount,y=e.target;if(p&&y.nodeType&&(e.type!=="click"||isNaN(e.button)||e.button<1)){for(;y!==this;y=y.parentNode||this)if(y.nodeType===1&&(y.disabled!==!0||e.type!=="click")){for(a=[],n=0;p>n;n++)i=t[n],o=i.selector+" ",a[o]===void 0&&(a[o]=i.needsContext?r(o,this).index(y)>-1:r.find(o,this,null,[y]).length),a[o]&&a.push(i);a.length&&s.push({elem:y,handlers:a})}}return p<t.length&&s.push({elem:this,handlers:t.slice(p)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,a,o,i=t.button;return e.pageX==null&&t.clientX!=null&&(n=e.target.ownerDocument||re,a=n.documentElement,o=n.body,e.pageX=t.clientX+(a&&a.scrollLeft||o&&o.scrollLeft||0)-(a&&a.clientLeft||o&&o.clientLeft||0),e.pageY=t.clientY+(a&&a.scrollTop||o&&o.scrollTop||0)-(a&&a.clientTop||o&&o.clientTop||0)),e.which||i===void 0||(e.which=1&i?1:2&i?3:4&i?2:0),e}},fix:function(e){if(e[r.expando])return e;var t,n,a,o=e.type,i=e,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=Qn.test(o)?this.mouseHooks:Zn.test(o)?this.keyHooks:{}),a=s.props?this.props.concat(s.props):this.props,e=new r.Event(i),t=a.length;t--;)n=a[t],e[n]=i[n];return e.target||(e.target=re),e.target.nodeType===3&&(e.target=e.target.parentNode),s.filter?s.filter(e,i):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==T()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===T()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return this.type==="checkbox"&&this.click&&r.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return r.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},r.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},r.Event=function(e,t){return this instanceof r.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?w:D):this.type=e,t&&r.extend(this,t),this.timeStamp=e&&e.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(e,t)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:D,isPropagationStopped:D,isImmediatePropagationStopped:D,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=w,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=w,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=w,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){r.event.special[e]={delegateType:t,bindType:t,handle:function(n){var a,o=this,i=n.relatedTarget,s=n.handleObj;return i&&(i===o||r.contains(o,i))||(n.type=s.origType,a=s.handler.apply(this,arguments),n.type=t),a}}}),r.fn.extend({on:function(e,t,n,a){return b(this,e,t,n,a)},one:function(e,t,n,a){return b(this,e,t,n,a,1)},off:function(e,t,n){var a,o;if(e&&e.preventDefault&&e.handleObj)return a=e.handleObj,r(e.delegateTarget).off(a.namespace?a.origType+"."+a.namespace:a.origType,a.selector,a.handler),this;if(typeof e=="object"){for(o in e)this.off(o,t,e[o]);return this}return t!==!1&&typeof t!="function"||(n=t,t=void 0),n===!1&&(n=D),this.each(function(){r.event.remove(this,e,n,t)})}});var er=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,tr=/<script|<style|<link/i,nr=/checked\s*(?:[^=]|=\s*.checked.)/i,rr=/^true\/(.*)/,ar=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;r.extend({htmlPrefilter:function(e){return e.replace(er,"<$1></$2>")},clone:function(e,t,n){var a,o,i,s,p=e.cloneNode(!0),y=r.contains(e.ownerDocument,e);if(!(fe.noCloneChecked||e.nodeType!==1&&e.nodeType!==11||r.isXMLDoc(e)))for(s=c(p),i=c(e),a=0,o=i.length;o>a;a++)ae(i[a],s[a]);if(t)if(n)for(i=i||c(e),s=s||c(p),a=0,o=i.length;o>a;a++)ee(i[a],s[a]);else ee(e,p);return s=c(p,"script"),s.length>0&&g(s,!y&&c(e,"script")),p},cleanData:function(e){for(var t,n,a,o=r.event.special,i=0;(n=e[i])!==void 0;i++)if(dt(n)){if(t=n[te.expando]){if(t.events)for(a in t.events)o[a]?r.event.remove(n,a):r.removeEvent(n,a,t.handle);n[te.expando]=void 0}n[xe.expando]&&(n[xe.expando]=void 0)}}}),r.fn.extend({domManip:pe,detach:function(e){return be(this,e,!0)},remove:function(e){return be(this,e)},text:function(e){return qe(this,function(t){return t===void 0?r.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=t)})},null,e,arguments.length)},append:function(){return pe(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=E(this,e);t.appendChild(e)}})},prepend:function(){return pe(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=E(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;(e=this[t])!=null;t++)e.nodeType===1&&(r.cleanData(c(e,!1)),e.textContent="");return this},clone:function(e,t){return e=e??!1,t=t??e,this.map(function(){return r.clone(this,e,t)})},html:function(e){return qe(this,function(t){var n=this[0]||{},a=0,o=this.length;if(t===void 0&&n.nodeType===1)return n.innerHTML;if(typeof t=="string"&&!tr.test(t)&&!Ne[(fn.exec(t)||["",""])[1].toLowerCase()]){t=r.htmlPrefilter(t);try{for(;o>a;a++)n=this[a]||{},n.nodeType===1&&(r.cleanData(c(n,!1)),n.innerHTML=t);n=0}catch{}}n&&this.empty().append(t)},null,e,arguments.length)},replaceWith:function(){var e=[];return pe(this,arguments,function(t){var n=this.parentNode;r.inArray(this,e)<0&&(r.cleanData(c(this)),n&&n.replaceChild(t,this))},e)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){r.fn[e]=function(n){for(var a,o=[],i=r(n),s=i.length-1,p=0;s>=p;p++)a=p===s?this:this.clone(!0),r(i[p])[t](a),jt.apply(o,a.get());return this.pushStack(o)}});var St,mn={HTML:"block",BODY:"block"},bn=/^margin/,Ht=new RegExp("^("+pn+")(?!px)[a-z%]+$","i"),kt=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=R),t.getComputedStyle(e)},qt=function(e,t,n,a){var o,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];o=n.apply(e,a||[]);for(i in t)e.style[i]=s[i];return o},ht=re.documentElement;(function(){function e(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",s.innerHTML="",ht.appendChild(i);var p=R.getComputedStyle(s);t=p.top!=="1%",o=p.marginLeft==="2px",n=p.width==="4px",s.style.marginRight="50%",a=p.marginRight==="4px",ht.removeChild(i)}var t,n,a,o,i=re.createElement("div"),s=re.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",fe.clearCloneStyle=s.style.backgroundClip==="content-box",i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",i.appendChild(s),r.extend(fe,{pixelPosition:function(){return e(),t},boxSizingReliable:function(){return n==null&&e(),n},pixelMarginRight:function(){return n==null&&e(),a},reliableMarginLeft:function(){return n==null&&e(),o},reliableMarginRight:function(){var p,y=s.appendChild(re.createElement("div"));return y.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",y.style.marginRight=y.style.width="0",s.style.width="1px",ht.appendChild(i),p=!parseFloat(R.getComputedStyle(y).marginRight),ht.removeChild(i),s.removeChild(y),p}}))})();var or=/^(none|table(?!-c[ea]).+)/,ir={position:"absolute",visibility:"hidden",display:"block"},vn={letterSpacing:"0",fontWeight:"400"},yn=["Webkit","O","Moz","ms"],xn=re.createElement("div").style;r.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ke(e,"opacity");return n===""?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,a){if(e&&e.nodeType!==3&&e.nodeType!==8&&e.style){var o,i,s,p=r.camelCase(t),y=e.style;return t=r.cssProps[p]||(r.cssProps[p]=He(p)||p),s=r.cssHooks[t]||r.cssHooks[p],n===void 0?s&&"get"in s&&(o=s.get(e,!1,a))!==void 0?o:y[t]:(i=typeof n,i==="string"&&(o=ft.exec(n))&&o[1]&&(n=u(e,t,o),i="number"),n!=null&&n===n&&(i==="number"&&(n+=o&&o[3]||(r.cssNumber[p]?"":"px")),fe.clearCloneStyle||n!==""||t.indexOf("background")!==0||(y[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,a))===void 0||(y[t]=n)),void 0)}},css:function(e,t,n,a){var o,i,s,p=r.camelCase(t);return t=r.cssProps[p]||(r.cssProps[p]=He(p)||p),s=r.cssHooks[t]||r.cssHooks[p],s&&"get"in s&&(o=s.get(e,!0,n)),o===void 0&&(o=ke(e,t,a)),o==="normal"&&t in vn&&(o=vn[t]),n===""||n?(i=parseFloat(o),n===!0||isFinite(i)?i||0:o):o}}),r.each(["height","width"],function(e,t){r.cssHooks[t]={get:function(n,a,o){return a?or.test(r.css(n,"display"))&&n.offsetWidth===0?qt(n,ir,function(){return Kt(n,t,o)}):Kt(n,t,o):void 0},set:function(n,a,o){var i,s=o&&kt(n),p=o&&Et(n,t,o,r.css(n,"boxSizing",!1,s)==="border-box",s);return p&&(i=ft.exec(a))&&(i[3]||"px")!=="px"&&(n.style[t]=a,a=r.css(n,t)),ct(n,a,p)}}}),r.cssHooks.marginLeft=rt(fe.reliableMarginLeft,function(e,t){return t?(parseFloat(ke(e,"marginLeft"))||e.getBoundingClientRect().left-qt(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px":void 0}),r.cssHooks.marginRight=rt(fe.reliableMarginRight,function(e,t){return t?qt(e,{display:"inline-block"},ke,[e,"marginRight"]):void 0}),r.each({margin:"",padding:"",border:"Width"},function(e,t){r.cssHooks[e+t]={expand:function(n){for(var a=0,o={},i=typeof n=="string"?n.split(" "):[n];4>a;a++)o[e+Je[a]+t]=i[a]||i[a-2]||i[0];return o}},bn.test(e)||(r.cssHooks[e+t].set=ct)}),r.fn.extend({css:function(e,t){return qe(this,function(n,a,o){var i,s,p={},y=0;if(r.isArray(a)){for(i=kt(n),s=a.length;s>y;y++)p[a[y]]=r.css(n,a[y],!1,i);return p}return o!==void 0?r.style(n,a,o):r.css(n,a)},e,t,arguments.length>1)},show:function(){return Jt(this,!0)},hide:function(){return Jt(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){gt(this)?r(this).show():r(this).hide()})}}),r.Tween=Ce,Ce.prototype={constructor:Ce,init:function(e,t,n,a,o,i){this.elem=e,this.prop=n,this.easing=o||r.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=a,this.unit=i||(r.cssNumber[n]?"":"px")},cur:function(){var e=Ce.propHooks[this.prop];return e&&e.get?e.get(this):Ce.propHooks._default.get(this)},run:function(e){var t,n=Ce.propHooks[this.prop];return this.options.duration?this.pos=t=r.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ce.propHooks._default.set(this),this}},Ce.prototype.init.prototype=Ce.prototype,Ce.propHooks={_default:{get:function(e){var t;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(t=r.css(e.elem,e.prop,""),t&&t!=="auto"?t:0)},set:function(e){r.fx.step[e.prop]?r.fx.step[e.prop](e):e.elem.nodeType!==1||e.elem.style[r.cssProps[e.prop]]==null&&!r.cssHooks[e.prop]?e.elem[e.prop]=e.now:r.style(e.elem,e.prop,e.now+e.unit)}}},Ce.propHooks.scrollTop=Ce.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},r.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},r.fx=Ce.prototype.init,r.fx.step={};var it,Nt,sr=/^(?:toggle|show|hide)$/,lr=/queueHooks$/;r.Animation=r.extend(Oe,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return u(n.elem,e,ft.exec(t),n),n}]},tweener:function(e,t){r.isFunction(e)?(t=e,e=["*"]):e=e.match(Ie);for(var n,a=0,o=e.length;o>a;a++)n=e[a],Oe.tweeners[n]=Oe.tweeners[n]||[],Oe.tweeners[n].unshift(t)},prefilters:[Mn],prefilter:function(e,t){t?Oe.prefilters.unshift(e):Oe.prefilters.push(e)}}),r.speed=function(e,t,n){var a=e&&typeof e=="object"?r.extend({},e):{complete:n||!n&&t||r.isFunction(e)&&e,duration:e,easing:n&&t||t&&!r.isFunction(t)&&t};return a.duration=r.fx.off?0:typeof a.duration=="number"?a.duration:a.duration in r.fx.speeds?r.fx.speeds[a.duration]:r.fx.speeds._default,a.queue!=null&&a.queue!==!0||(a.queue="fx"),a.old=a.complete,a.complete=function(){r.isFunction(a.old)&&a.old.call(this),a.queue&&r.dequeue(this,a.queue)},a},r.fn.extend({fadeTo:function(e,t,n,a){return this.filter(gt).css("opacity",0).show().end().animate({opacity:t},e,n,a)},animate:function(e,t,n,a){var o=r.isEmptyObject(e),i=r.speed(t,n,a),s=function(){var p=Oe(this,r.extend({},e),i);(o||te.get(this,"finish"))&&p.stop(!0)};return s.finish=s,o||i.queue===!1?this.each(s):this.queue(i.queue,s)},stop:function(e,t,n){var a=function(o){var i=o.stop;delete o.stop,i(n)};return typeof e!="string"&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var o=!0,i=e!=null&&e+"queueHooks",s=r.timers,p=te.get(this);if(i)p[i]&&p[i].stop&&a(p[i]);else for(i in p)p[i]&&p[i].stop&&lr.test(i)&&a(p[i]);for(i=s.length;i--;)s[i].elem!==this||e!=null&&s[i].queue!==e||(s[i].anim.stop(n),o=!1,s.splice(i,1));!o&&n||r.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=te.get(this),a=n[e+"queue"],o=n[e+"queueHooks"],i=r.timers,s=a?a.length:0;for(n.finish=!0,r.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=i.length;t--;)i[t].elem===this&&i[t].queue===e&&(i[t].anim.stop(!0),i.splice(t,1));for(t=0;s>t;t++)a[t]&&a[t].finish&&a[t].finish.call(this);delete n.finish})}}),r.each(["toggle","show","hide"],function(e,t){var n=r.fn[t];r.fn[t]=function(a,o,i){return a==null||typeof a=="boolean"?n.apply(this,arguments):this.animate(Ct(t,!0),a,o,i)}}),r.each({slideDown:Ct("show"),slideUp:Ct("hide"),slideToggle:Ct("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){r.fn[e]=function(n,a,o){return this.animate(t,n,a,o)}}),r.timers=[],r.fx.tick=function(){var e,t=0,n=r.timers;for(it=r.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||r.fx.stop(),it=void 0},r.fx.timer=function(e){r.timers.push(e),e()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Nt||(Nt=R.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){R.clearInterval(Nt),Nt=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(e,t){return e=r.fx&&r.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(n,a){var o=R.setTimeout(n,e);a.stop=function(){R.clearTimeout(o)}})},function(){var e=re.createElement("input"),t=re.createElement("select"),n=t.appendChild(re.createElement("option"));e.type="checkbox",fe.checkOn=e.value!=="",fe.optSelected=n.selected,t.disabled=!0,fe.optDisabled=!n.disabled,e=re.createElement("input"),e.value="t",e.type="radio",fe.radioValue=e.value==="t"}();var wn,mt=r.expr.attrHandle;r.fn.extend({attr:function(e,t){return qe(this,r.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){r.removeAttr(this,e)})}}),r.extend({attr:function(e,t,n){var a,o,i=e.nodeType;if(i!==3&&i!==8&&i!==2)return typeof e.getAttribute>"u"?r.prop(e,t,n):(i===1&&r.isXMLDoc(e)||(t=t.toLowerCase(),o=r.attrHooks[t]||(r.expr.match.bool.test(t)?wn:void 0)),n!==void 0?n===null?void r.removeAttr(e,t):o&&"set"in o&&(a=o.set(e,n,t))!==void 0?a:(e.setAttribute(t,n+""),n):o&&"get"in o&&(a=o.get(e,t))!==null?a:(a=r.find.attr(e,t),a??void 0))},attrHooks:{type:{set:function(e,t){if(!fe.radioValue&&t==="radio"&&r.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,a,o=0,i=t&&t.match(Ie);if(i&&e.nodeType===1)for(;n=i[o++];)a=r.propFix[n]||n,r.expr.match.bool.test(n)&&(e[a]=!1),e.removeAttribute(n)}}),wn={set:function(e,t,n){return t===!1?r.removeAttr(e,n):e.setAttribute(n,n),n}},r.each(r.expr.match.bool.source.match(/\w+/g),function(e,t){var n=mt[t]||r.find.attr;mt[t]=function(a,o,i){var s,p;return i||(p=mt[o],mt[o]=s,s=n(a,o,i)!=null?o.toLowerCase():null,mt[o]=p),s}});var ur=/^(?:input|select|textarea|button)$/i,cr=/^(?:a|area)$/i;r.fn.extend({prop:function(e,t){return qe(this,r.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[r.propFix[e]||e]})}}),r.extend({prop:function(e,t,n){var a,o,i=e.nodeType;if(i!==3&&i!==8&&i!==2)return i===1&&r.isXMLDoc(e)||(t=r.propFix[t]||t,o=r.propHooks[t]),n!==void 0?o&&"set"in o&&(a=o.set(e,n,t))!==void 0?a:e[t]=n:o&&"get"in o&&(a=o.get(e,t))!==null?a:e[t]},propHooks:{tabIndex:{get:function(e){var t=r.find.attr(e,"tabindex");return t?parseInt(t,10):ur.test(e.nodeName)||cr.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),fe.optSelected||(r.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var Ft=/[\t\r\n\f]/g;r.fn.extend({addClass:function(e){var t,n,a,o,i,s,p,y=0;if(r.isFunction(e))return this.each(function(N){r(this).addClass(e.call(this,N,Xe(this)))});if(typeof e=="string"&&e){for(t=e.match(Ie)||[];n=this[y++];)if(o=Xe(n),a=n.nodeType===1&&(" "+o+" ").replace(Ft," ")){for(s=0;i=t[s++];)a.indexOf(" "+i+" ")<0&&(a+=i+" ");p=r.trim(a),o!==p&&n.setAttribute("class",p)}}return this},removeClass:function(e){var t,n,a,o,i,s,p,y=0;if(r.isFunction(e))return this.each(function(N){r(this).removeClass(e.call(this,N,Xe(this)))});if(!arguments.length)return this.attr("class","");if(typeof e=="string"&&e){for(t=e.match(Ie)||[];n=this[y++];)if(o=Xe(n),a=n.nodeType===1&&(" "+o+" ").replace(Ft," ")){for(s=0;i=t[s++];)for(;a.indexOf(" "+i+" ")>-1;)a=a.replace(" "+i+" "," ");p=r.trim(a),o!==p&&n.setAttribute("class",p)}}return this},toggleClass:function(e,t){var n=typeof e;return typeof t=="boolean"&&n==="string"?t?this.addClass(e):this.removeClass(e):r.isFunction(e)?this.each(function(a){r(this).toggleClass(e.call(this,a,Xe(this),t),t)}):this.each(function(){var a,o,i,s;if(n==="string")for(o=0,i=r(this),s=e.match(Ie)||[];a=s[o++];)i.hasClass(a)?i.removeClass(a):i.addClass(a);else e!==void 0&&n!=="boolean"||(a=Xe(this),a&&te.set(this,"__className__",a),this.setAttribute&&this.setAttribute("class",a||e===!1?"":te.get(this,"__className__")||""))})},hasClass:function(e){var t,n,a=0;for(t=" "+e+" ";n=this[a++];)if(n.nodeType===1&&(" "+Xe(n)+" ").replace(Ft," ").indexOf(t)>-1)return!0;return!1}});var pr=/\r/g,dr=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(e){var t,n,a,o=this[0];{if(arguments.length)return a=r.isFunction(e),this.each(function(i){var s;this.nodeType===1&&(s=a?e.call(this,i,r(this).val()):e,s==null?s="":typeof s=="number"?s+="":r.isArray(s)&&(s=r.map(s,function(p){return p==null?"":p+""})),t=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,s,"value")!==void 0||(this.value=s))});if(o)return t=r.valHooks[o.type]||r.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(o,"value"))!==void 0?n:(n=o.value,typeof n=="string"?n.replace(pr,""):n??"")}}}),r.extend({valHooks:{option:{get:function(e){var t=r.find.attr(e,"value");return t??r.trim(r.text(e)).replace(dr," ")}},select:{get:function(e){for(var t,n,a=e.options,o=e.selectedIndex,i=e.type==="select-one"||0>o,s=i?null:[],p=i?o+1:a.length,y=0>o?p:i?o:0;p>y;y++)if(n=a[y],(n.selected||y===o)&&(fe.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!r.nodeName(n.parentNode,"optgroup"))){if(t=r(n).val(),i)return t;s.push(t)}return s},set:function(e,t){for(var n,a,o=e.options,i=r.makeArray(t),s=o.length;s--;)a=o[s],(a.selected=r.inArray(r.valHooks.option.get(a),i)>-1)&&(n=!0);return n||(e.selectedIndex=-1),i}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(e,t){return r.isArray(t)?e.checked=r.inArray(r(e).val(),t)>-1:void 0}},fe.checkOn||(r.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})});var An=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(e,t,n,a){var o,i,s,p,y,N,U,S=[n||re],V=pt.call(e,"type")?e.type:e,$=pt.call(e,"namespace")?e.namespace.split("."):[];if(i=s=n=n||re,n.nodeType!==3&&n.nodeType!==8&&!An.test(V+r.event.triggered)&&(V.indexOf(".")>-1&&($=V.split("."),V=$.shift(),$.sort()),y=V.indexOf(":")<0&&"on"+V,e=e[r.expando]?e:new r.Event(V,typeof e=="object"&&e),e.isTrigger=a?2:3,e.namespace=$.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+$.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=t==null?[e]:r.makeArray(t,[e]),U=r.event.special[V]||{},a||!U.trigger||U.trigger.apply(n,t)!==!1)){if(!a&&!U.noBubble&&!r.isWindow(n)){for(p=U.delegateType||V,An.test(p+V)||(i=i.parentNode);i;i=i.parentNode)S.push(i),s=i;s===(n.ownerDocument||re)&&S.push(s.defaultView||s.parentWindow||R)}for(o=0;(i=S[o++])&&!e.isPropagationStopped();)e.type=o>1?p:U.bindType||V,N=(te.get(i,"events")||{})[e.type]&&te.get(i,"handle"),N&&N.apply(i,t),N=y&&i[y],N&&N.apply&&dt(i)&&(e.result=N.apply(i,t),e.result===!1&&e.preventDefault());return e.type=V,a||e.isDefaultPrevented()||U._default&&U._default.apply(S.pop(),t)!==!1||!dt(n)||y&&r.isFunction(n[V])&&!r.isWindow(n)&&(s=n[y],s&&(n[y]=null),r.event.triggered=V,n[V](),r.event.triggered=void 0,s&&(n[y]=s)),e.result}},simulate:function(e,t,n){var a=r.extend(new r.Event,n,{type:e,isSimulated:!0});r.event.trigger(a,null,t)}}),r.fn.extend({trigger:function(e,t){return this.each(function(){r.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?r.event.trigger(e,t,n,!0):void 0}}),r.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){r.fn[t]=function(n,a){return arguments.length>0?this.on(t,null,n,a):this.trigger(t)}}),r.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),fe.focusin="onfocusin"in R,fe.focusin||r.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(a){r.event.simulate(t,a.target,r.event.fix(a))};r.event.special[t]={setup:function(){var a=this.ownerDocument||this,o=te.access(a,t);o||a.addEventListener(e,n,!0),te.access(a,t,(o||0)+1)},teardown:function(){var a=this.ownerDocument||this,o=te.access(a,t)-1;o?te.access(a,t,o):(a.removeEventListener(e,n,!0),te.remove(a,t))}}});var bt=R.location,Bt=r.now(),Ut=/\?/;r.parseJSON=function(e){return JSON.parse(e+"")},r.parseXML=function(e){var t;if(!e||typeof e!="string")return null;try{t=new R.DOMParser().parseFromString(e,"text/xml")}catch{t=void 0}return t&&!t.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+e),t};var fr=/#.*$/,En=/([?&])_=[^&]*/,gr=/^(.*?):[ \t]*([^\r\n]*)$/gm,hr=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,mr=/^(?:GET|HEAD)$/,br=/^\/\//,Cn={},Wt={},_n="*/".concat("*"),Vt=re.createElement("a");Vt.href=bt.href,r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:hr.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_n,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":r.parseJSON,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Dt(Dt(e,r.ajaxSettings),t):Dt(r.ajaxSettings,e)},ajaxPrefilter:en(Cn),ajaxTransport:en(Wt),ajax:function(e,t){function n(z,he,Ye,Ze){var Le,lt,je,Ee,Te,ve=he;_e!==2&&(_e=2,p&&R.clearTimeout(p),a=void 0,i=Ze||"",X.readyState=z>0?4:0,Le=z>=200&&300>z||z===304,Ye&&(Ee=Hn(S,X,Ye)),Ee=qn(S,Ee,X,Le),Le?(S.ifModified&&(Te=X.getResponseHeader("Last-Modified"),Te&&(r.lastModified[o]=Te),Te=X.getResponseHeader("etag"),Te&&(r.etag[o]=Te)),z===204||S.type==="HEAD"?ve="nocontent":z===304?ve="notmodified":(ve=Ee.state,lt=Ee.data,je=Ee.error,Le=!je)):(je=ve,!z&&ve||(ve="error",0>z&&(z=0))),X.status=z,X.statusText=(he||ve)+"",Le?ie.resolveWith(V,[lt,ve,X]):ie.rejectWith(V,[X,ve,je]),X.statusCode(ue),ue=void 0,N&&$.trigger(Le?"ajaxSuccess":"ajaxError",[X,S,Le?lt:je]),le.fireWith(V,[X,ve]),N&&($.trigger("ajaxComplete",[X,S]),--r.active||r.event.trigger("ajaxStop")))}typeof e=="object"&&(t=e,e=void 0),t=t||{};var a,o,i,s,p,y,N,U,S=r.ajaxSetup({},t),V=S.context||S,$=S.context&&(V.nodeType||V.jquery)?r(V):r.event,ie=r.Deferred(),le=r.Callbacks("once memory"),ue=S.statusCode||{},Ge={},st={},_e=0,Fe="canceled",X={readyState:0,getResponseHeader:function(z){var he;if(_e===2){if(!s)for(s={};he=gr.exec(i);)s[he[1].toLowerCase()]=he[2];he=s[z.toLowerCase()]}return he??null},getAllResponseHeaders:function(){return _e===2?i:null},setRequestHeader:function(z,he){var Ye=z.toLowerCase();return _e||(z=st[Ye]=st[Ye]||z,Ge[z]=he),this},overrideMimeType:function(z){return _e||(S.mimeType=z),this},statusCode:function(z){var he;if(z)if(2>_e)for(he in z)ue[he]=[ue[he],z[he]];else X.always(z[X.status]);return this},abort:function(z){var he=z||Fe;return a&&a.abort(he),n(0,he),this}};if(ie.promise(X).complete=le.add,X.success=X.done,X.error=X.fail,S.url=((e||S.url||bt.href)+"").replace(fr,"").replace(br,bt.protocol+"//"),S.type=t.method||t.type||S.method||S.type,S.dataTypes=r.trim(S.dataType||"*").toLowerCase().match(Ie)||[""],S.crossDomain==null){y=re.createElement("a");try{y.href=S.url,y.href=y.href,S.crossDomain=Vt.protocol+"//"+Vt.host!=y.protocol+"//"+y.host}catch{S.crossDomain=!0}}if(S.data&&S.processData&&typeof S.data!="string"&&(S.data=r.param(S.data,S.traditional)),tn(Cn,S,t,X),_e===2)return X;N=r.event&&S.global,N&&r.active++===0&&r.event.trigger("ajaxStart"),S.type=S.type.toUpperCase(),S.hasContent=!mr.test(S.type),o=S.url,S.hasContent||(S.data&&(o=S.url+=(Ut.test(o)?"&":"?")+S.data,delete S.data),S.cache===!1&&(S.url=En.test(o)?o.replace(En,"$1_="+Bt++):o+(Ut.test(o)?"&":"?")+"_="+Bt++)),S.ifModified&&(r.lastModified[o]&&X.setRequestHeader("If-Modified-Since",r.lastModified[o]),r.etag[o]&&X.setRequestHeader("If-None-Match",r.etag[o])),(S.data&&S.hasContent&&S.contentType!==!1||t.contentType)&&X.setRequestHeader("Content-Type",S.contentType),X.setRequestHeader("Accept",S.dataTypes[0]&&S.accepts[S.dataTypes[0]]?S.accepts[S.dataTypes[0]]+(S.dataTypes[0]!=="*"?", "+_n+"; q=0.01":""):S.accepts["*"]);for(U in S.headers)X.setRequestHeader(U,S.headers[U]);if(S.beforeSend&&(S.beforeSend.call(V,X,S)===!1||_e===2))return X.abort();Fe="abort";for(U in{success:1,error:1,complete:1})X[U](S[U]);if(a=tn(Wt,S,t,X)){if(X.readyState=1,N&&$.trigger("ajaxSend",[X,S]),_e===2)return X;S.async&&S.timeout>0&&(p=R.setTimeout(function(){X.abort("timeout")},S.timeout));try{_e=1,a.send(Ge,n)}catch(z){if(!(2>_e))throw z;n(-1,z)}}else n(-1,"No Transport");return X},getJSON:function(e,t,n){return r.get(e,t,n,"json")},getScript:function(e,t){return r.get(e,void 0,t,"script")}}),r.each(["get","post"],function(e,t){r[t]=function(n,a,o,i){return r.isFunction(a)&&(i=i||o,o=a,a=void 0),r.ajax(r.extend({url:n,type:t,dataType:i,data:a,success:o},r.isPlainObject(n)&&n))}}),r._evalUrl=function(e){return r.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},r.fn.extend({wrapAll:function(e){var t;return r.isFunction(e)?this.each(function(n){r(this).wrapAll(e.call(this,n))}):(this[0]&&(t=r(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var n=this;n.firstElementChild;)n=n.firstElementChild;return n}).append(this)),this)},wrapInner:function(e){return r.isFunction(e)?this.each(function(t){r(this).wrapInner(e.call(this,t))}):this.each(function(){var t=r(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=r.isFunction(e);return this.each(function(n){r(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){r.nodeName(this,"body")||r(this).replaceWith(this.childNodes)}).end()}}),r.expr.filters.hidden=function(e){return!r.expr.filters.visible(e)},r.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0};var vr=/%20/g,yr=/\[\]$/,Tn=/\r?\n/g,xr=/^(?:submit|button|image|reset|file)$/i,wr=/^(?:input|select|textarea|keygen)/i;r.param=function(e,t){var n,a=[],o=function(i,s){s=r.isFunction(s)?s():s??"",a[a.length]=encodeURIComponent(i)+"="+encodeURIComponent(s)};if(t===void 0&&(t=r.ajaxSettings&&r.ajaxSettings.traditional),r.isArray(e)||e.jquery&&!r.isPlainObject(e))r.each(e,function(){o(this.name,this.value)});else for(n in e)Mt(n,e[n],t,o);return a.join("&").replace(vr,"+")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=r.prop(this,"elements");return e?r.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!r(this).is(":disabled")&&wr.test(this.nodeName)&&!xr.test(e)&&(this.checked||!dn.test(e))}).map(function(e,t){var n=r(this).val();return n==null?null:r.isArray(n)?r.map(n,function(a){return{name:t.name,value:a.replace(Tn,`\r
`)}}):{name:t.name,value:n.replace(Tn,`\r
`)}}).get()}}),r.ajaxSettings.xhr=function(){try{return new R.XMLHttpRequest}catch{}};var Ar={0:200,1223:204},vt=r.ajaxSettings.xhr();fe.cors=!!vt&&"withCredentials"in vt,fe.ajax=vt=!!vt,r.ajaxTransport(function(e){var t,n;return fe.cors||vt&&!e.crossDomain?{send:function(a,o){var i,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||a["X-Requested-With"]||(a["X-Requested-With"]="XMLHttpRequest");for(i in a)s.setRequestHeader(i,a[i]);t=function(p){return function(){t&&(t=n=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,p==="abort"?s.abort():p==="error"?typeof s.status!="number"?o(0,"error"):o(s.status,s.statusText):o(Ar[s.status]||s.status,s.statusText,(s.responseType||"text")!=="text"||typeof s.responseText!="string"?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=t(),n=s.onerror=t("error"),s.onabort!==void 0?s.onabort=n:s.onreadystatechange=function(){s.readyState===4&&R.setTimeout(function(){t&&n()})},t=t("abort");try{s.send(e.hasContent&&e.data||null)}catch(p){if(t)throw p}},abort:function(){t&&t()}}:void 0}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return r.globalEval(e),e}}}),r.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),r.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(a,o){t=r("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(i){t.remove(),n=null,i&&o(i.type==="error"?404:200,i.type)}),re.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Rn=[],Gt=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Rn.pop()||r.expando+"_"+Bt++;return this[e]=!0,e}}),r.ajaxPrefilter("json jsonp",function(e,t,n){var a,o,i,s=e.jsonp!==!1&&(Gt.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Gt.test(e.data)&&"data");return s||e.dataTypes[0]==="jsonp"?(a=e.jsonpCallback=r.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Gt,"$1"+a):e.jsonp!==!1&&(e.url+=(Ut.test(e.url)?"&":"?")+e.jsonp+"="+a),e.converters["script json"]=function(){return i||r.error(a+" was not called"),i[0]},e.dataTypes[0]="json",o=R[a],R[a]=function(){i=arguments},n.always(function(){o===void 0?r(R).removeProp(a):R[a]=o,e[a]&&(e.jsonpCallback=t.jsonpCallback,Rn.push(a)),i&&r.isFunction(o)&&o(i[0]),i=o=void 0}),"script"):void 0}),r.parseHTML=function(e,t,n){if(!e||typeof e!="string")return null;typeof t=="boolean"&&(n=t,t=!1),t=t||re;var a=ln.exec(e),o=!n&&[];return a?[t.createElement(a[1])]:(a=A([e],t,o),o&&o.length&&r(o).remove(),r.merge([],a.childNodes))};var Sn=r.fn.load;r.fn.load=function(e,t,n){if(typeof e!="string"&&Sn)return Sn.apply(this,arguments);var a,o,i,s=this,p=e.indexOf(" ");return p>-1&&(a=r.trim(e.slice(p)),e=e.slice(0,p)),r.isFunction(t)?(n=t,t=void 0):t&&typeof t=="object"&&(o="POST"),s.length>0&&r.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(y){i=arguments,s.html(a?r("<div>").append(r.parseHTML(y)).find(a):y)}).always(n&&function(y,N){s.each(function(){n.apply(this,i||[y.responseText,N,y])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){r.fn[t]=function(n){return this.on(t,n)}}),r.expr.filters.animated=function(e){return r.grep(r.timers,function(t){return e===t.elem}).length},r.offset={setOffset:function(e,t,n){var a,o,i,s,p,y,N,U=r.css(e,"position"),S=r(e),V={};U==="static"&&(e.style.position="relative"),p=S.offset(),i=r.css(e,"top"),y=r.css(e,"left"),N=(U==="absolute"||U==="fixed")&&(i+y).indexOf("auto")>-1,N?(a=S.position(),s=a.top,o=a.left):(s=parseFloat(i)||0,o=parseFloat(y)||0),r.isFunction(t)&&(t=t.call(e,n,r.extend({},p))),t.top!=null&&(V.top=t.top-p.top+s),t.left!=null&&(V.left=t.left-p.left+o),"using"in t?t.using.call(e,V):S.css(V)}},r.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(s){r.offset.setOffset(this,e,s)});var t,n,a=this[0],o={top:0,left:0},i=a&&a.ownerDocument;if(i)return t=i.documentElement,r.contains(t,a)?(o=a.getBoundingClientRect(),n=nn(i),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},position:function(){if(this[0]){var e,t,n=this[0],a={top:0,left:0};return r.css(n,"position")==="fixed"?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),r.nodeName(e[0],"html")||(a=e.offset()),a.top+=r.css(e[0],"borderTopWidth",!0),a.left+=r.css(e[0],"borderLeftWidth",!0)),{top:t.top-a.top-r.css(n,"marginTop",!0),left:t.left-a.left-r.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&r.css(e,"position")==="static";)e=e.offsetParent;return e||ht})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=t==="pageYOffset";r.fn[e]=function(a){return qe(this,function(o,i,s){var p=nn(o);return s===void 0?p?p[t]:o[i]:void(p?p.scrollTo(n?p.pageXOffset:s,n?s:p.pageYOffset):o[i]=s)},e,a,arguments.length)}}),r.each(["top","left"],function(e,t){r.cssHooks[t]=rt(fe.pixelPosition,function(n,a){return a?(a=ke(n,t),Ht.test(a)?r(n).position()[t]+"px":a):void 0})}),r.each({Height:"height",Width:"width"},function(e,t){r.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,a){r.fn[a]=function(o,i){var s=arguments.length&&(n||typeof o!="boolean"),p=n||(o===!0||i===!0?"margin":"border");return qe(this,function(y,N,U){var S;return r.isWindow(y)?y.document.documentElement["client"+e]:y.nodeType===9?(S=y.documentElement,Math.max(y.body["scroll"+e],S["scroll"+e],y.body["offset"+e],S["offset"+e],S["client"+e])):U===void 0?r.css(y,N,p):r.style(y,N,U,p)},t,s?o:void 0,s,null)}})}),r.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,a){return this.on(t,e,n,a)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},size:function(){return this.length}}),r.fn.andSelf=r.fn.addBack,v=[],h=(function(){return r}).apply(P,v),h!==void 0&&(q.exports=h);var Er=R.jQuery,Cr=R.$;return r.noConflict=function(e){return R.$===r&&(R.$=Cr),e&&R.jQuery===r&&(R.jQuery=Er),r},W||(R.jQuery=R.$=r),r})},function(q,P,x){(function(v){function h(d,F){if(!(d instanceof F))throw new TypeError("Cannot call a class as a function")}var R=function(){function d(F,j){for(var O=0;O<j.length;O++){var k=j[O];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(F,k.key,k)}}return function(F,j,O){return j&&d(F.prototype,j),O&&d(F,O),F}}(),W=x(21);x(49);var L=function(){function d(){h(this,d),this.panel=new W(this),this.$checkbox=null}return R(d,[{key:"getTitle",value:function(){return"New plugin"}},{key:"getDescription",value:function(){return""}},{key:"summary",value:function(F){return this.panel.setSummary(F)}},{key:"about",value:function(F){return this.panel.setAbout(F)}},{key:"error",value:function(F,j,O){return this.panel.addError(F,j,O)}},{key:"render",value:function(F){var j=this;this.$checkbox=v("input",{className:"tota11y-plugin-checkbox tota11y-sr-only",type:"checkbox",onClick:function(){return F(j)}});var O=v("label",{className:"tota11y-plugin-switch"},this.$checkbox,v("div",{"aria-hidden":"true",className:"tota11y-plugin-indicator"},"✓"),v("div",{className:"tota11y-plugin-info"},v("div",{className:"tota11y-plugin-title"},this.getTitle()),v("div",{className:"tota11y-plugin-description"},this.getDescription()))),k=v("li",{role:"menu-item",className:"tota11y-plugin"},O);return k}},{key:"activate",value:function(){this.run(),this.panel.render()}},{key:"deactivate",value:function(){this.cleanup(),this.panel.destroy(),this.$checkbox.prop("checked",!1)}}]),d}();q.exports=L}).call(P,x(4))},function(q,P,x){var v=x(1),h=x(33);x(47);var R=25;window.requestAnimationFrame=window.requestAnimationFrame||function(W){window.setTimeout(W,16)},q.exports=function(W){var L="tota11y-annotation-"+W,d=[],F=function(O,k){var _=v("<div>").addClass("tota11y").addClass(L).addClass(k).css(O.position()).data({$el:O});return d.push({$annotation:_,$parent:O.offsetParent()}),_},j=20;return function O(){for(var k=0;d.length>0&&j>k;k++){var _=d.shift();_.$parent.append(_.$annotation)}window.requestAnimationFrame(O)}(),v(window).resize(function(){var O=v("."+L),k=O.map(function(_,u){return v(u).data("$el").position()});O.each(function(_,u){v(u).css({top:k[_].top,left:k[_].left})})}),{label:function(O){var k=arguments.length<=1||arguments[1]===void 0?O.prop("tagName").toLowerCase():arguments[1];return function(){var _=F(O,"tota11y-label");return _.html(k)}()},errorLabel:function(O,k,_,u){var c=v(h({text:k,detail:_,hasErrorEntry:!!u}));return u&&(c.find(".tota11y-label-link").click(function(g){g.preventDefault(),g.stopPropagation(),u.show()}),c.hover(function(){u.$trigger.addClass("trigger-highlight")},function(){u.$trigger.removeClass("trigger-highlight")})),this.label(O).addClass("tota11y-label-error").html(c)},highlight:function(O){var k=F(O,"tota11y-highlight");return k.css({width:Math.max(R,O.outerWidth(!0)),height:Math.max(R,O.outerHeight(!0))})},toggleHighlight:function(O,k){var _=this,u=void 0;k.on("mouseenter focus",function(){u&&u.remove(),u=_.highlight(O)}),k.on("mouseleave blur",function(){u&&(u.remove(),u=null)})},hide:function(){v(".tota11y.tota11y-label").hide()},show:function(){v(".tota11y.tota11y-label").show()},removeAll:function(){v("."+L).remove()}}}},function(q,P,x){function v(h,R){var W=arguments,L=x(1);if(R===void 0)return h;if(h.render)return h.render(R&&R.onClick);var d,F,j,O=function(){var k=L("<"+h+">");if(R!==null)for(var _ in R)if(_==="onClick"){var u=R[_];k.click(u)}else if(/^aria-/.test(_)||_==="role"){var c=R[_];k.attr(_,c)}else{var c=R[_];k.prop(_,c)}for(d=W.length,F=Array(d>2?d-2:0),j=2;d>j;j++)F[j-2]=W[j];return F.forEach(function(g){k.append(v(g))}),{v:k}}();return typeof O=="object"?O.v:void 0}q.exports=v},function(q,P){q.exports=function(){var x=[];return x.toString=function(){for(var v=[],h=0;h<this.length;h++){var R=this[h];R[2]?v.push("@media "+R[2]+"{"+R[1]+"}"):v.push(R[1])}return v.join("")},x.i=function(v,h){typeof v=="string"&&(v=[[null,v,""]]);for(var R={},W=0;W<this.length;W++){var L=this[W][0];typeof L=="number"&&(R[L]=!0)}for(var W=0;W<v.length;W++){var d=v[W];typeof d[0]=="number"&&R[d[0]]||(h&&!d[2]?d[2]=h:h&&(d[2]="("+d[2]+") and ("+h+")"),x.push(d))}},x}},function(q,P,x){q.exports=x(36).default},function(q,P,x){function v(w,D){for(var T=0;T<w.length;T++){var b=w[T],E=O[b.id];if(E){E.refs++;for(var M=0;M<E.parts.length;M++)E.parts[M](b.parts[M]);for(;M<b.parts.length;M++)E.parts.push(L(b.parts[M],D))}else{for(var Y=[],M=0;M<b.parts.length;M++)Y.push(L(b.parts[M],D));O[b.id]={id:b.id,refs:1,parts:Y}}}}function h(w){for(var D=[],T={},b=0;b<w.length;b++){var E=w[b],M=E[0],Y=E[1],ee=E[2],ae=E[3],pe={css:Y,media:ee,sourceMap:ae};T[M]?T[M].parts.push(pe):D.push(T[M]={id:M,parts:[pe]})}return D}function R(){var w=document.createElement("style"),D=u();return w.type="text/css",D.appendChild(w),w}function W(){var w=document.createElement("link"),D=u();return w.rel="stylesheet",D.appendChild(w),w}function L(w,D){var T,b,E;if(D.singleton){var M=g++;T=c||(c=R()),b=d.bind(null,T,M,!1),E=d.bind(null,T,M,!0)}else w.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(T=W(),b=j.bind(null,T),E=function(){T.parentNode.removeChild(T),T.href&&URL.revokeObjectURL(T.href)}):(T=R(),b=F.bind(null,T),E=function(){T.parentNode.removeChild(T)});return b(w),function(Y){if(Y){if(Y.css===w.css&&Y.media===w.media&&Y.sourceMap===w.sourceMap)return;b(w=Y)}else E()}}function d(w,D,T,b){var E=T?"":b.css;if(w.styleSheet)w.styleSheet.cssText=A(D,E);else{var M=document.createTextNode(E),Y=w.childNodes;Y[D]&&w.removeChild(Y[D]),Y.length?w.insertBefore(M,Y[D]):w.appendChild(M)}}function F(w,D){var T=D.css,b=D.media;if(D.sourceMap,b&&w.setAttribute("media",b),w.styleSheet)w.styleSheet.cssText=T;else{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(document.createTextNode(T))}}function j(w,D){var T=D.css,b=(D.media,D.sourceMap);b&&(T+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(JSON.stringify(b))+" */");var E=new Blob([T],{type:"text/css"}),M=w.href;w.href=URL.createObjectURL(E),M&&URL.revokeObjectURL(M)}var O={},k=function(w){var D;return function(){return typeof D>"u"&&(D=w.apply(this,arguments)),D}},_=k(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),u=k(function(){return document.head||document.getElementsByTagName("head")[0]}),c=null,g=0;q.exports=function(w,D){D=D||{},typeof D.singleton>"u"&&(D.singleton=_());var T=h(w);return v(T,D),function(b){for(var E=[],M=0;M<T.length;M++){var Y=T[M],ee=O[Y.id];ee.refs--,E.push(ee)}if(b){var ae=h(b);v(ae,D)}for(var M=0;M<E.length;M++){var ee=E[M];if(ee.refs===0){for(var pe=0;pe<ee.parts.length;pe++)ee.parts[pe]();delete O[ee.id]}}}};var A=function(){var w=[];return function(D,T){return w[D]=T,w.filter(Boolean).join(`
`)}}()},,function(q,P){function x(h,R){var W=R&&R.loc,L=void 0,d=void 0;W&&(L=W.start.line,d=W.start.column,h+=" - "+L+":"+d);for(var F=Error.prototype.constructor.call(this,h),j=0;j<v.length;j++)this[v[j]]=F[v[j]];Error.captureStackTrace&&Error.captureStackTrace(this,x),W&&(this.lineNumber=L,this.column=d)}P.__esModule=!0;var v=["description","fileName","lineNumber","message","name","number","stack"];x.prototype=new Error,P.default=x,q.exports=P.default},function(q,P){function x(c){return F[c]}function v(c){for(var g=1;g<arguments.length;g++)for(var A in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],A)&&(c[A]=arguments[g][A]);return c}function h(c,g){for(var A=0,w=c.length;w>A;A++)if(c[A]===g)return A;return-1}function R(c){if(typeof c!="string"){if(c&&c.toHTML)return c.toHTML();if(c==null)return"";if(!c)return c+"";c=""+c}return O.test(c)?c.replace(j,x):c}function W(c){return c||c===0?!(!u(c)||c.length!==0):!0}function L(c,g){return c.path=g,c}function d(c,g){return(c?c+".":"")+g}P.__esModule=!0,P.extend=v,P.indexOf=h,P.escapeExpression=R,P.isEmpty=W,P.blockParams=L,P.appendContextPath=d;var F={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},j=/[&<>"'`]/g,O=/[&<>"'`]/,k=Object.prototype.toString;P.toString=k;var _=function(c){return typeof c=="function"};_(/x/)&&(P.isFunction=_=function(c){return typeof c=="function"&&k.call(c)==="[object Function]"});var _;P.isFunction=_;var u=Array.isArray||function(c){return c&&typeof c=="object"?k.call(c)==="[object Array]":!1};P.isArray=u},function(q,P){function x(){return axs.AuditRules.getRules().map(function(W){return W.name})}function v(W){var L=new axs.AuditConfiguration;return L.showUnsupportedRulesWarning=!1,L.ignoreSelectors(W,".tota11y *"),x().forEach(function(d){d!==W&&L.ignoreSelectors(d,"*")}),L}function h(){axs.AuditRule.collectMatchingElements=function(W,L,d,F){if(W.nodeType===Node.ELEMENT_NODE)var j=W;if(j&&L.call(null,j)&&d.push(j),j){var O=j.shadowRoot||j.webkitShadowRoot;if(O)return void axs.AuditRule.collectMatchingElements(O,L,d,O)}if(j&&j.localName=="content")for(var k=j,_=k.getDistributedNodes(),u=0;u<_.length;u++)axs.AuditRule.collectMatchingElements(_[u],L,d,F);else{if(j&&j.localName=="shadow"){var c=j;if(F)for(var _=c.getDistributedNodes(),u=0;u<_.length;u++)axs.AuditRule.collectMatchingElements(_[u],L,d,F);else console.warn("ShadowRoot not provided for",j)}for(var g=W.firstChild;g!=null;)axs.AuditRule.collectMatchingElements(g,L,d,F),g=g.nextSibling}}}function R(W){var L=v(W);return h(),axs.Audit.run(L).filter(function(d){return d.rule.name===W})[0]}q.exports=R},function(q,P,x){function v(T,b){this.helpers=T||{},this.partials=b||{},h(this)}function h(T){T.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new j.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}),T.registerHelper("blockHelperMissing",function(b,E){var M=E.inverse,Y=E.fn;if(b===!0)return Y(this);if(b===!1||b==null)return M(this);if(u(b))return b.length>0?(E.ids&&(E.ids=[E.name]),T.helpers.each(b,E)):M(this);if(E.data&&E.ids){var ee=R(E.data);ee.contextPath=d.appendContextPath(E.data.contextPath,E.name),E={data:ee}}return Y(b,E)}),T.registerHelper("each",function(b,E){function M(He,ct,Et){be&&(be.key=He,be.index=ct,be.first=ct===0,be.last=!!Et,ze&&(be.contextPath=ze+He)),pe+=Y(b[He],{data:be,blockParams:d.blockParams([b[He],He],[ze+He,null])})}if(!E)throw new j.default("Must pass iterator to #each");var Y=E.fn,ee=E.inverse,ae=0,pe="",be=void 0,ze=void 0;if(E.data&&E.ids&&(ze=d.appendContextPath(E.data.contextPath,E.ids[0])+"."),c(b)&&(b=b.call(this)),E.data&&(be=R(E.data)),b&&typeof b=="object")if(u(b))for(var ut=b.length;ut>ae;ae++)M(ae,ae,ae===b.length-1);else{var ke=void 0;for(var rt in b)b.hasOwnProperty(rt)&&(ke&&M(ke,ae-1),ke=rt,ae++);ke&&M(ke,ae-1,!0)}return ae===0&&(pe=ee(this)),pe}),T.registerHelper("if",function(b,E){return c(b)&&(b=b.call(this)),!E.hash.includeZero&&!b||d.isEmpty(b)?E.inverse(this):E.fn(this)}),T.registerHelper("unless",function(b,E){return T.helpers.if.call(this,b,{fn:E.inverse,inverse:E.fn,hash:E.hash})}),T.registerHelper("with",function(b,E){c(b)&&(b=b.call(this));var M=E.fn;if(d.isEmpty(b))return E.inverse(this);if(E.data&&E.ids){var Y=R(E.data);Y.contextPath=d.appendContextPath(E.data.contextPath,E.ids[0]),E={data:Y}}return M(b,E)}),T.registerHelper("log",function(b,E){var M=E.data&&E.data.level!=null?parseInt(E.data.level,10):1;T.log(M,b)}),T.registerHelper("lookup",function(b,E){return b&&b[E]})}function R(T){var b=d.extend({},T);return b._parent=T,b}var W=function(T){return T&&T.__esModule?T:{default:T}};P.__esModule=!0,P.HandlebarsEnvironment=v,P.createFrame=R;var L=x(10),d=W(L),F=x(9),j=W(F),O="3.0.1";P.VERSION=O;var k=6;P.COMPILER_REVISION=k;var _={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};P.REVISION_CHANGES=_;var u=d.isArray,c=d.isFunction,g=d.toString,A="[object Object]";v.prototype={constructor:v,logger:w,log:D,registerHelper:function(T,b){if(g.call(T)===A){if(b)throw new j.default("Arg not supported with multiple helpers");d.extend(this.helpers,T)}else this.helpers[T]=b},unregisterHelper:function(T){delete this.helpers[T]},registerPartial:function(T,b){if(g.call(T)===A)d.extend(this.partials,T);else{if(typeof b>"u")throw new j.default("Attempting to register a partial as undefined");this.partials[T]=b}},unregisterPartial:function(T){delete this.partials[T]}};var w={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:1,log:function(T,b){if(typeof console<"u"&&w.level<=T){var E=w.methodMap[T];(console[E]||console.log).call(console,b)}}};P.logger=w;var D=w.log;P.log=D},function(q,P,x){(function(v){function h(O,k){if(!(O instanceof k))throw new TypeError("Cannot call a class as a function")}function R(O,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof k);O.prototype=Object.create(k&&k.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}}),k&&(Object.setPrototypeOf?Object.setPrototypeOf(O,k):O.__proto__=k)}var W=function(){function O(k,_){for(var u=0;u<_.length;u++){var c=_[u];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(k,c.key,c)}}return function(k,_,u){return _&&O(k.prototype,_),u&&O(k,u),k}}(),L=function(O,k,_){for(var u=!0;u;){var c=O,g=k,A=_;u=!1,c===null&&(c=Function.prototype);var w=Object.getOwnPropertyDescriptor(c,g);if(w!==void 0){if("value"in w)return w.value;var D=w.get;return D===void 0?void 0:D.call(A)}var T=Object.getPrototypeOf(c);if(T===null)return;O=T,k=g,_=A,u=!0,w=T=void 0}},d=x(1),F=x(2);x(44);var j=function(O){function k(){h(this,k),L(Object.getPrototypeOf(k.prototype),"constructor",this).apply(this,arguments)}return R(k,O),W(k,[{key:"getTitle",value:function(){return"Screen Reader Wand"}},{key:"getDescription",value:function(){return"Hover over elements to view them as a screen reader would"}},{key:"run",value:function(){this.summary(" "),this.panel.render(),d(document).on("mousemove.wand",function(_){var u=document.elementFromPoint(_.clientX,_.clientY),c=axs.properties.findTextAlternatives(u,{});d(".tota11y-outlined").removeClass("tota11y-outlined"),d(u).addClass("tota11y-outlined"),c?d(".tota11y-info-section.active").text(c):d(".tota11y-info-section.active").html(v("i",{className:"tota11y-nothingness"},"No text visible to a screen reader"))})}},{key:"cleanup",value:function(){d(".tota11y-outlined").removeClass("tota11y-outlined"),d(document).off("mousemove.wand")}}]),k}(F);q.exports=j}).call(P,x(4))},function(q,P,x){(function(v){function h(_,u){if(!(_ instanceof u))throw new TypeError("Cannot call a class as a function")}function R(_,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);_.prototype=Object.create(u&&u.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(_,u):_.__proto__=u)}var W=function(){function _(u,c){for(var g=0;g<c.length;g++){var A=c[g];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(u,A.key,A)}}return function(u,c,g){return c&&_(u.prototype,c),g&&_(u,g),u}}(),L=function(_,u,c){for(var g=!0;g;){var A=_,w=u,D=c;g=!1,A===null&&(A=Function.prototype);var T=Object.getOwnPropertyDescriptor(A,w);if(T!==void 0){if("value"in T)return T.value;var b=T.get;return b===void 0?void 0:b.call(D)}var E=Object.getPrototypeOf(A);if(E===null)return;_=E,u=w,c=D,g=!0,T=E=void 0}},d=x(1),F=x(2),j=x(3)("alt-text"),O=x(11),k=function(_){function u(){h(this,u),L(Object.getPrototypeOf(u.prototype),"constructor",this).apply(this,arguments)}return R(u,_),W(u,[{key:"getTitle",value:function(){return"Image alt-text"}},{key:"getDescription",value:function(){return"Annotates images without alt text"}},{key:"reportError",value:function(c){var g=d(c),A=g.attr("src")||"..",w="Image is missing alt text",D=v("div",null,v("p",null,'This image does not have an associated "alt" attribute. Please specify the alt text for this image like so:'),v("pre",null,v("code",null,'&lt;img src="'+A+'" alt="Image description"&gt')),v("p",null,'If the image is decorative and does not convey any information to the surrounding content, however, you may leave this "alt" attribute empty, or specify a "role" attribute with a value of "presentation."'),v("pre",null,v("code",null,'&lt;img src="'+A+'" alt=""&gt;',v("br",null),'&lt;img src="'+A+'" role="presentation"&gt;'))),T=this.error(w,D,g);j.errorLabel(g,"",w,T)}},{key:"run",value:function(){var c=O("imagesWithoutAltText"),g=c.result,A=c.elements;g==="FAIL"&&A.forEach(this.reportError.bind(this)),d('img[role="presentation"], img[alt=""]').each(function(w,D){j.errorLabel(d(D),"","This image is decorative").addClass("tota11y-label-warning")})}},{key:"cleanup",value:function(){j.removeAll()}}]),u}(F);q.exports=k}).call(P,x(4))},function(q,P,x){function v(_,u){if(!(_ instanceof u))throw new TypeError("Cannot call a class as a function")}function h(_,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);_.prototype=Object.create(u&&u.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(_,u):_.__proto__=u)}var R=function(){function _(u,c){for(var g=0;g<c.length;g++){var A=c[g];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(u,A.key,A)}}return function(u,c,g){return c&&_(u.prototype,c),g&&_(u,g),u}}(),W=function(_,u,c){for(var g=!0;g;){var A=_,w=u,D=c;g=!1,A===null&&(A=Function.prototype);var T=Object.getOwnPropertyDescriptor(A,w);if(T!==void 0){if("value"in T)return T.value;var b=T.get;return b===void 0?void 0:b.call(D)}var E=Object.getPrototypeOf(A);if(E===null)return;_=E,u=w,c=D,g=!0,T=E=void 0}},L=x(1),d=x(2),F=x(3)("contrast"),j=x(30),O=x(29);x(45);var k=function(_){function u(){v(this,u),W(Object.getPrototypeOf(u.prototype),"constructor",this).call(this),this.preservedColors=[]}return h(u,_),R(u,[{key:"getTitle",value:function(){return"Contrast"}},{key:"getDescription",value:function(){return"Labels elements with insufficient contrast"}},{key:"addError",value:function(c,g){var A=c.style,w=c.fgColor,D=c.bgColor,T=c.contrastRatio,b=c.requiredRatio,E=axs.color.suggestColors(D,w,{AA:b}).AA,M={fgColorHex:axs.color.colorToString(w),bgColorHex:axs.color.colorToString(D),contrastRatio:T,requiredRatio:b,suggestedFgColorHex:E.fg,suggestedBgColorHex:E.bg,suggestedColorsRatio:E.contrast},Y=L(O(M)),ee=A.color,ae=A.backgroundColor;return Y.find(".preview-contrast-fix").click(function(pe){L(pe.target).prop("checked")?(L(g).css("color",E.fg),L(g).css("background-color",E.bg)):(L(g).css("color",ee),L(g).css("background-color",ae))}),this.error(j(M),Y,L(g))}},{key:"run",value:function(){var c=this,g={};L("*").each(function(A,w){if(axs.properties.hasDirectTextDescendant(w)&&!(L(w).parents(".tota11y").length>0||axs.utils.elementIsTransparent(w)||axs.utils.elementHasZeroArea(w))){var D=getComputedStyle(w),T=axs.utils.getBgColor(D,w),b=axs.utils.getFgColor(D,w,T),E=axs.color.calculateContrastRatio(b,T).toFixed(2),M=axs.utils.isLargeFont(D)?3:4.5,Y=axs.color.colorToString(b)+"/"+axs.color.colorToString(T)+"/"+M;if(axs.utils.isLowContrast(E,D)){if(!g[Y]){var ee=c.addError({style:D,fgColor:b,bgColor:T,contrastRatio:E,requiredRatio:M},w);c.preservedColors.push({$el:L(w),fg:D.color,bg:D.backgroundColor}),g[Y]=ee}F.errorLabel(L(w),E,"This contrast is insufficient at this size.",g[Y])}else g[Y]||(F.label(L(w),E).addClass("tota11y-label-success"),g[Y]=!0)}})}},{key:"cleanup",value:function(){this.preservedColors.forEach(function(c){c.$el.css("color",c.fg),c.$el.css("background-color",c.bg)}),F.removeAll()}}]),u}(d);q.exports=k},function(q,P,x){(function(v){function h(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")}function R(u,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);u.prototype=Object.create(c&&c.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(u,c):u.__proto__=c)}var W=function(){function u(c,g){for(var A=0;A<g.length;A++){var w=g[A];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(c,w.key,w)}}return function(c,g,A){return g&&u(c.prototype,g),A&&u(c,A),c}}(),L=function(u,c,g){for(var A=!0;A;){var w=u,D=c,T=g;A=!1,w===null&&(w=Function.prototype);var b=Object.getOwnPropertyDescriptor(w,D);if(b!==void 0){if("value"in b)return b.value;var E=b.get;return E===void 0?void 0:E.call(T)}var M=Object.getPrototypeOf(w);if(M===null)return;u=M,c=D,g=T,A=!0,b=M=void 0}},d=x(1),F=x(2),j=x(3)("headings"),O=x(31);x(46);var k={FIRST_NOT_H1:function(u){return{title:"First heading is not an &lt;h1&gt;",description:`
                <div>
                    To give your document a proper structure for assistive
                    technologies, it is important to lay out your headings
                    beginning with an <code>&lt;h1&gt;</code>. We found an
                    <code>&lt;h`+u+`&gt;</code> instead.
                </div>
            `}},MULTIPLE_H1:{title:"&lt;h1&gt; used when one is already present"},NONCONSECUTIVE_HEADER:function(u,c){var g=function(w){return"<code>&lt;h"+w+"&gt;</code>"},A=`
            <div>
                This document contains an `+g(c)+` tag directly
                following an `+g(u)+`. In order to maintain a consistent
                outline of the page for assistive technologies, reduce the gap in
                the heading level by upgrading this tag to an
                `+g(u+1);return u!==1&&(A+=" or "+g(u)),A+=".</div>",{title:`
                Nonconsecutive heading level used (h`+u+` &rarr;
                h`+c+`)
            `,description:A}}},_=function(u){function c(){h(this,c),L(Object.getPrototypeOf(c.prototype),"constructor",this).apply(this,arguments)}return R(c,u),W(c,[{key:"getTitle",value:function(){return"Headings"}},{key:"getDescription",value:function(){return`
            Highlights headings (&lt;h1&gt;, &lt;h2&gt;, etc) and
            order violations
        `}},{key:"outline",value:function(g){var A=this,w=[],D=void 0;return g.each(function(T,b){var E=d(b),M=+E.prop("tagName").slice(1),Y=void 0;T===0&&M!==1?Y=k.FIRST_NOT_H1(M):D&&M-D>1&&(Y=k.NONCONSECUTIVE_HEADER(D,M)),D=M;var ee=d(O({level:M,text:E.text()}));if(w.push(ee),j.toggleHighlight(E,ee),Y){var ae=A.error(Y.title,d(Y.description),E);j.errorLabel(E,E.prop("tagName").toLowerCase(),Y.title,ae),ee.find(".tota11y-heading-outline-level").addClass("tota11y-label-error")}else j.label(E).addClass("tota11y-label-success"),ee.find(".tota11y-heading-outline-level").addClass("tota11y-label-success")}),w}},{key:"run",value:function(){var g=d("h1, h2, h3, h4, h5, h6"),A=this.outline(g);if(A.length){var w=v("div",{className:"tota11y-heading-outline"},A);this.summary(w)}}},{key:"cleanup",value:function(){j.removeAll()}}]),c}(F);q.exports=_}).call(P,x(4))},function(q,P,x){var v=x(14),h=x(15),R=x(16),W=x(18),L=x(19),d=x(20),F=x(13);q.exports={default:[new R,new h,new d,new W,new v,new L],experimental:[new F]}},function(q,P,x){function v(_,u){if(!(_ instanceof u))throw new TypeError("Cannot call a class as a function")}function h(_,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);_.prototype=Object.create(u&&u.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(_,u):_.__proto__=u)}var R=function(){function _(u,c){for(var g=0;g<c.length;g++){var A=c[g];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(u,A.key,A)}}return function(u,c,g){return c&&_(u.prototype,c),g&&_(u,g),u}}(),W=function(_,u,c){for(var g=!0;g;){var A=_,w=u,D=c;g=!1,A===null&&(A=Function.prototype);var T=Object.getOwnPropertyDescriptor(A,w);if(T!==void 0){if("value"in T)return T.value;var b=T.get;return b===void 0?void 0:b.call(D)}var E=Object.getPrototypeOf(A);if(E===null)return;_=E,u=w,c=D,g=!0,T=E=void 0}},L=x(1),d=x(2),F=x(3)("labels"),j=x(11),O=x(32),k=function(_){function u(){v(this,u),W(Object.getPrototypeOf(u.prototype),"constructor",this).apply(this,arguments)}return h(u,_),R(u,[{key:"getTitle",value:function(){return"Labels"}},{key:"getDescription",value:function(){return"Identifies inputs with missing labels"}},{key:"errorMessage",value:function(c){return O({placeholder:c.attr("placeholder"),id:c.attr("id"),tagName:c.prop("tagName").toLowerCase()})}},{key:"run",value:function(){var c=this,g=j("controlsWithoutLabel"),A=g.result,w=g.elements;A==="FAIL"&&w.forEach(function(D){var T=L(D),b="Input is missing a label",E=c.error(b,L(c.errorMessage(T)),T);F.errorLabel(T,"",b,E)})}},{key:"cleanup",value:function(){F.removeAll()}}]),u}(d);q.exports=k},function(q,P,x){function v(O,k){if(!(O instanceof k))throw new TypeError("Cannot call a class as a function")}function h(O,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof k);O.prototype=Object.create(k&&k.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}}),k&&(Object.setPrototypeOf?Object.setPrototypeOf(O,k):O.__proto__=k)}var R=function(){function O(k,_){for(var u=0;u<_.length;u++){var c=_[u];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(k,c.key,c)}}return function(k,_,u){return _&&O(k.prototype,_),u&&O(k,u),k}}(),W=function(O,k,_){for(var u=!0;u;){var c=O,g=k,A=_;u=!1,c===null&&(c=Function.prototype);var w=Object.getOwnPropertyDescriptor(c,g);if(w!==void 0){if("value"in w)return w.value;var D=w.get;return D===void 0?void 0:D.call(A)}var T=Object.getPrototypeOf(c);if(T===null)return;O=T,k=g,_=A,u=!0,w=T=void 0}},L=x(1),d=x(2),F=x(3)("landmarks"),j=function(O){function k(){v(this,k),W(Object.getPrototypeOf(k.prototype),"constructor",this).apply(this,arguments)}return h(k,O),R(k,[{key:"getTitle",value:function(){return"Landmarks"}},{key:"getDescription",value:function(){return"Labels all ARIA landmarks"}},{key:"run",value:function(){L("[role]:not(.tota11y-toolbar,.tota11y-plugin)").each(function(){F.label(L(this),L(this).attr("role"))})}},{key:"cleanup",value:function(){F.removeAll()}}]),k}(d);q.exports=j},function(q,P,x){(function(v){function h(k,_){if(!(k instanceof _))throw new TypeError("Cannot call a class as a function")}function R(k,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);k.prototype=Object.create(_&&_.prototype,{constructor:{value:k,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(k,_):k.__proto__=_)}var W=function(){function k(_,u){for(var c=0;c<u.length;c++){var g=u[c];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(_,g.key,g)}}return function(_,u,c){return u&&k(_.prototype,u),c&&k(_,c),_}}(),L=function(k,_,u){for(var c=!0;c;){var g=k,A=_,w=u;c=!1,g===null&&(g=Function.prototype);var D=Object.getOwnPropertyDescriptor(g,A);if(D!==void 0){if("value"in D)return D.value;var T=D.get;return T===void 0?void 0:T.call(w)}var b=Object.getPrototypeOf(g);if(b===null)return;k=b,_=A,u=w,c=!0,D=b=void 0}},d=x(1),F=x(2),j=x(3)("link-text"),O=function(k){function _(){h(this,_),L(Object.getPrototypeOf(_.prototype),"constructor",this).apply(this,arguments)}return R(_,k),W(_,[{key:"getTitle",value:function(){return"Link text"}},{key:"getDescription",value:function(){return`
            Identifies links that may be confusing when read by a screen
            reader
        `}},{key:"isDescriptiveText",value:function(u){if(typeof u>"u"||u===null)return!1;var c=["click","tap","go","here","learn","more","this","page","link","about"],g=new RegExp("\\b("+c.join("|")+")\\b","ig");return u=u.replace(/[^a-zA-Z ]/g,"").replace(g,""),u.trim()!==""}},{key:"reportError",value:function(u,c,g){var A=this.error("Link text is unclear",c,u);j.errorLabel(u,"",'Link text "'+g+'" is unclear',A)}},{key:"run",value:function(){var u=this;d("a").each(function(c,g){var A=d(g);if(!A.parents(".tota11y").length&&!axs.utils.isElementOrAncestorHidden(g)){var w={},D=axs.properties.findTextAlternatives(g,w);if(!u.isDescriptiveText(D)){var T=v("div",null,"The text"," ",v("i",null,'"',D,'"')," ","is unclear without context and may be confusing to screen readers. Consider rearranging the"," ",v("code",null,"&lt;a&gt;&lt;/a&gt;")," ","tags or including special screen reader text.");u.reportError(A,T,D)}}})}},{key:"cleanup",value:function(){j.removeAll()}}]),_}(F);q.exports=O}).call(P,x(4))},function(q,P,x){(function(v){function h(_,u){if(!(_ instanceof u))throw new TypeError("Cannot call a class as a function")}var R=function(){function _(u,c){for(var g=0;g<c.length;g++){var A=c[g];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(u,A.key,A)}}return function(u,c,g){return c&&_(u.prototype,c),g&&_(u,g),u}}(),W=x(1),L=x(3)("info-panel"),d=x(34);x(48);var F=10,j="tota11y-collapsed",O="tota11y-info-hidden",k=function(){function _(u){h(this,_),this.plugin=u,this.about=null,this.summary=null,this.errors=[],this.$el=null}return R(_,[{key:"setAbout",value:function(u){this.about=u}},{key:"setSummary",value:function(u){this.summary=u}},{key:"addError",value:function(u,c,g){var A={title:u,$description:c,$el:g};return this.errors.push(A),A}},{key:"_addTab",value:function(u,c){var g=this,A=v("li",{className:"tota11y-info-tab"},v("a",{className:"tota11y-info-tab-anchor",href:"#"},v("span",{className:"tota11y-info-tab-anchor-text"},u)));this.$el.find(".tota11y-info-tabs").append(A);var w=W("<div>").addClass("tota11y-info-section").html(c);return this.$el.find(".tota11y-info-sections").append(w),A.on("activate",function(){g.$el.find(".tota11y-info-tab.active").removeClass("active"),g.$el.find(".tota11y-info-section.active").removeClass("active"),A.addClass("active"),w.addClass("active")}),A.on("click",function(D){D.preventDefault(),D.stopPropagation(),A.trigger("activate")}),A}},{key:"initAndPosition",value:function(){var u=this,c=void 0,g=void 0;this.$el.find(".tota11y-info-dismiss-trigger").click(function(M){M.preventDefault(),M.stopPropagation(),u.$el.addClass(O),u.plugin.$checkbox.focus()}),W("body").append(this.$el),c=window.innerWidth-this.$el.width()-F,g=window.innerHeight-this.$el.height()-F;var A=this.$el.find(".tota11y-info-title"),w=!1,D=void 0,T=void 0,b=void 0,E=void 0;A.on("mousedown",function(M){M.preventDefault(),w=!0,D=M.pageX,T=M.pageY,b=c,E=g}).on("mouseup",function(M){M.preventDefault(),w=!1}),W(window).on("mousemove",function(M){if(w){M.preventDefault();var Y=M.pageX-D,ee=M.pageY-T;c=b+Y,g=E+ee,u.$el.css({left:c,top:g})}}),this.$el.css({left:c,top:g})}},{key:"render",value:function(){var u=this;this.$el&&this.$el.remove();var c=!1;this.$el=v("div",{className:"tota11y tota11y-info",tabindex:"-1"},v("header",{className:"tota11y-info-title"},this.plugin.getTitle(),v("span",{className:"tota11y-info-controls"},v("label",{className:"tota11y-info-annotation-toggle"},"Annotate:"," ",v("input",{className:"toggle-annotation",type:"checkbox",checked:"checked"})),v("a",{"aria-label":"Close info panel",href:"#",className:"tota11y-info-dismiss-trigger"},"×"))),v("div",{className:"tota11y-info-body"},v("div",{className:"tota11y-info-sections"}),v("ul",{role:"tablist",className:"tota11y-info-tabs"})));var g=void 0;return this.about&&(g=this._addTab("About",this.about)),this.summary&&(g=this._addTab("Summary",this.summary)),this.$el.find(".toggle-annotation").click(function(A){W(A.target).prop("checked")?L.show():L.hide()}),this.errors.length>0&&function(){var A=W("<ul>").addClass("tota11y-info-errors"),w=void 0;u.errors.forEach(function(T,b){var E=W(d(T));E.find(".tota11y-info-error-description").prepend(T.$description),A.append(E);var M=E.find(".tota11y-info-error-trigger"),Y=E.find(".tota11y-info-error-description");M.click(function(be){be.preventDefault(),be.stopPropagation(),M.toggleClass(j),Y.toggleClass(j)}),T.show=function(){u.$el.removeClass(O),M.removeClass(j),Y.removeClass(j),w.trigger("activate");var be=M.parents(".tota11y-info-section");be[0].scrollTop=M[0].offsetTop-10},T.$trigger=M;var ee=E.find(".tota11y-info-error-scroll");ee.click(function(be){be.preventDefault(),be.stopPropagation(),W(document).scrollTop(T.$el.offset().top-80)}),b===0&&(Y.toggleClass(j),M.toggleClass(j)),L.toggleHighlight(T.$el,M),L.toggleHighlight(T.$el,ee);var ae=T.$el[0].outerHTML;ae.length>300&&(ae=ae.substring(0,300)+"...");var pe=E.find(".tota11y-info-error-description-code-container code");pe.text(ae)}),w=g=u._addTab("Errors",A);var D=W("<div>").addClass("tota11y-info-error-count").text(u.errors.length);g.find(".tota11y-info-tab-anchor").append(D)}(),g&&(g.trigger("activate"),c=!0),c&&this.initAndPosition(),this.$el.focus(),this.$el}},{key:"destroy",value:function(){this.about=null,this.summary=null,this.errors=[],this.$el&&(this.$el.remove(),this.$el=null),L.removeAll()}}]),_}();q.exports=k}).call(P,x(4))},function(q,P,x){P=q.exports=x(5)(),P.push([q.id,".tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y,.tota11y *{border:none!important;background-color:inherit!important;box-sizing:border-box!important;color:#f2f2f2!important;font-family:Arial!important;font-size:14px!important;font-style:normal!important;font-weight:400!important;line-height:1.35!important;margin:0!important;padding:0!important;text-align:left!important;text-shadow:none!important}.tota11y p,.tota11y pre{margin:0 0 10px!important}.tota11y *{height:auto!important;width:auto!important}.tota11y-toolbar-logo,.tota11y-toolbar-logo svg{height:25px!important}.tota11y strong{font-weight:700!important}.tota11y code,.tota11y pre{background-color:#ddd!important;border:none!important;border-radius:0!important;color:inherit!important;font-family:monospace!important;font-size:inherit!important;line-height:inherit!important}.tota11y pre{padding:5px 10px!important;overflow-x:scroll!important}.tota11y code{border-radius:2px!important;display:inline!important;padding:1px!important}.tota11y em,.tota11y i{font-style:italic!important}.tota11y a,.tota11y a:focus,.tota11y a:hover{background-color:inherit!important;color:inherit!important;text-decoration:none!important}.tota11y-toolbar{background-color:#333!important;color:#f2f2f2!important;position:fixed!important;top:auto!important;right:auto!important;bottom:0!important;left:10px!important;border-top-left-radius:5px!important;border-top-right-radius:5px!important;overflow:hidden!important;z-index:9998!important}.tota11y-toolbar-toggle{background-color:#333!important;display:block!important;padding:7px!important;width:100%!important}.tota11y-toolbar-logo{margin:0 auto!important;text-align:center!important;width:35px!important}.tota11y-toolbar-body{display:none!important}.tota11y-toolbar.tota11y-expanded .tota11y-toolbar-body{display:block!important}.tota11y-sr-only{border:0!important;clip:rect(0,0,0,0)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;width:1px!important}",""])},function(q,P,x){P=q.exports=x(5)(),P.push([q.id,".tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-outlined{outline:#7882c8 solid 2px!important}.tota11y-nothingness{color:#888!important}",""])},function(q,P,x){P=q.exports=x(5)(),P.push([q.id,".tota11y-swatches{margin-left:5px!important;margin-right:5px!important;position:relative!important;top:1px!important}.tota11y-swatch{border:1px solid #000!important;display:inline-block!important;height:12px!important;width:12px!important}.tota11y-contrast-suggestion{margin:0 0 15px 15px!important}.tota11y-color-hexes{font-family:monospace!important}",""])},function(q,P,x){P=q.exports=x(5)(),P.push([q.id,".tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-heading-outline{color:#333!important}.tota11y-heading-outline-entry{margin-bottom:8px!important}.tota11y-heading-outline-entry.heading-level-1{margin-left:0!important}.tota11y-heading-outline-entry.heading-level-2{margin-left:20px!important}.tota11y-heading-outline-entry.heading-level-3{margin-left:40px!important}.tota11y-heading-outline-entry.heading-level-4{margin-left:60px!important}.tota11y-heading-outline-entry.heading-level-5{margin-left:80px!important}.tota11y-heading-outline-entry.heading-level-6{margin-left:100px!important}.tota11y-heading-outline-level{position:relative!important;top:-2px!important;right:auto!important;bottom:auto!important;left:auto!important;margin-right:5px!important;padding:2px 3px!important;pointer-events:none!important}",""])},function(q,P,x){P=q.exports=x(5)(),P.push([q.id,".tota11y-label-help,.tota11y-label-text{float:left!important}.tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-label{background-color:#ffe800!important;border:1px solid rgba(0,0,0,.1)!important;cursor:default!important;padding:3px!important;position:absolute!important;z-index:9997!important}.tota11y-label-error{background-color:#ffaeae!important}.tota11y-label-error-icon{display:block!important;float:left!important;margin-right:3px!important;width:12px!important}.tota11y-label-success{background-color:#b9eda9!important}.tota11y-label-warning{background-color:#ffe800!important}.tota11y-label,.tota11y-label-detail,.tota11y-label-help,.tota11y-label-link,.tota11y-label-text{color:#333!important;font-size:12px!important}.tota11y-label-detail{clear:both!important;display:none!important;max-width:300px!important}.tota11y-label:hover .tota11y-label-detail{display:block!important}.tota11y-label-help{margin-left:5px!important}.tota11y-label-link:focus,.tota11y-label-link:hover{opacity:.6!important;text-decoration:underline!important}.tota11y-highlight{background-color:rgba(120,130,200,.4)!important;pointer-events:none!important;position:absolute!important;z-index:9999!important}",""])},function(q,P,x){P=q.exports=x(5)(),P.push([q.id,".tota11y-dark-color-scheme,.tota11y-info{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-info{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;border-radius:5px!important;position:fixed!important;z-index:9998!important}.tota11y-info-section,.tota11y-info-section *,.tota11y-info-tab.active .tota11y-info-tab-anchor-text{color:#333!important}.tota11y-info-controls{float:right!important}.tota11y-info-annotation-toggle{float:left!important;margin-right:10px!important}.tota11y-info-hidden{display:none!important}.tota11y-info-dismiss-trigger{font-size:25px!important;line-height:25px!important;position:relative!important;top:-2px!important}.tota11y-info-section,.tota11y-info-tab-anchor{top:0!important;right:0!important;bottom:0!important;left:0!important}.tota11y-info-body,.tota11y-info-title{padding:10px 10px 0!important}.tota11y-info-title:hover{cursor:move!important}.tota11y-info-tabs{display:-webkit-box!important;display:flex!important;margin:0!important;padding:0 0 10px!important}.tota11y-info-tab{height:30px!important;list-style:none!important;position:relative!important;text-align:center!important;width:100%!important;-webkit-box-flex:1!important;flex-grow:1!important}.tota11y-info-tab-anchor{position:absolute!important;text-align:center!important}.tota11y-info-tab-anchor-text{line-height:30px!important}.tota11y-info-tab:hover{background-color:#555!important}.tota11y-info-section,.tota11y-info-tab.active,.tota11y-info-tab.active:hover{background-color:#f2f2f2!important}.tota11y-info-sections{position:relative!important;height:270px!important;width:400px!important}.tota11y-info-section{position:absolute!important;display:none!important;overflow-y:scroll!important;padding:10px!important}.tota11y-info-error-trigger,.tota11y-info-section.active{display:block!important}.tota11y-info-errors{margin:0!important;padding:0!important}.tota11y-info-error{list-style:none!important;margin-bottom:10px!important}.tota11y-info-error-trigger.trigger-highlight{background-color:rgba(120,130,200,.4)!important}.tota11y-info-error-chevron{display:inline-block!important;font-size:20px!important;height:14px!important;line-height:14px!important;margin-right:3px!important;-webkit-transform:rotateZ(90deg)!important;transform:rotateZ(90deg)!important;-webkit-transform-origin:3px 8px!important;transform-origin:3px 8px!important;-webkit-transition:-webkit-transform ease-in-out 50ms!important;transition:transform ease-in-out 50ms!important}.tota11y-info-error-trigger.tota11y-collapsed .tota11y-info-error-chevron{-webkit-transform:rotateZ(0)!important;transform:rotateZ(0)!important}.tota11y-info-error-title{font-weight:700!important}.tota11y-info-error-scroll{float:right!important;margin-top:3px!important;padding-left:5px!important}.tota11y-info-error-scroll-glyph{border-color:#333!important}.tota11y-info-error-scroll:hover .tota11y-info-error-scroll-glyph{border-color:#999!important}.tota11y-info-error-scroll-lens{border:1px solid!important;border-radius:50%!important;height:8px!important;width:8px!important}.tota11y-info-error-scroll-handle{border-left:1px solid!important;height:7px!important;-webkit-transform:translateX(-2px) translateY(-2px) rotate(45deg)!important;transform:translateX(-2px) translateY(-2px) rotate(45deg)!important;width:1px!important}.tota11y-info-error-description{font-size:13px!important;padding:10px 0 0!important;-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important}.tota11y-info-error-description-code-container{margin-top:10px!important}.tota11y-info-error-description-code-container code{display:block!important;margin-top:10px!important;padding:5px 10px!important;word-wrap:break-word!important}.tota11y-info-error-description.tota11y-collapsed{display:none!important}.tota11y-info-error-count{background-color:red!important;border-radius:20px!important;color:#fff!important;display:inline!important;margin-left:5px!important;padding:1px 8px!important}",""])},function(q,P,x){P=q.exports=x(5)(),P.push([q.id,".tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-plugin{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;border-bottom:1px solid #555!important;list-style:none!important}.tota11y-plugin-switch{-webkit-box-align:center!important;align-items:center!important;cursor:pointer!important;display:-webkit-box!important;display:flex!important;padding:12px 12px 12px 0!important;margin:0!important}.tota11y-plugin-indicator{margin:0 15px!important;border-radius:16px!important;border:1px solid #999!important;color:transparent!important;font-size:13px!important;height:16px!important;line-height:16px!important;padding:0 0 0 1px!important;width:16px!important}.tota11y-plugin-checkbox:focus+.tota11y-plugin-indicator{border-color:#639b24!important;background-color:#49721a!important;color:#49721a!important}.tota11y-plugin-checkbox:checked+.tota11y-plugin-indicator{background-color:#639b24!important;border-color:#639b24!important;color:#fff!important}.tota11y-plugin-title{font-weight:700!important}.tota11y-plugin-description{font-size:11px!important;font-style:italic!important;width:200px!important;margin-right:3px!important}.tota11y-plugins-separator{font-size:12px!important;margin:7px 15px 0!important;text-transform:uppercase!important}",""])},function(q,P,x){var v=x(6);q.exports=(v.default||v).template({compiler:[6,">= 2.0.0-beta.1"],main:function(h,R,W,L){var d,F=R.helperMissing,j="function",O=this.escapeExpression;return`<div>
    <p>
        The color combination
        <span class="tota11y-color-hexes">`+O((d=(d=R.fgColorHex||(h!=null?h.fgColorHex:h))!=null?d:F,typeof d===j?d.call(h,{name:"fgColorHex",hash:{},data:L}):d))+"/"+O((d=(d=R.bgColorHex||(h!=null?h.bgColorHex:h))!=null?d:F,typeof d===j?d.call(h,{name:"bgColorHex",hash:{},data:L}):d))+`</span>
        has a contrast ratio of <strong>`+O((d=(d=R.contrastRatio||(h!=null?h.contrastRatio:h))!=null?d:F,typeof d===j?d.call(h,{name:"contrastRatio",hash:{},data:L}):d))+`</strong>, which is not
        sufficient. At this size, you will need a ratio of at least
        <strong>`+O((d=(d=R.requiredRatio||(h!=null?h.requiredRatio:h))!=null?d:F,typeof d===j?d.call(h,{name:"requiredRatio",hash:{},data:L}):d))+`</strong>.
    </p>

    <p>
        Consider using the following foreground/background combination:
    </p>

    <div class="tota11y-contrast-suggestion">
        <span class="tota11y-color-hexes">
            `+O((d=(d=R.suggestedFgColorHex||(h!=null?h.suggestedFgColorHex:h))!=null?d:F,typeof d===j?d.call(h,{name:"suggestedFgColorHex",hash:{},data:L}):d))+"/"+O((d=(d=R.suggestedBgColorHex||(h!=null?h.suggestedBgColorHex:h))!=null?d:F,typeof d===j?d.call(h,{name:"suggestedBgColorHex",hash:{},data:L}):d))+`
        </span>

        <span class="tota11y-swatches">
            <span
                class="tota11y-swatch"
                style="background-color: `+O((d=(d=R.suggestedFgColorHex||(h!=null?h.suggestedFgColorHex:h))!=null?d:F,typeof d===j?d.call(h,{name:"suggestedFgColorHex",hash:{},data:L}):d))+` !important">
            </span>
            /
            <span
                class="tota11y-swatch"
                style="background-color: `+O((d=(d=R.suggestedBgColorHex||(h!=null?h.suggestedBgColorHex:h))!=null?d:F,typeof d===j?d.call(h,{name:"suggestedBgColorHex",hash:{},data:L}):d))+` !important">
            </span>
        </span>

        has a ratio of <strong>`+O((d=(d=R.suggestedColorsRatio||(h!=null?h.suggestedColorsRatio:h))!=null?d:F,typeof d===j?d.call(h,{name:"suggestedColorsRatio",hash:{},data:L}):d))+`</strong>
        <br />

        <label>
            Preview:
            <input class="preview-contrast-fix" type="checkbox">
        </label>
    </div>
</div>
`},useData:!0})},function(q,P,x){var v=x(6);q.exports=(v.default||v).template({compiler:[6,">= 2.0.0-beta.1"],main:function(h,R,W,L){var d,F=R.helperMissing,j="function",O=this.escapeExpression;return"Insufficient contrast ratio ("+O((d=(d=R.contrastRatio||(h!=null?h.contrastRatio:h))!=null?d:F,typeof d===j?d.call(h,{name:"contrastRatio",hash:{},data:L}):d))+" &lt; "+O((d=(d=R.requiredRatio||(h!=null?h.requiredRatio:h))!=null?d:F,typeof d===j?d.call(h,{name:"requiredRatio",hash:{},data:L}):d))+`)

<span class="tota11y-swatches">
    <span class="tota11y-swatch" style="background-color: `+O((d=(d=R.fgColorHex||(h!=null?h.fgColorHex:h))!=null?d:F,typeof d===j?d.call(h,{name:"fgColorHex",hash:{},data:L}):d))+` !important"></span>
    /
    <span class="tota11y-swatch" style="background-color: `+O((d=(d=R.bgColorHex||(h!=null?h.bgColorHex:h))!=null?d:F,typeof d===j?d.call(h,{name:"bgColorHex",hash:{},data:L}):d))+` !important"></span>
</span>
`},useData:!0})},function(q,P,x){var v=x(6);q.exports=(v.default||v).template({compiler:[6,">= 2.0.0-beta.1"],main:function(h,R,W,L){var d,F=R.helperMissing,j="function",O=this.escapeExpression;return'<div class="tota11y-heading-outline-entry heading-level-'+O((d=(d=R.level||(h!=null?h.level:h))!=null?d:F,typeof d===j?d.call(h,{name:"level",hash:{},data:L}):d))+`">
    <span class="tota11y-heading-outline-level tota11y-label">`+O((d=(d=R.level||(h!=null?h.level:h))!=null?d:F,typeof d===j?d.call(h,{name:"level",hash:{},data:L}):d))+`</span>
    <span class="tota11y-heading-outline-heading-text">`+O((d=(d=R.text||(h!=null?h.text:h))!=null?d:F,typeof d===j?d.call(h,{name:"text",hash:{},data:L}):d))+`</span>
</div>
`},useData:!0})},function(q,P,x){var v=x(6);q.exports=(v.default||v).template({1:function(h,R,W,L){return`    <p>
        The <code>placeholder</code> attribute is not guaranteed to be read by
        assistive technologies. It is better to include a proper label.
    </p>
`},3:function(h,R,W,L){var d;return`    <p>
        The simplest way to do so is by creating a <code>&lt;label&gt;</code>
        tag with a <code>for</code> attribute like so:
    </p>

    <pre><code>&lt;label for="`+this.escapeExpression((d=(d=R.id||(h!=null?h.id:h))!=null?d:R.helperMissing,typeof d=="function"?d.call(h,{name:"id",hash:{},data:L}):d))+`"&gt;
    Label text here...
&lt;/label&gt;</code></pre>
`},5:function(h,R,W,L){var d;return`    <p>
        You can give this element an <code>id</code> attribute and build a
        <code>&lt;label&gt;</code> with a corresponding <code>for</code>
        attribute like so:

        <pre><code>&lt;label for="my-input"&gt;
    Label text here...
&lt;/label&gt;
&lt;`+this.escapeExpression((d=(d=R.tagName||(h!=null?h.tagName:h))!=null?d:R.helperMissing,typeof d=="function"?d.call(h,{name:"tagName",hash:{},data:L}):d))+` id="my-input"&gt;</code></pre>
    </p>
`},compiler:[6,">= 2.0.0-beta.1"],main:function(h,R,W,L){var d;return((d=R.if.call(h,h!=null?h.placeholder:h,{name:"if",hash:{},fn:this.program(1,L,0),inverse:this.noop,data:L}))!=null?d:"")+`
`+((d=R.if.call(h,h!=null?h.id:h,{name:"if",hash:{},fn:this.program(3,L,0),inverse:this.program(5,L,0),data:L}))!=null?d:"")},useData:!0})},function(q,P,x){var v=x(6);q.exports=(v.default||v).template({1:function(h,R,W,L){return`        <div class="tota11y-label-help">
            (<a class="tota11y-label-link" href="#">?</a>)
        </div>
`},compiler:[6,">= 2.0.0-beta.1"],main:function(h,R,W,L){var d,F,j=R.helperMissing,O="function";return`<span class="tota11y-label-error-icon">
    <!--
        "Warning" icon by Lorena Salagre
        https://thenounproject.com/lorens/

        Licensed under Creative Commons by 3.0 US
        http://creativecommons.org/licenses/by/3.0/us/legalcode
    -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
        <path d="M80.515,90.781H19.485c-6.145,0-10.779-2.168-13.052-6.103c-2.273-3.938-1.832-9.036,1.24-14.356l30.515-52.851  c3.07-5.321,7.266-8.251,11.811-8.251s8.741,2.93,11.811,8.251l30.515,52.851c3.072,5.32,3.513,10.418,1.24,14.356  C91.293,88.613,86.659,90.781,80.515,90.781z M50,12.384c-3.367,0-6.59,2.369-9.071,6.669L10.415,71.904  c-2.483,4.3-2.924,8.275-1.24,11.191c1.683,2.916,5.345,4.521,10.311,4.521h61.029c4.966,0,8.628-1.605,10.311-4.521  c1.683-2.916,1.243-6.89-1.24-11.191L59.071,19.053C56.59,14.753,53.367,12.384,50,12.384z M56.227,72.18  c0-3.172-2.572-5.744-5.744-5.744s-5.744,2.572-5.744,5.744c0,3.172,2.572,5.744,5.744,5.744S56.227,75.352,56.227,72.18z   M56.382,37.613c0-3.257-2.641-5.898-5.898-5.898c-3.257,0-5.898,2.641-5.898,5.898l1.393,20.932h0.019  c0.202,2.312,2.121,4.132,4.486,4.132c2.187,0,4.012-1.551,4.434-3.613c0.034-0.167,0.037-0.345,0.052-0.518h0.04L56.382,37.613z"/>
    </svg>
</span>

<span class="tota11y-label-content">
    <div class="tota11y-label-text">`+(F=(F=R.text||(h!=null?h.text:h))!=null?F:j,(d=typeof F===O?F.call(h,{name:"text",hash:{},data:L}):F)!=null?d:"")+`</div>
`+((d=R.if.call(h,h!=null?h.hasErrorEntry:h,{name:"if",hash:{},fn:this.program(1,L,0),inverse:this.noop,data:L}))!=null?d:"")+'    <div class="tota11y-label-detail">'+(F=(F=R.detail||(h!=null?h.detail:h))!=null?F:j,(d=typeof F===O?F.call(h,{name:"detail",hash:{},data:L}):F)!=null?d:"")+`</div>
</span>
`},useData:!0})},function(q,P,x){var v=x(6);q.exports=(v.default||v).template({compiler:[6,">= 2.0.0-beta.1"],main:function(h,R,W,L){var d,F;return`<li class="tota11y-info-error">
    <a aria-label="Scroll to error" href="#" class="tota11y-info-error-scroll">
        <div class="tota11y-info-error-scroll-glyph tota11y-info-error-scroll-lens"></div>
        <div class="tota11y-info-error-scroll-glyph tota11y-info-error-scroll-handle"></div>
    </a>
    <a href="#" class="tota11y-info-error-trigger tota11y-collapsed">
        <div class="tota11y-info-error-title">
            <span class="tota11y-info-error-chevron">
                &#8250;
            </span>
            `+(F=(F=R.title||(h!=null?h.title:h))!=null?F:R.helperMissing,(d=typeof F=="function"?F.call(h,{name:"title",hash:{},data:L}):F)!=null?d:"")+`
        </div>
    </a>
    <div class="tota11y-info-error-description tota11y-collapsed">
        <div class="tota11y-info-error-description-code-container">
            <em>Relevant code:</em>
            <code></code>
        </div>
    </div>
</li>
`},useData:!0})},function(q,P,x){var v=x(6);q.exports=(v.default||v).template({compiler:[6,">= 2.0.0-beta.1"],main:function(h,R,W,L){return`<!--
    "Glasses" icon by Kyle Scott
    https://thenounproject.com/Kyle/

    Licensed under Creative Commons by 3.0 US
    http://creativecommons.org/licenses/by/3.0/us/legalcode
-->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
    <path fill="#ffffff" d="M74.466,35.24c-1.069-0.19-2.208-0.267-3.228-0.562c-0.639-0.184-1.348-0.622-1.965-1.075  c-1.246-0.919-2.479-1.557-3.928-2.152c-0.671-0.276-1.617-0.698-2.432-0.608c-0.582,0.064-1.196,0.664-1.73,1.029  c-1.196,0.818-2.186,1.442-3.32,2.198c-0.524,0.35-1.308,0.798-1.543,1.263c-0.142,0.279-0.13,0.736-0.281,1.029  c-0.35,0.679-1.069,1.434-1.777,1.403c-0.835-0.038-1.773-1.518-1.449-2.619c0.177-0.602,1.126-0.902,1.776-1.262  c2.041-1.134,3.803-2.3,5.52-3.602c1.106-0.841,2.579-1.471,4.536-1.542c1.889-0.071,4.45-0.083,6.22,0  c1.465,0.066,2.698,0.164,3.976,0.42c7.308,1.469,14.698,2.788,21.607,4.77c0.739,0.213,2.896,0.613,3.086,1.311  c0.121,0.439-0.236,1.435-0.375,2.151c-0.165,0.865-0.292,1.626-0.42,2.246c-0.12,0.574-0.65,1.174-0.936,1.776  c-0.842,1.778-1.379,3.821-2.104,5.753c-0.954,2.545-2.02,4.859-3.554,6.968c-1.46,2.005-3.442,3.33-5.987,4.536  c-1.128,0.534-2.43,1.083-3.835,1.403c-1.355,0.311-3.263,0.63-4.817,0.28c-2.233-0.501-3.081-2.543-3.882-4.536  c-0.848-2.115-1.351-4.049-1.636-6.827c-2.692,0.176-3.259,2.014-4.163,3.928c-0.384,0.812-0.792,1.623-1.168,2.385  c-1.542,3.115-3.197,6.47-5.473,8.746c-1.215,1.213-2.581,2.03-4.35,2.758c-3.331,1.373-6.847,2.569-10.757,3.462  c-3.598,0.821-8.923,1.642-12.252-0.093c-2.136-1.113-3.105-3.939-4.023-6.268c-0.458-1.159-0.835-2.459-1.262-3.882  c-0.378-1.259-0.708-2.778-1.543-3.602c-1.053-1.037-2.78-1.414-3.227-2.993c-0.815-0.307-1.563-0.821-2.292-1.308  c-4.349-2.915-8.693-5.774-13.141-8.606c-0.727-0.462-1.667-0.958-2.151-1.497c-0.712-0.792-1.108-2.117-1.684-3.133  c-0.265-0.469-0.588-0.92-0.888-1.357c-0.275-0.4-0.536-0.997-1.076-1.076C2.223,36.823,2.365,37.469,2.349,38  c-0.017,0.549-0.077,1.172-0.047,1.823c0.028,0.606,0.297,1.049,0.28,1.544c-0.018,0.515-0.291,1.036-0.841,1.029  c-0.727-0.009-0.8-0.98-0.983-1.686c-0.209-0.807-0.483-1.551-0.421-2.245c0.049-0.531,0.341-1.223,0.468-2.057  c0.246-1.599,0.126-3.078,1.451-3.415C3.004,32.804,4,33.38,4.781,33.649c0.789,0.272,1.597,0.428,2.339,0.702  c0.854,0.316,1.706,0.875,2.524,1.355c2.526,1.484,4.626,3.112,7.062,4.63c3.273,2.041,6.545,3.955,9.307,6.267  c7.434-2.179,16.722-3.566,25.863-4.302c4.176-0.337,8.326-0.174,12.253,0.374c5.624,0.787,10.073-1.58,13.844-3.18  c2.035-0.864,4.078-1.653,6.173-2.573C80.804,36.331,77.705,35.814,74.466,35.24z M93.968,39.729  c-1.838-0.388-3.732-0.737-5.471-1.075c-0.059-0.012-0.127-0.067-0.188-0.046c-1.143,0.392-2.279,0.613-3.367,1.029  c-2.033,0.773-4.015,1.775-5.752,3.039C78.33,43.3,77.372,44,76.897,44.733c-1.609,2.489-1.206,7.214-0.467,10.149  c0.27,1.071,0.411,1.79,0.889,2.666c3.022,1.287,6.88-0.183,8.885-1.684c1.526-1.142,2.676-2.75,3.602-4.35  C91.815,48.042,93.102,43.946,93.968,39.729z M64.878,46.089c-6.121-1.937-14.865-0.822-21.232,0.467  c-4.477,0.907-9.474,1.92-10.944,5.753c-0.801,2.086-1.009,5.098-0.701,7.903c0.284,2.599,1.076,4.892,2.011,6.594  c2.943,2.698,10.038,1.581,14.124,0.375c2.523-0.745,4.112-1.389,5.845-2.197c1.973-0.921,4.636-1.939,5.285-4.116  c0.179-0.597,0.115-1.244,0.188-1.824c0.492-3.909,1.942-7.447,4.303-9.634c0.477-0.441,1.146-0.679,1.357-1.262  C65.37,47.428,65.13,46.709,64.878,46.089z"/>
</svg>
`},useData:!0})},function(q,P,x){function v(){var w=new W.HandlebarsEnvironment;return k.extend(w,W),w.SafeString=d.default,w.Exception=j.default,w.Utils=k,w.escapeExpression=k.escapeExpression,w.VM=u,w.template=function(D){return u.template(D,w)},w}var h=function(w){return w&&w.__esModule?w:{default:w}};P.__esModule=!0;var R=x(12),W=h(R),L=x(39),d=h(L),F=x(9),j=h(F),O=x(10),k=h(O),_=x(38),u=h(_),c=x(37),g=h(c),A=v();A.create=v,g.default(A),A.default=A,P.default=A,q.exports=P.default},function(q,P){(function(x){P.__esModule=!0,P.default=function(v){var h=typeof x<"u"?x:window,R=h.Handlebars;v.noConflict=function(){h.Handlebars===v&&(h.Handlebars=R)}},q.exports=P.default}).call(P,function(){return this}())},function(q,P,x){function v(g){var A=g&&g[0]||1,w=c.COMPILER_REVISION;if(A!==w){if(w>A){var D=c.REVISION_CHANGES[w],T=c.REVISION_CHANGES[A];throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+D+") or downgrade your runtime to an older version ("+T+").")}throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+g[1]+").")}}function h(g,A){function w(b,E,M){M.hash&&(E=k.extend({},E,M.hash)),b=A.VM.resolvePartial.call(this,b,E,M);var Y=A.VM.invokePartial.call(this,b,E,M);if(Y==null&&A.compile&&(M.partials[M.name]=A.compile(b,g.compilerOptions,A),Y=M.partials[M.name](E,M)),Y!=null){if(M.indent){for(var ee=Y.split(`
`),ae=0,pe=ee.length;pe>ae&&(ee[ae]||ae+1!==pe);ae++)ee[ae]=M.indent+ee[ae];Y=ee.join(`
`)}return Y}throw new u.default("The partial "+M.name+" could not be compiled when running in runtime-only mode")}function D(b){var E=arguments[1]===void 0?{}:arguments[1],M=E.data;D._setup(E),!E.partial&&g.useData&&(M=F(b,M));var Y=void 0,ee=g.useBlockParams?[]:void 0;return g.useDepths&&(Y=E.depths?[b].concat(E.depths):[b]),g.main.call(T,b,T.helpers,T.partials,M,ee,Y)}if(!A)throw new u.default("No environment passed to template");if(!g||!g.main)throw new u.default("Unknown template object: "+typeof g);A.VM.checkRevision(g.compiler);var T={strict:function(b,E){if(!(E in b))throw new u.default('"'+E+'" not defined in '+b);return b[E]},lookup:function(b,E){for(var M=b.length,Y=0;M>Y;Y++)if(b[Y]&&b[Y][E]!=null)return b[Y][E]},lambda:function(b,E){return typeof b=="function"?b.call(E):b},escapeExpression:k.escapeExpression,invokePartial:w,fn:function(b){return g[b]},programs:[],program:function(b,E,M,Y,ee){var ae=this.programs[b],pe=this.fn(b);return E||ee||Y||M?ae=R(this,b,pe,E,M,Y,ee):ae||(ae=this.programs[b]=R(this,b,pe)),ae},data:function(b,E){for(;b&&E--;)b=b._parent;return b},merge:function(b,E){var M=b||E;return b&&E&&b!==E&&(M=k.extend({},E,b)),M},noop:A.VM.noop,compilerInfo:g.compiler};return D.isTop=!0,D._setup=function(b){b.partial?(T.helpers=b.helpers,T.partials=b.partials):(T.helpers=T.merge(b.helpers,A.helpers),g.usePartial&&(T.partials=T.merge(b.partials,A.partials)))},D._child=function(b,E,M,Y){if(g.useBlockParams&&!M)throw new u.default("must pass block params");if(g.useDepths&&!Y)throw new u.default("must pass parent depths");return R(T,b,g[b],E,0,M,Y)},D}function R(g,A,w,D,T,b,E){function M(Y){var ee=arguments[1]===void 0?{}:arguments[1];return w.call(g,Y,g.helpers,g.partials,ee.data||D,b&&[ee.blockParams].concat(b),E&&[Y].concat(E))}return M.program=A,M.depth=E?E.length:0,M.blockParams=T||0,M}function W(g,A,w){return g?g.call||w.name||(w.name=g,g=w.partials[g]):g=w.partials[w.name],g}function L(g,A,w){if(w.partial=!0,g===void 0)throw new u.default("The partial "+w.name+" could not be found");return g instanceof Function?g(A,w):void 0}function d(){return""}function F(g,A){return A&&"root"in A||(A=A?c.createFrame(A):{},A.root=g),A}var j=function(g){return g&&g.__esModule?g:{default:g}};P.__esModule=!0,P.checkRevision=v,P.template=h,P.wrapProgram=R,P.resolvePartial=W,P.invokePartial=L,P.noop=d;var O=x(10),k=j(O),_=x(9),u=j(_),c=x(12)},function(q,P){function x(v){this.string=v}P.__esModule=!0,x.prototype.toString=x.prototype.toHTML=function(){return""+this.string},P.default=x,q.exports=P.default},function(q,P){q.exports=`/*
 * Copyright 2015 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Generated from http://github.com/GoogleChrome/accessibility-developer-tools/tree/952a710bc74ae546473b239e32b76cb3946c6fad
 *
 * See project README for build steps.
 */

// AUTO-GENERATED CONTENT BELOW: DO NOT EDIT! See above for details.

var fn = (function() {
  var COMPILED = !0, goog = goog || {};
goog.global = this;
goog.isDef = function(a) {
  return void 0 !== a;
};
goog.exportPath_ = function(a, b, c) {
  a = a.split(".");
  c = c || goog.global;
  a[0] in c || !c.execScript || c.execScript("var " + a[0]);
  for (var d;a.length && (d = a.shift());) {
    !a.length && goog.isDef(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {};
  }
};
goog.define = function(a, b) {
  var c = b;
  COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, a) ? c = goog.global.CLOSURE_UNCOMPILED_DEFINES[a] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, a) && (c = goog.global.CLOSURE_DEFINES[a]));
  goog.exportPath_(a, c);
};
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.STRICT_MODE_COMPATIBLE = !1;
goog.provide = function(a) {
  if (!COMPILED) {
    if (goog.isProvided_(a)) {
      throw Error('Namespace "' + a + '" already declared.');
    }
    delete goog.implicitNamespaces_[a];
    for (var b = a;(b = b.substring(0, b.lastIndexOf("."))) && !goog.getObjectByName(b);) {
      goog.implicitNamespaces_[b] = !0;
    }
  }
  goog.exportPath_(a);
};
goog.setTestOnly = function(a) {
  if (COMPILED && !goog.DEBUG) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + a ? ": " + a : ".");
  }
};
goog.forwardDeclare = function(a) {
};
COMPILED || (goog.isProvided_ = function(a) {
  return !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a));
}, goog.implicitNamespaces_ = {});
goog.getObjectByName = function(a, b) {
  for (var c = a.split("."), d = b || goog.global, e;e = c.shift();) {
    if (goog.isDefAndNotNull(d[e])) {
      d = d[e];
    } else {
      return null;
    }
  }
  return d;
};
goog.globalize = function(a, b) {
  var c = b || goog.global, d;
  for (d in a) {
    c[d] = a[d];
  }
};
goog.addDependency = function(a, b, c) {
  if (goog.DEPENDENCIES_ENABLED) {
    var d;
    a = a.replace(/\\\\/g, "/");
    for (var e = goog.dependencies_, f = 0;d = b[f];f++) {
      e.nameToPath[d] = a, a in e.pathToNames || (e.pathToNames[a] = {}), e.pathToNames[a][d] = !0;
    }
    for (d = 0;b = c[d];d++) {
      a in e.requires || (e.requires[a] = {}), e.requires[a][b] = !0;
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.require = function(a) {
  if (!COMPILED && !goog.isProvided_(a)) {
    if (goog.ENABLE_DEBUG_LOADER) {
      var b = goog.getPathFromDeps_(a);
      if (b) {
        goog.included_[b] = !0;
        goog.writeScripts_();
        return;
      }
    }
    a = "goog.require could not find: " + a;
    goog.global.console && goog.global.console.error(a);
    throw Error(a);
  }
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.identityFunction = function(a, b) {
  return a;
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
  a.getInstance = function() {
    if (a.instance_) {
      return a.instance_;
    }
    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
    return a.instance_ = new a;
  };
};
goog.instantiatedSingletons_ = [];
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.DEPENDENCIES_ENABLED && (goog.included_ = {}, goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}}, goog.inHtmlDocument_ = function() {
  var a = goog.global.document;
  return "undefined" != typeof a && "write" in a;
}, goog.findBasePath_ = function() {
  if (goog.global.CLOSURE_BASE_PATH) {
    goog.basePath = goog.global.CLOSURE_BASE_PATH;
  } else {
    if (goog.inHtmlDocument_()) {
      for (var a = goog.global.document.getElementsByTagName("script"), b = a.length - 1;0 <= b;--b) {
        var c = a[b].src, d = c.lastIndexOf("?"), d = -1 == d ? c.length : d;
        if ("base.js" == c.substr(d - 7, 7)) {
          goog.basePath = c.substr(0, d - 7);
          break;
        }
      }
    }
  }
}, goog.importScript_ = function(a) {
  var b = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
  !goog.dependencies_.written[a] && b(a) && (goog.dependencies_.written[a] = !0);
}, goog.writeScriptTag_ = function(a) {
  if (goog.inHtmlDocument_()) {
    var b = goog.global.document;
    if ("complete" == b.readyState) {
      if (/\\bdeps.js$/.test(a)) {
        return !1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    b.write('<script type="text/javascript" src="' + a + '">\\x3c/script>');
    return !0;
  }
  return !1;
}, goog.writeScripts_ = function() {
  function a(e) {
    if (!(e in d.written)) {
      if (!(e in d.visited) && (d.visited[e] = !0, e in d.requires)) {
        for (var g in d.requires[e]) {
          if (!goog.isProvided_(g)) {
            if (g in d.nameToPath) {
              a(d.nameToPath[g]);
            } else {
              throw Error("Undefined nameToPath for " + g);
            }
          }
        }
      }
      e in c || (c[e] = !0, b.push(e));
    }
  }
  var b = [], c = {}, d = goog.dependencies_, e;
  for (e in goog.included_) {
    d.written[e] || a(e);
  }
  for (e = 0;e < b.length;e++) {
    if (b[e]) {
      goog.importScript_(goog.basePath + b[e]);
    } else {
      throw Error("Undefined script input");
    }
  }
}, goog.getPathFromDeps_ = function(a) {
  return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null;
}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));
goog.typeOf = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
};
goog.isNull = function(a) {
  return null === a;
};
goog.isDefAndNotNull = function(a) {
  return null != a;
};
goog.isArray = function(a) {
  return "array" == goog.typeOf(a);
};
goog.isArrayLike = function(a) {
  var b = goog.typeOf(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
};
goog.isDateLike = function(a) {
  return goog.isObject(a) && "function" == typeof a.getFullYear;
};
goog.isString = function(a) {
  return "string" == typeof a;
};
goog.isBoolean = function(a) {
  return "boolean" == typeof a;
};
goog.isNumber = function(a) {
  return "number" == typeof a;
};
goog.isFunction = function(a) {
  return "function" == goog.typeOf(a);
};
goog.isObject = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
};
goog.getUid = function(a) {
  return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(a) {
  return !!a[goog.UID_PROPERTY_];
};
goog.removeUid = function(a) {
  "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete a[goog.UID_PROPERTY_];
  } catch (b) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    if (a.clone) {
      return a.clone();
    }
    var b = "array" == b ? [] : {}, c;
    for (c in a) {
      b[c] = goog.cloneObject(a[c]);
    }
    return b;
  }
  return a;
};
goog.bindNative_ = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
};
goog.bindJs_ = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
};
goog.bind = function(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
  return goog.bind.apply(null, arguments);
};
goog.partial = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
};
goog.mixin = function(a, b) {
  for (var c in b) {
    a[c] = b[c];
  }
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  return +new Date;
};
goog.globalEval = function(a) {
  if (goog.global.execScript) {
    goog.global.execScript(a, "JavaScript");
  } else {
    if (goog.global.eval) {
      if (null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1), goog.evalWorksForGlobals_) {
        goog.global.eval(a);
      } else {
        var b = goog.global.document, c = b.createElement("script");
        c.type = "text/javascript";
        c.defer = !1;
        c.appendChild(b.createTextNode(a));
        b.body.appendChild(c);
        b.body.removeChild(c);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(a, b) {
  var c = function(a) {
    return goog.cssNameMapping_[a] || a;
  }, d = function(a) {
    a = a.split("-");
    for (var b = [], d = 0;d < a.length;d++) {
      b.push(c(a[d]));
    }
    return b.join("-");
  }, d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function(a) {
    return a;
  };
  return b ? a + "-" + d(b) : d(a);
};
goog.setCssNameMapping = function(a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function(a, b) {
  var c = b || {}, d;
  for (d in c) {
    var e = ("" + c[d]).replace(/\\$/g, "$$$$");
    a = a.replace(new RegExp("\\\\{\\\\$" + d + "\\\\}", "gi"), e);
  }
  return a;
};
goog.getMsgWithFallback = function(a, b) {
  return a;
};
goog.exportSymbol = function(a, b, c) {
  goog.exportPath_(a, b, c);
};
goog.exportProperty = function(a, b, c) {
  a[b] = c;
};
goog.inherits = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.base = function(a, c, f) {
    var g = Array.prototype.slice.call(arguments, 2);
    return b.prototype[c].apply(a, g);
  };
};
goog.base = function(a, b, c) {
  var d = arguments.callee.caller;
  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (d.superClass_) {
    return d.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
  }
  for (var e = Array.prototype.slice.call(arguments, 2), f = !1, g = a.constructor;g;g = g.superClass_ && g.superClass_.constructor) {
    if (g.prototype[b] === d) {
      f = !0;
    } else {
      if (f) {
        return g.prototype[b].apply(a, e);
      }
    }
  }
  if (a[b] === d) {
    return a.constructor.prototype[b].apply(a, e);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
goog.scope = function(a) {
  a.call(goog.global);
};
var axs = {};
axs.browserUtils = {};
axs.browserUtils.matchSelector = function(a, b) {
  return a.matches ? a.matches(b) : a.webkitMatchesSelector ? a.webkitMatchesSelector(b) : a.mozMatchesSelector ? a.mozMatchesSelector(b) : a.msMatchesSelector ? a.msMatchesSelector(b) : !1;
};
axs.constants = {};
axs.constants.ARIA_ROLES = {alert:{namefrom:["author"], parent:["region"]}, alertdialog:{namefrom:["author"], namerequired:!0, parent:["alert", "dialog"]}, application:{namefrom:["author"], namerequired:!0, parent:["landmark"]}, article:{namefrom:["author"], parent:["document", "region"]}, banner:{namefrom:["author"], parent:["landmark"]}, button:{childpresentational:!0, namefrom:["contents", "author"], namerequired:!0, parent:["command"], properties:["aria-expanded", "aria-pressed"]}, checkbox:{namefrom:["contents", 
"author"], namerequired:!0, parent:["input"], requiredProperties:["aria-checked"], properties:["aria-checked"]}, columnheader:{namefrom:["contents", "author"], namerequired:!0, parent:["gridcell", "sectionhead", "widget"], properties:["aria-sort"], scope:["row"]}, combobox:{mustcontain:["listbox", "textbox"], namefrom:["author"], namerequired:!0, parent:["select"], requiredProperties:["aria-expanded"], properties:["aria-expanded", "aria-autocomplete", "aria-required"]}, command:{"abstract":!0, namefrom:["author"], 
parent:["widget"]}, complementary:{namefrom:["author"], parent:["landmark"]}, composite:{"abstract":!0, childpresentational:!1, namefrom:["author"], parent:["widget"], properties:["aria-activedescendant"]}, contentinfo:{namefrom:["author"], parent:["landmark"]}, definition:{namefrom:["author"], parent:["section"]}, dialog:{namefrom:["author"], namerequired:!0, parent:["window"]}, directory:{namefrom:["contents", "author"], parent:["list"]}, document:{namefrom:[" author"], namerequired:!0, parent:["structure"], 
properties:["aria-expanded"]}, form:{namefrom:["author"], parent:["landmark"]}, grid:{mustcontain:["row", "rowgroup"], namefrom:["author"], namerequired:!0, parent:["composite", "region"], properties:["aria-level", "aria-multiselectable", "aria-readonly"]}, gridcell:{namefrom:["contents", "author"], namerequired:!0, parent:["section", "widget"], properties:["aria-readonly", "aria-required", "aria-selected"], scope:["row"]}, group:{namefrom:[" author"], parent:["section"], properties:["aria-activedescendant"]}, 
heading:{namerequired:!0, parent:["sectionhead"], properties:["aria-level"]}, img:{childpresentational:!0, namefrom:["author"], namerequired:!0, parent:["section"]}, input:{"abstract":!0, namefrom:["author"], parent:["widget"]}, landmark:{"abstract":!0, namefrom:["contents", "author"], namerequired:!1, parent:["region"]}, link:{namefrom:["contents", "author"], namerequired:!0, parent:["command"], properties:["aria-expanded"]}, list:{mustcontain:["group", "listitem"], namefrom:["author"], parent:["region"]}, 
listbox:{mustcontain:["option"], namefrom:["author"], namerequired:!0, parent:["list", "select"], properties:["aria-multiselectable", "aria-required"]}, listitem:{namefrom:["contents", "author"], namerequired:!0, parent:["section"], properties:["aria-level", "aria-posinset", "aria-setsize"], scope:["list"]}, log:{namefrom:[" author"], namerequired:!0, parent:["region"]}, main:{namefrom:["author"], parent:["landmark"]}, marquee:{namerequired:!0, parent:["section"]}, math:{childpresentational:!0, namefrom:["author"], 
parent:["section"]}, menu:{mustcontain:["group", "menuitemradio", "menuitem", "menuitemcheckbox"], namefrom:["author"], namerequired:!0, parent:["list", "select"]}, menubar:{namefrom:["author"], parent:["menu"]}, menuitem:{namefrom:["contents", "author"], namerequired:!0, parent:["command"], scope:["menu", "menubar"]}, menuitemcheckbox:{namefrom:["contents", "author"], namerequired:!0, parent:["checkbox", "menuitem"], scope:["menu", "menubar"]}, menuitemradio:{namefrom:["contents", "author"], namerequired:!0, 
parent:["menuitemcheckbox", "radio"], scope:["menu", "menubar"]}, navigation:{namefrom:["author"], parent:["landmark"]}, note:{namefrom:["author"], parent:["section"]}, option:{namefrom:["contents", "author"], namerequired:!0, parent:["input"], properties:["aria-checked", "aria-posinset", "aria-selected", "aria-setsize"]}, presentation:{parent:["structure"]}, progressbar:{childpresentational:!0, namefrom:["author"], namerequired:!0, parent:["range"]}, radio:{namefrom:["contents", "author"], namerequired:!0, 
parent:["checkbox", "option"]}, radiogroup:{mustcontain:["radio"], namefrom:["author"], namerequired:!0, parent:["select"], properties:["aria-required"]}, range:{"abstract":!0, namefrom:["author"], parent:["widget"], properties:["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]}, region:{namefrom:[" author"], parent:["section"]}, roletype:{"abstract":!0, properties:"aria-atomic aria-busy aria-controls aria-describedby aria-disabled aria-dropeffect aria-flowto aria-grabbed aria-haspopup aria-hidden aria-invalid aria-label aria-labelledby aria-live aria-owns aria-relevant".split(" ")}, 
row:{mustcontain:["columnheader", "gridcell", "rowheader"], namefrom:["contents", "author"], parent:["group", "widget"], properties:["aria-level", "aria-selected"], scope:["grid", "rowgroup", "treegrid"]}, rowgroup:{mustcontain:["row"], namefrom:["contents", "author"], parent:["group"], scope:["grid"]}, rowheader:{namefrom:["contents", "author"], namerequired:!0, parent:["gridcell", "sectionhead", "widget"], properties:["aria-sort"], scope:["row"]}, search:{namefrom:["author"], parent:["landmark"]}, 
section:{"abstract":!0, namefrom:["contents", "author"], parent:["structure"], properties:["aria-expanded"]}, sectionhead:{"abstract":!0, namefrom:["contents", "author"], parent:["structure"], properties:["aria-expanded"]}, select:{"abstract":!0, namefrom:["author"], parent:["composite", "group", "input"]}, separator:{childpresentational:!0, namefrom:["author"], parent:["structure"], properties:["aria-expanded", "aria-orientation"]}, scrollbar:{childpresentational:!0, namefrom:["author"], namerequired:!1, 
parent:["input", "range"], requiredProperties:["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow"], properties:["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow"]}, slider:{childpresentational:!0, namefrom:["author"], namerequired:!0, parent:["input", "range"], requiredProperties:["aria-valuemax", "aria-valuemin", "aria-valuenow"], properties:["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-orientation"]}, spinbutton:{namefrom:["author"], 
namerequired:!0, parent:["input", "range"], requiredProperties:["aria-valuemax", "aria-valuemin", "aria-valuenow"], properties:["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-required"]}, status:{parent:["region"]}, structure:{"abstract":!0, parent:["roletype"]}, tab:{namefrom:["contents", "author"], parent:["sectionhead", "widget"], properties:["aria-selected"], scope:["tablist"]}, tablist:{mustcontain:["tab"], namefrom:["author"], parent:["composite", "directory"], properties:["aria-level"]}, 
tabpanel:{namefrom:["author"], namerequired:!0, parent:["region"]}, textbox:{namefrom:["author"], namerequired:!0, parent:["input"], properties:["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required"]}, timer:{namefrom:["author"], namerequired:!0, parent:["status"]}, toolbar:{namefrom:["author"], parent:["group"]}, tooltip:{namerequired:!0, parent:["section"]}, tree:{mustcontain:["group", "treeitem"], namefrom:["author"], namerequired:!0, parent:["select"], 
properties:["aria-multiselectable", "aria-required"]}, treegrid:{mustcontain:["row"], namefrom:["author"], namerequired:!0, parent:["grid", "tree"]}, treeitem:{namefrom:["contents", "author"], namerequired:!0, parent:["listitem", "option"], scope:["group", "tree"]}, widget:{"abstract":!0, parent:["roletype"]}, window:{"abstract":!0, namefrom:[" author"], parent:["roletype"], properties:["aria-expanded"]}};
axs.constants.WIDGET_ROLES = {};
axs.constants.addAllParentRolesToSet_ = function(a, b) {
  if (a.parent) {
    for (var c = a.parent, d = 0;d < c.length;d++) {
      var e = c[d];
      b[e] = !0;
      axs.constants.addAllParentRolesToSet_(axs.constants.ARIA_ROLES[e], b);
    }
  }
};
axs.constants.addAllPropertiesToSet_ = function(a, b, c) {
  var d = a[b];
  if (d) {
    for (var e = 0;e < d.length;e++) {
      c[d[e]] = !0;
    }
  }
  if (a.parent) {
    for (a = a.parent, d = 0;d < a.length;d++) {
      axs.constants.addAllPropertiesToSet_(axs.constants.ARIA_ROLES[a[d]], b, c);
    }
  }
};
for (var roleName in axs.constants.ARIA_ROLES) {
  var role = axs.constants.ARIA_ROLES[roleName], propertiesSet = {};
  axs.constants.addAllPropertiesToSet_(role, "properties", propertiesSet);
  role.propertiesSet = propertiesSet;
  var requiredPropertiesSet = {};
  axs.constants.addAllPropertiesToSet_(role, "requiredProperties", requiredPropertiesSet);
  role.requiredPropertiesSet = requiredPropertiesSet;
  var parentRolesSet = {};
  axs.constants.addAllParentRolesToSet_(role, parentRolesSet);
  role.allParentRolesSet = parentRolesSet;
  "widget" in parentRolesSet && (axs.constants.WIDGET_ROLES[roleName] = role);
}
axs.constants.ARIA_PROPERTIES = {activedescendant:{type:"property", valueType:"idref"}, atomic:{defaultValue:"false", type:"property", valueType:"boolean"}, autocomplete:{defaultValue:"none", type:"property", valueType:"token", values:["inline", "list", "both", "none"]}, busy:{defaultValue:"false", type:"state", valueType:"boolean"}, checked:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "mixed", "undefined"]}, controls:{type:"property", valueType:"idref_list"}, 
describedby:{type:"property", valueType:"idref_list"}, disabled:{defaultValue:"false", type:"state", valueType:"boolean"}, dropeffect:{defaultValue:"none", type:"property", valueType:"token_list", values:"copy move link execute popup none".split(" ")}, expanded:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "undefined"]}, flowto:{type:"property", valueType:"idref_list"}, grabbed:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", 
"undefined"]}, haspopup:{defaultValue:"false", type:"property", valueType:"boolean"}, hidden:{defaultValue:"false", type:"state", valueType:"boolean"}, invalid:{defaultValue:"false", type:"state", valueType:"token", values:["grammar", "false", "spelling", "true"]}, label:{type:"property", valueType:"string"}, labelledby:{type:"property", valueType:"idref_list"}, level:{type:"property", valueType:"integer"}, live:{defaultValue:"off", type:"property", valueType:"token", values:["off", "polite", "assertive"]}, 
multiline:{defaultValue:"false", type:"property", valueType:"boolean"}, multiselectable:{defaultValue:"false", type:"property", valueType:"boolean"}, orientation:{defaultValue:"vertical", type:"property", valueType:"token", values:["horizontal", "vertical"]}, owns:{type:"property", valueType:"idref_list"}, posinset:{type:"property", valueType:"integer"}, pressed:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "mixed", "undefined"]}, readonly:{defaultValue:"false", 
type:"property", valueType:"boolean"}, relevant:{defaultValue:"additions text", type:"property", valueType:"token_list", values:["additions", "removals", "text", "all"]}, required:{defaultValue:"false", type:"property", valueType:"boolean"}, selected:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "undefined"]}, setsize:{type:"property", valueType:"integer"}, sort:{defaultValue:"none", type:"property", valueType:"token", values:["ascending", "descending", "none", 
"other"]}, valuemax:{type:"property", valueType:"decimal"}, valuemin:{type:"property", valueType:"decimal"}, valuenow:{type:"property", valueType:"decimal"}, valuetext:{type:"property", valueType:"string"}};
(function() {
  for (var a in axs.constants.ARIA_PROPERTIES) {
    var b = axs.constants.ARIA_PROPERTIES[a];
    if (b.values) {
      for (var c = {}, d = 0;d < b.values.length;d++) {
        c[b.values[d]] = !0;
      }
      b.valuesSet = c;
    }
  }
})();
axs.constants.GLOBAL_PROPERTIES = axs.constants.ARIA_ROLES.roletype.propertiesSet;
axs.constants.NO_ROLE_NAME = " ";
axs.constants.WIDGET_ROLE_TO_NAME = {alert:"aria_role_alert", alertdialog:"aria_role_alertdialog", button:"aria_role_button", checkbox:"aria_role_checkbox", columnheader:"aria_role_columnheader", combobox:"aria_role_combobox", dialog:"aria_role_dialog", grid:"aria_role_grid", gridcell:"aria_role_gridcell", link:"aria_role_link", listbox:"aria_role_listbox", log:"aria_role_log", marquee:"aria_role_marquee", menu:"aria_role_menu", menubar:"aria_role_menubar", menuitem:"aria_role_menuitem", menuitemcheckbox:"aria_role_menuitemcheckbox", 
menuitemradio:"aria_role_menuitemradio", option:axs.constants.NO_ROLE_NAME, progressbar:"aria_role_progressbar", radio:"aria_role_radio", radiogroup:"aria_role_radiogroup", rowheader:"aria_role_rowheader", scrollbar:"aria_role_scrollbar", slider:"aria_role_slider", spinbutton:"aria_role_spinbutton", status:"aria_role_status", tab:"aria_role_tab", tabpanel:"aria_role_tabpanel", textbox:"aria_role_textbox", timer:"aria_role_timer", toolbar:"aria_role_toolbar", tooltip:"aria_role_tooltip", treeitem:"aria_role_treeitem"};
axs.constants.STRUCTURE_ROLE_TO_NAME = {article:"aria_role_article", application:"aria_role_application", banner:"aria_role_banner", columnheader:"aria_role_columnheader", complementary:"aria_role_complementary", contentinfo:"aria_role_contentinfo", definition:"aria_role_definition", directory:"aria_role_directory", document:"aria_role_document", form:"aria_role_form", group:"aria_role_group", heading:"aria_role_heading", img:"aria_role_img", list:"aria_role_list", listitem:"aria_role_listitem", 
main:"aria_role_main", math:"aria_role_math", navigation:"aria_role_navigation", note:"aria_role_note", region:"aria_role_region", rowheader:"aria_role_rowheader", search:"aria_role_search", separator:"aria_role_separator"};
axs.constants.ATTRIBUTE_VALUE_TO_STATUS = [{name:"aria-autocomplete", values:{inline:"aria_autocomplete_inline", list:"aria_autocomplete_list", both:"aria_autocomplete_both"}}, {name:"aria-checked", values:{"true":"aria_checked_true", "false":"aria_checked_false", mixed:"aria_checked_mixed"}}, {name:"aria-disabled", values:{"true":"aria_disabled_true"}}, {name:"aria-expanded", values:{"true":"aria_expanded_true", "false":"aria_expanded_false"}}, {name:"aria-invalid", values:{"true":"aria_invalid_true", 
grammar:"aria_invalid_grammar", spelling:"aria_invalid_spelling"}}, {name:"aria-multiline", values:{"true":"aria_multiline_true"}}, {name:"aria-multiselectable", values:{"true":"aria_multiselectable_true"}}, {name:"aria-pressed", values:{"true":"aria_pressed_true", "false":"aria_pressed_false", mixed:"aria_pressed_mixed"}}, {name:"aria-readonly", values:{"true":"aria_readonly_true"}}, {name:"aria-required", values:{"true":"aria_required_true"}}, {name:"aria-selected", values:{"true":"aria_selected_true", 
"false":"aria_selected_false"}}];
axs.constants.INPUT_TYPE_TO_INFORMATION_TABLE_MSG = {button:"input_type_button", checkbox:"input_type_checkbox", color:"input_type_color", datetime:"input_type_datetime", "datetime-local":"input_type_datetime_local", date:"input_type_date", email:"input_type_email", file:"input_type_file", image:"input_type_image", month:"input_type_month", number:"input_type_number", password:"input_type_password", radio:"input_type_radio", range:"input_type_range", reset:"input_type_reset", search:"input_type_search", 
submit:"input_type_submit", tel:"input_type_tel", text:"input_type_text", url:"input_type_url", week:"input_type_week"};
axs.constants.TAG_TO_INFORMATION_TABLE_VERBOSE_MSG = {A:"tag_link", BUTTON:"tag_button", H1:"tag_h1", H2:"tag_h2", H3:"tag_h3", H4:"tag_h4", H5:"tag_h5", H6:"tag_h6", LI:"tag_li", OL:"tag_ol", SELECT:"tag_select", TEXTAREA:"tag_textarea", UL:"tag_ul", SECTION:"tag_section", NAV:"tag_nav", ARTICLE:"tag_article", ASIDE:"tag_aside", HGROUP:"tag_hgroup", HEADER:"tag_header", FOOTER:"tag_footer", TIME:"tag_time", MARK:"tag_mark"};
axs.constants.TAG_TO_INFORMATION_TABLE_BRIEF_MSG = {BUTTON:"tag_button", SELECT:"tag_select", TEXTAREA:"tag_textarea"};
axs.constants.MIXED_VALUES = {"true":!0, "false":!0, mixed:!0};
axs.constants.Severity = {INFO:"Info", WARNING:"Warning", SEVERE:"Severe"};
axs.constants.AuditResult = {PASS:"PASS", FAIL:"FAIL", NA:"NA"};
axs.constants.InlineElements = {TT:!0, I:!0, B:!0, BIG:!0, SMALL:!0, EM:!0, STRONG:!0, DFN:!0, CODE:!0, SAMP:!0, KBD:!0, VAR:!0, CITE:!0, ABBR:!0, ACRONYM:!0, A:!0, IMG:!0, OBJECT:!0, BR:!0, SCRIPT:!0, MAP:!0, Q:!0, SUB:!0, SUP:!0, SPAN:!0, BDO:!0, INPUT:!0, SELECT:!0, TEXTAREA:!0, LABEL:!0, BUTTON:!0};
axs.constants.NATIVELY_DISABLEABLE = {BUTTON:!0, INPUT:!0, SELECT:!0, TEXTAREA:!0, FIELDSET:!0, OPTGROUP:!0, OPTION:!0};
axs.constants.ARIA_TO_HTML_ATTRIBUTE = {"aria-checked":"checked", "aria-disabled":"disabled", "aria-hidden":"hidden", "aria-expanded":"open", "aria-valuemax":"max", "aria-valuemin":"min", "aria-readonly":"readonly", "aria-required":"required", "aria-selected":"selected", "aria-valuenow":"value"};
axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO = {A:[{role:"link", allowed:"button checkbox menuitem menuitemcheckbox menuitemradio tab treeitem".split(" "), selector:"a[href]"}], ADDRESS:[{role:"", allowed:["contentinfo", "presentation"]}], AREA:[{role:"link", selector:"area[href]"}], ARTICLE:[{role:"article", allowed:["presentation", "article", "document", "application", "main"]}], ASIDE:[{role:"complementary", allowed:["note", "complementary", "search", "presentation"]}], AUDIO:[{role:"", allowed:["application", 
"presentation"]}], BASE:[{role:"", reserved:!0}], BODY:[{role:"document", allowed:["presentation"]}], BUTTON:[{role:"button", allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:'button:not([aria-pressed]):not([type="menu"])'}, {role:"button", allowed:["button"], selector:"button[aria-pressed]"}, {role:"button", attributes:{"aria-haspopup":!0}, allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:'button[type="menu"]'}], CAPTION:[{role:"", 
allowed:["presentation"]}], COL:[{role:"", reserved:!0}], COLGROUP:[{role:"", reserved:!0}], DATALIST:[{role:"listbox", attributes:{"aria-multiselectable":!1}, allowed:["presentation"]}], DEL:[{role:"", allowed:["*"]}], DD:[{role:"", allowed:["presentation"]}], DT:[{role:"", allowed:["presentation"]}], DETAILS:[{role:"group", allowed:["group", "presentation"]}], DIALOG:[{role:"dialog", allowed:"dialog alert alertdialog application log marquee status".split(" "), selector:"dialog[open]"}, {role:"dialog", 
attributes:{"aria-hidden":!0}, allowed:"dialog alert alertdialog application log marquee status".split(" "), selector:"dialog:not([open])"}], DIV:[{role:"", allowed:["*"]}], DL:[{role:"list", allowed:["presentation"]}], EMBED:[{role:"", allowed:["application", "document", "img", "presentation"]}], FIGURE:[{role:"", allowed:["*"]}], FOOTER:[{role:"", allowed:["contentinfo", "presentation"]}], FORM:[{role:"form", allowed:["presentation"]}], P:[{role:"", allowed:["*"]}], PRE:[{role:"", allowed:["*"]}], 
BLOCKQUOTE:[{role:"", allowed:["*"]}], H1:[{role:"heading"}], H2:[{role:"heading"}], H3:[{role:"heading"}], H4:[{role:"heading"}], H5:[{role:"heading"}], H6:[{role:"heading"}], HEAD:[{role:"", reserved:!0}], HEADER:[{role:"", allowed:["banner", "presentation"]}], HR:[{role:"separator", allowed:["presentation"]}], HTML:[{role:"", reserved:!0}], IFRAME:[{role:"", allowed:["application", "document", "img", "presentation"], selector:"iframe:not([seamless])"}, {role:"", allowed:["application", "document", 
"img", "presentation", "group"], selector:"iframe[seamless]"}], IMG:[{role:"presentation", reserved:!0, selector:'img[alt=""]'}, {role:"img", allowed:["*"], selector:'img[alt]:not([alt=""])'}], INPUT:[{role:"button", allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:'input[type="button"]:not([aria-pressed])'}, {role:"button", allowed:["button"], selector:'input[type="button"][aria-pressed]'}, {role:"checkbox", allowed:["checkbox"], selector:'input[type="checkbox"]'}, 
{role:"", selector:'input[type="color"]'}, {role:"", selector:'input[type="date"]'}, {role:"", selector:'input[type="datetime"]'}, {role:"textbox", selector:'input[type="email"]:not([list])'}, {role:"", selector:'input[type="file"]'}, {role:"", reserved:!0, selector:'input[type="hidden"]'}, {role:"button", allowed:["button"], selector:'input[type="image"][aria-pressed]'}, {role:"button", allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:'input[type="image"]:not([aria-pressed])'}, 
{role:"", selector:'input[type="month"]'}, {role:"", selector:'input[type="number"]'}, {role:"textbox", selector:'input[type="password"]'}, {role:"radio", allowed:["menuitemradio"], selector:'input[type="radio"]'}, {role:"slider", selector:'input[type="range"]'}, {role:"button", selector:'input[type="reset"]'}, {role:"combobox", selector:'input[type="search"][list]'}, {role:"textbox", selector:'input[type="search"]:not([list])'}, {role:"button", selector:'input[type="submit"]'}, {role:"combobox", 
selector:'input[type="tel"][list]'}, {role:"textbox", selector:'input[type="tel"]:not([list])'}, {role:"combobox", selector:'input[type="text"][list]'}, {role:"textbox", selector:'input[type="text"]:not([list])'}, {role:"textbox", selector:"input:not([type])"}, {role:"", selector:'input[type="time"]'}, {role:"combobox", selector:'input[type="url"][list]'}, {role:"textbox", selector:'input[type="url"]:not([list])'}, {role:"", selector:'input[type="week"]'}], INS:[{role:"", allowed:["*"]}], KEYGEN:[{role:""}], 
LABEL:[{role:"", allowed:["presentation"]}], LI:[{role:"listitem", allowed:"menuitem menuitemcheckbox menuitemradio option tab treeitem presentation".split(" "), selector:'ol:not([role="presentation"])>li, ul:not([role="presentation"])>li'}, {role:"listitem", allowed:"listitem menuitem menuitemcheckbox menuitemradio option tab treeitem presentation".split(" "), selector:'ol[role="presentation"]>li, ul[role="presentation"]>li'}], LINK:[{role:"link", reserved:!0, selector:"link[href]"}], MAIN:[{role:"", 
allowed:["main", "presentation"]}], MAP:[{role:"", reserved:!0}], MATH:[{role:"", allowed:["presentation"]}], MENU:[{role:"toolbar", selector:'menu[type="toolbar"]'}], MENUITEM:[{role:"menuitem", selector:'menuitem[type="command"]'}, {role:"menuitemcheckbox", selector:'menuitem[type="checkbox"]'}, {role:"menuitemradio", selector:'menuitem[type="radio"]'}], META:[{role:"", reserved:!0}], METER:[{role:"progressbar", allowed:["presentation"]}], NAV:[{role:"navigation", allowed:["navigation", "presentation"]}], 
NOSCRIPT:[{role:"", reserved:!0}], OBJECT:[{role:"", allowed:["application", "document", "img", "presentation"]}], OL:[{role:"list", allowed:"directory group listbox menu menubar tablist toolbar tree presentation".split(" ")}], OPTGROUP:[{role:"", allowed:["presentation"]}], OPTION:[{role:"option"}], OUTPUT:[{role:"status", allowed:["*"]}], PARAM:[{role:"", reserved:!0}], PICTURE:[{role:"", reserved:!0}], PROGRESS:[{role:"progressbar", allowed:["presentation"]}], SCRIPT:[{role:"", reserved:!0}], 
SECTION:[{role:"region", allowed:"alert alertdialog application contentinfo dialog document log marquee search status presentation".split(" ")}], SELECT:[{role:"listbox"}], SOURCE:[{role:"", reserved:!0}], SPAN:[{role:"", allowed:["*"]}], STYLE:[{role:"", reserved:!0}], SVG:[{role:"", allowed:["application", "document", "img", "presentation"]}], SUMMARY:[{role:"", allowed:["presentation"]}], TABLE:[{role:"", allowed:["*"]}], TEMPLATE:[{role:"", reserved:!0}], TEXTAREA:[{role:"textbox"}], TBODY:[{role:"rowgroup", 
allowed:["*"]}], THEAD:[{role:"rowgroup", allowed:["*"]}], TFOOT:[{role:"rowgroup", allowed:["*"]}], TITLE:[{role:"", reserved:!0}], TD:[{role:"", allowed:["*"]}], TH:[{role:"", allowed:["*"]}], TR:[{role:"", allowed:["*"]}], TRACK:[{role:"", reserved:!0}], UL:[{role:"list", allowed:"directory group listbox menu menubar tablist toolbar tree presentation".split(" ")}], VIDEO:[{role:"", allowed:["application", "presentation"]}]};
axs.color = {};
axs.color.Color = function(a, b, c, d) {
  this.red = a;
  this.green = b;
  this.blue = c;
  this.alpha = d;
};
axs.color.YCbCr = function(a) {
  this.luma = this.z = a[0];
  this.Cb = this.x = a[1];
  this.Cr = this.y = a[2];
};
axs.color.YCbCr.prototype = {multiply:function(a) {
  return new axs.color.YCbCr([this.luma * a, this.Cb * a, this.Cr * a]);
}, add:function(a) {
  return new axs.color.YCbCr([this.luma + a.luma, this.Cb + a.Cb, this.Cr + a.Cr]);
}, subtract:function(a) {
  return new axs.color.YCbCr([this.luma - a.luma, this.Cb - a.Cb, this.Cr - a.Cr]);
}};
axs.color.calculateContrastRatio = function(a, b) {
  1 > a.alpha && (a = axs.color.flattenColors(a, b));
  var c = axs.color.calculateLuminance(a), d = axs.color.calculateLuminance(b);
  return (Math.max(c, d) + .05) / (Math.min(c, d) + .05);
};
axs.color.calculateLuminance = function(a) {
  return axs.color.toYCbCr(a).luma;
};
axs.color.luminanceRatio = function(a, b) {
  return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
};
axs.color.parseColor = function(a) {
  if ("transparent" === a) {
    return new axs.color.Color(0, 0, 0, 0);
  }
  var b = a.match(/^rgb\\((\\d+), (\\d+), (\\d+)\\)$/);
  if (b) {
    a = parseInt(b[1], 10);
    var c = parseInt(b[2], 10), d = parseInt(b[3], 10);
    return new axs.color.Color(a, c, d, 1);
  }
  return (b = a.match(/^rgba\\((\\d+), (\\d+), (\\d+), (\\d*(\\.\\d+)?)\\)/)) ? (a = parseInt(b[1], 10), c = parseInt(b[2], 10), d = parseInt(b[3], 10), b = parseFloat(b[4]), new axs.color.Color(a, c, d, b)) : null;
};
axs.color.colorChannelToString = function(a) {
  a = Math.round(a);
  return 15 >= a ? "0" + a.toString(16) : a.toString(16);
};
axs.color.colorToString = function(a) {
  return 1 == a.alpha ? "#" + axs.color.colorChannelToString(a.red) + axs.color.colorChannelToString(a.green) + axs.color.colorChannelToString(a.blue) : "rgba(" + [a.red, a.green, a.blue, a.alpha].join() + ")";
};
axs.color.luminanceFromContrastRatio = function(a, b, c) {
  return c ? (a + .05) * b - .05 : (a + .05) / b - .05;
};
axs.color.translateColor = function(a, b) {
  for (var c = b > a.luma ? axs.color.WHITE_YCC : axs.color.BLACK_YCC, d = c == axs.color.WHITE_YCC ? axs.color.YCC_CUBE_FACES_WHITE : axs.color.YCC_CUBE_FACES_BLACK, e = new axs.color.YCbCr([0, a.Cb, a.Cr]), f = new axs.color.YCbCr([1, a.Cb, a.Cr]), f = {a:e, b:f}, e = null, g = 0;g < d.length && !(e = axs.color.findIntersection(f, d[g]), 0 <= e.z && 1 >= e.z);g++) {
  }
  if (!e) {
    throw "Couldn't find intersection with YCbCr color cube for Cb=" + a.Cb + ", Cr=" + a.Cr + ".";
  }
  if (e.x != a.x || e.y != a.y) {
    throw "Intersection has wrong Cb/Cr values.";
  }
  if (Math.abs(c.luma - e.luma) < Math.abs(c.luma - b)) {
    return c = [b, a.Cb, a.Cr], axs.color.fromYCbCrArray(c);
  }
  c = (b - e.luma) / (c.luma - e.luma);
  c = [b, e.Cb - e.Cb * c, e.Cr - e.Cr * c];
  return axs.color.fromYCbCrArray(c);
};
axs.color.suggestColors = function(a, b, c) {
  var d = {}, e = axs.color.calculateLuminance(a), f = axs.color.calculateLuminance(b), g = f > e, h = axs.color.toYCbCr(b), k = axs.color.toYCbCr(a), m;
  for (m in c) {
    var l = c[m], n = axs.color.luminanceFromContrastRatio(e, l + .02, g);
    if (1 >= n && 0 <= n) {
      var p = axs.color.translateColor(h, n), l = axs.color.calculateContrastRatio(p, a), n = {};
      n.fg = axs.color.colorToString(p);
      n.bg = axs.color.colorToString(a);
      n.contrast = l.toFixed(2);
      d[m] = n;
    } else {
      l = axs.color.luminanceFromContrastRatio(f, l + .02, !g), 1 >= l && 0 <= l && (p = axs.color.translateColor(k, l), l = axs.color.calculateContrastRatio(b, p), n = {}, n.bg = axs.color.colorToString(p), n.fg = axs.color.colorToString(b), n.contrast = l.toFixed(2), d[m] = n);
    }
  }
  return d;
};
axs.color.flattenColors = function(a, b) {
  var c = a.alpha;
  return new axs.color.Color((1 - c) * b.red + c * a.red, (1 - c) * b.green + c * a.green, (1 - c) * b.blue + c * a.blue, a.alpha + b.alpha * (1 - a.alpha));
};
axs.color.multiplyMatrixVector = function(a, b) {
  var c = b[0], d = b[1], e = b[2];
  return [a[0][0] * c + a[0][1] * d + a[0][2] * e, a[1][0] * c + a[1][1] * d + a[1][2] * e, a[2][0] * c + a[2][1] * d + a[2][2] * e];
};
axs.color.toYCbCr = function(a) {
  var b = a.red / 255, c = a.green / 255;
  a = a.blue / 255;
  b = .03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4);
  c = .03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4);
  a = .03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4);
  return new axs.color.YCbCr(axs.color.multiplyMatrixVector(axs.color.YCC_MATRIX, [b, c, a]));
};
axs.color.fromYCbCr = function(a) {
  return axs.color.fromYCbCrArray([a.luma, a.Cb, a.Cr]);
};
axs.color.fromYCbCrArray = function(a) {
  var b = axs.color.multiplyMatrixVector(axs.color.INVERTED_YCC_MATRIX, a), c = b[0];
  a = b[1];
  b = b[2];
  c = .00303949 >= c ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - .055;
  a = .00303949 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055;
  b = .00303949 >= b ? 12.92 * b : 1.055 * Math.pow(b, 1 / 2.4) - .055;
  c = Math.min(Math.max(Math.round(255 * c), 0), 255);
  a = Math.min(Math.max(Math.round(255 * a), 0), 255);
  b = Math.min(Math.max(Math.round(255 * b), 0), 255);
  return new axs.color.Color(c, a, b, 1);
};
axs.color.RGBToYCbCrMatrix = function(a, b) {
  return [[a, 1 - a - b, b], [-a / (2 - 2 * b), (a + b - 1) / (2 - 2 * b), (1 - b) / (2 - 2 * b)], [(1 - a) / (2 - 2 * a), (a + b - 1) / (2 - 2 * a), -b / (2 - 2 * a)]];
};
axs.color.invert3x3Matrix = function(a) {
  var b = a[0][0], c = a[0][1], d = a[0][2], e = a[1][0], f = a[1][1], g = a[1][2], h = a[2][0], k = a[2][1];
  a = a[2][2];
  return axs.color.scalarMultiplyMatrix([[f * a - g * k, d * k - c * a, c * g - d * f], [g * h - e * a, b * a - d * h, d * e - b * g], [e * k - f * h, h * c - b * k, b * f - c * e]], 1 / (b * (f * a - g * k) - c * (a * e - g * h) + d * (e * k - f * h)));
};
axs.color.findIntersection = function(a, b) {
  var c = [a.a.x - b.p0.x, a.a.y - b.p0.y, a.a.z - b.p0.z], d = axs.color.invert3x3Matrix([[a.a.x - a.b.x, b.p1.x - b.p0.x, b.p2.x - b.p0.x], [a.a.y - a.b.y, b.p1.y - b.p0.y, b.p2.y - b.p0.y], [a.a.z - a.b.z, b.p1.z - b.p0.z, b.p2.z - b.p0.z]]), c = axs.color.multiplyMatrixVector(d, c)[0];
  return a.a.add(a.b.subtract(a.a).multiply(c));
};
axs.color.scalarMultiplyMatrix = function(a, b) {
  for (var c = [], d = 0;3 > d;d++) {
    c[d] = axs.color.scalarMultiplyVector(a[d], b);
  }
  return c;
};
axs.color.scalarMultiplyVector = function(a, b) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = a[d] * b;
  }
  return c;
};
axs.color.kR = .2126;
axs.color.kB = .0722;
axs.color.YCC_MATRIX = axs.color.RGBToYCbCrMatrix(axs.color.kR, axs.color.kB);
axs.color.INVERTED_YCC_MATRIX = axs.color.invert3x3Matrix(axs.color.YCC_MATRIX);
axs.color.BLACK = new axs.color.Color(0, 0, 0, 1);
axs.color.BLACK_YCC = axs.color.toYCbCr(axs.color.BLACK);
axs.color.WHITE = new axs.color.Color(255, 255, 255, 1);
axs.color.WHITE_YCC = axs.color.toYCbCr(axs.color.WHITE);
axs.color.RED = new axs.color.Color(255, 0, 0, 1);
axs.color.RED_YCC = axs.color.toYCbCr(axs.color.RED);
axs.color.GREEN = new axs.color.Color(0, 255, 0, 1);
axs.color.GREEN_YCC = axs.color.toYCbCr(axs.color.GREEN);
axs.color.BLUE = new axs.color.Color(0, 0, 255, 1);
axs.color.BLUE_YCC = axs.color.toYCbCr(axs.color.BLUE);
axs.color.CYAN = new axs.color.Color(0, 255, 255, 1);
axs.color.CYAN_YCC = axs.color.toYCbCr(axs.color.CYAN);
axs.color.MAGENTA = new axs.color.Color(255, 0, 255, 1);
axs.color.MAGENTA_YCC = axs.color.toYCbCr(axs.color.MAGENTA);
axs.color.YELLOW = new axs.color.Color(255, 255, 0, 1);
axs.color.YELLOW_YCC = axs.color.toYCbCr(axs.color.YELLOW);
axs.color.YCC_CUBE_FACES_BLACK = [{p0:axs.color.BLACK_YCC, p1:axs.color.RED_YCC, p2:axs.color.GREEN_YCC}, {p0:axs.color.BLACK_YCC, p1:axs.color.GREEN_YCC, p2:axs.color.BLUE_YCC}, {p0:axs.color.BLACK_YCC, p1:axs.color.BLUE_YCC, p2:axs.color.RED_YCC}];
axs.color.YCC_CUBE_FACES_WHITE = [{p0:axs.color.WHITE_YCC, p1:axs.color.CYAN_YCC, p2:axs.color.MAGENTA_YCC}, {p0:axs.color.WHITE_YCC, p1:axs.color.MAGENTA_YCC, p2:axs.color.YELLOW_YCC}, {p0:axs.color.WHITE_YCC, p1:axs.color.YELLOW_YCC, p2:axs.color.CYAN_YCC}];
axs.utils = {};
axs.utils.FOCUSABLE_ELEMENTS_SELECTOR = "input:not([type=hidden]):not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),a[href],iframe,[tabindex]";
axs.utils.LABELABLE_ELEMENTS_SELECTOR = "button,input:not([type=hidden]),keygen,meter,output,progress,select,textarea";
axs.utils.parentElement = function(a) {
  if (!a) {
    return null;
  }
  if (a.nodeType == Node.DOCUMENT_FRAGMENT_NODE) {
    return a.host;
  }
  var b = a.parentElement;
  if (b) {
    return b;
  }
  a = a.parentNode;
  if (!a) {
    return null;
  }
  switch(a.nodeType) {
    case Node.ELEMENT_NODE:
      return a;
    case Node.DOCUMENT_FRAGMENT_NODE:
      return a.host;
    default:
      return null;
  }
};
axs.utils.asElement = function(a) {
  switch(a.nodeType) {
    case Node.COMMENT_NODE:
      return null;
    case Node.ELEMENT_NODE:
      if ("script" == a.tagName.toLowerCase()) {
        return null;
      }
      break;
    case Node.TEXT_NODE:
      a = axs.utils.parentElement(a);
      break;
    default:
      return console.warn("Unhandled node type: ", a.nodeType), null;
  }
  return a;
};
axs.utils.elementIsTransparent = function(a) {
  return "0" == a.style.opacity;
};
axs.utils.elementHasZeroArea = function(a) {
  a = a.getBoundingClientRect();
  var b = a.top - a.bottom;
  return a.right - a.left && b ? !1 : !0;
};
axs.utils.elementIsOutsideScrollArea = function(a) {
  for (var b = axs.utils.parentElement(a), c = a.ownerDocument.defaultView;b != c.document.body;) {
    if (axs.utils.isClippedBy(a, b)) {
      return !0;
    }
    if (axs.utils.canScrollTo(a, b) && !axs.utils.elementIsOutsideScrollArea(b)) {
      return !1;
    }
    b = axs.utils.parentElement(b);
  }
  return !axs.utils.canScrollTo(a, c.document.body);
};
axs.utils.canScrollTo = function(a, b) {
  var c = a.getBoundingClientRect(), d = b.getBoundingClientRect(), e = d.top, f = d.left, g = e - b.scrollTop, e = e - b.scrollTop + b.scrollHeight, h = f - b.scrollLeft + b.scrollWidth;
  if (c.right < f - b.scrollLeft || c.bottom < g || c.left > h || c.top > e) {
    return !1;
  }
  f = a.ownerDocument.defaultView;
  g = f.getComputedStyle(b);
  return c.left > d.right || c.top > d.bottom ? "scroll" == g.overflow || "auto" == g.overflow || b instanceof f.HTMLBodyElement : !0;
};
axs.utils.isClippedBy = function(a, b) {
  var c = a.getBoundingClientRect(), d = b.getBoundingClientRect(), e = d.top - b.scrollTop, f = d.left - b.scrollLeft, g = a.ownerDocument.defaultView.getComputedStyle(b);
  return (c.right < d.left || c.bottom < d.top || c.left > d.right || c.top > d.bottom) && "hidden" == g.overflow ? !0 : c.right < f || c.bottom < e ? "visible" != g.overflow : !1;
};
axs.utils.isAncestor = function(a, b) {
  return null == b ? !1 : b === a ? !0 : axs.utils.isAncestor(a, b.parentNode);
};
axs.utils.overlappingElements = function(a) {
  if (axs.utils.elementHasZeroArea(a)) {
    return null;
  }
  for (var b = [], c = a.getClientRects(), d = 0;d < c.length;d++) {
    var e = c[d], e = document.elementFromPoint((e.left + e.right) / 2, (e.top + e.bottom) / 2);
    if (null != e && e != a && !axs.utils.isAncestor(e, a) && !axs.utils.isAncestor(a, e)) {
      var f = window.getComputedStyle(e, null);
      f && (f = axs.utils.getBgColor(f, e)) && 0 < f.alpha && 0 > b.indexOf(e) && b.push(e);
    }
  }
  return b;
};
axs.utils.elementIsHtmlControl = function(a) {
  var b = a.ownerDocument.defaultView;
  return a instanceof b.HTMLButtonElement || a instanceof b.HTMLInputElement || a instanceof b.HTMLSelectElement || a instanceof b.HTMLTextAreaElement ? !0 : !1;
};
axs.utils.elementIsAriaWidget = function(a) {
  return a.hasAttribute("role") && (a = a.getAttribute("role")) && (a = axs.constants.ARIA_ROLES[a]) && "widget" in a.allParentRolesSet ? !0 : !1;
};
axs.utils.elementIsVisible = function(a) {
  return axs.utils.elementIsTransparent(a) || axs.utils.elementHasZeroArea(a) || axs.utils.elementIsOutsideScrollArea(a) || axs.utils.overlappingElements(a).length ? !1 : !0;
};
axs.utils.isLargeFont = function(a) {
  var b = a.fontSize;
  a = "bold" == a.fontWeight;
  var c = b.match(/(\\d+)px/);
  if (c) {
    b = parseInt(c[1], 10);
    if (c = window.getComputedStyle(document.body, null).fontSize.match(/(\\d+)px/)) {
      var d = parseInt(c[1], 10), c = 1.2 * d, d = 1.5 * d
    } else {
      c = 19.2, d = 24;
    }
    return a && b >= c || b >= d;
  }
  if (c = b.match(/(\\d+)em/)) {
    return b = parseInt(c[1], 10), a && 1.2 <= b || 1.5 <= b ? !0 : !1;
  }
  if (c = b.match(/(\\d+)%/)) {
    return b = parseInt(c[1], 10), a && 120 <= b || 150 <= b ? !0 : !1;
  }
  if (c = b.match(/(\\d+)pt/)) {
    if (b = parseInt(c[1], 10), a && 14 <= b || 18 <= b) {
      return !0;
    }
  }
  return !1;
};
axs.utils.getBgColor = function(a, b) {
  var c = axs.color.parseColor(a.backgroundColor);
  if (!c) {
    return null;
  }
  1 > a.opacity && (c.alpha *= a.opacity);
  if (1 > c.alpha) {
    var d = axs.utils.getParentBgColor(b);
    if (null == d) {
      return null;
    }
    c = axs.color.flattenColors(c, d);
  }
  return c;
};
axs.utils.getParentBgColor = function(a) {
  var b = a;
  a = [];
  for (var c = null;b = axs.utils.parentElement(b);) {
    var d = window.getComputedStyle(b, null);
    if (d) {
      var e = axs.color.parseColor(d.backgroundColor);
      if (e && (1 > d.opacity && (e.alpha *= d.opacity), 0 != e.alpha && (a.push(e), 1 == e.alpha))) {
        c = !0;
        break;
      }
    }
  }
  c || a.push(new axs.color.Color(255, 255, 255, 1));
  for (b = a.pop();a.length;) {
    c = a.pop(), b = axs.color.flattenColors(c, b);
  }
  return b;
};
axs.utils.getFgColor = function(a, b, c) {
  var d = axs.color.parseColor(a.color);
  if (!d) {
    return null;
  }
  1 > d.alpha && (d = axs.color.flattenColors(d, c));
  1 > a.opacity && (b = axs.utils.getParentBgColor(b), d.alpha *= a.opacity, d = axs.color.flattenColors(d, b));
  return d;
};
axs.utils.getContrastRatioForElement = function(a) {
  var b = window.getComputedStyle(a, null);
  return axs.utils.getContrastRatioForElementWithComputedStyle(b, a);
};
axs.utils.getContrastRatioForElementWithComputedStyle = function(a, b) {
  if (axs.utils.isElementHidden(b)) {
    return null;
  }
  var c = axs.utils.getBgColor(a, b);
  if (!c) {
    return null;
  }
  var d = axs.utils.getFgColor(a, b, c);
  return d ? axs.color.calculateContrastRatio(d, c) : null;
};
axs.utils.isNativeTextElement = function(a) {
  var b = a.tagName.toLowerCase();
  a = a.type ? a.type.toLowerCase() : "";
  if ("textarea" == b) {
    return !0;
  }
  if ("input" != b) {
    return !1;
  }
  switch(a) {
    case "email":
    ;
    case "number":
    ;
    case "password":
    ;
    case "search":
    ;
    case "text":
    ;
    case "tel":
    ;
    case "url":
    ;
    case "":
      return !0;
    default:
      return !1;
  }
};
axs.utils.isLowContrast = function(a, b, c) {
  a = Math.round(10 * a) / 10;
  return c ? 4.5 > a || !axs.utils.isLargeFont(b) && 7 > a : 3 > a || !axs.utils.isLargeFont(b) && 4.5 > a;
};
axs.utils.hasLabel = function(a) {
  var b = a.tagName.toLowerCase(), c = a.type ? a.type.toLowerCase() : "";
  if (a.hasAttribute("aria-label") || a.hasAttribute("title") || "img" == b && a.hasAttribute("alt") || "input" == b && "image" == c && a.hasAttribute("alt") || "input" == b && ("submit" == c || "reset" == c) || a.hasAttribute("aria-labelledby") || a.hasAttribute("id") && 0 < document.querySelectorAll('label[for="' + a.id + '"]').length) {
    return !0;
  }
  for (b = axs.utils.parentElement(a);b;) {
    if ("label" == b.tagName.toLowerCase() && b.control == a) {
      return !0;
    }
    b = axs.utils.parentElement(b);
  }
  return !1;
};
axs.utils.isNativelyDisableable = function(a) {
  return a.tagName.toUpperCase() in axs.constants.NATIVELY_DISABLEABLE;
};
axs.utils.isElementDisabled = function(a) {
  if (axs.browserUtils.matchSelector(a, "[aria-disabled=true], [aria-disabled=true] *")) {
    return !0;
  }
  if (!axs.utils.isNativelyDisableable(a) || axs.browserUtils.matchSelector(a, "fieldset>legend:first-of-type *")) {
    return !1;
  }
  for (;null !== a;a = axs.utils.parentElement(a)) {
    if (axs.utils.isNativelyDisableable(a) && a.hasAttribute("disabled")) {
      return !0;
    }
  }
  return !1;
};
axs.utils.isElementHidden = function(a) {
  if (!(a instanceof a.ownerDocument.defaultView.HTMLElement)) {
    return !1;
  }
  if (a.hasAttribute("chromevoxignoreariahidden")) {
    var b = !0
  }
  var c = window.getComputedStyle(a, null);
  return "none" == c.display || "hidden" == c.visibility ? !0 : a.hasAttribute("aria-hidden") && "true" == a.getAttribute("aria-hidden").toLowerCase() ? !b : !1;
};
axs.utils.isElementOrAncestorHidden = function(a) {
  return axs.utils.isElementHidden(a) ? !0 : axs.utils.parentElement(a) ? axs.utils.isElementOrAncestorHidden(axs.utils.parentElement(a)) : !1;
};
axs.utils.isInlineElement = function(a) {
  a = a.tagName.toUpperCase();
  return axs.constants.InlineElements[a];
};
axs.utils.getRoles = function(a, b) {
  if (!a || a.nodeType !== Node.ELEMENT_NODE || !a.hasAttribute("role") && !b) {
    return null;
  }
  var c = a.getAttribute("role");
  !c && b && (c = axs.properties.getImplicitRole(a));
  if (!c) {
    return null;
  }
  for (var c = c.split(" "), d = {roles:[], valid:!1}, e = 0;e < c.length;e++) {
    var f = c[e], g = axs.constants.ARIA_ROLES[f], f = {name:f};
    g && !g.abstract ? (f.details = g, d.applied || (d.applied = f), f.valid = d.valid = !0) : f.valid = !1;
    d.roles.push(f);
  }
  return d;
};
axs.utils.getAriaPropertyValue = function(a, b, c) {
  var d = a.replace(/^aria-/, ""), e = axs.constants.ARIA_PROPERTIES[d], d = {name:a, rawValue:b};
  if (!e) {
    return d.valid = !1, d.reason = '"' + a + '" is not a valid ARIA property', d;
  }
  e = e.valueType;
  if (!e) {
    return d.valid = !1, d.reason = '"' + a + '" is not a valid ARIA property', d;
  }
  switch(e) {
    case "idref":
      a = axs.utils.isValidIDRefValue(b, c), d.valid = a.valid, d.reason = a.reason, d.idref = a.idref;
    case "idref_list":
      a = b.split(/\\s+/);
      d.valid = !0;
      for (b = 0;b < a.length;b++) {
        e = axs.utils.isValidIDRefValue(a[b], c), e.valid || (d.valid = !1), d.values ? d.values.push(e) : d.values = [e];
      }
      return d;
    case "integer":
      c = axs.utils.isValidNumber(b);
      if (!c.valid) {
        return d.valid = !1, d.reason = c.reason, d;
      }
      Math.floor(c.value) !== c.value ? (d.valid = !1, d.reason = "" + b + " is not a whole integer") : (d.valid = !0, d.value = c.value);
      return d;
    case "decimal":
    ;
    case "number":
      c = axs.utils.isValidNumber(b);
      d.valid = c.valid;
      if (!c.valid) {
        return d.reason = c.reason, d;
      }
      d.value = c.value;
      return d;
    case "string":
      return d.valid = !0, d.value = b, d;
    case "token":
      return c = axs.utils.isValidTokenValue(a, b.toLowerCase()), c.valid ? (d.valid = !0, d.value = c.value) : (d.valid = !1, d.value = b, d.reason = c.reason), d;
    case "token_list":
      e = b.split(/\\s+/);
      d.valid = !0;
      for (b = 0;b < e.length;b++) {
        c = axs.utils.isValidTokenValue(a, e[b].toLowerCase()), c.valid || (d.valid = !1, d.reason ? (d.reason = [d.reason], d.reason.push(c.reason)) : (d.reason = c.reason, d.possibleValues = c.possibleValues)), d.values ? d.values.push(c.value) : d.values = [c.value];
      }
      return d;
    case "tristate":
      return c = axs.utils.isPossibleValue(b.toLowerCase(), axs.constants.MIXED_VALUES, a), c.valid ? (d.valid = !0, d.value = c.value) : (d.valid = !1, d.value = b, d.reason = c.reason), d;
    case "boolean":
      return c = axs.utils.isValidBoolean(b), c.valid ? (d.valid = !0, d.value = c.value) : (d.valid = !1, d.value = b, d.reason = c.reason), d;
  }
  d.valid = !1;
  d.reason = "Not a valid ARIA property";
  return d;
};
axs.utils.isValidTokenValue = function(a, b) {
  var c = a.replace(/^aria-/, "");
  return axs.utils.isPossibleValue(b, axs.constants.ARIA_PROPERTIES[c].valuesSet, a);
};
axs.utils.isPossibleValue = function(a, b, c) {
  return b[a] ? {valid:!0, value:a} : {valid:!1, value:a, reason:'"' + a + '" is not a valid value for ' + c, possibleValues:Object.keys(b)};
};
axs.utils.isValidBoolean = function(a) {
  try {
    var b = JSON.parse(a);
  } catch (c) {
    b = "";
  }
  return "boolean" != typeof b ? {valid:!1, value:a, reason:'"' + a + '" is not a true/false value'} : {valid:!0, value:b};
};
axs.utils.isValidIDRefValue = function(a, b) {
  return 0 == a.length ? {valid:!0, idref:a} : b.ownerDocument.getElementById(a) ? {valid:!0, idref:a} : {valid:!1, idref:a, reason:'No element with ID "' + a + '"'};
};
axs.utils.isValidNumber = function(a) {
  var b = {valid:!1, value:a, reason:'"' + a + '" is not a number'};
  if (!a) {
    return b;
  }
  if (/^0x/i.test(a)) {
    return b.reason = '"' + a + '" is not a decimal number', b;
  }
  a *= 1;
  return isFinite(a) ? {valid:!0, value:a} : b;
};
axs.utils.isElementImplicitlyFocusable = function(a) {
  var b = a.ownerDocument.defaultView;
  return a instanceof b.HTMLAnchorElement || a instanceof b.HTMLAreaElement ? a.hasAttribute("href") : a instanceof b.HTMLInputElement || a instanceof b.HTMLSelectElement || a instanceof b.HTMLTextAreaElement || a instanceof b.HTMLButtonElement || a instanceof b.HTMLIFrameElement ? !a.disabled : !1;
};
axs.utils.values = function(a) {
  var b = [], c;
  for (c in a) {
    a.hasOwnProperty(c) && "function" != typeof a[c] && b.push(a[c]);
  }
  return b;
};
axs.utils.namedValues = function(a) {
  var b = {}, c;
  for (c in a) {
    a.hasOwnProperty(c) && "function" != typeof a[c] && (b[c] = a[c]);
  }
  return b;
};
axs.utils.getQuerySelectorText = function(a) {
  if (null == a || "HTML" == a.tagName) {
    return "html";
  }
  if ("BODY" == a.tagName) {
    return "body";
  }
  if (a.hasAttribute) {
    if (a.id) {
      return "#" + a.id;
    }
    if (a.className) {
      for (var b = "", c = 0;c < a.classList.length;c++) {
        b += "." + a.classList[c];
      }
      var d = 0;
      if (a.parentNode) {
        for (c = 0;c < a.parentNode.children.length;c++) {
          var e = a.parentNode.children[c];
          axs.browserUtils.matchSelector(e, b) && d++;
          if (e === a) {
            break;
          }
        }
      } else {
        d = 1;
      }
      if (1 == d) {
        return axs.utils.getQuerySelectorText(a.parentNode) + " > " + b;
      }
    }
    if (a.parentNode) {
      b = a.parentNode.children;
      d = 1;
      for (c = 0;b[c] !== a;) {
        b[c].tagName == a.tagName && d++, c++;
      }
      c = "";
      "BODY" != a.parentNode.tagName && (c = axs.utils.getQuerySelectorText(a.parentNode) + " > ");
      return 1 == d ? c + a.tagName : c + a.tagName + ":nth-of-type(" + d + ")";
    }
  } else {
    if (a.selectorText) {
      return a.selectorText;
    }
  }
  return "";
};
axs.utils.getIdReferrers = function(a, b) {
  if (!b) {
    return null;
  }
  var c = b.id, d = a.replace(/^aria-/, ""), d = axs.constants.ARIA_PROPERTIES[d];
  if (!c || !d) {
    return null;
  }
  d = d.valueType;
  return "idref_list" === d || "idref" === d ? (c = c.replace(/'/g, "\\\\'"), b.ownerDocument.querySelectorAll("[" + a + "~='" + c + "']")) : null;
};
axs.utils.getIdReferents = function(a, b) {
  var c = [], d = a.replace(/^aria-/, ""), d = axs.constants.ARIA_PROPERTIES[d];
  if (!d || !b.hasAttribute(a)) {
    return c;
  }
  d = d.valueType;
  if ("idref_list" === d || "idref" === d) {
    for (var d = b.ownerDocument, e = b.getAttribute(a), e = e.split(/\\s+/), f = 0, g = e.length;f < g;f++) {
      var h = d.getElementById(e[f]);
      h && (c[c.length] = h);
    }
  }
  return c;
};
axs.utils.getAriaPropertiesByValueType = function(a) {
  var b = {}, c;
  for (c in axs.constants.ARIA_PROPERTIES) {
    var d = axs.constants.ARIA_PROPERTIES[c];
    d && 0 <= a.indexOf(d.valueType) && (b[c] = d);
  }
  return b;
};
axs.utils.getSelectorForAriaProperties = function(a) {
  a = Object.keys(a).map(function(a) {
    return "[aria-" + a + "]";
  });
  a.sort();
  return a.join(",");
};
axs.utils.findDescendantsWithRole = function(a, b) {
  if (!a || !b) {
    return [];
  }
  var c = axs.properties.getSelectorForRole(b);
  if (c && (c = a.querySelectorAll(c))) {
    c = Array.prototype.map.call(c, function(a) {
      return a;
    });
  } else {
    return [];
  }
  return c;
};
axs.properties = {};
axs.properties.TEXT_CONTENT_XPATH = './/text()[normalize-space(.)!=""]/parent::*[name()!="script"]';
axs.properties.getFocusProperties = function(a) {
  var b = {}, c = a.getAttribute("tabindex");
  void 0 != c ? b.tabindex = {value:c, valid:!0} : axs.utils.isElementImplicitlyFocusable(a) && (b.implicitlyFocusable = {value:!0, valid:!0});
  if (0 == Object.keys(b).length) {
    return null;
  }
  var d = axs.utils.elementIsTransparent(a), e = axs.utils.elementHasZeroArea(a), f = axs.utils.elementIsOutsideScrollArea(a), g = axs.utils.overlappingElements(a);
  if (d || e || f || 0 < g.length) {
    var c = axs.utils.isElementOrAncestorHidden(a), h = {value:!1, valid:c};
    d && (h.transparent = !0);
    e && (h.zeroArea = !0);
    f && (h.outsideScrollArea = !0);
    g && 0 < g.length && (h.overlappingElements = g);
    d = {value:c, valid:c};
    c && (d.reason = axs.properties.getHiddenReason(a));
    h.hidden = d;
    b.visible = h;
  } else {
    b.visible = {value:!0, valid:!0};
  }
  return b;
};
axs.properties.getHiddenReason = function(a) {
  if (!(a && a instanceof a.ownerDocument.defaultView.HTMLElement)) {
    return null;
  }
  if (a.hasAttribute("chromevoxignoreariahidden")) {
    var b = !0
  }
  var c = window.getComputedStyle(a, null);
  return "none" == c.display ? {property:"display: none", on:a} : "hidden" == c.visibility ? {property:"visibility: hidden", on:a} : a.hasAttribute("aria-hidden") && "true" == a.getAttribute("aria-hidden").toLowerCase() && !b ? {property:"aria-hidden", on:a} : axs.properties.getHiddenReason(axs.utils.parentElement(a));
};
axs.properties.getColorProperties = function(a) {
  var b = {};
  (a = axs.properties.getContrastRatioProperties(a)) && (b.contrastRatio = a);
  return 0 == Object.keys(b).length ? null : b;
};
axs.properties.hasDirectTextDescendant = function(a) {
  function b() {
    for (var b = c.evaluate(axs.properties.TEXT_CONTENT_XPATH, a, null, XPathResult.ANY_TYPE, null), e = b.iterateNext();null != e;e = b.iterateNext()) {
      if (e === a) {
        return !0;
      }
    }
    return !1;
  }
  var c;
  c = a.nodeType == Node.DOCUMENT_NODE ? a : a.ownerDocument;
  return c.evaluate ? b() : function() {
    for (var b = c.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);b.nextNode();) {
      var e = b.currentNode, f = e.parentNode.tagName.toLowerCase();
      if (e.nodeValue.trim() && "script" !== f && a !== e) {
        return !0;
      }
    }
    return !1;
  }();
};
axs.properties.getContrastRatioProperties = function(a) {
  if (!axs.properties.hasDirectTextDescendant(a)) {
    return null;
  }
  var b = {}, c = window.getComputedStyle(a, null), d = axs.utils.getBgColor(c, a);
  if (!d) {
    return null;
  }
  b.backgroundColor = axs.color.colorToString(d);
  var e = axs.utils.getFgColor(c, a, d);
  b.foregroundColor = axs.color.colorToString(e);
  a = axs.utils.getContrastRatioForElementWithComputedStyle(c, a);
  if (!a) {
    return null;
  }
  b.value = a.toFixed(2);
  axs.utils.isLowContrast(a, c) && (b.alert = !0);
  var f = axs.utils.isLargeFont(c) ? 3 : 4.5, c = axs.utils.isLargeFont(c) ? 4.5 : 7, g = {};
  f > a && (g.AA = f);
  c > a && (g.AAA = c);
  if (!Object.keys(g).length) {
    return b;
  }
  (d = axs.color.suggestColors(d, e, g)) && Object.keys(d).length && (b.suggestedColors = d);
  return b;
};
axs.properties.findTextAlternatives = function(a, b, c, d) {
  var e = c || !1;
  c = axs.utils.asElement(a);
  if (!c || !e && !d && axs.utils.isElementOrAncestorHidden(c)) {
    return null;
  }
  if (a.nodeType == Node.TEXT_NODE) {
    return c = {type:"text"}, c.text = a.textContent, c.lastWord = axs.properties.getLastWord(c.text), b.content = c, a.textContent;
  }
  a = null;
  e || (a = axs.properties.getTextFromAriaLabelledby(c, b));
  c.hasAttribute("aria-label") && (d = {type:"text"}, d.text = c.getAttribute("aria-label"), d.lastWord = axs.properties.getLastWord(d.text), a ? d.unused = !0 : e && axs.utils.elementIsHtmlControl(c) || (a = d.text), b.ariaLabel = d);
  c.hasAttribute("role") && "presentation" == c.getAttribute("role") || (a = axs.properties.getTextFromHostLanguageAttributes(c, b, a, e));
  if (e && axs.utils.elementIsHtmlControl(c)) {
    d = c.ownerDocument.defaultView;
    if (c instanceof d.HTMLInputElement) {
      var f = c;
      "text" == f.type && f.value && 0 < f.value.length && (b.controlValue = {text:f.value});
      "range" == f.type && (b.controlValue = {text:f.value});
    }
    c instanceof d.HTMLSelectElement && (b.controlValue = {text:c.value});
    b.controlValue && (d = b.controlValue, a ? d.unused = !0 : a = d.text);
  }
  if (e && axs.utils.elementIsAriaWidget(c)) {
    e = c.getAttribute("role");
    "textbox" == e && c.textContent && 0 < c.textContent.length && (b.controlValue = {text:c.textContent});
    if ("slider" == e || "spinbutton" == e) {
      c.hasAttribute("aria-valuetext") ? b.controlValue = {text:c.getAttribute("aria-valuetext")} : c.hasAttribute("aria-valuenow") && (b.controlValue = {value:c.getAttribute("aria-valuenow"), text:"" + c.getAttribute("aria-valuenow")});
    }
    if ("menu" == e) {
      var g = c.querySelectorAll("[role=menuitemcheckbox], [role=menuitemradio]");
      d = [];
      for (f = 0;f < g.length;f++) {
        "true" == g[f].getAttribute("aria-checked") && d.push(g[f]);
      }
      if (0 < d.length) {
        g = "";
        for (f = 0;f < d.length;f++) {
          g += axs.properties.findTextAlternatives(d[f], {}, !0), f < d.length - 1 && (g += ", ");
        }
        b.controlValue = {text:g};
      }
    }
    if ("combobox" == e || "select" == e) {
      b.controlValue = {text:"TODO"};
    }
    b.controlValue && (d = b.controlValue, a ? d.unused = !0 : a = d.text);
  }
  d = !0;
  c.hasAttribute("role") && (e = c.getAttribute("role"), (e = axs.constants.ARIA_ROLES[e]) && (!e.namefrom || 0 > e.namefrom.indexOf("contents")) && (d = !1));
  (e = axs.properties.getTextFromDescendantContent(c)) && d && (d = {type:"text"}, d.text = e, d.lastWord = axs.properties.getLastWord(d.text), a ? d.unused = !0 : a = e, b.content = d);
  c.hasAttribute("title") && (e = {type:"string", valid:!0}, e.text = c.getAttribute("title"), e.lastWord = axs.properties.getLastWord(e.lastWord), a ? e.unused = !0 : a = e.text, b.title = e);
  return 0 == Object.keys(b).length && null == a ? null : a;
};
axs.properties.getTextFromDescendantContent = function(a) {
  var b = a.childNodes;
  a = [];
  for (var c = 0;c < b.length;c++) {
    var d = axs.properties.findTextAlternatives(b[c], {}, !0);
    d && a.push(d.trim());
  }
  if (a.length) {
    b = "";
    for (c = 0;c < a.length;c++) {
      b = [b, a[c]].join(" ").trim();
    }
    return b;
  }
  return null;
};
axs.properties.getTextFromAriaLabelledby = function(a, b) {
  var c = null;
  if (!a.hasAttribute("aria-labelledby")) {
    return c;
  }
  for (var d = a.getAttribute("aria-labelledby").split(/\\s+/), e = {valid:!0}, f = [], g = [], h = 0;h < d.length;h++) {
    var k = {type:"element"}, m = d[h];
    k.value = m;
    var l = document.getElementById(m);
    l ? (k.valid = !0, k.text = axs.properties.findTextAlternatives(l, {}, !0), k.lastWord = axs.properties.getLastWord(k.text), f.push(l.textContent.trim()), k.element = l) : (k.valid = !1, e.valid = !1, k.errorMessage = {messageKey:"noElementWithId", args:[m]});
    g.push(k);
  }
  0 < g.length && (g[g.length - 1].last = !0, e.values = g, e.text = f.join(" "), e.lastWord = axs.properties.getLastWord(e.text), c = e.text, b.ariaLabelledby = e);
  return c;
};
axs.properties.getTextFromHostLanguageAttributes = function(a, b, c, d) {
  if (axs.browserUtils.matchSelector(a, "img") && a.hasAttribute("alt")) {
    var e = {type:"string", valid:!0};
    e.text = a.getAttribute("alt");
    c ? e.unused = !0 : c = e.text;
    b.alt = e;
  }
  if (axs.browserUtils.matchSelector(a, 'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), video:not([disabled])') && !d) {
    if (a.hasAttribute("id")) {
      d = document.querySelectorAll('label[for="' + a.id + '"]');
      for (var e = {}, f = [], g = [], h = 0;h < d.length;h++) {
        var k = {type:"element"}, m = d[h], l = axs.properties.findTextAlternatives(m, {}, !0);
        l && 0 < l.trim().length && (k.text = l.trim(), g.push(l.trim()));
        k.element = m;
        f.push(k);
      }
      0 < f.length && (f[f.length - 1].last = !0, e.values = f, e.text = g.join(" "), e.lastWord = axs.properties.getLastWord(e.text), c ? e.unused = !0 : c = e.text, b.labelFor = e);
    }
    d = axs.utils.parentElement(a);
    for (e = {};d;) {
      if ("label" == d.tagName.toLowerCase() && (f = d, f.control == a)) {
        e.type = "element";
        e.text = axs.properties.findTextAlternatives(f, {}, !0);
        e.lastWord = axs.properties.getLastWord(e.text);
        e.element = f;
        break;
      }
      d = axs.utils.parentElement(d);
    }
    e.text && (c ? e.unused = !0 : c = e.text, b.labelWrapped = e);
    Object.keys(b).length || (b.noLabel = !0);
  }
  return c;
};
axs.properties.getLastWord = function(a) {
  if (!a) {
    return null;
  }
  var b = a.lastIndexOf(" ") + 1, c = a.length - 10;
  return a.substring(b > c ? b : c);
};
axs.properties.getTextProperties = function(a) {
  var b = {}, c = axs.properties.findTextAlternatives(a, b, !1, !0);
  if (0 == Object.keys(b).length && ((a = axs.utils.asElement(a)) && axs.browserUtils.matchSelector(a, "img") && (b.alt = {valid:!1, errorMessage:"No alt value provided"}, a = a.src, "string" == typeof a && (c = a.split("/").pop(), b.filename = {text:c})), !c)) {
    return null;
  }
  b.hasProperties = Boolean(Object.keys(b).length);
  b.computedText = c;
  b.lastWord = axs.properties.getLastWord(c);
  return b;
};
axs.properties.getAriaProperties = function(a) {
  var b = {}, c = axs.properties.getGlobalAriaProperties(a), d;
  for (d in axs.constants.ARIA_PROPERTIES) {
    var e = "aria-" + d;
    if (a.hasAttribute(e)) {
      var f = a.getAttribute(e);
      c[e] = axs.utils.getAriaPropertyValue(e, f, a);
    }
  }
  0 < Object.keys(c).length && (b.properties = axs.utils.values(c));
  f = axs.utils.getRoles(a);
  if (!f) {
    return Object.keys(b).length ? b : null;
  }
  b.roles = f;
  if (!f.valid || !f.roles) {
    return b;
  }
  for (var e = f.roles, g = 0;g < e.length;g++) {
    var h = e[g];
    if (h.details && h.details.propertiesSet) {
      for (d in h.details.propertiesSet) {
        d in c || (a.hasAttribute(d) ? (f = a.getAttribute(d), c[d] = axs.utils.getAriaPropertyValue(d, f, a), "values" in c[d] && (f = c[d].values, f[f.length - 1].isLast = !0)) : h.details.requiredPropertiesSet[d] && (c[d] = {name:d, valid:!1, reason:"Required property not set"}));
      }
    }
  }
  0 < Object.keys(c).length && (b.properties = axs.utils.values(c));
  return 0 < Object.keys(b).length ? b : null;
};
axs.properties.getGlobalAriaProperties = function(a) {
  var b = {}, c;
  for (c in axs.constants.GLOBAL_PROPERTIES) {
    if (a.hasAttribute(c)) {
      var d = a.getAttribute(c);
      b[c] = axs.utils.getAriaPropertyValue(c, d, a);
    }
  }
  return b;
};
axs.properties.getVideoProperties = function(a) {
  if (!axs.browserUtils.matchSelector(a, "video")) {
    return null;
  }
  var b = {};
  b.captionTracks = axs.properties.getTrackElements(a, "captions");
  b.descriptionTracks = axs.properties.getTrackElements(a, "descriptions");
  b.chapterTracks = axs.properties.getTrackElements(a, "chapters");
  return b;
};
axs.properties.getTrackElements = function(a, b) {
  var c = a.querySelectorAll("track[kind=" + b + "]"), d = {};
  if (!c.length) {
    return d.valid = !1, d.reason = {messageKey:"noTracksProvided", args:[[b]]}, d;
  }
  d.valid = !0;
  for (var e = [], f = 0;f < c.length;f++) {
    var g = {}, h = c[f].getAttribute("src"), k = c[f].getAttribute("srcLang"), m = c[f].getAttribute("label");
    h ? (g.valid = !0, g.src = h) : (g.valid = !1, g.reason = {messageKey:"noSrcProvided"});
    h = "";
    m && (h += m, k && (h += " "));
    k && (h += "(" + k + ")");
    "" == h && (h = "[[object Object]]");
    g.name = h;
    e.push(g);
  }
  d.values = e;
  return d;
};
axs.properties.getAllProperties = function(a) {
  var b = axs.utils.asElement(a);
  if (!b) {
    return {};
  }
  var c = {};
  c.ariaProperties = axs.properties.getAriaProperties(b);
  c.colorProperties = axs.properties.getColorProperties(b);
  c.focusProperties = axs.properties.getFocusProperties(b);
  c.textProperties = axs.properties.getTextProperties(a);
  c.videoProperties = axs.properties.getVideoProperties(b);
  return c;
};
(function() {
  function a(a) {
    if (!a) {
      return null;
    }
    var c = a.tagName;
    if (!c) {
      return null;
    }
    c = c.toUpperCase();
    c = axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO[c];
    if (!c || !c.length) {
      return null;
    }
    for (var d = null, e = 0, f = c.length;e < f;e++) {
      var g = c[e];
      if (g.selector) {
        if (axs.browserUtils.matchSelector(a, g.selector)) {
          return g;
        }
      } else {
        d = g;
      }
    }
    return d;
  }
  axs.properties.getImplicitRole = function(b) {
    return (b = a(b)) ? b.role : "";
  };
  axs.properties.canTakeAriaAttributes = function(b) {
    return (b = a(b)) ? !b.reserved : !0;
  };
})();
axs.properties.getNativelySupportedAttributes = function(a) {
  var b = [];
  if (!a) {
    return b;
  }
  a = a.cloneNode(!1);
  for (var c = Object.keys(axs.constants.ARIA_TO_HTML_ATTRIBUTE), d = 0;d < c.length;d++) {
    var e = c[d];
    axs.constants.ARIA_TO_HTML_ATTRIBUTE[e] in a && (b[b.length] = e);
  }
  return b;
};
(function() {
  var a = {};
  axs.properties.getSelectorForRole = function(b) {
    if (!b) {
      return "";
    }
    if (a[b] && a.hasOwnProperty(b)) {
      return a[b];
    }
    var c = ['[role="' + b + '"]'];
    Object.keys(axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO).forEach(function(a) {
      var e = axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO[a];
      if (e && e.length) {
        for (var f = 0;f < e.length;f++) {
          var g = e[f];
          if (g.role === b) {
            if (g.selector) {
              c[c.length] = g.selector;
            } else {
              c[c.length] = a;
              break;
            }
          }
        }
      }
    });
    return a[b] = c.join(",");
  };
})();
axs.AuditRule = function(a) {
  for (var b = !0, c = [], d = 0;d < axs.AuditRule.requiredFields.length;d++) {
    var e = axs.AuditRule.requiredFields[d];
    e in a || (b = !1, c.push(e));
  }
  if (!b) {
    throw "Invalid spec; the following fields were not specified: " + c.join(", ") + "\\n" + JSON.stringify(a);
  }
  this.name = a.name;
  this.severity = a.severity;
  this.relevantElementMatcher_ = a.relevantElementMatcher;
  this.test_ = a.test;
  this.code = a.code;
  this.heading = a.heading || "";
  this.url = a.url || "";
  this.requiresConsoleAPI = !!a.opt_requiresConsoleAPI;
};
axs.AuditRule.requiredFields = "name severity relevantElementMatcher test code heading".split(" ");
axs.AuditRule.NOT_APPLICABLE = {result:axs.constants.AuditResult.NA};
axs.AuditRule.prototype.addElement = function(a, b) {
  a.push(b);
};
axs.AuditRule.collectMatchingElements = function(a, b, c, d) {
  if (a.nodeType == Node.ELEMENT_NODE) {
    var e = a
  }
  e && b.call(null, e) && c.push(e);
  if (e) {
    var f = e.shadowRoot || e.webkitShadowRoot;
    if (f) {
      axs.AuditRule.collectMatchingElements(f, b, c, f);
      return;
    }
  }
  if (e && "content" == e.localName) {
    for (var f = e.getDistributedNodes(), g = 0;g < f.length;g++) {
      axs.AuditRule.collectMatchingElements(f[g], b, c, d);
    }
  } else {
    if (e && "shadow" == e.localName) {
      if (f = e, d) {
        for (f = f.getDistributedNodes(), g = 0;g < f.length;g++) {
          axs.AuditRule.collectMatchingElements(f[g], b, c, d);
        }
      } else {
        console.warn("ShadowRoot not provided for", e);
      }
    }
    e && "iframe" == e.localName && e.contentDocument && axs.AuditRule.collectMatchingElements(e.contentDocument, b, c, d);
    for (a = a.firstChild;null != a;) {
      axs.AuditRule.collectMatchingElements(a, b, c, d), a = a.nextSibling;
    }
  }
};
axs.AuditRule.prototype.run = function(a) {
  a = a || {};
  var b = "ignoreSelectors" in a ? a.ignoreSelectors : [], c = "maxResults" in a ? a.maxResults : null, d = [];
  axs.AuditRule.collectMatchingElements("scope" in a ? a.scope : document, this.relevantElementMatcher_, d);
  var e = [];
  if (!d.length) {
    return {result:axs.constants.AuditResult.NA};
  }
  for (var f = 0;f < d.length && !(null != c && e.length >= c);f++) {
    var g = d[f], h;
    a: {
      h = g;
      for (var k = 0;k < b.length;k++) {
        if (axs.browserUtils.matchSelector(h, b[k])) {
          h = !0;
          break a;
        }
      }
      h = !1;
    }
    !h && this.test_(g, a.config) && this.addElement(e, g);
  }
  a = {result:e.length ? axs.constants.AuditResult.FAIL : axs.constants.AuditResult.PASS, elements:e};
  f < d.length && (a.resultsTruncated = !0);
  return a;
};
axs.AuditRules = {};
(function() {
  var a = {}, b = {};
  axs.AuditRules.specs = {};
  axs.AuditRules.addRule = function(c) {
    var d = new axs.AuditRule(c);
    if (d.code in b) {
      throw Error('Can not add audit rule with same code: "' + d.code + '"');
    }
    if (d.name in a) {
      throw Error('Can not add audit rule with same name: "' + d.name + '"');
    }
    a[d.name] = b[d.code] = d;
    axs.AuditRules.specs[c.name] = c;
  };
  axs.AuditRules.getRule = function(c) {
    return a[c] || b[c] || null;
  };
  axs.AuditRules.getRules = function(b) {
    var d = Object.keys(a);
    return b ? d : d.map(function(a) {
      return this.getRule(a);
    }, axs.AuditRules);
  };
})();
axs.AuditResults = function() {
  this.errors_ = [];
  this.warnings_ = [];
};
goog.exportSymbol("axs.AuditResults", axs.AuditResults);
axs.AuditResults.prototype.addError = function(a) {
  "" != a && this.errors_.push(a);
};
goog.exportProperty(axs.AuditResults.prototype, "addError", axs.AuditResults.prototype.addError);
axs.AuditResults.prototype.addWarning = function(a) {
  "" != a && this.warnings_.push(a);
};
goog.exportProperty(axs.AuditResults.prototype, "addWarning", axs.AuditResults.prototype.addWarning);
axs.AuditResults.prototype.numErrors = function() {
  return this.errors_.length;
};
goog.exportProperty(axs.AuditResults.prototype, "numErrors", axs.AuditResults.prototype.numErrors);
axs.AuditResults.prototype.numWarnings = function() {
  return this.warnings_.length;
};
goog.exportProperty(axs.AuditResults.prototype, "numWarnings", axs.AuditResults.prototype.numWarnings);
axs.AuditResults.prototype.getErrors = function() {
  return this.errors_;
};
goog.exportProperty(axs.AuditResults.prototype, "getErrors", axs.AuditResults.prototype.getErrors);
axs.AuditResults.prototype.getWarnings = function() {
  return this.warnings_;
};
goog.exportProperty(axs.AuditResults.prototype, "getWarnings", axs.AuditResults.prototype.getWarnings);
axs.AuditResults.prototype.toString = function() {
  for (var a = "", b = 0;b < this.errors_.length;b++) {
    0 == b && (a += "\\nErrors:\\n");
    var c = this.errors_[b], a = a + (c + "\\n\\n");
  }
  for (b = 0;b < this.warnings_.length;b++) {
    0 == b && (a += "\\nWarnings:\\n"), c = this.warnings_[b], a += c + "\\n\\n";
  }
  return a;
};
goog.exportProperty(axs.AuditResults.prototype, "toString", axs.AuditResults.prototype.toString);
axs.Audit = {};
axs.AuditConfiguration = function(a) {
  null == a && (a = {});
  this.rules_ = {};
  this.maxResults = this.auditRulesToIgnore = this.auditRulesToRun = this.scope = null;
  this.withConsoleApi = !1;
  this.showUnsupportedRulesWarning = !0;
  for (var b in this) {
    this.hasOwnProperty(b) && b in a && (this[b] = a[b]);
  }
  goog.exportProperty(this, "scope", this.scope);
  goog.exportProperty(this, "auditRulesToRun", this.auditRulesToRun);
  goog.exportProperty(this, "auditRulesToIgnore", this.auditRulesToIgnore);
  goog.exportProperty(this, "withConsoleApi", this.withConsoleApi);
  goog.exportProperty(this, "showUnsupportedRulesWarning", this.showUnsupportedRulesWarning);
};
goog.exportSymbol("axs.AuditConfiguration", axs.AuditConfiguration);
axs.AuditConfiguration.prototype = {ignoreSelectors:function(a, b) {
  a in this.rules_ || (this.rules_[a] = {});
  "ignore" in this.rules_[a] || (this.rules_[a].ignore = []);
  Array.prototype.push.call(this.rules_[a].ignore, b);
}, getIgnoreSelectors:function(a) {
  return a in this.rules_ && "ignore" in this.rules_[a] ? this.rules_[a].ignore : [];
}, setSeverity:function(a, b) {
  a in this.rules_ || (this.rules_[a] = {});
  this.rules_[a].severity = b;
}, getSeverity:function(a) {
  return a in this.rules_ && "severity" in this.rules_[a] ? this.rules_[a].severity : null;
}, setRuleConfig:function(a, b) {
  a in this.rules_ || (this.rules_[a] = {});
  this.rules_[a].config = b;
}, getRuleConfig:function(a) {
  return a in this.rules_ && "config" in this.rules_[a] ? this.rules_[a].config : null;
}};
goog.exportProperty(axs.AuditConfiguration.prototype, "ignoreSelectors", axs.AuditConfiguration.prototype.ignoreSelectors);
goog.exportProperty(axs.AuditConfiguration.prototype, "getIgnoreSelectors", axs.AuditConfiguration.prototype.getIgnoreSelectors);
axs.Audit.unsupportedRulesWarningShown = !1;
axs.Audit.getRulesCannotRun = function(a) {
  return a.withConsoleApi ? [] : axs.AuditRules.getRules().filter(function(a) {
    return a.requiresConsoleAPI;
  }).map(function(a) {
    return a.code;
  });
};
axs.Audit.run = function(a) {
  a = a || new axs.AuditConfiguration;
  var b = a.withConsoleApi, c = [], d;
  d = a.auditRulesToRun && 0 < a.auditRulesToRun.length ? a.auditRulesToRun : axs.AuditRules.getRules(!0);
  if (a.auditRulesToIgnore) {
    for (var e = 0;e < a.auditRulesToIgnore.length;e++) {
      var f = a.auditRulesToIgnore[e];
      0 > d.indexOf(f) || d.splice(d.indexOf(f), 1);
    }
  }
  !axs.Audit.unsupportedRulesWarningShown && a.showUnsupportedRulesWarning && (e = axs.Audit.getRulesCannotRun(a), 0 < e.length && (console.warn("Some rules cannot be checked using the axs.Audit.run() method call. Use the Chrome plugin to check these rules: " + e.join(", ")), console.warn("To remove this message, pass an AuditConfiguration object to axs.Audit.run() and set configuration.showUnsupportedRulesWarning = false.")), axs.Audit.unsupportedRulesWarningShown = !0);
  for (e = 0;e < d.length;e++) {
    var f = d[e], g = axs.AuditRules.getRule(f);
    if (g && !g.disabled && (b || !g.requiresConsoleAPI)) {
      var h = {}, k = a.getIgnoreSelectors(g.name);
      if (0 < k.length || a.scope) {
        h.ignoreSelectors = k;
      }
      k = a.getRuleConfig(g.name);
      null != k && (h.config = k);
      a.scope && (h.scope = a.scope);
      a.maxResults && (h.maxResults = a.maxResults);
      h = g.run.call(g, h);
      g = axs.utils.namedValues(g);
      g.severity = a.getSeverity(f) || g.severity;
      h.rule = g;
      c.push(h);
    }
  }
  return c;
};
goog.exportSymbol("axs.Audit.run", axs.Audit.run);
axs.Audit.auditResults = function(a) {
  for (var b = new axs.AuditResults, c = 0;c < a.length;c++) {
    var d = a[c];
    d.result == axs.constants.AuditResult.FAIL && (d.rule.severity == axs.constants.Severity.SEVERE ? b.addError(axs.Audit.accessibilityErrorMessage(d)) : b.addWarning(axs.Audit.accessibilityErrorMessage(d)));
  }
  return b;
};
goog.exportSymbol("axs.Audit.auditResults", axs.Audit.auditResults);
axs.Audit.createReport = function(a, b) {
  var c;
  c = "*** Begin accessibility audit results ***\\nAn accessibility audit found " + axs.Audit.auditResults(a).toString();
  b && (c += "\\nFor more information, please see ", c += b);
  return c += "\\n*** End accessibility audit results ***";
};
goog.exportSymbol("axs.Audit.createReport", axs.Audit.createReport);
axs.Audit.accessibilityErrorMessage = function(a) {
  for (var b = a.rule.severity == axs.constants.Severity.SEVERE ? "Error: " : "Warning: ", b = b + (a.rule.code + " (" + a.rule.heading + ") failed on the following " + (1 == a.elements.length ? "element" : "elements")), b = 1 == a.elements.length ? b + ":" : b + (" (1 - " + Math.min(5, a.elements.length) + " of " + a.elements.length + "):"), c = Math.min(a.elements.length, 5), d = 0;d < c;d++) {
    var e = a.elements[d], b = b + "\\n";
    try {
      b += axs.utils.getQuerySelectorText(e);
    } catch (f) {
      b += " tagName:" + e.tagName, b += " id:" + e.id;
    }
  }
  "" != a.rule.url && (b += "\\nSee " + a.rule.url + " for more information.");
  return b;
};
goog.exportSymbol("axs.Audit.accessibilityErrorMessage", axs.Audit.accessibilityErrorMessage);
axs.AuditRules.addRule({name:"ariaOnReservedElement", heading:"This element does not support ARIA roles, states and properties", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_12", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  return !axs.properties.canTakeAriaAttributes(a);
}, test:function(a) {
  return null !== axs.properties.getAriaProperties(a);
}, code:"AX_ARIA_12"});
axs.AuditRules.addRule({name:"ariaOwnsDescendant", heading:"aria-owns should not be used if ownership is implicit in the DOM", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_06", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  return axs.browserUtils.matchSelector(a, "[aria-owns]");
}, test:function(a) {
  return axs.utils.getIdReferents("aria-owns", a).some(function(b) {
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_CONTAINED_BY;
  });
}, code:"AX_ARIA_06"});
axs.AuditRules.addRule({name:"ariaRoleNotScoped", heading:"Elements with ARIA roles must be in the correct scope", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_09", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {
  return axs.browserUtils.matchSelector(a, "[role]");
}, test:function(a) {
  var b = axs.utils.getRoles(a);
  if (!b || !b.applied) {
    return !1;
  }
  b = b.applied.details.scope;
  if (!b || 0 === b.length) {
    return !1;
  }
  for (var c = a;c = c.parentNode;) {
    var d = axs.utils.getRoles(c, !0);
    if (d && d.applied && 0 <= b.indexOf(d.applied.name)) {
      return !1;
    }
  }
  if (a = axs.utils.getIdReferrers("aria-owns", a)) {
    for (c = 0;c < a.length;c++) {
      if ((d = axs.utils.getRoles(a[c], !0)) && d.applied && 0 <= b.indexOf(d.applied.name)) {
        return !1;
      }
    }
  }
  return !0;
}, code:"AX_ARIA_09"});
axs.AuditRules.addRule({name:"audioWithoutControls", heading:"Audio elements should have controls", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_audio_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  return axs.browserUtils.matchSelector(a, "audio[autoplay]");
}, test:function(a) {
  return !a.querySelectorAll("[controls]").length && 3 < a.duration;
}, code:"AX_AUDIO_01"});
(function() {
  var a = /^aria\\-/;
  axs.AuditRules.addRule({name:"badAriaAttribute", heading:"This element has an invalid ARIA attribute", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_11", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(b) {
    b = b.attributes;
    for (var c = 0, d = b.length;c < d;c++) {
      if (a.test(b[c].name)) {
        return !0;
      }
    }
    return !1;
  }, test:function(b) {
    b = b.attributes;
    for (var c = 0, d = b.length;c < d;c++) {
      var e = b[c].name;
      if (a.test(e) && (e = e.replace(a, ""), !axs.constants.ARIA_PROPERTIES.hasOwnProperty(e))) {
        return !0;
      }
    }
    return !1;
  }, code:"AX_ARIA_11"});
})();
axs.AuditRules.addRule({name:"badAriaAttributeValue", heading:"ARIA state and property values must be valid", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_04", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {
  var b = axs.utils.getSelectorForAriaProperties(axs.constants.ARIA_PROPERTIES);
  return axs.browserUtils.matchSelector(a, b);
}, test:function(a) {
  for (var b in axs.constants.ARIA_PROPERTIES) {
    var c = "aria-" + b;
    if (a.hasAttribute(c)) {
      var d = a.getAttribute(c);
      if (!axs.utils.getAriaPropertyValue(c, d, a).valid) {
        return !0;
      }
    }
  }
  return !1;
}, code:"AX_ARIA_04"});
axs.AuditRules.addRule({name:"badAriaRole", heading:"Elements with ARIA roles must use a valid, non-abstract ARIA role", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_01", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {
  return axs.browserUtils.matchSelector(a, "[role]");
}, test:function(a) {
  return !axs.utils.getRoles(a).valid;
}, code:"AX_ARIA_01"});
axs.AuditRules.addRule({name:"controlsWithoutLabel", heading:"Controls and media elements should have labels", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_01", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {
  if (!axs.browserUtils.matchSelector(a, 'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), video:not([disabled])') || "presentation" == a.getAttribute("role")) {
    return !1;
  }
  if (0 <= a.tabIndex) {
    return !0;
  }
  for (a = axs.utils.parentElement(a);null != a;a = axs.utils.parentElement(a)) {
    if (axs.utils.elementIsAriaWidget(a)) {
      return !1;
    }
  }
  return !0;
}, test:function(a) {
  if (axs.utils.isElementOrAncestorHidden(a) || "input" == a.tagName.toLowerCase() && "button" == a.type && a.value.length || "button" == a.tagName.toLowerCase() && a.textContent.replace(/^\\s+|\\s+$/g, "").length || axs.utils.hasLabel(a)) {
    return !1;
  }
  a = axs.properties.findTextAlternatives(a, {});
  return null === a || "" === a.trim() ? !0 : !1;
}, code:"AX_TEXT_01", ruleName:"Controls and media elements should have labels"});
axs.AuditRules.addRule({name:"duplicateId", heading:"An element's ID must be unique in the DOM", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_html_02", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {
  return axs.browserUtils.matchSelector(a, "[id]");
}, test:function(a) {
  var b = a.id;
  if (!b) {
    return !1;
  }
  b = "[id='" + b.replace(/'/g, "\\\\'") + "']";
  return 1 < a.ownerDocument.querySelectorAll(b).length;
}, code:"AX_HTML_02"});
axs.AuditRules.addRule({name:"focusableElementNotVisibleAndNotAriaHidden", heading:"These elements are focusable but either invisible or obscured by another element", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  if (!axs.browserUtils.matchSelector(a, axs.utils.FOCUSABLE_ELEMENTS_SELECTOR)) {
    return !1;
  }
  if (0 <= a.tabIndex) {
    return !0;
  }
  for (var b = axs.utils.parentElement(a);null != b;b = axs.utils.parentElement(b)) {
    if (axs.utils.elementIsAriaWidget(b)) {
      return !1;
    }
  }
  a = axs.properties.findTextAlternatives(a, {});
  return null === a || "" === a.trim() ? !1 : !0;
}, test:function(a) {
  if (axs.utils.isElementOrAncestorHidden(a)) {
    return !1;
  }
  a.focus();
  return !axs.utils.elementIsVisible(a);
}, code:"AX_FOCUS_01"});
axs.AuditRules.addRule({name:"humanLangMissing", heading:"The web page should have the content's human language indicated in the markup", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_html_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  return a instanceof a.ownerDocument.defaultView.HTMLHtmlElement;
}, test:function(a) {
  return a.lang ? !1 : !0;
}, code:"AX_HTML_01"});
axs.AuditRules.addRule({name:"imagesWithoutAltText", heading:"Images should have a text alternative or presentational role", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_02", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  return axs.browserUtils.matchSelector(a, "img") && !axs.utils.isElementOrAncestorHidden(a);
}, test:function(a) {
  if (a.hasAttribute("alt") && "" == a.alt || "presentation" == a.getAttribute("role")) {
    return !1;
  }
  var b = {};
  axs.properties.findTextAlternatives(a, b);
  return 0 == Object.keys(b).length ? !0 : !1;
}, code:"AX_TEXT_02"});
axs.AuditRules.addRule({name:"linkWithUnclearPurpose", heading:"The purpose of each link should be clear from the link text", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_04", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  return axs.browserUtils.matchSelector(a, "a") && !axs.utils.isElementOrAncestorHidden(a);
}, test:function(a, b) {
  for (var c = b || {}, d = c.blacklistPhrases || [], e = /\\s+/, f = 0;f < d.length;f++) {
    var g = "^\\\\s*" + d[f].trim().replace(e, "\\\\s*") + "s*[^a-z]$";
    if ((new RegExp(g, "i")).test(a.textContent)) {
      return !0;
    }
  }
  c = c.stopwords || "click tap go here learn more this page link about".split(" ");
  d = axs.properties.findTextAlternatives(a, {});
  if (null === d || "" === d.trim()) {
    return !0;
  }
  d = d.replace(/[^a-zA-Z ]/g, "");
  for (f = 0;f < c.length;f++) {
    if (d = d.replace(new RegExp("\\\\b" + c[f] + "\\\\b", "ig"), ""), "" == d.trim()) {
      return !0;
    }
  }
  return !1;
}, code:"AX_TEXT_04"});
axs.AuditRules.addRule({name:"lowContrastElements", heading:"Text elements should have a reasonable contrast ratio", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_color_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  return axs.properties.hasDirectTextDescendant(a) && !axs.utils.isElementDisabled(a);
}, test:function(a) {
  var b = window.getComputedStyle(a, null);
  return (a = axs.utils.getContrastRatioForElementWithComputedStyle(b, a)) && axs.utils.isLowContrast(a, b);
}, code:"AX_COLOR_01"});
axs.AuditRules.addRule({name:"mainRoleOnInappropriateElement", heading:"role=main should only appear on significant elements", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_05", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  return axs.browserUtils.matchSelector(a, "[role~=main]");
}, test:function(a) {
  if (axs.utils.isInlineElement(a)) {
    return !0;
  }
  a = axs.properties.getTextFromDescendantContent(a);
  return !a || 50 > a.length ? !0 : !1;
}, code:"AX_ARIA_05"});
axs.AuditRules.addRule({name:"elementsWithMeaningfulBackgroundImage", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  return !axs.utils.isElementOrAncestorHidden(a);
}, heading:"Meaningful images should not be used in element backgrounds", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_image_01", test:function(a) {
  if (a.textContent && 0 < a.textContent.length) {
    return !1;
  }
  a = window.getComputedStyle(a, null);
  var b = a.backgroundImage;
  if (!b || "undefined" === b || "none" === b || 0 != b.indexOf("url")) {
    return !1;
  }
  b = parseInt(a.width, 10);
  a = parseInt(a.height, 10);
  return 150 > b && 150 > a;
}, code:"AX_IMAGE_01"});
axs.AuditRules.addRule({name:"multipleAriaOwners", heading:"An element's ID must not be present in more that one aria-owns attribute at any time", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_07", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  return axs.browserUtils.matchSelector(a, "[aria-owns]");
}, test:function(a) {
  return axs.utils.getIdReferents("aria-owns", a).some(function(a) {
    return 1 < axs.utils.getIdReferrers("aria-owns", a).length;
  });
}, code:"AX_ARIA_07"});
axs.AuditRules.addRule({name:"multipleLabelableElementsPerLabel", heading:"A label element may not have labelable descendants other than its labeled control.", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#-ax_text_03--labels-should-only-contain-one-labelable-element", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {
  return axs.browserUtils.matchSelector(a, "label");
}, test:function(a) {
  if (1 < a.querySelectorAll(axs.utils.LABELABLE_ELEMENTS_SELECTOR).length) {
    return !0;
  }
}, code:"AX_TEXT_03"});
axs.AuditRules.addRule({name:"nonExistentAriaRelatedElement", heading:"ARIA attributes which refer to other elements by ID should refer to elements which exist in the DOM", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_02", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {
  var b = axs.utils.getAriaPropertiesByValueType(["idref", "idref_list"]), b = axs.utils.getSelectorForAriaProperties(b);
  return axs.browserUtils.matchSelector(a, b);
}, test:function(a) {
  for (var b = axs.utils.getAriaPropertiesByValueType(["idref", "idref_list"]), b = axs.utils.getSelectorForAriaProperties(b).split(","), c = 0, d = b.length;c < d;c++) {
    var e = b[c];
    if (axs.browserUtils.matchSelector(a, e)) {
      var e = e.match(/aria-[^\\]]+/)[0], f = a.getAttribute(e);
      if (!axs.utils.getAriaPropertyValue(e, f, a).valid) {
        return !0;
      }
    }
  }
  return !1;
}, code:"AX_ARIA_02"});
axs.AuditRules.addRule({name:"pageWithoutTitle", heading:"The web page should have a title that describes topic or purpose", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_title_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  return "html" == a.tagName.toLowerCase();
}, test:function(a) {
  a = a.querySelector("head");
  return a ? (a = a.querySelector("title")) ? !a.textContent : !0 : !0;
}, code:"AX_TITLE_01"});
axs.AuditRules.addRule({name:"requiredAriaAttributeMissing", heading:"Elements with ARIA roles must have all required attributes for that role", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_03", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {
  return axs.browserUtils.matchSelector(a, "[role]");
}, test:function(a) {
  var b = axs.utils.getRoles(a);
  if (!b.valid) {
    return !1;
  }
  for (var c = 0;c < b.roles.length;c++) {
    var d = b.roles[c].details.requiredPropertiesSet, e;
    for (e in d) {
      if (d = e.replace(/^aria-/, ""), !("defaultValue" in axs.constants.ARIA_PROPERTIES[d] || a.hasAttribute(e)) && 0 > axs.properties.getNativelySupportedAttributes(a).indexOf(e)) {
        return !0;
      }
    }
  }
}, code:"AX_ARIA_03"});
(function() {
  function a(a) {
    a = axs.utils.getRoles(a);
    if (!a || !a.applied) {
      return [];
    }
    a = a.applied;
    return a.valid ? a.details.mustcontain || [] : [];
  }
  axs.AuditRules.addRule({name:"requiredOwnedAriaRoleMissing", heading:"Elements with ARIA roles must ensure required owned elements are present", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_08", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(b) {
    return axs.browserUtils.matchSelector(b, "[role]") ? 0 < a(b).length : !1;
  }, test:function(b) {
    if ("true" === b.getAttribute("aria-busy")) {
      return !1;
    }
    for (var c = a(b), d = c.length - 1;0 <= d;d--) {
      var e = axs.utils.findDescendantsWithRole(b, c[d]);
      if (e && e.length) {
        return !1;
      }
    }
    b = axs.utils.getIdReferents("aria-owns", b);
    for (d = b.length - 1;0 <= d;d--) {
      if ((e = axs.utils.getRoles(b[d], !0)) && e.applied) {
        for (var e = e.applied, f = c.length - 1;0 <= f;f--) {
          if (e.name === c[f]) {
            return !1;
          }
        }
      }
    }
    return !0;
  }, code:"AX_ARIA_08"});
})();
axs.AuditRules.addRule({name:"tabIndexGreaterThanZero", heading:"Avoid positive integer values for tabIndex", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_03", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  return axs.browserUtils.matchSelector(a, "[tabindex]");
}, test:function(a) {
  if (0 < a.tabIndex) {
    return !0;
  }
}, code:"AX_FOCUS_03"});
axs.AuditRules.addRule({name:"unfocusableElementsWithOnClick", heading:"Elements with onclick handlers must be focusable", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_02", severity:axs.constants.Severity.WARNING, opt_requiresConsoleAPI:!0, relevantElementMatcher:function(a) {
  return a instanceof a.ownerDocument.defaultView.HTMLBodyElement || axs.utils.isElementOrAncestorHidden(a) ? !1 : "click" in getEventListeners(a) ? !0 : !1;
}, test:function(a) {
  return !a.hasAttribute("tabindex") && !axs.utils.isElementImplicitlyFocusable(a) && !a.disabled;
}, code:"AX_FOCUS_02"});
(function() {
  var a = /^aria\\-/, b = axs.utils.getSelectorForAriaProperties(axs.constants.ARIA_PROPERTIES);
  axs.AuditRules.addRule({name:"unsupportedAriaAttribute", heading:"This element has an unsupported ARIA attribute", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_10", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {
    return axs.browserUtils.matchSelector(a, b);
  }, test:function(b) {
    var d = axs.utils.getRoles(b, !0), d = d && d.applied ? d.applied.details.propertiesSet : axs.constants.GLOBAL_PROPERTIES;
    b = b.attributes;
    for (var e = 0, f = b.length;e < f;e++) {
      var g = b[e].name;
      if (a.test(g)) {
        var h = g.replace(a, "");
        if (axs.constants.ARIA_PROPERTIES.hasOwnProperty(h) && !(g in d)) {
          return !0;
        }
      }
    }
    return !1;
  }, code:"AX_ARIA_10"});
})();
axs.AuditRules.addRule({name:"videoWithoutCaptions", heading:"Video elements should use <track> elements to provide captions", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_video_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {
  return axs.browserUtils.matchSelector(a, "video");
}, test:function(a) {
  return !a.querySelectorAll("track[kind=captions]").length;
}, code:"AX_VIDEO_01"});

  return axs;
});

// Define AMD module if possible, export globals otherwise.
if (typeof define !== 'undefined' && define.amd) {
  define([], fn);
} else {
  var axs = fn.call(this);
}

`},function(q,P){q.exports=function(x){typeof execScript=="function"?execScript(x):eval.call(null,x)}},function(q,P,x){x(41)(x(40))},function(q,P,x){var v=x(22);typeof v=="string"&&(v=[[q.id,v,""]]),x(7)(v,{})},function(q,P,x){var v=x(23);typeof v=="string"&&(v=[[q.id,v,""]]),x(7)(v,{})},function(q,P,x){var v=x(24);typeof v=="string"&&(v=[[q.id,v,""]]),x(7)(v,{})},function(q,P,x){var v=x(25);typeof v=="string"&&(v=[[q.id,v,""]]),x(7)(v,{})},function(q,P,x){var v=x(26);typeof v=="string"&&(v=[[q.id,v,""]]),x(7)(v,{})},function(q,P,x){var v=x(27);typeof v=="string"&&(v=[[q.id,v,""]]),x(7)(v,{})},function(q,P,x){var v=x(28);typeof v=="string"&&(v=[[q.id,v,""]]),x(7)(v,{})}]);
