import React, { Component } from 'react';
import SimpleForm from './add.blog.form'

class blogAdd extends Component {
    submit = (values) => {
        // Do something with the form values
        console.log(values);
    }
    render() {
        return (
            <SimpleForm onSubmit={this.submit} />
        );
    }
}

export default blogAdd;