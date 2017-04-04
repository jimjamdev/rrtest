// LIBRARY IMPORTS
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';
//import { connect } from 'react-redux';
//import { toggleMenu } from './app.actions';

// UI IMPORTS
import UiAppBar from '../../components/ui/AppBar/AppBar';
import { IconButton, Button } from 'react-toolbox/lib/button';
import { Layout, NavDrawer, Panel } from 'react-toolbox/lib/layout';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Tab, Tabs } from 'react-toolbox/lib/tabs';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

// CONTAINER IMPORTS
import HomeContainer from '../home';
import BlogContainer from '../blog';

// STYLE IMPORTS
import styles from './app.container.scss';
@CSSModules(styles)

class AppContainer extends Component {

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
        <Layout styleName="appContainer" className="full-height">
            <NavDrawer active={this.state.drawerActive}
                       pinned={this.state.drawerPinned} permanentAt='xl'
                       onOverlayClick={ this.toggleDrawerActive }>
                <Navigation type='vertical'>
                    <Link href='http://' label='Inbox' icon='inbox' />
                </Navigation>
            </NavDrawer>
            <Panel>
                <UiAppBar />
                <Tabs index={this.state.index} onChange={this.handleTabChange}>
                    <Tab label='Summary'>

                            <Row>
                                <Col xs={12} lg={3}>
                                    <Card>
                                        <CardTitle
                                            avatar="https://placeimg.com/80/80/animals"
                                            title="Avatar style title"
                                            subtitle="Subtitle here"
                                        />
                                        <CardMedia
                                            aspectRatio="wide"
                                            image="https://placeimg.com/800/450/nature"
                                        />
                                        <CardTitle
                                            title="Title goes here"
                                            subtitle="Subtitle here"
                                        />
                                        <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet atque beatae doloribus ducimus expedita illum laboriosam, laudantium maiores minus nobis odio possimus quasi quibusdam quidem, repellat repellendus similique. Iste.</CardText>
                                        <CardActions>
                                            <Button label="Action 1" />
                                            <Button label="Action 2" />
                                        </CardActions>
                                    </Card>
                                </Col>
                                <Col xs={12} lg={3}>
                                    <Card>
                                        <CardTitle
                                            avatar="https://placeimg.com/80/80/animals"
                                            title="Avatar style title"
                                            subtitle="Subtitle here"
                                        />
                                        <CardMedia
                                            aspectRatio="wide"
                                            image="https://placeimg.com/800/450/nature"
                                        />
                                        <CardTitle
                                            title="Title goes here"
                                            subtitle="Subtitle here"
                                        />
                                        <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet atque beatae doloribus ducimus expedita illum laboriosam, laudantium maiores minus nobis odio possimus quasi quibusdam quidem, repellat repellendus similique. Iste.</CardText>
                                        <CardActions>
                                            <Button label="Action 1" />
                                            <Button label="Action 2" />
                                        </CardActions>
                                    </Card>
                                </Col>
                                <Col xs={12} lg={3}>
                                    <Card>
                                        <CardTitle
                                            avatar="https://placeimg.com/80/80/animals"
                                            title="Avatar style title"
                                            subtitle="Subtitle here"
                                        />
                                        <CardMedia
                                            aspectRatio="wide"
                                            image="https://placeimg.com/800/450/nature"
                                        />
                                        <CardTitle
                                            title="Title goes here"
                                            subtitle="Subtitle here"
                                        />
                                        <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet atque beatae doloribus ducimus expedita illum laboriosam, laudantium maiores minus nobis odio possimus quasi quibusdam quidem, repellat repellendus similique. Iste.</CardText>
                                        <CardActions>
                                            <Button label="Action 1" />
                                            <Button label="Action 2" />
                                        </CardActions>
                                    </Card>
                                </Col>
                                <Col xs={12} lg={3}>
                                    <Card>
                                        <CardTitle
                                            avatar="https://placeimg.com/80/80/animals"
                                            title="Avatar style title"
                                            subtitle="Subtitle here"
                                        />
                                        <CardMedia
                                            aspectRatio="wide"
                                            image="https://placeimg.com/800/450/nature"
                                        />
                                        <CardTitle
                                            title="Title goes here"
                                            subtitle="Subtitle here"
                                        />
                                        <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet atque beatae doloribus ducimus expedita illum laboriosam, laudantium maiores minus nobis odio possimus quasi quibusdam quidem, repellat repellendus similique. Iste.</CardText>
                                        <CardActions>
                                            <Button label="Action 1" />
                                            <Button label="Action 2" />
                                        </CardActions>
                                    </Card>
                                </Col>
                            </Row>
                    </Tab>
                    <Tab label='General'><small>Secondary content</small></Tab>
                    <Tab label='Classifications'><small>Disabled content</small></Tab>
                    <Tab label='Location'><small>Fourth content hidden</small></Tab>
                    <Tab label='Files'><small>Fifth content</small></Tab>
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