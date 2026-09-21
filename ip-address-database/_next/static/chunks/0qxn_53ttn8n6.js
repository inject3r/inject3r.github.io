(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,11241,e=>{"use strict";let t=(0,e.i(56420).default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",0,t],11241)},8734,89664,e=>{"use strict";var t=e.i(56420);let a=(0,t.default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["Copy",0,a],8734);let o=(0,t.default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["Check",0,o],89664)},70055,e=>{"use strict";var t=e.i(43476),a=e.i(22016),o=e.i(11241),s=e.i(8734),r=e.i(89664),n=e.i(71645);e.s(["default",0,function(){let[e,c]=(0,n.useState)(!1),d="/ip-address-database",i=async e=>{try{await navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),2e3)}catch(e){console.error("Failed to copy:",e)}},l=[{method:"GET",path:`${d}/data/country.json`,description:"Get list of all countries with network counts",example:`{
  "total_countries": 248,
  "total_networks": 1304915,
  "countries": [
    {
      "code": "US",
      "name": "United States",
      "continent_code": "NA",
      "network_count": 250000
    }
  ],
  "updated_at": "2026-07-30T01:49:17"
}`},{method:"GET",path:`${d}/data/country/{countryCode}/get.json`,description:"Get detailed network data for a specific country",example:`[
  {
    "network": "192.168.1.0/24",
    "continent_code": "NA",
    "country_code": "US",
    "country_name": "United States"
  }
]`}];return(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)(a.default,{href:"/docs",className:"inline-flex items-center gap-2 text-[#6f8a7d] hover:text-[#c6d2ca] transition-colors font-mono text-sm",children:[(0,t.jsx)(o.ArrowLeft,{size:16}),"Back to Documentation"]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("div",{className:"flex items-center gap-3",children:(0,t.jsx)("span",{className:"text-xs font-mono font-bold text-[#22e57a] tracking-widest uppercase bg-[rgba(34,229,122,.08)] px-3 py-1 rounded-md border border-[rgba(34,229,122,.1)]",children:"API Reference"})}),(0,t.jsx)("h1",{className:"text-3xl md:text-4xl font-bold font-mono text-[#f2fff8]",children:"Countries API"}),(0,t.jsx)("p",{className:"text-[#93a79d] font-mono text-lg max-w-2xl",children:"Retrieve country-level IP data including continent, country name, and network ranges."})]}),(0,t.jsx)("div",{className:"space-y-4",children:l.map((a,o)=>(0,t.jsxs)("div",{className:"bg-[rgba(34,229,122,.03)] border border-[rgba(34,229,122,.08)] rounded-xl p-6",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-3",children:[(0,t.jsx)("span",{className:"text-xs font-mono font-bold text-[#22e57a] bg-[rgba(34,229,122,.08)] px-2 py-1 rounded border border-[rgba(34,229,122,.1)]",children:a.method}),(0,t.jsx)("code",{className:"font-mono text-sm text-[#7fe9ab]",children:a.path})]}),(0,t.jsx)("p",{className:"text-[#6f8a7d] font-mono text-sm",children:a.description}),(0,t.jsxs)("div",{className:"relative mt-3",children:[(0,t.jsx)("pre",{className:"bg-[#0a100d] border border-[rgba(34,229,122,.06)] rounded-lg p-4 overflow-x-auto font-mono text-sm text-[#7fe9ab]",children:a.example}),(0,t.jsx)("button",{onClick:()=>i(a.example),className:"absolute top-3 right-3 p-1.5 rounded-md bg-[rgba(34,229,122,.06)] hover:bg-[rgba(34,229,122,.1)] transition-colors",children:e?(0,t.jsx)(r.Check,{size:14,className:"text-[#22e57a]"}):(0,t.jsx)(s.Copy,{size:14,className:"text-[#6f8a7d]"})})]})]},o))})]})}])}]);