<template>
  <span class="typingText" ref="domRef"></span>
</template>

<script setup lang="ts">
import { nextTick } from 'process'
import { ref, computed, onUnmounted, watch, toRefs, onMounted } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
})
const domRef = ref<HTMLSpanElement>()

const { text } = toRefs(props)
const textArr = computed(() => text.value.split(''))

let timer: number
const typing = (index: number, strArr: string[]) => {
  if (index < strArr.length && domRef.value) {
    domRef.value.innerText += strArr[index]
    timer = window.setTimeout(() => {
      typing(++index, strArr)
    }, 160)
  }
}

onMounted(() => {
  typing(0, textArr.value)
})
watch(textArr, () => {
  if (domRef.value) {
    domRef.value.innerText = ''
  }
  typing(0, textArr.value)
})

onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<script lang="ts">
export default {
  name: 'TypeWriter',
}
</script>
<style scoped lang="less">
.typingText {
  font-size: 16px;
  color: #222;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 4px;
  animation: fadeOutDown 5s;
}

@keyframes fadeOutDown {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
