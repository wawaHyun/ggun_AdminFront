'use client'

import { INps } from "@/app/component/jusik/model/jusik.model";
import Mychart from "@/app/component/jusik/modul/mychart";
import { fetchAllNps } from "@/app/component/jusik/service/jusik.service";
import { getAllNps } from "@/app/component/jusik/service/jusik.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function NewsPage() {

    const dispatch = useDispatch()
    const allNps: INps = useSelector(getAllNps)

    const paramsData = (allNps: any) => [
        { stock: allNps.stock }
    ]

    useEffect(() => {
        dispatch(fetchAllNps())
            .then((res: any) => {
                console.log(JSON.stringify(res))
            })
    }, [])

    return (
        <div>
            <div className='flex justify-center w-screen h-screen'>
                {/* <Mychart nps={allNps} /> */}
            </div>

            <div className='flex justify-center w-screen h-screen'>
                <button onClick={()=>paramsData(allNps)}>zmffjrdmt </button>
            </div>
        </div>
    )
}