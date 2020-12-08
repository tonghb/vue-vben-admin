import{u as e,a as t,b as s,r as i,aI as n,ai as o,v as a,T as r,f as c,aJ as u,cV as d,z as l}from"./index.b140c207.js";import{C as m}from"./CheckOutlined.c36fecbd.js";import{D as g}from"./DoubleRightOutlined.1d50a075.js";import{u as p}from"./useTimeout.235d9d8d.js";import{u as f}from"./useEventListener.98373847.js";import{h}from"./domUtils.c5071c6b.js";import{u as y}from"./useExpose.978c5fca.js";const{t:v}=e(),x={value:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:[String],default:v("component.verify.dragText")},successText:{type:[String],default:v("component.verify.successText")},height:{type:[Number,String],default:40},width:{type:[Number,String],default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:{}},contentStyle:{type:Object,default:{}},barStyle:{type:Object,default:{}},actionStyle:{type:Object,default:{}}},T={...x,src:{type:String},imgWidth:{type:Number,default:260},imgWrapStyle:{type:Object,default:{}},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}};var w=t({name:"BaseDargVerify",props:x,emits:["success","update:value","change","start","move","end"],setup(e,{emit:t,slots:d}){const l=s({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),h=i(null),v=i(null),x=i(null),T=i(null);n((()=>l.isPassing),(e=>{if(e){const{startTime:s,endTime:i}=l;t("success",{isPassing:e,time:((i-s)/1e3).toFixed(1)}),t("update:value",e),t("change",e)}})),o((()=>{l.isPassing=!!e.value}));const w=a((()=>{const{height:t,actionStyle:s}=e,i=`${parseInt(t)}px`;return{left:0,width:i,height:i,...s}})),S=a((()=>{const{height:t,width:s,circle:i,wrapStyle:n}=e,o=parseInt(t);return{width:`${parseInt(s)}px`,height:`${o}px`,lineHeight:`${o}px`,borderRadius:i?o/2+"px":0,...n}})),b=a((()=>{const{height:t,circle:s,barStyle:i}=e,n=parseInt(t);return{height:`${n}px`,borderRadius:s?n/2+"px 0 0 "+n/2+"px":0,...i}})),D=a((()=>{const{height:t,width:s,contentStyle:i}=e;return{height:`${parseInt(t)}px`,width:`${parseInt(s)}px`,...i}}));function M(e){return e.pageX||e.touches[0].pageX}function P(e){if(l.isPassing)return;const s=c(T);s&&(t("start",e),l.moveDistance=M(e)-parseInt(s.style.left.replace("px",""),10),l.startTime=(new Date).getTime(),l.isMoving=!0)}function I(t){const s=parseInt(t.style.width),{width:i}=e,n=parseInt(i);return{offset:n-s-6,widthNum:n,actionWidth:s}}function $(s){const{isMoving:i,moveDistance:n}=l;if(i){const i=c(T),o=c(v);if(!i||!o)return;const{offset:a,widthNum:r,actionWidth:u}=I(i),d=M(s)-n;t("move",{event:s,moveDistance:n,moveX:d}),d>0&&d<=a?(i.style.left=`${d}px`,o.style.width=`${d+u/2}px`):d>a&&(i.style.left=r-u+"px",o.style.width=r-u/2+"px",e.isSlot||R())}}function j(s){const{isMoving:i,isPassing:n,moveDistance:o}=l;if(i&&!n){t("end",s);const i=c(T),n=c(v);if(!i||!n)return;const a=M(s)-o,{offset:r,widthNum:u,actionWidth:d}=I(i);a<r?e.isSlot?setTimeout((()=>{if(e.value){const e=c(x);e&&(e.style.width=`${parseInt(n.style.width)}px`)}else O()}),0):O():(i.style.left=u-d+"px",n.style.width=u-d/2+"px",R()),l.isMoving=!1}}function R(){e.isSlot?O():(l.endTime=(new Date).getTime(),l.isPassing=!0,l.isMoving=!1)}function O(){l.isMoving=!1,l.isPassing=!1,l.moveDistance=0,l.toLeft=!1,l.startTime=0,l.endTime=0;const e=c(T),t=c(v),s=c(x);e&&t&&s&&(l.toLeft=!0,p((()=>{l.toLeft=!1,e.style.left="0",t.style.width="0"}),300),s.style.width=c(D).width)}return f({el:document,name:"mouseup",listener:()=>{l.isMoving&&O()}}),y({resume:O}),()=>r("div",{class:"darg-verify",ref:h,style:c(S),onMousemove:$,onTouchmove:$,onMouseleave:j,onMouseup:j,onTouchend:j},(()=>{const e=["darg-verify-bar"];return l.toLeft&&e.push("to-left"),r("div",{class:e,ref:v,style:c(b)})})(),(()=>{const t=["darg-verify-content"],{isPassing:s}=l,{text:i,successText:n}=e;return s&&t.push("success"),r("div",{class:t,ref:x,style:c(D)},u(d,"text",s)||(s?n:i))})(),(()=>{const e=["darg-verify-action"],{toLeft:t,isPassing:s}=l;return t&&e.push("to-left"),r("div",{class:e,onMousedown:P,onTouchstart:P,style:c(w),ref:T},u(d,"actionIcon",s)||r(s?m:g,{class:"darg-verify-action__icon"}))})())}}),S=t({name:"ImgRotateDargVerify",inheritAttrs:!1,props:T,emits:["success","change","update:value"],setup(t,{emit:o,attrs:u}){const l=i(null),m=s({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:g}=e();n((()=>m.isPassing),(e=>{if(e){const{startTime:t,endTime:s}=m;o("success",{isPassing:e,time:((s-t)/1e3).toFixed(1)}),o("change",e),o("update:value",e)}}));const f=a((()=>{const{imgWrapStyle:e,imgWidth:s}=t;return{width:`${s}px`,height:`${s}px`,...e}})),y=a((()=>{const{minDegree:e,maxDegree:s}=t;return e===s?Math.floor(1+1*Math.random())/10+1:1}));function v(){m.startTime=(new Date).getTime()}function x(e){m.draged=!0;const{imgWidth:s,height:i,maxDegree:n}=t,{moveX:o}=e,a=Math.ceil(o/(s-parseInt(i))*n*c(y));m.currentRotate=a,m.imgStyle=h("transform",`rotateZ(${m.randomRotate-a}deg)`)}function T(){const{minDegree:e,maxDegree:s}=t,i=Math.floor(e+Math.random()*(s-e));m.randomRotate=i,m.imgStyle=h("transform",`rotateZ(${i}deg)`)}function S(){const{randomRotate:e,currentRotate:s}=m,{diffDegree:i}=t;Math.abs(e-s)>=(i||20)?(m.imgStyle=h("transform",`rotateZ(${e}deg)`),m.toOrigin=!0,p((()=>{m.toOrigin=!1,m.showTip=!0}),300)):(m.isPassing=!0,m.endTime=(new Date).getTime()),m.showTip=!0}function b(){m.showTip=!1;const e=c(l);e&&(m.isPassing=!1,e.resume(),T())}const D=d();return D&&(D.resume=b),()=>{const{src:e}=t,{toOrigin:s,isPassing:i,startTime:n,endTime:o}=m,a=[];s&&a.push("to-origin");const d=(o-n)/1e3;return r("div",{class:"ir-dv"},r("div",{class:"ir-dv-img__wrap",style:c(f)},r("img",{src:e,onLoad:T,width:parseInt(t.width),class:a,style:m.imgStyle,onClick:()=>{b()}}),m.showTip&&r("span",{class:["ir-dv-img__tip",m.isPassing?"success":"error"]},m.isPassing?g("component.verify.time",{time:d.toFixed(1)}):g("component.verify.error")),!m.showTip&&!m.draged&&r("span",{class:["ir-dv-img__tip","normal"]},"t('redoTip')")),r(w,{class:"ir-dv-drag__bar",onMove:x,onEnd:S,onStart:v,ref:l,...{...u,...t},value:i,isSlot:!0}))}}});l(w,S);export{w as B,S as R};