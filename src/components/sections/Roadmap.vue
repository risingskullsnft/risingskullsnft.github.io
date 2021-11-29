<template>
  <div class="blood-to-black">
    <v-container>
      <h1 class="text-h2 white--text">Roadmap</h1>
      <v-layout justify-center>
        <v-timeline
          align-top
          :dense="$vuetify.breakpoint.smAndDown"
          class="my-6"
        >
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
          >
            <v-card
              :color="item.color"
              :width="$vuetify.breakpoint.xs ? 300 : 800"
              dark
            >
              <v-card-title class="text-h6"> {{ item.title }} </v-card-title>
              <v-card-text class="white text--primary">
                <p>
                  <span v-html="item.text"></span>
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Roadmap",
  data() {
    return {
      items: [
        {
          title: "Phase I",
          text: "<br>✅ Snapshot taken of all the 4k NFTs hodlers<br>✅ Develop ERC721 smart contracts<br>✅ Project relaunch on Polygon chain<br>✅ Airdrop Rising Skulls NFTs to Pirates OGs",
          color: "red darken-4",
          icon: "mdi-skull",
        },
        {
          title: "Phase II",
          text: "<br>✅ $RUM token name chosen by the community<br> ✅ $RUM token max supply 21 million<br>🔃 $RUM token smart-contract completion (90%)<br>🔃 $RUM token smart-contract launch on Polygon<br>🔃 Web3 integration on the website<br>🔃 RUM Token claimable",
          color: "red darken-4",
          icon: "mdi-skull",
        },
        {
          title: "Phase III",
          text: "<br>🔃 Twitter raids scheduled<br>🔃 Discord shilling to other NFT groups<br>🔃 Giveaways on Discord & Twitter<br>🔃 Rarity tools integration",
          color: "#000000",
          icon: "mdi-skull",
        },
        {
          title: "Phase IV",
          text: "<br>🔃 Increase Skull NFTs ranks using $RUM<br>🔃 Level up Skull NFTs using $RUM<br>🔃 Finishing Cards Game Mechanics<br>🔃 Cards Game Launch (Turn Based Game)<br>🔃 The in-game currency will be $RUM",
          color: "#330022",
          icon: "mdi-skull",
        },
      ],
    };
  },
};
</script>