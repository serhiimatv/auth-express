import { Response, NextFunction, MyRequest } from "express";
import ApiError from "../exceptions/api-error";
import tokenService from "../services/token-service";

declare module "express" {
  export interface MyRequest extends Request {
    user?: any;
  }
}

export default function (req: MyRequest, _: Response, next: NextFunction) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError());
    }

    const accessToken = authorizationHeader.split(" ")[1];

    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }

    const userData = tokenService.validateAccessToken(accessToken);

    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }

    req.user = userData;

    next();
  } catch (error) {
    return next(ApiError.UnauthorizedError());
  }
}
