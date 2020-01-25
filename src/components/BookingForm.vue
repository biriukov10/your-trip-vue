<template>
  <form class="ba-form">
    <fieldset class="ba-form-title">
      <legend class="ba-form-title__item">Booking Form</legend>
    </fieldset>
    <div class="ba-form-input">
      <div class="ba-form-input-wrapp">
        <input type="text" class="ba-form-input__item" placeholder="Name:" />
        <input
          type="email"
          class="ba-form-input__item"
          placeholder="Email:"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
      </div>
      <div class="ba-form-input-wrapp">
        <select name="country" class="ba-form-input__item ba-form-input__item--select">
          <option :value="item" v-for="(item, index) in country" :key="index">{{ item }}</option>
        </select>
        <input type="text" class="ba-form-input__item" placeholder="Hotel:" />
      </div>
    </div>
    <div class="ba-form-calendar">
      <div class="ba-form-calendar-wrapp">
        <label class="ba-form-calendar__desc" for="dateOne">Chek-in</label>
        <input class="ba-form-calendar__item" type="date" id="dateOne" value="2020-01-29" />
      </div>
      <div class="ba-form-calendar-wrapp">
        <label class="ba-form-calendar__desc" for="dateTwo">Chek-out</label>
        <input class="ba-form-calendar__item" type="date" id="dateTwo" value="2020-06-01" />
      </div>
    </div>
    <h3 class="ba-form__title">Comfort</h3>
    <div class="ba-form-radio">
      <label class="ba-form-radio__desc" for="cheap">
        <input class="ba-form-radio__item" type="radio" id="cheap" name="choine" checked />
        Cheap
      </label>
      <label class="ba-form-radio__desc" for="standart">
        <input class="ba-form-radio__item" type="radio" id="standart" name="choine" />
        Standart
      </label>
      <label class="ba-form-radio__desc" for="lux">
        <input class="ba-form-radio__item" type="radio" id="lux" name="choine" />
        Lux
      </label>
    </div>
    <div class="ba-form-select">
      <label class="ba-form-select__desc" for="adults">
        Adults
        <select class="ba-form-select__item" name="adults" id="adults" tabindex="3">
          <option class="ba-form-select__number" value="1">1</option>
          <option class="ba-form-select__number" value="2">2</option>
        </select>
      </label>
      <label class="ba-form-select__desc" for="children">
        Children
        <select class="ba-form-select__item" name="Children" id="children" tabindex="3">
          <option class="ba-form-select__number" value="1">1</option>
          <option class="ba-form-select__number" value="2">2</option>
        </select>
      </label>
      <label class="ba-form-select__desc" for="rooms">
        Rooms
        <select class="ba-form-select__item" name="rooms" id="rooms" tabindex="3">
          <option class="ba-form-select__number" value="1">1</option>
          <option class="ba-form-select__number" value="2">2</option>
        </select>
      </label>
    </div>
    <div class="ba-form-area">
      <textarea class="ba-form-area__item" placeholder="Message"></textarea>
    </div>
    <div class="ba-form-link ba-form-link--btn">
      <button class="ba-form-link__item">Submit</button>
    </div>
  </form>
</template>

<script>
import { country } from "../services/CountryService";

export default {
  data() {
    return {
      search: "",
      country
    };
  }
};
</script>

<style lang="scss" scoped>
$primary-width: 100%;
$primary-color: #f0f3f5;
$secondary-color: #96a5b2;
$background-color: #737272;
$primaryFontSize: 0.875rem;

.ba-form {
  font-size: $primaryFontSize;
  color: lighten($background-color, 10);

  &-title {
    border: none;
    font-size: $primaryFontSize + 1rem;
    text-transform: uppercase;
    margin-bottom: 40px;
    color: #002747;
  }

  &-input {
    margin-bottom: 30px;

    &-wrapp {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;

      &:nth-child(2) {
        margin-bottom: 0;
      }

      @media screen and (max-width: 861px) {
        margin-bottom: 30px;
      }
    }

    &__item {
      width: $primary-width;
      max-width: 195px;
      display: inline-block;
      padding: 0.625rem;
      background-color: $primary-color;

      &--select {
        color: $background-color;
      }

      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      @media screen and (max-width: 861px) {
        width: $primary-width;
        max-width: 310px;
        margin: 0 auto 10px;
      }

      @media screen and (max-width: 510px) {
        width: $primary-width;
        max-width: 400px;
      }
    }
  }

  &-calendar {
    margin-bottom: 5px;

    &-wrapp {
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__item {
      position: relative;
      width: $primary-width;
      max-width: 336px;
      margin-left: auto;
      background-color: $primary-color;
      padding: 10px 20px;
      color: lighten($background-color, 10);
      font-size: $primaryFontSize;
      cursor: pointer;
      font-family: "Open Sans", sans-serif;

      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      &::after {
        content: "\f073";
        position: absolute;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 1rem;
        margin: 0 0.5rem;
        display: inline-block;
        right: 0;
        cursor: pointer;
        color: $secondary-color;
      }

      @media screen and (max-width: 510px) {
        width: $primary-width;
        max-width: 400px;
        margin: 0 auto;
      }
    }
  }

  &-radio {
    display: flex;
    margin-top: 10px;
    margin-bottom: 15px;

    &__desc {
      margin-right: 30px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &-select {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    &__item {
      color: $secondary-color;
      background-color: $primary-color;
      margin-left: 19px;
      padding: 3px;

      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }
    }

    @media screen and (max-width: 510px) {
      justify-content: space-around;
    }
  }

  &-area {
    &__item {
      width: $primary-width;
      min-height: 100px;
      padding: 13px 15px;
      background-color: $primary-color;
      font-family: "Open Sans", sans-serif;

      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      @media screen and(max-width: 861px) {
        min-height: 130px;
      }
    }
  }

  &-link {
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;

    &__item {
      font-size: $primaryFontSize;
      background-color: #e5e5e5;
      color: $background-color;
      padding: 8px 27px;
      border-radius: 15px;
      border: 1px solid transparent;
      transition: 0.3s;
      cursor: pointer;

      &:active,
      &:focus {
        border: 1px solid green;
      }

      &:hover {
        background-color: $background-color;
        color: #dad7d7;
        border-color: #dad7d7;
      }
    }
  }
}
</style>