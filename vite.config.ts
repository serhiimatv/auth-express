import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import express from "./express-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["module:@preact/signals-react-transform"]],
      },
    }),
    express("src/server"),
  ],
});
