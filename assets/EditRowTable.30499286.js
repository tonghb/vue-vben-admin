import{_ as e}from"./index.1189ca60.js";import{o as t}from"./select.fbe5366d.js";import{d as i}from"./table.b32fdd85.js";import{d as o,r as d,h as n,o as a,i as s,j as r,w as l}from"./index.150b21ea.js";import{_ as m}from"./BasicForm.6cd02257.js";import{u as p}from"./useTable.3fb3ce14.js";import"./index.a0fc6fd5.js";import"./SearchOutlined.40128210.js";import"./CheckOutlined.c65d724b.js";import"./DownOutlined.0a092c21.js";import"./index.c220ea3a.js";import"./index.c08be64c.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.b9407814.js";import"./isEqual.a3b5962a.js";import"./get.368b1aae.js";import"./_baseProperty.74f89655.js";import"./toInteger.53532229.js";import"./index.f0e17223.js";import"./RightOutlined.110875b9.js";import"./EllipsisOutlined.47b33eec.js";import"./types.8dd1ee9d.js";import"./index.71a71df8.js";import"./LeftOutlined.0cd212b0.js";import"./DoubleLeftOutlined.442d3464.js";import"./DoubleRightOutlined.f5c447ff.js";import"./zh_CN.8094f4d6.js";import"./uuid.4f650357.js";import"./index.a2f2a38d.js";import"./util.7278f0a6.js";import"./DeleteOutlined.9c056e8d.js";import"./EyeOutlined.3ef03474.js";import"./Dropdown.b0072d7c.js";/* empty css              */import"./scrollTo.c1e0f75f.js";import"./transButton.e2548e2a.js";import"./CaretDownFilled.e5b4b601.js";import"./useForm.583dbd41.js";import"./clickOutside.736894ae.js";import"./domUtils.aabf47da.js";import"./_stringToArray.b588e6cb.js";import"./index.cbd3d407.js";import"./index.5a8ac4c3.js";import"./UpOutlined.295dbc39.js";import"./index.6d9fa9bd.js";import"./useSortable.01e25087.js";import"./useTimeout.7ba08caf.js";import"./useWindowSizeFn.ed3f5f8f.js";import"./useModal.7d6dedb2.js";import"./ScrollContainer.284652b4.js";import"./index.7667756c.js";import"./useScrollTo.ac3a376b.js";import"./FullscreenOutlined.4735b01b.js";import"./index.0dd9b41b.js";import"./useExpose.226e1580.js";import"./index.2c9b5d58.js";import"./index.8a3090d4.js";import"./RedoOutlined.36e2d766.js";import"./Tree.a1dd0f44.js";import"./index.961f3028.js";import"./index.5371f713.js";import"./download.8fc15711.js";const c=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:200},{title:"输入框校验",dataIndex:"name1",editRow:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:t},width:200},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var u=o({components:{BasicTable:e,TableAction:m},setup(){const e=d(""),[t]=p({title:"可编辑行示例",api:i,columns:c,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function o(t){var i;e.value=t.key,null==(i=t.onEdit)||i.call(t,!0)}function n(t){var i;e.value="",null==(i=t.onEdit)||i.call(t,!1,!1)}async function a(t){var i;await(null==(i=t.onEdit)?void 0:i.call(t,!1,!0))&&(e.value="")}return{registerTable:t,handleEdit:o,createActions:function(t,i){return t.editable?[{label:"保存",onClick:a.bind(null,t,i)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:n.bind(null,t,i)}}]:[{label:"编辑",disabled:!!e.value&&e.value!==t.key,onClick:o.bind(null,t)}]}}}});const j={class:"p-4"};u.render=function(e,t,i,o,d,m){const p=n("TableAction"),c=n("BasicTable");return a(),s("div",j,[r(c,{onRegister:e.registerTable},{action:l((({record:t,column:i})=>[r(p,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"])])};export default u;
