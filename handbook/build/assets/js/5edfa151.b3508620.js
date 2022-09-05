"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5809],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8206:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"dbcontext-batch",title:"9.9 \u6279\u91cf\u64cd\u4f5c",sidebar_label:"9.9 \u6279\u91cf\u64cd\u4f5c"},s=void 0,p={unversionedId:"dbcontext-batch",id:"dbcontext-batch",title:"9.9 \u6279\u91cf\u64cd\u4f5c",description:"9.9.1 \u5173\u4e8e\u6279\u91cf\u64cd\u4f5c",source:"@site/docs/dbcontext-batch.mdx",sourceDirName:".",slug:"/dbcontext-batch",permalink:"/furion/docs/dbcontext-batch",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/dbcontext-batch.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1658810232,formattedLastUpdatedAt:"Jul 26, 2022",frontMatter:{id:"dbcontext-batch",title:"9.9 \u6279\u91cf\u64cd\u4f5c",sidebar_label:"9.9 \u6279\u91cf\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.8 \u5220\u9664\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-delete"},next:{title:"9.10 \u67e5\u8be2\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-query"}},c={},d=[{value:"9.9.1 \u5173\u4e8e\u6279\u91cf\u64cd\u4f5c",id:"991-\u5173\u4e8e\u6279\u91cf\u64cd\u4f5c",level:2},{value:"9.9.2 <code>Zack.EFCore.Batch</code> \u4f7f\u7528",id:"992-zackefcorebatch-\u4f7f\u7528",level:2},{value:"9.9.2.1 \u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93 <code>Nuget</code> \u5305",id:"9921-\u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93-nuget-\u5305",level:3},{value:"9.9.2.2 \u6ce8\u518c\u5e76\u914d\u7f6e\u670d\u52a1",id:"9922-\u6ce8\u518c\u5e76\u914d\u7f6e\u670d\u52a1",level:3},{value:"9.9.2.3 \u57fa\u672c\u4f7f\u7528",id:"9923-\u57fa\u672c\u4f7f\u7528",level:3},{value:"9.9.3 <code>EFCore.BulkExtensions</code> \u4f7f\u7528",id:"993-efcorebulkextensions-\u4f7f\u7528",level:2},{value:"9.9.3.1 \u5e38\u89c1\u6279\u91cf\u64cd\u4f5c",id:"9931-\u5e38\u89c1\u6279\u91cf\u64cd\u4f5c",level:3},{value:"9.9.3.2 \u67e5\u8be2\u540e\u6279\u91cf\u64cd\u4f5c",id:"9932-\u67e5\u8be2\u540e\u6279\u91cf\u64cd\u4f5c",level:3},{value:"9.9.3.3 \u6279\u91cf\u64cd\u4f5c\u6027\u80fd",id:"9933-\u6279\u91cf\u64cd\u4f5c\u6027\u80fd",level:3},{value:"9.9.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"994-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"991-\u5173\u4e8e\u6279\u91cf\u64cd\u4f5c"},"9.9.1 \u5173\u4e8e\u6279\u91cf\u64cd\u4f5c"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u9ed8\u8ba4\u53ea\u63d0\u4f9b\u5c0f\u6570\u636e\uff08100 \u6761 \u4ee5\u5185\uff09\u6279\u91cf\u6570\u636e\u64cd\u4f5c\uff0c\u5982\u679c\u9700\u8981\u66f4\u5927\u7684\u6570\u636e\u6279\u91cf\u5904\u7406\uff0c\u63a8\u8350\u4f7f\u7528\u7b2c\u4e09\u65b9\u5305 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yangzhongke/Zack.EFCore.Batch"},"Zack.EFCore.Batch"),"\uff0c\u652f\u6301\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u65e0\u7f1d\u8854\u63a5\u3002"),(0,i.kt)("h2",{id:"992-zackefcorebatch-\u4f7f\u7528"},"9.9.2 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Zack.EFCore.Batch")," \u4f7f\u7528"),(0,i.kt)("h3",{id:"9921-\u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93-nuget-\u5305"},"9.9.2.1 \u5b89\u88c5\u5bf9\u5e94\u7684\u6570\u636e\u5e93 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Nuget")," \u5305"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MSSQL"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Zack.EFCore.Batch.MSSQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MySql"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Zack.EFCore.Batch.MySQL.Pomelo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Npgsql"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Zack.EFCore.Batch.Npgsql")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Oracle"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Zack.EFCore.Batch.Oracle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Sqlite"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Zack.EFCore.Batch.Sqlite"))),(0,i.kt)("h3",{id:"9922-\u6ce8\u518c\u5e76\u914d\u7f6e\u670d\u52a1"},"9.9.2.2 \u6ce8\u518c\u5e76\u914d\u7f6e\u670d\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3,5}",showLineNumbers:!0,"":!0,"{3,5}":!0},"services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<DefaultDbContext>(providerName: default, optionBuilder: (services, opt) => // \u5982\u679c\u662f v3.7.11 \u4e4b\u524d\uff0c\u4f7f\u7528 opt =>\n    {\n        opt.UseBatchEF_Sqlite();    // SQlite \u6570\u636e\u5e93\u5305\n    });\n});\n")),(0,i.kt)("h3",{id:"9923-\u57fa\u672c\u4f7f\u7528"},"9.9.2.3 \u57fa\u672c\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u6279\u91cf\u66f4\u65b0\nawait repository.Context.BatchUpdate<Book>()\n    .Set(b => b.Price, b => b.Price + 3)\n    .Set(b => b.Title, b => s)\n    .Set(b => b.AuthorName,b=>b.Title.Substring(3,2)+b.AuthorName.ToUpper())\n    .Set(b => b.PubTime, b => DateTime.Now)\n    .Where(b => b.Id > n || b.AuthorName.StartsWith("Zack"))\n    .ExecuteAsync();\n\n// \u6279\u91cf\u5220\u9664\nawait repository.Context.DeleteRangeAsync<Book>(b => b.Price > n || b.AuthorName == "zack yang");\n')),(0,i.kt)("h2",{id:"993-efcorebulkextensions-\u4f7f\u7528"},"9.9.3 ",(0,i.kt)("inlineCode",{parentName:"h2"},"EFCore.BulkExtensions")," \u4f7f\u7528"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Nuget")," \u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"EFCore.BulkExtensions")," \u5305\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"9931-\u5e38\u89c1\u6279\u91cf\u64cd\u4f5c"},"9.9.3.1 \u5e38\u89c1\u6279\u91cf\u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u6279\u91cf\u63d2\u5165\nrepository.Context.BulkInsert(entitiesList);\nrepository.Context.BulkInsertAsync(entitiesList);\n\n// \u6279\u91cf\u66f4\u65b0\nrepository.Context.BulkUpdate(entitiesList);\nrepository.Context.BulkUpdateAsync(entitiesList);\n\n// \u6279\u91cf\u5220\u9664\nrepository.Context.BulkDelete(entitiesList);\nrepository.Context.BulkDeleteAsync(entitiesList);\n\n// \u6279\u91cf\u63d2\u5165\u6216\u66f4\u65b0\nrepository.Context.BulkInsertOrUpdate(entitiesList);\nrepository.Context.BulkInsertOrUpdateAsync(entitiesList);\n\n// \u6279\u91cf\u63d2\u5165\u6216\u66f4\u65b0\u6216\u5220\u9664\nrepository.Context.BulkInsertOrUpdateOrDelete(entitiesList);\nrepository.Context.BulkInsertOrUpdateOrDeleteAsync(entitiesList);\n\n// \u6279\u91cf\u8bfb\u53d6\u591a\u4e2a\u5b9e\u4f53\nrepository.Context.BulkRead(entitiesList);\nrepository.Context.BulkReadAsync(entitiesList);\n\n// \u6279\u91cf\u6e05\u7a7a\u8868\uff08\u614e\u7528\uff01\uff01\uff01\uff01\uff01\uff09\nrepository.Context.Truncate<Entity>();\nrepository.Context.TruncateAsync<Entity>();\n")),(0,i.kt)("h3",{id:"9932-\u67e5\u8be2\u540e\u6279\u91cf\u64cd\u4f5c"},"9.9.3.2 \u67e5\u8be2\u540e\u6279\u91cf\u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u6839\u636e\u6761\u4ef6\u6279\u91cf\u5220\u9664\nrepository.Where(a => a.ItemId >  500).BatchDelete();\nawait repository.Where(a => a.ItemId >  500).BatchDeleteAsync();\n\n// \u6839\u636e\u6761\u4ef6\u6279\u91cf\u66f4\u65b0\nrepository.Where(a => a.ItemId <= 500).BatchUpdate(a => new Item { Quantity = a.Quantity + 100 });\nrepository.Where(a => a.ItemId <= 500).BatchUpdate(new Item { Description = "Updated" });\nawait repository.Where(a => a.ItemId <= 500).BatchUpdateAsync(new Item { Description = "Updated" });\n\n// \u6279\u91cf\u66f4\u65b0\u6307\u5b9a\u5217\nvar updateColumns = new List<string> { nameof(Item.Quantity) };\nvar q = repository.Where(a => a.ItemId <= 500);\nint affected = q.BatchUpdate(new Item { Description = "Updated" }, updateColumns);\n')),(0,i.kt)("h3",{id:"9933-\u6279\u91cf\u64cd\u4f5c\u6027\u80fd"},"9.9.3.3 \u6279\u91cf\u64cd\u4f5c\u6027\u80fd"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operations\\Rows"),(0,i.kt)("th",{parentName:"tr",align:"right"},"100,000 EF"),(0,i.kt)("th",{parentName:"tr",align:"right"},"100,000 EFBulk"),(0,i.kt)("th",{parentName:"tr",align:"right"},"1,000,000 EFBulk"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Insert"),(0,i.kt)("td",{parentName:"tr",align:"right"},"38.98 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.10 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"17.99 s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Update"),(0,i.kt)("td",{parentName:"tr",align:"right"},"109.25 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"3.96 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"31.45 s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Delete"),(0,i.kt)("td",{parentName:"tr",align:"right"},"7.26 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2.04 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"12.18 s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-----------------"),(0,i.kt)("td",{parentName:"tr",align:"right"},"------------"),(0,i.kt)("td",{parentName:"tr",align:"right"},"----------------"),(0,i.kt)("td",{parentName:"tr",align:"right"},"------------------")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Together")),(0,i.kt)("td",{parentName:"tr",align:"right"},"70.70 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"5.88 s"),(0,i.kt)("td",{parentName:"tr",align:"right"},"56.84 s")))),(0,i.kt)("h2",{id:"994-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.9.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")),(0,i.kt)("hr",null),(0,i.kt)("admonition",{title:"\u4e86\u89e3\u66f4\u591a",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"EFCore.BulkExtensions")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/borisdj/EFCore.BulkExtensions"},"EFCore.BulkExtensions \u5f00\u6e90\u4ed3\u5e93"),"\u3002")))}m.isMDXComponent=!0}}]);