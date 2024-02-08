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

  let targetLeft: number;

  function scrollLeft(isMouse: boolean) {
    let beforeLeft = container.scrollLeft;

    let diff = targetLeft - container.scrollLeft;
    let dX = 100 >= Math.abs(diff) ? diff : Math.sign(diff) * 500;

    if (isMouse) {
      container.scrollBy({
        left: dX,
        behavior: "smooth"
      });
    } else {
      container.scrollBy({
        left: dX/2
      });
    }

    if (dX === diff)
      return;

    if (beforeLeft === container.scrollLeft || container.scrollLeft === targetLeft)
      return;

    requestAnimationFrame(() => scrollLeft);
  }

  container.addEventListener('wheel', (e: WheelEvent) => {
    e.preventDefault();

    let isMouse = !(e.deltaX === 0 && !Number.isInteger(e.deltaY))

    scrollWidth = container.scrollWidth - container.clientWidth;
    targetLeft = Math.min(scrollWidth, Math.max(0, container.scrollLeft + e.deltaY));

    requestAnimationFrame(() => {
      scrollLeft(isMouse)
    });
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

  if (document.documentElement.clientWidth > 510) {

    gsap.from('aside', {
      opacity: 0,
      duration: 2,
      delay: 1,
      translateX: '-80%'
    })

  } else {
    gsap.from('aside', {
      opacity: 0,
      duration: 2,
      delay: 1,
      translateY: '80%'
    })
  }

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

const currentRoute = useState('storyRoute');

const sectionPositionZero = (): void => {
  section.value?.scrollTo({
    left: 0,
    behavior: "smooth"
  });
}

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
          <li @click="sectionPositionZero(); currentRoute = index; router.push(routes[index]);"
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
    overflow-y: scroll;
    scrollbar-width: none;

    aside {
      position: fixed;
      width: 80px;
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
        row-gap: 20px;
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

@media screen and (max-width: 510px) {
  article section aside {
    bottom: 0;
    height: 80px;
    width: 100vh;

    ul {
      flex-direction: row;

      li {
        width: calc(100vw / 6);
        aspect-ratio: 1/1;
        display: grid;
        place-items: center;
      }
    }
  }
}
</style>