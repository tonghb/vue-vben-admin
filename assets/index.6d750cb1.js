import{d as e,bB as t,h as s,o,i as r,w as l,j as i,m as a}from"./index.150b21ea.js";import{I as n}from"./index.cbd3d407.js";import{d as c}from"./ScrollContainer.284652b4.js";import{_ as m}from"./index.4a5da437.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.40128210.js";import"./EyeOutlined.3ef03474.js";import"./index.7667756c.js";import"./domUtils.aabf47da.js";import"./_stringToArray.b588e6cb.js";import"./RightOutlined.110875b9.js";/* empty css              */import"./useTimeout.7ba08caf.js";import"./useScrollTo.ac3a376b.js";import"./index.6d3f3949.js";import"./index.f0e17223.js";import"./EllipsisOutlined.47b33eec.js";import"./types.8dd1ee9d.js";import"./isEqual.a3b5962a.js";import"./toInteger.53532229.js";import"./DownOutlined.0a092c21.js";import"./index.a6da0b6b.js";import"./usePageContext.2b9d3437.js";import"./transButton.e2548e2a.js";import"./ArrowLeftOutlined.b7214818.js";var d=e({name:"TabsDemo",components:{CollapseContainer:c,PageWrapper:m,[n.name]:n},setup(){const{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:l,refreshPage:i}=t();return{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:l,refreshPage:i}}});const p=a(" 关闭所有 "),u=a(" 关闭左侧 "),f=a(" 关闭右侧 "),j=a(" 关闭其他 "),C=a(" 关闭当前 "),b=a(" 刷新当前 ");d.render=function(e,t,a,n,c,m){const d=s("a-input"),h=s("CollapseContainer"),g=s("a-button"),k=s("PageWrapper");return o(),r(k,{title:"标签页操作示例"},{default:l((()=>[i(h,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:l((()=>[i(d,{placeholder:"请输入"})])),_:1}),i(h,{class:"mt-4",title:"标签页操作"},{default:l((()=>[i(g,{class:"mr-2",onClick:e.closeAll},{default:l((()=>[p])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.closeLeft},{default:l((()=>[u])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.closeRight},{default:l((()=>[f])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.closeOther},{default:l((()=>[j])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.closeCurrent},{default:l((()=>[C])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.refreshPage},{default:l((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})};export default d;
