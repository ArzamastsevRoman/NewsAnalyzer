import {preloader, result, notFound, error} from '../index'

export default class Api {
    constructor (url, token, options) {
        this.options = options;
        this.url = url;
        this.token = token;

        this.getNews = this.getNews.bind(this);

        this.preloader = document.querySelector('.preloader');
        this.result = document.querySelector('.result');
        this.notFound = document.querySelector('.not-found');
        this.error = document.querySelector('.result__error');
    }

    _constructUrl() {
        return Object.values(this.options).reduce((url, item) => url + item)
    }

    getNews (request, from, to) {
        return fetch(`${this.url}?q=${request}&apiKey=${this.token}&from=${from}&to=${to}&pageSize=100&sortBy=publishedAt&language=ru`, {
            method: 'GET'
        })
        .then(res => {
            
            result.setAttribute('style', 'display: flex'); 
            preloader.setAttribute('style', 'display: block');

			if(res.ok) {
                notFound.setAttribute('style', 'display: none');
                preloader.setAttribute('style', 'display: none');
                return res.json();
            } else {
                error.setAttribute('style', 'display: block'); 
            }

            notFound.setAttribute('style', 'display: flex');
            return Promise.reject(res);

        })
		.catch(err => { 
			console.log(`${err}: ${res.status}`); 
        });
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

    getCommits (url, token) {
        return fetch(`${url}`, {
            method: 'GET',
            headers: {
                authorization: `${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
			if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);

        })
		.catch(err => { 
			console.log(`${err}: ${res.status}`); 
        });
    }
}