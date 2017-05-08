// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import styled from 'styled-components';

// UI IMPORTS
import AppNavigation from './components/navigation';
import AppContent from './components/content';

import AppBar from '../../components/AppBar/AppBar';
import Title from '../../components/Title/Title';
import Menu from '../../components/Menu/Menu';
import MenuHeader from '../../components/Menu/MenuHeader';
import MenuItem from '../../components/Menu/MenuItem';


// CONTAINER IMPORTS
import { HomeContainer } from '../home';
import { BlogContainer } from '../blog';

// STYLES

const AppContainerStyle = styled.section`
  font-family: ${({ theme }) => theme.base.font };
  background: ${({ theme }) => theme.base.background };
  display: block;
  min-height: 100%;
  & a {
    color: ${({ theme }) => theme.base.linkColor };
  }
`;

class AppContainer extends Component {
    render() {
    return (
        <BrowserRouter>
            <AppContainerStyle>
               <Helmet>
                   <meta charSet="utf-8" />
                   <title>React Test</title>
                   <link rel="canonical" href="http://domain.com/" />
               </Helmet>
                <AppNavigation open={this.props.app.navLeftOpen}>
                    <Menu>
                        <MenuHeader>Menu Header</MenuHeader>
                        <MenuItem>
                            <Link to="/">Home</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/blog">Blog</Link>
                        </MenuItem>
                    </Menu>
                </AppNavigation>
                <AppContent leftOpen={this.props.app.navLeftOpen}>
               <AppBar textColor="white" height="3.3rem">
                   <Title>App</Title>
                   <div>{ this.props.app.count } {this.props.app.navLeftOpen.toString()}</div>
               </AppBar>
                    <Route exact path="/" component={HomeContainer}/>
                   <Route exact path="/blog" component={BlogContainer}/>
                </AppContent>
            </AppContainerStyle>
        </BrowserRouter>
    );
  }
}

AppContainer.propTypes = {
    navLeftOpen: PropTypes.bool,
    navRightOpen: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(React.PropTypes.node),
        PropTypes.node
    ])
};

export default connect(state => {
    return {
        app: state.app
    }
})(AppContainer)