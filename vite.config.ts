import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
export default defineConfig({
  plugins: [vue()],
  // 别名配置
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@image": path.resolve(__dirname, "./src/assets/image"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@views": path.resolve(__dirname, "./src/views"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(
          __dirname,
          "src/styles/common.less"
        )}";`,
      },
    },
  },
});
