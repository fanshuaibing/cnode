import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export  default  new Vuex.Store({
  state: {
    num: 10
  },
  mutations: {
    add(state) {
      return state.num += 10
    },
    de(state) {
      return state.num -= 10
    }
  },
  actions: {
    addOne(context) {
      context.commit('add');
    },
    deOne(context) {
      context.commit('de')
    }
  },
  getters: {
    getNum(state) {
      return state.num > 0 ? state.num : 0;
    }
  }
})
