'use client'

import { BaseBox } from "@/app/atoms/form/boxForm";
import Demo1 from "@/app/component/jusik/modul/demo1";
import Demo2 from "@/app/component/jusik/modul/demo2";
import TableDemo from "@/app/component/jusik/modul/tableDemo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function NewsPage() {

    const dispatch = useDispatch()


    return (
        <div className="w-screen h-screen">

            <div className="w-full h-1/2 flex gap-5 mb-7 ">
                <div className='flex justify-center w-1/2 '>
                    <BaseBox content={ <Demo2 />}/>
                </div>
                <div className='flex justify-center w-1/2'>
                    <BaseBox content={ <TableDemo />}/>
                </div>
            </div>
            <div className="w-full h-1/2 flex gap-5 mb-7 ">
                <div className='flex justify-center w-1/2 '>
                    <BaseBox content={ <TableDemo />}/>
                </div>
                <div className='flex justify-center w-1/2'>
                    <BaseBox content={ <Demo2 />}/>
                </div>
            </div>
        </div>
    )
}