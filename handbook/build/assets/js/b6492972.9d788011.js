"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7300],{4707:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return C},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=n(1402),l=["components"],s={id:"dbcontext-code-first",title:"9.20 \u6a21\u578b\u751f\u6210\u6570\u636e\u5e93",sidebar_label:"9.20 \u6a21\u578b\u751f\u6210\u6570\u636e\u5e93 (Code First)"},c=void 0,p={unversionedId:"dbcontext-code-first",id:"dbcontext-code-first",title:"9.20 \u6a21\u578b\u751f\u6210\u6570\u636e\u5e93",description:"",source:"@site/docs/dbcontext-code-first.mdx",sourceDirName:".",slug:"/dbcontext-code-first",permalink:"/furion/docs/dbcontext-code-first",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/dbcontext-code-first.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1661501054,formattedLastUpdatedAt:"Aug 26, 2022",frontMatter:{id:"dbcontext-code-first",title:"9.20 \u6a21\u578b\u751f\u6210\u6570\u636e\u5e93",sidebar_label:"9.20 \u6a21\u578b\u751f\u6210\u6570\u636e\u5e93 (Code First)"},sidebar:"docs",previous:{title:"9.19 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b (Db First)",permalink:"/furion/docs/dbcontext-db-first"},next:{title:"9.21 \u5b9e\u4f53\u79cd\u5b50\u6570\u636e",permalink:"/furion/docs/dbcontext-seed-data"}},d={},m=[{value:"9.20.1 \u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f",id:"9201-\u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f",level:2},{value:"9.20.2 \u64cd\u4f5c\u6307\u5357",id:"9202-\u64cd\u4f5c\u6307\u5357",level:2},{value:"9.20.2.1 \u521b\u5efa\u5b9e\u4f53\u6a21\u578b <code>Person</code>",id:"92021-\u521b\u5efa\u5b9e\u4f53\u6a21\u578b-person",level:3},{value:"9.20.2.2 \u6253\u5f00 <code>\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0</code>",id:"92022-\u6253\u5f00-\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0",level:3},{value:"9.20.2.3 \u5207\u6362\u9ed8\u8ba4\u9879\u76ee",id:"92023-\u5207\u6362\u9ed8\u8ba4\u9879\u76ee",level:3},{value:"9.20.2.4 \u521b\u5efa\u6a21\u578b\u7248\u672c",id:"92024-\u521b\u5efa\u6a21\u578b\u7248\u672c",level:3},{value:"9.20.2.5 \u66f4\u65b0\u5230\u6570\u636e\u5e93",id:"92025-\u66f4\u65b0\u5230\u6570\u636e\u5e93",level:3},{value:"9.20.3 \u66f4\u65b0\u6a21\u578b",id:"9203-\u66f4\u65b0\u6a21\u578b",level:2},{value:"9.20.4 \u5bfc\u51fa <code>Sql</code>",id:"9204-\u5bfc\u51fa-sql",level:2},{value:"9.20.5 <code>VS Code/Rider/\u4efb\u4f55IDE/\u64cd\u4f5c\u7cfb\u7edf</code> \u65b9\u5f0f",id:"9205-vs-coderider\u4efb\u4f55ide\u64cd\u4f5c\u7cfb\u7edf-\u65b9\u5f0f",level:2},{value:"9.20.5.1 \u5b89\u88c5 <code>dotnet ef</code>",id:"92051-\u5b89\u88c5-dotnet-ef",level:3},{value:"9.20.5.2 <code>cd</code> \u76ee\u5f55",id:"92052-cd-\u76ee\u5f55",level:3},{value:"9.20.5.3 \u6267\u884c\u547d\u4ee4",id:"92053-\u6267\u884c\u547d\u4ee4",level:3},{value:"9.20.6 \u5e94\u7528\u542f\u52a8\u65f6\u81ea\u52a8\u751f\u6210\u6570\u636e\u5e93",id:"9206-\u5e94\u7528\u542f\u52a8\u65f6\u81ea\u52a8\u751f\u6210\u6570\u636e\u5e93",level:2},{value:"9.20.6.1 \u5bf9\u5df2\u7ecf\u751f\u6210 <code>Migrations</code> \u6587\u4ef6\u60c5\u51b5",id:"92061-\u5bf9\u5df2\u7ecf\u751f\u6210-migrations-\u6587\u4ef6\u60c5\u51b5",level:3},{value:"9.20.6.2 \u5982\u679c\u6ca1\u6709\u751f\u6210\u8fc7 <code>Migrations</code> \u6587\u4ef6\u60c5\u51b5",id:"92062-\u5982\u679c\u6ca1\u6709\u751f\u6210\u8fc7-migrations-\u6587\u4ef6\u60c5\u51b5",level:3},{value:"9.20.7 <code>MySql.EntityFrameworkCore</code> \u5728 <code>.NET 6.0.8+</code> \u95ee\u9898",id:"9207-mysqlentityframeworkcore-\u5728-net-608-\u95ee\u9898",level:2},{value:"9.20.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9208-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],u={toc:m};function C(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u5f00\u59cb\u4e4b\u524d",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Fur.Web.Entry")," \u5c42\u9700\u8981\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft.EntityFrameworkCore.Tools")," \u5305\u3002")),(0,r.kt)("h2",{id:"9201-\u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f"},"9.20.1 \u6570\u636e\u5e93\u5f00\u53d1\u65b9\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e24\u79cd\u4e3b\u8981\u65b9\u6cd5\u6765 ",(0,r.kt)("strong",{parentName:"p"},"\u4fdd\u6301\u5b9e\u4f53\u6a21\u578b\u548c\u6570\u636e\u5e93\u67b6\u6784\u540c\u6b65"),"\u3002"),(0,r.kt)("p",null,"\u81f3\u4e8e\u6211\u4eec\u5e94\u8be5\u9009\u7528\u54ea\u4e2a\u65b9\u6cd5\uff0c\u8bf7\u786e\u5b9a\u4f60\u662f\u5e0c\u671b\u4ee5\u5b9e\u4f53\u6a21\u578b\u4e3a\u51c6\u8fd8\u662f\u4ee5\u6570\u636e\u5e93\u4e3a\u51c6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5e0c\u671b ",(0,r.kt)("strong",{parentName:"p"},"\u4ee5\u5b9e\u4f53\u6a21\u578b\u4e3a\u51c6"),"\uff0c\u8bf7\u4f7f\u7528\u6b63\u5411\u5de5\u7a0b\uff08Code First\uff09\u3002 \u5bf9\u5b9e\u4f53\u6a21\u578b\u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u6b64\u65b9\u6cd5\u4f1a\u4ee5\u589e\u91cf\u65b9\u5f0f\u5c06\u76f8\u5e94\u67b6\u6784\u66f4\u6539\u5e94\u7528\u5230\u6570\u636e\u5e93\uff0c\u4ee5\u4f7f\u6570\u636e\u5e93\u4fdd\u6301\u4e0e\u5b9e\u4f53\u6a21\u578b\u517c\u5bb9\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5e0c\u671b ",(0,r.kt)("strong",{parentName:"p"},"\u4ee5\u6570\u636e\u5e93\u67b6\u6784\u4e3a\u51c6"),"\uff0c\u8bf7\u4f7f\u7528\u53cd\u5411\u5de5\u7a0b\uff08Database First\uff09\u3002 \u4f7f\u7528\u6b64\u65b9\u6cd5\uff0c\u53ef\u901a\u8fc7\u5c06\u6570\u636e\u5e93\u67b6\u6784\u53cd\u5411\u5de5\u7a0b\u5230\u5b9e\u4f53\u6a21\u578b\u6765\u751f\u6210\u76f8\u5e94\u7684\u5b9e\u4f53\u7c7b\u578b\u3002"))),(0,r.kt)("p",null,"\u672c\u7ae0\u8282\u662f ",(0,r.kt)("strong",{parentName:"p"},"\u6b63\u5411\u5de5\u7a0b\uff08Code First\uff09")," \u7684\u76f8\u5173\u5185\u5bb9\u3002"),(0,r.kt)("h2",{id:"9202-\u64cd\u4f5c\u6307\u5357"},"9.20.2 \u64cd\u4f5c\u6307\u5357"),(0,r.kt)("admonition",{title:"\u7279\u522b\u6ce8\u610f",type:"important"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u9ed8\u8ba4\u6570\u636e\u8fc1\u79fb\u7684\u7a0b\u5e8f\u96c6\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Furion.Database.Migrations"),"\uff0c\u6240\u4ee5\u5982\u679c\u60a8\u6539\u4e86\u7a0b\u5e8f\u96c6\u540d\u79f0\u6216\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Nuget")," \u65b9\u5f0f\u5b89\u88c5\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u5305\uff0c\u5219\u9700\u8981\u914d\u7f6e\u8fc1\u79fb\u7a0b\u5e8f\u96c6\u540d\u79f0\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4}",showLineNumbers:!0,"":!0,"{4}":!0},'services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>(DbProvider.Sqlite);\n}, "\u5b58\u653e\u8fc1\u79fb\u6587\u4ef6\u7684\u9879\u76ee\u540d\u79f0");\n')),(0,r.kt)("p",{parentName:"admonition"},"\u53e6\u5916\uff0c\u5982\u679c\u5e94\u7528\u4e2d\u914d\u7f6e\u4e86\u591a\u4e2a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u90a3\u4e48\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u8fc1\u79fb\u547d\u4ee4")," \u90fd\u9700\u8981\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"-Context \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u540d\u79f0")," \u53c2\u6570\u3002\u5982\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"Add-Migration v1.0.0 -Context FurionDbContext\n"))),(0,r.kt)("h3",{id:"92021-\u521b\u5efa\u5b9e\u4f53\u6a21\u578b-person"},"9.20.2.1 \u521b\u5efa\u5b9e\u4f53\u6a21\u578b ",(0,r.kt)("inlineCode",{parentName:"h3"},"Person")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,6,8}",showLineNumbers:!0,"":!0,"{1,6,8}":!0},"using Furion.DatabaseAccessor;\nusing System;\nusing System.Collections.Generic;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace Furion.Core\n{\n    public class Person : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Person()\n        {\n            CreatedTime = DateTime.Now;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        [MaxLength(32)]\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        /// <summary>\n        /// \u4f4f\u5740\n        /// </summary>\n        public string Address { get; set; }\n    }\n}\n")),(0,r.kt)("admonition",{title:"\u5b9e\u4f53\u7ea6\u5b9a",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"\u6240\u6709\u6570\u636e\u5e93\u5b9e\u4f53\u5fc5\u987b\u76f4\u63a5\u6216\u95f4\u63a5\u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"IEntity")," \u63a5\u53e3\u3002")),(0,r.kt)("h3",{id:"92022-\u6253\u5f00-\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0"},"9.20.2.2 \u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"h3"},"\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0")),(0,r.kt)("img",{src:(0,o.Z)("img/dbfirst1.png")}),(0,r.kt)("h3",{id:"92023-\u5207\u6362\u9ed8\u8ba4\u9879\u76ee"},"9.20.2.3 \u5207\u6362\u9ed8\u8ba4\u9879\u76ee"),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0")," \u9ed8\u8ba4\u9879\u76ee\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion.Database.Migrations")),(0,r.kt)("img",{src:(0,o.Z)("img/codefirst1.png")}),(0,r.kt)("h3",{id:"92024-\u521b\u5efa\u6a21\u578b\u7248\u672c"},"9.20.2.4 \u521b\u5efa\u6a21\u578b\u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"Add-Migration v1.0.0\n")),(0,r.kt)("admonition",{title:"\u7279\u522b\u8bf4\u660e",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"v1.0.0")," \u662f\u6b64\u5904\u6570\u636e\u5e93\u66f4\u6539\u7684\u7248\u672c\u53f7\uff0c\u53ef\u4ee5\u5199\u4efb\u4f55\u5b57\u7b26\u4e32\uff0c\u4f46\u63a8\u8350\u5199\u7248\u672c\u53f7\uff0c\u6bcf\u6b21 ",(0,r.kt)("strong",{parentName:"p"},"+1"),"\u3002")),(0,r.kt)("p",null,"\u6700\u7ec8\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"PM> Add-Migration v1.0.0\nBuild started...\nBuild succeeded.\nMicrosoft.EntityFrameworkCore.Model.Validation[10400]\n      Sensitive data logging is enabled. Log entries and exception messages may include sensitive application data, this mode should only be enabled during development.\nMicrosoft.EntityFrameworkCore.Infrastructure[10403]\n      Entity Framework Core 5.0.0-rc.1.20451.13 initialized 'FurionDbContext' using provider 'Microsoft.EntityFrameworkCore.Sqlite' with options: SensitiveDataLoggingEnabled DetailedErrorsEnabled MaxPoolSize=100 MigrationsAssembly=Furion.Database.Migrations\nTo undo this action, use Remove-Migration.\nPM>\n")),(0,r.kt)("p",null,"\u751f\u6210\u6210\u529f\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Furion.Database.Migrations")," \u9879\u76ee\u4e0b\u4f1a\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"p"},"Migrations")," \u6587\u4ef6\u5939\uff08\u5982\u679c\u6ca1\u6709\uff09\uff0c\u540c\u65f6\u672c\u6b21\u7684\u67b6\u6784\u751f\u6210\u6587\u4ef6\uff0c\u5982\uff1a"),(0,r.kt)("img",{src:(0,o.Z)("img/codefirst3.png")}),(0,r.kt)("h3",{id:"92025-\u66f4\u65b0\u5230\u6570\u636e\u5e93"},"9.20.2.5 \u66f4\u65b0\u5230\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"Update-Database\n")),(0,r.kt)("p",null,"\u6267\u884c\u8be5\u547d\u4ee4\u540e\uff0c\u6570\u636e\u5e93\u5c31\u4f1a\u81ea\u52a8\u6839\u636e\u6a21\u578b\u751f\u6210\u5bf9\u5e94\u7684\u8868\u3002"),(0,r.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"Update-Database")," \u540e\u9762\u5e26\u5b57\u7b26\u4e32\u53c2\u6570\uff0c\u5219\u4f1a\u81ea\u52a8\u8fd8\u539f\u6570\u636e\u5e93\u5230\u6307\u5b9a\u7248\u672c\uff0c\u5982\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"Update-Database v0.0.3\n")),(0,r.kt)("p",{parentName:"admonition"},"\u5c06\u6570\u636e\u5e93\u8fd8\u539f\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.0.3")," \u7248\u672c")),(0,r.kt)("h2",{id:"9203-\u66f4\u65b0\u6a21\u578b"},"9.20.3 \u66f4\u65b0\u6a21\u578b"),(0,r.kt)("p",null,"\u5982\u679c\u6a21\u578b\u6539\u53d8\u4e86\uff0c\u91cd\u590d\u4e0a\u9762\u64cd\u4f5c\u5373\u53ef\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"Add-Migration v1.0.1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"Update-Database\n")),(0,r.kt)("h2",{id:"9204-\u5bfc\u51fa-sql"},"9.20.4 \u5bfc\u51fa ",(0,r.kt)("inlineCode",{parentName:"h2"},"Sql")),(0,r.kt)("p",null,"\u6709\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u6ca1\u6709\u76f4\u63a5\u66f4\u65b0\u6570\u636e\u5e93\u7684\u6743\u9650\uff0c\u6216\u8005\u6015\u51fa\u95ee\u9898\uff0c\u6211\u4eec\u90fd\u4f1a\u5148\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"Sql")," \u770b\u770b\uff0c\u8fd9\u65f6\u5019\u53ea\u9700\u8981\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Script-Migration")," \u5bfc\u51fa\u5373\u53ef\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"Script-Migration\n")),(0,r.kt)("img",{src:(0,o.Z)("img/codefirst2.png")}),(0,r.kt)("h2",{id:"9205-vs-coderider\u4efb\u4f55ide\u64cd\u4f5c\u7cfb\u7edf-\u65b9\u5f0f"},"9.20.5 ",(0,r.kt)("inlineCode",{parentName:"h2"},"VS Code/Rider/\u4efb\u4f55IDE/\u64cd\u4f5c\u7cfb\u7edf")," \u65b9\u5f0f"),(0,r.kt)("h3",{id:"92051-\u5b89\u88c5-dotnet-ef"},"9.20.5.1 \u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"h3"},"dotnet ef")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"dotnet tool install --global dotnet-ef --version 5.0.0-rc.2.20475.6\n")),(0,r.kt)("h3",{id:"92052-cd-\u76ee\u5f55"},"9.20.5.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"cd")," \u76ee\u5f55"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"VS Code")," \u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},".sln")," \u6240\u5728\u7684\u76ee\u5f55\uff0c\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"framework"),"\u3002"),(0,r.kt)("p",null,"\u4e4b\u540e\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion.Database.Migrations")," \u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"cd Furion.Database.Migrations\n")),(0,r.kt)("h3",{id:"92053-\u6267\u884c\u547d\u4ee4"},"9.20.5.3 \u6267\u884c\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},'dotnet ef migrations add v1.0.0 -s "../Furion.Web.Entry"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},'dotnet ef database update -s "../Furion.Web.Entry"\n')),(0,r.kt)("h2",{id:"9206-\u5e94\u7528\u542f\u52a8\u65f6\u81ea\u52a8\u751f\u6210\u6570\u636e\u5e93"},"9.20.6 \u5e94\u7528\u542f\u52a8\u65f6\u81ea\u52a8\u751f\u6210\u6570\u636e\u5e93"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u5efa\u8bae\u5927\u5bb6\u4f7f\u7528\u547d\u4ee4\u65b9\u5f0f\u64cd\u4f5c\u6570\u636e\u5e93\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5b8c\u5168\u4e0d\u63a8\u8350\u81ea\u52a8\u5316\u751f\u6210\u6570\u636e\u5e93"),"\uff0c\u4f46\u662f\u6709\u4e9b\u7279\u6b8a\u60c5\u51b5\u4e0b\uff0c\u6709\u8fd9\u4e2a\u5fc5\u8981\uff0c\u6545\u5c06\u6b64\u529f\u80fd\u5199\u51fa\uff1a"),(0,r.kt)("h3",{id:"92061-\u5bf9\u5df2\u7ecf\u751f\u6210-migrations-\u6587\u4ef6\u60c5\u51b5"},"9.20.6.1 \u5bf9\u5df2\u7ecf\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Migrations")," \u6587\u4ef6\u60c5\u51b5"),(0,r.kt)("p",null,"\u5982\u679c\u5df2\u7ecf\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"Migrations")," \u6587\u4ef6\uff0c\u90a3\u4e48\u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4ee3\u7801\u4e2d\u5b9e\u73b0\u7a0b\u5e8f\u542f\u52a8\u65f6\u81ea\u52a8\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"update-database")," \u547d\u4ee4\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,4,6,8-9}",showLineNumbers:!0,"":!0,"{1,4,6,8-9}":!0},"public void Configure(IApplicationBuilder app, IHostingEnvironment env)\n{\n    // \u5224\u65ad\u5f00\u53d1\u73af\u5883\uff01\uff01\uff01\u5fc5\u987b\uff01\uff01\uff01\uff01\n    if (env.IsDevelopment())\n    {\n        Scoped.Create((_, scope) =>\n        {\n            var context = scope.ServiceProvider.GetRequiredService<FurionDbContext>();\n            context.Database.Migrate();\n        });\n    }\n\n    // \u5176\u4ed6\u4ee3\u7801\n}\n")),(0,r.kt)("h3",{id:"92062-\u5982\u679c\u6ca1\u6709\u751f\u6210\u8fc7-migrations-\u6587\u4ef6\u60c5\u51b5"},"9.20.6.2 \u5982\u679c\u6ca1\u6709\u751f\u6210\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Migrations")," \u6587\u4ef6\u60c5\u51b5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,4,6,8-9}",showLineNumbers:!0,"":!0,"{1,4,6,8-9}":!0},"public void Configure(IApplicationBuilder app, IHostingEnvironment env)\n{\n    // \u5224\u65ad\u5f00\u53d1\u73af\u5883\uff01\uff01\uff01\u5fc5\u987b\uff01\uff01\uff01\uff01\n    if (env.IsDevelopment())\n    {\n        Scoped.Create((_, scope) =>\n        {\n            var context = scope.ServiceProvider.GetRequiredService<FurionDbContext>();\n            context.Database.EnsureCreated();\n        });\n    }\n\n    // \u5176\u4ed6\u4ee3\u7801\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u9700\u8981\u5728\u521b\u5efa\u6570\u636e\u5e93\u4e4b\u524d\u5148\u5220\u9664\u65e7\u7684\uff0c\u53ef\u5148\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"strong"},"context.Database.EnsureDeleted();")," \u4ee3\u7801\u3002\u614e\u91cd\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01")),(0,r.kt)("h2",{id:"9207-mysqlentityframeworkcore-\u5728-net-608-\u95ee\u9898"},"9.20.7 ",(0,r.kt)("inlineCode",{parentName:"h2"},"MySql.EntityFrameworkCore")," \u5728 ",(0,r.kt)("inlineCode",{parentName:"h2"},".NET 6.0.8+")," \u95ee\u9898"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".NET 6.0.8+")," \u7248\u672c\uff0c\u5fae\u8f6f\u5e95\u5c42\u4fee\u6539\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDesignTimeServices")," \u903b\u8f91\u5bfc\u81f4 ",(0,r.kt)("inlineCode",{parentName:"p"},"MySql.EntityFrameworkCore")," \u7248\u672c\u6ca1\u6709\u53ca\u65f6\u66f4\u65b0\u5bfc\u81f4\u4e00\u4e0b\u9519\u8bef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers {51}",showLineNumbers:!0,"{51}":!0},"PM> Add-Migration v0.0.1\nBuild started...\nBuild succeeded.\nMicrosoft.EntityFrameworkCore.Model.Validation[10400]\n      Sensitive data logging is enabled. Log entries and exception messages may include sensitive application data; this mode should only be enabled during development.\nMicrosoft.EntityFrameworkCore.Infrastructure[10403]\n      Entity Framework Core 6.0.8 initialized 'DefaultDbContext' using provider 'MySql.EntityFrameworkCore:6.0.4+MySQL8.0.30' with options: SensitiveDataLoggingEnabled DetailedErrorsEnabled MaxPoolSize=100 MigrationsAssembly=Furion.TestMS.Database.Migrations \nSystem.InvalidOperationException: Unable to resolve service for type 'Microsoft.EntityFrameworkCore.Storage.TypeMappingSourceDependencies' while attempting to activate 'MySql.EntityFrameworkCore.Storage.Internal.MySQLTypeMappingSource'.\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateArgumentCallSites(Type implementationType, CallSiteChain callSiteChain, ParameterInfo[] parameters, Boolean throwIfCallSiteNotFound)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateConstructorCallSite(ResultCache lifetime, Type serviceType, Type implementationType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.TryCreateExact(ServiceDescriptor descriptor, Type serviceType, CallSiteChain callSiteChain, Int32 slot)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateCallSite(Type serviceType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.GetCallSite(Type serviceType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateArgumentCallSites(Type implementationType, CallSiteChain callSiteChain, ParameterInfo[] parameters, Boolean throwIfCallSiteNotFound)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateConstructorCallSite(ResultCache lifetime, Type serviceType, Type implementationType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.TryCreateExact(ServiceDescriptor descriptor, Type serviceType, CallSiteChain callSiteChain, Int32 slot)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateCallSite(Type serviceType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.GetCallSite(Type serviceType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateArgumentCallSites(Type implementationType, CallSiteChain callSiteChain, ParameterInfo[] parameters, Boolean throwIfCallSiteNotFound)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateConstructorCallSite(ResultCache lifetime, Type serviceType, Type implementationType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.TryCreateExact(ServiceDescriptor descriptor, Type serviceType, CallSiteChain callSiteChain, Int32 slot)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.TryCreateEnumerable(Type serviceType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateCallSite(Type serviceType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.GetCallSite(Type serviceType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateArgumentCallSites(Type implementationType, CallSiteChain callSiteChain, ParameterInfo[] parameters, Boolean throwIfCallSiteNotFound)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateConstructorCallSite(ResultCache lifetime, Type serviceType, Type implementationType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.TryCreateExact(ServiceDescriptor descriptor, Type serviceType, CallSiteChain callSiteChain, Int32 slot)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateCallSite(Type serviceType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.GetCallSite(Type serviceType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateArgumentCallSites(Type implementationType, CallSiteChain callSiteChain, ParameterInfo[] parameters, Boolean throwIfCallSiteNotFound)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateConstructorCallSite(ResultCache lifetime, Type serviceType, Type implementationType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.TryCreateExact(ServiceDescriptor descriptor, Type serviceType, CallSiteChain callSiteChain, Int32 slot)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateCallSite(Type serviceType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.GetCallSite(Type serviceType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateArgumentCallSites(Type implementationType, CallSiteChain callSiteChain, ParameterInfo[] parameters, Boolean throwIfCallSiteNotFound)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateConstructorCallSite(ResultCache lifetime, Type serviceType, Type implementationType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.TryCreateExact(ServiceDescriptor descriptor, Type serviceType, CallSiteChain callSiteChain, Int32 slot)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.CreateCallSite(Type serviceType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.CallSiteFactory.GetCallSite(Type serviceType, CallSiteChain callSiteChain)\n   at Microsoft.Extensions.DependencyInjection.ServiceProvider.CreateServiceAccessor(Type serviceType)\n   at System.Collections.Concurrent.ConcurrentDictionary`2.GetOrAdd(TKey key, Func`2 valueFactory)\n   at Microsoft.Extensions.DependencyInjection.ServiceProvider.GetService(Type serviceType, ServiceProviderEngineScope serviceProviderEngineScope)\n   at Microsoft.Extensions.DependencyInjection.ServiceLookup.ServiceProviderEngineScope.GetService(Type serviceType)\n   at Microsoft.Extensions.DependencyInjection.ServiceProviderServiceExtensions.GetRequiredService(IServiceProvider provider, Type serviceType)\n   at Microsoft.Extensions.DependencyInjection.ServiceProviderServiceExtensions.GetRequiredService[T](IServiceProvider provider)\n   at Microsoft.EntityFrameworkCore.Design.Internal.MigrationsOperations.AddMigration(String name, String outputDir, String contextType, String namespace)\n   at Microsoft.EntityFrameworkCore.Design.OperationExecutor.AddMigrationImpl(String name, String outputDir, String contextType, String namespace)\n   at Microsoft.EntityFrameworkCore.Design.OperationExecutor.AddMigration.<>c__DisplayClass0_0.<.ctor>b__0()\n   at Microsoft.EntityFrameworkCore.Design.OperationExecutor.OperationBase.<>c__DisplayClass3_0`1.<Execute>b__0()\n   at Microsoft.EntityFrameworkCore.Design.OperationExecutor.OperationBase.Execute(Action action)\nUnable to resolve service for type 'Microsoft.EntityFrameworkCore.Storage.TypeMappingSourceDependencies' while attempting to activate 'MySql.EntityFrameworkCore.Storage.Internal.MySQLTypeMappingSource'.\nPM> \n")),(0,r.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\u4e5f\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u542f\u52a8\u5c42\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"MysqlEntityFrameworkDesignTimeServices.cs")," \u5e76\u5199\u5165\u4ee5\u4e0b\u5185\u5bb9\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {4,6}",showLineNumbers:!0,"{4,6}":!0},"using Microsoft.EntityFrameworkCore.Design;\nusing MySql.EntityFrameworkCore.Extensions;\n\nnamespace YourProject.Web.Entry;\n\npublic class MysqlEntityFrameworkDesignTimeServices : IDesignTimeServices\n{\n    public void ConfigureDesignTimeServices(IServiceCollection serviceCollection)\n    {\n        serviceCollection.AddEntityFrameworkMySQL();\n        new EntityFrameworkRelationalDesignServicesBuilder(serviceCollection)\n            .TryAddCoreServices();\n    }\n}\n")),(0,r.kt)("p",null,"\u76f8\u5173 ",(0,r.kt)("inlineCode",{parentName:"p"},"Issue")," \u8ba8\u8bba\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/I5O5ER"},"https://gitee.com/dotnetchina/Furion/issues/I5O5ER")),(0,r.kt)("h2",{id:"9208-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.20.8 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"\u4e86\u89e3\u66f4\u591a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6b63\u5411\u5de5\u5382")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli"},"EF Core - \u7ba1\u7406\u6570\u636e\u5e93\u67b6\u6784")," \u7ae0\u8282\u3002")))}C.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,C=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?i.createElement(C,o(o({ref:t},p),{},{components:n})):i.createElement(C,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);