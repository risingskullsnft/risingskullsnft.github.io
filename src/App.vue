<template>
  <div id="app">
    <header></header>
    <div>
      <!-- Dynamic routes are displayed here -->
      <router-view />
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "App",
  // On component init.
  mounted() {
    // Init Web3 via a Vuex datastore.
    this.$store.dispatch("web3/init");
  },
};
</script>

<style src="./index.css" />
