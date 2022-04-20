<template>
  <div class="container">
    <img class="notFound" :src="notFoundSvg" alt="页面丢失了 (＠_＠;)" />
    <span @click="back">页面丢失了(＠_＠)({{ coutDown }})</span>
  </div>
</template>

<script setup lang="ts">
import notFoundSvg from '@/assets/svg/notFound.svg'
import { useRouter } from 'vue-router'
import useCountDown from '@/hooks/useCountDown'
const Router = useRouter()
const back = () => {
  Router.back()
}
const num = 3
const coutDown = useCountDown(back, num)
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  .notFound {
    width: 48%;
    height: auto;
  }
}
</style>
