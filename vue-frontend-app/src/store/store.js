import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  // plugins: [
  //   createPersistedState()
  // ],
  state: {
    token: '',
    user: {},
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      console.log('state', token)

      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      console.log('user', user)

      state.user = user
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})
