<template>
  <v-container fluid class="wrapper blood-to-black">
    <v-row align="center" justify="end">
      <v-col cols="12" justify="end">
        <glitch-logo src="img/RisingSkullsLogo_sm.png" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GlitchLogo from "@/components/GlitchLogo";

export default {
  name: "LogoTest",
  components: {
    GlitchLogo,
  },
  data: () => ({}),
};
</script>

<style scoped>
.full-height {
  height: 100%;
}
</style>