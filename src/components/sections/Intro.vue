<template>
  <div class="blood-to-black">
    <v-container class="full-height">
      <h2 class="hidden-md-and-up text-h2 white--text">Rising Skulls</h2>

      <v-row align="center" class="my-auto d-flex flex-wrap-reverse">
        <v-col md="6" xs="12" class="order-1">
          <h1
            class="
              my-auto
              text-md-h1 text-sm-h4
              white--text
              text-center text-md-left text-align-center
            "
          >
            A collection of 4000 NFTs living on the Polygon blockchain.
          </h1>
        </v-col>

        <v-col md="6" xs="12" class="order-2">
          <v-img src="img/RisingSkullsLogo_xl.png" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Intro",
  components: {},
  data: () => ({}),
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}
</style>