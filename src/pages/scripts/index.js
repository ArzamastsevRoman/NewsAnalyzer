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

import Api from './api/api'

const today = new Date();
const to = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

const date = new Date();
const dayPrevious = 7;
date.setDate(today.getDate() - dayPrevious);
const from = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

const apiNews = new Api ('https://newsapi.org/v2/everything', '8c6a0a5107914e788d6cfa5136d5282e');

const preloader = document.querySelector('.preloader');
const result = document.querySelector('.result');
const notFound = document.querySelector('.not-found');
const error = document.querySelector('.result__error');

export {preloader, result, notFound, error}

import CardList from './cardList/cardList'
const resultContent = document.querySelector('.result__content');

function createCard (arr) {
    input.value = localStorage.getItem('request');
    console.log(arr);
    result.setAttribute('style', 'display: flex'); 
    const startCardList = new CardList (resultContent, arr);
    startCardList.delete();
    startCardList.render();
    startCardList.check();
}


let arrayStart = [];
for (let i=0; i<localStorage.length; i++) {
    arrayStart.push(JSON.parse(localStorage.getItem(i)));
}

button.addEventListener('click', () => {
    preloader.setAttribute('style', 'display: block');
    apiNews.getNews(input.value, from, to)
        .then((data) => {
            if (data.articles.length === 0) {
                notFound.setAttribute('style', 'display: flex');
                result.setAttribute('style', 'display: none');
                preloader.setAttribute('style', 'display: none');
                localStorage.clear();
            } else {
                localStorage.clear();
                localStorage.setItem('resultEver', data.totalResults);
                localStorage.setItem('request', input.value);
                apiNews.addNewsLocalStorage(data.articles);
                apiNews.resultTitle(data.articles);
                arrayStart = []; 
                for (let i=0; i<localStorage.length; i++) {
                    arrayStart.push(JSON.parse(localStorage.getItem(i)));
                }   
                //localStorage.setItem('array', arrayStart);
                //console.log(arrayStart);
                createCard(arrayStart);
            }
        });
})
if (localStorage.getItem('resultEver')){
    createCard(arrayStart);
}

