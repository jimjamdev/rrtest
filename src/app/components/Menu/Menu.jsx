// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const MenuStyle = styled.div`
  display: block;
  box-shadow: ${( { theme } ) => theme.shadow.z1 };
  background: ${( { theme } ) => theme.widget.background };
`;


const Menu = (props) => {
    return (
        <MenuStyle {...props}>
            {props.children}
        </MenuStyle>
    );
}

export default Menu;