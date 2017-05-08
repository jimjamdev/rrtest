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
        return {
            ...state,
            articles: payload.data.results,
            error: null,
            loading: false
        }
    },
    loadArticlesError (state, payload) {
        return {
            ...state,
            articles: [],
            loading: false,
            error: payload.message
        }
    },
    showLoading (state) {
        return {
            ...state,
            loading: true
        }
    }
})

const loadArticles = Effect('loadArticles', (payload) => {
    Actions.showLoading(true)
    axios.get('https://randomuser.me/api/?results=20')
        .then(Actions.loadArticlesSuccess)
        .catch(Actions.loadArticlesError)
});
