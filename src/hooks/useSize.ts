import { onMounted, reactive, toRefs, isRef, Ref } from 'vue'
import useWinResize from './useWinResize'

export default function useSize(target: Ref<HTMLElement> | string) {
  const size = reactive({
    width: 0,
    height: 0,
  })
  const getSizeInfo = () => {
    const targetDom = isRef(target) ? target.value : document.getElementById(target)!
    size.width = targetDom.offsetWidth
    size.height = targetDom.offsetHeight
  }
  useWinResize(getSizeInfo)
  onMounted(() => {
    setTimeout(() => {
      getSizeInfo()
    }, 120)
  })
  return size
}
