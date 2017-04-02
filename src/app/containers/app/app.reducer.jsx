import { TOGGLE_NAVIGATION } from './app.actions';

let initialState = {
    drawerActive: false,
    drawerPinned: false,
};

const AppReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case TOGGLE_NAVIGATION:
            return {
                menuOpen: !action,
                ...state,
            };

        default:
            return state;
    }
};

export default AppReducer;