// LIBRARY IMPORTS
import * as React from 'react';
import { Route, Link } from 'react-router-dom'
//import { connect } from 'react-redux';
//import { toggleMenu } from './app.actions';

// UI IMPORTS
import AppBar from 'react-toolbox/lib/app_bar';
import { IconButton, Button } from 'react-toolbox/lib/button';
import { Layout, NavDrawer, Panel } from 'react-toolbox/lib/layout';
import { Tab, Tabs } from 'react-toolbox/lib/tabs';
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
            index: 0,
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

    handleTabChange = (index) => {
        this.setState({index});
    };


    render() {
    return (
        <Layout className="app">
            <NavDrawer active={this.state.drawerActive}
                       pinned={this.state.drawerPinned} permanentAt='xl'
                       onOverlayClick={ this.toggleDrawerActive }>
                <Navigation type='vertical'>
                    <IconButton icon='favorite' accent  onClick={ this.toggleDrawerPinned } />
                </Navigation>
            </NavDrawer>
            <Panel>
                <AppBar title='Things' leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive } />
                <Tabs index={this.state.index} onChange={this.handleTabChange}>
                    <Tab label='Primary'><small>Primary content</small></Tab>
                    <Tab label='Secondary'><small>Secondary content</small></Tab>
                    <Tab label='Third'><small>Disabled content</small></Tab>
                    <Tab label='Fourth'><small>Fourth content hidden</small></Tab>
                    <Tab label='Fifth'><small>Fifth content</small></Tab>
                </Tabs>
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