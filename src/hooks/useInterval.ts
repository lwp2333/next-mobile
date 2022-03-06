import { ref, onMounted, onUnmounted, watch } from 'vue'

export default function useInterval(Action: () => void, delay = 1000, immediate = false) {
  let timer = 0
  const interval = ref(delay)
  const startInterval = () => {
    immediate && Action()
    timer = window.setInterval(() => {
      Action()
    }, interval.value)
  }
  const clear = () => {
    timer && clearInterval(timer)
  }
  const setTime = (val: number) => {
    interval.value = val
  }
  const restTime = () => {
    interval.value = delay
  }
  const stopWatch = watch(interval, () => {
    clear()
    timer = window.setInterval(() => {
      Action()
    }, interval.value)
  })
  onMounted(() => {
    startInterval()
  })
  onUnmounted(() => {
    clear()
    stopWatch()
  })
  return [timer, setTime, restTime, clear, startInterval]
}
