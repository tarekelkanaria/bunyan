import DashboardBtn from "components/UI/DashboardBtn/DashboardBtn";

import Title from "components/UI/Title/Title";
import { Outlet, useOutletContext } from "react-router";

export default function Users() {
  const context = useOutletContext();
  return (
    <>
      <Title content="Users" />
      <DashboardBtn roleType="User" />
      <Outlet context={context} />
    </>
  );
}
