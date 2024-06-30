

import Image from 'next/image';
import NewsHeader from "../../component/navigation/newsHeader";
import { allNews } from "@/app/api/news/route";
import Link from "next/link";

export default async  function NewsPage() {


  const newslist = await allNews();

  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="h-full w-[80%] sticky ">
        <NewsHeader />
        <div className="mb-5 ">

          <Link href={newslist[0].imgLink}>
            <div className="flex border bg-gray-200 text-center text-black hover:text-gray-500 rounded-lg">
                  <Image unoptimized src={newslist[0].imgSrc} height={250} width={500} alt={newslist[0].title} className="rounded-l-lg" />
                  <ul className="w-[50%] ml-[15px] text-center content-center">
                    <li className="text-[20px] text-orange-500 ml-[15px] text-left mt-[10%]">경제</li>
                    <li className="text-[30px] ">{newslist[0].title}</li>
                    <li className="text-[15px] ml-[15px] text-left mt-[10%]">{newslist[0].content}</li>
                  </ul>
            </div>
          </Link>
        </div>
        <div className="text-center flex space-x-0">
        {newslist.map((v: INews, i: any) =>
            i < 5 ?
              <ul key={v.id} className="border p-2 w-1/5 text-center text-black hover:text-gray-500 hover:shadow-lg hover:border rounded-lg">
                <li className="flex justify-center h-[60%]">
                  <Image unoptimized src={v.imgSrc} height={150} width={300} alt={v.title} className="rounded-t-lg" />
                </li>
                <li className="p-2 h-[30%] truncate">{v.title}</li>
                <li className="text-left text-gray-400 h-[10%]">{i.id}분전</li>
              </ul>
              : <div key={v.id}></div>
          )}
        </div>
        <div className="mt-[40px]">
          <h1 className="border-b-black text-[30px] mb-5">최신뉴스<hr /></h1>
          {newslist.map((v: INews, i: any) =>
                <Link key={v.id} ref={v.imgLink} href={""}>
                  <div className="grid grid-flow-col border grid-cols-2 p-2 gap-2 flex text-center text-black mb-5 hover:shadow-lg hover:border rounded-lg">
                    <div className="col-span-2 text-bold text-[25px] hover:text-gray-500 text-ellipsis pt-2">{v.title}</div>
                    <div className="col-span-2 row-span-2 text-bold text-[16px] text-gray-500">{v.content}</div>
                    <div className="row-span-3 ">
                      <Image unoptimized src={v.imgSrc} height={150} width={350} alt={v.title} className="rounded-r-lg" />
                    </div>
                  </div>
                </Link>
              )}
        </div>

      </div>
    </div>
  );
}
