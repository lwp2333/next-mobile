<template>
  <div class="container">
    <van-uploader v-model="fileList" :after-read="afterRead" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UploaderFileListItem } from 'vant'
import useOss from '@/hooks/useOss'
const fileList = ref([])

const { ossUpload } = useOss()

const afterRead = async (item: UploaderFileListItem | UploaderFileListItem[]) => {
  if (Array.isArray(item)) {
    console.log(item)
  } else {
    item.status = 'uploading'
    console.log(item)
    try {
      const res = await ossUpload(item.file?.name as string, item.file)
      item.url = res.url
      item.status = 'done'
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
