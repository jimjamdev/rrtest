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
        console.log('blog', blog);
        const listItems = loading ? <Loader/>
            : blog.data.map((blog) =>
                <ListItem key={blog._id}><Link to={`/blog/1`}>{blog.title} {blog.text}</Link></ListItem>
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