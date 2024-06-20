'use client'

import { IBoard } from "@/app/component/boards/model/board.model";
import { fetchAllBoards } from "@/app/component/boards/service/board.service";
import { getAllBoards } from "@/app/component/boards/service/board.slice";
import CardButton from "@/atoms/button/CardButton";
import { PinkButton } from "@/atoms/button/PinkButton";
import { PG } from "@/app/common/enums/PG";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListIcon } from "../../../../public/icons/icons";
import { AllBoards } from "@/app/api/board/route";



export default function Boardcards() {

    const router = useRouter();
    const dispatch = useDispatch()
    const boards: IBoard[] = useSelector(getAllBoards)

    useEffect(() => {
        dispatch(fetchAllBoards())
    }, [])

    return (
       <div className="flex flex-row ml-5 gap-5 items-center justify-center text-center mb-5 ">
            {boards && boards.map((elem:IBoard, i:number) => (
                <div key={elem.id} className="w-screen text-center mb-5">
                    <CardButton id={elem.id} title={elem.title||undefined} 
                        description={elem.description||undefined} img={<ListIcon />} />
                </div>
            ))}
        </div>
    )
}

