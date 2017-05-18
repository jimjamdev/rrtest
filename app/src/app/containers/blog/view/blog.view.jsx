import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';
import Loader from "../../../components/loader/loader";

// UI IMPORTS


class blogView extends Component {

    componentWillMount() {
        return Actions.loadArticle(this.props.match.params.slug);
    }

    render () {

        const { blogView, loading } = this.props;
        console.log(this.props);

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