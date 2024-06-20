'use client'

import BarChart from "@/app/component/jusik/modul/barChart";
import DoughnutChart from "@/app/component/jusik/modul/doughnutChart";
import PolarChart from "@/app/component/jusik/modul/polarChart";
import TableDemo from "@/app/component/jusik/modul/tableDemo";
import { BaseBox } from "@/atoms/form/boxForm";
import Calendar from "@/app/common/module/calender";


export default function ChargingStationSharp() {
    return (
        <div className="w-screen h-screen flex justify-center">
            <div className="w-[80%] content-center text-center">
                <div className="grid grid-cols-4 gap-3 ">
                    <div className="bg-pebble-100 text-white rounded-lg">
                        <p>88.9%</p>
                        <p>오늘의 접속량</p>
                    </div>
                    <div className="bg-pebble-200 text-white rounded-lg">
                        <p>39,323</p>
                        <p>오늘의 접속자</p>
                    </div>
                    <div className="bg-pebble-300 rounded-lg">
                        <p>40,567</p>
                        <p>오늘의 매수량</p>
                    </div>
                    <div className="bg-pebble-400 rounded-lg">
                        <p>31,567</p>
                        <p>오늘의 매도량</p>
                    </div>
                    <div className=""><BaseBox content={
                        <div className="w-[100%] flex-col">
                            <p>일별 접속자수 </p>
                                <TableDemo />
                        </div>

                    } /></div>
                    <div className=""><BaseBox content={<PolarChart />} /></div>
                    <div className=""><BaseBox content={<DoughnutChart />} /></div>
                    <div className=""><BaseBox content={<Calendar />} /></div>

                    <div className="grid col-span-2"><BaseBox content={<BarChart />} /></div>
                    <div className="grid col-span-2"><BaseBox content={<BarChart />} /></div>
                </div>
            </div>
        </div>
    )
}