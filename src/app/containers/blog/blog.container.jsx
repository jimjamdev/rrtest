import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';

// UI IMPORTS
import Button from '../../components/Button/Button';
import AppBar from '../../components/AppBar/AppBar';
import Title from '../../components/Title/Title';
import Loader from '../../components/Loader/Loader';

class BlogContainer extends Component {

    componentWillMount() {
        return Actions.loadArticles();
    }


    render() {
        const { blog, loading } = this.props;
        console.log(blog);
        const listItems = loading ? <Loader/>
            : blog.articles.map((blog) =>
                <li key={blog.login.username}>{blog.name.title} {blog.name.first} {blog.name.last}</li>
            );
        return (
            <section>
                <AppBar color="white" textColor="darkGrey">
                    <Title>Blog</Title>
                   <div>
                       <Button color="primary" onClick={() => Actions.decrement()}>Decrement on Blog</Button>
                       <Button color="primary" onClick={() => Actions.increment()}>Increment on Blog</Button>
                       <Button color="primary" onClick={() => Actions.toggleNav()}>Nav on Blog</Button>
                       <Button color="secondary" onClick={() => Actions.toggleNav()}>Nav on Blog</Button>
                   </div>
                </AppBar>
                <ul>
                    <Button color="red" onClick={ () => Actions.loadArticles() }>Refresh Articles</Button>
                    {listItems}
                </ul>
            </section>
        );
    }
}
export default connect(state => {
    return {
        blog: state.blog
    }
})(BlogContainer)