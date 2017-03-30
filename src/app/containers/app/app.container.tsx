// LIBRARY IMPORTS
import * as React from 'react';
import { Route, Link } from 'react-router-dom'
//import { connect } from 'react-redux';
//import { toggleMenu } from './app.actions';

// UI IMPORTS
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import Menu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';

// CONTAINER IMPORTS
import HomeContainer from '../home';
import BlogContainer from '../blog';

// STYLE IMPORTS
import './app.container.scss';

class AppContainer extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            docked: true
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
            iconElementLeft={<IconButton onTouchTap={this.handleToggle}><Menu /></IconButton>}
            iconElementRight={<div><IconButton onTouchTap={this.handleToggle}><NavigationClose /></IconButton></div>}
        />
        <Toolbar>
            <ToolbarGroup>
                <ToolbarTitle text="Tasks" />
            </ToolbarGroup>
            <ToolbarGroup>
                <FontIcon className="muidocs-icon-custom-sort" />
                <ToolbarSeparator />
                <RaisedButton label="Create Broadcast" primary={true} />
                <IconMenu
                    iconButtonElement={
                        <IconButton touch={true}>
                            <NavigationExpandMoreIcon />
                        </IconButton>
                    }
                >
                    <MenuItem primaryText="Download" />
                    <MenuItem primaryText="More Info" />
                </IconMenu>
            </ToolbarGroup>
        </Toolbar>
        <Drawer open={this.state.open} docked={this.state.docked}>
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
            <Route path="/" component={HomeContainer} />
            <Route path="/blog" component={BlogContainer} />
        </div>
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