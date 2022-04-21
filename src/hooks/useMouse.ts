import { ref, onMounted, onUnmounted } from 'vue'

export default function useMouse() {
  const x = ref(0)
  const y = ref(0)
  const update = (e: MouseEvent) => {
    x.value = e.x
    y.value = e.y
  }
  onMounted(() => {
    document.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    document.removeEventListener('mousemove', update)
  })
  return { x, y }
}
