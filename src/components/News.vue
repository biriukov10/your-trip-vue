<template>
  <div>
    <section class="ba-news">
      <div class="container">
        <h2 class="ba-news__title">Latest News</h2>
        <div class="ba-row">
          <div class="ba-col-4 ba-col-xs-12" v-for="(item, index) of news" :key="index">
            <div class="ba-news-info">
              <div class="ba-news-info-icon">
                <span class="ba-news-info-icon__day">
                  {{ item.day }}
                  <br />
                  {{ item.month }}
                </span>
                <i class="fas fa-comments ba-news-info-icon__item"></i>
              </div>
              <div class="ba-news-info-desc">
                <a href="#" target="_blank" class="ba-news-info-desc__link">Aliquam nibh</a>
                <span class="ba-news-info-desc__text">
                  Proin pharetra luctus diam, any scelerisque eros
                  convallisumsan.
                  Maecenas vehicula egestas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
function item(day, month, id) {
  return {
    day,
    month,
    id
  };
}

const news = [item(10, "jan", 1), item(15, "jan", 2), item(21, "feb", 3)];

export default {
  data() {
    return {
      news,
      arr: {
        id: [1, 2, 3],
        date: [10, 21, 15],
        month: ["jan", "jan", "feb"]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
$primary-count: 20px;

.ba-news {
  &__title {
    font-size: 1.875rem;
    text-transform: uppercase;
    margin-bottom: $primary-count + 12px;
    color: #002747;
  }

  &-info {
    display: flex;
    align-items: flex-start;

    &-icon {
      color: #fff;
      text-align: center;
      padding: 7px $primary-count - 3px;
      background-color: #e85252;
      border-radius: $primary-count;
      margin-right: $primary-count;

      &__day {
        position: relative;
        font-size: 1.125rem;
        text-transform: uppercase;

        &::after {
          position: absolute;
          content: "";
          width: 100%;
          height: 1px;
          background-color: #b42d29;
          left: 0;
          bottom: -3px;
        }
      }

      &__item {
        display: block;
        width: $primary-count + 3px;
        height: $primary-count - 2px;
        margin: 10px auto 0;
      }
    }

    &-desc {
      &__link {
        display: block;
        text-transform: uppercase;
        color: #f6c162;
      }

      &__text {
        font-size: 0.875rem;
        color: #868585;
      }
    }

    @media screen and (max-width: 733px) {
      align-items: center;
    }
  }
}
</style>