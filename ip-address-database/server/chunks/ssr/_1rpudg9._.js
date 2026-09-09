module.exports=[19107,a=>{"use strict";let b=(0,a.i(64831).default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);a.s(["ArrowLeft",0,b],19107)},85650,52562,a=>{"use strict";var b=a.i(64831);let c=(0,b.default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);a.s(["Copy",0,c],85650);let d=(0,b.default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);a.s(["Check",0,d],52562)},88379,a=>{"use strict";var b=a.i(87924),c=a.i(38246),d=a.i(19107),e=a.i(85650),f=a.i(52562),g=a.i(72131);a.s(["default",0,function(){let[a,h]=(0,g.useState)(!1),i="/ip-address-database",j=async a=>{try{await navigator.clipboard.writeText(a),h(!0),setTimeout(()=>h(!1),2e3)}catch(a){console.error("Failed to copy:",a)}},k=[{method:"GET",path:`${i}/data/asn.json`,description:"Get list of all ASNs with organization details",example:`{
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
}`},{method:"GET",path:`${i}/data/asn/{countryCode}/get.json`,description:"Get all ASNs for a specific country",example:`[
  {
    "network": "1.0.4.0/22",
    "asn": "38803",
    "country_code": "AU",
    "name": "GTELECOM-AS-AP",
    "org": "Gtelecom Pty Ltd",
    "domain": "gtelecom.com.au"
  }
]`},{method:"GET",path:`${i}/data/asn/{countryCode}/{asn}/get.json`,description:"Get detailed data for a specific ASN",example:`[
  {
    "network": "1.0.4.0/22",
    "asn": "38803",
    "country_code": "AU",
    "name": "GTELECOM-AS-AP",
    "org": "Gtelecom Pty Ltd",
    "domain": "gtelecom.com.au"
  }
]`}];return(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsxs)(c.default,{href:"/docs",className:"inline-flex items-center gap-2 text-[#6f8a7d] hover:text-[#c6d2ca] transition-colors font-mono text-sm",children:[(0,b.jsx)(d.ArrowLeft,{size:16}),"Back to Documentation"]}),(0,b.jsxs)("div",{className:"space-y-3",children:[(0,b.jsx)("div",{className:"flex items-center gap-3",children:(0,b.jsx)("span",{className:"text-xs font-mono font-bold text-[#5c8aff] tracking-widest uppercase bg-[rgba(92,138,255,.08)] px-3 py-1 rounded-md border border-[rgba(92,138,255,.1)]",children:"API Reference"})}),(0,b.jsx)("h1",{className:"text-3xl md:text-4xl font-bold font-mono text-[#f2fff8]",children:"ASN API"}),(0,b.jsx)("p",{className:"text-[#93a79d] font-mono text-lg max-w-2xl",children:"Retrieve Autonomous System Number details with organization and domain information."})]}),(0,b.jsx)("div",{className:"space-y-4",children:k.map((c,d)=>(0,b.jsxs)("div",{className:"bg-[rgba(92,138,255,.03)] border border-[rgba(92,138,255,.08)] rounded-xl p-6",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3 mb-3",children:[(0,b.jsx)("span",{className:"text-xs font-mono font-bold text-[#5c8aff] bg-[rgba(92,138,255,.08)] px-2 py-1 rounded border border-[rgba(92,138,255,.1)]",children:c.method}),(0,b.jsx)("code",{className:"font-mono text-sm text-[#7fe9ab]",children:c.path})]}),(0,b.jsx)("p",{className:"text-[#6f8a7d] font-mono text-sm",children:c.description}),(0,b.jsxs)("div",{className:"relative mt-3",children:[(0,b.jsx)("pre",{className:"bg-[#0a100d] border border-[rgba(34,229,122,.06)] rounded-lg p-4 overflow-x-auto font-mono text-sm text-[#7fe9ab]",children:c.example}),(0,b.jsx)("button",{onClick:()=>j(c.example),className:"absolute top-3 right-3 p-1.5 rounded-md bg-[rgba(34,229,122,.06)] hover:bg-[rgba(34,229,122,.1)] transition-colors",children:a?(0,b.jsx)(f.Check,{size:14,className:"text-[#22e57a]"}):(0,b.jsx)(e.Copy,{size:14,className:"text-[#6f8a7d]"})})]})]},d))})]})}])}];

//# sourceMappingURL=_1rpudg9._.js.map