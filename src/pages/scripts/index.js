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
import '../../blocks/visually-hidden/visually-hidden.css'

import Validate from './validate/validate'

const input = document.querySelector('.search__input');
const contentInput = document.querySelector('.search__content-input');

const validate = new Validate (contentInput);

const button = document.querySelector('.search__button');

import Input from './input/input'

button.addEventListener('click', () => {
    const request = new Input (input.value);
})
