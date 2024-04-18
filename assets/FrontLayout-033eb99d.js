import{p as $,m as U,a as j,g as E,u as L,c as o,b as Xe,d as We,e as re,f as Z,h as ee,t as k,i as ze,j as Fe,k as ue,l as ce,n as de,s as P,o as S,q as ve,V as Ue,r as J,v as M,w as je,x as I,y as De,z,A as pe,B as me,C as Ge,D as fe,E as Oe,F as qe,G as H,H as Je,I as ge,J as N,K as Ke,L as Qe,M as Ze,N as he,O as be,P as et,Q as tt,R as at,S as ye,T as te,U as Ve,W as ot,X as xe,Y as lt,Z as nt,_ as st,$ as it,a0 as rt,a1 as ut,a2 as ct,a3 as dt,a4 as vt,a5 as mt,a6 as q,a7 as ft,a8 as gt,a9 as ht,aa as bt,ab as yt,ac as Vt,ad as Se,ae as _e,af as Ce,ag as R,ah as X,ai as x,aj as B,ak as xt,al as D,am as W,an as F,ao as we,ap as St,aq as oe,ar as K,as as _t,at as Ct,au as wt,av as Bt,aw as Tt,ax as kt,ay as p,az as It,aA as Pt,aB as $t}from"./index-96cd8d79.js";import{v as Et,_ as Lt}from"./LoginComp-24e1c3bf.js";import{c as At,a as G,b as Rt,u as Nt,d as O,V as Ht}from"./index.esm-217bb049.js";import{V as Mt}from"./VRow-59aa5f4b.js";import{V as le}from"./VCol-b6bc57f8.js";import{V as Be}from"./VContainer-12d0f2fa.js";import{V as Yt,a as Xt}from"./VNavigationDrawer-e2810d82.js";import{u as Te,V as Wt,a as zt,b as Ft}from"./VList-6ca47af6.js";import{m as Ut,V as ne}from"./VSlideGroup-9dba0696.js";import"./VDivider-d20ec8f4.js";const ke=$({text:String,...U(),...j()},"VToolbarTitle"),Ie=E()({name:"VToolbarTitle",props:ke(),setup(e,a){let{slots:t}=a;return L(()=>{const l=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[l&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),jt=[null,"prominent","default","comfortable","compact"],Pe=$({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>jt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Xe(),...U(),...We(),...re(),...j({tag:"header"}),...Z()},"VToolbar"),se=E()({name:"VToolbar",props:Pe(),setup(e,a){var r;let{slots:t}=a;const{backgroundColorClasses:l,backgroundColorStyles:s}=ee(k(e,"color")),{borderClasses:i}=ze(e),{elevationClasses:n}=Fe(e),{roundedClasses:h}=ue(e),{themeClasses:u}=ce(e),{rtlClasses:g}=de(),m=P(!!(e.extended||(r=t.extension)!=null&&r.call(t))),y=S(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),f=S(()=>m.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ve({VBtn:{variant:"text"}}),L(()=>{var v;const d=!!(e.title||t.title),_=!!(t.image||e.image),c=(v=t.extension)==null?void 0:v.call(t);return m.value=!!(e.extended||c),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,i.value,n.value,h.value,u.value,g.value,e.class],style:[s.value,e.style]},{default:()=>[_&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(J,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(Ue,{key:"image-img",cover:!0,src:e.image},null)]),o(J,{defaults:{VTabs:{height:M(y.value)}}},{default:()=>{var V,C,b;return[o("div",{class:"v-toolbar__content",style:{height:M(y.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(V=t.prepend)==null?void 0:V.call(t)]),d&&o(Ie,{key:"title",text:e.title},{text:t.title}),(C=t.default)==null?void 0:C.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(b=t.append)==null?void 0:b.call(t)])])]}}),o(J,{defaults:{VTabs:{height:M(f.value)}}},{default:()=>[o(je,null,{default:()=>[m.value&&o("div",{class:"v-toolbar__extension",style:{height:M(f.value)}},[c])]})]})]})}),{contentHeight:y,extensionHeight:f}}}),Dt=$({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function pt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=a;let l=0;const s=I(null),i=P(0),n=P(0),h=P(0),u=P(!1),g=P(!1),m=S(()=>Number(e.scrollThreshold)),y=S(()=>De((m.value-i.value)/m.value||0)),f=()=>{const r=s.value;!r||t&&!t.value||(l=i.value,i.value="window"in r?r.pageYOffset:r.scrollTop,g.value=i.value<l,h.value=Math.abs(i.value-m.value))};return z(g,()=>{n.value=n.value||i.value}),z(u,()=>{n.value=0}),pe(()=>{z(()=>e.scrollTarget,r=>{var _;const d=r?document.querySelector(r):window;d&&d!==s.value&&((_=s.value)==null||_.removeEventListener("scroll",f),s.value=d,s.value.addEventListener("scroll",f,{passive:!0}))},{immediate:!0})}),me(()=>{var r;(r=s.value)==null||r.removeEventListener("scroll",f)}),t&&z(t,f,{immediate:!0}),{scrollThreshold:m,currentScroll:i,currentThreshold:h,isScrollActive:u,scrollRatio:y,isScrollingUp:g,savedScroll:n}}const Gt=$({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Pe(),...Ge(),...Dt(),height:{type:[Number,String],default:64}},"VAppBar"),Ot=E()({name:"VAppBar",props:Gt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const l=I(),s=fe(e,"modelValue"),i=S(()=>{var V;const v=new Set(((V=e.scrollBehavior)==null?void 0:V.split(" "))??[]);return{hide:v.has("hide"),inverted:v.has("inverted"),collapse:v.has("collapse"),elevate:v.has("elevate"),fadeImage:v.has("fade-image")}}),n=S(()=>{const v=i.value;return v.hide||v.inverted||v.collapse||v.elevate||v.fadeImage||!s.value}),{currentScroll:h,scrollThreshold:u,isScrollingUp:g,scrollRatio:m}=pt(e,{canScroll:n}),y=S(()=>e.collapse||i.value.collapse&&(i.value.inverted?m.value>0:m.value===0)),f=S(()=>e.flat||i.value.elevate&&(i.value.inverted?h.value>0:h.value===0)),r=S(()=>i.value.fadeImage?i.value.inverted?1-m.value:m.value:void 0),d=S(()=>{var C,b;if(i.value.hide&&i.value.inverted)return 0;const v=((C=l.value)==null?void 0:C.contentHeight)??0,V=((b=l.value)==null?void 0:b.extensionHeight)??0;return v+V});Oe(S(()=>!!e.scrollBehavior),()=>{Je(()=>{i.value.hide?i.value.inverted?s.value=h.value>u.value:s.value=g.value||h.value<u.value:s.value=!0})});const{ssrBootStyles:_}=Te(),{layoutItemStyles:c}=qe({id:e.name,order:S(()=>parseInt(e.order,10)),position:k(e,"location"),layoutSize:d,elementSize:P(void 0),active:s,absolute:k(e,"absolute")});return L(()=>{const v=se.filterProps(e);return o(se,H({ref:l,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...c.value,"--v-toolbar-image-opacity":r.value,height:void 0,..._.value},e.style]},v,{collapse:y.value,flat:f.value}),t)}),{}}}),qt=$({...ge({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Jt=E()({name:"VAppBarNavIcon",props:qt(),setup(e,a){let{slots:t}=a;return L(()=>o(N,H(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),Kt=E()({name:"VAppBarTitle",props:ke(),setup(e,a){let{slots:t}=a;return L(()=>o(Ie,H(e,{class:"v-app-bar-title"}),t)),{}}});const Qt=$({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Ke,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...U(),...Qe({location:"top end"}),...re(),...j(),...Z(),...Ze({transition:"scale-rotate-transition"})},"VBadge"),Zt=E()({name:"VBadge",inheritAttrs:!1,props:Qt(),setup(e,a){const{backgroundColorClasses:t,backgroundColorStyles:l}=ee(k(e,"color")),{roundedClasses:s}=ue(e),{t:i}=he(),{textColorClasses:n,textColorStyles:h}=be(k(e,"textColor")),{themeClasses:u}=et(),{locationStyles:g}=tt(e,!0,m=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(m)?+(e.offsetY??0):["left","right"].includes(m)?+(e.offsetX??0):0));return L(()=>{const m=Number(e.content),y=!e.max||isNaN(m)?e.content:m<=+e.max?m:`${e.max}+`,[f,r]=at(a.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return o(e.tag,H({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},r,{style:e.style}),{default:()=>{var d,_;return[o("div",{class:"v-badge__wrapper"},[(_=(d=a.slots).default)==null?void 0:_.call(d),o(ye,{transition:e.transition},{default:()=>{var c,v;return[te(o("span",H({class:["v-badge__badge",u.value,t.value,s.value,n.value],style:[l.value,h.value,e.inline?{}:g.value],"aria-atomic":"true","aria-label":i(e.label,m),"aria-live":"polite",role:"status"},f),[e.dot?void 0:a.slots.badge?(v=(c=a.slots).badge)==null?void 0:v.call(c):e.icon?o(ot,{icon:e.icon},null):y]),[[Ve,e.modelValue]])]}})])]}})}),{}}});const ea=e=>{const{touchstartX:a,touchendX:t,touchstartY:l,touchendY:s}=e,i=.5,n=16;e.offsetX=t-a,e.offsetY=s-l,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&t<a-n&&e.left(e),e.right&&t>a+n&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&s<l-n&&e.up(e),e.down&&s>l+n&&e.down(e))};function ta(e,a){var l;const t=e.changedTouches[0];a.touchstartX=t.clientX,a.touchstartY=t.clientY,(l=a.start)==null||l.call(a,{originalEvent:e,...a})}function aa(e,a){var l;const t=e.changedTouches[0];a.touchendX=t.clientX,a.touchendY=t.clientY,(l=a.end)==null||l.call(a,{originalEvent:e,...a}),ea(a)}function oa(e,a){var l;const t=e.changedTouches[0];a.touchmoveX=t.clientX,a.touchmoveY=t.clientY,(l=a.move)==null||l.call(a,{originalEvent:e,...a})}function la(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>ta(t,a),touchend:t=>aa(t,a),touchmove:t=>oa(t,a)}}function na(e,a){var h;const t=a.value,l=t!=null&&t.parent?e.parentElement:e,s=(t==null?void 0:t.options)??{passive:!0},i=(h=a.instance)==null?void 0:h.$.uid;if(!l||!i)return;const n=la(a.value);l._touchHandlers=l._touchHandlers??Object.create(null),l._touchHandlers[i]=n,xe(n).forEach(u=>{l.addEventListener(u,n[u],s)})}function sa(e,a){var i,n;const t=(i=a.value)!=null&&i.parent?e.parentElement:e,l=(n=a.instance)==null?void 0:n.$.uid;if(!(t!=null&&t._touchHandlers)||!l)return;const s=t._touchHandlers[l];xe(s).forEach(h=>{t.removeEventListener(h,s[h])}),delete t._touchHandlers[l]}const $e={mounted:na,unmounted:sa},ia=$e,Ee=Symbol.for("vuetify:v-window"),Le=Symbol.for("vuetify:v-window-group"),ra=$({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...U(),...j(),...Z()},"VWindow"),ua=E()({name:"VWindow",directives:{Touch:$e},props:ra(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{themeClasses:l}=ce(e),{isRtl:s}=de(),{t:i}=he(),n=lt(e,Le),h=I(),u=S(()=>s.value?!e.reverse:e.reverse),g=P(!1),m=S(()=>{const b=e.direction==="vertical"?"y":"x",T=(u.value?!g.value:g.value)?"-reverse":"";return`v-window-${b}${T}-transition`}),y=P(0),f=I(void 0),r=S(()=>n.items.value.findIndex(b=>n.selected.value.includes(b.id)));z(r,(b,w)=>{const T=n.items.value.length,A=T-1;T<=2?g.value=b<w:b===A&&w===0?g.value=!0:b===0&&w===A?g.value=!1:g.value=b<w}),nt(Ee,{transition:m,isReversed:g,transitionCount:y,transitionHeight:f,rootRef:h});const d=S(()=>e.continuous||r.value!==0),_=S(()=>e.continuous||r.value!==n.items.value.length-1);function c(){d.value&&n.prev()}function v(){_.value&&n.next()}const V=S(()=>{const b=[],w={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:n.prev,"aria-label":i("$vuetify.carousel.prev")};b.push(d.value?t.prev?t.prev({props:w}):o(N,w,null):o("div",null,null));const T={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:n.next,"aria-label":i("$vuetify.carousel.next")};return b.push(_.value?t.next?t.next({props:T}):o(N,T,null):o("div",null,null)),b}),C=S(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?c():v()},right:()=>{u.value?v():c()},start:w=>{let{originalEvent:T}=w;T.stopPropagation()}},...e.touch===!0?{}:e.touch});return L(()=>te(o(e.tag,{ref:h,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},l.value,e.class],style:e.style},{default:()=>{var b,w;return[o("div",{class:"v-window__container",style:{height:f.value}},[(b=t.default)==null?void 0:b.call(t,{group:n}),e.showArrows!==!1&&o("div",{class:"v-window__controls"},[V.value])]),(w=t.additional)==null?void 0:w.call(t,{group:n})]}}),[[st("touch"),C.value]])),{group:n}}}),ca=$({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...U(),...it(),...rt()},"VWindowItem"),ie=E()({name:"VWindowItem",directives:{Touch:ia},props:ca(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:t}=a;const l=ut(Ee),s=ct(e,Le),{isBooted:i}=Te();if(!l||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const n=P(!1),h=S(()=>i.value&&(l.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function u(){!n.value||!l||(n.value=!1,l.transitionCount.value>0&&(l.transitionCount.value-=1,l.transitionCount.value===0&&(l.transitionHeight.value=void 0)))}function g(){var d;n.value||!l||(n.value=!0,l.transitionCount.value===0&&(l.transitionHeight.value=M((d=l.rootRef.value)==null?void 0:d.clientHeight)),l.transitionCount.value+=1)}function m(){u()}function y(d){n.value&&vt(()=>{!h.value||!n.value||!l||(l.transitionHeight.value=M(d.clientHeight))})}const f=S(()=>{const d=l.isReversed.value?e.reverseTransition:e.transition;return h.value?{name:typeof d!="string"?l.transition.value:d,onBeforeEnter:g,onAfterEnter:u,onEnterCancelled:m,onBeforeLeave:g,onAfterLeave:u,onLeaveCancelled:m,onEnter:y}:!1}),{hasContent:r}=dt(e,s.isSelected);return L(()=>o(ye,{transition:f.value,disabled:!i.value},{default:()=>{var d;return[te(o("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[r.value&&((d=t.default)==null?void 0:d.call(t))]),[[Ve,s.isSelected.value]])]}})),{groupItem:s}}});const Ae=Symbol.for("vuetify:v-tabs"),da=$({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...mt(ge({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Q=E()({name:"VTab",props:da(),setup(e,a){let{slots:t,attrs:l}=a;const{textColorClasses:s,textColorStyles:i}=be(e,"sliderColor"),n=I(),h=I(),u=S(()=>e.direction==="horizontal"),g=S(()=>{var y,f;return((f=(y=n.value)==null?void 0:y.group)==null?void 0:f.isSelected.value)??!1});function m(y){var r,d;let{value:f}=y;if(f){const _=(d=(r=n.value)==null?void 0:r.$el.parentElement)==null?void 0:d.querySelector(".v-tab--selected .v-tab__slider"),c=h.value;if(!_||!c)return;const v=getComputedStyle(_).color,V=_.getBoundingClientRect(),C=c.getBoundingClientRect(),b=u.value?"x":"y",w=u.value?"X":"Y",T=u.value?"right":"bottom",A=u.value?"width":"height",Re=V[b],Ne=C[b],Y=Re>Ne?V[T]-C[T]:V[b]-C[b],He=Math.sign(Y)>0?u.value?"right":"bottom":Math.sign(Y)<0?u.value?"left":"top":"center",Me=(Math.abs(Y)+(Math.sign(Y)<0?V[A]:C[A]))/Math.max(V[A],C[A])||0,Ye=V[A]/C[A]||0,ae=1.5;gt(c,{backgroundColor:[v,"currentcolor"],transform:[`translate${w}(${Y}px) scale${w}(${Ye})`,`translate${w}(${Y/ae}px) scale${w}(${(Me-1)/ae+1})`,"none"],transformOrigin:Array(3).fill(He)},{duration:225,easing:ht})}}return L(()=>{const y=N.filterProps(e);return o(N,H({symbol:Ae,ref:n,class:["v-tab",e.class],style:e.style,tabindex:g.value?0:-1,role:"tab","aria-selected":String(g.value),active:!1},y,l,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":m}),{...t,default:()=>{var f;return o(q,null,[((f=t.default)==null?void 0:f.call(t))??e.text,!e.hideSlider&&o("div",{ref:h,class:["v-tab__slider",s.value],style:i.value},null)])}})}),ft({},n)}});function va(e){return e?e.map(a=>Vt(a)?a:{text:a,value:a}):[]}const ma=$({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ut({mandatory:"force"}),...bt(),...j()},"VTabs"),fa=E()({name:"VTabs",props:ma(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const l=fe(e,"modelValue"),s=S(()=>va(e.items)),{densityClasses:i}=yt(e),{backgroundColorClasses:n,backgroundColorStyles:h}=ee(k(e,"bgColor"));return ve({VTab:{color:k(e,"color"),direction:k(e,"direction"),stacked:k(e,"stacked"),fixed:k(e,"fixedTabs"),sliderColor:k(e,"sliderColor"),hideSlider:k(e,"hideSlider")}}),L(()=>{const u=ne.filterProps(e);return o(ne,H(u,{modelValue:l.value,"onUpdate:modelValue":g=>l.value=g,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},i.value,n.value,e.class],style:[{"--v-tabs-height":M(e.height)},h.value,e.style],role:"tablist",symbol:Ae}),{default:()=>[t.default?t.default():s.value.map(g=>o(Q,H(g,{key:g.text}),null))]})}),{}}}),ga="/volleycourt-appointment-front/assets/logo-07-65cac9cb.png",ha=F("h1",{class:"text-center",style:{"letter-spacing":"8px"}},"註冊",-1),ba={__name:"RegisterComp",setup(e){const{api:a}=we(),t=Se(),l=_e(),s=Ce(),i=I(!1),n=()=>{i.value=!1,m()},h=At({account:G().required("帳號為必填欄位").min(4,"使用者帳號長度不符").max(12,"使用者帳號長度不符"),email:G().required("信箱為必填欄位").test("isEmail","信箱格式錯誤",c=>Et.isEmail(c)),password:G().required("密碼為必填欄位").min(4,"密碼長度不符").max(12,"密碼長度不符"),passwordConfirm:G().required("密碼為必填欄位").min(4,"密碼長度不符").max(12,"密碼長度不符").oneOf([Rt("password")],"密碼不一致")}),{handleSubmit:u,isSubmitting:g,resetForm:m}=Nt({validationSchema:h,initialValues:{account:"",email:"",password:"",passwordConfirm:""}}),y=O("account"),f=O("email"),r=O("password"),d=O("passwordConfirm"),_=u(async c=>{var v,V;try{await a.post("/users",{account:c.account,email:c.email,password:c.password}),s({text:"註冊成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}});const{data:C}=await a.post("/users/login",{email:c.email,password:c.password});t.login(C.result),l.push("/")}catch(C){console.log(C);const b=((V=(v=C==null?void 0:C.response)==null?void 0:v.data)==null?void 0:V.message)||"發生錯誤，請稍後再試";s({text:b,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}finally{n()}});return(c,v)=>(R(),X(Be,null,{default:x(()=>[o(Mt,null,{default:x(()=>[o(le,{cols:"12"},{default:x(()=>[ha]),_:1}),o(le,{cols:"12"},{default:x(()=>[o(Ht,{disabled:B(g),onSubmit:xt(B(_),["prevent"])},{default:x(()=>[o(D,{label:"帳號",minlength:"4",maxlength:"12",counter:"",modelValue:B(y).value.value,"onUpdate:modelValue":v[0]||(v[0]=V=>B(y).value.value=V),"error-messages":B(y).errorMessage.value,"prepend-icon":"mdi-account-outline",variant:"underlined"},null,8,["modelValue","error-messages"]),o(D,{label:"信箱",type:"email",modelValue:B(f).value.value,"onUpdate:modelValue":v[1]||(v[1]=V=>B(f).value.value=V),"error-messages":B(f).errorMessage.value,"prepend-icon":"mdi-email-outline",variant:"underlined"},null,8,["modelValue","error-messages"]),o(D,{label:"密碼",type:"password",minlength:"4",maxlength:"12",counter:"",modelValue:B(r).value.value,"onUpdate:modelValue":v[2]||(v[2]=V=>B(r).value.value=V),"error-messages":B(r).errorMessage.value,"prepend-icon":"mdi-lock-outline",variant:"underlined"},null,8,["modelValue","error-messages"]),o(D,{label:"確認密碼",type:"password",minlength:"4",maxlength:"12",counter:"",modelValue:B(d).value.value,"onUpdate:modelValue":v[3]||(v[3]=V=>B(d).value.value=V),"error-messages":B(d).errorMessage.value,"prepend-icon":"mdi-lock-outline",variant:"underlined"},null,8,["modelValue","error-messages"]),o(N,{type:"submit",color:"rgb(26, 108, 163)",class:"w-100 mt-8",rounded:"pill",variant:"flat",height:"2.5rem"},{default:x(()=>[W("註冊")]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}))}};const ya=e=>(Pt("data-v-a293e70a"),e=e(),$t(),e),Va={class:"drawer-btn-box"},xa={class:"d-flex justify-center mt-2 mb-4"},Sa={class:"d-flex justify-center mt-2 mb-4"},_a=ya(()=>F("img",{src:ga,alt:"一起來打排",class:"bar-logo"},null,-1)),Ca={__name:"FrontLayout",setup(e){const{apiAuth:a}=we(),t=Ce(),l=_e(),s=Se(),i=I(!1),n=I("login"),h=S(()=>[{to:"/about",text:"場館介紹",show:!0},{to:"/appointment",text:"預約報名",show:!0},{to:"/shop",text:"排球選物",show:!0},{to:"/cart",text:"購物車",icon:"mdi-cart",show:s.isLogin},{to:"/orders",text:"我的訂單",icon:"mdi-list",show:s.isLogin},{to:"/admin",text:"後台管理",show:s.isLogin&&s.isAdmin}]),u=I(!1),g=()=>{window.scrollY>64?u.value=!0:u.value=!1};window.addEventListener("scroll",g),me(()=>{window.removeEventListener("scroll",g)});const m=I(!1),y=async()=>{var f,r;try{await a.delete("/users/logout"),s.logout(),t({text:"登出成功",showCloseButton:!1,snackbarProps:{color:"success",timeout:2e3,location:"bottom"}}),l.push("/")}catch(d){console.log(d);const _=((r=(f=d==null?void 0:d.response)==null?void 0:f.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";t({text:_,showCloseButton:!1,snackbarProps:{color:"error",timeout:2e3,location:"top"}})}};return(f,r)=>{const d=oe("router-link"),_=oe("RouterView");return R(),K(q,null,[o(Yt,{modelValue:m.value,"onUpdate:modelValue":r[4]||(r[4]=c=>m.value=c),temporary:"",location:"right"},{default:x(()=>[F("div",Va,[o(N,{onClick:r[0]||(r[0]=c=>m.value=!1),class:"close-btn",icon:"mdi-close",size:"large"})]),o(Wt,{class:"v-list-centered"},{default:x(()=>[(R(!0),K(q,null,wt(h.value,c=>(R(),K(q,{key:c.to},[c.show?(R(),X(zt,{key:0,to:c.to,class:"d-flex align-center justify-center"},{default:x(()=>[o(Ft,{class:"list-title"},{default:x(()=>[W(It(c.text)+" ",1),c.to==="/cart"?(R(),X(Zt,{key:0,content:B(s).cart,color:"rgb(26, 108, 163)",inline:"",class:"badge"},null,8,["content"])):p("",!0)]),_:2},1024)]),_:2},1032,["to"])):p("",!0)],64))),128)),F("div",xa,[B(s).isLogin?p("",!0):(R(),X(N,{key:0,class:"d-flex align-center justify-center login"},{default:x(()=>[W("登入 "),o(Bt,{activator:"parent",modelValue:i.value,"onUpdate:modelValue":r[3]||(r[3]=c=>i.value=c),transition:"dialog-top-transition",width:"600"},{default:x(()=>[o(Tt,{rounded:"xl"},{default:x(()=>[o(fa,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=c=>n.value=c),color:"rgb(26, 108, 163)",class:"list-title","fixed-tabs":""},{default:x(()=>[o(Q,{value:"login"},{default:x(()=>[W("登入")]),_:1}),o(Q,{value:"register"},{default:x(()=>[W("註冊")]),_:1})]),_:1},8,["modelValue"]),o(kt,null,{default:x(()=>[o(ua,{modelValue:n.value,"onUpdate:modelValue":r[2]||(r[2]=c=>n.value=c)},{default:x(()=>[o(ie,{value:"login"},{default:x(()=>[o(Lt)]),_:1}),o(ie,{value:"register"},{default:x(()=>[o(ba)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))]),F("div",Sa,[B(s).isLogin?(R(),X(N,{key:0,onClick:y,class:"d-flex align-center justify-center logout"},{default:x(()=>[W(" 登出 ")]),_:1})):p("",!0)])]),_:1})]),_:1},8,["modelValue"]),o(Ot,{elevation:0,class:_t({navbar:u.value,"slide-down":u.value}),style:Ct({backgroundColor:u.value?"rgba(224, 236, 246, 1)":"rgba(224, 236, 246, 0)"})},{default:x(()=>[o(Be,{class:"d-flex align-center"},{default:x(()=>[o(d,{to:"/"},{default:x(()=>[o(Kt,null,{default:x(()=>[_a]),_:1})]),_:1})]),_:1}),o(Jt,{onClick:r[5]||(r[5]=c=>m.value=!0),class:"menu-btn"})]),_:1},8,["class","style"]),o(Xt,null,{default:x(()=>[(R(),X(_,{key:f.$route.path}))]),_:1})],64)}}},Na=St(Ca,[["__scopeId","data-v-a293e70a"]]);export{Na as default};