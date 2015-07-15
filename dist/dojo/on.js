//>>built
define("dojo/on",["./has!dom-addeventlistener?:./aspect","./_base/kernel","./sniff"],function(w,x,e){function y(a,b,c,d,g){if(d=b.match(/(.*):(.*)/))return b=d[2],d=d[1],f.selector(d,b).call(g,a,c);e("touch")&&(z.test(b)&&(c=n(c)),!e("event-orientationchange")&&"orientationchange"==b&&(b="resize",a=window,c=n(c)));p&&(c=p(c));if(a.addEventListener){var k=b in q,m=k?q[b]:b;a.addEventListener(m,c,k);return{remove:function(){a.removeEventListener(m,c,k)}}}if(r&&a.attachEvent)return r(a,"on"+b,c);throw Error("Target must be an event emitter");
}function A(){this.cancelable=!1;this.defaultPrevented=!0}function B(){this.bubbles=!1}var s=window.ScriptEngineMajorVersion;e.add("jscript",s&&s()+ScriptEngineMinorVersion()/10);e.add("event-orientationchange",e("touch")&&!e("android"));e.add("event-stopimmediatepropagation",window.Event&&!!window.Event.prototype&&!!window.Event.prototype.stopImmediatePropagation);e.add("event-focusin",function(a,b,c){return"onfocusin"in c});e("touch")&&e.add("touch-can-modify-event-delegate",function(){var a=function(){};
a.prototype=document.createEvent("MouseEvents");try{var b=new a;b.target=null;return null===b.target}catch(c){return!1}});var f=function(a,b,c,d){return"function"==typeof a.on&&"function"!=typeof b&&!a.nodeType?a.on(b,c):f.parse(a,b,c,y,d,this)};f.pausable=function(a,b,c,d){var g;a=f(a,b,function(){if(!g)return c.apply(this,arguments)},d);a.pause=function(){g=!0};a.resume=function(){g=!1};return a};f.once=function(a,b,c,d){var g=f(a,b,function(){g.remove();return c.apply(this,arguments)});return g};
f.parse=function(a,b,c,d,g,k){if(b.call)return b.call(k,a,c);if(b instanceof Array)e=b;else if(-1<b.indexOf(","))var e=b.split(/\s*,\s*/);if(e){var l=[];b=0;for(var h;h=e[b++];)l.push(f.parse(a,h,c,d,g,k));l.remove=function(){for(var a=0;a<l.length;a++)l[a].remove()};return l}return d(a,b,c,g,k)};var z=/^touch/;f.matches=function(a,b,c,d,g){g=g&&g.matches?g:x.query;d=!1!==d;1!=a.nodeType&&(a=a.parentNode);for(;!g.matches(a,b,c);)if(a==c||!1===d||!(a=a.parentNode)||1!=a.nodeType)return!1;return a};
f.selector=function(a,b,c){return function(d,g){function e(b){return f.matches(b,a,d,c,m)}var m="function"==typeof a?{matches:a}:this,h=b.bubble;return h?f(d,h(e),g):f(d,b,function(a){var b=e(a.target);if(b)return g.call(b,a)})}};var C=[].slice,D=f.emit=function(a,b,c){var d=C.call(arguments,2),g="on"+b;if("parentNode"in a){var e=d[0]={},f;for(f in c)e[f]=c[f];e.preventDefault=A;e.stopPropagation=B;e.target=a;e.type=b;c=e}do a[g]&&a[g].apply(a,d);while(c&&c.bubbles&&(a=a.parentNode));return c&&c.cancelable&&
c},q=e("event-focusin")?{}:{focusin:"focus",focusout:"blur"};if(!e("event-stopimmediatepropagation"))var E=function(){this.modified=this.immediatelyStopped=!0},p=function(a){return function(b){if(!b.immediatelyStopped)return b.stopImmediatePropagation=E,a.apply(this,arguments)}};if(e("dom-addeventlistener"))f.emit=function(a,b,c){if(a.dispatchEvent&&document.createEvent){var d=(a.ownerDocument||document).createEvent("HTMLEvents");d.initEvent(b,!!c.bubbles,!!c.cancelable);for(var e in c)e in d||(d[e]=
c[e]);return a.dispatchEvent(d)&&d}return D.apply(f,arguments)};else{f._fixEvent=function(a,b){a||(a=(b&&(b.ownerDocument||b.document||b).parentWindow||window).event);if(!a)return a;try{h&&(a.type==h.type&&a.srcElement==h.target)&&(a=h)}catch(c){}if(!a.target)switch(a.target=a.srcElement,a.currentTarget=b||a.srcElement,"mouseover"==a.type&&(a.relatedTarget=a.fromElement),"mouseout"==a.type&&(a.relatedTarget=a.toElement),a.stopPropagation||(a.stopPropagation=F,a.preventDefault=G),a.type){case "keypress":var d=
"charCode"in a?a.charCode:a.keyCode;10==d?(d=0,a.keyCode=13):13==d||27==d?d=0:3==d&&(d=99);a.charCode=d;d=a;d.keyChar=d.charCode?String.fromCharCode(d.charCode):"";d.charOrCode=d.keyChar||d.keyCode}return a};var h,t=function(a){this.handle=a};t.prototype.remove=function(){delete _dojoIEListeners_[this.handle]};var H=function(a){return function(b){b=f._fixEvent(b,this);var c=a.call(this,b);b.modified&&(h||setTimeout(function(){h=null}),h=b);return c}},r=function(a,b,c){c=H(c);if(((a.ownerDocument?
a.ownerDocument.parentWindow:a.parentWindow||a.window||window)!=top||5.8>e("jscript"))&&!e("config-_allow_leaks")){"undefined"==typeof _dojoIEListeners_&&(_dojoIEListeners_=[]);var d=a[b];if(!d||!d.listeners){var g=d,d=Function("event","var callee \x3d arguments.callee; for(var i \x3d 0; i\x3ccallee.listeners.length; i++){var listener \x3d _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");d.listeners=[];a[b]=d;d.global=this;g&&d.listeners.push(_dojoIEListeners_.push(g)-
1)}d.listeners.push(a=d.global._dojoIEListeners_.push(c)-1);return new t(a)}return w.after(a,b,c,!0)},F=function(){this.cancelBubble=!0},G=f._preventDefault=function(){this.bubbledKeyCode=this.keyCode;if(this.ctrlKey)try{this.keyCode=0}catch(a){}this.defaultPrevented=!0;this.returnValue=!1;this.modified=!0}}if(e("touch"))var u=function(){},v=window.orientation,n=function(a){return function(b){var c=b.corrected;if(!c){var d=b.type;try{delete b.type}catch(g){}if(b.type){if(e("touch-can-modify-event-delegate"))u.prototype=
b,c=new u;else{var c={},f;for(f in b)c[f]=b[f]}c.preventDefault=function(){b.preventDefault()};c.stopPropagation=function(){b.stopPropagation()}}else c=b,c.type=d;b.corrected=c;if("resize"==d){if(v==window.orientation)return null;v=window.orientation;c.type="orientationchange";return a.call(this,c)}"rotation"in c||(c.rotation=0,c.scale=1);var d=c.changedTouches[0],h;for(h in d)delete c[h],c[h]=d[h]}return a.call(this,c)}};return f});
//# sourceMappingURL=on.js.map