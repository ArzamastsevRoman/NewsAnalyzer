import '../index.css'

import '../../blocks/main/main.css'
import '../../blocks/body/body.css'
import '../../blocks/header/header.css'
import '../../blocks/author/author.css'
import '../../blocks/footer/footer.css'
import '../../blocks/about/about.css'
import '../../blocks/tech/tech.css'
import '../../blocks/history/history.css'

import GithubHistory from './github-history/github-history'
import HistoryCard from './history-card/history-card'
import GlideSlider from './glide/glide'

const arr=['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря'];

const urlGithubHistory = 'https://api.github.com/repos/ArzamastsevRoman/NewsAnalyzer/commits';
const tokenGithub = '59bd353dfcd2fb2842cbc8c8861d0e767374a5c5';


const githubHistory = new GithubHistory (urlGithubHistory, tokenGithub);
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
    })
    .catch(err => { 
        console.log(`${err}: ${res.status}`); 
    });;
