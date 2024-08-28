import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRouter from "./routers/auth-router";
import ErrorMiddleware from "./middlewares/error-middleware";

export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", authRouter);
app.use(ErrorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(import.meta.env.VITE_DB_URI);
  } catch (error) {
    console.log(error);
  }
};

start();
if (!process.env["VITE"]) {
  const frontendFiles = process.cwd() + "/dist";
  app.use(express.static(frontendFiles));
  app.get("/*", (_, res) => {
    res.send(frontendFiles + "/index.html");
  });
  app.listen(process.env["PORT"], () =>
    console.log(`Start express on port ${process.env["PORT"]}`)
  );
}
