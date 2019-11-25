import Card from '../card/card'

export default class CardList {
    constructor (container, array) {
        this.container = container;
        this.array = array;

        this.render = this.render.bind(this);
        this.check = this.check.bind(this);
        this.button = document.querySelector('.result__button');
        
        
        this.button
            .addEventListener('click', this.render);

        this.button
            .addEventListener('click', this.check);
        
        this.arr=['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря'];

        this.diactivatedButton = this.diactivatedButton.bind(this);
        this.button
            .addEventListener('click', this.diactivatedButton);
    }

    check() {
        if (this.array.length >= 3) {
            this.array.splice(0,3);
        } else if (this.array.length === 2) {
            this.array.splice(0,2);
        } else if (this.array.length === 1) {
            this.array.splice(0,1);
        }
    }

    render(a) {
        for (let i = 0; i <= 2; i++) {
            let date = new Date(this.array[i].publishedAt);
            let month = this.arr[date.getMonth()-1];
            
			const { resultCard } = new Card(this.array[i].urlToImage, `${date.getDate()} ${month}, ${date.getFullYear()}`, this.array[i].title, this.array[i].description, this.array[i].url, this.array[i].source.name);
            this.container.appendChild(resultCard);
            
        }
    }

    diactivatedButton () {
        if (this.array.length === 0) {
            this.button.setAttribute('style', 'display: none');
            this.container.setAttribute('style', 'margin-bottom: 64px;')
        }
  	}
}