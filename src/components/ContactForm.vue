<template>
  <section>
    <form class="ba-contact-form">
      <fieldset class="ba-contact-form-title">
        <legend class="ba-contact-form-title__item">GET IN TOUCH</legend>
      </fieldset>
      <div class="ba-contact-form-input">
        <input
          v-for="(item, index) in input"
          :key="index"
          :type="item.type"
          class="ba-contact-form-input__item"
          :placeholder="item.placeholder"
          required
        />
      </div>
      <div class="ba-contact-form-area">
        <textarea class="ba-contact-form-area__item"></textarea>
      </div>
      <div class="ba-contact-form-btn">
        <button
          v-for="(item, index) in button"
          :key="index"
          class="ba-contact-form-btn__item"
        >{{ item.text }}</button>
      </div>
    </form>
  </section>
</template>

<script scoped>
export default {
  data() {
    return {
      input: [
        {
          type: "text",
          placeholder: "Name:"
        },
        {
          type: "email",
          placeholder: "Email:"
        },
        {
          type: "text",
          placeholder: "Country:"
        }
      ],
      button: [
        {
          text: "Clear"
        },
        {
          text: "Submit"
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="scss">
.ba-contact-form {
  &-title {
    border: none;
    margin-bottom: 38px;
    &__item {
      font-size: 1.875rem;
      color: #002747;

      @media screen and(max-width: 731px) {
        text-align: center;
      }
    }
  }

  &-input {
    margin-bottom: 27px;

    &__item {
      width: 100%;
      padding: 10px 20px;
      background-color: #f0f3f5;
      font-size: 0.875rem;
      color: #737272;
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }

      &:active,
      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }
    }
  }

  &-area {
    margin-bottom: 40px;

    &__item {
      width: 100%;
      height: 287px;
      background-color: #f0f3f5;
      color: #737272;
      padding: 13px 20px;
      font-size: 0.875rem;
      font-family: "Open Sans", sans-serif;

      &:active,
      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }
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