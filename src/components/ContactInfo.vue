<template>
  <div class="ba-contact">
    <div class="ba-contact-info">
      <h1 class="ba-contact-info__title">CONTACT INFO</h1>
      <div class="ba-contact-desc">
        <p class="ba-contact-desc__text">
          TemplateMonster provides 24/7 support for all its
          <a
            href="#"
            class="ba-contact-desc__link"
          >premium products</a>. Freebies go without it.
        </p>
        <p class="ba-contact-desc__text">
          If you have any questions regarding the customization of the chosen free theme, ask
          <a
            href="#"
            class="ba-contact-desc__link"
          >TemplateTuning</a> to help you on a paid basis.
        </p>
      </div>
      <div class="ba-contact-map">
        <google-maps></google-maps>
      </div>
      <div class="ba-contact-adress">
        <p class="ba-contact-adress__text">
          The Company Name Inc.
          <br />8901 Marmora Road,
          <br />Glasgow, D04 89GR.
        </p>
        <p class="ba-contact-adress__text">
          <span title="Freephone">Freephone:+1 800 559 6580</span>
          <br />
          <span title="Telephone">Telephone:+1 800 603 6035</span>
          <br />
          <span title="Fax">FAX:+1 800 889 9898</span>
          <br />E-mail:
          <a href="#" class="ba-contact-adress__link">mail@demolink.org</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script scoped>
import GoogleMaps from "./GoogleMaps";
export default {
  data() {
    return {};
  },
  components: {
    googleMaps: GoogleMaps
  }
};
</script>

<style lang="scss">
.ba-contact {
  padding: 110px 0 120px;

  .ba-contact-info {
    &__title {
      font-size: 1.875rem;
      color: #002747;

      @media screen and(max-width: 731px) {
        text-align: center;
      }
    }
  }

  &-desc {
    margin-top: 30px;
    margin-bottom: 25px;

    &__text {
      font-size: 0.875rem;
      color: #737272;

      &:first-child {
        margin-bottom: 18px;
      }
    }

    &__link {
      color: #f3aa29;
    }
  }

  &-map {
    width: 100%;
    height: 350px;
  }

  &-adress {
    margin-top: 27px;

    &__text {
      font-size: 0.875rem;
      color: #737272;
      line-height: 20px;

      &:first-child {
        margin-bottom: 18px;
      }
    }

    &__link {
      color: #f3aa29;
    }
  }
}
</style>