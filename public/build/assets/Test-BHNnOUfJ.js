import{r as n,j as s,a as p}from"./app-BiwK4mYR.js";import{U as o,R as m,s as d}from"./index-C-MtzFFf.js";import{B as l}from"./button-DPgAOse5.js";import"./useForceUpdate-D_69VEQw.js";import"./index-CqgVqaCo.js";const j=()=>{console.log("how many times");const[a,c]=n.useState([{uid:"-1",name:"image",status:"done",url:"storage/featured_images/cf7bae55751fbfed198469d0810872d1.jpeg"}]),r={name:"featured_image",action:"/temp-upload",beforeUpload:e=>{const t=e.type==="image/png",i=e.type==="image/jpeg";return t||i||o.LIST_IGNORE},onChange(e){console.log("info onchange",e),e.file.status==="done"||e.file.status},onRemove(e){p.post("/temp-remove/"+e.response).then(t=>{t.data.status==="temp_deleted"&&d.success("File removed.")})}};return s.jsx(o,{...r,listType:"picture",fileList:a,children:s.jsx(l,{icon:s.jsx(m,{}),children:"Upload"})})};export{j as default};