import{j as u,r as e}from"./app-EVvRSE4A.js";function d({message:t,className:s="",...n}){return t?u.jsx("p",{...n,className:"text-sm text-red-600 "+s,children:t}):null}const l=e.forwardRef(function({type:s="text",className:n="",isFocused:c=!1,...f},a){const o=e.useRef(null);return e.useImperativeHandle(a,()=>({focus:()=>{var r;return(r=o.current)==null?void 0:r.focus()}})),e.useEffect(()=>{var r;c&&((r=o.current)==null||r.focus())},[]),u.jsx("input",{...f,type:s,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+n,ref:o})});export{d as I,l as T};
