import LazyBackground from '~/directives/lazy-background';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('lazy-background', LazyBackground);
});