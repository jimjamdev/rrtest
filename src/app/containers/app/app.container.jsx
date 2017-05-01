// LIBRARY IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import CSSModules from 'react-css-modules';

// UI IMPORTS
import Button from 'semantic-ui-react/dist/es/elements/Button';
import Icon from 'semantic-ui-react/dist/es/elements/Icon';
import Container from 'semantic-ui-react/dist/es/elements/Container';
import Dropdown from 'semantic-ui-react/dist/es/modules/Dropdown';
import Menu from 'semantic-ui-react/dist/es/collections/Menu';
import UiAppBar from '../../components/ui/AppBar/AppBar';

// CONTAINER IMPORTS
import { HomeContainer } from '../home';
import { BlogContainer } from '../blog';

// STYLE IMPORTS
import styles from './app.container.less';
@CSSModules(styles)

class AppContainer extends Component {
    render() {
    return (
        <BrowserRouter>
           <Container styleName="AppContainer">
               <Helmet>
                   <meta charSet="utf-8" />
                   <title>React Test</title>
                   <link rel="canonical" href="http://domain.com/" />
               </Helmet>
               <UiAppBar/>
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
    );
  }
}


export default connect(state => {
    return {
        app: state.app
    }
})(AppContainer)