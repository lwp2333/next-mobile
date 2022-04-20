import { RouteRecordRaw } from 'vue-router'

const paikeRouter: RouteRecordRaw = {
  path: 'paike',
  name: 'paike',
  component: () => import('@/views/paike/index.vue'),
  meta: {
    title: '拍客',
    showTitle: false,
  },
}

export default paikeRouter
