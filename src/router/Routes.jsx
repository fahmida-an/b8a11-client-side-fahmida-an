import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root"
import Home from "../layout/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import AddService from "../service/AddService";

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
      }
    ],
  },
]);

export default router;
