// LIBRARY IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import styled from 'styled-components';

// UI IMPORTS
import Navigation from './components/navigation';
import Content from './components/content';

import { Col, Row } from 'react-styled-flexboxgrid'
import Button from '../../components/Button/Button';
import AppBar from '../../components/AppBar/AppBar';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import Loader from '../../components/Loader/Loader';


// CONTAINER IMPORTS
import { HomeContainer } from '../home';
import { BlogContainer } from '../blog';

// STYLES

const AppContainerStyle = styled.section`
  font-family: ${({ theme }) => theme.base.font };
  background: ${({ theme }) => theme.base.background };
  flex: 1;
  display: flex;
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
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                </Navigation>
                <Content>
               <AppBar textColor="white" height="3.3rem">
                   <Title>React Redux Jumpstate Test</Title>
               </AppBar>
               <AppBar color="white" textColor="darkGrey">
                   Title { this.props.app.count } {this.props.app.navOpen.toString()}
               </AppBar>
                    <Row>
                        <Col xs={12} md={3}>
                            <Card>
                                content...
                            </Card>
                        </Col>
                        <Col xs={12} md={3}>
                            <Card>
                                content...
                            </Card>
                        </Col>
                        <Col xs={12} md={3}>
                            <Card>
                                content...
                            </Card>
                        </Col>
                        <Col xs={12} md={3}>
                            <Card>
                                content...
                            </Card>
                        </Col>
                    </Row>
                <Loader/>
               <Button color="primary" onClick={() => Actions.decrement()}>Decrement on App</Button>
               <Button color="secondary" onClick={() => Actions.increment()}>Increment on App</Button>
               <Button color="warning" loading onClick={() => Actions.toggleNav()}>Nav</Button>
               <Button color="red" rounded onClick={ () => Actions.loadArticles() }>Refresh Articles</Button>
               <div>
                   <Route exact path="/" component={HomeContainer}/>
                   <Route exact path="/blog" component={BlogContainer}/>
               </div>
                </Content>
            </AppContainerStyle>
        </BrowserRouter>
    );
  }
}


export default connect(state => {
    return {
        app: state.app
    }
})(AppContainer)