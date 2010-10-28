/*
 Copyright (c) 2009-2010 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 http://jquery.vostrel.cz/reel
 Version: 1.1 RC
 Updated: 2010-08-14

 Requires jQuery 1.4.x
*/
(function(j,tb,Ta,o){function Ua(k){return"<"+k+"/>"}function $(k){return"."+k}function aa(k){return"url("+k+")"}function y(k){return+k.toFixed(4)}function M(k,a,s){return N(k,ya(a,s))}function Va(k){function a(){j.fn[this]||(j.fn[this]=function(){return this})}j.each(k,a)}function ba(k,a){return z(k)*(a?-1:1)}function O(k){return k.originalEvent.touches[0]}var Wa=j.reel={footage:6,frame:1,frames:36,hint:"",horizontal:true,hotspot:o,indicator:0,klass:"",loops:true,reversed:o,spacing:0,stitched:o,
suffix:"-reel",tooltip:"",brake:0.5,clickfree:false,couple:o,cw:false,delay:-1,dragable:true,graph:o,image:o,images:[],monitor:o,maximum:100,minimum:0,path:"",preloader:4,rebound:0.5,revolution:o,row:1,rows:0,speed:0,step:o,steps:o,tempo:25,timeout:2,throwable:true,value:o,wheelable:true};j.fn.reel=function(k){var a=j.extend({},Wa,k);k=function(g){var d=[];g.filter(Xa).each(function(){var c=j(this),l=a.images.length&&a.images||a.image||c.attr(za),A=P(c.css(Aa)),t=P(c.css(Ba));!l||l==Ca||!A||!t||d.push(c)});
g.filter(Da+$(u)).each(function(){d.push(j(this))});return j(d)}(this);var s=[];a.reversed&&(a.cw=true);a.tooltip&&(a.hint=a.tooltip);ca=ca||function g(){B.trigger(da);return setTimeout(g,1E3/a.tempo)}();k.each(function(){var g=j(this),d=function(f,b){g.data(f,b);g.trigger("store");return b},c=function(f){g.trigger("recall");return g.data(f)},l=function(f){Ya||delete this;return f},A={setup:function(f){if(g.hasClass(u))return l.call(f);var b=g.attr(za),e=g.attr(Za),i=g.attr("style"),h=a.images,n=
a.stitched,q=a.loops,m={x:P(g.css(Aa)),y:P(g.css(Ba))},p=a.images?$a:b,ea={display:"block",width:m.x,height:m.y};e="#"+e+a.suffix;var Ea=g.attr("className"),fa={position:"relative",width:m.x,height:m.y};fa=j(I,{id:e.substr(1),className:Ea+Q+ab,css:fa});p=g.wrap(fa).attr({src:p,className:u,style:ea}).bind(A);s.push(p[0]);d(ga,h.length&&h.length||a.image||b.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+a.suffix+".$2"));d(Fa,Ea);d(C,a.frame);d(Ga,a.spacing);d(D,m);d(r,0);d(ha,a.steps||a.frames);d(R,a.revolution||
n/2||m.x);d(Ha,Ia(d(S,h.length||a.frames)/a.footage));d(T,1/(c(S)-(q&&!n?0:1)));d(bb,1/N(c(S),c(ha)));d(Ja,n-(q?0:m.x));d(Ka,m.x-a.indicator);d(U,e);d(w,d(ia,a.speed)<0);d(E,0);d(v,(a.row-1)/(a.rows-1));d(F,a.value||0);d(V,ba(1,!a.cw&&!n));d(La,{src:b,style:i||Ca});ca&&B.bind(da,A.tick);l.call(f);g.trigger("start")},teardown:function(f){j(c(U)).replaceWith(j(g.clone()).attr(g.data(La)).removeClass(u).addClass(c(Fa)));W();B.unbind(X).unbind(Y).unbind(da,A.tick);l.call(f)},start:function(f){var b=c(D),
e=c(S),i=N(e,c(ha));i=d(r,1/i*((a.step||a.frame)-1));d(C,i*e+1);e=c(ga);i=a.images;e=!i.length?[e]:[].concat(i);g.attr("id");var h=g[0];h.frames=e.length;h.preloads=h.preloads||[];h.preloaded=h.preloaded||0;i=e.length!=h.preloads.length;var n=g.parent(),q=j(I,{className:cb,css:{position:Z,left:0,top:0,width:b.x,height:b.y,background:ja,opacity:0}}).appendTo(n);q=d(ka,j(a.hotspot||q));var m=g.add(a.couple);db?q.css({WebkitUserSelect:"none"}).bind(eb,function(p){m.trigger("down",[O(p).clientX,O(p).clientY,
true]);return false}).bind(fb,function(p){m.trigger("slide",[O(p).clientX,O(p).clientY,true]);return false}).bind(gb,function(){m.trigger("up",[true]);return false}).bind(hb,function(){m.trigger("up",[true]);return false}):q.css({cursor:"url("+Ma+"), "+la}).bind(Y,function(p){m.trigger("over",[p.pageX,p.pageY])}).bind(ib,function(p,ea){m.trigger("wheel",[ea]);return false}).bind(jb,function(){m.trigger("play")}).bind(a.clickfree?kb:lb,function(p){m.trigger("down",[p.clientX,p.clientY]);return false}).bind(a.clickfree?
mb:X,function(){m.trigger("up");return false}).disableTextSelect();a.hint&&q.attr(nb,a.hint);a.monitor&&n.append(ma=j(I,{className:ob,css:{position:Z,left:0,top:0}}))||(ma=j());a.indicator&&n.append(Na("x"));a.rows&&a.indicator&&n.append(Na("y"));if(i)for(n.append(na=j(I,{className:pb,css:{position:Z,left:0,top:b.y-a.preloader,height:a.preloader,backgroundColor:ja}}));e.length;){i=new Image;n=a.path+e.shift();j(i).load(function(){h.preloaded++;na.css({width:1/h.frames*h.preloaded*b.x});h.frames==
h.preloaded&&na.remove()});i.src=n;h.preloads.push(i)}a.delay>0&&x();a.value!=o&&g.trigger("valueChange",c(F));l.call(f);g.trigger(a.rows&&!a.stitched?"rowChange":"frameChange")},tick:function(f){var b=c(E);if(J){var e=y(b-qb*J);b=!(b*e<=0||b<z(e))&&d(E,b>z(c(ia))?e:(J=t=0))}ma.text(c(a.monitor));b&&J++;t&&t++;Oa(0);g[0].value!=c(F)&&g.trigger("valueChange",g[0].value);if(t&&!b)return l.call(f);if(c(oa))return l.call(f,x());e=c(V)*ba(1,c(w));b=(c(pa)?b:z(c(ia))+b)/a.tempo;d(r,c(r)-b*e);l.call(f);
g.trigger("fractionChange")},play:function(f){var b=d(qa,true);d(pa,!b);Pa();l.call(f)},pause:function(f){d(qa,false);x();l.call(f)},stop:function(f){var b=d(pa,true);d(qa,!b);l.call(f)},down:function(f,b,e,i){if(!a.dragable)return l.call(f);d(oa,true);d(E,0);ra(b,e,c(r),c(R),c(v));sa=o;x();W();!i&&B.bind(Y,function(h){g.trigger("slide",[h.clientX,h.clientY]);l.call(h)}).css({cursor:aa(rb)+", "+la})&&!a.clickfree&&B.bind(X,function(h){g.trigger("up");l.call(h)})&&c(ka);l.call(f)},up:function(f,b){if(!a.dragable)return l.call(f);
d(oa,false);var e=d(E,!a.throwable?0:z(G[0]+G[1]+G[2])/60);J=e?1:0;e?Pa():x();W();!b&&B.unbind(X).unbind(Y)&&c(ka).css({cursor:aa(Ma)+", "+la});l.call(f)},slide:function(f,b,e){if(!a.dragable)return l.call(f);var i=c(R),h=c(Qa),n=Oa(b-sa||0),q=d(r,Ra(b-h.x,c(ta),i,c(ua),c(va),c(V)));n&&d(w,n<0);if(a.rows){n=c(D).y;var m=c(Sa),p=-m*n;d(v,y(j.reel.math.envelope(e-h.y,m,n,p,p+n,-1)))}!(q%1)&&!a.loops&&ra(b,e,q,i,c(v));x();sa=b;l.call(f);g.trigger("fractionChange")},wheel:function(f,b){if(!a.wheelable)return l.call(f);
var e=Ia(sb(z(b))/2);e=ba(e,b>0);b=0.2*c(R);ra(o,o,c(r),b,c(v));d(r,Ra(e,c(ta),b,c(ua),c(va),c(V)));e&&d(w,e<0);d(E,0);x();l.call(f);g.trigger("fractionChange");return false},fractionChange:function(f,b,e){b=!b?c(r):d(r,b);b=a.loops?b-K(b):M(0,1,b);b=d(r,y(b));d(C,1+K(b/c(T)));d(F,y(j.reel.math.interpolate(b,a.minimum,a.maximum)));if(!a.loops&&a.rebound){!t&&!(b%1)?wa++:(wa=0);wa>=a.rebound*1E3/a.tempo&&d(w,!c(w))}l.call(f);e||g.trigger("valueChange");g.trigger(a.rows&&!a.stitched?"rowChange":"frameChange")},
rowChange:function(f,b){var e=K(c(r)/c(T))+1;b=d(v,M(0,1,y(b!=o?(b-1)/(a.rows-1):c(v))));d(C,e+(!a.rows?0:L(b*(a.rows-1))*a.frames));l.call(f);g.trigger("frameChange")},frameChange:function(f,b){var e=!b?c(r):d(r,y(c(T)*(b-1)));b=d(C,L(b?b:c(C)));var i=a.images,h=a.footage,n=a.horizontal;if(a.stitched)n=[-L(e*c(Ja))+H,0+H];else{var q=b%h-1;q=q<0?h-1:q;var m=K((b-0.1)/h);m+=a.rows?0:c(w)?0:c(Ha);h=c(D);var p=c(Ga);m=m*((n?h.y:h.x)+p);q=q*((n?h.x:h.y)+p);n=i.length?[0,0]:n?[-q+H,-m+H]:[-m+H,-q+H]}b=
i[b-1]||c(ga);i=c(Ka);e=M(0,i,L(j.reel.math.interpolate(e,-1,i+2)));e=!a.cw||a.stitched?e:i-e;i={background:aa(a.path+b)+Q+n.join(Q)};a.images.length?g.attr({src:a.path+b}):g.css(i);j($(xa+".x"),c(U)).css({left:e});if(!a.rows)return l.call(f);e=c(D).y-a.indicator;e=M(0,e,L(j.reel.math.interpolate(c(v),-1,e+2)));j($(xa+".y"),c(U)).css({top:e});l.call(f)},valueChange:function(f,b){f=b!==o&&d(r,b/(a.maximum-a.minimum));g[0].value=b===o?c(F):d(F,b);f===false||g.trigger("fractionChange",[o,true])}},t,
J=0,Pa=function(){return t=0},x=function(){return t=-a.timeout*a.tempo},ma,na,Na=function(f){return j(I,{className:[xa,f].join(Q),css:{width:a.indicator,height:a.indicator,top:f=="y"?o:c(D).y-a.indicator,left:f=="x"?o:0,position:Z,backgroundColor:ja}})},wa=0,sa=0,Oa=function(f){return G.push(f)&&G.shift()&&f},W=function(){return G=[0,0,0]},G=W(),qb=a.brake/a.tempo,Ra=a.graph||j.reel.math[a.loops?"hatch":"envelope"],ra=function(f,b,e,i,h){d(ta,e);d(Sa,h);d(ua,a.loops?0:-e*i);d(va,a.loops?i:i-e*i);
return f&&d(Qa,{x:f,y:b})||o};A.setup()});return j(s)};j.reel.math={envelope:function(k,a,s,g,d,c){return a+N(g,ya(d,-k*c))/s},hatch:function(k,a,s,g,d,c){k=(k<g?d:0)+k%d;k=a+-k*c/s;return k-K(k)},interpolate:function(k,a,s){return a+k*(s-a)}};Va("mousewheel disableTextSelect enableTextSelect".split(/ /));var B=j(Ta),db=/iphone|ipod|ipad|android/i.test(navigator.userAgent),Ya=j.browser.msie,la="ew-resize",ca,u="jquery-reel",ab=u+"-overlay",xa=u+"-indicator",pb=u+"-preloader",ob=u+"-monitor",cb=u+
"-interface",$a="data:image/gif;base64,R0lGODlhCAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7",Ma="data:image/gif;base64,R0lGODlhEAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAI3lC8AeBDvgosQxQtne7yvLWGStVBelXBKqDJpNzLKq3xWBlU2nUs4C/O8cCvU0EfZGUwt19FYAAA7",rb="data:image/gif;base64,R0lGODlhEAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAIslI95EB3MHECxNjBVdE/5b2zcRV1QBabqhwltq41St4hj5konmVioZ6OtEgUAOw==",L=Math.round,K=Math.floor,Ia=Math.ceil,ya=Math.min,N=Math.max,z=Math.abs,sb=Math.sqrt,
P=parseInt,La="backup",w="backwards",T="bit",Fa="classes",oa="clicked",Qa="clicked_location",ta="clicked_on",Sa="clicked_row",V="cwish",D="dimensions",r="fraction",C="frame",S="frames",va="hi",ka="hotspot",ga="image",Ka="indicator_travel",ua="lo",qa="playing",R="revolution",v="row",Ha="rows",Ga="spacing",ia="speed",U="stage",ha="steps",Ja="stitched_travel",pa="stopped",F="value",E="velocity",bb="wheel_step",jb="dblclick.reel",lb="mousedown.reel",kb="mouseenter.reel",mb="mouseleave.reel",Y="mousemove.reel",
X="mouseup.reel",ib="mousewheel.reel",da="tick.reel",hb="touchcancel.reel",gb="touchend.reel",eb="touchstart.reel",fb="touchmove.reel",Ca="",Q=" ",Z="absolute",Da="div",I=Ua(Da),Ba="height",ja="#000",Za="id",Xa="img",H="px",za="src",nb="title",Aa="width"})(jQuery,window,document);
