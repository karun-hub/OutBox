import{j as r}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.Cd_vQiNd.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,a)=>a?a.toUpperCase():i.toLowerCase()),m=o=>{const t=f(o);return t.charAt(0).toUpperCase()+t.slice(1)},x=(...o)=>o.filter((t,i,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===i).join(" ").trim(),v=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=s.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:l,iconNode:e,...n},b)=>s.createElement("svg",{ref:b,...C,width:t,height:t,stroke:o,strokeWidth:a?Number(i)*24/Number(t):i,className:x("lucide",c),...!l&&!v(n)&&{"aria-hidden":"true"},...n},[...e.map(([d,u])=>s.createElement(d,u)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(o,t)=>{const i=s.forwardRef(({className:a,...c},l)=>s.createElement(k,{ref:l,iconNode:t,className:x(`lucide-${y(m(o))}`,`lucide-${o}`,a),...c}));return i.displayName=m(o),i};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],j=g("code",w);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],I=g("lock",S);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],z=g("server",T);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],E=g("shield",R);function _(){const[o,t]=s.useState(""),[i,a]=s.useState(0),c=`const initializeSystem = () => {
  const encryption = new AES256();
  const servers = loadBalancer.connect();
  
  return Promise.all([
    encryption.validate(),
    servers.ping(),
    database.sync()
  ]);
};

await initializeSystem();
> System initialized ✓
> Security protocols active ✓
> Ready for deployment`;s.useEffect(()=>{let e=0;const n=setInterval(()=>{e<c.length?(t(c.slice(0,e+1)),e++):clearInterval(n)},30);return()=>clearInterval(n)},[]),s.useEffect(()=>{const e=setInterval(()=>{a(n=>(n+1)%4)},2e3);return()=>clearInterval(e)},[]);const l=[{Icon:E,activeColor:"#fb923c",inactiveColor:"#666"},{Icon:I,activeColor:"#f97316",inactiveColor:"#666"},{Icon:j,activeColor:"#ea580c",inactiveColor:"#666"},{Icon:z,activeColor:"#fdba74",inactiveColor:"#666"}];return r.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",minHeight:"600px"},children:[r.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none"},children:l.map((e,n)=>{const{Icon:b,activeColor:d,inactiveColor:u}=e,h=[{top:"2rem",left:"2rem"},{top:"3rem",right:"3rem"},{bottom:"4rem",left:"4rem"},{bottom:"2rem",right:"2rem"}],p=i===n;return r.jsx("div",{style:{position:"absolute",...h[n],transition:"all 0.5s",transform:p?"scale(1.1)":"scale(1)",opacity:p?1:.4,color:p?d:u},children:r.jsx("div",{style:{padding:"1rem",borderRadius:"1rem",backdropFilter:"blur(4px)",border:`1px solid ${p?d+"40":"rgba(255,255,255,0.1)"}`,backgroundColor:p?d+"20":"rgba(100, 100, 100, 0.1)"},children:r.jsx(b,{size:28})})},n)})}),r.jsxs("div",{style:{position:"relative",zIndex:10,width:"100%",maxWidth:"32rem"},children:[r.jsx("div",{style:{backgroundColor:"rgba(24, 24, 27, 0.9)",backdropFilter:"blur(12px)",border:"1px solid rgba(249, 115, 22, 0.3)",borderTopLeftRadius:"0.75rem",borderTopRightRadius:"0.75rem",overflow:"hidden",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem 1rem",background:"linear-gradient(to right, rgba(67, 20, 7, 0.5), rgba(24, 24, 27, 1))",borderBottom:"1px solid rgba(249, 115, 22, 0.2)"},children:[r.jsx("div",{style:{width:"0.75rem",height:"0.75rem",borderRadius:"9999px",backgroundColor:"#ef4444",cursor:"pointer",transition:"background-color 0.3s"}}),r.jsx("div",{style:{width:"0.75rem",height:"0.75rem",borderRadius:"9999px",backgroundColor:"#eab308",cursor:"pointer",transition:"background-color 0.3s"}}),r.jsx("div",{style:{width:"0.75rem",height:"0.75rem",borderRadius:"9999px",backgroundColor:"#22c55e",cursor:"pointer",transition:"background-color 0.3s"}}),r.jsx("span",{style:{marginLeft:"1rem",color:"#fb923c",fontFamily:"monospace",fontSize:"0.875rem"},children:"system@outObox:/root"})]})}),r.jsxs("div",{style:{backgroundColor:"rgba(24, 24, 27, 0.95)",backdropFilter:"blur(12px)",border:"1px solid rgba(249, 115, 22, 0.3)",borderTop:"none",borderBottomLeftRadius:"0.75rem",borderBottomRightRadius:"0.75rem",padding:"1.5rem",minHeight:"320px",fontFamily:"monospace",fontSize:"0.875rem",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"},children:[r.jsx("div",{children:r.jsxs("div",{style:{color:"#fb923c",whiteSpace:"pre-wrap",wordBreak:"break-word",lineHeight:"1.625",fontSize:"0.75rem"},children:[o,r.jsx("span",{style:{animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"},children:"█"})]})}),r.jsx("div",{style:{marginTop:"2rem",paddingTop:"1.5rem",borderTop:"1px solid rgba(249, 115, 22, 0.2)"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#f97316",fontSize:"0.75rem"},children:[r.jsx("span",{style:{width:"0.5rem",height:"0.5rem",borderRadius:"9999px",backgroundColor:"#f97316",animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"}}),r.jsx("span",{children:"Status: Active"})]})})]}),r.jsxs("div",{style:{marginTop:"1rem",display:"flex",gap:"0.75rem"},children:[r.jsx("button",{style:{flex:1,background:"linear-gradient(to right, #f97316, #ea580c)",color:"#000",fontWeight:"bold",padding:"0.625rem 1rem",borderRadius:"0.5rem",fontSize:"0.875rem",border:"none",cursor:"pointer",transition:"all 0.3s",boxShadow:"0 0 0 rgba(249, 115, 22, 0)"},onMouseEnter:e=>{e.currentTarget.style.background="linear-gradient(to right, #fb923c, #f97316)",e.currentTarget.style.transform="scale(1.05)",e.currentTarget.style.boxShadow="0 0 20px rgba(249, 115, 22, 0.5)"},onMouseLeave:e=>{e.currentTarget.style.background="linear-gradient(to right, #f97316, #ea580c)",e.currentTarget.style.transform="scale(1)",e.currentTarget.style.boxShadow="0 0 0 rgba(249, 115, 22, 0)"},children:"EXECUTE"}),r.jsx("button",{style:{flex:1,border:"1px solid rgba(249, 115, 22, 0.5)",color:"#fb923c",fontFamily:"monospace",padding:"0.625rem 1rem",borderRadius:"0.5rem",fontSize:"0.875rem",cursor:"pointer",transition:"all 0.3s",backgroundColor:"rgba(24, 24, 27, 0.5)",boxShadow:"0 0 0 rgba(249, 115, 22, 0)"},onMouseEnter:e=>{e.currentTarget.style.borderColor="#f97316",e.currentTarget.style.color="#fdba74",e.currentTarget.style.backgroundColor="rgba(67, 20, 7, 0.3)",e.currentTarget.style.boxShadow="0 0 20px rgba(249, 115, 22, 0.2)"},onMouseLeave:e=>{e.currentTarget.style.borderColor="rgba(249, 115, 22, 0.5)",e.currentTarget.style.color="#fb923c",e.currentTarget.style.backgroundColor="rgba(24, 24, 27, 0.5)",e.currentTarget.style.boxShadow="0 0 0 rgba(249, 115, 22, 0)"},children:"REVIEW"})]}),r.jsx("div",{style:{position:"absolute",inset:0,zIndex:-1,backgroundColor:"rgba(249, 115, 22, 0.05)",filter:"blur(60px)",borderRadius:"9999px"}})]}),r.jsx("div",{style:{position:"absolute",inset:0,zIndex:-2,opacity:.2},children:r.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:`linear-gradient(rgba(249, 115, 22, 0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(249, 115, 22, 0.15) 1px, transparent 1px)`,backgroundSize:"40px 40px"}})})]})}export{_ as default};
