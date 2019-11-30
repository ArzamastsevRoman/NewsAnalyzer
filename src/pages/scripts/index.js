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

//import {array} from './api/api'
let array = [];
/*
смотри ты пишешь функцию которая сохраняет в localstorage  нужные поля, 
запускать ты эту функцию будешь после успешного получения ответа от сервера и
если карточки найдены, т.е. длина массива не равна, если равна 0 ты просто очищаешь 
localstorage. Ну а уже на странице аналитики ты достаешь от туда данные и пропускаешь 
их через вспомогательные функции

что то типо такого http://prntscr.com/q3o5qj
это ты делаешь по submit кнопки
в самом верху проверяешь на главной если localStorage.length > 1 то вызываешь 
функцию рендеринга карточек из localStorage
только напиши функцию которая рендерит карточки и которая из очишает из DOM
перед каждым новым рендерингом нужно очищать
*/

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
                arrayStart = [];
                for (let i=0; i<localStorage.length; i++) {
                    arrayStart.push(JSON.parse(localStorage.getItem(i)));
                }                
                console.log(arrayStart); 
                createCard(arrayStart);
            }
        });
})
console.log(arrayStart);
createCard(arrayStart);
