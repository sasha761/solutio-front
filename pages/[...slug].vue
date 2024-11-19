<template>
  <div class="default-layout">
    <Header />
    <div class="wrapper">
      <main class="p-page">
        <div class="u-container">
          <div class="c-breadcrumbs" v-if="breadcrumbs">
            <span v-for="(crumb, index) in breadcrumbs" :key="index">
              <router-link v-if="crumb.url" :to="crumb.url">{{ crumb.title }}</router-link>
              <span v-else>{{ crumb.title }}</span>
              <span v-if="index < breadcrumbs.length - 1"> / </span>
            </span>
            <span v-if="content.page.title"> / {{ content.page.title }}</span>
          </div>
          <div class="p-page__flex">
            <aside class="l-sidebar">
              <h1 class="u-h1">{{ content.page.title }}</h1>
              <p>Learn more about how Solutio collects and uses data and your rights as a Solutio user.</p>
            </aside>
            <div class="p-page__content" v-html="content.page.content"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useAsyncData, createError } from 'nuxt/app'
import Api from '@/api/Axios'

const route = useRoute()

// Получаем параметр slug и преобразуем его в путь
const slugArray = route.params.slug || []
const path = Array.isArray(slugArray) ? slugArray.join('/') : slugArray

const { data: content, pending, error } = await useAsyncData('content', async () => {
  try {
    const result = await Api.post('page/page', { url: '/' + path })
    if (result.data && result.data.page) {
      return result.data
    } else {
      throw createError({ statusCode: 404, statusMessage: "Page not found"})
    }
  } catch (err) {
    throw createError({ statusCode: 404, statusMessage: "Page not found"})
  }
})

if (error.value){
  throw createError({ statusCode: error.value.statusCode, statusMessage: error.value.statusMessage})
}

// Функция для получения хлебных крошек
const { data: breadcrumbs } = await useAsyncData('breadcrumbs', async () => {
  try {
    const response = await Api.get('helper/breadcrumbs', {
      params: {
        url: encodeURIComponent('/' + path)
      }
    })
    return response.data
  } catch (err) {
    console.error('Error fetching breadcrumbs:', err)
    return []
  }
})

</script>