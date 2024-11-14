import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { fileURLToPath } from "url"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Existing alias configuration
      "declarations": fileURLToPath(new URL("../declarations", import.meta.url)),
      // Adding shadcn alias for components
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
