import{_ as te}from"./RegisterComp-fdfaad26.js";import{_ as ae}from"./LoginComp-367413b3.js";import{p as T,m as M,a as Y,g as k,u as w,c as a,b as le,d as oe,e as O,f as G,h as J,t as L,i as se,j as ne,k as K,l as re,n as ie,s as p,o as y,q as ue,V as ce,r as D,v as R,w as de,x as B,y as ve,z as E,A as me,B as ge,C as fe,D as be,E as he,F as Ve,G as A,H as ye,I as _e,J as U,K as xe,L as Se,M as pe,N as Be,O as Te,P as ke,Q as we,R as Ce,S as Ie,T as Ne,U as Pe,W as Le,_ as Ae,X as Re,Y as Ee,Z as $e,$ as He,a0 as S,a1 as F,a2 as v,a3 as Ue,a4 as De,a5 as j,a6 as P,a7 as Fe,a8 as z,a9 as $,aa as N,ab as je,ac as ze,ad as Me,ae as H,af as Ye,ag as We,ah as Xe,ai as qe}from"./index-4a1cdd7c.js";import{V as Oe,a as Ge}from"./VNavigationDrawer-3ffb8b4f.js";import{u as Je}from"./ssrBoot-28964e8c.js";import{V as Ke,a as Qe,b as Ze}from"./VList-3e03e5c4.js";import{V as et,a as W,b as tt,c as X}from"./VTabs-74376421.js";import{V as at}from"./VContainer-c1daaa8b.js";import"./index-cc3d218e.js";import"./index.esm-195823e1.js";import"./vee-validate.esm-6c95c78e.js";import"./VRow-604b95f3.js";import"./VCol-b6411722.js";import"./VDivider-33185191.js";import"./VSlideGroup-6892352f.js";const Q=T({text:String,...M(),...Y()},"VToolbarTitle"),Z=k()({name:"VToolbarTitle",props:Q(),setup(e,d){let{slots:t}=d;return w(()=>{const f=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var r;return[f&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(r=t.default)==null?void 0:r.call(t)])]}})}),{}}}),lt=[null,"prominent","default","comfortable","compact"],ee=T({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>lt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...le(),...M(),...oe(),...O(),...Y({tag:"header"}),...G()},"VToolbar"),q=k()({name:"VToolbar",props:ee(),setup(e,d){var i;let{slots:t}=d;const{backgroundColorClasses:f,backgroundColorStyles:r}=J(L(e,"color")),{borderClasses:o}=se(e),{elevationClasses:c}=ne(e),{roundedClasses:m}=K(e),{themeClasses:_}=re(e),{rtlClasses:h}=ie(),n=p(!!(e.extended||(i=t.extension)!=null&&i.call(t))),b=y(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),V=y(()=>n.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ue({VBtn:{variant:"text"}}),w(()=>{var u;const l=!!(e.title||t.title),g=!!(t.image||e.image),s=(u=t.extension)==null?void 0:u.call(t);return n.value=!!(e.extended||s),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},f.value,o.value,c.value,m.value,_.value,h.value,e.class],style:[r.value,e.style]},{default:()=>[g&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(D,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(ce,{key:"image-img",cover:!0,src:e.image},null)]),a(D,{defaults:{VTabs:{height:R(b.value)}}},{default:()=>{var x,C,I;return[a("div",{class:"v-toolbar__content",style:{height:R(b.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(x=t.prepend)==null?void 0:x.call(t)]),l&&a(Z,{key:"title",text:e.title},{text:t.title}),(C=t.default)==null?void 0:C.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(I=t.append)==null?void 0:I.call(t)])])]}}),a(D,{defaults:{VTabs:{height:R(V.value)}}},{default:()=>[a(de,null,{default:()=>[n.value&&a("div",{class:"v-toolbar__extension",style:{height:R(V.value)}},[s])]})]})]})}),{contentHeight:b,extensionHeight:V}}}),ot=T({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function st(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=d;let f=0;const r=B(null),o=p(0),c=p(0),m=p(0),_=p(!1),h=p(!1),n=y(()=>Number(e.scrollThreshold)),b=y(()=>ve((n.value-o.value)/n.value||0)),V=()=>{const i=r.value;!i||t&&!t.value||(f=o.value,o.value="window"in i?i.pageYOffset:i.scrollTop,h.value=o.value<f,m.value=Math.abs(o.value-n.value))};return E(h,()=>{c.value=c.value||o.value}),E(_,()=>{c.value=0}),me(()=>{E(()=>e.scrollTarget,i=>{var g;const l=i?document.querySelector(i):window;l&&l!==r.value&&((g=r.value)==null||g.removeEventListener("scroll",V),r.value=l,r.value.addEventListener("scroll",V,{passive:!0}))},{immediate:!0})}),ge(()=>{var i;(i=r.value)==null||i.removeEventListener("scroll",V)}),t&&E(t,V,{immediate:!0}),{scrollThreshold:n,currentScroll:o,currentThreshold:m,isScrollActive:_,scrollRatio:b,isScrollingUp:h,savedScroll:c}}const nt=T({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ee(),...fe(),...ot(),height:{type:[Number,String],default:64}},"VAppBar"),rt=k()({name:"VAppBar",props:nt(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const f=B(),r=be(e,"modelValue"),o=y(()=>{var x;const u=new Set(((x=e.scrollBehavior)==null?void 0:x.split(" "))??[]);return{hide:u.has("hide"),inverted:u.has("inverted"),collapse:u.has("collapse"),elevate:u.has("elevate"),fadeImage:u.has("fade-image")}}),c=y(()=>{const u=o.value;return u.hide||u.inverted||u.collapse||u.elevate||u.fadeImage||!r.value}),{currentScroll:m,scrollThreshold:_,isScrollingUp:h,scrollRatio:n}=st(e,{canScroll:c}),b=y(()=>e.collapse||o.value.collapse&&(o.value.inverted?n.value>0:n.value===0)),V=y(()=>e.flat||o.value.elevate&&(o.value.inverted?m.value>0:m.value===0)),i=y(()=>o.value.fadeImage?o.value.inverted?1-n.value:n.value:void 0),l=y(()=>{var C,I;if(o.value.hide&&o.value.inverted)return 0;const u=((C=f.value)==null?void 0:C.contentHeight)??0,x=((I=f.value)==null?void 0:I.extensionHeight)??0;return u+x});he(y(()=>!!e.scrollBehavior),()=>{ye(()=>{o.value.hide?o.value.inverted?r.value=m.value>_.value:r.value=h.value||m.value<_.value:r.value=!0})});const{ssrBootStyles:g}=Je(),{layoutItemStyles:s}=Ve({id:e.name,order:y(()=>parseInt(e.order,10)),position:L(e,"location"),layoutSize:l,elementSize:p(void 0),active:r,absolute:L(e,"absolute")});return w(()=>{const u=q.filterProps(e);return a(q,A({ref:f,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...s.value,"--v-toolbar-image-opacity":i.value,height:void 0,...g.value},e.style]},u,{collapse:b.value,flat:V.value}),t)}),{}}}),it=T({..._e({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),ut=k()({name:"VAppBarNavIcon",props:it(),setup(e,d){let{slots:t}=d;return w(()=>a(U,A(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),ct=k()({name:"VAppBarTitle",props:Q(),setup(e,d){let{slots:t}=d;return w(()=>a(Z,A(e,{class:"v-app-bar-title"}),t)),{}}});const dt=T({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:xe,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...M(),...Se({location:"top end"}),...O(),...Y(),...G(),...pe({transition:"scale-rotate-transition"})},"VBadge"),vt=k()({name:"VBadge",inheritAttrs:!1,props:dt(),setup(e,d){const{backgroundColorClasses:t,backgroundColorStyles:f}=J(L(e,"color")),{roundedClasses:r}=K(e),{t:o}=Be(),{textColorClasses:c,textColorStyles:m}=Te(L(e,"textColor")),{themeClasses:_}=ke(),{locationStyles:h}=we(e,!0,n=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(n)?+(e.offsetY??0):["left","right"].includes(n)?+(e.offsetX??0):0));return w(()=>{const n=Number(e.content),b=!e.max||isNaN(n)?e.content:n<=+e.max?n:`${e.max}+`,[V,i]=Ce(d.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,A({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},i,{style:e.style}),{default:()=>{var l,g;return[a("div",{class:"v-badge__wrapper"},[(g=(l=d.slots).default)==null?void 0:g.call(l),a(Ie,{transition:e.transition},{default:()=>{var s,u;return[Ne(a("span",A({class:["v-badge__badge",_.value,t.value,r.value,c.value],style:[f.value,m.value,e.inline?{}:h.value],"aria-atomic":"true","aria-label":o(e.label,n),"aria-live":"polite",role:"status"},V),[e.dot?void 0:d.slots.badge?(u=(s=d.slots).badge)==null?void 0:u.call(s):e.icon?a(Le,{icon:e.icon},null):b]),[[Pe,e.modelValue]])]}})])]}})}),{}}}),mt="/volleycourt-appointment-front/assets/logo-05-404fdc65.png";const gt=e=>(We("data-v-99bcb77f"),e=e(),Xe(),e),ft={class:"drawer-btn-box"},bt={class:"d-flex justify-center mt-2 mb-4"},ht={class:"d-flex justify-center mt-2 mb-4"},Vt=gt(()=>P("img",{src:mt,alt:"一起來打排",style:{height:"40px"}},null,-1)),yt={__name:"FrontLayout",setup(e){const d=B(!1),{apiAuth:t}=qe(),f=Re(),r=Ee(),o=()=>{r.push("/")},c=$e(),m=B("login"),_=y(()=>[{to:"/about",text:"場館介紹",show:!0},{to:"/news",text:"最新消息",show:!0},{to:"/appointment",text:"預約報名",show:!0},{to:"/myappointment",text:"我的預約",show:c.isLogin},{to:"/shop",text:"排球選物",show:c.isLogin},{to:"/cart",text:"購物車",icon:"mdi-cart",show:c.isLogin},{to:"/admin",text:"後台管理",show:c.isLogin&&c.isAdmin}]),h=B(!1),n=()=>{window.scrollY>100?h.value=!0:h.value=!1};window.addEventListener("scroll",n);const b=B(!1),V=async()=>{var i,l;try{await t.delete("/users/logout"),c.logout(),f({text:"登出成功",showCloseButton:!1,snackbarProps:{color:"success",timeout:2e3,location:"bottom"}}),r.push("/")}catch(g){console.log(g);const s=((l=(i=g==null?void 0:g.response)==null?void 0:i.data)==null?void 0:l.message)||"發生錯誤，請稍後再試";f({text:s,showCloseButton:!1,snackbarProps:{color:"error",timeout:2e3,location:"top"}})}};return(i,l)=>{const g=He("RouterView");return S(),F(j,null,[a(Oe,{modelValue:b.value,"onUpdate:modelValue":l[4]||(l[4]=s=>b.value=s),temporary:"",location:"right"},{default:v(()=>[P("div",ft,[a(U,{onClick:l[0]||(l[0]=s=>b.value=!1),class:"close-btn",icon:"mdi-close",size:"large"})]),a(Ke,{class:"v-list-centered"},{default:v(()=>[(S(!0),F(j,null,Fe(_.value,s=>(S(),F(j,{key:s.to},[s.show?(S(),$(Qe,{key:0,to:s.to,class:"d-flex align-center justify-center"},{default:v(()=>[a(Ze,{class:"list-title"},{default:v(()=>[N(Ye(s.text)+" ",1),s.to==="/cart"?(S(),$(vt,{key:0,content:z(c).cart,color:"rgb(26, 108, 163)",inline:"",class:"badge"},null,8,["content"])):H("",!0)]),_:2},1024)]),_:2},1032,["to"])):H("",!0)],64))),128)),P("div",bt,[z(c).isLogin?H("",!0):(S(),$(U,{key:0,class:"d-flex align-center justify-center login"},{default:v(()=>[N("登入 "),a(je,{activator:"parent",modelValue:d.value,"onUpdate:modelValue":l[3]||(l[3]=s=>d.value=s),transition:"dialog-top-transition",width:"600"},{default:v(()=>[a(ze,null,{default:v(()=>[a(et,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=s=>m.value=s),color:"rgb(26, 108, 163)",class:"list-title","fixed-tabs":""},{default:v(()=>[a(W,{value:"login"},{default:v(()=>[N("登入")]),_:1}),a(W,{value:"register"},{default:v(()=>[N("註冊")]),_:1})]),_:1},8,["modelValue"]),a(Me,null,{default:v(()=>[a(tt,{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=s=>m.value=s)},{default:v(()=>[a(X,{value:"login"},{default:v(()=>[a(ae)]),_:1}),a(X,{value:"register"},{default:v(()=>[a(te)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))]),P("div",ht,[z(c).isLogin?(S(),$(U,{key:0,onClick:V,class:"d-flex align-center justify-center logout"},{default:v(()=>[N(" 登出 ")]),_:1})):H("",!0)])]),_:1})]),_:1},8,["modelValue"]),a(rt,{elevation:0,class:Ue({navbar:h.value}),style:De({backgroundColor:h.value?"rgba(224, 236, 246, 1)":"rgba(224, 236, 246, 0)"})},{default:v(()=>[a(at,{class:"d-flex align-center"},{default:v(()=>[P("a",{onClick:o},[a(ct,null,{default:v(()=>[Vt]),_:1})])]),_:1}),a(ut,{onClick:l[5]||(l[5]=s=>b.value=!0),class:"menu-btn"})]),_:1},8,["class","style"]),a(Ge,null,{default:v(()=>[a(g)]),_:1})],64)}}},Et=Ae(yt,[["__scopeId","data-v-99bcb77f"]]);export{Et as default};