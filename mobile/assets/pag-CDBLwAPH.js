var o=(s,r,e)=>new Promise((f,c)=>{var l=t=>{try{a(e.next(t))}catch(n){c(n)}},u=t=>{try{a(e.throw(t))}catch(n){c(n)}},a=t=>t.done?f(t.value):Promise.resolve(t.value).then(l,u);a((e=e.apply(s,r)).next())});import{ai as i,r as g,Q as m,G as p}from"./index-cMG0MGWo.js";const P=new URL("/me/mobile/assets/like-LTTkScfn.pag",import.meta.url).href,h=()=>({getPag:()=>o(void 0,null,function*(){return i?Promise.resolve(i):Promise.reject()})}),E=()=>{const{getPag:s}=h();return g.useEffect(()=>{m("Pag.useEffect..."),s().then(r=>{fetch(P).then(e=>e.blob()).then(e=>o(void 0,null,function*(){r.PAGFile.load(e).then()}))})},[]),p.jsx("div",{})};export{E as default};