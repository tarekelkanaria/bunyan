import "./App.css";
import DashBoard from "pages/DashBoard/DashBoard";
import Status from "pages/DashBoard/Status/Status";
import Projects from "pages/DashBoard/Projects/Projects";
import Users from "pages/DashBoard/Users/Users";
import { createBrowserRouter, RouterProvider } from "react-router";
import TableDashBoard from "components/UI/TableDashBoard/TableDashBoard";
import FormDashboard from "components/UI/FormDashboard/FormDashboard";
import Developers from "pages/DashBoard/Developers/Developers";
import Layout from "pages/Layout/Layout";
import NotFound from "pages/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
        children: [
          {
            index: true,
            element: <Status />,
          },
          {
            path: "/users",
            element: <Users />,
            children: [
              {
                index: true,
                element: <TableDashBoard />,
              },
              {
                path: "add",
                element: <FormDashboard path="users" />,
              },
            ],
          },
          {
            path: "/projects",
            element: <Projects />,
            children: [
              {
                index: true,
                element: <TableDashBoard />,
              },
              {
                path: "add",
                element: <FormDashboard path="projects" />,
              },
            ],
          },
          {
            path: "/developers",
            element: <Developers />,
            children: [
              {
                index: true,
                element: <TableDashBoard />,
              },
              {
                path: "add",
                element: <FormDashboard path="developers" />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
