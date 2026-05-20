import DashboardBtn from "components/UI/DashboardBtn/DashboardBtn";
import Title from "components/UI/Title/Title";
import { Outlet, useOutletContext } from "react-router";

export default function Developers() {
  const context = useOutletContext();
  return (
    <>
      <Title content="Developers" />
      <DashboardBtn roleType="Developer" />
      <Outlet context={context} />
    </>
  );
}
