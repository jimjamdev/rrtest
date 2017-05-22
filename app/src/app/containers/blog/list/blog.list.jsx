import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Actions } from 'jumpstate';

// UI IMPORTS
import Select from 'react-select';
import Loader from '../../../components/loader/loader';
import List from '../../../components/list/list';
import ListItem from '../../../components/list/list-item';
import blogAdd from "../add/add.blog";

class blogList extends Component {

    componentWillMount() {
        return Actions.loadArticles();
    }

    render () {
        const options = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
        ];
        const { blogList } = this.props;
        const blogListItems = blogList.loading ? <Loader/>
            : (blogList.data.data || []).map((blog) =>
                <ListItem key={blog._id}><Link to={`/blog/${blog._id}`}>{blog.title} {blog.text}</Link></ListItem>
            );
        return (
            <div>
                <Select
                    name="form-field-name"
                    value="one"
                    multi={true}
                    options={options}
                />
                <h5>Add a new blog</h5>
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
        blogList: state.blogList,
        blogAdd: state.blogAdd
    }
})(blogList)