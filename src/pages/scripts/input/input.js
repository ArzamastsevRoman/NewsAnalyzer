import News from "../news/news";

export default class Input {
    constructor (container) {
        this.container = container;
        this.value = this.container.value;

        this.click = this.click.bind(this);
    }

    click () {
        const news = new News ('https://newsapi.org/v2/everything', '8c6a0a5107914e788d6cfa5136d5282e', this.container.value);
    }
}