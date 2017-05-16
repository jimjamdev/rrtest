import {State, Effect, Actions} from 'jumpstate';
import axios from 'axios';

export default State({
    // Initial State
    initial: {
        articles: [],
        article: null,
        error : null,
        loading: false
    },
    // LOAD DATA
    loadArticlesSuccess (state, payload) {
        console.log('payload', payload)
        return {
            ...state,
            articles: payload.data.data,
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
    axios.get('http://localhost:3030/blog')
        .then(Actions.loadArticlesSuccess)
        .catch(Actions.loadArticlesError)
});
