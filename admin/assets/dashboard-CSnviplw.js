var l=(t,o,s)=>new Promise((u,c)=>{var i=a=>{try{e(s.next(a))}catch(r){c(r)}},p=a=>{try{e(s.throw(a))}catch(r){c(r)}},e=a=>a.done?u(a.value):Promise.resolve(a.value).then(i,p);e((s=s.apply(t,o)).next())});import{aL as d,aC as m,r as x,aF as h,j as n,aK as j,a1 as b,aJ as f}from"./index-CsdPw-sh.js";const g=()=>{const t=d(s=>s.app.locale),{t:o}=m();return x.useEffect(()=>{},[]),h(()=>l(void 0,null,function*(){f("Page Dashboard mount...")})),n.jsxs("div",{children:[n.jsx(j,{to:"/about",children:"about"}),o("title",{ns:"common"}),n.jsx(b,{type:"primary",children:t})]})};export{g as default};
