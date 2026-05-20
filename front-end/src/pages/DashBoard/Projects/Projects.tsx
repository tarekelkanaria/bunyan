import DashboardBtn from "components/UI/DashboardBtn/DashboardBtn";
import Title from "components/UI/Title/Title";
import { Outlet, useOutletContext } from "react-router";

export default function Projects() {
  const context = useOutletContext();
  return (
    <>
      <Title content="Projects" />
      <DashboardBtn roleType="Project" />
      <Outlet context={context} />
    </>
  );
}
