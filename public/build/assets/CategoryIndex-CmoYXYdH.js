import{r as s,R as U,j as e,Y as z,a as n}from"./app-C_35CnGi.js";import{A as L}from"./AuthenticatedLayout-LARI5ay4.js";import{F as d,R as G}from"./index-DIQTCdUJ.js";import{s as H,M as v,C as K}from"./index-6ufz01OF.js";import{F as S,S as V,R as q,P as J,a as Q}from"./FileAddOutlined-PghgUAL0.js";import{B as f}from"./button-WSihWei9.js";import{R as W}from"./DeleteOutlined-Cg3Y78uN.js";import{I}from"./index-BFhdJJAC.js";import"./ApplicationLogo-41eVRYNn.js";import"./transition-DGq7PIl-.js";import"./EyeOutlined-Cjdgiodv.js";import"./index-Cjboe2qx.js";const{Column:i}=S,{Search:X}=I;function me({auth:N}){const[l]=d.useForm(),[w,R]=s.useState([]),[h,u]=s.useState(!1),[b,k]=s.useState(0),[F,r]=s.useState(!1);U.useState(!1);const[y,P]=s.useState(5),[j,T]=s.useState(1),[A,Z]=s.useState(""),[m,g]=s.useState({}),[x,C]=s.useState(0),c=async()=>{u(!0);const t=[`search=${document.getElementById("search").value}`,`perpage=${y}`,`page=${j}`].join("&");try{const o=await n.get(`/admin/get-categories?${t}`);R(o.data.data),k(o.data.total),u(!1)}catch(o){u(!1),console.log(o)}};s.useEffect(()=>{c()},[y,A,j]);const E=(a,t)=>{T(a),P(t)},[O,$]=H.useNotification(),p=(a,t,o)=>{O.info({message:t,description:o,placement:a})},_=async a=>{try{const t=await n.get(`/admin/categories/${a}`);l.setFields([{name:"category",value:t.data.category},{name:"active",value:!!t.data.active}])}catch(t){console.log(t)}},D=()=>{C(0),r(!0)},B=a=>{g({}),C(a),r(!0),_(a)},M=async a=>{(await n.delete("/admin/categories/"+a)).data.status==="deleted"&&(p("bottomRight","Deleted!","Category successfully deleted."),c())},Y=async a=>{if(console.log(x),x>0)try{(await n.put("/admin/categories/"+x,a)).data.status==="updated"&&(p("bottomRight","Updated!","Category successfully update."),l.resetFields(),r(!1),c())}catch(t){t.response.status===422&&g(t.response.data.errors)}else try{(await n.post("/admin/categories",a)).data.status==="saved"&&(p("bottomRight","Saved!","Category successfully save."),l.resetFields(),r(!1),c())}catch(t){t.response.status===422&&g(t.response.data.errors)}};return e.jsxs(L,{user:N.user,children:[e.jsx(z,{title:"Category Management"}),$,e.jsx("div",{className:"flex mt-10 justify-center items-center",children:e.jsxs("div",{className:`p-6 w-full overflow-auto mx-2 bg-white shadow-sm rounded-md\r
					sm:w-[740px]`,children:[e.jsx("div",{className:"font-bold mb-4",children:"List of Category"}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2",children:e.jsx(X,{placeholder:"Search...",enterButton:"Search",size:"large",id:"search",loading:h,onSearch:c})}),e.jsxs(S,{dataSource:w,loading:h,rowKey:a=>a.category_id,pagination:!1,children:[e.jsx(i,{title:"Id",dataIndex:"category_id"}),e.jsx(i,{title:"Category",dataIndex:"category"},"category"),e.jsx(i,{title:"Slug",dataIndex:"slug"},"slug"),e.jsx(i,{title:"Active",dataIndex:"active",render:a=>a?e.jsx("span",{className:"bg-green-600 font-bold text-white text-[10px] px-2 py-1 rounded-full",children:"YES"}):e.jsx("span",{className:"bg-red-600 font-bold text-white text-[10px] px-2 py-1 rounded-full",children:"NO"})},"active"),e.jsx(i,{title:"Action",render:(a,t)=>e.jsxs(V,{size:"small",children:[e.jsx(f,{shape:"circle",icon:e.jsx(q,{}),onClick:()=>B(t.category_id)}),e.jsx(f,{danger:!0,shape:"circle",onClick:()=>v.confirm({title:"Delete?",icon:e.jsx(G,{}),content:"Are you sure you want to delete this data?",okText:"Yes",cancelText:"No",onOk(){M(t.category_id)}}),icon:e.jsx(W,{})})]})},"action")]}),e.jsx(J,{className:"mt-4",onChange:E,defaultCurrent:1,total:b}),e.jsx("div",{className:"flex flex-end mt-2",children:e.jsx(f,{className:"ml-auto",icon:e.jsx(Q,{}),type:"primary",onClick:D,children:"New"})})]})]})}),e.jsxs(v,{open:F,title:"CATEGORY INFORMATION",okText:"Save",cancelText:"Cancel",okButtonProps:{autoFocus:!0,htmlType:"submit"},onCancel:()=>r(!1),destroyOnClose:!0,modalRender:a=>e.jsx(d,{layout:"vertical",form:l,name:"form_in_modal",autoComplete:"off",initialValues:{category:"",active:!0},clearOnDestroy:!0,onFinish:t=>Y(t),children:a}),children:[e.jsx(d.Item,{name:"category",label:"Category",validateStatus:m.category?"error":"",help:m.category?m.category[0]:"",children:e.jsx(I,{placeholder:"Category"})}),e.jsx(d.Item,{name:"active",valuePropName:"checked",children:e.jsx(K,{children:"Active"})})]})]})}export{me as default};