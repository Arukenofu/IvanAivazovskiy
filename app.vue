<script setup lang="ts">
import gsap from "gsap";

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const images: string[] = [
  '/200th.png',
  '/academy-art.jpg',
  '/add.jpg',
  '/admiral.jpg',
  '/aiva.jpg',
  '/alexander.jpg',
  '/amster.jpg',
  '/background.jpg',
  '/boat.jpg',
  '/brak.jpg',
  '/brak2.jpg',
  '/childhood.jpg',
  '/crimea-and-europe.jpg',
  '/death.jpg',
  '/favicon.ico',
  '/favicon-196x196.png',
  '/feodosia.jpg',
  '/flit.jpg',
  '/gymnazy.jpg',
  '/imperial-academy-of-arts.jpg',
  '/kartina.jpg',
  '/krim1.jpg',
  '/krim2.jpg',
  '/last-years.jpg',
  '/mama.jpg',
  '/money.png',
  '/nikolay.jpg',
  '/papa.jpg',
  '/paris.jpg',
  '/professor.jpg',
  '/return-to-russia.jpg',
  '/terner.jpg',
  '/timeline.jpg',
  '/vistav.jpg',
  '/waterfall.jpg',
  '/woln.jpg',
  '/zapad.jpg'
];

const loadingProgressOpacity = ref<number>(0.1);
let loadedImages = ref(0);

const isLoaded = ref<boolean>(false);

async function updateProgress() {
  await delay(10);

  gsap.to('.text-solid', {
    opacity: 0.1 + 0.9 * (loadedImages.value / images.length),
  });
}

async function onEnded() {
  await gsap.to(".appear-loading", {
    opacity: 0,
    duration: 1
  });

  isLoaded.value = true;
}

async function loadImage(url: string) {
  return new Promise(async (resolve) => {
    const image = new Image();
    image.src = url;
    image.onload = async () => {
      await updateProgress();
      loadedImages.value++;
      resolve(image);
    };
    image.onerror = async () => {
      console.error(`Failed to load image: ${url}`);
      await updateProgress();
      loadedImages.value++;
      resolve(null);
    }
  })
}

onMounted(async () => {
  await gsap.to(".preload", {
    opacity: 1,
    delay: 1,
    duration: 2
  });

  await Promise.all(images.map((url) => {
    loadImage(url)
  }));
})

const preloadLeave = (): void => {
  gsap.to(".appear-loading", {
    opacity: 0,
    duration: 2
  })
}

watch(loadedImages, (value) => {
  if (value === images.length) {
    onEnded();
  }
})

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
        <div class="preload" key="preload" v-if="!isLoaded">
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
  opacity: 0;

  .text-solid {
    font-size: 2.7rem;
    font-weight: 600;
    width: 100vw;
    text-align: center;
    display: inline-block;
    overflow: hidden;
    transition: opacity 0.1s ease;
  }

  .loader-message {
    width: 100vw;
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