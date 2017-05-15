import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ChatMenuStyle = styled.aside`
   display: flex;
   flex-direction: column;
   box-shadow: ${( { theme } ) => theme.shadow.z2 };
`;

// UI Imports
import List from '../../components/list/list';
import ListItem from '../../components/list/list-item';

const ChatMenu = (props) => {
    return (
        <ChatMenuStyle>
            <List>
                <ListItem><Link to="/chat/window">Chat 1</Link></ListItem>
                <ListItem>Chat 2</ListItem>
                <ListItem>Chat 3</ListItem>
                <ListItem>Chat 4</ListItem>
            </List>
        </ChatMenuStyle>
    )
}

export default ChatMenu