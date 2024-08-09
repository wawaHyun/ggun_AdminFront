
import { Radar } from 'react-chartjs-2'
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

function RadarChart() {

    const color = [
        { name: "red", color: "#FF85A5", value: "300" },
        { name: "green", color: "#82C293", value: "200" },
        { name: "blue", color: "#002379", value: "500" },
        { name: "yellow", color: "#FAD693", value: "200" },
        { name: "purple", color: "#655C9E", value: "100" },
    ]


    const color2 = [
        { name: "red", color: "#FF85A5", value: "220" },
        { name: "green", color: "#82C293", value: "330" },
        { name: "blue", color: "#002379", value: "240" },
        { name: "yellow", color: "#FAD693", value: "320" },
        { name: "purple", color: "#655C9E", value: "420" },
    ]


    const data: any =
    {
        labels: color.map((i) => i.name),
        datasets: [
            {
                data: color.map((i) => i.value),
                label: "red",
                backgroundColor: color.map((i) => i.color),
                fill: false,
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            },
            {
                data: color2.map((i) => i.value),
                label: "green",
                backgroundColor: color2.map((i) => i.color),
                fill: true,
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'

            },
        ],
    };


    const options: any = {
        elements: {
            line: {
                borderWidth: 1
            }

        },
    }


    return (
        <Radar data={data} options={options} ></Radar>
    );
}
export default RadarChart;
