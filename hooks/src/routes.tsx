import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DemoRenderCount from "./pages/DemoRenderCount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/renderCount",
    element: <DemoRenderCount />,
  },
]);

export default router;
