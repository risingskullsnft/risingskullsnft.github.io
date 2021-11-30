<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="black">
        <strong class="subheading">Join us!</strong>

        <v-spacer></v-spacer>

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
          :key="icon.icon"
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
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Rising Skulls</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: "mdi-twitter", href: "https://twitter.com/RisingSkullsNFT" },
      { icon: "mdi-discord", href: "https://discord.gg/9P9465WzWp" },
    ],
  }),
};
</script>