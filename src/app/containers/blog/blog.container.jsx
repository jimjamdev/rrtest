import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';


// UI IMPORTS
import { Input, Button, Form, List } from 'semantic-ui-react';

import './blog.container.less';

class BlogContainer extends Component {

    constructor(props) {
        super(props);
        //console.log(props);
        //const articles = Actions.loadArticles();
    }

    componentWillMount() {
        return Actions.loadArticles();
    }


    render() {
        const { blog, loading } = this.props;
        console.log(blog);
        const listItems = loading ? <p>LOADING...</p>
            : blog.articles.map((blog) =>
                <List.Item key={blog.login.username}>{blog.login.username}</List.Item>
            );
        return (
            <div>
                <h1>Blog Page</h1>
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