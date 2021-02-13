import{d as e,h as t,o as i,i as r,bw as o,j as s}from"./index.150b21ea.js";import{D as d}from"./index.0dd9b41b.js";import{D as a}from"./index.18aff8f3.js";import{_ as m}from"./index.1189ca60.js";import{_ as n}from"./index.4a5da437.js";import{refundSchema as p,refundData as c,personSchema as j,personData as l,refundTableData as u,refundTableSchema as f,refundTimeTableSchema as b,refundTimeTableData as x}from"./data.c87c2f90.js";import{u as g}from"./useTable.3fb3ce14.js";import"./vendor.3b1829c7.js";import"./index.ae2cf2de.js";import"./responsiveObserve.c545f1cc.js";import"./ScrollContainer.284652b4.js";import"./index.7667756c.js";import"./domUtils.aabf47da.js";import"./_stringToArray.b588e6cb.js";import"./RightOutlined.110875b9.js";/* empty css              */import"./useTimeout.7ba08caf.js";import"./useScrollTo.ac3a376b.js";import"./get.368b1aae.js";import"./index.a0fc6fd5.js";import"./SearchOutlined.40128210.js";import"./CheckOutlined.c65d724b.js";import"./DownOutlined.0a092c21.js";import"./BasicForm.6cd02257.js";import"./index.c220ea3a.js";import"./index.c08be64c.js";import"./findIndex.b9407814.js";import"./isEqual.a3b5962a.js";import"./_baseProperty.74f89655.js";import"./toInteger.53532229.js";import"./index.2c9b5d58.js";import"./index.cbd3d407.js";import"./EyeOutlined.3ef03474.js";import"./index.8a3090d4.js";import"./index.5a8ac4c3.js";import"./UpOutlined.295dbc39.js";import"./index.6d9fa9bd.js";import"./RedoOutlined.36e2d766.js";import"./index.f0e17223.js";import"./EllipsisOutlined.47b33eec.js";import"./types.8dd1ee9d.js";import"./Tree.a1dd0f44.js";import"./util.7278f0a6.js";import"./uuid.4f650357.js";import"./index.a2f2a38d.js";import"./DeleteOutlined.9c056e8d.js";import"./index.961f3028.js";import"./useModal.7d6dedb2.js";import"./useWindowSizeFn.ed3f5f8f.js";import"./FullscreenOutlined.4735b01b.js";import"./Dropdown.b0072d7c.js";import"./index.5371f713.js";import"./LeftOutlined.0cd212b0.js";import"./download.8fc15711.js";import"./index.71a71df8.js";import"./DoubleLeftOutlined.442d3464.js";import"./DoubleRightOutlined.f5c447ff.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.e2548e2a.js";import"./CaretDownFilled.e5b4b601.js";import"./useForm.583dbd41.js";import"./clickOutside.736894ae.js";import"./useSortable.01e25087.js";import"./useExpose.226e1580.js";import"./index.6d3f3949.js";import"./index.a6da0b6b.js";import"./usePageContext.2b9d3437.js";import"./ArrowLeftOutlined.b7214818.js";import"./index.c224f507.js";import"./isNumeric.2bec345d.js";var h=e({components:{Description:a,BasicTable:m,PageWrapper:n,[d.name]:d},setup(){const[e]=g({title:"退货商品",dataSource:u,columns:f,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,i=0;return e.forEach((e=>{t+=e.t5,i+=e.t6})),[{t1:"总计",t5:t,t6:i}]}}),[t]=g({title:"退货进度",columns:b,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:p,refundData:c,personSchema:j,personData:l}}});const O=o("data-v-ada482fc"),D=O(((e,o,d,a,m,n)=>{const p=t("Description"),c=t("a-divider"),j=t("BasicTable"),l=t("PageWrapper");return i(),r(l,{title:"基础详情页",contentBackground:""},{default:O((()=>[s(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),s(c),s(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),s(c),s(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),s(c),s(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=D,h.__scopeId="data-v-ada482fc";export default h;
