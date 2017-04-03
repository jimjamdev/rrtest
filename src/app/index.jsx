import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import theme from '../../assets/react-toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import store from './store';
import './styles/index.scss'

import AppContainer from './containers/app/app.container';
import HomeContainer from './containers/home/home.container';
import BlogContainer from './containers/blog/blog.container';

ReactDOM.render((
    <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <Route path="/" component={AppContainer} />
                </BrowserRouter>
            </Provider>
    </ThemeProvider>
    ),
    document.getElementById('root'));