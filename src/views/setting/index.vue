<template>
  <div class="container">
    <Waitting />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Waitting from '@/components/waitting/index.vue'
const Router = useRouter()
const back = () => {
  Router.back()
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
}
</style>
