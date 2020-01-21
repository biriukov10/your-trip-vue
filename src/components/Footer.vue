<template>
  <footer class="ba-footer">
    <div class="container">
      <div class="ba-footer-wrapp">
        <div class="ba-footer-wrapp-license">
          <p
            class="ba-footer-wrapp-license__copyright"
          >Your Trip (c) 2014 | Privacy Policy | Website Template Designed by TemplateMonster.com</p>
        </div>
        <div class="ba-footer-wrapp-social">
          <a href="https://www.facebook.com/" target="_blank" class="ba-footer-wrapp-social__link">
            <i
              class="fab fa-facebook-f ba-footer-wrapp-social__item ba-footer-wrapp-social__item--facebook"
            ></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            class="ba-footer-wrapp-social__link ba-footer-wrapp-social__item--twitter"
          >
            <i class="fab fa-twitter ba-footer-wrapp-social__item"></i>
          </a>
          <a
            href="http://google.com/"
            target="_blank"
            class="ba-footer-wrapp-social__link ba-footer-wrapp-social__item--google"
          >
            <i class="fab fa-google-plus-g ba-footer-wrapp-social__item"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.ba-footer {
  padding: 33px 0 31px;
  background-color: #002141;
  color: #e5e5e5;
  overflow: hidden;

  &-wrapp {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-license {
      &__copyright {
        text-transform: uppercase;
        font-size: 0.625rem;
        color: #a3afba;
      }
    }

    &-social {
      &__link {
        display: inline-block;
        margin-right: 15px;

        &:last-child {
          margin-right: 0;
        }
      }

      &__item {
        padding: 9px 9px;
        background-color: #e85252;
        color: #e5e5e5;
        border-radius: 5px;
        transition: all 0.3s;

        &:hover {
          color: #fff;
          background-color: #e63131;
        }

        &--facebook {
          padding: 9px 14px;
        }

        &--twitter {
          padding: 9px 11px;
        }
      }
    }
  }
}
</style>