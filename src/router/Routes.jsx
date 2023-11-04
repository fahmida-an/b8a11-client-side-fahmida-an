import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root"
import Home from "../layout/home/Home";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
    ],
  },
]);

export default router;
