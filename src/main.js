// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import  Vuex from  'vuex'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false

var store = new Vuex.Store({
  state:{
    num:10
  },
  mutations:{
    add(state){
      return state.num +=10
    },
    de(state){
      return state.num -=20
    }
  },
  actions:{
    addOne(context){
      context.commit('add');
    },
    deOne(context){
      context.commit('de')
    }
  },
  getters:{
    getNum(state){
      return state.num> 0?state.num:0;
    }
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
