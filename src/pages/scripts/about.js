import '../index.css'

import '../../blocks/main/main.css'
import '../../blocks/body/body.css'
import '../../blocks/header/header.css'
import '../../blocks/author/author.css'
import '../../blocks/footer/footer.css'
import '../../blocks/about/about.css'
import '../../blocks/tech/tech.css'
import '../../blocks/history/history.css'
/*
import Glide from '@glidejs/glide'

import '../../blocks/glide/glide.theme.css'
import '../../blocks/glide/glide.core.css'

const glide = new Glide('.glide', {
    type: 'slider',
    type: "slider",
          perView: 3,
          startAt: 0,
          focusAt: 'center',
          peek: 100,
          gap: 16,
    breakpoints: {
        1440: {
          type: "slider",
          perView: 3,
          startAt: 0,
          focusAt: 'center',
          peek: 100,
          gap: 16,
        },
        768: {
          type: "slider",
          perView: 2.1,
          startAt: 0,
          focusAt: 0,
          peek: 20,
          gap: 8
        },
        576: {
          type: "slider",
          perView: 1.05,
          startAt: 0,
          focusAt: 'center',
          gap: 8,
          peek: 8
        }
    }
})

glide.mount();
*/

const arr=['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря'];
/*
import Api from './api/api'
import HistoryCard from './history-card/history-card'
import GlideSlider from './glide/glide'
const gethubHistoryApi = new Api ('https://api.github.com/repos/ArzamastsevRoman/NewsAnalyzer/commits','59bd353dfcd2fb2842cbc8c8861d0e767374a5c5');
gethubHistoryApi.getCommits()
    .then((data) => {
            for (let i=0; i<data.length; i++) {
                const date = new Date (data[i].commit.committer.date);
                let month = arr[date.getMonth()-1];
                const historyCard = new HistoryCard (`${date.getDate()} ${month}, ${date.getFullYear()}`, data[i].author.avatar_url, data[i].commit.committer.name, data[i].commit.committer.email, data[i].commit.message);
                historyCard.render();
            }
        })
    .then(() => {
        const glide = new GlideSlider();
    });
*/

import GithubHistory from './github-history/github-history'
import HistoryCard from './history-card/history-card'
import GlideSlider from './glide/glide'

const githubHistory = new GithubHistory ('https://api.github.com/repos/ArzamastsevRoman/NewsAnalyzer/commits','59bd353dfcd2fb2842cbc8c8861d0e767374a5c5');
githubHistory.getHistory()
    .then((data) => {
        for (let i=0; i<data.length; i++) {
            const date = new Date (data[i].commit.committer.date);
            let month = arr[date.getMonth()-1];
            const historyCard = new HistoryCard (`${date.getDate()} ${month}, ${date.getFullYear()}`, data[i].author.avatar_url, data[i].commit.committer.name, data[i].commit.committer.email, data[i].commit.message);
            historyCard.render();
        }
    })
    .then(() => {
        const glide = new GlideSlider();
    });
