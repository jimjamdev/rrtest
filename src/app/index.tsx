import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import store from './store';

import AppContainer from './containers/app/app.container';

ReactDOM.render((
    <Provider store={store}>
        <AppContainer />
    </Provider>
    ),
    document.getElementById('root'));