import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  server: {
    open: true,
    port: 8080,
  },
  // 生产环境路径，类似webpack的assetsPath
  base: './',
  build: {
    // 打包后目录,默认dist
    outDir: 'dist',
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: [],
  },
  // css: {
  //   // 🔥此处添加全局scss🔥
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "./src/style/common.scss";',
  //     },
  //   },
  // },
};
