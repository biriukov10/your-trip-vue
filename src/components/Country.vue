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
              <a href="#" class="ba-offers-info__link">LEARN MORE</a>
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
.ba-offers {
  padding-top: 110px;
  padding-bottom: 120px;
  margin-bottom: 20px;

  &__title {
    text-transform: uppercase;
    color: #002747;
    font-size: 1.875rem;
  }

  &-special {
    display: flex;
    margin-top: 15px;

    &__image {
      @media screen and(max-width: 550px) {
        width: 100%;
        width: 500px;
        min-height: 400px;
      }
    }

    @media screen and(max-width: 550px) {
      flex-direction: column;
      margin-bottom: 40px;
    }
  }

  &-info {
    margin-left: 20px;
    margin-right: 10px;

    &__title {
      font-size: 1.125rem;
      color: #f3aa29;
      text-transform: uppercase;
      margin-bottom: 25px;

      @media screen and(max-width: 550px) {
        margin-bottom: 10px;
      }
    }

    &__text {
      font-size: 0.75rem;
      color: #737272;
      margin-bottom: 20px;

      &--margin {
        margin-bottom: 40px;

        @media screen and(max-width: 550px) {
          margin-bottom: 20px;
        }
      }
    }

    &__link {
      display: inline-block;
      color: #c73430;
      font-size: 0.875rem;
      background-color: #e5e5e5;
      padding: 7px 17px;
      border-radius: 15px;
      transition: 0.3s;
      border: 1px solid transparent;

      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      &:hover {
        background-color: #c73430;
        color: #e5e5e5;
        border-color: #dad7d7;
      }
    }

    @media screen and(max-width: 550px) {
      margin-top: 30px;
    }
  }

  &-choice {
    &__title {
      font-size: 1.25rem;
      color: #002747;
      text-transform: uppercase;
      margin-bottom: 15px;
    }

    &__search {
      background-color: #dad7d7;
      border-radius: 5px;
      padding: 0.425rem;
      font-size: 0.875rem;
      color: #737272;

      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      @media screen and (max-width: 733px) {
        padding: 0.875rem;
      }
    }
  }

  &-country {
    margin-top: 10px;
    padding-left: 25px;

    &__item {
      position: relative;
      font-size: 1.125rem;
      color: #737272;

      &::before {
        content: url("https://i.ibb.co/2hCNQ9p/arrow-min.png");
        position: absolute;
        left: -17px;
        top: -2px;
      }
    }
  }

  @media screen and (max-width: 733px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>