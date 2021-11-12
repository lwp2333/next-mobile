import { createStore } from 'vuex'
// getters、 actions 、 mutations
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const modules = import.meta.globEager('./modules/*.ts')

interface IMap {
  [key: string]: any
}

const map: IMap = {}

Object.keys(modules).forEach(file => {
  const modulesName = file.replace('./modules/', '').replace('.ts', '')
  map[modulesName] = modules[file].default
})

const Store = createStore({
  modules: {
    ...map,
  },
  mutations,
  actions,
  getters,
})

export default Store
