// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const AppBarStyle = styled.header`
  display: flex;
  align-items: center;
  color: ${( { textColor, theme } ) => theme && textColor ? theme.color[ textColor ] : theme.base.textColor };
  font-size: inherit;
  min-height: ${( { height } ) => height };
  padding: 0 1rem;
  background: ${( { color, theme } ) => theme && color ? theme.color[ color ] : theme.appBar.background };
  box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
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
    children: PropTypes.string
};

AppBar.defaultProps = {
    height: '3.3rem'
}

export default AppBar;