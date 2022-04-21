import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'
import 'normalize.css' // 样式重置各浏览器统一
import './styles/index.less' // 主题、全局样式
import './permisson' // 权限
import 'default-passive-events' // use passive
// eslint-disable-next-line import/no-absolute-path
import 'https://at.alicdn.com/t/font_3307242_pc2kc54o5oc.js'
import directives from './directives' // 全局指令

const app = createApp(App)
app.config.globalProperties.productionTip = false

// 注册全局指令
for (const i in directives) {
  app.directive(i, directives[i])
}

app.use(Router).use(Store).mount('#app')
