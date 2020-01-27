<template>
  <section class="ba-blog">
    <div class="container">
      <div class="ba-row">
        <div class="ba-col-8 ba-col-sm-12">
          <h1 class="ba-blog__title">Recent Posts</h1>
          <div class="ba-blog-posts wow fadeInUp" v-for="(item, index) in getDate" :key="index">
            <div class="ba-blog-date">
              <div class="ba-blog-date-icon">
                {{item.date}}
                <br />feb
              </div>
              <div class="ba-blog-date-aftor">
                <a href="#" class="ba-blog-date-aftor__link">{{item.link}}</a>
                <span class="ba-blog-date-aftor__text">Posted by Admin</span>
              </div>
            </div>
            <img :src="item.url" :alt="item.title" class="ba-blog-posts__image" />
            <p class="ba-blog-posts__text">
              Cras facilisis, nulla vel viverra auctor, leo gna sodales felis, quis malesuada nibh odio
              <br />ut velit. Proin pharetra luctus diam, a celerisque eros convallis accumsan.
              <br />
              <br />Maecenas vehicula egestas venenatis. Duis massa elit, auctor non pellentesque vel aliquet sit amet erat. Nullam eget dignissim nisi, aliquam feugiat nibh.
            </p>
            <a href="#" class="ba-blog-posts__link">LEARN MORE</a>
          </div>
        </div>
        <div class="ba-col-4 ba-col-sm-12">
          <div class="ba-blog-categories">
            <h1 class="ba-blog-categories__title">best tours</h1>
            <div class="ba-blog-accordion" v-for="(item, id) in accordion" :key="id">
              <h3 class="ba-blog-accordion__title" @click="item.open = !item.open">{{ item.title}}</h3>
              <p class="ba-blog-accordion__desc wow zoomIn" v-if="item.open">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
 
<script>
import { accordion } from "../services/CountryService";
new WOW().init();
export default {
  data() {
    return {
      getDate: [
        {
          date: 15,
          link: "uamnibh Edet Mertolo numi",
          url: "https://i.ibb.co/rGZsC8R/church-min.jpg",
          title: "Church"
        },
        {
          date: 17,
          link: "Erh Emertlo numolo",
          url: "https://i.ibb.co/xSWg9sF/resort.jpg",
          title: "Hotel"
        }
      ],
      accordion
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css");
$primary-color: #e5e5e5;
$secondary-color: #737272;
$danger-color: #e85252;
$padding: 100px;
$primaryFontSize: 1.125rem;
$secondaryFontSize: 0.875rem;
$uppercase: uppercase;
.ba-blog {
  padding: $padding + 30px 0 $padding + 20px;

  &__title {
    font-size: $secondaryFontSize + 1rem;
    text-transform: $uppercase;
    color: #002747;
  }

  &-posts {
    margin-top: $padding - 90px;
    animation-duration: 0.8s;

    &:last-child {
      margin-top: $padding - 20px;

      @media screen and(max-width: 661px) {
        margin-top: $padding - 60px;
      }
    }

    &__text {
      margin-top: $padding - 85px;
      font-size: $secondaryFontSize;
      color: $secondary-color;
      padding-right: $padding - 70px;
    }

    &__link {
      position: relative;
      display: inline-block;
      font-size: $secondaryFontSize;
      color: $danger-color;
      padding: 8px 17px;
      background-color: $primary-color;
      border-radius: $padding - 85px;
      margin-top: $padding - 65px;
      border: 1px solid transparent;
      transition: 0.3s;
      overflow: hidden;

      &:active,
      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -50%;
        width: 50%;
        height: 100%;
        background-color: #f347478e;
        clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
        transition: 0.4s;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: -50%;
        width: 50%;
        height: 100%;
        background-color: #f347478e;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%);
        transition: 0.4s;
      }

      &:hover::before {
        left: 0;
        width: 50.5%;
      }

      &:hover::after {
        right: 0;
        width: 55%;
      }
    }
  }

  &-date {
    display: flex;
    margin-bottom: $padding - 72px;

    &-icon {
      font-size: $primaryFontSize;
      color: lighten($primary-color, 90);
      text-transform: $uppercase;
      padding: 10px 18px;
      border-radius: $padding - 85px;
      background-color: $danger-color;
      text-align: center;
      margin-right: $padding - 80px;
    }

    &-aftor {
      &__link {
        display: block;
        text-transform: $uppercase;
        font-size: $primaryFontSize;
        color: #f3aa29;
      }

      &__text {
        font-size: $secondaryFontSize;
        color: $secondary-color;
      }
    }
  }

  &-categories {
    &__title {
      font-size: $secondaryFontSize + 1rem;
      text-transform: $uppercase;
      color: #002747;
      margin-bottom: $padding - 90px;
    }
  }

  &-accordion {
    &__title {
      position: relative;
      font-size: $primaryFontSize;
      color: $secondary-color;
      margin-bottom: $padding - 90px;
      cursor: pointer;
      user-select: none;

      &::before {
        content: url("https://i.ibb.co/2hCNQ9p/arrow-min.png");
        position: absolute;
        left: -17px;
        top: -2px;
      }
    }

    &__desc {
      color: #272626;
      font-size: $secondaryFontSize;
      margin-bottom: $padding - 90px;
      background-color: rgb(184, 177, 177);
      padding: $padding - 90px;
      border-radius: $padding - 90px;
      overflow: hidden;
      animation-duration: 0.4s;
    }
  }

  @media screen and(max-width: 661px) {
    padding: 30px 20px;
  }
}
</style>