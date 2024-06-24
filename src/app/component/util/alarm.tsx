
import Image from "next/image";
import { useState } from "react";
import { BaseBox } from "../box/boxFormat";


function Alarm() {
    const [isOpen, setIsOpen] = useState(false);

    const articles = [
        { id: 1, title: "관리자 권한 설정", content: "관리자 권한 설정입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "홍길동", answer: "답변완료", modDate: "24-04-10" },
        { id: 2, title: "로그인 관련 공지", content: "로그인 관련 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "김이박", answer: "답변완료", modDate: "24-04-12" },
        { id: 3, title: "비번 초기화 관련 공지사항", content: "비번 초기화 관련 공지사항입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "박하나", answer: "답변완료", modDate: "24-04-14" },
        { id: 4, title: "사내 동아리 양식 공지", content: "사내 동아리 양식 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "김현식", answer: "답변완료", modDate: "24-04-16" },
        { id: 5, title: "금일자 사내 보안관련 공지", content: "금일자 사내 보안관련 공지 업데이트입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "권상무", answer: "답변완료", modDate: "24-04-25" },
        { id: 6, title: "데이터 백업관련 공지", content: "빠른 처리 부탁드립니다.입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "한이솝", answer: "답변완료", modDate: "24-05-06" },
        { id: 7, title: "신입사원 제출서류 공지사항", content: "공지사항입니다.입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "한두리", answer: "답변완료", modDate: "24-05-10" },
        { id: 8, title: "퇴사자 작성 및 제출서류 공지사항", content: "퇴사자 작성 및 제출서류 공지사항입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "양대리", answer: "답변완료", modDate: "24-05-17" },
        { id: 9, title: "24년 5월 발령 공지", content: "4년 5월 발령 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "회계팀", answer: "처리중", modDate: "24-05-19" },
        { id: 10, title: "관리자 페이지 리뉴얼 공지", content: "관리자 페이지 리뉴얼 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "이민수", answer: "처리중", modDate: "24-06-02" },
        { id: 11, title: "본사 6층 화장실 공사 안내", content: "본사 6층 화장실 공사 안내입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "엄나라", answer: "처리중", modDate: "24-06-05" },
        { id: 12, title: "24년 6월 발령 공지", content: "24년 6월 발령 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "한영희", answer: "처리중", modDate: "24-06-10" },
    ]


    return (
        <div className="w-full h-full">
            <button className="fixed right-3 top-3" onClick={() => setIsOpen(!isOpen)}>
                <Image src="/imgs/bell.png" width="50" height="50" alt="알람이 왔습니다!" />
                <span className="bg-red-500 h-4 w-4 rounded-full text-xs text-white absolute top-1 right-1">{articles.length}</span>
            </button>

            {isOpen == true ?
                <div className="absolute top-3 right-[65px] w-full h-[80%] border-gray-300 border overflow-auto bg-white shadow-lg rounded-lg p-3">
                        {articles.map((i: any) =>
                        <div key={i.id} className="flex-col py-1 ">
                             <BaseBox color="white hover:bg-gray-100" content={
                                <div>
                                    <div className="flex">
                                        <div className="text-sm w-2/3 truncate">{i.title}</div>
                                        <div className="text-gray-300 text-xs w-1/3">{i.modDate}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs row-span-2 text-gray-300 truncate">{i.content}</div>
                                    </div>
                                </div>
                            } />
                        </div>
                        )}
                </div>

                : <div></div>}
        </div >
    )
}
export default Alarm;