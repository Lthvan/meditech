// document.addEventListener("DOMContentLoaded", () => {
//     new Swiper('.swiper-container', {
//       slidesPerView: 3,
//       spaceBetween: 20,
//       loop: true,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       breakpoints: {
//         640: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//       },
//     });
//   });

  document.addEventListener("DOMContentLoaded", () => {
    // Get all slide elements
    const slides = document.querySelectorAll('.swiper-slide');
  
    // Hide any extra slides beyond the first 3
    slides.forEach((slide, index) => {
      if (index >= 3) {
        slide.style.display = 'none';
      }
    });
  
    // Initialize Swiper for only the first 3 slides
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: false, // Set to false to avoid looping when only showing 3
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  });
  