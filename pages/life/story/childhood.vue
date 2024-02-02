<script setup lang="ts">

import {gsap} from "gsap";

onMounted(() => {
  gsap.from('.story', {
    opacity: 0,
    y: 30,
    duration: 1.5,
  })
})
</script>

<template>
  <div class="story" style="margin-left: 130px">
  <div class="text-group">
    <p class="data">1817</p>
    <p class="title">Рождение</p>
    <p class="text">
      Родился 29 июля в Феодосии в семье Константина и Рипсиме Айвазовских
    </p>
  </div>
  <div class="image-parents">
    <div class="image-item">
      <img src="../../../public/papa.jpg" style="width: 18vh" alt="">
    </div>
    <div class="image-item" style="padding-left: 37%">
      <img src="../../../public/mama.jpg" style="width: 18vh" alt="">
    </div>
  </div>
</div>

  <div class="story">
    <div class="text-group">
      <p class="data">1831</p>
      <p class="title">Симферопольская гимназия №1</p>
      <p class="text">
        Поступил в Симферопольскую гимназию. Первым учителем рисования у юного Ивана Айвазовского был немецкий колонист, художник Иоганн Людвиг Гросс
      </p>
    </div>
    <img src="../../../public/gymnazy.jpg" alt="" style="width: 100%">
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