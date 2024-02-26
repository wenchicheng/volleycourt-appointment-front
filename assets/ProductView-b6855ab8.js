import{an as P,aX as F,ad as I,ae as j,ao as z,x as A,A as M,af as $,aq as N,al as i,c as a,ah as s,as as R,aY as W,a6 as E,am as T,ay as p,V as U,ai as n,aZ as D,aj as J,J as g,ak as v,az as L,aA as O}from"./index-ba7555f4.js";import{u as X,a as Y,V as Z}from"./vee-validate.esm-9d16f84f.js";import{c as G,d as H}from"./index.esm-d18b5ff5.js";import{V as K}from"./VContainer-12f8ddbd.js";import{V as b}from"./VRow-c2508589.js";import{V as u}from"./VCol-6337e4b1.js";const y=c=>(L("data-v-dd2ba772"),c=c(),O(),c),Q=y(()=>i("div",{class:"top-block"},null,-1)),ee={style:{border:"2px solid rgb(4, 0, 255)"}},te={style:{color:"rgb(26, 108, 163)"}},ae={class:"mask d-flex justify-center align-center"},se={style:{"white-space":"pre"}},oe=y(()=>i("h1",{class:"text-white text-h1 font-weight-medium"},"已下架",-1)),le={__name:"ProductView",setup(c){const V=F(),_=I(),{api:x,apiAuth:w}=T(),d=j(),f=z(),t=A({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""}),S=G({quantity:H().typeError("格式錯誤 或 缺少數量").required("缺少數量").min(1,"數量最小為 1")}),{isSubmitting:h,handleSubmit:k}=X({validationSchema:S,initialValues:{quantity:1}}),m=Y("quantity"),q=k(async o=>{var l,e;if(!f.isLogin){_.push("/login");return}try{const{data:r}=await w.patch("/users/cart",{product:t.value._id,quantity:o.quantity});f.cart=r.result,d({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(r){const C=((e=(l=r==null?void 0:r.response)==null?void 0:l.data)==null?void 0:e.message)||"發生錯誤，請稍後再試";d({text:C,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});M(async()=>{var o,l;try{const{data:e}=await x.get("/products/"+V.params.id);t.value._id=e.result._id,t.value.name=e.result.name,t.value.price=e.result.price,t.value.description=e.result.description,t.value.image=e.result.image,t.value.sell=e.result.sell,t.value.category=e.result.category,document.title=`購物網 | ${t.value.name}`}catch(e){const r=((l=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:l.message)||"發生錯誤，請稍後再試";d({text:r,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}}),_.push("/")}});const B=()=>{const o=window.innerWidth;return o>=1200?"70%":o>=960?"80%":o>=600?"85%":"90%"};return(o,l)=>($(),N(E,null,[Q,i("div",ee,[a(K,{class:"h-100 d-flex justify-center align-center",style:R([{width:B()},{border:"2px solid #bc3636"}])},{default:s(()=>[a(b,null,{default:s(()=>[a(u,{cols:"12"},{default:s(()=>[i("h1",te,p(t.value.name),1)]),_:1}),a(u,{cols:"12",md:"6"},{default:s(()=>[i("div",ae,[a(U,{src:t.value.image},null,8,["src"])])]),_:1}),a(u,{cols:"12",md:"6",style:{color:"rgb(26, 108, 163)"}},{default:s(()=>[i("h2",null,"$"+p(t.value.price),1),i("h3",se,p(t.value.description),1),a(Z,{disabled:n(h),onSubmit:D(n(q),["prevent"])},{default:s(()=>[a(J,{type:"number",min:"0",label:"數量",variant:"outlined",rounded:"pill",class:"mt-8",modelValue:n(m).value.value,"onUpdate:modelValue":l[0]||(l[0]=e=>n(m).value.value=e),modelModifiers:{number:!0},"error-messages":n(m).errorMessage.value},null,8,["modelValue","error-messages"]),a(g,{type:"submit","prepend-icon":"mdi-cart",rounded:"pill",size:"x-large",block:"",class:"mt-4",loading:n(h),variant:"outlined",height:"56"},{default:s(()=>[v(" 加入購物車 ")]),_:1},8,["loading"])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1},8,["style"])]),a(W,{"model-value":!t.value.sell,class:"align-center justify-center text-center",persistent:""},{default:s(()=>[a(b,null,{default:s(()=>[a(u,{cols:"12"},{default:s(()=>[oe]),_:1}),a(u,{cols:"12"},{default:s(()=>[a(g,{to:"/shop",color:"rgb(110, 171, 217)",rounded:"pill",size:"x-large",class:"font-weight-bold"},{default:s(()=>[v("回商品頁")]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])],64))}},me=P(le,[["__scopeId","data-v-dd2ba772"]]);export{me as default};