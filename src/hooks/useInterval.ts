import { ref, onMounted, onUnmounted, watch } from 'vue'
/**
 *
 * @param Action 事件
 * @param millisecond 间隔时间默认1000ms
 * @param immediate 是否立即运行一次
 * @returns
 */
export default function useInterval(Action: () => void, millisecond = 1000, immediate = false) {
  const timer = ref(0)
  const interval = ref(millisecond)
  const startInterval = () => {
    immediate && Action()
    timer.value = window.setInterval(() => {
      Action()
    }, interval.value)
  }
  const clear = () => {
    timer.value && clearInterval(timer.value)
  }
  const setTime = (val: number) => {
    interval.value = val
  }
  const restTime = () => {
    interval.value = millisecond
  }
  const stopWatch = watch(interval, () => {
    clear()
    timer.value = window.setInterval(() => {
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
  return { timer, action: [setTime, restTime, clear, startInterval] }
}
