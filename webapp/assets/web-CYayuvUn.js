var o=(u,t,i)=>new Promise((a,e)=>{var r=s=>{try{c(i.next(s))}catch(l){e(l)}},n=s=>{try{c(i.throw(s))}catch(l){e(l)}},c=s=>s.done?a(s.value):Promise.resolve(s.value).then(r,n);c((i=i.apply(u,t)).next())});import{ad as f,ae as d,af as m,ag as p}from"./index-Bqs3ibis.js";class b extends f{getPhoto(t){return o(this,null,function*(){return new Promise((i,a)=>o(this,null,function*(){if(t.webUseInput||t.source===d.Photos)this.fileInputExperience(t,i,a);else if(t.source===d.Prompt){let e=document.querySelector("pwa-action-sheet");e||(e=document.createElement("pwa-action-sheet"),document.body.appendChild(e)),e.header=t.promptLabelHeader||"Photo",e.cancelable=!1,e.options=[{title:t.promptLabelPhoto||"From Photos"},{title:t.promptLabelPicture||"Take Picture"}],e.addEventListener("onSelection",r=>o(this,null,function*(){r.detail===0?this.fileInputExperience(t,i,a):this.cameraExperience(t,i,a)}))}else this.cameraExperience(t,i,a)}))})}pickImages(t){return o(this,null,function*(){return new Promise((i,a)=>o(this,null,function*(){this.multipleFileInputExperience(i,a)}))})}cameraExperience(t,i,a){return o(this,null,function*(){if(customElements.get("pwa-camera-modal")){const e=document.createElement("pwa-camera-modal");e.facingMode=t.direction===m.Front?"user":"environment",document.body.appendChild(e);try{yield e.componentOnReady(),e.addEventListener("onPhoto",r=>o(this,null,function*(){const n=r.detail;n===null?a(new p("User cancelled photos app")):n instanceof Error?a(n):i(yield this._getCameraPhoto(n,t)),e.dismiss(),document.body.removeChild(e)})),e.present()}catch(r){this.fileInputExperience(t,i,a)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(t,i,a)})}fileInputExperience(t,i,a){let e=document.querySelector("#_capacitor-camera-input");const r=()=>{var n;(n=e.parentNode)===null||n===void 0||n.removeChild(e)};e||(e=document.createElement("input"),e.id="_capacitor-camera-input",e.type="file",e.hidden=!0,document.body.appendChild(e),e.addEventListener("change",n=>{const c=e.files[0];let s="jpeg";if(c.type==="image/png"?s="png":c.type==="image/gif"&&(s="gif"),t.resultType==="dataUrl"||t.resultType==="base64"){const l=new FileReader;l.addEventListener("load",()=>{if(t.resultType==="dataUrl")i({dataUrl:l.result,format:s});else if(t.resultType==="base64"){const h=l.result.split(",")[1];i({base64String:h,format:s})}r()}),l.readAsDataURL(c)}else i({webPath:URL.createObjectURL(c),format:s}),r()}),e.addEventListener("cancel",n=>{a(new p("User cancelled photos app")),r()})),e.accept="image/*",e.capture=!0,t.source===d.Photos||t.source===d.Prompt?e.removeAttribute("capture"):t.direction===m.Front?e.capture="user":t.direction===m.Rear&&(e.capture="environment"),e.click()}multipleFileInputExperience(t,i){let a=document.querySelector("#_capacitor-camera-input-multiple");const e=()=>{var r;(r=a.parentNode)===null||r===void 0||r.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input-multiple",a.type="file",a.hidden=!0,a.multiple=!0,document.body.appendChild(a),a.addEventListener("change",r=>{const n=[];for(let c=0;c<a.files.length;c++){const s=a.files[c];let l="jpeg";s.type==="image/png"?l="png":s.type==="image/gif"&&(l="gif"),n.push({webPath:URL.createObjectURL(s),format:l})}t({photos:n}),e()}),a.addEventListener("cancel",r=>{i(new p("User cancelled photos app")),e()})),a.accept="image/*",a.click()}_getCameraPhoto(t,i){return new Promise((a,e)=>{const r=new FileReader,n=t.type.split("/")[1];i.resultType==="uri"?a({webPath:URL.createObjectURL(t),format:n,saved:!1}):(r.readAsDataURL(t),r.onloadend=()=>{const c=r.result;i.resultType==="dataUrl"?a({dataUrl:c,format:n,saved:!1}):a({base64String:c.split(",")[1],format:n,saved:!1})},r.onerror=c=>{e(c)})})}checkPermissions(){return o(this,null,function*(){if(typeof navigator=="undefined"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(yield window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch(t){throw this.unavailable("Camera permissions are not available in this browser")}})}requestPermissions(){return o(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}pickLimitedLibraryPhotos(){return o(this,null,function*(){throw this.unavailable("Not implemented on web.")})}getLimitedLibraryPhotos(){return o(this,null,function*(){throw this.unavailable("Not implemented on web.")})}}const g=new b;export{g as Camera,b as CameraWeb};