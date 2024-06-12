'use client'


import { INps } from "@/app/component/jusik/model/jusik.model";
import Chart2 from "@/app/component/jusik/modul/demo2";
import Mychart from "@/app/component/jusik/modul/demo1";
import { fetchAllNps, fetchTop10Nps } from "@/app/component/jusik/service/jusik.service";
import { getAllNps } from "@/app/component/jusik/service/jusik.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function NewsPage() {

    const dispatch = useDispatch()
    // const allNps: INps[] = useSelector(getAllNps)

    // // const paramsData = (allNps: any) => [
    // //     { stock: allNps.stock }
    // // ]

    // useEffect(() => {
    //     dispatch(fetchTop10Nps())
    //         .then((res: any) => {
    //             // console.log("res : "+JSON.stringify(res))
    //             allNps.map((i: any) => {
    //                 console.log("JSON.stringify(i): " + i)
    //             })
    //         })
    //         .catch((error: any) => {
    //             console.log("allNps err : " + error)
    //         })
    //     allNps.map((i: any) => {
    //         console.log("JSON.stringify(i): " + i)
    //     })
    // }, [])

    return (
        <div>
            <div className='flex justify-center w-screen h-screen'>
                {/* <Mychart nps={allNps} /> */}
                <Chart2/>
            </div>

            {/* <div className='flex justify-center w-screen h-screen'>
                <button onClick={()=>paramsData(allNps)}>zmffjrdmt </button>
            </div> */}

            {/* <div>
                <ul>
                    {allNps.map((i: any) => (
                        <li key={i.id}>솔라{i.stock}</li>
                    ))}
                </ul>
            </div> */}
        </div>
    )
}