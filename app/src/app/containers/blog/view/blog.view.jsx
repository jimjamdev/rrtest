import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';

// UI IMPORTS


class blogView extends Component {

    componentWillMount() {
        return Actions.loadArticle('591ab0330d273b17b07732b6');
    }

    render () {
        return (
            <div>Blog View</div>
        )
    }
}

export default connect(state => {
    return {
        blogView: state.blogView
    }
})(blogView)