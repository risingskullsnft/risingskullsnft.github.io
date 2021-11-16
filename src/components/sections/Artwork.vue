<template>
  <div class="blood-to-black">
    <v-container>
      <h2 class="text-h2 white--text">Artwork</h2>
      <p class="white--text py-4">
        Rising Skulls are unique and randomly generated NFT masterpieces. Only
        4000 to ever exist. Simply unable to rest, they all returned from the
        dead, roaming the blockchain for riches, revenge and glory!
      </p>
      <v-row align="center" class="my-4">
        <v-col
          v-for="n in images.slice(0, 4)"
          :key="n"
          class="d-flex child-flex"
          cols="3"
        >
          <v-img :src="getImage(n)" alt="" />
        </v-col>

        <v-col class="d-flex child-flex" cols="3">
          <v-img :src="getImage(images[4])" alt="" />
        </v-col>

        <v-col
          class="d-flex child-flex"
          justify="center"
          align="center"
          cols="6"
        >
          <p class="text-h3 text-md-h1 white--text">From <br />150 Traits</p>
        </v-col>

        <v-col class="d-flex child-flex" cols="3">
          <v-img :src="getImage(images[5])" alt="" />
        </v-col>

        <v-col
          v-for="n in images.slice(6, 10)"
          :key="n"
          class="d-flex child-flex"
          cols="3"
        >
          <v-img :src="getImage(n)" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Artwork",

  data: () => ({
    images: [1212, 1510, 1850, 3043, 3419, 3571, 3667, 2, 242, 407],
  }),
  methods: {
    getImage(id) {
      return require(`@/assets/skulls/${id}.png`);
    },
  },
};
</script>