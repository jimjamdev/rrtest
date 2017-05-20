import React from 'react'
import {Field, reduxForm} from 'redux-form'
import Button from "../../../components/button/button";

const AddBlogForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="title">Title</label>
                <Field name="title" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="text">Text</label>
                <Field name="text" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="slug">Slug</label>
                <Field name="slug" component="input" type="text"/>
            </div>
            <Button color="primary" type="submit">Submit</Button>
        </form>
    )
}

export default reduxForm({
    form: 'addBlogForm' // a unique identifier for this form
})(AddBlogForm)