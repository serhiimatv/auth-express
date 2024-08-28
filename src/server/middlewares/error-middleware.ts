import ApiError from "../exceptions/api-error";
import { NextFunction, type Request, type Response } from "express";

export default function (
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);
  if (error instanceof ApiError) {
    return res
      .status(error.status)
      .json({ message: error.message, errors: error.errors });
  }
  return res.status(500).json({ message: "Unexpected error" });
}
