import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      duration: 600, // Продолжительность анимации
      easing: 'ease', // Тип анимации
      anchorPlacement: 'top-bottom',
      once: false // Анимация срабатывает только один раз при первом появлении элемента
    });
  });
});