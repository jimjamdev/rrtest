import React from 'react';
import { Link } from 'react-router-dom';

const ChatMenu = (props) => {
    return (
        <div>
            <ul>
                <li><Link to="/chat/window">Chat 1</Link></li>
                <li>Chat 2</li>
                <li>Chat 3</li>
                <li>Chat 4</li>
            </ul>
        </div>
    )
}

export default ChatMenu