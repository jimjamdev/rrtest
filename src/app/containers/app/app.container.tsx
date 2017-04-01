// LIBRARY IMPORTS
import * as React from 'react';
import { Route, Link } from 'react-router-dom'
//import { connect } from 'react-redux';
//import { toggleMenu } from './app.actions';

// UI IMPORTS
import AppBar from 'react-toolbox/lib/app_bar';
import { IconButton, Button } from 'react-toolbox/lib/button';
import { Layout, NavDrawer, Panel } from 'react-toolbox/lib/layout';
import Navigation from 'react-toolbox/lib/navigation';

// CONTAINER IMPORTS
import HomeContainer from '../home';
import BlogContainer from '../blog';

// STYLE IMPORTS
import './app.container.scss';

class AppContainer extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            drawerActive: false,
            drawerPinned: false,
        };
    }

    toggleDrawerActive = () => {
        this.setState({ drawerActive: !this.state.drawerActive });
    };

    toggleDrawerPinned = () => {
        this.setState({ drawerPinned: !this.state.drawerPinned });
    }


    render() {
    return (
        <Layout>
            <NavDrawer active={this.state.drawerActive}
                       pinned={this.state.drawerPinned} permanentAt='xl'
                       onOverlayClick={ this.toggleDrawerActive }>
                <Navigation type='vertical'>
                    <IconButton icon='favorite' accent  onClick={ this.toggleDrawerPinned } />
                </Navigation>
            </NavDrawer>
            <Panel>
                <AppBar title='App' leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive } />
                <Navigation type='horizontal'>
                    <Button>Test</Button>
                </Navigation>
                <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
                    <h1>Main Content</h1>
                </div>
            </Panel>
        </Layout>
    );
  }
}

const mapStateToProps = (state) => {
    return {
       /* menuOpen: toggleMenu(state.menuOpen)*/
    }
};

export default AppContainer;