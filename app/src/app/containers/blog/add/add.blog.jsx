import React, { Component } from 'react';
import { Control, Form, actions } from 'react-redux-form';
import Button from "../../../components/button/button";

class blogAdd extends Component {
    handleSubmit(blog) {
        // Do whatever you like in here.
        // If you connect the UserForm to the Redux store,
        // you can dispatch actions such as:
        // dispatch(actions.submit('user', somePromise));
        // etc.
    }
    render() {
        return (
            <Form model="user" onSubmit={(blog) => this.handleSubmit(blog)}>
                <label>Title</label>
                <Control.text model="blog.title" />

                <label>Text: </label>
                <Control.text model="blog.text" />

                <Button type="submit">
                    Finish registration!
                </Button>
            </Form>
        );
    }
}

export default blogAdd;