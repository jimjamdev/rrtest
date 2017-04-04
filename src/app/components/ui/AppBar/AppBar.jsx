// LIBRARY IMPORTS
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
// UI IMPORTS
import AppBar from 'react-toolbox/lib/app_bar';
import Avatar from 'react-toolbox/lib/avatar';
// STYLE IMPORTS
import styles from './AppBar.scss'
@CSSModules(styles)

class UiAppBar extends Component {
    render() {
        return (
            <div styleName="AppBar">
                <AppBar>
                    <Avatar styleName="AppBar__avatar"><img src="https://placeimg.com/80/80/animals"/></Avatar>
                    <h1 styleName="AppBar__title">Things</h1>
                </AppBar>
            </div>
        );
    }
}
export default UiAppBar;