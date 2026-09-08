(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5711241,e=>{"use strict";let t=(0,e.i(3456420).default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",0,t],5711241)},9508734,6689664,e=>{"use strict";var t=e.i(3456420);let a=(0,t.default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["Copy",0,a],9508734);let o=(0,t.default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["Check",0,o],6689664)},9500534,e=>{"use strict";var t=e.i(7843476),a=e.i(4522016),o=e.i(5711241),s=e.i(9508734),r=e.i(6689664),n=e.i(5271645);e.s(["default",0,function(){let[e,c]=(0,n.useState)(!1),d="/ip-address-database",i=async e=>{try{await navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),2e3)}catch(e){console.error("Failed to copy:",e)}},l=[{method:"GET",path:`${d}/data/asn.json`,description:"Get list of all ASNs with organization details",example:`{
  "total_asns": 84756,
  "total_networks": 1304915,
  "asns": [
    {
      "asn": "12311",
      "country_code": "AU",
      "name": "GTELECOM-AS-AP",
      "org": "Gtelecom Pty Ltd",
      "network_count": 150
    }
  ],
  "updated_at": "2026-07-30T01:49:17"
}`},{method:"GET",path:`${d}/data/asn/{countryCode}/get.json`,description:"Get all ASNs for a specific country",example:`[
  {
    "network": "1.0.4.0/22",
    "asn": "38803",
    "country_code": "AU",
    "name": "GTELECOM-AS-AP",
    "org": "Gtelecom Pty Ltd",
    "domain": "gtelecom.com.au"
  }
]`},{method:"GET",path:`${d}/data/asn/{countryCode}/{asn}/get.json`,description:"Get detailed data for a specific ASN",example:`[
  {
    "network": "1.0.4.0/22",
    "asn": "38803",
    "country_code": "AU",
    "name": "GTELECOM-AS-AP",
    "org": "Gtelecom Pty Ltd",
    "domain": "gtelecom.com.au"
  }
]`}];return(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)(a.default,{href:"/docs",className:"inline-flex items-center gap-2 text-[#6f8a7d] hover:text-[#c6d2ca] transition-colors font-mono text-sm",children:[(0,t.jsx)(o.ArrowLeft,{size:16}),"Back to Documentation"]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("div",{className:"flex items-center gap-3",children:(0,t.jsx)("span",{className:"text-xs font-mono font-bold text-[#5c8aff] tracking-widest uppercase bg-[rgba(92,138,255,.08)] px-3 py-1 rounded-md border border-[rgba(92,138,255,.1)]",children:"API Reference"})}),(0,t.jsx)("h1",{className:"text-3xl md:text-4xl font-bold font-mono text-[#f2fff8]",children:"ASN API"}),(0,t.jsx)("p",{className:"text-[#93a79d] font-mono text-lg max-w-2xl",children:"Retrieve Autonomous System Number details with organization and domain information."})]}),(0,t.jsx)("div",{className:"space-y-4",children:l.map((a,o)=>(0,t.jsxs)("div",{className:"bg-[rgba(92,138,255,.03)] border border-[rgba(92,138,255,.08)] rounded-xl p-6",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-3",children:[(0,t.jsx)("span",{className:"text-xs font-mono font-bold text-[#5c8aff] bg-[rgba(92,138,255,.08)] px-2 py-1 rounded border border-[rgba(92,138,255,.1)]",children:a.method}),(0,t.jsx)("code",{className:"font-mono text-sm text-[#7fe9ab]",children:a.path})]}),(0,t.jsx)("p",{className:"text-[#6f8a7d] font-mono text-sm",children:a.description}),(0,t.jsxs)("div",{className:"relative mt-3",children:[(0,t.jsx)("pre",{className:"bg-[#0a100d] border border-[rgba(34,229,122,.06)] rounded-lg p-4 overflow-x-auto font-mono text-sm text-[#7fe9ab]",children:a.example}),(0,t.jsx)("button",{onClick:()=>i(a.example),className:"absolute top-3 right-3 p-1.5 rounded-md bg-[rgba(34,229,122,.06)] hover:bg-[rgba(34,229,122,.1)] transition-colors",children:e?(0,t.jsx)(r.Check,{size:14,className:"text-[#22e57a]"}):(0,t.jsx)(s.Copy,{size:14,className:"text-[#6f8a7d]"})})]})]},o))})]})}])}]);