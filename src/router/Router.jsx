import MainLayout from "@/layout/MainLayout";
import { createBrowserRouter } from "react-router";
const Router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
  },
]);

export default Router;