import{a as e,i,o as t,j as o,k as s}from"./index.b140c207.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.d32ca3c1.js";import"./index.a386f3ca.js";import"./omit.8d73d862.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6ab0215c.js";import"./CheckOutlined.72786542.js";import"./index.f1319839.js";import"./index.ed9be7a7.js";import"./colors.9e2b156b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67b83eb2.js";import"./index.e6984f16.js";import"./UpOutlined.d2d7be45.js";import"./LeftOutlined.a8393734.js";import"./DownOutlined.a7138082.js";import"./index.a311583a.js";import"./index.2cfd00c4.js";import"./index.7bd923c9.js";import"./zh_CN.0242bd16.js";import"./index.e9dabea4.js";import"./index.0874e336.js";import"./CaretDownFilled.ca53e14f.js";import"./CheckOutlined.c36fecbd.js";import"./CloseOutlined.1ded85a0.js";import{s as r}from"./EditTableHeaderIcon.366d70fd.js";import"./index.9e082a18.js";import"./index.e47dd816.js";import"./LeftOutlined.375e5079.js";import"./functional.c7d55e9a.js";import"./RightOutlined.1c70c502.js";import"./useTimeout.235d9d8d.js";import"./useDebounce.45040196.js";import"./useEventListener.98373847.js";import"./useBreakpoint.1cdd5e73.js";import"./resizeEvent.5bf811bd.js";import"./domUtils.c5071c6b.js";import"./useExpose.978c5fca.js";import"./index.228fcfc3.js";import"./useWindowSizeFn.2b8ac17a.js";import"./uuid.40269c00.js";import"./download.c37bde26.js";import"./useForm.57e0baec.js";import"./useFullScreen.a31281a1.js";import"./index.4e701ade.js";import{u as d}from"./useTable.2e07d8db.js";import{getBasicColumns as n}from"./tableData.9d6267de.js";import{d as m}from"./table.9502831e.js";var p=e({components:{BasicTable:r},setup(){const[e]=d({title:"表尾行合计示例",api:m,rowSelection:{type:"checkbox"},columns:n(),showSummary:!0,summaryFunc:function(e){const i=e.reduce(((e,i)=>e+=i.no),0);return[{_row:"合计",_index:"平均值",no:i},{_row:"合计",_index:"平均值",no:i}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const a={class:"p-4"};p.render=function(e,r,d,n,m,p){const c=i("BasicTable");return t(),o("div",a,[s(c,{onRegister:e.registerTable},null,8,["onRegister"])])};export default p;