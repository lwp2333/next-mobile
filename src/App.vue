<template>
  <ConfigProvider :theme-vars="themeVars" class="g-scrollbar">
    <router-view v-slot="{ Component }">
      <component v-if="!refreshFlag" :is="Component" />
    </router-view>
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
<style lang="less" scoped></style>
