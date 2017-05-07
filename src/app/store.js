import * as React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { CreateJumpstateMiddleware } from 'jumpstate';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState, HomeState, BlogState } from './containers';

const states = {
    app: AppState,
    home: HomeState,
    blog: BlogState
};

const store = createStore(
    combineReducers(states),
    composeWithDevTools(
        applyMiddleware(
            CreateJumpstateMiddleware()
        ),
    )
);

export default store;