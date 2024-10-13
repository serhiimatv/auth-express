import { createBrowserRouter } from "react-router-dom";
import Authorization from "../pages/Authorization";
import Registration from "../pages/Registration";

const Router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/authorization",
    Component: Authorization,
  },
  {
    path: "/registration",
    Component: Registration,
  },
]);

export default Router;
