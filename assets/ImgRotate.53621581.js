var t=Object.assign;import{u as e}from"./useTimeout.7ba08caf.js";import{r as s,B as i}from"./DragVerify.190dd383.js";import{h as r}from"./domUtils.aabf47da.js";import{d as a,r as o,a as n,u as m,aT as d,K as g,j as c,e as p,m as u,a7 as l,a$ as f}from"./index.150b21ea.js";import"./useExpose.226e1580.js";import"./CheckOutlined.c65d724b.js";import"./DoubleRightOutlined.f5c447ff.js";import"./_stringToArray.b588e6cb.js";import"./vendor.3b1829c7.js";var h=a({name:"ImgRotateDargVerify",inheritAttrs:!1,props:s,emits:["success","change","update:value"],setup(s,{emit:a,attrs:h}){const T=o(null),v=n({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:y}=m();d((()=>v.isPassing),(t=>{if(t){const{startTime:e,endTime:s}=v;a("success",{isPassing:t,time:((s-e)/1e3).toFixed(1)}),a("change",t),a("update:value",t)}}));const w=g((()=>{const{imgWrapStyle:e,imgWidth:i}=s;return t({width:`${i}px`,height:`${i}px`},e)})),b=g((()=>{const{minDegree:t,maxDegree:e}=s;return t===e?Math.floor(1+1*Math.random())/10+1:1}));function j(){v.startTime=(new Date).getTime()}function D(t){v.draged=!0;const{imgWidth:e,height:i,maxDegree:a}=s,{moveX:o}=t,n=Math.ceil(o/(e-parseInt(i))*a*p(b));v.currentRotate=n,v.imgStyle=r("transform",`rotateZ(${v.randomRotate-n}deg)`)}function x(){const{minDegree:t,maxDegree:e}=s,i=Math.floor(t+Math.random()*(e-t));v.randomRotate=i,v.imgStyle=r("transform",`rotateZ(${i}deg)`)}function R(){const{randomRotate:t,currentRotate:i}=v,{diffDegree:a}=s;Math.abs(t-i)>=(a||20)?(v.imgStyle=r("transform",`rotateZ(${t}deg)`),v.toOrigin=!0,e((()=>{v.toOrigin=!1,v.showTip=!0}),300)):(v.isPassing=!0,v.endTime=(new Date).getTime()),v.showTip=!0}function _(){v.showTip=!1;const t=p(T);t&&(v.isPassing=!1,t.resume(),x())}const P=f();return P&&(P.resume=_),()=>{const{src:e}=s,{toOrigin:r,isPassing:a,startTime:o,endTime:n}=v,m=[];r&&m.push("to-origin");const d=(n-o)/1e3;return c("div",{class:"ir-dv"},[c("div",{class:"ir-dv-img__wrap",style:p(w)},[c("img",{src:e,onLoad:x,width:parseInt(s.width),class:m,style:v.imgStyle,onClick:()=>{_()}},null),v.showTip&&c("span",{class:["ir-dv-img__tip",v.isPassing?"success":"error"]},[v.isPassing?y("component.verify.time",{time:d.toFixed(1)}):y("component.verify.error")]),!v.showTip&&!v.draged&&c("span",{class:["ir-dv-img__tip","normal"]},[u("t('redoTip')")])]),c(i,l({class:"ir-dv-drag__bar",onMove:D,onEnd:R,onStart:j,ref:T},t(t({},h),s),{value:a,isSlot:!0}),null)])}}});export default h;
