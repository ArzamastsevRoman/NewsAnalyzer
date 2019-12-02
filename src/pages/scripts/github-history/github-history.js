import HistoryCard from '../history-card/history-card'
import GlideSlider from '../glide/glide'

export default class GithubHistory {
    constructor (url, token) {
        this._url = url;
        this._token = token;
    }

    getHistory () {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: {
                authorization: `${this._token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
			if(res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);

        })
    }
}