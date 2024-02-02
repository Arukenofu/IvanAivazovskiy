<script setup lang="ts">
import gsap, {Power4} from "gsap";

const loadingProgressOpacity: Ref<number> = ref(0.1);
const isLoaded: Ref<boolean> = ref(false)

onMounted(async () => {
  await gsap.from(".preload", {
    opacity: 0,
    delay: 1,
    duration: 2
  });

  await new Promise(resolve => setTimeout(resolve, 3000))

  const gradualIncrease = (): void => {
    const increase = async (): Promise<void> => {
      if (loadingProgressOpacity.value <= 1) {
        (loadingProgressOpacity.value += 0.003)
        setTimeout(increase, 10);
      } else {
        await gsap.to(".appear-loading", {
          opacity: 0,
          duration: 1
        })

        isLoaded.value = true;
      }
    }

    increase();
  }

  gradualIncrease();
})

const preloadLeave = (): void => {
  gsap.to(".appear-loading", {
    opacity: 0,
    duration: 2
  })
}

useHead({
  title: 'Ivan Aivazovsky',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-196x196.png',
      sizes: '196x196'
    }
  ]
})
</script>

<template>
  <keep-alive>
    <transition @leave="preloadLeave()">
      <main role="main">
        <div class="preload" v-if="!isLoaded" key="preload">
          <div class="preloader center-absolute appear-loading">
            <p class="text-solid" :style="`opacity: ${loadingProgressOpacity}`">I. Aivazovsky</p>
          </div>
          <div class="loader-message text-main text-uppercase appear-loading">
            Идет загрузка
            <div class="divider"/>
            Подождите
          </div>
        </div>
        <nuxt-page v-else />
      </main>
    </transition>
  </keep-alive>
</template>

<style lang="scss">
@import "styles/global";

.preload {
  .text-solid {
    font-size: 2.7rem;
    font-weight: 600;
    display: inline-block;
    overflow: hidden;
    transition: opacity 0.1s ease;
  }

  .loader-message {
    cursor: pointer;
    position: absolute;
    bottom: 2.5vw;
    right: 0;
    left: 0;
    z-index: 10;
    opacity: .4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .79rem;
    letter-spacing: 1px;
    font-weight: 400;

    .divider {
      height: 1px;
      background-color: #FFFFFF;
      width: 100px;
      margin: 0 9px;
    }
  }
}
</style>