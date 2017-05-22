import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddBlogForm from './add.blog.form';
import { Actions } from 'jumpstate';

class blogAdd extends Component {
    submit = (values) => {
        return Actions.addBlog(values);
    }
    render() {
        return (
            <AddBlogForm form="1" onSubmit={this.submit} />
        );
    }
}

export default connect(state => {
    return {
        blogAdd: state.blogAdd
    }
})(blogAdd)