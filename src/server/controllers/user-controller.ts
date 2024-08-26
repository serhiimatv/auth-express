import { NextFunction, Request, Response } from "express";
import UserService from "../services/user-service";

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const userData = await UserService.registration(email, password);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      console.log(error);
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  async logout(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  async activate(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      res.json([123, "asdas"]);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();
