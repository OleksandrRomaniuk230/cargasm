import Cookie from 'js-cookie';

const SET_TOKEN = 'SET_TOKEN'
const LOGAUT = 'LOGAUT'

export default {
  namespaced: true,
  state: {
    access_token: Cookie.get('access_token') || null,
  },

  getters: {
    access_token: state => state.access_token,
  },

  actions: {
    async login({dispatch, commit}, payload) {
      let  data  = await this.$api.auth.login(payload)
      await commit('SET_TOKEN', data.data)
    },
    async logout({dispatch, commit}, payload) {
      let  data  = await this.$api.auth.logout(payload)
      commit('LOGAUT')
    },
  },
  mutations: {
    [SET_TOKEN](state, payload) {
     
      if (payload.access_token !== undefined) {
        Cookie.set('access_token', payload.access_token)
        state.access_token = payload.access_token
      }
    },
    [LOGAUT](state) {
      Cookie.remove('access_token')
      state.access_token = null
    }


  },
};