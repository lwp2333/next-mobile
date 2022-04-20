<template>
  <ConfigProvider :theme-vars="themeVars" class="g-scrollbar">
    <router-view v-if="!refreshFlag"></router-view>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'vant'
import useApp from '@/hooks/useApp'
import useWinResize from '@/hooks/useWinResize'

const themeVars = {
  tabbarItemActiveColor: '--van-text-color',
}
const { refreshFlag, handleRefreshApp } = useApp()
// 大小方向改变，重新刷新
useWinResize(handleRefreshApp)
</script>
<style lang="less" scoped>
.van-config-provider {
  width: 100%;
  height: 100%;
}
</style>
