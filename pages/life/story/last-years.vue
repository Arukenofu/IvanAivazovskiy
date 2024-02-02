<script setup lang="ts">

import {gsap} from "gsap";

onMounted(() => {
  gsap.from('.story', {
    opacity: 0,
    y: 30,
    duration: 1.5
  })
})
</script>

<template>
  <div class="story" style="margin-left: 102px">
    <div class="text-group">
      <p class="data">1892</p>
      <p class="title">Поездка в Америку</p>
      <p class="text">
        В октябре Айвазовский совершил поездку в Америку. После поездки художник написал Ниагарский водопад
      </p>
    </div>
    <img src="../../../public/waterfall.jpg" alt="" style="width: 90%; margin-top: 100px;">
  </div>

  <div class="story" style="margin-left: 60px">
    <div class="text-group">
      <p class="data">1898</p>
      <p class="title">Среди волн</p>
      <p class="text">
        Написал одну из основных картин «Среди волн». Это грандиозное полотно по своим масштабам 12 m2 - написал за 10 дней
      </p>
    </div>
    <img src="../../../public/woln.jpg" alt="" style="width: 90%; margin-top: 60px;">
  </div>

  <div class="story" style="margin-left: 60px; margin-right: 300px">
    <div class="text-group">
      <p class="data">1900</p>
      <p class="title">Смерть</p>
      <p class="text">
        В ночь на 2 мая И. К. Айвазовский скоропостижно скончался
      </p>
    </div>
    <img src="../../../public/death.jpg" alt="" style="width: 90%">
  </div>
</template>

<style scoped lang="scss">
* {
  color: #000000;
}

.story {
  width: 400px;
  cursor: pointer;

  &:hover .text-group .data {
    color: #a1907f;
  }

  &:first-child {
    margin-left: 42px;
  }

  .text-group {

    .data {
      font-family: 'PT Serif', sans-serif;
      font-weight: 100;
      font-size: 2.3rem;
      padding-bottom: 2vw;
      transition: color 1s cubic-bezier(.19,1,.22,1);
    }

    .title {
      font-family: 'Playfair', sans-serif;
      font-size: 1.2rem;
    }

    .text {
      letter-spacing: 0;
      line-height: 1.5;
      padding: 1vw 0;
      font-family: 'PT Serif', sans-serif;
      font-size: 0.8rem;
      max-width: 80%;
    }

  }

  .image-item {
    width: 100%;
  }
}
</style>