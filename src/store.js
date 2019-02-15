import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default {
  state: {
    childs: [],
    price: {
      salaire: 0.0,
      repas_1: 0.0,
      repas_2: 0.0
    }
  },

  actions: {
    child_rem({ commit }, index) {
      commit("child_rem", index);
    },
    child_save({ commit }, payload) {
      commit("child_save", payload);
    }
  },

  mutations: {
    child_rem(state, index) {
      state.childs.splice(index, 1);
    },
    child_save(state, payload) {
      if (payload.index != null) {
        state.childs.splice(payload.index, 1, payload);
      } else {
        state.childs.push(payload);
      }
    },
    price_update(state, payload) {
      state.price[payload.key] = payload.value * 1;
    }
  },

  plugins: [vuexLocal.plugin]
};
