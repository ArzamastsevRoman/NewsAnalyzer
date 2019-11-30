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
        this.spanEvvrething.textContent = localStorage.getItem('resultEver');
        this.spanHeaders.textContent = localStorage.getItem('resultTitle');
    }
}