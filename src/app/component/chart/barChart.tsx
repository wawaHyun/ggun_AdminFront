import { useRef, useEffect, MutableRefObject } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2'
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
Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

function BarChart() {

    // const allNps: INps[] = useSelector(getAllNps)
    // const dispatch = useDispatch()

    const color =[
        {name:"red", color:"#433E49", value: "300"},
        {name:"green", color:"#928490",value: "200"},
        {name:"blue", color:"#DBC1AD", value: "500"},
        {name:"yellow", color:"#F3E8EB", value: "200"},
        {name:"purple", color:"#872642", value: "100"},
    ]

    const color2 = [
        { name: "red", color: "#433E49", value: "220" },
        { name: "green", color: "#928490", value: "330" },
        { name: "blue", color: "#DBC1AD", value: "240" },
        { name: "yellow", color: "#F3E8EB", value: "320" },
        { name: "purple", color: "#872642", value: "420" },
    ]


    const labels = color.map((i) => i.name)
    const data: any =
    {
        labels: labels,
        datasets: [
            {
                label: 'Allper',
                type:'line',
                data: color.map((i) => i.value),
                backgroundColor: color.map((i) => i.color),
                BorderColor : "#FAD693",
            },
            {
                label: 'two!!',
                type: 'bar',
                data: color2.map((i) => i.value),
                backgroundColor: color2.map((i) => i.color),
            },
        ],
    };


    const oprions: any = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                beginAtZero: true
            },
        },
    }


    // useEffect(() => {
    //     dispatch(fetchTop10Nps())
    //         .then((res: any) => {
    //             console.log("res : " + JSON.stringify(res))
    //         })
    // }, []);

    return (
        <Bar data={data} options={oprions} className='w-full'></Bar>
    );
}
export default BarChart;
