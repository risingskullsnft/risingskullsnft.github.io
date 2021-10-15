// Main datastore.

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import web3 from './web3';

export default new Vuex.Store({
  modules: {
    // Import modules here.
    web3
  },
});
