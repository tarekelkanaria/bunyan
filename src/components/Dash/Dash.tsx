import Header from "components/Layout/Header/Header";
import Footer from "components/Layout/Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router";
import { useState } from "react";

export default function Dash() {
  const [isDrafting, setIsDrafting] = useState({
    users: false,
    projects: false,
    developers: false,
  });

  return (
    <>
      <Header />
      <div className="container flex">
        <Sidebar isDrafting={isDrafting} />
        <main className="bg-white grow">
          <Outlet context={[isDrafting, setIsDrafting]} />
        </main>
      </div>
      <Footer />
    </>
  );
}
