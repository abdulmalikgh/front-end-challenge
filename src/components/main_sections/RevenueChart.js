import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = ['', '', '', '', '', '', ''];
  export const options = {
    // responsive: true,
    scaleShowVerticalLines: false,
    plugins: {
        scaleShowVerticalLines: false,
        legend: {
            position:false,
        },
    },
  };
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [21,15,8,29,21,8,19],
        backgroundColor: '#ff8433',
      },
    ],
  };
export default function RevenueChart() {
    return (
        <div className="graph">
            <Bar strokeWidth='0' width="100%" height="22px" options={options} data={data} />
        </div>
    )
}
