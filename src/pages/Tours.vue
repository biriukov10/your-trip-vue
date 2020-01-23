<template>
  <main>
    <nav-logo></nav-logo>
    <tour-card></tour-card>
  </main>
</template>

<script>
import TourCard from "../components/TourCard";
import NavLogo from "../components/NavLogo";

export default {
  data() {
    return {};
  },
  components: {
    tourCard: TourCard,
    NavLogo
  }
};
</script>

<style lang="scss" scoped>
</style>