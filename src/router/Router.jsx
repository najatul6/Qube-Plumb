import ErrorLayout from "@/layout/ErrorLayout";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
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
  {
    path:'*',
    Component:ErrorLayout,
    children:[
      {
        path:"*",
        Component:NotFound,
      }
    ]
  }
]);

export default Router;