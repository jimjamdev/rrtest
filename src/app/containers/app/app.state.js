import { State } from 'jumpstate';

export default State({
    // Initial State
    initial: {
        count: 0,
        navOpen: true
    },
    // Actions
    toggleNav (state) {
        return { ...state, navOpen: !state.navOpen }
    },
    increment (state) {
        return { ...state, count: ++state.count }
    },
    decrement (state) {
        return { ...state, count: --state.count }
    }
})
