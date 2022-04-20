<template>
  <div class="container">
    <CustomLoading :loading="loading">
      <TypeWriter v-if="flag" :text="curShowText" />
      <van-swipe :autoplay="5600" :show-indicators="false" @change="updateText">
        <van-swipe-item>
          <LottieAnimation :path="walk" />
        </van-swipe-item>
        <van-swipe-item>
          <LottieAnimation :path="book" />
        </van-swipe-item>
        <van-swipe-item>
          <LottieAnimation :path="tree" />
        </van-swipe-item>
        <van-swipe-item>
          <LottieAnimation :path="flower" />
        </van-swipe-item>
      </van-swipe>

      <div class="action">
        <van-button size="small" to="/paike" round color="linear-gradient(to right, #70F570, #49C628)"
          >立即进入</van-button
        >
      </div>
    </CustomLoading>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watchEffect, computed } from 'vue'
import { useStore } from 'vuex'
import { RootStateType } from '@/store'
import walk from '@/assets/json/walk.json?url'
import book from '@/assets/json/book.json?url'
import tree from '@/assets/json/tree.json?url'
import flower from '@/assets/json/flower.json?url'
import CustomLoading from '@/components/customLoading/index.vue'
import TypeWriter from '@/components/typeWriter/index.vue'

const loading = computed(() => Store.state.appInfo.firstLoading)
const Store = useStore<RootStateType>()

watchEffect(() => {
  loading.value &&
    setTimeout(() => {
      Store.dispatch('appInfo/clearLoading')
    }, 2400)
})

const textMap: string[] = [
  '「 时至今日, 你仍是我的光芒 」',
  '「 有功夫绝望, 不如吃好吃的去睡觉 」',
  '「 每个人都有罪, 是为了赎罪而工作 」',
  '「 认清生活的真相, 依旧热爱生活 」',
]
const curShowText = ref(textMap[0])
const flag = ref(true)
const updateText = (index: number) => {
  curShowText.value = textMap[index]
  // 每一次 改变text 需要重新 渲染整个TypeWriter，不然里面的渐变动画只会执行一次
  flag.value = false
  nextTick(() => {
    flag.value = true
  })
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  text-align: center;
}
.action {
  text-align: center;
}
</style>
