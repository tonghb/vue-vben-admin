let e=document.createElement("style");e.innerHTML=".bg-gray-700[data-v-7a671671]{background:#4a5568}",document.head.appendChild(e);import{a as s,r as c,h as l,aT as t,aU as a,i as n,o as r,j as i,k as o,aW as u,p as d}from"./index.b140c207.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67b83eb2.js";import{B as m}from"./BugOutlined.648c5a01.js";import"./CheckOutlined.c36fecbd.js";import"./DoubleRightOutlined.1d50a075.js";import{R as f}from"./RightOutlined.1c70c502.js";import"./useTimeout.235d9d8d.js";import"./useDebounce.45040196.js";import"./useEventListener.98373847.js";import"./domUtils.c5071c6b.js";import"./useExpose.978c5fca.js";import{B as p}from"./index.a29cff5d.js";var g=s({components:{BasicDragVerify:p,BugOutlined:m,RightOutlined:f},setup(){const{createMessage:e}=l();return{handleSuccess:function(s){const{time:c}=s;e.success(`校验成功,耗时${c}秒`)},el1:c(null),el2:c(null),el3:c(null),el4:c(null),el5:c(null),handleBtnClick:function(e){e&&e.resume()}}}});const y=u("data-v-7a671671");t("data-v-7a671671");const j={class:"p-10"},b={class:"flex justify-center p-4 items-center bg-gray-700"},h=d("还原"),k={class:"flex justify-center p-4 items-center bg-gray-700"},S=d("还原"),v={class:"flex justify-center p-4 items-center bg-gray-700"},x=d("还原"),B={class:"flex justify-center p-4 items-center bg-gray-700"},C=d("还原"),_={class:"flex justify-center p-4 items-center bg-gray-700"},O={key:0},R=d(" 成功 "),T={key:1},D=d(" 拖动 "),E=d("还原");a();const I=y(((e,s,c,l,t,a)=>{const u=n("BasicDragVerify"),d=n("a-button"),m=n("BugOutlined"),f=n("RightOutlined");return r(),i("div",j,[o("div",b,[o(u,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),o(d,{color:"primary",class:"ml-2",onClick:s[1]||(s[1]=s=>e.handleBtnClick(e.el1))},{default:y((()=>[h])),_:1})]),o("div",k,[o(u,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),o(d,{color:"primary",class:"ml-2",onClick:s[2]||(s[2]=s=>e.handleBtnClick(e.el2))},{default:y((()=>[S])),_:1})]),o("div",v,[o(u,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{background:"#018ffb"}},null,8,["onSuccess"]),o(d,{color:"primary",class:"ml-2",onClick:s[3]||(s[3]=s=>e.handleBtnClick(e.el3))},{default:y((()=>[x])),_:1})]),o("div",B,[o(u,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:y((e=>[e?(r(),i(m,{key:0})):(r(),i(f,{key:1}))])),_:1},8,["onSuccess"]),o(d,{color:"primary",class:"ml-2",onClick:s[4]||(s[4]=s=>e.handleBtnClick(e.el4))},{default:y((()=>[C])),_:1})]),o("div",_,[o(u,{ref:"el5",onSuccess:e.handleSuccess},{text:y((e=>[e?(r(),i("div",O,[o(m),R])):(r(),i("div",T,[D,o(f)]))])),_:1},8,["onSuccess"]),o(d,{color:"primary",class:"ml-2",onClick:s[5]||(s[5]=s=>e.handleBtnClick(e.el5))},{default:y((()=>[E])),_:1})])])}));g.render=I,g.__scopeId="data-v-7a671671";export default g;