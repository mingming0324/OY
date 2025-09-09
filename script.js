gsap.registerPlugin(ScrollTrigger);

//sec-1 마우스 오버 따라가기
function MousemoveEffect1__start() {
  const $window = $(window);

  let windowWidth = $window.width();
  let windowHeight = $window.height();

  $window.resize(_.throttle(function () {
    windowWidth = $window.width();
    windowHeight = $window.height();
  }, 100));

  $window.resize(_.throttle(function () {
    MousemoveEffect1__update();
  }, 100));

  let MousemoveEffect1__$el = null;
  let MousemoveEffect1__lastPosX = 0;
  let MousemoveEffect1__lastPosY = 0;

  function MousemoveEffect1__update() {
    MousemoveEffect1__$el.each(function (index, node) {
      const $node = $(node);
      const horRes = $node.data('data-mousemove-effect1-hor-res');
      const verRes = $node.data('data-mousemove-effect1-ver-res');

      const x = (MousemoveEffect1__lastPosX - (windowWidth / 2)) * horRes;
      const y = (MousemoveEffect1__lastPosY - (windowHeight / 2)) * verRes;
      $(node).css('transform', 'translateX(' + x + 'px) translateY(' + y + 'px)');

      console.log("MousemoveEffect1__lastPosX : " + MousemoveEffect1__lastPosX);
      console.log("MousemoveEffect1__lastPosY : " + MousemoveEffect1__lastPosY);
    });
  }
  console.log(
    $('.glass').map((i,el)=>[
      $(el).data('data-mousemove-effect1-hor-res'),
      $(el).data('data-mousemove-effect1-ver-res')
    ]).get()
  );

  function MousemoveEffect1__init() {
    MousemoveEffect1__$el = $('.glass');

    MousemoveEffect1__$el.each(function (index, node) {
      const $node = $(node);
      $node.data('data-mousemove-effect1-hor-res', $node.attr('data-mousemove-effect1-hor-res') * 1);
      $node.data('data-mousemove-effect1-ver-res', $node.attr('data-mousemove-effect1-ver-res') * 1);
    });

    const MousemoveEffect1__updateThrottled = _.throttle(function () {
      MousemoveEffect1__update();
    }, 10);

    $window.mousemove(function (e) {
      MousemoveEffect1__lastPosX = e.clientX;
      MousemoveEffect1__lastPosY = e.clientY;

      MousemoveEffect1__updateThrottled();
    });
  }
  
  MousemoveEffect1__init();
}

MousemoveEffect1__start();

// -sec-1 유리-심한 블러버전
// const feImage = document.querySelector("feImage");
// fetch("https://essykings.github.io/JavaScript/map.png")
//   .then((response) => {
//     return response.blob();
//   })
//   .then((blob) => {
//     const objURL = URL.createObjectURL(blob);

//     feImage.setAttribute("href", objURL);
//   });

// sec-2 스크롤 시 글자 채워지기
let tl_2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-2",       
    start: "top 60%",      
    scrub: true,
    // markers: true 
  },
  
  defaults: {
    ease: "power4.out" 
  }
});

tl_2.to(".sec2-text-box p", {
  backgroundSize: '100% 100%',
});


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
//sec-3 글자 애니메이션
  let tl_1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-3",       
      start: "top 60%",      
      toggleActions: "play none none none" ,     
      // markers: true 
    },
    
    defaults: {
      ease: "power4.out" 
    }
  });

  tl_1.to(".create_01", {
    y: '0%',
    duration: 1.5,
    opacity: 1,
  });



// sec-6 스와이퍼 
var swiper = new Swiper(".mySwiper-2", {
  watchSlidesProgress: true,
  slidesPerView: 2,
  loop: true,
  spaceBetween: 78,
});


$(document)
  .on('mouseenter', '.sec-6_img-box', function(){ $(this).addClass('is-hover'); })
  .on('mouseleave', '.sec-6_img-box', function(){ $(this).removeClass('is-hover'); });
// $(".sec-6_img-box").mouseenter(function() {
//   let $this = $(this);
//   $this.addClass("is-hover") 
// });

// $(".sec-6_img-box").mouseleave(function() {
//   let $this = $(this);
//   $this.removeClass("is-hover") 
// });