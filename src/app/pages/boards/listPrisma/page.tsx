'use client'

import { IBoardtype } from "@/app/api/board/model/board-model";
import { AllBoardList, UpdateBoard } from "@/app/api/board/route";
import CardButton from "@/app/atoms/button/CardButton"
import PinkButton from "@/app/atoms/button/PinkButton";
import {  ListIcon } from "@/app/atoms/icons/icons";
import { PG } from "@/app/component/common/enums/PG";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export default function Boardcards() {

    const [inputValue, setInputValue] = useState<IBoardtype>({ id: 0, title: '', description: '' });
    const [boardlist, setBoardList] = useState<IBoardtype[]>([])
    const router = useRouter();


    const handleInput = (e: any) => {
        const {
            target: { value, name }
        } = e;
        setInputValue(dto => ({ ...dto, [name]: value }));
        console.log(inputValue)
    };


    const AllBoardlist = async () => {
        try {
            const response: IBoardtype[] = await AllBoardList();
            setBoardList(response)
        }
        catch (error) {
            console.log(error)
        }
    }

    const update = async () => {
        try {
            const response: IBoardtype = await UpdateBoard(inputValue);
            console.log("handleUpdate : " + response)
        }
        catch (error) {
            console.log("handleUpdate : " + error)
        }
    }

    const handleUpdate = (data: IBoardtype) => {
        console.log("update 진입 : " + JSON.stringify(data));
        update()
        router.refresh()
    }

    useEffect(() => {
        AllBoardlist()
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
            <PinkButton text="게시판 관리" path={() => router.push(`${PG.BOARD}/savePrisma`)} />
        </div>

        <div className="flex flex-row ml-5 gap-5 items-center justify-center text-center mb-5 ">
            {boardlist && boardlist.map((elem: IBoardtype, i:number) => (
                <div key={elem.id} className="w-screen text-center mb-5">
                    <CardButton id={elem.id} title={elem.title||undefined} 
                        description={elem.description||undefined} img={<ListIcon />} />
                </div>
            ))}
        </div>

    </>)
}

