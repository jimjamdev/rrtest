import {
    TOGGLE_MENU,
} from './app.actions';

let initialState = {
  menuOpen: false
};

const AppReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TOGGLE_MENU:
            return {
                menuOpen: !action,
                ...state,
            };
        default:
            return state;
    }
};

export default AppReducer;