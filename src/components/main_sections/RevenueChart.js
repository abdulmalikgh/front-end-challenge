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
    responsive: true,
    maintainAspectRatio: false,
    scaleShowVerticalLines: false,
    plugins: {
        scaleShowVerticalLines: false,
        legend: {
            position:false,
        },
    },
    scales: {
        x: {
          display: false,
          title: {
            display: false,
            text: 'Month'
          },
        },
        y: {
          display: false,
          position: 'right',
          title: {
            display: false,
            text: 'Value'
          }
        },
    }
  };
  export const data = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        display: false,
        data: [32,26,19,40,32,25,30],
        backgroundColor: '#ff8433',
        borderRadius: 2
      },
    ],
  };
export default function RevenueChart() {
    return (
        <div className="graph">
            <Bar  options={options} data={data} />
        </div>
    )
}
