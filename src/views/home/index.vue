<template>
  <div class="container">
    <div class="welcomeText">人间凑数的日子</div>
    <van-swipe :autoplay="5600" :show-indicators="false">
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
import LottieAnimation from '@/components/lottieAnimation/index.vue'
import walk from '@/assets/json/walk.json?url'
import book from '@/assets/json/book.json?url'
import tree from '@/assets/json/tree.json?url'
import flower from '@/assets/json/flower.json?url'
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

.welcomeText {
  font-size: 18px;
  color: #222;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
}

.action {
  padding-right: 12px;
  text-align: right;
}
</style>
