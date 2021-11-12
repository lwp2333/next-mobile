<template>
  <router-view v-if="flag"></router-view>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useStore } from 'vuex'

const flag = ref(true)
const store = useStore()

const refreshView = () => {
  flag.value = false
  nextTick(() => {
    flag.value = true
  })
}
</script>

<style scoped lang="less"></style>
