import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';


// UI IMPORTS
import { Input, Button, Form, List } from 'semantic-ui-react';
import Title from '../../components/Title/Title';

import './blog.container.less';

class BlogContainer extends Component {

    componentWillMount() {
        return Actions.loadArticles();
    }


    render() {
        const { blog, loading } = this.props;
        console.log(blog);
        const listItems = loading ? <p>LOADING...</p>
            : blog.articles.map((blog) =>
                <List.Item key={blog.login.username}>{blog.name.title} {blog.name.first} {blog.name.last}</List.Item>
            );
        return (
            <div>
                <Title>Blog</Title>
                <Button secondary onClick={() => Actions.decrement()}>Decrement on Blog</Button>
                <Button secondary onClick={() => Actions.increment()}>Increment on Blog</Button>
                <Button secondary onClick={() => Actions.toggleNav()}>Nav on Blog</Button>
                <List divided inverted relaxed>
                    <Button color="red" onClick={ () => Actions.loadArticles() }>Refresh Articles</Button>
                    {listItems}
                </List>
            </div>
        );
    }
}
export default connect(state => {
    return {
        blog: state.blog
    }
})(BlogContainer)