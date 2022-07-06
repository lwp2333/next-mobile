import { useAppInfoStore } from '@/store'
import { computed } from 'vue'
export default function useApp() {
  const appInfoStore = useAppInfoStore()

  const refreshFlag = computed(() => appInfoStore.refreshFlag)
  let timer: number
  const handleRefreshApp = () => {
    timer && clearTimeout(timer)
    timer = window.setTimeout(() => {
      appInfoStore.refreshApp()
    }, 200)
  }
  return {
    refreshFlag,
    handleRefreshApp,
  }
}
