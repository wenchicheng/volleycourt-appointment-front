import{ak as z,p as I,m as G,a as A,f as Q,g as _,l as Z,n as p,N as ee,al as te,x as P,o as g,s as Y,z as ne,am as oe,c as f,J as E,u as X,T as L,an as ae,ao as se,ap as ie,aq as le,ar as ue,as as ce,U as re,S as de,v as R,at as ve,au as fe,I as he,O as me,a5 as ge,G as H,av as be,aw as ye,ax as xe,ay as Se,D as Ce,az as Te,h as Ve,t as T,q as ke,aA as Be}from"./index-ac92b338.js";import{u as $e}from"./ssrBoot-e899d526.js";import{m as we,V as M}from"./VSlideGroup-b4750afb.js";const Pe=e=>{const{touchstartX:n,touchendX:t,touchstartY:o,touchendY:s}=e,u=.5,a=16;e.offsetX=t-n,e.offsetY=s-o,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<n-a&&e.left(e),e.right&&t>n+a&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&s<o-a&&e.up(e),e.down&&s>o+a&&e.down(e))};function Ee(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function Ie(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),Pe(n)}function _e(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function Xe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ee(t,n),touchend:t=>Ie(t,n),touchmove:t=>_e(t,n)}}function Ye(e,n){var d;const t=n.value,o=t!=null&&t.parent?e.parentElement:e,s=(t==null?void 0:t.options)??{passive:!0},u=(d=n.instance)==null?void 0:d.$.uid;if(!o||!u)return;const a=Xe(n.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[u]=a,z(a).forEach(i=>{o.addEventListener(i,a[i],s)})}function Re(e,n){var u,a;const t=(u=n.value)!=null&&u.parent?e.parentElement:e,o=(a=n.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!o)return;const s=t._touchHandlers[o];z(s).forEach(d=>{t.removeEventListener(d,s[d])}),delete t._touchHandlers[o]}const O={mounted:Ye,unmounted:Re},He=O,D=Symbol.for("vuetify:v-window"),j=Symbol.for("vuetify:v-window-group"),We=I({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...G(),...A(),...Q()},"VWindow"),qe=_()({name:"VWindow",directives:{Touch:O},props:We(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=Z(e),{isRtl:s}=p(),{t:u}=ee(),a=te(e,j),d=P(),i=g(()=>s.value?!e.reverse:e.reverse),c=Y(!1),V=g(()=>{const l=e.direction==="vertical"?"y":"x",m=(i.value?!c.value:c.value)?"-reverse":"";return`v-window-${l}${m}-transition`}),b=Y(0),h=P(void 0),x=g(()=>a.items.value.findIndex(l=>a.selected.value.includes(l.id)));ne(x,(l,r)=>{const m=a.items.value.length,y=m-1;m<=2?c.value=l<r:l===y&&r===0?c.value=!0:l===0&&r===y?c.value=!1:c.value=l<r}),oe(D,{transition:V,isReversed:c,transitionCount:b,transitionHeight:h,rootRef:d});const v=g(()=>e.continuous||x.value!==0),k=g(()=>e.continuous||x.value!==a.items.value.length-1);function B(){v.value&&a.prev()}function w(){k.value&&a.next()}const S=g(()=>{const l=[],r={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${i.value?"right":"left"}`,onClick:a.prev,"aria-label":u("$vuetify.carousel.prev")};l.push(v.value?t.prev?t.prev({props:r}):f(E,r,null):f("div",null,null));const m={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${i.value?"left":"right"}`,onClick:a.next,"aria-label":u("$vuetify.carousel.next")};return l.push(k.value?t.next?t.next({props:m}):f(E,m,null):f("div",null,null)),l}),C=g(()=>e.touch===!1?e.touch:{...{left:()=>{i.value?B():w()},right:()=>{i.value?w():B()},start:r=>{let{originalEvent:m}=r;m.stopPropagation()}},...e.touch===!0?{}:e.touch});return X(()=>L(f(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var l,r;return[f("div",{class:"v-window__container",style:{height:h.value}},[(l=t.default)==null?void 0:l.call(t,{group:a}),e.showArrows!==!1&&f("div",{class:"v-window__controls"},[S.value])]),(r=t.additional)==null?void 0:r.call(t,{group:a})]}}),[[ae("touch"),C.value]])),{group:a}}}),Me=I({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...G(),...se(),...ie()},"VWindowItem"),Ue=_()({name:"VWindowItem",directives:{Touch:He},props:Me(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const o=le(D),s=ue(e,j),{isBooted:u}=$e();if(!o||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=Y(!1),d=g(()=>u.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function i(){!a.value||!o||(a.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function c(){var v;a.value||!o||(a.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=R((v=o.rootRef.value)==null?void 0:v.clientHeight)),o.transitionCount.value+=1)}function V(){i()}function b(v){a.value&&ve(()=>{!d.value||!a.value||!o||(o.transitionHeight.value=R(v.clientHeight))})}const h=g(()=>{const v=o.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof v!="string"?o.transition.value:v,onBeforeEnter:c,onAfterEnter:i,onEnterCancelled:V,onBeforeLeave:c,onAfterLeave:i,onLeaveCancelled:V,onEnter:b}:!1}),{hasContent:x}=ce(e,s.isSelected);return X(()=>f(de,{transition:h.value,disabled:!u.value},{default:()=>{var v;return[L(f("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[x.value&&((v=t.default)==null?void 0:v.call(t))]),[[re,s.isSelected.value]])]}})),{groupItem:s}}});const F=Symbol.for("vuetify:v-tabs"),ze=I({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...fe(he({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Ge=_()({name:"VTab",props:ze(),setup(e,n){let{slots:t,attrs:o}=n;const{textColorClasses:s,textColorStyles:u}=me(e,"sliderColor"),a=P(),d=P(),i=g(()=>e.direction==="horizontal"),c=g(()=>{var b,h;return((h=(b=a.value)==null?void 0:b.group)==null?void 0:h.isSelected.value)??!1});function V(b){var x,v;let{value:h}=b;if(h){const k=(v=(x=a.value)==null?void 0:x.$el.parentElement)==null?void 0:v.querySelector(".v-tab--selected .v-tab__slider"),B=d.value;if(!k||!B)return;const w=getComputedStyle(k).color,S=k.getBoundingClientRect(),C=B.getBoundingClientRect(),l=i.value?"x":"y",r=i.value?"X":"Y",m=i.value?"right":"bottom",y=i.value?"width":"height",q=S[l],U=C[l],$=q>U?S[m]-C[m]:S[l]-C[l],J=Math.sign($)>0?i.value?"right":"bottom":Math.sign($)<0?i.value?"left":"top":"center",N=(Math.abs($)+(Math.sign($)<0?S[y]:C[y]))/Math.max(S[y],C[y])||0,K=S[y]/C[y]||0,W=1.5;ye(B,{backgroundColor:[w,"currentcolor"],transform:[`translate${r}(${$}px) scale${r}(${K})`,`translate${r}(${$/W}px) scale${r}(${(N-1)/W+1})`,"none"],transformOrigin:Array(3).fill(J)},{duration:225,easing:xe})}}return X(()=>{const b=E.filterProps(e);return f(E,H({symbol:F,ref:a,class:["v-tab",e.class],style:e.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1},b,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":V}),{...t,default:()=>{var h;return f(ge,null,[((h=t.default)==null?void 0:h.call(t))??e.text,!e.hideSlider&&f("div",{ref:d,class:["v-tab__slider",s.value],style:u.value},null)])}})}),be({},a)}});function Ae(e){return e?e.map(n=>Be(n)?n:{text:n,value:n}):[]}const Le=I({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...we({mandatory:"force"}),...Se(),...A()},"VTabs"),Je=_()({name:"VTabs",props:Le(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=Ce(e,"modelValue"),s=g(()=>Ae(e.items)),{densityClasses:u}=Te(e),{backgroundColorClasses:a,backgroundColorStyles:d}=Ve(T(e,"bgColor"));return ke({VTab:{color:T(e,"color"),direction:T(e,"direction"),stacked:T(e,"stacked"),fixed:T(e,"fixedTabs"),sliderColor:T(e,"sliderColor"),hideSlider:T(e,"hideSlider")}}),X(()=>{const i=M.filterProps(e);return f(M,H(i,{modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},u.value,a.value,e.class],style:[{"--v-tabs-height":R(e.height)},d.value,e.style],role:"tablist",symbol:F}),{default:()=>[t.default?t.default():s.value.map(c=>f(Ge,H(c,{key:c.text}),null))]})}),{}}});export{Je as V,Ge as a,qe as b,Ue as c};
