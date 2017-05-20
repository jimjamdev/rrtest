import * as React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { CreateJumpstateMiddleware } from 'jumpstate';
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState, HomeState, BlogListState, BlogViewState, BlogAddState, SimpleForm } from './containers';

const states = {
    app: AppState,
    home: HomeState,
    blogList: BlogListState,
    blogView: BlogViewState,
    blogAdd: BlogAddState,
    form: formReducer
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