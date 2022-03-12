<template>
  <div :class="{ pdtop: info.showTitle, layout: true }">
    <van-nav-bar
      v-if="info.showTitle"
      :title="info.title"
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
import { computed, reactive, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { RootStateType } from '@/store'
import useWinResize from '@/hooks/useWinResize'
type Meta = {
  showTitle?: boolean
  title?: string
}

const Route = useRoute()
const Router = useRouter()
const Store = useStore<RootStateType>()

const info = reactive<Meta>({
  showTitle: false,
  title: '',
})

watchEffect(() => {
  const { showTitle, title } = Route.meta as Meta
  info.showTitle = showTitle
  info.title = title
})

const refreshFlag = computed(() => Store.state.appInfo.refreshFlag)

const handleBack = () => {
  console.log('点击返回')
  Router.back()
}

let timer: number
const handleRefreshApp = () => {
  timer && clearTimeout(timer)
  timer = window.setTimeout(() => {
    console.log('点击刷新')
    Store.dispatch('appInfo/refreshApp')
  }, 600)
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
