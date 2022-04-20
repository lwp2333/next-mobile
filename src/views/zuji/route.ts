import { RouteRecordRaw } from 'vue-router'

const zujiRouter: RouteRecordRaw = {
  path: '/zuji',
  name: 'zuji',
  component: () => import('@/views/zuji/index.vue'),
  meta: {
    title: '足迹',
    showTitle: false,
  },
}

export default zujiRouter
