import{aU as B,Y as k,X as C,Z as F,x as M,A as P,a0 as $,a1 as A,c as a,a2 as s,aV as N,a5 as R,ai as U,a6 as n,af as m,V as E,a8 as r,aW as T,aX as X,J as _,aa as v}from"./index-ac92b338.js";import{u as j,a as z,V as D}from"./vee-validate.esm-18f50315.js";import{c as I,a as J}from"./index.esm-195823e1.js";import{V as L}from"./VContainer-b40a5f2d.js";import{V as h}from"./VRow-9903d744.js";import{V as i}from"./VCol-df819519.js";const O={style:{"white-space":"pre"}},W=n("h1",{class:"text-white text-h1 font-weight-medium"},"已下架",-1),te={__name:"ProductView",setup(Y){const V=B(),p=k(),{api:y,apiAuth:b}=U(),c=C(),f=F(),t=M({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""}),w=I({quantity:J().typeError("缺少數量").required("缺少數量").min(1,"數量最小為 1")}),{isSubmitting:g,handleSubmit:x}=j({validationSchema:w,initialValues:{quantity:1}}),d=z("quantity"),S=x(async u=>{var o,e;if(!f.isLogin){p.push("/login");return}try{const{data:l}=await b.patch("/users/cart",{product:t.value._id,quantity:u.quantity});f.cart=l.result,c({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(l){const q=((e=(o=l==null?void 0:l.response)==null?void 0:o.data)==null?void 0:e.message)||"發生錯誤，請稍後再試";c({text:q,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return P(async()=>{var u,o;try{const{data:e}=await y.get("/products/"+V.params.id);t.value._id=e.result._id,t.value.name=e.result.name,t.value.price=e.result.price,t.value.description=e.result.description,t.value.image=e.result.image,t.value.sell=e.result.sell,t.value.category=e.result.category,document.title=`購物網 | ${t.value.name}`}catch(e){const l=((o=(u=e==null?void 0:e.response)==null?void 0:u.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";c({text:l,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}}),p.push("/")}}),(u,o)=>($(),A(R,null,[a(L,null,{default:s(()=>[a(h,null,{default:s(()=>[a(i,{cols:"12"},{default:s(()=>[n("h1",null,m(t.value.name),1)]),_:1}),a(i,{cols:"12",md:"6"},{default:s(()=>[a(E,{src:t.value.image},null,8,["src"])]),_:1}),a(i,{cols:"12",md:"6"},{default:s(()=>[n("p",null,"$"+m(t.value.price),1),n("p",O,m(t.value.description),1),a(D,{disabled:r(g),onSubmit:T(r(S),["prevent"])},{default:s(()=>[a(X,{type:"number",min:"0",modelValue:r(d).value.value,"onUpdate:modelValue":o[0]||(o[0]=e=>r(d).value.value=e),modelModifiers:{number:!0},"error-messages":r(d).errorMessage.value},null,8,["modelValue","error-messages"]),a(_,{type:"submit","prepend-icon":"mdi-cart",loading:r(g)},{default:s(()=>[v("加入購物車")]),_:1},8,["loading"])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}),a(N,{"model-value":!t.value.sell,class:"align-center justify-center text-center",persistent:""},{default:s(()=>[a(h,null,{default:s(()=>[a(i,{cols:"12"},{default:s(()=>[W]),_:1}),a(i,{cols:"12"},{default:s(()=>[a(_,{to:"/shop",color:"rgb(110, 171, 217)",rounded:"pill",size:"x-large",class:"font-weight-bold"},{default:s(()=>[v("所有商品")]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])],64))}};export{te as default};
