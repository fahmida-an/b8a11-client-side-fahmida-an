import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root"
import Home from "../layout/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import AddService from "../service/AddService";
import AllServices from "../service/AllServices";
import ServiceDetails from "../service/ServiceDetails";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/addServices",
        element: <AddService></AddService>
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>
      }
    ],
  },
]);

export default router;
