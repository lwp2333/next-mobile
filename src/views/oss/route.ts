import { RouteRecordRaw } from 'vue-router'

const ossRouter: RouteRecordRaw = {
  path: 'oss',
  name: 'oss',
  component: () => import('@/views/oss/index.vue'),
  meta: {
    title: '图片上传',
    showTitle: true,
  },
}

export default ossRouter
