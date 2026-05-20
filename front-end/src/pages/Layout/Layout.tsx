import Footer from "components/Layout/Footer/Footer";
import Header from "components/Layout/Header/Header";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
