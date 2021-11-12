<template>
  <div class="container">
    <img :src="notFound" alt="找不到路径或者无权访问" />
    <div class="coutDown">
      <van-button type="primary" @click="backHome"> 返回（{{ coutDown }}）</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import notFound from '@/assets/svg/404.svg'
import { useRouter } from 'vue-router'
import useCountDown from '@/hooks/useCountDown'
const Router = useRouter()
const backHome = () => {
  Router.back()
}
const num = 5
const coutDown = useCountDown(backHome, num)
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 8rem;
    object-fit: contain;
  }
}
</style>
