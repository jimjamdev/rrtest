import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { LocaleProvider }  from 'antd';
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