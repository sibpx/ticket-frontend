import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      shared: "/src/shared",
      pages: "/src/pages",
      app: "/src/app",
      components: "/src/components",
      features: "/src/features",
      widgets: "/src/widgets",
      contexts: "/src/contexts",
    },
  },
});
