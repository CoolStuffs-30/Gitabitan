    var swiper = new Swiper(".nav-land .mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


  // function updateImageSrc() {
  //   if (window.innerWidth <= 1200) {
  //     document.querySelector('.firstSlidePic').src = './images/sliderPics/slide-mob/slider-mob-1.webp';
  //     document.querySelector('.secondSlidePic').src = './images/sliderPics/slide-mob/slider-mob-2.webp';
  //     document.querySelector('.thirdSlidePic').src = './images/sliderPics/slide-mob/slider-mob-3.webp';
  //     document.querySelector('.fourthSlidePic').src = './images/sliderPics/slide-mob/slider-mob-4.webp';
  //   } 
  //   else {
  //    document.querySelector('.firstSlidePic').src = './images/sliderPics/slide-pc/slider-pc-1.webp';
  //    document.querySelector('.secondSlidePic').src = './images/sliderPics/slide-pc/slider-pc-2.webp';
  //    document.querySelector('.thirdSlidePic').src = './images/sliderPics/slide-pc/slider-pc-3.webp';
  //    document.querySelector('.fourthSlidePic').src = './images/sliderPics/slide-pc/slider-pc-4.webp';
  //   }
  // }

  // window.addEventListener('resize', updateImageSrc);
  // window.addEventListener('load', updateImageSrc);