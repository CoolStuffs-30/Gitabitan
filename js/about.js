var swiper = new Swiper(".aboutImage .mySwiper", {
        spaceBetween: 10,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

     breakpoints: {
    // when window width is >= 1024px
    880: {
      slidesPerView: 3
    },
    // when window width is >= 768px
    600: {
      slidesPerView: 2.5
    },
    // when window width is < 768px
    0: {
      slidesPerView: 1.5
    }
}
});