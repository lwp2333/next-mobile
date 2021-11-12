import { createRouter, createWebHashHistory, RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router'
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false })

const Router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, savedPosition: any) {
    if (savedPosition) {
      return { ...savedPosition, behavior: 'smooth' }
    } else {
      return { x: 0, y: 0, behavior: 'smooth' }
    }
  },
  routes: [
    {
      path: '/',
      name: 'app',
      meta: {
        title: '主页',
      },
      redirect: '/login',
      component: () => import('@/layout/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        title: '登录',
      },
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: () => import('@/views/notFound/index.vue'),
      meta: {
        title: '找不到路径',
      },
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/notFound',
    },
  ],
})

Router.beforeEach((to, from) => {
  NProgress.start()
  document.title = to.meta.title as string
  return true
})

Router.afterEach((to, from) => {
  NProgress.done()
})

export default Router
