import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Actions } from 'jumpstate';

// UI IMPORTS
import Loader from '../../../components/Loader/Loader';
import List from '../../../components/List/List';
import ListItem from '../../../components/List/ListItem';

class blogIndex extends Component {

    componentWillMount() {
        return Actions.loadArticles();
    }

    render () {
        const { blog, loading } = this.props;
        const listItems = loading ? <Loader/>
            : blog.articles.map((blog) =>
                <ListItem key={blog.login.username}><Link to={`/blog/view`}>{blog.name.title} {blog.name.first} {blog.name.last}</Link></ListItem>
            );
        return (
            <List>
                {listItems}
            </List>
        )
    }
}

export default connect(state => {
    return {
        blog: state.blog
    }
})(blogIndex)