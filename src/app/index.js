import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store';
import './styles/index.less'

import AppContainer from './containers/app/app.container';

ReactDOM.render((
            <Provider store={store}>
                    <AppContainer/>
            </Provider>
    ),
    document.getElementById('root'));