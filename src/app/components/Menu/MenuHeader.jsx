// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const MenuHeaderStyle = styled.div`
  display: block;
  box-shadow: ${( { theme } ) => theme.shadow.z1 };
  background: ${( { theme } ) => theme.widget.background };
`;


const MenuHeader = (props) => {
    return (
        <MenuHeaderStyle>
            {props.children}
        </MenuHeaderStyle>
    );
}

export default MenuHeader;