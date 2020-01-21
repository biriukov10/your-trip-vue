<template>
  <main>
    <app-card></app-card>
    <app-booking></app-booking>
    <news-date></news-date>
  </main>
</template>

<script>
import Card from "../components/Card";
import Booking from "../components/Booking.vue";
import News from "../components/News";
export default {
  data() {
    return {};
  },
  components: {
    appCard: Card,
    appBooking: Booking,
    newsDate: News
  }
};
</script>

<style lang="scss">
</style>