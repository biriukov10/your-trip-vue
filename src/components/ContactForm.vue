<template>
  <div>
    <form class="ba-contact-form" @submit.prevent="onSubmit">
      <fieldset class="ba-contact-form-title">
        <legend class="ba-contact-form-title__item">GET IN TOUCH</legend>
      </fieldset>
      <div class="ba-contact-form-input">
        <input
          type="text"
          class="ba-contact-form-input__item"
          placeholder="Name:"
          v-model.trim="name"
        />
        <!-- start input email -->
        <input
          type="email"
          class="ba-contact-form-input__item"
          placeholder="Email:"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        />
        <small
          class="ba-contact-form-input__invalid ba-contact-form-input__invalid--email invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >Do not leave the field blank</small>
        <small
          class="ba-contact-form-input__invalid invalid ba-contact-form-input__invalid--email invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >Enter the correct email</small>
        <!-- end input email -->
      </div>
      <div class="ba-contact-form-area">
        <textarea
          class="ba-contact-form-area__item"
          v-model.trim="text"
          :class="{invalid: ($v.text.$dirty && !$v.text.required) || ($v.text.$dirty && !$v.text.minLength)}"
          placeholder="Message:"
        ></textarea>
        <small
          class="ba-contact-form-area__invalid invalid"
          v-if="$v.text.$dirty && !$v.text.required"
        >Enter a text</small>
        <small
          class="ba-contact-form-area__invalid invalid"
          v-else-if="$v.text.$dirty && !$v.text.minLength"
        >Name must be {{ $v.text.$params.minLength.min }} characters. {{ text.length }}</small>
      </div>
      <div class="ba-contact-form-btn">
        <button @click="resetForm" class="ba-contact-form-btn__item" type="reset">Clear</button>
        <button @click="onSubmit" class="ba-contact-form-btn__item" type="submit">Submit</button>
      </div>
    </form>
    <modal-window class="ba-modal" v-if="showModal" @close="showModal = false"></modal-window>
  </div>
</template>

<script scoped>
import { email, required, minLength } from "vuelidate/lib/validators";
import Modal from "./Modal";

export default {
  name: "formComponent",
  data() {
    return {
      email: "",
      text: "",
      name: "",
      submitted: {
        name: "",
        email: "",
        text: ""
      },
      showModal: false
    };
  },
  validations: {
    email: { email, required },
    text: { required, minLength: minLength(20) }
  },
  methods: {
    // clear input
    resetForm() {
      this.submitted.name = this.name;
      this.submitted.email = this.email;
      this.submitted.text = this.text;

      this.name = this.email = this.text = "";
    },

    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        text: this.text
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

<style lang="scss">
$padding: 100px;
$font-size: 0.875rem;
$primary-width: 100%;
$primary-color: #f0f3f5;
$secondary-color: #737272;

.ba-contact-form {
  padding: $padding + 10px 0 $padding + 20px;

  &-title {
    border: none;
    margin-bottom: $padding - 70px;
    &__item {
      font-size: $font-size + 1rem;
      color: #002747;

      @media screen and(max-width: 731px) {
        text-align: center;
      }
    }
  }

  &-input {
    position: relative;
    margin-bottom: $padding - 70px;

    &__item {
      width: $primary-width;
      padding: 15px 20px;
      background-color: #f0f3f5;
      border-radius: 5px;
      font-size: $font-size;
      color: $secondary-color;
      margin-bottom: $padding - 70px;

      &:nth-child(2) {
        margin-bottom: 0;
      }

      &.invalid {
        box-shadow: 0 0 5px rgb(235, 31, 31);
      }

      &:active,
      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      @media screen and(max-width: 731px) {
        &:last-child {
          margin-bottom: 10px;
        }
      }
    }

    &__invalid {
      position: absolute;
      left: 0;
      top: $padding + 28px;
      font-size: $font-size;
      color: rgb(235, 31, 31);
    }
  }

  &-area {
    position: relative;
    margin-bottom: $padding - 60px;

    &__item {
      width: $primary-width;
      height: $padding + 200px;
      background-color: $primary-color;
      border-radius: 5px;
      color: $secondary-color;
      padding: 13px 20px;
      font-size: $font-size;
      font-family: "Open Sans", sans-serif;

      &:active,
      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      &.invalid {
        box-shadow: 0 0 5px rgb(235, 31, 31);
      }
    }

    &__invalid {
      position: absolute;
      left: 0;
      bottom: -20px;
      font-size: $font-size;
      color: rgb(235, 31, 31);
    }
  }

  &-btn {
    display: flex;
    justify-content: flex-end;

    &__item {
      background-color: $primary-color;
      color: $secondary-color;
      font-size: $font-size;
      border-radius: 15px;
      padding: 8px 27px;
      border: 1px solid transparent;
      transition: 0.3s;
      cursor: pointer;

      &:first-child {
        margin-right: 22px;
      }

      &:active,
      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      &:hover {
        color: $primary-color;
        background-color: $secondary-color;
        border-color: $primary-color;
      }
    }
  }
}
</style>