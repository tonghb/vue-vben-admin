import{_ as e}from"./index.1189ca60.js";import{getBasicColumns as i,getBasicData as t}from"./tableData.252346e9.js";import{d as o,r,h as s,o as a,i as d,j as n,w as p,m as l,l as m}from"./index.150b21ea.js";import"./index.a0fc6fd5.js";import"./SearchOutlined.40128210.js";import"./CheckOutlined.c65d724b.js";import"./DownOutlined.0a092c21.js";import"./BasicForm.6cd02257.js";import"./index.c220ea3a.js";import"./index.c08be64c.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.b9407814.js";import"./isEqual.a3b5962a.js";import"./get.368b1aae.js";import"./_baseProperty.74f89655.js";import"./toInteger.53532229.js";import"./index.2c9b5d58.js";import"./index.cbd3d407.js";import"./EyeOutlined.3ef03474.js";import"./index.8a3090d4.js";import"./index.5a8ac4c3.js";import"./UpOutlined.295dbc39.js";import"./index.6d9fa9bd.js";import"./RightOutlined.110875b9.js";import"./RedoOutlined.36e2d766.js";import"./index.f0e17223.js";import"./EllipsisOutlined.47b33eec.js";import"./types.8dd1ee9d.js";import"./Tree.a1dd0f44.js";import"./util.7278f0a6.js";/* empty css              */import"./uuid.4f650357.js";import"./index.a2f2a38d.js";import"./DeleteOutlined.9c056e8d.js";import"./index.961f3028.js";import"./useModal.7d6dedb2.js";import"./useTimeout.7ba08caf.js";import"./useWindowSizeFn.ed3f5f8f.js";import"./ScrollContainer.284652b4.js";import"./index.7667756c.js";import"./domUtils.aabf47da.js";import"./_stringToArray.b588e6cb.js";import"./useScrollTo.ac3a376b.js";import"./FullscreenOutlined.4735b01b.js";import"./index.0dd9b41b.js";import"./Dropdown.b0072d7c.js";import"./index.5371f713.js";import"./LeftOutlined.0cd212b0.js";import"./download.8fc15711.js";import"./index.71a71df8.js";import"./DoubleLeftOutlined.442d3464.js";import"./DoubleRightOutlined.f5c447ff.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.e2548e2a.js";import"./CaretDownFilled.e5b4b601.js";import"./useForm.583dbd41.js";import"./clickOutside.736894ae.js";import"./useSortable.01e25087.js";import"./useExpose.226e1580.js";var c=o({components:{BasicTable:e},setup(){const e=r(!1),o=r(!1),s=r(!0),a=r(!0),d=r(!1);return{columns:i(),data:t(),canResize:e,loading:o,striped:s,border:a,toggleStriped:function(){s.value=!s.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){o.value=!0,setTimeout((()=>{o.value=!1,d.value={pageSize:20}}),3e3)},toggleBorder:function(){a.value=!a.value},pagination:d}}});const j={class:"p-4"},u=l(" 开启loading ");c.render=function(e,i,t,o,r,c){const b=s("a-button"),f=s("BasicTable");return a(),d("div",j,[n(f,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:p((()=>[n(b,{type:"primary",onClick:e.toggleCanResize},{default:p((()=>[l(m(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),n(b,{type:"primary",onClick:e.toggleBorder},{default:p((()=>[l(m(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),n(b,{type:"primary",onClick:e.toggleLoading},{default:p((()=>[u])),_:1},8,["onClick"]),n(b,{type:"primary",onClick:e.toggleStriped},{default:p((()=>[l(m(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default c;
