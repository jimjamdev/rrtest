import { State } from 'jumpstate';

export default State({
    // Initial State
    initial: {
        count: 0,
        navLeftOpen: true,
        navRightOpen: false
    },
    // Actions
    toggleLeftNav (state) {
        return { ...state, navLeftOpen: !state.navLeftOpen }
    },
    toggleRightNav (state) {
        return { ...state, navRightOpen: !state.navRightOpen }
    },
    increment (state) {
        return { ...state, count: ++state.count }
    },
    decrement (state) {
        return { ...state, count: --state.count }
    }
})
