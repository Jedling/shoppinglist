import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
  },
  mutations: {
    retrieveShoppingList(state, list) {
      state.list = list;
    },
  },
  actions: {
    retrieveShoppingList(context) {
      db.collection('shoppinglist')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc: { data: () => any }) => {
            console.log(doc.data());
          });
        }),
        context.commit('retrieveShoppingList', []);
    },
  },
  modules: {},
});
