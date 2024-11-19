<template>
  <div class="c-about-us">
    <div class="c-about-us__number">/ {{number}}</div>
    <div class="c-about-us__content">
      <div class="c-about-us__title">{{title}}</div>
      <div class="c-about-us__subtitle">{{subtitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String, 
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    number: {
      type: [Number, String],
      required: true,
    }
  }
}
</script>