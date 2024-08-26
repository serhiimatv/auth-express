import express from "express";
import userController from "../controllers/user-controller";

const authRouter = express.Router();

authRouter.post("/registration", userController.registration);
authRouter.post("/login", userController.login);
authRouter.post("/logout", userController.logout);
authRouter.get("/activate/:link", userController.activate);
authRouter.get("/refresh", userController.refresh);
authRouter.get("/users", userController.getUser);

export default authRouter;
