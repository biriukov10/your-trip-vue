<template>
  <div id="app">
    <app-nav></app-nav>
    <!-- <about-pages></about-pages> -->
    <router-view></router-view>
    <!-- <offers-pages></offers-pages> -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import About from "./pages/About.vue";
import Offers from "./pages/Offers.vue";
import Blog from "./pages/Blog.vue";

export default {
  data() {
    return {};
  },
  components: {
    appNav: Nav,
    appFooter: Footer,
    aboutPages: About,
    offersPages: Offers,
    pageBlog: Blog
  }
};
</script>

<style lang="scss">
@import "assets/scss/app.scss";
</style>
