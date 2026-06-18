(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,96695,e=>{"use strict";var t=e.i(43476),s=e.i(71645),r=e.i(15147),a=e.i(49136);let i=[{id:"get",title:"GET Request",description:"Retrieve data from a server. GET requests should only retrieve data and should not have any other effect.",parameters:[["url","str","Required","The endpoint URL"],["params","dict","{}","Query parameters for filtering, pagination, sorting"],["headers","dict","{}","Custom HTTP headers"],["response_type","str",'"json"',"Response format: json, text, blob, arraybuffer, stream"],["timeout","int/float","None","Override client timeout"]],returns:["Response","Response object containing data, status, headers, config"],code:`# Basic GET request
response = await client.get('https://api.example.com/users')

# GET with query parameters
response = await client.get('/users', params={'page': 1, 'limit': 10, 'sort': 'desc'})
print(response.data)

# GET with custom headers
response = await client.get('/protected', headers={'Authorization': 'Bearer token123'})`},{id:"post",title:"POST Request",description:"Send data to create a new resource. Accepts JSON, FormData, URL-encoded data, or raw bytes.",parameters:[["url","str","Required","The endpoint URL"],["data","Any","None","Request body (dict, FormData, bytes, str)"],["headers","dict","{}","Custom HTTP headers (Content-Type auto-detected)"],["response_type","str",'"json"',"Response format"],["on_upload_progress","Callable","None","Progress callback for uploads"]],returns:["Response","Response object with created resource data"],code:`# POST with JSON data
user_data = {'name': 'John Doe', 'email': 'john@example.com'}
response = await client.post('/users', data=user_data)
print(f"Created ID: {response.data['id']}")

# POST with FormData (file upload)
form = AtomHTTP.FormData()
form.append('name', 'John Doe')
form.append('avatar', open('photo.jpg', 'rb'), filename='photo.jpg')
response = await client.post('/users', data=form)

# POST with progress tracking
def on_progress(loaded, total):
    print(f"Uploaded: {loaded}/{total} bytes")
response = await client.post('/upload', data=large_file, on_upload_progress=on_progress)`},{id:"put",title:"PUT Request",description:"Completely replace an existing resource. Requires the complete resource data.",parameters:[["url","str","Required","The endpoint URL with resource ID"],["data","dict","Required","Complete resource data"],["headers","dict","{}","Custom HTTP headers"]],returns:["Response","Response object with updated resource data"],code:`# Full resource replacement
update_data = {'id': 1, 'name': 'Jane Doe', 'email': 'jane@example.com', 'role': 'admin'}
response = await client.put('/users/1', data=update_data)

# Conditional update
response = await client.put('/users/1', data=update_data,
    headers={'If-Unmodified-Since': 'Wed, 21 Oct 2024 07:28:00 GMT'})`},{id:"patch",title:"PATCH Request",description:"Partially update an existing resource. Only send the fields that need to be changed.",parameters:[["url","str","Required","The endpoint URL with resource ID"],["data","dict","Required","Fields to update (partial data)"],["headers","dict","{}","Custom HTTP headers"]],returns:["Response","Response object with updated resource data"],code:`# Partial update
response = await client.patch('/users/1', data={'email': 'newemail@example.com'})

# Update multiple fields
response = await client.patch('/users/1', data={'email': 'newemail@example.com', 'role': 'editor'})

# JSON Patch operations
response = await client.patch('/users/1', data=[
    {'op': 'replace', 'path': '/email', 'value': 'new@example.com'}
])`},{id:"delete",title:"DELETE Request",description:"Remove a resource from the server.",parameters:[["url","str","Required","The endpoint URL with resource ID"],["params","dict","{}","Query parameters for batch delete"],["headers","dict","{}","Custom HTTP headers"]],returns:["Response","Response object (status 204 on success)"],code:`# Delete a single resource
response = await client.delete('/users/1')
if response.status == 204:
    print("User deleted successfully")

# Batch delete
response = await client.delete('/users', params={'ids': '1,2,3'})

# Conditional delete
response = await client.delete('/users/1', headers={'If-Match': 'etag123'})`},{id:"head",title:"HEAD Request",description:"Retrieve headers only, without the response body.",parameters:[["url","str","Required","The endpoint URL"],["headers","dict","{}","Custom HTTP headers"]],returns:["Response","Response object with headers but empty body"],code:`# Check if resource exists
response = await client.head('/large-file.pdf')
print(f"Size: {response.headers.get('Content-Length')} bytes")
print(f"Type: {response.headers.get('Content-Type')}")
print(f"Modified: {response.headers.get('Last-Modified')}")

# Check API health
response = await client.head('/health')
print(f"Status: {'healthy' if response.ok else 'unhealthy'}")`},{id:"options",title:"OPTIONS Request",description:"Discover which HTTP methods are supported by a resource.",parameters:[["url","str","Required","The endpoint URL"],["headers","dict","{}","Custom HTTP headers"]],returns:["Response","Response with Allow header listing supported methods"],code:`# Discover allowed methods
response = await client.options('/users/1')
print(f"Allowed: {response.headers.get('Allow', '')}")

# CORS preflight
response = await client.options('/api/data', headers={
    'Origin': 'https://myapp.com',
    'Access-Control-Request-Method': 'POST'
})`},{id:"generic",title:"Generic Request Method",description:"Unified request method for maximum flexibility.",parameters:[["config","dict","Required","Full request configuration dictionary"],["config.method","str","Required","HTTP method (GET, POST, etc.)"],["config.url","str","Required","Request URL"],["config.data","Any","None","Request body"],["config.params","dict","{}","Query parameters"],["config.headers","dict","{}","Custom headers"],["config.timeout","int","None","Request timeout"]],returns:["Response","Response object"],code:`# Full control over request configuration
response = await client.request({
    'method': 'POST',
    'url': '/api/data',
    'data': {'key': 'value'},
    'headers': {'X-Custom': 'header'},
    'params': {'version': 'v2'},
    'timeout': 30,
    'maxRedirects': 0,
    'responseType': 'text'
})

# Dynamic method selection
method = 'DELETE' if condition else 'PUT'
response = await client.request({'method': method, 'url': '/resource/1'})`}],o=[["response.data","Parsed response body","dict, list, str, bytes","response.data['id']"],["response.status","HTTP status code","int","response.status == 200"],["response.status_text","HTTP status message","str","response.status_text"],["response.headers","Response headers","dict","response.headers['Content-Type']"],["response.config","Original request config","RequestConfig","response.config.url"],["response.ok","Success indicator (200-299)","bool","if response.ok: ..."]],n=[["baseURL","str",'""',"Base URL prepended to relative paths"],["timeout","int/float","30","Request timeout in seconds"],["headers","dict","{}","Default headers sent with every request"],["maxRedirects","int","5","Maximum number of redirects to follow"],["responseType","str",'"json"',"Response format: json, text, blob, arraybuffer, stream"],["keepAlive","bool","True","Enable HTTP keep-alive connections"],["verify","bool","True","Enable SSL certificate verification for HTTPS requests"],["retryConfig","dict","None","Retry settings for transient failures: max_retries, backoff_factor, status_forcelist"],["decompress","bool","True","Automatically decompress gzip/deflate responses"]],d=[["AtomHTTPRequestError","Bad request (4xx) or malformed request","ERR_BAD_REQUEST"],["AtomHTTPNetworkError","Network connectivity issues, DNS errors","ERR_NETWORK"],["AtomHTTPTimeoutError","Request exceeded timeout limit","ECONNABORTED"]],l=({headers:e,rows:s})=>(0,t.jsx)("div",{className:"overflow-x-auto rounded-xl border border-[#1a1a1a] mb-6",children:(0,t.jsxs)("table",{className:"w-full border-collapse",children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{className:"border-b border-[#1f1f1f]",children:e.map((e,s)=>(0,t.jsx)("th",{className:"text-left py-3 px-4 text-gray-400 font-medium",children:e},s))})}),(0,t.jsx)("tbody",{children:s.map((e,s)=>(0,t.jsx)("tr",{className:"border-b border-[#141414] last:border-0",children:e.map((e,s)=>(0,t.jsx)("td",{className:"py-3 px-4 text-sm text-gray-500",children:e},s))},s))})]})}),c=({title:e,children:s})=>(0,t.jsxs)("div",{className:"mt-4 p-4 rounded-xl border border-[#1a1a1a]",children:[(0,t.jsx)("h3",{className:"text-md font-medium text-white mb-2",children:e}),s]});e.s(["default",0,function(){return(0,s.useEffect)(()=>{if(window.location.hash){let e=window.location.hash.substring(1);document.getElementById(e)?.scrollIntoView({behavior:"smooth",block:"start"})}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("h1",{className:"text-2xl sm:text-3xl font-bold text-white mb-2",children:"Core API"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400",children:"Essential HTTP methods and configuration for everyday use"})]}),(0,t.jsxs)("div",{className:"space-y-10 sm:space-y-12",children:[(0,t.jsxs)(r.default,{id:"http-methods",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"HTTP Methods"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"AtomHTTP supports all standard HTTP methods with intuitive async interfaces. Each method returns a Response object containing the parsed response body, status code, headers, and original request configuration."})]}),(0,t.jsx)("div",{className:"space-y-8",children:i.map(e=>(0,t.jsxs)("div",{className:"border border-[#1a1a1a] rounded-xl p-5 hover:border-[#2a2a2a] transition-all",children:[(0,t.jsx)("h3",{className:"text-lg font-medium text-white mb-2",children:e.title}),(0,t.jsx)("p",{className:"text-gray-400 text-sm mb-4",children:e.description}),(0,t.jsx)("h4",{className:"text-sm font-medium text-white mb-2",children:"Parameters"}),(0,t.jsx)(l,{headers:["Parameter","Type","Default","Description"],rows:e.parameters}),(0,t.jsx)("h4",{className:"text-sm font-medium text-white mb-2 mt-4",children:"Returns"}),(0,t.jsxs)("div",{className:"text-sm text-gray-400 mb-4",children:[(0,t.jsx)("code",{className:"text-gray-300",children:e.returns[0]})," —"," ",e.returns[1]]}),(0,t.jsx)("h4",{className:"text-sm font-medium text-white mb-2",children:"Example"}),(0,t.jsx)(a.default,{language:"python",code:e.code})]},e.id))})]}),(0,t.jsxs)(r.default,{id:"response-handling",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Response Object"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"Every request returns a Response object with the following properties:"})]}),(0,t.jsx)(l,{headers:["Property","Description","Type","Example"],rows:o}),(0,t.jsx)(a.default,{language:"python",code:`response = await client.get('https://httpbin.org/get')
print(f"Status: {response.status} {response.status_text}")
print(f"Content-Type: {response.headers.get('Content-Type')}")
print(f"Body: {response.data}")
print(f"URL: {response.config.url}")`}),(0,t.jsx)(c,{title:"Response Types",children:(0,t.jsxs)("div",{className:"grid sm:grid-cols-2 gap-3 text-sm",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-gray-300",children:"json"}),(0,t.jsx)("p",{className:"text-gray-500 text-xs mt-1",children:"Parses as dict/list"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-gray-300",children:"text"}),(0,t.jsx)("p",{className:"text-gray-500 text-xs mt-1",children:"Returns raw text → str"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-gray-300",children:"blob"}),(0,t.jsx)("p",{className:"text-gray-500 text-xs mt-1",children:"Returns binary → bytes"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-gray-300",children:"stream"}),(0,t.jsx)("p",{className:"text-gray-500 text-xs mt-1",children:"Async iterator for large data"})]})]})})]}),(0,t.jsxs)(r.default,{id:"configuration",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Client Configuration"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"Configure your client with defaults that apply to every request:"})]}),(0,t.jsx)(l,{headers:["Option","Type","Default","Description"],rows:n}),(0,t.jsx)(a.default,{language:"python",code:`client = AtomHTTP({
    'baseURL': 'https://api.example.com',
    'timeout': 15,
    'headers': {'X-API-Key': 'your-api-key', 'Accept': 'application/json'},
    'maxRedirects': 3,
    'responseType': 'json',
    'keepAlive': True,
    'verify': True,
    'retryConfig': {
        'max_retries': 3,
        'backoff_factor': 0.3,
        'status_forcelist': [408, 429, 500, 502, 503, 504]
    }
})

# All requests use these defaults
response = await client.get('/users')

# Override for specific request
response = await client.get('/slow', timeout=60)`}),(0,t.jsx)(c,{title:"Configuration Inheritance",children:(0,t.jsx)("p",{className:"text-gray-400 text-sm",children:"Client-level defaults are merged with request-level options. Headers are deeply merged (request headers override client headers), while other options are replaced entirely."})})]}),(0,t.jsxs)(r.default,{id:"headers-params",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Headers & Query Parameters"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"Add custom headers for authentication and metadata. Use query parameters for filtering and pagination."})]}),(0,t.jsx)(a.default,{language:"python",code:`response = await client.get('https://httpbin.org/get',
    params={'search': 'python', 'page': 2, 'limit': 20},
    headers={'Authorization': 'Bearer token123', 'X-Custom-Header': 'value'}
)`}),(0,t.jsxs)("div",{className:"grid sm:grid-cols-2 gap-4 mt-4",children:[(0,t.jsx)(c,{title:"Common Headers",children:(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-gray-300 text-sm",children:"Authorization"}),(0,t.jsx)("p",{className:"text-gray-500 text-xs",children:"Bearer token or Basic auth"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-gray-300 text-sm",children:"Content-Type"}),(0,t.jsx)("p",{className:"text-gray-500 text-xs",children:"Media type of request body"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-gray-300 text-sm",children:"Accept"}),(0,t.jsx)("p",{className:"text-gray-500 text-xs",children:"Expected response media type"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-gray-300 text-sm",children:"User-Agent"}),(0,t.jsx)("p",{className:"text-gray-500 text-xs",children:"Client identifier"})]})]})}),(0,t.jsx)(c,{title:"Query Parameter Best Practices",children:(0,t.jsxs)("ul",{className:"text-gray-400 text-sm space-y-1 list-disc list-inside",children:[(0,t.jsxs)("li",{children:["Use ",(0,t.jsx)("code",{className:"text-gray-300",children:"params"})," for GET, DELETE requests"]}),(0,t.jsx)("li",{children:"Avoid sensitive data in query parameters (they appear in logs)"}),(0,t.jsx)("li",{children:"Use arrays for multi-value parameters"}),(0,t.jsx)("li",{children:"Auto URL-encoded — no manual encoding needed"})]})})]})]}),(0,t.jsxs)(r.default,{id:"error-handling",className:"scroll-mt-24",children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("h2",{className:"text-xl sm:text-2xl font-semibold text-white mb-2",children:"Error Types"}),(0,t.jsx)("p",{className:"text-sm sm:text-base text-gray-400 mb-3",children:"AtomHTTP provides comprehensive error types with standardized error codes:"})]}),(0,t.jsx)(l,{headers:["Error Type","Description","Error Code"],rows:d}),(0,t.jsx)(a.default,{language:"python",code:`from atomhttp.errors import AtomHTTPTimeoutError, AtomHTTPNetworkError, AtomHTTPRequestError

try:
    response = await client.get('https://api.example.com/data', timeout=5)
except AtomHTTPTimeoutError as e:
    print(f"Timeout: {e.code}")  # ECONNABORTED
except AtomHTTPNetworkError as e:
    print(f"Network error: {e.code}")  # ERR_NETWORK
except AtomHTTPRequestError as e:
    print(f"Request failed: {e.code} - Status {e.response.status}")  # ERR_BAD_REQUEST`}),(0,t.jsx)(c,{title:"Error Handling Best Practices",children:(0,t.jsxs)("ul",{className:"text-gray-400 text-sm space-y-1 list-disc list-inside",children:[(0,t.jsx)("li",{children:"Catch specific error types before generic Exception"}),(0,t.jsxs)("li",{children:["Use ",(0,t.jsx)("code",{className:"text-gray-300",children:"error.code"})," for programmatic handling"]}),(0,t.jsxs)("li",{children:["Check ",(0,t.jsx)("code",{className:"text-gray-300",children:"error.response.data"})," ","for server error details"]}),(0,t.jsx)("li",{children:"Implement retry logic for timeout and network errors"})]})})]})]})]})}])}]);