<script setup>
  import { /* RouterLink,  */RouterView } from 'vue-router'
  import IconLogo from '@/components/icons/IconLogo.vue'
  import Copyright from '@/components/Copyright.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <IconLogo class="header__logo" />
    </div>
  </header>



  <RouterView />



  <header class="footer">
    <div class="container">
      <IconLogo class="footer__logo" />
      <Copyright class="footer__copyright" />
    </div>
  </header>
</template>

<style lang="scss">
  // 
</style>
