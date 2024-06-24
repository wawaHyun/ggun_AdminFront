'use client'

import { PG } from "../../common/enums/PG";
import Link from "next/link";
import { MoveButton } from "./MoveButton";
import { useRouter } from "next/navigation";

interface ICardButton {
    id: number,
    title?: string ,
    description?: string ,
    img? : any
}

export default function CardButton({ id, title, description, img }: ICardButton) {

    const router = useRouter()
    return (
        <div key={id} className="max-w-sm bg-white-500 border items-center border-gray-200 rounded-lg shadow ">
            <Link href={`${PG.ARTICLE}/list/${id}`}>
                <div className="flex justify-center mt-5">
                    {img}
                </div>
            </Link>
            <div className="p-5 border">
                <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        {title}
                    </h5>
                </Link>
                <div className="mb-3 font-normal text-gray-700 ">
                    {description}
                </div>
                <div className="h-[35px]">
                <MoveButton text={title +" Read more"} path={()=>router.push(`${PG.ARTICLE}/list/${id}`)}/>
                </div>
            </div>
        </div>  
    )
}