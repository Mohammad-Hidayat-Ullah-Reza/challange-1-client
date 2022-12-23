import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Page/HomePage/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(`https://interview-challange-1-server.vercel.app/sectors`),
      },
    ],
  },
]);
