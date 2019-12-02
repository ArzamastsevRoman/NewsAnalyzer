import {preloader, result, notFound, error} from '../index'

export default class Api {
    constructor (url, token, options) {
        this.options = options;
        this._url = url;
        this._token = token;

        this.getNews = this.getNews.bind(this);

        this.preloader = document.querySelector('.preloader');
        this.result = document.querySelector('.result');
        this.notFound = document.querySelector('.not-found');
        this.error = document.querySelector('.result__error');
    }

    getNews (request, from, to) {
        return fetch(`${this._url}?q=${request}&apiKey=${this._token}&from=${from}&to=${to}&pageSize=100&sortBy=publishedAt&language=ru`, {
            method: 'GET'
        })
        .then(res => {
            document.querySelector('.search__input').setAttribute('disabled', true);
            result.setAttribute('style', 'display: flex'); 
            preloader.setAttribute('style', 'display: block');

			if(res.ok) {
                document.querySelector('.search__input').removeAttribute('disabled');
                notFound.setAttribute('style', 'display: none');
                preloader.setAttribute('style', 'display: none');
                return res.json();
            } else {
                error.setAttribute('style', 'display: block'); 
                alert(`${err}: ${err.status}`);
        
            }

            notFound.setAttribute('style', 'display: flex');
            return Promise.reject(res);

        })
    }

    addNewsLocalStorage (arr) {
        for (let i=0; i<arr.length; i++) {
            localStorage.setItem([i], JSON.stringify(arr[i]));
        }
    }

    resultTitle (arr) {
        let resultTitle=0;
        for (let i=0; i<arr.length; i++) {
            if (arr[i].title.toUpperCase().indexOf(`${localStorage.getItem('request')}`.toUpperCase()) > 0) {
                resultTitle = resultTitle + 1; 
            }
        }
        localStorage.setItem('resultTitle', resultTitle);
    }
}