import{R as l,D as g,r as t,b as h,w as $,d as b,e as v}from"./index-DSL_L_LM.js";function w(n){return!!n&&typeof n=="object"&&typeof n.then=="function"}const o="adm-button",E={color:"default",fill:"solid",block:!1,loading:!1,loadingIcon:l.createElement(g,{color:"currentColor"}),type:"button",shape:"default",size:"middle"},y=t.forwardRef((n,d)=>{const e=h(E,n),[u,a]=t.useState(!1),i=t.useRef(null),s=e.loading==="auto"?u:e.loading,r=e.disabled||s;t.useImperativeHandle(d,()=>({get nativeElement(){return i.current}}));const f=p=>v(void 0,void 0,void 0,function*(){if(!e.onClick)return;const c=e.onClick(p);if(w(c))try{a(!0),yield c,a(!1)}catch(m){throw a(!1),m}});return $(e,l.createElement("button",{ref:i,type:e.type,onClick:f,className:b(o,{[`${o}-${e.color}`]:e.color,[`${o}-block`]:e.block,[`${o}-disabled`]:r,[`${o}-fill-outline`]:e.fill==="outline",[`${o}-fill-none`]:e.fill==="none",[`${o}-mini`]:e.size==="mini",[`${o}-small`]:e.size==="small",[`${o}-large`]:e.size==="large",[`${o}-loading`]:s},`${o}-shape-${e.shape}`),disabled:r,onMouseDown:e.onMouseDown,onMouseUp:e.onMouseUp,onTouchStart:e.onTouchStart,onTouchEnd:e.onTouchEnd},s?l.createElement("div",{className:`${o}-loading-wrapper`},e.loadingIcon,e.loadingText):l.createElement("span",null,e.children)))});export{y as B};
