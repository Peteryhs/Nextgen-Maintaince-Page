(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7139:function(e,r,a){Promise.resolve().then(a.bind(a,4936))},4936:function(e,r,a){"use strict";a.r(r),a.d(r,{BackgroundGradientAnimation:function(){return c}});var t=a(3827),o=a(3167),n=a(1367);function i(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return(0,n.m6)((0,o.W)(r))}var l=a(4090);let c=e=>{let{gradientBackgroundStart:r="rgb(17, 54, 87)",gradientBackgroundEnd:a="rgb(5, 20, 38)",firstColor:o="25, 160, 255",secondColor:n="30, 200, 180",thirdColor:c="50, 220, 255",fourthColor:s="100, 170, 255",fifthColor:d="140, 220, 200",pointerColor:u="80, 140, 255",size:v="80%",blendingValue:_="hard-light",children:b,className:f,interactive:g=!0,containerClassName:m}=e,p=(0,l.useRef)(null),[h,y]=(0,l.useState)(0),[x,z]=(0,l.useState)(0),[j,k]=(0,l.useState)(0),[N,w]=(0,l.useState)(0);return(0,l.useEffect)(()=>{document.body.style.setProperty("--gradient-background-start",r),document.body.style.setProperty("--gradient-background-end",a),document.body.style.setProperty("--first-color",o),document.body.style.setProperty("--second-color",n),document.body.style.setProperty("--third-color",c),document.body.style.setProperty("--fourth-color",s),document.body.style.setProperty("--fifth-color",d),document.body.style.setProperty("--pointer-color",u),document.body.style.setProperty("--size",v),document.body.style.setProperty("--blending-value",_)},[]),(0,l.useEffect)(()=>{p.current&&(y(h+(j-h)/20),z(x+(N-x)/20),p.current.style.transform="translate(".concat(Math.round(h),"px, ").concat(Math.round(x),"px)"))},[j,N]),(0,t.jsxs)("div",{className:i("h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",m),children:[(0,t.jsx)("svg",{className:"hidden",children:(0,t.jsx)("defs",{children:(0,t.jsxs)("filter",{id:"blurMe",children:[(0,t.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),(0,t.jsx)("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8",result:"goo"}),(0,t.jsx)("feBlend",{in:"SourceGraphic",in2:"goo"})]})})}),(0,t.jsx)("div",{className:i("",f),children:b}),(0,t.jsxs)("div",{className:"gradients-container [filter:url(#blurMe)_blur(40px)] h-full w-full",children:[(0,t.jsx)("div",{className:i("absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]","[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]","[transform-origin:center_center]","animate-first","opacity-100")}),(0,t.jsx)("div",{className:i("absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]","[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]","[transform-origin:calc(50%-400px)]","animate-second","opacity-100")}),(0,t.jsx)("div",{className:i("absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]","[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]","[transform-origin:calc(50%+400px)]","animate-third","opacity-100")}),(0,t.jsx)("div",{className:i("absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]","[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]","[transform-origin:calc(50%-200px)]","animate-fourth","opacity-70")}),(0,t.jsx)("div",{className:i("absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]","[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]","[transform-origin:calc(50%-800px)_calc(50%+800px)]","animate-fifth","opacity-100")}),g&&(0,t.jsx)("div",{ref:p,onMouseMove:e=>{if(p.current){let r=p.current.getBoundingClientRect();k(e.clientX-r.left),w(e.clientY-r.top)}},className:i("absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]","[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2","opacity-70")})]})]})}}},function(e){e.O(0,[150,971,69,744],function(){return e(e.s=7139)}),_N_E=e.O()}]);