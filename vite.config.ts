import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: ["react", "react-dom", "react-helmet-async"],
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    includedRoutes() {
      return [
        "/",
        "/book",
        "/work",
        "/pricing",
        "/contact",
        "/thank-you",
        "/insights/multi-tenant-saas-architecture",
        "/privacy",
        "/terms",
        "/data-deletion",
      ];
    },
  },
}));
