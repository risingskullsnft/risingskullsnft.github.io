<template>
  <div class="blood-to-black">
    <v-container>
      <h1 class="text-h2 white--text">Rarity</h1>
      <p clasS="white--text py-4">
        Only the rarest of all can earn a lot of RUM when held in an undisclosed
        island on the OpenSea.
      </p>
      <v-form ref="form">
        <v-container>
          <div class="d-flex justify-center">
            <v-text-field
              v-model="form.tokenId"
              class="mr-2 shrink"
              placeholder="Token ID"
              width="150"
              outlined
              dark
            ></v-text-field>
            <v-btn dark x-large color="red darken-4" @click="getTokenDataById">
              GET RARITY
            </v-btn>
          </div>
        </v-container>
      </v-form>

      <v-row>
        <v-card
          :loading="loading"
          color="#464646"
          class="mx-auto mb-8"
          max-width="400"
          dark
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            contain
            max-height="400"
            lazy-src="img/RisingSkullsLogo_preview.png"
            :src="tokenInfo.image"
          ></v-img>

          <v-card-title>Rarity Rank: {{ tokenInfo.rarityRank }}</v-card-title>

          <v-card-text>
            <div class="my-1 text-subtitle-1">{{ tokenInfo.name }}</div>

            <div>
              {{ tokenInfo.description }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Traits</v-card-title>

          <v-card-text>
            <v-chip-group column>
              <v-chip
                v-for="n in tokenInfo.attributes"
                :key="n.value"
                color="#652727"
                >{{ n.value }}</v-chip
              >
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Rarity",
  data() {
    return {
      loading: false,
      form: {
        tokenId: null,
      },
    };
  },
  computed: {
    ...mapGetters(["tokenInfo"]),
  },
  methods: {
    ...mapActions(["fetchTokenInfo"]),
    getTokenDataById() {
      this.fetchTokenInfo(this.form.tokenId);
    },
  },
};
</script>
