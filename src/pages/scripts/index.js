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

const validate = new Validate (input);

import News from './news/news'

const button = document.querySelector('.search__button');
button.addEventListener('click', () => {
    //console.log(input.value);
    const news = new News ('https://newsapi.org/v2/everything', '8c6a0a5107914e788d6cfa5136d5282e', input.value);
    news.getNews();
})

//console.log(JSON.parse(localStorage.getItem(1)));

import CardList from './cardList/cardList'

const resultContent = document.querySelector('.result__content')

let array = [];

for (let i=0; i<localStorage.length; i++) {
    array.push(JSON.parse(localStorage.getItem(i)));
}

const cardList = new CardList (resultContent, array);