<template>
  <div class="container">
    <DateSelect @select="handleSelect" />
    <div class="font-size-1">font-size: 12px</div>
    <div class="font-size-2">font-size: 16px</div>
    <div class="font-size-3">font-size: 20px</div>
    <div class="font-size-4">font-size: 24px</div>
    <div class="list-box-1">50x50</div>
    <div class="list-box-2">100x100</div>
    <div class="list-box-3">200x200</div>
    <div class="fab">
      <van-button round to="antv" color="linear-gradient(to right, #ff6034, #ee0a24)"> Go </van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const Router = useRouter()
const show = ref(true)

const handleSelect = (option: any, val: string[]) => {
  console.log(option)
  console.log(val)
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 12px 8px;
  color: #333;

  > div {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  .font-size-1 {
    font-size: 12px;
  }
  .font-size-2 {
    font-size: 16px;
  }
  .font-size-3 {
    font-size: 20px;
  }
  .font-size-4 {
    font-size: 24px;
  }

  .list-box-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 50px;
    height: 50px;
    background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
  }

  .list-box-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100px;
    height: 100px;
    background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
  }

  .list-box-3 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 200px;
    height: 200px;
    background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
  }
}

.fab {
  text-align: right;
}
</style>
