import VueScrollTo from 'vue-scrollto';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueScrollTo, {
    duration: 800, // Длительность анимации
    easing: 'ease-in-out', // Тип анимации
    offset: -100, // Сдвиг для учета высоты хедера
  });
});