import{p as f,m,aV as B,a as E,f as A,g as P,Y as R,l as $,o as d,q as b,t as r,u as y,c as l,a0 as S,a1 as k,a3 as D,T as I,U as G,w as L,K as g,aW as j,h,_ as z,W,d as q,$ as F,e as K,a2 as N,j as O,k as U,Z as Y}from"./index-96cd8d79.js";const v=Symbol.for("vuetify:v-expansion-panel"),Z=["default","accordion","inset","popout"],H=f({color:String,static:Boolean,variant:{type:String,default:"default",validator:e=>Z.includes(e)},readonly:Boolean,...m(),...B(),...E(),...A()},"VExpansionPanels"),ae=P()({name:"VExpansionPanels",props:H(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;R(e,v);const{themeClasses:a}=$(e),i=d(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return b({VExpansionPanel:{color:r(e,"color"),readonly:r(e,"readonly"),static:r(e,"static")}}),y(()=>l(e.tag,{class:["v-expansion-panels",a.value,i.value,e.class],style:e.style},n)),{}}}),J=f({...m(),...S()},"VExpansionPanelText"),M=P()({name:"VExpansionPanelText",props:J(),setup(e,o){let{slots:n}=o;const a=k(v);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:u}=D(e,a.isSelected);return y(()=>l(L,{onAfterLeave:u},{default:()=>{var c;return[I(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&i.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(c=n.default)==null?void 0:c.call(n)])]),[[G,a.isSelected.value]])]}})),{}}}),C=f({color:String,expandIcon:{type:g,default:"$expand"},collapseIcon:{type:g,default:"$collapse"},hideActions:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...m()},"VExpansionPanelTitle"),Q=P()({name:"VExpansionPanelTitle",directives:{Ripple:j},props:C(),setup(e,o){let{slots:n}=o;const a=k(v);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:u}=h(e,"color"),c=d(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return y(()=>{var x;return I(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[u.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(x=n.default)==null?void 0:x.call(n,c.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(c.value):l(W,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[z("ripple"),e.ripple]])}),{}}}),X=f({title:String,text:String,bgColor:String,...m(),...q(),...F(),...S(),...K(),...E(),...C()},"VExpansionPanel"),ne=P()({name:"VExpansionPanel",props:X(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const a=N(e,v),{backgroundColorClasses:i,backgroundColorStyles:u}=h(e,"bgColor"),{elevationClasses:c}=O(e),{roundedClasses:x}=U(e),T=d(()=>(a==null?void 0:a.disabled.value)||e.disabled),V=d(()=>a.group.items.value.reduce((s,t,p)=>(a.group.selected.value.includes(t.id)&&s.push(p),s),[])),w=d(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&V.value.some(t=>t-s===1)}),_=d(()=>{const s=a.group.items.value.findIndex(t=>t.id===a.id);return!a.isSelected.value&&V.value.some(t=>t-s===-1)});return Y(v,a),b({VExpansionPanelText:{eager:r(e,"eager")},VExpansionPanelTitle:{readonly:r(e,"readonly")}}),y(()=>{const s=!!(n.text||e.text),t=!!(n.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":w.value,"v-expansion-panel--after-active":_.value,"v-expansion-panel--disabled":T.value},x.value,i.value,e.class],style:[u.value,e.style]},{default:()=>{var p;return[l("div",{class:["v-expansion-panel__shadow",...c.value]},null),t&&l(Q,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),s&&l(M,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(p=n.default)==null?void 0:p.call(n)]}})}),{}}});export{ae as V,ne as a,Q as b,M as c};