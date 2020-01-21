<template>
  <main class="ba-main">
    <div class="container">
      <div class="ba-row">
        <div class="ba-col-6 ba-col-sm-12">
          <section-contact class="right"></section-contact>
        </div>
        <div class="ba-col-6 ba-col-sm-12">
          <contact-form></contact-form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
export default {
  data() {
    return {};
  },
  components: {
    sectionContact: ContactInfo,
    contactForm: ContactForm
  }
};
</script>

<style lang="scss" scoped>
.ba-main {
  padding: 110px 0 115px;

  .right {
    margin-right: 5vw;
  }

  @media screen and(max-width: 731px) {
    padding: 50px 0;
  }
}

@media screen and(max-width: 731px) {
  .ba-main {
    padding: 30px 0;

    .ba-col-sm-12 {
      width: 100%;

      .right {
        margin-right: 0;
        padding: 20px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
