export default class Card {
    constructor (img, data, title, content, url, link) {
        this.img = img;
        this.data = data;
        this.title = title;
        this.content = content;
        this.url = url;
        this.link = link;

        this.create=this.create.bind(this);
        this.create();
    }

    create () {
		const resultCard = document.createElement('div');
		resultCard.classList.add('result__card');

		const resultCardImg = document.createElement('img');
		resultCardImg.classList.add('result__card-image');
        resultCard.appendChild(resultCardImg);
		
		const resultCardData = document.createElement('p');
		resultCardData.classList.add('result__card-data');
        resultCard.appendChild(resultCardData);
        
		const resultCardTitle = document.createElement('h3');
		resultCardTitle.classList.add('result__card-title');
        resultCard.appendChild(resultCardTitle);
        
        const resultCardContent = document.createElement('p');
		resultCardContent.classList.add('result__card-content');
        resultCard.appendChild(resultCardContent);
		
        const resultCardLink = document.createElement('a');
        resultCardLink.classList.add('result__card-link');
        resultCardLink.setAttribute('target', '_blank');
        resultCard.appendChild(resultCardLink);
        
        resultCardImg.setAttribute('src', `${this.img}`);
        resultCardData.textContent = this.data;
        resultCardTitle.textContent = this.title;
        resultCardContent.textContent = this.content;
        resultCardLink.setAttribute('href', `${this.url}`);
        resultCardLink.textContent = this.link;

		this.resultCard = resultCard;
	}
}