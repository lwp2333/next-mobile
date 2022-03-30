// 自动扫描装载模块
const modules = import.meta.globEager('../views/*/route.ts')

const asyncRoutes = Object.values(modules).map(item => item.default)

export default asyncRoutes
