// LIBRARY IMPORTS
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';
//import { connect } from 'react-redux';
//import { toggleMenu } from './app.actions';

// UI IMPORTS
import UiAppBar from '../../components/ui/AppBar/AppBar';
import { IconButton, Button } from 'react-toolbox/lib/button';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/layout';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Tab, Tabs } from 'react-toolbox/lib/tabs';
import Input from 'react-toolbox/lib/input';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import FontIcon from 'react-toolbox/lib/font_icon';
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
            selectValues: ['Active', 'Something else']
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
        <Layout styleName="appContainer">
            {/*<NavDrawer active={this.state.drawerActive}
                       pinned={this.state.drawerPinned} permanentAt='xl'
                       onOverlayClick={ this.toggleDrawerActive }>
                <Navigation type='vertical'>
                    <Link href='http://' label='Inbox' icon='inbox' />
                </Navigation>
            </NavDrawer>*/}
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
                    <Tab label='General'>

                      <Row>
                          <Col xs={12} md={6}>
                              <Card>
                                  <CardTitle title="Basic"></CardTitle>
                                  <CardText>
                                      <Input type='text' label='ID' name='id' value="#27200" disabled />
                                      <Input type='text' label='Modified' name='modified' value="Wed 20 Apr 16 by John Snow" disabled />
                                      <Input type='text' label='Created' name='created' value="Wed 20 Apr 16 by John Snow" disabled />
                                  </CardText>
                              </Card>

                              <Card>
                                  <CardTitle title="Details"></CardTitle>
                                  <CardText>
                                      <Input type='text' label='Name' name='name' value="IHS_API_0994A" />
                                      <Input type='text' label='Description' name='description' value="" />
                                      <Input type='text' label='Parent' name='parent' value="IHS_API_0994A" />
                                      <Autocomplete
                                          direction="down"
                                          label="Status"
                                          multiple={false}
                                          source={{'Active': 'Active'}}
                                          value=""
                                      />
                                      <Autocomplete
                                          direction="down"
                                          label="Organisation"
                                          multiple={false}
                                          source={{'IHS': 'IHS'}}
                                          value=""
                                      />
                                      <Input type='text' label='Upload' name='upload' value="" />
                                      <Autocomplete
                                          direction="down"
                                          label="Choose an icon"
                                          multiple={false}
                                          source={{'Icon': 'Icon'}}
                                          value=""
                                      />
                                     <Row>
                                         <Col xs="2"><Input type='text' label='Longitude' name='long' value="" /></Col>
                                         <Col xs="2"><Input type='text' label='Latitude' name='lat' value="" /></Col>
                                     </Row>
                                      <Autocomplete
                                          direction="down"
                                          label="Type"
                                          multiple={false}
                                          source={{'DMS': 'DMS'}}
                                          value=""
                                      />
                                      <Input type='text' label='Address Line 1' name='address1' value="" />
                                      <Input type='text' label='Address Line 2' name='address2' value="" />
                                      <Input type='text' label='Country' name='country' value="" />
                                      <Input type='text' label='State/Province' name='state' value="" />
                                      <Input type='text' label='City' name='city' value="" />
                                      <Input type='text' label='Code' name='city' value="" />
                                  </CardText>
                              </Card>
                          </Col>
                      </Row>

                    </Tab>
                    <Tab label='Classifications'>
                        <div className="content">
                            <aside className="content-sidebar">
                                <div className="content-sidebar-header">
                                    <h4>Structure</h4> <FontIcon value="close" />
                                </div>
                                <Navigation type='vertical'>
                                    <Link href='http://' label='General' icon='inbox' />
                                    <Link href='http://' active label='Finance' icon='person' />
                                </Navigation>
                            </aside>
                            <article className="content-area">
                                grid here
                            </article>
                        </div>
                    </Tab>
                    <Tab label='Relationships'>
                        <div className="content">
                            <aside className="content-sidebar">
                                <Navigation type='vertical'>
                                    <Link href='http://' label='Organisations' icon='inbox' />
                                    <Link href='http://' active label='People' icon='person' />
                                </Navigation>
                            </aside>
                            <article className="content-area">
                                grid here
                            </article>
                        </div>
                    </Tab>
                    <Tab label='Attachments'>
                        grid here
                    </Tab>
                    <Tab label='Activities'>
                        grid here
                    </Tab>
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