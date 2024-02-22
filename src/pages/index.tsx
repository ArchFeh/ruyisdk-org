import Layout from '@theme/Layout';
import React from 'react';
import Button from '../components/Button';

import { Search, Group, Mobile } from '@styled-icons/boxicons-regular';
import { TerminalFill } from '@styled-icons/bootstrap';
import { Timer, Browsers } from '@styled-icons/ionicons-sharp';
import { Chip, Tag, Chat, ArrowBack } from '@styled-icons/boxicons-regular';

function Home() {
  return (
    <div className="text-center">
      <div className="py-56 min-h-screen">
        <div className="absolute -top-[15%] h-full w-full background"></div>
        <h1 className="text-5xl pb-24">RUYISDK</h1>
        <div className="lg:space-x-4 space-y-4 lg:space-y-0 pb-52">
          <Button link="https://github.com/ruyisdk">开始上手</Button>
          <Button link="https://github.com/ruyisdk">查看文档</Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 divide-x divide-gray-200 rounded-md shadow-lg w-2/3 lg:w-1/2 mx-auto">
          <div className="py-2 flex flex-col space-y-2 justify-center items-center">
            <h1 className="text-5xl text-sky-600">100%</h1>
            <span className="text-xl">开源</span>
          </div>
          <div className="py-2 flex flex-col space-y-2 justify-center items-center">
            <h1 className="text-5xl text-sky-600">+170</h1>
            <span className="text-xl">月下载量</span>
          </div>
          <div className="py-2 flex flex-col space-y-2 justify-center items-center">
            <h1 className="text-5xl text-sky-600">+7000</h1>
            <span className="text-xl">开发者</span>
          </div>
        </div>
      </div>

      <div className="py-16 space-y-4">
        <h1 className="text-5xl">我们的愿景</h1>
        <p className="text-xl pb-10">
          计划用三年时间为 RISC-V 开发者提供一个完整的、全家桶式的全功能开发环境
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-3/5 mx-auto gap-4 text-left">
          <div className="grid grid-cols-[min-content_1fr] grid-rows-[min-content_1fr] gap-2">
            <div className="row-span-2"><Search className="p-4 rounded-md bg-sky-600 text-white" size="64"></Search></div>
            <div className="text-xl font-bold">Made for Developer docs</div>
            <div>任何一款 RISC-V 开发板或模组，都可以通过 RUYISDK 系统获得硬件资料说明、固件/软件更新、调试支持等</div>
          </div>
          <div className="grid grid-cols-[min-content_1fr] grid-rows-[min-content_1fr] gap-2">
            <div className="row-span-2"><Group className="p-4 rounded-md bg-sky-600 text-white" size="64"></Group></div>
            <div className="text-xl font-bold">Customizable and fast</div>
            <div>开发者可以指定任何常用的 RISC-V 扩展指令集架构组合， 都可以通过 RUYISDK 系统生成客户所需的操作系统、工具链、语言执行环境（运行时或虚拟机）、计算库、应用框架等。尤其强调 RUYISDK 将完全支持 Vector 0.7.1 和 RVP 0.5.2 等已经大规模硅化的草案标准（or 厂商定制扩展）。</div>
          </div>
          <div className="grid grid-cols-[min-content_1fr] grid-rows-[min-content_1fr] gap-2">
            <div className="row-span-2"><Mobile className="p-4 rounded-md bg-sky-600 text-white" size="64"></Mobile></div>
            <div className="text-xl font-bold">Mobile design</div>
            <div>培育运营一个活跃全面的开发者交流社区。</div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-200 text-black -skew-y-6">
        <div className="skew-y-6 space-y-4">
          <h1 className="text-5xl">RuyiSDK 架构和组件</h1>
          <p className="text-xl	text-slate-500 pb-10 w-2/4 mx-auto">
            We scrape your documentation or technical blog, configure the Algolia application and send you the snippet you'll have to integrate. It's that simple.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 w-2/5 mx-auto gap-16 text-left">
            <div className="grid grid-rows-[min-content_min-content_1fr] gap-4">
              <Browsers size="200" className="mx-auto" />
              <div className="text-xl font-bold">GCC Support for RUYISDK</div>
              <div className="text-gray-600">We leverage the Algolia Crawler to index every section of your website.</div>
            </div>
            <div className="grid grid-rows-[min-content_min-content_1fr] gap-4">
              <Timer size="200" className="mx-auto" />
              <div className="text-xl font-bold">RuyiSDK llvm-project</div>
              <div className="text-gray-600">You don't need to configure any settings or even have an Algolia account. We take care of this for you!</div>
            </div>
            <div className="grid grid-rows-[min-content_min-content_1fr] gap-4">
              <TerminalFill size="200" className="mx-auto" />
              <div className="text-xl font-bold">RUYI QEMU</div>
              <div className="text-gray-600">We'll send you a small snippet to integrate DocSearch to your website and an invite to your fully configured Algolia application.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 space-y-4 bg-blue-600 text-white">
        <h1 className="text-5xl pb-10">Powered by PLCT</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-3/5 mx-auto gap-16 text-left">
          <div className="grid grid-cols-[min-content_1fr] grid-rows-[min-content_1fr] gap-2">
            <div className="row-span-2"><Chip className="p-4 rounded-md bg-white text-blue-600" size="64"></Chip></div>
            <div className="text-xl font-bold">Highly efficient</div>
            <div>Most of our search queries take less than 20ms, so Algolia can run a new search on every keystroke and instantly highlight relevant content to your users.</div>
          </div>
          <div className="grid grid-cols-[min-content_1fr] grid-rows-[min-content_1fr] gap-2">
            <div className="row-span-2"><Tag className="p-4 rounded-md bg-white text-blue-600" size="64"></Tag></div>
            <div className="text-xl font-bold">Detailed and straightforward analytics</div>
            <div>Use our analytics to keep an eye on your search performance and to make sure that your users are finding what they're searching for.</div>
          </div>
          <div className="grid grid-cols-[min-content_1fr] grid-rows-[min-content_1fr] gap-2">
            <div className="row-span-2"><Chat className="p-4 rounded-md bg-white text-blue-600" size="64"></Chat></div>
            <div className="text-xl font-bold">Search as you type</div>
            <div>Instantly magnify relevant content to your users from the first keystroke, thanks to Algolia speed.</div>
          </div>
          <div className="grid grid-cols-[min-content_1fr] grid-rows-[min-content_1fr] gap-2">
            <div className="row-span-2"><ArrowBack className="p-4 rounded-md bg-white text-blue-600" size="64"></ArrowBack></div>
            <div className="text-xl font-bold">Typo tolerant</div>
            <div>Algolia knows what your users mean to search for right out-of-the-box, so they won't be spending time correcting typos.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <Layout
      title="RuyiSDK"
      description="Ready for 1million developers"
    >
      <Home />
    </Layout>
  );
}

// function HomePage() {
//   return (
//       <Home />
//   );
// }

export default HomePage;