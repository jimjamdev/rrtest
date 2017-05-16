import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Actions } from 'jumpstate';

// UI IMPORTS
import Loader from '../../../components/loader/loader';
import List from '../../../components/list/list';
import ListItem from '../../../components/list/list-item';

class blogIndex extends Component {

    componentWillMount() {
        return Actions.loadArticles();
    }

    render () {
        const { blog, loading } = this.props;
        const blogList = loading ? <Loader/>
            : (blog.blogArticles.data || []).map((blog) =>
                <ListItem key={blog._id}><Link to={`/blog/${blog._id}`}>{blog.title} {blog.text}</Link></ListItem>
            );
        return (
            <List>
                {blogList}
            </List>
        )
    }
}

export default connect(state => {
    return {
        blog: state.blog
    }
})(blogIndex)