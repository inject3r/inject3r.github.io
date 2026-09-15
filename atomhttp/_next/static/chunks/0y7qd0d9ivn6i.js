(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,78662,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(15147),s=e.i(49136);let o=({headers:e,rows:a})=>(0,t.jsx)("div",{className:"overflow-x-auto rounded-xl border border-[#1a1a1a] mb-6",children:(0,t.jsxs)("table",{className:"w-full border-collapse",children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{className:"border-b border-[#1f1f1f]",children:e.map((e,a)=>(0,t.jsx)("th",{className:"text-left py-3 px-4 text-gray-400 font-medium",children:e},a))})}),(0,t.jsx)("tbody",{children:a.map((e,a)=>(0,t.jsx)("tr",{className:"border-b border-[#141414] last:border-0",children:e.map((e,a)=>(0,t.jsx)("td",{className:"py-3 px-4 text-sm text-gray-500",children:e},a))},a))})]})}),n=({data:e,id:a})=>(0,t.jsxs)(r.default,{id:a,className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:e.title}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-2",children:e.description}),(0,t.jsx)("p",{className:"text-sm text-gray-500",children:e.details})]}),e.parameters&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h4",{className:"text-sm font-medium text-white mb-2 mt-4",children:"Parameters"}),(0,t.jsx)(o,{headers:["Parameter","Type","Default","Description"],rows:e.parameters})]}),e.methods&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h4",{className:"text-sm font-medium text-white mb-2 mt-4",children:"Methods"}),(0,t.jsx)(o,{headers:["Method","Description"],rows:e.methods})]}),e.classes&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h4",{className:"text-sm font-medium text-white mb-2 mt-4",children:"Classes"}),(0,t.jsx)(o,{headers:["Class","Description","Methods"],rows:e.classes})]}),e.options&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h4",{className:"text-sm font-medium text-white mb-2 mt-4",children:"Configuration Options"}),(0,t.jsx)(o,{headers:["Option","Type","Default","Description"],rows:e.options})]}),e.returns&&(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h4",{className:"text-sm font-medium text-white mb-2",children:"Returns"}),(0,t.jsxs)("div",{className:"text-sm text-gray-400",children:[(0,t.jsx)("code",{className:"text-gray-300",children:e.returns[0]})," —"," ",e.returns[1]]})]}),(0,t.jsx)("h4",{className:"text-sm font-medium text-white mb-2",children:"Example"}),(0,t.jsx)(s.default,{language:"python",code:e.code})]}),i=[{data:{title:"Interceptors & Hooks",description:"Interceptors are functions that can modify requests before they are sent or modify responses before they are returned to the caller. This is useful for adding authentication headers, logging, retry logic, error handling, or transforming data globally.",details:"Request interceptors run in registration order; so do response interceptors. Remove one with the index returned by use(). Interceptors can be regular functions or async def -- the async client awaits async interceptors, and the sync client can run them too via a small internal event loop. For lighter-weight instrumentation, pass onRequestStart/onRetry/onRedirect directly on a request instead of registering a full interceptor.",parameters:[["fn","Callable","Required","Function receiving config (request) or response (response), returning the (possibly modified) value"]],returns:["int","Index of the added interceptor (usable with eject())"],code:`# Request interceptor -- adds auth token to every request
def auth_interceptor(config):
    config.headers['Authorization'] = 'Bearer my-secret-token'
    return config

# Response interceptor -- logs status of every response
def log_interceptor(response):
    print(f"{response.config.method} {response.config.url} -> {response.status}")
    return response

client.interceptors.request.use(auth_interceptor)
index = client.interceptors.response.use(log_interceptor)

# Remove an interceptor by index
client.interceptors.response.eject(index)

# Lightweight observability hooks, no interceptor needed:
client.get(
    '/report',
    onRequestStart=lambda config: print(f"starting {config.url}"),
    onRetry=lambda config, attempt, error: print(f"retry #{attempt}: {error}"),
    onRedirect=lambda config, response: print(f"redirected: {response.status}"),
)`},id:"interceptors"},{data:{title:"Cancellation",description:'Axios/fetch-style request cancellation via AbortController. Create a controller, pass its .signal into a request, and call controller.abort() from anywhere -- another thread, a UI "Cancel" button, a signal handler -- to stop it. Works for any request in the library: sync or async, uploads or downloads, with or without retries.',details:"Interrupting a request that's genuinely blocked on a socket read requires force-closing the underlying connection from another thread -- there's no way to \"just return early\" from a blocked system call. AtomHTTP registers the live urllib3 connection with the signal for the duration of the request; calling abort() force-closes that socket, making the blocked read raise immediately. Between chunks (uploading or downloading), the adapter also proactively checks whether the signal has been aborted. One honest limitation: there's a brief window during initial DNS resolution/TCP connect (before a socket exists to close) where abort() takes effect at the next check point rather than instantaneously -- in practice this window is small.",parameters:[["signal","AbortSignal","None","Pass to any request via the signal= kwarg to make it cancellable"]],returns:["None","raises AtomHTTPCancelError (code ERR_CANCELED) when aborted"],code:`from atomhttp import AtomHTTP, AbortController
from atomhttp.errors import AtomHTTPCancelError

client = AtomHTTP(base_url="https://api.example.com", timeout=30)
controller = AbortController()

# From another thread, UI callback, etc:
# controller.abort("user clicked cancel")

try:
    response = client.get("/slow-report", signal=controller.signal)
except AtomHTTPCancelError as e:
    print("request was cancelled:", e.message)

# One controller can cancel multiple in-flight requests at once.
# Works identically with AsyncAtomHTTP:
async def run():
    try:
        await async_client.get("/slow", signal=controller.signal)
    except AtomHTTPCancelError:
        print("cancelled")`},id:"cancellation"},{data:{title:"Multithreading & Concurrency",description:"Every AtomHTTP client owns a persistent thread pool (max_workers=10 by default, configurable). Because urllib3's connection pools are thread-safe, this gives you real concurrency for I/O-bound batches of requests without needing async/await anywhere.",details:".all() reuses the client's persistent pool instead of spinning up a new ThreadPoolExecutor per call, avoiding thread-creation overhead. submit() gives you a plain concurrent.futures.Future for fire-and-forget workflows. map() runs the same request against many URLs and returns results in input order regardless of completion order. The async client uses asyncio.gather() for the equivalent behaviour.",methods:[["client.all(calls, max_workers=None)","Run request thunks concurrently, returns List[Response] in order"],["client.submit(method, url, **kwargs)","Fire off one request on the thread pool, returns a Future[Response]"],["client.map(method, urls, **kwargs)","Run the same request against many URLs concurrently, returns List[Response] in order"],["async_client.all(coros)","asyncio.gather shortcut for the async client"]],returns:["List[Response] (all/map)","concurrent.futures.Future[Response] (submit)"],code:`client = AtomHTTP(base_url="https://api.example.com", max_workers=20)

# Run a batch concurrently:
responses = client.all([
    lambda: client.get("/a"),
    lambda: client.get("/b"),
    lambda: client.get("/c"),
])

# Fire-and-forget:
future = client.submit("GET", "/report")
# ... do other work ...
response = future.result()

# Same request, many URLs, results in input order:
responses = client.map("GET", ["/users/1", "/users/2", "/users/3"])

# Async equivalent:
responses = await async_client.all([
    async_client.get("/a"),
    async_client.get("/b"),
])`},id:"concurrency"},{data:{title:"Streaming, Download & Pagination",description:"client.stream() returns a response whose body hasn't been read yet, for processing large downloads incrementally instead of loading them fully into memory. client.download() streams straight to a file on disk. client.paginate() walks a paginated REST endpoint as a generator.",details:"Always use stream() as a context manager (sync with / async async with) so the connection is released even if you stop reading partway through. download()'s async version runs the file I/O in the thread pool so disk writes don't block the event loop. paginate() defaults to a ?page=N query parameter and stops as soon as a page comes back with no items; pass extract_items/has_next for custom pagination schemes (cursor-based APIs, etc).",methods:[["client.stream(method, url, **kwargs)","Returns a StreamResponse with .iter_bytes()/.iter_lines()"],["client.download(url, path, onDownloadProgress=None, **kwargs)","Streams response body straight to disk"],["client.paginate(url, page_param='page', extract_items=None, has_next=None, **kwargs)","Generator yielding one page's items at a time"]],code:`# Streaming a large response body
with client.stream("GET", "/export.csv") as response:
    for line in response.iter_lines():
        process(line)

# Downloading straight to disk, with progress
client.download(
    "/video.mp4", "video.mp4",
    onDownloadProgress=lambda loaded, total: print(f"{loaded}/{total}"),
)

# Pagination -- default ?page=N scheme
for items in client.paginate("/users"):
    for user in items:
        process(user)

# Pagination -- custom cursor-style API
for items in client.paginate(
    "/items",
    extract_items=lambda r: r.data["results"],
    has_next=lambda r: r.data.get("next") is not None,
):
    ...

# Async versions are identical, with async with / async for:
async with await async_client.stream("GET", "/export.csv") as response:
    async for line in response.iter_lines():
        process(line)

async for items in async_client.paginate("/users"):
    ...`},id:"streaming"},{data:{title:"FormData & File Uploads",description:"Send multipart/form-data requests including both text fields and file uploads. This follows the browser FormData API, making it easy to construct complex form submissions. Large files stream automatically -- a multi-gigabyte upload never needs to fit in memory.",details:"Files can be provided as bytes, file objects, or pathlib.Path objects. The content-type is automatically detected from file extensions via the standard mimetypes module. Multiple values can be appended to the same field name. When any field is a file, AtomHTTP switches to a generator-based streaming multipart encoder automatically -- verified with tracemalloc to use a small, fixed amount of memory regardless of file size.",methods:[["append(name, value, filename, content_type)","Adds a new value to the form data"],["set(name, value, filename, content_type)","Replaces all existing values for a field"],["delete(name)","Removes all values for a field"],["get(name)","Returns the first value for a field"],["get_all(name)","Returns all values for a field as a list"],["has(name)","Checks if a field exists"],["keys()","Returns all field names"],["items()","Returns all (name, value) pairs"],["to_multipart()","Builds the full body in memory -- fine for small forms"],["to_multipart_stream(chunk_size=65536)","Returns (generator, boundary, total_size) for streaming uploads"]],code:`from atomhttp import FormData
from pathlib import Path

form = FormData()
form.append('username', 'johndoe')
form.append('email', 'john@example.com')
form.append('avatar', open('profile.jpg', 'rb'), filename='profile.jpg')
form.append('document', Path('resume.pdf'), filename='resume.pdf')

# Supports multiple values for the same field
form.append('tags', 'python')
form.append('tags', 'http')
form.append('tags', 'async')

response = client.post('https://api.example.com/upload', data=form)

# Large file, with real upload progress (streams automatically):
form2 = FormData()
form2.append('video', Path('large-video.mp4'), filename='large-video.mp4')
client.post(
    '/upload', data=form2,
    onUploadProgress=lambda loaded, total: print(f"{loaded}/{total} bytes"),
)`},id:"formdata"},{data:{title:"Caching",description:"atomhttp.cache.CacheInterceptor implements conditional GET requests using ETag/If-None-Match and Last-Modified/If-Modified-Since -- the same mechanism browsers use.",details:"After a 200 response with an ETag or Last-Modified header comes back, its body is cached in memory (or in a store you provide). The next matching request sends back the cached validator; if the server replies 304 Not Modified, the cached body is served back instead of re-parsing a full response. This still makes a network round trip on every call -- it saves bandwidth and re-parsing cost, not the round trip itself. True zero-network-call caching within a max-age window isn't supported by the interceptor pipeline by design; wrap the client call yourself with your own TTL check if you need that.",classes:[["CacheInterceptor(store=None)","Holds cached entries and the interceptor functions","on_request(config), on_response(response), clear()"]],code:`from atomhttp import AtomHTTP
from atomhttp.cache import CacheInterceptor

client = AtomHTTP(base_url="https://api.example.com")
cache = CacheInterceptor()
client.interceptors.request.use(cache.on_request)
client.interceptors.response.use(cache.on_response)

client.get("/users/1")   # normal request, response cached (has ETag)
client.get("/users/1")   # sends If-None-Match; 304 -> served from cache

cache.clear()             # drop everything`},id:"caching"},{data:{title:"Cookies & XSRF",description:"Every client keeps a persistent cookie jar (backed by the standard library's http.cookiejar) unless you opt out with cookies=False. Cookies are isolated per client instance -- two separate AtomHTTP() clients never share a jar.",details:"If a cookie named xsrfCookieName (default 'XSRF-TOKEN') is present in the jar for the request's host, its value is copied automatically into the xsrfHeaderName header (default 'X-XSRF-TOKEN') -- the standard double-submit CSRF pattern.",methods:[["client.cookies.get(name, domain=None)","Look up a single cookie's value"],["client.cookies.set(name, value, domain='', path='/')","Manually inject a cookie into the jar"],["client.cookies.clear()","Empty the jar"]],code:`client = AtomHTTP(base_url="https://api.example.com")   # cookies=True by default
client.get("/login")     # any Set-Cookie response headers are stored
client.get("/profile")   # matching cookies are sent automatically

no_cookies_client = AtomHTTP(base_url="...", cookies=False)

# Manual access
client.cookies.get("session")
client.cookies.set("session", "abc123", domain="api.example.com")
client.cookies.clear()

# XSRF -- automatic once the cookie is present in the jar
client.get("/state-changing-endpoint")  # X-XSRF-TOKEN header added automatically`},id:"cookies"},{data:{title:"Authentication",description:"Built-in support for standard authentication mechanisms including HTTP Basic Auth (applied automatically via auth=) and Bearer Token authentication. Helper classes are also available for building headers by hand.",details:"Prefer RequestConfig(auth={...}) for plain HTTP Basic Auth -- the client applies it automatically. BasicAuth/BearerAuth are small convenience helpers for building Authorization headers for custom interceptors or non-standard auth flows.",classes:[["BasicAuth(username, password)","Creates Basic Authentication handler",'get_header() returns {"Authorization": "Basic base64..."}'],["BearerAuth(token)","Creates Bearer Token handler",'get_header() returns {"Authorization": "Bearer token"}']],code:`# Preferred: built-in Basic Auth, applied automatically
response = client.get(
    'https://httpbin.org/basic-auth/username/password',
    auth={'username': 'username', 'password': 'password'},
)

# Helper classes for custom flows / interceptors
from atomhttp.auth import BasicAuth, BearerAuth

basic = BasicAuth('username', 'password')
response = client.get('https://httpbin.org/basic-auth/username/password',
                       headers=basic.get_header())

bearer = BearerAuth('your-jwt-token-here')
response = client.get('https://api.example.com/protected',
                       headers=bearer.get_header())

# Complex auth flows via interceptors
def oauth_interceptor(config):
    config.headers['Authorization'] = f'Bearer {get_fresh_token()}'
    return config

client.interceptors.request.use(oauth_interceptor)`},id:"auth"},{data:{title:"Proxies, TLS & Unix Sockets",description:"Configure proxies (including SOCKS), TLS verification and mTLS client certificates, and Unix domain socket connections. Brotli response decoding is available as an optional extra.",details:"If proxy= isn't given, HTTP_PROXY/HTTPS_PROXY/NO_PROXY environment variables are honored automatically. verify accepts True/False or a path to a custom CA bundle. cert accepts a single file path or a (cert, key) tuple for mTLS. socketPath connects over AF_UNIX instead of TCP -- useful for talking to services like the Docker daemon.",options:[["proxy","dict","None",'{"host": "http://proxy:8080"} or socks5://... (needs atomhttp[socks])'],["verify","bool | str","True","TLS verification on/off, or a custom CA bundle path"],["cert","str | tuple","None","mTLS client certificate: path, or (cert_path, key_path)"],["socketPath","str","None","Unix domain socket path (alternative to TCP/IP)"],["decompress","bool","True","Auto-decode gzip/deflate/brotli (brotli needs atomhttp[brotli])"]],code:`# Proxy (explicit, or read from HTTP_PROXY/HTTPS_PROXY automatically)
client.get("/data", proxy={"host": "http://proxy.example.com:8080"})
client.get("/data", proxy={"host": "http://proxy:8080", "auth": {"username": "u", "password": "p"}})

# SOCKS proxy (pip install atomhttp[socks])
client.get("/data", proxy={"host": "socks5://127.0.0.1:1080"})

# TLS / mTLS
client.get("/secure", verify="/path/to/custom-ca.pem")
client.get("/secure", cert=("/path/to/cert.pem", "/path/to/key.pem"))

# Unix domain socket -- e.g. the Docker daemon
client.get("http://localhost/containers/json", socketPath="/var/run/docker.sock")

# Brotli (pip install atomhttp[brotli]) -- decoded transparently, no code changes`},id:"networking"},{data:{title:"Retries & Backoff",description:"Configure automatic retries for transient network/server failures. Retry-After response headers are honored automatically. Redirects are always followed independently of retryConfig, up to maxRedirects.",details:"If retryConfig isn't set, no error-based retries happen (only redirects, up to maxRedirects). Retries apply exponential backoff (backoff_factor * 2^attempt) and only retry on the configured status_forcelist codes plus connection/read errors. Use onRetry to observe each attempt.",options:[["retryConfig.max_retries","int","3","Maximum retry attempts for connect/read/status failures"],["retryConfig.backoff_factor","float","0.3","Exponential backoff multiplier between attempts"],["retryConfig.status_forcelist","list[int]","[408,429,500,502,503,504]","Status codes that trigger a retry"],["maxRedirects","int","5","Independent of retryConfig -- always applies"]],code:`response = client.get(
    "/flaky-endpoint",
    retryConfig={
        "max_retries": 5,
        "backoff_factor": 0.3,
        "status_forcelist": [408, 429, 500, 502, 503, 504],
    },
    onRetry=lambda config, attempt, error: print(f"retry #{attempt}: {error}"),
)
# A server-sent "Retry-After" header is respected automatically,
# taking priority over the exponential backoff calculation.`},id:"retries"}];e.s(["default",0,function(){return(0,a.useEffect)(()=>{if(window.location.hash){let e=window.location.hash.substring(1),t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h1",{className:"text-2xl sm:text-3xl font-bold text-white mb-2",children:"Advanced Features"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400",children:"Take full control of your HTTP requests with powerful advanced features — cancellation, real concurrency without async, true streaming, caching, and more"})]}),(0,t.jsx)("div",{className:"space-y-10 sm:space-y-12",children:i.map(({data:e,id:a})=>(0,t.jsx)(n,{data:e,id:a},a))})]})}])}]);