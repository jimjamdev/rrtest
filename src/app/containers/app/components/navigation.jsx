// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const NavigationStyle = styled.aside`
    background: ${( { theme } ) => theme.navigation.background };
    width: 220px;
    box-shadow: ${( { theme } ) => theme.shadow.z2 };
    z-index: 2;
`;


const AppNavigation = (props) => {
    return (
        <NavigationStyle {...props}>
            {props.children}
        </NavigationStyle>
    );
}

AppNavigation.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

AppNavigation.defaultProps = {
}

export default AppNavigation;