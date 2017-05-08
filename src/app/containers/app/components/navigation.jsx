// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const NavigationStyle = styled.aside`
    background: ${( { theme } ) => theme.navigation.background };
    width: 200px;
    transform: translateX(${( { open } ) => open ? '0' : '-200px' });
    box-shadow: ${( { theme } ) => theme.shadow.z2 };
    z-index: 2;
    transition: .3s ease-in-out;
    position: fixed;
    top:0; bottom: 0;
    left: 0;
`;


const AppNavigation = (props) => {
    return (
        <NavigationStyle {...props}>
            {props.children}
        </NavigationStyle>
    );
}

AppNavigation.propTypes = {
    open: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(React.PropTypes.node),
        PropTypes.node
    ])
};

export default AppNavigation;