
import { useRouter } from "next/navigation";
import Image from 'next/image';
import NewsHeader from "../../../component/navigation/newsHeader";
import Footer from "@/app/common/box/footer";
import { allNews } from "@/app/api/news/route";

export default async function NewsPageDummy() {

  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="h-full w-[80%] sticky ">
        <NewsHeader />
        <div className="mb-5 ">
          {newsDummy.map((v: INews, i: number) => (
            // v.main === true ?
              <div key={v.id} onClick={() => { v.imgLink }} className="bg-gray-200 text-center text-black hover:text-gray-500 rounded-lg">
                <ul className="flex">
                  <li className="">
                    <Image unoptimized src={v.imgSrc} height={250} width={500} alt={v.title} className="rounded-l-lg" />
                  </li>
                  <li className="w-[50%] ml-[15px] text-center content-center">
                    <ul>
                      <li className="text-[20px] text-orange-500 ml-[15px] text-left mt-[10%]">경제</li>
                      <li className="text-[30px] ">{v.title}</li>
                      <li className="text-[15px] ml-[15px] text-left mt-[10%]">{v.content}</li>
                    </ul>
                  </li>
                </ul>
              </div>
              // : <div key={v.id}></div>
          ))}
        </div>

        <div className="text-center flex">
            {newsDummy.map((v: INews, i: number) => (
              i <= 4 ?
                <ul key={v.id} className="border p-2 w-1/3 text-center text-black hover:text-gray-500 hover:shadow-lg hover:border rounded-lg">
                  <li className="flex justify-center">
                    <Image unoptimized src={v.imgSrc} height={150} width={350} alt={v.title} className="rounded-t-lg" />
                  </li>
                  <li className="p-2">{v.title}</li>
                  <li className="text-left text-gray-400">{i}분 전</li>
                </ul>
                : <div key={v.id}></div>
            ))}
        </div>

        <div className="mt-[40px]">
          <h1 className="border-b-black text-[30px] mb-5">최신뉴스</h1>
            {newsDummy.map((v: INews, i: number) => (
              <div key={v.id} className="grid grid-flow-col border grid-cols-2 p-2 gap-2 text-center text-black mb-5 hover:shadow-lg hover:border rounded-lg">
                <div className="col-span-2 text-bold text-[25px] hover:text-gray-500 text-ellipsis pt-2">{v.title}</div>
                <div className="col-span-2 row-span-2 text-bold text-[16px] text-gray-500">{v.content}</div>
                <div className="row-span-3 ">
                  <Image unoptimized src={v.imgSrc} height={150} width={350} alt={v.title} className="rounded-r-lg" />
                </div>
              </div>
            ))}
        </div>

        <div className="bottom-0 ">
          <Footer />
        </div>

      </div>
    </div>
  );
}
