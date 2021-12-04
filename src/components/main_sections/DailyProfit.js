
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
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display:false,
        position: "top",
        align: "center",
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
                fontSize: 20,
                padding: 15
        },
        },
        y: {
          display: true,
          position: 'right',
          title: {
            display: false,
            text: 'Value'
          }
        },
    }
  };
  
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  export const data = {
    labels,
    datasets: [
      {
        fill: 'origin',
        data:[10,12,12,23,23,45,23],
        borderColor: '#FF8433',
        backgroundColor: '#FF8433',
      }
    ],
  };
  
export default function DailyProfit() {
    return <Line options={options} data={data} />;
}
