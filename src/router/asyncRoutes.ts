// 导入模块
const modules = import.meta.globEager('./modules/*.ts')

const asyncRoutes = Object.values(modules).map(item => item.default)

export default asyncRoutes
