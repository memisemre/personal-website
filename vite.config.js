import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  //Paths
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      ubuntuAssets: "/src/assets/ubuntu",
      siteAssets: "/src/assets/website",
    },
  },
});
