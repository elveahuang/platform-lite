var l=(s,t,a)=>new Promise((i,c)=>{var u=o=>{try{e(a.next(o))}catch(r){c(r)}},d=o=>{try{e(a.throw(o))}catch(r){c(r)}},e=o=>o.done?i(o.value):Promise.resolve(o.value).then(u,d);e((a=a.apply(s,t)).next())});import{aD as p,at as m,r as x,ax as h,j as n,aA as b,W as f,aC as j}from"./index-8PKa0IWs.js";import{d as g}from"./index-u7KGnrG2.js";const A=()=>{const s=p(a=>a.app.locale),{t}=m();return x.useEffect(()=>{g().then(a=>{console.log(a)})},[]),h(()=>l(void 0,null,function*(){j("Page Dashboard mount...")})),n.jsxs("div",{children:[n.jsx(b,{to:"/about",children:"about"}),t("title",{ns:"common"}),n.jsx(f,{type:"primary",children:s})]})};export{A as default};
