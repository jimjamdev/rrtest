import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';

import AppBar from '../../components/AppBar/AppBar';
import { Col, Row } from 'react-styled-flexboxgrid';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { Layout, Content } from '../../components/Layout';
import Image from '../../components/Image/Image'

class HomeContainer extends Component {
    render() {
        return (
            <Layout>
                <AppBar color="white" textColor="darkGrey">
                    Home <Button color="primary" onClick={() => Actions.toggleLeftNav()}>Nav on Home</Button>
                </AppBar>
                <Content>
                <Row>
                    <Col xs={12} md={3}>
                        <Card>
                            <Image src="http://lorempixel.com/400/200/" />
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
                </Content>
            </Layout>
        );
    }
}
export default connect(state => {
    return {
        home: state.home
    }
})(HomeContainer)