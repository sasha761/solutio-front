export default defineNuxtPlugin(({ $router }) => {
  // console.log('plugin');
  // $router.options.scrollBehavior = (to, from, savedPosition) => {
  //   if (to.hash) {
  //     console.log('Go to hash', to.hash)

  //     return {
  //       el: to.hash,
  //       top: 30,
  //       behavior: 'smooth'
  //     }
  //   } else if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { top: 0 }
  //   }
  // }
})