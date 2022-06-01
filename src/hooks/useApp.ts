import { computed } from 'vue'
import { useStore } from 'vuex'
import { RootStateType } from '@/store'

export default function useApp() {
  const Store = useStore<RootStateType>()
  const refreshFlag = computed(() => Store.state.appInfo.refreshFlag)
  let timer: number
  const handleRefreshApp = () => {
    timer && clearTimeout(timer)
    timer = window.setTimeout(() => {
      console.log('刷新页面')
      Store.dispatch('appInfo/refreshApp')
    }, 200)
  }
  return {
    refreshFlag,
    handleRefreshApp,
  }
}
