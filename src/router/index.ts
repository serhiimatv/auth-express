import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth";

const Router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/authorization",
    Component: Auth,
  },
]);

export default Router;
