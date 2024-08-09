'use client'
import Image from "next/image";
import { useState } from "react";
import { WhiteBox } from "../../common/box/whiteBox";
import { qnaDummy } from "@/app/common/dummy/article.dummy";

function Alarm() {
    const [isOpen, setIsOpen] = useState(false);

    const articles = qnaDummy;

    return (
        <div className="h-full">
            <button className="fixed right-3 top-3" onClick={() => setIsOpen(!isOpen)}>
                <Image src="/imgs/bell.png" width="50" height="50" alt="알람이 왔습니다!" priority />
                <span className="bg-red-500 h-4 w-4 rounded-full text-xs text-white absolute top-1 right-1">{articles.length}</span>
            </button>

            {isOpen == true ?
                <div className="absolute top-3 right-[65px] min-w-[300px] w-[20%]  h-[80%] border-gray-300 border overflow-auto bg-white shadow-lg rounded-lg p-3">
                    {articles.map((v: IArticle, i: number) =>
                        <div key={v.id} className="flex-col py-1 ">
                            <WhiteBox style="white hover:bg-gray-100">
                                <div>
                                    <div className="flex">
                                        <div className="text-sm w-2/3 truncate">{v.title}</div>
                                        <div className="text-gray-300 text-xs w-1/3">{v.modDate}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs row-span-2 text-gray-300 truncate">{v.content}</div>
                                    </div>
                                </div>
                            </WhiteBox>
                        </div>
                    )}
                </div>
                : <div></div>}
        </div >
    )
}
export default Alarm;