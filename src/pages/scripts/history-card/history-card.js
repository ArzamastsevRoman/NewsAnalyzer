export default class HistoryCard {
    constructor (data, avatar, title, mail, content) {
        this.data = data;
        this.avatar = avatar;
        this.title = title;
        this.mail = mail;
        this.content = content;
        
        this.container = document.querySelector('.glide__slides');

        this.render = this.render.bind(this);

        this.create = this.create.bind(this);
        this.create();
    }

    create () {
        const glideSlide = document.createElement('li');
        glideSlide.classList.add('glide__slide');

		const historyCard = document.createElement('div');
        historyCard.classList.add('history__card');
        glideSlide.appendChild(historyCard);

		const historyCardContainer = document.createElement('div');
		historyCardContainer.classList.add('history__card-container');
        historyCard.appendChild(historyCardContainer);
		
		const historyCardDate = document.createElement('p');
		historyCardDate.classList.add('history__date');
        historyCardContainer.appendChild(historyCardDate);

        const historyCardInfo = document.createElement('div');
		historyCardInfo.classList.add('history__card-info');
        historyCardContainer.appendChild(historyCardInfo);

        const historyCardAvatar = document.createElement('img');
		historyCardAvatar.classList.add('history__card-avatar');
        historyCardInfo.appendChild(historyCardAvatar);

        const historyCardInfoName = document.createElement('div');
		historyCardInfoName.classList.add('history__card-info-name');
        historyCardInfo.appendChild(historyCardInfoName);
        
		const historyCardTitle = document.createElement('h3');
		historyCardTitle.classList.add('history__card-title');
        historyCardInfoName.appendChild(historyCardTitle);
        
        const historyCardMail = document.createElement('p');
		historyCardMail.classList.add('history__card-mail');
        historyCardInfoName.appendChild(historyCardMail);
		
        const historyCardContent = document.createElement('p');
		historyCardContent.classList.add('history__card-content');
        historyCardContainer.appendChild(historyCardContent);
        
        historyCardAvatar.setAttribute('src', `${this.avatar}`);
        historyCardDate.textContent = this.data;
        historyCardTitle.textContent = this.title;
        historyCardMail.textContent = this.mail;
        historyCardContent.textContent = this.content;

		this.glideSlide = glideSlide;
    }
    
    render () {
        this.container.appendChild(this.glideSlide);
    }
}