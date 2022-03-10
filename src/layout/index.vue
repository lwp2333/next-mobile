<template>
  <div :class="{ pdtop: showTitle, layout: true }">
    <van-nav-bar
      v-if="showTitle"
      :title="title"
      @click-left="handleBack"
      @click-right="handleRefreshApp"
      left-arrow
      fixed
    >
      <template #right>
        <van-icon name="replay" size="18" />
      </template>
    </van-nav-bar>
    <router-view v-if="!refreshFlag"></router-view>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { RootStateType } from '@/store'
import useWinResize from '@/hooks/useWinResize'
type Meta = {
  showTitle?: boolean
  title?: string
}

const { meta } = useRoute()
const Router = useRouter()
const Store = useStore<RootStateType>()

const { showTitle = true, title = '' } = meta as Meta

const refreshFlag = computed(() => Store.state.appInfo.refreshFlag)

const handleBack = () => {
  console.log('点击返回')
  Router.back()
}

const handleRefreshApp = () => {
  console.log('点击刷新')
  Store.dispatch('appInfo/refreshApp')
}
// 大小方向改变，重新刷新
useWinResize(handleRefreshApp)
</script>

<style scoped lang="less">
.layout {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 8px;
}
.pdtop {
  padding-top: calc(8px + var(--van-nav-bar-height));
}
</style>
