
'use client'

import Image from "next/image";
import { useState } from "react";
import { WhiteBox } from "@/app/common/box/whiteBox";
import Link from "next/link";
import { chatDummy, chatRoomDummy } from "@/app/common/dummy/chat.dummy";
import ChatLayout from "@/app/component/layout/chatLayout";
import { AdminIcon } from "@/app/common/icons/adminIcon";

function ChatRoom() {
    const [isOpen, setIsOpen] = useState(false);

    const myid = 1111;

    
    return (
        <div className="w-full h-full">
            <button className="fixed right-3 bottom-3" onClick={() => setIsOpen(!isOpen)}>
                <Image src="/imgs/chatroom.png" width="50" height="50" alt="채팅빙 목록" priority />
                <span className="bg-red-500 h-4 w-4 rounded-full text-xs text-white absolute top-0 right-0">{chatRoomDummy.length}</span>
            </button>

            {isOpen == true ?
                <ChatLayout>
                    {/* {chatRoomDummy.map((i: any) =>
                        <div className="py-1">
                            <Link key={i.id} className="w-full text-left" href={`/chatting/${i.senderId}`}>
                                <WhiteBox style="white hover:bg-pebble-400 grid grid-cols-3" >
                                    <div className="text-sm truncate col-span-2">{i.sender}와의 대화</div>
                                    <div className="text-gray-400 text-xs text-right">{i.modDate}</div>
                                    <div className="text-xs row-span-2 text-gray-400 truncate col-span-3">{i.content}</div>
                                </WhiteBox>
                            </Link>
                        </div>
                    )} */}

                    {chatDummy.map((i: any) =>
                        i.roomid == myid ?
                            <div key={i.id} className="w-full flex justify-end ">
                                <div className="mx-2 content-end text-gray-300">{i.time}</div>
                                <div className="border shadow-md rounded-lg text-pretty flex items-center my-3 max-w-[45%] p-2 bg-white ">
                                    {i.text}
                                </div>
                            </div>
                            :
                            <div key={i.id} className="flex w-full">
                                <div className="w-[50px] h-[40px]"> <AdminIcon color="#433E49" /></div>
                                <div className="border shadow-md rounded-lg text-pretty flex items-center my-3 max-w-[45%] p-2 bg-pebble-400">
                                    {i.text}
                                </div>
                                <div className="mx-2 content-end text-gray-300">{i.time}</div>
                            </div>
                    )}
                <div className="h-[50px] w-full">
                    <input type="text" placeholder="enter the text" className="h-[40px]" />
                </div>

                </ChatLayout>

                : <div></div>}
        </div >
    )
}
export default ChatRoom;