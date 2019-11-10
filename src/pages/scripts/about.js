import '../index.css'

import '../../blocks/main/main.css'
import '../../blocks/body/body.css'
import '../../blocks/header-black/header-black.css'
import '../../blocks/author/author.css'
import '../../blocks/footer/footer.css'
import '../../blocks/about/about.css'
import '../../blocks/tech/tech.css'
import '../../blocks/history/history.css'


import '../../swiper/swiper'
import '../../swiper/swiper.css'

import Glide from '@glidejs/glide'

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    focusAt: 'center',
    gap: 32,
    peek: {
        before: 100,
        after: 100
    },

}).mount();

//подсветка меню
const about = document.querySelector('#about-link');

function headerAct () {
    about.classList.add('header-black__link-act');
    document.querySelector('#about-underline').classList.add('header-black__link-underline');
};

headerAct ();

//import '../../swiper/swiper-5.2.0/package/js/swiper'
//import '../../swiper/swiper-5.2.0/package/css/swiper.css'
/*
var mySwiper = new Swiper ('.swiper-container', {
    initialSlide: 2,
    
    slidesPerView: 4,
    spaceBetween: 200,
    centeredSlides: true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  */
 /*
 var swiper = new Swiper('.swiper-container', {
   slidesPerView: 5,
   initialSlide: 1,
   centeredSlides: true,
   spaceBetween: 30,
   autoHeight: false,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
*/

