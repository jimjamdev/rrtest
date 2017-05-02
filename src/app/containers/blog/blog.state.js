import {State, Effect, Actions} from 'jumpstate';
import axios from 'axios';

export default State({
    // Initial State
    initial: {
        articles: [],
        error : null,
        loading: false
    },
    // LOAD DATA
    loadArticlesSuccess (state, payload) {
        return { ...state, articles: payload.data.results, error: null }
    },
    loadArticlesError (state, payload) {
        return { ...state, articles: [], error: payload.message }
    },
    showLoading (state) {
        return {...state}
    },
    // ADD DATA
    addArticle (state) {
        return { ...state, articles: data }
    },
    // DELETE DATA
    deleteArticle (state) {
        return { ...state, articles: data }
    },
    deleteSelectedArticles (state) {
        return { ...state, articles: data }
    },
    deleteAllArticles (state) {
        return { ...state, articles: data }
    },
})

const loadArticles = Effect('loadArticles', (payload) => {
    Actions.showLoading(true)
    axios.get('https://randomuser.me/api/?results=50')
        .then(Actions.loadArticlesSuccess)
        .catch(Actions.loadArticlesError)
        //.finally(() => Actions.showLoading(false))
});