
export default class GithubHistory {
    constructor (url, token) {
        this.url = url;
        this.token = token;

    }

    getHistory () {
        return fetch(`${this.url}`, {
            method: 'GET'
        })
        .then(res => {
			if(res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);

        })
        .then((data) => {
            console.log(data);
        })
		.catch(err => { 
			console.log(err); 
        });
    }
}