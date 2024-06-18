import { useRef, useEffect, MutableRefObject } from 'react';
import { Bar, Doughnut, Line, PolarArea } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { NextPage } from 'next';

import Chart from 'chart.js/auto';
import { INps } from '../model/nps.model';
import { getAllNps } from '../service/transaction.slice';
import { useSelector } from 'react-redux';
import { fetchTop10Nps } from '../service/transaction.service';
import { useDispatch } from 'react-redux';
Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

function PolarChart() {

const color =[
    {name:"red", color:"#FF85A5", value: "300"},
    {name:"green", color:"#82C293",value: "200"},
    {name:"blue", color:"#002379", value: "500"},
    {name:"yellow", color:"#FAD693", value: "200"},
    {name:"purple", color:"#655C9E", value: "100"},
]

    const data: any =
    {
        labels: color.map((i) => i.name+"1"),
        datasets: [
            {
                // label: color.map((i)=>i.name="2"),
                data: color.map((i)=>i.value),
                backgroundColor: color.map((i)=>i.color),
            },
        ],
    };


    const oprions: any = {
        scales: {
  
        }
    }


    return (
        <PolarArea data={data} options={oprions}></PolarArea>
    );
}
export default PolarChart;
