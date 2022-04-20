import { RouteRecordRaw } from 'vue-router'

const settingRouter: RouteRecordRaw = {
  path: '/setting',
  name: 'setting',
  component: () => import('@/views/setting/index.vue'),
  meta: {
    title: '统计',
    showTitle: false,
  },
}

export default settingRouter
