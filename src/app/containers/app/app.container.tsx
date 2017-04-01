// LIBRARY IMPORTS
import * as React from 'react';
import { Route, Link } from 'react-router-dom'
//import { connect } from 'react-redux';
//import { toggleMenu } from './app.actions';

// UI IMPORTS
import AppBar from 'react-toolbox/lib/app_bar';
import Checkbox from 'react-toolbox/lib/checkbox';
import IconButton from 'react-toolbox/lib/button';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/layout';
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
            drawerPinned: true,
            sidebarPinned: false
        };
    }

    toggleDrawerActive = () => {
        this.setState({ drawerActive: !this.state.drawerActive });
    };

    toggleDrawerPinned = () => {
        this.setState({ drawerPinned: !this.state.drawerPinned });
    }

    toggleSidebar = () => {
        this.setState({ sidebarPinned: !this.state.sidebarPinned });
    };


    render() {
    return (
        <Layout>
            <NavDrawer active={this.state.drawerActive}
                       pinned={this.state.drawerPinned} permanentAt='xxxl'
                       onOverlayClick={ this.toggleDrawerActive }>
                <p>
                    Navigation, account switcher, etc. go here.
                </p>
            </NavDrawer>
            <Panel>
                <AppBar title='App' leftIcon='menu' onLeftIconClick={ this.toggleDrawerPinned } />
                <Navigation type='horizontal'>
                    nav
                </Navigation>
                <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                    <h1>Main Content</h1>
                    <p>Main content goes here.</p>
                    <Checkbox label='Pin drawer' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
                    <Checkbox label='Show sidebar' checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
                </div>
            </Panel>
            <Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
                <div><IconButton icon='close' onClick={ this.toggleSidebar }/></div>
                <div style={{ flex: 1 }}>
                    <p>Supplemental content goes here.</p>
                </div>
            </Sidebar>
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