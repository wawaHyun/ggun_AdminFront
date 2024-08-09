import { Doughnut } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    elements,
    ArcElement,
    ChartOptions,
} from 'chart.js';
import Chart from 'chart.js/auto';;

Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement);

export default function HalfDoughnutChart() {

    const color = [
        { name: "red", color: "#FF85A5", value: "300", data: 1300 },
        { name: "green", color: "#82C293", value: "200", data: 200 },
        { name: "blue", color: "#002379", value: "500", data: 500 },
        { name: "yellow", color: "#FAD693", value: "200", data: 200 },
        { name: "purple", color: "#655C9E", value: "100", data: 100 },
    ]

    const data: any = {
        labels: color.map((i) => i.name),
        datasets: [{
            label: '',
            data: color.map((i) => i.data),
            backgroundColor: color.map((i) => i.color),
            hoverOffset: 4
        }]
    };

    const doughnutLabel: any = {
        id: 'doughnutLabel',
        afterDatasetsDraw(chart: Chart<'doughnut'>, args: any, plugins: any) {
            const { ctx, data } = chart;
            
            if (!data.labels || !data.datasets[0].data) {
                return;
            }
            const xCenter = chart.getDatasetMeta(0).data[0].x;
            const yCenter = chart.getDatasetMeta(0).data[0].y;

            ctx.save();
            ctx.font = '60px bold sans-serif'; // 올바른 폰트 설정
            ctx.fillStyle = 'black'; // 올바른 fillStyle 설정
            ctx.textAlign = 'center'; // 올바른 textAlign 설정
            ctx.textBaseline = 'middle';
            ctx.fillText('test', xCenter, yCenter);
            // ctx.relends = false;
            // ctx.fillText(`${data.labels[0]} : ${data.datasets[0].data[0]}`, xCoor, yCoor);
            // ctx.restore(); // 상태 복원을 잊지 마세요.
        } 
    }

    const options: ChartOptions<'doughnut'> = {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        // responsive: true,
        plugins: 
            doughnutLabel
        ,
        // rotation: -90,
        // circumference: 180,
    }

    return (
        <Doughnut data={data} options={doughnutLabel}></Doughnut>
    );
}
