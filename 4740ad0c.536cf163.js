(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(131)),i={id:"testing-with-http",title:"Testing With Http"},c={id:"testing-with-http",title:"Testing With Http",description:"Spectator makes testing data services, which use the Angular HTTP module, a lot easier. For example, let's say that you have service with three methods, one performs a `GET`, one a `POST` and one performs",source:"@site/docs/testing-with-http.md",permalink:"/spectator/docs/testing-with-http",editUrl:"https://github.com/ngneat/spectator/edit/master/docs/docs/testing-with-http.md",sidebar:"docs",previous:{title:"Testing With Host",permalink:"/spectator/docs/testing-with-host"},next:{title:"Testing With Routing",permalink:"/spectator/docs/testing-with-routing"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Spectator makes testing data services, which use the Angular HTTP module, a lot easier. For example, let's say that you have service with three methods, one performs a ",Object(a.b)("inlineCode",{parentName:"p"},"GET"),", one a ",Object(a.b)("inlineCode",{parentName:"p"},"POST")," and one performs\nconcurrent requests:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export class TodosDataService {\n  constructor(private httpClient: HttpClient) {}\n\n  getTodos() {\n    return this.httpClient.get('api/todos');\n  }\n\n  postTodo(id: number) {\n    return this.httpClient.post('api/todos', { id });\n  }\n\n  collectTodos() {\n    return merge(\n      this.http.get('/api1/todos'),\n      this.http.get('/api2/todos')\n    );\n  }\n}\n")),Object(a.b)("p",null,"The test for the above service should look like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { createHttpFactory, HttpMethod } from '@ngneat/spectator';\nimport { TodosDataService } from './todos-data.service';\n\ndescribe('HttpClient testing', () => {\n  let spectator: SpectatorHttp<TodosDataService>;\n  const createHttp = createHttpFactory(TodosDataService);\n\n  beforeEach(() => spectator = createHttp());\n\n  it('can test HttpClient.get', () => {\n    spectator.service.getTodos().subscribe();\n    spectator.expectOne('api/todos', HttpMethod.GET);\n  });\n\n  it('can test HttpClient.post', () => {\n    spectator.service.postTodo(1).subscribe();\n\n    const req = spectator.expectOne('api/todos', HttpMethod.POST);\n    expect(req.request.body['id']).toEqual(1);\n  });\n\n  it('can test current http requests', () => {\n    spectator.service.getTodos().subscribe();\n    const reqs = spectator.expectConcurrent([\n        { url: '/api1/todos', method: HttpMethod.GET },\n        { URL: '/api2/todos', method: HttpMethod.GET }\n    ]);\n\n    spectator.flushAll(reqs, [{}, {}, {}]);\n  });\n});\n")),Object(a.b)("p",null,"We need to create an HTTP factory by using the ",Object(a.b)("inlineCode",{parentName:"p"},"createHttpFactory()")," function, passing the service that you want to test. The ",Object(a.b)("inlineCode",{parentName:"p"},"createHttpFactory()")," returns a function which can be called to get an instance of SpectatorHttp with the following properties:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"controller")," - A proxy for Angular ",Object(a.b)("inlineCode",{parentName:"li"},"HttpTestingController")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"httpClient")," - A proxy for Angular ",Object(a.b)("inlineCode",{parentName:"li"},"HttpClient")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"service")," - The service instance"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"get()")," - A proxy for Angular ",Object(a.b)("inlineCode",{parentName:"li"},"TestBed.get()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"expectOne()")," - Expect that a single request was made which matches the given URL and it's method, and return its mock request")))}l.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(h,c({ref:t},p,{components:n})):o.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);