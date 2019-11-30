import '../index.css'

import '../../blocks/main/main.css'
import '../../blocks/body/body.css'
import '../../blocks/header/header.css'
import '../../blocks/news/news.css'
import '../../blocks/histogram/histogram.css'
import '../../blocks/footer/footer.css'

const resultHeaders = localStorage.getItem('resultHeaders');
const resultEver = localStorage.getItem('resultEver');
const newsContainer = document.querySelector('.news__container');

import AnalitycsResult from './analytics-result/analytics-result'

const analitycsResult = new AnalitycsResult (newsContainer, resultEver, resultHeaders)
analitycsResult.addContent();
analitycsResult.resultHeaders();

const histogramContent = document.querySelector('.histogram__content')

import HistogramColumns from './histogram-columns/histogram-columns'

const histogramColumns = new HistogramColumns (histogramContent);
histogramColumns.dayColumn();
histogramColumns.addContent();
histogramColumns.addDayColumn();
histogramColumns.addMonth();
