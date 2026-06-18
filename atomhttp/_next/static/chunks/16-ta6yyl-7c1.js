(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,36331,e=>{"use strict";var t=e.i(43476),s=e.i(71645),a=e.i(15147),i=e.i(49136);let r=[{title:"Basic installation",desc:"Minimal setup for production use",code:"pip install atomhttp"},{title:"With development dependencies",desc:"Includes pytest, black, mypy, ruff for development",code:"pip install atomhttp[dev]"},{title:"With testing dependencies only",desc:"Only testing tools without linters",code:"pip install atomhttp[test]"}],n=[{title:"Basic GET request",desc:"Simple request to fetch a single resource with automatic cleanup",code:`import asyncio
from atomhttp import AtomHTTP

async def main():
    async with AtomHTTP() as client:
        response = await client.get('https://jsonplaceholder.typicode.com/posts/1')
        print(f"Status: {response.status}")
        print(f"Title: {response.data['title']}")
        print(f"User ID: {response.data['userId']}")

asyncio.run(main())`},{title:"With configuration",desc:"Using baseURL, timeout, and default headers",code:`import asyncio
from atomhttp import AtomHTTP

async def main():
    client = AtomHTTP({
        'baseURL': 'https://jsonplaceholder.typicode.com',
        'timeout': 10,
        'headers': {'Accept': 'application/json'}
    })
    
    response = await client.get('/posts', params={'_limit': 5})
    
    for post in response.data:
        print(f"Post {post['id']}: {post['title'][:50]}...")
    
    await client.close()

asyncio.run(main())`},{title:"POST request with JSON",desc:"Creating a new resource",code:`import asyncio
from atomhttp import AtomHTTP

async def main():
    client = AtomHTTP({'baseURL': 'https://jsonplaceholder.typicode.com'})
    
    new_post = await client.post('/posts', data={
        'title': 'My Awesome Post',
        'body': 'This is the content of my post',
        'userId': 1
    })
    
    print(f"Created with ID: {new_post.data['id']}")
    print(f"Status: {new_post.status}")
    
    await client.close()

asyncio.run(main())`}],o=["3.8","3.9","3.10","3.11","3.12","3.13"],l=["Windows 10/11","macOS (Intel + Apple Silicon)","Linux (Ubuntu, Debian, CentOS, etc.)","WSL (Windows Subsystem for Linux)"],c=[{href:"/docs/core-api",title:"Core API →",desc:"HTTP methods, response handling, configuration, headers, parameters, and error handling"},{href:"/docs/advanced",title:"Advanced Features →",desc:"Interceptors, progress tracking, FormData, concurrent requests, and authentication"},{href:"/docs/reference",title:"API Reference →",desc:"Complete API documentation, comparison charts, and examples"},{href:"https://github.com/inject3r/atomhttp",title:"GitHub →",desc:"Source code, issues, contributions, and releases",external:!0}],d=({children:e})=>(0,t.jsx)("div",{className:"border border-white/10 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent p-6 sm:p-8",children:e}),m=({title:e,items:s})=>(0,t.jsxs)("div",{className:"border border-white/10 rounded-xl p-5",children:[(0,t.jsx)("h3",{className:"font-medium text-white mb-3",children:e}),(0,t.jsx)("ul",{className:"space-y-2 text-gray-400 text-sm",children:s.map(e=>(0,t.jsxs)("li",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-white/60",children:"•"}),(0,t.jsx)("span",{children:e})]},e))})]}),h=({href:e,title:s,desc:a,external:i})=>{let r=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{className:"font-medium text-white mb-1 group-hover:text-white/80 transition-colors",children:s}),(0,t.jsx)("p",{className:"text-xs text-gray-500",children:a})]});return i?(0,t.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"block border border-white/10 rounded-xl p-4 hover:border-white/30 hover:bg-white/[0.02] transition-all group",children:(0,t.jsx)(r,{})}):(0,t.jsx)("a",{href:e,className:"block border border-white/10 rounded-xl p-4 hover:border-white/30 hover:bg-white/[0.02] transition-all group",children:(0,t.jsx)(r,{})})};e.s(["default",0,function(){return(0,s.useEffect)(()=>{if(window.location.hash){let e=window.location.hash.substring(1),t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h1",{className:"text-2xl sm:text-3xl font-bold text-white mb-2",children:"Getting Started"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400",children:"Everything you need to start making HTTP requests with AtomHTTP"})]}),(0,t.jsxs)("div",{className:"space-y-10 sm:space-y-12",children:[(0,t.jsxs)(a.default,{id:"overview",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Why AtomHTTP?"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"AtomHTTP is a modern asynchronous HTTP client for Python that combines the best features from popular libraries while adding unique capabilities like progress tracking, interceptors, and full type hints."})]}),(0,t.jsxs)(d,{children:[(0,t.jsx)("p",{className:"text-gray-300 text-base sm:text-lg mb-4",children:"AtomHTTP is a modern, feature-rich asynchronous HTTP client designed for Python developers who need reliability, flexibility, and performance."}),(0,t.jsx)("p",{className:"text-gray-400 leading-relaxed text-sm sm:text-base",children:"With comprehensive built-in features including interceptors, progress tracking, multiple response types (JSON, text, blob, arraybuffer, stream), FormData support, concurrent request helpers, and thorough error handling with standardized error codes — AtomHTTP provides everything you need for production-grade HTTP communication."})]})]}),(0,t.jsxs)(a.default,{id:"installation",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Installation"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"Install AtomHTTP using pip. The library has minimal dependencies and works with Python 3.8 and above."})]}),(0,t.jsx)("div",{className:"space-y-4",children:r.map(e=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-sm text-gray-300 mb-2",children:[e.title,":",(0,t.jsx)("span",{className:"text-gray-500 text-xs ml-2",children:e.desc})]}),(0,t.jsx)(i.default,{language:"bash",code:e.code})]},e.title))}),(0,t.jsxs)("div",{className:"mt-4 p-4 bg-white/5 border border-white/10 rounded-lg",children:[(0,t.jsx)("p",{className:"text-white/80 text-sm",children:"Requires Python 3.8 or higher"}),(0,t.jsx)("p",{className:"text-gray-500 text-sm mt-1",children:"Core dependency: aiohttp 3.8.0+ (automatically installed)"})]})]}),(0,t.jsxs)(a.default,{id:"quick-start",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Quick Start"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"Create a client instance and start making requests in just a few lines of code."})]}),(0,t.jsx)("div",{className:"space-y-6",children:n.map(e=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"text-sm text-gray-300 mb-2",children:[e.title,":",(0,t.jsx)("span",{className:"text-gray-500 text-xs ml-2",children:e.desc})]}),(0,t.jsx)(i.default,{language:"python",code:e.code})]},e.title))})]}),(0,t.jsxs)(a.default,{id:"requirements",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"System Requirements"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"AtomHTTP works on all major operating systems and has minimal requirements."})]}),(0,t.jsxs)("div",{className:"grid sm:grid-cols-2 gap-4",children:[(0,t.jsx)(m,{title:"Python Version",items:o}),(0,t.jsx)(m,{title:"Operating Systems",items:l})]})]}),(0,t.jsxs)(a.default,{id:"first-request",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Your First Request"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"Let's make a complete example that demonstrates the most common features."})]}),(0,t.jsx)(i.default,{language:"python",code:`import asyncio
from atomhttp import AtomHTTP

async def main():
    # 1. Create client with configuration
    client = AtomHTTP({
        'baseURL': 'https://jsonplaceholder.typicode.com',
        'timeout': 10,
        'headers': {
            'Accept': 'application/json',
            'User-Agent': 'AtomHTTP-Demo/1.0'
        }
    })
    
    # 2. GET request with query parameters
    print("Fetching posts...")
    response = await client.get('/posts', params={'_limit': 3})
    
    print(f"Status: {response.status}")
    print(f"Headers: {dict(list(response.headers.items())[:3])}")
    
    for post in response.data:
        print(f"  Post {post['id']}: {post['title'][:40]}...")
    
    # 3. POST request
    print("\\nCreating a new post...")
    new_post = await client.post('/posts', data={
        'title': 'Hello AtomHTTP!',
        'body': 'This is my first request with AtomHTTP',
        'userId': 1
    })
    
    print(f"Created with ID: {new_post.data['id']}")
    print(f"Response status: {new_post.status}")
    
    # 4. Clean up
    await client.close()
    print("\\nDone!")

if __name__ == "__main__":
    asyncio.run(main())`})]}),(0,t.jsxs)(a.default,{id:"next-steps",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Next Steps"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"Now that you've mastered the basics, explore more advanced features."})]}),(0,t.jsx)("div",{className:"grid sm:grid-cols-2 gap-4",children:c.map(e=>(0,t.jsx)(h,{href:e.href,title:e.title,desc:e.desc,external:e.external},e.href))})]})]})]})}])}]);