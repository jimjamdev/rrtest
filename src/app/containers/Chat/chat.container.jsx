import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Actions } from 'jumpstate';

// UI IMPORTS
import AppBar from '../../components/AppBar/AppBar';
import Title from '../../components/Title/Title';

// COMPONENT IMPORTS
import ChatMenu from '../Chat/chat.menu';
import ChatHome from '../Chat/chat.home';
import ChatWindow from '../Chat/chat.window';

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
            <ChatContainerStyle {...this.props} className="Chat">
                <AppBar color="white" textColor="darkGrey">
                    <Title>Chat</Title>
                </AppBar>
                <ChatContentStyle>
                    <ChatMenu />
                    <Switch>
                        <Route path="/" component={ChatHome}/>
                        <Route path="/chat" component={ChatWindow}/>
                    </Switch>
                </ChatContentStyle>
            </ChatContainerStyle>
        );
    }
}
export default ChatContainer