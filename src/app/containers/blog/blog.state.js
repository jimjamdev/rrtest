import { State } from 'jumpstate';

const data = [
    {
        "id": "1",
        "name": "Some article 2",
        "desc": "blah blah"
    },
    {
        "id": "2",
        "name": "Some article 2",
        "desc": "blah blah 2"
    }
]

export default State({
    // Initial State
    initial: {
        articles: data,
    },
    // Actions
    loadArticles (state) {
        //return { ...state, articles: data }
    },
})
