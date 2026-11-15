import { resolve } from "path";
import { defineConfig } from "electron-vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  main: {
    resolve: {
      tsconfigPaths: true,
    },
    build: {
      externalizeDeps: true,
      rollupOptions: {
        external: ["electron"],
        input: {
          index: resolve(import.meta.dirname, "src/main/index.ts"),
        },
      },
    },
  },
  preload: {
    resolve: {
      tsconfigPaths: true,
    },
    build: {
      externalizeDeps: true,
      rollupOptions: {
        external: ["electron"],
        input: {
          index: resolve(import.meta.dirname, "src/preload/index.ts"),
        },
      },
    },
  },
  renderer: {
    root: resolve(import.meta.dirname, "src/renderer"),
    resolve: {
      tsconfigPaths: true,
    },
    build: {
      rollupOptions: {
        input: resolve(import.meta.dirname, "src/renderer/index.html"),
      },
    },
    define: {
      "process.env.APP_VERSION": JSON.stringify(
        process.env["npm_package_version"],
      ),
    },
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          changeOrigin: true,
        },
      },
    },
  },
});
