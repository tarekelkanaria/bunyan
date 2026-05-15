import "./App.css";
import DashBoard from "pages/DashBoard/DashBoard";
import Status from "pages/DashBoard/Status/Status";
import Projects from "pages/DashBoard/Projects/Projects";
import Users from "pages/DashBoard/Users/Users";
import { createBrowserRouter, RouterProvider } from "react-router";
import TableDashBoard from "components/UI/TableDashBoard/TableDashBoard";
import FormDashboard from "components/UI/FormDashboard/FormDashboard";

const routes = createBrowserRouter([
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
            element: <FormDashboard />,
          },
        ],
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
