<template>
  <main>
    <nav-logo></nav-logo>
    <categories-blog></categories-blog>
  </main>
</template>

<script>
import Categories from "../components/Categories";
import NavLogo from "../components/NavLogo";

export default {
  data() {
    return {};
  },
  components: {
    categoriesBlog: Categories,
    NavLogo
  }
};
</script>

<style lang="scss" scoped>
</style>