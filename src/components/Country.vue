<template>
  <div class="ba-offers">
    <div class="container">
      <div class="ba-row">
        <div class="ba-col-8 ba-col-sm-12">
          <h1 class="ba-offers__title">Special offers</h1>
          <div class="ba-offers-special" v-for="(card, index) in sectionCard" :key="index">
            <img :src="card.link" alt="Barcelona" class="ba-offers-special__image" />
            <div class="ba-offers-info">
              <h2 class="ba-offers-info__title">{{ card.title }}</h2>
              <p class="ba-offers-info__text">
                Cras facilisis, nulla vel viverra auctor, leo gna sodales felis, quis malesuada nibh odio ut velit. Proin pharetra luctus
                diam, a celerisque eros convallis accumsan.
              </p>
              <p
                class="ba-offers-info__text ba-offers-info__text--margin"
              >Maecenas vehicula egestas venenatis. Duis massa elit, auctor non pellentesque vel aliquet sit amet</p>
              <a href="#" target="_blank" class="ba-offers-info__link">LEARN MORE</a>
            </div>
          </div>
        </div>
        <div class="ba-col-4 ba-col-sm-12">
          <div class="ba-offers-choice">
            <h2 class="ba-offers-choice__title">Choose the country</h2>
            <input
              type="text"
              placeholder="Search"
              class="ba-offers-choice__search"
              v-model="search"
            />
            <ul class="ba-offers-country">
              <li
                class="ba-offers-country__item"
                v-for="(item, index) of filteredList"
                :key="index"
              >{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { country, countryDecsription } from "../services/CountryService";

export default {
  data() {
    return {
      sectionCard: countryDecsription,
      search: "",
      country
    };
  },
  computed: {
    filteredList() {
      return this.country.filter(name => {
        return name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$primary-pixel: 100px;
$font-size: 0.875;
$primary-color: #e5e5e5;
$secondary-color: #737272;
$danger-color: #c73430;
$sucsses-color: #f3aa29;
$blue-color: #002747;

.ba-offers {
  padding-top: $primary-pixel + 10px;
  padding-bottom: $primary-pixel + 20px;
  margin-bottom: $primary-pixel - 80px;

  &__title {
    text-transform: uppercase;
    color: $blue-color;
    font-size: $font-size + 1rem;
  }

  &-special {
    display: flex;
    margin-top: 15px;

    &__image {
      @media screen and(max-width: 550px) {
        width: 100%;
        width: $primary-pixel + 400px;
        min-height: $primary-pixel + 300px;
      }
    }

    @media screen and(max-width: 550px) {
      flex-direction: column;
      margin-bottom: $primary-pixel - 60px;
    }
  }

  &-info {
    margin-left: $primary-pixel - 80px;
    margin-right: $primary-pixel - 90px;

    &__title {
      font-size: $font-size + 0.25rem;
      color: $sucsses-color;
      text-transform: uppercase;
      margin-bottom: $primary-pixel - 75px;

      @media screen and(max-width: 550px) {
        margin-bottom: $primary-pixel - 90px;
      }
    }

    &__text {
      font-size: $font-size - 0.125rem;
      color: $secondary-color;
      margin-bottom: $primary-pixel - 80px;

      &--margin {
        margin-bottom: $primary-pixel - 60px;

        @media screen and(max-width: 550px) {
          margin-bottom: $primary-pixel - 80px;
        }
      }
    }

    &__link {
      display: inline-block;
      color: $danger-color;
      font-size: $font-size;
      background-color: $primary-color;
      padding: 7px 17px;
      border-radius: 15px;
      transition: 0.3s;
      border: 1px solid transparent;

      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      &:hover {
        background-color: #c73430;
        color: $primary-color;
        border-color: $primary-color;
      }
    }

    @media screen and(max-width: 550px) {
      margin-top: $primary-pixel - 70px;
    }
  }

  &-choice {
    margin-left: 30px;

    &__title {
      font-size: $font-size + 0.25rem;
      color: $blue-color;
      text-transform: uppercase;
      margin-bottom: 15px;
    }

    &__search {
      background-color: #dad7d7;
      border-radius: 5px;
      padding: $font-size - 0.45rem;
      font-size: $font-size;
      color: $secondary-color;

      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      @media screen and (max-width: 733px) {
        padding: $font-size + 0.0125rem;
      }
    }

    @media screen and (max-width: 733px) {
      margin-left: 0;
    }
  }

  &-country {
    margin-top: $primary-pixel - 90px;
    padding-left: $primary-pixel - 75px;

    &__item {
      position: relative;
      font-size: $font-size + 0.25rem;
      color: $secondary-color;

      &::before {
        content: url("https://i.ibb.co/2hCNQ9p/arrow-min.png");
        position: absolute;
        left: -17px;
        top: -2px;
      }
    }
  }

  @media screen and (max-width: 733px) {
    padding-top: $primary-pixel - 40px;
    padding-bottom: $primary-pixel - 40px;
  }
}
</style>