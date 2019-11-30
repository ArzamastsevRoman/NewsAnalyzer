/* Класс не используется
import News from "../news/news";
import CardList from '../cardList/cardList'
import {array} from '../news/news'

//export let array = [];

export default class Search {
    constructor (value) {
        this.value = value;
        this.addNews = this.addNews.bind(this);

        this.addNews();

        this.resultContent = document.querySelector('.result__content');
    }

    addNews () {
        const news = new News ('https://newsapi.org/v2/', '8c6a0a5107914e788d6cfa5136d5282e', this.value);
        news.getNews().then(res => {
            const cardList = new CardList (this.resultContent, array);
            cardList.render();
            cardList.check();
        });
    }
}
*/