import '../index.css'

import '../../blocks/main/main.css'
import '../../blocks/search/search.css'
import '../../blocks/body/body.css'
import '../../blocks/header/header.css'
import '../../blocks/author/author.css'
import '../../blocks/footer/footer.css'
import '../../blocks/preloader/preloader.css'
import '../../blocks/not-found/not-found.css'
import '../../blocks/result/result.css'

const main = document.querySelector('#main-link');

function headerAct () {
    main.classList.add('header__link-act');
    document.querySelector('#main-underline').classList.add('header__link-underline');
};

headerAct ();