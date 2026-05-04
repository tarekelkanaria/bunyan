import Header from "components/Layout/Header/Header";
import Footer from "components/Layout/Footer/Footer";
import { DevChart } from "./DevChart/DevChart";
import { ProjectsChart } from "./ProjectsChart/ProjectsChart";
import Stats from "./Stats/Stats";
import Title from "./Title/Title";
import Sidebar from "./Sidebar/Sidebar";

export default function Dash() {
  return (
    <>
      <Header />
      <div className="container flex">
        <Sidebar />
        <main className="bg-white grow">
          <Title />
          <Stats />
          <section className="flex justify-between items-center mb-10 px-2">
            <DevChart />
            <ProjectsChart />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
