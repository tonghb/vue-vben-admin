import{M as e}from"./index.f33d69ab.js";import{_ as t}from"./index.4a5da437.js";import{d as n,r as a,e as o,h as r,o as i,i as s,w as d,j as m,m as l}from"./index.150b21ea.js";import"./index.6d3f3949.js";import"./index.f0e17223.js";import"./RightOutlined.110875b9.js";import"./EllipsisOutlined.47b33eec.js";import"./types.8dd1ee9d.js";import"./isEqual.a3b5962a.js";import"./toInteger.53532229.js";import"./DownOutlined.0a092c21.js";/* empty css              */import"./index.a6da0b6b.js";import"./usePageContext.2b9d3437.js";import"./transButton.e2548e2a.js";import"./ArrowLeftOutlined.b7214818.js";import"./vendor.3b1829c7.js";var p=n({components:{MarkDown:e,PageWrapper:t},setup(){const e=a(null),t=a("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const t=o(e);if(!t)return;t.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e}}}});const u=l(" 黑暗主题 ");p.render=function(e,t,n,a,o,l){const p=r("a-button"),f=r("MarkDown"),j=r("PageWrapper");return i(),s(j,{title:"MarkDown组件示例"},{default:d((()=>[m(p,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:d((()=>[u])),_:1},8,["onClick"]),m(f,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default p;
