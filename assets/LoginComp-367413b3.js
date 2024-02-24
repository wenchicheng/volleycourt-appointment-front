import{Y as x,X as S,Z as C,a0 as k,a9 as B,a2 as r,c as a,a8 as s,aW as y,aX as u,J as F,aa as M,a6 as N,ai as U}from"./index-4a1cdd7c.js";import{v as $}from"./index-cc3d218e.js";import{u as q,a as d,V as E}from"./vee-validate.esm-6c95c78e.js";import{c as P,b as c}from"./index.esm-195823e1.js";import{V as R}from"./VRow-604b95f3.js";import{V as p}from"./VCol-b6411722.js";import{V as T}from"./VDivider-33185191.js";import{V as X}from"./VContainer-c1daaa8b.js";const A=N("h1",null,"登入",-1),H={__name:"LoginComp",setup(D){const{api:V}=U(),f=x(),m=S(),g=C(),b=P({email:c().required("信箱為必填欄位").test("isEmail","信箱格式錯誤",o=>$.isEmail(o)),password:c().required("密碼為必填欄位").min(4,"密碼長度不符").max(12,"密碼長度不符")}),{handleSubmit:v,isSubmitting:w}=q({validationSchema:b}),i=d("email"),n=d("password"),_=v(async o=>{var e,t;console.log(o);try{const{data:l}=await V.post("/users/login",{email:o.email,password:o.password});g.login(l.result),m({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),f.push("/")}catch(l){const h=((t=(e=l==null?void 0:l.response)==null?void 0:e.data)==null?void 0:t.message)||"發生錯誤，請稍後再試";m({text:h,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(o,e)=>(k(),B(X,null,{default:r(()=>[a(R,null,{default:r(()=>[a(p,{cols:"12"},{default:r(()=>[A]),_:1}),a(T),a(p,{cols:"12"},{default:r(()=>[a(E,{disabled:s(w),onSubmit:y(s(_),["prevent"])},{default:r(()=>[a(u,{label:"信箱",type:"email",modelValue:s(i).value.value,"onUpdate:modelValue":e[0]||(e[0]=t=>s(i).value.value=t),"error-messages":s(i).errorMessage.value},null,8,["modelValue","error-messages"]),a(u,{label:"密碼",type:"password",minlength:"4",maxlength:"12",counter:"",modelValue:s(n).value.value,"onUpdate:modelValue":e[1]||(e[1]=t=>s(n).value.value=t),"error-messages":s(n).errorMessage.value},null,8,["modelValue","error-messages"]),a(F,{type:"submit",color:"green",onClick:e[2]||(e[2]=t=>o.dialog=!1),class:"w-100"},{default:r(()=>[M("登入")]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}))}};export{H as _};