import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

const values = [42.5, 45, 12.5];

const options = {
  cutout: "70%",
  rotation: 300,
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
const data = {
  labels: ["proj1", "proj2", "proj3"],
  datasets: [
    {
      label: "# of projects",
      data: values,
      backgroundColor: ["#4FB7B3", "#102E50", "#6EC1E4"],
    },
  ],
};

export function ProjectsChart() {
  return (
    <article className="max-w-[45%]">
      <Doughnut data={data} options={options} className="mb-5" />
      <h3 className="text-3xl font-cairo font-bold text-black text-center">
        Projects
      </h3>
    </article>
  );
}
