import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';

// UI IMPORTS


class blogView extends Component {

    render () {
        return (
            <div>Blog View</div>
        )
    }
}

export default connect(state => {
    return {
        blog: state.blog
    }
})(blogView)