import CardList from '../cardList/cardList'
import {array} from '../input/input'



export default class News {
    constructor (url, token, request) {
        this.url = url;
        this.token = token;
        this.request= request;
        localStorage.setItem('request', this.request);

        this.today = new Date();
        this.day = this.today.getDate();
        this.month = this.today.getMonth();
        this.year = this.today.getFullYear();
        
        let date = new Date();
        date.setDate(date.getDate() - 7);
        this.dateDay = date.getDate();
        this.dateMonth = date.getMonth();
        this.dateYear = date.getFullYear();
        this.preloader = document.querySelector('.preloader');
        this.result = document.querySelector('.result');
        this.notFound = document.querySelector('.not-found');
        this.error = document.querySelector('.result__error');

        this.filter = this.filter.bind(this);

        this.dayColumn = this.dayColumn.bind(this);
        this.dayColumn();
    }

    getNews () {
        return fetch(`${this.url}everything?q=${this.request}&apiKey=${this.token}&to='${this.year}-${this.month}-${this.day}'&from='${this.dateYear}-${this.dateMonth}-${this.dateDay}'&pageSize=100&sortBy=publishedAt&language=ru`, {
            method: 'GET'
        })
        .then(res => {
            
            this.result.setAttribute('style', 'display: flex'); 
            this.preloader.setAttribute('style', 'display: block');

			if(res.ok) {
                sessionStorage.clear();
                return res.json();
            } else {
                this.error.setAttribute('style', 'display: block'); 
            }

            this.notFound.setAttribute('style', 'display: flex');
            return Promise.reject(res.status);

        })
        .then((data) => {
            let arrFilter = [];
            if (data.articles.length === 0) {
                this.notFound.setAttribute('style', 'display: flex');
                this.result.setAttribute('style', 'display: none');
                this.preloader.setAttribute('style', 'display: none');
            } else {
                this.notFound.setAttribute('style', 'display: none');
                sessionStorage.clear();
                for (let i=0; i<data.articles.length; i++) {
                    sessionStorage.setItem([i], JSON.stringify(data.articles[i]));
                    //console.log(sessionStorage.getItem(i));
                }
                for (let i=0; i<sessionStorage.length; i++) {
                    array.push(JSON.parse(sessionStorage.getItem(i)));
                    arrFilter.push(JSON.parse(sessionStorage.getItem(i)));
                }
                console.log(array); 
                this.filter(arrFilter);
            }
        })
        .then(() => {
            this.notFound.setAttribute('style', 'display: none');
            this.preloader.setAttribute('style', 'display: none');
            const resultContent = document.querySelector('.result__content');
            const cardList = new CardList (resultContent, array);
            cardList.render();
            cardList.check();
        })
		.catch(err => { 
            this.notFound.setAttribute('style', 'display: flex');
            this.result.setAttribute('style', 'display: none');
            this.preloader.setAttribute('style', 'display: none');
			console.log(err); 
        });
    }

    getNewsEverything () {
        return fetch(`${this.url}everything?q=${this.request}&apiKey=${this.token}&from='${this.dateYear}-${this.dateMonth}-${this.dateDay}'&to='${this.year}-${this.month}-${this.day}'&pageSize=100&sortBy=publishedAt`, {
            method: 'GET'
        })
        .then(res => {
			if(res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);

        })
        .then((data) => {
            localStorage.setItem('resultEver', data.totalResults);
        })
		.catch(err => { 
			console.log(err); 
        });
    }

    getNewsHeadlines () {
        return fetch(`${this.url}top-headlines?q=${this.request}&apiKey=${this.token}&from='${this.dateYear}-${this.dateMonth}-${this.dateDay}'&to='${this.year}-${this.month}-${this.day}'&pageSize=100&sortBy=publishedAt`, {
            method: 'GET'
        })
        .then(res => {
			if(res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);

        })
        .then((data) => {
            //console.log(data);
            //console.log(`Упоминаний в заголовках: ${data.totalResults}`);
            
            localStorage.setItem('resultHeaders', data.totalResults);
        })
		.catch(err => { 
			console.log(err); 
        });
    }

    filter(arr) {
        
        arr.forEach(item => {
            item.publishedAt = new Date(item.publishedAt.substring(0, 10)).getDate();
        })
        console.log(arr);

        for(let i=0; i<7; i++) {

            let dateCheck = this.day - i;

            const arrDay = arr.filter(item => {
                return item.publishedAt % dateCheck === 0;
            });
            localStorage.setItem(`date${i}`, `${arrDay.length}`);
        }
      
    }

    dayColumn() {
        let dateColumn = new Date();
        const dayOfTheWeek=['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        const arrMonth=['ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'];
        let dayWeek = dayOfTheWeek[dateColumn.getDay()];
        const month = arrMonth[dateColumn.getMonth()-1];
        localStorage.setItem(`month`, `(${month})`);
        localStorage.setItem(`dateColumn0`, `${dateColumn.getDate()}, ${dayWeek}`);

        for(let i=1; i<7; i++) {
            dateColumn.setDate(dateColumn.getDate() - 1);
            dayWeek = dayOfTheWeek[dateColumn.getDay()];
            localStorage.setItem(`dateColumn${i}`, `${dateColumn.getDate()}, ${dayWeek}`);
        }
        
    }

    
}

