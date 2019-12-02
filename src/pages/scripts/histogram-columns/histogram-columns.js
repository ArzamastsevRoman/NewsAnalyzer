export default class HistogramColumns {
    constructor (container) {
        this.container = container;
        
        this.column1 = this.container.querySelector('.histogram__column-hist_1');
        this.column2 = this.container.querySelector('.histogram__column-hist_2');
        this.column3 = this.container.querySelector('.histogram__column-hist_3');
        this.column4 = this.container.querySelector('.histogram__column-hist_4');
        this.column5 = this.container.querySelector('.histogram__column-hist_5');
        this.column6 = this.container.querySelector('.histogram__column-hist_6');
        this.column7 = this.container.querySelector('.histogram__column-hist_7');

        this.columnText1 = this.container.querySelector('.histogram__column-hist-text_1')
        this.columntext2 = this.container.querySelector('.histogram__column-hist-text_2')
        this.columntext3 = this.container.querySelector('.histogram__column-hist-text_3')
        this.columntext4 = this.container.querySelector('.histogram__column-hist-text_4')
        this.columntext5 = this.container.querySelector('.histogram__column-hist-text_5')
        this.columntext6 = this.container.querySelector('.histogram__column-hist-text_6')
        this.columntext7 = this.container.querySelector('.histogram__column-hist-text_7')

        this.datecolumn1 = this.container.querySelector('.histogram__date_1');
        this.datecolumn2 = this.container.querySelector('.histogram__date_2');
        this.datecolumn3 = this.container.querySelector('.histogram__date_3');
        this.datecolumn4 = this.container.querySelector('.histogram__date_4');
        this.datecolumn5 = this.container.querySelector('.histogram__date_5');
        this.datecolumn6 = this.container.querySelector('.histogram__date_6');
        this.datecolumn7 = this.container.querySelector('.histogram__date_7');

        this.month = this.container.querySelector('.histogram__name-column-span');
        
        this.addContent = this.addContent.bind(this);

        this.dayColumn = this.dayColumn.bind(this);

        this.columnDay = this.columnDay.bind(this);
        this.columnDay();

        
    }

    addContent() {
        
        this.column1.setAttribute('style', `width: ${localStorage.getItem('ResultColumn6')}%`);
        this.column2.setAttribute('style', `width: ${localStorage.getItem('ResultColumn5')}%`);
        this.column3.setAttribute('style', `width: ${localStorage.getItem('ResultColumn4')}%`);
        this.column4.setAttribute('style', `width: ${localStorage.getItem('ResultColumn3')}%`);
        this.column5.setAttribute('style', `width: ${localStorage.getItem('ResultColumn2')}%`);
        this.column6.setAttribute('style', `width: ${localStorage.getItem('ResultColumn1')}%`);
        this.column7.setAttribute('style', `width: ${localStorage.getItem('ResultColumn0')}%`);

        this.columnText1.textContent = localStorage.getItem('ResultColumn6');
        this.columntext2.textContent = localStorage.getItem('ResultColumn5');
        this.columntext3.textContent = localStorage.getItem('ResultColumn4');
        this.columntext4.textContent = localStorage.getItem('ResultColumn3');
        this.columntext5.textContent = localStorage.getItem('ResultColumn2');
        this.columntext6.textContent = localStorage.getItem('ResultColumn1');
        this.columntext7.textContent = localStorage.getItem('ResultColumn0');
        
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
        const today = new Date();
        arrayColumn.forEach(item => {
            item.publishedAt = new Date(item.publishedAt.substring(0, 10)).getDate();
        })
        console.log(arrayColumn)
        const stingHistogram = 7;
        for(let i=0; i<stingHistogram; i++) {
            today.setDate(today.getDate() - 1);
            const arrDay = arrayColumn.filter(item => {
                console.log(`dateCheck ${today.getDate()}`)
                return item.publishedAt % today.getDate() === 0;
            });
            console.log(arrDay)
            let resultTitle=0;
            for(let i=0; i<arrDay.length; i++) {
                if (arrDay[i].title.toUpperCase().indexOf(`${localStorage.getItem('request')}`.toUpperCase()) > 0) {
                    resultTitle = resultTitle + 1; 
                }
            }
            let resultDescription=0;
            for(let i=0; i<arrDay.length; i++) {
                if (arrDay[i].description.toUpperCase().indexOf(`${localStorage.getItem('request')}`.toUpperCase()) > 0) {
                    resultDescription = resultDescription + 1; 
                }
            }
            let res = resultTitle + resultDescription;
            console.log(res)
            localStorage.setItem(`ResultColumn${i}`, res);
        }
    }
}