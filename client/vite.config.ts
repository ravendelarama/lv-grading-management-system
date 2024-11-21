import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

export default defineConfig({
  plugins:
    [
      TanStackRouterVite(),
      react()
    ],
  resolve: {
    alias: {
      // Existing alias configuration
      "declarations": fileURLToPath(new URL("../declarations", import.meta.url)),
      // Adding shadcn alias for components
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
