import express from "express";

export const app = express();

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
