import { ref, onMounted, onUnmounted, watch } from 'vue'
/**
 *
 * @param Action 倒计时结束后的事件
 * @param num 倒计时单位s
 * @returns number 当前倒计时数字
 */
export default function useCountDown(Action: () => void, num: number) {
  const count = ref(num)
  let timer = 0
  onMounted(() => {
    timer = window.setInterval(() => {
      count.value--
    }, 1000)
  })
  watch([count], () => {
    if (count.value === 0) {
      timer && clearInterval(timer)
      Action()
    }
  })
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return count
}
