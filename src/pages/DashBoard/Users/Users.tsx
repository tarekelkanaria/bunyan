import DashboardBtn from "components/UI/DashboardBtn/DashboardBtn";

import Title from "components/UI/Title/Title";
import { useState } from "react";
import { Outlet } from "react-router";

export default function Users() {
  const [isDrafting, setIsDrafting] = useState(false);
  return (
    <>
      <Title content="Users" />
      <DashboardBtn path="add" />
      <Outlet context={[isDrafting, setIsDrafting]} />
    </>
  );
}
