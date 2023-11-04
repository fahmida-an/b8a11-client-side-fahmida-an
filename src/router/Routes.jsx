import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root"
import Home from "../layout/home/Home";
import Register from "../pages/register/Register";

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
      }
    ],
  },
]);

export default router;
