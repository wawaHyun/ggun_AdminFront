
import { newstitle } from "@/app/common/enums/news.menus";
import Link from "next/link";

export default function NewsHeader(){
    
    return (
        <div className="group m-2 bg-white grid grid-cols-12 text-center w-full h-[50px] cursor-pointer border rounded-lg content-center ">
          <Link href={`/news`}><span className=" text-bold text-[16px] text-black hover:text-orange-300">Home</span></Link>
          {newstitle.map((elem: IMenu, i: number) => {
            return (
              <Link key={elem.id} href={elem.href} className="text-center text-black hover:text-gray-300">
                {elem.title}
              </Link>
            );
          })}
        </div>
    )
}