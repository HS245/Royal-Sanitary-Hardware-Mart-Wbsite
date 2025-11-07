import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "router-vendor": ["react-router-dom"],
          "motion-vendor": ["framer-motion"],
          "three-vendor": ["three"],
          "slick-vendor": ["react-slick", "slick-carousel"],
          "icons-vendor": ["react-icons"],
        },
      },
    },
  },
});
