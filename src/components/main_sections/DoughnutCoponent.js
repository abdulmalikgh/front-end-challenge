import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scaleShowVerticalLines: false,
  plugins: {
      scaleShowVerticalLines: false,
      legend: {
          position:false,
          display:false
      },
  },

};
export default function DoughnutCoponent({ colors, passedData }) {
  const data = {
    labels: colors,
    datasets: [
      {
        label: 'Total Sales',
        display: false,
        data: passedData,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };
    return (
        <div className="__dougnut">
           <Doughnut data={data}  options={options}/>
        </div>
    )
}
