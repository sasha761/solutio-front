export default defineNuxtPlugin(() => {
  if (process.server) return;

  const config = useRuntimeConfig(); 
  const gtagId = config.public.gtagKey; 

  if (gtagId) {
    // Добавляем теги в <head>
    useHead({
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
          async: true,
        },
      ],
    });

    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.dataLayer = window.dataLayer || [];
    gtag("js", new Date());
    gtag("config", gtagId);

  } else {
    console.warn("GTag ID is not defined.");
  }
});
