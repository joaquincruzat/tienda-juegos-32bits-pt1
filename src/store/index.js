import Vue from 'vue'
import Vuex from 'vuex'
import {gamesListModule} from '@/store/modules/GamesList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    //podría ser "games"
    gamesList: gamesListModule
  },
  })
  