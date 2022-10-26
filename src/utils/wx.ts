import axios from 'axios'

export interface WxConfig {
  debug: boolean // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
  appId?: string // 必填，公众号的唯一标识
  timestamp?: number // 必填，生成签名的时间戳
  nonceStr?: string // 必填，生成签名的随机串
  signature?: string // 必填，签名
  jsApiList: string[] // 必填，需要使用的 JS 接口列表
}

const config: WxConfig = {
  debug: true,
  jsApiList: ['chooseImage', 'scanQRCode'],
}
export const getWxConfig = async (url: string) => {
  if (config.signature) {
    return config
  }
  const { appId, timestamp, nonceStr, signature } = await axios
    .get<WxConfig>('/api/wx/getConfig', {
      params: {
        url,
      },
    })
    .then(res => res.data)
  config.appId = appId
  config.timestamp = timestamp
  config.nonceStr = nonceStr
  config.appId = signature
  console.log('AllWxConfig', config)
  return config
}
