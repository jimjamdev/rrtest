// LIBRARY IMPORTS
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
// UI IMPORTS

// STYLE IMPORTS
import styles from './AppBar.less'
@CSSModules(styles)

class UiAppBar extends Component {
    render() {
        return (
            <div styleName="AppBar">
              AppBar
            </div>
        );
    }
}
export default UiAppBar;