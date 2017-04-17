// LIBRARY IMPORTS
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';
//import { connect } from 'react-redux';
//import { toggleMenu } from './app.actions';

// UI IMPORTS
import Button from 'semantic-ui-react/dist/es/elements/Button';
import Container from 'semantic-ui-react/dist/es/elements/Container';
import UiAppBar from '../../components/ui/AppBar/AppBar';

// CONTAINER IMPORTS
import HomeContainer from '../home';
import BlogContainer from '../blog';

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
       <Container styleName="AppContainer">
            <UiAppBar/>
           <Button animated>
               <Button.Content visible>One</Button.Content>
               <Button.Content hidden>Two</Button.Content>
           </Button>
       </Container>
    );
  }
}

const mapStateToProps = (state) => {
    return {
       /* menuOpen: toggleMenu(state.menuOpen)*/
    }
};

export default AppContainer;