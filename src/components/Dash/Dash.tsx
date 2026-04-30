import Header from "components/Layout/Header/Header";
import Footer from "components/Layout/Footer/Footer";
import { DevChart } from "./DevChart/DevChart";
import { ProjectsChart } from "./ProjectsChart/ProjectsChart";
import Stats from "./Stats/Stats";
import Title from "./Title/Title";

export default function Dash() {
  return (
    <>
      <Header />
      <main className="container bg-white">
        <Title />
        <Stats />
        <section className="flex justify-between items-center mb-10">
          <DevChart />
          <ProjectsChart />
        </section>
      </main>
      <Footer />
    </>
  );
}
