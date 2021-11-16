import Vue from "vue";
import Vuex from "vuex";
import web3ModalStore from "@/store/modules/web3Modal";
import risingSkullsStore from "@/store/modules/risingSkulls";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    web3Modal: web3ModalStore,
    risingSkullsContract: risingSkullsStore,
  },
});
