import{R as o,r as n,G as c}from"./index-HijF8i0U.js";import{aO as a}from"./XPlayer-Fdxcx3Em.js";const p=l=>{const t=o.useRef(null),s=o.useRef(null),{options:r}=l;return n.useEffect(()=>{if(s.current){const e=s.current;e.autoplay(r.autoplay),e.src(r.sources)}else{const e=document.createElement("video-js");e.classList.add("vjs-big-play-centered"),t.current.appendChild(e),s.current=a(e,r,()=>{a.log("player is ready")})}},[r,t]),n.useEffect(()=>{const e=s.current;return()=>{e&&!e.isDisposed()&&(e.dispose(),s.current=null)}},[s]),c.jsx("div",{children:c.jsx("div",{ref:t})})};export{p as V};
