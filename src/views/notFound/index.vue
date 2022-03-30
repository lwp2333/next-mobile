<template>
  <div class="container">
    <img :src="pancake" alt="找不到路径或者无权访问" />
    <div class="coutDown">
      <span @click="backHome">页面丢失了({{ coutDown }})</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import pancake from '@/assets/svg/pancake.svg'
import { useRouter } from 'vue-router'
import useCountDown from '@/hooks/useCountDown'
const Router = useRouter()
const backHome = () => {
  Router.back()
}
const num = 3
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
}
</style>
