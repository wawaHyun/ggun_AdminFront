'use client'

import BarChart from "@/app/component/jusik/modul/barChart";
import DoubelBarChart from "@/app/component/jusik/modul/doubelBarChart";
import DoughnutChart from "@/app/component/jusik/modul/doughnutChart";
import PolarChart from "@/app/component/jusik/modul/polarChart";
import RadarChart from "@/app/component/jusik/modul/radarChart";
import { BaseBox } from "@/atoms/form/boxForm";

function TypeOfChart() {

    return (
        <div className="w-screen h-screen">
            {/* <div className="w-full backdrop-blur-sm border rounded-lg bold sticky top-12 mb-3 text-center h-[40px]">일별 접속자수</div> */}
            <div className="w-full h-1/2 flex gap-5 mb-7 ">
                <div className='flex justify-center w-1/2 '>
                    <BaseBox content={<BarChart />} />
                </div>
                <div className='flex justify-center w-1/2'>
                    <BaseBox content={<DoughnutChart />} />

                </div>
            </div>
            <div className="w-full backdrop-blur-sm border rounded-lg bold sticky top-12 mb-3 text-center h-[40px]">일별 매도거래량</div>
            <div className="w-full h-1/2 flex gap-5 mb-7 ">
                <div className='flex justify-center w-1/2 '>
                    <BaseBox content={<DoubelBarChart />} />
                </div>
                <div className='flex justify-center w-1/2'>
                    <BaseBox content={<PolarChart />} />
                </div>
            </div>
            <div className="w-full backdrop-blur-sm border rounded-lg bold sticky top-12 mb-3 text-center h-[40px]">일별 매도거래량</div>
            <div className="w-full h-1/2 flex gap-5 mb-7 ">
                <div className='flex justify-center w-1/2 '>
                    <BaseBox content={<RadarChart />} />
                </div>
                <div className='flex justify-center w-1/2'>
                    <BaseBox content={<BarChart />} />
                </div>
            </div>
        </div>
    )
}

export default TypeOfChart;