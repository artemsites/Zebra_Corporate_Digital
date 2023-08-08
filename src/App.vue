<script setup>
  import { /* RouterLink,  */RouterView } from 'vue-router'
  import IconLogo from '@/components/icons/IconLogo.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <IconLogo />
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
  // 
</style>
