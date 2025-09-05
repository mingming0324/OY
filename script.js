// sec-3 스와이퍼
  var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `
            <span class="${className}">
<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.37897 0V3.68956L11.0318 2.38396L12 4.84624L8.24756 6.18714L10.8762 9.37603L8.70811 11L6.05252 7.77773L3.67501 10.9519L1.43014 9.42417L3.83324 6.21602L0 4.84624L0.968241 2.38396L4.62103 3.68956V0H7.37897Z" fill="#E9E9E9"/>
</svg>
            </span>`;
        },
      },
  });

// sec-6 스와이퍼 
var swiper = new Swiper(".mySwiper-2", {
  watchSlidesProgress: true,
  slidesPerView: 2,
  loop: true,
  spaceBetween: 78,
});