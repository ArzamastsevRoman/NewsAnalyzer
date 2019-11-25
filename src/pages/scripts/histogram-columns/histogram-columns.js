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
    }

    addContent() {
        /*
        for (let i=0; i<=7; i++) {
            `this.column${i}` = this.container.querySelector(`.histogram__column-hist_${i}`);
            `this.column${i}`.setAttribute('style', `width: ${localStorage.getItem(`date${6-i}`)}%`);
        };
        */
        
        this.column1.setAttribute('style', `width: ${localStorage.getItem('date6')}%`);
        this.column2.setAttribute('style', `width: ${localStorage.getItem('date5')}%`);
        this.column3.setAttribute('style', `width: ${localStorage.getItem('date4')}%`);
        this.column4.setAttribute('style', `width: ${localStorage.getItem('date3')}%`);
        this.column5.setAttribute('style', `width: ${localStorage.getItem('date2')}%`);
        this.column6.setAttribute('style', `width: ${localStorage.getItem('date1')}%`);
        this.column7.setAttribute('style', `width: ${localStorage.getItem('date0')}%`);

        this.columnText1.textContent = localStorage.getItem('date6');
        this.columntext2.textContent = localStorage.getItem('date5');
        this.columntext3.textContent = localStorage.getItem('date4');
        this.columntext4.textContent = localStorage.getItem('date3');
        this.columntext5.textContent = localStorage.getItem('date2');
        this.columntext6.textContent = localStorage.getItem('date1');
        this.columntext7.textContent = localStorage.getItem('date0');
        
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
}