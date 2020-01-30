<template>
  <main>
    <section class="ba-tours">
      <div class="container">
        <div class="ba-row">
          <div class="ba-col-4 ba-col-sm-6" v-for="(item, index) in cardInfo" :key="index">
            <div class="ba-tours-card wow flipInX">
              <img :src="item.url" class="ba-tours-card__image" :alt="item.title.toLowerCase()" />
              <div class="ba-tours-info">
                <h2 class="ba-tours-info__title">{{ item.title }}</h2>
                <span class="ba-tours-info__price">
                  from
                  <br />
                  <b class="size">{{ item.price }}</b>
                  <b></b>
                </span>
              </div>
              <div class="ba-tours-card-desc">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { cardInfo } from "../services/CountryService";
new WOW().init();
export default {
  data() {
    return {
      cardInfo
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css");
$primary-padding: 120px;
$primary-width: 100%;
$font-size: 1.5rem;
$font-weight: 400;
$laze: 400;

.ba-tours {
  padding: $primary-padding 0;

  &-card {
    position: relative;
    transition: all 0.3s;
    margin-bottom: 30px;
    overflow: hidden;

    &__image {
      width: $primary-width;
    }

    &::before {
      position: absolute;
      content: "";
      width: $primary-width;
      height: $primary-width;
      background-color: #000;
      opacity: 0.5;
    }

    &:hover {
      box-shadow: 0 10px 20px rgba(110, 49, 49, 0.23),
        0 6px 6px rgba(110, 49, 49, 0.23);
    }

    &:nth-child(8) {
      margin-bottom: 0;
    }

    &-desc {
      display: flex;
      align-items: center;
      position: absolute;
      color: #fff;
      padding: 10px;
      font-size: $font-size - 0.625rem;
      transition: 0.3s;
    }

    &:hover .ba-tours-card-desc {
      transform: translateY(-$primary-width);
      padding: 20px 10px;

      @media screen and(max-width: 618px) {
        font-size: $font-size - 0.725rem;
      }

      @media screen and(max-width: 550px) {
        font-size: $font-size - 0.375rem;
      }

      @media screen and(max-width: 398px) {
        font-size: $font-size - 0.625rem;
      }
    }
    &:hover .ba-tours-info {
      transform: translateY(0);

      @media screen and(max-width: 1250px) {
        transform: translateY($primary-width - 50%);
      }

      @media screen and(max-width: 1000px) {
        transform: translateY($primary-width - 70%);
      }

      @media screen and(max-width: 910px) {
        transform: translateY(0);
      }

      @media screen and(max-width: 860px) {
        transform: translateY($primary-width - 50%);
      }

      @media screen and(max-width: 683px) {
        transform: translateY($primary-width - 70%);
      }

      @media screen and(max-width: 618px) {
        transform: translateY(0);
        font-size: $font-size - 0.725rem;
      }
    }
  }

  &-info {
    width: $primary-width;
    position: absolute;
    top: 0;
    transform: translateY($primary-width);
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    transition: 0.3s;

    font-weight: $font-weight;

    &__title {
      font-size: $font-size + 0.375rem;
      font-weight: $font-weight;

      @media screen and(max-width: 550px) {
        font-size: $font-size + 1rem;
      }

      @media screen and(max-width: 398px) {
        font-size: $font-size + 0.5rem;
      }
    }

    &__price {
      font-size: $font-size - 0.625rem;

      .size {
        font-size: $font-size;
        font-weight: $font-weight;
      }

      @media screen and(max-width: 550px) {
        font-size: $font-size;
      }
      @media screen and(max-width: 398px) {
        font-size: $font-size - 0.5rem;
      }
    }
    @media screen and(max-width: 550px) {
      transform: translateY($primary-width - 40%);
    }
  }

  @media screen and(max-width: 550px) {
    padding: $primary-padding 30px;
  }
}
</style>