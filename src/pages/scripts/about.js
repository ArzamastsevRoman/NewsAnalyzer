import '../index.css'

import '../../blocks/main/main.css'
import '../../blocks/body/body.css'
import '../../blocks/header-black/header-black.css'
import '../../blocks/author/author.css'
import '../../blocks/footer/footer.css'
import '../../blocks/about/about.css'
import '../../blocks/tech/tech.css'
import '../../blocks/history/history.css'

import Glide from '@glidejs/glide'

import '../../blocks/glide/glide.theme.css'
import '../../blocks/glide/glide.core.css'

const glide = new Glide('.glide', {
    type: 'slider',
    breakpoints: {
        1440: {
          type: "slider",
          perView: 3,
          startAt: 0,
          focusAt: 'center',
          peek: 100,
          gap: 16,
        },
        768: {
          type: "slider",
          perView: 2.1,
          startAt: 0,
          focusAt: 0,
          peek: 20,
          gap: 8
        },
        576: {
          type: "slider",
          perView: 1.05,
          startAt: 0,
          focusAt: 'center',
          gap: 8,
          peek: 8
        }
    }
})

glide.mount();

//подсветка меню
const about = document.querySelector('#about-link');

function headerAct () {
    about.classList.add('header-black__link-act');
    document.querySelector('#about-underline').classList.add('header-black__link-underline');
};

headerAct ();
