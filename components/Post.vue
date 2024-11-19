<template>
  <div class="c-post" :class="{ 'is-flipped': isFlipped }" @click="flipCard">
    <div class="c-post__inner">
      <div class="c-post__front">
        <div class="c-post__img">
          <img :src="image" :alt="title" />
          <div class="c-post__img-arrow c-arrow">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7722 6.50024H10.3332V5.00024H18.3329C18.8852 5.00024 19.3329 5.44796 19.3329 6.00024V14H17.8329V7.5609L6.39562 18.9982L5.33496 17.9375L16.7722 6.50024Z" fill="black" />
            </svg>
          </div>
        </div>
        <div class="c-post__content">
          <div class="c-post__title">{{ title }}</div>
          <div class="c-tags">
            <router-link
              v-for="(tag, index) in tags"
              :key="index"
              :to="tag.link"
              class="c-tags__item"
            >
              {{ tag.name }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="c-post__back">
        <div class="c-post__img-arrow c-arrow is-black">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7722 6.50024H10.3332V5.00024H18.3329C18.8852 5.00024 19.3329 5.44796 19.3329 6.00024V14H17.8329V7.5609L6.39562 18.9982L5.33496 17.9375L16.7722 6.50024Z" fill="black" />
          </svg>
        </div>
        <div class="c-post__content">
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false
    };
  },

  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      default: () => [],
      validator: tags => tags.every(tag => typeof tag.name === 'string' && typeof tag.link === 'string')
    }
  },
  
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    }
  }
}
</script>
