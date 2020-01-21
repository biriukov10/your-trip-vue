<template>
  <header class="head">
    <i class="fas fa-bars menu-show" @click="menuShow = !menuShow"></i>
    <nav class="ba-header">
      <ul class="ba-header-menu" :class="{ active: menuShow}">
        <li
          class="ba-header-menu__item"
          :key="index"
          v-for="(item, index) in menuItem"
          @click="menuShow = false"
        >
          <!-- <router-link></router-link> -->
          <router-link :to="item.link" :data-title="item.name" class="ba-header-menu__link active">
            <span class="ba-header-menu__title" @click="menuShow = false">{{item.name}}</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="ba-header-logo">
      <img :src="fluitImg" class="ba-header-logo__image" alt="logoTrip" />
      <h2 class="ba-header-logo__title">your trip</h2>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuShow: false,
      menuItem: [
        {
          name: "ABOUT",
          link: "/"
        },

        {
          name: "TOURS",
          link: "/tours"
        },
        {
          name: "OFFERS",
          link: "/offers"
        },
        {
          name: "BLOG",
          link: "/blog"
        },
        {
          name: "CONTACTS",
          link: "/contacts"
        }
      ],
      fluitImg: "https://i.ibb.co/DYP3d6s/header-Image-min.jpg"
    };
  }
};
</script>

<style lang="scss">
.head {
  position: relative;

  .menu-show {
    position: absolute;
    display: none;
    top: 5%;
    right: 5%;
    font-size: 2.5rem;
    color: #e85252;
    z-index: 5;
    cursor: pointer;

    @media screen and(max-width: 624px) {
      display: block;
    }
  }
}
.ba-header {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;

  &-menu {
    display: flex;
    background-color: #e85252;
    border-radius: 0 0 7px 7px;
    box-shadow: inset 5px -23px 20px -30px #000000;

    &.active {
      position: absolute;
      display: flex;
      flex-direction: column;
      left: 0;

      @media screen and(min-width: 625px) {
        display: none;
      }
    }

    &__item {
      position: relative;
      list-style: none;
      padding: 20px 40px;

      &:not(:last-child):before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        background-color: #b42d29;
      }

      &:last-child {
        margin-right: 0;
        padding: 20px 26px;

        @media screen and(max-width: 575px) {
          padding: 20px 11px;
        }
      }

      &:hover .ba-header-menu__link::after {
        transform: translateY(0);
      }
      &:hover .ba-header-menu__title {
        transform: translateY(17px);
      }

      @media screen and(max-width: 575px) {
        padding: 20px;
      }
    }
    &__link {
      display: block;
      position: relative;
      font-size: 0.875rem;
      color: #002747;
      overflow: hidden;
      transition: all 0.3s;

      &::after {
        content: attr(data-title);
        position: absolute;
        left: 0;
        top: 0;
        transition: all 0.3s;
        color: #fff;
        transform: translateY(-100%);
      }
    }

    &__title {
      display: inline-block;
      position: relative;
      transition: all 0.3s;
    }

    @media screen and(max-width: 624px) {
      display: none;
    }
  }

  &-logo {
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.5;
    }

    &__image {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__title {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 43%;
      transform: translateY(-50%);
      font-size: 2.25rem;
      text-transform: uppercase;
      color: #fff;
      font-family: "Damion", cursive;
      font-weight: 300;

      &::after {
        content: url("https://i.ibb.co/T2B8pYk/fluit-min.png");
        position: absolute;
        bottom: 26px;
      }

      @media screen and(max-width: 624px) {
        left: 35%;
      }
    }
  }
  @media screen and(max-width: 624px) {
    position: relative;
  }
}
</style>