<template>
  <div class="container">
    <img class="notFound" :src="notFoundSvg" alt="页面丢失了 (＠_＠;)" />
    <span class="text">等待开发 (＠_＠)</span>
  </div>
</template>

<script setup lang="ts">
import notFoundSvg from '@/assets/svg/notFound.svg'
</script>

<style lang="less" scoped>
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
  .text {
    font-size: 14px;
    fill: url(#gradient);
    background-image: linear-gradient(#ffcf02, #ff7352);
    background-clip: text;
    -webkit-text-fill-color: transparent; /*需要文字透明*/
  }
}
</style>
