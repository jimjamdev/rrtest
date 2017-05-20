import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Actions } from 'jumpstate';

// UI IMPORTS
import Loader from '../../../components/loader/loader';
import List from '../../../components/list/list';
import ListItem from '../../../components/list/list-item';
import blogAdd from "../add/add.blog";

class blogList extends Component {

    componentWillMount() {
        return Actions.loadArticles();
    }

    render () {
        const { blogList } = this.props;
        const blogListItems = blogList.loading ? <Loader/>
            : (blogList.data.data || []).map((blog) =>
                <ListItem key={blog._id}><Link to={`/blog/${blog._id}`}>{blog.title} {blog.text}</Link></ListItem>
            );
        return (
            <div>
                <blogAdd />
                <h5>Results: { blogList.data.total || [] }</h5>
                <List>
                    {blogListItems}
                </List>
            </div>
        )
    }
}

export default connect(state => {
    return {
        blogList: state.blogList
    }
})(blogList)