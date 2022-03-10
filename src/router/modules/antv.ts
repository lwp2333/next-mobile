import { RouteRecordRaw } from 'vue-router'

const antvRouter: RouteRecordRaw = {
  path: 'antv',
  name: 'antv',
  component: () => import('@/views/antv/index.vue'),
  meta: {
    title: '图表',
    showTitle: true,
  },
}

export default antvRouter
