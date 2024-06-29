
'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { WhiteBox } from "@/app/common/box/whiteBox";
import { useDispatch, useSelector } from "react-redux";
import { getAllChats } from "@/app/redux/silce/chat.slice";
import { fetchAllChats } from "@/app/redux/service/chat.service";


function ChatRoom() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const dispatch = useDispatch();
    const allchatlist = useSelector(getAllChats);
    
    useEffect(() => {
        dispatch(fetchAllChats())
    }, [dispatch])

    const roomlist = [
        {id:1, senderId: 2222, sender: "김대리", content: "안녕하세요, 좋은아침입니다.", modDate: "24-06-20 09:19"},
        {id:2, senderId: 3333, sender: "박하나", content: "점심 뭐 먹을거예요?", modDate: "24-06-20 10:28"},
        {id:3, senderId: 4444, sender: "홍길동", content: "사내 공지에 오타 있다고 문의 올라왔는데 빠른 처리 부탁드립니다.", modDate: "24-06-20 11:23"},
        {id:4, senderId: 5555, sender: "권상무", content: "오늘 4시경 외근하려고 하니 외부용 month report 작성 바랍니다.", modDate: "24-06-20 13:24"},
    ]

    const myname = 1111;

    return (
        <div className="w-full h-full">
            <button className="fixed right-3 bottom-3" onClick={() => setIsOpen(!isOpen)}>
                <Image src="/imgs/chatroom.png" width="50" height="50" alt="채팅빙 목록" priority/>
                <span className="bg-red-500 h-4 w-4 rounded-full text-xs text-white absolute top-0 right-0">{roomlist.length}</span>
            </button>

            {isOpen == true ?
                <div className="absolute bottom-[5%] right-[70px] w-full h-auto border-gray-300 border overflow-auto bg-white shadow-lg rounded-lg p-3">
                        {roomlist.map((i: any) =>
                        <button key={i.id} className="flex-col py-1 w-full text-left" onClick={()=>router.push(`/chatting/${i.senderId}`)}>
                            <WhiteBox color="white hover:bg-pebble-400 flex-col" content={
                                <div className="">
                                    <div className="flex ">
                                        <div className="text-sm w-2/3 truncate">{i.sender}와의 대화</div>
                                        <div className="text-gray-400 text-xs w-1/3">{i.modDate}</div>
                                    </div>
                                    {/* <div>
                                        <div className="text-xs row-span-2 text-gray-400 truncate">{i.content}</div>
                                    </div> */}
                                </div>
                            } />
                        </button>
                        )}
                </div>

                : <div></div>}
        </div >
    )
}
export default ChatRoom;