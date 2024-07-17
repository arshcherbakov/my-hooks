import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DemuUsePrev from "./pages/DemuUsePrev";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/prev",
    element: <DemuUsePrev />,
  },
]);

export default router;
