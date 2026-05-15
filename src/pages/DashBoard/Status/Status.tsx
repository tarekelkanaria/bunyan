import { DevChart } from "components/Dash/DevChart/DevChart";
import { ProjectsChart } from "components/Dash/ProjectsChart/ProjectsChart";
import Stats from "components/Dash/Stats/Stats";
import Title from "components/UI/Title/Title";

export default function Status() {
  return (
    <>
      <Title content="DASHBOARD" />
      <Stats />
      <section className="flex justify-between items-center mb-10 px-2">
        <DevChart />
        <ProjectsChart />
      </section>
    </>
  );
}
