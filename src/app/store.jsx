import * as React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { CreateJumpstateMiddleware } from 'jumpstate';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppReducer } from './containers';

const reducers = combineReducers({
    AppReducer: AppReducer,
});

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(),
        CreateJumpstateMiddleware()
    )
);

export default store;