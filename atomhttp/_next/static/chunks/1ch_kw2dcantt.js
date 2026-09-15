(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,36331,e=>{"use strict";var t=e.i(43476),s=e.i(71645),a=e.i(15147),i=e.i(49136);let n=[{title:"Basic installation",desc:"Minimal setup — small runtime footprint",code:"pip install atomhttp"},{title:"With SOCKS proxy support",desc:"Adds PySocks for socks4/socks5 proxies",code:"pip install atomhttp[socks]"},{title:"With Brotli support",desc:"Transparent decoding of Content-Encoding: br responses",code:"pip install atomhttp[brotli]"},{title:"With development dependencies",desc:"Includes pytest, black, mypy, ruff for development",code:"pip install atomhttp[dev]"}],o=[{title:"Basic GET request",desc:"Simple, synchronous — no event loop needed",code:`from atomhttp import AtomHTTP

client = AtomHTTP()
response = client.get('https://jsonplaceholder.typicode.com/posts/1')

print(f"Status: {response.status}")
print(f"Title: {response.data['title']}")
print(f"User ID: {response.data['userId']}")`},{title:"With configuration",desc:"Using base_url, timeout, and default headers",code:`from atomhttp import AtomHTTP

client = AtomHTTP(
    base_url='https://jsonplaceholder.typicode.com',
    timeout=10,
    headers={'Accept': 'application/json'},
)

response = client.get('/posts', params={'_limit': 5})

for post in response.data:
    print(f"Post {post['id']}: {post['title'][:50]}...")`},{title:"POST request with JSON",desc:"Creating a new resource",code:`from atomhttp import AtomHTTP

client = AtomHTTP(base_url='https://jsonplaceholder.typicode.com')

new_post = client.post('/posts', data={
    'title': 'My Awesome Post',
    'body': 'This is the content of my post',
    'userId': 1,
})

print(f"Created with ID: {new_post.data['id']}")
print(f"Status: {new_post.status}")`},{title:"Async, if you need it",desc:"Same API, same transport — just await it",code:`import asyncio
from atomhttp import AsyncAtomHTTP

async def main():
    async with AsyncAtomHTTP(base_url='https://jsonplaceholder.typicode.com') as client:
        response = await client.get('/posts/1')
        print(response.data['title'])

asyncio.run(main())`}],r=["3.8","3.9","3.10","3.11","3.12","3.13"],l=["Windows 10/11","macOS (Intel + Apple Silicon)","Linux (Ubuntu, Debian, CentOS, etc.)","WSL (Windows Subsystem for Linux)"],c=[{href:"/docs/core-api",title:"Core API →",desc:"HTTP methods, response handling, configuration, headers, parameters, and error handling"},{href:"/docs/advanced",title:"Advanced Features →",desc:"Cancellation, multithreading, streaming, caching, interceptors, and more"},{href:"/docs/reference",title:"API Reference →",desc:"Complete API documentation, comparison charts, and examples"},{href:"https://github.com/inject3r/atomhttp",title:"GitHub →",desc:"Source code, issues, contributions, and releases",external:!0}],d=({children:e})=>(0,t.jsx)("div",{className:"border border-white/10 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent p-6 sm:p-8",children:e}),m=({title:e,items:s})=>(0,t.jsxs)("div",{className:"border border-white/10 rounded-xl p-5",children:[(0,t.jsx)("h3",{className:"font-medium text-white mb-3",children:e}),(0,t.jsx)("ul",{className:"space-y-2 text-gray-400 text-sm",children:s.map(e=>(0,t.jsxs)("li",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-white/60",children:"•"}),(0,t.jsx)("span",{children:e})]},e))})]}),h=({href:e,title:s,desc:a,external:i})=>{let n=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{className:"font-medium text-white mb-1 group-hover:text-white/80 transition-colors",children:s}),(0,t.jsx)("p",{className:"text-xs text-gray-500",children:a})]});return i?(0,t.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"block border border-white/10 rounded-xl p-4 hover:border-white/30 hover:bg-white/[0.02] transition-all group",children:(0,t.jsx)(n,{})}):(0,t.jsx)("a",{href:e,className:"block border border-white/10 rounded-xl p-4 hover:border-white/30 hover:bg-white/[0.02] transition-all group",children:(0,t.jsx)(n,{})})};e.s(["default",0,function(){return(0,s.useEffect)(()=>{if(window.location.hash){let e=window.location.hash.substring(1),t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h1",{className:"text-2xl sm:text-3xl font-bold text-white mb-2",children:"Getting Started"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400",children:"Everything you need to start making HTTP requests with AtomHTTP"})]}),(0,t.jsxs)("div",{className:"space-y-10 sm:space-y-12",children:[(0,t.jsxs)(a.default,{id:"overview",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Why AtomHTTP?"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"AtomHTTP is a synchronous-first HTTP client for Python with fully optional async support — designed to be simple for everyday requests while remaining powerful enough for production applications."})]}),(0,t.jsxs)(d,{children:[(0,t.jsxs)("p",{className:"text-gray-300 text-base sm:text-lg mb-4",children:["Most HTTP client code doesn't need ",(0,t.jsx)("code",{children:"async"}),"/",(0,t.jsx)("code",{children:"await"}),". AtomHTTP doesn't force it on you — every method on ",(0,t.jsx)("code",{children:"AtomHTTP"})," returns a response directly, no event loop required. When you do want async,"," ",(0,t.jsx)("code",{children:"AsyncAtomHTTP"})," offers the exact same API, backed by the exact same transport."]}),(0,t.jsxs)("p",{className:"text-gray-400 leading-relaxed text-sm sm:text-base",children:["With cancellation (axios/fetch-style ",(0,t.jsx)("code",{children:"AbortController"}),"), a persistent thread pool for real concurrency without async, true streaming for large uploads/downloads, pagination helpers, HTTP caching, interceptors, retries with backoff, and full type hints — AtomHTTP provides everything you need for production-grade HTTP communication, sync or async."]})]})]}),(0,t.jsxs)(a.default,{id:"installation",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Installation"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"Install AtomHTTP using pip. The library has exactly one runtime dependency and works with Python 3.8 and above."})]}),(0,t.jsx)("div",{className:"space-y-4",children:n.map(e=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-sm text-gray-300 mb-2",children:[e.title,":",(0,t.jsx)("span",{className:"text-gray-500 text-xs ml-2",children:e.desc})]}),(0,t.jsx)(i.default,{language:"bash",code:e.code})]},e.title))}),(0,t.jsxs)("div",{className:"mt-4 p-4 bg-white/5 border border-white/10 rounded-lg",children:[(0,t.jsx)("p",{className:"text-white/80 text-sm",children:"Requires Python 3.8 or higher"}),(0,t.jsx)("p",{className:"text-gray-500 text-sm mt-1",children:"Minimal runtime dependencies and a small, stable surface area make AtomHTTP easy to adopt in existing projects."})]})]}),(0,t.jsxs)(a.default,{id:"quick-start",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Quick Start"}),(0,t.jsxs)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:["Create a client instance and start making requests in just a few lines of code — no ",(0,t.jsx)("code",{children:"asyncio.run()"})," required."]})]}),(0,t.jsx)("div",{className:"space-y-6",children:o.map(e=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-sm text-gray-300 mb-2",children:[e.title,":",(0,t.jsx)("span",{className:"text-gray-500 text-xs ml-2",children:e.desc})]}),(0,t.jsx)(i.default,{language:"python",code:e.code})]},e.title))})]}),(0,t.jsxs)(a.default,{id:"sync-vs-async",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Sync vs Async"}),(0,t.jsxs)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:[(0,t.jsx)("code",{children:"AtomHTTP"})," (sync) and ",(0,t.jsx)("code",{children:"AsyncAtomHTTP"})," ","(async) expose an identical method surface and share the same urllib3-based transport. ",(0,t.jsx)("code",{children:"AsyncAtomHTTP"})," doesn't reimplement anything — it runs the same blocking call in a worker thread via ",(0,t.jsx)("code",{children:"loop.run_in_executor()"}),", so the event loop stays responsive."]})]}),(0,t.jsx)(i.default,{language:"python",code:`from atomhttp import AtomHTTP, AsyncAtomHTTP

# Sync -- the default, no event loop required
client = AtomHTTP(base_url="https://api.example.com")
response = client.get("/users/1")

# Async -- fully optional, identical behavior
async with AsyncAtomHTTP(base_url="https://api.example.com") as client:
    response = await client.get("/users/1")

# Convert between them without losing state (cookies, interceptors, pools):
async_client = client.as_async()
sync_client = async_client.as_sync()`})]}),(0,t.jsxs)(a.default,{id:"requirements",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"System Requirements"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"AtomHTTP works on all major operating systems and has minimal requirements. Tested on Python 3.8–3.13 across Linux, macOS, and Windows in CI."})]}),(0,t.jsxs)("div",{className:"grid sm:grid-cols-2 gap-4",children:[(0,t.jsx)(m,{title:"Python Version",items:r}),(0,t.jsx)(m,{title:"Operating Systems",items:l})]})]}),(0,t.jsxs)(a.default,{id:"first-request",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Your First Request"}),(0,t.jsxs)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:["Let's make a complete example that demonstrates the most common features — still without a single ",(0,t.jsx)("code",{children:"await"}),"."]})]}),(0,t.jsx)(i.default,{language:"python",code:`from atomhttp import AtomHTTP

# 1. Create client with configuration
client = AtomHTTP(
    base_url='https://jsonplaceholder.typicode.com',
    timeout=10,
    headers={
        'Accept': 'application/json',
        'User-Agent': 'AtomHTTP-Demo/1.0',
    },
)

# 2. GET request with query parameters
print("Fetching posts...")
response = client.get('/posts', params={'_limit': 3})

print(f"Status: {response.status}")
print(f"Headers: {dict(list(response.headers.items())[:3])}")

for post in response.data:
    print(f"  Post {post['id']}: {post['title'][:40]}...")

# 3. POST request
print("\\nCreating a new post...")
new_post = client.post('/posts', data={
    'title': 'Hello AtomHTTP!',
    'body': 'This is my first request with AtomHTTP',
    'userId': 1,
})

print(f"Created with ID: {new_post.data['id']}")
print(f"Response status: {new_post.status}")

# 4. Clean up (releases pooled connections + the thread pool)
client.close()
print("\\nDone!")`})]}),(0,t.jsxs)(a.default,{id:"next-steps",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Next Steps"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"Now that you've mastered the basics, explore more advanced features."})]}),(0,t.jsx)("div",{className:"grid sm:grid-cols-2 gap-4",children:c.map(e=>(0,t.jsx)(h,{href:e.href,title:e.title,desc:e.desc,external:e.external},e.href))})]})]})]})}])}]);