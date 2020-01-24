<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <div class="modal-text">
          <slot name="text">Your application is completed, expect a response</slot>
        </div>

        <!-- <slot name="footer"> -->
        <button class="modal-default-button" @click="$emit('close')">X</button>
        <!-- </slot> -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.modal {
  &-mask {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }

  &-container {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 0px auto;
    text-align: center;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  &-text {
    margin: 40px 0;
  }

  &-default-button {
    position: absolute;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    top: 0;
    right: 0;
  }
}
// .modal

// .modal

// .modal

// .modal
</style>