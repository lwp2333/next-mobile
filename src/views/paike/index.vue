<template>
  <div class="container">
    <!-- <Waitting /> -->
    <van-uploader v-model="fileList" :after-read="afterRead" :multiple="true" />
    <van-button type="primary" @click="handleChoose">微信选择图片</van-button>
    <van-button @click="handleQrCode">扫一扫</van-button>
    {{ JSON.stringify(json) }}
    {{ JSON.stringify(code) }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UploaderFileListItem } from 'vant'

import Waitting from '@/components/waitting/index.vue'
import useOss from '@/hooks/useOss'
import useWx from '@/hooks/useWx'
const fileList = ref<UploaderFileListItem[]>([])

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
      item.status = 'failed'
    }
  }
}

const { wx, getReady } = useWx()

const json = ref({})
const handleChoose = async () => {
  try {
    await getReady()
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res: any) {
        json.value = res
      },
    })
  } catch (error) {
    console.log(error)
  }
}

const code = ref()
const handleQrCode = async () => {
  try {
    await getReady()
    wx.scanQRCode({
      needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res: any) {
        code.value = res
      },
    })
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
