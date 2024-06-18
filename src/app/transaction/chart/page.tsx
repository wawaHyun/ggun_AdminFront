'use client'

import { BaseBox } from "@/app/atoms/form/boxForm";
import BarChart from "@/app/component/jusik/modul/barChart";
import TableDemo from "@/app/component/jusik/modul/tableDemo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function NewsPage() {

    const dispatch = useDispatch()


    return (
        <div className="w-screen h-screen">

            <div className="w-full h-1/2 flex gap-5 mb-7 ">
                <div className='flex justify-center w-1/2 '>
                    <BaseBox content={ <BarChart />}/>
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
                    <BaseBox content={ <BarChart />}/>
                </div>
            </div>
        </div>
    )
}