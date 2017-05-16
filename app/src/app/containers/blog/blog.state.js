import {State, Effect, Actions} from 'jumpstate';
import axios from 'axios';
import config from '../../config';

export default State({
    // Initial State
    initial: {
        blogArticles: [],
        error : null,
        loading: false
    },
    // LOAD DATA
    loadArticlesSuccess (state, payload) {
        console.log('payload', payload)
        return {
            ...state,
            blogArticles: payload.data,
            error: null,
            loading: true
        }
    },
    loadArticlesError (state, payload) {
        return {
            ...state,
            blogArticles: [],
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
    axios.get(`${config.ApiUrl}/blog`)
        .then(Actions.loadArticlesSuccess)
        .catch(Actions.loadArticlesError)
});
