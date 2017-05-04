// LIBRARY IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import styled from 'styled-components';

// UI IMPORTS
import Button from 'semantic-ui-react/dist/es/elements/Button';
import Icon from 'semantic-ui-react/dist/es/elements/Icon';
import Container from 'semantic-ui-react/dist/es/elements/Container';
import Dropdown from 'semantic-ui-react/dist/es/modules/Dropdown';
import Menu from 'semantic-ui-react/dist/es/collections/Menu';
import AppBar from '../../components/AppBar/AppBar';

// CONTAINER IMPORTS
import { HomeContainer } from '../home';
import { BlogContainer } from '../blog';

// STYLES

const AppContainerStyle = styled.main`
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  background: ${({ theme }) => theme.base.background };
`;


class AppContainer extends Component {
    render() {
    return (
        <AppContainerStyle>
        <BrowserRouter>
           <Container>
               <Helmet>
                   <meta charSet="utf-8" />
                   <title>React Test</title>
                   <link rel="canonical" href="http://domain.com/" />
               </Helmet>
               <AppBar textColor="white" height="3.3rem">
                   App
               </AppBar>
               <AppBar color="white" textColor="darkGrey">
                   Title { this.props.app.count } {this.props.app.navOpen.toString()}
               </AppBar>
               <Menu>
                   <Menu.Item>
                       <Link to="/">Home</Link>
                   </Menu.Item>
                   <Menu.Item>
                       <Link to="/blog">Blog</Link>
                   </Menu.Item>
               </Menu>
               <h1>React Redux Jumpstate Test</h1>
               <Button primary onClick={() => Actions.decrement()}>Decrement on App</Button>
               <Button primary onClick={() => Actions.increment()}>Increment on App</Button>
               <Button primary onClick={() => Actions.toggleNav()}>Nav</Button>
               <Button color="red" onClick={ () => Actions.loadArticles() }>Refresh Articles</Button>
               <div>
                   <Route exact path="/" component={HomeContainer}/>
                   <Route exact path="/blog" component={BlogContainer}/>
               </div>
           </Container>
        </BrowserRouter>
        </AppContainerStyle>
    );
  }
}


export default connect(state => {
    return {
        app: state.app
    }
})(AppContainer)