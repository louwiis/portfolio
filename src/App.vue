<script setup>
import { RouterLink, RouterView } from 'vue-router'

import iphone from '@/assets/images/iphone.png'
</script>

<template>
  <RouterView class="view" />

  <div class="mobile">
    <div class="text">Hey, désolé mais il n'y a actuellement pas de version mobile du site! Mais bon, tu pourras un jour découvrir Luis sur ton téléphone, qui sait ?</div>

    <div class="iphone">
      <img class="image" :src="iphone" alt="iphone" />

      <div class="smile">⏳ :)</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mobile {
  display: none;
}

@media (max-width: 768px) {
  .view {
    display: none;
  }

  .mobile {
    display: block;
    background-color: #000;
    height: 100vh;
    width: 100vw;
    overflow: scroll;
    position: relative;

    .text {
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      height: 50vh;
      display: flex;
      align-items: center;
      padding: 0 32px;
      position: fixed;
    }

    .iphone {
      width: 100%;
      position: relative;
      margin-top: 50vh;

      .image {
        width: 100%;
      }

      .smile {
        position: absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 64px;

        color: #fff;
        font-weight: bold;

      }
    }
  }
}
</style>
