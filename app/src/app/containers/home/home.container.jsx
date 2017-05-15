import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';

import AppBar from '../../components/app-bar/app-bar';
import { Col, Row } from 'react-styled-flexboxgrid';
import Loader from '../../components/loader/loader';
import Card from '../../components/card/card';
import Button from '../../components/button/button';
import { Layout, Content } from '../../components/layout';
import Image from '../../components/image/image'

class HomeContainer extends Component {

    componentDidMount(){
        setTimeout(() => {
            const height = document.getElementById('mainContent').offsetHeight;
            console.log(height);
        }, 1)
    }

    render() {
        return (
            <Layout>
                <AppBar color="white" textColor="darkGrey">
                    Home <Button color="primary" onClick={() => Actions.toggleLeftNav()}>Nav on Home</Button>
                </AppBar>
                <Content id="mainContent">
                <Row>
                    <Col xs={12} md={3}>
                        <Card>
                            <Image src="http://lorempixel.com/200/200/" responsive />
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

                    <div style={{height: this.height}}>some content</div>
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