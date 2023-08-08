<template>
  <div class="banner">
    <div class="container">
      <img class="banner__img" src="/uploads/banner.jpg" alt="Баннер alpha">
      <h1 class="banner__title">{{h1}}</h1>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    h1: { 
      type: String, 
      required: false 
    },
  })
</script>