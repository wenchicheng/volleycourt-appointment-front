import{ad as A,ae as N,ag as W,af as j,x as g,o as C,A as z,ai as v,aj as b,an as u,c as a,ak as n,am as D,a6 as R,az as T,aw as p,J as m,ar as w,ax as E,ay as F}from"./index-5d05dde8.js";import{V as J}from"./VContainer-a66adb2c.js";import{V as L}from"./VRow-814b2d6a.js";import{V as k}from"./VCol-82ae06b3.js";import{V as M}from"./VDataTable-6b507cbe.js";import"./VList-13371a02.js";import"./VDivider-0e44e418.js";import"./VChip-4fc111dc.js";import"./VSlideGroup-d8614059.js";const V=d=>(E("data-v-e71c1c64"),d=d(),F(),d),U=V(()=>u("div",{class:"top-block"},null,-1)),G={style:{border:"2px solid rgb(4, 0, 255)"}},H=V(()=>u("h1",{class:"text-center mt-15 mb-5",style:{color:"rgb(26, 108, 163)"}},"購物車",-1)),K={key:0},O={key:1,class:"text-red text-decoration-line-through"},Q={class:"number-box"},X={class:"mb-4"},Y={__name:"CartView",setup(d){const{apiAuth:_}=T(),r=N(),h=W(),x=j(),s=g([]),B=[{title:"商品名稱",key:"product.name"},{title:"單價",key:"product.price"},{title:"數量",key:"quantity"},{title:"總價",key:"total",value:e=>e.product.price*e.quantity},{title:"操作",key:"action"}],S=C(()=>s.value.reduce((e,o)=>e+o.quantity*o.product.price,0)),q=C(()=>s.value.length>0&&!s.value.some(e=>!e.product.sell)),f=async(e,o)=>{var t,c;if(!h.isLogin){x.push("/login");return}try{const{data:l}=await _.patch("/users/cart",{product:e,quantity:o});h.cart=l.result,r({text:"修改成功",showCloseButton:!1,snackbarProps:{timeout:1e3,color:"green",location:"bottom"}});const i=s.value.findIndex($=>$.product._id===e);s.value[i].quantity+=o,s.value[i].quantity<=0&&s.value.splice(i,1)}catch(l){const i=((c=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:c.message)||"發生錯誤，請稍後再試";r({text:i,showCloseButton:!1,snackbarProps:{timeout:1500,color:"red",location:"bottom"}})}},y=g(!1),I=async()=>{var e,o;y.value=!0;try{await _.post("/orders"),h.cart=0,x.push("/orders"),r({text:"結帳成功",showCloseButton:!1,snackbarProps:{timeout:1500,color:"green",location:"bottom"}})}catch(t){const c=((o=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";r({text:c,showCloseButton:!1,snackbarProps:{timeout:1500,color:"red",location:"bottom"}})}y.value=!1};z(async()=>{var e,o;try{const{data:t}=await _.get("/users/cart");s.value.push(...t.result)}catch(t){const c=((o=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";r({text:c,showCloseButton:!1,snackbarProps:{timeout:1500,color:"red",location:"bottom"}})}});const P=()=>{const e=window.innerWidth;return e>=1200?"70%":e>=960?"80%":e>=600?"85%":"90%"};return(e,o)=>(v(),b(R,null,[U,u("div",G,[a(J,{class:"h-100 d-flex justify-center align-center",style:D([{width:P()},{border:"2px solid #bc3636"}])},{default:n(()=>[a(L,{class:"row"},{default:n(()=>[a(k,{cols:"12"},{default:n(()=>[H]),_:1}),a(k,{cols:"12"},{default:n(()=>[a(M,{items:s.value,headers:B},{"item.product.name":n(({item:t})=>[t.product.sell?(v(),b("span",K,p(t.product.name),1)):(v(),b("span",O,p(t.product.name)+" (已下架)",1))]),"item.quantity":n(({item:t})=>[u("div",Q,[a(m,{variant:"text",icon:"mdi-minus",color:"red",onClick:c=>f(t.product._id,-1)},null,8,["onClick"]),w(" "+p(t.quantity)+" ",1),a(m,{variant:"text",icon:"mdi-plus",color:"green",onClick:c=>f(t.product._id,1)},null,8,["onClick"])])]),"item.action":n(({item:t})=>[a(m,{variant:"text",icon:"mdi-delete",color:"rgb(26, 108, 163)",onClick:c=>f(t.product._id,t.quantity*-1)},null,8,["onClick"])]),_:1},8,["items"])]),_:1}),a(k,{class:"text-center",cols:"12"},{default:n(()=>[u("h2",X,"總金額: $ "+p(S.value)+" 元",1),a(m,{color:"green",class:"mb-4",disabled:!q.value,loading:y.value,onClick:I},{default:n(()=>[w(" 結帳")]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1},8,["style"])])],64))}},lt=A(Y,[["__scopeId","data-v-e71c1c64"]]);export{lt as default};
