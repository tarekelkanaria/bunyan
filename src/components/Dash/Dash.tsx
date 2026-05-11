import Header from "components/Layout/Header/Header";
import Footer from "components/Layout/Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router";

export default function Dash() {
  return (
    <>
      <Header />
      <div className="container flex">
        <Sidebar />
        <main className="bg-white grow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
