<template>
  <main>
    <section class="ba-tours">
      <div class="container">
        <div class="ba-row">
          <div class="ba-col-4 ba-col-sm-6" v-for="(item, index) in cardInfo" :key="index">
            <div class="ba-tours-card wow flipInX">
              <img :src="item.url" class="ba-tours-card__image" :alt="item.title.toLowerCase()" />
              <div class="ba-tours-info">
                <h2 class="ba-tours-info__title">{{ item.title }}</h2>
                <span class="ba-tours-info__price">
                  from
                  <br />
                  <b class="size">{{ item.price }}</b>
                  <b></b>
                </span>
              </div>
              <div class="ba-tours-card-desc">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
new WOW().init();
export default {
  data() {
    return {
      cardInfo: [
        {
          title: "NEW ZEALAND",
          price: "$ 1.200",
          link: "learn more",
          url: "https://i.ibb.co/djtN7ZS/newzeland-min.jpg",
          text:
            "New Zealand is famous for its gorgeous nature - geysers, mountains and lakes, forests and grottoes, glaciers and beaches. Widely developed environmental movement allows you to keep all this splendor in almost pristine condition, even in areas of large cities"
        },
        {
          title: "GOA",
          price: "$ 1.500",
          link: "learn more",
          url: "https://i.ibb.co/y8DDtYp/goa-min.jpg",
          text:
            "Goa is the country's main resort, as it often happens, completely unlike the rest of India. The coast stretches here for 110 km, forming 40 beautiful beaches. The state is divided into the Northern and Southern parts, the border between which is Fort Aguada."
        },
        {
          title: "FRANCE",
          price: "$ 1.600",
          link: "learn more",
          url: "https://i.ibb.co/LY2NJtR/paris-min.jpg",
          text:
            "Elegant beauty France is a vacation with charm: a rich “excursion”, relaxation on the sophisticated Cote d'Azur, famous museums, gastronomic provinces and castles of the Loire. Cuisine, wine and ski resorts - all about France: tours, prices, hotels and attractions"
        },
        {
          title: "CANADA",
          price: "$ 2.000",
          link: "learn more",
          url: "https://i.ibb.co/Bgg6p3v/canada-min.jpg",
          text:
            "Canada includes ski resorts, English and French classes, and noteworthy national parks. The capital with dignity - Ottawa, colorful Quebec and framed by the mountains of Vancouver, maples and hockey - all about Canada: visa and cities, maps and photos"
        },
        {
          title: "TURKEY",
          price: "$ 1.500",
          link: "learn more",
          url: "https://i.ibb.co/ZJCdgs0/turkey-min.jpg",
          text:
            "Turkey is not only the excellent beaches of the four seas, but also the magnificent Istanbul with the Blue Mosque and Topkapi Palace, the thermal springs of Yalova and the snow-white Pamukkale, the Cappadocian monasteries, skiing and great shopping"
        },
        {
          title: "EGYPT",
          price: "$ 1.500",
          link: "learn more",
          url: "https://i.ibb.co/kybmpFW/egypt-min.jpg",
          text:
            "The advantages of Egypt are known to everyone: a quality beach holiday all year round in the Mediterranean and Red Seas, diluted with excellent diving, plus a varied “excursion”: the pyramids, the Sphinx and Luxor. Everything about Egypt from Hurghada to Sharm"
        },
        {
          title: "JAPAN",
          price: "$ 1.000",
          link: "learn more",
          url: "https://i.ibb.co/3zbzBkC/japan-min.jpg",
          text:
            "Country of the rising sun Japan - a storehouse of sophisticated exotic. The ultramodern Tokyo and picturesque province, the Fuji snow cap and sakura in bloom, the magnificent beaches of the Okinawa islands and the ancient Shinto monuments."
        },
        {
          title: "BRAZIL",
          price: "$ 1.700",
          link: "learn more",
          url: "https://i.ibb.co/wdmj0zh/brazil-min.jpg",
          text:
            "Brazil is not only the crazy carnival in Rio de Janeiro, the impenetrable jungle of the Amazon and the thundering cascades of Iguazu, but also the famous beaches of Ipanema and Copacabana, excellent hotels, excellent cuisine and great football."
        },
        {
          title: "SPAIN",
          price: "$ 1.500",
          link: "learn more",
          url: "https://i.ibb.co/C9PRsHT/barcelona-min.jpg",
          text:
            "Proud, narcissistic, explosive, full of geniuses and mediocrity, falling in love and falling in love, tiring and tired ... all this is about Barcelona - one of the most beautiful cities not only in Europe, but all over the world. When Muscovites are asked what the capital lacks, 9 out of 10 answer - the seas"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css");
$primary-padding: 120px;
$primary-width: 100%;
$font-size: 1.5rem;
$font-weight: 400;

.ba-tours {
  padding: $primary-padding 0;

  &-card {
    position: relative;
    transition: all 0.3s;
    margin-bottom: 30px;
    overflow: hidden;

    &__image {
      width: $primary-width;
    }

    &::before {
      position: absolute;
      content: "";
      width: $primary-width;
      height: $primary-width;
      background-color: #000;
      opacity: 0.5;
    }

    &:hover {
      box-shadow: 0 10px 20px rgba(110, 49, 49, 0.23),
        0 6px 6px rgba(110, 49, 49, 0.23);
    }

    &:nth-child(8) {
      margin-bottom: 0;
    }

    &-desc {
      display: flex;
      align-items: center;
      position: absolute;
      color: #fff;
      padding: 10px;
      font-size: $font-size - 0.625rem;
      transition: 0.3s;
    }

    &:hover .ba-tours-card-desc {
      transform: translateY(-$primary-width);
      padding: 20px 10px;

      @media screen and(max-width: 618px) {
        font-size: $font-size - 0.725rem;
      }

      @media screen and(max-width: 550px) {
        font-size: $font-size - 0.375rem;
      }

      @media screen and(max-width: 398px) {
        font-size: $font-size - 0.625rem;
      }
    }
    &:hover .ba-tours-info {
      transform: translateY(0);

      @media screen and(max-width: 1250px) {
        transform: translateY($primary-width - 50%);
      }

      @media screen and(max-width: 1000px) {
        transform: translateY($primary-width - 70%);
      }

      @media screen and(max-width: 910px) {
        transform: translateY(0);
      }

      @media screen and(max-width: 860px) {
        transform: translateY($primary-width - 50%);
      }

      @media screen and(max-width: 683px) {
        transform: translateY($primary-width - 70%);
      }

      @media screen and(max-width: 618px) {
        transform: translateY(0);
        font-size: $font-size - 0.725rem;
      }
    }
  }

  &-info {
    width: $primary-width;
    position: absolute;
    top: 0;
    transform: translateY($primary-width);
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    transition: 0.3s;

    font-weight: $font-weight;

    &__title {
      font-size: $font-size + 0.375rem;
      font-weight: $font-weight;

      @media screen and(max-width: 550px) {
        font-size: $font-size + 1rem;
      }

      @media screen and(max-width: 398px) {
        font-size: $font-size + 0.5rem;
      }
    }

    &__price {
      font-size: $font-size - 0.625rem;

      .size {
        font-size: $font-size;
        font-weight: $font-weight;
      }

      @media screen and(max-width: 550px) {
        font-size: $font-size;
      }
      @media screen and(max-width: 398px) {
        font-size: $font-size - 0.5rem;
      }
    }
    @media screen and(max-width: 550px) {
      transform: translateY($primary-width - 40%);
    }
  }

  @media screen and(max-width: 550px) {
    padding: $primary-padding 30px;
  }
}
</style>