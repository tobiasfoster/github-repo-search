import { createBrowserRouter } from "react-router-dom";
import Search from "../pages/Search";
import Detail from "../pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Search,
  },
  {
    path: "/search",
    Component: Search,
  },
  {
    path: "/detail/*",
    Component: Detail,
  },
]);

export default router;
