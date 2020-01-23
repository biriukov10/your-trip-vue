<template>
  <div class="ba-header-logo">
    <img :src="fluitImg" class="ba-header-logo__image" alt="logoTrip" />
    <h2 class="ba-header-logo__title">your trip</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fluitImg: "https://i.ibb.co/DYP3d6s/header-Image-min.jpg"
    };
  }
};
</script>

<style lang="scss">
.ba-header-logo {
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
</style>