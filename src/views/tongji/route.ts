import { RouteRecordRaw } from 'vue-router'

const tongjiRouter: RouteRecordRaw = {
  path: '/tongji',
  name: 'tongji',
  component: () => import('@/views/tongji/index.vue'),
  meta: {
    title: '统计',
    showTitle: false,
  },
}

export default tongjiRouter
