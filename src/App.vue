<template>
  <v-app class="blood-to-black">
    <v-app-bar app class="black-to-blood" dark height="80px">
      <v-toolbar-title
        ><h2 class="text-h2 hidden-sm-and-down">
          Rising Skulls
        </h2></v-toolbar-title
      >
      <v-avatar size="64" class="hidden-md-and-up blood-to-black">
        <v-img src="img/RisingSkullsLogo_sm.png" />
      </v-avatar>
      <v-spacer></v-spacer>

      <v-row no-gutters align="center">
        <v-spacer></v-spacer>
        <v-col
          v-if="web3Modal.active"
          cols="9"
          class="hidden-sm-and-down font-weight-bold"
          align="end"
        >
          <!-- <span class="hidden-sm-and-down mx-2"
            >Balance: {{ rumBalance }} $RUM</span
          >
          <span class="hidden-sm-and-down mx-2"
            >Claimable: {{ rewardsBalance }} $RUM
          </span> -->
          <v-btn
            class="mx-1"
            href="https://opensea.io/collection/rising-skulls"
            target="_blank"
            dark
            icon
            align="end"
          >
            <v-img contain src="icons/os_logo.svg" width="24" height="24" />
          </v-btn>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            :href="icon.href"
            target="_blank"
            class="mx-1"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-col>

        <v-col md="3" xs="12" mx4 class="text-right">
          <v-btn
            v-if="web3Modal.active"
            :disabled="rewardsBalance == 0"
            large
            elevation="2"
            color="red darken-1"
            @click="claimRewards"
            >Claim RUM</v-btn
          >
          <v-btn
            v-else
            large
            elevation="2"
            color="red darken-1"
            @click="$store.dispatch('connect')"
            >Connect</v-btn
          >
        </v-col>
      </v-row>
    </v-app-bar>
    <web3-modal-vue
      ref="web3modal"
      :theme="theme"
      :provider-options="providerOptions"
      cache-provider
    />

    <v-main>
      <!-- INTRO -->
      <intro />
      <!--  -->

      <!-- ARTWORKS -->
      <artwork />
      <!-- RARITY -->
      <rarity />

      <!-- ROADMAP -->
      <roadmap />

      <!-- TEAM -->

      <!-- JOIN US -->

      <!-- FAQ -->

      <!-- Footer -->
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Web3ModalVue from "web3modal-vue";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import { web3Modal } from "./mixins";

import Rarity from "./components/sections/Rarity.vue";
import Intro from "./components/sections/Intro.vue";
import Artwork from "./components/sections/Artwork.vue";
import Roadmap from "./components/sections/Roadmap.vue";
import Footer from "./components/sections/Footer.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    Web3ModalVue,
    Rarity,
    Intro,
    Artwork,
    Roadmap,
    Footer,
  },
  mixins: [web3Modal],
  data() {
    return {
      theme: "dark",
      menu: [
        { icon: "home", title: "Link A" },
        { icon: "info", title: "Link B" },
        { icon: "warning", title: "Link C" },
      ],
      icons: [
        { icon: "mdi-twitter", href: "https://twitter.com/RisingSkullsNFT" },
        { icon: "mdi-discord", href: "https://discord.gg/9P9465WzWp" },
      ],
      providerOptions: {
        // walletconnect: {
        //   package: WalletConnectProvider,
        //   options: {
        //     infuraId: "-"
        //   }
        // }
      },
    };
  },
  mounted() {
    this.$nextTick(async () => {
      const web3modal = this.$refs.web3modal;
      this.$store.commit("setWeb3Modal", web3modal);
      if (web3modal.cachedProvider) {
        await this.$store.dispatch("connect");
        this.fetchRewards();
        this.fetchRumBalance();
      }
    });
  },
  computed: {
    ...mapGetters(["rumBalance", "rewardsBalance"]),
  },
  methods: {
    fetchRewards() {
      this.$store.dispatch("fetchRewardsAmount");
    },
    fetchRumBalance() {
      this.$store.dispatch("fetchRumBalance");
    },
    claimRewards() {
      this.$store.dispatch("claimRewards");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Pirata+One");
@import url("https://fonts.googleapis.com/css?family=Lato");

.logoText {
  font-family: "Pirata One";
  font-size: 3.2rem;
  letter-spacing: 0.1em;
}

.black-to-blood {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    270deg,
    rgba(138, 3, 3, 1) 40%,
    rgba(0, 0, 0, 1) 100%
  );
}

.blood-to-black {
  background: rgb(138, 3, 3);
  background: linear-gradient(
    152deg,
    rgba(138, 3, 3, 1) 20%,
    rgba(0, 0, 0, 1) 100%
  );
}

#app {
  font-family: "Lato";
}
</style>