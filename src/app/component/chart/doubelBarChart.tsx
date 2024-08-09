
import { Bar } from 'react-chartjs-2'
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

import Chart from 'chart.js/auto';

Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

function DoubelBarChart() {

    const color =[
        {name:"red", color:"#FF85A5", value: "300"},
        {name:"green", color:"#82C293",value: "200"},
        {name:"blue", color:"#002379", value: "500"},
        {name:"yellow", color:"#FAD693", value: "200"},
        {name:"purple", color:"#655C9E", value: "100"},
    ]

    const color2 = [
        { name: "red", color: "#FF85A5", value: "220" },
        { name: "green", color: "#82C293", value: "330" },
        { name: "blue", color: "#002379", value: "240" },
        { name: "yellow", color: "#FAD693", value: "320" },
        { name: "purple", color: "#655C9E", value: "420" },
    ]


    const labels = color.map((i) => i.name)
    const data: any =
    {
        labels: labels,
        datasets: [
            {
                label: 'Allper',
                type:'bar',
                data: color.map((i) => i.value),
                backgroundColor: color.map((i) => i.color),
                BorderColor : "#FAD693",
            },
            {
                label: 'two!!',
                type: 'bar',
                data: color2.map((i) => i.value),
                backgroundColor: color2.map((i) => i.color),
                BorderColor : "#82C293",
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

    return (
        <Bar data={data} options={oprions}></Bar>
    );
}
export default DoubelBarChart;
