<template>
  <div class="container">
    <TypeWriter v-if="flag" :text="curShowText" />
    <van-swipe :autoplay="5600" :show-indicators="false" @change="updateText">
      <van-swipe-item>
        <LottieAnimation :path="walk" />
      </van-swipe-item>
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
      <van-button size="small" to="/antv" round color="linear-gradient(to right, #70F570, #49C628)"
        >立即进入</van-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import LottieAnimation from '@/components/lottieAnimation/index.vue'
import walk from '@/assets/json/walk.json?url'
import book from '@/assets/json/book.json?url'
import tree from '@/assets/json/tree.json?url'
import flower from '@/assets/json/flower.json?url'
import TypeWriter from '@/components/typeWriter/index.vue'

const textMap: string[] = [
  '「 时至今日,你仍是我的光芒 」',
  '「 有功夫绝望，不如去吃点好吃去睡觉 」',
  '「 每个人都是罪人，为了赎罪而工作 」',
  '「 认清生活的真相后, 依旧要热爱生活 」',
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
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
}

.action {
  padding-right: 12px;
  text-align: right;
}
</style>
