import { useAppInfoStore } from '@/store'
import { computed, onUnmounted } from 'vue'

export default function useApp() {
  const appInfoStore = useAppInfoStore()
  const refreshFlag = computed(() => appInfoStore.refreshFlag)
  const appName = computed(() => appInfoStore.appName)

  let timer: number
  const handleRefreshApp = () => {
    timer && clearTimeout(timer)
    timer = window.setTimeout(() => {
      appInfoStore.refreshApp()
    }, 200)
  }
  onUnmounted(() => {
    timer && clearTimeout(timer)
  })
  return {
    refreshFlag,
    handleRefreshApp,
    appName,
  }
}
