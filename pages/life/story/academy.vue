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
      <p class="data">1833</p>
      <p class="title">Императорская Академия художеств</p>
      <p class="text">
        Айвазовский был принят за казённый счёт в Императорскую Академию художеств Санкт-Петербурга. Определен в класс М.Н. Воробьева            </p>
    </div>
    <img src="../../../public/academy-art.jpg" alt="" style="width: 100%">
  </div>

  <div class="story" style="margin-left: 122px">
    <div class="text-group">
      <p class="data">1834</p>
      <p class="title">Прикомандирован помощником</p>
      <p class="text">
        Академией был прикомандирован в помощники приехавшему в Петербург французскому маринисту Филиппу Таннеру, выполнявшему заказ Николая
      </p>
    </div>
    <img src="../../../public/nikolay.jpg" alt="" style="width: 70%">
  </div>

  <div class="story" style="margin-left: 32px">
    <div class="text-group">
      <p class="data">1835</p>
      <p class="title">Этюд воздуха над морем</p>
      <p class="text">
        Советом Академии Айвазовскому присуждена серебряная медаль 2-го достоинства за картину «Этюд воздуха vнад морем»
      </p>
    </div>
    <img src="../../../public/boat.jpg" alt="" style="width: 75%; padding-top: 3vw; padding-left: 5vw">
  </div>

  <div class="story" style="margin-left: 32px">
    <div class="text-group">
      <p class="data">1836</p>
      <p class="title">Класс батальной живописи</p>
      <p class="text">
        Определён в класс батальной живописи к профессору Александру Зауервейду для занятий морской военной живописью
      </p>
    </div>
    <img src="../../../public/alexander.jpg" alt="" style="width: 75%">
  </div>

  <div class="story" style="margin-left: 52px">
    <div class="text-group">
      <p class="data">1837</p>
      <p class="title">Золотая медаль 1-го достоинства</p>
      <p class="text">
        Его новые картины и марина «Штиль», написанная ранее украшала очередную сентябрьскую выставку и принесла художнику золотую медаль первой степени, а с ней и право на поездку за границу для усовершенствования в художестве
      </p>
    </div>
    <img src="../../../public/money.png" alt="" style="width: 82%">
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