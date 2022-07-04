import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    layout: "default-layout",
  },
  mutations: {
    setLayout(state, payload) {
      state.layout = payload;
    },
  },
  actions: {},
  getters: {
    layout(state) {
      return state.layout;
    },
  },
  modules: {
    auth,
  },
});
