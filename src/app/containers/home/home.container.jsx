import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';

import AppBar from '../../components/AppBar/AppBar';
import { Col, Row } from 'react-styled-flexboxgrid';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';

class HomeContainer extends Component {
    render() {
        return (
            <div>
                <AppBar color="white" textColor="darkGrey">
                    Home
                </AppBar>
                <Row>
                    <Col xs={12} md={3}>
                        <Card>
                            content...
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card>
                            content...
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card>
                            content...
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card>
                            content...
                        </Card>
                    </Col>
                </Row>
                <Loader/>
            </div>
        );
    }
}
export default connect(state => {
    return {
        home: state.home
    }
})(HomeContainer)