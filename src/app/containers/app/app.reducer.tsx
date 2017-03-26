import {
    TOGGLE_MENU,
} from './app.actions';

const AppReducer = ( state = {}, action ) => {
    switch ( action ) {
        case TOGGLE_MENU:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default AppReducer;