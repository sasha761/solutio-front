export default {
  mounted(el, binding) {
    function loadBackgroundImage() {
      el.style.backgroundImage = `url('${binding.value}')`;
    }

    function callback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadBackgroundImage();
          observer.unobserve(el);
        }
      });
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px',
      threshold: 0,
    });

    observer.observe(el);
  },
};