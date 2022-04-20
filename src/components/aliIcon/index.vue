<template>
  <svg v-if="iconName" class="ali-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${iconName}`"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  iconName: {
    type: String,
    default: () => undefined,
  },
})
</script>

<style lang="less" scoped>
.ali-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
