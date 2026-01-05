import{j as n}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.Cd_vQiNd.js";function p({sponsors:a}){const o=s.useRef(null);s.useEffect(()=>{const e=o.current;if(!e)return;let r,t=0;const m=.5,i=()=>{t+=m,t>=e.scrollWidth/2&&(t=0),e.scrollLeft=t,r=requestAnimationFrame(i)};return r=requestAnimationFrame(i),e.addEventListener("mouseenter",()=>{cancelAnimationFrame(r)}),e.addEventListener("mouseleave",()=>{r=requestAnimationFrame(i)}),()=>{cancelAnimationFrame(r)}},[]);const l=[...a,...a,...a];return n.jsxs("div",{style:{width:"100%",overflow:"hidden",position:"relative",padding:"2rem 0",marginTop:"-40px",marginBottom:"-90px"},children:[n.jsx("div",{style:{textAlign:"center",marginBottom:"3rem",animation:"fadeInDown 1s ease-out"},children:n.jsx("h2",{style:{fontSize:"clamp(1.5rem, 3vw, 2rem)",fontWeight:"500",color:"inherit",maxWidth:"900px",margin:"0 auto",padding:"0 1rem"},children:"Trivandrum's elite web dev force — trusted by the companies that run the city."})}),n.jsx("div",{style:{position:"absolute",left:0,top:"5rem",bottom:0,width:"150px",background:"linear-gradient(to right, white, transparent)",zIndex:2,pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",right:0,top:"5rem",bottom:0,width:"150px",background:"linear-gradient(to left, white, transparent)",zIndex:2,pointerEvents:"none"}}),n.jsx("div",{ref:o,style:{display:"flex",gap:"4rem",overflow:"hidden",padding:"2rem 0",cursor:"pointer"},children:l.map((e,r)=>n.jsx("div",{style:{flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",minWidth:"200px",height:"100px",filter:"grayscale(100%)",opacity:.7,transition:"all 0.4s ease",animation:`floatSlow ${3+r%3}s ease-in-out infinite`,animationDelay:`${r*.2}s`},onMouseEnter:t=>{t.currentTarget.style.filter="grayscale(0%)",t.currentTarget.style.opacity="1",t.currentTarget.style.transform="scale(1.15) translateY(-5px)"},onMouseLeave:t=>{t.currentTarget.style.filter="grayscale(100%)",t.currentTarget.style.opacity="0.7",t.currentTarget.style.transform="scale(1) translateY(0)"},children:n.jsx("img",{src:e.logo,alt:e.alt,style:{height:e.size==="h-20"?"80px":e.larger?"64px":"48px",width:"auto",objectFit:"contain",maxWidth:"180px"}})},r))}),n.jsx("style",{children:`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `})]})}export{p as default};
