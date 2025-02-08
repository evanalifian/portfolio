import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [{enforce: 'pre', ...mdx({/* jsxImportSource: …, otherOptions… */})},
    react({include: /\.(jsx|js|mdx|md|tsx|ts)$/}), tailwindcss()],
});
