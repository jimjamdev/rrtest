import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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