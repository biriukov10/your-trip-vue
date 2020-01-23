<template>
  <div class="slider-container">
    <button @click="prevSlide" class="slider__btn slider__btn--prev">
      <i class="fas fa-angle-left slider__item"></i>
    </button>
    <button @click="nextSlide" class="slider__btn slider__btn--next">
      <i class="fas fa-angle-right slider__item"></i>
    </button>
    <div class="slider js-slider">
      <div class="slider__body" :style="{left: sliderOffsetLeft + 'px'}">
        <div
          class="slider__slide js-slide"
          v-for="(slide, index) in sliderList"
          :key="index"
          :style="'background-image: url(' +  slide.img  + ')'"
        >
          <div class="slider-desc">
            <h1 class="slider-desc__title">{{ slide.title }}</h1>
            <span class="slider-desc__price">
              from
              <br />
              <b class="size">{{ slide.price }}</b>
              <a href="#" class="slider-desc__link">learn more</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Всего слайдов
      sliderAllCount: 0,
      // Номер активного слайда
      sliderActive: 1,
      // Отступ тела со слайдами в контейнере
      sliderOffsetLeft: 0,
      // Шаг одного слайда = его длина
      sliderOffsetStep: 0,
      // Список изображений
      sliderList: [
        {
          img: "https://i.ibb.co/PtTs682/london-Slide-min.jpg",
          title: "LONDON",
          price: "$ 1000"
        },
        {
          img: "https://i.ibb.co/25T3szC/maldives-Slide-min.jpg",
          title: "Maldives",
          price: "$ 2000"
        },
        {
          img: "https://i.ibb.co/9N1Ry1S/venice-Slide-min.jpg",
          title: "Venice",
          price: "$1600"
        }
      ]
    };
  },
  methods: {
    // Иницилизация слайдера
    initSlider() {
      // Получаем элементы сладера и его слайдов
      let sliderBody = this.$el.querySelector(".js-slider");
      let sliderSlidies = sliderBody.querySelectorAll(".js-slide");
      // Записываем длину одного слайда для перелистывания
      this.sliderOffsetStep = sliderBody.clientWidth;
      // Общее количество слайдов для стопов
      this.sliderAllCount = sliderSlidies.length;
    },

    openSlide(id) {
      if (id > 0 && id <= this.sliderAllCount) {
        this.sliderActive = id;
        // Сдвигаем элемент со слайдами
        this.sliderOffsetLeft = -(
          this.sliderActive * this.sliderOffsetStep -
          this.sliderOffsetStep
        );
      }
    },
    // Следующий слайд
    nextSlide() {
      if (this.sliderActive < this.sliderAllCount) {
        this.sliderActive += 1;
        this.openSlide(this.sliderActive);
      }
    },
    // Предыдущий слайд
    prevSlide() {
      if (this.sliderActive > 1) {
        this.sliderActive -= 1;
        this.openSlide(this.sliderActive);
      }
    }
  },
  mounted() {
    this.initSlider();

    // Перенастройка слайдера при ресайзе окна
    window.addEventListener("resize", () => {
      this.initSlider();
      this.openSlide(this.sliderActive);
    });
  }
};
</script>

<style lang="scss">
$slider-height: 774px;
$slide-width: 100%;
.slider-container {
  position: relative;

  .slider {
    width: $slide-width;
    height: $slider-height;
    position: relative;
    overflow: hidden;

    &__btn {
      position: absolute;
      width: 5%;
      z-index: 1;
      top: 0;
      bottom: 0;
      background-color: #000;
      opacity: 0.5;
      transition: opacity 0.3s;
      cursor: pointer;

      &--prev {
        left: 0;
      }

      &--next {
        right: 0;
      }

      &:hover {
        opacity: 0.6;
      }

      @media screen and (max-width: 732px) {
        width: 10%;
      }
    }

    &__item {
      font-size: 40px;
      color: #fff;
    }

    &__body {
      min-width: auto;
      height: $slider-height;
      display: flex;
      position: relative;
      align-items: stretch;
      transition: all 0.5s ease;
    }

    &__slide {
      position: relative;
      min-width: $slide-width;
      height: $slider-height;
      background-size: cover;
      background-position: center;
      flex: 1 100%;

      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.5;
      }

      .slider-desc {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding-top: 280px;
        padding-bottom: 223px;

        &__title {
          font-size: 4.5rem;
          color: #f6c162;
          font-weight: 300;
        }

        &__price {
          text-align: center;
          font-size: 1.375rem;
          color: #dad7d7;
          text-transform: uppercase;

          .size {
            font-weight: 400;
            font-size: 3rem;
          }
        }

        &__link {
          display: block;
          background-color: #dad7d7;
          color: #e85252;
          margin-top: 40px;
          padding: 13px 45px;
          border-radius: 30px;
          border: 1px solid transparent;
          text-transform: uppercase;

          &:active,
          &:focus {
            border: 1px solid green;
          }

          &:hover {
            background-color: #e85252;
            color: #dad7d7;
            border-color: #dad7d7;
          }
        }

        @media screen and (max-width: 732px) {
          padding: 50px 0;
        }
      }
    }

    @media screen and (max-width: 732px) {
      height: 500px;
    }
  }
}
</style>