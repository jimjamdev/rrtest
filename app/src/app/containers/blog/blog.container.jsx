import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { Actions } from 'jumpstate';

// UI IMPORTS
import Button from '../../components/button/button';
import AppBar from '../../components/app-bar/app-bar';
import Title from '../../components/title/title';
import { Layout, Content } from '../../components/layout';
import Icon from '../../components/icon/icon';

// COMPONENT IMPORTS
import blogList from './list/blog.list';
import blogView from './view/blog.view';
import blogAdd from './add/add.blog';
import DropDownMenu from "../../components/dropdown-menu/dropdown-menu";

class BlogContainer extends Component {

    render() {
        return (
            <Layout>
                <AppBar color="white" textColor="darkGrey">
                    <Title>Blog</Title>
                   <div>
                       <DropDownMenu content={<div><a href="#">blah</a></div>}>
                           <Button>Dropdown</Button>
                       </DropDownMenu>
                       <Button color="red" onClick={ () => Actions.loadArticles() }><Icon name="refresh" /></Button>
                       <Button><Link to="/blog/add">Add</Link></Button>
                       <Button color="primary" onClick={() => Actions.decrement()}>Decrement on Blog</Button>
                       <Button color="warning" onClick={() => Actions.increment()}>Increment on Blog</Button>
                       <Button color="secondary" onClick={() => Actions.toggleLeftNav()}>Nav on Blog</Button>
                   </div>
                </AppBar>
                <Content>
                    <Switch>
                        <Route exact path={`/blog`} component={blogList}/>
                        <Route exact path={`/blog/add`} component={blogAdd}/>
                        <Route path={`/blog/:slug`} component={blogView}/>
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