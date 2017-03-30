// LIBRARY IMPORTS
import * as React from 'react';
// UI IMPORTS
import * as AppBar from 'material-ui/AppBar';
// STYLE IMPORTS
import './AppBar.scss';

class UiAppBar extends React.Component<any, any> {
    render() {
        return (
            <AppBar {...this.props} />
        )
    }
}

export default UiAppBar;