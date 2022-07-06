import { getOssClient } from '@/utils/oss'
import OSS from 'ali-oss'
import dayjs from 'dayjs'

export default function useOss() {
  const ossUpload = (name: string, file: any, options?: OSS.PutObjectOptions) => {
    const dayNow = dayjs().format('YYYYMMDD')
    const objectName = `mobile-static/${dayNow}/${name}`
    return getOssClient().put(objectName, file, options) // 真正使用上传下载的时候。才去实例化ossClient
  }
  const ossDownload = (name: string, file?: any, options?: OSS.GetObjectOptions) => {
    return getOssClient().get(name, file, options) // 真正使用上传下载的时候。才去实例化ossClient
  }
  return { ossUpload, ossDownload }
}
