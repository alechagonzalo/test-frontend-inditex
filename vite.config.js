import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "./": path.resolve(__dirname, "./src"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.js"],
    root: path.resolve(__dirname, "./src"),
  },
  server: {
    proxy: {
      // Using the proxy instance
      "/api/product": {
        target: "https://front-test-api.herokuapp.com",
        changeOrigin: true,
      },
      "/api/product/:id": {
        target: "https://front-test-api.herokuapp.com",
        changeOrigin: true,
      },
      "/api/cart": {
        target: "https://front-test-api.herokuapp.com",
        changeOrigin: true,
      },
    },
  },
});
