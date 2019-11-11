import '../index.css'

import '../../blocks/main/main.css'
import '../../blocks/body/body.css'
import '../../blocks/header-black/header-black.css'
import '../../blocks/news/news.css'
import '../../blocks/histogram/histogram.css'
import '../../blocks/footer/footer.css'

const main = document.querySelector('#main-link');

function headerAct () {
    main.classList.add('header-black__link-act');
};

headerAct ();
