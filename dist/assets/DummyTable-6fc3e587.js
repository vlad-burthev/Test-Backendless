import{r as l,u as d,j as s}from"./index-c1b5d985.js";const p=({tabs:e})=>{const[t,o]=l.useState(null),{pathname:r}=d(),i=r.split("/").pop();return l.useEffect(()=>{const n=e.find(c=>c.id===i);n&&o(n)},[e,i]),s.jsx("table",{children:s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:t==null?void 0:t.title.split(" ")[0]}),s.jsx("td",{children:t==null?void 0:t.title.split(" ")[1]})]})})})};export{p as default};
