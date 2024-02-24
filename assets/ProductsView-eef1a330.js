import{p as de,b6 as ce,b7 as ve,g as me,b8 as fe,D as ge,b9 as pe,o as G,x as c,s as Ve,H as be,A as xe,z as A,B as ye,u as we,ba as he,bb as ae,bc as Ce,c as t,bd as ke,G as K,a5 as W,T as te,an as Pe,be as _e,bf as Fe,av as Se,at as X,bg as Ie,v as Be,y as Me,_ as Re,X as Ue,$ as Ae,a0 as le,a9 as oe,a2 as r,ai as Te,J as E,aa as T,aX as J,b5 as De,V as Ne,W as ze,ae as He,a8 as i,aW as $e,ac as Ge,aj as Ee,af as qe,ad as Oe,aR as je,aI as Le,ab as Ke,ag as We,ah as Xe,a6 as Je}from"./index-4a1cdd7c.js";import{c as Qe,b as Q,a as Ye,h as Ze}from"./index.esm-195823e1.js";import{u as ea,a as D,V as aa}from"./vee-validate.esm-6c95c78e.js";import{V as ta}from"./VContainer-c1daaa8b.js";import{V as q}from"./VCol-b6411722.js";import{V as la,a as oa,b as na}from"./VDataTableServer-96f38741.js";import{V as ne}from"./VRow-604b95f3.js";import"./VList-3e03e5c4.js";import"./ssrBoot-28964e8c.js";import"./VDivider-33185191.js";import"./VChip-23dc08c5.js";import"./VSlideGroup-6892352f.js";const sa=de({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ce(),...ve()},"VTextarea"),ra=me()({name:"VTextarea",directives:{Intersect:fe},inheritAttrs:!1,props:sa(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,B){let{attrs:P,emit:M,slots:m}=B;const d=ge(e,"modelValue"),{isFocused:w,focus:N,blur:z}=pe(e),O=G(()=>typeof e.counterValue=="function"?e.counterValue(d.value):(d.value||"").toString().length),j=G(()=>{if(P.maxlength)return P.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function R(n,v){var u,f;!e.autofocus||!n||(f=(u=v[0].target)==null?void 0:u.focus)==null||f.call(u)}const H=c(),b=c(),_=Ve(""),x=c(),S=G(()=>e.persistentPlaceholder||w.value||e.active);function h(){var n;x.value!==document.activeElement&&((n=x.value)==null||n.focus()),w.value||N()}function C(n){h(),M("click:control",n)}function $(n){M("mousedown:control",n)}function L(n){n.stopPropagation(),h(),X(()=>{d.value="",Ie(e["onClick:clear"],n)})}function U(n){var u;const v=n.target;if(d.value=v.value,(u=e.modelModifiers)!=null&&u.trim){const f=[v.selectionStart,v.selectionEnd];X(()=>{v.selectionStart=f[0],v.selectionEnd=f[1]})}}const p=c(),y=c(+e.rows),F=G(()=>["plain","underlined"].includes(e.variant));be(()=>{e.autoGrow||(y.value=+e.rows)});function k(){e.autoGrow&&X(()=>{if(!p.value||!b.value)return;const n=getComputedStyle(p.value),v=getComputedStyle(b.value.$el),u=parseFloat(n.getPropertyValue("--v-field-padding-top"))+parseFloat(n.getPropertyValue("--v-input-padding-top"))+parseFloat(n.getPropertyValue("--v-field-padding-bottom")),f=p.value.scrollHeight,s=parseFloat(n.lineHeight),l=Math.max(parseFloat(e.rows)*s+u,parseFloat(v.getPropertyValue("--v-input-control-height"))),V=parseFloat(e.maxRows)*s+u||1/0,a=Me(f??0,l,V);y.value=Math.floor((a-u)/s),_.value=Be(a)})}xe(k),A(d,k),A(()=>e.rows,k),A(()=>e.maxRows,k),A(()=>e.density,k);let g;return A(p,n=>{n?(g=new ResizeObserver(k),g.observe(p.value)):g==null||g.disconnect()}),ye(()=>{g==null||g.disconnect()}),we(()=>{const n=!!(m.counter||e.counter||e.counterValue),v=!!(n||m.details),[u,f]=he(P),{modelValue:s,...l}=ae.filterProps(e),V=Ce(e);return t(ae,K({ref:H,modelValue:d.value,"onUpdate:modelValue":a=>d.value=a,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":F.value},e.class],style:e.style},u,l,{centerAffix:y.value===1&&!F.value,focused:w.value}),{...m,default:a=>{let{id:o,isDisabled:I,isDirty:Y,isReadonly:se,isValid:re}=a;return t(ke,K({ref:b,style:{"--v-textarea-control-height":_.value},onClick:C,onMousedown:$,"onClick:clear":L,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},V,{id:o.value,active:S.value||Y.value,centerAffix:y.value===1&&!F.value,dirty:Y.value||e.dirty,disabled:I.value,focused:w.value,error:re.value===!1}),{...m,default:ue=>{let{props:{class:Z,...ee}}=ue;return t(W,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),te(t("textarea",K({ref:x,class:Z,value:d.value,onInput:U,autofocus:e.autofocus,readonly:se.value,disabled:I.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:h,onBlur:z},ee,f),null),[[Pe("intersect"),{handler:R},null,{once:!0}]]),e.autoGrow&&te(t("textarea",{class:[Z,"v-textarea__sizer"],id:`${ee.id}-sizer`,"onUpdate:modelValue":ie=>d.value=ie,ref:p,readonly:!0,"aria-hidden":"true"},null),[[_e,d.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:v?a=>{var o;return t(W,null,[(o=m.details)==null?void 0:o.call(m,a),n&&t(W,null,[t("span",null,null),t(Fe,{active:e.persistentCounter||w.value,value:O.value,max:j.value},m.counter)])])}:void 0})}),Se({},H,b,x)}});const ua=e=>(We("data-v-3f7a5b70"),e=e(),Xe(),e),ia=ua(()=>Je("h1",{class:"text-center mt-4"},"商品管理",-1)),da={__name:"ProductsView",setup(e){const{apiAuth:B}=Te(),P=Ue(),M=c(null),m=c(!1),d=c(""),w=s=>{console.log('點擊"新增商品"'),s?(d.value=s._id,b.value.value=s.name,_.value.value=s.price,x.value.value=s.description,S.value.value=s.category,h.value.value=s.sell):d.value="",m.value=!0},N=()=>{m.value=!1,H(),M.value.deleteFileRecord()},z=["排球衣","排球褲","排球襪","排球鞋","球具","配件"],O=Qe({name:Q().required("缺少商品名稱"),price:Ye().typeError("商品價格格式錯誤").required("缺少商品價格").min(0,"商品價格不能小於 0"),description:Q().required("缺少商品說明"),category:Q().required("缺少商品分類").test("isCategory","商品分類錯誤",s=>z.includes(s)),sell:Ze()}),{handleSubmit:j,isSubmitting:R,resetForm:H}=ea({validationSchema:O,initialValues:{name:"",price:0,description:"",category:"",sell:!1}}),b=D("name"),_=D("price"),x=D("description"),S=D("category"),h=D("sell"),C=c([]),$=c([]),L=j(async s=>{var l,V,a;if(!((l=C.value[0])!=null&&l.error)&&!(d.value===""&&C.value.length===0))try{const o=new FormData;o.append("name",s.name),o.append("price",s.price),o.append("description",s.description),o.append("category",s.category),o.append("sell",s.sell),C.value.length>0&&o.append("image",C.value[0].file),d.value===""?await B.post("/products",o):await B.patch("/products/"+d.value,o),P({text:d.value===""?"新增成功":"編輯成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),N(),f()}catch(o){console.log(o);const I=((a=(V=o==null?void 0:o.response)==null?void 0:V.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";P({text:I,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),U=c(10),p=c([{key:"createdAt",order:"desc"}]),y=c(1),F=c([]),k=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"left",sortable:!0,key:"name"},{title:"價格",align:"center",sortable:!0,key:"price"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],g=c(!0),n=c(0),v=c(""),u=async()=>{var s,l,V,a;g.value=!0;try{const{data:o}=await B.get("/products/all",{params:{page:y.value,itemsPerPage:U.value,sortBy:((s=p.value[0])==null?void 0:s.key)||"createdAt",sortOrder:((l=p.value[0])==null?void 0:l.order)==="asc"?1:-1,search:v.value}});F.value.splice(0,F.value.length,...o.result.data),n.value=o.result.total}catch(o){console.log(o);const I=((a=(V=o==null?void 0:o.response)==null?void 0:V.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";P({text:I,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}g.value=!1};u();const f=()=>{y.value=1,u()};return(s,l)=>{const V=Ae("vue-file-agent");return le(),oe(ta,null,{default:r(()=>[t(ne,{class:"row"},{default:r(()=>[t(q,{cols:"12"},{default:r(()=>[ia]),_:1}),t(q,{cols:"12"},{default:r(()=>[t(la,{"items-per-page":U.value,"onUpdate:itemsPerPage":[l[2]||(l[2]=a=>U.value=a),u],"sort-by":p.value,"onUpdate:sortBy":[l[3]||(l[3]=a=>p.value=a),u],page:y.value,"onUpdate:page":[l[4]||(l[4]=a=>y.value=a),u],items:F.value,headers:k,loading:g.value,"items-length":n.value,search:v.value,hover:""},{top:r(()=>[t(ne,null,{default:r(()=>[t(q,{cols:"3",xl:"2",md:"2",sm:"4"},{default:r(()=>[t(E,{"prepend-icon":"mdi-plus",color:"#1565C0",height:"40",rounded:"xl",block:"",class:"mt-3",onClick:l[0]||(l[0]=a=>w())},{default:r(()=>[T("新增商品")]),_:1})]),_:1}),t(q,{cols:"9",xl:"10",md:"10",sm:"8"},{default:r(()=>[t(J,{label:"搜尋","append-icon":"mdi-magnify",modelValue:v.value,"onUpdate:modelValue":l[1]||(l[1]=a=>v.value=a),variant:"underlined","onClick:append":f,onKeydown:De(f,["enter"])},null,8,["modelValue"])]),_:1})]),_:1})]),"item.image":r(({item:a})=>[t(Ne,{src:a.image,height:"60px"},null,8,["src"])]),"item.sell":r(({item:a})=>[a.sell?(le(),oe(ze,{key:0},{default:r(()=>[T("mdi-check")]),_:1})):He("",!0)]),"item.edit":r(({item:a})=>[t(E,{icon:"mdi-pencil",variant:"text",color:"#1565C0",onClick:o=>w(a)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1}),t(Ke,{modelValue:m.value,"onUpdate:modelValue":l[12]||(l[12]=a=>m.value=a),persistent:"",width:"600px"},{default:r(()=>[t(aa,{disabled:i(R),onSubmit:$e(i(L),["prevent"])},{default:r(()=>[t(Ge,null,{default:r(()=>[t(Ee,null,{default:r(()=>[T(qe(d.value===""?"新增商品":"編輯商品"),1)]),_:1}),t(Oe,null,{default:r(()=>[t(J,{label:"名稱",modelValue:i(b).value.value,"onUpdate:modelValue":l[5]||(l[5]=a=>i(b).value.value=a),"error-messages":i(b).errorMessage.value},null,8,["modelValue","error-messages"]),t(J,{label:"價格",type:"number",min:"0",modelValue:i(_).value.value,"onUpdate:modelValue":l[6]||(l[6]=a=>i(_).value.value=a),"error-messages":i(_).errorMessage.value},null,8,["modelValue","error-messages"]),t(oa,{label:"分類",items:z,modelValue:i(S).value.value,"onUpdate:modelValue":l[7]||(l[7]=a=>i(S).value.value=a),"error-messages":i(S).errorMessage.value},null,8,["modelValue","error-messages"]),t(na,{label:"上架",modelValue:i(h).value.value,"onUpdate:modelValue":l[8]||(l[8]=a=>i(h).value.value=a),"error-messages":i(h).errorMessage.value},null,8,["modelValue","error-messages"]),t(ra,{label:"說明",modelValue:i(x).value.value,"onUpdate:modelValue":l[9]||(l[9]=a=>i(x).value.value=a),"error-messages":i(x).errorMessage.value},null,8,["modelValue","error-messages"]),t(V,{modelValue:C.value,"onUpdate:modelValue":l[10]||(l[10]=a=>C.value=a),rawModelValue:$.value,"onUpdate:rawModelValue":l[11]||(l[11]=a=>$.value=a),accept:"image/jpeg,image/png",deletable:"","error-text":{type:"檔案格式不支援",size:"檔案超過 1MB 大小限制"},"help-text":"選擇檔案或拖曳到這裡","max-files":1,"max-size":"1MB",ref_key:"fileAgent",ref:M},null,8,["modelValue","rawModelValue"])]),_:1}),t(je,null,{default:r(()=>[t(Le),t(E,{color:"red",disabled:i(R),onClick:N},{default:r(()=>[T("取消")]),_:1},8,["disabled"]),t(E,{color:"green",type:"submit",loading:i(R)},{default:r(()=>[T("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])]),_:1})}}},Ca=Re(da,[["__scopeId","data-v-3f7a5b70"]]);export{Ca as default};