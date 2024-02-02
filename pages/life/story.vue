<script setup lang="ts">
import type {route} from "~/interfaces/route";
import {gsap} from "gsap";
import {onMounted} from "vue";

const router = useRouter()

const route: Array<route> = [
  {
    name: 'Главная',
    route: '/',
    async func() {
      return await navigateToHome()
    }
  },
  {
    name: 'Жизнь',
    route: '/life',
    async func() {
      return await navigateToLife()
    }
  },
  {
    name: 'История',
    route: '/life/story',
  }
]

const rim: Array<string> = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI'
]

const navigateToHome = async (): Promise<void> => {
  gsap.to('.nav', {
    opacity: 0,
    duration: 1,
  });

  await gsap.to('.stories', {
    opacity: 0,
    duration: 1.2,
  })

  gsap.to('aside', {
    opacity: 0,
    duration: 1
  });

  await gsap.to('.background', {
    delay: 1,
    opacity: 0,
    duration: 2,
    backgroundColor: '#282830'
  })

  await router.push('/')
}

const navigateToLife = async (): Promise<void> => {
  gsap.to('.nav', {
    opacity: 0,
    duration: 1,
  });

  await gsap.to('.stories', {
    opacity: 0,
    duration: 1.2,
  })

  gsap.to('aside', {
    opacity: 0,
    duration: 1
  });

  await gsap.to('.background', {
    delay: 1,
    opacity: 0,
    duration: 1,
    backgroundColor: '#282830'
  })

  await router.push('/life')
}

const color = ref<string>('#000')

const scroll = ref<HTMLElement>()

function horizontalWheel(container: HTMLElement) {
  let scrollWidth: number;

  let targetLeft : number;

  function scrollLeft() {
    let beforeLeft = container.scrollLeft;
    let diff = targetLeft - container.scrollLeft;
    let dX = 200 >= Math.abs(diff) ? diff : Math.sign(diff) * 500;

    container.scrollBy(dX, 0);

    if (dX === diff)
      return;

    if (beforeLeft === container.scrollLeft || container.scrollLeft === targetLeft)
      return;

    requestAnimationFrame(scrollLeft);
  }

  container.addEventListener('wheel', e => {
    e.preventDefault();

    scrollWidth = container.scrollWidth - container.clientWidth;
    targetLeft = Math.min(scrollWidth, Math.max(0, container.scrollLeft + e.deltaY));

    requestAnimationFrame(scrollLeft);
  });
}

onMounted(async () => {
  if (typeof section.value !== 'undefined') {
    horizontalWheel(section.value)
  }

  gsap.from('.nav', {
    opacity: 0,
    duration: 1,
    delay: 0.5,
  })

  gsap.from('aside', {
    opacity: 0,
    duration: 2,
    delay: 1,
    translateX: '-80%'
  })

})

const routes: Array<string> = [
  '/life/story/childhood',
  '/life/story/academy',
  '/life/story/europe',
  '/life/story/return-to-russia',
  '/life/story/feodosia',
  '/life/story/last-years',
]

const section = ref<HTMLElement>()

const currentRoute = useState('storyRoute')
</script>

<template>
  <article id="scroll" ref="scroll">
    <Nav
        style="position: fixed"
        class="nav center-x"
        v-model:routes="route"
        v-model:color="color"
    />
    <div class="background" />
    <section ref="section" class="swiper-wrapper">
      <aside>
        <ul>
          <li @click="currentRoute = index; router.push(routes[index]);"
              v-for="(rim, index) in rim"
              :class="(currentRoute === index) && 'active'"
          >
            {{rim}}
          </li>
        </ul>
      </aside>

      <div class="stories">
        <nuxt-page />
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
* {
  color: #000000;
}

article {
  width: 100vw;
  height: 100vh;
  display: flex;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #FFFFFF;
  }

  section {
    color: #282830;
    min-width: 70vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    -ms-overflow-style: none;
    scroll-behavior: smooth;
    overflow-y: scroll;
    scrollbar-width: none;

    aside {
      position: fixed;
      width: 5%;
      height: 100vh;
      z-index: 2;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;

      ul {
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        font-size: 1rem;

        li {
          font-family: 'Newbaskervilleexpodc', sans-serif;
          color: #000000;
          cursor: pointer;
          width: 100%;
          text-align: center;
          transition: color 1s cubic-bezier(.19,1,.22,1);

          &:hover {
            color: #a1907f;
          }
        }

        .active {
          color: #a1907f;
        }
      }
    }

    .stories {
      display: flex;
      margin-left: 5%;
      gap: 15px;
      height: 70vh;

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
    }
  }
}
</style>