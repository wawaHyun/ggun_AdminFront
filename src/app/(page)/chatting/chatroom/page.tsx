
'use client'

import Image from "next/image";
import { useState } from "react";
import { WhiteBox } from "@/app/common/box/whiteBox";
import Link from "next/link";

function ChatRoom() {
    const [isOpen, setIsOpen] = useState(false);

    const myname = 1111;

    // const roomlist = async () => {
    //     const res = await 
    // }

    return (
        <div className="w-full h-full">
            <button className="fixed right-3 bottom-3" onClick={() => setIsOpen(!isOpen)}>
                <Image src="/imgs/chatroom.png" width="50" height="50" alt="채팅빙 목록" priority/>
                <span className="bg-red-500 h-4 w-4 rounded-full text-xs text-white absolute top-0 right-0">{roomlist.length}</span>
            </button>

            {isOpen == true ?
                <div className="absolute bottom-[5%] right-[70px] w-[20%] min-w-[300px] h-auto border-gray-300 border overflow-auto bg-white shadow-lg rounded-lg p-3">
                        {roomlist.map((i: any) =>
                        <Link key={i.id} className="flex-col py-1 w-full text-left" href={`/chatting/${i.senderId}`}>
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
                        </Link>
                        )}
                </div>

                : <div></div>}
        </div >
    )
}
export default ChatRoom;