
import Image from "next/image";
import { useState } from "react";
import { BaseBox } from "@/atoms/form/boxForm";


function ChatRoom() {
    const [isOpen, setIsOpen] = useState(false);

    const roomlist = [
        {id:1}
    ]

    const yourname = "김대리"


    return (
        <div className="w-full h-full">
            <button className="fixed right-3 bottom-3" onClick={() => setIsOpen(!isOpen)}>
                <Image src="/imgs/chatroom.png" width="50" height="50" alt="채팅빙 목록" />
                <span className="bg-red-500 h-4 w-4 rounded-full w-auto text-xs text-white absolute top-0 right-1">{roomlist.length}</span>
            </button>

            {isOpen == true ?
                <div className="absolute top-3 right-[65px] w-full h-[80%] border-gray-300 border overflow-auto bg-white shadow-lg rounded-lg p-3">
                        {roomlist.map((i: any) =>
                        <div key={i.id} className="flex-col py-1 ">
                            <BaseBox content={
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
export default ChatRoom;