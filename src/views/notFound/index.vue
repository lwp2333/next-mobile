<template>
  <div class="container">
    <img class="notFound" :src="pancake" alt="页面丢失了 (＠_＠;)" />
    <span @click="back">页面丢失了(＠_＠;)({{ coutDown }})</span>
  </div>
</template>

<script setup lang="ts">
import pancake from '@/assets/svg/pancake.svg'
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

  .notFound {
    width: 48%;
    height: auto;
  }
}
</style>
