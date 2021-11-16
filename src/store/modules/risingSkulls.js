// import {numberOrNull} from "@/utils/helpers";
import {
  getRumTokenContract,
  getRisingSkullsNFTContract,
} from "@/utils/contract";
import web3 from "web3";

const risingSkullsStore = {
  state: {
    rewardsLoading: false,
    rewardsBalance: 32.5,
    rumBalanceLoading: false,
    rumBalance: 0,
    rarityRank: null,
    tokenInfo: {
      rarityRank: null,
      name: null,
      description: null,
      image: null,
      attributes: [],
    },
  },
  getters: {
    rewardsBalance: (state) => state.rewardsBalance,
    rumBalance: (state) => state.rumBalance,
    rarityRank: (state) => state.rarityRank,
    tokenInfo: (state) => state.tokenInfo,
  },
  mutations: {
    setRewardsLoadingState(state, isLoading) {
      state.rewardsLoading = isLoading;
    },
    setRewardsBalance(state, balance) {
      state.rewardsBalance = balance;
    },
    setRumBalanceLoading(state, isLoading) {
      state.rumBalanceLoading = isLoading;
    },
    setRumBalance(state, balance) {
      state.rumBalance = balance;
    },
    setRarityRank(state, rank) {
      console.log(`Mutate RarityRank`);
      state.rarityRank = rank;
    },
    setTokenInfo(state, tokenInfo) {
      state.tokenInfo = tokenInfo;
    },
  },
  actions: {
    async fetchRumBalance({ commit, rootState }) {
      commit("setRumBalanceLoading", true);
      try {
        const balance = await getRumTokenContract()["balanceOf"](
          rootState.web3Modal.account
        );
        const ethBalance = web3.utils.fromWei(balance.toString(), "ether");
        commit("setRumBalance", ethBalance);
      } catch (err) {
        console.error(err);
      }
      commit("setRumBalanceLoading", false);
    },
    async fetchRewardsAmount({ commit, rootState }) {
      commit("setRewardsLoadingState", true);

      try {
        // console.log(`Fetching rewards for user: ${web3Modal.account}`);
        const balance = await getRumTokenContract()["getTotalClaimable"](
          rootState.web3Modal.account
        );

        const ethBalance = web3.utils.fromWei(balance.toString(), "ether");
        commit("setRewardsBalance", ethBalance);
      } catch (err) {
        console.error(err);
      }
      commit("setRewardsLoadingState", false);
    },

    async getRarityById({ commit }, tokenId) {
      console.log(`Fetching Rarity Rank for Token: ${tokenId}`);
      const rank = await getRisingSkullsNFTContract()["getRarity"](tokenId);
      console.log(`Retrieved Rank: ${rank}`);
      commit("setRarityRank", parseInt(rank));
    },
    async claimRewards({ dispatch }) {
      try {
        const tx = await getRisingSkullsNFTContract()["getReward"]();
        const res = tx.wait();

        console.log(res);
        dispatch("fetchRumBalance");
        dispatch("fetchRewardsAmount");
      } catch (err) {
        console.error(err);
      }
    },
    async fetchTokenInfo({ commit }, tokenId) {
      // Fetch Rarity
      const rarityRank = await getRisingSkullsNFTContract()["getRarity"](
        tokenId
      );
      // Fetch TokenUri
      let tokenUri = await getRisingSkullsNFTContract()["tokenURI"](tokenId);
      if (tokenUri.includes("ipfs://")) {
        tokenUri = tokenUri.replace("ipfs://", "https://ipfs.io/ipfs/");
      }
      // Fetch TokenInfo
      console.log(`Fetching ${tokenUri}`);
      let tokenMetadata = await fetch(tokenUri);
      tokenMetadata = await tokenMetadata.json();
      tokenMetadata.image = tokenMetadata.image.replace(
        "ipfs://",
        "https://ipfs.io/ipfs/"
      );
      console.log(tokenMetadata);
      // Merge and commit
      commit("setTokenInfo", { ...tokenMetadata, rarityRank });
    },
  },
};

export default risingSkullsStore;
