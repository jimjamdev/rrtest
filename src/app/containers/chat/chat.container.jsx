import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, HashRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Actions } from 'jumpstate';

// UI IMPORTS
import AppBar from '../../components/AppBar/AppBar';
import Title from '../../components/Title/Title';

// COMPONENT IMPORTS
import ChatMenu from './/chat.menu';
import ChatHome from './/chat.home';
import ChatWindow from './/chat.window';

const ChatContainerStyle = styled.aside`
   display: flex;
   flex-direction: column;
   background: white;
   position: absolute;
   right: 0;
   bottom: 0;
   width: 400px;
   box-shadow: ${( { theme } ) => theme.shadow.z2 };
`;

const ChatContentStyle = styled.div`
   display: flex;
`
class ChatContainer extends Component {

    render() {
        return (
            <HashRouter>
                <ChatContainerStyle {...this.props} className="Chat">
                    <AppBar color="white" textColor="darkGrey">
                        <Title><Link to="/">Chat</Link></Title>
                    </AppBar>
                    <ChatContentStyle>
                        <ChatMenu />
                        <Switch>
                            <Route exact path="/" component={ChatHome}/>
                            <Route path="/chat/window" component={ChatWindow}/>
                        </Switch>
                    </ChatContentStyle>
                </ChatContainerStyle>
            </HashRouter>
        );
    }
}
export default ChatContainer