import React, { Component } from 'react';
import AddBlogForm from './add.blog.form';
import { Actions } from 'jumpstate';

class blogAdd extends Component {
    submit = (values) => {
        return Actions.addBlog(values);
    }
    render() {
        return (
            <AddBlogForm onSubmit={this.submit} />
        );
    }
}

export default blogAdd;