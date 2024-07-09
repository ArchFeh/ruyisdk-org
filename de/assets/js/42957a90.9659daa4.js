"use strict";(self.webpackChunkruyisdk=self.webpackChunkruyisdk||[]).push([[8160],{3399:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2024/07/08/box64-wps-office-poc.zh_CN","metadata":{"permalink":"/de/blog/2024/07/08/box64-wps-office-poc.zh_CN","source":"@site/blog/2024-07-08-box64-wps-office-poc.zh_CN.md","title":"\u5c1d\u9c9c\uff1a\u4f7f\u7528 Box64 \u5728 RISC-V \u7cfb\u7edf\u4e0a\u8fd0\u884c WPS Office","description":"\u5f97\u76ca\u4e8e Box64 RISC-V \u79fb\u690d\u5de5\u4f5c\u7684\u8fdb\u5c55\uff0c\u5728 RISC-V Linux \u684c\u9762\u53d1\u884c\u7248\u4e0a\u8fd0\u884c WPS","date":"2024-07-08T00:00:00.000Z","tags":[],"readingTime":5.075,"hasTruncateMarker":false,"authors":[{"name":"xen0n","title":"Maintainer of ruyi","url":"https://github.com/xen0n","imageURL":"https://avatars.githubusercontent.com/u/1175567?v=4","key":"white"}],"frontMatter":{"title":"\u5c1d\u9c9c\uff1a\u4f7f\u7528 Box64 \u5728 RISC-V \u7cfb\u7edf\u4e0a\u8fd0\u884c WPS Office","authors":["white"]},"unlisted":false,"nextItem":{"title":"RuyiSDK 0.12 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","permalink":"/de/blog/2024/06/11/ruyi-0.12.zh_CN"}},"content":"\u5f97\u76ca\u4e8e Box64 RISC-V \u79fb\u690d\u5de5\u4f5c\u7684\u8fdb\u5c55\uff0c\u5728 RISC-V Linux \u684c\u9762\u53d1\u884c\u7248\u4e0a\u8fd0\u884c WPS\\nOffice \u7b49\u5e38\u89c1 x86 \u4e8c\u8fdb\u5236\u8f6f\u4ef6\u5df2\u6210\u4e3a\u53ef\u80fd\u3002RuyiSDK \u6b63\u5728\u5f00\u5c55\u6b64\u65b9\u9762\u7684\u96c6\u6210\u5de5\u4f5c\uff1b\\n\u6309\u4ee5\u4e0b\u7684\u6b65\u9aa4\u64cd\u4f5c\uff0c\u60a8\u5c06\u80fd\u5148\u884c\u4e00\u6b65\u611f\u53d7 RISC-V \u529e\u516c\u4f53\u9a8c\u3002\\n\\n\u6211\u4eec\u5047\u5b9a\u60a8\u5728\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u4e4b\u524d\uff0c\u5df2\u7ecf\u5347\u7ea7\u5230\u4e86 `ruyi` 0.14.0 \u6216\u66f4\u9ad8\u7684\u7248\u672c\uff0c\\n\u5e76\u6267\u884c\u4e86 `ruyi update` \u4ee5\u5c06\u8f6f\u4ef6\u6e90\u4fe1\u606f\u540c\u6b65\u5230\u6700\u65b0\u3002\\n\\n## \u64cd\u4f5c\u6b65\u9aa4\\n\\n\u4e3a\u53d9\u8ff0\u65b9\u4fbf\uff0c\u8bbe\u60a8\u7684 `$HOME` \u4e3a `/home/foo`\uff0c\u67b6\u6784\uff08`uname -m` \u8f93\u51fa\uff09\u4e3a\\n`riscv64`\uff0c\u4f7f\u7528 `sudo` \u63d0\u6743\u3002\\n\\n### \u5141\u8bb8\u5b89\u88c5\u9884\u53d1\u5e03\u7248\u672c\u7684\u8f6f\u4ef6\u5305\\n\\n\u7531\u4e8e Box64 RISC-V \u652f\u6301\u8fdb\u5c55\u8fc5\u901f\uff0c\u76ee\u524d\uff082024 \u5e74 7 \u6708\u521d\uff09\u5f88\u591a\u529f\u80fd\u6539\u8fdb\u6ca1\u6709\u5728\\n\u5176\u6700\u65b0\u7a33\u5b9a\u7248\u672c\u5f97\u5230\u4f53\u73b0\u3002\u6211\u4eec\u6253\u5305\u4e86 Box64 \u7684\u5f00\u53d1\u5feb\u7167\u7248\u672c\uff1b\u4e3a\u4e86\u80fd\u591f\u5b89\u88c5\u6b64\u7248\u672c\uff0c\\n\u60a8\u9700\u8981\u914d\u7f6e `ruyi` \u4ee5\u4f7f\u5176\u5728\u5b89\u88c5\u8f6f\u4ef6\u5305\u65f6\u8003\u8651\u9884\u53d1\u5e03\u7248\u672c\u3002\\n\\n- \u5982\u679c `~/.config/ruyi` \u76ee\u5f55\u4e0d\u5b58\u5728\uff0c\u5219\u521b\u5efa\u4e4b\u3002\\n- \u7f16\u8f91 `~/.config/ruyi/config.toml`\u3002\\n\\n```toml\\n[packages]\\nprereleases = true\\n```\\n\\n### \u5b89\u88c5 Box64\\n\\n\u6309\u7167 RuyiSDK \u8f6f\u4ef6\u5305\u7684\u547d\u540d\u4e60\u60ef\uff0c\u4ece Box64 \u7684\u4e0a\u6e38\uff08\u800c\u975e PLCT \u6216\u67d0\u4e9b\u5382\u5546\u7684 fork\uff09\\n\u6784\u5efa\u7684 Box64 \u4e8c\u8fdb\u5236\u5305\uff0c\u540d\u5b57\u53eb `box64-upstream`\u3002\\n\\n```sh\\nruyi install box64-upstream\\n# ...\\n# info: package box64-upstream-0.2.8-ruyi.20240702 installed to /home/foo/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.8-ruyi.20240702\\n```\\n\\n\u8bb0\u4e0b\u5b89\u88c5\u8def\u5f84\u3002\\n\\n### \u914d\u7f6e Linux `binfmt_misc` \u673a\u5236\\n\\n\u7531\u4e8e WPS Office \u7684\u6253\u5305\u65b9\u5f0f\u7279\u6b8a\uff0c\u5b83\u53ea\u80fd\u4ece\u5f00\u53d1\u5546\u63d0\u4f9b\u7684\u542f\u52a8\u5668\u811a\u672c\u88ab\u95f4\u63a5\u62c9\u8d77\uff0c\\n\u800c\u4e0d\u80fd\u76f4\u63a5\u4ea4\u7531 Box64 \u542f\u52a8\u3002\u56e0\u6b64\u60a8\u9700\u8981\u786e\u4fdd\u60a8\u7684\u7cfb\u7edf\u652f\u6301 `binfmt_misc`\uff1a\\n\u5982\u679c\u4e0d\u652f\u6301\uff0c\u63a5\u4e0b\u6765\u7684\u64cd\u4f5c\u4f1a\u5931\u8d25\u3002\\n\\n\u4e0d\u540c Linux \u53d1\u884c\u7248\u7684 `binfmt_misc` \u914d\u7f6e\u65b9\u5f0f\u4e0d\u5c3d\u76f8\u540c\uff0c\u4ee5\u4e0b\u9488\u5bf9\u91c7\u7528 systemd\\n\u7684\u7cfb\u7edf\u53d9\u8ff0\u3002\u60a8\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u60c5\u51b5\u81ea\u884c\u8c03\u6574\u3002\\n\\n```sh\\n# \u786e\u8ba4 Box64 \u53ef\u6267\u884c\u6587\u4ef6\u7684\u4f4d\u7f6e\\nls /home/foo/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.8-ruyi.20240702/bin/box64\\n\\n# \u8c03\u6574 Box64 `binfmt.d` \u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\\n# \u5047\u8bbe\u60a8\u4f7f\u7528 nano \u7f16\u8f91\u5668\\nnano /home/foo/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.8-ruyi.20240702/etc/binfmt.d/box64.conf\\n# \u5c06\u884c\u5c3e\u7684 //bin/box64 \u6539\u4e3a\u5148\u524d\u9a8c\u8bc1\u8fc7\u7684\u7edd\u5bf9\u8def\u5f84\\n\\n# \u5c06\u5176\u90e8\u7f72\u5230\u7cfb\u7edf\\nsudo cp /home/foo/.local/share/ruyi/binaries/riscv64/box64-upstream-0.2.8-ruyi.20240702/etc/binfmt.d/box64.conf /etc/binfmt.d/box64.conf\\nsudo systemctl restart systemd-binfmt\\n\\n# \u68c0\u67e5\u90e8\u7f72\u7ed3\u679c\\ncat /proc/sys/fs/binfmt_misc/box64\\n```\\n\\n### \u5b89\u88c5 x86 sysroot\\n\\n\u7531\u4e8e Box64 \u4e3b\u8981\u9762\u5411\u6e38\u620f\u7b49\u8f6f\u4ef6\u7684\u6a21\u62df\uff0c\u800c\u8fd9\u4e9b\u8f6f\u4ef6\u57fa\u672c\u90fd\u81ea\u5e26\u6240\u6709\u4f9d\u8d56\uff0c\u6240\u4ee5 Box64\\n\u672c\u8eab\u57fa\u672c\u6ca1\u6709\u81ea\u5e26\u4ec0\u4e48 x86 \u8fd0\u884c\u65f6\u5e93\u3002WPS Office \u4f5c\u4e3a\u4e00\u4e2a\u9884\u671f\u88ab\u7cfb\u7edf\u5305\u7ba1\u7406\u5668\u7ba1\u7406\u7684\\n\u684c\u9762\u5e94\u7528\uff0cBox64 \u81ea\u5e26\u7684\u5c11\u91cf x86 \u8fd0\u884c\u65f6\u5e93\u65e0\u6cd5\u6ee1\u8db3\u5b83\u7684\u9700\u6c42\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u81ea\u884c\u51c6\u5907\\nx86 \u73af\u5883\u3002\\n\\n```sh\\n# \u4e0b\u8f7d\u9884\u5236\u7684 x86 sysroot\\n# \u6b64\u4e3a\u4e34\u65f6\u6027\u7684\u94fe\u63a5\u3002\u540e\u7eed\u5f85\u672c\u529f\u80fd\u8fed\u4ee3\u7a33\u5b9a\u4e4b\u540e\uff0c\u64cd\u4f5c\u65b9\u5f0f\u5c06\u6539\u53d8\uff0c\u6b64\u94fe\u63a5\u4e5f\u5c06\u5931\u6548\\n# \u5047\u8bbe\u6b64\u6587\u4ef6\u653e\u5728\u4e86 ~/Downloads \u76ee\u5f55\u4e0b\\nwget https://mirror.iscas.ac.cn/ruyisdk/dist/temp/debian-bookworm.gui.20240705.amd64.tar.zst\\n\\n# \u5047\u8bbe\u5b89\u88c5\u5230 /opt/debian-bookworm.amd64\\nsudo mkdir /opt/debian-bookworm.amd64\\npushd /opt/debian-bookworm.amd64\\ntar -xf ~/Downloads/debian-bookworm.gui.20240705.amd64.tar.zst\\npopd\\n```\\n\\n### \u5b89\u88c5 WPS Office\\n\\n\u5f3a\u5236\u5b89\u88c5 `x86_64` \u67b6\u6784\u7684 WPS Office \u8f6f\u4ef6\u5305\uff1a\\n\\n```sh\\nruyi install --host x86_64 wps-office\\n# ...\\n# info: package wps-office-11.1.0-r.11719 installed to /home/foo/.local/share/ruyi/binaries/x86_64/wps-office-11.1.0-r.11719\\n```\\n\\n\u7531\u4e8e WPS Office \u5b98\u65b9\u4e0b\u8f7d\u9875\u9762\u7684\u9650\u5236\uff0c`ruyi` \u65e0\u6cd5\u81ea\u52a8\u4e0b\u8f7d\u5b89\u88c5\u5305\u3002\\n\u8bf7\u6309\u7167\u63d0\u793a\u4fe1\u606f\u64cd\u4f5c\uff0c\u4e4b\u540e\u91cd\u65b0\u6267\u884c\u8be5\u547d\u4ee4\u4ee5\u5b89\u88c5\u3002\\n\\n### \u8c03\u6574 WPS Office \u542f\u52a8\u5668\u811a\u672c\\n\\n\u7531\u4e8e WPS Office \u9884\u671f\u81ea\u8eab\u88ab\u7cfb\u7edf\u5305\u7ba1\u7406\u5668\u7ba1\u7406\uff0c\u5b83\u7684\u542f\u52a8\u5668\u811a\u672c\u5047\u5b9a\u4e86\u81ea\u8eab\u7684\u5b89\u88c5\u8def\u5f84\\n\u4e3a `/opt/kingsoft/wps-office`\uff0c\u9700\u8981\u4e3a\u5b83\u4eec\u6253\u8865\u4e01\u3002\\n\\n```sh\\npushd /home/foo/.local/share/ruyi/binaries/x86_64/wps-office-11.1.0-r.11719\\n\\n# \u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u8def\u5f84\u4e2d\u5e94\u5f53\u4e0d\u542b\u7279\u6b8a\u5b57\u7b26\u3002\\n# \u5982\u679c\u542b\u6709\uff0c\u8bf7\u81ea\u884c\u9002\u5f53\u8c03\u6574 sed \u547d\u4ee4\u7684\u53c2\u6570\\nsed -i \\"s@gInstallPath=/@gInstallPath=$(pwd)/@\\" ./usr/bin/*\\n\\npopd\\n```\\n\\n### \u8fd0\u884c WPS Office\\n\\n\u51c6\u5907\u5de5\u4f5c\u7ec8\u4e8e\u5b8c\u6210\uff0c\u73b0\u5728\u5c06\u6240\u6709\u90e8\u5206\u4e32\u8d77\u6765\uff1a\\n\\n```sh\\n# \u6b64\u52a8\u6001\u94fe\u63a5\u5e93\u7684\u539f\u751f\u8f6c\u53d1\u4ecd\u6709\u4e9b\u95ee\u9898\uff0c\u56e0\u6b64\u5f3a\u5236\u4ee5\u6a21\u62df\u65b9\u5f0f\u6267\u884c\\nexport BOX64_EMULATED_LIBS=libsqlite3.so.0\\n# \u914d\u7f6e Box64 \u5e93\u641c\u7d22\u8def\u5f84\\nexport BOX64_LD_LIBRARY_PATH=/opt/debian-bookworm.amd64/usr/lib/x86_64-linux-gnu\\n\\n# \u73b0\u5728\u53ef\u4ee5\u6267\u884c\u4e86\uff01\\n/home/foo/.local/share/ruyi/binaries/x86_64/wps-office-11.1.0-r.11719/usr/bin/wps\\n```\\n\\n## \u7ed3\u8bed\\n\\n\u4ee5\u4e0a\u662f RuyiSDK \u5bf9 RISC-V \u4e8c\u8fdb\u5236\u7ffb\u8bd1 x86 \u8f6f\u4ef6\u7684\u521d\u6b65\u96c6\u6210\u6210\u679c\u3002\\n\u4eca\u540e\u6211\u4eec\u4ecd\u5c06\u8fed\u4ee3\u8fd9\u4e00\u8fc7\u7a0b\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u4ee5\u671f\u7528\u6237\u5728 RISC-V \u7cfb\u7edf\u4e0a\u8fd0\u884c\u9700\u8981\u7684\u5e94\u7528\\n\u66f4\u52a0\u65b9\u4fbf\u3002"},{"id":"/2024/06/11/ruyi-0.12.zh_CN","metadata":{"permalink":"/de/blog/2024/06/11/ruyi-0.12.zh_CN","source":"@site/blog/2024-06-11-ruyi-0.12.zh_CN.md","title":"RuyiSDK 0.12 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","description":"RuyiSDK 0.12 \u73b0\u5df2\u53d1\u5e03\uff0c\u5bf9\u5e94\u7684\u5305\u7ba1\u7406\u5668\u7248\u672c\u4e5f\u4e3a 0.12.0\u3002\u60a8\u53ef\u524d\u5f80\u4ee5\u4e0b\u4f4d\u7f6e\u4e4b\u4e00\u4e0b\u8f7d RuyiSDK \u5305\u7ba1\u7406\u5668\uff1a","date":"2024-06-11T00:00:00.000Z","tags":[],"readingTime":1.24,"hasTruncateMarker":false,"authors":[{"name":"xen0n","title":"Maintainer of ruyi","url":"https://github.com/xen0n","imageURL":"https://avatars.githubusercontent.com/u/1175567?v=4","key":"white"}],"frontMatter":{"title":"RuyiSDK 0.12 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","authors":["white"]},"unlisted":false,"prevItem":{"title":"\u5c1d\u9c9c\uff1a\u4f7f\u7528 Box64 \u5728 RISC-V \u7cfb\u7edf\u4e0a\u8fd0\u884c WPS Office","permalink":"/de/blog/2024/07/08/box64-wps-office-poc.zh_CN"},"nextItem":{"title":"RuyiSDK 0.11 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","permalink":"/de/blog/2024/05/28/ruyi-0.11.zh_CN"}},"content":"RuyiSDK 0.12 \u73b0\u5df2\u53d1\u5e03\uff0c\u5bf9\u5e94\u7684\u5305\u7ba1\u7406\u5668\u7248\u672c\u4e5f\u4e3a 0.12.0\u3002\u60a8\u53ef\u524d\u5f80\u4ee5\u4e0b\u4f4d\u7f6e\u4e4b\u4e00\u4e0b\u8f7d RuyiSDK \u5305\u7ba1\u7406\u5668\uff1a\\n\\n- https://github.com/ruyisdk/ruyi/releases/tag/0.12.0\\n- https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.12.0/\\n\\n\u672c\u6b21\u66f4\u65b0\u4e3b\u8981\u5305\u542b\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff0c\u795d\u60a8\u4f7f\u7528\u6109\u5feb\uff01\\n\\n## RuyiSDK \u5305\u7ba1\u7406\u5668\\n\\n- \u4fee\u590d\u4e86\u5148\u524d Pine64 Star64 Armbian \u955c\u50cf\u65e0\u6cd5\u4e0b\u8f7d\u7684\u95ee\u9898\u3002\\n- \u5bf9\u4e8e\u90e8\u5206\u5fc5\u987b\u7531\u7528\u6237\u624b\u5de5\u4e0b\u8f7d\u7684\u6587\u4ef6\uff0c\u652f\u6301\u4e86\u76f8\u5e94\u7684\u7528\u6237\u4f53\u9a8c\uff1a\u6309\u7167\u5f53\u524d\u7cfb\u7edf\u8bed\u8a00\u8bbe\u7f6e\uff0c\u6e32\u67d3\u76f8\u5e94\u7684\u63d0\u793a\u8bed\u3002\\n- \u5347\u7ea7\u4e86 pygit2 \u4f9d\u8d56\u5e93\u7248\u672c\u5230 1.5.0\uff0c\u4ee5\u652f\u6301 libgit2 \u7684 1.8 \u7248\u672c\u3002\\n- \u4fee\u590d\u4e86 `XDG_STATE_HOME` \u73af\u5883\u53d8\u91cf\u88ab\u65e0\u89c6\u7684\u95ee\u9898\u3002\\n\\n\u4e3a\u4e86\u652f\u6301\u5237\u5199\u65b9\u5f0f\u590d\u6742\u3001\u9700\u8981\u5939\u6742\u4eba\u5de5\u5e72\u9884\u3001\u955c\u50cf\u6587\u4ef6\u9700\u8981\u624b\u5de5\u4e0b\u8f7d\u7b49\u590d\u6742\u60c5\u51b5\u4e0b\u7684\u8bbe\u5907\u521d\u59cb\u5316\uff0c\u6211\u4eec\u6b63\u5728\u5bf9\u8bbe\u5907\u5b89\u88c5\u5668\u8fdb\u884c\u91cd\u6784\uff0c\u9884\u8ba1\u5c06\u4e8e\u4e0b\u4e2a\u7248\u672c\u4ed8\u8bf8\u6d4b\u8bd5\u3002\u5c4a\u65f6\u65e7\u7248\\n`ruyi` \u7684\u8bbe\u5907\u5b89\u88c5\u5668\u529f\u80fd\u5c06\u4e0d\u53ef\u7528\uff0c\u8bf7\u5148\u5347\u7ea7\u518d\u8fdb\u884c\u4f53\u9a8c\u3002"},{"id":"/2024/05/28/ruyi-0.11.zh_CN","metadata":{"permalink":"/de/blog/2024/05/28/ruyi-0.11.zh_CN","source":"@site/blog/2024-05-28-ruyi-0.11.zh_CN.md","title":"RuyiSDK 0.11 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","description":"RuyiSDK 0.11 \u73b0\u5df2\u53d1\u5e03\uff0c\u5bf9\u5e94\u7684\u5305\u7ba1\u7406\u5668\u7248\u672c\u4e5f\u4e3a 0.11.0\u3002\u60a8\u53ef\u524d\u5f80\u4ee5\u4e0b\u4f4d\u7f6e\u4e4b\u4e00\u4e0b\u8f7d RuyiSDK \u5305\u7ba1\u7406\u5668\uff1a","date":"2024-05-28T00:00:00.000Z","tags":[],"readingTime":1.265,"hasTruncateMarker":false,"authors":[{"name":"xen0n","title":"Maintainer of ruyi","url":"https://github.com/xen0n","imageURL":"https://avatars.githubusercontent.com/u/1175567?v=4","key":"white"}],"frontMatter":{"title":"RuyiSDK 0.11 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","authors":["white"]},"unlisted":false,"prevItem":{"title":"RuyiSDK 0.12 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","permalink":"/de/blog/2024/06/11/ruyi-0.12.zh_CN"},"nextItem":{"title":"RuyiSDK 0.10 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","permalink":"/de/blog/2024/05/14/ruyi-0.10.zh_CN"}},"content":"RuyiSDK 0.11 \u73b0\u5df2\u53d1\u5e03\uff0c\u5bf9\u5e94\u7684\u5305\u7ba1\u7406\u5668\u7248\u672c\u4e5f\u4e3a 0.11.0\u3002\u60a8\u53ef\u524d\u5f80\u4ee5\u4e0b\u4f4d\u7f6e\u4e4b\u4e00\u4e0b\u8f7d RuyiSDK \u5305\u7ba1\u7406\u5668\uff1a\\n\\n- https://github.com/ruyisdk/ruyi/releases/tag/0.11.0\\n- https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.11.0/\\n\\n\u672c\u6b21\u66f4\u65b0\u4e3b\u8981\u5305\u542b\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff0c\u795d\u60a8\u4f7f\u7528\u6109\u5feb\uff01\\n\\n## RuyiSDK \u5305\u7ba1\u7406\u5668\\n\\n- \u53bb\u9664\u4e86\u5148\u524d\u552f\u4e00\u7684 LGPL \u4f9d\u8d56\u3002\u73b0\u5728 RuyiSDK \u5305\u7ba1\u7406\u5668\u53ca\u5176\u6240\u6709\u4f9d\u8d56\u90fd\u91c7\u7528\u5bbd\u677e\u5f00\u6e90\u8bb8\u53ef\u8bc1\u4e86\uff0c\u65b9\u4fbf\u4e0b\u6e38\u7528\u6237\u5728\u5546\u4e1a\u573a\u666f\u53d6\u7528\u3002\\n\\n## RuyiSDK \u8f6f\u4ef6\u6e90\\n\\n- Ruyi \u8bbe\u5907\u5b89\u88c5\u5668\uff08`ruyi device provision`\uff09\u73b0\u5df2\u65b0\u589e\u652f\u6301\u4ee5\u4e0b\u8bbe\u5907\u578b\u53f7\uff1a\\n  - Pine64 Star64\\n\\n\u8bf7\u5728\u5347\u7ea7 RuyiSDK \u5305\u7ba1\u7406\u5668\u4e4b\u540e\uff0c\u6267\u884c `ruyi update` \u4ee5\u62c9\u53d6\u8f6f\u4ef6\u6e90\u66f4\u65b0\u3002\\n\\n\u6211\u4eec\u6ce8\u610f\u5230\u8d8a\u6765\u8d8a\u591a\u7684\u8bbe\u5907\u578b\u53f7\uff0c\u751a\u81f3\u5982\u6700\u65b0\u9762\u4e16\u7684 BananaPi BPI-F3\\n\u7b49\u7b49\uff0c\u5176\u7cfb\u7edf\u955c\u50cf\u4ec5\u4ee5\u7f51\u76d8\uff08\u767e\u5ea6\u7f51\u76d8\u3001Google Drive\u3001MEGA \u7b49\u670d\u52a1\uff09\u65b9\u5f0f\u5206\u53d1\u3002\\n\u5bf9\u8fd9\u4e9b\u8bbe\u5907\u578b\u53f7\u7684\u59a5\u5584\u652f\u6301\u9762\u4e34\u6311\u6218\uff1b\u5728\u63a5\u4e0b\u6765\u7684\u7248\u672c\u8fed\u4ee3\u4e2d\uff0c\u6211\u4eec\u5c06\u5c1d\u8bd5\u652f\u6301\u6b64\u573a\u666f\uff0c\u656c\u8bf7\u671f\u5f85\u6216\u53c2\u4e0e\u8fdb\u6765\u3002"},{"id":"/2024/05/14/ruyi-0.10.zh_CN","metadata":{"permalink":"/de/blog/2024/05/14/ruyi-0.10.zh_CN","source":"@site/blog/2024-05-14-ruyi-0.10.zh_CN.md","title":"RuyiSDK 0.10 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","description":"RuyiSDK 0.10 \u73b0\u5df2\u53d1\u5e03\uff0c\u5bf9\u5e94\u7684\u5305\u7ba1\u7406\u5668\u7248\u672c\u4e5f\u4e3a 0.10.0\u3002\u60a8\u53ef\u524d\u5f80\u4ee5\u4e0b\u4f4d\u7f6e\u4e4b\u4e00\u4e0b\u8f7d RuyiSDK \u5305\u7ba1\u7406\u5668\uff1a","date":"2024-05-14T00:00:00.000Z","tags":[],"readingTime":1.315,"hasTruncateMarker":false,"authors":[{"name":"xen0n","title":"Maintainer of ruyi","url":"https://github.com/xen0n","imageURL":"https://avatars.githubusercontent.com/u/1175567?v=4","key":"white"}],"frontMatter":{"title":"RuyiSDK 0.10 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","authors":["white"]},"unlisted":false,"prevItem":{"title":"RuyiSDK 0.11 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","permalink":"/de/blog/2024/05/28/ruyi-0.11.zh_CN"},"nextItem":{"title":"RuyiSDK 0.9 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","permalink":"/de/blog/2024/04/23/ruyi-0.9.zh_CN"}},"content":"RuyiSDK 0.10 \u73b0\u5df2\u53d1\u5e03\uff0c\u5bf9\u5e94\u7684\u5305\u7ba1\u7406\u5668\u7248\u672c\u4e5f\u4e3a 0.10.0\u3002\u60a8\u53ef\u524d\u5f80\u4ee5\u4e0b\u4f4d\u7f6e\u4e4b\u4e00\u4e0b\u8f7d RuyiSDK \u5305\u7ba1\u7406\u5668\uff1a\\n\\n- https://github.com/ruyisdk/ruyi/releases/tag/0.10.0\\n- https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.10.0/\\n\\n\u672c\u6b21\u66f4\u65b0\u4e3b\u8981\u5305\u542b\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff0c\u795d\u60a8\u4f7f\u7528\u6109\u5feb\uff01\\n\\n## RuyiSDK \u5305\u7ba1\u7406\u5668\\n\\n- \u652f\u6301\u4e86\u5168\u5c40\u9009\u9879 `--porcelain` \u4ee5\u65b9\u4fbf\u5916\u90e8\u7a0b\u5e8f\u4e0e `ruyi` \u4ea4\u4e92\u3002\u521d\u671f\u4e3a\\n  `ruyi list` \u4e0e `ruyi news list` \u4e24\u79cd\u64cd\u4f5c\u9002\u914d\u4e86 porcelain \u8f93\u51fa\u683c\u5f0f\u3002\\n- `ruyi news` \u5728\u67d0\u6761\u65b0\u95fb\u5b58\u5728\u5f53\u524d\u7cfb\u7edf\u8bed\u8a00\u7ffb\u8bd1\u7248\u672c\u65f6\uff0c\u4f1a\u4f18\u5148\u5c55\u793a\u6b64\u8bed\u8a00\u7248\u672c\u4e86\u3002\\n\\n## RuyiSDK \u8f6f\u4ef6\u6e90\\n\\nRuyiSDK \u81ea 0.10 \u7248\u672c\u5f00\u59cb\u652f\u6301\u6c81\u6052\u5fae\u7535\u5b50\uff08WCH\uff09RISC-V \u4ea7\u54c1\u3002\\n\\n- \u65b0\u589e\u6253\u5305\u4e86 PLCT \u7ef4\u62a4\u7684 LLVM \u5de5\u5177\u94fe `toolchain/llvm-plct`\u3002\u5176\u4e3b\u8981\u7279\u8272\u662f\u652f\u6301\\n  `XTHeadVector` \u6269\u5c55\u3002\\n- Ruyi \u8bbe\u5907\u5b89\u88c5\u5668\uff08`ruyi device provision`\uff09\u73b0\u5df2\u65b0\u589e\u652f\u6301\u4ee5\u4e0b\u8bbe\u5907\u578b\u53f7\uff1a\\n  - WCH CH32V103 \u8bc4\u4f30\u677f\\n  - WCH CH32V203 \u8bc4\u4f30\u677f\\n  - WCH CH32V208 \u8bc4\u4f30\u677f\\n  - WCH CH32V303 \u8bc4\u4f30\u677f\\n  - WCH CH32V305 \u8bc4\u4f30\u677f\\n  - WCH CH32V307 \u8bc4\u4f30\u677f\\n  - WCH CH582F \u8bc4\u4f30\u677f\\n  - WCH CH592X \u8bc4\u4f30\u677f\\n\\n\u8bf7\u5728\u5347\u7ea7 RuyiSDK \u5305\u7ba1\u7406\u5668\u4e4b\u540e\uff0c\u6267\u884c `ruyi update` \u4ee5\u62c9\u53d6\u8f6f\u4ef6\u6e90\u66f4\u65b0\u3002"},{"id":"/2024/04/23/ruyi-0.9.zh_CN","metadata":{"permalink":"/de/blog/2024/04/23/ruyi-0.9.zh_CN","source":"@site/blog/2024-04-23-ruyi-0.9.zh_CN.md","title":"RuyiSDK 0.9 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","description":"RuyiSDK 0.9 \u73b0\u5df2\u53d1\u5e03\uff0c\u5bf9\u5e94\u7684\u5305\u7ba1\u7406\u5668\u7248\u672c\u4e5f\u4e3a 0.9.0\u3002\u60a8\u53ef\u524d\u5f80\u4ee5\u4e0b\u4f4d\u7f6e\u4e4b\u4e00\u4e0b\u8f7d RuyiSDK \u5305\u7ba1\u7406\u5668\uff1a","date":"2024-04-23T00:00:00.000Z","tags":[],"readingTime":0.93,"hasTruncateMarker":false,"authors":[{"name":"xen0n","title":"Maintainer of ruyi","url":"https://github.com/xen0n","imageURL":"https://avatars.githubusercontent.com/u/1175567?v=4","key":"white"}],"frontMatter":{"title":"RuyiSDK 0.9 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","authors":["white"]},"unlisted":false,"prevItem":{"title":"RuyiSDK 0.10 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","permalink":"/de/blog/2024/05/14/ruyi-0.10.zh_CN"},"nextItem":{"title":"RV64ILP32 \u88f8\u673a\u5de5\u5177\u94fe\u4e0e profile \u73b0\u5df2\u53ef\u7528","permalink":"/de/blog/2024/02/26/gnu-plct-rv64ilp32-elf.zh_CN"}},"content":"RuyiSDK 0.9 \u73b0\u5df2\u53d1\u5e03\uff0c\u5bf9\u5e94\u7684\u5305\u7ba1\u7406\u5668\u7248\u672c\u4e5f\u4e3a 0.9.0\u3002\u60a8\u53ef\u524d\u5f80\u4ee5\u4e0b\u4f4d\u7f6e\u4e4b\u4e00\u4e0b\u8f7d RuyiSDK \u5305\u7ba1\u7406\u5668\uff1a\\n\\n- https://github.com/ruyisdk/ruyi/releases/tag/0.9.0\\n- https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.9.0/\\n\\n\u672c\u6b21\u66f4\u65b0\u4e3b\u8981\u5305\u542b\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff0c\u795d\u60a8\u4f7f\u7528\u6109\u5feb\uff01\\n\\n## RuyiSDK \u5305\u7ba1\u7406\u5668\\n\\n- \u652f\u6301\u4e86 LZ4 \u683c\u5f0f\u538b\u7f29\u6587\u4ef6\u7684\u89e3\u5305\u3002\\n\\n## RuyiSDK \u8f6f\u4ef6\u6e90\\n\\nRuyiSDK \u81ea 0.9 \u7248\u672c\u5f00\u59cb\u652f\u6301\u77fd\u901f\uff08Sipeed\uff09\u5168\u7ebf RISC-V \u4ea7\u54c1\u3002\\n\\nRuyi \u8bbe\u5907\u5b89\u88c5\u5668\uff08`ruyi device provision`\uff09\u73b0\u5df2\u65b0\u589e\u4e86\u4ee5\u4e0b\u8bbe\u5907\u578b\u53f7\uff1a\\n\\n- Sipeed LicheeRV Nano\\n- Sipeed Lichee Cluster 4A\\n- Sipeed Lichee Console 4A\\n- Sipeed Maix-I\\n- Sipeed Tang Mega 138K Pro\\n\\n\u4ee5\u4e0b\u8bbe\u5907\u578b\u53f7\u5148\u524d\u5df2\u5f97\u5230 Ruyi \u8bbe\u5907\u5b89\u88c5\u5668\u652f\u6301\uff1a\\n\\n- Sipeed LicheePi 4A\\n- Sipeed LicheeRV\\n\\n\u8bf7\u5728\u5347\u7ea7 RuyiSDK \u5305\u7ba1\u7406\u5668\u4e4b\u540e\uff0c\u6267\u884c `ruyi update` \u4ee5\u62c9\u53d6\u8f6f\u4ef6\u6e90\u66f4\u65b0\u3002"},{"id":"/2024/02/26/gnu-plct-rv64ilp32-elf.zh_CN","metadata":{"permalink":"/de/blog/2024/02/26/gnu-plct-rv64ilp32-elf.zh_CN","source":"@site/blog/2024-02-26-gnu-plct-rv64ilp32-elf.zh_CN.md","title":"RV64ILP32 \u88f8\u673a\u5de5\u5177\u94fe\u4e0e profile \u73b0\u5df2\u53ef\u7528","description":"\u4e3a\u4e86\u60a8\u7684\u8ddf\u8e2a\u524d\u6cbf\u5f00\u53d1\u52a8\u6001\u65b9\u4fbf\uff0cRuyiSDK \u56e2\u961f\u73b0\u5df2\u6253\u5305\u4e86 RV64ILP32 \u8fd9\u4e00\u5b9e\u9a8c\u6027 ABI \u7684\u88f8\u673a\u5de5\u5177\u94fe\u4f9b\u60a8\u4f7f\u7528\u3002","date":"2024-02-26T00:00:00.000Z","tags":[],"readingTime":1.775,"hasTruncateMarker":false,"authors":[{"name":"xen0n","title":"Maintainer of ruyi","url":"https://github.com/xen0n","imageURL":"https://avatars.githubusercontent.com/u/1175567?v=4","key":"white"}],"frontMatter":{"title":"RV64ILP32 \u88f8\u673a\u5de5\u5177\u94fe\u4e0e profile \u73b0\u5df2\u53ef\u7528","authors":["white"]},"unlisted":false,"prevItem":{"title":"RuyiSDK 0.9 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","permalink":"/de/blog/2024/04/23/ruyi-0.9.zh_CN"},"nextItem":{"title":"\u65b0\u589e\u677f\u5361\u652f\u6301 (2024-01-29)","permalink":"/de/blog/2024/01/29/new-board-images.zh_CN"}},"content":"\u4e3a\u4e86\u60a8\u7684\u8ddf\u8e2a\u524d\u6cbf\u5f00\u53d1\u52a8\u6001\u65b9\u4fbf\uff0cRuyiSDK \u56e2\u961f\u73b0\u5df2\u6253\u5305\u4e86 RV64ILP32 \u8fd9\u4e00\u5b9e\u9a8c\u6027 ABI \u7684\u88f8\u673a\u5de5\u5177\u94fe\u4f9b\u60a8\u4f7f\u7528\u3002\\n\u7531\u4e8e\u662f\u88f8\u673a\u5de5\u5177\u94fe\uff0c\u6b64\u5de5\u5177\u94fe\u4e0d\u81ea\u5e26 sysroot\uff0c\u4e14\u672a\u5f00\u542f multilib\uff1a\u53ef\u7528\u7684 ABI \u4e3a `ilp32d`\u3002\\n\\n## \u4f7f\u7528\u793a\u4f8b\\n\\n\u7ed9\u5b9a\u5982\u4e0b\u7684 C \u7a0b\u5e8f\uff1a\\n\\n```c\\n// test.c\\nlong long add(long long *a, long long b)\\n{\\n    return *a + b;  // Should be realized with `ld` and `add`\\n}\\n\\nvoid check(int);\\n\\nvoid check_sizes(void)\\n{\\n    check(sizeof(int));        // a0 should be 4\\n    check(sizeof(long));       // a0 should be 4\\n    check(sizeof(long long));  // a0 should be 8\\n    check(sizeof(void *));     // a0 should be 4\\n}\\n```\\n\\n\u4f7f\u7528\u76f8\u5e94\u7684\u5de5\u5177\u94fe\u5305\u4e0e profile\uff0c\u6211\u4eec\u5c06\u53ef\u7f16\u8bd1\u51fa\u7b26\u5408 RV64ILP32 ABI \u7684\u76ee\u6807\u4ee3\u7801\uff1a\\n\\n```shell-session\\n$ ruyi update\\n$ ruyi install gnu-plct-rv64ilp32-elf\\n$ ruyi venv -t gnu-plct-rv64ilp32-elf --without-sysroot baremetal-rv64ilp32 /tmp/venv\\n$ source /tmp/venv/bin/ruyi-activate\\n$ /tmp/venv11/bin/riscv64-plct-elf-gcc -O2 -c -o test.o test.c\\n```\\n\\n\u68c0\u67e5\u76ee\u6807\u4ee3\u7801\u662f\u5426\u7b26\u5408\u9884\u671f\uff1a\\n\\n```shell-session\\n$ riscv64-plct-elf-readelf -h test.o | grep 32\\n  Class:                             ELF32\\n  Flags:                             0x25, RVC, X32, double-float ABI\\n```\\n\\n```shell-session\\n$ riscv64-plct-elf-objdump -dw test.o\\n\\ntest.o:     file format elf32-littleriscv\\n\\n\\nDisassembly of section .text:\\n\\n00000000 <add>:\\n   0:   6108                    ld      a0,0(a0)\\n   2:   952e                    add     a0,a0,a1\\n   4:   8082                    ret\\n\\n00000006 <check_sizes>:\\n   6:   3141                    addiw   sp,sp,-16\\n   8:   4511                    li      a0,4\\n   a:   e406                    sd      ra,8(sp)\\n   c:   00000097                auipc   ra,0x0\\n  10:   000080e7                jalr    ra # c <check_sizes+0x6>\\n  14:   4511                    li      a0,4\\n  16:   00000097                auipc   ra,0x0\\n  1a:   000080e7                jalr    ra # 16 <check_sizes+0x10>\\n  1e:   4521                    li      a0,8\\n  20:   00000097                auipc   ra,0x0\\n  24:   000080e7                jalr    ra # 20 <check_sizes+0x1a>\\n  28:   60a2                    ld      ra,8(sp)\\n  2a:   4511                    li      a0,4\\n  2c:   2141                    addiw   sp,sp,16\\n  2e:   00000317                auipc   t1,0x0\\n  32:   00030067                jr      t1 # 2e <check_sizes+0x28>\\n```\\n\\n\u53ef\u89c1\uff0c\u6b64\u5de5\u5177\u94fe\u786e\u5b9e\u751f\u6210\u4e86\u6307\u9488\u5bbd\u5ea6\u4e3a 32 \u4f4d\uff0c\u4f46\u5229\u7528\u4e86 RV64 \u80fd\u529b\u7684\u76ee\u6807\u4ee3\u7801\u3002"},{"id":"/2024/01/29/new-board-images.zh_CN","metadata":{"permalink":"/de/blog/2024/01/29/new-board-images.zh_CN","source":"@site/blog/2024-01-29-new-board-images.zh_CN.md","title":"\u65b0\u589e\u677f\u5361\u652f\u6301 (2024-01-29)","description":"\u73b0\u5df2\u4e3a\u4ee5\u4e0b\u677f\u5361\u65b0\u589e\u4e86\u955c\u50cf\u5305\u3002","date":"2024-01-29T00:00:00.000Z","tags":[],"readingTime":0.94,"hasTruncateMarker":false,"authors":[{"name":"xen0n","title":"Maintainer of ruyi","url":"https://github.com/xen0n","imageURL":"https://avatars.githubusercontent.com/u/1175567?v=4","key":"white"}],"frontMatter":{"title":"\u65b0\u589e\u677f\u5361\u652f\u6301 (2024-01-29)","authors":["white"]},"unlisted":false,"prevItem":{"title":"RV64ILP32 \u88f8\u673a\u5de5\u5177\u94fe\u4e0e profile \u73b0\u5df2\u53ef\u7528","permalink":"/de/blog/2024/02/26/gnu-plct-rv64ilp32-elf.zh_CN"},"nextItem":{"title":"RuyiSDK 0.4 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","permalink":"/de/blog/2024/01/29/ruyi-0.4.zh_CN"}},"content":"\u73b0\u5df2\u4e3a\u4ee5\u4e0b\u677f\u5361\u65b0\u589e\u4e86\u955c\u50cf\u5305\u3002\\n\\n\u60a8\u53ef\u7528 RuyiSDK \u8bbe\u5907\u5b89\u88c5\u5411\u5bfc `ruyi device provision` \u81ea\u52a8\u521d\u59cb\u5316\u60a8\u7684\u8bbe\u5907\uff0c\u6216\u901a\u8fc7\\n`ruyi install` \u624b\u52a8\u5b89\u88c5\u5b83\u4eec\uff1a\u955c\u50cf\u6587\u4ef6\u4f1a\u88ab\u81ea\u52a8\u89e3\u538b\u6216\u7b26\u53f7\u94fe\u63a5\u5230 `~/.local/share/ruyi/blobs/<\u5305\u540d>-<\u5305\u7248\u672c\u53f7>` \u7684\u4f4d\u7f6e\u3002\\n\\n\u611f\u8c22\u60a8\u5bf9 RuyiSDK \u7684\u652f\u6301\uff01\\n\\n## Sipeed LicheeRV & Allwinner \u54ea\u5412 D1\\n\\n\u6b64\u4e24\u79cd\u578b\u53f7\u5728\u786c\u4ef6\u5c42\u9762\u5927\u4f53\u517c\u5bb9\uff0c\u4f46\u4e5f\u6709\u7ec6\u5fae\u5dee\u522b\uff0c\u4ec5\u4f53\u73b0\u5728\u8bbe\u5907\u6811\u5c42\u9762\u3002\\n\\n- `board-image/oerv-awol-d1-base`: openEuler RISC-V \u7cfb\u7edf\u955c\u50cf\uff0c\u57fa\u7840\u7cfb\u7edf\\n- `board-image/oerv-awol-d1-xfce`: openEuler RISC-V \u7cfb\u7edf\u955c\u50cf\uff0c\u542b XFCE GUI\\n\\n## StarFive VisionFive\\n\\n- `board-image/oerv-starfive-visionfive-base`: openEuler RISC-V \u7cfb\u7edf\u955c\u50cf\uff0c\u57fa\u7840\u7cfb\u7edf\\n- `board-image/oerv-starfive-visionfive-xfce`: openEuler RISC-V \u7cfb\u7edf\u955c\u50cf\uff0c\u542b XFCE GUI\\n\\n## StarFive VisionFive2\\n\\n- `board-image/oerv-starfive-visionfive2-base`: openEuler RISC-V \u7cfb\u7edf\u955c\u50cf\uff0c\u57fa\u7840\u7cfb\u7edf\\n- `board-image/oerv-starfive-visionfive2-xfce`: openEuler RISC-V \u7cfb\u7edf\u955c\u50cf\uff0c\u542b XFCE GUI"},{"id":"/2024/01/29/ruyi-0.4.zh_CN","metadata":{"permalink":"/de/blog/2024/01/29/ruyi-0.4.zh_CN","source":"@site/blog/2024-01-29-ruyi-0.4.zh_CN.md","title":"RuyiSDK 0.4 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","description":"RuyiSDK 0.4 \u73b0\u5df2\u53d1\u5e03\uff0c\u5bf9\u5e94\u7684\u5305\u7ba1\u7406\u5668\u7248\u672c\u4e5f\u4e3a 0.4.0\u3002\u60a8\u53ef\u524d\u5f80 RuyiSDK \u5305\u7ba1\u7406\u5668\u7684","date":"2024-01-29T00:00:00.000Z","tags":[],"readingTime":1.395,"hasTruncateMarker":false,"authors":[{"name":"xen0n","title":"Maintainer of ruyi","url":"https://github.com/xen0n","imageURL":"https://avatars.githubusercontent.com/u/1175567?v=4","key":"white"}],"frontMatter":{"title":"RuyiSDK 0.4 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","authors":["white"]},"unlisted":false,"prevItem":{"title":"\u65b0\u589e\u677f\u5361\u652f\u6301 (2024-01-29)","permalink":"/de/blog/2024/01/29/new-board-images.zh_CN"},"nextItem":{"title":"\u65b0\u589e\u677f\u5361\u652f\u6301 (2024-01-15)","permalink":"/de/blog/2024/01/15/new-board-images.zh_CN"}},"content":"RuyiSDK 0.4 \u73b0\u5df2\u53d1\u5e03\uff0c\u5bf9\u5e94\u7684\u5305\u7ba1\u7406\u5668\u7248\u672c\u4e5f\u4e3a 0.4.0\u3002\u60a8\u53ef\u524d\u5f80 RuyiSDK \u5305\u7ba1\u7406\u5668\u7684\\nGitHub Releases \u9875\u9762: https://github.com/ruyisdk/ruyi/releases \u4e0b\u8f7d\u3002\\n\\n\u672c\u6b21\u66f4\u65b0\u4e3b\u8981\u5305\u542b\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff0c\u795d\u60a8\u4f7f\u7528\u6109\u5feb\uff01\\n\\n## RuyiSDK \u5305\u7ba1\u7406\u5668\\n\\n- `ruyi device provision` \u4f1a\u5c06 `fastboot` \u7684\u8c03\u7528\u4ee5 `sudo` \u5305\u88c5\u4e86\u3002\\n- `ruyi self uninstall --purge` \u4e0d\u4f1a\u5fd8\u8bb0\u5220\u9664 `~/.local/state/ruyi` \u76ee\u5f55\u4e86\u3002\\n- \u4ece\u8f6f\u4ef6\u6e90\u4e0b\u8f7d\u6587\u4ef6\u5931\u8d25\u65f6\uff0c\u4f1a\u63d0\u4f9b\u4e00\u4e9b\u6709\u52a9\u4e8e\u7528\u6237\u81ea\u52a9\u6392\u67e5\u95ee\u9898\u7684\u63d0\u793a\u8baf\u606f\u4e86\u3002\\n- \u4e3a\u63d0\u4f9b\u66f4\u7a33\u5b9a\u7684\u670d\u52a1\uff0cRuyiSDK \u8f6f\u4ef6\u6e90\u4ed3\u5e93\u73b0\u5df2\u642c\u8fc1\u81f3 GitHub\u3002\\n  \u89c6\u60a8\u6240\u5728\u5730\u533a\u6216\u7ec4\u7ec7\u6240\u53ef\u80fd\u8bbe\u7f6e\u7684\u7f51\u7edc\u8bbf\u95ee\u9650\u5236\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u91c7\u53d6\u4e00\u4e9b\u63aa\u65bd\uff0c\\n  \u4ee5\u4fbf\u80fd\u7ee7\u7eed\u4e0e RuyiSDK \u8f6f\u4ef6\u6e90\u540c\u6b65\u3002\\n\\n\u539f\u5148\u4f4d\u7f6e\u7684 RuyiSDK \u8f6f\u4ef6\u6e90\u4ed3\u5e93\u5c06\u5728 2024-02-01 \u524d\u540e\u505c\u6b62\u66f4\u65b0\u3002\u8bf7\u5c3d\u65e9\u66f4\u65b0\u60a8\u7684\\n`ruyi` \u7248\u672c\u4ee5\u81ea\u52a8\u8fc1\u79fb\u5230\u6700\u65b0\u914d\u7f6e\u3002\\n\\n## RuyiSDK \u8f6f\u4ef6\u6e90\\n\\n- \u4e3a RISC-V \u67b6\u6784\u7684\u7cfb\u7edf\uff0c\u65b0\u589e\u63d0\u4f9b\u4e86 DynamoRIO \u5957\u4ef6 `analyzer/dynamorio-riscv`\u3002\\n- \u4e3a AMD64 \u67b6\u6784\u7684\u7cfb\u7edf\uff0c\u65b0\u589e\u63d0\u4f9b\u4e86 QEMU \u7cfb\u7edf\u6a21\u62df\u5668 `emulator/qemu-system-riscv-upstream`\u3002\\n- \u4e0a\u6e38\u7248\u7684 QEMU \u7248\u672c\u73b0\u5df2\u5347\u7ea7\u81f3 8.2.0\u3002"},{"id":"/2024/01/15/new-board-images.zh_CN","metadata":{"permalink":"/de/blog/2024/01/15/new-board-images.zh_CN","source":"@site/blog/2024-01-15-new-board-images.zh_CN.md","title":"\u65b0\u589e\u677f\u5361\u652f\u6301 (2024-01-15)","description":"\u73b0\u5df2\u4e3a\u4ee5\u4e0b\u677f\u5361\u65b0\u589e\u4e86\u955c\u50cf\u5305\u3002","date":"2024-01-15T00:00:00.000Z","tags":[],"readingTime":1.08,"hasTruncateMarker":false,"authors":[{"name":"xen0n","title":"Maintainer of ruyi","url":"https://github.com/xen0n","imageURL":"https://avatars.githubusercontent.com/u/1175567?v=4","key":"white"}],"frontMatter":{"title":"\u65b0\u589e\u677f\u5361\u652f\u6301 (2024-01-15)","authors":["white"]},"unlisted":false,"prevItem":{"title":"RuyiSDK 0.4 \u7248\u672c\u66f4\u65b0\u8bf4\u660e","permalink":"/de/blog/2024/01/29/ruyi-0.4.zh_CN"},"nextItem":{"title":"RuyiSDK \u652f\u6301\u5c55\u793a\u65b0\u95fb\u4e86","permalink":"/de/blog/2024/01/14/ruyi-news.zh_CN"}},"content":"\u73b0\u5df2\u4e3a\u4ee5\u4e0b\u677f\u5361\u65b0\u589e\u4e86\u955c\u50cf\u5305\u3002\\n\\n\u60a8\u53ef\u7528 `ruyi install` \u5b89\u88c5\u5b83\u4eec\uff1a\u955c\u50cf\u6587\u4ef6\u4f1a\u88ab\u81ea\u52a8\u89e3\u538b\u6216\u7b26\u53f7\u94fe\u63a5\u5230 `~/.local/share/ruyi/blobs/<\u5305\u540d>-<\u5305\u7248\u672c\u53f7>` \u7684\u4f4d\u7f6e\u3002\\n\\n\u611f\u8c22\u60a8\u5bf9 RuyiSDK \u7684\u652f\u6301\uff01\\n\\n## Milk-V Duo\\n\\n### 64M RAM \u7248\u672c\\n\\n- `board-image/buildroot-sdk-milkv-duo`: \u5b98\u65b9 Buildroot SDK\\n- `board-image/buildroot-sdk-milkv-duo-python`: \u5b98\u65b9 Buildroot SDK\uff0c\u542b Python \u73af\u5883\\n\\n### 256M RAM \u7248\u672c\\n\\n- `board-image/buildroot-sdk-milkv-duo256m`: \u5b98\u65b9 Buildroot SDK\\n- `board-image/buildroot-sdk-milkv-duo256m-python`: \u5b98\u65b9 Buildroot SDK\uff0c\u542b Python \u73af\u5883\\n\\n## Milk-V Pioneer\\n\\n- `board-image/oerv-sg2042-milkv-pioneer-base`: openEuler RISC-V \u7cfb\u7edf\u955c\u50cf\uff0c\u57fa\u7840\u7cfb\u7edf\\n- `board-image/oerv-sg2042-milkv-pioneer-xfce`: openEuler RISC-V \u7cfb\u7edf\u955c\u50cf\uff0c\u542b XFCE GUI\\n- `board-image/revyos-sg2042-milkv-pioneer`: RevyOS \u7cfb\u7edf\u955c\u50cf\\n\\n## Sipeed LicheePi 4A\\n\\n\u7cfb\u7edf\u955c\u50cf\uff1a\\n\\n- `board-image/oerv-sipeed-lpi4a-headless`: openEuler RISC-V \u7cfb\u7edf\u955c\u50cf\uff0c\u4e0d\u542b GUI\\n- `board-image/oerv-sipeed-lpi4a-xfce`: openEuler RISC-V \u7cfb\u7edf\u955c\u50cf\uff0c\u542b XFCE GUI\\n- `board-image/revyos-sipeed-lpi4a`: RevyOS \u7cfb\u7edf\u955c\u50cf\\n\\n\u5f15\u5bfc\u5668\uff08U-Boot\uff09\uff1a\\n\\n- `board-image/uboot-oerv-sipeed-lpi4a-16g`: \u9002\u7528 Sipeed LicheePi 4A (16G RAM) \u7684 openEuler \u7cfb\u7edf\\n- `board-image/uboot-oerv-sipeed-lpi4a-8g`: \u9002\u7528 Sipeed LicheePi 4A (8G RAM) \u7684 openEuler \u7cfb\u7edf\\n- `board-image/uboot-revyos-sipeed-lpi4a-16g`: \u9002\u7528 Sipeed LicheePi 4A (16G RAM) \u7684 RevyOS \u7cfb\u7edf\\n- `board-image/uboot-revyos-sipeed-lpi4a-8g`: \u9002\u7528 Sipeed LicheePi 4A (8G RAM) \u7684 RevyOS \u7cfb\u7edf"},{"id":"/2024/01/14/ruyi-news.zh_CN","metadata":{"permalink":"/de/blog/2024/01/14/ruyi-news.zh_CN","source":"@site/blog/2024-01-14-ruyi-news.zh_CN.md","title":"RuyiSDK \u652f\u6301\u5c55\u793a\u65b0\u95fb\u4e86","description":"\u4e3a\u65b9\u4fbf\u60a8\u53ca\u65f6\u4e86\u89e3 RuyiSDK \u7684\u5f00\u53d1\u52a8\u6001\uff0c\u6211\u4eec\u4e3a ruyi \u5de5\u5177\u65b0\u589e\u4e86\u65b0\u95fb\u652f\u6301\u3002","date":"2024-01-14T00:00:00.000Z","tags":[],"readingTime":0.5,"hasTruncateMarker":false,"authors":[{"name":"xen0n","title":"Maintainer of ruyi","url":"https://github.com/xen0n","imageURL":"https://avatars.githubusercontent.com/u/1175567?v=4","key":"white"}],"frontMatter":{"title":"RuyiSDK \u652f\u6301\u5c55\u793a\u65b0\u95fb\u4e86","authors":["white"]},"unlisted":false,"prevItem":{"title":"\u65b0\u589e\u677f\u5361\u652f\u6301 (2024-01-15)","permalink":"/de/blog/2024/01/15/new-board-images.zh_CN"}},"content":"\u4e3a\u65b9\u4fbf\u60a8\u53ca\u65f6\u4e86\u89e3 RuyiSDK \u7684\u5f00\u53d1\u52a8\u6001\uff0c\u6211\u4eec\u4e3a `ruyi` \u5de5\u5177\u65b0\u589e\u4e86\u65b0\u95fb\u652f\u6301\u3002\\n\\n\u5982\u679c\u60a8\u4f7f\u7528 ruyi 0.3 \u6216\u66f4\u9ad8\u7684\u7248\u672c\uff0c\u90a3\u4e48\u5f53\u60a8\u5b8c\u6210 `ruyi update` \u4e4b\u540e\uff0c\\n\u5982\u679c\u8f6f\u4ef6\u6e90\u4e2d\u6709\u65b0\u589e\u7684\u65b0\u95fb\u6761\u76ee\uff0c\u5c06\u5728\u547d\u4ee4\u8f93\u51fa\u4e2d\u63d0\u793a\u3002\\n\u60a8\u53ef\u7528 `ruyi news list` \u5217\u51fa\u5b83\u4eec\uff0c\u5e76\u7528 `ruyi news read` \u9605\u8bfb\u5b83\u4eec\u3002\\n\\n\u611f\u8c22\u60a8\u5bf9 RuyiSDK \u7684\u652f\u6301\uff01"}]}}')}}]);