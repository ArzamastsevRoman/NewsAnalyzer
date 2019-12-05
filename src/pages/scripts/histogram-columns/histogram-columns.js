export default class HistogramColumns {
    constructor (container, request) {
        this.container = container;
        this.request = request;

        this.datecolumn1 = this.container.querySelector('.histogram__date_1');
        this.datecolumn2 = this.container.querySelector('.histogram__date_2');
        this.datecolumn3 = this.container.querySelector('.histogram__date_3');
        this.datecolumn4 = this.container.querySelector('.histogram__date_4');
        this.datecolumn5 = this.container.querySelector('.histogram__date_5');
        this.datecolumn6 = this.container.querySelector('.histogram__date_6');
        this.datecolumn7 = this.container.querySelector('.histogram__date_7');

        this.month = this.container.querySelector('.histogram__name-column-span');

        this.columnDay = this.columnDay.bind(this);
        this.columnDay();

        
    }

    addDayColumn () {
        this.datecolumn1.textContent = localStorage.getItem('dateColumn6');
        this.datecolumn2.textContent = localStorage.getItem('dateColumn5');
        this.datecolumn3.textContent = localStorage.getItem('dateColumn4');
        this.datecolumn4.textContent = localStorage.getItem('dateColumn3');
        this.datecolumn5.textContent = localStorage.getItem('dateColumn2');
        this.datecolumn6.textContent = localStorage.getItem('dateColumn1');
        this.datecolumn7.textContent = localStorage.getItem('dateColumn0');
    }

    addMonth() {
        this.month.textContent = localStorage.getItem('month')
    }

    dayColumn() {
        const dateColumn = new Date();
        const dayOfTheWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        const arrMonth = ['ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'];
        let dayWeek = dayOfTheWeek[dateColumn.getDay()];
        const month = arrMonth[dateColumn.getMonth()-1];

        localStorage.setItem(`month`, `(${month})`);
        localStorage.setItem(`dateColumn0`, `${dateColumn.getDate()}, ${dayWeek}`);

        for(let i=1; i<7; i++) {
            dateColumn.setDate(dateColumn.getDate() - 1);
            dayWeek = dayOfTheWeek[dateColumn.getDay()];
            localStorage.setItem(`dateColumn${i}`, `${dateColumn.getDate()}, ${dayWeek}`);
        }
    }

    columnDay() {
        let arrayColumn = [];
        for (let i=0; i<localStorage.length; i++) {
            if (localStorage.getItem(i)) {
                arrayColumn.push(JSON.parse(localStorage.getItem(i)));
            }
        }
        arrayColumn.forEach(item => {
            item.publishedAt = new Date(item.publishedAt.substring(0, 10)).getDate();
        })
        const stingHistogram = 7;
        for(let i=0; i<stingHistogram; i++) {
            const today = new Date();
            today.setDate(today.getDate() - i);
            const arrDay = arrayColumn.filter(item => {
                return item.publishedAt % today.getDate() === 0;
            });
            let resultTitle=0;
            for(let i=0; i<arrDay.length; i++) {
                if (arrDay[i].title.toUpperCase().indexOf(`${localStorage.getItem('request')}`.toUpperCase()) > 0) {
                    resultTitle = resultTitle + 1; 
                }
            }
            let resultDescription=0;
            for(let i=0; i<arrDay.length; i++) {
                if (arrDay[i].description.toUpperCase().indexOf(`${localStorage.getItem('request')}`.toUpperCase()) >= 0) {
                    resultDescription = resultDescription + 1;
                }
            }
            let res = resultTitle + resultDescription;
            localStorage.setItem(`ResultColumn${i}`, res);
            
            this.container.querySelector(`.histogram__column-hist_${7 - i}`).setAttribute('style', `width: ${res}%`);
            this.container.querySelector(`.histogram__column-hist-text_${7 - i}`).textContent = res;
        }
    }
}