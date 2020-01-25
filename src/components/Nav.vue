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
      ]
    };
  }
};
</script>

<style lang="scss">
$primary-color: #fff;
$danger-color: #e85252;
$primary-width: 100%;

.head {
  position: relative;

  .menu-show {
    position: absolute;
    display: none;
    top: 10px;
    right: 5%;
    font-size: 2.5rem;
    color: $primary-color;
    z-index: 15;
    cursor: pointer;

    @media screen and(max-width: 624px) {
      display: block;
    }
  }
}
.ba-header {
  position: absolute;
  top: 0;
  left: $primary-width - 50%;
  transform: translateX(-50%);
  z-index: 5;

  &-menu {
    display: flex;
    background-color: $danger-color;
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
        height: $primary-width;
        background-color: darken($danger-color, 20);

        @media screen and(max-width: 624px) {
          position: relative;
          width: $primary-width;
          text-align: center;
        }
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

        @media screen and(max-width: 624px) {
          width: $primary-width;
          text-align: center;
          transform: translateY(35px);
        }
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
        color: $primary-color;
        transform: translateY(-$primary-width);
      }

      @media screen and(max-width: 624px) {
        font-size: 2rem;
      }
    }

    &__title {
      display: inline-block;
      position: relative;
      transition: all 0.3s;
    }

    @media screen and(max-width: 624px) {
      display: none;
      width: $primary-width;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and(max-width: 624px) {
    position: relative;
  }
}
</style>