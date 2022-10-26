import { watchEffect, ref } from 'vue'
import wx from 'weixin-js-sdk'
import { useRoute } from 'vue-router'
import { getWxConfig, WxConfig } from '@/utils/wx'

function useWx() {
  const Route = useRoute()
  const config = ref<WxConfig>()

  watchEffect(async () => {
    config.value = await getWxConfig(window.location.origin + Route.path)
    wx.config(config)
  })

  const getReady = () => {
    return new Promise((resolve, reject) => {
      wx.ready(() => {
        resolve(true)
      })
      wx.error(function (res: any) {
        reject(res)
      })
    })
  }

  return {
    getReady,
    wx,
  }
}

export default useWx
