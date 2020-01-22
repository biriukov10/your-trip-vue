<template>
  <section class="ba-card">
    <div class="container">
      <div class="ba-row ba-row-center">
        <div class="ba-col-4 ba-col-xs-12" v-for="(card, index) in cardItem" :key="index">
          <div class="ba-card-wrapp wow zoomIn">
            <img :src="card.img" :alt="card.title.toLowerCase()" class="ba-card-wrapp__image" />
            <div class="ba-card-desc">
              <h2 class="ba-card-desc__title">{{ card.title }}</h2>
              <span class="ba-card-desc__price">
                from
                <br />
                <b class="size">{{ card.price }}</b>
              </span>
              <br />
              <a href="#" class="ba-card-desc__link">{{card.linkName}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
new WOW().init();
export default {
  data() {
    return {
      cardItem: [
        {
          img: "https://i.ibb.co/C9PRsHT/barcelona-min.jpg",
          title: "BARCELONA",
          price: "$1000",
          linkName: "learn more"
        },
        {
          img: "https://i.ibb.co/y8DDtYp/goa-min.jpg",
          title: "GOA",
          price: "$1500",
          linkName: "learn more"
        },
        {
          img: "https://i.ibb.co/LY2NJtR/paris-min.jpg",
          title: "PARIS",
          price: "$1600",
          linkName: "learn more"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css");

.ba-card {
  position: relative;
  bottom: 56px;
  overflow: hidden;
  z-index: 1;

  &-wrapp {
    position: relative;
    transition: all 0.3s;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }

    &__image {
      width: 100%;
      height: 100%;
    }

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.5;
    }

    &:hover {
      box-shadow: 0 10px 20px rgba(110, 49, 49, 0.23),
        0 6px 6px rgba(110, 49, 49, 0.23);
    }

    .ba-card-desc {
      width: 100%;
      position: absolute;
      left: 50%;
      bottom: 24%;
      transform: translateX(-50%);
      text-align: center;
      color: #fff;
      text-transform: uppercase;

      font-weight: 400;

      &__title {
        font-size: 1.875rem;
        font-weight: 400;
      }

      &__price {
        font-size: 0.875rem;
      }

      &__link {
        display: inline-block;
        font-size: 0.875rem;
        color: #e85252;
        margin-top: 30px;
        background-color: #dad7d7;
        padding: 0.675rem 1.5rem;
        border-radius: 20px;
        border: 1px solid transparent;
        text-decoration: none;
        transition: all 0.3s;

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

      .size {
        font-size: 1.5rem;
        font-weight: 400;
      }
    }
  }
}
</style>