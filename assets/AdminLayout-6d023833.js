import{ag as p,o as u,ah as _,ai as n,aj as i,c as o,ak as a,a6 as r,ap as f,ao as v}from"./index-e30a2666.js";import{V as h,a as x}from"./VNavigationDrawer-78e8ac56.js";import{V as s,a as c}from"./VList-1061f874.js";import{V}from"./VDivider-b50e760e.js";const E={__name:"AdminLayout",setup(g){const t=p(),l=[{to:"/admin/appointments",text:"開放時段",show:t.isLogin&&t.isAdmin,icon:"mdi-clock"},{to:"/admin/appointorders",text:"預約管理",show:t.isLogin&&t.isAdmin,icon:"mdi-calendar-clock"},{to:"/admin/products",text:"商品管理",show:t.isLogin&&t.isAdmin,icon:"mdi-plus"},{to:"/admin/orders",text:"訂單管理",show:t.isLogin&&t.isAdmin,icon:"mdi-cart"},{to:"/",text:"回首頁",icon:"mdi-home"}],m=u(()=>`https://source.boringavatars.com/beam/120/${t.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`);return(w,L)=>{const d=_("router-view");return n(),i(r,null,[o(h,{permanent:""},{default:a(()=>[o(s,null,{default:a(()=>[o(c,{"prepend-avatar":m.value,title:f(t).account},null,8,["prepend-avatar","title"])]),_:1}),o(V),o(s,null,{default:a(()=>[(n(),i(r,null,v(l,e=>o(c,{key:e.to,to:e.to,title:e.text,"prepend-icon":e.icon},null,8,["to","title","prepend-icon"])),64))]),_:1})]),_:1}),o(x,null,{default:a(()=>[o(d)]),_:1})],64)}}};export{E as default};
