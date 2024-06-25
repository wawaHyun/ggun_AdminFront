'use client'

import { BaseBox } from "@/app/component/box/boxFormat";
import BarChart from "@/app/component/chart/barChart";
import DoubelBarChart from "@/app/component/chart/doubelBarChart";
import DoughnutChart from "@/app/component/chart/doughnutChart";
import PolarChart from "@/app/component/chart/polarChart";
import RadarChart from "@/app/component/chart/radarChart";

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