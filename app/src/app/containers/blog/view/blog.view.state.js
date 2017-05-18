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
        return {
            ...state,
            data: payload.data,
            error: null,
            loading: false
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
    axios.get(`${config.ApiUrl}/blog/${payload}`)
        .then(Actions.loadArticleSuccess)
        .catch(Actions.loadArticleError)
});
