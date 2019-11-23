export default class News {
    constructor (url, token, request) {
        this.url = url;
        this.token = token;
        this.request= request;

        const today = new Date();
        this.day = today.getDate();
        this.month = today.getMonth();
        this.year = today.getFullYear();
        
        let date = new Date();
        date.setDate(date.getDate() - 7);
        this.dateDay = date.getDate();
        this.dateMonth = date.getMonth();
        this.dateYear = date.getFullYear();

    }

    getNews () {
        return fetch(`${this.url}?q=${this.request}&to=${this.day}-${this.month}-${this.year}&from=${this.dateYear}-${this.dateMonth}-${this.dateYear}&apiKey=${this.token}&pageSize=100&sortBy=publishedAt`, {
            method: 'GET'
        })
        .then(res => {
			if(res.ok) {
                return res.json();
			}
			return Promise.reject(res.status);

        })
        .then((data) => {
            console.log(data.articles);
            for (let i=0; i<data.articles.length; i++) {
                localStorage.setItem([i], JSON.stringify(data.articles[i]));
                console.log(localStorage.getItem(i));
            }
        })
		.catch(err => { 
			console.log(err); 
        });
    }
}