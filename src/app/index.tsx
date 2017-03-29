import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import LocaleProvider  from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';

import store from './store';

import AppContainer from './containers/app/app.container';

ReactDOM.render((
    <LocaleProvider locale={enUS}>
        <Provider store={store}>
                <AppContainer />
        </Provider>
    </LocaleProvider>
    ),
    document.getElementById('root'));