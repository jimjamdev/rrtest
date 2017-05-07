import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';

import AppBar from '../../components/AppBar/AppBar';
import { Col, Row } from 'react-styled-flexboxgrid';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

class HomeContainer extends Component {
    render() {
        return (
            <section>
                <AppBar color="white" textColor="darkGrey">
                    Home <Button color="primary" onClick={() => Actions.toggleNav()}>Nav on Home</Button>
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
            </section>
        );
    }
}
export default connect(state => {
    return {
        home: state.home
    }
})(HomeContainer)