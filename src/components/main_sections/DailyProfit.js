
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill : true,
    plugins: {
      legend: {
        display:false,
        position: "top",
        align: "center",
        abels: {
            font: {
                size: 9
            }
        }
      },
      title: {
        display: false,
      }
    },
    scales: {
        x: {
            display: true,
            title: {
                display: false,
                text: 'Month'
            },
            ticks: {
                    fontFamily: "",
                    beginAtZero:true,
                    fontColor: '#9EA0A5',
                    fontSize:9,
                    padding: 10
            },
        },
        y: {
          display: true,
          beginAtZero: true,
          position: 'right',
          title: {
            display: false,
            text: 'Value'
          }
        },
    }
  };
  
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function DailyProfit({color,bgColor}) {
    const data = {
        labels,
        datasets: [
        {
            label: "",
            data: [115,78,93,132,108,62,84],
            fill: true,
            borderColor: color,
            backgroundColor: bgColor,
            tension:0,
            lineWidth:1
        }
        ],
      };
    return <Line options={options} data={data} />;
}
