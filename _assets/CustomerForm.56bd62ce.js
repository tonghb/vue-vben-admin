import{a as e,dh as s,ag as i,h as o,i as t,o as r,j as n,k as a,w as d}from"./index.b140c207.js";import"./xlsx.a48e520c.js";import"./index.a386f3ca.js";import"./omit.8d73d862.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6ab0215c.js";import"./CheckOutlined.72786542.js";import{s as p}from"./index.f1319839.js";import"./index.ed9be7a7.js";import"./colors.9e2b156b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67b83eb2.js";import"./index.e6984f16.js";import"./UpOutlined.d2d7be45.js";import"./DownOutlined.a7138082.js";import"./index.a311583a.js";import"./index.e9dabea4.js";import"./index.0874e336.js";import{s as l}from"./index.40756bd5.js";import"./CloseOutlined.1ded85a0.js";import"./index.9e082a18.js";import"./index.e47dd816.js";import"./LeftOutlined.375e5079.js";import"./functional.c7d55e9a.js";import"./RightOutlined.1c70c502.js";import"./useTimeout.235d9d8d.js";import"./useDebounce.45040196.js";import"./useEventListener.98373847.js";import"./useBreakpoint.1cdd5e73.js";import"./resizeEvent.5bf811bd.js";import"./domUtils.c5071c6b.js";import"./useExpose.978c5fca.js";import"./animation.1adf111b.js";import"./index.abc9c33d.js";import"./index.228fcfc3.js";import"./useWindowSizeFn.2b8ac17a.js";import"./uuid.40269c00.js";import"./download.c37bde26.js";import{u as m}from"./useForm.57e0baec.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>s(i,{placeholder:"请输入",value:e[o],onChange:s=>{e[o]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var u=e({components:{BasicForm:p,CollapseContainer:l},setup(){const{createMessage:e}=o(),[s,{setProps:i}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:s,schemas:c,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:i}}});const j={class:"m-4"};u.render=function(e,s,i,o,p,l){const m=t("a-input"),c=t("BasicForm"),u=t("CollapseContainer");return r(),n("div",j,[a(u,{title:"自定义表单"},{default:d((()=>[a(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:d((({model:e,field:s})=>[a(m,{value:e[s],"onUpdate:value":i=>e[s]=i,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])};export default u;