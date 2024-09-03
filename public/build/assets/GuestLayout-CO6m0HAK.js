import{r as n,y as r,j as e,af as s}from"./app-C_35CnGi.js";import{A as c}from"./ApplicationLogo-41eVRYNn.js";function o(){const[i,t]=n.useState(!1),l=r().props;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center relative right-0",children:e.jsx("button",{onClick:()=>t(a=>!a),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})}),e.jsxs("div",{className:`sidebar ${i?"active":"0"}`,children:[l.auth.user?e.jsx("div",{className:"sidebar_content",children:e.jsxs(s,{method:"post",href:route("logout"),as:"button",className:"text-gray-400 transition-all hover:tracking-[2px]",children:[e.jsx("i",{className:"bx bx-log-in"}),"Log Out"]})}):e.jsx("div",{className:"sidebar_content",children:e.jsxs(s,{href:"/login",children:[e.jsx("i",{className:"bx bx-log-in"}),"Log In"]})}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"sidebar_links",children:[e.jsx("h6",{className:"sidebar_title",children:"Navigation"}),e.jsx("div",{className:"sidebar_content",children:e.jsxs("a",{href:"/index.html",children:[e.jsx("i",{className:"bx bxs-basketball"}),"Home"]})}),e.jsx("div",{className:"sidebar_content",children:e.jsxs("a",{href:"/reccommedation.html",children:[e.jsx("i",{className:"bx bxs-basketball"}),"Recommendation"]})}),e.jsx("div",{className:"sidebar_content",children:e.jsxs("a",{href:"",children:[e.jsx("i",{className:"bx bxs-basketball"}),"The Torch Articles"]})}),e.jsx("div",{className:"sidebar_content",children:e.jsxs("a",{href:"",children:[e.jsx("i",{className:"bx bxs-basketball"}),"Freedom Wall"]})}),e.jsx("div",{className:"sidebar_links"})]})]})]})}function h({children:i}){var l;const t=(l=r().props)==null?void 0:l.categories;return e.jsxs("div",{className:"bg-primary-1 h-full",children:[e.jsxs("div",{className:`relative w-full
                xl:max-w-screen-xl xl:mx-auto
                `,children:[e.jsxs("div",{className:`flex items-center justify-between z-10 bg-primary-1
                    w-full px-4
                    fixed top-0 h-[100px]  
                    sm:px-0 sm:mx-auto
                    xl:max-w-screen-xl`,children:[e.jsx(c,{}),e.jsx("div",{className:"relative",children:e.jsx(o,{})})]}),e.jsxs("div",{className:"custom-nav",children:[e.jsx(s,{href:"/",className:"",children:"HOME"}),t.map(a=>e.jsx(s,{href:`/category/${a.slug}`,children:a.category},a.category_id)),e.jsx(s,{href:"/freedom-wall",children:"FREEDOM WALL"}),e.jsx(s,{href:"/freedom-wall"})]}),i]}),e.jsxs("footer",{className:"bg-gradient p-8 mt-8 flex flex-col lg:items-center",children:[e.jsx("div",{className:"my-4 bg-white h-[1px] w-full"}),e.jsxs("div",{className:"flex flex-col justify-around gap-6 lg:flex-row",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h1",{className:"font-bold text-white mb-4",children:"TCGC"}),e.jsxs("ul",{className:"text-white",children:[e.jsx("li",{children:"Tangub City, Misamis Occidental"}),e.jsx("li",{children:"(088)-545-2793"}),e.jsx("li",{children:"gadtc@gadtc.edu.ph"}),e.jsx("li",{children:"www.facebook.com/gadtcluxmundi"})]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"font-bold text-white mb-4",children:"The Torch Publication"}),e.jsx("p",{className:"text-white",children:`The Torch is Tangub City Global College's official publication. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"text-white font-bold mb-4",children:e.jsx("a",{href:"",children:"The Torch"})}),e.jsx("div",{className:"text-white",children:e.jsx("a",{href:"",children:"torch@gmail.com"})})]})]}),e.jsx("div",{className:"text-white mt-6 text-left",children:"©Torch Publication | All Rights Reserved"})]})]})}export{h as G};
