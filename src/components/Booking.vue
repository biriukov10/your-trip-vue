<template>
  <!-- добавить фотки и переписать все стили в данный блок -->
  <div class="booking">
    <section class="ba-desc">
      <div class="container">
        <div class="ba-row">
          <div class="ba-col-6 ba-col-sm-12">
            <!-- start form -->
            <booking-form></booking-form>
            <!-- end form -->
          </div>
          <div class="ba-col-6 ba-col-sm-12">
            <!-- start atricle desc -->
            <booking-desc></booking-desc>
            <!-- end article desc -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BookingDesc from "./BookingDesc";
import BookingForm from "./BookingForm";

export default {
  data() {
    return {};
  },
  components: {
    BookingDesc,
    BookingForm
  }
};
</script>

<style lang="scss" scoped>
</style>