import { createBrowserRouter } from "react-router-dom";
import Authorization from "../pages/Authorization";

const Router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/authorization",
    Component: Authorization,
  },
]);

export default Router;
