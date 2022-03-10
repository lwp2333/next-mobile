import { nextTick } from 'vue'
import { ActionContext } from 'vuex'
const state = {
  appName: 'vite2-vue3-ts-vant',
  refreshFlag: false, // 是否需要刷新
}

export type AppInfoStateType = typeof state

const mutations = {
  SET_refreshFlag: (state: AppInfoStateType, val: boolean) => {
    state.refreshFlag = val
  },
}

const actions = {
  async refreshApp({ commit }: ActionContext<AppInfoStateType, any>) {
    commit('SET_refreshFlag', true)
    nextTick(() => {
      commit('SET_refreshFlag', false)
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
