import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  //Paths
  resolve: {
    alias: {
      //Global Paths
      src: "/src",
      assets: "/src/assets/global",

      //Ubuntu Paths
      ubuntu: "/src/Ubuntu",
      ubuntuComps: "/src/Ubuntu/components",
      ubuntuPages: "/src/Ubuntu/pages",
      ubuntuAssets: "/src/assets/ubuntu",

      //Website Paths
      website: "/src/Website",
      websiteComps: "/src/Website/components",
      websitePages: "/src/Website/pages",
      websiteAssets: "/src/assets/website",
    },
  },
});
