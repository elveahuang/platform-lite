var c=(a,t,o)=>new Promise((u,l)=>{var i=s=>{try{e(o.next(s))}catch(r){l(r)}},d=s=>{try{e(o.throw(s))}catch(r){l(r)}},e=s=>s.done?u(s.value):Promise.resolve(s.value).then(i,d);e((o=o.apply(a,t)).next())});import{u as p,a as m,r as h,b as x,j as n,L as b,B as f,l as j}from"./index-BcThQquP.js";import{d as g}from"./index-DW81z7jt.js";const D=()=>{const a=p(o=>o.app.locale),{t}=m();return h.useEffect(()=>{g().then(o=>{console.log(o)})},[]),x(()=>c(void 0,null,function*(){j("Page Dashboard mount...")})),n.jsxs("div",{children:[n.jsx(b,{to:"/about",children:"about"}),t("title",{ns:"common"}),n.jsx(f,{type:"primary",children:a})]})};export{D as default};
