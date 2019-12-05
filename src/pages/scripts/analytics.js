import '../index.css'

import '../../blocks/main/main.css'
import '../../blocks/body/body.css'
import '../../blocks/header/header.css'
import '../../blocks/news/news.css'
import '../../blocks/histogram/histogram.css'
import '../../blocks/footer/footer.css'

import AnalitycsResult from './analytics-result/analytics-result'

import HistogramColumns from './histogram-columns/histogram-columns'

const newsContainer = document.querySelector('.news__container');

const request = localStorage.getItem('request');
const resultEver = localStorage.getItem('resultEver');
const resultHeader = localStorage.getItem('resultTitle');

const analitycsResult = new AnalitycsResult (newsContainer, request, resultEver, resultHeader);
analitycsResult.addContent();

const histogramContent = document.querySelector('.histogram__content')

const histogramColumns = new HistogramColumns (histogramContent);
histogramColumns.dayColumn();
histogramColumns.addDayColumn();
histogramColumns.addMonth();
