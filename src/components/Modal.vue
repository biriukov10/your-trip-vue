<template>
  <transition class="modal" name="modal">
    <div class="modal-mask" ref="modal">
      <div class="modal-container">
        <div class="modal-text">
          <h1 class="modal-title">Hello, {{ name }}</h1>
          <slot name="text">your application is completed, expect a response</slot>
        </div>
        <button class="modal-default-button" @click="$emit('close')">X</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
$center: center;
$primary-width: 100%;
$primary-pixel: 5px;
$zero: 0;

.modal {
  &-mask {
    display: flex;
    justify-content: $center;
    align-items: $center;
    position: fixed;
    z-index: 9998;
    top: $zero;
    left: $zero;
    width: $primary-width;
    height: $primary-width;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }

  &-container {
    position: relative;
    width: $primary-width;
    max-width: 400px;
    margin: $zero auto;
    text-align: $center;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: $primary-pixel;
    box-shadow: $zero $primary-pixel - 3px $primary-pixel + 3px
      rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  &-text {
    margin: 40px $zero;
  }

  &-default-button {
    position: absolute;
    padding: $primary-pixel $primary-pixel + 5px;
    border-radius: $primary-pixel;
    color: #fff;
    background-color: #e85252;
    cursor: pointer;
    border: 1px solid transparent;
    top: $zero;
    right: $zero;
    transition: 0.3s;

    &:hover {
      color: #fff;
      border-color: #e85252;
      background-color: rgb(248, 126, 126);
    }
  }
}
</style>