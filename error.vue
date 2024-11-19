<template>
  <div class="default-layout">
    <Header />
    <div class="wrapper">
      <main class="p-error">
        <div class="p-error__title">
          <router-link to="/" class="c-arrow">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.08973 16.9986L14.7053 22.585L13.2947 24.0028L5.96139 16.7076C5.77273 16.5199 5.66665 16.2647 5.66665 15.9986C5.66665 15.7325 5.77273 15.4774 5.96139 15.2897L13.2947 7.99438L14.7053 9.41227L9.08982 14.9986L26.6667 14.9986L26.6667 16.9986L9.08973 16.9986Z" fill="black" />
            </svg>
          </router-link>
          <h1>
            <span class="is-grey">{{error.statusCode}}</span>
            {{error.message}}
          </h1>
        </div> 
      </main>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
})
</script>