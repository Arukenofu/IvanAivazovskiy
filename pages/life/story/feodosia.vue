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
      <p class="data">1848</p>
      <p class="title">Первый брак</p>
      <p class="text">
        Айвазовский женился на Юлии Яковлевне Грефс с которой прожил 12 лет
      </p>
      <p class="title">Переезд в Феодосию</p>
      <p class="text">
        Переезжает в Феодосию на постоянное проживание
      </p>
      <p class="title">Первая выставка в Москве</p>
      <p class="text">
        Айвазовский устраивает первую выставку своих картин в Москве
      </p>
    </div>
  </div >

  <div class="story">
    <img src="../../../public/brak.jpg" alt="" style="width: 55%; margin-top: 100px;">
  </div>

  <div class="story">
    <div class="text-group">
      <p class="data">1850</p>
      <p class="title">Девятый вал</p>
      <p class="text">
        Айвазовский написал картину «Девятый вал». Одну из самых известных картин русского мариниста который хранится в Русском музее.
      </p>
    </div>
    <img src="../../../public/kartina.jpg" alt="" style="width: 85%; margin-top: 20px;">
  </div>

  <div class="story">
    <div class="text-group">
      <p class="data">1854</p>
      <p class="title">Выставка в Севастополе</p>
      <p class="text">
        Крымская война. Айвазовский открыл выставку своих батальных картин в осажденном Севастополе
      </p>
    </div>
    <img src="../../../public/timeline.jpg" alt="" style="width: 60%">
  </div>

  <div class="story">
    <div class="text-group">
      <p class="data">1857</p>
      <p class="title">Персональная выставка в Париже</p>
      <p class="text">
        Айвазовский устроил выставку своих картин в Париже, за которые ему присуждён орден Почётного Легиона
      </p>
    </div>
    <img src="../../../public/vistav.jpg" alt="" style="width: 60%; margin-top: 80px;">
  </div>

  <div class="story" style="margin-left: 40px">
    <div class="text-group">
      <p class="data">1865</p>
      <p class="title">Общие художественные мастерские</p>
      <p class="text">
        Айвазовский зачислен на службу в Академию художеств в связи с открытием в его феодосийской мастерской «Общих художественных мастерских»
      </p>
    </div>
    <img src="../../../public/aiva.jpg" alt="" style="width: 60%;">
  </div>

  <div class="story" style="margin-left: 40px">
    <div class="text-group">
      <p class="data">1876</p>
      <p class="title">Флорентийская Академия художеств</p>
      <p class="text">
        Избран членом Флорентийской Академии художеств
      </p>
    </div>
    <img src="../../../public/add.jpg" alt="" style="width: 80%; margin-top: 20px;">
    <div class="text-group" style="margin-top: 40px;">
      <p class="title">Галерея Питти</p>
      <p class="text">
        Написал свой автопортрет для галереи Питти
      </p>
    </div>
  </div>

  <div class="story" style="margin-left: 100px">
    <div class="text-group">
      <p class="data">1882</p>
      <p class="title">Второй брак</p>
      <p class="text">
        Айвазовский вступил во второй брак с А. Н. Бурназовой, во вдовстве Саркизовой
      </p>
    </div>
    <img src="../../../public/brak2.jpg" alt="" style="width: 55%;">
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