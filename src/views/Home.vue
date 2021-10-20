<template>
  <div class="flex flex-col h-screen justify-between">
    <div class="from-blood to-black bg-gradient-to-br w-full h-screen block">
      <Card class="absolute h-10 z-10" />
      <div class="h-80 py-6 font-pirata text-8xl text-white text-center">
        {{ name }}
      </div>
      <div class="mx-auto h-80"></div>

      <!-- <router-link to="about">About</router-link> -->
      <SocialBar
        class="
          invisible
          md:visible
          z-10
          flex
          absolute
          top-0
          right-0
          py-4
          px-6
          text-white
        "
      />
      <HeroCarousel class="sticky bottom-0" />
    </div>
  </div>
</template>

<script>
import HeroCarousel from "../components/HeroCarousel";
import Card from "../components/Card";
import SocialBar from "../components/SocialBar";

export default {
  components: {
    HeroCarousel,
    Card,
    SocialBar,
  },
  data() {
    return {
      name: "Rising Skulls",
    };
  },
};
</script>
