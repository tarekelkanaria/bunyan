import "./App.css";
import DashBoard from "pages/DashBoard/DashBoard";
import Status from "pages/DashBoard/Status/Status";
import Projects from "pages/DashBoard/Projects/Projects";
import Users from "pages/DashBoard/Users/Users";
import { createBrowserRouter, RouterProvider } from "react-router";

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
