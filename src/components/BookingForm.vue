<template>
  <form class="ba-form" @submit.prevent="onSubmit">
    <fieldset class="ba-form-title">
      <legend class="ba-form-title__item">Booking Form</legend>
    </fieldset>
    <div class="ba-form-input">
      <div class="ba-form-input-wrapp">
        <input type="text" class="ba-form-input__item" placeholder="Name:" v-model.trim="name" />
        <input
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
          v-model.trim="email"
          type="email"
          class="ba-form-input__item"
          placeholder="Email:"
        />
        <small
          class="ba-form-input__invalid ba-form-input__invalid--email invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >Do not leave the field blank</small>
        <small
          class="ba-form-input__invalid invalid ba-form-input__invalid--email invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >Enter the correct email</small>
      </div>
      <div class="ba-form-input-select">
        <label class="ba-form-input-select__title">
          Country:
          <select name="country" v-model="selectedValue" class="ba-form-input-select__item">
            <option :value="index" v-for="(item, index) in countryHotel" :key="index">{{ index }}</option>
          </select>
        </label>
        <label class="ba-form-input-select__title">
          Hotel:
          <select name="hotel" v-model="hotel" class="ba-form-input-select__item">
            <option
              :value="item"
              v-for="(item, index) in countryHotel[selectedValue]"
              :key="index"
            >{{ item.hotel }}</option>
          </select>
        </label>
      </div>
    </div>
    <div class="ba-form-calendar">
      <div class="ba-form-calendar-wrapp">
        <label class="ba-form-calendar__desc" for="dateOne">Chek-in</label>
        <input
          class="ba-form-calendar__item"
          v-model="dateIn"
          type="date"
          id="dateOne"
          value="2020-01-29"
        />
      </div>
      <div class="ba-form-calendar-wrapp">
        <label class="ba-form-calendar__desc" for="dateTwo">Chek-out</label>
        <input
          class="ba-form-calendar__item"
          v-model="dateOut"
          type="date"
          id="dateTwo"
          value="2020-06-01"
        />
      </div>
    </div>
    <h3 class="ba-form__title">Comfort</h3>
    <div class="ba-form-radio">
      <label class="ba-form-radio__desc" for="cheap">
        <input
          class="ba-form-radio__item"
          v-model="cheap"
          type="radio"
          id="cheap"
          name="choine"
          checked
        />
        Cheap
      </label>
      <label class="ba-form-radio__desc" for="standart">
        <input
          class="ba-form-radio__item"
          type="radio"
          v-model="standart"
          id="standart"
          name="choine"
        />
        Standart
      </label>
      <label class="ba-form-radio__desc" for="lux">
        <input class="ba-form-radio__item" type="radio" id="lux" v-model="lux" name="choine" />
        Lux
      </label>
    </div>
    <div class="ba-form-select">
      <label class="ba-form-select__desc" for="adults">
        Adults
        <select
          class="ba-form-select__item"
          v-model="aldults"
          name="adults"
          id="adults"
          tabindex="3"
        >
          <option class="ba-form-select__number" value="1">1</option>
          <option class="ba-form-select__number" value="2">2</option>
          <option class="ba-form-select__number" value="3">3</option>
          <option class="ba-form-select__number" value="4">4</option>
        </select>
      </label>
      <label class="ba-form-select__desc" for="children">
        Children
        <select
          class="ba-form-select__item"
          name="Children"
          v-model="children"
          id="children"
          tabindex="3"
        >
          <option class="ba-form-select__number" value="1">1</option>
          <option class="ba-form-select__number" value="2">2</option>
          <option class="ba-form-select__number" value="3">3</option>
        </select>
      </label>
      <label class="ba-form-select__desc" for="rooms">
        Rooms
        <select
          class="ba-form-select__item"
          name="rooms"
          id="rooms"
          v-model="rooms"
          tabindex="3"
        >
          <option class="ba-form-select__number" value="1">1</option>
          <option class="ba-form-select__number" value="2">2</option>
          <option class="ba-form-select__number" value="3">3</option>
        </select>
      </label>
    </div>
    <div class="ba-form-area">
      <textarea
        class="ba-form-area__item"
        v-model.trim="text"
        placeholder="Message"
        :class="{invalid: ($v.text.$dirty && !$v.text.required) || ($v.text.$dirty && !$v.text.minLength)}"
      ></textarea>
      <small
        class="ba-form-area__invalid invalid"
        v-if="$v.text.$dirty && !$v.text.required"
      >Enter a text</small>
      <small
        class="ba-form-area__invalid invalid"
        v-else-if="$v.text.$dirty && !$v.text.minLength"
      >Message must be {{ $v.text.$params.minLength.min }} characters. {{ text.length }}</small>
    </div>
    <div class="ba-form-link ba-form-link--btn">
      <button type="submit" @click="onSubmit" class="ba-form-link__item">Submit</button>
    </div>
    <modal-window :name="this.name" class="ba-modal" v-if="showModal" @close="showModal = false"></modal-window>
  </form>
</template>

<script>
import { countryHotel } from "../services/CountryService";
import { email, required, minLength } from "vuelidate/lib/validators";
import Modal from "./Modal";

export default {
  data() {
    return {
      countryHotel,
      search: "",
      email: "",
      text: "",
      name: "",
      counrty: "",
      hotel: "",
      dateIn: "",
      dateOut: "",
      cheap: "",
      standart: "",
      lux: "",
      aldults: "",
      children: "",
      rooms: "",
      showModal: false,
      selectedValue: null
    };
  },
  validations: {
    email: { email, required },
    text: { required, minLength: minLength(15) }
  },
  methods: {
    resetForm() {
      this.email = this.text = this.hotel = this.dateIn = this.dateOut = this.selectedValue = this.cheap = this.standart = this.lux = this.aldults = this.children = this.rooms =
        "";
    },

    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        text: this.text,
        name: this.name,
        hotel: this.hotel,
        dateIn: this.dateIn,
        dateOut: this.dateOut,
        selectedValue: this.selectedValue,
        cheap: this.cheap,
        standart: this.standart,
        lux: this.lux,
        aldults: this.aldults,
        children: this.children,
        rooms: this.rooms
      };
      setTimeout(() => {
        this.showModal = true;
        this.resetForm();
      }, 500);
      console.log(formData);
    }
  },
  mounted() {
    // по нажатию на esc закрыть окно
    let thisModal = this;
    window.addEventListener("keydown", function(e) {
      if (e.keyCode == 27) {
        thisModal.showModal = false;
      }
    });
    // по клику вне модалки закрыть её
    window.addEventListener("click", function(e) {
      let modal = document.querySelector(".modal-mask");
      if (e.target == modal) {
        thisModal.showModal = false;
      }
    });
  },
  components: {
    modalWindow: Modal
  }
};
</script>

<style lang="scss" scoped>
$primary-width: 100%;
$primary-color: #f0f3f5;
$secondary-color: #96a5b2;
$background-color: #737272;
$inputBg: #dee1e4;
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
      position: relative;

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
      padding: 0.825rem;
      border-radius: 5px;
      background-color: $inputBg;

      &:active,
      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      &.invalid {
        box-shadow: 0 0 5px rgb(235, 31, 31);
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

    &__invalid {
      position: absolute;
      right: 0;
      top: 47px;
      font-size: $primaryFontSize;
      color: rgb(235, 31, 31);

      @media screen and(max-width: 861px) {
        left: 43px;
        top: 130px;
      }
    }
  }

  &-input-select {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    position: relative;

    &__title {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      @media screen and (max-width: 861px) {
        flex-direction: column;
      }
    }

    &__item {
      margin-left: auto;
      width: $primary-width;
      max-width: 336px;
      display: inline-block;
      padding: 0.825rem;
      background-color: $inputBg;
      border-radius: 5px;

      &:nth-child(2) {
        margin-bottom: 0;
      }
      &:active,
      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      &.invalid {
        box-shadow: 0 0 5px rgb(235, 31, 31);
      }

      @media screen and (max-width: 861px) {
        width: $primary-width;
        max-width: 310px;
        margin: 0 auto;
      }

      @media screen and (max-width: 510px) {
        width: $primary-width;
        max-width: 400px;
      }
    }

    &__invalid {
      position: absolute;
      right: 0;
      top: 42px;
      font-size: $primaryFontSize;
      color: rgb(235, 31, 31);

      @media screen and(max-width: 861px) {
        left: 43px;
        top: 125px;
      }
    }

    @media screen and (max-width: 861px) {
      margin-bottom: 30px;
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
      padding: 0.825rem;
      background-color: $inputBg;
      border-radius: 5px;
      font-size: $primaryFontSize;
      cursor: pointer;
      font-family: "Open Sans", sans-serif;

      &:active,
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
        right: 8px;
        cursor: pointer;
        color: $secondary-color;
        user-select: none;
        pointer-events: none;
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
    margin-bottom: 25px;

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
      background-color: $inputBg;
      margin-left: 19px;
      padding: 3px;
      border-radius: 5px;

      &:active,
      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }
    }

    @media screen and (max-width: 510px) {
      justify-content: space-around;
    }
  }

  &-area {
    position: relative;

    &__item {
      width: $primary-width;
      min-height: 100px;
      padding: 13px 15px;
      background-color: $inputBg;
      border-radius: 5px;
      font-family: "Open Sans", sans-serif;

      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      &.invalid {
        box-shadow: 0 0 5px rgb(235, 31, 31);
      }

      @media screen and(max-width: 861px) {
        min-height: 130px;
      }
    }

    &__invalid {
      position: absolute;
      left: 0;
      bottom: -20px;
      font-size: $primaryFontSize;
      color: rgb(235, 31, 31);
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