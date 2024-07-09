"use strict";(self.webpackChunkruyisdk=self.webpackChunkruyisdk||[]).push([[4785],{1828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var s=t(4848),i=t(8453);const l={title:"RV64ILP32 \u88f8\u673a\u5de5\u5177\u94fe\u4e0e profile \u73b0\u5df2\u53ef\u7528",authors:["white"]},a="RV64ILP32 \u88f8\u673a\u5de5\u5177\u94fe\u4e0e profile \u73b0\u5df2\u53ef\u7528",r={permalink:"/ja/blog/2024/02/26/gnu-plct-rv64ilp32-elf.zh_CN",source:"@site/blog/2024-02-26-gnu-plct-rv64ilp32-elf.zh_CN.md",title:"RV64ILP32 \u88f8\u673a\u5de5\u5177\u94fe\u4e0e profile \u73b0\u5df2\u53ef\u7528",description:"\u4e3a\u4e86\u60a8\u7684\u8ddf\u8e2a\u524d\u6cbf\u5f00\u53d1\u52a8\u6001\u65b9\u4fbf\uff0cRuyiSDK \u56e2\u961f\u73b0\u5df2\u6253\u5305\u4e86 RV64ILP32 \u8fd9\u4e00\u5b9e\u9a8c\u6027 ABI \u7684\u88f8\u673a\u5de5\u5177\u94fe\u4f9b\u60a8\u4f7f\u7528\u3002",date:"2024-02-26T00:00:00.000Z",tags:[],readingTime:1.775,hasTruncateMarker:!1,authors:[{name:"xen0n",title:"Maintainer of ruyi",url:"https://github.com/xen0n",imageURL:"https://avatars.githubusercontent.com/u/1175567?v=4",key:"white"}],frontMatter:{title:"RV64ILP32 \u88f8\u673a\u5de5\u5177\u94fe\u4e0e profile \u73b0\u5df2\u53ef\u7528",authors:["white"]},unlisted:!1,prevItem:{title:"RuyiSDK 0.9 \u7248\u672c\u66f4\u65b0\u8bf4\u660e",permalink:"/ja/blog/2024/04/23/ruyi-0.9.zh_CN"},nextItem:{title:"\u65b0\u589e\u677f\u5361\u652f\u6301 (2024-01-29)",permalink:"/ja/blog/2024/01/29/new-board-images.zh_CN"}},c={authorsImageUrls:[void 0]},o=[{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u60a8\u7684\u8ddf\u8e2a\u524d\u6cbf\u5f00\u53d1\u52a8\u6001\u65b9\u4fbf\uff0cRuyiSDK \u56e2\u961f\u73b0\u5df2\u6253\u5305\u4e86 RV64ILP32 \u8fd9\u4e00\u5b9e\u9a8c\u6027 ABI \u7684\u88f8\u673a\u5de5\u5177\u94fe\u4f9b\u60a8\u4f7f\u7528\u3002\n\u7531\u4e8e\u662f\u88f8\u673a\u5de5\u5177\u94fe\uff0c\u6b64\u5de5\u5177\u94fe\u4e0d\u81ea\u5e26 sysroot\uff0c\u4e14\u672a\u5f00\u542f multilib\uff1a\u53ef\u7528\u7684 ABI \u4e3a ",(0,s.jsx)(n.code,{children:"ilp32d"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u7ed9\u5b9a\u5982\u4e0b\u7684 C \u7a0b\u5e8f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"// test.c\nlong long add(long long *a, long long b)\n{\n    return *a + b;  // Should be realized with `ld` and `add`\n}\n\nvoid check(int);\n\nvoid check_sizes(void)\n{\n    check(sizeof(int));        // a0 should be 4\n    check(sizeof(long));       // a0 should be 4\n    check(sizeof(long long));  // a0 should be 8\n    check(sizeof(void *));     // a0 should be 4\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u76f8\u5e94\u7684\u5de5\u5177\u94fe\u5305\u4e0e profile\uff0c\u6211\u4eec\u5c06\u53ef\u7f16\u8bd1\u51fa\u7b26\u5408 RV64ILP32 ABI \u7684\u76ee\u6807\u4ee3\u7801\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ ruyi update\n$ ruyi install gnu-plct-rv64ilp32-elf\n$ ruyi venv -t gnu-plct-rv64ilp32-elf --without-sysroot baremetal-rv64ilp32 /tmp/venv\n$ source /tmp/venv/bin/ruyi-activate\n$ /tmp/venv11/bin/riscv64-plct-elf-gcc -O2 -c -o test.o test.c\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u68c0\u67e5\u76ee\u6807\u4ee3\u7801\u662f\u5426\u7b26\u5408\u9884\u671f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ riscv64-plct-elf-readelf -h test.o | grep 32\n  Class:                             ELF32\n  Flags:                             0x25, RVC, X32, double-float ABI\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ riscv64-plct-elf-objdump -dw test.o\n\ntest.o:     file format elf32-littleriscv\n\n\nDisassembly of section .text:\n\n00000000 <add>:\n   0:   6108                    ld      a0,0(a0)\n   2:   952e                    add     a0,a0,a1\n   4:   8082                    ret\n\n00000006 <check_sizes>:\n   6:   3141                    addiw   sp,sp,-16\n   8:   4511                    li      a0,4\n   a:   e406                    sd      ra,8(sp)\n   c:   00000097                auipc   ra,0x0\n  10:   000080e7                jalr    ra # c <check_sizes+0x6>\n  14:   4511                    li      a0,4\n  16:   00000097                auipc   ra,0x0\n  1a:   000080e7                jalr    ra # 16 <check_sizes+0x10>\n  1e:   4521                    li      a0,8\n  20:   00000097                auipc   ra,0x0\n  24:   000080e7                jalr    ra # 20 <check_sizes+0x1a>\n  28:   60a2                    ld      ra,8(sp)\n  2a:   4511                    li      a0,4\n  2c:   2141                    addiw   sp,sp,16\n  2e:   00000317                auipc   t1,0x0\n  32:   00030067                jr      t1 # 2e <check_sizes+0x28>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u89c1\uff0c\u6b64\u5de5\u5177\u94fe\u786e\u5b9e\u751f\u6210\u4e86\u6307\u9488\u5bbd\u5ea6\u4e3a 32 \u4f4d\uff0c\u4f46\u5229\u7528\u4e86 RV64 \u80fd\u529b\u7684\u76ee\u6807\u4ee3\u7801\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},l=s.createContext(i);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);