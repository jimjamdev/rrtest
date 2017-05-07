// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const AppBarStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${( { textColor, theme } ) => theme && textColor ? theme.color[ textColor ] : theme.base.textColor };
  font-size: inherit;
  min-height: ${( { height } ) => height };
  padding: 0 1rem;
  background: ${( { color, theme } ) => theme && color ? theme.color[ color ] : theme.appBar.background };
  box-shadow: ${( { theme } ) => theme.shadow.z1 };
  z-index: 1;
`;


const AppBar = (props) => {
    return (
        <AppBarStyle {...props}>
            {props.children}
        </AppBarStyle>
    );
}

AppBar.propTypes = {
    textColor: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

AppBar.defaultProps = {
    height: '3.3rem'
}

export default AppBar;