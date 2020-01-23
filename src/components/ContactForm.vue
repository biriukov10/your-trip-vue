<template>
  <form class="ba-contact-form" @submit.prevent="onSubmit">
    <fieldset class="ba-contact-form-title">
      <legend class="ba-contact-form-title__item">GET IN TOUCH</legend>
    </fieldset>
    <div class="ba-contact-form-input">
      <!-- start input name -->
      <input type="text" class="ba-contact-form-input__item" placeholder="Name:" />

      <!-- end input name -->
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
      <button class="ba-contact-form-btn__item">Clear</button>
      <button class="ba-contact-form-btn__item" type="submit">Submit</button>
    </div>
  </form>
</template>

<script scoped>
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  name: "formComponent",
  data() {
    return {
      email: "",
      text: ""
    };
  },
  validations: {
    email: { email, required },
    text: { required, minLength: minLength(20) }
  },
  methods: {
    onSubmit() {
      console.log(this.$v.text);
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        text: this.text
      };
      console.log(formData);
    }
  },
  components: {}
};
</script>

<style lang="scss">
.ba-contact-form {
  padding: 110px 0 120px;

  &-title {
    border: none;
    margin-bottom: 30px;
    &__item {
      font-size: 1.875rem;
      color: #002747;

      @media screen and(max-width: 731px) {
        text-align: center;
      }
    }
  }

  &-input {
    position: relative;
    margin-bottom: 30px;

    &__item {
      width: 100%;
      padding: 15px 20px;
      background-color: #f0f3f5;
      border-radius: 5px;
      font-size: 0.875rem;
      color: #737272;
      margin-bottom: 30px;

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
      top: 128px;
      font-size: 0.875rem;
      color: rgb(235, 31, 31);
    }
  }

  &-area {
    position: relative;
    margin-bottom: 40px;

    &__item {
      width: 100%;
      height: 300px;
      background-color: #f0f3f5;
      border-radius: 5px;
      color: #737272;
      padding: 13px 20px;
      font-size: 0.875rem;
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
      font-size: 0.875rem;
      color: rgb(235, 31, 31);
    }
  }

  &-btn {
    display: flex;
    justify-content: flex-end;

    &__item {
      background-color: #f0f3f5;
      color: #737272;
      font-size: 0.875rem;
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
        color: #f0f3f5;
        background-color: #737272;
        border-color: #f0f3f5;
      }
    }
  }
}
</style>