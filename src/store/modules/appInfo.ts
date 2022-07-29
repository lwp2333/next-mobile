import { nextTick } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

const initState = {
  appName: 'next-mobile',
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

// 支持热刷新
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppInfoStore, import.meta.hot))
}
