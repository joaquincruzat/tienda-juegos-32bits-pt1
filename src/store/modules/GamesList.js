export const gamesListModule = {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    SET_LIST(state, newList) {
      state.list = newList;
    },
  },
  actions: {
    async getAllGames ({commit}){
      const games = await fetch('/juegos.json').then((res)=>res.json())
      commit("SET_LIST", games)

    }
  },
};
