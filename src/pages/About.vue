<template>
  <main>
    <slick-slider></slick-slider>
    <app-card></app-card>
    <app-booking></app-booking>
    <news-date></news-date>
  </main>
</template>

<script>
import Card from "../components/Card";
import Booking from "../components/Booking.vue";
import News from "../components/News";
import Slider from "../components/Slider";
export default {
  data() {
    return {};
  },
  components: {
    appCard: Card,
    appBooking: Booking,
    newsDate: News,
    slickSlider: Slider
  }
};
</script>

<style lang="scss" scoped>
</style>