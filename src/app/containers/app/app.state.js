import { State, Effect, Actions, Hook, dispatch, getState, CreateJumpstateMiddleware } from 'jumpstate';

const Counter = State({
    // Initial State
    initial: { count: 0 },
    // Actions
    increment (state, payload) {
        return { count: state.count + 1 }
    },
    decrement (state, payload) {
        return { count: state.count - 1 }
    }
})

// Create a hook
Hook((action, getState) => {
    // Like never letting the first counter equal 10!
    if (getState().counter.count === 10) {
        Actions.increment()
    }
})

// Setup your redux however you like
const AppReducer = {
    counter: Counter
}

export default AppReducer;