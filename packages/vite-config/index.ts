import { defineConfig, type UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

/**
 * 创建基础 Vite 配置
 * @param cwd - 当前工作目录 (process.cwd())
 * @param overrides - 子项目特定的覆盖配置
 */
export function createViteConfig(cwd: string, overrides: UserConfig = {}) {
  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(cwd, 'src'),
      },
    },
    // 通用构建配置
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: 'dist',
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 基础分包策略：把 node_modules 单独打包
            if (id.includes('node_modules')) {
              if (id.includes('vue') || id.includes('pinia') || id.includes('vue-router')) {
                return 'vue-vendor';
              }
              if (id.includes('ant-design-vue')) {
                return 'antd';
              }
              return 'vendor';
            }
          },
        },
      },
    },
    ...overrides,
  });
}