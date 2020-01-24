<template>
  <!-- добавить фотки и переписать все стили в данный блок -->
  <div class="booking">
    <section class="ba-desc">
      <div class="container">
        <div class="ba-row">
          <div class="ba-col-6 ba-col-sm-12">
            <!-- start form -->
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
                  <input type="text" class="ba-form-input__item" placeholder="Country:" />
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
                  <select
                    class="ba-form-select__item"
                    name="Children"
                    id="children"
                    tabindex="3"
                  >
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
            <!-- end form -->
          </div>
          <div class="ba-col-6 ba-col-sm-12">
            <!-- start atricle desc -->
            <article class="ba-comment">
              <h2 class="ba-comment__title">welcome</h2>
              <div class="ba-comment-card">
                <img
                  src="https://i.ibb.co/YRvQXsV/Sea-min.jpg"
                  alt="Sea"
                  class="ba-comment-card__image"
                />
                <div class="ba-comment-text">
                  <p
                    class="ba-comment-text__item"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p class="ba-comment-text__item">
                    In mollis erat mattis
                    <br />neque facilisis, sit ametiol.
                  </p>
                </div>
              </div>
              <p class="ba-comment__text ba-comment__text--margin">
                Find the detailed description of this
                <a href="#">freebie</a>
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
                </a> category offers you a variety of designs that are perfect for
                travel sphere of
                business.
              </p>
              <p class="ba-comment__text">Proin pharetra luctus diam, a scelerisque eros convallis</p>
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
                  <a href="#" class="ba-comment-card-desc__link">Miranda Brown</a>
                </div>
              </div>
              <div class="ba-comment-link">
                <a href="#" class="ba-comment-link__item">More</a>
              </div>
            </article>
            <!-- end article desc -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.ba-desc {
  .ba-comment {
    &__title {
      font-size: 1.875rem;
      text-transform: uppercase;
      margin-bottom: 40px;

      &--quotes {
        font-size: 1.5rem;
        margin-top: 50px;
        margin-bottom: 15px;

        @media screen and (max-width: 861px) {
          margin-top: 20px;
        }
      }
    }

    &-card {
      display: flex;
      margin-bottom: 23px;

      &:last-child {
        margin-bottom: 0;
      }

      &-desc {
        margin-left: 22px;

        &__quotes {
          position: relative;
          font-size: 0.875rem;
          color: #737272;

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
          color: #f6c162;
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
        font-size: 0.875rem;
        color: #737272;

        &:first-child {
          margin-bottom: 20px;
        }
      }
    }

    &__text {
      font-size: 0.875rem;
      color: #737272;

      &--margin {
        margin-bottom: 20px;

        @media screen and (max-width: 861px) {
          margin-bottom: 10px;
        }
      }

      a {
        color: #f6c162;
      }
    }

    &-link {
      display: flex;
      justify-content: flex-end;
      margin-top: 30px;

      &--btn {
        justify-content: flex-start;
      }

      &__item {
        font-size: 0.875rem;
        background-color: #e5e5e5;
        color: #737272;
        padding: 8px 27px;
        border-radius: 15px;
        border: 1px solid transparent;

        &:active,
        &:focus {
          border-color: #000;
        }

        &:hover {
          color: #e5e5e5;
          background-color: #737272;
          border: 1px solid #e5e5e5;
        }
      }

      @media screen and(max-width: 510px) {
        justify-content: center;
      }
    }
  }

  .ba-form {
    font-size: 0.875rem;
    color: #989898;

    &-title {
      border: none;
      font-size: 1.875rem;
      text-transform: uppercase;
      margin-bottom: 40px;
      color: #002747;
    }

    &-input {
      margin-bottom: 10px;
      &-wrapp {
        display: flex;
        justify-content: space-between;

        .ba-form-input__item {
          width: 100%;
          max-width: 195px;
          display: inline-block;
          padding: 0.625rem;
          background-color: #f0f3f5;
          margin-bottom: 10px;

          &:focus {
            box-shadow: 0 0 5px rgba(81, 203, 238, 1);
          }

          @media screen and (max-width: 861px) {
            width: 100%;
            max-width: 310px;
            margin: 0 auto 10px;
          }

          @media screen and (max-width: 510px) {
            width: 100%;
            max-width: 400px;
          }
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

        .ba-form-calendar__item {
          position: relative;
          width: 100%;
          max-width: 336px;
          margin-left: auto;
          background-color: #f0f3f5;
          padding: 10px 20px;
          color: #989898;
          font-size: 0.875rem;
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
            color: #96a5b2;
          }

          @media screen and (max-width: 510px) {
            width: 100%;
            max-width: 400px;
          }
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
        color: #96a5b2;
        background-color: #f0f3f5;
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
        width: 100%;
        min-height: 100px;
        padding: 13px 15px;
        background-color: #f0f3f5;
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
        font-size: 0.875rem;
        background-color: #e5e5e5;
        color: #737272;
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
          background-color: #737272;
          color: #dad7d7;
          border-color: #dad7d7;
        }
      }
    }
  }
}
</style>