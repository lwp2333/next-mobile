import { nextTick } from 'vue'
import { ActionContext } from 'vuex'
const state = {
  appName: 'vite2-vue3-pwa',
  refreshFlag: false, // 是否需要刷新
  firstLoading: true, // 首次启动页loading动画
}

export type AppInfoStateType = typeof state

const mutations = {
  SET_refreshFlag: (state: AppInfoStateType, val: boolean) => {
    state.refreshFlag = val
  },
  SET_firstLoading: (state: AppInfoStateType, val: boolean) => {
    state.firstLoading = val
  },
}

const actions = {
  async refreshApp({ commit }: ActionContext<AppInfoStateType, any>) {
    commit('SET_refreshFlag', true)
    nextTick(() => {
      commit('SET_refreshFlag', false)
    })
  },
  async clearLoading({ commit }: ActionContext<AppInfoStateType, any>) {
    commit('SET_firstLoading', false)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
