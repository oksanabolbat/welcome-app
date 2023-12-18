import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { macroPlugin } from "@builder.io/vite-plugin-macro";
import { qwikReact } from "@builder.io/qwik-react/vite";
import path from 'path';

export default defineConfig(() => {
  return {
    plugins: [
      macroPlugin({ preset: "pandacss" }),
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      qwikReact(),
    ],
    dev: {
      headers: {
        "Cache-Control": "public, max-age=0",
      },
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    resolve: {
      alias: {
        '/~/': path.resolve(__dirname, 'src')
      }
    }
  };
});
