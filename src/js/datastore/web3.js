// Web3 datastore module for connection to a web3 wallet.

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import Web3 from "web3";

let web3;

export default {
  namespaced: true,
  state: () => ({
    web3Enabled: false,
    account: '', // User ETH address.
  }),
  mutations: {
    setWeb3Enabled(state, status) {
      state.web3Enabled = status;
    },
    setAccount(state, account) {
      state.account = account;
    }
  },
  actions: {
    async init({ state, commit, dispatch }) {
      try {
        await loadWeb3();
        commit('setWeb3Enabled', true);
        console.log("Web3 loaded");
      } catch {
        console.log("Web3 couldn't be loaded");
        return;
      }
    },
    async connectAccount({ commit }) {
      await connectToWallet();
      let res = await web3.eth.getAccounts();
      commit("setAccount", res[0]);
    },
  },
};

let loaded = false;

function loadWeb3() {
  return new Promise((resolve, reject) => {
    if (Web3.givenProvider) {
      window.web3 = new Web3(Web3.givenProvider);
      web3 = window.web3;
      loaded = true;
      resolve();
    } else if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      web3 = window.web3;
      loaded = true;
      resolve();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      web3 = window.web3;
      loaded = true;
      resolve();
    } else {
      // window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
      reject();
    }
  });
}

async function connectToWallet() {
  if (!loaded) {
    try {
      await loadWeb3();
    } catch (err) {
      return;
    }
  }
  await window.ethereum.enable();
}

async function disconnect() {
  if (!loaded) {
    return;
  } else {
    try {
      await window.ethereum.disable();
    } catch (err) {
      return;
    }
  }
}
