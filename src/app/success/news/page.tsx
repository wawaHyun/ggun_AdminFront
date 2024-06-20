'use client'

import { PG } from "@/app/common/enums/PG";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import Footer from "@/app/common/module/footer";

export default function NewsPage() {

  const router = useRouter()

  interface NewsMenuProps {
    id: number;
    menu: string;
    ref: any;
  }

  interface NewsProps {
    id: number;
    main: Boolean;
    img: any;
    title: string;
    paper: string;
    ref: any;
  }


  const news = [
    { id: 1, main: true, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11032148_29_20240603162432.png', title: '주주가치 끌어올리는 DGB금융그룹... 황병우 회장 자사주 매입하고 미국서 IR', paper: '황병우 DGB금융그룹 회장이 책임경영 강화와 주주가치 제고를 위해 자사주를 매입하고 해외 기업설명회(IR)를 실시한다고 3일 밝혔다.    황 회장은 오는 10일부터 14일까지 5일간 미국 주요 도시에서 주요 주주와 잠재투자자를 대상으로 기업설명회(IR)를 개최한다. 이번 IR은 지난 3월 황 회장의 공식 취임 이후 약 3개월만으로 그룹의 중기 전략 추진과제 중 하나인 ‘주주가치 극대화’을 위한 첫 번째 행보다.', ref: '#' },
    { id: 2, main: false, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11032065_29_20240603145532.png', title: '"인뱅금리도 못 믿겠네"... 젋은 직장인들, 이젠 3년 6.9% "청년도약계좌"에 몰린다', paper: '인터넷은행과 저축은행들이 예·적금 금리를 줄줄이 내리면서 목돈 마련이 쉽지않은 가운데 ‘청년도약계좌’가 다시 주목받고 있다. 3일 은행연합회 공시에 따르면 이날 카카오뱅크와 케이뱅크의 정기예금 금리(1년)는 각각 3.3%, 3.5%로 한국은행의 기준금리 3.5%에도 못 미치는 수준이다. 카카오뱅크는 지난달 평균금리(3.4%)보다 0.1% 포인트 인하됐다. 케이뱅크도 기존보다 0.05% 포인트 내렸다.', ref: '#' },
    { id: 3, main: false, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11031969_29_20240603142422.png', title: '올해도 금사과?... 농식품부 장관 "사과 생샨량 평년 수준 될듯"', paper: '송미령 농림축산식품부 장관은 3일 “지금까지 기상, 생육상황을 고려하면 올해 사과 생산량은 평년 수준(49만t)이 될 것으로 전망한다”고 말했다.송 장관은 이날 사과 주산지인 충남 예산군 사과 농가와 농업기술센터를 찾아 사과 생육을 살피고 재해 예방시설 현황을 점검했다.', ref: '#' },
    { id: 4, main: false, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11032065_29_20240603145532.png', title: '"인뱅금리도 못 믿겠네"... 젋은 직장인들, 이젠 3년 6.9% "청년도약계좌"에 몰린다', paper: '인터넷은행과 저축은행들이 예·적금 금리를 줄줄이 내리면서 목돈 마련이 쉽지않은 가운데 ‘청년도약계좌’가 다시 주목받고 있다. 3일 은행연합회 공시에 따르면 이날 카카오뱅크와 케이뱅크의 정기예금 금리(1년)는 각각 3.3%, 3.5%로 한국은행의 기준금리 3.5%에도 못 미치는 수준이다. 카카오뱅크는 지난달 평균금리(3.4%)보다 0.1% 포인트 인하됐다. 케이뱅크도 기존보다 0.05% 포인트 내렸다.', ref: '#' },
    { id: 5, main: false, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11031969_29_20240603142422.png', title: '올해도 금사과?... 농식품부 장관 "사과 생샨량 평년 수준 될듯"', paper: '송미령 농림축산식품부 장관은 3일 “지금까지 기상, 생육상황을 고려하면 올해 사과 생산량은 평년 수준(49만t)이 될 것으로 전망한다”고 말했다.송 장관은 이날 사과 주산지인 충남 예산군 사과 농가와 농업기술센터를 찾아 사과 생육을 살피고 재해 예방시설 현황을 점검했다.', ref: '#' },
    { id: 6, main: false, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11032065_29_20240603145532.png', title: '"인뱅금리도 못 믿겠네"... 젋은 직장인들, 이젠 3년 6.9% "청년도약계좌"에 몰린다', paper: '인터넷은행과 저축은행들이 예·적금 금리를 줄줄이 내리면서 목돈 마련이 쉽지않은 가운데 ‘청년도약계좌’가 다시 주목받고 있다. 3일 은행연합회 공시에 따르면 이날 카카오뱅크와 케이뱅크의 정기예금 금리(1년)는 각각 3.3%, 3.5%로 한국은행의 기준금리 3.5%에도 못 미치는 수준이다. 카카오뱅크는 지난달 평균금리(3.4%)보다 0.1% 포인트 인하됐다. 케이뱅크도 기존보다 0.05% 포인트 내렸다.', ref: '#' },
    { id: 7, main: false, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11031969_29_20240603142422.png', title: '올해도 금사과?... 농식품부 장관 "사과 생샨량 평년 수준 될듯"', paper: '송미령 농림축산식품부 장관은 3일 “지금까지 기상, 생육상황을 고려하면 올해 사과 생산량은 평년 수준(49만t)이 될 것으로 전망한다”고 말했다.송 장관은 이날 사과 주산지인 충남 예산군 사과 농가와 농업기술센터를 찾아 사과 생육을 살피고 재해 예방시설 현황을 점검했다.', ref: '#' },
  ]

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
    <div className="h-screen w-screen flex justify-center">
      <div className=" h-[80%] w-full">
        <div className="group m-2 grid grid-cols-12 text-center w-full h-[10%] cursor-pointer border shadow-lg rounded-lg content-center ">
          <span className=" text-bold text-[16px] text-black hover:text-gray-300" onClick={() => router.push(`${PG.TRAN}/`)}>News Home</span>
          {newsMenu.map((elem: NewsMenuProps, i: number) => {
            return (
              <div key={elem.id} onClick={() => { elem.ref }} className="text-center text-black hover:text-gray-300">
                {elem.menu}
              </div>
            );
          })}
        </div>

        <div className="mb-5 ">
          {news.map((elem: NewsProps, i: number) => (
            elem.main === true ?
              <div key={elem.id} onClick={() => { elem.ref }} className="bg-gray-200 text-center text-black hover:text-gray-500">
                <ul className="flex">
                  <li>
                    <Image unoptimized src={elem.img} height={250} width={500} alt={elem.title} />
                  </li>
                  <li className="w-[50%] ml-[15px] text-center content-center">
                    <ul>
                      <li className="text-[20px] text-orange-500 ml-[15px] text-left mt-[10%]">경제</li>
                      <li className="text-[30px] ">{elem.title}</li>
                      <li className="text-[15px] ml-[15px] text-left mt-[10%]">45분 전</li>
                    </ul>
                  </li>
                </ul>
              </div>
              : <div key={elem.id}></div>
          ))}
        </div>

        <div className="text-center">
          <ul className="flex flex-row ">
            {news.map((elem: NewsProps, i: number) => (
              elem.main === false && elem.id <= 4 ?
                <ul key={elem.id} className="w-1/3 text-center text-black hover:text-gray-500 hover:shadow-lg hover:border rounded-lg">
                  <li className="flex justify-center">
                    <Image unoptimized src={elem.img} height={150} width={350} alt={elem.title} />
                  </li>
                  <li className="ml-[40px]">{elem.title}</li>
                  <li className="ml-[20px] text-left text-gray-400">{elem.id}분 전</li>
                </ul>
                : <div key={elem.id}></div>
            ))}
          </ul>
        </div>

        <div className="mt-[40px] ">
          <h1 className="underline text-[30px] mb-5">최신뉴스</h1>
          <ul className="flex flex-col cursor-pointer">
            {news.map((elem: NewsProps, i: number) => (
              <ul key={elem.id} className="flex text-center text-black gap-5 mb-5 hover:shadow-lg hover:border rounded-lg">
                <li>
                  <ul>
                    <li className="ml-[15px] text-bold text-[25px] hover:text-gray-500 mb-3">{elem.title}</li>
                    <li className="ml-[15px] text-bold text-[16px]">{elem.paper}</li>
                  </ul>
                </li>
                <Image unoptimized src={elem.img} height={150} width={350} alt={elem.title} />
              </ul>
            ))}
          </ul>
        </div>

        <div className="bottom-0">
          <Footer />

        </div>
      </div>
    </div>
  );
}
