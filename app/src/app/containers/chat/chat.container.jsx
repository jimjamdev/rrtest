import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Actions } from 'jumpstate';

// UI IMPORTS
import AppBar from '../../components/app-bar/app-bar';
import Title from '../../components/title/title';

// COMPONENT IMPORTS
import ChatMenu from './/chat.menu';
import ChatHome from './/chat.home';
import ChatWindow from './/chat.window';

const ChatContainerStyle = styled.aside`
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   background: white;
   box-shadow: ${( { theme } ) => theme.shadow.z2 };
   height: 100%;
`;

const ChatContentStyle = styled.div`
   display: flex;
   flex-grow: 1;
   height: 100%;
`
class ChatContainer extends Component {

    render() {
        return (

                    <ChatContainerStyle {...this.props} className="Chat">
                        <AppBar color="white" textColor="darkGrey">
                            <Title><Link to="/chat">Chat</Link></Title>
                        </AppBar>
                        <ChatContentStyle>
                            <ChatMenu />
                            <Switch>
                                <Route exact path="/" component={ChatHome}/>
                                <Route exact path="/chat" component={ChatHome}/>
                                <Route path="/chat/:slug" component={ChatWindow}/>
                            </Switch>
                        </ChatContentStyle>
                    </ChatContainerStyle>

        );
    }
}
export default ChatContainer