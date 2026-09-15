(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42014,e=>{"use strict";var t=e.i(43476),s=e.i(71645),a=e.i(56420);let r={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};r.node;let o=(0,a.default)(r),l={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};l.node;let n=(0,a.default)(l),i={name:"file-braces",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]],aliases:["file-json"]};i.node;let c=(0,a.default)(i),d={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};d.node;let m=(0,a.default)(d),p={name:"file",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}]]};p.node;let h=(0,a.default)(p),u={name:"wind",size:24,node:[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]};u.node;let x=(0,a.default)(u);var f=e.i(15147),b=e.i(49136);let g=[{id:"atomhttp",label:"AtomHTTP",badge:(0,t.jsx)(o,{className:"w-3 h-3 text-white"})},{id:"requests",label:"requests",badge:(0,t.jsx)(n,{className:"w-3 h-3 text-gray-500"})},{id:"httpx",label:"httpx",badge:(0,t.jsx)(n,{className:"w-3 h-3 text-gray-500"})}],y=[{feature:"Sync API (no event loop required)",atomhttp:"✓",requests:"✓",httpx:"✓"},{feature:"Async API, same transport as sync",atomhttp:"✓",requests:"✗",httpx:"✓ (separate client)"},{feature:"Minimal runtime dependencies",atomhttp:"✓ (urllib3 only)",requests:"✓",httpx:"✓ (httpcore)"},{feature:"Cancellation (AbortController)",atomhttp:"✓",requests:"✗",httpx:"Manual task.cancel()"},{feature:"Persistent thread pool for concurrency",atomhttp:"✓ (.all/.submit/.map)",requests:"Manual ThreadPoolExecutor",httpx:"n/a (asyncio.gather)"},{feature:"Streaming multipart uploads (constant memory)",atomhttp:"✓ (automatic)",requests:"Manual generator",httpx:"Manual generator"},{feature:"Upload/download progress callbacks",atomhttp:"✓",requests:"✗",httpx:"✗"},{feature:"Pagination helper",atomhttp:"✓ (.paginate())",requests:"✗",httpx:"✗"},{feature:"ETag/Cache-Control caching",atomhttp:"✓ (CacheInterceptor)",requests:"Needs requests-cache",httpx:"✗"},{feature:"Request/response interceptors",atomhttp:"✓",requests:"✗",httpx:"✓ (event hooks)"},{feature:"Retry with backoff + Retry-After",atomhttp:"✓ (built-in)",requests:"Needs urllib3 Retry manually",httpx:"Needs external lib"},{feature:"Unix domain socket support",atomhttp:"✓",requests:"Needs requests-unixsocket",httpx:"✓"},{feature:"SOCKS proxy support",atomhttp:"✓ (extra)",requests:"✓ (extra)",httpx:"✓ (extra)"},{feature:"Mock adapter for testing",atomhttp:"✓ (MockAdapter)",requests:"Needs responses/requests-mock",httpx:"✓ (MockTransport)"}],j={atomhttp:{basic:`from atomhttp import AtomHTTP

client = AtomHTTP(base_url='https://jsonplaceholder.typicode.com')
response = client.get('/posts/1')   # no await needed
print(response.status, response.data['title'])`,concurrent:`from atomhttp import AtomHTTP

client = AtomHTTP(base_url='https://jsonplaceholder.typicode.com', max_workers=10)

responses = client.all([
    lambda: client.get('/posts/1'),
    lambda: client.get('/posts/2'),
    lambda: client.get('/posts/3'),
])

for resp in responses:
    print(f"Post {resp.data['id']}: {resp.data['title'][:30]}...")`,progress:`from atomhttp import AtomHTTP

def on_upload(loaded, total):
    print(f"Upload: {loaded}/{total} bytes")

client = AtomHTTP(base_url='https://httpbin.org')
with open('test.txt', 'rb') as f:
    resp = client.post('/post', data=f.read(), onUploadProgress=on_upload)
print("Status:", resp.status)`,cancellation:`from atomhttp import AtomHTTP, AbortController
from atomhttp.errors import AtomHTTPCancelError

client = AtomHTTP(base_url='https://httpbin.org', timeout=30)
controller = AbortController()

# controller.abort() from another thread cancels this immediately:
try:
    client.get('/delay/10', signal=controller.signal)
except AtomHTTPCancelError:
    print("cancelled")`,validation:`from atomhttp import AtomHTTP
from atomhttp.errors import AtomHTTPRequestError

client = AtomHTTP(base_url='https://httpbin.org')

try:
    resp = client.get('/status/404', validateStatus=lambda status: status < 400)
except AtomHTTPRequestError as e:
    print(f"Request failed with status {e.response.status}")`},requests:{basic:`import requests

response = requests.get('https://jsonplaceholder.typicode.com/posts/1')
print(response.status_code, response.json()['title'])`,concurrent:`import requests
from concurrent.futures import ThreadPoolExecutor

def fetch_post(post_id):
    resp = requests.get(f'https://jsonplaceholder.typicode.com/posts/{post_id}')
    return resp.json()

with ThreadPoolExecutor(max_workers=3) as executor:
    results = list(executor.map(fetch_post, [1, 2, 3]))

for data in results:
    print(f"Post {data['id']}: {data['title'][:30]}...")`,progress:`import requests

# requests has no built-in progress callback -- you have to
# implement chunked reading of the request body yourself.
def upload_with_progress(path, url):
    total = len(open(path, 'rb').read())
    with open(path, 'rb') as f:
        requests.post(url, data=f)  # no per-chunk hook available`,cancellation:`# requests has no cancellation primitive at all.
# The only option is closing the underlying socket from another
# thread, which requests does not expose a supported way to do.`,validation:`import requests

response = requests.get('https://httpbin.org/status/404')
if response.status_code >= 400:
    response.raise_for_status()  # manual check required`},httpx:{basic:`import httpx

response = httpx.get('https://jsonplaceholder.typicode.com/posts/1')
print(response.status_code, response.json()['title'])`,concurrent:`import asyncio
import httpx

async def main():
    async with httpx.AsyncClient() as client:
        responses = await asyncio.gather(*[
            client.get(f'https://jsonplaceholder.typicode.com/posts/{i}')
            for i in (1, 2, 3)
        ])
        for resp in responses:
            data = resp.json()
            print(f"Post {data['id']}: {data['title'][:30]}...")

asyncio.run(main())`,progress:`# httpx has no built-in progress callback -- you need to
# wrap the request body in a custom iterator and count bytes yourself.`,cancellation:`import asyncio

task = asyncio.create_task(client.get(url))
task.cancel()  # asyncio-only, requires holding the Task reference`,validation:`response = httpx.get('https://httpbin.org/status/404')
response.raise_for_status()  # manual check required`}},T={basic:"A single request, the most common case for every library.",concurrent:"Running several requests at once.",progress:"Tracking upload progress with a callback.",cancellation:"Aborting an in-flight request from elsewhere in the program.",validation:"Rejecting non-2xx responses automatically."},w={basic:"Basic Request",concurrent:"Concurrent Requests",progress:"Upload Progress Tracking",cancellation:"Request Cancellation",validation:"Status Validation"},N=[["client.get(url, **kwargs)","HTTP GET request","client.get('/users')"],["client.post(url, data, **kwargs)","HTTP POST request","client.post('/users', data={...})"],["client.put(url, data, **kwargs)","HTTP PUT request","client.put('/users/1', data={...})"],["client.patch(url, data, **kwargs)","HTTP PATCH request","client.patch('/users/1', data={...})"],["client.delete(url, **kwargs)","HTTP DELETE request","client.delete('/users/1')"],["client.request(method, url, **kwargs)","Generic request method","client.request('GET', '/users')"],["client.stream(method, url, **kwargs)","Streamed response, read incrementally","with client.stream('GET', '/f') as r: ..."],["client.download(url, path, **kwargs)","Download straight to disk","client.download('/f.zip', 'f.zip')"],["client.paginate(url, **kwargs)","Walk a paginated endpoint","for items in client.paginate('/users'): ..."],["client.all(calls, max_workers=None)","Run request thunks concurrently","client.all([lambda: client.get('/a')])"],["client.submit(method, url, **kwargs)","Fire-and-forget on the thread pool","future = client.submit('GET', '/a')"],["client.map(method, urls, **kwargs)","Same request, many URLs, concurrently","client.map('GET', ['/a', '/b'])"],["client.close()","Release pooled connections and the thread pool","client.close()"],["client.as_async() / async_client.as_sync()","Convert between sync/async, sharing state","client.as_async()"]],v=[["base_url",'str = ""',"Prefix for relative URLs"],["timeout","int/float/timedelta = 30","Request timeout in seconds"],["headers","dict = {}","Default/per-request headers"],["params","dict = {}","Query string parameters"],["data","Any = None","Request body: dict/list, FormData, str, or bytes"],["cookies","bool = True","Enable the client's persistent cookie jar"],["max_workers","int = 10","Thread pool size for .all()/.submit()/.map()"],["maxRedirects","int = 5","Max redirects to follow (0 disables)"],["maxContentLength / maxBodyLength","int = -1","Response/request size caps in bytes (-1 = unlimited)"],["responseType",'str = "json"',"json | text | blob | arraybuffer | stream"],["validateStatus","Callable | None","fn(status) -> bool; raises AtomHTTPRequestError on False"],["auth","dict | None",'{"username": ..., "password": ...} for Basic Auth'],["proxy","dict | None","{'host': 'http://...'} or socks5://... ; falls back to env vars"],["verify","bool | str = True","TLS verification on/off, or a custom CA bundle path"],["cert","str | tuple | None","mTLS client certificate"],["retryConfig","dict | None","max_retries, backoff_factor, status_forcelist"],["signal","AbortSignal | None","AbortController().signal for cancellation"],["socketPath","str | None","Unix domain socket path"],["onUploadProgress / onDownloadProgress","Callable | None","fn(loaded, total)"],["onRequestStart / onRetry / onRedirect","Callable | None","Lightweight observability hooks"],["adapter","BaseAdapter | None","Per-request adapter override, e.g. MockAdapter"]],k=[["ERR_BAD_{status}","Bad request (4xx) or rejected by validateStatus","AtomHTTPRequestError"],["ERR_NETWORK","DNS failure, connection refused, or other transport error","AtomHTTPNetworkError"],["ECONNABORTED","Request exceeded its timeout","AtomHTTPTimeoutError"],["ERR_CANCELED","Request was aborted via AbortController","AtomHTTPCancelError"]],A=[{icon:c,name:"json",desc:"Parses as dict/list. Default option -- falls back to raw text if the body isn't valid JSON."},{icon:m,name:"text",desc:"Returns the body as a decoded str. Good for HTML, CSV, plain text."},{icon:h,name:"blob / arraybuffer",desc:"Returns the raw body as bytes. For images, PDFs, ZIP files."},{icon:x,name:"stream",desc:"Raw urllib3.HTTPResponse for manual reading -- prefer client.stream() instead for the friendlier API."}],q=[{title:"Making a request",before:`# v1
client = AtomHTTP({'baseURL': 'https://api.example.com'})
response = await client.get('/users/1')
await client.close()`,after:`# v2.1
client = AtomHTTP(base_url='https://api.example.com')
response = client.get('/users/1')   # no await needed
client.close()`},{title:"Concurrent requests",before:`# v1
responses = await AtomHTTP.all([
    client.get('/a'), client.get('/b'),
])`,after:`# v2.1
responses = client.all([
    lambda: client.get('/a'),
    lambda: client.get('/b'),
])
# or, if you still want async: await async_client.all([async_client.get('/a'), ...])`},{title:"Async, if you still want it",before:`# v1 -- async was the only option
client = AtomHTTP({'baseURL': '...'})
response = await client.get('/users/1')`,after:`# v2.1 -- async is optional, via a separate class
async with AsyncAtomHTTP(base_url='...') as client:
    response = await client.get('/users/1')`},{title:"Progress callback naming",before:`# v1
await client.post('/upload', data=f, on_upload_progress=cb)`,after:`# v2.1 -- camelCase, matching axios-style config
client.post('/upload', data=f, onUploadProgress=cb)`}],P=({headers:e,rows:s})=>(0,t.jsx)("div",{className:"overflow-x-auto rounded-xl border border-[#1a1a1a] mb-6",children:(0,t.jsxs)("table",{className:"w-full border-collapse",children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{className:"border-b border-[#1f1f1f]",children:e.map((e,s)=>(0,t.jsx)("th",{className:"text-left py-3 px-4 text-gray-400 font-medium",children:e},s))})}),(0,t.jsx)("tbody",{children:s.map((e,s)=>(0,t.jsx)("tr",{className:"border-b border-[#141414] last:border-0 hover:bg-white/2 transition-colors",children:e.map((e,s)=>(0,t.jsx)("td",{className:`py-3 px-4 text-sm ${0===s?"font-mono text-gray-300":"text-gray-500"}`,children:e},s))},s))})]})}),_=()=>(0,t.jsx)("div",{className:"overflow-x-auto rounded-xl border border-[#1a1a1a] mb-8",children:(0,t.jsxs)("table",{className:"w-full border-collapse min-w-[42rem]",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"border-b border-[#1f1f1f] bg-[#0a0a0a]",children:[(0,t.jsx)("th",{className:"text-left py-3 px-4 text-gray-400 font-medium",children:"Feature"}),(0,t.jsx)("th",{className:"text-left py-3 px-4 text-white font-bold bg-white/5",children:"AtomHTTP"}),(0,t.jsx)("th",{className:"text-left py-3 px-4 text-gray-500 font-medium",children:"requests"}),(0,t.jsx)("th",{className:"text-left py-3 px-4 text-gray-500 font-medium",children:"httpx"})]})}),(0,t.jsx)("tbody",{children:y.map((e,s)=>(0,t.jsxs)("tr",{className:"border-b border-[#141414] hover:bg-white/2 transition-colors",children:[(0,t.jsx)("td",{className:"py-3 px-4 text-gray-300 text-sm font-medium",children:e.feature}),(0,t.jsx)("td",{className:"py-3 px-4 text-white text-sm font-medium bg-white/[0.03]",children:"✓"===e.atomhttp?(0,t.jsx)(o,{className:"w-4 h-4 text-white inline"}):e.atomhttp}),(0,t.jsx)("td",{className:"py-3 px-4 text-gray-500 text-sm",children:"✗"===e.requests?(0,t.jsx)(n,{className:"w-4 h-4 text-gray-600 inline"}):e.requests}),(0,t.jsx)("td",{className:"py-3 px-4 text-gray-500 text-sm",children:"✗"===e.httpx?(0,t.jsx)(n,{className:"w-4 h-4 text-gray-600 inline"}):e.httpx})]},s))})]})}),H=({activeTab:e,setActiveTab:s})=>(0,t.jsx)("div",{className:"flex flex-wrap gap-2 border-b border-[#1a1a1a] mb-6",children:g.map(a=>(0,t.jsxs)("button",{onClick:()=>s(a.id),className:`flex items-center gap-2 px-5 py-2.5 rounded-t-lg font-medium transition-all duration-200 ${e===a.id?"bg-[#1a1a1a] text-white border-t border-x border-[#2a2a2a]":"text-gray-500 hover:text-gray-300 hover:bg-white/5"}`,children:[(0,t.jsx)("span",{children:a.label}),(0,t.jsx)("span",{className:"text-xs ml-1",children:a.badge})]},a.id))}),R=({activeTab:e,featureKey:s})=>(0,t.jsxs)("div",{className:"border border-[#1a1a1a] rounded-xl p-5 hover:border-[#2a2a2a] transition-all",children:[(0,t.jsx)("div",{className:"flex items-center justify-between mb-3",children:(0,t.jsx)("h3",{className:"text-lg font-medium text-white",children:w[s]})}),(0,t.jsx)("p",{className:"text-gray-400 text-sm mb-4",children:T[s]}),(0,t.jsx)(b.default,{language:"python",code:j[e][s]})]});e.s(["default",0,function(){let[e,a]=(0,s.useState)("atomhttp");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h1",{className:"text-2xl sm:text-3xl font-bold text-white mb-2",children:"Reference"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400",children:"Complete API reference, comparisons, migration notes, and practical examples"})]}),(0,t.jsxs)("div",{className:"space-y-10 sm:space-y-12",children:[(0,t.jsxs)(f.default,{id:"comparison",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Comparison with Other Libraries"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"AtomHTTP combines what requests and httpx each do well -- sync-first ergonomics, optional async, and modern features like cancellation and streaming -- in one client built on urllib3."})]}),(0,t.jsx)(_,{}),(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h3",{className:"text-lg font-medium text-white mb-3",children:"Side-by-side code"}),(0,t.jsx)(H,{activeTab:e,setActiveTab:a}),(0,t.jsx)("div",{className:"space-y-6",children:["basic","concurrent","progress","cancellation","validation"].map(s=>(0,t.jsx)(R,{activeTab:e,featureKey:s},s))})]})]}),(0,t.jsxs)(f.default,{id:"examples",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Complete Examples"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"Two full, realistic examples combining several features."})]}),(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-300 mb-2",children:"Authenticated API client with retries and caching:"}),(0,t.jsx)(b.default,{language:"python",code:`from atomhttp import AtomHTTP
from atomhttp.cache import CacheInterceptor

client = AtomHTTP(
    base_url="https://api.example.com",
    timeout=10,
    headers={"Authorization": "Bearer YOUR_TOKEN"},
    retryConfig={"max_retries": 3, "status_forcelist": [500, 502, 503, 504]},
)

cache = CacheInterceptor()
client.interceptors.request.use(cache.on_request)
client.interceptors.response.use(cache.on_response)

for items in client.paginate("/users"):
    for user in items:
        print(user["name"])

client.close()`})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-300 mb-2",children:"Concurrent file downloads with a shared thread pool:"}),(0,t.jsx)(b.default,{language:"python",code:`from atomhttp import AtomHTTP

client = AtomHTTP(base_url="https://files.example.com", max_workers=8)

urls = ["/a.zip", "/b.zip", "/c.zip"]
futures = [client.submit("GET", "/download" + u) for u in urls]

for url, future in zip(urls, futures):
    response = future.result()
    with open(url.lstrip("/"), "wb") as f:
        f.write(response.data)
    print(f"saved {url}")`})]})]})]}),(0,t.jsxs)(f.default,{id:"api-methods",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"API Methods Reference"}),(0,t.jsxs)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:["Every method exists identically on ",(0,t.jsx)("code",{children:"AsyncAtomHTTP"}),", just awaited."]})]}),(0,t.jsx)(P,{headers:["Method","Description","Example"],rows:N})]}),(0,t.jsxs)(f.default,{id:"config-reference",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"RequestConfig Fields"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"Every field below can be set on the client (as a default) or per-request (overriding the default)."})]}),(0,t.jsx)(P,{headers:["Field","Type / Default","Description"],rows:v})]}),(0,t.jsxs)(f.default,{id:"error-codes",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Error Codes Reference"}),(0,t.jsxs)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:["AtomHTTP provides standardized error codes for programmatic error handling. By default no exception is raised for 4xx/5xx -- opt in with ",(0,t.jsx)("code",{children:"validateStatus"})," or"," ",(0,t.jsx)("code",{children:"raise_for_status()"}),"."]})]}),(0,t.jsx)(P,{headers:["Error Code","Description","Exception Type"],rows:k})]}),(0,t.jsxs)(f.default,{id:"response-types",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Response Types"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"AtomHTTP supports multiple response types for different use cases."})]}),(0,t.jsx)("div",{className:"grid sm:grid-cols-2 gap-4",children:A.map(e=>(0,t.jsxs)("div",{className:"border border-[#1a1a1a] rounded-xl p-4 hover:border-[#2a2a2a] transition-all",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,t.jsx)(e.icon,{className:"text-white w-4 h-4"}),(0,t.jsx)("code",{className:"text-sm font-mono text-white font-bold",children:e.name})]}),(0,t.jsx)("p",{className:"text-xs text-gray-500 mt-1",children:e.desc})]},e.name))})]}),(0,t.jsxs)(f.default,{id:"migration",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Migrating from v1"}),(0,t.jsxs)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:["v2 is a full rewrite: sync-first by default, minimal runtime dependencies, built on urllib3. The biggest change is that"," ",(0,t.jsx)("code",{children:"AtomHTTP"})," is no longer async -- if you want async, use the new ",(0,t.jsx)("code",{children:"AsyncAtomHTTP"})," class instead."]})]}),(0,t.jsx)("div",{className:"space-y-6",children:q.map(e=>(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-300 mb-2",children:e.title}),(0,t.jsxs)("div",{className:"grid sm:grid-cols-2 gap-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-xs text-gray-500 mb-1",children:"Before (v1)"}),(0,t.jsx)(b.default,{language:"python",code:e.before})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-xs text-gray-500 mb-1",children:"After (v2.1)"}),(0,t.jsx)(b.default,{language:"python",code:e.after})]})]})]},e.title))}),(0,t.jsx)("div",{className:"mt-6 p-4 rounded-xl border border-[#1a1a1a]",children:(0,t.jsxs)("p",{className:"text-gray-400 text-sm",children:["Other breaking changes: the constructor now takes plain keyword arguments (",(0,t.jsx)("code",{children:"AtomHTTP(base_url=..., timeout=...)"}),") instead of a single config dict; several internal v1 modules that were dead code (unused duplicate adapters, an unused cookie manager, an unused redirect handler) were removed entirely rather than ported forward."]})})]})]})]})}],42014)}]);