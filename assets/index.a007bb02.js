import{d as e,r as t,e as a,g as o,h as s,o as r,i,w as n,j as p,m as l}from"./index.150b21ea.js";import{I as d}from"./index.cbd3d407.js";import{d as m}from"./ScrollContainer.284652b4.js";import{u}from"./useCopyToClipboard.bd08302f.js";import{_ as c}from"./index.4a5da437.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.40128210.js";import"./EyeOutlined.3ef03474.js";import"./index.7667756c.js";import"./domUtils.aabf47da.js";import"./_stringToArray.b588e6cb.js";import"./RightOutlined.110875b9.js";/* empty css              */import"./useTimeout.7ba08caf.js";import"./useScrollTo.ac3a376b.js";import"./index.6d3f3949.js";import"./index.f0e17223.js";import"./EllipsisOutlined.47b33eec.js";import"./types.8dd1ee9d.js";import"./isEqual.a3b5962a.js";import"./toInteger.53532229.js";import"./DownOutlined.0a092c21.js";import"./index.a6da0b6b.js";import"./usePageContext.2b9d3437.js";import"./transButton.e2548e2a.js";import"./ArrowLeftOutlined.b7214818.js";var j=e({name:"Copy",components:{CollapseContainer:m,PageWrapper:c,[d.name]:d},setup(){const e=t(""),{createMessage:s}=o(),{clipboardRef:r,copiedRef:i}=u();return{handleCopy:function(){const t=a(e);t?(r.value=t,a(i)&&s.warning("copy success！")):s.warning("请输入要拷贝的内容！")},value:e}}});const f={class:"flex justify-center"},b=l(" Copy ");j.render=function(e,t,a,o,l,d){const m=s("a-input"),u=s("a-button"),c=s("CollapseContainer"),j=s("PageWrapper");return r(),i(j,{title:"文本复制示例"},{default:n((()=>[p(c,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:n((()=>[p("div",f,[p(m,{placeholder:"请输入",value:e.value,"onUpdate:value":t[1]||(t[1]=t=>e.value=t)},null,8,["value"]),p(u,{type:"primary",onClick:e.handleCopy},{default:n((()=>[b])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default j;
