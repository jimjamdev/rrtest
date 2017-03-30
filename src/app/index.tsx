import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
//import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';

import store from './store';
import './styles/index.scss'

import AppContainer from './containers/app/app.container';

ReactDOM.render((
    <BrowserRouter>
        <MuiThemeProvider>
            <Provider store={store}>
                <Route path="/" component={AppContainer} />
            </Provider>
        </MuiThemeProvider>
    </BrowserRouter>
    ),
    document.getElementById('root'));