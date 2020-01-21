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
      accordion: {
        item1: {
          title: "Estonia from $350",
          content:
            "No meals, 500 meters to the sea, excellent beach, free bar, 7 days 6 nights",
          open: false
        },
        item2: {
          title: "Egypt from $400",
          content:
            "Only breakfast, slippers and a towel in the room are available, 400 meters to the beach, 6 days 5 nights",
          open: false
        },
        item3: {
          title: "Turkey from $450",
          content:
            "A beach of stone, 300 meters from the sea, breakfast only, 7 days 6 nights",
          open: false
        },
        item4: {
          title: "Montenegro from $520",
          content:
            "The offer is valid for 5 days, breakfast only, insurance included, 5 days 4 nights",
          open: false
        },
        item5: {
          title: "Latvia from $550",
          content:
            "Great beach, the hotel has a pool, breakfast and dinner, 6 days 5 nights",
          open: false
        },
        item6: {
          title: "Greece from $600",
          content:
            "Restaurant with in-room sea view, breakfast and dinner, 6 unforgettable days",
          open: false
        },
        item7: {
          title: "Finland from $700",
          content:
            "All inclusive, the room has Wi-Fi, 6 days 5 nights, also 2 free tours",
          open: false
        },
        item8: {
          title: "Italy from $750",
          content: "Beautiful Italy, breakfast only, free bar, 6 days",
          open: false
        },
        item8: {
          title: "Montenegro from $850",
          content:
            "All inclusive, 7 days 8 nights, great beach, beautiful view",
          open: false
        },
        item9: {
          title: "Madagascar from $900",
          content:
            "All inclusive, 8 days 9 nights, 2 minutes to the beach, free bar, insurance and 2 guided tours for free",
          open: false
        },
        item9: {
          title: "Spain from $900",
          content:
            "All inclusive, 8 days 9 nights, hotel by the sea ,free bar, insurance and 2 guided tours for free.",
          open: false
        },
        item10: {
          title: "Sri Lanka from $1000",
          content:
            "Tropical jungle, delicious cocktails, it's all inclusive, for 10 days 11 nights.",
          open: false
        },
        item11: {
          title: "Dominican Republic from $1200",
          content:
            "Tropical jungle, delicious cocktails, it's all inclusive, for 10 days 11 nights.",
          open: false
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css");
$primary-color: #e5e5e5;
$secondary-color: #737272;

.ba-blog {
  padding: 130px 0 120px;

  &__title {
    font-size: 1.875rem;
    text-transform: uppercase;
    color: #002747;
  }

  &-posts {
    margin-top: 10px;
    animation-duration: 0.8s;

    &:last-child {
      margin-top: 80px;

      @media screen and(max-width: 661px) {
        margin-top: 40px;
      }
    }

    &__text {
      margin-top: 15px;
      font-size: 0.875rem;
      color: $secondary-color;
      padding-right: 30px;
    }

    &__link {
      display: inline-block;
      font-size: 0.875rem;
      color: #c73430;
      padding: 8px 17px;
      background-color: $primary-color;
      border-radius: 15px;
      margin-top: 35px;
      border: 1px solid transparent;
      transition: 0.3s;

      &:active,
      &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      }

      &:hover {
        color: $primary-color;
        background-color: #c73430;
        border-color: $primary-color;
      }
    }
  }

  &-date {
    display: flex;
    margin-bottom: 28px;

    &-icon {
      font-size: 1.125rem;
      color: #fff;
      text-transform: uppercase;
      padding: 10px 18px;
      border-radius: 15px;
      background-color: #e24847;
      text-align: center;
      margin-right: 20px;
    }

    &-aftor {
      &__link {
        display: block;
        text-transform: uppercase;
        font-size: 1.125rem;
        color: #f3aa29;
      }

      &__text {
        font-size: 0.875rem;
        color: $secondary-color;
      }
    }
  }

  &-categories {
    &__title {
      font-size: 1.875rem;
      text-transform: uppercase;
      color: #002747;
      margin-bottom: 10px;
    }
  }

  &-accordion {
    &__title {
      position: relative;
      font-size: 1.125rem;
      color: $secondary-color;
      margin-bottom: 10px;
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
      font-size: 0.875rem;
      margin-bottom: 10px;
      background-color: rgb(184, 177, 177);
      padding: 10px;
      border-radius: 10px;
      overflow: hidden;
      animation-duration: 0.4s;
    }
  }

  @media screen and(max-width: 661px) {
    padding: 30px 20px;
  }
}
</style>