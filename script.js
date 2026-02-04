const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
});

new Swiper('.featured-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
