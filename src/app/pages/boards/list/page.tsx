'use client'

import CardButton from "@/app/atoms/button/CardButton"
import {PinkButton} from "@/app/atoms/button/PinkButton";
import {  ListIcon } from "@/app/atoms/icons/icons";
import { IBoard } from "@/app/component/boards/model/board.model";
import { fetchAllBoards } from "@/app/component/boards/service/board.service";
import { getAllBoards } from "@/app/component/boards/service/board.slice";
import { PG } from "@/app/component/common/enums/PG";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function Boardcards() {

    const router = useRouter();
    const dispatch = useDispatch()
    const boards: IBoard[] = useSelector(getAllBoards)

    useEffect(() => {
        dispatch(fetchAllBoards())
    }, [])

    return (<>
        <div className="w-screen h-[20%] mb-5">
            <ul className="flex w-screen h-full">
                <li className="bg-[#9fc9ed] w-1/5 hover:w-2/5 transition-delay-150 duration-300 ease-in-out"></li>
                <li className="bg-[#0f3469] w-1/5 hover:w-2/5 transition-delay-150 duration-300 ease-in-out"></li>
                <li className="bg-[#3F72AF] w-1/5 hover:w-2/5 transition-delay-150 duration-300 ease-in-out"></li>
                <li className="bg-[#DBE2EF] w-1/5 hover:w-2/5 transition-delay-150 duration-300 ease-in-out"></li>
                <li className="bg-[#F9F7F7] w-1/5 hover:w-2/5 transition-delay-150 duration-300 ease-in-out"></li>
            </ul>
        </div>
        \
        <div className="w-screen text-center content-center  mb-5">
            <PinkButton text="게시판 추가" path={() => router.push(`${PG.BOARD}/save`)} />
        </div>

        <div className="flex flex-row ml-5 gap-5 items-center justify-center text-center mb-5 ">
            {boards && boards.map((elem:IBoard, i:number) => (
                <div key={elem.id} className="w-screen text-center mb-5">
                    <CardButton id={elem.id} title={elem.title||undefined} 
                        description={elem.description||undefined} img={<ListIcon />} />
                </div>
            ))}
        </div>

    </>)
}

