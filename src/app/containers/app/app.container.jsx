// LIBRARY IMPORTS
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
//import { connect } from 'react-redux';
//import { toggleMenu } from './app.actions';

// UI IMPORTS
import Button from 'semantic-ui-react/dist/es/elements/Button';
import Icon from 'semantic-ui-react/dist/es/elements/Icon';
import Container from 'semantic-ui-react/dist/es/elements/Container';
import UiAppBar from '../../components/ui/AppBar/AppBar';

// CONTAINER IMPORTS
import HomeContainer from '../home/home.container';
import BlogContainer from '../blog/blog.container';

// STYLE IMPORTS
import styles from './app.container.less';
@CSSModules(styles)

class AppContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
    return (
        <BrowserRouter>
           <Container styleName="AppContainer">
               <UiAppBar/>
               <Link to="/">Home</Link>
               <Link to="/blog">Blog</Link>
               <Button animated>
                   <Button.Content visible>Next</Button.Content>
                   <Button.Content hidden>
                       <Icon name='right arrow' />
                   </Button.Content>
               </Button>
               <Icon circular inverted color='teal' name='users' />
               <div>
                   <Route exact path="/" component={HomeContainer}/>
                   <Route exact path="/blog" component={BlogContainer}/>
               </div>
           </Container>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
    return {
       /* menuOpen: toggleMenu(state.menuOpen)*/
    }
};

export default AppContainer;