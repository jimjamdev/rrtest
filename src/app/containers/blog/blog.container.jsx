import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';


// UI IMPORTS
import Button from 'semantic-ui-react/dist/es/elements/Button';
import Title from '../../components/Title/Title';

class BlogContainer extends Component {

    componentWillMount() {
        return Actions.loadArticles();
    }


    render() {
        const { blog, loading } = this.props;
        console.log(blog);
        const listItems = loading ? <p>LOADING...</p>
            : blog.articles.map((blog) =>
                <li key={blog.login.username}>{blog.name.title} {blog.name.first} {blog.name.last}</li>
            );
        return (
            <div>
                <Title>Blog</Title>
                <Button secondary onClick={() => Actions.decrement()}>Decrement on Blog</Button>
                <Button secondary onClick={() => Actions.increment()}>Increment on Blog</Button>
                <Button secondary onClick={() => Actions.toggleNav()}>Nav on Blog</Button>
                <ul divided inverted relaxed>
                    <Button color="red" onClick={ () => Actions.loadArticles() }>Refresh Articles</Button>
                    {listItems}
                </ul>
            </div>
        );
    }
}
export default connect(state => {
    return {
        blog: state.blog
    }
})(BlogContainer)