import{a as e,r as i,i as o,o as s,j as t,w as r,k as a,x as n}from"./index.b140c207.js";import"./xlsx.a48e520c.js";import"./index.a386f3ca.js";import"./omit.8d73d862.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6ab0215c.js";import"./CheckOutlined.72786542.js";import{s as d}from"./index.f1319839.js";import"./index.ed9be7a7.js";import"./colors.9e2b156b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67b83eb2.js";import"./index.e6984f16.js";import"./UpOutlined.d2d7be45.js";import"./DownOutlined.a7138082.js";import"./index.a311583a.js";import"./index.e9dabea4.js";import"./index.0874e336.js";import"./CloseOutlined.1ded85a0.js";import{B as m,u as p}from"./index.9e082a18.js";import"./index.e47dd816.js";import"./LeftOutlined.375e5079.js";import"./functional.c7d55e9a.js";import"./RightOutlined.1c70c502.js";import"./useTimeout.235d9d8d.js";import"./useDebounce.45040196.js";import"./useEventListener.98373847.js";import"./useBreakpoint.1cdd5e73.js";import"./resizeEvent.5bf811bd.js";import"./index.228fcfc3.js";import"./useWindowSizeFn.2b8ac17a.js";import"./uuid.40269c00.js";import"./download.c37bde26.js";import{u as l}from"./useForm.57e0baec.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var j=e({components:{BasicModal:m,BasicForm:d},setup(){const e=i({}),[o,{}]=l({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=p((i=>{e.value={field2:i.data,field1:i.info}}));return{register:s,schemas:c,registerForm:o,model:e}}});j.render=function(e,i,d,m,p,l){const c=o("BasicForm"),j=o("BasicModal");return s(),t(j,n(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:r((()=>[a(c,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default j;