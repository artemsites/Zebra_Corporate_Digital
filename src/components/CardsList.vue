<template>
  <section class="cards-list container">

    <article class="card" v-for="card in cards" :key="card.code" :id="card.code">
      <img v-if="card.image" class="card__img" :src="card.image" :alt="card.name">
      <div class="card__box">
        <time datetime="2018-07-07" class="card__date">
          <span class="card__date-d">{{ moment.unix(card.date).format('DD') }}</span>
          <span class="card__date-my">
            {{ moment.unix(card.date).format('MMMM') }}
            <br>
            {{ moment.unix(card.date).format('YYYY')}}
          </span>
        </time>

        <h2 class="card__title">{{ card.name }}</h2>
        <p class="card__text">{{ card.previewText }}</p>
        <RouterLink :to="`#${card.link}`" class="card__btn">Новости</RouterLink>
      </div>
    </article>


  </section>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import moment from 'moment'



let cards = ref([])

/**
 * При первой загрузке страницы 
 *   необходимо отправлять AJAX запрос на обработчик ([http://flems.github.io/test/api/news](http://flems.github.io/test/api/news/2/)/) и получать данные в виде JSON. 
 * 
 * Эти данные необходимо обработать и вывести новости на страницу. Проверяем есть ли возможность загрузить следующую страницу. Если есть, то показываем кнопку "Загрузить еще".
 */
fetch('https://flems.github.io/test/api/news')
  .then(response => response.json())
  .then(data => {
    console.log('data')
    console.log(data)
    cards.value = data.items
  });


</script> 