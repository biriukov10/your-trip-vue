<template>
  <main>
    <nav-logo></nav-logo>
    <offer-country></offer-country>
  </main>
</template>

<script>
import Country from "../components/Country";
import NavLogo from "../components/NavLogo";

export default {
  data() {
    return {};
  },
  components: {
    offerCountry: Country,
    NavLogo
  }
};
</script>

<style lang="scss" scoped>
</style>