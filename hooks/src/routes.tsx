import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DemoFerstMount from "./pages/Home/DemoFirstMount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ferstMount",
    element: <DemoFerstMount />,
  },
]);

export default router;
