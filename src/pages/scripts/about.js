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
    startAt: 1,
    focusAt: 'center',
    perView: 3,
    gap: 16,
    peek: 100
})

glide.mount();

//подсветка меню
const about = document.querySelector('#about-link');

function headerAct () {
    about.classList.add('header-black__link-act');
    document.querySelector('#about-underline').classList.add('header-black__link-underline');
};

headerAct ();
