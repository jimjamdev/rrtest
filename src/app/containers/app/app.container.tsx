// LIBRARY IMPORTS
import * as React from 'react';
import { Route, Link } from 'react-router-dom'
//import { connect } from 'react-redux';
//import { toggleMenu } from './app.actions';

// UI IMPORTS
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

// CONTAINER IMPORTS
import HomeContainer from '../home';
import BlogContainer from '../blog';

// STYLE IMPORTS
import './app.container.scss';

class AppContainer extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }
    handleToggle = () => this.setState({open: !this.state.open});

    static propTypes = {
        toggleMenu: React.PropTypes.string
    };

  render() {
    return (
    <div>
        <AppBar
            title="App"
        />
        <Drawer open={this.state.open}>
            <MenuItem
                containerElement={<Link to="/" />}
                primaryText="Home"
            />
            <MenuItem
                containerElement={<Link to="/blog" />}
                primaryText="Blog"
            />
        </Drawer>
        <div className="container">
            <p>Content should show here</p>
        </div>
        <Route path="/" component={HomeContainer} />
        <Route exact path="/blog" component={BlogContainer} />
    </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
       /* menuOpen: toggleMenu(state.menuOpen)*/
    }
};

export default AppContainer;