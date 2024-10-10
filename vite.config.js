import { deleteConfig } from "vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "rollup";

export default defineConfig({
  plugins: [react()],
  root: "src",
});
