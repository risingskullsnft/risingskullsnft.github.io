<template>
  <div class="flex flex-col h-screen justify-between">
    <div class="from-blood to-black bg-gradient-to-br w-full h-screen block">
      <Card class="container absolute z-10" />
      <div
        class="
          h-20
          py-1
          mt-8
          font-pirata
          text-6xl
          lg:text-8xl
          text-white text-center
        "
      >
        {{ name }}
      </div>
      <div class="h-2/3 md:h-2/3"></div>

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
      <HeroCarousel class="sticky bottom-0 mx-auto" />
    </div>
  </div>
</template>

<script>
import HeroCarousel from "@/components/HeroCarousel.vue";
import Card from "@/components/Card.vue";
import SocialBar from "@/components/SocialBar.vue";

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
