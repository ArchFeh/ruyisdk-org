"use strict";(self.webpackChunkruyisdk=self.webpackChunkruyisdk||[]).push([[8956],{4080:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=i(4848),s=i(8453);const a={sidebar_position:2},t="\u5b89\u88c5",c={id:"package_manager/installation",title:"\u5b89\u88c5",description:"\u8ba9\u6211\u4eec\u4ece RuyiSDK \u5305\u7ba1\u7406\u5668\u7684\u5b89\u88c5\u5f00\u59cb\uff1a",source:"@site/docs/package_manager/installation.md",sourceDirName:"package_manager",slug:"/package_manager/installation",permalink:"/ruyisdk-org/ja/docs/package_manager/installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd\u8bf4\u660e",permalink:"/ruyisdk-org/ja/docs/package_manager/"},next:{title:"\u7f16\u8bd1\u73af\u5883",permalink:"/ruyisdk-org/ja/docs/package_manager/Enviroment"}},l={},o=[{value:"\u83b7\u53d6 ruyi \u5305\u7ba1\u7406\u5668",id:"\u83b7\u53d6-ruyi-\u5305\u7ba1\u7406\u5668",level:2},{value:"amd64 \u67b6\u6784\u793a\u4f8b",id:"amd64-\u67b6\u6784\u793a\u4f8b",level:2},{value:"\u5176\u4ed6\u8bf4\u660e",id:"\u5176\u4ed6\u8bf4\u660e",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u4ece RuyiSDK \u5305\u7ba1\u7406\u5668\u7684\u5b89\u88c5\u5f00\u59cb\uff1a"}),"\n",(0,r.jsx)(n.h2,{id:"\u83b7\u53d6-ruyi-\u5305\u7ba1\u7406\u5668",children:"\u83b7\u53d6 ruyi \u5305\u7ba1\u7406\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["\u76ee\u524d RuyiSDK \u5305\u7ba1\u7406\u5668\u5de5\u5177\u76ee\u524d\u80fd\u5728 ",(0,r.jsx)(n.strong,{children:"amd64"}),"\u3001",(0,r.jsx)(n.strong,{children:"arm64"}),"\u3001",(0,r.jsx)(n.strong,{children:"riscv64"})," \u4e09\u79cd\u67b6\u6784\u5728 ",(0,r.jsx)(n.strong,{children:"Linux"})," \u7cfb\u7edf\u4e0b\u8fd0\u884c\uff0c\u53ef\u4ee5\u4ece\u5982\u4e0b\u94fe\u63a5\u4e2d\u4e0b\u8f7d\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/RuyiSDK/ruyi/releases/",children:"ruyi GitHub Releases"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/",children:"ISCAS \u955c\u50cf\u6e90"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u9996\u5148\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"ruyi update"})," \u4ece\u914d\u7f6e\u7684\u8f6f\u4ef6\u6e90\u4e2d\u83b7\u5f97\u672c\u5730\u8f6f\u4ef6\u5305\u7f13\u5b58\u7684\u66f4\u65b0\uff0c\u518d\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"ruyi list"})," \u67e5\u770b\u76ee\u524d\u6240\u652f\u6301\u7684\u5305\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u82e5\u8fd8\u6709\u5176\u4f59\u76f8\u5173\u95ee\u9898\u53ef\u4ee5\u8bbf\u95ee ruyi \u5305\u7ba1\u7406\u5668",(0,r.jsx)(n.a,{href:"https://github.com/RuyiSDK/ruyi",children:"\u4ed3\u5e93\u6587\u6863"}),"\uff08\u76ee\u524d\u4ec5\u652f\u6301\u82f1\u6587\uff09\u53c2\u9605\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"amd64-\u67b6\u6784\u793a\u4f8b",children:"amd64 \u67b6\u6784\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ wget https://mirror.iscas.ac.cn/ruyisdk/ruyi/testing/ruyi.amd64.20231211\n$ chmod +x ./ruyi.amd64.20231211\n$ sudo cp ruyi.amd64.20231211 /usr/local/bin/ruyi\n$ ruyi version\nRuyi 0.2.0-beta.20231211\nCopyright (C) 2023 Institute of Software, Chinese Academy of Sciences (ISCAS).\nAll rights reserved.\nLicense: Apache-2.0 <https://www.apache.org/licenses/LICENSE-2.0>\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ruyi version"})," \u5e94\u5f53\u53ef\u4ee5\u6b63\u5e38\u6253\u5370\u7248\u672c\u4fe1\u606f\u3002",(0,r.jsx)(n.strong,{children:"\u6ce8\u610f\u4e8c\u8fdb\u5236\u7684\u6587\u4ef6\u540d\u5fc5\u987b\u4e3a"})," ruyi\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5217\u51fa\u5e2e\u52a9\u4fe1\u606f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ ruyi --help\n\nRuyiSDK Package Manager 0.2.0-beta.20231211\n\noptions:\n  -h, --help            show this help message and exit\n  -V, --version         Print version information\n\nsubcommands:\n  {extract,install,i,list,update,venv,admin,self,version}\n    extract             Fetch package(s) then extract to current directory\n    install (i)         Install package from configured repository\n    list                List available packages in configured repository\n    update              Update RuyiSDK repo and packages\n    venv                Generate a virtual environment adapted to the chosen toolchain and profile\n    admin               (NOT FOR REGULAR USERS) Subcommands for managing Ruyi Repos\n    self                Manage this Ruyi installation\n    version             Print version information\n\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5176\u4ed6\u8bf4\u660e",children:"\u5176\u4ed6\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e\u76ee\u524d\u8f6f\u4ef6\u5305\u7d22\u5f15\u4fe1\u606f\u6258\u7ba1\u4e8e GitHub \u4ed3\u5e93\uff0c\u56fd\u5185\u8bbf\u95ee\u53ef\u80fd\u4f1a\u4ea7\u751f\u4e0d\u7a33\u5b9a\u7b49\u95ee\u9898\uff0c\u82e5\u51fa\u73b0 ",(0,r.jsx)(n.code,{children:"ruyi update"})," \u6267\u884c\u65f6\u8fde\u7eed\u62a5\u9519\uff0c\u53ef\u5c06\u4ed3\u5e93\u66f4\u6362\u6210 ",(0,r.jsx)(n.a,{href:"https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git",children:"\u5907\u7528\u4ed3\u5e93"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5177\u4f53\u64cd\u4f5c\uff1a\u53c2\u8003 ruyi ",(0,r.jsx)(n.a,{href:"https://github.com/RuyiSDK/ruyi",children:"\u4ed3\u5e93\u6587\u6863"}),"\u5728 ruyi \u5305\u7ba1\u7406\u5de5\u5177\u9ed8\u8ba4\u7684\u914d\u7f6e\u76ee\u5f55 ",(0,r.jsx)(n.code,{children:"~/.config/ruyi"})," \u4e0b\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"config.toml"})," \u6587\u4ef6\u914d\u7f6e(\u4e0d\u540c linux \u53d1\u884c\u7248\u53ef\u80fd\u4e0d\u540c\uff0c\u5982\u679c\u65e0\u53ef\u81ea\u5df1\u521b\u5efa)\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u573a\u666f\u4ecb\u7ecd\u4e86 ruyi \u5305\u7ba1\u7406\u5668\u548c\u5de5\u5177\u7684\u57fa\u672c\u4f7f\u7528\uff0c\u5305\u62ec\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5b89\u88c5 ",(0,r.jsx)(n.code,{children:"ruyi"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"ruyi list"})," ",(0,r.jsx)(n.code,{children:"ruyi update"})," ",(0,r.jsx)(n.code,{children:"ruyi install"})," \u529f\u80fd"]}),"\n",(0,r.jsx)(n.li,{children:"\u82e5\u51fa\u73b0\u7f51\u7edc\u4e0d\u7a33\u5b9a\u7684\u5907\u7528\u65b9\u6848"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["ruyi \u5305\u7ba1\u7406\u5668\u76f8\u5173\u7684\u66f4\u591a\u547d\u4ee4\u4ee5\u53ca\u547d\u4ee4\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u8bf7\u53c2\u9605",(0,r.jsx)(n.a,{href:"/ruyisdk-org/ja/docs/Package-Manager/",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528\u6848\u4f8b",children:"\u4f7f\u7528\u6848\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u524d\u6709\u4e00\u4e9b\u7b80\u5355\u7684\u4f7f\u7528\u6848\u4f8b\u63d0\u4f9b\u53c2\u8003\uff0c\u8bf7\u53c2\u9605\u4f7f\u7528\u6848\u4f8b\u680f\u76ee\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var r=i(6540);const s={},a=r.createContext(s);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);