import {State, Effect, Actions} from 'jumpstate';
import axios from 'axios';
import config from '../../../config';

export default State({
    // Initial State
    initial: {
        title : '',
        text: ''
    },
    // LOAD DATA
    addBlogSuccess (state, payload) {
        console.log('payload', payload)
        return {
            ...state,
            blogArticles: payload.data,
            error: null,
            loading: true
        }
    },
    addBlogError (state, payload) {
        return {
            ...state,
            blogArticles: [],
            loading: false,
            error: payload.message
        }
    },
    addBlogLoading (state) {
        return {
            ...state,
            loading: true
        }
    }
})

const addBlog = Effect('addBlog', (payload) => {
    console.log(payload);
    Actions.addBlogLoading(true)
    axios.post(`${config.ApiUrl}/blog/`, payload)
        .then(Actions.addBlogSuccess)
        .catch(Actions.addBlogError)
});
