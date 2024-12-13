<template>
  <div>
    <CalendlyPopupWidget
        v-bind="options"
        :root-element="rootElement"
    />

    <!-- Can be any element -->
    <div ref="rootElement" />
  </div>
</template>

<script setup>
  const rootElement = ref()
  const options = {
      url: 'https://calendly.com/solutioagency-info/30min?hide_gdpr_banner=1', 
      text: 'Free Consultation', 
      color: '#1a1a1a',
      textColor: '#ffffff'
  }
</script>
