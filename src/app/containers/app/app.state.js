import { State } from 'jumpstate';

export default State({
    // Initial State
    initial: {
        count: 0,
        navOpen: false
    },
    // Actions
    toggleNav (state) {
        return { navOpen: !state.navOpen }
    },
    increment (state) {
        return { count: ++state.count }
    },
    decrement (state) {
        return { count: --state.count }
    }
})
