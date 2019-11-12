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
    // startAt: 1,
    // focusAt: 'center',
    // perView: 3,
    // gap: 16,
    // peek: 100,
})

if (window.matchMedia('(max-width: 767px)').matches){
    glide._o.perView = 1.05;
    glide._o.startAt = 0;
    glide._o.peek = 8;
    glide._o.focusAt = 'center';
    glide._o.gap = 8;
} else if (window.matchMedia('(max-width: 850px)').matches){
    glide._o.perView = 2.1;
    glide._o.startAt = 1;
    glide._o.peek = 20;
    glide._o.focusAt = 0;
    glide._o.gap = 8;
} else if (window.matchMedia('(max-width: 1440px)').matches) {
    glide._o.perView = 3;
    glide._o.startAt = 1;
    glide._o.peek = 100;
    glide._o.focusAt = 'center';
    glide._o.gap = 16;
} 

glide.mount();

console.log(glide);


//подсветка меню
const about = document.querySelector('#about-link');

function headerAct () {
    about.classList.add('header-black__link-act');
    document.querySelector('#about-underline').classList.add('header-black__link-underline');
};

headerAct ();
