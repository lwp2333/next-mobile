import { nextTick } from 'vue'
import { defineStore } from 'pinia'

const initState = {
  appName: 'vite2-vue3-mobile',
  refreshFlag: false, // 是否需要刷新
  firstLoading: true, // 首次启动页loading动画
}
export const useAppInfoStore = defineStore('appInfo', {
  state: () => initState,
  getters: {},
  actions: {
    async refreshApp() {
      this.refreshFlag = true
      nextTick(() => {
        this.refreshFlag = false
      })
    },
    async clearLoading() {
      this.firstLoading = false
    },
  },
})
