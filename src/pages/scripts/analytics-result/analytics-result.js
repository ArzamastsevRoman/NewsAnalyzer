export default class AnalyticsResult {
    constructor (container, request, total, headers) {
        this.container = container;
        this.request = request;
        this.total = total;
        this.headers = headers;
        
        this.title = this.container.querySelector('.news__title-span');
        this.spanEvvrething = this.container.querySelector('.news__content-span_everything');
        this.spanHeaders = this.container.querySelector('.news__content-span_headers')
    }

    addContent() {
        this.title.textContent = this.request;
        this.spanEvvrething.textContent = this.total;
        this.spanHeaders.textContent = this.headers;
    }
}