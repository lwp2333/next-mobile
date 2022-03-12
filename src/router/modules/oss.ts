import { RouteRecordRaw } from 'vue-router'

const ossRouter: RouteRecordRaw = {
  path: 'oss',
  name: 'oss',
  component: () => import('@/views/oss/index.vue'),
  meta: {
    title: 'oss文件上传/下载',
    showTitle: true,
  },
}

export default ossRouter
