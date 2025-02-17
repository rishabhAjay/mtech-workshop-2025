import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://dummyjson.com", // API base URL
        changeOrigin: true, // Adjusts the "origin" header to match the target
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove "/api" prefix in the request
      },
    },
  },
  plugins: [react()],
});
