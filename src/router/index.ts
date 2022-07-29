import { createRouter, createWebHistory, RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router'
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false })

const Router = createRouter({
  history: createWebHistory(),
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
      redirect: '/splash',
      component: () => import('@/layout/index.vue'),
      children: [],
    },
    {
      path: '/splash',
      name: 'splash',
      component: () => import('@/views/splash.vue'),
      meta: {
        title: '引导页',
      },
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: () => import('@/views/notFound.vue'),
      meta: {
        title: '页面丢失了 (＠_＠)',
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
