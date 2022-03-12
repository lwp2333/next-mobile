import Oss from 'ali-oss'
let ossClient: Oss

export const getOssClient = () => {
  const accessKeyId = import.meta.env.VITE_OSS_ACCESS_KEY_ID as string
  const accessKeySecret = import.meta.env.VITE_OSS_ACCESS_KEY_SECRET as string
  const bucket = import.meta.env.VITE_BUCKET as string
  const region = import.meta.env.VITE_REGION as string
  if (!ossClient) {
    try {
      ossClient = new Oss({
        accessKeyId,
        accessKeySecret,
        bucket,
        region,
        secure: true,
      })
    } catch (error) {
      console.log('oss init failed:', error)
    }
  }
  return ossClient
}
