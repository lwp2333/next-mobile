import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePublish from 'vite-plugin-publish'
import viteCompression from 'vite-plugin-compression'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    // 项目插件
    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers: [VantResolver()],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.ts$/, /\.tsx$/],
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 1025,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      vitePublish(),
    ],
    // 基础配置
    base: mode === 'production' ? 'https://cdn200.oss-cn-hangzhou.aliyuncs.com/next-mobile/' : '/',
    publicDir: 'public',
    resolve: {
      alias: {
        '@': '/src/',
      },
    },
    // 服务配置
    server: {
      port: 9527,
      https: false,
      open: true,
      proxy: {
        '/dev/api': {
          target: 'http://www.lwp.fun:7000',
          changeOrigin: true,
          rewrite: path => path.replace(/\/dev\/api/, ''),
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      sourcemap: false,
      terserOptions: {
        compress: {
          // 生产环境去除console及debug
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
})
