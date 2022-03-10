<template>
  <van-config-provider class="g-scrollbar">
    <router-view></router-view>
  </van-config-provider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'vant'
</script>
<style lang="less" scoped>
.van-config-provider {
  width: 100%;
  height: 100%;
}
</style>
