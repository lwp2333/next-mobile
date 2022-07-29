// 自动扫描装载模块
import { RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('../views/*/route.ts', { eager: true })
const asyncRoutes: RouteRecordRaw[] = Object.values(modules).map((item: any) => item.default)

export default asyncRoutes
