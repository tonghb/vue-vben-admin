import{aK as t,aI as e,r as n,cW as o}from"./index.b140c207.js";function r(r,a){if(!t(r))throw new Error("handle is not Function!");const{readyRef:s,stop:i,start:u}=function(t){const e=n(!1);let r;function a(){e.value=!1,r&&window.clearTimeout(r)}function s(){a(),r=setTimeout((()=>{e.value=!0}),t)}return s(),o(a),{readyRef:e,stop:a,start:s}}(a);return e(s,(t=>{t&&r()}),{immediate:!1}),{readyRef:s,stop:i,start:u}}export{r as u};