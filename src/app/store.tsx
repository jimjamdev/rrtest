import * as React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppReducer } from './containers';

const reducer = combineReducers({
    AppReducer: AppReducer,
});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(),
    )
);

export default store;