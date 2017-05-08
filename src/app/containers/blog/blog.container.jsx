import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';

// UI IMPORTS
import Button from '../../components/Button/Button';
import AppBar from '../../components/AppBar/AppBar';
import Title from '../../components/Title/Title';
import Loader from '../../components/Loader/Loader';
import { Layout, Content } from '../../components/Layout';
import Icon from '../../components/Icon/Icon';
import List from '../../components/List/List';
import ListItem from '../../components/List/ListItem';

class BlogContainer extends Component {

    componentWillMount() {
        return Actions.loadArticles();
    }


    render() {
        const { blog, loading } = this.props;
        const listItems = loading ? <Loader/>
            : blog.articles.map((blog) =>
                <ListItem key={blog.login.username}>{blog.name.title} {blog.name.first} {blog.name.last}</ListItem>
            );
        return (
            <Layout>
                <AppBar color="white" textColor="darkGrey">
                    <Title>Blog</Title>
                   <div>
                       <Button color="red" onClick={ () => Actions.loadArticles() }><Icon name="refresh" /></Button>
                       <Button color="primary" onClick={() => Actions.decrement()}>Decrement on Blog</Button>
                       <Button color="warning" onClick={() => Actions.increment()}>Increment on Blog</Button>
                       <Button color="secondary" onClick={() => Actions.toggleNav()}>Nav on Blog</Button>
                   </div>
                </AppBar>
                <Content>
                    <List>
                        {listItems}
                    </List>
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