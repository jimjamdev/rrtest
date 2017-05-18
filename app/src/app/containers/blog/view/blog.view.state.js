import {State, Effect, Actions} from 'jumpstate';
import axios from 'axios';
import config from '../../../config';

export default State({
    // Initial State
    initial: {
        data: [],
        error : null,
        loading: false
    },
    // LOAD DATA
    loadArticleSuccess (state, payload) {
        console.log('article payload', payload)
        return {
            ...state,
            data: payload.data,
            error: null,
            loading: true
        }
    },
    loadArticleError (state, payload) {
        return {
            ...state,
            data: [],
            loading: false,
            error: payload.message
        }
    },
    showBlogArticleLoading (state) {
        return {
            ...state,
            loading: true
        }
    }
})

const loadArticle = Effect('loadArticle', (payload) => {
    Actions.showBlogArticleLoading(true)
    axios.get(`${config.ApiUrl}/blog`)
        .then(Actions.loadArticleSuccess)
        .catch(Actions.loadArticleError)
});
