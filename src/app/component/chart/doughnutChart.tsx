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
} from 'chart.js';
import Chart from 'chart.js/auto';;

Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

function DoughnutChart() {

    const color = [
        { name: "red", color: "#FF85A5", value: "300" },
        { name: "green", color: "#82C293", value: "200" },
        { name: "blue", color: "#002379", value: "500" },
        { name: "yellow", color: "#FAD693", value: "200" },
        { name: "purple", color: "#655C9E", value: "100" },
    ]

    const data: any = {
        labels: color.map((i) => i.name),
        datasets: [{
            label: '',
            data: color.map((i) => i.value),
            backgroundColor: color.map((i) => i.color),
            hoverOffset: 4
        }]
    };

    // const image = () => { { kaeru } }

    const options: any = {
        plugins: {
            title: {
                display: true,
                text: 'Custom Chart Title'
            },
            legend: {
                display:false,
              },
        }
    }


    // const plugin:any = {
    //     title : "Doughnut Chart!"
    //   id: 'customCanvasBackgroundImage',
    //   beforeDraw: (chart:any) => {
    //     if (!image.complete) {
    //       const ctx = chart.ctx;
    //       const {top, left, width, height} = chart.chartArea;
    //       const x = left + width / 2 - image.width / 2;
    //       const y = top + height / 2 - image.height / 2;
    //       ctx.drawImage(image, x, y);
    //     } else {
    //       image.onload = () => chart.draw();
    //     }
    //   }
    // };


    return (
        <Doughnut data={data} options={options}></Doughnut>
    );
}
export default DoughnutChart;
