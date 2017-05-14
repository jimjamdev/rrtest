import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, MemoryRouter, Link } from 'react-router-dom';
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
   box-shadow: ${( { theme } ) => theme.shadow.z2 };
`;

const ChatContentStyle = styled.div`
   display: flex;
`
class ChatContainer extends Component {

    render() {
        return (
            <MemoryRouter>
                    <ChatContainerStyle {...this.props} className="Chat">
                        <AppBar color="white" textColor="darkGrey">
                            <Title><Link to="/">Chat</Link></Title>
                        </AppBar>
                        <ChatContentStyle>
                            <ChatMenu />
                            <Switch>
                                <Route exact path="/" component={ChatHome}/>
                                <Route path="/chat/:slug" component={ChatWindow}/>
                            </Switch>
                        </ChatContentStyle>
                    </ChatContainerStyle>
            </MemoryRouter>
        );
    }
}
export default ChatContainer