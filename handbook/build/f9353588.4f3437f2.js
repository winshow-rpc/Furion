(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{106:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return c})),t.d(e,"rightToc",(function(){return u})),t.d(e,"default",(function(){return l}));var r=t(2),a=t(6),i=(t(0),t(114)),o=t(116),s={id:"get-start",title:"\u4e00\u5206\u949f\u5165\u95e8",sidebar_label:"2. \u4e00\u5206\u949f\u5165\u95e8"},c={unversionedId:"get-start",id:"get-start",isDocsHomePage:!1,title:"\u4e00\u5206\u949f\u5165\u95e8",description:"2.1 Hello Fur",source:"@site/docs\\get-start.mdx",slug:"/get-start",permalink:"/fur/docs/get-start",editUrl:"https://gitee.com/monksoul/Fur/tree/rc1/handbook/docs/get-start.mdx",version:"current",sidebar_label:"2. \u4e00\u5206\u949f\u5165\u95e8",sidebar:"docs",previous:{title:"\u5173\u4e8e\u4f5c\u8005",permalink:"/fur/docs/author"},next:{title:"3.1 \u914d\u7f6e",permalink:"/fur/docs/configuration"}},u=[{value:"2.1 Hello Fur",id:"21-hello-fur",children:[{value:"2.1.1 \u521b\u5efa <code>FurService</code> \u7c7b",id:"211-\u521b\u5efa-furservice-\u7c7b",children:[]},{value:"2.1.2 \u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u6548\u679c",id:"212-\u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u6548\u679c",children:[]}]},{value:"2.2 \u6dfb\u52a0\u6570\u636e\u5e93\u652f\u6301",id:"22-\u6dfb\u52a0\u6570\u636e\u5e93\u652f\u6301",children:[{value:"2.2.1 \u6dfb\u52a0 <code>Person</code> \u5b9e\u4f53\u7c7b",id:"221-\u6dfb\u52a0-person-\u5b9e\u4f53\u7c7b",children:[]},{value:"2.2.1 \u521b\u5efa\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"221-\u521b\u5efa\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"2.2.3 \u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32",id:"223-\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32",children:[]},{value:"2.2.4 \u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"224-\u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"2.2.5 \u901a\u8fc7\u547d\u4ee4\u521b\u5efa\u6570\u636e\u5e93\u8868",id:"225-\u901a\u8fc7\u547d\u4ee4\u521b\u5efa\u6570\u636e\u5e93\u8868",children:[]}]},{value:"2.3 \u589e\u5220\u67e5\u6539\u5206\u9875\u4f8b\u5b50",id:"23-\u589e\u5220\u67e5\u6539\u5206\u9875\u4f8b\u5b50",children:[{value:"\u9644\u4e0a <code>PersonDto</code>",id:"\u9644\u4e0a-persondto",children:[]}]}],p={rightToc:u};function l(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"21-hello-fur"},"2.1 Hello Fur"),Object(i.b)("h3",{id:"211-\u521b\u5efa-furservice-\u7c7b"},"2.1.1 \u521b\u5efa ",Object(i.b)("inlineCode",{parentName:"h3"},"FurService")," \u7c7b"),Object(i.b)("p",null,"\u8bbe\u7f6e ",Object(i.b)("inlineCode",{parentName:"p"},"Fur.Web.Entry")," \u4e3a\u542f\u52a8\u9879\uff0c\u5e76\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Fur.Application")," \u4e2d\u521b\u5efa ",Object(i.b)("inlineCode",{parentName:"p"},"FurService")," \u7c7b\uff0c\u5e76\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,5,6,12}","{1,5,6,12}":!0}),'using Fur.DynamicApiController;\n\nnamespace Fur.Application\n{\n    [DynamicApiController] // \u8fd9\u91cc\u4f7f\u7528\u7279\u6027\u65b9\u5f0f\n    public class FurService /*: IDynamicApiController*/ // \u4e5f\u53ef\u4ee5\u4f7f\u7528\u63a5\u53e3\u65b9\u5f0f\n    {\n        /// <summary>\n        /// \u5411\u4e16\u754c\u95ee\u597d\n        /// </summary>\n        /// <returns></returns>\n        public string SayHello()\n        {\n            return $"Hello {nameof(Fur)}";\n        }\n    }\n}\n')),Object(i.b)("h3",{id:"212-\u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u6548\u679c"},"2.1.2 \u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u6548\u679c"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Fur.Web.Entry")," \u9879\u76ee\u4e2d\u9009\u62e9 ",Object(i.b)("inlineCode",{parentName:"p"},"wwwroot")," \u53f3\u952e\u9009\u62e9\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b")),Object(i.b)("img",{src:Object(o.a)("img/getstart1.png"),style:{height:400}}),Object(i.b)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),Object(i.b)("img",{src:Object(o.a)("img/getstart2.gif")}),Object(i.b)("h2",{id:"22-\u6dfb\u52a0\u6570\u636e\u5e93\u652f\u6301"},"2.2 \u6dfb\u52a0\u6570\u636e\u5e93\u652f\u6301"),Object(i.b)("h3",{id:"221-\u6dfb\u52a0-person-\u5b9e\u4f53\u7c7b"},"2.2.1 \u6dfb\u52a0 ",Object(i.b)("inlineCode",{parentName:"h3"},"Person")," \u5b9e\u4f53\u7c7b"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Fur.Core")," \u4e2d\u65b0\u5efa ",Object(i.b)("inlineCode",{parentName:"p"},"Person")," \u5b9e\u4f53\u7c7b\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,7}","{1,7}":!0}),"using Fur.DatabaseAccessor;\nusing System;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace Fur.Core\n{\n    public class Person : Entity    // \u7ee7\u627f\u81ea Entity \u62bd\u8c61\u7c7b\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Person()\n        {\n            CreatedTime = DateTime.Now;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        [MaxLength(32)]\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        /// <summary>\n        /// \u4f4f\u5740\n        /// </summary>\n        public string Address { get; set; }\n    }\n}\n")),Object(i.b)("h3",{id:"221-\u521b\u5efa\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.2.1 \u521b\u5efa\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Fur.EntityFramework.Core")," \u4e2d\u6dfb\u52a0 ",Object(i.b)("inlineCode",{parentName:"p"},"FurDbContext")," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:"{1-2,6-7,13}","{1-2,6-7,13}":!0}),'using Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Fur.EntityFramework.Core\n{\n    [DbContext("DbConnectionString")]   // \u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32\n    public class FurDbContext : AppDbContext<FurDbContext>  // \u7ee7\u627f AppDbContext<> \u7c7b\n    {\n        /// <summary>\n        /// \u7ee7\u627f\u7236\u7c7b\u6784\u9020\u51fd\u6570\n        /// </summary>\n        /// <param name="options"></param>\n        public FurDbContext(DbContextOptions<FurDbContext> options) : base(options)\n        {\n        }\n    }\n}\n')),Object(i.b)("h3",{id:"223-\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32"},"2.2.3 \u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Fur.Web.Entry")," \u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"appsettings.json")," \u4e2d\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'{11-13} title="Fur\\framework\\Fur.Web.Entry\\appsettings.json"',"{11-13}":!0,title:'"Fur\\framework\\Fur.Web.Entry\\appsettings.json"'}),'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft": "Warning",\n      "Microsoft.Hosting.Lifetime": "Information",\n      "Microsoft.EntityFrameworkCore": "Information"\n    }\n  },\n  "AllowedHosts": "*",\n  "ConnectionStrings": {\n    "DbConnectionString": "Server=localhost;Database=Fur;User=sa;Password=000000;MultipleActiveResultSets=True;"\n  }\n}\n')),Object(i.b)("h3",{id:"224-\u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.2.4 \u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Fur.Web.Entry")," \u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"Startup")," \u4e2d\u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:'{5,29-33} title="Fur\\framework\\Fur.Web.Entry\\Startup.cs"',"{5,29-33}":!0,title:'"Fur\\framework\\Fur.Web.Entry\\Startup.cs"'}),"using Fur.EntityFramework.Core;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace Fur.Web.Entry\n{\n    public class Startup\n    {\n        public Startup(IConfiguration configuration)\n        {\n            Configuration = configuration;\n        }\n\n        public IConfiguration Configuration { get; }\n\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddApp(options =>\n            {\n                options.AddSpecificationDocuments();\n                options.AddControllers()\n                           .AddDynamicApiControllers()\n                           .AddFriendlyException()\n                           .AddDataValidation();\n\n                // \u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u652f\u6301N\u4e2a\u6570\u636e\u5e93\n                options.AddDatabaseAccessor(options =>\n                {\n                    options.AddSqlServerPool<FurDbContext>();\n                });\n            });\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            // \u5176\u4ed6\u4ee3\u7801\n        }\n    }\n}\n")),Object(i.b)("h3",{id:"225-\u901a\u8fc7\u547d\u4ee4\u521b\u5efa\u6570\u636e\u5e93\u8868"},"2.2.5 \u901a\u8fc7\u547d\u4ee4\u521b\u5efa\u6570\u636e\u5e93\u8868"),Object(i.b)("p",null,"\u6253\u5f00 ",Object(i.b)("inlineCode",{parentName:"p"},"\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0"),"\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),Object(i.b)("img",{src:Object(o.a)("img/getstart3.png"),style:{height:400}}),Object(i.b)("p",null,"\u9009\u62e9 ",Object(i.b)("inlineCode",{parentName:"p"},"\u9ed8\u8ba4\u9879\u76ee\u4e3a"),"\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"Fur.Database.Migrations"),"\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),Object(i.b)("img",{src:Object(o.a)("img/getstart4.png")}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4"),"\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"Add-Migration v0.0.1\n")),Object(i.b)("img",{src:Object(o.a)("img/getstart5.png")}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u66f4\u6539")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"Update-Database\n")),Object(i.b)("img",{src:Object(o.a)("img/getstart6.png")}),Object(i.b)("img",{src:Object(o.a)("img/getstart7.png"),style:{height:400}}),Object(i.b)("h2",{id:"23-\u589e\u5220\u67e5\u6539\u5206\u9875\u4f8b\u5b50"},"2.3 \u589e\u5220\u67e5\u6539\u5206\u9875\u4f8b\u5b50"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:"{14-19}","{14-19}":!0}),'using Fur.Core;\nusing Fur.DatabaseAccessor;\nusing Fur.DynamicApiController;\nusing Mapster;\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace Fur.Application\n{\n    [DynamicApiController] // \u8fd9\u91cc\u4f7f\u7528\u7279\u6027\u65b9\u5f0f\n    public class FurService /*: IDynamicApiController*/ // \u4e5f\u53ef\u4ee5\u4f7f\u7528\u63a5\u53e3\u65b9\u5f0f\n    {\n        // \u521d\u59cb\u5316\u4ed3\u50a8\n        private readonly IRepository<Person> _personRepository;\n        public FurService(IRepository<Person> personRepository)\n        {\n            _personRepository = personRepository;\n        }\n\n        /// <summary>\n        /// \u65b0\u589e\u4e00\u6761\n        /// </summary>\n        public async Task<int> Insert(PersonDto personDto)\n        {\n            // \u5982\u679c\u4e0d\u9700\u8981\u8fd4\u56de\u81ea\u589eId\uff0c\u4f7f\u7528 InsertAsync\u5373\u53ef\n            var newEntity = await _personRepository.InsertNowAsync(personDto.Adapt<Person>());\n            return newEntity.Entity.Id;\n\n            // \u8fd8\u53ef\u4ee5\u76f4\u63a5\u64cd\u4f5c\n            // await personDto.Adapt<Person>().InsertNowAsync();\n        }\n\n        /// <summary>\n        /// \u66f4\u65b0\u4e00\u6761\n        /// </summary>\n        /// <param name="personDto"></param>\n        public async Task Update(PersonDto personDto)\n        {\n            await _personRepository.UpdateAsync(personDto.Adapt<Person>());\n\n            // \u8fd8\u53ef\u4ee5\u76f4\u63a5\u64cd\u4f5c\n            // await personDto.Adapt<Person>().UpdateAsync();\n        }\n\n        /// <summary>\n        /// \u5220\u9664\u4e00\u6761\n        /// </summary>\n        /// <param name="id"></param>\n        public async Task Delete(int id)\n        {\n            await _personRepository.DeleteAsync(id);\n        }\n\n        /// <summary>\n        /// \u67e5\u8be2\u4e00\u6761\n        /// </summary>\n        /// <param name="id"></param>\n        public async Task<PersonDto> Find(int id)\n        {\n            var person = await _personRepository.FindAsync(id);\n            return person.Adapt<PersonDto>();\n        }\n\n        /// <summary>\n        /// \u67e5\u8be2\u6240\u6709\n        /// </summary>\n        /// <returns></returns>\n        public async Task<List<PersonDto>> GetAll()\n        {\n            var persons = await _personRepository.AsQueryable().ToListAsync();\n            return persons.Adapt<List<PersonDto>>();\n        }\n\n        /// <summary>\n        /// \u5206\u9875\u67e5\u8be2\n        /// </summary>\n        /// <param name="pageIndex"></param>\n        /// <param name="pageSize"></param>\n        /// <returns></returns>\n        public async Task<PagedList<PersonDto>> GetAllByPage(int pageIndex = 1, int pageSize = 10)\n        {\n            var pageResult = await _personRepository.PagedFilterAsync(pageIndex, pageSize);\n            return pageResult.Adapt<PagedList<PersonDto>>();\n        }\n    }\n}\n')),Object(i.b)("img",{src:Object(o.a)("img/getstart8.gif")}),Object(i.b)("h3",{id:"\u9644\u4e0a-persondto"},"\u9644\u4e0a ",Object(i.b)("inlineCode",{parentName:"h3"},"PersonDto")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"using System.ComponentModel.DataAnnotations;\n\nnamespace Fur.Application\n{\n    public class PersonDto\n    {\n        /// <summary>\n        /// Id\n        /// </summary>\n        public int? Id { get; set; }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        [StringLength(32, MinimumLength = 2)]\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n    }\n}\n")),Object(i.b)("p",null,"\u8bf4\u597d\u4e00\u5206\u949f\u5165\u95e8\uff0c\u4f60\u4eec\u7528\u4e86\u591a\u957f\u65f6\u95f4\u3002\ud83d\ude01"))}l.isMDXComponent=!0},114:function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=a.a.createContext({}),p=function(n){var e=a.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},l=function(n){var e=p(n.components);return a.a.createElement(u.Provider,{value:e},n.children)},b={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,o=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),l=p(t),m=r,d=l["".concat(o,".").concat(m)]||l[m]||b[m]||i;return t?a.a.createElement(d,s(s({ref:e},u),{},{components:t})):a.a.createElement(d,s({ref:e},u))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},115:function(n,e,t){"use strict";var r=t(0),a=t(19);e.a=function(){var n=Object(r.useContext)(a.a);if(null===n)throw new Error("Docusaurus context not provided");return n}},116:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return o}));var r=t(115),a=t(117);function i(){var n=Object(r.a)().siteConfig,e=(n=void 0===n?{}:n).baseUrl,t=void 0===e?"/":e,i=n.url;return{withBaseUrl:function(n,e){return function(n,e,t,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,u=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(s)return e+t;var p=t.startsWith(e)?t:e+t.replace(/^\//,"");return u?n+p:p}(i,t,n,e)}}}function o(n,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(n,e)}},117:function(n,e,t){"use strict";function r(n){return!0===/^(\w*:|\/\/)/.test(n)}function a(n){return void 0!==n&&!r(n)}t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return a}))}}]);