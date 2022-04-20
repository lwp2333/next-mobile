<template>
  <div v-if="loading" class="loadingContainer">
    <div class="customLoading">
      <div class="item" style="background-color: #09f; animation-delay: 0ms"></div>
      <div class="item" style="background-color: #0b93ff; animation-delay: 50ms"></div>
      <div class="item" style="background-color: #178eff; animation-delay: 100ms"></div>
      <div class="item" style="background-color: #28f; animation-delay: 150ms"></div>
      <div class="item" style="background-color: #2d82ff; animation-delay: 200ms"></div>
      <div class="item" style="background-color: #397dff; animation-delay: 250ms"></div>
      <div class="item" style="background-color: #47f; animation-delay: 300ms"></div>
      <div class="item" style="background-color: #4f71ff; animation-delay: 350ms"></div>
      <div class="item" style="background-color: #5b6cff; animation-delay: 400ms"></div>
      <div class="item" style="background-color: #66f; animation-delay: 450ms"></div>
    </div>
  </div>
  <slot v-else></slot>
</template>

<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    default: () => true,
  },
})
</script>
<script lang="ts">
export default {
  name: 'CustomLoading',
}
</script>
<style lang="less" scoped>
.loadingContainer {
  width: 100%;
  height: 100%;
  min-height: 48px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  .customLoading {
    width: 64px;
    height: 48px;
    display: flex;
    justify-content: space-around;
    -webkit-box-reflect: below -48px linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.7));
    .item {
      width: 4px;
      height: 20px;
      border-radius: 2px;
      animation: rotate 3s cubic-bezier(0.81, 0.04, 0.4, 0.7) infinite;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(-0.5turn) rotateX(-1turn);
  }
  75%,
  100% {
    transform: none;
  }
}
</style>
