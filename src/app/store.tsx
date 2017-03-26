import * as React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { AppReducer } from './containers';

const reducer = combineReducers({
    AppReducer: AppReducer,
});

const store = createStore(
    reducer
);

export default store;