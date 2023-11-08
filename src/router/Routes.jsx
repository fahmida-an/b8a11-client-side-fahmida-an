import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root"
import Home from "../layout/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import AddService from "../service/AddService";
import AllServices from "../service/AllServices";
import ServiceDetails from "../service/ServiceDetails";
import CheckOut from "../pages/CheckOut/CheckOut";
import BookService from "../BookService/BookService";
import AllBookService from "../AllBookService/AllBookService";
import PrivateRoutes from "./PrivateRoutes";
import ManageAllService from "../service/ManageAllService";
import UpdateService from "../service/updateService";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>
      },
      {
        path: "/checkOut/:id",
        element: <CheckOut></CheckOut>
      },
      {
        path: "/bookServices",
        element: <PrivateRoutes><BookService></BookService></PrivateRoutes>
      },
      {
        path: "/manageServices",
        element: <PrivateRoutes><AllBookService></AllBookService></PrivateRoutes>
      },
      {
        path: "/manageAllServices",
        element: <PrivateRoutes><ManageAllService></ManageAllService></PrivateRoutes>
      },
      {
        path: "/services/update/:id",
        element: <PrivateRoutes><UpdateService></UpdateService></PrivateRoutes>
      }
    ],
  },
]);

export default router;
