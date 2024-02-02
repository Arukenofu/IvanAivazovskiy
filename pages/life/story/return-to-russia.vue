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
  <div class="story" style="margin-left: 102px">
    <div class="text-group">
      <p class="data">1844</p>
      <p class="title">Амстердамская Академия художеств</p>
      <p class="text">
        В Амстердаме, он остановился на короткое время и устроил выставку картин. Там он был удостоен звания члена Амстердамской Академии
      </p>
    </div>
    <img src="../../../public/amster.jpg" alt="" style="height: 60%; margin-top: 10px">
  </div>

  <div class="story" style="margin-left: 20px; display: flex; align-items: end; flex-direction: column; justify-content: flex-end">
    <div class="text-group">
      <p class="title">Возвращение в Петербург</p>
      <p class="text">
        В конце лета, он прибыл в Санкт-Петербург. Айвазовский был награжден орденом св. Анны
      </p>
    </div>
    <div class="text-group">
      <p class="title">Звание Академика</p>
      <p class="text">
        Академией художеств Айвазовскому присуждено звание академика
      </p>
    </div>
    <div class="text-group">
      <p class="title">Главный морской штаб</p>
      <p class="text">
        Морской департамент причислил художника к Главному морскому штабу со званием живописца Главного Морского штаба и с правом носить мундир Морского Министерства.
      </p>
    </div>
  </div>

  <div class="story" style="margin-left: 20px">
    <div class="text-group">
      <p class="data">1845</p>
      <p class="title">Эспедиция</p>
      <p class="text">
        25 апреля Айвазовский отправлен в плавание в Константинополь и Греческий архипелаг с адмиралом Литке
      </p>
    </div>
    <img src="../../../public/admiral.jpg" alt="" style="height: 55%; margin-top: 12px">
  </div>

  <div class="story">
    <div class="text-group">
      <p class="data">1847</p>
      <p class="title">Звание профессора</p>
      <p class="text">
        25 марта Айвазовскому присуждено звание профессора Академии художеств
      </p>
    </div>
    <img src="../../../public/professor.jpg" alt="" style="height: 65%;">
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