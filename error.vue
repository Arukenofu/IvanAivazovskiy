<script setup lang="ts">

</script>

<template>
  <div class="error-message text-main text-uppercase center-absolute">
    Данной страницы не существует.
  </div>
  <div class="goback center-absolute">
    <nuxt-link to="/">Назад</nuxt-link>
  </div>
</template>

<style scoped lang="scss">
.error-message {
  font-size: 1.5rem;
  font-weight: 900;
  top: 45%;
  text-align: center;
}

.goback {
  a {
    color: #a1907f;
  }
}
</style>