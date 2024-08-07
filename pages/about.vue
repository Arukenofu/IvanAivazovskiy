<script setup lang="ts">
import gsap, {Power4} from 'gsap'
import type {route} from "~/interfaces/route";

const router = useRouter()

onMounted(async () => {
  gsap.from('.about-ivan', {
    filter: 'blur(12px)',
    duration: 4,
    ease: Power4.easeOut
  })

  gsap.from('.about', {
    delay: 3,
    opacity: 0,
    color: '#69697d',
    duration: 2
  })
})

const navigateToHome = async (): Promise<void> => {
  await gsap.to('.container, .nav, .about', {
    opacity: 0,
    duration: 1
  })

  await router.push('/')
}

const route: Array<route> = [
  {
    name: 'Главная',
    route: '/',
    async func() {
      await navigateToHome()
    }
  },

  {
    name: 'Проект',
    route: '/about'
  },
]
</script>

<template>
  <Nav class="nav" v-model:routes="route" />
  <div class="container center-absolute text-uppercase">
    <p class="about-ivan">
      <span>29 июля</span> исполняется <span>200 лет</span> со дня рождения <span>Ивана Айвазовского.</span> Он проявил особое влечение к морю и был выдающимся представителем <span>маринистической</span> живописи <span>XIX века.</span> Творчество <span>Айвазовского</span> связано глубокими корнями с русским искусством конца XVIII и XIX веков и, в свою очередь, продолжало и развивало его. Оно строило <span>чарующее</span> изображение моря, с <span>великолепием</span> отражая его разнообразие на художественном холсте.
    </p>
  </div>

  <div class="about center-x">
    <p>Разработано <a href="https://github.com/Arukenofu">@Arukenofu</a> в целях обучения.</p>
  </div>
</template>

<style scoped lang="scss">
.container {
  min-width: 350px;

  p {
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 3.5vh;
    font-family: 'PT Serif', sans-serif;
    color: #69697d;
  }
}

.about {
  margin-top: 20px;
  text-align: center;
  bottom: 50px;
  font-size: 1.1rem;

  a {
    color: #a9a9f6;
  }
}

@media screen and (max-width: 700px) {
  .container p {
    font-size: 0.9rem;
  }

  .about {
    width: 100%;
  }
}
</style>