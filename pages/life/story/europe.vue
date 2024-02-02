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
      <p class="data">1838</p>
      <p class="title">Поездка в Крым</p>
      <p class="text">
        За выдающиеся успехи в живописи Айвазовский командирован Академией на два года в Крым для самостоятельной работы
      </p>
    </div>
    <div class="image-item">
      <img src="../../../public/krim1.jpg" style="width: 60%" alt="">
    </div>
    <div class="image-item">
      <img src="../../../public/krim2.jpg" style="width: 50%" alt="">
    </div>
  </div>

  <div class="story" style="margin-left: 52px">
    <div class="text-group">
      <p class="data">1837</p>
      <p class="title">Черноморский флот</p>
      <p class="text">
        Во время боевой операции в долине реки Субаш Айвазовский познакомился с великими русскими флотоводцами: М. П. Лазаревым, В. А. Корниловым, П. С. Нахимовым и И. А. Панфиловым, славные боевые подвиги которых позднее он неоднократно изображал
      </p>
    </div>
    <img src="../../../public/flit.jpg" alt="" style="width: 49%">
  </div>

  <div class="story" style="margin-left: 32px">
    <div class="text-group">
      <p class="title">Выпуск из Академии</p>
      <p class="text" style="width: 60%">
        6 октября выпущен из Академии и удостоен звания художника 14-го класса
      </p>
    </div>
  </div>

  <div class="story">
    <div class="text-group">
      <p class="data">1840</p>
      <p class="title">Поездка за границу</p>
      <p class="text">
        Он отправлен за границу для дальнейшего усовершенствования в искусстве. В сентябре, Айвазовский и его товарищ в пейзажном классе Академии Василий Штернберг прибыли в Рим
      </p>
    </div>
    <img src="../../../public/zapad.jpg" alt="" style="width: 55%">
  </div>

  <div class="story">
    <div class="text-group">
      <p class="data">1843</p>
      <p class="title">Встреча с Тернером</p>
      <p class="text">
        Встреча Айвазовского с прославленным маринистом Уильямом Тернером
      </p>
    </div>
    <img src="../../../public/terner.jpg" alt="" style="width: 70%">
  </div>

  <div class="story" style="margin-left: 60px">
    <div class="text-group">
      <p class="data">1842</p>
      <p class="title">Париж</p>
      <p class="text">
        Он участвовал во Всемирной выставке живописи в Париже. Картины мариниста имели успех. Французские газеты осыпали их восторженными похвалами, а Совет Парижской Королевской академии художеств художника золотой медалью
      </p>
    </div>
    <img src="../../../public/paris.jpg" alt="" style="width: 78%; margin-top: 40px">
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