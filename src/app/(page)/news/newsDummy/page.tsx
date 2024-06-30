
import { useRouter } from "next/navigation";
import Image from 'next/image';
import NewsHeader from "../../../component/navigation/newsHeader";
import Footer from "@/app/common/box/footer";
import { allNews } from "@/app/api/news/route";

export default async function NewsPage() {


  const newslist = await allNews();
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="h-full w-[80%] sticky ">
        <NewsHeader />
        <div className="mb-5 ">
          {newsDummy.map((elem: INewsDummy, i: number) => (
            elem.main === true ?
              <div key={elem.id} onClick={() => { elem.ref }} className="bg-gray-200 text-center text-black hover:text-gray-500 rounded-lg">
                <ul className="flex">
                  <li className="">
                    <Image unoptimized src={elem.img} height={250} width={500} alt={elem.title} className="rounded-l-lg" />
                  </li>
                  <li className="w-[50%] ml-[15px] text-center content-center">
                    <ul>
                      <li className="text-[20px] text-orange-500 ml-[15px] text-left mt-[10%]">경제</li>
                      <li className="text-[30px] ">{elem.title}</li>
                      <li className="text-[15px] ml-[15px] text-left mt-[10%]">{elem.time}</li>
                    </ul>
                  </li>
                </ul>
              </div>
              : <div key={elem.id}></div>
          ))}
        </div>

        <div className="text-center flex">
            {newsDummy.map((elem: INewsDummy, i: number) => (
              elem.main === false && elem.id <= 4 ?
                <ul key={elem.id} className="border p-2 w-1/3 text-center text-black hover:text-gray-500 hover:shadow-lg hover:border rounded-lg">
                  <li className="flex justify-center">
                    <Image unoptimized src={elem.img} height={150} width={350} alt={elem.title} className="rounded-t-lg" />
                  </li>
                  <li className="p-2">{elem.title}</li>
                  <li className="text-left text-gray-400">{elem.time}</li>
                </ul>
                : <div key={elem.id}></div>
            ))}
        </div>

        <div className="mt-[40px]">
          <h1 className="border-b-black text-[30px] mb-5">최신뉴스</h1>
            {newsDummy.map((elem: INewsDummy, i: number) => (
              <div key={elem.id} className="grid grid-flow-col border grid-cols-2 p-2 gap-2 flex text-center text-black mb-5 hover:shadow-lg hover:border rounded-lg">
                <div className="col-span-2 text-bold text-[25px] hover:text-gray-500 text-ellipsis pt-2">{elem.title}</div>
                <div className="col-span-2 row-span-2 text-bold text-[16px] text-gray-500">{elem.paper}</div>
                <div className="row-span-3 ">
                  <Image unoptimized src={elem.img} height={150} width={350} alt={elem.title} className="rounded-r-lg" />
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
