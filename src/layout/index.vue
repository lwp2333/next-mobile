<template>
  <div :class="{ pdTop: info.showTitle, layout: true, pdBottom: !info.hideTabbar }">
    <van-nav-bar
      v-if="info.showTitle"
      :title="info.title"
      @click-left="handleBack"
      @click-right="handleRefreshApp"
      safe-area-inset-top
      left-arrow
      fixed
    >
      <template #right>
        <van-icon name="replay" size="18" />
      </template>
    </van-nav-bar>
    <router-view class="mainPage" v-slot="{ Component }">
      <Transition name="slide-fade">
        <component :is="Component" />
      </Transition>
    </router-view>
    <van-tabbar v-if="!info.hideTabbar" v-model="info.active" safe-area-inset-bottom route fixed>
      <van-tabbar-item name="/paike" to="/paike" replace>
        <template #icon>
          <AliIcon iconName="paike" />
        </template>
        <span>拍客</span>
      </van-tabbar-item>
      <van-tabbar-item name="/zuji" to="/zuji" replace>
        <template #icon>
          <AliIcon iconName="zuji" />
        </template>
        <span>足迹</span>
      </van-tabbar-item>
      <van-tabbar-item name="/tongji" to="/tongji" replace>
        <template #icon>
          <AliIcon iconName="yingyong" />
        </template>
        <span>统计</span>
      </van-tabbar-item>
      <van-tabbar-item name="/setting" to="/setting" replace>
        <template #icon>
          <AliIcon iconName="shezhi" />
        </template>
        <span>设置</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AliIcon from '@/components/aliIcon/index.vue'
import useApp from '@/hooks/useApp'
type Meta = {
  title: string
  active: string
  showTitle: boolean
  hideTabbar: boolean
}

const Route = useRoute()
const Router = useRouter()

const info = reactive<Meta>({
  showTitle: false,
  hideTabbar: false,
  title: '',
  active: '',
})

watchEffect(() => {
  const { meta, matched } = Route
  const { showTitle, title, hideTabbar } = meta as Meta
  // 通过路由匹配来确定tab高亮 （van-tabbar route 模式自带）
  // const last = matched[matched.length - 1]
  // const tabbar = ['/paike', '/zuji', '/tongji', '/setting']
  // info.active = tabbar.find(item => last.path.startsWith(item)) || ''
  info.showTitle = showTitle
  info.title = title
  info.hideTabbar = hideTabbar
})

const handleBack = () => {
  console.log('点击返回')
  Router.back()
}

const { handleRefreshApp } = useApp()
</script>

<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<style scoped lang="less">
.layout {
  width: 100%;
  height: 100%;
  padding-top: 4px;
  .mainPage {
    width: 100%;
    height: 100%;
  }
}
.pdTop {
  padding-top: calc(4px + var(--van-nav-bar-height));
}
.pdBottom {
  padding-bottom: calc(4px + var(--van-tabbar-height));
}
</style>
