<template>
  <article class="ba-comment">
    <h2 class="ba-comment__title">welcome</h2>
    <div class="ba-comment-card">
      <img src="https://i.ibb.co/YRvQXsV/Sea-min.jpg" alt="Sea" class="ba-comment-card__image" />
      <div class="ba-comment-text">
        <p class="ba-comment-text__item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p class="ba-comment-text__item">
          In mollis erat mattis
          <br />neque facilisis, sit ametiol.
        </p>
      </div>
    </div>
    <p class="ba-comment__text ba-comment__text--margin">
      Find the detailed description of this
      <a href="#" target="_blank">freebie</a>
      at
      <br />TemplateMonster blog.
    </p>
    <p class="ba-comment__text ba-comment__text--textAlign">
      <a
        href="https://www.independent.co.uk/travel/news-and-advice/the-50-best-travel-websites-8646338.html"
        target="_black"
      >
        Travel Website
        Templates
      </a>help you to share your travel experience with the online world. If you are having a travel agency, travel website helps the user to understand your travel services and package cost easily.
    </p>
    <p
      class="ba-comment__text"
    >If you are a travel blogger who posts lots of your adventures on Instagram, it’s important to have a travel blog.</p>
    <p
      class="ba-comment__text"
    >The travel blog helps you to look back and see beautiful memories of you in one place.</p>
    <h2 class="ba-comment__title ba-comment__title--quotes">Clients’ Quotes</h2>
    <div class="ba-comment-card">
      <img
        src="https://i.ibb.co/0n7pWN2/clients-min.jpg"
        alt="Miranda Brown"
        class="ba-comment-card__image ba-comment-card__image--bottom"
      />
      <div class="ba-comment-card-desc">
        <blockquote
          class="ba-comment-card-desc__quotes"
        >Duis massa elit, auctor non pellentesque vel, aliquet sit amet erat. Nullam eget dignissim nisi, aliquam feugiat nibh.</blockquote>
        <a href="#" class="ba-comment-card-desc__link" target="_blank">Miranda Brown</a>
      </div>
    </div>
    <div class="ba-comment-link">
      <a href="#" class="ba-comment-link__item" target="_blank">More</a>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
$primary-color: #737272;
$secondaty-color: #e5e5e5;
$yellow-color: #f6c162;
$primaryFontSize: 0.875rem;

.ba-comment {
  &__title {
    font-size: $primaryFontSize + 1rem;
    text-transform: uppercase;
    margin-bottom: 40px;

    &--quotes {
      font-size: $primaryFontSize + 0.625rem;
      margin-top: 50px;
      margin-bottom: 25px;

      @media screen and (max-width: 861px) {
        margin-top: 20px;
      }
    }
  }

  &-card {
    display: flex;
    margin-bottom: 27px;

    &:last-child {
      margin-bottom: 0;
    }

    &-desc {
      margin-left: 22px;

      &__quotes {
        position: relative;
        font-size: $primaryFontSize;
        color: $primary-color;

        &::after {
          content: url("https://i.ibb.co/tH3SB68/qoutes-min.png");
          position: absolute;
          top: -10px;
          left: -8px;
          z-index: -1;
        }
      }

      &__link {
        display: flex;
        justify-content: flex-end;
        color: $yellow-color;
        text-transform: uppercase;
        margin-top: 15px;
      }
    }

    @media screen and (max-width: 861px) {
      margin-bottom: 10px;
    }
  }

  &-text {
    margin-left: 15px;
    &__item {
      font-size: $primaryFontSize;
      color: $primary-color;

      &:first-child {
        margin-bottom: 25px;
      }
    }
  }

  &__text {
    font-size: $primaryFontSize;
    color: $primary-color;
    line-height: 1.6;

    &--margin {
      margin-bottom: 25px;

      @media screen and (max-width: 861px) {
        margin-bottom: 10px;
      }
    }

    a {
      color: $yellow-color;
    }
  }

  &-link {
    display: flex;
    justify-content: flex-end;
    margin-top: 35px;

    &--btn {
      justify-content: flex-start;
    }

    &__item {
      font-size: $primaryFontSize;
      background-color: $secondaty-color;
      color: $primary-color;
      padding: 8px 27px;
      border-radius: 15px;
      border: 1px solid transparent;

      &:active,
      &:focus {
        border-color: #000;
      }

      &:hover {
        color: $secondaty-color;
        background-color: $primary-color;
        border: 1px solid $secondaty-color;
      }
    }

    @media screen and(max-width: 510px) {
      justify-content: center;
    }
  }
}
</style>