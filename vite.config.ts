import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import OptimizationPersist from "vite-plugin-optimize-persist";
import PkgConfig from "vite-plugin-package-config";

export default defineConfig({
  plugins: [vue(), PkgConfig(), OptimizationPersist()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    host: "0.0.0.0",
    port: 3000,
  },

  build: {
    outDir: path.resolve(__dirname, "output"),
    emptyOutDir: true,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/_variables";`,
      },
    },
  },
});
