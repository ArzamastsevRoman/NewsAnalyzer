export default class AnalyticsResult {
    constructor (container, total, headers) {
        this.container = container;
        this.total = total;
        this.headers = headers;
        
        this.title = this.container.querySelector('.news__title-span');
        this.spanEvvrething = this.container.querySelector('.news__content-span_everything');
        this.spanHeaders = this.container.querySelector('.news__content-span_headers')
    }

    addContent() {
        this.title.textContent = localStorage.getItem('request');
        this.spanEvvrething.textContent = this.total;
        this.spanHeaders.textContent = this.headers;
    }
    resultHeaders() {
        const array = [];
        let res=0;
        for (let i=0; i<10; i++) {
            //array.push(JSON.parse(localStorage.getItem(i)));
            //console.log(JSON.parse(localStorage.getItem(i)).title);        
            if ((JSON.parse(localStorage.getItem(i)).title).indexOf(`${localStorage.getItem('request')}`)> 0) {
                res = res + 1;
            }
            
        }
        console.log(res);
        console.log(array)
        /*
        for (let i=0; i<array.length; i++) {
            if (array[i].title.indexOf(`${localStorage.getItem('request')}`)> 0) {
                res = res + 1;
            }
        }
        */
    console.log(res);
    }
}