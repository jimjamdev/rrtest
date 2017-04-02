// LIBRARY IMPORTS
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
// UI IMPORTS
import { AppBar } from 'react-toolbox/lib/app_bar';
// STYLE IMPORTS
import styles from './AppBar.scss'
@CSSModules(styles)

class UiAppBar extends Component {
    render() {
        return (
           <AppBar styleName="AppBar" {...this.props} />
        );
    }
}
export default UiAppBar;