import{j as s,Y as a,af as t}from"./app-CzuViuCp.js";import{G as i}from"./GuestLayout-Dq2TFkfB.js";import"./ApplicationLogo-rT3vg_nV.js";function x({categoryArticles:r}){const o=(n,e)=>{const d=n.split(" ");return d.length>e?d.slice(0,e).join(" ")+"...":n};return s.jsx(i,{children:s.jsxs("div",{className:"h-full",children:[s.jsx(a,{title:"Categories Page"}),r.map(n=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"mt-8",children:[s.jsx("div",{className:"font-bold mb-2",children:n.category}),s.jsx("div",{className:"flex gap-6 flex-wrap",children:n.articles.map(e=>s.jsxs("div",{className:"w-[300px]",children:[e.featured_image?s.jsx(t,{href:`/view/${e.slug}`,children:s.jsx("div",{className:`h-[200px] w-[300px] overflow-hidden flex justify-center 
                                                                items-center rounded-2xl shadow-md flex-col`,style:{background:`url(/storage/featured_images/${e==null?void 0:e.featured_image.trim()}) no-repeat`,backgroundPosition:"center",backgroundSize:"cover"}})}):s.jsx("div",{className:`h-[200px] overflow-hidden flex justify-center 
                                                            items-center rounded-2xl shadow-md flex-col`,style:{background:"url('/img/default.jpg') no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}),s.jsx("div",{className:"font-bold my-2",children:e==null?void 0:e.title}),s.jsx("div",{className:"text-justify",children:o(e==null?void 0:e.excerpt,20)})]},e.article_id))})]},n.category_id)}))]})})}export{x as default};