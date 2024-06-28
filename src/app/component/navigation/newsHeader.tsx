import { useRouter } from "next/navigation";

export default function NewsHeader(){
    
    const router = useRouter()

  interface NewsMenuProps {
    id: number;
    menu: string;
    ref: any;
  }

    const newsMenu = [
        { id: 1, menu: '많이 본 기사', ref: '#' },
        { id: 2, menu: '최신뉴스', ref: '#' },
        { id: 3, menu: '경제정책', ref: '#' },
        { id: 4, menu: '경기지표', ref: '#' },
        { id: 5, menu: '무역통상', ref: '#' },
        { id: 6, menu: '세금', ref: '#' },
        { id: 7, menu: '외환/환율', ref: '#' },
        { id: 8, menu: '은행', ref: '#' },
        { id: 9, menu: '보험', ref: '#' },
        { id: 10, menu: '카드/캐피탈', ref: '#' },
        { id: 11, menu: '당좌거래', ref: '#' },
      ]
    
    return (
        <div className="sticky top-0 bg-white group m-2 grid grid-cols-12 text-center w-full h-[10%] cursor-pointer border shadow-lg rounded-b-lg content-center ">
          <span className=" text-bold text-[16px] text-black hover:text-gray-300" onClick={() => router.push(`/news`)}>Home</span>
          {newsMenu.map((elem: NewsMenuProps, i: number) => {
            return (
              <div key={elem.id} onClick={() => { elem.ref }} className="text-center text-black hover:text-gray-300">
                {elem.menu}
              </div>
            );
          })}
        </div>
    )
}