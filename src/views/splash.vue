<template>
  <div class="container">
    <CustomLoading :loading="loading">
      <TypeWriter v-if="flag" :text="curShowText" />
      <van-swipe :autoplay="3200" :show-indicators="false" @change="updateText">
        <van-swipe-item>
          <LottieAnimation :path="book" />
        </van-swipe-item>
        <van-swipe-item>
          <LottieAnimation :path="tree" />
        </van-swipe-item>
        <van-swipe-item>
          <LottieAnimation :path="flower" />
        </van-swipe-item>
      </van-swipe>

      <div class="action">
        <van-button size="normal" to="/paike" round color="linear-gradient(to left, #84fab0, #8fd3f4)">
          立即进入
        </van-button>
      </div>
    </CustomLoading>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watchEffect } from 'vue'
import { useAppInfoStore } from '@/store'

import book from '@/assets/json/book.json?url'
import flower from '@/assets/json/flower.json?url'
import tree from '@/assets/json/tree.json?url'

import CustomLoading from '@/components/customLoading/index.vue'
import LottieAnimation from '@/components/lottieAnimation/index.vue'
import TypeWriter from '@/components/typeWriter/index.vue'


const appInfoStore = useAppInfoStore()

const loading = computed(() => appInfoStore.firstLoading)

watchEffect(() => {
  loading.value &&
    setTimeout(() => {
      appInfoStore.clearLoading()
    }, 2400)
})

const textMap: string[] = [
  '「 时至今日, 你仍是我的光芒 」',
  '「 有功夫绝望, 不如吃好吃的去睡觉 」',
  '「 认清生活的真相, 依旧热爱生活 」',
]
const curShowText = ref(textMap[0])
const flag = ref(true)
const updateText = (index: number) => {
  curShowText.value = textMap[index]
  // 每一次 改变text 需要重新 渲染整个TypeWriter，不然里面的渐变动画只会执行一次
  flag.value = false
  nextTick(() => {
    flag.value = true
  })
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(150, 230, 161, 0.6) 20%, rgba(161, 196, 253, 0.8) 100%);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  text-align: center;
}
.action {
  text-align: center;
}
</style>
