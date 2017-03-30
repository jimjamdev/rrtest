import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMenu } from './app.actions';

import { Layout, DatePicker, TimePicker } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { RangePicker } = DatePicker;

import HomeContainer from '../home';
import BlogContainer from '../blog';

import './app.container.scss';

class AppContainer extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    static propTypes = {
        toggleMenu: React.PropTypes.string
    };

    handleClick() {
       console.log('Clicked');
       this.props.toggleMenu(true);
    };

  render() {
    return (
            <Layout className="app">
                <Sider>Sider</Sider>
                <Layout>
                    <Header>
                        <Link to="/">Front</Link> <Link to="/blog">Blog</Link>
                    </Header>
                    <Content>
                        <RangePicker/> <TimePicker />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/blog" component={BlogContainer} />
            </Layout>
    );
  }
}

const mapStateToProps = (state) => {
    return {
       /* menuOpen: toggleMenu(state.menuOpen)*/
    }
};

export default AppContainer;