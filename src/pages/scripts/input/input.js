import News from "../news/news";
export let array = [];

export default class Input {
    constructor (value) {
        this.value = value;
        this.addNews = this.addNews.bind(this);

        this.addNews();
    }

    addNews () {
        const news = new News ('https://newsapi.org/v2/', '8c6a0a5107914e788d6cfa5136d5282e', this.value);
        news.getNews();
        news.getNewsEverything();
        news.getNewsHeadlines();
        
    }
}
