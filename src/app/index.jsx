import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store';
import './styles/index.less'

import AppContainer from './containers/app/app.container';
import HomeContainer from './containers/home/home.container';
import BlogContainer from './containers/blog/blog.container';

ReactDOM.render((
            <Provider store={store}>
                <BrowserRouter>
                    <Route path="/" component={AppContainer} />
                </BrowserRouter>
            </Provider>
    ),
    document.getElementById('root'));