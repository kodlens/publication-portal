import{r as p,j as s,a as n}from"./app-C_35CnGi.js";import{U as o,R as m,s as d}from"./UploadOutlined-B28avLs1.js";import{B as l}from"./button-WSihWei9.js";import"./DeleteOutlined-Cg3Y78uN.js";import"./EyeOutlined-Cjdgiodv.js";import"./index-Cjboe2qx.js";const R=()=>{console.log("how many times");const[a,c]=p.useState([{uid:"-1",name:"image",status:"done",url:"storage/featured_images/cf7bae55751fbfed198469d0810872d1.jpeg"}]),r={name:"featured_image",action:"/temp-upload",beforeUpload:e=>{const t=e.type==="image/png",i=e.type==="image/jpeg";return t||i||o.LIST_IGNORE},onChange(e){console.log("info onchange",e),e.file.status==="done"||e.file.status},onRemove(e){n.post("/temp-remove/"+e.response).then(t=>{t.data.status==="temp_deleted"&&d.success("File removed.")})}};return s.jsx(o,{...r,listType:"picture",fileList:a,children:s.jsx(l,{icon:s.jsx(m,{}),children:"Upload"})})};export{R as default};