import{_ as Pe}from"./RegisterComp-ae058015.js";import{_ as $e}from"./LoginComp-e1cbe164.js";import{p as P,m as W,a as z,g as $,u as E,c as n,b as Ee,d as Le,e as ne,f as K,h as Q,t as k,i as Ae,j as Re,k as le,l as se,n as ie,s as w,o as y,q as ue,V as Ne,r as G,v as H,w as He,x as I,y as Ye,z as M,A as Xe,B as Me,C as We,D as re,E as ze,F as je,G as R,H as De,I as ce,J as A,K as Ue,L as Fe,M as Ge,N as de,O as ve,P as Oe,Q as qe,R as Je,S as fe,T as Z,U as me,W as Ke,X as ge,Y as Qe,Z as Ze,_ as pe,$ as et,a0 as tt,a1 as at,a2 as ot,a3 as nt,a4 as lt,a5 as st,a6 as U,a7 as it,a8 as ut,a9 as rt,aa as ct,ab as dt,ac as vt,ad as ft,ae as mt,af as gt,ag as ht,ah as ee,ai as N,aj as O,ak as S,al as bt,am as yt,an as F,ao as xt,ap as q,aq as j,ar as X,as as Vt,at as St,au as _t,av as D,aw as Tt,ax as Ct,ay as Bt,az as kt}from"./index-e30a2666.js";import{V as wt,a as It}from"./VNavigationDrawer-78e8ac56.js";import{u as he,V as Pt,a as $t,b as Et}from"./VList-1061f874.js";import{m as Lt,V as te}from"./VSlideGroup-fed781fe.js";import{V as At}from"./VContainer-f01c952a.js";import"./index-cc3d218e.js";import"./index.esm-195823e1.js";import"./vee-validate.esm-b2a6c747.js";import"./VRow-15ec713d.js";import"./VCol-ee16e47c.js";import"./VDivider-b50e760e.js";const be=P({text:String,...W(),...z()},"VToolbarTitle"),ye=$()({name:"VToolbarTitle",props:be(),setup(e,a){let{slots:t}=a;return E(()=>{const o=!!(t.default||t.text||e.text);return n(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var i;return[o&&n("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(i=t.default)==null?void 0:i.call(t)])]}})}),{}}}),Rt=[null,"prominent","default","comfortable","compact"],xe=P({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Rt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ee(),...W(),...Le(),...ne(),...z({tag:"header"}),...K()},"VToolbar"),ae=$()({name:"VToolbar",props:xe(),setup(e,a){var u;let{slots:t}=a;const{backgroundColorClasses:o,backgroundColorStyles:i}=Q(k(e,"color")),{borderClasses:s}=Ae(e),{elevationClasses:l}=Re(e),{roundedClasses:v}=le(e),{themeClasses:r}=se(e),{rtlClasses:f}=ie(),d=w(!!(e.extended||(u=t.extension)!=null&&u.call(t))),x=y(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=y(()=>d.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ue({VBtn:{variant:"text"}}),E(()=>{var b;const c=!!(e.title||t.title),V=!!(t.image||e.image),m=(b=t.extension)==null?void 0:b.call(t);return d.value=!!(e.extended||m),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,s.value,l.value,v.value,r.value,f.value,e.class],style:[i.value,e.style]},{default:()=>[V&&n("div",{key:"image",class:"v-toolbar__image"},[t.image?n(G,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(Ne,{key:"image-img",cover:!0,src:e.image},null)]),n(G,{defaults:{VTabs:{height:H(x.value)}}},{default:()=>{var T,C,h;return[n("div",{class:"v-toolbar__content",style:{height:H(x.value)}},[t.prepend&&n("div",{class:"v-toolbar__prepend"},[(T=t.prepend)==null?void 0:T.call(t)]),c&&n(ye,{key:"title",text:e.title},{text:t.title}),(C=t.default)==null?void 0:C.call(t),t.append&&n("div",{class:"v-toolbar__append"},[(h=t.append)==null?void 0:h.call(t)])])]}}),n(G,{defaults:{VTabs:{height:H(g.value)}}},{default:()=>[n(He,null,{default:()=>[d.value&&n("div",{class:"v-toolbar__extension",style:{height:H(g.value)}},[m])]})]})]})}),{contentHeight:x,extensionHeight:g}}}),Nt=P({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ht(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=a;let o=0;const i=I(null),s=w(0),l=w(0),v=w(0),r=w(!1),f=w(!1),d=y(()=>Number(e.scrollThreshold)),x=y(()=>Ye((d.value-s.value)/d.value||0)),g=()=>{const u=i.value;!u||t&&!t.value||(o=s.value,s.value="window"in u?u.pageYOffset:u.scrollTop,f.value=s.value<o,v.value=Math.abs(s.value-d.value))};return M(f,()=>{l.value=l.value||s.value}),M(r,()=>{l.value=0}),Xe(()=>{M(()=>e.scrollTarget,u=>{var V;const c=u?document.querySelector(u):window;c&&c!==i.value&&((V=i.value)==null||V.removeEventListener("scroll",g),i.value=c,i.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),Me(()=>{var u;(u=i.value)==null||u.removeEventListener("scroll",g)}),t&&M(t,g,{immediate:!0}),{scrollThreshold:d,currentScroll:s,currentThreshold:v,isScrollActive:r,scrollRatio:x,isScrollingUp:f,savedScroll:l}}const Yt=P({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...xe(),...We(),...Nt(),height:{type:[Number,String],default:64}},"VAppBar"),Xt=$()({name:"VAppBar",props:Yt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const o=I(),i=re(e,"modelValue"),s=y(()=>{var T;const b=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:b.has("hide"),inverted:b.has("inverted"),collapse:b.has("collapse"),elevate:b.has("elevate"),fadeImage:b.has("fade-image")}}),l=y(()=>{const b=s.value;return b.hide||b.inverted||b.collapse||b.elevate||b.fadeImage||!i.value}),{currentScroll:v,scrollThreshold:r,isScrollingUp:f,scrollRatio:d}=Ht(e,{canScroll:l}),x=y(()=>e.collapse||s.value.collapse&&(s.value.inverted?d.value>0:d.value===0)),g=y(()=>e.flat||s.value.elevate&&(s.value.inverted?v.value>0:v.value===0)),u=y(()=>s.value.fadeImage?s.value.inverted?1-d.value:d.value:void 0),c=y(()=>{var C,h;if(s.value.hide&&s.value.inverted)return 0;const b=((C=o.value)==null?void 0:C.contentHeight)??0,T=((h=o.value)==null?void 0:h.extensionHeight)??0;return b+T});ze(y(()=>!!e.scrollBehavior),()=>{De(()=>{s.value.hide?s.value.inverted?i.value=v.value>r.value:i.value=f.value||v.value<r.value:i.value=!0})});const{ssrBootStyles:V}=he(),{layoutItemStyles:m}=je({id:e.name,order:y(()=>parseInt(e.order,10)),position:k(e,"location"),layoutSize:c,elementSize:w(void 0),active:i,absolute:k(e,"absolute")});return E(()=>{const b=ae.filterProps(e);return n(ae,R({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...m.value,"--v-toolbar-image-opacity":u.value,height:void 0,...V.value},e.style]},b,{collapse:x.value,flat:g.value}),t)}),{}}}),Mt=P({...ce({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Wt=$()({name:"VAppBarNavIcon",props:Mt(),setup(e,a){let{slots:t}=a;return E(()=>n(A,R(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),zt=$()({name:"VAppBarTitle",props:be(),setup(e,a){let{slots:t}=a;return E(()=>n(ye,R(e,{class:"v-app-bar-title"}),t)),{}}});const jt=P({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Ue,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...W(),...Fe({location:"top end"}),...ne(),...z(),...K(),...Ge({transition:"scale-rotate-transition"})},"VBadge"),Dt=$()({name:"VBadge",inheritAttrs:!1,props:jt(),setup(e,a){const{backgroundColorClasses:t,backgroundColorStyles:o}=Q(k(e,"color")),{roundedClasses:i}=le(e),{t:s}=de(),{textColorClasses:l,textColorStyles:v}=ve(k(e,"textColor")),{themeClasses:r}=Oe(),{locationStyles:f}=qe(e,!0,d=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(d)?+(e.offsetY??0):["left","right"].includes(d)?+(e.offsetX??0):0));return E(()=>{const d=Number(e.content),x=!e.max||isNaN(d)?e.content:d<=+e.max?d:`${e.max}+`,[g,u]=Je(a.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return n(e.tag,R({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},u,{style:e.style}),{default:()=>{var c,V;return[n("div",{class:"v-badge__wrapper"},[(V=(c=a.slots).default)==null?void 0:V.call(c),n(fe,{transition:e.transition},{default:()=>{var m,b;return[Z(n("span",R({class:["v-badge__badge",r.value,t.value,i.value,l.value],style:[o.value,v.value,e.inline?{}:f.value],"aria-atomic":"true","aria-label":s(e.label,d),"aria-live":"polite",role:"status"},g),[e.dot?void 0:a.slots.badge?(b=(m=a.slots).badge)==null?void 0:b.call(m):e.icon?n(Ke,{icon:e.icon},null):x]),[[me,e.modelValue]])]}})])]}})}),{}}});const Ut=e=>{const{touchstartX:a,touchendX:t,touchstartY:o,touchendY:i}=e,s=.5,l=16;e.offsetX=t-a,e.offsetY=i-o,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&t<a-l&&e.left(e),e.right&&t>a+l&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&i<o-l&&e.up(e),e.down&&i>o+l&&e.down(e))};function Ft(e,a){var o;const t=e.changedTouches[0];a.touchstartX=t.clientX,a.touchstartY=t.clientY,(o=a.start)==null||o.call(a,{originalEvent:e,...a})}function Gt(e,a){var o;const t=e.changedTouches[0];a.touchendX=t.clientX,a.touchendY=t.clientY,(o=a.end)==null||o.call(a,{originalEvent:e,...a}),Ut(a)}function Ot(e,a){var o;const t=e.changedTouches[0];a.touchmoveX=t.clientX,a.touchmoveY=t.clientY,(o=a.move)==null||o.call(a,{originalEvent:e,...a})}function qt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ft(t,a),touchend:t=>Gt(t,a),touchmove:t=>Ot(t,a)}}function Jt(e,a){var v;const t=a.value,o=t!=null&&t.parent?e.parentElement:e,i=(t==null?void 0:t.options)??{passive:!0},s=(v=a.instance)==null?void 0:v.$.uid;if(!o||!s)return;const l=qt(a.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[s]=l,ge(l).forEach(r=>{o.addEventListener(r,l[r],i)})}function Kt(e,a){var s,l;const t=(s=a.value)!=null&&s.parent?e.parentElement:e,o=(l=a.instance)==null?void 0:l.$.uid;if(!(t!=null&&t._touchHandlers)||!o)return;const i=t._touchHandlers[o];ge(i).forEach(v=>{t.removeEventListener(v,i[v])}),delete t._touchHandlers[o]}const Ve={mounted:Jt,unmounted:Kt},Qt=Ve,Se=Symbol.for("vuetify:v-window"),_e=Symbol.for("vuetify:v-window-group"),Zt=P({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...W(),...z(),...K()},"VWindow"),pt=$()({name:"VWindow",directives:{Touch:Ve},props:Zt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{themeClasses:o}=se(e),{isRtl:i}=ie(),{t:s}=de(),l=Qe(e,_e),v=I(),r=y(()=>i.value?!e.reverse:e.reverse),f=w(!1),d=y(()=>{const h=e.direction==="vertical"?"y":"x",B=(r.value?!f.value:f.value)?"-reverse":"";return`v-window-${h}${B}-transition`}),x=w(0),g=I(void 0),u=y(()=>l.items.value.findIndex(h=>l.selected.value.includes(h.id)));M(u,(h,_)=>{const B=l.items.value.length,L=B-1;B<=2?f.value=h<_:h===L&&_===0?f.value=!0:h===0&&_===L?f.value=!1:f.value=h<_}),Ze(Se,{transition:d,isReversed:f,transitionCount:x,transitionHeight:g,rootRef:v});const c=y(()=>e.continuous||u.value!==0),V=y(()=>e.continuous||u.value!==l.items.value.length-1);function m(){c.value&&l.prev()}function b(){V.value&&l.next()}const T=y(()=>{const h=[],_={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:l.prev,"aria-label":s("$vuetify.carousel.prev")};h.push(c.value?t.prev?t.prev({props:_}):n(A,_,null):n("div",null,null));const B={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:l.next,"aria-label":s("$vuetify.carousel.next")};return h.push(V.value?t.next?t.next({props:B}):n(A,B,null):n("div",null,null)),h}),C=y(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?m():b()},right:()=>{r.value?b():m()},start:_=>{let{originalEvent:B}=_;B.stopPropagation()}},...e.touch===!0?{}:e.touch});return E(()=>Z(n(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var h,_;return[n("div",{class:"v-window__container",style:{height:g.value}},[(h=t.default)==null?void 0:h.call(t,{group:l}),e.showArrows!==!1&&n("div",{class:"v-window__controls"},[T.value])]),(_=t.additional)==null?void 0:_.call(t,{group:l})]}}),[[pe("touch"),C.value]])),{group:l}}}),ea=P({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...W(),...et(),...tt()},"VWindowItem"),oe=$()({name:"VWindowItem",directives:{Touch:Qt},props:ea(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:t}=a;const o=at(Se),i=ot(e,_e),{isBooted:s}=he();if(!o||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const l=w(!1),v=y(()=>s.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function r(){!l.value||!o||(l.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function f(){var c;l.value||!o||(l.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=H((c=o.rootRef.value)==null?void 0:c.clientHeight)),o.transitionCount.value+=1)}function d(){r()}function x(c){l.value&&lt(()=>{!v.value||!l.value||!o||(o.transitionHeight.value=H(c.clientHeight))})}const g=y(()=>{const c=o.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof c!="string"?o.transition.value:c,onBeforeEnter:f,onAfterEnter:r,onEnterCancelled:d,onBeforeLeave:f,onAfterLeave:r,onLeaveCancelled:d,onEnter:x}:!1}),{hasContent:u}=nt(e,i.isSelected);return E(()=>n(fe,{transition:g.value,disabled:!s.value},{default:()=>{var c;return[Z(n("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[u.value&&((c=t.default)==null?void 0:c.call(t))]),[[me,i.isSelected.value]])]}})),{groupItem:i}}});const Te=Symbol.for("vuetify:v-tabs"),ta=P({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...st(ce({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),J=$()({name:"VTab",props:ta(),setup(e,a){let{slots:t,attrs:o}=a;const{textColorClasses:i,textColorStyles:s}=ve(e,"sliderColor"),l=I(),v=I(),r=y(()=>e.direction==="horizontal"),f=y(()=>{var x,g;return((g=(x=l.value)==null?void 0:x.group)==null?void 0:g.isSelected.value)??!1});function d(x){var u,c;let{value:g}=x;if(g){const V=(c=(u=l.value)==null?void 0:u.$el.parentElement)==null?void 0:c.querySelector(".v-tab--selected .v-tab__slider"),m=v.value;if(!V||!m)return;const b=getComputedStyle(V).color,T=V.getBoundingClientRect(),C=m.getBoundingClientRect(),h=r.value?"x":"y",_=r.value?"X":"Y",B=r.value?"right":"bottom",L=r.value?"width":"height",Ce=T[h],Be=C[h],Y=Ce>Be?T[B]-C[B]:T[h]-C[h],ke=Math.sign(Y)>0?r.value?"right":"bottom":Math.sign(Y)<0?r.value?"left":"top":"center",we=(Math.abs(Y)+(Math.sign(Y)<0?T[L]:C[L]))/Math.max(T[L],C[L])||0,Ie=T[L]/C[L]||0,p=1.5;ut(m,{backgroundColor:[b,"currentcolor"],transform:[`translate${_}(${Y}px) scale${_}(${Ie})`,`translate${_}(${Y/p}px) scale${_}(${(we-1)/p+1})`,"none"],transformOrigin:Array(3).fill(ke)},{duration:225,easing:rt})}}return E(()=>{const x=A.filterProps(e);return n(A,R({symbol:Te,ref:l,class:["v-tab",e.class],style:e.style,tabindex:f.value?0:-1,role:"tab","aria-selected":String(f.value),active:!1},x,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":d}),{...t,default:()=>{var g;return n(U,null,[((g=t.default)==null?void 0:g.call(t))??e.text,!e.hideSlider&&n("div",{ref:v,class:["v-tab__slider",i.value],style:s.value},null)])}})}),it({},l)}});function aa(e){return e?e.map(a=>vt(a)?a:{text:a,value:a}):[]}const oa=P({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Lt({mandatory:"force"}),...ct(),...z()},"VTabs"),na=$()({name:"VTabs",props:oa(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const o=re(e,"modelValue"),i=y(()=>aa(e.items)),{densityClasses:s}=dt(e),{backgroundColorClasses:l,backgroundColorStyles:v}=Q(k(e,"bgColor"));return ue({VTab:{color:k(e,"color"),direction:k(e,"direction"),stacked:k(e,"stacked"),fixed:k(e,"fixedTabs"),sliderColor:k(e,"sliderColor"),hideSlider:k(e,"hideSlider")}}),E(()=>{const r=te.filterProps(e);return n(te,R(r,{modelValue:o.value,"onUpdate:modelValue":f=>o.value=f,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,l.value,e.class],style:[{"--v-tabs-height":H(e.height)},v.value,e.style],role:"tablist",symbol:Te}),{default:()=>[t.default?t.default():i.value.map(f=>n(J,R(f,{key:f.text}),null))]})}),{}}}),la="/volleycourt-appointment-front/assets/logo-05-404fdc65.png";const sa=e=>(Ct("data-v-1d066e71"),e=e(),Bt(),e),ia={class:"drawer-btn-box"},ua={class:"d-flex justify-center mt-2 mb-4"},ra={class:"d-flex justify-center mt-2 mb-4"},ca=sa(()=>F("img",{src:la,alt:"一起來打排",class:"bar-logo"},null,-1)),da={__name:"FrontLayout",setup(e){const a=I(!1),{apiAuth:t}=kt(),o=mt(),i=gt(),s=ht(),l=I("login"),v=y(()=>[{to:"/about",text:"場館介紹",show:!0},{to:"/news",text:"最新消息",show:!0},{to:"/appointment",text:"預約報名",show:!0},{to:"/reservation",text:"我的預約",show:s.isLogin},{to:"/shop",text:"排球選物",show:!0},{to:"/cart",text:"購物車",icon:"mdi-cart",show:s.isLogin},{to:"/admin",text:"後台管理",show:s.isLogin&&s.isAdmin}]),r=I(!1),f=()=>{window.scrollY>100?r.value=!0:r.value=!1};window.addEventListener("scroll",f);const d=I(!1),x=async()=>{var g,u;try{await t.delete("/users/logout"),s.logout(),o({text:"登出成功",showCloseButton:!1,snackbarProps:{color:"success",timeout:2e3,location:"bottom"}}),i.push("/")}catch(c){console.log(c);const V=((u=(g=c==null?void 0:c.response)==null?void 0:g.data)==null?void 0:u.message)||"發生錯誤，請稍後再試";o({text:V,showCloseButton:!1,snackbarProps:{color:"error",timeout:2e3,location:"top"}})}};return(g,u)=>{const c=ee("router-link"),V=ee("RouterView");return N(),O(U,null,[n(wt,{modelValue:d.value,"onUpdate:modelValue":u[4]||(u[4]=m=>d.value=m),temporary:"",location:"right"},{default:S(()=>[F("div",ia,[n(A,{onClick:u[0]||(u[0]=m=>d.value=!1),class:"close-btn",icon:"mdi-close",size:"large"})]),n(Pt,{class:"v-list-centered"},{default:S(()=>[(N(!0),O(U,null,xt(v.value,m=>(N(),O(U,{key:m.to},[m.show?(N(),j($t,{key:0,to:m.to,class:"d-flex align-center justify-center"},{default:S(()=>[n(Et,{class:"list-title"},{default:S(()=>[X(Tt(m.text)+" ",1),m.to==="/cart"?(N(),j(Dt,{key:0,content:q(s).cart,color:"rgb(26, 108, 163)",inline:"",class:"badge"},null,8,["content"])):D("",!0)]),_:2},1024)]),_:2},1032,["to"])):D("",!0)],64))),128)),F("div",ua,[q(s).isLogin?D("",!0):(N(),j(A,{key:0,class:"d-flex align-center justify-center login"},{default:S(()=>[X("登入 "),n(Vt,{activator:"parent",modelValue:a.value,"onUpdate:modelValue":u[3]||(u[3]=m=>a.value=m),transition:"dialog-top-transition",width:"600"},{default:S(()=>[n(St,null,{default:S(()=>[n(na,{modelValue:l.value,"onUpdate:modelValue":u[1]||(u[1]=m=>l.value=m),color:"rgb(26, 108, 163)",class:"list-title","fixed-tabs":""},{default:S(()=>[n(J,{value:"login"},{default:S(()=>[X("登入")]),_:1}),n(J,{value:"register"},{default:S(()=>[X("註冊")]),_:1})]),_:1},8,["modelValue"]),n(_t,null,{default:S(()=>[n(pt,{modelValue:l.value,"onUpdate:modelValue":u[2]||(u[2]=m=>l.value=m)},{default:S(()=>[n(oe,{value:"login"},{default:S(()=>[n($e)]),_:1}),n(oe,{value:"register"},{default:S(()=>[n(Pe)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))]),F("div",ra,[q(s).isLogin?(N(),j(A,{key:0,onClick:x,class:"d-flex align-center justify-center logout"},{default:S(()=>[X(" 登出 ")]),_:1})):D("",!0)])]),_:1})]),_:1},8,["modelValue"]),n(Xt,{elevation:0,class:bt({navbar:r.value}),style:yt({backgroundColor:r.value?"rgba(224, 236, 246, 1)":"rgba(224, 236, 246, 0)"})},{default:S(()=>[n(At,{class:"d-flex align-center"},{default:S(()=>[n(c,{to:"/"},{default:S(()=>[n(zt,null,{default:S(()=>[ca]),_:1})]),_:1})]),_:1}),n(Wt,{onClick:u[5]||(u[5]=m=>d.value=!0),class:"menu-btn"})]),_:1},8,["class","style"]),n(It,null,{default:S(()=>[n(V)]),_:1})],64)}}},ka=ft(da,[["__scopeId","data-v-1d066e71"]]);export{ka as default};
