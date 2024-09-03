import{y as x,aa as g,r as a,j as e,a as i,Y as p}from"./app-C_35CnGi.js";import{I as v}from"./index-BFhdJJAC.js";import{B as N}from"./button-WSihWei9.js";import{G as b}from"./GuestLayout-CO6m0HAK.js";import"./EyeOutlined-Cjdgiodv.js";import"./ApplicationLogo-41eVRYNn.js";function y({articleId:s}){const d=x().props,{data:n,setData:c,errors:_,reset:u}=g({article_id:s,user_id:0,comment:""}),[r,h]=a.useState(),[j,m]=a.useState(!1),o=()=>{i.get("/get-comment-by-article/"+s).then(t=>{h(t.data)})};a.useEffect(()=>{o()},[]);const f=t=>{t.preventDefault(),m(!0),i.post(route("comment.store"),n).then(l=>{console.log(n),l.data.status==="saved"&&(u(),o(),m(!1))}).catch(l=>{m(!1)})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"my-5",children:[r&&e.jsx("div",{className:"font-bold",children:"COMMENTS: "}),r==null?void 0:r.map(t=>e.jsxs("div",{className:"my-5 flex gap-3",children:[e.jsx("div",{children:e.jsx("img",{src:"/img/user.png",alt:"avatar",width:30})}),e.jsxs("div",{className:"flex-1 flex flex-col",children:[e.jsxs("div",{className:"font-bold text-[.7rem] text-green-950",children:[t.user.lname,",  ",t.user.fname]}),e.jsx("div",{children:t.comment})]})]},t.comment_id)),d.auth.user&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{}),e.jsx("form",{onSubmit:f,children:e.jsxs("div",{className:"my-5 flex gap-3",children:[e.jsx("div",{children:e.jsx("img",{src:"/img/user.png",alt:"avatar",width:30})}),e.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsx(v.TextArea,{placeholder:"Add a comment...",required:!0,onChange:t=>c("comment",t.target.value)}),e.jsx(N,{htmlType:"submit",loading:j,className:"ml-auto",children:"Comment"})]})]})})]})]})})}function T({article:s}){x().props,a.useState(""),new Date(s.date_published),a.useEffect(()=>{s&&d()},[]);const d=async()=>{try{const n=await i.post("/count-view/"+s.article_id)}catch{}};return e.jsxs(b,{children:[e.jsx(p,{title:"View Article"}),e.jsxs("div",{className:"my-6 mx-4 ",children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("img",{className:"mx-auto rounded-2xl",src:`/storage/featured_images/${s==null?void 0:s.featured_image}`}),e.jsx("div",{className:"text-center",children:s.featured_image_caption})]}),e.jsx("div",{className:"font-bold text-green-950 text-xl",children:s.category.category}),e.jsx("div",{className:"font-bold text-[2.4rem] mb-6",children:s.title}),e.jsx("div",{className:"bg-green-950 h-[1px]"}),e.jsx("div",{className:"font-bold text-[1.5rem] my-6",children:s==null?void 0:s.excerpt}),e.jsx("div",{className:"bg-green-950 h-[1px]"}),e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{children:["Date Published: ",s.date_published]}),e.jsxs("div",{children:["Author: ",s.author.lname,", ",s.author.fname]}),e.jsxs("div",{children:["Views: ",s.views]})]}),e.jsx("div",{className:"text-justify text-xl mt-6 prose !max-w-none",dangerouslySetInnerHTML:{__html:s.article_content}}),e.jsx(y,{articleId:s.article_id})]})]})}export{T as default};
