import{u as e}from"./useContextMenu.258545ea.js";import{d as t}from"./ScrollContainer.284652b4.js";import{d as i,g as n,h as o,o as s,i as a,w as l,j as r,m as p}from"./index.150b21ea.js";import{_ as d}from"./index.4a5da437.js";import"./index.f0e17223.js";import"./RightOutlined.110875b9.js";import"./EllipsisOutlined.47b33eec.js";import"./types.8dd1ee9d.js";import"./isEqual.a3b5962a.js";import"./toInteger.53532229.js";/* empty css              */import"./index.0dd9b41b.js";import"./index.7667756c.js";import"./domUtils.aabf47da.js";import"./_stringToArray.b588e6cb.js";import"./useTimeout.7ba08caf.js";import"./useScrollTo.ac3a376b.js";import"./vendor.3b1829c7.js";import"./index.6d3f3949.js";import"./DownOutlined.0a092c21.js";import"./index.a6da0b6b.js";import"./usePageContext.2b9d3437.js";import"./transButton.e2548e2a.js";import"./ArrowLeftOutlined.b7214818.js";var m=i({components:{CollapseContainer:t,PageWrapper:d},setup(){const[t]=e(),{createMessage:i}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const u=p(" Right Click on me "),c=p(" Right Click on me ");m.render=function(e,t,i,n,p,d){const m=o("a-button"),b=o("CollapseContainer"),j=o("PageWrapper");return s(),a(j,{title:"右键菜单示例"},{default:l((()=>[r(b,{title:"Simple"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[u])),_:1},8,["onContextmenu"])])),_:1}),r(b,{title:"Multiple",class:"mt-4"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[c])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default m;
