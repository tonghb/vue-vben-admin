import{a as t,r as s,ba as e,i as a,o as r,j as o,w as i,k as n}from"./index.b140c207.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67b83eb2.js";import{s as d}from"./index.40756bd5.js";import"./index.e47dd816.js";import"./RightOutlined.1c70c502.js";import"./useTimeout.235d9d8d.js";import"./resizeEvent.5bf811bd.js";import"./domUtils.c5071c6b.js";import"./useExpose.978c5fca.js";import"./animation.1adf111b.js";import"./index.abc9c33d.js";import{u as p}from"./useApexCharts.c026bf28.js";var c=t({components:{CollapseContainer:d},setup(){const t=s(null),{setOptions:a}=p(t);return e((()=>{a({series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},chart:{height:350,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},title:{show:!1},tooltip:{x:{show:!1}},markers:{size:0},xaxis:{categories:["2011","2012","2013","2014","2015","2016"]},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}}})})),{chartRef:t}}});const l={ref:"chartRef",style:{width:"100%"}};c.render=function(t,s,e,d,p,c){const m=a("CollapseContainer");return r(),o(m,{title:"销售统计",canExpan:!1},{default:i((()=>[n("div",l,null,512)])),_:1})};export default c;