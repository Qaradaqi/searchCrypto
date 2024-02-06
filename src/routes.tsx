import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
}
