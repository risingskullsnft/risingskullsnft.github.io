<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <img src="../assets/carousel/205.png" />
      <img src="../assets/carousel/639.png" />
      <img src="../assets/carousel/890.png" />
      <img src="../assets/carousel/2685.png" />
      <img src="../assets/carousel/2697.png" />
      <img src="../assets/carousel/2700.png" />
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "HeroCarousel",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: "linear",
      },
    };
  },
};
</script>

<style>
img {
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
}
</style>
