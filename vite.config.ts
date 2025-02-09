import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acceder desde fuera del contenedor
    watch: {
      usePolling: true, // Activa el modo polling para detectar cambios en Docker
    },
  },
});
