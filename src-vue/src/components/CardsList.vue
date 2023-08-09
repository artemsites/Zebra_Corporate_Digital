<template>
  <section class="cards-list container">
    <div class="cards-list__box">
      <article class="card" :class="{ '_no-img': !card.image }" v-for="card in cards" :key="card.code">
        <img v-if="card.image" class="card__img" :src="card.image" :alt="card.name">
        <div class="card__box">
          <time datetime="2018-07-07" class="card__date">
            <span class="card__date-d">{{ moment.unix(card.date).format('DD') }}</span>
            <span class="card__date-my">
              {{ moment.unix(card.date).format('MMMM') }}
              <br>
              {{ moment.unix(card.date).format('YYYY') }}
            </span>
          </time>

          <h2 class="card__title" v-html="card.name"></h2>
          <p class="card__text" v-html="card.previewText"></p>
        </div>
        <RouterLink :to="`#${card.link}`" class="card__btn">Новости</RouterLink>
      </article>
    </div>

    <button v-if="showBtnLoadNextPage" @click="showNextPage" class="cards-list__show-more">Загрузить ещё</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import moment from 'moment'



const API = 'https://flems.github.io/test/api/news'
let cards = ref([])
let page = ref({ 'cur': null, 'total': null })
let showBtnLoadNextPage = ref(false)



/**
 * При первой загрузке страницы необходимо отправлять AJAX запрос на обработчик ([http://flems.github.io/test/api/news](http://flems.github.io/test/api/news/2/)/) и получать данные в виде JSON. 
 * Эти данные необходимо обработать и вывести новости на страницу. 
 */
showPage(1)
.then(() => {
  /**
   * Проверяем есть ли возможность загрузить следующую страницу. Если есть, то показываем кнопку "Загрузить еще".
   */
  ifNextPageExistShowBtnLoadElseHide()
})



async function showPage(num) {
  if (num <= 1) num = ''
  await fetch(`${API}/${num}`)
    .then(response => response.json())
    .then(data => {
      cards.value.push(...data.items)
      page.value.cur = data.nav.current
      page.value.total = data.nav.total
    })
}



function ifNextPageExistShowBtnLoadElseHide() {
  if (page.value.cur < page.value.total) {
    fetch(`${API}/${page.value.cur + 1}`)
      .then(response => response.json())
      .then(nextPageData => {
        if (nextPageData.items.length > 0) {
          showBtnLoadNextPage.value = true
        }
      });
  }
  else {
    showBtnLoadNextPage.value = false
  }
}



function showNextPage() {
  if (page.value.cur < page.value.total) {
    showPage(page.value.cur + 1)
      .then(() => {
        ifNextPageExistShowBtnLoadElseHide()
      })
  }
}
</script>