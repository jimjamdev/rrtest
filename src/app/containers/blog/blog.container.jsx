import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Actions } from 'jumpstate';

// UI IMPORTS
import Button from '../../components/Button/Button';
import AppBar from '../../components/AppBar/AppBar';
import Title from '../../components/Title/Title';
import { Layout, Content } from '../../components/Layout';
import Icon from '../../components/Icon/Icon';

// COMPONENT IMPORTS
import blogIndex from './index/blog.index';
import blogView from './view/blog.view';

class BlogContainer extends Component {

    componentWillMount() {
        return Actions.loadArticles();
    }


    render() {
        return (
            <Layout>
                <AppBar color="white" textColor="darkGrey">
                    <Title>Blog</Title>
                   <div>
                       <Button color="red" onClick={ () => Actions.loadArticles() }><Icon name="refresh" /></Button>
                       <Button color="primary" onClick={() => Actions.decrement()}>Decrement on Blog</Button>
                       <Button color="warning" onClick={() => Actions.increment()}>Increment on Blog</Button>
                       <Button color="secondary" onClick={() => Actions.toggleLeftNav()}>Nav on Blog</Button>
                   </div>
                </AppBar>
                <Content>
                    <Switch>
                        <Route exact path={`/blog`} component={blogIndex}/>
                        <Route exact path={`/blog/view`} component={blogView}/>
                    </Switch>
                </Content>
            </Layout>
        );
    }
}
export default connect(state => {
    return {
        blog: state.blog
    }
})(BlogContainer)