<template>
  <button :class="['u-btn', extraClass]" @click="$emit('click')">
    <span>{{ text }}</span>
    <div v-if="svgIcon" v-html="svgIcon"></div>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    svgIcon: {
      type: String,
      default: ''
    },
    extraClass: {
      type: String,
      default: ''
    }
  }
}
</script>
