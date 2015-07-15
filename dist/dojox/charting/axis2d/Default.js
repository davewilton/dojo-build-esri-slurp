//>>built
define("dojox/charting/axis2d/Default","dojo/_base/lang dojo/_base/array dojo/sniff dojo/_base/declare dojo/_base/connect dojo/dom-geometry ./Invisible ../scaler/linear ./common dojox/gfx dojox/lang/utils dojox/lang/functional dojo/has!dojo-bidi?../bidi/axis2d/Default".split(" "),function(B,O,R,S,T,$,K,U,W,y,V,P,aa){K=S(R("dojo-bidi")?"dojox.charting.axis2d.NonBidiDefault":"dojox.charting.axis2d.Default",K,{defaultParams:{vertical:!1,fixUpper:"none",fixLower:"none",natural:!1,leftBottom:!0,includeZero:!1,
fixed:!0,majorLabels:!0,minorTicks:!0,minorLabels:!0,microTicks:!1,rotation:0,htmlLabels:!0,enableCache:!1,dropLabels:!0,labelSizeChange:!1,position:"leftOrBottom"},optionalParams:{min:0,max:1,from:0,to:1,majorTickStep:4,minorTickStep:2,microTickStep:1,labels:[],labelFunc:null,maxLabelSize:0,maxLabelCharCount:0,trailingSymbol:null,stroke:{},majorTick:{},minorTick:{},microTick:{},tick:{},font:"",fontColor:"",title:"",titleGap:0,titleFont:"",titleFontColor:"",titleOrientation:""},constructor:function(a,
c){this.opt=B.clone(this.defaultParams);V.updateWithObject(this.opt,c);V.updateWithPattern(this.opt,c,this.optionalParams);this.opt.enableCache&&(this._textFreePool=[],this._lineFreePool=[],this._textUsePool=[],this._lineUsePool=[]);this._invalidMaxLabelSize=!0;c&&"position"in c||(this.opt.position=this.opt.leftBottom?"leftOrBottom":"rightOrTop");this.renderingOptions={"shape-rendering":"crispEdges"}},setWindow:function(a,c){a!=this.scale&&(this._invalidMaxLabelSize=!0);return this.inherited(arguments)},
_groupLabelWidth:function(a,c,g){if(!a.length)return 0;50<a.length&&(a.length=50);B.isObject(a[0])&&(a=P.map(a,function(a){return a.text}));g&&(a=P.map(a,function(a){return 0==B.trim(a).length?"":a.substring(0,g)+this.trailingSymbol},this));a=a.join("\x3cbr\x3e");return y._base._getTextBox(a,{font:c}).w||0},_getMaxLabelSize:function(a,c,g,h,f,k){if(null==this._maxLabelSize&&6==arguments.length){var l=this.opt;this.scaler.minMinorStep=this._prevMinMinorStep=0;var b=B.clone(l);delete b.to;delete b.from;
var p=U.buildScaler(a,c,g,b,l.to-l.from);p.minMinorStep=0;this._majorStart=p.major.start;l=U.buildTicks(p,l);if(k&&l){var r=p=0,d=function(a){a.label&&this.push(a.label)},e=[];this.opt.majorLabels&&(O.forEach(l.major,d,e),p=this._groupLabelWidth(e,f,b.maxLabelCharCount),b.maxLabelSize&&(p=Math.min(b.maxLabelSize,p)));e=[];this.opt.dropLabels&&this.opt.minorLabels&&(O.forEach(l.minor,d,e),r=this._groupLabelWidth(e,f,b.maxLabelCharCount),b.maxLabelSize&&(r=Math.min(b.maxLabelSize,r)));this._maxLabelSize=
{majLabelW:p,minLabelW:r,majLabelH:k,minLabelH:k}}else this._maxLabelSize=null}return this._maxLabelSize},calculate:function(a,c,g){this.inherited(arguments);this.scaler.minMinorStep=this._prevMinMinorStep;if((this._invalidMaxLabelSize||g!=this._oldSpan)&&Infinity!=a&&-Infinity!=c){this._invalidMaxLabelSize=!1;this.opt.labelSizeChange&&(this._maxLabelSize=null);this._oldSpan=g;var h=this.opt,f=this.chart.theme.axis,k=h.rotation%360,l=this.chart.theme.axis.tick.labelGap,b=h.font||f.majorTick&&f.majorTick.font||
f.tick&&f.tick.font,f=b?y.normalizedLength(y.splitFontString(b).size):0,b=this._getMaxLabelSize(a,c,g,k,b,f);"number"!=typeof l&&(l=4);if(b&&h.dropLabels){var h=Math.abs(Math.cos(k*Math.PI/180)),p=Math.abs(Math.sin(k*Math.PI/180));0>k&&(k+=360);switch(k){case 0:case 180:this.vertical?k=f:(k=b.majLabelW,f=b.minLabelW);break;case 90:case 270:this.vertical?(k=b.majLabelW,f=b.minLabelW):k=f;break;default:var k=this.vertical?Math.min(b.majLabelW,f/h):Math.min(b.majLabelW,f/p),r=Math.sqrt(b.minLabelW*b.minLabelW+
f*f),f=Math.min(r,this.vertical?f*h+b.minLabelW*p:b.minLabelW*h+f*p)}this.scaler.minMinorStep=this._prevMinMinorStep=Math.max(k,f)+l;this._skipInterval=this.scaler.minMinorStep<=this.scaler.minor.tick*this.scaler.bounds.scale?0:Math.floor((k+l)/(this.scaler.major.tick*this.scaler.bounds.scale))}else this._skipInterval=0}this.ticks=U.buildTicks(this.scaler,this.opt);return this},getOffsets:function(){var a={l:0,r:0,t:0,b:0};if(!this.scaler)return a;var c=this.opt,g=this.chart.theme.axis,h=this.chart.theme.axis.tick.labelGap,
f=c.titleFont||g.title&&g.title.font,g=0==c.titleGap?0:c.titleGap||g.title&&g.title.gap,k=this.chart.theme.getTick("major",c),l=this.chart.theme.getTick("minor",c),f=f?y.normalizedLength(y.splitFontString(f).size):0,b=c.rotation%360,p=c.position,r="rightOrTop"!==p,d=Math.abs(Math.cos(b*Math.PI/180)),e=Math.abs(Math.sin(b*Math.PI/180));this.trailingSymbol=void 0===c.trailingSymbol||null===c.trailingSymbol?this.trailingSymbol:c.trailingSymbol;"number"!=typeof h&&(h=4);0>b&&(b+=360);var s=this._getMaxLabelSize();
if(s){var q=Math.ceil(Math.max(s.majLabelW,s.minLabelW))+1,m=Math.ceil(Math.max(s.majLabelH,s.minLabelH))+1;if(this.vertical)switch(s=r?"l":"r",b){case 0:case 180:a[s]="center"===p?0:q;a.t=a.b=m/2;break;case 90:case 270:a[s]=m;a.t=a.b=q/2;break;default:45>=b||180<b&&225>=b?(a[s]=m*e/2+q*d,a[r?"t":"b"]=m*d/2+q*e,a[r?"b":"t"]=m*d/2):315<b||180>b&&135<b?(a[s]=m*e/2+q*d,a[r?"b":"t"]=m*d/2+q*e,a[r?"t":"b"]=m*d/2):90>b||180<b&&270>b?(a[s]=m*e+q*d,a[r?"t":"b"]=m*d+q*e):(a[s]=m*e+q*d,a[r?"b":"t"]=m*d+q*e)}else switch(s=
r?"b":"t",b){case 0:case 180:a[s]="center"===p?0:m;a.l=a.r=q/2;break;case 90:case 270:a[s]=q;a.l=a.r=m/2;break;default:45<=b&&90>=b||225<=b&&270>=b?(a[s]=m*d/2+q*e,a[r?"r":"l"]=m*e/2+q*d,a[r?"l":"r"]=m*e/2):90<=b&&135>=b||270<=b&&315>=b?(a[s]=m*d/2+q*e,a[r?"l":"r"]=m*e/2+q*d,a[r?"r":"l"]=m*e/2):45>b||180<b&&225>b?(a[s]=m*d+q*e,a[r?"r":"l"]=m*e+q*d):(a[s]=m*d+q*e,a[r?"l":"r"]=m*e+q*d)}a[s]="center"===p?0:a[s]+(h+Math.max(0<k.length?k.length:0,0<l.length?l.length:0)+(c.title?f+g:0))}return a},cleanGroup:function(a){this.opt.enableCache&&
this.group&&(this._lineFreePool=this._lineFreePool.concat(this._lineUsePool),this._lineUsePool=[],this._textFreePool=this._textFreePool.concat(this._textUsePool),this._textUsePool=[]);this.inherited(arguments)},createText:function(a,c,g,h,f,k,l,b,p){if(!this.opt.enableCache||"html"==a)return W.createText[a](this.chart,c,g,h,f,k,l,b,p);0<this._textFreePool.length?(a=this._textFreePool.pop(),a.setShape({x:g,y:h,text:k,align:f}),c.add(a)):a=W.createText[a](this.chart,c,g,h,f,k,l,b);this._textUsePool.push(a);
return a},createLine:function(a,c){var g;this.opt.enableCache&&0<this._lineFreePool.length?(g=this._lineFreePool.pop(),g.setShape(c),a.add(g)):g=a.createLine(c);this.opt.enableCache&&this._lineUsePool.push(g);return g},render:function(a,c){var g,h,f,k,l,b,p,r,d,e,s,q,m,H,B=this._isRtl();if(!this.dirty||!this.scaler)return this;var u=this.opt;d=this.chart.theme.axis;var I=u.position,x="rightOrTop"!==I,t=u.rotation%360,w=0,E,n,w=this.chart.theme.axis.tick.labelGap,C=u.font||d.majorTick&&d.majorTick.font||
d.tick&&d.tick.font,M=u.titleFont||d.title&&d.title.font,K=u.fontColor||d.majorTick&&d.majorTick.fontColor||d.tick&&d.tick.fontColor||"black",S=u.titleFontColor||d.title&&d.title.fontColor||"black";l=0==u.titleGap?0:u.titleGap||d.title&&d.title.gap||15;var J=u.titleOrientation||d.title&&d.title.orientation||"axis",z=this.chart.theme.getTick("major",u),A=this.chart.theme.getTick("minor",u),X=this.chart.theme.getTick("micro",u),T="stroke"in u?u.stroke:d.stroke,v=C?y.normalizedLength(y.splitFontString(C).size):
0;b=Math.abs(Math.cos(t*Math.PI/180));E=Math.abs(Math.sin(t*Math.PI/180));var N=M?y.normalizedLength(y.splitFontString(M).size):0;"number"!=typeof w&&(w=4);0>t&&(t+=360);var Q=this._getMaxLabelSize(),Q=Q&&Q.majLabelW;if(this.vertical){m=a.height-c.b;H=void 0;s=c.t;q=void 0;d=(a.height-c.b+c.t)/2;e=void 0;E=v*E+(Q||0)*b+w+Math.max(0<z.length?z.length:0,0<A.length?A.length:0)+N+l;p=0;r=-1;h=g=0;l=1;b=0;f=w;k=0;switch(t){case 0:n="end";h=0.4*v;break;case 90:n="middle";g=-v;break;case 180:n="start";h=
0.4*-v;break;case 270:n="middle";break;default:45>t?(n="end",h=0.4*v):90>t?(n="end",h=0.4*v):135>t?n="start":225>t?(n="start",h=0.4*-v):270>t?(n="start",g=x?0:0.4*v):315>t?(n="end",g=x?0:0.4*v):(n="end",h=0.4*v)}if(x)H=q="center"===I?a.width/2:c.l,w=J&&"away"==J?90:270,e=c.l-E+(270==w?N:0),l=-1,f=-f;else switch(H=q=a.width-c.r,w=J&&"axis"==J?90:270,e=a.width-c.r+E-(270==w?0:N),n){case "start":n="end";break;case "end":n="start";break;case "middle":g+=v}}else{H=c.l;m=void 0;q=a.width-c.r;s=void 0;e=
(a.width-c.r+c.l)/2;d=void 0;E=v*b+(Q||0)*E+w+Math.max(0<z.length?z.length:0,0<A.length?A.length:0)+N+l;p=B?-1:1;l=h=g=r=0;b=1;f=0;k=w;switch(t){case 0:n="middle";h=v;break;case 90:n="start";g=0.4*-v;break;case 180:n="middle";break;case 270:n="end";g=0.4*v;break;default:45>t?(n="start",h=x?v:0):135>t?(n="start",g=0.4*-v):180>t?(n="start",h=x?0:-v):225>t?(n="end",h=x?0:-v):315>t?(n="end",h=x?0.4*v:0):(n="end",h=x?v:0)}if(x)m=s="center"===I?a.height/2:a.height-c.b,w=J&&"axis"==J?180:0,d=a.height-c.b+
E-(w?N:0);else switch(m=s=c.t,w=J&&"away"==J?180:0,d=c.t-E+(w?0:N),b=-1,k=-k,n){case "start":n="end";break;case "end":n="start";break;case "middle":h-=v}}this.cleanGroup();var L=this.group,I=this.scaler,x=this.ticks,Y=U.getTransformerFromModel(this.scaler),D=(!u.title||!w)&&!t&&this.opt.htmlLabels&&!R("ie")&&!R("opera")?"html":"gfx",F=l*z.length,G=b*z.length,Z=this._skipInterval;L.createLine({x1:H,y1:m,x2:q,y2:s}).setStroke(T);u.title&&(M=W.createText[D](this.chart,L,e,d,"middle",u.title,M,S),"html"==
D?this.htmlElements.push(M):M.setTransform(y.matrix.rotategAt(w,e,d)));if(null==x)return this.dirty=!1,this;var V=0<x.major.length?(x.major[0].value-this._majorStart)/I.major.tick:0,P=this.opt.majorLabels;O.forEach(x.major,function(a,b){var d=Y(a.value),c=(B?q:H)+p*d,l=m+r*d;b+=V;this.createLine(L,{x1:c,y1:l,x2:c+F,y2:l+G}).setStroke(z);if(a.label&&(!Z||0==(b-(1+Z))%(1+Z))){var e=u.maxLabelCharCount?this.getTextWithLimitCharCount(a.label,C,u.maxLabelCharCount):{text:a.label,truncated:!1},e=u.maxLabelSize?
this.getTextWithLimitLength(e.text,C,u.maxLabelSize,e.truncated):e,d=this.createText(D,L,c+(0<z.length?F:0)+f+(t?0:g),l+(0<z.length?G:0)+k+(t?0:h),n,e.text,C,K);e.truncated&&this.chart.formatTruncatedLabel(d,a.label,D);e.truncated&&this.labelTooltip(d,this.chart,a.label,e.text,C,D);"html"==D?this.htmlElements.push(d):t&&d.setTransform([{dx:g,dy:h},y.matrix.rotategAt(t,c+(0<z.length?F:0)+f,l+(0<z.length?G:0)+k)])}},this);F=l*A.length;G=b*A.length;P=this.opt.minorLabels&&I.minMinorStep<=I.minor.tick*
I.bounds.scale;O.forEach(x.minor,function(a){var b=Y(a.value),d=(B?q:H)+p*b,c=m+r*b;this.createLine(L,{x1:d,y1:c,x2:d+F,y2:c+G}).setStroke(A);if(P&&a.label){var e=u.maxLabelCharCount?this.getTextWithLimitCharCount(a.label,C,u.maxLabelCharCount):{text:a.label,truncated:!1},e=u.maxLabelSize?this.getTextWithLimitLength(e.text,C,u.maxLabelSize,e.truncated):e,b=this.createText(D,L,d+(0<A.length?F:0)+f+(t?0:g),c+(0<A.length?G:0)+k+(t?0:h),n,e.text,C,K);e.truncated&&this.chart.formatTruncatedLabel(b,a.label,
D);e.truncated&&this.labelTooltip(b,this.chart,a.label,e.text,C,D);"html"==D?this.htmlElements.push(b):t&&b.setTransform([{dx:g,dy:h},y.matrix.rotategAt(t,d+(0<A.length?F:0)+f,c+(0<A.length?G:0)+k)])}},this);F=l*X.length;G=b*X.length;O.forEach(x.micro,function(a){var b=Y(a.value);a=H+p*b;b=m+r*b;this.createLine(L,{x1:a,y1:b,x2:a+F,y2:b+G}).setStroke(X)},this);this.dirty=!1;return this},labelTooltip:function(a,c,g,h,f,k){var l=["dijit/Tooltip"],b={type:"rect"},p=["above","below"];h=y._base._getTextBox(h,
{font:f}).w||0;f=f?y.normalizedLength(y.splitFontString(f).size):0;"html"==k?(B.mixin(b,$.position(a.firstChild,!0)),b.width=Math.ceil(h),b.height=Math.ceil(f),this._events.push({shape:dojo,handle:T.connect(a.firstChild,"onmouseover",this,function(a){require(l,function(a){a.show(g,b,p)})})}),this._events.push({shape:dojo,handle:T.connect(a.firstChild,"onmouseout",this,function(a){require(l,function(a){a.hide(b)})})})):(k=a.getShape(),c=c.getCoords(),b=B.mixin(b,{x:k.x-h/2,y:k.y}),b.x+=c.x,b.y+=c.y,
b.x=Math.round(b.x),b.y=Math.round(b.y),b.width=Math.ceil(h),b.height=Math.ceil(f),this._events.push({shape:a,handle:a.connect("onmouseenter",this,function(a){require(l,function(a){a.show(g,b,p)})})}),this._events.push({shape:a,handle:a.connect("onmouseleave",this,function(a){require(l,function(a){a.hide(b)})})}))},_isRtl:function(){return!1}});return R("dojo-bidi")?S("dojox.charting.axis2d.Default",[K,aa]):K});
//# sourceMappingURL=Default.js.map