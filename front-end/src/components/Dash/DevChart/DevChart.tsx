import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const options = {
  // responsive: true,
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      min: 0,
      max: 600,
      ticks: {
        stepSize: 150,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const labels = ["dev1", "dev2", "dev3", "dev4", "dev5"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [300, 325, 275, 275, 325],
      backgroundColor: "#102E50",
    },
    {
      label: "Dataset 2",
      data: [450, 275, 100, 300, 280],
      backgroundColor: "#4FB7B3",
    },
  ],
};

export function DevChart() {
  return (
    <article className="w-1/2 ">
      <Bar options={options} data={data} className="mb-5" />
      <h3 className="text-3xl font-cairo font-bold text-black text-center">
        Developers
      </h3>
    </article>
  );
}
