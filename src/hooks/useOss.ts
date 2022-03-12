import { getOssClient } from '@/utils/oss'
import OSS from 'ali-oss'
import dayjs from 'dayjs'
export default function () {
  const OssClient = getOssClient()

  const ossUpload = (name: string, file: any, options?: OSS.PutObjectOptions) => {
    const dayNow = dayjs().format('YYYYMMDD')
    const objectName = `vant-ts/static/${dayNow}/${name}`
    return OssClient.put(objectName, file, options)
  }

  const ossDownload = (name: string, file?: any, options?: OSS.GetObjectOptions) => {
    return OssClient.get(name, file, options)
  }

  return { ossUpload, ossDownload }
}
