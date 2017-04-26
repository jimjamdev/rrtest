import React, { Component } from 'react';
import { connect } from 'react-redux'

import AppState from '../app/app.state';
import BlogState from './blog.state';

import './blog.container.less';

class BlogContainer extends Component {
    render() {
        const articles = this.props.blog.articles.map((article) => <li key={article.id}>{article.name}</li>);
        return (
            <div>
                <h1>Blog Page</h1>
                <button onClick={() => AppState.decrement()}>Decrement on Blog</button>
                <button onClick={() => AppState.increment()}>Increment on Blog</button>
                <button onClick={() => AppState.toggleNav()}>Nav on Blog</button>
                <ul>
                    {articles}
                </ul>
            </div>
        );
    }
}
export default connect(state => {
    return {
        app: state.app,
        blog: state.blog
    }
})(BlogContainer)