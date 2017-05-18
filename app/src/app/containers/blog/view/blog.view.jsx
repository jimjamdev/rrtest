import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';
import Loader from "../../../components/loader/loader";

// UI IMPORTS


class blogView extends Component {

    componentWillMount() {
        return Actions.loadArticle('591ab0330d273b17b07732b6');
    }

    render () {

        const { blogView, loading } = this.props;
        console.log(blogView);

        return (
            <div>
                { loading ? <Loader/> : (
                    <div>
                        <h1>{ blogView.data.title || [] }</h1>
                        <p>{ blogView.data.text || [] }</p>
                    </div>
                ) }
            </div>
        )
    }
}

export default connect(state => {
    return {
        blogView: state.blogView
    }
})(blogView)