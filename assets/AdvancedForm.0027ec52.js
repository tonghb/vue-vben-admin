import{f as e}from"./BasicForm.6cd02257.js";import{u as o}from"./useForm.583dbd41.js";import{d as t}from"./ScrollContainer.284652b4.js";import{_ as i}from"./index.4a5da437.js";import{d as l,h as s,o as p,i as n,w as r,j as a}from"./index.150b21ea.js";import"./index.c220ea3a.js";import"./index.c08be64c.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.b9407814.js";import"./isEqual.a3b5962a.js";import"./get.368b1aae.js";import"./_baseProperty.74f89655.js";import"./toInteger.53532229.js";import"./index.2c9b5d58.js";import"./index.cbd3d407.js";import"./SearchOutlined.40128210.js";import"./EyeOutlined.3ef03474.js";import"./index.a0fc6fd5.js";import"./CheckOutlined.c65d724b.js";import"./DownOutlined.0a092c21.js";import"./index.8a3090d4.js";import"./index.5a8ac4c3.js";import"./UpOutlined.295dbc39.js";import"./index.6d9fa9bd.js";import"./RightOutlined.110875b9.js";import"./RedoOutlined.36e2d766.js";import"./index.f0e17223.js";import"./EllipsisOutlined.47b33eec.js";import"./types.8dd1ee9d.js";import"./Tree.a1dd0f44.js";import"./util.7278f0a6.js";/* empty css              */import"./uuid.4f650357.js";import"./index.a2f2a38d.js";import"./DeleteOutlined.9c056e8d.js";import"./index.961f3028.js";import"./useModal.7d6dedb2.js";import"./useTimeout.7ba08caf.js";import"./useWindowSizeFn.ed3f5f8f.js";import"./FullscreenOutlined.4735b01b.js";import"./index.0dd9b41b.js";import"./Dropdown.b0072d7c.js";import"./index.5371f713.js";import"./LeftOutlined.0cd212b0.js";import"./download.8fc15711.js";import"./domUtils.aabf47da.js";import"./_stringToArray.b588e6cb.js";import"./index.7667756c.js";import"./useScrollTo.ac3a376b.js";import"./index.6d3f3949.js";import"./index.a6da0b6b.js";import"./usePageContext.2b9d3437.js";import"./transButton.e2548e2a.js";import"./ArrowLeftOutlined.b7214818.js";var d=l({components:{BasicForm:e,CollapseContainer:t,PageWrapper:i},setup(){const[e]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[t]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:t}}});d.render=function(e,o,t,i,l,d){const c=s("BasicForm"),m=s("CollapseContainer"),f=s("PageWrapper");return p(),n(f,{title:"可折叠表单示例"},{default:r((()=>[a(m,{title:"基础收缩示例"},{default:r((()=>[a(c,{onRegister:e.register},null,8,["onRegister"])])),_:1}),a(m,{title:"超过3行自动收起",class:"mt-4"},{default:r((()=>[a(c,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default d;
