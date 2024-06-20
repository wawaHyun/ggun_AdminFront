'use client'

import { BaseBox } from "@/atoms/form/boxForm";
import Image from "next/image";
import { UserIcon } from "../../../../../public/icons/icons";
import { Diversity3 } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Chartting({ params }: any) {

    const textDemo = [
        { id: 1, roomid: 2222, text: "안녕하세요, 대리님", time: "09:11" },
        { id: 2, roomid: 1111, text: "안녕하세요 존아입니다", time: "09:11" },
        { id: 3, roomid: 2222, text: "어제 결재올린 문서 오늘 점심 전까지 컨펌 가능할까요?", time: "09:12" },
        { id: 4, roomid: 1111, text: "최대한 노력해보겠습니다..", time: "09:13" },
        { id: 5, roomid: 2222, text: "오늘 사내공지사항 업뎃 됐습니다.", time: "10:02" },
        { id: 6, roomid: 1111, text: "확인해보도록 하겠습니다.", time: "10:02" },
        { id: 7, roomid: 2222, text: "오후에 반차 예정인데 특이사항 있나요?", time: "10:05" },
        { id: 8, roomid: 1111, text: "아직까진 없습니다", time: "10:06" },
        { id: 9, roomid: 2222, text: "허대리님 자리에 계신가요?", time: "11:34" },
        { id: 10, roomid: 1111, text: "앗 방금까진 계셨는데;", time: "11:36" },
        { id: 11, roomid: 2222, text: "ㅠㅠ", time: "11:36" },
        { id: 12, roomid: 1111, text: "댈님 저희 회사 소개 문구 좀 주실수 있나요?", time: "11:44" },
        { id: 13, roomid: 2222, text: "초보자 친화적인 플랫폼 구축: 주식 거래에 익숙하지 않은 초보자들도 쉽게 접근하고 이해할 수 있는 사용자 친화적인 주식 거래 플랫폼을 개발하여, 투자에 대한 진입 장벽을 낮추고 사용자 층을 확대합니다.", time: "11:45" },
        { id: 14, roomid: 1111, text: "감삼다", time: "11:50" },
        { id: 15, roomid: 1111, text: "맛밥하시고 내일 봬요", time: "12:03" }
    ]

    const myid = params.id;
    const yourid = 2222;

    const dispatch = useDispatch()
    // const allArticles: IArticle[] = useSelector(getChat)

    // useEffect(() => {
    //     const id = parseInt(params.id);
    //     dispatch(fetchMyArticleList(id))
    // }, [])


    return (
        <div className="w-full h-full flex flex-col justify-center ">
            <div className="absolute top-[55px] inset-x-0  m-auto w-[75%]">
                <div className=" m-auto overflow-y-auto p-2">
                    {textDemo && textDemo.map((i: any) =>
                        i.roomid == myid ?
                            <div key={i.id} className="flex w-full flex justify-end ">
                                <div className="mx-2 content-end text-gray-300">{i.time}</div>
                                <div className="border shadow-md rounded-lg text-pretty flex items-center my-3 max-w-[45%] p-2 bg-white ">
                                    {i.text}
                                </div>
                            </div>
                            :
                            <div key={i.id} className="flex w-full flex">
                                <div className="w-[50px] h-[40px]"> <UserIcon color="#433E49" /></div>
                                <div className="border shadow-md rounded-lg text-pretty flex items-center my-3 max-w-[45%] p-2 bg-pebble-400">
                                    {i.text}
                                </div>
                                <div className="mx-2 content-end text-gray-300">{i.time}</div>
                            </div>
                    )}
                </div>
                <div className="fixed inset-x-0 top-0 w-[80%] m-auto bold bg-pebble-200 text-center h-[50px] text-white content-center text-[27px] rounded-b-lg">{yourid}님과의 대화</div>
                <div className="relative h-[50px] bottom-0 inset-x-0 m-auto w-full">
                    <input type="text" placeholder="enter the text" className="fixed bottom-0 w-[75%] border shadow-lg rounded-lg min-h-[50px] px-5" />
                </div>
            </div>
        </div>
    );
}

export default Chartting;