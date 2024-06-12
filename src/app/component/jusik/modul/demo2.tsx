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
import { INps } from '../model/jusik.model';
import { getAllNps } from '../service/jusik.slice';
import { useSelector } from 'react-redux';
import { fetchTop10Nps } from '../service/jusik.service';
import { useDispatch } from 'react-redux';
Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);

function Demo2() {

    const allNps: INps[] = useSelector(getAllNps)
    const dispatch = useDispatch()

    const data: any =
    {
        labels: allNps.map((i) => i.stock),
        datasets: [
            {
                label: 'Allper',
                type: 'line',
                data: allNps.map((i) => i.valuation),
                backgroundColor: 'rgb(54, 162, 235)',
            },
            {
                label: 'two!!',
                type: 'line',
                data: ["150000", 450000, 140000, 160000, 110000],
                backgroundColor: 'blue',
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
            }
        }
    }


    useEffect(() => {
        dispatch(fetchTop10Nps())
            .then((res: any) => {
                console.log("res : " + JSON.stringify(res))
            })
    }, []);

    return (

        <Line data={data} options={oprions}></Line>
    );
}
export default Demo2;
