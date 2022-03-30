<template>
  <div ref="domRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, toRefs, onUnmounted } from 'vue'
import lottie, { AnimationItem } from 'lottie-web'
const props = defineProps({
  path: String,
})

const { path } = toRefs(props)

const domRef = ref<HTMLDivElement>()

let curAnimation: AnimationItem

const drawRender = () => {
  curAnimation && curAnimation.destroy()
  curAnimation = lottie.loadAnimation({
    container: domRef.value!,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: path?.value,
  })
}
watch([path], () => {
  drawRender()
})
onMounted(() => {
  drawRender()
})

onUnmounted(() => {
  curAnimation && curAnimation.destroy()
})
</script>

<script lang="ts">
export default {
  name: 'LottieAnimation',
}
</script>
<style scoped lang="less"></style>
