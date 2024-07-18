import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ExampleDebounced from "./pages/ExampleDebounced";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExampleDebounced />,
  },
]);

export default router;
