import {State, Effect, Actions} from 'jumpstate';
import axios from 'axios';
import config from '../../config';

export default State({
    // Initial State
    initial: {
        data: [],
        error : null,
        loading: false
    },
    // LOAD DATA
    loadArticlesSuccess (state, payload) {
        console.log('payload', payload)
        return {
            ...state,
            data: payload.data.data,
            error: null,
            loading: false
        }
    },
    loadArticlesError (state, payload) {
        return {
            ...state,
            data: [],
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
