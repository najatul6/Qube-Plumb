import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";
const Router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children: [
      // Define child routes here
      {
      path: "/",
      Component:Home
      }
    ]
  },
]);

export default Router;