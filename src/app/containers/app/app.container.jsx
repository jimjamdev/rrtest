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
               <AppBar>
                   Test
               </AppBar>
               <Menu>
                   <Menu.Item>
                       <Link to="/">Home</Link>
                   </Menu.Item>
                   <Menu.Item>
                       <Link to="/blog">Blog</Link>
                   </Menu.Item>
                   <Menu.Item>
                       Count: { this.props.app.count }
                   </Menu.Item>
                   <Menu.Item>
                       Nav: {this.props.app.navOpen.toString()}
                   </Menu.Item>
               </Menu>
               <h1>React Redux Jumpstate Test</h1>
               <Button primary onClick={() => Actions.decrement()}>Decrement on App</Button>
               <Button primary onClick={() => Actions.increment()}>Increment on App</Button>
               <Button primary onClick={() => Actions.toggleNav()}>Nav</Button>
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