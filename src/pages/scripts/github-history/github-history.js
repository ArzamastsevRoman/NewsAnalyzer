import HistoryCard from '../history-card/history-card'
import GlideSlider from '../glide/glide'

export default class GithubHistory {
    constructor (url, token) {
        this.url = url;
        this.token = token;

        this.arr=['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря'];
    }

    getHistory () {
        return fetch(`${this.url}`, {
            method: 'GET',
            headers: {
                authorization: `${this.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
			if(res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);

        })
        /*
        .then((data) => {
            for (let i=0; i<data.length; i++) {
                const date = new Date (data[i].commit.committer.date);
                let month = this.arr[date.getMonth()-1];
                const historyCard = new HistoryCard (`${date.getDate()} ${month}, ${date.getFullYear()}`, data[i].author.avatar_url, data[i].commit.committer.name, data[i].commit.committer.email, data[i].commit.message);
                historyCard.render();
            }
        })
        .then(() => {
            const glide = new GlideSlider();
        })
        */
		.catch(err => { 
			console.log(err); 
        });
    }
}